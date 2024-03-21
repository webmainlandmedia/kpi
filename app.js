const v2  = require('./db/v2');
const v3  = require('./db/v3');
const v4  = require('./db/v4');
const v5  = require('./db/v5');
const v6  = require('./db/v6');
const v7  = require('./db/v7');
const v8 = require('./db/v8');
const v9 = require('./db/v9');
const v10 = require('./db/v10');
const v11  = require('./db/v11');
const v12  = require('./db/v12');
const v13  = require('./db/v13');
const v14  = require('./db/v14');
const v15  = require('./db/v15');
const v16  = require('./db/v16');
const v17  = require('./db/v17');
const v18  = require('./db/v18');
const v19  = require('./db/v19');
const v20  = require('./db/v20');
const v21  = require('./db/v21');
const v22  = require('./db/v22');
const v26  = require('./db/v26');
const v27  = require('./db/v27');
const v28  = require('./db/v28');
const v29  = require('./db/v29');
const v30  = require('./db/v30');
const v31  = require('./db/v31');
const v32  = require('./db/v32');
const v33  = require('./db/v33');
const { getYesterday } = require('./db/yesterday');

let col1 = getYesterday();
let col2;
let col3;
let col4;
let col5;
let col6;
let col7;
let col8;
let col9;
let col10;
let col11;
let col12;
let col13;
let col14;
let col15;
let col16;
let col17;
let col18;
let col19;
let col20;
let col21;
let col22;
let col23;
let col24;
let col25;
let col26;
let col27;
let col28;
let col29;
let col30;
let col31;
let col32;
let col33;

//2.猫咪头无内部匹配房源的客户
v2.then(unmatchedCount => {
    col2 = unmatchedCount;
    console.log('col2',col2);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    
//3.大黄无内部匹配房源的客户
v3.then(unmatchedCount => {
  col3 = unmatchedCount;
  console.log('col3',col3);
  })
  .catch(error => {
      console.error('Error:', error);
  });


  
//4.鹅无内部匹配房源的客户
v4.then(unmatchedCount => {
  col4 = unmatchedCount;
  console.log('col4',col4);
  })
  .catch(error => {
      console.error('Error:', error);
  });



//5.猫咪头无外部匹配房源的客户
v5.then(unmatchedCount => {
  col5 = unmatchedCount;
  console.log('col5',col5);
  })
  .catch(error => {
      console.error('Error:', error);
  });



  
//6.大黄无外部匹配房源的客户
v6.then(unmatchedCount => {
  col6 = unmatchedCount;
  console.log('col6',col6);
  })
  .catch(error => {
      console.error('Error:', error);
  });



  
//7.鹅无外部匹配房源的客户
v7.then(unmatchedCount => {
  col7 = unmatchedCount;
  console.log('col7',col7);
  })
  .catch(error => {
      console.error('Error:', error);
  });



//8.猫咪头新增注册用户数
v8.then(registerCount => {
  col8 = registerCount;
  console.log('col8',col8);
  })
  .catch(error => {
      console.error('Error:', error);
  });



//9.大黄新增注册用户数
v9.then(registerCount => {
  col9 = registerCount; 
  console.log('col9',col9);
})
.catch(error => {
    console.error('Error:', error);
});



//10.鹅新增注册用户数
v10.then(registerCount => {
  col10 = registerCount; 
  console.log('col10',col10);
})
.catch(error => {
    console.error('Error:', error);
});



//11.猫咪头无内部匹配房源的客户
v11.then(averageUnmatchedCount => {
  col11 = averageUnmatchedCount;
  console.log('col11',col11);
}).catch(error => {
  console.error('Error:', error);
});



//12.大黄无内部匹配房源的客户
v12.then(averageUnmatchedCount => {
  col12 = averageUnmatchedCount;
  console.log('col12',col12);
}).catch(error => {
  console.error('Error:', error);
});



//13.加拿大鹅妈妈无内部匹配房源的客户
v13.then(averageUnmatchedCount => {
  col13 = averageUnmatchedCount;
  console.log('col13',col13);
}).catch(error => {
  console.error('Error:', error);
});



//14.猫咪头无外部匹配房源的客户
v14.then(averageUnmatchedCount => {
  col14 = averageUnmatchedCount;
  console.log('col14',col14);
}).catch(error => {
  console.error('Error:', error);
});



//15.大黄无外部匹配房源的客户
v15.then(averageUnmatchedCount => {
  col15 = averageUnmatchedCount;
  console.log('col15',col15);
}).catch(error => {
  console.error('Error:', error);
});



//13.加拿大鹅妈妈无外部匹配房源的客户
v16.then(averageUnmatchedCount => {
  col16 = averageUnmatchedCount;
  console.log('col16',col16);
}).catch(error => {
  console.error('Error:', error);
});





//17.猫咪头当日看房数
v17.then(averageUnmatchedCount => {
  col17 = averageUnmatchedCount;
  console.log('col17',col17);
}).catch(error => {
  console.error('Error:', error);
});



//18.大黄当日看房数
v18.then(averageUnmatchedCount => {
  col18 = averageUnmatchedCount;
  console.log('col18',col18);
}).catch(error => {
  console.error('Error:', error);
});



//19.鹅当日看房数
v19.then(averageUnmatchedCount => {
  col19 = averageUnmatchedCount;
  console.log('col19',col19);
}).catch(error => {
  console.error('Error:', error);
});



//20.猫咪头看房率
v20.then(averageUnmatchedCount => {
  col20 = averageUnmatchedCount;
  console.log('col20',col20);
}).catch(error => {
  console.error('Error:', error);
});



//21.大黄看房率
v21.then(averageUnmatchedCount => {
  col21 = averageUnmatchedCount;
  console.log('col21',col21);
}).catch(error => {
  console.error('Error:', error);
});



//22.鹅看房率
v22.then(averageUnmatchedCount => {
  col22 = averageUnmatchedCount;
  console.log('col22',col22);
}).catch(error => {
  console.error('Error:', error);
});



//23.猫咪头未看房率
v20.then(averageUnmatchedCount => {
  col20 = averageUnmatchedCount;
  col23 = 1 - col20;
  console.log('col23',col23);
}).catch(error => {
  console.error('Error:', error);
});



//24.大黄未看房率
v21.then(averageUnmatchedCount => {
  col21 = averageUnmatchedCount;
  col24 = 1 - col21;
  console.log('col24',col24);
}).catch(error => {
  console.error('Error:', error);
});




//25.鹅未看房率
v22.then(averageUnmatchedCount => {
  col22 = averageUnmatchedCount;
  col25 = 1 - col22;
  console.log('col25',col25);
}).catch(error => {
  console.error('Error:', error);
});



//26.猫咪头外部匹配房源处理率
v26.then(processedRate => {
  col26 = processedRate;
  console.log('col26',col26);
}).catch(error => {
  console.error('Error:', error);
});



//27.大黄外部匹配房源处理率
v27.then(processedRate => {
  col27 = processedRate;
  console.log('col27',col27);
}).catch(error => {
  console.error('Error:', error);
});



//28.鹅外部匹配房源处理率
v28.then(processedRate => {
  col28 = processedRate;
  console.log('col28',col28);
}).catch(error => {
  console.error('Error:', error);
});



//29.猫咪头内部匹配房源处理率
v29.then(processedRate => {
  col29 = processedRate;
  console.log('col29',col29);
}).catch(error => {
  console.error('Error:', error);
});



//30.大黄内部匹配房源处理率
v30.then(processedRate => {
  col30 = processedRate;
  console.log('col30',col30);
}).catch(error => {
  console.error('Error:', error);
});



//31.鹅内部匹配房源处理率
v31.then(processedRate => {
  col31 = processedRate;
  console.log('col31',col31);
}).catch(error => {
  console.error('Error:', error);
});




//32.未匹配小助手用户数
v32.then(unassist => {
  col32 = unassist;
  console.log('col32',col32);
}).catch(error => {
  console.error('Error:', error);
});



//33.当天内部新增房源数
v33.then(newHouse => {
  col33 = newHouse;
  console.log('col33',col33);
}).catch(error => {
  console.error('Error:', error);
});





