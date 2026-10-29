---
layout: ../../../layouts/Leccion.astro
title: "Trigonometría en triángulos rectángulos - Teoría"
unitId: 5
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
    <rect x="224" y="154" width="14" height="14" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="48" y="178" text-anchor="end" fill="#e2e8f0" font-size="14">C</text>
    <text x="252" y="184" fill="#e2e8f0" font-size="14">A</text>
    <text x="252" y="36" fill="#e2e8f0" font-size="14">B</text>
    <text x="150" y="192" text-anchor="middle" fill="#f59e0b" font-size="13">Cateto b</text>
    <text x="252" y="110" fill="#f59e0b" font-size="13">Cateto c</text>
    <text x="142.4" y="94.5" text-anchor="middle" fill="#f59e0b" font-size="13" transform="rotate(-35.8 142.4 94.5)">Hipotenusa</text>
  </svg>
  </div>
  <p class="font-mono text-violet-400">(Hipotenusa)² = (cateto)² + (cateto)²</p>
  <p>En el repartido el recto suele estar en A, la hipotenusa es BC. En otros libros el recto está en C y la hipotenusa es AB. La letra cambia, la idea no: <strong>hipotenusa = frente al 90°</strong>.</p>
</div>

<div id="pitagoras" class="lesson-box">
  <h2>2. Teorema de Pitágoras</h2>
  <p>En todo triángulo rectángulo, si <strong>c</strong> es la hipotenusa y <strong>a</strong>, <strong>b</strong> son los catetos:</p>
  <div style="display:flex;justify-content:center;margin:1.2rem 0 .4rem">
  <svg viewBox="88 42 376 434" width="100%" style="max-width:390px;height:auto" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo rectángulo con un cuadrado sobre cada lado: a y b sobre los catetos, c sobre la hipotenusa">
    <!-- cuadrado sobre el cateto a -->
    <polygon points="200,300 350,300 350,450 200,450" fill="rgba(56,189,248,0.16)" stroke="#38bdf8" stroke-width="2" stroke-linejoin="round"/>
    <!-- cuadrado sobre el cateto b -->
    <polygon points="110,210 200,210 200,300 110,300" fill="rgba(248,113,113,0.16)" stroke="#f87171" stroke-width="2" stroke-linejoin="round"/>
    <!-- cuadrado sobre la hipotenusa c -->
    <polygon points="200,210 280,70 430,160 350,300" fill="rgba(52,211,153,0.16)" stroke="#34d399" stroke-width="2" stroke-linejoin="round"/>
    <!-- triángulo -->
    <polygon points="200,300 350,300 200,210" fill="rgba(148,163,184,0.14)" stroke="#e2e8f0" stroke-width="2" stroke-linejoin="round"/>
    <rect x="200" y="286" width="14" height="14" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>
    <!-- letras del cuadrado a -->
    <text x="275" y="470" text-anchor="middle" fill="#7dd3fc" font-size="13" font-style="italic">a</text>
    <text x="188" y="380" text-anchor="end" fill="#7dd3fc" font-size="13" font-style="italic">a</text>
    <text x="362" y="380" fill="#7dd3fc" font-size="13" font-style="italic">a</text>
    <text x="275" y="322" text-anchor="middle" fill="#7dd3fc" font-size="13" font-style="italic">a</text>
    <!-- letras del cuadrado b -->
    <text x="98" y="258" text-anchor="end" fill="#fca5a5" font-size="13" font-style="italic">b</text>
    <text x="155" y="198" text-anchor="middle" fill="#fca5a5" font-size="13" font-style="italic">b</text>
    <text x="155" y="322" text-anchor="middle" fill="#fca5a5" font-size="13" font-style="italic">b</text>
    <text x="188" y="258" text-anchor="end" fill="#fca5a5" font-size="13" font-style="italic">b</text>
    <!-- letras del cuadrado c -->
    <text x="226" y="132" text-anchor="middle" fill="#6ee7b7" font-size="13" font-style="italic">c</text>
    <text x="363" y="101" text-anchor="middle" fill="#6ee7b7" font-size="13" font-style="italic">c</text>
    <text x="404" y="238" text-anchor="middle" fill="#6ee7b7" font-size="13" font-style="italic">c</text>
    <text x="283" y="241" text-anchor="middle" fill="#6ee7b7" font-size="13" font-style="italic">c</text>
  </svg>
  </div>
  <div class="trig-formula">
    <span style="color:#6ee7b7">c²</span> = <span style="color:#7dd3fc">a²</span> + <span style="color:#fca5a5">b²</span>
  </div>
  <h3>¿De dónde se deduce?</h3>
  <p>Cada cuadrado se apoya en un lado del triángulo, así que su área es <strong>ese lado al cuadrado</strong>: el celeste mide a², el rojo b² y el verde c².</p>
  <p>Si sumamos el cuadrado celeste y el rojo, cubren exactamente la misma superficie que el verde. Esa igualdad de áreas es el teorema:</p>
  <div class="trig-formula">área <span style="color:#6ee7b7">verde</span> = área <span style="color:#7dd3fc">celeste</span> + área <span style="color:#fca5a5">roja</span></div>
  <p>No hace falta memorizarlo como una fórmula suelta: se comprueba recortando los tres cuadrados y moviéndolos, y vale para <strong>cualquier</strong> triángulo rectángulo, sin importar su tamaño.</p>
  <p>Despejes útiles:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Hipotenusa: c = <span class="raiz"><span class="rad">a² + b²</span></span></li>
    <li>Cateto: a = <span class="raiz"><span class="rad">c² − b²</span></span> &nbsp;o&nbsp; b = <span class="raiz"><span class="rad">c² − a²</span></span></li>
  </ul>
  <h3>Ejemplo: 6 - 8 - 10</h3>
  <ol>
    <li>Catetos 6 y 8, hipotenusa c = <span class="raiz"><span class="rad">6² + 8²</span></span></li>
    <li>c = <span class="raiz"><span class="rad">36 + 64</span></span> = <span class="raiz"><span class="rad">100</span></span> = 10</li>
    <li>Verificación: 10² = 100, 6² + 8² = 100 ✓</li>
  </ol>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="190" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo 6 8 10">
    <polygon points="60,160 220,160 220,60" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="2" stroke-linejoin="round"/>
    <rect x="204" y="144" width="14" height="14" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="140" y="184" text-anchor="middle" fill="#e2e8f0" font-size="13">8 cm</text>
    <text x="232" y="114" fill="#e2e8f0" font-size="13">6 cm</text>
    <text x="133.1" y="99.0" text-anchor="middle" fill="#e2e8f0" font-size="13" transform="rotate(-32.0 133.1 99.0)">10 cm</text>
    <text x="48" y="168" text-anchor="end" fill="#94a3b8" font-size="12">A</text>
    <text x="232" y="178" fill="#94a3b8" font-size="12">C</text>
    <text x="232" y="56" fill="#94a3b8" font-size="12">B</text>
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
    <rect x="96" y="96" width="12" height="12" fill="none" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="70" y="130" text-anchor="middle" fill="#e2e8f0" font-size="12">4</text>
    <text x="117" y="84" fill="#e2e8f0" font-size="12">3</text>
    <text x="63.4" y="71.2" text-anchor="middle" fill="#e2e8f0" font-size="12" transform="rotate(-36.9 63.4 71.2)">5</text>
    <text x="70" y="18" text-anchor="middle" fill="#94a3b8" font-size="12">3-4-5</text>
  </svg>
  <svg width="150" height="140" viewBox="0 0 150 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo 5 12 13">
    <polygon points="20,110 120,110 120,40" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="106" y="96" width="12" height="12" fill="none" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="70" y="130" text-anchor="middle" fill="#e2e8f0" font-size="12">12</text>
    <text x="127" y="79" fill="#e2e8f0" font-size="12">5</text>
    <text x="63.7" y="66.0" text-anchor="middle" fill="#e2e8f0" font-size="12" transform="rotate(-35.0 63.7 66.0)">13</text>
    <text x="70" y="18" text-anchor="middle" fill="#94a3b8" font-size="12">5-12-13</text>
  </svg>
  <svg width="150" height="140" viewBox="0 0 150 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triángulo 9 40 41">
    <polygon points="20,115 125,115 125,25" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="111" y="101" width="12" height="12" fill="none" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="72" y="135" text-anchor="middle" fill="#e2e8f0" font-size="12">40</text>
    <text x="132" y="74" fill="#e2e8f0" font-size="12">9</text>
    <text x="65.3" y="61.6" text-anchor="middle" fill="#e2e8f0" font-size="12" transform="rotate(-40.6 65.3 61.6)">41</text>
    <text x="72" y="15" text-anchor="middle" fill="#94a3b8" font-size="12">9-40-41</text>
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
  <svg width="300" height="210" viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Opuesto y adyacente vistos desde alfa">
    <polygon points="50,160 210,160 210,40" fill="rgba(245,158,11,0.10)" stroke="#f59e0b" stroke-width="2" stroke-linejoin="round"/>
    <rect x="194" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <path d="M 80 160 A 30 30 0 0 0 80 140" fill="none" stroke="#f472b6" stroke-width="2"/>
    <text x="87" y="155" fill="#f472b6" font-size="14">α</text>
    <text x="220" y="178" fill="#e2e8f0" font-size="12">A</text>
    <text x="220" y="40" fill="#e2e8f0" font-size="12">B</text>
    <text x="38" y="167" fill="#e2e8f0" font-size="12">O</text>
    <text x="130" y="185" text-anchor="middle" fill="#34d399" font-size="12">adyacente a α</text>
    <text x="218" y="108" fill="#f472b6" font-size="11">opuesto a α</text>
    <text x="121.0" y="88.0" text-anchor="middle" fill="#f59e0b" font-size="12" transform="rotate(-36.9 121.0 88.0)">hipotenusa</text>
    <text x="60" y="24" fill="#94a3b8" font-size="12">visto desde α</text>
  </svg>
  <svg width="300" height="210" viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Opuesto y adyacente vistos desde beta">
    <polygon points="50,160 210,160 210,40" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="194" y="144" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <path d="M 210 70 A 30 30 0 0 1 190 60" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="185" y="88" fill="#38bdf8" font-size="14">β</text>
    <text x="220" y="178" fill="#e2e8f0" font-size="12">A</text>
    <text x="220" y="40" fill="#e2e8f0" font-size="12">B</text>
    <text x="38" y="167" fill="#e2e8f0" font-size="12">O</text>
    <text x="130" y="185" text-anchor="middle" fill="#f472b6" font-size="12">opuesto a β</text>
    <text x="218" y="108" fill="#34d399" font-size="11">adyacente a β</text>
    <text x="121.0" y="88.0" text-anchor="middle" fill="#a78bfa" font-size="12" transform="rotate(-36.9 121.0 88.0)">hipotenusa</text>
    <text x="60" y="24" fill="#94a3b8" font-size="12">visto desde β</text>
  </svg>
  </div>
  <p>El mismo lado es opuesto para un ángulo y adyacente para el otro. Este es el error más común: <strong>primero indica desde qué ángulo miras</strong>.</p>
</div>

<div id="coseno" class="lesson-box">
  <h2>5. Coseno: adyacente sobre hipotenusa</h2>
  <div class="trig-formula">
    <span class="fn">cos</span>(<span class="var">α</span>) = <span class="frac"><span class="num">cateto adyacente</span><span class="den">hipotenusa</span></span>
  </div>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="210" viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coseno adyacente hipotenusa">
    <polygon points="50,160 230,160 230,40" fill="rgba(56,189,248,0.10)" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="50" y1="160" x2="230" y2="160" stroke="#34d399" stroke-width="4"/>
    <line x1="50" y1="160" x2="230" y2="40" stroke="#f59e0b" stroke-width="4"/>
    <path d="M 80 160 A 30 30 0 0 0 80 138" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="88" y="155" fill="#e2e8f0" font-size="14">α</text>
    <rect x="214" y="144" width="16" height="16" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="140" y="188" text-anchor="middle" fill="#34d399" font-size="12">adyacente → cos</text>
    <text x="132.8" y="89.2" text-anchor="middle" fill="#f59e0b" font-size="12" transform="rotate(-33.7 132.8 89.2)">hipotenusa</text>
  </svg>
  </div>
  <h3>Ejemplo</h3>
  <p>Hipotenusa AB = 16 cm, BC = 6 cm, recto en C. ¿Coseno de qué ángulo se puede calcular?</p>
  <ol>
    <li>BC toca al ángulo B y es cateto, AB es hipotenusa → se puede calcular <strong>cos(B) = <span class="frac"><span class="num">6</span><span class="den">16</span></span> = 0,375</strong>.</li>
    <li>B = cos⁻¹(0,375) ≈ 68,0°.</li>
    <li>Para cos(A) necesitarías AC = <span class="raiz"><span class="rad">16² − 6²</span></span> ≈ 14,83.</li>
  </ol>
  <p>Moraleja: el coseno sirve cuando conoces <strong>el lado pegado al ángulo y la hipotenusa</strong>.</p>
</div>

<div id="seno" class="lesson-box">
  <h2>6. Seno: opuesto sobre hipotenusa</h2>
  <div class="trig-formula">
    <span class="fn">sin</span>(<span class="var">α</span>) = <span class="frac"><span class="num">cateto opuesto</span><span class="den">hipotenusa</span></span>
  </div>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="210" viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Seno opuesto hipotenusa">
    <polygon points="50,160 230,160 230,40" fill="rgba(244,114,182,0.10)" stroke="#f472b6" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="230" y1="160" x2="230" y2="40" stroke="#f472b6" stroke-width="4"/>
    <line x1="50" y1="160" x2="230" y2="40" stroke="#f59e0b" stroke-width="4"/>
    <path d="M 80 160 A 30 30 0 0 0 80 138" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="88" y="155" fill="#e2e8f0" font-size="14">α</text>
    <rect x="214" y="144" width="16" height="16" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="238" y="110" fill="#f472b6" font-size="12">opuesto</text>
    <text x="132.8" y="89.2" text-anchor="middle" fill="#f59e0b" font-size="12" transform="rotate(-33.7 132.8 89.2)">hipotenusa</text>
  </svg>
  </div>
  <h3>Ejemplo</h3>
  <p>Recto en C, Â = 25°, AB = 34 cm (hipotenusa).</p>
  <ol>
    <li>El opuesto a A es BC → sin(25°) = <span class="frac"><span class="num">BC</span><span class="den">34</span></span> → BC = 34 · sin(25°) ≈ 14,37 cm.</li>
    <li>B = 90° − 25° = 65°.</li>
    <li>Con sin(65°) = <span class="frac"><span class="num">AC</span><span class="den">34</span></span> → AC = 34 · sin(65°) ≈ 30,81 cm.</li>
  </ol>
  <p>El seno sirve cuando conoces <strong>el lado enfrentado al ángulo y la hipotenusa</strong>.</p>
</div>

<div id="tangente" class="lesson-box">
  <h2>7. Tangente: opuesto sobre adyacente</h2>
  <div class="trig-formula">
    <span class="fn">tan</span>(<span class="var">α</span>) = <span class="frac"><span class="num">cateto opuesto</span><span class="den">cateto adyacente</span></span>
  </div>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="210" viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tangente opuesto adyacente">
    <polygon points="50,160 230,160 230,40" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="230" y1="160" x2="230" y2="40" stroke="#f472b6" stroke-width="4"/>
    <line x1="50" y1="160" x2="230" y2="160" stroke="#34d399" stroke-width="4"/>
    <path d="M 80 160 A 30 30 0 0 0 80 138" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="88" y="155" fill="#e2e8f0" font-size="14">α</text>
    <rect x="214" y="144" width="16" height="16" fill="none" stroke="#e2e8f0" stroke-width="2"/>
    <text x="140" y="188" text-anchor="middle" fill="#34d399" font-size="12">adyacente</text>
    <text x="238" y="110" fill="#f472b6" font-size="12">opuesto</text>
    <text x="132.8" y="89.2" text-anchor="middle" fill="#94a3b8" font-size="11" transform="rotate(-33.7 132.8 89.2)">no usa la hipotenusa</text>
  </svg>
  </div>
  <h3>Ejemplo</h3>
  <p>Recto en A, B = 50°, AB = 12 cm (adyacente a B). Sin hallar la hipotenusa:</p>
  <ol>
    <li>El opuesto a B es AC → tan(50°) = <span class="frac"><span class="num">AC</span><span class="den">12</span></span>.</li>
    <li>AC = 12 · tan(50°) ≈ 14,30 cm.</li>
    <li>Verificación con coseno: BC = <span class="frac"><span class="num">12</span><span class="den">cos(50°)</span></span> ≈ 18,67; <span class="raiz"><span class="rad">18,67² − 12²</span></span> ≈ 14,30 ✓</li>
  </ol>
  <p>La tangente es la única que <strong>no usa la hipotenusa</strong>: ideal cuando tienes los dos catetos.</p>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg width="300" height="190" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Catetos 12 y 30">
    <polygon points="60,150 240,150 240,50" fill="rgba(139,92,246,0.12)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="224" y="134" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="150" y="172" text-anchor="middle" fill="#e2e8f0" font-size="12">30 cm</text>
    <text x="248" y="104" fill="#e2e8f0" font-size="12">12 cm</text>
    <text x="143.7" y="88.6" text-anchor="middle" fill="#e2e8f0" font-size="12" transform="rotate(-29.1 143.7 88.6)">32,31 cm</text>
    <text x="70" y="140" fill="#f472b6" font-size="12">21,8°</text>
    <text x="248" y="44" fill="#38bdf8" font-size="12">68,2°</text>
  </svg>
  </div>
  <p>Catetos 12 y 30: tan = <span class="frac"><span class="num">12</span><span class="den">30</span></span> → ángulo frente al 12 vale arctan(0,4) ≈ 21,8°; el otro 68,2°; hipotenusa <span class="raiz"><span class="rad">12²+30²</span></span> ≈ 32,31 cm.</p>
</div>

<div id="memoria" class="lesson-box">
  <h2>8. Cómo recordarlo: SOH - CAH - TOA</h2>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>S</strong>eno = <span class="frac"><span class="num"><strong>O</strong>puesto</span><span class="den"><strong>H</strong>ipotenusa</span></span></li>
    <li><strong>C</strong>oseno = <span class="frac"><span class="num"><strong>A</strong>dyacente</span><span class="den"><strong>H</strong>ipotenusa</span></span></li>
    <li><strong>T</strong>angente = <span class="frac"><span class="num"><strong>O</strong>puesto</span><span class="den"><strong>A</strong>dyacente</span></span></li>
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
  <p class="font-mono text-violet-400">Ej.: tan(α) = <span class="frac"><span class="num">12</span><span class="den">30</span></span> = 0,4 → α = tan⁻¹(0,4) ≈ 21,8°</p>
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
    <polygon points="30,120 120,120 120,40" fill="rgba(139,92,246,0.10)" stroke="#a78bfa" stroke-width="2" stroke-linejoin="round"/>
    <rect x="106" y="106" width="12" height="12" fill="none" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="75" y="138" text-anchor="middle" fill="#e2e8f0" font-size="12">8</text>
    <text x="127" y="84" fill="#e2e8f0" font-size="12">6</text>
    <text x="67.7" y="71.8" text-anchor="middle" fill="#94a3b8" font-size="12" transform="rotate(-41.6 67.7 71.8)" font-style="italic">a</text>
    <text x="80" y="22" text-anchor="middle" fill="#94a3b8" font-size="11">CASO I</text>
  </svg>
  <svg width="160" height="150" viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caso II hipotenusa y ángulo">
    <polygon points="30,120 120,120 120,40" fill="rgba(56,189,248,0.10)" stroke="#38bdf8" stroke-width="2" stroke-linejoin="round"/>
    <rect x="106" y="106" width="12" height="12" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
    <path d="M 52 120 A 22 22 0 0 0 46.4 105.4" fill="none" stroke="#f472b6" stroke-width="2"/>
    <text x="58" y="112" fill="#f472b6" font-size="12">35°</text>
    <text x="67.7" y="71.8" text-anchor="middle" fill="#e2e8f0" font-size="12" transform="rotate(-41.6 67.7 71.8)">12</text>
    <text x="80" y="22" text-anchor="middle" fill="#94a3b8" font-size="11">CASO II</text>
  </svg>
  <svg width="160" height="150" viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caso III cateto e hipotenusa">
    <polygon points="30,120 120,120 120,40" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="2" stroke-linejoin="round"/>
    <rect x="106" y="106" width="12" height="12" fill="none" stroke="#34d399" stroke-width="1.5"/>
    <text x="75" y="138" text-anchor="middle" fill="#94a3b8" font-size="12" font-style="italic">b</text>
    <text x="127" y="84" fill="#e2e8f0" font-size="12">8</text>
    <text x="67.7" y="71.8" text-anchor="middle" fill="#e2e8f0" font-size="12" transform="rotate(-41.6 67.7 71.8)">12</text>
    <text x="80" y="22" text-anchor="middle" fill="#94a3b8" font-size="11">CASO III</text>
  </svg>
  </div>
  <p>En el <a href="/pdfs/5-1-trigonometria.pdf" target="_blank" rel="noopener">Repartido</a> vas a resolver estos tres casos con números.</p>
  <div style="display:flex;justify-content:center;margin:1rem 0">
  <svg viewBox="60 8 335 264" width="100%" style="max-width:470px;height:auto" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pirámide de base cuadrada con la altura VO, el apotema VM, la semibase OM, la semidiagonal OA y la arista VA">
    <!-- base -->
    <polygon points="85,235 295,235 355,175 145,175" fill="rgba(139,92,246,0.14)"/>
    <!-- aristas ocultas -->
    <line x1="220" y1="40" x2="145" y2="175" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5 4"/>
    <line x1="145" y1="175" x2="355" y2="175" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5 4"/>
    <!-- caras visibles -->
    <polygon points="220,40 85,235 295,235" fill="rgba(139,92,246,0.10)"/>
    <polygon points="220,40 295,235 355,175" fill="rgba(139,92,246,0.18)"/>
    <!-- triángulos rectángulos -->
    <polygon points="220,40 220,205 190,235" fill="rgba(52,211,153,0.16)"/>
    <polygon points="220,40 220,205 355,175" fill="rgba(56,189,248,0.16)"/>
    <!-- aristas -->
    <line x1="220" y1="40" x2="85" y2="235" stroke="#cbd5e1" stroke-width="1.8"/>
    <line x1="220" y1="40" x2="295" y2="235" stroke="#cbd5e1" stroke-width="1.8"/>
    <line x1="220" y1="40" x2="355" y2="175" stroke="#cbd5e1" stroke-width="1.8"/>
    <line x1="85" y1="235" x2="295" y2="235" stroke="#cbd5e1" stroke-width="1.8"/>
    <line x1="295" y1="235" x2="355" y2="175" stroke="#cbd5e1" stroke-width="1.8"/>
    <line x1="85" y1="235" x2="145" y2="175" stroke="#cbd5e1" stroke-width="1.8"/>
    <!-- altura -->
    <line x1="220" y1="40" x2="220" y2="205" stroke="#f472b6" stroke-width="2.2" stroke-dasharray="6 4"/>
    <!-- semidiagonal y arista -->
    <line x1="220" y1="205" x2="355" y2="175" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3"/>
    <line x1="220" y1="40" x2="355" y2="175" stroke="#38bdf8" stroke-width="2.5"/>
    <!-- semibase y apotema -->
    <line x1="220" y1="205" x2="190" y2="235" stroke="#34d399" stroke-width="2" stroke-dasharray="3 3"/>
    <line x1="220" y1="40" x2="190" y2="235" stroke="#34d399" stroke-width="2.5"/>
    <!-- ángulos rectos en O -->
    <path d="M220,195 L212.9,202.1 L212.9,212.1" stroke="#34d399" stroke-width="1.4"/>
    <path d="M220,195 L229.8,192.8 L229.8,202.8" stroke="#38bdf8" stroke-width="1.4"/>
    <!-- puntos -->
    <circle cx="220" cy="40" r="3.2" fill="#e2e8f0"/>
    <circle cx="220" cy="205" r="2.8" fill="#f472b6"/>
    <circle cx="190" cy="235" r="2.8" fill="#34d399"/>
    <circle cx="355" cy="175" r="2.8" fill="#38bdf8"/>
    <!-- etiquetas de puntos -->
    <text x="220" y="26" text-anchor="middle" fill="#e2e8f0" font-size="15" font-style="italic">V</text>
    <text x="207" y="201" text-anchor="end" fill="#e2e8f0" font-size="15" font-style="italic">O</text>
    <text x="183" y="256" text-anchor="middle" fill="#e2e8f0" font-size="15" font-style="italic">M</text>
    <text x="370" y="181" fill="#7dd3fc" font-size="15" font-style="italic">A</text>
  </svg>
  </div>
  <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:.35rem .9rem;font-size:.78rem;color:#cbd5e1;margin:.6rem 0 1rem">
    <span style="display:inline-flex;align-items:center;gap:.4rem"><span style="display:inline-block;width:20px;border-top:2px dashed #f472b6"></span>altura (VO)</span>
    <span style="display:inline-flex;align-items:center;gap:.4rem"><span style="display:inline-block;width:20px;border-top:2px solid #34d399"></span>apotema (VM)</span>
    <span style="display:inline-flex;align-items:center;gap:.4rem"><span style="display:inline-block;width:20px;border-top:2px dotted #34d399"></span>semibase (OM)</span>
    <span style="display:inline-flex;align-items:center;gap:.4rem"><span style="display:inline-block;width:20px;border-top:2px dashed #38bdf8"></span>semidiagonal (OA)</span>
    <span style="display:inline-flex;align-items:center;gap:.4rem"><span style="display:inline-block;width:20px;border-top:2px solid #38bdf8"></span>arista (VA)</span>
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
  <p>Descargá el <a href="/pdfs/5-1-trigonometria.pdf" target="_blank" rel="noopener"><strong>Repartido - Trigonometría</strong></a>: ahí están la tabla pitagórica, los ejercicios de seno, coseno y tangente, los CASOS I-II-III, la pirámide y el cálculo de x para practicar.</p>
</div>

<style>
  .trig-formula {
    margin: .85rem 0 1.15rem;
    padding: .75rem 1rem;
    text-align: center;
    background: rgba(2, 6, 23, 0.55);
    border: 1px solid #334155;
    border-radius: 10px;
    font-family: "Cambria Math", "STIX Two Math", Cambria, Georgia, "Times New Roman", serif;
    font-size: 1.5rem;
    line-height: 1.2;
    color: #e2e8f0;
  }
  .trig-formula .fn { font-style: normal; }
  .trig-formula .var { font-style: italic; }
</style>
