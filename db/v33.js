//当天内部新增房源数

const pool = require('../database');
const { getYesterday } = require('./yesterday');

const yesterday = getYesterday();

// Function to determine the total number of customers without an assistant
function getNewHouse() {
  return new Promise((resolve, reject) => {
      const checkQuery = `
        SELECT COUNT(*) AS newHouse
        FROM \`landlord\`
        WHERE CAST(creatingtime AS DATE) = '${yesterday}'`;

      pool.query(checkQuery, (error, results) => {
          if (error) {
              reject(error);
              return;
          }
          const newHouse = results[0].newHouse;
          resolve(newHouse);
      });
  });
}

// Example usage
module.exports = Promise.all([getNewHouse()])
  .then(([newHouse]) => {
      return newHouse;
  })
  .catch(error => {
      console.error('Error:', error);
  });
