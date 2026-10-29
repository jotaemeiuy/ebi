import PDFDocument from 'pdfkit';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../public/pdfs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const M = 50;
const COLOR_H3 = '#312e81';
const COLOR_FORMULA = '#7c3aed';
const COLOR_ITEM = '#0f172a';
const COLOR_LINES = '#cbd5e1';

function makeDoc(outName, title, subtitle) {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 50, bottom: 45, left: M, right: M }, bufferPages: true });
  const out = fs.createWriteStream(join(outDir, outName));
  doc.pipe(out);
  doc.rect(0, 0, doc.page.width, 56).fill('#4c1d95');
  doc.fontSize(8).fillColor('#c4b5fd').text('UNIDAD 8 - SISTEMAS DE ECUACIONES', M, 12, { lineBreak: false });
  doc.fontSize(13).fillColor('#ffffff').text(title, M, 26, { lineBreak: false });
  doc.fillColor('#0f172a');
  doc.fontSize(12).fillColor('#312e81').text(subtitle, M, 70, { width: doc.page.width - M*2 });
  doc.fontSize(10).fillColor('#0f172a').text('EBI 9C | Sistemas 2x2', M, 78);
  doc.y = 100;
  doc.fontSize(10); doc.fillColor(COLOR_FORMULA);
  doc.text('Nombre: ______________________________  Curso: ______________  Fecha: __________________', M, 108);
  doc.y = 125;
  doc.fillColor(COLOR_ITEM);
  return doc;
}

function endDoc(doc, name) {
  doc.end();
  console.log('OK ' + name);
}

function sectionTitle(doc, text) {
  const y = doc.y;
  doc.rect(M, y, doc.page.width - M*2, 22).fill('#ede9fe');
  doc.fontSize(11).fillColor('#312e81').text(text, M + 10, y + 5, { width: doc.page.width - M*2 - 20, lineBreak: false });
  doc.y = y + 30;
}

function itemLine(doc, text, lines = 2) {
  doc.fontSize(10).fillColor('#0f172a').text(text, M + 10, doc.y, { width: doc.page.width - M*2 - 10, lineBreak: false });
  doc.moveDown(0.2);
  for (let i = 0; i < lines; i++) {
    doc.moveTo(M + 20, doc.y).lineTo(doc.page.width - M, doc.y).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
    doc.y += 14;
  }
  doc.moveDown(0.25);
}

function addFooter(doc) {
  doc.fontSize(8).fillColor('#64748b').text('EBI 9C | Sistemas de ecuaciones 2x2', M, doc.page.height - 30, { width: 300, lineBreak: false });
  doc.text('Práctico', doc.page.width - M - 60, doc.page.height - 30, { width: 60, align: 'right', lineBreak: false });
}

// ============ 8-1 SUSTITUCIÓN ============
{
  const doc = makeDoc('8-1-sustitucion.pdf', 'Sistemas - Sustitución', 'Ejercicios analíticos: verificación y resolución');
  doc.fontSize(9).fillColor('#475569').text('Método analítico: despejar una variable y reemplazar en la otra.', M, 132, { width: 500 });
  doc.moveDown(0.3);
  sectionTitle(doc, 'Ejercicios');
  itemLine(doc, 'A) Verificación: (2, 3) en x + y = 5 ; x - y = -1', 2);
  itemLine(doc, 'B) Verificación: (1, 4) en 2x + y = 6 ; x - y = 3', 2);
  itemLine(doc, 'C) Resolver por sustitución: x + y = 7 ; x - y = 1', 4);
  itemLine(doc, 'D) Resolver por sustitución: 2x + y = 8 ; x + y = 5', 4);
  itemLine(doc, 'E) Resolver por sustitución: 3x - y = 4 ; x + 2y = 6', 4);
  itemLine(doc, 'F) Resolver por sustitución: 4x + y = 9 ; 2x - 3y = 1', 4);
  doc.moveDown(0.3);
  addFooter(doc);
  endDoc(doc, '8-1-sustitucion.pdf');
}

// ============ 8-2 IGUALACIÓN ============
{
  const doc = makeDoc('8-2-igualacion.pdf', 'Sistemas - Igualación', 'Ejercicios analíticos: despejar la misma variable');
  doc.fontSize(9).fillColor('#475569').text('Método analítico: despejar la misma variable en ambas ecuaciones e igualar.', M, 132, { width: 500 });
  doc.moveDown(0.3);
  sectionTitle(doc, 'Ejercicios');
  itemLine(doc, 'A) Resolver por igualación: x + y = 9 ; x - y = 1', 4);
  itemLine(doc, 'B) Resolver por igualación: 2x + y = 11 ; x - y = 1', 4);
  itemLine(doc, 'C) Resolver por igualación: 3x + y = 10 ; x + y = 6', 4);
  itemLine(doc, 'D) Resolver por igualación: 2x + 3y = 12 ; x - y = 1', 4);
  doc.moveDown(0.3);
  addFooter(doc);
  endDoc(doc, '8-2-igualacion.pdf');
}

// ============ 8-3 REDUCCIÓN ============
{
  const doc = makeDoc('8-3-reduccion.pdf', 'Sistemas - Reducción', 'Ejercicios analíticos: sumar o restar ecuaciones');
  doc.fontSize(9).fillColor('#475569').text('Método analítico: multiplicar una o ambas ecuaciones y sumar o restar para eliminar una variable.', M, 132, { width: 500 });
  doc.moveDown(0.3);
  sectionTitle(doc, 'Ejercicios');
  itemLine(doc, 'A) Resolver por reducción: x + y = 5 ; x - y = 1', 4);
  itemLine(doc, 'B) Resolver por reducción: 2x + y = 9 ; x - y = 0', 4);
  itemLine(doc, 'C) Resolver por reducción: 3x + 2y = 12 ; x + 2y = 8', 4);
  itemLine(doc, 'D) Resolver por reducción: 2x + 3y = 12 ; 3x - 2y = 5', 4);
  doc.moveDown(0.3);
  sectionTitle(doc, 'Ejercicios integrados');
  itemLine(doc, 'Clasificación: a) 2x+y=5 ; 4x+2y=10  b) x-y=2 ; x-y=5  c) 3x+2y=7 ; x-y=1  d) x+2y=4 ; 2x+4y=9', 2);
  itemLine(doc, 'Plantear y resolver: suma de números 15 y diferencia 3; cuaderno $100 y lápiz $20; madre 32 años e hija 14 años.', 3);
  doc.moveDown(0.3);
  addFooter(doc);
  endDoc(doc, '8-3-reduccion.pdf');
}

// ============ 8-4 GRÁFICO ============
{
  const doc = makeDoc('8-4-grafico.pdf', 'Sistemas - Gráfico', 'Ejercicios gráficos: cuadrículas, tablas y lectura');
  doc.fontSize(9).fillColor('#475569').text('Método gráfico: despejar y, armar una tabla, graficar y clasificar.', M, 132, { width: 500 });
  doc.moveDown(0.3);
  sectionTitle(doc, 'Ejercicios gráficos');
  itemLine(doc, '1) Graficar: a) x+y=5 ; x-y=1  b) y=2x-1 ; y=-x+5  c) x+y=3 ; 2x+2y=6', 2);
  itemLine(doc, '2) Leer gráfica: y=x+1 y y=-x+3. Solución:', 1);
  itemLine(doc, '3) Modelo: A: y=300+100x ; B: y=100+200x. Corte (2,500): A conviene a partir de 2 horas.', 2);
  addFooter(doc);
  endDoc(doc, '8-4-grafico.pdf');
}
