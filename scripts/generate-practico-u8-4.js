import PDFDocument from 'pdfkit';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputDir = join(__dirname, '../public/pdfs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const COLOR_TITLE = '#4c1d95';
const COLOR_ITEM = '#0f172a';
const M = 50;

function makeDoc(title, subtitle, outName) {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 50, bottom: 45, left: M, right: M }, bufferPages: true });
  const out = fs.createWriteStream(join(outputDir, outName));
  doc.pipe(out);
  doc.fontSize(20).fillColor('#312e81').text(title, M, 70, { width: 500 });
  doc.fontSize(11).fillColor('#7c3aed').text(subtitle, M, 95, { width: 500 });
  doc.fontSize(10).fillColor('#0f172a').text('Unidad 8 - Sistemas de ecuaciones', M, 115);
  doc.moveDown(1.5);
  return doc;
}

function endDoc(doc, outName) {
  doc.end();
  console.log('OK ' + outName);
}

// ── 8-1 Sustitución ──────────────────────────────────────────────
{
  const doc = makeDoc('Práctico: Sustitución', 'Método de sustitución - Ejercicios analíticos', '8-1-sustitucion.pdf');
  const contentW = doc.page.width - M * 2;

  doc.fontSize(12).fillColor('#4c1d95').text('Ejercicios de sustitución', M, doc.y + 10);
  doc.moveDown(0.6);

  const items = [
    { t: 'a) x + y = 7  ;  x - y = 1', lines: 4 },
    { t: 'b) 2x + y = 8  ;  x + y = 5', lines: 4 },
    { t: 'c) 3x - y = 4  ;  x + 2y = 6', lines: 4 },
    { t: 'd) 4x + y = 9  ;  2x - 3y = 1', lines: 4 },
  ];
  items.forEach((it) => {
    doc.fontSize(10.5).fillColor('#0f172a').text(it.t, M + 10, doc.y, { width: contentW - 10 });
    doc.moveDown(0.25);
    for (let i = 0; i < it.lines; i++) {
      doc.moveTo(M + 20, doc.y).lineTo(doc.page.width - M, doc.y).strokeColor('#cbd5e1').lineWidth(0.6).stroke();
      doc.y += 14;
    }
    doc.moveDown(0.35);
  });

  doc.fontSize(11).fillColor('#312e81').text('Respuestas', M, doc.y + 10);
  doc.fontSize(9.5).fillColor('#0f172a').text('a) (4, 3)   b) (3, 2)   c) (2, 2)   d) (2, 1)', M + 10, doc.y + 30);

  doc.addPage();
  doc.fontSize(10).fillColor('#4c1d95').text('Práctico - Sustitución | EBI 9C', M, 30);
  doc.end();
  console.log('OK 8-1-sustitucion.pdf');
}

// ── 8-2 Igualación ──────────────────────────────────────────────
{
  const doc = makeDoc('Práctico: Igualación', 'Método de igualación - Ejercicios analíticos', '8-2-igualacion.pdf');
  const contentW = doc.page.width - M * 2;
  doc.fontSize(12).fillColor('#4c1d95').text('Ejercicios de igualación', M, doc.y + 10);
  doc.moveDown(0.6);
  const items = [
    { t: 'a) x + y = 9  ;  x - y = 1', lines: 4 },
    { t: 'b) 2x + y = 11  ;  x - y = 1', lines: 4 },
    { t: 'c) 3x + y = 10  ;  x + y = 6', lines: 4 },
    { t: 'd) 2x + 3y = 12  ;  x - y = 1', lines: 4 },
  ];
  items.forEach((it) => {
    doc.fontSize(10.5).fillColor('#0f172a').text(it.t, M + 10, doc.y, { width: contentW - 10 });
    doc.moveDown(0.25);
    for (let i = 0; i < it.lines; i++) {
      doc.moveTo(M + 20, doc.y).lineTo(doc.page.width - M, doc.y).strokeColor('#cbd5e1').lineWidth(0.6).stroke();
      doc.y += 14;
    }
    doc.moveDown(0.35);
  });
  doc.fontSize(11).fillColor('#312e81').text('Respuestas', M, doc.y + 10);
  doc.fontSize(9.5).fillColor('#0f172a').text('a) (5, 4)   b) (4, 3)   c) (2, 4)   d) (3, 2)', M + 10, doc.y + 30);
  doc.addPage();
  doc.fontSize(10).fillColor('#4c1d95').text('Práctico - Igualación | EBI 9C', M, 30);
  doc.end();
  console.log('OK 8-2-igualacion.pdf');
}

// ── 8-3 Reducción ──────────────────────────────────────────────
{
  const doc = makeDoc('Práctico: Reducción', 'Método de reducción - Ejercicios analíticos', '8-3-reduccion.pdf');
  const contentW = doc.page.width - M * 2;
  doc.fontSize(12).fillColor('#4c1d95').text('Ejercicios de reducción', M, doc.y + 10);
  doc.moveDown(0.6);
  const items = [
    { t: 'a) x + y = 5  ;  x - y = 1', lines: 4 },
    { t: 'b) 2x + y = 9  ;  x - y = 0', lines: 4 },
    { t: 'c) 3x + 2y = 12  ;  x + 2y = 8', lines: 4 },
    { t: 'd) 2x + 3y = 12  ;  3x - 2y = 5', lines: 4 },
  ];
  items.forEach((it) => {
    doc.fontSize(10.5).fillColor('#0f172a').text(it.t, M + 10, doc.y, { width: contentW - 10 });
    doc.moveDown(0.25);
    for (let i = 0; i < it.lines; i++) {
      doc.moveTo(M + 20, doc.y).lineTo(doc.page.width - M, doc.y).strokeColor('#cbd5e1').lineWidth(0.6).stroke();
      doc.y += 14;
    }
    doc.moveDown(0.35);
  });
  doc.fontSize(11).fillColor('#312e81').text('Respuestas', M, doc.y + 10);
  doc.fontSize(9.5).fillColor('#0f172a').text('a) (3, 2)   b) (3, 3)   c) (2, 3)   d) (3, 2)', M + 10, doc.y + 30);
  doc.addPage();
  doc.fontSize(10).fillColor('#4c1d95').text('Práctico - Reducción | EBI 9C', M, 30);
  doc.end();
  console.log('OK 8-3-reduccion.pdf');
}

// ── 8-4 Gráfico ────────────────────────────────────────────────
{
  const doc = makeDoc('Práctico: Método gráfico', 'Gráfico de sistemas 2×2 - Ejercicios', '8-4-grafico.pdf');
  const contentW = doc.page.width - M * 2;
  doc.fontSize(12).fillColor('#4c1d95').text('Ejercicios gráficos', M, doc.y + 10);
  doc.moveDown(0.6);
  
  // Sección gráfica simple: 2 sistemas, tablas + cuadrícula simplificada
  const sistemas = [
    { t: 'a) x + y = 5  ;  x - y = 1', pts: ['(3,2)'] },
    { t: 'b) y = 2x - 1  ;  y = -x + 5', pts: ['(2,3)'] },
  ];
  sistemas.forEach((s) => {
    doc.fontSize(10.5).fillColor('#0f172a').text(s.t, M + 10, doc.y, { width: contentW - 10 });
    doc.moveDown(0.3);
    doc.fontSize(9.5).fillColor('#475569').text('Tabla x|y  /  Graficar  /  Punto de corte: ' + s.pts[0], M + 10, doc.y, { width: contentW - 10 });
    doc.moveDown(0.3);
    for (let i = 0; i < 3; i++) {
      doc.moveTo(M + 20, doc.y).lineTo(doc.page.width - M, doc.y).strokeColor('#cbd5e1').lineWidth(0.6).stroke();
      doc.y += 14;
    }
    doc.moveDown(0.35);
  });
  
  doc.fontSize(11).fillColor('#312e81').text('Respuestas', M, doc.y + 10);
  doc.fontSize(9.5).fillColor('#0f172a').text('a) (3, 2)  b) (2, 3)', M + 10, doc.y + 30);
  
  doc.addPage();
  doc.fontSize(10).fillColor('#4c1d95').text('Práctico - Gráfico | EBI 9C', M, 30);
  doc.end();
  console.log('OK 8-4-grafico.pdf');
}
