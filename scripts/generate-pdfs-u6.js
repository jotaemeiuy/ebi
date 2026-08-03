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
  doc.fontSize(8).fillColor('#c4b5fd').text('UNIDAD 6 - ECUACIONES', 50, 12);
  doc.fontSize(13).fillColor('#ffffff').text(topicTitle, 50, 25);
  doc.fillColor(COLOR_ITEM);
  doc.y = 70;
}

function addPageFooter(doc, topicTitle) {
  const W = doc.page.width;
  const H = doc.page.height;
  doc.fontSize(8).fillColor(COLOR_FOOTER)
    .text(`EBI 9C | Ecuaciones | ${topicTitle}`, 50, H - 30, { width: W - 100, align: 'center' });
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

// Splits "ax^2 - b/c" into rich tokens: strings, supercripts, and fractions.
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

// Renders tokens with fractions stacked (numerator over a line over denominator).
function writeFormattedExercise(doc, text, x, y) {
  const baseSize = 11;
  const fracSize = 9;
  const supSize = 7;
  const fracW = 3;          // horizontal padding around a fraction
  const fracLineGap = 1;    // gap between numerator/denominator and the bar
  const tokens = parseMath(text);
  let currentX = x;
  let cursorBase = y;

  tokens.forEach((tok) => {
    if (tok.type === 'sup') {
      doc.fontSize(supSize);
      const u = currentX;
      doc.text(tok.value, u, cursorBase - 4, { lineBreak: false });
      currentX += doc.widthOfString(tok.value) + 1;
    } else if (tok.type === 'frac') {
      // measure the widest part
      doc.fontSize(fracSize);
      const wNum = doc.widthOfString(tok.num);
      const wDen = doc.widthOfString(tok.den);
      const w = Math.max(wNum, wDen) + fracW * 2;
      // numerator
      doc.text(tok.num, currentX + (w - wNum) / 2, cursorBase - 8, { lineBreak: false });
      // denominator
      doc.text(tok.den, currentX + (w - wDen) / 2, cursorBase + 5, { lineBreak: false });
      // bar between them
      const barY = cursorBase - 2;
      doc.moveTo(currentX, barY)
        .lineTo(currentX + w, barY)
        .strokeColor(COLOR_LINES).lineWidth(0.8).stroke();
      currentX += w + 2;
    } else {
      doc.fontSize(baseSize);
      doc.text(tok.value, currentX, cursorBase, { lineBreak: false });
      currentX += doc.widthOfString(tok.value);
    }
  });

  doc.fillColor(COLOR_ITEM);
  doc.y = y + 18;
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

function createDoc(filename, topicTitle, callback) {
  return new Promise(resolve => {
    const doc = new PDFDocument({ margins: { top: 50, bottom: 20, left: 50, right: 50 } });
    const out = fs.createWriteStream(join(outputDir, filename));
    doc.pipe(out);
    addHeader(doc, topicTitle);
    callback(doc, topicTitle);
    addPageFooter(doc, topicTitle);
    doc.end();
    out.on('finish', resolve);
  });
}

// ─── PDF 6-1: IGUALDAD ALGEBRAICA ─────────────────────────────

async function generateIgualdad() {
  const topic = 'Igualdad Algebraica';
  await createDoc('6-1-igualdad-algebraica.pdf', topic, (doc) => {
    addIntroBox(doc, 'Igualdad algebraica = dos expresiones separadas por el signo =');

    writeSectionTitle(doc, '1) Indica si cada igualdad es verdadera o falsa', topic);
    ['a) 5 + 6 = 11', 'b) 3 x 4 = 10 + 2', 'c) 15 - 7 = 9', 'd) 2 x 8 = 4 x 4', 'e) 6 + 6 = 3 x 5', 'f) 20 / 4 = 5']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '2) Determina el primer y segundo miembro y sus terminos', topic);
    ['a) 4x + 1 = 13', 'b) 5 = x - 2', 'c) 2x + x = 12', 'd) 3a = a + 10', 'e) 8 - y = y + 2']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '3) Indica la incognita, el coeficiente y el grado', topic);
    ['a) 3x + 4 = 10', 'b) 2y - 1 = 7', 'c) x^2 + 3 = 12', 'd) 5a + 2 = 3a + 6', 'e) m + 4 = 9']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '4) Aplica la regla de la suma o del producto y escribe la ecuacion equivalente', topic);
    ['a) x = 6; suma 4 a ambos', 'b) x = 5; resta 2 a ambos', 'c) x = 8; multiplica por 3', 'd) x = 12; divide entre 4']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));
  });
}

// ─── PDF 6-2: IDENTIDAD ─────────────────────────────────────────

async function generateIdentidad() {
  const topic = 'Identidad y Ecuacion';
  await createDoc('6-2-identidad.pdf', topic, (doc) => {
    addIntroBox(doc, 'Identidad: igualdad que se cumple para cualquier valor.  Ecuacion: solo para algunos.');

    writeSectionTitle(doc, '1) Indica si cada igualdad es identidad o ecuacion', topic);
    ['a) x + x = 2x', 'b) 2(x + 3) = 2x + 6', 'c) x + 5 = 12', 'd) x + x + x = 3x', 'e) 2x x x^3 = 2x^4', 'f) x/2 = 12']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '2) Indica el valor de x para que se cumpla la igualdad', topic);
    ['a) x - 1 = 2', 'b) x + 7 = 15', 'c) x - 3 = 6', 'd) x + 10 = 5', 'e) x + 4 = 12', 'f) x - 6 = 10']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '3) Justifica que x + x = 2x es una identidad con dos valores', topic);
    ['a) Probando con x = 1 y x = -2', 'b) Probando con x = 3 y x = -5', 'c) Probando con x = 0 y x = 4']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));
  });
}

// ─── PDF 6-3: ECUACION ──────────────────────────────────────────

async function generateEcuacion() {
  const topic = 'La Ecuacion';
  await createDoc('6-3-ecuacion.pdf', topic, (doc) => {
    addIntroBox(doc, 'Una ecuacion es una igualdad que solo es cierta para algunos valores de la incognita.');

    writeSectionTitle(doc, '1) Senala la incognita, los miembros y el grado', topic);
    ['a) x + 5 = 11', 'b) 2y = 12', 'c) 3x - 1 = x + 7', 'd) m + 4 = m + 2', 'e) 5 - a = 2']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '2) Indica si el valor dado es solucion', topic);
    ['a) x + 6 = 11;   x = 5?', 'b) 3y - 4 = 8;   y = 4?', 'c) 2m = 14;   m = 7?', 'd) x + 2 = 9;   x = 6?', 'e) 4a = 20;   a = 5?', 'f) x - 3 = 5;   x = 8?']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '3) Averigua la solucion por tanteo', topic);
    ['a) x + 5 = 9', 'b) x - 2 = 7', 'c) 3x = 21', 'd) x + 10 = 16']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));
  });
}

// ─── PDF 6-4: ECUACIONES EQUIVALENTES ─────────────────────────────

async function generateEquivalentes() {
  const topic = 'Ecuaciones Equivalentes';
  await createDoc('6-4-ecuaciones-equivalentes.pdf', topic, (doc) => {
    addIntroBox(doc, 'Equivalentes: tienen las mismas soluciones.  Ej.: x + 4 = 10 y 2x = 12 (ambas x = 6).');

    writeSectionTitle(doc, '1) Escribe una ecuacion equivalente y halla su solucion', topic);
    ['a) 7 + x = 13', 'b) x + 2 = 9', 'c) x - 4 = 4', 'd) 11 + x = 9']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '2) Determina si los pares son equivalentes', topic);
    ['a) x + 2 = 7   y   2x = 10', 'b) x - 1 = 4   y   x + 2 = 7', 'c) 3x = 6   y   x = 2', 'd) x + 5 = 9   y   x + 1 = 3', 'e) 2x = 14   y   x = 7', 'f) x + 3 = 8   y   x + 3 = 10']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '3) Obtiene una ecuacion equivalente usando la regla indicada', topic);
    ['a) x = 3   (suma 5 a ambos)', 'b) x = 10   (multiplica por 2)', 'c) x = 7   (resta 1 a ambos)', 'd) x = 2   (divide entre 2)']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));
  });
}

// ─── PDF 6-5: TRANSPOSICION DE TERMINOS ────────────────────────────

async function generateTransposicion() {
  const topic = 'Transposicion de Terminos';
  await createDoc('6-5-transposicion-terminos.pdf', topic, (doc) => {
    addIntroBox(doc, 'Regla de la suma: x - 4 = 10  =>  x = 10 + 4');

    writeSectionTitle(doc, '1) Aplica la transposicion de terminos y resuelve', topic);
    ['a) x + 6 = 14', 'b) x + 2 = 4', 'c) x + 10 = 3', 'd) x + 6 = 20', 'e) x + 4 = 16', 'f) x - 4 = 20']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '2) Resuelve aplicando la regla del producto', topic);
    ['a) 2x = 10', 'b) 6x = 24', 'c) 5x = 30', 'd) 7x = 56']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '3) Resuelve combinando transposicion', topic);
    ['a) x - 5 = 3', 'b) 2x - 4 = 10', 'c) -15 + x = 4', 'd) 2x + 7 = x + 14', 'e) 3x + 8 = 12 - x']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));
  });
}

// ─── PDF 6-6: METODO GENERAL ──────────────────────────────────────

async function generateMetodo() {
  const topic = 'Metodo General de Resolucion';
  await createDoc('6-6-metodo-general.pdf', topic, (doc) => {
    addIntroBox(doc, 'Pasos: 1) Eliminar parentesis  2) Reducir  3) Transponer  4) Despejar');

    writeSectionTitle(doc, '1) Resuelve por el metodo general', topic);
    ['a) 3x + 4 = 19', 'b) 5x - 6 = 29', 'c) 2x + 7 = 21', 'd) 4x - 9 = 23']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '2) Resuelve (incognita en ambos lados)', topic);
    ['a) 5x + 3 = 2x + 12', 'b) 7x - 4 = 3x + 8', 'c) 2x + 1 = x + 6', 'd) 4x - 5 = x + 10', 'e) 6x + 2 = x + 17']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));

    writeSectionTitle(doc, '3) Resuelve (con parentesis)', topic);
    ['a) 2(x + 3) = 14', 'b) 3(x - 1) = 9', 'c) 4(x + 2) = 20', 'd) 3(x - 5) = 2(x - 1)', 'e) 5(x - 4) + 6 = 4(x + 1)']
      .forEach(e => writeExerciseItem(doc, e, 4, topic));
  });
}

// ─── PDF 6-7: ECUACIONES CON DENOMINADOR ──────────────────────────

async function generateDenominador() {
  const topic = 'Ecuaciones con Denominador';
  await createDoc('6-7-ecuaciones-denominador.pdf', topic, (doc) => {
    addIntroBox(doc, 'Pasos: 1) m.c.m.  2) Eliminar parentesis  3) Reducir  4) Transponer  5) Despejar');

    writeSectionTitle(doc, '1) Calcula el m.c.m. de los denominadores', topic);
    ['a) 2 y 4', 'b) 3 y 6', 'c) 2 y 5', 'd) 3, 4 y 6']
      .forEach(e => writeExerciseItem(doc, e, 3, topic));

    writeSectionTitle(doc, '2) Resuelve las ecuaciones con denominador', topic);
    [
      'a) x/2 + 1 = 5', 'b) x/5 = 4', 'c) x/3 + 2 = 7',
      'd) x/4 - 1 = 2', 'e) x/2 + x/6 = 8', 'f) x/3 = 6',
      'g) 2x/3 + x/2 = 7', 'h) x/2 - 1 = x/4 + 1'
    ].forEach(e => writeExerciseItem(doc, e, 5, topic));
  });
}

// ─── Main ──────────────────────────────────────────────────────────

async function generateAll() {
  console.log('Generando PDFs Unidad 6...');
  await generateIgualdad();
  console.log('  OK 6-1-igualdad-algebraica.pdf');
  await generateIdentidad();
  console.log('  OK 6-2-identidad.pdf');
  await generateEcuacion();
  console.log('  OK 6-3-ecuacion.pdf');
  await generateEquivalentes();
  console.log('  OK 6-4-ecuaciones-equivalentes.pdf');
  await generateTransposicion();
  console.log('  OK 6-5-transposicion-terminos.pdf');
  await generateMetodo();
  console.log('  OK 6-6-metodo-general.pdf');
  await generateDenominador();
  console.log('  OK 6-7-ecuaciones-denominador.pdf');
  console.log('Listo!');
}

generateAll();