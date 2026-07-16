import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('test.pdf'));
try {
  doc.text('a² b³ c⁴');
  console.log('SUCCESS');
} catch (e) {
  console.error('ERROR:', e.message);
}
doc.end();
