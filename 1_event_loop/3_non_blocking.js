// https://nodejs.org/de/docs/guides/blocking-vs-non-blocking/

const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const start = performance.now();
process.nextTick(console.log, 'Called in event loop during fs');

console.log('Called sync before fs');
fs.readFile(path.join(__dirname, './test.txt'), 'utf-8', (err, file) => {
  if(err) return console.error(err);
  console.log(file.toString(), performance.now() - start);
});
console.log('Called sync after readFile invoked');