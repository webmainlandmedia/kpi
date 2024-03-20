//大黄内部匹配房源处理率

const pool = require('../database');
const { getYesterday } = require('./yesterday');

const yesterday = getYesterday();

function getprocessedRate() {
    return new Promise((resolve, reject) => {
        const query1 = `
            SELECT SUM(count) AS total_count
            FROM (
                SELECT COUNT(*) AS count
                FROM \`old_internal_richmond_match\`
                WHERE customer_assistant_name = '黄金猎犬，大黄' AND note != '' 
                AND CAST(datatime AS DATE) = '${yesterday}'
                UNION
                SELECT COUNT(*) AS count
                FROM \`old_internal_vancouver_match\`
                WHERE customer_assistant_name = '黄金猎犬，大黄' AND note != '' 
                AND CAST(datatime AS DATE) = '${yesterday}'
                UNION
                SELECT COUNT(*) AS count
                FROM \`old_internal_coquitlam_match\`
                WHERE customer_assistant_name = '黄金猎犬，大黄' AND note != '' 
                AND CAST(datatime AS DATE) = '${yesterday}'
                UNION
                SELECT COUNT(*) AS count
                FROM \`old_internal_burnaby_match\`
                WHERE customer_assistant_name = '黄金猎犬，大黄' AND note != '' 
                AND CAST(datatime AS DATE) = '${yesterday}'
            ) AS subquery;`;

        const query2 = `
            SELECT SUM(count) AS total_count
            FROM (
                SELECT COUNT(*) AS count
                FROM \`old_internal_richmond_match\`
                WHERE customer_assistant_name = '黄金猎犬，大黄'
                AND CAST(datatime AS DATE) = '${yesterday}'
                UNION
                SELECT COUNT(*) AS count
                FROM \`old_internal_vancouver_match\`
                WHERE customer_assistant_name = '黄金猎犬，大黄'
                AND CAST(datatime AS DATE) = '${yesterday}'
                UNION
                SELECT COUNT(*) AS count
                FROM \`old_internal_coquitlam_match\`
                WHERE customer_assistant_name = '黄金猎犬，大黄'
                AND CAST(datatime AS DATE) = '${yesterday}'
                UNION
                SELECT COUNT(*) AS count
                FROM \`old_internal_burnaby_match\`
                WHERE customer_assistant_name = '黄金猎犬，大黄'
                AND CAST(datatime AS DATE) = '${yesterday}'
            ) AS subquery;`;

        pool.query(query1, (error, results1) => {
            if (error) {
                reject(error);
                return;
            }
            const total = results1[0].total_count;

            pool.query(query2, (error, results2) => {
                if (error) {
                    reject(error);
                    return;
                }
                const processed = results2[0].total_count;
                let processedRate = 1;
                if  (processed != 0) {
                  processedRate = total / processed;
                }
                resolve(processedRate.toFixed(4));
            });
        });
    });
}

// Exporting a Promise.all() call that wraps the getprocessedRate() function
module.exports = Promise.all([getprocessedRate()])
    .then(([processedRate]) => {
        return processedRate;
    })
    .catch(error => {
        console.error('Error:', error);
    });