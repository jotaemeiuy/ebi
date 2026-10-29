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

const UNITS = {
  4: { label: 'ECUACIONES', footer: 'Ecuaciones' },
  5: { label: 'TRIGONOMETRIA', footer: 'Trigonometria' },
  8: { label: 'SISTEMAS DE ECUACIONES', footer: 'Sistemas de Ecuaciones' },
};

// ─── Helpers ────────────────────────────────────────────────────

function addHeader(doc, unitId, topicTitle) {
  const W = doc.page.width;
  const unit = UNITS[unitId];
  doc.rect(0, 0, W, 50).fill(COLOR_TITLE);
  doc.fontSize(8).fillColor('#c4b5fd').text(`UNIDAD ${unitId} - ${unit.label}`, 50, 12);
  doc.fontSize(13).fillColor('#ffffff').text(topicTitle, 50, 25);
  doc.fillColor(COLOR_ITEM);
  doc.y = 70;
}

function addPageFooter(doc, unitId, topicTitle) {
  const W = doc.page.width;
  const H = doc.page.height;
  const unit = UNITS[unitId];
  doc.fontSize(8).fillColor(COLOR_FOOTER)
    .text(`EBI 9C | ${unit.footer} | ${topicTitle}`, 50, H - 30, { width: W - 100, align: 'center' });
}

function checkPageBreak(doc, neededHeight, unitId, topicTitle) {
  if (doc.y + neededHeight > doc.page.height - 50) {
    addPageFooter(doc, unitId, topicTitle);
    doc.addPage();
    doc.y = 50;
  }
}

function writeSectionTitle(doc, text, unitId, topicTitle) {
  checkPageBreak(doc, 100, unitId, topicTitle);
  doc.moveDown(0.6);
  const y = doc.y;
  doc.rect(50, y, doc.page.width - 100, 20).fill(COLOR_BG_H3);
  doc.fontSize(11).fillColor(COLOR_H3).text(text, 60, y + 4);
  doc.y = y + 26;
}

function addIntroBox(doc, text, height = 30) {
  const y = doc.y;
  doc.rect(50, y, doc.page.width - 100, height).fill(COLOR_BG_BOX);
  doc.fontSize(10).fillColor(COLOR_FORMULA)
    .text(text, 60, y + 8, { width: doc.page.width - 120, align: 'center' });
  doc.y = y + height + 8;
}

// Dibuja x = ± √(-c/a) con radical y fracción bien delimitados.
function drawRootFormula(doc, centerX, y) {
  const fontSize = 15;
  doc.fontSize(fontSize).fillColor(COLOR_FORMULA);

  const left = 'x = ±';
  const leftW = doc.widthOfString(left);
  const num = '-c';
  const den = 'a';
  const numW = doc.widthOfString(num);
  const denW = doc.widthOfString(den);
  const fracW = Math.max(numW, denW) + 12;
  const total = leftW + 14 + fracW + 10;
  const startX = centerX - total / 2;

  doc.text(left, startX, y, { lineBreak: false });

  const rx = startX + leftW + 14;
  const topY = y - 4;
  const barY = y + 9;

  // Signo radical y barra superior que cubre toda la fracción.
  doc.moveTo(rx, y + 7)
    .lineTo(rx + 5, y + 13)
    .lineTo(rx + 10, topY)
    .lineTo(rx + 10 + fracW, topY)
    .strokeColor(COLOR_FORMULA).lineWidth(1.3).stroke();

  // Barra de fracción.
  doc.moveTo(rx + 14, barY)
    .lineTo(rx + 14 + fracW - 4, barY)
    .strokeColor(COLOR_FORMULA).lineWidth(1).stroke();

  doc.fontSize(12).fillColor(COLOR_FORMULA);
  doc.text(num, rx + 10 + (fracW - numW) / 2, y - 3, { lineBreak: false });
  doc.text(den, rx + 10 + (fracW - denW) / 2, barY + 3, { lineBreak: false });
}

function addRootIntroBox(doc) {
  const y = doc.y;
  doc.rect(50, y, doc.page.width - 100, 58).fill(COLOR_BG_BOX);
  drawRootFormula(doc, doc.page.width / 2, y + 22);
  doc.fillColor(COLOR_ITEM);
  doc.x = 50;
  doc.y = y + 66;
}

// Splits "ax^2 - b/c" into rich tokens: strings, superscripts and fractions.
function parseMath(text) {
  const tokens = [];
  const regex = /(\^[0-9\-]+)|(\\frac\{[^}]*\}\{[^}]*})|([A-Za-z0-9]+\s*\/\s*[A-Za-z0-9]+)/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    if (match[1]) {
      tokens.push({ type: 'sup', value: match[1].substring(1) });
    } else if (match[2]) {
      const inner = match[2].slice(1, -1);
      const parts = inner.split('}{');
      tokens.push({ type: 'frac', num: parts[0], den: parts[1] });
    } else if (match[3]) {
      const [num, den] = match[3].split('/').map(s => s.trim());
      tokens.push({ type: 'frac', num, den });
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    tokens.push({ type: 'text', value: text.slice(lastIndex) });
  }
  return tokens;
}

function writeFormattedExercise(doc, text, x, y) {
  const baseSize = 11;
  const fracSize = 9;
  const supSize = 7;
  const fracW = 3;
  const tokens = parseMath(text);
  let currentX = x;

  tokens.forEach((tok) => {
    if (tok.type === 'sup') {
      doc.fontSize(supSize);
      doc.text(tok.value, currentX, y - 4, { lineBreak: false });
      currentX += doc.widthOfString(tok.value) + 1;
    } else if (tok.type === 'frac') {
      doc.fontSize(fracSize);
      const wNum = doc.widthOfString(tok.num);
      const wDen = doc.widthOfString(tok.den);
      const w = Math.max(wNum, wDen) + fracW * 2;
      doc.text(tok.num, currentX + (w - wNum) / 2, y - 8, { lineBreak: false });
      doc.text(tok.den, currentX + (w - wDen) / 2, y + 5, { lineBreak: false });
      const barY = y - 2;
      doc.moveTo(currentX, barY).lineTo(currentX + w, barY)
        .strokeColor(COLOR_LINES).lineWidth(0.8).stroke();
      currentX += w + 2;
    } else {
      doc.fontSize(baseSize);
      doc.text(tok.value, currentX, y, { lineBreak: false });
      currentX += doc.widthOfString(tok.value);
    }
  });

  doc.fillColor(COLOR_ITEM);
  doc.y = y + 18;
}

function drawAnswerLines(doc, answerLines) {
  const lineH = 14;
  for (let i = 0; i < answerLines; i++) {
    const y = doc.y;
    doc.moveTo(60, y).lineTo(doc.page.width - 60, y)
      .strokeColor(COLOR_LINES).lineWidth(0.5).stroke();
    doc.y = y + lineH;
  }
  doc.moveDown(0.4);
}

function writeExerciseItem(doc, text, answerLines, unitId, topicTitle) {
  const lineH = 14;
  const needed = 16 + answerLines * lineH + 8;
  checkPageBreak(doc, needed, unitId, topicTitle);

  doc.fillColor(COLOR_ITEM);
  doc.x = 60;
  writeFormattedExercise(doc, text, 60, doc.y);
  drawAnswerLines(doc, answerLines);
}

function writeTextExerciseItem(doc, text, answerLines, unitId, topicTitle) {
  const lineH = 14;
  const needed = 32 + answerLines * lineH + 8;
  checkPageBreak(doc, needed, unitId, topicTitle);

  doc.fontSize(11).fillColor(COLOR_ITEM)
    .text(text, 60, doc.y, { width: doc.page.width - 120 });
  doc.moveDown(0.6);
  drawAnswerLines(doc, answerLines);
}

function createDoc(filename, unitId, topicTitle, callback) {
  return new Promise(resolve => {
    const doc = new PDFDocument({ margins: { top: 50, bottom: 20, left: 50, right: 50 } });
    const out = fs.createWriteStream(join(outputDir, filename));
    doc.pipe(out);
    addHeader(doc, unitId, topicTitle);
    callback(doc, topicTitle);
    addPageFooter(doc, unitId, topicTitle);
    doc.end();
    out.on('finish', resolve);
  });
}

// ─── UNIDAD 4 ───────────────────────────────────────────────────

async function generateU4EcuacionAx2C() {
  const topic = 'Ecuacion ax² + c = 0';
  await createDoc('4-1-ecuacion-ax2-c.pdf', 4, topic, (doc) => {
    addRootIntroBox(doc);

    writeSectionTitle(doc, '1) Resolver despejando x² y aplicando raiz cuadrada', 4, topic);
    [
      'a) x^2 - 4 = 0', 'b) x^2 - 36 = 0', 'c) x^2 - 64 = 0',
      'd) x^2 - 100 = 0', 'e) x^2 - 81 = 0', 'f) 4x^2 - 1 = 0',
      'g) 9x^2 - 25 = 0', 'h) 16x^2 - 49 = 0', 'i) 2x^2 - 32 = 0',
      'j) 5x^2 - 45 = 0', 'k) 3x^2 - 48 = 0', 'l) 7x^2 - 63 = 0',
      'm) x^2 + 16 = 0', 'n) 2x^2 + 18 = 0', 'o) 3x^2 = 0'
    ].forEach(e => writeExerciseItem(doc, e, 3, 4, topic));
  });
}

async function generateU4EcuacionAx2Bx() {
  const topic = 'Ecuacion ax² + bx = 0';
  await createDoc('4-2-ecuacion-ax2-bx.pdf', 4, topic, (doc) => {
    addIntroBox(doc, 'Factor comun: x(ax + b) = 0  ->  x = 0  o  x = -b/a');

    writeSectionTitle(doc, '1) Resolver por factor comun', 4, topic);
    [
      'a) x^2 + 4x = 0', 'b) x^2 - 6x = 0', 'c) x^2 - 10x = 0',
      'd) 2x^2 + 8x = 0', 'e) 3x^2 - 15x = 0', 'f) 4x^2 + 20x = 0',
      'g) 5x^2 - 25x = 0', 'h) -2x^2 + 14x = 0', 'i) 6x^2 + 18x = 0',
      'j) 7x^2 - 21x = 0', 'k) 8x^2 - 6x = 0', 'l) 10x^2 + 4x = 0'
    ].forEach(e => writeExerciseItem(doc, e, 3, 4, topic));
  });
}

async function generateU4EcuacionAx2BxC() {
  const topic = 'Ecuacion ax² + bx + c = 0 - Bhaskara';
  await createDoc('4-3-ecuacion-ax2-bx-c.pdf', 4, topic, (doc) => {
    addIntroBox(doc, 'x = (-b ± raiz(b² - 4ac)) / 2a', 34);

    writeSectionTitle(doc, '1) Indicar los coeficientes a, b y c (sin resolver)', 4, topic);
    [
      'a) 3x^2 - 10x + 8 = 0', 'b) -2x^2 + 5x - 3 = 0',
      'c) x^2 = 7x - 12', 'd) 5x^2 + 11x + 2 = 0',
      'e) 6x^2 + x - 1 = 0', 'f) 2(x^2 - 3x + 1) = 0',
      'g) (x + 2)(x - 5) = 0', 'h) 4x^2 - 9 = 12x'
    ].forEach(e => writeExerciseItem(doc, e, 2, 4, topic));

    writeSectionTitle(doc, '2) Resolver aplicando Bhaskara', 4, topic);
    [
      'a) x^2 + 6x + 8 = 0', 'b) x^2 - 5x + 6 = 0',
      'c) x^2 + 3x - 10 = 0', 'd) x^2 - 7x + 10 = 0',
      'e) 2x^2 + 3x + 1 = 0', 'f) 3x^2 + 7x + 2 = 0',
      'g) 2x^2 - 5x + 3 = 0', 'h) 3x^2 - 10x + 8 = 0',
      'i) x^2 - 4x + 4 = 0', 'j) x^2 + 6x + 9 = 0',
      'k) 4x^2 - 12x + 9 = 0', 'l) 9x^2 + 6x + 1 = 0',
      'm) x^2 + 2x + 5 = 0', 'n) 3x^2 + 2x + 1 = 0',
      'o) 2x^2 - 3x + 4 = 0', 'p) x^2 + x + 2 = 0'
    ].forEach(e => writeExerciseItem(doc, e, 6, 4, topic));
  });
}

// ─── UNIDAD 5 ───────────────────────────────────────────────────

async function generateU5Teoria() {
  const topic = 'Trigonometria - Formulas y ejercicios';
  await createDoc('5-2-trigonometria-teoria.pdf', 5, topic, (doc) => {
    addIntroBox(doc, 'sen A = opuesto / hipotenusa    cos A = adyacente / hipotenusa    tan A = opuesto / adyacente', 34);

    writeSectionTitle(doc, '1) Completar las formulas', 5, topic);
    [
      'a) sen A = ______', 'b) cos A = ______', 'c) tan A = ______',
      'd) (hipotenusa)² = ______', 'e) A + B = ______',
      'f) cos A = ______ / hipotenusa'
    ].forEach(e => writeTextExerciseItem(doc, e, 3, 5, topic));

    writeSectionTitle(doc, '2) Calcular el lado o el angulo indicado', 5, topic);
    [
      'a) Hipotenusa 10 cm y A = 30 grados. Calcular el cateto opuesto a A.',
      'b) Cateto adyacente 8 cm y A = 40 grados. Calcular el cateto opuesto.',
      'c) Cateto opuesto 5 cm e hipotenusa 13 cm. Calcular el angulo A.',
      'd) Catetos 6 cm y 8 cm. Calcular la hipotenusa y los angulos agudos.',
      'e) Hipotenusa 12 cm y cateto 8 cm. Calcular un angulo y el otro cateto.',
      'f) Catetos 12 cm y 30 cm. Calcular la hipotenusa y los angulos.',
      'g) Una sombra de 15 m y un angulo de elevacion de 35 grados. Calcular la altura.',
      'h) Piramide de base cuadrada: lado 233 m y arista 220 m. Calcular altura y apotema.'
    ].forEach(e => writeTextExerciseItem(doc, e, 5, 5, topic));

    writeSectionTitle(doc, '3) Resolver los triangulos rectangulos', 5, topic);
    [
      'a) Catetos 6 cm y 8 cm.',
      'b) Hipotenusa 12 cm y un angulo de 35 grados.',
      'c) Cateto 8 cm e hipotenusa 12 cm.'
    ].forEach(e => writeTextExerciseItem(doc, e, 6, 5, topic));
  });
}

// ─── Main ───────────────────────────────────────────────────────

async function generateAll() {
  console.log('Generando PDFs de las unidades 4 y 5...');

  await generateU4EcuacionAx2C();
  console.log('  OK 4-1-ecuacion-ax2-c.pdf');
  await generateU4EcuacionAx2Bx();
  console.log('  OK 4-2-ecuacion-ax2-bx.pdf');
  await generateU4EcuacionAx2BxC();
  console.log('  OK 4-3-ecuacion-ax2-bx-c.pdf');

  console.log('Listo! PDFs en public/pdfs/');
}

generateAll();
