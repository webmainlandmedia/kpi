//鹅当日看房数

const pool = require('../database');
const { getYesterday } = require('./yesterday');

const yesterday = getYesterday();

// SQL query to count the number of records
function getView() {
    return new Promise((resolve, reject) => {
        const checkQuery = `
            SELECT SUM(count) AS total_count
            FROM (
                SELECT COUNT(*) AS count
                FROM \`old_internal_richmond_match\`
                WHERE note = '租客要求看房' AND customer_assistant_name = '加拿大鹅妈妈'
                AND CAST(LastUpdatetime AS DATE) = '${yesterday}'
                UNION
                SELECT COUNT(*) AS count
                FROM \`old_internal_vancouver_match\`
                WHERE note = '租客要求看房' AND customer_assistant_name = '加拿大鹅妈妈'
                AND CAST(LastUpdatetime AS DATE) = '${yesterday}'
                UNION
                SELECT COUNT(*) AS count
                FROM \`old_internal_coquitlam_match\`
                WHERE note = '租客要求看房' AND customer_assistant_name = '加拿大鹅妈妈'
                AND CAST(LastUpdatetime AS DATE) = '${yesterday}'
                UNION
                SELECT COUNT(*) AS count
                FROM \`old_internal_burnaby_match\`
                WHERE note = '租客要求看房' AND customer_assistant_name = '加拿大鹅妈妈'
                AND CAST(LastUpdatetime AS DATE) = '${yesterday}'
            ) AS subquery;`;

        pool.query(checkQuery, (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            const totalCount = results[0].total_count; // Extract the total_count value
            resolve(totalCount);
        });
    });
}

// Exporting a Promise.all() call that wraps the getView() function
module.exports = Promise.all([getView()])
    .then(([totalCount]) => {
        return totalCount;
    })
    .catch(error => {
        console.error('Error:', error);
    });