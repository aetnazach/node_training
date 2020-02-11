const fs = require('fs');
const path = require('path');
const { parseString } = require('xml2js');

fs.readFile(path.join(__dirname, './test.xml'), 'utf-8', (err, buffer) => {
  if(err) return console.error(err);

  parseString(buffer.toString(), (err, result) => {
    if(err) return console.error(err);
    console.log(JSON.stringify(result));
  });
});