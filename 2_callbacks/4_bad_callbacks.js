const fs = require('fs');
const path = require('path');
const { parseString } = require('xml2js');

const readFile = cb => {
  fs.readFile(path.join(__dirname, './testBAD.xml'), 'utf-8', (err, buffer) => {
    if(err) throw err;

    parseString(buffer.toString(), (err, result) => {
      if(err) return cb(err);
      cb(null, result);
      cb('Error');
      cb(null, 'Called');
    });
  });
}

readFile((err, result) => {
  if(err) return console.error(err);
  console.log(result.todo.item);
});