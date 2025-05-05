import fs from 'fs';
import pdfParse from 'pdf-parse';

const dataBuffer = fs.readFileSync('./public/report.pdf');

pdfParse(dataBuffer).then(function (data) {
  console.log(data.text);
}).catch(function (error) {
  console.error(error);
});
