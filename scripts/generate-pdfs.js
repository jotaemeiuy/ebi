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
  doc.fontSize(8).fillColor('#c4b5fd').text('UNIDAD 3 - ALGEBRA', 50, 12);
  doc.fontSize(13).fillColor('#ffffff').text(topicTitle, 50, 25);
  doc.fillColor(COLOR_ITEM);
  doc.y = 70;
}

function addPageFooter(doc, topicTitle) {
  const W = doc.page.width;
  const H = doc.page.height;
  doc.fontSize(8).fillColor(COLOR_FOOTER)
    .text(`EBI 9C | Algebra | ${topicTitle}`, 50, H - 30, { width: W - 100, align: 'center' });
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

function writeExerciseItem(doc, text, answerLines, topicTitle) {
  const lineH = 14;
  const needed = 16 + answerLines * lineH + 8;
  checkPageBreak(doc, needed, topicTitle);

  doc.fontSize(11).fillColor(COLOR_ITEM).text(text, 60, doc.y, { width: doc.page.width - 120 });
  doc.moveDown(0.8);

  for (let i = 0; i < answerLines; i++) {
    const y = doc.y;
    doc.moveTo(60, y).lineTo(doc.page.width - 60, y)
      .strokeColor(COLOR_LINES).lineWidth(0.5).stroke();
    doc.y = y + lineH;
  }
  doc.moveDown(0.4);
}

// ─── PDF 1: PROPIEDAD DISTRIBUTIVA ─────────────────────────────

function generateDistributiva() {
  return new Promise(resolve => {
    const topic = 'Propiedad Distributiva';
    const doc = new PDFDocument({ margins: { top: 50, bottom: 20, left: 50, right: 50 } });
    const out = fs.createWriteStream(join(outputDir, '3-1-propiedad-distributiva.pdf'));
    doc.pipe(out);

    addHeader(doc, topic);
    addIntroBox(doc, 'a . (b + c) = a.b + a.c          a . (b - c) = a.b - a.c');

    writeSectionTitle(doc, '1) Distributiva respecto a la suma', topic);
    [
      'a) 5 . (3 + 7)', 'b) 4 . (6 + 2)', 'c) x . (x + 5)',
      'd) 3a . (a + 4)', 'e) 2m . (3m + 7n)', 'f) -6k . (k + 9)', 'g) 4pq . (2p + 3q)'
    ].forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '2) Distributiva respecto a la resta', topic);
    [
      'a) 6 . (10 - 4)', 'b) 8 . (7 - 3)', 'c) x . (x - 6)',
      'd) 4y . (2y - 3)', 'e) -3a . (a - 5)', 'f) 7x . (4x - y)', 'g) -2mn . (5m - n)'
    ].forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '3) Distributiva con trinomios', topic);
    [
      'a) 2x . (x² + 3x - 4)',
      'b) 3a . (2a² - a + 5)',
      'c) -m . (m² + 4m - 7)',
      'd) 5xy . (x - 2y + 1)'
    ].forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '4) Doble distributiva (binomio x binomio)', topic);
    [
      'a) (x + 1)(x + 4)', 'b) (x + 5)(x - 2)', 'c) (2a + 1)(a + 3)',
      'd) (3x - 4)(x + 2)', 'e) (m - 6)(m - 3)', 'f) (4y + 3)(2y - 5)', 'g) (x - 7)(x + 7)'
    ].forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '5) Distributiva inversa (extraer factor comun)', topic);
    [
      'a) 10x + 15', 'b) 8a² + 4a', 'c) 6xy - 9x',
      'd) 12m²n + 18mn²', 'e) 20x³ - 15x² + 5x', 'f) 21a²b - 14ab²', 'g) 16x³y² - 8x²y + 4xy'
    ].forEach(e => writeExerciseItem(doc, e, 3, topic));

    addPageFooter(doc, topic);
    doc.end();
    out.on('finish', resolve);
  });
}

// ─── PDF 2: PRODUCTOS NOTABLES ──────────────────────────────────

function generateNotables() {
  return new Promise(resolve => {
    const topic = 'Productos Notables';
    const doc = new PDFDocument({ margins: { top: 50, bottom: 20, left: 50, right: 50 } });
    const out = fs.createWriteStream(join(outputDir, '3-2-productos-notables.pdf'));
    doc.pipe(out);

    addHeader(doc, topic);
    addIntroBox(doc, '(a+b)² = a²+2ab+b²     (a-b)² = a²-2ab+b²     (a+b)(a-b) = a²-b²');

    writeSectionTitle(doc, '1) Binomio al cuadrado (Suma)', topic);
    ['a) (x + 7)²', 'b) (y + 4)²', 'c) (2 + z)²', 'd) (3a + 5)²', 'e) (m + n)²', 'f) (5x + 2)²', 'g) (4a + 3b)²']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '2) Binomio al cuadrado (Diferencia)', topic);
    ['a) (x - 7)²', 'b) (y - 4)²', 'c) (2 - z)²', 'd) (3a - 5)²', 'e) (m - n)²', 'f) (6y - 1)²', 'g) (2x - 3y)²']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '3) Binomios conjugados (Suma por Diferencia)', topic);
    ['a) (x + 8)(x - 8)', 'b) (y + 5)(y - 5)', 'c) (2 + z)(2 - z)', 'd) (3a + 7)(3a - 7)', 'e) (10x + 3)(10x - 3)', 'f) (5m + 4n)(5m - 4n)']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '4) Binomios con termino comun', topic);
    ['a) (x + 3)(x + 6)', 'b) (y + 2)(y + 5)', 'c) (a - 4)(a + 9)', 'd) (m - 4)(m - 9)', 'e) (p + 2)(p + 7)', 'f) (z - 6)(z + 10)', 'g) (k - 5)(k - 3)']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '5) Calculo numerico con productos notables', topic);
    [
      'a) Calcular 101² usando (100 + 1)²',
      'b) Calcular 98² usando (100 - 2)²',
      'c) Calcular 51 x 49 usando (50 + 1)(50 - 1)',
      'd) Calcular 103 x 97 usando (100 + 3)(100 - 3)'
    ].forEach(e => writeExerciseItem(doc, e, 4, topic));

    addPageFooter(doc, topic);
    doc.end();
    out.on('finish', resolve);
  });
}

// ─── PDF 3: FACTORIZACIÓN ───────────────────────────────────────

function generateFactorizacion() {
  return new Promise(resolve => {
    const topic = 'Factorizacion';
    const doc = new PDFDocument({ margins: { top: 50, bottom: 20, left: 50, right: 50 } });
    const out = fs.createWriteStream(join(outputDir, '3-3-factorizacion.pdf'));
    doc.pipe(out);

    addHeader(doc, topic);
    addIntroBox(doc, 'Factorizar = expresar un polinomio como producto de factores mas simples');

    writeSectionTitle(doc, '1) Factor comun', topic);
    [
      'a) 8x + 12', 'b) 15a + 20', 'c) 6xy + 9x', 'd) 10m² - 15m',
      'e) 4a³b - 8a²b² + 12ab', 'f) 21x²y - 14xy² + 7xy',
      'g) 18x³ + 24x²', 'h) 25a²b + 35ab²',
      'i) 16m³n - 12m²n² + 4mn', 'j) 9x²y - 27xy + 3y',
      'k) 40a⁴ - 24a³ + 16a²', 'l) 6p²q³ - 18pq² + 30pq'
    ].forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '2) Factorizacion por agrupacion', topic);
    ['a) x² + 5x + 2x + 10', 'b) ab + ac + bd + bc', 'c) 3x² + 6x + 2x + 4', 'd) 2x³ - 6x² + x - 3', 'e) mx + nx + my + ny']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '3) Trinomio cuadrado perfecto', topic);
    ['a) x² + 10x + 25', 'b) 4a² - 12a + 9', 'c) m² + 8m + 16', 'd) 9y² + 30y + 25', 'e) 16x² - 40x + 25', 'f) 49m² + 28mn + 4n²']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '4) Diferencia de cuadrados', topic);
    ['a) x² - 49', 'b) 9a² - 16', 'c) 4x² - y²', 'd) 25m² - 81', 'e) 36a² - 49b²', 'f) 100 - 9x²']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '5) Trinomio tipo x² + bx + c', topic);
    ['a) x² + 7x + 12', 'b) x² - x - 6', 'c) x² + 5x + 6', 'd) x² + 9x + 20', 'e) x² - 11x + 30', 'f) x² + 3x - 18', 'g) x² - 2x - 24']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '6) Combinacion de metodos', topic);
    ['a) 3x² - 27', 'b) 2x² + 8x + 8', 'c) 5x² - 20', 'd) 4x³ - 16x']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    addPageFooter(doc, topic);
    doc.end();
    out.on('finish', resolve);
  });
}

// ─── Main ────────────────────────────────────────────────────────

async function generateAll() {
  console.log('Generando PDFs...');
  await generateDistributiva();
  console.log('  OK 3-1-propiedad-distributiva.pdf');
  await generateNotables();
  console.log('  OK 3-2-productos-notables.pdf');
  await generateFactorizacion();
  console.log('  OK 3-3-factorizacion.pdf');
  console.log('Listo! PDFs en public/pdfs/');
}

generateAll();
