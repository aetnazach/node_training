new Promise(() => {
  throw new Error('Unresolved')
});

(new Promise((resolve, reject) => {
  resolve('Hello');
  resolve('World');
})).then(console.log);
