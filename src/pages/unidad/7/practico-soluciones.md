---
layout: ../../../layouts/Leccion.astro
title: "Trigonometría - Práctico con soluciones"
unitId: 7
unitTitle: "Trigonometría"
---

<div class="lesson-box">
  <h2>Contenido:</h2>
  <ul>
    <li><a href="#pitagoras">• 1.1 Teorema de Pitágoras + tabla</a></li>
    <li><a href="#coseno">• 1.2.1 Coseno</a></li>
    <li><a href="#seno">• 1.2.2 Seno</a></li>
    <li><a href="#tangente">• 1.2.3 Tangente</a></li>
    <li><a href="#casos">• Resolver triángulos: CASOS I, II y III</a></li>
    <li><a href="#piramide">• Pirámide de base cuadrada</a></li>
    <li><a href="#cuarta">• Triángulo: cateto menor = cuarta parte de la hipotenusa</a></li>
    <li><a href="#x">• Calcular el valor de x</a></li>
  </ul>
</div>

<div id="pitagoras" class="lesson-box">
  <h2>1.1 Teorema de Pitágoras</h2>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="190" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo C A B hipotenusa">
    <polygon points="60,160 240,160 240,40" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <text x="52" y="165" fill="#e2e8f0" font-size="13">C</text>
    <text x="242" y="175" fill="#e2e8f0" font-size="13">A</text>
    <text x="242" y="35" fill="#e2e8f0" font-size="13">B</text>
    <text x="135" y="178" fill="#f59e0b" font-size="12">Cateto b</text>
    <text x="248" y="110" fill="#f59e0b" font-size="12">Cateto c</text>
    <text x="110" y="100" fill="#f59e0b" font-size="12">Hipotenusa</text>
  </svg>
  </div>
  <p class="font-mono text-violet-400">(Hipotenusa)² = (cateto b)² + (cateto c)²</p>
  <h3>1.1.1 Triángulos pitagóricos</h3>
  <p>Lados enteros que verifican Pitágoras. Ej.: <strong>3, 4, 5 &nbsp; 5, 12, 13 &nbsp; 9, 40, 41</strong></p>
  <h3>1.1.2 Ejercitando — complete la tabla</h3>
  <div style="overflow-x:auto">
  <table>
    <thead><tr><th>Hip.</th><th>Cat. b</th><th>Cat. C</th></tr></thead>
    <tbody>
      <tr><td>?</td><td>113</td><td>156</td></tr>
      <tr><td>701</td><td>651</td><td>?</td></tr>
      <tr><td>653</td><td>?</td><td>315</td></tr>
    </tbody>
  </table>
  </div>
  <h3>Solución</h3>
  <ol>
    <li>Fila 1: hip = √(113² + 156²) = √(12769 + 24336) = √37105 ≈ <strong>192,63</strong></li>
    <li>Fila 2: cat = √(701² − 651²) = √(491401 − 423801) = √67600 = <strong>260</strong> (terna 651-260-701)</li>
    <li>Fila 3: cat = √(653² − 315²) = √(426409 − 99225) = √327184 = <strong>572</strong> (terna 315-572-653)</li>
  </ol>
</div>

<div id="coseno" class="lesson-box">
  <h2>1.2.1 Coseno — cos(α) = adyacente / hipotenusa</h2>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="280" height="190" viewBox="0 0 280 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coseno esquema OAB">
    <polygon points="40,160 220,160 220,40" fill="rgba(56,189,248,0.10)" stroke="#38bdf8" stroke-width="2" stroke-linejoin="round"/>
    <path d="M 65 160 A 25 25 0 0 0 65 140" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="70" y="155" fill="#e2e8f0" font-size="13">α</text>
    <rect x="204" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="30" y="165" fill="#e2e8f0" font-size="12">O</text>
    <text x="222" y="175" fill="#e2e8f0" font-size="12">A</text>
    <text x="222" y="35" fill="#e2e8f0" font-size="12">B</text>
    <text x="110" y="178" fill="#34d399" font-size="11">Cat. adyac. a α</text>
    <text x="226" y="110" fill="#f472b6" font-size="11">Cat. op. a α</text>
  </svg>
  </div>
  <h3>1. Triángulo ABC, hipotenusa AB = 16 cm, BC = 6 cm (recto en C)</h3>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>a) ¿De cuál ángulo (A, B o C) se puede calcular el coseno?</li>
    <li>b) Calcule el coseno de dicho ángulo.</li>
    <li>c) Indique el valor del ángulo.</li>
  </ul>
  <p><strong>Solución:</strong></p>
  <ol>
    <li>BC es adyacente a B y AB es hipotenusa → se calcula <strong>cos(B)</strong>. (C es 90°, su coseno es 0; para A faltaría AC.)</li>
    <li>cos(B) = 6/16 = <strong>0,375</strong>.</li>
    <li>B = cos⁻¹(0,375) ≈ <strong>67,98° ≈ 68,0°</strong>. Extra: A ≈ 22,02°, AC = √(256−36) ≈ 14,83 cm.</li>
  </ol>
  <h3>2. Triángulo ABC rectángulo en C. Ángulo B = 35°, AB = 12 cm</h3>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>a) ¿Cuánto vale el coseno del ángulo B?</li>
    <li>b) ¿Puede calcular la hipotenusa? Calcule si es posible.</li>
  </ul>
  <p><strong>Solución:</strong></p>
  <ol>
    <li>cos(35°) ≈ <strong>0,8192</strong>.</li>
    <li>La hipotenusa ya es dato: AB = 12 cm. Lo que sí se calcula con ese coseno es el adyacente: BC = 12 · cos(35°) ≈ <strong>9,83 cm</strong>; AC = 12 · sin(35°) ≈ <strong>6,88 cm</strong>; A = 55°.</li>
  </ol>
</div>

<div id="seno" class="lesson-box">
  <h2>1.2.2 Seno — sin(α) = opuesto / hipotenusa</h2>
  <h3>1. Triángulo ABC: Ĉ = 90°, Â = 25°, AB = 34 cm</h3>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>a) ¿Qué lado se calcula con el seno de A? Calcúlelo.</li>
    <li>b) ¿Puede deducir el ángulo B? Use el seno de B para hallar un lado.</li>
  </ul>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="190" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Seno ejemplo 25 grados">
    <polygon points="50,160 230,160 230,40" fill="rgba(244,114,182,0.10)" stroke="#f472b6" stroke-width="2" stroke-linejoin="round"/>
    <path d="M 75 160 A 25 25 0 0 0 75 140" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="80" y="155" fill="#e2e8f0" font-size="12">25°</text>
    <text x="120" y="120" fill="#e2e8f0" font-size="12">34</text>
    <text x="236" y="110" fill="#f472b6" font-size="12">BC = ?</text>
    <text x="40" y="165" fill="#e2e8f0" font-size="12">A</text>
    <text x="232" y="175" fill="#e2e8f0" font-size="12">C</text>
    <text x="232" y="35" fill="#e2e8f0" font-size="12">B</text>
  </svg>
  </div>
  <p><strong>Solución:</strong></p>
  <ol>
    <li>El opuesto a A es BC: sin(25°) = BC/34 → BC = 34 · 0,4226 ≈ <strong>14,37 cm</strong>.</li>
    <li>B = 90° − 25° = <strong>65°</strong>. sin(65°) = AC/34 → AC = 34 · 0,9063 ≈ <strong>30,81 cm</strong>. Verificación: √(14,37² + 30,81²) ≈ 34 ✓</li>
  </ol>
  <h3>2. Hipotenusa = 40 cm, un cateto = 18 cm</h3>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>a) ¿Qué línea trigonométrica puede usar? ¿Puede usar otra?</li>
    <li>b) Calcule el ángulo comprendido entre esos dos lados.</li>
    <li>c) Termine el ejercicio: lados y ángulos restantes.</li>
  </ul>
  <p><strong>Solución:</strong></p>
  <ol>
    <li>Entre cateto e hipotenusa el cateto es adyacente → <strong>coseno</strong>; también sirve seno para el otro ángulo.</li>
    <li>Ángulo comprendido: cos = 18/40 = 0,45 → ángulo ≈ <strong>63,26°</strong>.</li>
    <li>Otro ángulo ≈ 26,74°; cateto restante = √(40² − 18²) = √1276 ≈ <strong>35,72 cm</strong>.</li>
  </ol>
</div>

<div id="tangente" class="lesson-box">
  <h2>1.2.3 Tangente — tan(α) = opuesto / adyacente</h2>
  <h3>1. Triángulo rectángulo en A, ángulo B = 50°, AB = 12 cm</h3>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>a) Calcule AC sin hallar la hipotenusa.</li>
    <li>b) Verifique con otra herramienta.</li>
  </ul>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="190" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tangente ejemplo B 50 grados">
    <polygon points="60,160 220,160 60,50" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="2" stroke-linejoin="round"/>
    <text x="55" y="165" fill="#e2e8f0" font-size="12">A</text>
    <text x="222" y="175" fill="#e2e8f0" font-size="12">B</text>
    <text x="55" y="45" fill="#e2e8f0" font-size="12">C</text>
    <text x="195" y="150" fill="#e2e8f0" font-size="12">50°</text>
    <text x="130" y="178" fill="#e2e8f0" font-size="12">12</text>
    <text x="40" y="110" fill="#e2e8f0" font-size="12">AC = ?</text>
  </svg>
  </div>
  <p><strong>Solución:</strong></p>
  <ol>
    <li>AB es adyacente a B, AC es opuesto → tan(50°) = AC/12 → AC = 12 · 1,1918 ≈ <strong>14,30 cm</strong>.</li>
    <li>Verificación con coseno: BC = 12/cos(50°) ≈ 18,67 cm; √(18,67² − 12²) ≈ 14,30 ✓. C = 40°.</li>
  </ol>
  <h3>2. Catetos 12 y 30 cm</h3>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>a) Calcule los ángulos restantes.</li>
    <li>b) Calcule la hipotenusa.</li>
  </ul>
  <p><strong>Solución:</strong></p>
  <ol>
    <li>tan = 12/30 = 0,4 → ángulo frente al 12 ≈ <strong>21,80°</strong>; el otro ≈ <strong>68,20°</strong>.</li>
    <li>Hip = √(12² + 30²) = √1044 ≈ <strong>32,31 cm</strong>.</li>
  </ol>
</div>

<div id="casos" class="lesson-box">
  <h2>Resolver los siguientes triángulos</h2>
  <h3>a) CASO I — catetos 6 cm y 8 cm</h3>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="280" height="190" viewBox="0 0 280 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caso I 6 8">
    <polygon points="60,160 200,160 200,50" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="184" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="55" y="175" fill="#e2e8f0" font-size="12">A</text>
    <text x="202" y="175" fill="#e2e8f0" font-size="12">C</text>
    <text x="202" y="45" fill="#e2e8f0" font-size="12">B</text>
    <text x="50" y="110" fill="#e2e8f0" font-size="12">6 cm</text>
    <text x="120" y="178" fill="#e2e8f0" font-size="12">8 cm</text>
    <text x="130" y="95" fill="#e2e8f0" font-size="12">a</text>
    <text x="180" y="150" fill="#f472b6" font-size="12">α</text>
    <text x="190" y="70" fill="#38bdf8" font-size="12">β</text>
  </svg>
  </div>
  <p class="font-mono text-violet-400">α = 36,87° &nbsp; β = 53,13° &nbsp; a = 10 cm</p>
  <ol>
    <li>a = √(6² + 8²) = 10 cm.</li>
    <li>tan(α) = 6/8 = 0,75 → α ≈ 36,87°.</li>
    <li>β = 90° − α ≈ 53,13°.</li>
  </ol>
  <h3>b) CASO II — hipotenusa 12 cm, ángulo 35°</h3>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="190" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caso II 12cm 35 grados">
    <polygon points="50,160 230,160 230,50" fill="rgba(56,189,248,0.10)" stroke="#38bdf8" stroke-width="2" stroke-linejoin="round"/>
    <rect x="214" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="45" y="175" fill="#e2e8f0" font-size="12">A</text>
    <text x="232" y="175" fill="#e2e8f0" font-size="12">C 35°</text>
    <text x="232" y="45" fill="#e2e8f0" font-size="12">B</text>
    <text x="130" y="110" fill="#e2e8f0" font-size="12">12 cm</text>
    <text x="120" y="178" fill="#e2e8f0" font-size="12">b</text>
    <text x="236" y="110" fill="#e2e8f0" font-size="12">c</text>
  </svg>
  </div>
  <p class="font-mono text-violet-400">β = 55° &nbsp; b = 9,83 cm &nbsp; c = 6,88 cm</p>
  <ol>
    <li>β = 90° − 35° = 55°.</li>
    <li>b = 12 · cos(35°) ≈ 9,83 cm (adyacente a 35°).</li>
    <li>c = 12 · sin(35°) ≈ 6,88 cm.</li>
  </ol>
  <h3>c) CASO III — cateto 8 cm, hipotenusa 12 cm</h3>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="190" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caso III 8 12">
    <polygon points="50,160 230,160 230,50" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="2" stroke-linejoin="round"/>
    <rect x="214" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="45" y="175" fill="#e2e8f0" font-size="12">A</text>
    <text x="232" y="175" fill="#e2e8f0" font-size="12">C</text>
    <text x="232" y="45" fill="#e2e8f0" font-size="12">B</text>
    <text x="236" y="110" fill="#e2e8f0" font-size="12">8 cm</text>
    <text x="120" y="105" fill="#e2e8f0" font-size="12">12 cm</text>
    <text x="120" y="178" fill="#e2e8f0" font-size="12">b</text>
  </svg>
  </div>
  <p class="font-mono text-violet-400">α = 41,81° &nbsp; β = 48,19° &nbsp; b = 8,94 cm</p>
  <ol>
    <li>sin(α) = 8/12 = 0,6667 → α ≈ 41,81°.</li>
    <li>β = 90° − 41,81° ≈ 48,19°.</li>
    <li>b = √(12² − 8²) = √80 ≈ 8,94 cm.</li>
  </ol>
</div>

<div id="piramide" class="lesson-box">
  <h2>Pirámide de base cuadrada (lado 233 m, arista 220 m)</h2>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pirámide base cuadrada altura apotema">
    <polygon points="60,180 260,180 200,135 140,135" fill="rgba(139,92,246,0.08)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="160,30 60,180 260,180" fill="none" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="0"/>
    <line x1="160" y1="30" x2="240" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="160" y1="30" x2="160" y2="157" stroke="#f472b6" stroke-width="2.5" stroke-dasharray="6 4"/>
    <line x1="160" y1="157" x2="205" y2="157" stroke="#34d399" stroke-width="2.5"/>
    <text x="70" y="195" fill="#94a3b8" font-size="11">Base 233 m</text>
    <text x="225" y="110" fill="#94a3b8" font-size="11">Arista 220 m</text>
    <text x="165" y="100" fill="#f472b6" font-size="11">Altura</text>
    <text x="168" y="152" fill="#34d399" font-size="11">Apotema</text>
  </svg>
  </div>
  <p class="font-mono text-violet-400">altura = 145,79 m &nbsp; apotema = 186,62 m</p>
  <ol>
    <li>Semidiagonal de la base: d/2 = (233·√2)/2 ≈ 164,76 m.</li>
    <li>Altura (arista como hipotenusa): h = √(220² − 164,76²) = √(48400 − 27145) ≈ <strong>145,79 m</strong>.</li>
    <li>Apotema de la cara (arista como hipotenusa, semibase como cateto): ap = √(220² − 116,5²) = √(48400 − 13572) ≈ <strong>186,62 m</strong>.</li>
    <li>Control: ap = √(h² + 116,5²) = √(21254 + 13572) ≈ 186,62 ✓</li>
  </ol>
</div>

<div id="cuarta" class="lesson-box">
  <h2>Triángulo: el cateto menor es la cuarta parte de la hipotenusa</h2>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="190" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo x 12 4x">
    <polygon points="60,160 220,160 220,50" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="204" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="55" y="175" fill="#e2e8f0" font-size="12">A</text>
    <text x="222" y="175" fill="#e2e8f0" font-size="12">C</text>
    <text x="222" y="45" fill="#e2e8f0" font-size="12">B</text>
    <text x="50" y="110" fill="#e2e8f0" font-size="12">x</text>
    <text x="130" y="178" fill="#e2e8f0" font-size="12">12</text>
    <text x="125" y="100" fill="#e2e8f0" font-size="12">4x</text>
  </svg>
  </div>
  <p class="font-mono text-violet-400">α = 14,48° &nbsp; β = 75,52° &nbsp; x = 3,10 &nbsp; cateto menor = 3,10 &nbsp; cateto mayor = 12</p>
  <ol>
    <li>Pitágoras: x² + 12² = (4x)² → 144 = 15x² → x² = 9,6 → x ≈ <strong>3,10</strong>.</li>
    <li>Hipotenusa 4x ≈ 12,39. Control: √(3,10² + 12²) ≈ 12,39 ✓</li>
    <li>sin(α) = x/4x = 1/4 → α ≈ <strong>14,48°</strong>; β ≈ 75,52°.</li>
  </ol>
</div>

<div id="x" class="lesson-box">
  <h2>Calcular el valor de x</h2>
  <p>F - A - C alineados, AB perpendicular a FC, FA = 3 cm, AC = 9 cm, BC = 12 cm, FB = x.</p>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cálculo de x doble Pitágoras">
    <line x1="50" y1="160" x2="250" y2="160" stroke="#64748b" stroke-width="2"/>
    <line x1="110" y1="160" x2="180" y2="50" stroke="#a78bfa" stroke-width="2"/>
    <line x1="50" y1="160" x2="180" y2="50" stroke="#a78bfa" stroke-width="2"/>
    <line x1="180" y1="50" x2="250" y2="160" stroke="#a78bfa" stroke-width="2"/>
    <line x1="110" y1="160" x2="250" y2="160" stroke="#a78bfa" stroke-width="2"/>
    <polygon points="110,160 180,50 250,160" fill="rgba(139,92,246,0.10)"/>
    <rect x="110" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="45" y="175" fill="#e2e8f0" font-size="12">F</text>
    <text x="105" y="178" fill="#e2e8f0" font-size="12">A 3cm</text>
    <text x="175" y="178" fill="#e2e8f0" font-size="12">9cm C</text>
    <text x="182" y="45" fill="#e2e8f0" font-size="12">B</text>
    <text x="90" y="100" fill="#e2e8f0" font-size="12">x</text>
    <text x="220" y="110" fill="#e2e8f0" font-size="12">12cm</text>
  </svg>
  </div>
  <p class="font-mono text-violet-400">x = 8,49 cm (= 6√2)</p>
  <ol>
    <li>En ABC (recto en A): AB = √(BC² − AC²) = √(144 − 81) = √63 ≈ 7,94 cm.</li>
    <li>En AFB (recto en A): x = √(FA² + AB²) = √(9 + 63) = √72 = 6√2 ≈ <strong>8,49 cm</strong>.</li>
  </ol>
</div>
