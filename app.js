const  v1  = require('./db/v1');
const  v2  = require('./db/v2');

let col1;
v1()
    .then(unmatchedCount => {
        col1 =  unmatchedCount;
        console.log(col1)
        // Add your code here to use the unmatchedCount value
    })
    .catch(error => {
        console.error('Error:', error);
    });

    
let col2;
v2()
    .then(unmatchedCount => {
        col2 =  unmatchedCount;
        console.log(col2)
        // Add your code here to use the unmatchedCount value
    })
    .catch(error => {
        console.error('Error:', error);
    });