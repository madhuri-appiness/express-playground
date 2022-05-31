const fs = require('fs');

const bufferData =fs.readFileSync('1-json.json');
const stridata = bufferData.toString();

const data = JSON.parse(stridata);

data.title = 'Madhuri';
data.desc ='She is good';

const DataJson = JSON.stringify(data);
fs.writeFileSync('1-json.json',DataJson)
