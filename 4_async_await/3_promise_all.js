const fs = require('fs').promises;
const path = require('path');

const run = async () => {
  try {
    console.log(await Promise.all([
      fs.readFile('./test.json', 'utf-8'),
      fs.readFile('./test.xml', 'utf-8')
    ]));
  } catch (e) {
    console.error(e);
  }
};

run();