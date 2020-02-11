const promise = err => new Promise((resolve, reject) => {
  if(err) return reject(new Error(err));
  setImmediate(() => resolve(1));
});

promise()
  .then(console.log)
  .catch(console.error);

promise('I AM AN ERROR')
  .then(console.log)
  .catch(console.error);