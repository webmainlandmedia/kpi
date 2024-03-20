//加拿大鹅妈妈看房率

const pool = require('../database');
const { getYesterday } = require('./yesterday');

const yesterday = getYesterday();

function getViewRate() {
  return new Promise((resolve, reject) => {
      const query1 = `
          SELECT COUNT(*) AS totalForms
          FROM \`UserForm\`
          WHERE Assistant_name = '加拿大鹅妈妈'`;

      const query2 = `
          SELECT COUNT(*) AS viewForms
          FROM \`UserForm\`
          WHERE rent_status = '看房客户'
          AND Assistant_name = '加拿大鹅妈妈'`;

      pool.query(query1, (error, results1) => {
          if (error) {
              reject(error);
              return;
          }
          const totalForms = results1[0].totalForms;

          pool.query(query2, (error, results2) => {
              if (error) {
                  reject(error);
                  return;
              }
              const viewForms = results2[0].viewForms;

              const viewRate = viewForms / totalForms;
              resolve(viewRate);
          });
      });
  });
}

// Exporting a Promise.all() call that wraps the getViewRate() function
module.exports = Promise.all([getViewRate()])
  .then(([viewRate]) => {
      return parseFloat(viewRate.toFixed(4));;
  })
  .catch(error => {
      console.error('Error:', error);
  });