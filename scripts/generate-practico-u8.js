import PDFDocument from 'pdfkit';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = join(__dirname, '../public/pdfs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const COLOR_TITLE = '#4c1d95';
const COLOR_H3 = '#312e81';
const COLOR_FORMULA = '#7c3aed';
const COLOR_ITEM = '#0f172a';
const COLOR_LINES = '#cbd5e1';
const COLOR_FOOTER = '#94a3b8';
const COLOR_BG_H3 = '#ede9fe';
const COLOR_BG_BOX = '#f5f3ff';
const COLOR_GRID = '#e2e8f0';
const COLOR_AXIS = '#94a3b8';
const COLOR_LINE_A = '#7c3aed';
const COLOR_LINE_B = '#059669';

const TOPIC = 'Práctico: analítico y gráfico';
const M = 50;

const doc = new PDFDocument({
  size: 'A4',
  info: {
    Title: 'Práctico integrador - Sistemas de ecuaciones 2x2',
    Author: 'EBI - Matemática | UTU Arroyo Seco',
    Subject: 'Ejercicios analíticos y gráficos',
  },
  margins: { top: 50, bottom: 45, left: M, right: M },
  bufferPages: true,
});

const out = fs.createWriteStream(join(outputDir, '8-0-practico-sistemas.pdf'));
doc.pipe(out);

// ─── Helpers de layout ──────────────────────────────────────────

function pageW() {
  return doc.page.width;
}
function contentW() {
  return pageW() - M * 2;
}

function addHeader() {
  const W = pageW();
  doc.rect(0, 0, W, 56).fill(COLOR_TITLE);
  doc.fontSize(8).fillColor('#c4b5fd')
    .text('UNIDAD 8 - SISTEMAS DE ECUACIONES', M, 12, { lineBreak: false });
  doc.fontSize(13).fillColor('#ffffff')
    .text(TOPIC, M, 26, { lineBreak: false });
  doc.fillColor(COLOR_ITEM);
  doc.y = 78;
}

function addFooters() {
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    const H = doc.page.height;
    const oldBottom = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;
    doc.fontSize(8).fillColor(COLOR_FOOTER)
      .text(`EBI 9C | Sistemas de Ecuaciones | ${TOPIC}`, M, H - 32, {
        width: contentW() - 50,
        align: 'left',
        lineBreak: false,
      });
    doc.text(`${i + 1} / ${range.count}`, pageW() - M - 50, H - 32, {
      width: 50,
      align: 'right',
      lineBreak: false,
    });
    doc.page.margins.bottom = oldBottom;
  }
}

function newPageIfNeeded(needed) {
  if (doc.y + needed > doc.page.height - 55) {
    doc.addPage();
    doc.y = M;
  }
}

function sectionTitle(text) {
  newPageIfNeeded(70);
  doc.moveDown(0.4);
  const y = doc.y;
  doc.rect(M, y, contentW(), 22).fill(COLOR_BG_H3);
  doc.fontSize(11).fillColor(COLOR_H3)
    .text(text, M + 10, y + 5, { width: contentW() - 20, lineBreak: false });
  doc.y = y + 30;
}

function subTitle(text) {
  newPageIfNeeded(40);
  doc.fontSize(10.5).fillColor(COLOR_FORMULA)
    .text(text, M + 10, doc.y, { width: contentW() - 20 });
  doc.moveDown(0.35);
}

function introBox(lines, height) {
  const y = doc.y;
  const h = height || 30 + lines.length * 13;
  doc.rect(M, y, contentW(), h).fill(COLOR_BG_BOX);
  doc.fontSize(10).fillColor(COLOR_FORMULA);
  let ty = y + 8;
  lines.forEach((line) => {
    doc.text(line, M + 12, ty, { width: contentW() - 24 });
    ty += 13;
  });
  doc.fillColor(COLOR_ITEM);
  doc.y = y + h + 10;
}

function answerLines(n, indent = 20) {
  const lineH = 15;
  for (let i = 0; i < n; i++) {
    const y = doc.y;
    doc.moveTo(M + indent, y).lineTo(pageW() - M, y)
      .strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
    doc.y = y + lineH;
  }
  doc.moveDown(0.35);
}

function item(text, lines = 2, opts = {}) {
  const needed = 18 + lines * 15 + 8;
  newPageIfNeeded(needed);
  doc.fontSize(10.5).fillColor(COLOR_ITEM)
    .text(text, M + 10, doc.y, { width: contentW() - 10 });
  doc.moveDown(0.25);
  answerLines(lines, opts.indent || 20);
}

function textItem(text, lines = 3) {
  const needed = 34 + lines * 15;
  newPageIfNeeded(needed);
  doc.fontSize(10.5).fillColor(COLOR_ITEM)
    .text(text, M + 10, doc.y, { width: contentW() - 20 });
  doc.moveDown(0.35);
  answerLines(lines, 20);
}

// ─── Cuadrículas ────────────────────────────────────────────────

function drawGrid(x, y, size, min = -5, max = 5) {
  const unit = size / (max - min);
  doc.save();
  doc.rect(x, y, size, size).fillAndStroke('#ffffff', '#cbd5e1');

  for (let i = min; i <= max; i++) {
    const gx = x + (i - min) * unit;
    const gy = y + (max - i) * unit;
    if (i !== 0) {
      doc.moveTo(gx, y).lineTo(gx, y + size).strokeColor(COLOR_GRID).lineWidth(0.5).stroke();
      doc.moveTo(x, gy).lineTo(x + size, gy).strokeColor(COLOR_GRID).lineWidth(0.5).stroke();
    }
  }

  const ax = x + (0 - min) * unit;
  const ay = y + (max - 0) * unit;
  doc.moveTo(x, ay).lineTo(x + size, ay).strokeColor(COLOR_AXIS).lineWidth(1).stroke();
  doc.moveTo(ax, y).lineTo(ax, y + size).strokeColor(COLOR_AXIS).lineWidth(1).stroke();

  // Flechas
  doc.moveTo(x + size - 6, ay - 3).lineTo(x + size, ay).lineTo(x + size - 6, ay + 3)
    .strokeColor(COLOR_AXIS).lineWidth(1).stroke();
  doc.moveTo(ax - 3, y + 6).lineTo(ax, y).lineTo(ax + 3, y + 6)
    .strokeColor(COLOR_AXIS).lineWidth(1).stroke();

  // Números
  doc.fontSize(6.5).fillColor('#64748b');
  for (let i = min + 1; i < max; i++) {
    if (i === 0) continue;
    const gx = x + (i - min) * unit;
    const gy = y + (max - i) * unit;
    doc.text(String(i), gx - 5, ay + 3, { width: 10, align: 'center', lineBreak: false });
    doc.text(String(i), ax - 14, gy - 3, { width: 10, align: 'right', lineBreak: false });
  }
  doc.text('x', x + size - 6, ay + 12, { width: 10, lineBreak: false });
  doc.text('y', ax + 6, y + 6, { width: 10, lineBreak: false });
  doc.restore();
  doc.fillColor(COLOR_ITEM);
}

function gridPoint(x, y, size, px, py, min = -5, max = 5) {
  const unit = size / (max - min);
  return {
    x: x + (px - min) * unit,
    y: y + (max - py) * unit,
  };
}

function drawLine(x, y, size, m, b, color, dash, min = -5, max = 5) {
  const pts = [];
  for (let px = min; px <= max; px += 0.1) {
    const py = m * px + b;
    if (py >= min && py <= max) pts.push(gridPoint(x, y, size, px, py, min, max));
  }
  if (pts.length < 2) return;
  doc.save();
  if (dash) doc.dash(5, { space: 3 });
  doc.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) doc.lineTo(pts[i].x, pts[i].y);
  doc.strokeColor(color).lineWidth(1.6).stroke();
  doc.undash();
  doc.restore();
}

function drawPoint(x, y, size, px, py, label, min = -5, max = 5) {
  const p = gridPoint(x, y, size, px, py, min, max);
  doc.circle(p.x, p.y, 2.6).fill('#0f172a');
  doc.fontSize(7.5).fillColor('#0f172a')
    .text(label, p.x + 5, p.y - 10, { lineBreak: false });
}

// ─── Tablas ────────────────────────────────────────────────────

function drawTable(x, y, colW, rowH, headers, rows) {
  const w = colW.reduce((a, b) => a + b, 0);
  doc.save();
  doc.rect(x, y, w, rowH).fill('#ede9fe');
  doc.fillColor(COLOR_H3).fontSize(8.5);
  let cx = x;
  headers.forEach((h, i) => {
    doc.text(h, cx, y + 3, { width: colW[i], align: 'center', lineBreak: false });
    cx += colW[i];
  });
  doc.fillColor(COLOR_ITEM).fontSize(9);
  rows.forEach((row, r) => {
    const ry = y + rowH * (r + 1);
    let rx = x;
    row.forEach((cell, i) => {
      doc.text(cell, rx, ry + 4, { width: colW[i], align: 'center', lineBreak: false });
      rx += colW[i];
    });
  });
  // Bordes
  doc.strokeColor('#c4b5fd').lineWidth(0.7);
  for (let r = 0; r <= rows.length + 1; r++) {
    doc.moveTo(x, y + rowH * r).lineTo(x + w, y + rowH * r).stroke();
  }
  cx = x;
  doc.moveTo(x, y).lineTo(x, y + rowH * (rows.length + 1)).stroke();
  colW.forEach((c) => {
    cx += c;
    doc.moveTo(cx, y).lineTo(cx, y + rowH * (rows.length + 1)).stroke();
  });
  doc.restore();
  doc.fillColor(COLOR_ITEM);
  return y + rowH * (rows.length + 1);
}

// ─── Portada / encabezado ──────────────────────────────────────

addHeader();

doc.fontSize(20).fillColor(COLOR_H3)
  .text('Sistemas de ecuaciones 2×2', M, doc.y, { width: contentW() });
doc.moveDown(0.2);
doc.fontSize(12).fillColor(COLOR_FORMULA)
  .text('Práctico integrador: ejercicios analíticos y gráficos', M, doc.y, {
    width: contentW(),
  });
doc.moveDown(0.8);

doc.fontSize(10).fillColor(COLOR_ITEM);
let fy = doc.y;
doc.text('Nombre: ______________________________', M, fy, { lineBreak: false });
doc.text('Curso: ______________', M + 330, fy, { lineBreak: false });
doc.text('Fecha: ______________________________', M, fy + 20, { lineBreak: false });
doc.y = fy + 44;

introBox([
  'Un sistema 2×2 tiene dos ecuaciones lineales con dos incógnitas. Resolverlo es encontrar el par (x, y)',
  'que verifica las dos ecuaciones al mismo tiempo.',
  '',
  'Métodos analíticos: sustitución, igualación y reducción.',
  'Método gráfico: despejar y, armar una tabla de valores, graficar y leer el punto de corte.',
  '',
  'Según el gráfico, un sistema puede tener: una solución (rectas que se cortan), ninguna solución',
  '(rectas paralelas) o infinitas soluciones (rectas coincidentes).',
], 112);

doc.moveDown(0.4);
subTitle('¿Cómo está organizado?');
doc.fontSize(10).fillColor(COLOR_ITEM);
[
  'Bloque A - Trabajo analítico: verificar, resolver por los tres métodos, clasificar y plantear.',
  'Bloque B - Trabajo gráfico: despejar, tablas de valores, graficar en cuadrícula e interpretar.',
  'Bloque C - Integrador: elegir el método y resolver problemas combinados.',
  'Al final: respuestas para que puedas autocorregirte.',
].forEach((t) => {
  doc.text('•  ' + t, M + 12, doc.y, { width: contentW() - 24 });
  doc.moveDown(0.15);
});

doc.moveDown(0.6);
introBox([
  'Sugerencia: en cada ejercicio escribí el procedimiento completo. No alcanza con el resultado:',
  'la idea es que puedas explicar por qué el par obtenido verifica las dos ecuaciones.',
], 42);

// ─── BLOQUE A ──────────────────────────────────────────────────

sectionTitle('BLOQUE A - TRABAJO ANALÍTICO');

subTitle('1) ¿El par dado es solución del sistema? Reemplazá y justificá.');
[
  'a) (2, 3)  en  x + y = 5  ;  x - y = -1',
  'b) (1, 4)  en  2x + y = 6  ;  x - y = 3',
  'c) (3, 1)  en  3x - y = 8  ;  x + 2y = 5',
  'd) (-1, 2)  en  x + 2y = 3  ;  2x - y = -4',
  'e) (4, -1)  en  5x + 2y = 18  ;  x - 3y = 7',
  'f) (0, 0)  en  x + y = 1  ;  2x - y = 0',
].forEach((e) => item(e, 2));

subTitle('2) Resolver por sustitución. Verificá la solución.');
[
  'a) x + y = 7  ;  x - y = 1',
  'b) 2x + y = 8  ;  x + y = 5',
  'c) 3x - y = 4  ;  x + 2y = 6',
  'd) x + 2y = 8  ;  3x - y = 3',
  'e) 4x + y = 9  ;  2x - 3y = 1',
  'f) 5x + 2y = 16  ;  x + y = 5',
].forEach((e) => item(e, 4));

subTitle('3) Resolver por igualación. Verificá la solución.');
[
  'a) x + y = 9  ;  x - y = 1',
  'b) 2x + y = 11  ;  x - y = 1',
  'c) 3x + y = 10  ;  x + y = 6',
  'd) x + 3y = 14  ;  2x - y = 0',
  'e) 3x - 2y = 5  ;  x + y = 5',
  'f) 2x + 3y = 12  ;  x - y = 1',
].forEach((e) => item(e, 4));

subTitle('4) Resolver por reducción. Indicá qué operación hiciste.');
[
  'a) x + y = 5  ;  x - y = 1',
  'b) 2x + y = 9  ;  x - y = 0',
  'c) 3x + 2y = 12  ;  x + 2y = 8',
  'd) x + 3y = 10  ;  2x - y = 6',
  'e) 4x + y = 14  ;  2x + 3y = 12',
  'f) 2x + 3y = 12  ;  3x - 2y = 5',
].forEach((e) => item(e, 4));

subTitle('5) Clasificar sin graficar. Compará pendientes y ordenadas al origen.');
doc.fontSize(9.5).fillColor('#475569').text(
  'Ayuda: despejá y en las dos ecuaciones. Si las pendientes son distintas, hay una solución. Si son iguales y las ordenadas también, hay infinitas. Si son iguales y las ordenadas distintas, no hay solución.',
  M + 10,
  doc.y,
  { width: contentW() - 20 }
);
doc.moveDown(0.5);
[
  'a) 2x + y = 5  ;  4x + 2y = 10',
  'b) x - y = 2  ;  x - y = 5',
  'c) 3x + 2y = 7  ;  x - y = 1',
  'd) 2x - 3y = 6  ;  4x - 6y = 12',
  'e) x + 2y = 4  ;  2x + 4y = 9',
  'f) 5x - y = 3  ;  2x + 3y = 8',
].forEach((e) => item(e, 3));

subTitle('6) Plantear el sistema y resolver.');
[
  'a) La suma de dos números es 15 y su diferencia es 3. ¿Cuáles son?',
  'b) Un pantalón y una remera cuestan $25.000. El pantalón cuesta $7.000 más que la remera. ¿Cuánto cuesta cada uno?',
  'c) 3 cuadernos y 2 lápices cuestan $340; 2 cuadernos y 5 lápices cuestan $300. ¿Cuál es el precio de cada uno?',
  'd) Una madre y su hija suman 46 años. Hace 5 años, la madre triplicaba la edad de la hija. ¿Qué edad tiene cada una hoy?',
  'e) El perímetro de un rectángulo es 34 cm y el largo mide 5 cm más que el ancho. ¿Cuáles son sus dimensiones?',
  'f) Se mezclan 10 kg de café de $8 el kg con café de $12 el kg para obtener una mezcla de $9,60 el kg. ¿Cuántos kg de cada tipo se usan?',
].forEach((e) => textItem(e, 4));

// ─── BLOQUE B ──────────────────────────────────────────────────

doc.addPage();
doc.y = M;
sectionTitle('BLOQUE B - TRABAJO GRÁFICO');

subTitle('1) Despejar y en cada ecuación.');
[
  'a) 2x + y = 6          b) x - 3y = 6          c) 4x + 2y = 8',
  'd) x + y = 0            e) 3x - y = 5          f) 2x + 5y = 10',
].forEach((e) => item(e, 3));

subTitle('2) Completar las tablas de valores para cada sistema.');

const tablas = [
  { t: 'Sistema: x + y = 6  ;  y = 2x', h: ['x', 'y = 6 - x', 'y = 2x'] },
  { t: 'Sistema: 2x - y = 4  ;  x + y = 5', h: ['x', 'y = 2x - 4', 'y = 5 - x'] },
  { t: 'Sistema: x + y = 5  ;  x - y = 1', h: ['x', 'y = 5 - x', 'y = x - 1'] },
];

tablas.forEach((tab) => {
  newPageIfNeeded(150);
  doc.fontSize(10).fillColor(COLOR_ITEM).text(tab.t, M + 10, doc.y, {
    width: contentW() - 20,
  });
  doc.moveDown(0.35);
  const ty = doc.y;
  drawTable(M + (contentW() - 340) / 2, ty, [60, 140, 140], 22, tab.h, [
    ['0', '', ''],
    ['1', '', ''],
    ['2', '', ''],
    ['3', '', ''],
  ]);
  doc.y = ty + 22 * 5 + 14;
});

doc.fontSize(9.5).fillColor('#475569').text(
  'En cada tabla, ¿qué par se repite en las dos columnas de y? Ese es el punto de corte de las rectas.',
  M + 10,
  doc.y,
  { width: contentW() - 20 }
);
doc.moveDown(0.8);

doc.addPage();
doc.y = M;
sectionTitle('BLOQUE B (continuación) - RESOLVER GRÁFICAMENTE');
subTitle('3) Graficá las dos rectas, marcá el punto de corte y clasificá el sistema.');

const sistemas = [
  { t: 'a) x + y = 5  ;  x - y = 1', a: [1, 0], b: [-1, 0] },
  { t: 'b) y = 2x - 1  ;  y = -x + 5', a: [2, -1], b: [-1, 5] },
  { t: 'c) x + y = 3  ;  2x + 2y = 6', a: [1, 0], b: [-1, 3] },
  { t: 'd) x + 2y = 4  ;  x + 2y = 6', a: [-0.5, 2], b: [-0.5, 3] },
];

sistemas.forEach((s, i) => {
  newPageIfNeeded(330);
  doc.fontSize(10.5).fillColor(COLOR_ITEM).text(s.t, M + 10, doc.y, {
    width: contentW() - 20,
  });
  doc.moveDown(0.35);
  const gy = doc.y;
  drawGrid(M + 10, gy, 265);
  const rx = M + 10 + 265 + 25;
  doc.fontSize(9.5).fillColor(COLOR_ITEM);
  doc.text('Despejá y:', rx, gy, { lineBreak: false });
  doc.moveTo(rx + 62, gy + 12).lineTo(pageW() - M, gy + 12).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.moveTo(rx + 62, gy + 36).lineTo(pageW() - M, gy + 36).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.text('Punto de corte:', rx, gy + 62, { lineBreak: false });
  doc.text('( ____ , ____ )', rx + 80, gy + 62, { lineBreak: false });
  doc.text('Tipo de sistema:', rx, gy + 92, { lineBreak: false });
  doc.moveTo(rx + 82, gy + 104).lineTo(pageW() - M, gy + 104).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.text('Verificación:', rx, gy + 126, { lineBreak: false });
  doc.moveTo(rx + 66, gy + 138).lineTo(pageW() - M, gy + 138).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.moveTo(rx + 66, gy + 162).lineTo(pageW() - M, gy + 162).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.y = gy + 285;
});

doc.addPage();
doc.y = M;
sectionTitle('BLOQUE B (continuación) - MODELAR Y GRAFICAR');

function modelItem(text, axisLabel) {
  newPageIfNeeded(315);
  doc.fontSize(10.5).fillColor(COLOR_ITEM).text(text, M + 10, doc.y, {
    width: contentW() - 20,
  });
  doc.moveDown(0.4);
  const gy = doc.y;
  drawGrid(M + 10, gy, 200);
  doc.fontSize(9).fillColor('#475569')
    .text(axisLabel, M + 10, gy + 206, { width: 260, lineBreak: false });
  doc.y = gy + 228;
  answerLines(2);
}

modelItem(
  'a) Un estacionamiento A cobra $300 fijos más $100 por hora. El estacionamiento B cobra $100 fijos más $200 por hora. Escribí el sistema, graficá y averiguá a partir de cuántas horas conviene el A.',
  'y = costo total  /  x = horas'
);
modelItem(
  'b) El tanque A tiene 10 L y se llena a razón de 5 L por minuto. El tanque B tiene 40 L y se vacía a razón de 5 L por minuto. ¿En qué momento tienen la misma cantidad de agua?',
  'y = litros  /  x = minutos'
);

// ─── BLOQUE B: interpretación ──────────────────────────────────

doc.addPage();
doc.y = M;
sectionTitle('BLOQUE B (continuación) - LEER GRÁFICAS');

subTitle('5) Escribí el sistema que representa cada gráfica y su solución.');
doc.moveDown(0.2);

const interpretaciones = [
  { m1: 1, b1: 1, m2: -1, b2: 3, c1: COLOR_LINE_A, c2: COLOR_LINE_B, label: 'Gráfica 1' },
  { m1: 2, b1: 1, m2: 2, b2: -2, c1: COLOR_LINE_A, c2: COLOR_LINE_B, label: 'Gráfica 2' },
];

interpretaciones.forEach((g) => {
  newPageIfNeeded(330);
  doc.fontSize(10.5).fillColor(COLOR_ITEM).text(g.label, M + 10, doc.y);
  doc.moveDown(0.3);
  const gy = doc.y;
  drawGrid(M + 10, gy, 240);
  drawLine(M + 10, gy, 240, g.m1, g.b1, g.c1);
  drawLine(M + 10, gy, 240, g.m2, g.b2, g.c2, '6 4');
  const rx = M + 10 + 240 + 30;
  doc.fontSize(9.5).fillColor(COLOR_ITEM);
  doc.text('Recta 1:', rx, gy, { lineBreak: false });
  doc.moveTo(rx + 55, gy + 12).lineTo(pageW() - M, gy + 12).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.text('Recta 2:', rx, gy + 38, { lineBreak: false });
  doc.moveTo(rx + 55, gy + 50).lineTo(pageW() - M, gy + 50).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.text('Sistema:', rx, gy + 76, { lineBreak: false });
  doc.moveTo(rx + 55, gy + 88).lineTo(pageW() - M, gy + 88).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.moveTo(rx + 55, gy + 112).lineTo(pageW() - M, gy + 112).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.text('Solución:', rx, gy + 140, { lineBreak: false });
  doc.text('( ____ , ____ )', rx + 62, gy + 140, { lineBreak: false });
  doc.text('o  ____________________', rx, gy + 168, { lineBreak: false });
  doc.y = gy + 250;
});

// ─── BLOQUE C ──────────────────────────────────────────────────

doc.addPage();
doc.y = M;
sectionTitle('BLOQUE C - INTEGRADOR');

subTitle('1) Elegí el método más conveniente, resolvé y justificá la elección.');
[
  'a) y = 2x  ;  3x + y = 10',
  'b) 2x + 3y = 7  ;  2x - 3y = 1',
  'c) 3x + 4y = 10  ;  5x - 4y = 6',
  'd) x/2 + y = 4  ;  x - y = 2',
].forEach((e) => item(e, 4));

subTitle('2) Encontrá el error y corregilo.');
doc.fontSize(10.5).fillColor(COLOR_ITEM).text(
  'Un compañero resolvió el sistema  2x + y = 7  ;  x - y = 2  y escribió:',
  M + 10,
  doc.y,
  { width: contentW() - 20 }
);
doc.moveDown(0.3);
doc.fontSize(10.5).fillColor(COLOR_FORMULA).text(
  '"Sumo las ecuaciones: 3x = 9, entonces x = 3. Luego y = 3 + 2 = 5. Solución: (3, 5)."',
  M + 24,
  doc.y,
  { width: contentW() - 48 }
);
doc.moveDown(0.5);
answerLines(4, 24);

subTitle('3) Problema integrador.');
textItem(
  'En una granja hay gallinas y conejos. En total se cuentan 30 animales y 80 patas. ¿Cuántas gallinas y cuántos conejos hay? Resolvé con el método que prefieras y verificá la solución.',
  6
);

// ─── RESPUESTAS ────────────────────────────────────────────────

doc.addPage();
doc.y = M;
sectionTitle('RESPUESTAS');

function answersBlock(title, lines) {
  newPageIfNeeded(30 + lines.length * 13);
  doc.fontSize(10).fillColor(COLOR_H3).text(title, M + 10, doc.y);
  doc.moveDown(0.25);
  doc.fontSize(9).fillColor(COLOR_ITEM);
  lines.forEach((l) => {
    doc.text(l, M + 18, doc.y, { width: contentW() - 28 });
    doc.moveDown(0.1);
  });
  doc.moveDown(0.5);
}

answersBlock('1) ¿Es solución?', [
  'a) Sí.  b) No: 1 - 4 = -3, no 3.  c) Sí.  d) Sí.  e) Sí.  f) No: 0 + 0 no es 1.',
]);

answersBlock('2) Sustitución', [
  'a) (4, 3)   b) (3, 2)   c) (2, 2)   d) (2, 3)   e) (2, 1)   f) (2, 3)',
]);

answersBlock('3) Igualación', [
  'a) (5, 4)   b) (4, 3)   c) (2, 4)   d) (2, 4)   e) (3, 2)   f) (3, 2)',
]);

answersBlock('4) Reducción', [
  'a) (3, 2)   b) (3, 3)   c) (2, 3)   d) (4, 2)   e) (3, 2)   f) (3, 2)',
]);

answersBlock('5) Clasificación', [
  'a) Infinitas soluciones (es la misma recta).   b) Sin solución (rectas paralelas).',
  'c) Una solución.   d) Infinitas soluciones.   e) Sin solución.   f) Una solución.',
]);

answersBlock('6) Plantear y resolver', [
  'a) 9 y 6.   b) Pantalón $16.000 y remera $9.000.',
  'c) Cuaderno $100 y lápiz $20.   d) Madre 32 años e hija 14 años.',
  'e) Largo 11 cm y ancho 6 cm.   f) 6 kg de $8 y 4 kg de $12.',
]);

answersBlock('B1) Despejar y', [
  'a) y = 6 - 2x   b) y = (x - 6)/3   c) y = 4 - 2x',
  'd) y = -x   e) y = 3x - 5   f) y = (10 - 2x)/5',
]);

answersBlock('B2) Tablas', [
  'x + y = 6 ; y = 2x: (0, 6) y (0, 0); (1, 5) y (1, 2); (2, 4) y (2, 4); (3, 3) y (3, 6). Solución: (2, 4).',
  '2x - y = 4 ; x + y = 5: (0, -4) y (0, 5); (1, -2) y (1, 4); (2, 0) y (2, 3); (3, 2) y (3, 2). Solución: (3, 2).',
  'x + y = 5 ; x - y = 1: (0, 5) y (0, -1); (1, 4) y (1, 0); (2, 3) y (2, 1); (3, 2) y (3, 2). Solución: (3, 2).',
]);

answersBlock('B3) Resolver gráficamente', [
  'a) y = 5 - x  ;  y = x - 1. Solución: (3, 2). Una solución.',
  'b) y = 2x - 1  ;  y = -x + 5. Solución: (2, 3). Una solución.',
  'c) y = 3 - x  ;  y = 3 - x. Rectas coincidentes: infinitas soluciones.',
  'd) y = (4 - x)/2  ;  y = (6 - x)/2. Rectas paralelas: sin solución.',
]);

answersBlock('B4) Modelar', [
  'a) y = 300 + 100x  ;  y = 100 + 200x. Se cortan en (2, 500): a partir de 2 horas conviene el A.',
  'b) y = 10 + 5x  ;  y = 40 - 5x. Se cortan en (3, 25): a los 3 minutos, con 25 L.',
]);

answersBlock('B5) Leer gráficas', [
  'Gráfica 1: y = x + 1  ;  y = -x + 3. Solución: (1, 2).',
  'Gráfica 2: y = 2x + 1  ;  y = 2x - 2. Rectas paralelas: sin solución.',
]);

answersBlock('C) Integrador', [
  '1) a) (2, 4)   b) (2, 1)   c) (2, 1)   d) (4, 2)',
  '2) El error está en el despeje: de x - y = 2 se obtiene y = x - 2 = 1, no y = x + 2. Solución: (3, 1).',
  '3) 20 gallinas y 10 conejos. Verificación: 20 + 10 = 30 animales; 20·2 + 10·4 = 80 patas.',
]);

addFooters();
doc.end();

out.on('finish', () => {
  console.log('OK 8-0-practico-sistemas.pdf');
});
