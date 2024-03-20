//未匹配小助手用户数

const pool = require('../database');
const { getYesterday } = require('./yesterday');

const yesterday = getYesterday();

// Function to determine the total number of customers without an assistant
function getUnassist() {
    return new Promise((resolve, reject) => {
        const checkQuery = `
            SELECT COUNT(*) AS unmatchedCount
            FROM \`customers\`
            WHERE Assistant_name IS NULL
            AND CAST(Submission_Date AS DATE) = '${yesterday}'`;

        pool.query(checkQuery, (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            const unmatchedCount = results[0].unmatchedCount;
            resolve(unmatchedCount);
        });
    });
}

// Example usage
module.exports = Promise.all([getUnassist()])
    .then(([unmatchedCount]) => {
        return unmatchedCount;
    })
    .catch(error => {
        console.error('Error:', error);
    });

