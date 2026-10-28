---
layout: ../../../layouts/Leccion.astro
title: "Ecuación ax² + bx + c = 0"
unitId: 4
unitTitle: "Ecuaciones"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#forma">• Forma de la ecuación</a></li>
    <li><a href="#formula">• Fórmula de Bhaskara</a></li>
    <li><a href="#discriminante">• El discriminante y las soluciones</a></li>
    <li><a href="#pasos">• Pasos para resolver</a></li>
    <li><a href="#problemas">• Ejemplos resueltos con Bhaskara</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="forma" class="lesson-box">
  <h2>Forma de la ecuación</h2>
  <p>
    La ecuación cuadrática completa tiene la forma
    <span class="font-mono text-violet-400">ax² + bx + c = 0</span>,
    con <strong>a ≠ 0</strong>. Los coeficientes son:
  </p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>a:</strong> coeficiente de x² (nunca vale 0).</li>
    <li><strong>b:</strong> coeficiente de x (si no aparece, vale 0).</li>
    <li><strong>c:</strong> término independiente (si no aparece, vale 0).</li>
  </ul>
  <p>Antes de aplicar la fórmula, la ecuación debe estar <strong>igualada a cero</strong> y ordenada de mayor a menor grado.</p>
  <p class="font-mono text-violet-400">Ej.: 3x² - 10x + 8 = 0 → a = 3, b = -10, c = 8</p>
  <p><strong>Importante:</strong> el signo forma parte del coeficiente. Si la ecuación es x² − 5x + 6 = 0, entonces b = −5 (no 5).</p>
</div>

<div id="formula" class="lesson-box">
  <h2>Fórmula de Bhaskara</h2>
  <p>Las soluciones de ax² + bx + c = 0 se obtienen siempre con la misma fórmula:</p>
  <blockquote>
    <p>x = ( −b ± √(b² − 4ac) ) / 2a</p>
  </blockquote>
  <p>El símbolo <strong>±</strong> genera las dos soluciones:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Con <strong>+</strong>: x₁ = ( −b + √(b² − 4ac) ) / 2a</li>
    <li>Con <strong>−</strong>: x₂ = ( −b − √(b² − 4ac) ) / 2a</li>
  </ul>
  <p>El radicando se llama <strong>discriminante</strong>:</p>
  <p class="font-mono text-violet-400">Δ = b² − 4ac</p>
  <p>Esta fórmula sirve para <strong>todas</strong> las ecuaciones cuadráticas completas, sin importar si a = 1 o a ≠ 1, y sin necesidad de factorizar.</p>
</div>

<div id="discriminante" class="lesson-box">
  <h2>El discriminante y las soluciones</h2>
  <div style="overflow-x:auto">
  <table>
    <thead><tr><th>Discriminante</th><th>Soluciones</th><th>Ejemplo</th></tr></thead>
    <tbody>
      <tr><td>Δ &gt; 0</td><td>Dos soluciones reales distintas</td><td>x² − 5x + 6 = 0 → Δ = 1</td></tr>
      <tr><td>Δ = 0</td><td>Una solución real doble</td><td>x² − 4x + 4 = 0 → Δ = 0</td></tr>
      <tr><td>Δ &lt; 0</td><td>No tiene soluciones reales</td><td>x² + x + 1 = 0 → Δ = −3</td></tr>
    </tbody>
  </table>
  </div>
  <p>Calcular Δ primero te dice <strong>qué esperar</strong> antes de terminar la cuenta.</p>
</div>

<div id="pasos" class="lesson-box">
  <h2>Pasos para resolver con Bhaskara</h2>
  <ol>
    <li>Ordenar la ecuación como ax² + bx + c = 0.</li>
    <li>Identificar <strong>a</strong>, <strong>b</strong> y <strong>c</strong> con sus signos.</li>
    <li>Calcular el discriminante <strong>Δ = b² − 4ac</strong>.</li>
    <li>Reemplazar en <strong>x = (−b ± √Δ) / 2a</strong>.</li>
    <li>Separar las dos soluciones (x₁ con + y x₂ con −).</li>
    <li>Simplificar y, si hace falta, verificar reemplazando en la ecuación original.</li>
  </ol>
  <div class="lesson-box" style="margin-bottom:0">
    <h2>Ejemplo guía</h2>
    <p class="font-mono text-violet-400">2x² + 5x + 3 = 0</p>
    <ol>
      <li>a = 2, b = 5, c = 3</li>
      <li>Δ = 5² − 4 · 2 · 3 = 25 − 24 = 1</li>
      <li>x = (−5 ± √1) / (2 · 2) = (−5 ± 1) / 4</li>
      <li>x₁ = (−5 + 1)/4 = −4/4 = −1</li>
      <li>x₂ = (−5 − 1)/4 = −6/4 = −3/2</li>
    </ol>
    <p class="font-mono text-violet-400">Soluciones: x = −1 y x = −3/2</p>
  </div>
</div>

<div id="problemas" class="lesson-box">
  <h2>Ejemplos resueltos con Bhaskara</h2>

  <h3>1) x² + 5x + 6 = 0</h3>
  <ol>
    <li>a = 1, b = 5, c = 6</li>
    <li>Δ = 5² − 4 · 1 · 6 = 25 − 24 = 1</li>
    <li>x = (−5 ± √1) / 2 = (−5 ± 1) / 2</li>
    <li>x₁ = (−5 + 1)/2 = −4/2 = −2</li>
    <li>x₂ = (−5 − 1)/2 = −6/2 = −3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = −2 y x = −3</p>

  <h3>2) x² − x − 12 = 0</h3>
  <ol>
    <li>a = 1, b = −1, c = −12</li>
    <li>Δ = (−1)² − 4 · 1 · (−12) = 1 + 48 = 49</li>
    <li>x = (1 ± √49) / 2 = (1 ± 7) / 2</li>
    <li>x₁ = (1 + 7)/2 = 8/2 = 4</li>
    <li>x₂ = (1 − 7)/2 = −6/2 = −3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 4 y x = −3</p>

  <h3>3) x² − 8x + 15 = 0</h3>
  <ol>
    <li>a = 1, b = −8, c = 15</li>
    <li>Δ = (−8)² − 4 · 1 · 15 = 64 − 60 = 4</li>
    <li>x = (8 ± √4) / 2 = (8 ± 2) / 2</li>
    <li>x₁ = (8 + 2)/2 = 10/2 = 5</li>
    <li>x₂ = (8 − 2)/2 = 6/2 = 3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 5 y x = 3</p>

  <h3>4) x² + 2x − 15 = 0</h3>
  <ol>
    <li>a = 1, b = 2, c = −15</li>
    <li>Δ = 2² − 4 · 1 · (−15) = 4 + 60 = 64</li>
    <li>x = (−2 ± √64) / 2 = (−2 ± 8) / 2</li>
    <li>x₁ = (−2 + 8)/2 = 6/2 = 3</li>
    <li>x₂ = (−2 − 8)/2 = −10/2 = −5</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 3 y x = −5</p>

  <h3>5) x² − 9x + 20 = 0</h3>
  <ol>
    <li>a = 1, b = −9, c = 20</li>
    <li>Δ = (−9)² − 4 · 1 · 20 = 81 − 80 = 1</li>
    <li>x = (9 ± √1) / 2 = (9 ± 1) / 2</li>
    <li>x₁ = (9 + 1)/2 = 10/2 = 5</li>
    <li>x₂ = (9 − 1)/2 = 8/2 = 4</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 5 y x = 4</p>

  <h3>6) 2x² + 5x + 3 = 0</h3>
  <ol>
    <li>a = 2, b = 5, c = 3</li>
    <li>Δ = 5² − 4 · 2 · 3 = 25 − 24 = 1</li>
    <li>x = (−5 ± √1) / 4 = (−5 ± 1) / 4</li>
    <li>x₁ = (−5 + 1)/4 = −4/4 = −1</li>
    <li>x₂ = (−5 − 1)/4 = −6/4 = −3/2</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = −1 y x = −3/2</p>

  <h3>7) 3x² − 10x + 8 = 0</h3>
  <ol>
    <li>a = 3, b = −10, c = 8</li>
    <li>Δ = (−10)² − 4 · 3 · 8 = 100 − 96 = 4</li>
    <li>x = (10 ± √4) / 6 = (10 ± 2) / 6</li>
    <li>x₁ = (10 + 2)/6 = 12/6 = 2</li>
    <li>x₂ = (10 − 2)/6 = 8/6 = 4/3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 2 y x = 4/3</p>

  <h3>8) 2x² − 4x + 2 = 0 (discriminante cero)</h3>
  <ol>
    <li>a = 2, b = −4, c = 2</li>
    <li>Δ = (−4)² − 4 · 2 · 2 = 16 − 16 = 0</li>
    <li>x = (4 ± √0) / 4 = 4/4</li>
    <li>x = 1 (solución doble)</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 1</p>

  <h3>9) x² + x + 1 = 0 (discriminante negativo)</h3>
  <ol>
    <li>a = 1, b = 1, c = 1</li>
    <li>Δ = 1² − 4 · 1 · 1 = 1 − 4 = −3</li>
    <li>Como Δ &lt; 0, la raíz cuadrada no es real</li>
  </ol>
  <p class="font-mono text-violet-400">No tiene soluciones reales</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>
  <p>Resolver cada ecuación aplicando la fórmula de Bhaskara. Indicar primero el discriminante.</p>

  <h3>1) Coeficiente a = 1</h3>
  <ul class="exercise-list">
    <li>a) x² + 6x + 8 = 0</li>
    <li>b) x² − 5x + 6 = 0</li>
    <li>c) x² + 3x − 10 = 0</li>
    <li>d) x² − 7x + 10 = 0</li>
    <li>e) x² + x − 20 = 0</li>
    <li>f) x² − 2x − 8 = 0</li>
    <li>g) x² + 10x + 21 = 0</li>
    <li>h) x² − 11x + 24 = 0</li>
  </ul>

  <h3>2) Coeficiente a ≠ 1</h3>
  <ul class="exercise-list">
    <li>a) 2x² + 3x + 1 = 0</li>
    <li>b) 3x² + 7x + 2 = 0</li>
    <li>c) 2x² − 5x + 3 = 0</li>
    <li>d) 5x² + 11x + 2 = 0</li>
    <li>e) 4x² − 12x + 9 = 0</li>
    <li>f) 6x² + x − 1 = 0</li>
  </ul>

  <h3>3) Analizar el discriminante</h3>
  <p>Sin resolver, indicar cuántas soluciones reales tiene cada ecuación:</p>
  <ul class="exercise-list">
    <li>a) x² − 4x + 4 = 0</li>
    <li>b) x² + 2x + 5 = 0</li>
    <li>c) x² − 6x + 5 = 0</li>
    <li>d) 3x² + 2x + 1 = 0</li>
  </ul>
</div>
