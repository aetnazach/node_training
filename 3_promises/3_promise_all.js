const fs = require('fs').promises;
const path = require('path');

Promise.all([
  fs.readFile('./test.json', 'utf-8'),
  fs.readFile('./test.xml', 'utf-8')
]).then(console.log).catch(console.error);