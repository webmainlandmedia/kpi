const v2  = require('./db/v2');
const v3  = require('./db/v3');
const v4  = require('./db/v4');
// const v5  = require('./db/v5');
const v8 = require('./db/v8');
const v9 = require('./db/v9');
const v10 = require('./db/v10');
const v11  = require('./db/v11');
const v12  = require('./db/v12');
const v13  = require('./db/v13');
const v17  = require('./db/v17');
const v18  = require('./db/v18');
const v19  = require('./db/v19');
const { getYesterday } = require('./db/yesterday');

let col1 = getYesterday();
let col2;
let col3;
let col4;
let col5;
let col8;
let col9;
let col10;
let col11;
let col12;
let col13;
let col17;
let col18;
let col19;

//猫咪头无内部匹配房源的客户
v2.then(unmatchedCount => {
    col2 = unmatchedCount;
    console.log('col2',col2);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    
//大黄无内部匹配房源的客户
v3.then(unmatchedCount => {
  col3 = unmatchedCount;
  console.log('col3',col3);
  })
  .catch(error => {
      console.error('Error:', error);
  });


  
//鹅无内部匹配房源的客户
v4.then(unmatchedCount => {
  col4 = unmatchedCount;
  console.log('col4',col4);
  })
  .catch(error => {
      console.error('Error:', error);
  });



//猫咪头无外部匹配房源的客户
// v5.then(unmatchedCount => {
//   col5 = unmatchedCount;
//   console.log('col5',col5);
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });



//猫咪头新增注册用户数
v8.then(registerCount => {
  col8 = registerCount;
  console.log('col8',col8);
  })
  .catch(error => {
      console.error('Error:', error);
  });



//大黄新增注册用户数
v9.then(registerCount => {
  col9 = registerCount; 
  console.log('col9',col9);
})
.catch(error => {
    console.error('Error:', error);
});



//鹅新增注册用户数
v9.then(registerCount => {
  col10 = registerCount; 
  console.log('col10',col10);
})
.catch(error => {
    console.error('Error:', error);
});



//猫咪头无内部匹配房源的客户
v11.then(averageUnmatchedCount => {
  col11 = averageUnmatchedCount;
  console.log('col11',col11);
}).catch(error => {
  console.error('Error:', error);
});

//大黄无内部匹配房源的客户
v12.then(averageUnmatchedCount => {
  col12 = averageUnmatchedCount;
  console.log('col12',col12);
}).catch(error => {
  console.error('Error:', error);
});

//加拿大鹅妈妈无内部匹配房源的客户
v13.then(averageUnmatchedCount => {
  col13 = averageUnmatchedCount;
  console.log('col13',col13);
}).catch(error => {
  console.error('Error:', error);
});



//猫咪头当日看房数
v17.then(averageUnmatchedCount => {
  col17 = averageUnmatchedCount;
  console.log('col17',col17);
}).catch(error => {
  console.error('Error:', error);
});



//大黄当日看房数
v18.then(averageUnmatchedCount => {
  col18 = averageUnmatchedCount;
  console.log('col18',col18);
}).catch(error => {
  console.error('Error:', error);
});



//鹅当日看房数
v19.then(averageUnmatchedCount => {
  col19 = averageUnmatchedCount;
  console.log('col19',col19);
}).catch(error => {
  console.error('Error:', error);
});




