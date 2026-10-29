---
layout: ../../../layouts/Leccion.astro
title: "Ecuación ax² + bx + c = 0"
unitId: 4
unitTitle: "Ecuaciones de segundo grado"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#forma">• Forma de la ecuación</a></li>
    <li><a href="#formula">• Fórmula de Bhaskara</a></li>
    <li><a href="#pasos">• Pasos para resolver</a></li>
    <li><a href="#problemas">• Ejemplos resueltos</a></li>
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
  <p>Las soluciones de ax² + bx + c = 0 se obtienen siempre con esta fórmula:</p>

  <div class="formula-bhaskara" role="math" aria-label="x igual a menos b, más menos la raíz cuadrada de b al cuadrado menos cuatro a c, todo dividido entre dos a">
    <span class="fb-x">x =</span>
    <span class="fb-frac">
      <span class="fb-num">
        <span>−b ±</span>
        <span class="raiz"><span class="rad">b² − 4ac</span></span>
      </span>
      <span class="fb-den">2a</span>
    </span>
  </div>

  <p style="text-align:center;color:#94a3b8;font-size:.95rem;margin-top:-.5rem">
    La línea horizontal separa el numerador del denominador y el radical cubre todo <strong>b² − 4ac</strong>.
  </p>

  <p>El símbolo <strong>±</strong> genera las dos soluciones:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Con <strong>+</strong>: x₁ = ( −b + <span class="raiz"><span class="rad">b² − 4ac</span></span> ) / 2a</li>
    <li>Con <strong>−</strong>: x₂ = ( −b − <span class="raiz"><span class="rad">b² − 4ac</span></span> ) / 2a</li>
  </ul>
  <p>Esta fórmula sirve para <strong>todas</strong> las ecuaciones cuadráticas completas, sin importar si a = 1 o a ≠ 1, y sin necesidad de factorizar.</p>
</div>

<div id="pasos" class="lesson-box">
  <h2>Pasos para resolver con Bhaskara</h2>
  <ol>
    <li>Ordenar la ecuación como ax² + bx + c = 0.</li>
    <li>Identificar <strong>a</strong>, <strong>b</strong> y <strong>c</strong> con sus signos.</li>
    <li>Reemplazar esos valores en la fórmula.</li>
    <li>Separar las dos soluciones (x₁ con + y x₂ con −).</li>
    <li>Simplificar y verificar reemplazando en la ecuación original.</li>
  </ol>
  <div class="lesson-box" style="margin-bottom:0">
    <h2>Ejemplo guía</h2>
    <p class="font-mono text-violet-400">2x² + 5x + 3 = 0</p>
    <ol>
      <li>a = 2, b = 5, c = 3</li>
      <li>x = (−5 ± <span class="raiz"><span class="rad">5² − 4 · 2 · 3</span></span>) / (2 · 2)</li>
      <li>x = (−5 ± <span class="raiz"><span class="rad">25 − 24</span></span>) / 4 = (−5 ± <span class="raiz"><span class="rad">1</span></span>) / 4</li>
      <li>x₁ = (−5 + 1)/4 = −4/4 = <strong>−1</strong></li>
      <li>x₂ = (−5 − 1)/4 = −6/4 = <strong>−3/2</strong></li>
    </ol>
    <p class="font-mono text-violet-400">Soluciones: x = −1 y x = −3/2</p>
  </div>
</div>

<div id="problemas" class="lesson-box">
  <h2>Ejemplos resueltos</h2>

  <h3>1) x² + 5x + 6 = 0</h3>
  <ol>
    <li>a = 1, b = 5, c = 6</li>
    <li>x = (−5 ± <span class="raiz"><span class="rad">5² − 4 · 1 · 6</span></span>) / (2 · 1)</li>
    <li>x = (−5 ± <span class="raiz"><span class="rad">25 − 24</span></span>) / 2 = (−5 ± <span class="raiz"><span class="rad">1</span></span>) / 2</li>
    <li>x₁ = (−5 + 1)/2 = −4/2 = <strong>−2</strong></li>
    <li>x₂ = (−5 − 1)/2 = −6/2 = <strong>−3</strong></li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = −2 y x = −3</p>

  <h3>2) x² − x − 12 = 0</h3>
  <ol>
    <li>a = 1, b = −1, c = −12</li>
    <li>x = (1 ± <span class="raiz"><span class="rad">(−1)² − 4 · 1 · (−12)</span></span>) / 2</li>
    <li>x = (1 ± <span class="raiz"><span class="rad">1 + 48</span></span>) / 2 = (1 ± <span class="raiz"><span class="rad">49</span></span>) / 2</li>
    <li>x₁ = (1 + 7)/2 = 8/2 = <strong>4</strong></li>
    <li>x₂ = (1 − 7)/2 = −6/2 = <strong>−3</strong></li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 4 y x = −3</p>

  <h3>3) x² − 8x + 15 = 0</h3>
  <ol>
    <li>a = 1, b = −8, c = 15</li>
    <li>x = (8 ± <span class="raiz"><span class="rad">(−8)² − 4 · 1 · 15</span></span>) / 2</li>
    <li>x = (8 ± <span class="raiz"><span class="rad">64 − 60</span></span>) / 2 = (8 ± <span class="raiz"><span class="rad">4</span></span>) / 2</li>
    <li>x₁ = (8 + 2)/2 = 10/2 = <strong>5</strong></li>
    <li>x₂ = (8 − 2)/2 = 6/2 = <strong>3</strong></li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 5 y x = 3</p>

  <h3>4) x² + 2x − 15 = 0</h3>
  <ol>
    <li>a = 1, b = 2, c = −15</li>
    <li>x = (−2 ± <span class="raiz"><span class="rad">2² − 4 · 1 · (−15)</span></span>) / 2</li>
    <li>x = (−2 ± <span class="raiz"><span class="rad">4 + 60</span></span>) / 2 = (−2 ± <span class="raiz"><span class="rad">64</span></span>) / 2</li>
    <li>x₁ = (−2 + 8)/2 = 6/2 = <strong>3</strong></li>
    <li>x₂ = (−2 − 8)/2 = −10/2 = <strong>−5</strong></li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 3 y x = −5</p>

  <h3>5) x² − 9x + 20 = 0</h3>
  <ol>
    <li>a = 1, b = −9, c = 20</li>
    <li>x = (9 ± <span class="raiz"><span class="rad">(−9)² − 4 · 1 · 20</span></span>) / 2</li>
    <li>x = (9 ± <span class="raiz"><span class="rad">81 − 80</span></span>) / 2 = (9 ± <span class="raiz"><span class="rad">1</span></span>) / 2</li>
    <li>x₁ = (9 + 1)/2 = 10/2 = <strong>5</strong></li>
    <li>x₂ = (9 − 1)/2 = 8/2 = <strong>4</strong></li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 5 y x = 4</p>

  <h3>6) 2x² + 5x + 3 = 0</h3>
  <ol>
    <li>a = 2, b = 5, c = 3</li>
    <li>x = (−5 ± <span class="raiz"><span class="rad">5² − 4 · 2 · 3</span></span>) / (2 · 2)</li>
    <li>x = (−5 ± <span class="raiz"><span class="rad">25 − 24</span></span>) / 4 = (−5 ± <span class="raiz"><span class="rad">1</span></span>) / 4</li>
    <li>x₁ = (−5 + 1)/4 = −4/4 = <strong>−1</strong></li>
    <li>x₂ = (−5 − 1)/4 = −6/4 = <strong>−3/2</strong></li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = −1 y x = −3/2</p>

  <h3>7) 3x² − 10x + 8 = 0</h3>
  <ol>
    <li>a = 3, b = −10, c = 8</li>
    <li>x = (10 ± <span class="raiz"><span class="rad">(−10)² − 4 · 3 · 8</span></span>) / (2 · 3)</li>
    <li>x = (10 ± <span class="raiz"><span class="rad">100 − 96</span></span>) / 6 = (10 ± <span class="raiz"><span class="rad">4</span></span>) / 6</li>
    <li>x₁ = (10 + 2)/6 = 12/6 = <strong>2</strong></li>
    <li>x₂ = (10 − 2)/6 = 8/6 = <strong>4/3</strong></li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 2 y x = 4/3</p>

  <h3>8) 2x² − 4x + 2 = 0</h3>
  <ol>
    <li>a = 2, b = −4, c = 2</li>
    <li>x = (4 ± <span class="raiz"><span class="rad">(−4)² − 4 · 2 · 2</span></span>) / 4</li>
    <li>x = (4 ± <span class="raiz"><span class="rad">16 − 16</span></span>) / 4 = (4 ± <span class="raiz"><span class="rad">0</span></span>) / 4</li>
    <li>x = 4/4 = <strong>1</strong></li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 1</p>

  <h3>9) x² + x + 1 = 0</h3>
  <ol>
    <li>a = 1, b = 1, c = 1</li>
    <li>x = (−1 ± <span class="raiz"><span class="rad">1² − 4 · 1 · 1</span></span>) / 2</li>
    <li>x = (−1 ± <span class="raiz"><span class="rad">1 − 4</span></span>) / 2 = (−1 ± <span class="raiz"><span class="rad">−3</span></span>) / 2</li>
    <li>Dentro de la raíz queda un número negativo, que no tiene raíz cuadrada real.</li>
  </ol>
  <p class="font-mono text-violet-400">No tiene soluciones reales</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) Indicar los coeficientes (sin resolver)</h3>
  <p>
    Escribir <strong>a</strong>, <strong>b</strong> y <strong>c</strong> con sus signos.
    Si hace falta, primero ordenar la ecuación e igualarla a cero.
  </p>
  <ul class="exercise-list">
    <li>a) 3x² − 10x + 8 = 0</li>
    <li>b) −2x² + 5x − 3 = 0</li>
    <li>c) x² = 7x − 12</li>
    <li>d) 5x² + 11x + 2 = 0</li>
    <li>e) 6x² + x − 1 = 0</li>
    <li>f) 2(x² − 3x + 1) = 0</li>
    <li>g) (x + 2)(x − 5) = 0</li>
    <li>h) 4x² − 9 = 12x</li>
  </ul>

  <h3>2) Resolver aplicando Bhaskara</h3>
  <p>
    Resolver cada ecuación con la fórmula. Si al reemplazar queda un número
    negativo dentro de la raíz, escribir <strong>“sin solución real”</strong>.
  </p>
  <ul class="exercise-list">
    <li>a) x² + 6x + 8 = 0</li>
    <li>b) x² − 5x + 6 = 0</li>
    <li>c) x² + 3x − 10 = 0</li>
    <li>d) x² − 7x + 10 = 0</li>
    <li>e) 2x² + 3x + 1 = 0</li>
    <li>f) 3x² + 7x + 2 = 0</li>
    <li>g) 2x² − 5x + 3 = 0</li>
    <li>h) 3x² − 10x + 8 = 0</li>
    <li>i) x² − 4x + 4 = 0</li>
    <li>j) x² + 6x + 9 = 0</li>
    <li>k) 4x² − 12x + 9 = 0</li>
    <li>l) 9x² + 6x + 1 = 0</li>
    <li>m) x² + 2x + 5 = 0</li>
    <li>n) 3x² + 2x + 1 = 0</li>
    <li>o) 2x² − 3x + 4 = 0</li>
    <li>p) x² + x + 2 = 0</li>
  </ul>
</div>

<style is:global>
  .formula-bhaskara {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    margin: 1.5rem 0;
    color: #c4b5fd;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: clamp(1.4rem, 4vw, 1.9rem);
    line-height: 1.1;
  }

  .fb-frac {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .fb-num {
    display: inline-flex;
    align-items: flex-end;
    gap: 0.15rem;
    padding: 0 0.6rem 0.35rem;
    border-bottom: 2px solid currentColor;
  }

  .fb-den {
    padding-top: 0.35rem;
  }

</style>
