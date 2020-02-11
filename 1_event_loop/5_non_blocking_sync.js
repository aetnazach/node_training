const crypto = require('crypto');
const { performance } = require('perf_hooks');

const randomString = () => crypto.randomBytes(100).toString('hex');

const setImmediatePromise = () => new Promise(resolve => (
    process.nextTick(resolve)
    // setImmediate(() => resolve())
));

let iteration = 0;

setImmediate(async () => {
  console.log('Start');
  const t = performance.now();
  const hash = crypto.createHash('sha256');
  for (let i = 0; i < 10e6; i++) {
    hash.update(randomString());
    await setImmediatePromise()
    iteration = i;
  }
  console.log(hash.digest('hex') + '\n', 'in', performance.now() - t);
});

setInterval(() => console.log(`Iteration ${iteration}`), 1000);