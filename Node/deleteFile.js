

/*✅ CASE 1: Delete file in the SAME folder as fs.js
      ------------------------------------------            */
const { fips } = require('crypto');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'NewFile.txt');

if(fs.existsSync(filePath)){
    fs.unlinkSync(filePath);
    console.log('File deleted Succesfully');
}else{
    console.log('File does not exist');
    
}

/*{✅ CASE 2: Delete file in a DIFFERENT folder} 
const filePath = path.join(
  __dirname,
  '..',
  'data',
  'HelloWorld.txt'
);
fs.unlinkSync(filePath);

✅ CASE 3: Async deletion (recommended in real apps)
fs.unlink(filePath, (err) => {
  if (err) {
    console.error('❌ Error deleting file:', err.message);
    return;
  }
  console.log('✅ File deleted (async)');
});

*/

