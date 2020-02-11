// Node.js Design Patters - Second Edition - Mario Casciaro & Luciano Mammino

const fs = require('fs');
const path = require('path');
const cache = {};

inconsistentRead = (filename, callback) => {
  if(cache[filename]) {
    callback(null, cache[filename]);
    // process.nextTick(callback, null, cache[filename]);
  } else {
    fs.readFile(path.join(__dirname, filename), 'utf8', (err, data) => {
      if(err) return callback(err);
      cache[filename] = data;
      callback(null, data);
    });
  }
};

createFileReader = filename => {
  const listeners = [];
  inconsistentRead(filename, (err, value) => {
    if(err) return console.error(err);
    listeners.forEach(listener => listener(value));
  });

  return {
    onDataReady: listener => listeners.push(listener),
  }
};

const reader1 = createFileReader('test.txt');

reader1.onDataReady(data => {
  console.log(`First call: ${data}`);

  const reader2 = createFileReader('test.txt');
  reader2.onDataReady(data => {
    console.log(`Second call: ${data}`);
  });
});
