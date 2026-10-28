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
const COLOR_AXIS    = '#64748b';
const COLOR_GRID    = '#e2e8f0';
const COLOR_LINE    = '#7c3aed';
const COLOR_ROOT    = '#d97706';
const COLOR_INTERCEPT = '#059669';

const UNIT_ID = 6;
const UNIT_LABEL = 'FUNCIÓN LINEAL';
const UNIT_FOOTER = 'Función lineal';

// ─── Helpers generales ──────────────────────────────────────────

function addHeader(doc, topicTitle) {
  const W = doc.page.width;
  doc.rect(0, 0, W, 50).fill(COLOR_TITLE);
  doc.fontSize(8).fillColor('#c4b5fd').text(`UNIDAD ${UNIT_ID} - ${UNIT_LABEL}`, 50, 12);
  doc.fontSize(13).fillColor('#ffffff').text(topicTitle, 50, 25);
  doc.fillColor(COLOR_ITEM);
  doc.y = 70;
}

function addPageFooter(doc, topicTitle) {
  const W = doc.page.width;
  const H = doc.page.height;
  doc.fontSize(8).fillColor(COLOR_FOOTER)
    .text(`EBI 9C | ${UNIT_FOOTER} | ${topicTitle}`, 50, H - 30, { width: W - 100, align: 'center' });
}

function checkPageBreak(doc, neededHeight, topicTitle) {
  if (doc.y + neededHeight > doc.page.height - 50) {
    addPageFooter(doc, topicTitle);
    doc.addPage();
    doc.y = 50;
  }
}

function writeSectionTitle(doc, text, topicTitle) {
  checkPageBreak(doc, 60, topicTitle);
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

// ─── Texto con fracciones ───────────────────────────────────────

function parseMath(text) {
  const tokens = [];
  const regex = /(\\frac\{[^}]*\}\{[^}]*})|([A-Za-z0-9]+\s*\/\s*[A-Za-z0-9]+)/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    if (match[1]) {
      const parts = match[1].slice(1, -1).split('}{');
      tokens.push({ type: 'frac', num: parts[0], den: parts[1] });
    } else {
      const [num, den] = match[2].split('/').map(s => s.trim());
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
  const fracW = 3;
  const tokens = parseMath(text);
  let currentX = x;
  const cursorBase = y;

  tokens.forEach((tok) => {
    if (tok.type === 'frac') {
      doc.fontSize(fracSize);
      const wNum = doc.widthOfString(tok.num);
      const wDen = doc.widthOfString(tok.den);
      const w = Math.max(wNum, wDen) + fracW * 2;
      doc.text(tok.num, currentX + (w - wNum) / 2, cursorBase - 8, { lineBreak: false });
      doc.text(tok.den, currentX + (w - wDen) / 2, cursorBase + 5, { lineBreak: false });
      doc.moveTo(currentX, cursorBase - 2)
        .lineTo(currentX + w, cursorBase - 2)
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

// ─── Ejercicios ─────────────────────────────────────────────────

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

function writeExerciseItem(doc, text, answerLines, topicTitle) {
  const lineH = 14;
  const needed = 16 + answerLines * lineH + 8;
  checkPageBreak(doc, needed, topicTitle);

  doc.fillColor(COLOR_ITEM);
  doc.x = 60;
  writeFormattedExercise(doc, text, 60, doc.y);
  drawAnswerLines(doc, answerLines);
}

function writeTextExerciseItem(doc, text, answerLines, topicTitle) {
  const lineH = 14;
  const needed = 32 + answerLines * lineH + 8;
  checkPageBreak(doc, needed, topicTitle);

  doc.fontSize(11).fillColor(COLOR_ITEM)
    .text(text, 60, doc.y, { width: doc.page.width - 120 });
  doc.moveDown(0.6);
  drawAnswerLines(doc, answerLines);
}

// ─── Tabla de valores ───────────────────────────────────────────

function drawValueTable(doc, xValues, topicTitle) {
  const needed = 30 + xValues.length * 22 + 12;
  checkPageBreak(doc, needed, topicTitle);

  const left = 60;
  const colW = 70;
  const rowH = 22;
  let y = doc.y;

  doc.rect(left, y, colW * 2, rowH).fill(COLOR_BG_H3);
  doc.fontSize(10).fillColor(COLOR_H3)
    .text('x', left, y + 6, { width: colW, align: 'center' });
  doc.fontSize(10).fillColor(COLOR_H3)
    .text('f(x)', left + colW, y + 6, { width: colW, align: 'center' });
  y += rowH;

  xValues.forEach((value) => {
    doc.moveTo(left, y).lineTo(left + colW * 2, y)
      .strokeColor(COLOR_LINES).lineWidth(0.7).stroke();
    doc.moveTo(left + colW, y).lineTo(left + colW, y + rowH)
      .strokeColor(COLOR_LINES).lineWidth(0.7).stroke();
    doc.fontSize(11).fillColor(COLOR_ITEM)
      .text(value, left, y + 6, { width: colW, align: 'center' });
    y += rowH;
  });

  doc.moveTo(left, y).lineTo(left + colW * 2, y)
    .strokeColor(COLOR_LINES).lineWidth(0.7).stroke();
  doc.moveTo(left + colW, y - rowH).lineTo(left + colW, y)
    .strokeColor(COLOR_LINES).lineWidth(0.7).stroke();

  doc.y = y + 14;
}

// ─── Plano cartesiano ───────────────────────────────────────────

function drawPlane(doc, opts) {
  const {
    ox, oy, step,
    xmin, xmax, ymin, ymax,
    labelEvery = 2,
  } = opts;

  const px = (x) => ox + x * step;
  const py = (y) => oy - y * step;

  for (let x = xmin; x <= xmax; x++) {
    doc.moveTo(px(x), py(ymax)).lineTo(px(x), py(ymin))
      .strokeColor(COLOR_GRID).lineWidth(0.5).stroke();
  }
  for (let y = ymin; y <= ymax; y++) {
    doc.moveTo(px(xmin), py(y)).lineTo(px(xmax), py(y))
      .strokeColor(COLOR_GRID).lineWidth(0.5).stroke();
  }

  doc.moveTo(px(xmin), py(0)).lineTo(px(xmax) + 8, py(0))
    .strokeColor(COLOR_AXIS).lineWidth(1.2).stroke();
  doc.moveTo(px(0), py(ymin)).lineTo(px(0), py(ymax) - 8)
    .strokeColor(COLOR_AXIS).lineWidth(1.2).stroke();

  doc.moveTo(px(xmax) + 8, py(0)).lineTo(px(xmax) + 2, py(0) - 3).strokeColor(COLOR_AXIS).stroke();
  doc.moveTo(px(xmax) + 8, py(0)).lineTo(px(xmax) + 2, py(0) + 3).strokeColor(COLOR_AXIS).stroke();
  doc.moveTo(px(0), py(ymax) - 8).lineTo(px(0) - 3, py(ymax) - 2).strokeColor(COLOR_AXIS).stroke();
  doc.moveTo(px(0), py(ymax) - 8).lineTo(px(0) + 3, py(ymax) - 2).strokeColor(COLOR_AXIS).stroke();

  doc.fontSize(8).fillColor(COLOR_AXIS);
  doc.text('x', px(xmax) + 10, py(0) + 5);
  doc.text('y', px(0) + 5, py(ymax) - 14);

  doc.fontSize(7).fillColor(COLOR_AXIS);
  const xStart = Math.ceil(xmin / labelEvery) * labelEvery;
  for (let x = xStart; x <= xmax; x += labelEvery) {
    if (x === 0) continue;
    doc.text(String(x), px(x) - 8, py(0) + 4, { width: 16, align: 'center' });
  }
  const yStart = Math.ceil(ymin / labelEvery) * labelEvery;
  for (let y = yStart; y <= ymax; y += labelEvery) {
    if (y === 0) continue;
    doc.text(String(y), px(0) - 18, py(y) - 3, { width: 14, align: 'right' });
  }

  return { px, py };
}

function drawPoint(doc, x, y, color, label, labelDx = 8, labelDy = -12) {
  doc.circle(x, y, 3).fill(color);
  if (label) {
    doc.fontSize(8).fillColor(color)
      .text(label, x + labelDx, y + labelDy, { lineBreak: false });
  }
}

// ─── Esquema de signos ──────────────────────────────────────────

function drawSignScheme(doc, rootLabel, topicTitle) {
  const needed = 70;
  checkPageBreak(doc, needed, topicTitle);

  const y = doc.y;
  const left = 100;
  const width = 340;
  const mid = left + width / 2;

  doc.fontSize(11);
  doc.fillColor(COLOR_AXIS).text('?  ?  ?  ?', left, y, { width: width / 2 - 14, align: 'right' });
  doc.fillColor(COLOR_ROOT).text('0', mid - 10, y, { width: 20, align: 'center' });
  doc.fillColor(COLOR_AXIS).text('?  ?  ?  ?', mid + 14, y);

  const lineY = y + 20;
  doc.moveTo(left, lineY).lineTo(left + width, lineY)
    .strokeColor(COLOR_AXIS).lineWidth(1).stroke();
  doc.moveTo(mid, lineY - 4).lineTo(mid, lineY + 4)
    .strokeColor(COLOR_ROOT).lineWidth(1.4).stroke();

  doc.fontSize(8).fillColor(COLOR_AXIS)
    .text(`x < ${rootLabel}`, left, lineY + 6, { width: 100, align: 'left' });
  doc.text(`${rootLabel} (raíz)`, mid - 40, lineY + 6, { width: 80, align: 'center' });
  doc.text(`x > ${rootLabel}`, left + width - 100, lineY + 6, { width: 100, align: 'right' });

  doc.y = lineY + 22;
}

// ─── PDF ────────────────────────────────────────────────────────

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

async function generateFuncionLineal() {
  const topic = 'Ejercicios';

  await createDoc('6-1-funcion-lineal.pdf', topic, (doc) => {
    addIntroBox(doc, 'Una función lineal tiene la forma f(x) = ax + b. Aplicá imagen, preimagen, raíz, ordenada en el origen, gráfica y signo.', 34);

    // A) La máquina y la tabla
    writeSectionTitle(doc, 'A) La máquina y la tabla', topic);

    doc.fontSize(11).fillColor(COLOR_ITEM).text('1) Completá la tabla para f(x) = 3x - 1:', 60, doc.y);
    doc.moveDown(0.4);
    drawValueTable(doc, ['-2', '-1', '0', '1', '2'], topic);

    writeExerciseItem(doc, '2) Para f(x) = x - 4, calculá f(5), f(0) y f(-3).', 2, topic);
    writeExerciseItem(doc, '3) Escribí con notación de función: “la imagen de 2 es 7” en f(x) = 2x + 3.', 2, topic);

    // B) Imagen y preimagen
    writeSectionTitle(doc, 'B) Imagen y preimagen', topic);

    writeExerciseItem(doc, '4) Para f(x) = 2x + 5, calculá f(3), f(-4) y f(0).', 2, topic);
    writeExerciseItem(doc, '5) Para la misma función, encontrá la preimagen de 11 y la preimagen de -1.', 2, topic);
    writeExerciseItem(doc, '6) Para f(x) = -3x + 6, encontrá la preimagen de 0, de 9 y de -3.', 2, topic);
    writeExerciseItem(doc, '7) Para f(x) = x/2 + 1, calculá f(6) y encontrá la preimagen de 4 y la de 0.', 2, topic);

    // C) Raíz y ordenada en el origen
    checkPageBreak(doc, 230, topic);
    writeSectionTitle(doc, 'C) Raíz y ordenada en el origen', topic);

    doc.fontSize(11).fillColor(COLOR_ITEM).text('8) Hallá la raíz y la ordenada en el origen de cada función:', 60, doc.y);
    doc.moveDown(0.3);
    [
      'a) f(x) = 4x - 8',
      'b) f(x) = -2x + 6',
      'c) f(x) = x + 5',
      'd) f(x) = 3x',
    ].forEach((e) => writeExerciseItem(doc, e, 1, topic));

    writeExerciseItem(doc, '9) Una recta corta al eje y en (0, -2) y al eje x en (3, 0). Escribí su fórmula.', 2, topic);
    writeExerciseItem(doc, '10) Una función lineal f(x) = ax + b tiene raíz x = 4 y ordenada en el origen 8. Encontrá a y b.', 3, topic);

    // D) De la tabla a la gráfica
    writeSectionTitle(doc, 'D) De la tabla a la gráfica', topic);

    doc.fontSize(11).fillColor(COLOR_ITEM)
      .text('11) Armá una tabla de valores y graficá f(x) = 2x - 4. Marcá la raíz y la ordenada en el origen.', 60, doc.y, { width: doc.page.width - 120 });
    doc.moveDown(0.5);

    checkPageBreak(doc, 250, topic);
    let planeTop = doc.y + 10;
    drawPlane(doc, { ox: 264, oy: planeTop + 4 * 22 + 10, step: 22, xmin: -2, xmax: 5, ymin: -6, ymax: 4 });
    doc.y = planeTop + 10 * 22 + 20;

    checkPageBreak(doc, 340, topic);
    doc.fontSize(11).fillColor(COLOR_ITEM)
      .text('12) Observá la siguiente gráfica y respondé:', 60, doc.y);
    doc.moveDown(0.4);

    planeTop = doc.y + 10;
    const map = drawPlane(doc, { ox: 297, oy: planeTop + 5 * 24 + 10, step: 24, xmin: -4, xmax: 4, ymin: -3, ymax: 5 });

    doc.moveTo(map.px(-0.5), map.py(5)).lineTo(map.px(3.5), map.py(-3))
      .strokeColor(COLOR_LINE).lineWidth(2).stroke();

    drawPoint(doc, map.px(0), map.py(4), COLOR_INTERCEPT, '(0, 4)', 8, -12);
    drawPoint(doc, map.px(2), map.py(0), COLOR_ROOT, '(2, 0)', 8, -12);

    doc.y = planeTop + 8 * 24 + 24;

    [
      'a) ¿Cuál es la raíz?',
      'b) ¿Cuál es la ordenada en el origen?',
      'c) ¿Cuánto vale f(1)?',
      'd) ¿Para qué valores de x las imágenes son positivas? ¿Y negativas?',
    ].forEach((e) => writeExerciseItem(doc, e, 1, topic));

    writeExerciseItem(doc, '13) Una recta pasa por los puntos (1, 5) y (3, 11). Encontrá su fórmula.', 2, topic);

    // E) Signo de las imágenes
    writeSectionTitle(doc, 'E) Signo de las imágenes', topic);

    doc.fontSize(11).fillColor(COLOR_ITEM).text('14) Escribí el signo de las imágenes de cada función:', 60, doc.y);
    doc.moveDown(0.3);
    [
      'a) f(x) = 3x - 6',
      'b) f(x) = -2x + 4',
      'c) f(x) = x + 1',
      'd) f(x) = -x - 3',
    ].forEach((e) => writeExerciseItem(doc, e, 1, topic));

    checkPageBreak(doc, 130, topic);
    doc.fontSize(11).fillColor(COLOR_ITEM).text('15) Completá el esquema de signos para f(x) = 2x - 8:', 60, doc.y);
    doc.moveDown(0.4);
    drawSignScheme(doc, '4', topic);
    doc.moveDown(0.3);
    doc.fontSize(10).fillColor(COLOR_ITEM).text('¿Qué signo corresponde a cada lado de la raíz?', 60, doc.y);
    doc.moveDown(0.6);

    // F) Aplicaciones
    writeSectionTitle(doc, 'F) Aplicaciones', topic);

    writeTextExerciseItem(doc,
      '16) El costo de un viaje en taxi se calcula con f(x) = 50 + 20x, donde x son los kilómetros recorridos y f(x) se mide en pesos.\n' +
      'a) ¿Cuánto se paga por 0 km? ¿Qué significa ese valor?\n' +
      'b) ¿Cuánto se paga por 5 km?\n' +
      'c) Si un viaje costó 250 pesos, ¿cuántos kilómetros se recorrieron?\n' +
      'd) ¿Tiene sentido la raíz de esta función en el contexto del problema?', 3, topic);

    writeTextExerciseItem(doc,
      '17) Para pasar de grados Celsius a Fahrenheit se usa f(x) = 1,8x + 32.\n' +
      'a) ¿Cuántos grados Fahrenheit son 20 °C?\n' +
      'b) Si hay 95 °F, ¿cuántos grados Celsius hay?', 2, topic);

    writeTextExerciseItem(doc,
      '18) Una alcancía tiene 200 pesos y se le agregan 50 pesos por mes: f(x) = 200 + 50x.\n' +
      'a) ¿Cuánto dinero hay a los 6 meses?\n' +
      'b) ¿En qué mes se llega a 700 pesos?', 2, topic);

    // G) Desafíos
    writeSectionTitle(doc, 'G) Desafíos', topic);

    writeExerciseItem(doc, '19) Una recta tiene raíz x = -2 y pasa por (0, 4). Escribí su fórmula y calculá f(3).', 2, topic);
    writeExerciseItem(doc, '20) Una función lineal cumple f(1) = 7 y f(3) = 15. Encontrá a, b, la raíz y la ordenada en el origen.', 3, topic);
  });
}

async function generateAll() {
  console.log('Generando PDF de la Unidad 6...');
  await generateFuncionLineal();
  console.log('  OK 6-1-funcion-lineal.pdf');
  console.log('Listo! PDF en public/pdfs/');
}

generateAll();
