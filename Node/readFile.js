
// Approiach 1 : Reads the created file
// const fs = require('fs');
// const file = fs.readFileSync('7_Jan-26(coreModules)/HelloWorld.txt','utf-8');
// console.log(file);


// Best Approach -- Reads the created file
const fs = require('fs');
const path = require('path');

const filePath = path.join(
    __dirname,'HelloWorld.txt');
const file = fs.readFileSync(filePath, 'utf-8');
console.log(file);




/**
 NOTE:
 Universal template (copy forever)
 -----------------------------------
const filePath = path.join(__dirname, '..', 'folderName', 'file.txt');
 */