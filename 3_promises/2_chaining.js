const fs = require('fs').promises;
const path = require('path');
const xml2js = require('xml2js');
const util = require('util');

const parseString = util.promisify(xml2js.parseString);

fs.readFile(path.join(__dirname, './test.xml'), 'utf-8')
  .then(buffer => parseString(buffer.toString()))
  .then(obj => console.log(JSON.stringify(obj)))
  .catch(console.error);

fs.readFile(path.join(__dirname, './testBAD.'), 'utf-8')
  .then(buffer => parseString(buffer.toString()))
  .then(obj => console.log(JSON.stringify(obj)))
  .catch(console.error);

fs.readFile(path.join(__dirname, './test.json'), 'utf-8')
  .then(buffer => parseString(buffer.toString()))
  .then(obj => console.log(JSON.stringify(obj)))
  .catch(console.error);

// DON'T DO THIS!!!
fs.readFile(path.join(__dirname, './test.json'), 'utf-8')
  .then(buffer => {
    parseString(buffer.toString())
      .then(obj => console.log(JSON.stringify(obj)))
      .catch(console.error); // Comment out for unhandled promise rejection warning
  })
  .catch(console.error);