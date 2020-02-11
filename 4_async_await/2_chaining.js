const fs = require('fs').promises;
const path = require('path');
const xml2js = require('xml2js');
const util = require('util');

const parseString = util.promisify(xml2js.parseString);

const run = async () => {
  try {
    const buffer = await fs.readFile(path.join(__dirname, './test.xml'), 'utf-8');
    console.log(await parseString(buffer.toString()));
  } catch (e) {
    console.error(e);
  }

  try {
    const buffer = await fs.readFile(path.join(__dirname, './testBAD.xml'), 'utf-8');
    console.log(await parseString(buffer.toString()));
  } catch (e) {
    console.error(e);
  }

  try {
    const buffer = await fs.readFile(path.join(__dirname, './test.json'), 'utf-8');
    console.log(await parseString(buffer.toString()));
  } catch (e) {
    console.error(e);
  }
}

run();