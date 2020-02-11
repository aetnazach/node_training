const async = require('async');
const fs = require('fs');
const path = require('path');
const { parseString } = require('xml2js');

async.waterfall([
  cb => {
    fs.readFile(path.join(__dirname, './test.xml'), 'utf-8', (err, buffer) => {
      if(err) return cb(err);
      cb(null, buffer.toString());
    });
  },

  (file, cb) => {
    parseString(file, (err, result) => {
      if(err) return cb(err);
      cb(null, result);
    });
  }
], (err, result) => {
  if(err) return console.error(err);
  console.log(JSON.stringify(result));
});