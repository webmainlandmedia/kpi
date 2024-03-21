//猫咪头无外部匹配房源的客户

const pool = require('../database');
const { getYesterday } = require('./yesterday');

const yesterday = getYesterday();

function getUnmatchedCustomerCount() {
    return new Promise((resolve, reject) => {
        const checkQuery = `
            SELECT UserId
            FROM \`customers\`
            WHERE CAST(datatime AS DATE) = '${yesterday}'
            AND Assistant_name = '猫咪头'`;

        pool.query(checkQuery, (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            const userIds = results.map(row => row.UserId); // Extracting UserId
            resolve(userIds);
        });
    });
}

function countUnmatchedUserIds(userIds) {
    return new Promise((resolve, reject) => {
        const promises = userIds.map(userId => {
            return new Promise((resolve, reject) => {
                const countQuery = `
                    SELECT 
                        (SELECT COUNT(*) FROM \`old_richmond_match\` WHERE UserId = '${userId}') AS richmondCount,
                        (SELECT COUNT(*) FROM \`old_vancouver_match\` WHERE UserId = '${userId}') AS vancouverCount,
                        (SELECT COUNT(*) FROM \`old_coquitlam_match\` WHERE UserId = '${userId}') AS coquitlamCount,
                        (SELECT COUNT(*) FROM \`old_burnaby_match\` WHERE UserId = '${userId}') AS burnabyCount`;

                pool.query(countQuery, (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    const { richmondCount, vancouverCount, coquitlamCount, burnabyCount } = results[0];
                    const totalCount = richmondCount + vancouverCount + coquitlamCount + burnabyCount;
                    if (totalCount === 0) {
                        resolve(1); // 1 indicates the user is unmatched
                    } else {
                        resolve(0); // 0 indicates the user is matched
                    }
                });
            });
        });

        Promise.all(promises)
            .then(results => {
                const unmatchedCount = results.reduce((acc, curr) => acc + curr, 0);
                resolve(unmatchedCount);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports = getUnmatchedCustomerCount()
    .then(userIds => {
        return countUnmatchedUserIds(userIds);
    })
    .catch(error => {
        console.error('Error:', error);
    });



