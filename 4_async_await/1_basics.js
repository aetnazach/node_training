const promise = err => new Promise((resolve, reject) => {
  if(err) return reject(new Error(err));
  setImmediate(() => resolve(1));
});

const run = async () => {
  console.log(await promise());
  try {
    await promise('I AM AN ERROR');
  } catch (e) {
    console.error(e);
  }
  return 'I AM A PROMISE!!!'
};

const error = async () => {
  throw new Error('Something bad happened');
};

run().then(console.log);
error().catch(console.error);