//鹅内部覆盖率

const pool = require('../database');
const { getYesterday } = require('./yesterday');

const yesterday = getYesterday();

// Function to determine the total number of customers without internal matches
function getUnmatchedCustomerCount() {
    return new Promise((resolve, reject) => {
        const checkQuery = `
            SELECT COUNT(*) AS unmatched_count
            FROM \`customers\`
            WHERE CAST(datatime AS DATE) = '${yesterday}'
            AND Assistant_name = '加拿大鹅妈妈'
            AND UserId NOT IN (
                SELECT DISTINCT UserId
                FROM (
                    SELECT UserId FROM \`old_internal_richmond_match\`
                    UNION
                    SELECT UserId FROM \`old_internal_vancouver_match\`
                    UNION
                    SELECT UserId FROM \`old_internal_coquitlam_match\`
                    UNION
                    SELECT UserId FROM \`old_internal_burnaby_match\`
                ) AS internal_matches
            )`;

        pool.query(checkQuery, (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            const unmatchedCount = results[0].unmatched_count;
            resolve(unmatchedCount);
        });
    });
}

// Function to retrieve the user IDs of customers handled by "加拿大鹅妈妈"
function getCatAssistantCustomerIds() {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT UserId
            FROM \`customers\`
            WHERE CAST(datatime AS DATE) = '${yesterday}'
            AND Assistant_name = '加拿大鹅妈妈'`,
            (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                const userIds = results.map(row => row.UserId);
                resolve(userIds);
            }
        );
    });
}

module.exports = Promise.all([getUnmatchedCustomerCount(), getCatAssistantCustomerIds()])
    .then(([unmatchedCount, userIds]) => {
        const averageUnmatchedCountPerUser = unmatchedCount / userIds.length;
        return parseFloat(averageUnmatchedCountPerUser.toFixed(4)); // Retain 4 decimal places
    })
    .catch(error => {
        console.error('Error:', error);
    });