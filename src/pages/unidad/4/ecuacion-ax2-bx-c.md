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
    <li><a href="#metodo">• Método de resolución</a></li>
    <li><a href="#problemas">• Problemas resueltos</a></li>
    <li><a href="#ejercicios">• Ejercicios</a></li>
  </ul>
</div>

<div id="forma" class="lesson-box">
  <h2>Forma de la ecuación</h2>
  <p>
    La ecuación cuadrática completa tiene la forma <span class="font-mono text-violet-400">ax² + bx + c = 0</span>,
    donde los tres coeficientes son distintos de cero.
  </p>
  <p>Para resolverla por factorización, buscamos dos números que:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Multiplicados den <strong>a · c</strong> (producto del primer y último coeficiente)</li>
    <li>Sumados den <strong>b</strong> (coeficiente del término lineal)</li>
  </ul>
</div>

<div id="metodo" class="lesson-box">
  <h2>Método de resolución por factorización</h2>

  <h3>Caso 1: Cuando a = 1 (trinomio x² + bx + c)</h3>
  <p>Buscamos dos números m y n tales que:</p>
  <p class="font-mono text-violet-400">m · n = c &nbsp;&nbsp;y&nbsp;&nbsp; m + n = b</p>
  <p>Entonces: x² + bx + c = (x + m)(x + n)</p>
  <p>Ejemplo:</p>
  <p class="font-mono text-violet-400">x² + 7x + 12 = 0</p>
  <ol>
    <li>Buscamos dos números que multiplicados den 12 y sumados den 7</li>
    <li>Esos números son 3 y 4 (3 × 4 = 12, 3 + 4 = 7)</li>
    <li>Factorizamos: (x + 3)(x + 4) = 0</li>
    <li>x + 3 = 0 → x = -3</li>
    <li>x + 4 = 0 → x = -4</li>
  </ol>

  <h3>Caso 2: Cuando a ≠ 1</h3>
  <p>Buscamos dos números m y n tales que:</p>
  <p class="font-mono text-violet-400">m · n = a · c &nbsp;&nbsp;y&nbsp;&nbsp; m + n = b</p>
  <p>Luego reescribimos bx como mx + nx y factorizamos por agrupación.</p>
  <p>Ejemplo:</p>
  <p class="font-mono text-violet-400">2x² + 7x + 3 = 0</p>
  <ol>
    <li>a · c = 2 × 3 = 6. Buscamos m + n = 7 y m · n = 6</li>
    <li>Esos números son 1 y 6 (1 × 6 = 6, 1 + 6 = 7)</li>
    <li>Reescribimos: 2x² + x + 6x + 3 = 0</li>
    <li>Agrupamos: x(2x + 1) + 3(2x + 1) = 0</li>
    <li>Factor común: (x + 3)(2x + 1) = 0</li>
    <li>x + 3 = 0 → x = -3</li>
    <li>2x + 1 = 0 → x = -1/2</li>
  </ol>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) x² + 5x + 6 = 0</h3>
  <ol>
    <li>Buscamos: m · n = 6, m + n = 5</li>
    <li>m = 2, n = 3 (2 × 3 = 6, 2 + 3 = 5)</li>
    <li>Factorizamos: (x + 2)(x + 3) = 0</li>
    <li>x = -2, x = -3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = -2 y x = -3</p>

  <h3>2) x² - x - 12 = 0</h3>
  <ol>
    <li>Buscamos: m · n = -12, m + n = -1</li>
    <li>m = -4, n = 3 (-4 × 3 = -12, -4 + 3 = -1)</li>
    <li>Factorizamos: (x - 4)(x + 3) = 0</li>
    <li>x = 4, x = -3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 4 y x = -3</p>

  <h3>3) x² - 8x + 15 = 0</h3>
  <ol>
    <li>Buscamos: m · n = 15, m + n = -8</li>
    <li>m = -3, n = -5 (-3 × -5 = 15, -3 + -5 = -8)</li>
    <li>Factorizamos: (x - 3)(x - 5) = 0</li>
    <li>x = 3, x = 5</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 3 y x = 5</p>

  <h3>4) x² + 2x - 15 = 0</h3>
  <ol>
    <li>Buscamos: m · n = -15, m + n = 2</li>
    <li>m = 5, n = -3 (5 × -3 = -15, 5 + -3 = 2)</li>
    <li>Factorizamos: (x + 5)(x - 3) = 0</li>
    <li>x = -5, x = 3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = -5 y x = 3</p>

  <h3>5) x² - 9x + 20 = 0</h3>
  <ol>
    <li>Buscamos: m · n = 20, m + n = -9</li>
    <li>m = -4, n = -5 (-4 × -5 = 20, -4 + -5 = -9)</li>
    <li>Factorizamos: (x - 4)(x - 5) = 0</li>
    <li>x = 4, x = 5</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 4 y x = 5</p>

  <h3>6) 2x² + 5x + 3 = 0</h3>
  <ol>
    <li>a · c = 2 × 3 = 6. Buscamos m + n = 5, m · n = 6</li>
    <li>m = 2, n = 3</li>
    <li>Reescribimos: 2x² + 2x + 3x + 3 = 0</li>
    <li>Agrupamos: 2x(x + 1) + 3(x + 1) = 0</li>
    <li>Factor común: (2x + 3)(x + 1) = 0</li>
    <li>x = -3/2, x = -1</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = -3/2 y x = -1</p>

  <h3>7) 3x² - 10x + 8 = 0</h3>
  <ol>
    <li>a · c = 3 × 8 = 24. Buscamos m + n = -10, m · n = 24</li>
    <li>m = -4, n = -6</li>
    <li>Reescribimos: 3x² - 4x - 6x + 8 = 0</li>
    <li>Agrupamos: x(3x - 4) - 2(3x - 4) = 0</li>
    <li>Factor común: (x - 2)(3x - 4) = 0</li>
    <li>x = 2, x = 4/3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 2 y x = 4/3</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>Caso a = 1:</h3>
  <ul class="exercise-list">
    <li>a) x² + 6x + 8 = 0</li>
    <li>b) x² - 5x + 6 = 0</li>
    <li>c) x² + 3x - 10 = 0</li>
    <li>d) x² - 7x + 10 = 0</li>
    <li>e) x² + x - 20 = 0</li>
    <li>f) x² - 2x - 8 = 0</li>
    <li>g) x² + 10x + 21 = 0</li>
    <li>h) x² - 11x + 24 = 0</li>
  </ul>

  <h3>Caso a ≠ 1:</h3>
  <ul class="exercise-list">
    <li>a) 2x² + 3x + 1 = 0</li>
    <li>b) 3x² + 7x + 2 = 0</li>
    <li>c) 2x² - 5x + 3 = 0</li>
    <li>d) 5x² + 11x + 2 = 0</li>
  </ul>
</div>
