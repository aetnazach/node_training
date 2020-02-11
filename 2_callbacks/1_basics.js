const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, './test.json'), 'utf-8', (err, buffer) => {
  if(err) return console.error(err);
  console.log(JSON.parse(buffer.toString()));
});