//猫咪头无外部匹配房源的客户

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
            AND Assistant_name = '猫咪头'
            AND UserId NOT IN (
                SELECT DISTINCT UserId
                FROM (
                    SELECT UserId FROM \`old_richmond_match\`
                    UNION
                    SELECT UserId FROM \`old_vancouver_match\`
                    UNION
                    SELECT UserId FROM \`old_coquitlam_match\`
                    UNION
                    SELECT UserId FROM \`old_burnaby_match\`
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


// Example usage
module.exports = Promise.all([getUnmatchedCustomerCount()])
    .then(([unmatchedCount]) => {
        return unmatchedCount;
    })
    .catch(error => {
        console.error('Error:', error);
    });

