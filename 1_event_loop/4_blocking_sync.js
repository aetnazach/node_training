// https://snyk.io/blog/nodejs-how-even-quick-async-functions-can-block-the-event-loop-starve-io/
const crypto = require('crypto');
const { performance } = require('perf_hooks');

const randomString = () => crypto.randomBytes(100).toString('hex');

console.log('Start');
const t = performance.now();
const hash = crypto.createHash('sha256');
for (let i = 0; i < 10e6; i++) {
  hash.update(randomString());
}
console.log(hash.digest('hex') + '\n', 'in', performance.now() - t);