const fs = require('fs').promises;
const path = require('path');

new Promise(async () => {
  throw new Error('Unresolved')
});

const files = [];

[
  './test.json',
  './test.xml'
].forEach(async filePath => {
  files.push(await fs.readFile(path.join(__dirname, filePath), 'utf-8'));
});

console.log('Files:', files);
