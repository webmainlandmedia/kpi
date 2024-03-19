//大黄新增注册用户数

const pool = require('../database');
const { getYesterday } = require('./yesterday');


const yesterday = getYesterday();

// SQL query to count the number of records
function getRegisterCount() {
  return new Promise((resolve, reject) => {
      const checkQuery = `
          SELECT COUNT(*)
          FROM \`UserForm\`
          WHERE CAST(Submission_Date AS DATE) = '${yesterday}'
          AND Assistant_name = '黄金猎犬，大黄'`;

      pool.query(checkQuery, (error, results) => {
          if (error) {
              reject(error);
              return;
          }
          const registerCount = results[0]['COUNT(*)']; // Extract the count value
          resolve(registerCount);
      });
  });
}

// Exporting a Promise.all() call that wraps the getRegisterCount() function
module.exports = Promise.all([getRegisterCount()])
  .then(([registerCount]) => {
      return registerCount;
  })
  .catch(error => {
      console.error('Error:', error);
  });
