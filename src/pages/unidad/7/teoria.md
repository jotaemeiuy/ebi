---
layout: ../../../layouts/Leccion.astro
title: "Trigonometría en triángulos rectángulos - Teoría"
unitId: 7
unitTitle: "Trigonometría"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#triangulo">• 1. El triángulo rectángulo: nombres de los lados</a></li>
    <li><a href="#pitagoras">• 2. Teorema de Pitágoras</a></li>
    <li><a href="#pitagoricos">• 3. Triángulos pitagóricos</a></li>
    <li><a href="#lineas">• 4. Las líneas trigonométricas dependen del ángulo</a></li>
    <li><a href="#coseno">• 5. Coseno</a></li>
    <li><a href="#seno">• 6. Seno</a></li>
    <li><a href="#tangente">• 7. Tangente</a></li>
    <li><a href="#memoria">• 8. Cómo recordarlo: SOH - CAH - TOA</a></li>
    <li><a href="#calculadora">• 9. Calculadora y funciones inversas</a></li>
    <li><a href="#resolver">• 10. Resolver un triángulo: los 3 casos</a></li>
    <li><a href="#errores">• 11. Errores comunes</a></li>
  </ul>
</div>

<div id="triangulo" class="lesson-box">
  <h2>1. El triángulo rectángulo: nombres de los lados</h2>
  <p>
    Todo triángulo rectángulo tiene un ángulo de 90° y dos ángulos agudos
    (α y β) que suman 90°. El lado frente al ángulo recto se llama <strong>hipotenusa</strong>:
    siempre es el lado más largo.
  </p>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="210" viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo rectángulo con hipotenusa y catetos">
    <polygon points="60,170 240,170 240,40" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="224" y="154" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="52" y="175" fill="#e2e8f0" font-size="14">C</text>
    <text x="244" y="175" fill="#e2e8f0" font-size="14">A</text>
    <text x="244" y="35" fill="#e2e8f0" font-size="14">B</text>
    <text x="120" y="160" fill="#f59e0b" font-size="13">Cateto b</text>
    <text x="252" y="110" fill="#f59e0b" font-size="13">Cateto c</text>
    <text x="110" y="100" fill="#f59e0b" font-size="13">Hipotenusa</text>
  </svg>
  </div>
  <p class="font-mono text-violet-400">(Hipotenusa)² = (cateto b)² + (cateto c)²</p>
  <p>En el repartido el recto suele estar en A, la hipotenusa es BC. En otros libros el recto está en C y la hipotenusa es AB. La letra cambia, la idea no: <strong>hipotenusa = frente al 90°</strong>.</p>
</div>

<div id="pitagoras" class="lesson-box">
  <h2>2. Teorema de Pitágoras</h2>
  <p>Si <strong>a</strong> es la hipotenusa y <strong>b, c</strong> los catetos:</p>
  <blockquote><p>a² = b² + c²</p></blockquote>
  <p>Despejes útiles:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Hipotenusa: a = √(b² + c²)</li>
    <li>Cateto: b = √(a² − c²)</li>
  </ul>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pitágoras como áreas de cuadrados">
    <polygon points="90,160 230,160 230,60" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <text x="150" y="178" fill="#e2e8f0" font-size="12">b²</text>
    <text x="240" y="115" fill="#e2e8f0" font-size="12">c²</text>
    <text x="140" y="100" fill="#e2e8f0" font-size="12">a²</text>
    <text x="40" y="30" fill="#94a3b8" font-size="12">El cuadrado sobre la hipotenusa</text>
    <text x="40" y="48" fill="#94a3b8" font-size="12">= suma de los cuadrados sobre catetos.</text>
  </svg>
  </div>
  <h3>Ejemplo: 6 - 8 - 10</h3>
  <ol>
    <li>Catetos 6 y 8, hipotenusa a = √(6² + 8²)</li>
    <li>a = √(36 + 64) = √100 = 10</li>
    <li>Verificación: 10² = 100, 6² + 8² = 100 ✓</li>
  </ol>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="190" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo 6 8 10">
    <polygon points="60,160 220,160 220,60" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="2" stroke-linejoin="round"/>
    <rect x="204" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="130" y="178" fill="#e2e8f0" font-size="13">8 cm</text>
    <text x="228" y="115" fill="#e2e8f0" font-size="13">6 cm</text>
    <text x="120" y="100" fill="#e2e8f0" font-size="13">10 cm</text>
    <text x="55" y="165" fill="#94a3b8" font-size="12">A</text>
    <text x="222" y="175" fill="#94a3b8" font-size="12">C</text>
    <text x="222" y="55" fill="#94a3b8" font-size="12">B</text>
  </svg>
  </div>
</div>

<div id="pitagoricos" class="lesson-box">
  <h2>3. Triángulos pitagóricos</h2>
  <p>Son triángulos de <strong>lados enteros</strong> que verifican Pitágoras. Los tres más usados:</p>
  <p class="font-mono text-violet-400">3 - 4 - 5 &nbsp;&nbsp; 5 - 12 - 13 &nbsp;&nbsp; 9 - 40 - 41</p>
  <p>Y todos sus múltiplos: 6-8-10 es el doble de 3-4-5; 10-24-26 es el doble de 5-12-13.</p>
  <div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin:1rem 0">
  <svg width="150" height="140" viewBox="0 0 150 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo 3 4 5">
    <polygon points="30,110 110,110 110,50" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <text x="60" y="128" fill="#e2e8f0" font-size="12">4</text>
    <text x="114" y="85" fill="#e2e8f0" font-size="12">3</text>
    <text x="55" y="80" fill="#e2e8f0" font-size="12">5</text>
    <text x="55" y="20" fill="#94a3b8" font-size="12">3-4-5</text>
  </svg>
  <svg width="150" height="140" viewBox="0 0 150 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo 5 12 13">
    <polygon points="20,110 120,110 120,40" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <text x="60" y="128" fill="#e2e8f0" font-size="12">12</text>
    <text x="124" y="80" fill="#e2e8f0" font-size="12">5</text>
    <text x="55" y="70" fill="#e2e8f0" font-size="12">13</text>
    <text x="50" y="20" fill="#94a3b8" font-size="12">5-12-13</text>
  </svg>
  <svg width="150" height="140" viewBox="0 0 150 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo 9 40 41">
    <polygon points="20,115 125,115 125,25" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <text x="60" y="130" fill="#e2e8f0" font-size="12">40</text>
    <text x="128" y="75" fill="#e2e8f0" font-size="12">9</text>
    <text x="55" y="65" fill="#e2e8f0" font-size="12">41</text>
    <text x="48" y="15" fill="#94a3b8" font-size="12">9-40-41</text>
  </svg>
  </div>
  <p>Si en un ejercicio ves hipotenusa 701 y un cateto 651, sospecha terna: 701² − 651² = 260². La tabla del práctico está armada así.</p>
</div>

<div id="lineas" class="lesson-box">
  <h2>4. Las líneas trigonométricas dependen del ángulo</h2>
  <p>Fija un ángulo agudo α. Entonces:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>Hipotenusa:</strong> siempre frente al 90°, no cambia.</li>
    <li><strong>Cateto opuesto a α:</strong> el que está enfrente de α, no lo toca.</li>
    <li><strong>Cateto adyacente a α:</strong> el que forma a α junto con la hipotenusa.</li>
  </ul>
  <p>Si cambias de ángulo (miras desde β), opuesto y adyacente <strong>se intercambian</strong>:</p>
  <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;margin:1rem 0">
  <svg width="260" height="200" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Opuesto y adyacente vistos desde alfa">
    <polygon points="50,160 210,160 210,40" fill="rgba(245,158,11,0.10)" stroke="#f59e0b" stroke-width="2" stroke-linejoin="round"/>
    <rect x="194" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <path d="M 80 160 A 30 30 0 0 0 80 140" fill="none" stroke="#f472b6" stroke-width="2"/>
    <text x="86" y="155" fill="#f472b6" font-size="14">α</text>
    <text x="200" y="175" fill="#e2e8f0" font-size="12">A</text>
    <text x="214" y="40" fill="#e2e8f0" font-size="12">B</text>
    <text x="40" y="165" fill="#e2e8f0" font-size="12">O</text>
    <text x="115" y="178" fill="#34d399" font-size="12">adyac. a α</text>
    <text x="216" y="110" fill="#f472b6" font-size="12">op. a α</text>
    <text x="60" y="30" fill="#94a3b8" font-size="12">visto desde α</text>
  </svg>
  <svg width="260" height="200" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Opuesto y adyacente vistos desde beta">
    <polygon points="50,160 210,160 210,40" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="194" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <path d="M 210 70 A 30 30 0 0 1 190 60" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="188" y="85" fill="#38bdf8" font-size="14">β</text>
    <text x="115" y="178" fill="#f472b6" font-size="12">op. a β</text>
    <text x="216" y="110" fill="#34d399" font-size="12">ady. a β</text>
    <text x="60" y="30" fill="#94a3b8" font-size="12">visto desde β</text>
  </svg>
  </div>
  <p>El mismo lado es opuesto para un ángulo y adyacente para el otro. Este es el error más común: <strong>primero indica desde qué ángulo miras</strong>.</p>
</div>

<div id="coseno" class="lesson-box">
  <h2>5. Coseno: adyacente sobre hipotenusa</h2>
  <blockquote><p>cos(α) = cateto adyacente / hipotenusa</p></blockquote>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coseno adyacente hipotenusa">
    <polygon points="50,160 230,160 230,40" fill="rgba(56,189,248,0.10)" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="50" y1="160" x2="230" y2="160" stroke="#34d399" stroke-width="4"/>
    <line x1="50" y1="160" x2="230" y2="40" stroke="#f59e0b" stroke-width="4"/>
    <path d="M 80 160 A 30 30 0 0 0 80 138" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="88" y="155" fill="#e2e8f0" font-size="14">α</text>
    <rect x="214" y="144" width="16" height="16" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="120" y="185" fill="#34d399" font-size="12">adyacente → cos</text>
    <text x="110" y="95" fill="#f59e0b" font-size="12">hipotenusa</text>
  </svg>
  </div>
  <h3>Ejemplo</h3>
  <p>Hipotenusa AB = 16 cm, BC = 6 cm, recto en C. ¿Coseno de qué ángulo se puede calcular?</p>
  <ol>
    <li>BC toca al ángulo B y es cateto, AB es hipotenusa → se puede calcular <strong>cos(B) = 6/16 = 0,375</strong>.</li>
    <li>B = cos⁻¹(0,375) ≈ 68,0°.</li>
    <li>Para cos(A) necesitarías AC = √(16² − 6²) ≈ 14,83.</li>
  </ol>
  <p>Moraleja: el coseno sirve cuando conoces <strong>el lado pegado al ángulo y la hipotenusa</strong>.</p>
</div>

<div id="seno" class="lesson-box">
  <h2>6. Seno: opuesto sobre hipotenusa</h2>
  <blockquote><p>sin(α) = cateto opuesto / hipotenusa</p></blockquote>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Seno opuesto hipotenusa">
    <polygon points="50,160 230,160 230,40" fill="rgba(244,114,182,0.10)" stroke="#f472b6" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="230" y1="160" x2="230" y2="40" stroke="#f472b6" stroke-width="4"/>
    <line x1="50" y1="160" x2="230" y2="40" stroke="#f59e0b" stroke-width="4"/>
    <path d="M 80 160 A 30 30 0 0 0 80 138" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="88" y="155" fill="#e2e8f0" font-size="14">α</text>
    <rect x="214" y="144" width="16" height="16" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="238" y="110" fill="#f472b6" font-size="12">opuesto</text>
    <text x="110" y="95" fill="#f59e0b" font-size="12">hipotenusa</text>
  </svg>
  </div>
  <h3>Ejemplo</h3>
  <p>Recto en C, Â = 25°, AB = 34 cm (hipotenusa).</p>
  <ol>
    <li>El opuesto a A es BC → sin(25°) = BC / 34 → BC = 34 · sin(25°) ≈ 14,37 cm.</li>
    <li>B = 90° − 25° = 65°.</li>
    <li>Con sin(65°) = AC / 34 → AC = 34 · sin(65°) ≈ 30,81 cm.</li>
  </ol>
  <p>El seno sirve cuando conoces <strong>el lado enfrentado al ángulo y la hipotenusa</strong>.</p>
</div>

<div id="tangente" class="lesson-box">
  <h2>7. Tangente: opuesto sobre adyacente</h2>
  <blockquote><p>tan(α) = cateto opuesto / cateto adyacente</p></blockquote>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tangente opuesto adyacente">
    <polygon points="50,160 230,160 230,40" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="230" y1="160" x2="230" y2="40" stroke="#f472b6" stroke-width="4"/>
    <line x1="50" y1="160" x2="230" y2="160" stroke="#34d399" stroke-width="4"/>
    <path d="M 80 160 A 30 30 0 0 0 80 138" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="88" y="155" fill="#e2e8f0" font-size="14">α</text>
    <rect x="214" y="144" width="16" height="16" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="100" y="185" fill="#34d399" font-size="12">adyacente</text>
    <text x="238" y="110" fill="#f472b6" font-size="12">opuesto</text>
    <text x="120" y="60" fill="#94a3b8" font-size="12">no usa la hipotenusa</text>
  </svg>
  </div>
  <h3>Ejemplo</h3>
  <p>Recto en A, B = 50°, AB = 12 cm (adyacente a B). Sin hallar la hipotenusa:</p>
  <ol>
    <li>El opuesto a B es AC → tan(50°) = AC / 12.</li>
    <li>AC = 12 · tan(50°) ≈ 14,30 cm.</li>
    <li>Verificación con coseno: BC = 12 / cos(50°) ≈ 18,67; √(18,67² − 12²) ≈ 14,30 ✓</li>
  </ol>
  <p>La tangente es la única que <strong>no usa la hipotenusa</strong>: ideal cuando tienes los dos catetos.</p>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="180" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Catetos 12 y 30">
    <polygon points="60,150 240,150 240,50" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="224" y="134" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="140" y="168" fill="#e2e8f0" font-size="12">30 cm</text>
    <text x="246" y="105" fill="#e2e8f0" font-size="12">12 cm</text>
    <text x="130" y="100" fill="#e2e8f0" font-size="12">32,31 cm</text>
    <text x="70" y="140" fill="#f472b6" font-size="12">21,8°</text>
    <text x="220" y="65" fill="#38bdf8" font-size="12">68,2°</text>
  </svg>
  </div>
  <p>Catetos 12 y 30: tan = 12/30 → ángulo frente al 12 vale arctan(0,4) ≈ 21,8°; el otro 68,2°; hipotenusa √(12²+30²) ≈ 32,31 cm.</p>
</div>

<div id="memoria" class="lesson-box">
  <h2>8. Cómo recordarlo: SOH - CAH - TOA</h2>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>S</strong>eno = <strong>O</strong>puesto / <strong>H</strong>ipotenusa</li>
    <li><strong>C</strong>oseno = <strong>A</strong>dyacente / <strong>H</strong>ipotenusa</li>
    <li><strong>T</strong>angente = <strong>O</strong>puesto / <strong>A</strong>dyacente</li>
  </ul>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Esquema SOH CAH TOA">
    <rect x="10" y="20" width="100" height="90" rx="10" fill="rgba(244,114,182,0.10)" stroke="#f472b6" stroke-width="2"/>
    <rect x="120" y="20" width="100" height="90" rx="10" fill="rgba(56,189,248,0.10)" stroke="#38bdf8" stroke-width="2"/>
    <rect x="230" y="20" width="100" height="90" rx="10" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="2"/>
    <text x="35" y="50" fill="#f472b6" font-size="16" font-weight="bold">SOH</text>
    <text x="25" y="75" fill="#e2e8f0" font-size="11">sin = op / hip</text>
    <text x="145" y="50" fill="#38bdf8" font-size="16" font-weight="bold">CAH</text>
    <text x="130" y="75" fill="#e2e8f0" font-size="11">cos = ad / hip</text>
    <text x="255" y="50" fill="#34d399" font-size="16" font-weight="bold">TOA</text>
    <text x="240" y="75" fill="#e2e8f0" font-size="11">tan = op / ad</text>
    <text x="25" y="95" fill="#94a3b8" font-size="10">¿hay hip? → sin/cos</text>
    <text x="240" y="95" fill="#94a3b8" font-size="10">¿no hay hip? → tan</text>
  </svg>
  </div>
  <p>Pregunta guía: ¿qué dos lados conozco o quiero? Esa respuesta elige la herramienta.</p>
</div>

<div id="calculadora" class="lesson-box">
  <h2>9. Calculadora y funciones inversas</h2>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Para hallar un <strong>lado</strong>: usa sin, cos o tan del ángulo conocido.</li>
    <li>Para hallar un <strong>ángulo</strong>: usa la inversa sin⁻¹, cos⁻¹ o tan⁻¹ del cociente.</li>
    <li>La calculadora debe estar en <strong>DEG</strong> (grados), no en RAD ni GRAD.</li>
    <li>Los ángulos agudos cumplen: α + β = 90°.</li>
  </ul>
  <p class="font-mono text-violet-400">Ej.: cos(B) = 0,375 → B = cos⁻¹(0,375) ≈ 68°</p>
  <p class="font-mono text-violet-400">Ej.: tan(α) = 12/30 = 0,4 → α = tan⁻¹(0,4) ≈ 21,8°</p>
</div>

<div id="resolver" class="lesson-box">
  <h2>10. Resolver un triángulo: los 3 casos</h2>
  <p><strong>Resolver</strong> = hallar los 3 lados y los 2 ángulos agudos (el tercero es 90°).</p>
  <div style="overflow-x:auto">
  <table>
    <thead><tr><th>Caso</th><th>Dato</th><th>Camino</th></tr></thead>
    <tbody>
      <tr><td>I</td><td>Dos lados (ej. 6 y 8)</td><td>Pitágoras → tercer lado → inversa trigonométrica → 90° menos ángulo</td></tr>
      <tr><td>II</td><td>Un lado + un ángulo agudo (ej. hip 12, C = 35°)</td><td>90° menos ángulo → sin/cos para los catetos</td></tr>
      <tr><td>III</td><td>Mixto (ej. cateto 8, hip 12)</td><td>Inversa (arcoseno/arcocoseno) → 90° menos ángulo → Pitágoras o sin/cos</td></tr>
    </tbody>
  </table>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin:1rem 0">
  <svg width="160" height="150" viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caso I dos catetos">
    <polygon points="30,120 120,120 120,40" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <text x="65" y="138" fill="#e2e8f0" font-size="12">8</text>
    <text x="124" y="85" fill="#e2e8f0" font-size="12">6</text>
    <text x="60" y="30" fill="#94a3b8" font-size="11">CASO I</text>
  </svg>
  <svg width="160" height="150" viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caso II hipotenusa y ángulo">
    <polygon points="30,120 120,120 120,40" fill="rgba(56,189,248,0.10)" stroke="#38bdf8" stroke-width="2" stroke-linejoin="round"/>
    <text x="60" y="95" fill="#e2e8f0" font-size="12">12</text>
    <text x="100" y="118" fill="#f472b6" font-size="12">35°</text>
    <text x="60" y="30" fill="#94a3b8" font-size="11">CASO II</text>
  </svg>
  <svg width="160" height="150" viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caso III cateto e hipotenusa">
    <polygon points="30,120 120,120 120,40" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="2" stroke-linejoin="round"/>
    <text x="124" y="85" fill="#e2e8f0" font-size="12">8</text>
    <text x="60" y="85" fill="#e2e8f0" font-size="12">12</text>
    <text x="60" y="30" fill="#94a3b8" font-size="11">CASO III</text>
  </svg>
  </div>
  <p>Verás los tres resueltos con números en el <strong>Práctico con soluciones</strong>.</p>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pirámide de base cuadrada">
    <polygon points="60,160 260,160 200,120 140,120" fill="rgba(139,92,246,0.08)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="160,30 60,160 260,160" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>
    <polygon points="160,30 200,120 140,120" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2" stroke-linejoin="round"/>
    <line x1="160" y1="30" x2="160" y2="140" stroke="#f472b6" stroke-width="2" stroke-dasharray="5 4"/>
    <line x1="140" y1="120" x2="200" y2="120" stroke="#34d399" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="165" y="90" fill="#f472b6" font-size="11">altura</text>
    <text x="165" y="135" fill="#34d399" font-size="11">apotema</text>
    <text x="80" y="175" fill="#94a3b8" font-size="11">base cuadrada</text>
    <text x="210" y="100" fill="#94a3b8" font-size="11">arista</text>
  </svg>
  </div>
  <p>En la pirámide de base cuadrada (lado 233 m, arista 220 m) aparecen dos triángulos rectángulos encadenados: primero con la semidiagonal para hallar la <strong>altura ≈ 145,8 m</strong>, luego con la semibase para hallar el <strong>apotema ≈ 186,6 m</strong>.</p>
</div>

<div id="errores" class="lesson-box">
  <h2>11. Errores comunes</h2>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Confundir opuesto con adyacente: marca α con color antes de elegir sin/cos/tan.</li>
    <li>Usar Pitágoras con un ángulo: Pitágoras solo relaciona lados, nunca ángulos.</li>
    <li>Olvidar DEG: en RAD, cos⁻¹(0,375) da 1,19 (radianes), no 68°.</li>
    <li>No verificar: comprueba siempre con Pitágoras y con α + β = 90°.</li>
    <li>Redondear antes de tiempo: guarda 2-3 decimales intermedios, redondea al final.</li>
  </ul>
</div>

<div class="exercise-box">
  <h3>¿Y ahora?</h3>
  <p>Abre el <strong>Práctico con soluciones</strong>: es el mismo repartido de clase (tabla pitagórica, ejercicios de seno, coseno y tangente, CASOS I-II-III, pirámide y cálculo de x) pero con cada cuenta desarrollada y verificada.</p>
</div>
