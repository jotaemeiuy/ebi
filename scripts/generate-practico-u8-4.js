import PDFDocument from 'pdfkit';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../public/pdfs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

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
const M = 50;

function makeContext(outName, topic, title, subtitle, infoTitle) {
  const doc = new PDFDocument({
    size: 'A4',
    info: { Title: infoTitle, Author: 'EBI - Matemática | UTU Arroyo Seco', Subject: topic },
    margins: { top: 50, bottom: 45, left: M, right: M },
    bufferPages: true,
  });
  const out = fs.createWriteStream(join(outDir, outName));
  doc.pipe(out);

  const pageW = () => doc.page.width;
  const contentW = () => pageW() - M * 2;

  function addHeader() {
    doc.rect(0, 0, pageW(), 56).fill(COLOR_TITLE);
    doc.fontSize(8).fillColor('#c4b5fd').text('UNIDAD 8 - SISTEMAS DE ECUACIONES', M, 12, { lineBreak: false });
    doc.fontSize(13).fillColor('#ffffff').text(topic, M, 26, { lineBreak: false });
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
      doc.fontSize(8).fillColor(COLOR_FOOTER).text(`EBI 9C | Sistemas de Ecuaciones | ${topic}`, M, H - 32, { width: contentW() - 50, align: 'left', lineBreak: false });
      doc.text(`${i + 1} / ${range.count}`, pageW() - M - 50, H - 32, { width: 50, align: 'right', lineBreak: false });
      doc.page.margins.bottom = oldBottom;
    }
  }

  function newPageIfNeeded(needed) {
    if (doc.y + needed > doc.page.height - 55) { doc.addPage(); doc.y = M; }
  }

  function sectionTitle(text) {
    newPageIfNeeded(70);
    doc.moveDown(0.4);
    const y = doc.y;
    doc.rect(M, y, contentW(), 22).fill(COLOR_BG_H3);
    doc.fontSize(11).fillColor(COLOR_H3).text(text, M + 10, y + 5, { width: contentW() - 20, lineBreak: false });
    doc.y = y + 30;
  }

  function subTitle(text, needed = 40) {
    newPageIfNeeded(needed);
    doc.fontSize(10.5).fillColor(COLOR_FORMULA).text(text, M + 10, doc.y, { width: contentW() - 20 });
    doc.moveDown(0.35);
  }

  function introBox(lines, height) {
    const y = doc.y;
    const h = height || 30 + lines.length * 13;
    doc.rect(M, y, contentW(), h).fill(COLOR_BG_BOX);
    doc.fontSize(10).fillColor(COLOR_FORMULA);
    let ty = y + 8;
    lines.forEach((line) => { doc.text(line, M + 12, ty, { width: contentW() - 24 }); ty += 13; });
    doc.fillColor(COLOR_ITEM);
    doc.y = y + h + 10;
  }

  function answerLines(n, indent = 20) {
    const lineH = 14;
    for (let i = 0; i < n; i++) {
      const y = doc.y;
      doc.moveTo(M + indent, y).lineTo(pageW() - M, y).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
      doc.y = y + lineH;
    }
    doc.moveDown(0.35);
  }

  function item(text, lines = 2, opts = {}) {
    const needed = 18 + lines * 15 + 8;
    newPageIfNeeded(needed);
    doc.fontSize(10.5).fillColor(COLOR_ITEM).text(text, M + 10, doc.y, { width: contentW() - 10 });
    doc.moveDown(0.25);
    answerLines(lines, opts.indent || 20);
  }

  function textItem(text, lines = 3) {
    const needed = 34 + lines * 15;
    newPageIfNeeded(needed);
    doc.fontSize(10.5).fillColor(COLOR_ITEM).text(text, M + 10, doc.y, { width: contentW() - 20 });
    doc.moveDown(0.35);
    answerLines(lines, 20);
  }

  function drawBrace(x, y, h) {
    const w = 8; const mid = y + h / 2; const xr = x + w; const xs = x + w / 2; const r = 4;
    doc.save();
    doc.strokeColor('#4c1d95').lineWidth(1.1).lineCap('round');
    doc.moveTo(xr, y);
    doc.quadraticCurveTo(xs, y, xs, y + r);
    doc.lineTo(xs, mid - r);
    doc.quadraticCurveTo(xs, mid, x, mid);
    doc.quadraticCurveTo(xs, mid, xs, mid + r);
    doc.lineTo(xs, y + h - r);
    doc.quadraticCurveTo(xs, y + h, xr, y + h);
    doc.stroke();
    doc.restore();
    doc.fillColor(COLOR_ITEM);
  }

  function itemSystem(text, lines = 3) {
    const needed = 40 + lines * 15 + 10;
    newPageIfNeeded(needed);
    const m = text.match(/^([a-z])\)\s*(.+)$/);
    const [e1, e2] = m[2].split(';').map((s) => s.trim());
    const x0 = M + 10; const y0 = doc.y;
    doc.fontSize(10.5).fillColor(COLOR_ITEM).text(`${m[1]})`, x0, y0 + 8, { lineBreak: false });
    drawBrace(x0 + 18, y0, 30);
    doc.fontSize(10).fillColor(COLOR_ITEM);
    doc.text(e1, x0 + 34, y0 + 1, { lineBreak: false });
    doc.text(e2, x0 + 34, y0 + 15, { lineBreak: false });
    doc.y = y0 + 36;
    answerLines(lines, 20);
  }

  function itemPair(text, lines = 2) {
    const needed = 40 + lines * 15 + 10;
    newPageIfNeeded(needed);
    const m = text.match(/^([a-z])\)\s*(\([^)]*\))\s*en\s*(.+)$/);
    const pair = m[2];
    const [e1, e2] = m[3].split(';').map((s) => s.trim());
    const x0 = M + 10; const y0 = doc.y;
    doc.fontSize(10.5).fillColor(COLOR_ITEM).text(`${m[1]})`, x0, y0 + 8, { lineBreak: false });
    doc.text(pair, x0 + 18, y0 + 8, { lineBreak: false });
    const bx = x0 + 18 + doc.widthOfString(pair) + 14;
    drawBrace(bx, y0, 30);
    doc.fontSize(10).fillColor(COLOR_ITEM);
    doc.text(e1, bx + 16, y0 + 1, { lineBreak: false });
    doc.text(e2, bx + 16, y0 + 15, { lineBreak: false });
    doc.y = y0 + 36;
    answerLines(lines, 20);
  }

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
    doc.moveTo(x + size - 6, ay - 3).lineTo(x + size, ay).lineTo(x + size - 6, ay + 3).strokeColor(COLOR_AXIS).lineWidth(1).stroke();
    doc.moveTo(ax - 3, y + 6).lineTo(ax, y).lineTo(ax + 3, y + 6).strokeColor(COLOR_AXIS).lineWidth(1).stroke();
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
    return { x: x + (px - min) * unit, y: y + (max - py) * unit };
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

  function drawTable(x, y, colW, rowH, headers, rows) {
    const w = colW.reduce((a, b) => a + b, 0);
    doc.save();
    doc.rect(x, y, w, rowH).fill('#ede9fe');
    doc.fillColor(COLOR_H3).fontSize(8.5);
    let cx = x;
    headers.forEach((h, i) => { doc.text(h, cx, y + 3, { width: colW[i], align: 'center', lineBreak: false }); cx += colW[i]; });
    doc.fillColor(COLOR_ITEM).fontSize(9);
    rows.forEach((row, r) => {
      const ry = y + rowH * (r + 1);
      let rx = x;
      row.forEach((cell, i) => { doc.text(cell, rx, ry + 4, { width: colW[i], align: 'center', lineBreak: false }); rx += colW[i]; });
    });
    doc.strokeColor('#c4b5fd').lineWidth(0.7);
    for (let r = 0; r <= rows.length + 1; r++) doc.moveTo(x, y + rowH * r).lineTo(x + w, y + rowH * r).stroke();
    cx = x;
    doc.moveTo(x, y).lineTo(x, y + rowH * (rows.length + 1)).stroke();
    colW.forEach((c) => { cx += c; doc.moveTo(cx, y).lineTo(cx, y + rowH * (rows.length + 1)).stroke(); });
    doc.restore();
    doc.fillColor(COLOR_ITEM);
    return y + rowH * (rows.length + 1);
  }

  function answersBlock(title, lines) {
    newPageIfNeeded(30 + lines.length * 13);
    doc.fontSize(10).fillColor(COLOR_H3).text(title, M + 10, doc.y);
    doc.moveDown(0.25);
    doc.fontSize(9).fillColor(COLOR_ITEM);
    lines.forEach((l) => { doc.text(l, M + 18, doc.y, { width: contentW() - 28 }); doc.moveDown(0.1); });
    doc.moveDown(0.5);
  }

  function finish() {
    addFooters();
    doc.end();
    out.on('finish', () => console.log('OK ' + outName));
  }

  return {
    doc, pageW, contentW, addHeader, addFooters, newPageIfNeeded, sectionTitle, subTitle, introBox,
    answerLines, item, textItem, drawBrace, itemSystem, itemPair, drawGrid, gridPoint, drawLine,
    drawTable, answersBlock, finish, title, subtitle,
  };
}

// ═══════════ 8-1 SUSTITUCIÓN ═══════════
{
  const ctx = makeContext('8-1-sustitucion.pdf', 'Práctico: Sustitución', '', 'Ejercicios analíticos - Verificación y resolución', 'Práctico - Sustitución');
  const { doc } = ctx;
  ctx.addHeader();
  doc.fontSize(20).fillColor(COLOR_H3).text('Sistemas de ecuaciones 2×2', M, doc.y, { width: ctx.contentW() });
  doc.moveDown(0.2);
  doc.fontSize(12).fillColor(COLOR_FORMULA).text('Práctico: Sustitución', M, doc.y, { width: ctx.contentW() });
  doc.moveDown(0.8);
  doc.fontSize(10).fillColor(COLOR_ITEM);
  let fy = doc.y;
  doc.text('Nombre: ______________________________', M, fy, { lineBreak: false });
  doc.text('Curso: ______________', M + 330, fy, { lineBreak: false });
  doc.text('Fecha: ______________________________', M, fy + 20, { lineBreak: false });
  doc.y = fy + 44;
  ctx.introBox(['Método de sustitución: despejar una variable de una ecuación y reemplazarla en la otra.', '', 'Escribí el procedimiento completo en cada ejercicio.'], 48);
  ctx.sectionTitle('Ejercicios de sustitución');
  ['a) x + y = 7  ;  x - y = 1', 'b) 2x + y = 8  ;  x + y = 5', 'c) 3x - y = 4  ;  x + 2y = 6', 'd) 4x + y = 9  ;  2x - 3y = 1'].forEach((e) => ctx.itemSystem(e, 4));
  doc.addPage(); doc.y = M;
  ctx.sectionTitle('Respuestas');
  ctx.answersBlock('Sustitución', ['a) (4, 3)   b) (3, 2)   c) (2, 2)   d) (2, 1)']);
  ctx.finish();
}

// ═══════════ 8-2 IGUALACIÓN ═══════════
{
  const ctx = makeContext('8-2-igualacion.pdf', 'Práctico: Igualación', '', 'Ejercicios analíticos - Igualar la misma variable', 'Práctico - Igualación');
  const { doc } = ctx;
  ctx.addHeader();
  doc.fontSize(20).fillColor(COLOR_H3).text('Sistemas de ecuaciones 2×2', M, doc.y, { width: ctx.contentW() });
  doc.moveDown(0.2);
  doc.fontSize(12).fillColor(COLOR_FORMULA).text('Práctico: Igualación', M, doc.y, { width: ctx.contentW() });
  doc.moveDown(0.8);
  doc.fontSize(10).fillColor(COLOR_ITEM);
  let fy = doc.y;
  doc.text('Nombre: ______________________________', M, fy, { lineBreak: false });
  doc.text('Curso: ______________', M + 330, fy, { lineBreak: false });
  doc.text('Fecha: ______________________________', M, fy + 20, { lineBreak: false });
  doc.y = fy + 44;
  ctx.introBox(['Método de igualación: despejar la misma variable en ambas ecuaciones e igualar las expresiones.', '', 'Escribí el procedimiento completo en cada ejercicio.'], 48);
  ctx.sectionTitle('Ejercicios de igualación');
  ['a) x + y = 9  ;  x - y = 1', 'b) 2x + y = 11  ;  x - y = 1', 'c) 3x + y = 10  ;  x + y = 6', 'd) 2x + 3y = 12  ;  x - y = 1'].forEach((e) => ctx.itemSystem(e, 4));
  doc.addPage(); doc.y = M;
  ctx.sectionTitle('Respuestas');
  ctx.answersBlock('Igualación', ['a) (5, 4)   b) (4, 3)   c) (2, 4)   d) (3, 2)']);
  ctx.finish();
}

// ═══════════ 8-3 REDUCCIÓN ═══════════
{
  const ctx = makeContext('8-3-reduccion.pdf', 'Práctico: Reducción', '', 'Ejercicios analíticos - Sumar o restar ecuaciones', 'Práctico - Reducción');
  const { doc } = ctx;
  ctx.addHeader();
  doc.fontSize(20).fillColor(COLOR_H3).text('Sistemas de ecuaciones 2×2', M, doc.y, { width: ctx.contentW() });
  doc.moveDown(0.2);
  doc.fontSize(12).fillColor(COLOR_FORMULA).text('Práctico: Reducción', M, doc.y, { width: ctx.contentW() });
  doc.moveDown(0.8);
  doc.fontSize(10).fillColor(COLOR_ITEM);
  let fy = doc.y;
  doc.text('Nombre: ______________________________', M, fy, { lineBreak: false });
  doc.text('Curso: ______________', M + 330, fy, { lineBreak: false });
  doc.text('Fecha: ______________________________', M, fy + 20, { lineBreak: false });
  doc.y = fy + 44;
  ctx.introBox(['Método de reducción: multiplicar una o ambas ecuaciones y sumar o restar para eliminar una variable.', '', 'Indicá qué operación hiciste en cada paso.'], 48);
  ctx.sectionTitle('Ejercicios de reducción');
  ['a) x + y = 5  ;  x - y = 1', 'b) 2x + y = 9  ;  x - y = 0', 'c) 3x + 2y = 12  ;  x + 2y = 8', 'd) 2x + 3y = 12  ;  3x - 2y = 5'].forEach((e) => ctx.itemSystem(e, 4));
  doc.addPage(); doc.y = M;
  ctx.sectionTitle('Respuestas');
  ctx.answersBlock('Reducción', ['a) (3, 2)   b) (3, 3)   c) (2, 3)   d) (3, 2)']);
  ctx.finish();
}

// ═══════════ 8-4 GRÁFICO Y PROBLEMAS ═══════════
{
  const ctx = makeContext('8-4-grafico.pdf', 'Práctico: Gráfico y problemas', '', 'Cuadrículas, tablas, lectura y problemas', 'Práctico - Gráfico y problemas');
  const { doc } = ctx;
  ctx.addHeader();
  doc.fontSize(20).fillColor(COLOR_H3).text('Sistemas de ecuaciones 2×2', M, doc.y, { width: ctx.contentW() });
  doc.moveDown(0.2);
  doc.fontSize(12).fillColor(COLOR_FORMULA).text('Práctico: Gráfico y problemas', M, doc.y, { width: ctx.contentW() });
  doc.moveDown(0.8);
  doc.fontSize(10).fillColor(COLOR_ITEM);
  let fy = doc.y;
  doc.text('Nombre: ______________________________', M, fy, { lineBreak: false });
  doc.text('Curso: ______________', M + 330, fy, { lineBreak: false });
  doc.text('Fecha: ______________________________', M, fy + 20, { lineBreak: false });
  doc.y = fy + 44;
  ctx.introBox(['Este práctico reúne: verificación de soluciones, clasificación, planteo de sistemas,', 'trabajo gráfico (tablas, cuadrículas y lectura) y problemas de aplicación.', '', 'Escribí el procedimiento completo en cada ejercicio.'], 62);

  ctx.sectionTitle('1) ¿El par dado es solución del sistema?');
  ['a) (2, 3)  en  x + y = 5  ;  x - y = -1', 'b) (1, 4)  en  2x + y = 6  ;  x - y = 3', 'c) (3, 1)  en  3x - y = 8  ;  x + 2y = 5', 'd) (0, 0)  en  x + y = 1  ;  2x - y = 0'].forEach((e) => ctx.itemPair(e, 2));

  ctx.sectionTitle('2) Clasificar sin graficar');
  doc.fontSize(9.5).fillColor('#475569').text('Ayuda: despejá y en las dos ecuaciones. Si las pendientes son distintas, hay una solución. Si son iguales y las ordenadas también, hay infinitas. Si son iguales y las ordenadas distintas, no hay solución.', M + 10, doc.y, { width: ctx.contentW() - 20 });
  doc.moveDown(0.5);
  ['a) 2x + y = 5  ;  4x + 2y = 10', 'b) x - y = 2  ;  x - y = 5', 'c) 3x + 2y = 7  ;  x - y = 1', 'd) x + 2y = 4  ;  2x + 4y = 9'].forEach((e) => ctx.itemSystem(e, 3));

  ctx.sectionTitle('3) Plantear el sistema y resolver');
  ['a) La suma de dos números es 15 y su diferencia es 3. ¿Cuáles son?', 'b) 3 cuadernos y 2 lápices cuestan $340; 2 cuadernos y 5 lápices cuestan $300. ¿Cuál es el precio de cada uno?', 'c) Una madre y su hija suman 46 años. Hace 5 años, la madre triplicaba la edad de la hija. ¿Qué edad tiene cada una hoy?'].forEach((e) => ctx.textItem(e, 4));

  doc.addPage(); doc.y = M;
  ctx.sectionTitle('4) Despejar y en cada ecuación');
  ['a) 2x + y = 6          b) x - 3y = 6', 'c) 4x + 2y = 8          d) 3x - y = 5'].forEach((e) => ctx.item(e, 3));

  ctx.sectionTitle('5) Completar las tablas de valores');
  const tablas = [
    { t: 'Sistema: x + y = 6  ;  y = 2x', h: ['x', 'y = 6 - x', 'y = 2x'] },
    { t: 'Sistema: x + y = 5  ;  x - y = 1', h: ['x', 'y = 5 - x', 'y = x - 1'] },
  ];
  tablas.forEach((tab) => {
    ctx.newPageIfNeeded(150);
    doc.fontSize(10).fillColor(COLOR_ITEM).text(tab.t, M + 10, doc.y, { width: ctx.contentW() - 20 });
    doc.moveDown(0.35);
    const ty = doc.y;
    ctx.drawTable(M + (ctx.contentW() - 340) / 2, ty, [60, 140, 140], 22, tab.h, [['0', '', ''], ['1', '', ''], ['2', '', ''], ['3', '', '']]);
    doc.y = ty + 22 * 5 + 14;
  });
  doc.fontSize(9.5).fillColor('#475569').text('En cada tabla, ¿qué par se repite en las dos columnas de y? Ese es el punto de corte de las rectas.', M + 10, doc.y, { width: ctx.contentW() - 20 });
  doc.moveDown(0.8);

  doc.addPage(); doc.y = M;
  ctx.sectionTitle('6) Graficar las rectas y clasificar el sistema');
  const sistemas = [
    { t: 'a) x + y = 5  ;  x - y = 1', a: [1, 0], b: [-1, 0] },
    { t: 'b) x + y = 3  ;  2x + 2y = 6', a: [1, 0], b: [-1, 3] },
    { t: 'c) x + 2y = 4  ;  x + 2y = 6', a: [-0.5, 2], b: [-0.5, 3] },
  ];
  sistemas.forEach((s) => {
    ctx.newPageIfNeeded(225);
    doc.fontSize(10.5).fillColor(COLOR_ITEM).text(s.t, M + 10, doc.y, { width: ctx.contentW() - 20 });
    doc.moveDown(0.35);
    const gy = doc.y;
    ctx.drawGrid(M + 10, gy, 190);
    const rx = M + 10 + 190 + 30;
    doc.fontSize(9.5).fillColor(COLOR_ITEM);
    doc.text('Despejá y:', rx, gy, { lineBreak: false });
    doc.moveTo(rx + 62, gy + 12).lineTo(ctx.pageW() - M, gy + 12).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
    doc.moveTo(rx + 62, gy + 36).lineTo(ctx.pageW() - M, gy + 36).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
    doc.text('Punto de corte:', rx, gy + 62, { lineBreak: false });
    doc.text('( ____ , ____ )', rx + 80, gy + 62, { lineBreak: false });
    doc.text('Tipo de sistema:', rx, gy + 92, { lineBreak: false });
    doc.moveTo(rx + 82, gy + 104).lineTo(ctx.pageW() - M, gy + 104).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
    doc.text('Verificación:', rx, gy + 126, { lineBreak: false });
    doc.moveTo(rx + 66, gy + 138).lineTo(ctx.pageW() - M, gy + 138).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
    doc.moveTo(rx + 66, gy + 162).lineTo(ctx.pageW() - M, gy + 162).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
    doc.y = gy + 212;
  });

  doc.addPage(); doc.y = M;
  ctx.sectionTitle('7) Modelar y graficar');
  ctx.newPageIfNeeded(315);
  doc.fontSize(10.5).fillColor(COLOR_ITEM).text('Un estacionamiento A cobra $300 fijos más $100 por hora. El estacionamiento B cobra $100 fijos más $200 por hora. Escribí el sistema, graficá y averiguá a partir de cuántas horas conviene el A.', M + 10, doc.y, { width: ctx.contentW() - 20 });
  doc.moveDown(0.4);
  const gy2 = doc.y;
  ctx.drawGrid(M + 10, gy2, 200);
  doc.fontSize(9).fillColor('#475569').text('y = costo total  /  x = horas', M + 10, gy2 + 206, { width: 260, lineBreak: false });
  doc.y = gy2 + 228;
  ctx.answerLines(2);

  ctx.sectionTitle('8) Leer la gráfica y escribir el sistema');
  doc.moveDown(0.2);
  ctx.newPageIfNeeded(230);
  doc.fontSize(10.5).fillColor(COLOR_ITEM).text('Gráfica', M + 10, doc.y);
  doc.moveDown(0.3);
  const gy3 = doc.y;
  ctx.drawGrid(M + 10, gy3, 200);
  ctx.drawLine(M + 10, gy3, 200, 1, 1, COLOR_LINE_A);
  ctx.drawLine(M + 10, gy3, 200, -1, 3, COLOR_LINE_B, '6 4');
  const rx3 = M + 10 + 200 + 30;
  doc.fontSize(9.5).fillColor(COLOR_ITEM);
  doc.text('Recta 1:', rx3, gy3, { lineBreak: false });
  doc.moveTo(rx3 + 55, gy3 + 12).lineTo(ctx.pageW() - M, gy3 + 12).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.text('Recta 2:', rx3, gy3 + 38, { lineBreak: false });
  doc.moveTo(rx3 + 55, gy3 + 50).lineTo(ctx.pageW() - M, gy3 + 50).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.text('Sistema:', rx3, gy3 + 76, { lineBreak: false });
  doc.moveTo(rx3 + 55, gy3 + 88).lineTo(ctx.pageW() - M, gy3 + 88).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.moveTo(rx3 + 55, gy3 + 112).lineTo(ctx.pageW() - M, gy3 + 112).strokeColor(COLOR_LINES).lineWidth(0.6).stroke();
  doc.text('Solución:', rx3, gy3 + 140, { lineBreak: false });
  doc.text('( ____ , ____ )', rx3 + 62, gy3 + 140, { lineBreak: false });
  doc.text('o  ____________________', rx3, gy3 + 168, { lineBreak: false });
  doc.y = gy3 + 215;

  doc.addPage(); doc.y = M;
  ctx.sectionTitle('9) Elegir el método y resolver');
  ['a) y = 2x  ;  3x + y = 10', 'b) 2x + 3y = 7  ;  2x - 3y = 1', 'c) 3x + 4y = 10  ;  5x - 4y = 6'].forEach((e) => ctx.itemSystem(e, 4));

  ctx.sectionTitle('10) Encontrar el error y corregirlo');
  doc.fontSize(10.5).fillColor(COLOR_ITEM).text('Un compañero resolvió este sistema y escribió:', M + 10, doc.y, { width: ctx.contentW() - 20 });
  doc.moveDown(0.35);
  {
    const sy = doc.y;
    ctx.drawBrace(M + 14, sy, 30);
    doc.fontSize(10).fillColor(COLOR_ITEM);
    doc.text('2x + y = 7', M + 30, sy + 1, { lineBreak: false });
    doc.text('x - y = 2', M + 30, sy + 15, { lineBreak: false });
    doc.y = sy + 38;
  }
  doc.moveDown(0.3);
  doc.fontSize(10.5).fillColor(COLOR_FORMULA).text('"Sumo las ecuaciones: 3x = 9, entonces x = 3. Luego y = 3 + 2 = 5. Solución: (3, 5)."', M + 24, doc.y, { width: ctx.contentW() - 48 });
  doc.moveDown(0.5);
  ctx.answerLines(4, 24);

  ctx.sectionTitle('11) Problema de aplicación');
  ctx.textItem('En una granja hay gallinas y conejos. En total se cuentan 30 animales y 80 patas. ¿Cuántas gallinas y cuántos conejos hay? Resolvé con el método que prefieras y verificá la solución.', 6);

  doc.addPage(); doc.y = M;
  ctx.sectionTitle('Respuestas');
  ctx.answersBlock('1) ¿Es solución?', ['a) Sí.  b) No: 1 - 4 = -3, no 3.  c) Sí.  d) No: 0 + 0 no es 1.']);
  ctx.answersBlock('2) Clasificación', ['a) Infinitas soluciones (es la misma recta).   b) Sin solución (rectas paralelas).', 'c) Una solución.   d) Sin solución (rectas paralelas).']);
  ctx.answersBlock('3) Plantear y resolver', ['a) 9 y 6.   b) Cuaderno $100 y lápiz $20.   c) Madre 32 años e hija 14 años.']);
  ctx.answersBlock('4) Despejar y', ['a) y = 6 - 2x   b) y = (x - 6)/3   c) y = 4 - 2x   d) y = 3x - 5']);
  ctx.answersBlock('5) Tablas', ['x + y = 6 ; y = 2x: (0, 6) y (0, 0); (1, 5) y (1, 2); (2, 4) y (2, 4); (3, 3) y (3, 6). Solución: (2, 4).', 'x + y = 5 ; x - y = 1: (0, 5) y (0, -1); (1, 4) y (1, 0); (2, 3) y (2, 1); (3, 2) y (3, 2). Solución: (3, 2).']);
  ctx.answersBlock('6) Resolver gráficamente', ['a) y = 5 - x  ;  y = x - 1. Solución: (3, 2). Una solución.', 'b) y = 3 - x  ;  y = 3 - x. Rectas coincidentes: infinitas soluciones.', 'c) y = (4 - x)/2  ;  y = (6 - x)/2. Rectas paralelas: sin solución.']);
  ctx.answersBlock('7) Modelar', ['a) y = 300 + 100x  ;  y = 100 + 200x. Se cortan en (2, 500): a partir de 2 horas conviene el A.']);
  ctx.answersBlock('8) Leer gráficas', ['y = x + 1  ;  y = -x + 3. Solución: (1, 2).']);
  ctx.answersBlock('9) Elegir método', ['a) (2, 4)   b) (2, 1)   c) (2, 1)']);
  ctx.answersBlock('10) Encontrar el error', ['El error está en el despeje: de x - y = 2 se obtiene y = x - 2 = 1, no y = x + 2. Solución: (3, 1).']);
  ctx.answersBlock('11) Problema de aplicación', ['20 gallinas y 10 conejos. Verificación: 20 + 10 = 30 animales; 20·2 + 10·4 = 80 patas.']);
  ctx.finish();
}
