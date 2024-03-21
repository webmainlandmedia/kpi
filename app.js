const pool = require('./database');

const { getYesterday } = require('./db/yesterday');
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

let results = [];


//1. 日期
results.push(getYesterday());



//2.猫咪头无内部匹配房源的客户
results.push(
  v2.then(unmatchedCount => {
      return unmatchedCount;
    })
    .catch(error => {
        console.error('Error:', error);
  })
);


    
//3.大黄无内部匹配房源的客户
results.push(
  v3.then(unmatchedCount => {
    return unmatchedCount;
    })
    .catch(error => {
        console.error('Error:', error);
    })
);


  
//4.鹅无内部匹配房源的客户
results.push(
  v4.then(unmatchedCount => {
    return unmatchedCount;
    })
    .catch(error => {
        console.error('Error:', error);
    })
);



//5.猫咪头无外部匹配房源的客户
results.push(
  v5.then(unmatchedCount => {
    return unmatchedCount;
    })
    .catch(error => {
        console.error('Error:', error);
    })
);



  
//6.大黄无外部匹配房源的客户
results.push(
  v6.then(unmatchedCount => {
    return unmatchedCount;
    })
    .catch(error => {
        console.error('Error:', error);
    })
);



  
//7.鹅无外部匹配房源的客户
results.push(
  v7.then(unmatchedCount => {
    return unmatchedCount;
    })
    .catch(error => {
        console.error('Error:', error);
    })
);



//8.猫咪头新增注册用户数
results.push(
  v8.then(registerCount => {
    return registerCount;
    })
    .catch(error => {
        console.error('Error:', error);
    })
);



//9.大黄新增注册用户数
results.push(
  v9.then(registerCount => {
    return registerCount; 
  })
  .catch(error => {
      console.error('Error:', error);
  })
);



//10.鹅新增注册用户数
results.push(
  v10.then(registerCount => {
    return registerCount; 
  })
  .catch(error => {
      console.error('Error:', error);
  })
);



//11.猫咪头无内部匹配房源的客户
results.push(
  v11.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//12.大黄无内部匹配房源的客户
results.push(
  v12.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//13.加拿大鹅妈妈无内部匹配房源的客户
results.push(
  v13.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//14.猫咪头无外部匹配房源的客户
results.push(
  v14.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//15.大黄无外部匹配房源的客户
results.push(
  v15.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//16.加拿大鹅妈妈无外部匹配房源的客户
results.push(
  v16.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);





//17.猫咪头当日看房数
results.push(
  v17.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//18.大黄当日看房数
results.push(
  v18.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);


//19.鹅当日看房数
results.push(
  v19.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//20.猫咪头看房率
results.push(
  v20.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//21.大黄看房率
results.push(
  v21.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);


//22.鹅看房率
results.push(
  v22.then(averageUnmatchedCount => {
    return averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//23.猫咪头未看房率
results.push(
  v20.then(averageUnmatchedCount => {
    return 1 - averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//24.大黄未看房率
results.push(
  v21.then(averageUnmatchedCount => {
    return 1 - averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);




//25.鹅未看房率
results.push(
  v22.then(averageUnmatchedCount => {
    return 1 - averageUnmatchedCount;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//26.猫咪头外部匹配房源处理率
results.push(
  v26.then(processedRate => {
    return processedRate;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//27.大黄外部匹配房源处理率
results.push(
  v27.then(processedRate => {
    return processedRate;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//28.鹅外部匹配房源处理率
results.push(
  v28.then(processedRate => {
    return processedRate;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//29.猫咪头内部匹配房源处理率
results.push(
  v29.then(processedRate => {
    return processedRate;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//30.大黄内部匹配房源处理率
results.push(
  v30.then(processedRate => {
    return processedRate;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//31.鹅内部匹配房源处理率
results.push(
  v31.then(processedRate => {
    return processedRate;
  }).catch(error => {
    console.error('Error:', error);
  })
);




//32.未匹配小助手用户数
results.push(
  v32.then(unassist => {
    return unassist;
  }).catch(error => {
    console.error('Error:', error);
  })
);



//33.当天内部新增房源数
results.push(
  v33.then(newHouse => {
    return newHouse;
  }).catch(error => {
    console.error('Error:', error);
  })
);





// 使用 Promise.all 等待所有结果解析
Promise.all(results)
    .then(values => {
        // 将查询结果存储在变量中
        let [col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12, col13, col14, col15, col16, col17, col18, col19, col20, col21, col22, col23, col24, col25, col26, col27, col28, col29, col30, col31, col32, col33] = values;

        // 构建 SQL 查询语句
        let queryString = `
            INSERT INTO kpi (日期, 猫咪头无内部匹配房源的客户, 大黄无内部匹配房源的客户数, 鹅无内部匹配房源的客户数, 猫咪头无外部匹配房源的客户, 大黄无外部匹配房源的客户数, 鹅无外部匹配房源的客户数, 猫咪头新增注册用户数, 大黄新增注册用户数, 鹅新增注册用户数, 猫咪头内部覆盖率, 大黄内部覆盖率, 鹅内部覆盖率, 猫咪头外部覆盖率, 大黄外部覆盖率, 鹅外部覆盖率, 猫咪头当日看房数, 大黄当日看房数, 鹅当日看房数, 猫咪头看房率, 大黄看房率, 鹅看房率, 猫咪头未看房率, 大黄未看房率, 鹅未看房率, 猫咪头外部匹配房源处理率, 大黄外部匹配房源处理率, 鹅外部匹配房源处理率, 猫咪头内部匹配房源处理率, 大黄内部匹配房源处理率, 鹅内部匹配房源处理率, 未匹配小助手用户数, 当天内部新增房源数) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        // 提供查询结果的值数组
        let valuesForQuery = [
            col1, col2, col3, col4, col5, col6, col7, col8, col9, col10,
            col11, col12, col13, col14, col15, col16, col17, col18, col19, col20,
            col21, col22, col23, col24, col25, col26, col27, col28, col29, col30,
            col31, col32, col33
        ];

        // 执行查询
        pool.query(queryString, valuesForQuery, (error, results, fields) => {
            if (error) {
                console.error('Error inserting into kpi table:', error);
            } else {
                console.log('Data inserted into kpi table successfully.');
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
