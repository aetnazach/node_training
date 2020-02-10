// https://nodejs.org/de/docs/guides/blocking-vs-non-blocking/

const fs = require('fs');
const path = require('path');

process.nextTick(console.log, 'Event loop called after fs');
console.log('Called before fs');
console.log(fs.readFileSync(path.join(__dirname, './test.txt'), 'utf-8').toString());
console.log('Sync called after fs');