// ✅here we Write (create + save) a file — SAME folder
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'NewFile.txt');

// Sync...
// fs.writeFileSync(
//     filePath,
//     'Hello Master Ray 👋\nThis file is created using fs.writeFileSync()',
//     'utf-8'
// )

//ASync...
fs.writeFile(
    filePath,
    'Hello Master Ray 👋\nThis file is created using fs.writeFileSync() Async'
    ,(err)=>{}
)
console.log('File written Successfully');
