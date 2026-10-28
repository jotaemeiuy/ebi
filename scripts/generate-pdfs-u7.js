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

const COLOR_TITLE     = '#4c1d95';
const COLOR_H3        = '#312e81';
const COLOR_FORMULA   = '#7c3aed';
const COLOR_ITEM      = '#0f172a';
const COLOR_LINES     = '#cbd5e1';
const COLOR_FOOTER    = '#94a3b8';
const COLOR_BG_H3     = '#ede9fe';
const COLOR_BG_BOX    = '#f5f3ff';
const COLOR_AXIS      = '#64748b';
const COLOR_GRID      = '#e2e8f0';
const COLOR_LINE      = '#7c3aed';
const COLOR_ROOT      = '#d97706';
const COLOR_INTERCEPT = '#059669';
const COLOR_VERTEX    = '#db2777';

const UNIT_ID = 7;
const UNIT_LABEL = 'FUNCIÓN CUADRÁTICA';
const UNIT_FOOTER = 'Función cuadrática';

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

function addIntroBox(doc, text, height = 34) {
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

function drawValueTable(doc, xValues, topicTitle, header = 'f(x)') {
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
    .text(header, left + colW, y + 6, { width: colW, align: 'center' });
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

function planeLayout(opts) {
  const { xmin, xmax, ymin, ymax, step, top } = opts;
  const ox = 50 + (595.28 - 100) / 2 - ((xmin + xmax) / 2) * step;
  const oy = top + ymax * step;
  return { ox, oy, step, xmin, xmax, ymin, ymax };
}

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

  return { px, py, xmin, xmax, ymin, ymax };
}

function drawParabola(doc, opts, a, b, c) {
  const { px, py, xmin, xmax, ymin, ymax } = opts;
  const inside = (y) => y >= ymin - 0.001 && y <= ymax + 0.001;

  doc.strokeColor(COLOR_LINE).lineWidth(2);
  let drawing = false;
  for (let i = 0; i <= 320; i++) {
    const x = xmin + ((xmax - xmin) * i) / 320;
    const y = a * x * x + b * x + c;
    if (!inside(y)) {
      drawing = false;
      continue;
    }
    if (!drawing) {
      doc.moveTo(px(x), py(y));
      drawing = true;
    } else {
      doc.lineTo(px(x), py(y));
    }
  }
  doc.stroke();
}

function drawPoint(doc, x, y, color, label, labelDx = 8, labelDy = -12) {
  doc.circle(x, y, 3).fill(color);
  if (label) {
    doc.fontSize(8).fillColor(color)
      .text(label, x + labelDx, y + labelDy, { lineBreak: false });
  }
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

async function generateFuncionCuadratica() {
  const topic = 'Ejercicios';

  await createDoc('7-1-funcion-cuadratica.pdf', topic, (doc) => {
    addIntroBox(doc,
      'Una función cuadrática tiene la forma f(x) = ax² + bx + c, con a distinto de 0. Su gráfica es una parábola. Practicá tabla, imagen, preimagen, raíces, vértice, eje de simetría, signo y gráficas.',
      40);

    // A) Reconocer y tabular
    writeSectionTitle(doc, 'A) Reconocer una función cuadrática', topic);

    doc.fontSize(11).fillColor(COLOR_ITEM)
      .text('1) Indicá a, b y c en cada función. ¿Abre hacia arriba o hacia abajo?', 60, doc.y, { width: doc.page.width - 120 });
    doc.moveDown(0.4);
    [
      'a) f(x) = 2x² - 8x + 5',
      'b) f(x) = -x² + 4x',
      'c) f(x) = x² - 9',
      'd) f(x) = -3x² + 6x - 1',
      'e) f(x) = x² + 2x + 1',
    ].forEach((e) => writeExerciseItem(doc, e, 1, topic));

    doc.fontSize(11).fillColor(COLOR_ITEM).text('2) Completá la tabla para f(x) = x² - 2x:', 60, doc.y);
    doc.moveDown(0.4);
    drawValueTable(doc, ['-2', '-1', '0', '1', '2', '3', '4'], topic, 'x² - 2x');

    doc.fontSize(11).fillColor(COLOR_ITEM).text('3) Completá la tabla para f(x) = -x² + 4x - 3:', 60, doc.y);
    doc.moveDown(0.4);
    drawValueTable(doc, ['0', '1', '2', '3', '4'], topic, '-x² + 4x - 3');

    // B) Imagen y preimagen
    writeSectionTitle(doc, 'B) Imagen y preimagen', topic);

    writeExerciseItem(doc, '4) Para f(x) = x² - 3x + 1, calculá f(2), f(0) y f(-1).', 2, topic);
    writeExerciseItem(doc, '5) Para f(x) = -2x² + 8x - 5, calculá f(1), f(3) y f(0).', 2, topic);
    writeExerciseItem(doc, '6) Para f(x) = x², encontrá todas las preimágenes de 0, de 4 y de 9.', 3, topic);
    writeExerciseItem(doc, '7) Para f(x) = x² - 4, encontrá todas las preimágenes de 0, de 5 y de -1.', 3, topic);
    writeExerciseItem(doc, '8) Para f(x) = x² + 2x - 3, encontrá todas las preimágenes de 0, de -3 y de -4.', 4, topic);
    writeExerciseItem(doc, '9) Para f(x) = -x² + 6x - 5, encontrá todas las preimágenes de 0 y de 4.', 3, topic);

    // C) Raíces
    checkPageBreak(doc, 120, topic);
    writeSectionTitle(doc, 'C) Raíces y ordenada en el origen', topic);

    doc.fontSize(11).fillColor(COLOR_ITEM)
      .text('10) Resolvé cada ecuación y encontrá las raíces. Usá el método que convenga (factor común, despeje o Bhaskara):', 60, doc.y, { width: doc.page.width - 120 });
    doc.moveDown(0.3);
    [
      'a) f(x) = x² - 5x + 6',
      'b) f(x) = x² - 4x + 4',
      'c) f(x) = x² + 2x + 5',
      'd) f(x) = 2x² - 8',
      'e) f(x) = -x² + 2x + 3',
      'f) f(x) = 3x² + 6x',
    ].forEach((e) => writeExerciseItem(doc, e, 2, topic));

    writeTextExerciseItem(doc,
      '11) Resolvé y decidí cuántas raíces reales tiene cada función:\n' +
      'a) f(x) = x² - 3x + 7\n' +
      'b) f(x) = 4x² - 4x + 1\n' +
      'c) f(x) = -2x² + 5x - 1', 3, topic);

    writeExerciseItem(doc, '12) Escribí la ordenada en el origen de las funciones del ejercicio 10.', 3, topic);
    writeExerciseItem(doc, '13) Una parábola corta al eje x en -2 y en 5. Escribí una fórmula posible y su ordenada en el origen.', 3, topic);

    // D) Vértice y eje de simetría
    writeSectionTitle(doc, 'D) Vértice y eje de simetría', topic);

    doc.fontSize(11).fillColor(COLOR_ITEM)
      .text('14) Calculá el vértice y el eje de simetría. Indicá si es máximo o mínimo:', 60, doc.y, { width: doc.page.width - 120 });
    doc.moveDown(0.3);
    [
      'a) f(x) = x² - 6x + 5',
      'b) f(x) = -x² + 4x - 1',
      'c) f(x) = 2x² + 8x + 3',
      'd) f(x) = x² - 2x + 1',
      'e) f(x) = -3x² + 12x',
    ].forEach((e) => writeExerciseItem(doc, e, 2, topic));

    writeExerciseItem(doc, '15) El vértice de una parábola es (2, -3) y pasa por (0, 5). ¿Cuál es su eje de simetría? ¿Es máximo o mínimo?', 2, topic);

    // E) Signo
    writeSectionTitle(doc, 'E) Signo de las imágenes', topic);

    doc.fontSize(11).fillColor(COLOR_ITEM)
      .text('16) Escribí el signo de las imágenes en la recta numérica, marcando las raíces con 0:', 60, doc.y, { width: doc.page.width - 120 });
    doc.moveDown(0.3);
    [
      'a) f(x) = x² - 9',
      'b) f(x) = x² - 4x + 4',
      'c) f(x) = -x² - 4',
      'd) f(x) = 2x² - 8x + 6',
    ].forEach((e) => writeExerciseItem(doc, e, 2, topic));

    writeExerciseItem(doc, '17) Para f(x) = x² - 2x - 8, indicá en qué intervalos f(x) > 0, f(x) < 0 y f(x) = 0.', 3, topic);

    // F) Gráficas
    checkPageBreak(doc, 260, topic);
    writeSectionTitle(doc, 'F) De la tabla a la gráfica', topic);

    doc.fontSize(11).fillColor(COLOR_ITEM)
      .text('18) Graficá f(x) = x² - 4x + 3. Marcá las raíces, la ordenada en el origen y el vértice.', 60, doc.y, { width: doc.page.width - 120 });
    doc.moveDown(0.4);

    let top = doc.y + 12;
    let opts = planeLayout({ xmin: -1, xmax: 5, ymin: -2, ymax: 6, step: 28, top });
    drawPlane(doc, opts);
    doc.y = top + 8 * 28 + 22;

    checkPageBreak(doc, 320, topic);
    doc.fontSize(11).fillColor(COLOR_ITEM)
      .text('19) Observá la gráfica de f(x) = -x² + 4x y respondé:', 60, doc.y);
    doc.moveDown(0.4);

    top = doc.y + 12;
    opts = planeLayout({ xmin: -1, xmax: 5, ymin: -2, ymax: 5, step: 30, top });
    const map = drawPlane(doc, opts);
    drawParabola(doc, map, -1, 4, 0);
    drawPoint(doc, map.px(0), map.py(0), COLOR_ROOT, '(0, 0)', 6, 8);
    drawPoint(doc, map.px(4), map.py(0), COLOR_ROOT, '(4, 0)', 6, 8);
    drawPoint(doc, map.px(2), map.py(4), COLOR_VERTEX, 'V (2, 4)', 7, -10);
    doc.moveTo(map.px(2), map.py(-2)).lineTo(map.px(2), map.py(5))
      .strokeColor(COLOR_VERTEX).lineWidth(0.8).dash(4, { space: 3 }).stroke();
    doc.undash();
    doc.y = top + 7 * 30 + 20;

    [
      'a) ¿Cuáles son las raíces?',
      'b) ¿Cuál es el vértice y cuál el eje de simetría?',
      'c) ¿La parábola abre hacia arriba o hacia abajo?',
      'd) ¿En qué intervalo f(x) > 0?',
    ].forEach((e) => writeExerciseItem(doc, e, 1, topic));

    writeExerciseItem(doc, '20) Graficá f(x) = -x² + 2x + 3 e indicá raíces, vértice, eje de simetría y signo.', 3, topic);

    // G) Aplicaciones
    writeSectionTitle(doc, 'G) Aplicaciones', topic);

    writeTextExerciseItem(doc,
      '21) Se lanza una pelota hacia arriba. Su altura (en metros) después de t segundos es h(t) = -5t² + 20t.\n' +
      'a) ¿Qué altura alcanza al segundo 1? ¿Y al segundo 3?\n' +
      'b) ¿En qué instante alcanza la altura máxima? ¿Cuál es esa altura?\n' +
      'c) ¿En qué instante vuelve al suelo?', 3, topic);

    writeTextExerciseItem(doc,
      '22) Con 40 metros de alambre se quiere cercar un corral rectangular usando un muro como uno de los lados.\n' +
      'Si el lado perpendicular al muro mide x, el área es A(x) = x(40 - 2x).\n' +
      'a) Escribí A(x) en la forma ax² + bx + c.\n' +
      'b) ¿Qué valor de x da el área máxima?\n' +
      'c) ¿Cuál es esa área máxima?', 3, topic);

    writeTextExerciseItem(doc,
      '23) Una empresa vende remeras a $2000 cada una y vende 100 por mes. Por cada $100 de aumento, vende 5 menos.\n' +
      'El ingreso es I(x) = (2000 + 100x)(100 - 5x).\n' +
      'a) Desarrollá I(x).\n' +
      'b) ¿Cuántos aumentos conviene hacer para maximizar el ingreso?\n' +
      'c) ¿Cuál es el ingreso máximo?', 3, topic);

    // H) Desafíos
    writeSectionTitle(doc, 'H) Desafíos', topic);

    writeExerciseItem(doc, '24) Una parábola tiene vértice (3, -4) y pasa por (1, 0). Encontrá su fórmula.', 3, topic);
    writeExerciseItem(doc, '25) Una parábola pasa por (0, 3), (1, 0) y (3, 0). Encontrá a, b y c.', 3, topic);
    writeExerciseItem(doc, '26) Encontrá el valor de k para que f(x) = x² - 6x + k tenga una sola raíz real.', 2, topic);
    writeExerciseItem(doc, '27) Encontrá dos números que sumen 10 y cuyo producto sea lo más grande posible.', 4, topic);
  });
}

async function generateAll() {
  console.log('Generando PDF de la Unidad 7...');
  await generateFuncionCuadratica();
  console.log('  OK 7-1-funcion-cuadratica.pdf');
  console.log('Listo! PDF en public/pdfs/');
}

generateAll();
