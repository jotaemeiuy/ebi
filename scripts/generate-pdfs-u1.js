import PDFDocument from 'pdfkit';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = join(__dirname, '../public/pdfs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const COLOR_TITLE   = '#4c1d95';
const COLOR_H3      = '#312e81';
const COLOR_FORMULA = '#7c3aed';
const COLOR_ITEM    = '#0f172a';
const COLOR_LINES   = '#cbd5e1';
const COLOR_FOOTER  = '#94a3b8';
const COLOR_BG_H3   = '#ede9fe';
const COLOR_BG_BOX  = '#f5f3ff';

// ─── Helpers ────────────────────────────────────────────────────

function addHeader(doc, topicTitle) {
  const W = doc.page.width;
  doc.rect(0, 0, W, 50).fill('#4c1d95');
  doc.fontSize(8).fillColor('#c4b5fd').text('UNIDAD 1 - NUMEROS Y FINANZAS', 50, 12);
  doc.fontSize(13).fillColor('#ffffff').text(topicTitle, 50, 25);
  doc.fillColor(COLOR_ITEM);
  doc.y = 70;
}

function addPageFooter(doc, topicTitle) {
  const W = doc.page.width;
  const H = doc.page.height;
  doc.fontSize(8).fillColor(COLOR_FOOTER)
    .text(`EBI 9C | Numeros y Finanzas | ${topicTitle}`, 50, H - 30, { width: W - 100, align: 'center' });
}

function checkPageBreak(doc, neededHeight, topicTitle) {
  if (doc.y + neededHeight > doc.page.height - 50) {
    addPageFooter(doc, topicTitle);
    doc.addPage();
    doc.y = 50;
  }
}

function writeSectionTitle(doc, text, topicTitle) {
  checkPageBreak(doc, 40, topicTitle);
  doc.moveDown(0.6);
  const y = doc.y;
  doc.rect(50, y, doc.page.width - 100, 20).fill(COLOR_BG_H3);
  doc.fontSize(11).fillColor(COLOR_H3).text(text, 60, y + 4);
  doc.y = y + 26;
}

function addIntroBox(doc, text) {
  const y = doc.y;
  doc.rect(50, y, doc.page.width - 100, 28).fill(COLOR_BG_BOX);
  doc.fontSize(10).fillColor(COLOR_FORMULA)
    .text(text, 60, y + 8, { width: doc.page.width - 120, align: 'center' });
  doc.y = y + 36;
}

// Parses string like "a x 10^5" into base and superscript
function writeFormattedExercise(doc, text, x, y) {
  const parts = text.split(/(\^[0-9\-]+)/);
  let currentX = x;
  
  parts.forEach((part) => {
    if (part.startsWith('^')) {
      const exp = part.substring(1);
      doc.fontSize(7);
      doc.text(exp, currentX, y - 4, { lineBreak: false });
      currentX += doc.widthOfString(exp);
    } else {
      doc.fontSize(11);
      doc.text(part, currentX, y, { lineBreak: false });
      currentX += doc.widthOfString(part);
    }
  });
  doc.y = y + 16;
}

function writeExerciseItem(doc, text, answerLines, topicTitle) {
  const lineH = 14;
  const needed = 16 + answerLines * lineH + 8;
  checkPageBreak(doc, needed, topicTitle);

  doc.fillColor(COLOR_ITEM);
  doc.x = 60;
  writeFormattedExercise(doc, text, 60, doc.y);

  for (let i = 0; i < answerLines; i++) {
    const y = doc.y;
    doc.moveTo(60, y).lineTo(doc.page.width - 60, y)
      .strokeColor(COLOR_LINES).lineWidth(0.5).stroke();
    doc.y = y + lineH;
  }
  doc.moveDown(0.4);
}

// ─── PDF 1: NOTACIÓN CIENTÍFICA ─────────────────────────────

function generateNotacion() {
  return new Promise(resolve => {
    const topic = 'Notacion Cientifica';
    const doc = new PDFDocument({ margins: { top: 50, bottom: 20, left: 50, right: 50 } });
    const out = fs.createWriteStream(join(outputDir, '1-1-notacion-cientifica.pdf'));
    doc.pipe(out);

    addHeader(doc, topic);
    addIntroBox(doc, 'a x 10^n     (donde 1 <= a < 10 y n es un numero entero)');

    writeSectionTitle(doc, '1) Ejercicio de practica: Convertir a notacion cientifica', topic);
    [
      'a) 45000000', 'b) 0,0000072', 'c) 890000', 'd) 0,00000045', 
      'e) 1230000000', 'f) 0,000000000789', 'g) 8998,789', 'h) 0,0123'
    ].forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '2) Operaciones en notacion cientifica', topic);
    [
      'a) (1,23 x 10^7) + (8,9 x 10^8)', 
      'b) (4,05 x 10^-4) + (2,1 x 10^-5)', 
      'c) (3,2 x 10^3) - (2,5 x 10^2)', 
      'd) (25 x 10^5) / (5 x 10^2)', 
      'e) (5,5 x 10^3) / (10 x 10^8)', 
      'f) (7,2 x 10^-2) x (4,0 x 10^-3)', 
      'g) (9 x 10^6) x (2 x 10^3)', 
      'h) (1,2 x 10^4) + (3,8 x 10^3)'
    ].forEach(e => writeExerciseItem(doc, e, 4, topic));

    addPageFooter(doc, topic);
    doc.end();
    out.on('finish', resolve);
  });
}

// ─── PDF 2: PORCENTAJES ──────────────────────────────────

function generatePorcentajes() {
  return new Promise(resolve => {
    const topic = 'Porcentajes y Porcentajes Encadenados';
    const doc = new PDFDocument({ margins: { top: 50, bottom: 20, left: 50, right: 50 } });
    const out = fs.createWriteStream(join(outputDir, '1-2-porcentajes.pdf'));
    doc.pipe(out);

    addHeader(doc, topic);
    addIntroBox(doc, 'Un porcentaje representa una parte de 100:  p% = p / 100');

    writeSectionTitle(doc, '1) Porcentajes basicos', topic);
    ['a) Calcular el 25% de 800', 'b) Calcular el 8% de 40', 'c) Calcular el 80% de 90', 'd) Calcular el 1% de 350', 'e) En una clase de 50 alumnos hay 30 chicas. Que porcentaje representan?', 'f) El 20% de los alumnos de un grupo de 45 hicieron mal un examen. Cuantos lo hicieron bien?', 'g) De 240 fichas, 48 son rojas. Que porcentaje representan?', 'h) El 40% de 1500 alumnos son chicas. Cuantas hay?']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '2) Aumentos, rebajas y descuentos', topic);
    ['a) Un articulo cuesta $1500 y aumenta un 12%. Precio final?', 'b) Un abrigo de $400 se rebaja un 25%. Nuevo precio?', 'c) Un producto cuesta $50 y tiene 8% de descuento. Cuanto se paga?', 'd) Un articulo baja de $800 a $640. Que porcentaje de descuento se aplico?']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '3) Problemas con IVA', topic);
    ['a) Un articulo cuesta $25 sin IVA. precio final? (IVA 22%)', 'b) Si pagaste $53 con IVA (22%), precio sin IVA?', 'c) Un producto cuesta $4500 con IVA (22%). Precio sin IVA?']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '4) Porcentajes inversos', topic);
    ['a) Un balon cuesta $9 tras 5% descuento. Precio original?', 'b) Tras aumentar 40% cuesta $301. Precio inicial?', 'c) Una cantidad se multiplico por 2,23. Que porcentaje aumento?']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '5) Problemas aplicados', topic);
    ['a) Vendedor gana 6% de $80.000 con ganancia del 10%. Cuanto gana?', 'b) 110 Ha: 20% pinos, 25% abetos, 35% robles. Resto?', 'c) 240 trabajadores son 75%. Total?']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '6) Porcentajes encadenados', topic);
    ['a) Precio original es de 1500, luego sube 10% y baja 20%. Precio final?', 'b) Precio original desconocido, baja 20%, luego sube 10%. Precio final es de 1500 Precio original?', 'c) Un producto en el 2023 costaba $100, en 2024 subio 5%, en 2025 subio 10%. Cuanto cuesta en 2025?', 'd) Un producto en el 2023 costaba $500, en 2024 subio 5%, en 2025 bajo 5%. Cuanto cuesta en 2025?', 'e) Un producto en el 2025 costaba $500, en 2024 subio 5%, en 2023 subio 3%. Cuanto costaba en 2023?']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '7) Interpretacion', topic);
    ['a) x1,6 -> % aumento?', 'b) x0,62 -> % disminucion?', 'c) x2,2 -> % aumento?']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '8) Popurri', topic);
    ['a) Deuda $90.000 con 5% rebaja. Pago?', 'b) Producto $1500. Precio para ganar 20%?', 'c) 125 alumnos, 36% mujeres. Varones?', 'd) Deuda baja de $4500 a $3600. % rebaja?']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    addPageFooter(doc, topic);
    doc.end();
    out.on('finish', resolve);
  });
}

// ─── PDF 3: INTERÉS SIMPLE ───────────────────────────────────────

function generateInteres() {
  return new Promise(resolve => {
    const topic = 'Interes Simple';
    const doc = new PDFDocument({ margins: { top: 50, bottom: 20, left: 50, right: 50 } });
    const out = fs.createWriteStream(join(outputDir, '1-3-interes-simple.pdf'));
    doc.pipe(out);

    addHeader(doc, topic);
    addIntroBox(doc, 'I = C x i x t          M = C + I');

    writeSectionTitle(doc, '1) Calcular interes', topic);
    ['a) $1000 al 5% durante 2 anos', 'b) $3500 al 12% durante 4 anos', 'c) $800 al 7% durante 6 anos', 'd) $12000 al 3% durante 5 anos']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '2) Calcular monto final', topic);
    ['a) $5000 al 10% durante 2 anos', 'b) $2400 al 8% durante 3 anos', 'c) $900 al 15% durante 1 ano']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '3) Calcular tasa', topic);
    ['a) $1000 producen $200 en 4 anos', 'b) $3000 producen $540 en 3 anos', 'c) $1500 producen $90 en 2 anos']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '4) Calcular tiempo', topic);
    ['a) $2000 al 5% generan $300', 'b) $4000 al 8% generan $960', 'c) $1200 al 10% generan $240']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '5) Problemas aplicados', topic);
    ['a) Una persona pide un prestamo de $15000 al 9% anual durante 2 anos. Cuanto interes pagara?', 'b) Un capital de $8000 se invierte al 6% anual durante 5 anos. Cual sera el monto final?', 'c) Que capital produce $1000 de interes al 4% anual en 5 anos?']
      .forEach(e => writeExerciseItem(doc, e, 5, topic));

    addPageFooter(doc, topic);
    doc.end();
    out.on('finish', resolve);
  });
}

// ─── Main ────────────────────────────────────────────────────────

async function generateAll() {
  console.log('Generando PDFs Unidad 1...');
  await generateNotacion();
  console.log('  OK 1-1-notacion-cientifica.pdf');
  await generatePorcentajes();
  console.log('  OK 1-2-porcentajes.pdf');
  await generateInteres();
  console.log('  OK 1-3-interes-simple.pdf');
  console.log('Listo!');
}

generateAll();
