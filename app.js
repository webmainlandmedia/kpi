const  v2  = require('./db/v2');
const  v3  = require('./db/v3');
const v4  = require('./db/v4');

let col2;
let col3;
let col4;

//猫咪头无内部匹配房源的客户
v2.then(averageUnmatchedCount => {
  col2 = averageUnmatchedCount;
  console.log( averageUnmatchedCount);
}).catch(error => {
  console.error('Error:', error);
});

//大黄无内部匹配房源的客户
v3.then(averageUnmatchedCount => {
  col3 = averageUnmatchedCount;
  console.log( averageUnmatchedCount);
}).catch(error => {
  console.error('Error:', error);
});

//加拿大鹅妈妈无内部匹配房源的客户
v4.then(averageUnmatchedCount => {
  col4 = averageUnmatchedCount;
  console.log( averageUnmatchedCount);
}).catch(error => {
  console.error('Error:', error);
});

