---
layout: ../../../layouts/Leccion.astro
title: "Factorización Detallada"
unitId: 3
unitTitle: "Álgebra"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#concepto">• Concepto de factorización</a></li>
    <li><a href="#factor-comun">• Factor común</a></li>
    <li><a href="#factor-grupo">• Factorización por agrupación</a></li>
    <li><a href="#cuadrado-perfecto">• Trinomio cuadrado perfecto</a></li>
    <li><a href="#diferencia-cuadrados">• Diferencia de cuadrados</a></li>
    <li><a href="#trinomio">• Trinomio tipo x² + bx + c</a></li>
    <li><a href="#problemas">• Problemas resueltos paso a paso</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="concepto" class="lesson-box">
  <h2>Concepto de factorización</h2>
  <p>
    La factorización consiste en expresar un polinomio como un producto de factores más simples. 
    Es el proceso inverso de la multiplicación.
  </p>
  <p>Ejemplo:</p>
  <p class="font-mono text-violet-400">x² + 5x = x(x + 5)</p>
  <p>Observación: extraemos lo que se repite en todos los términos (factor común).</p>
</div>

<div id="factor-comun" class="lesson-box">
  <h2>Factor común</h2>
  <p>Para factorizar un polinomio mediante factor común:</p>
  <ol>
    <li>Identificar el factor que se repite en todos los términos.</li>
    <li>Extraerlo multiplicando por el paréntesis restante.</li>
  </ol>
  <p>Ejemplos resueltos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>6x + 12 → factor común 6 → 6(x + 2)</li>
    <li>5ab + 10a → factor común 5a → 5a(b + 2)</li>
    <li>3x²y + 6xy² → factor común 3xy → 3xy(x + 2y)</li>
    <li>m²n + mn² → factor común mn → mn(m + n)</li>
  </ul>
</div>

<div id="factor-grupo" class="lesson-box">
  <h2>Factorización por agrupación</h2>
  <p>Se agrupan los términos en pares o grupos para extraer factores comunes de cada grupo y luego factorizar nuevamente:</p>
  <p>Ejemplo resuelto:</p>
  <p>x² + 3x + 2x + 6</p>
  <ol>
    <li>Agrupamos: (x² + 3x) + (2x + 6)</li>
    <li>Factorizamos cada grupo: x(x + 3) + 2(x + 3)</li>
    <li>Factor común final: (x + 2)(x + 3)</li>
  </ol>
  <p>Otro ejemplo:</p>
  <p>ab + ac + bd + bc</p>
  <ol>
    <li>Agrupamos: (ab + ac) + (bd + bc)</li>
    <li>Factorizamos: a(b + c) + b(d + c)</li>
    <li>Factor común final: (a + b)(b + c)</li>
  </ol>
</div>

<div id="cuadrado-perfecto" class="lesson-box">
  <h2>Trinomio cuadrado perfecto</h2>
  <p>Se reconoce porque sigue la forma:</p>
  <p class="font-mono text-violet-400">a² + 2ab + b² = (a + b)²</p>
  <p class="font-mono text-violet-400">a² - 2ab + b² = (a - b)²</p>
  <p>Ejemplos resueltos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>x² + 6x + 9 → (x + 3)²</li>
    <li>4a² - 12a + 9 → (2a - 3)²</li>
    <li>m² + 10m + 25 → (m + 5)²</li>
  </ul>
</div>

<div id="diferencia-cuadrados" class="lesson-box">
  <h2>Diferencia de cuadrados</h2>
  <p>Cuando un polinomio es de la forma a² - b², se factoriza como:</p>
  <p class="font-mono text-violet-400">a² - b² = (a + b)(a - b)</p>
  <p>Ejemplos resueltos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>x² - 16 → (x + 4)(x - 4)</li>
    <li>9a² - 25 → (3a + 5)(3a - 5)</li>
    <li>4x²y² - 1 → (2xy + 1)(2xy - 1)</li>
  </ul>
</div>

<div id="trinomio" class="lesson-box">
  <h2>Trinomio tipo x² + bx + c</h2>
  <p>Se busca factorizar en dos binomios de la forma (x + m)(x + n), donde:</p>
  <ul>
    <li>m * n = c (producto)</li>
    <li>m + n = b (suma)</li>
  </ul>
  <p>Ejemplos resueltos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>x² + 5x + 6 → (x + 2)(x + 3)</li>
    <li>x² - x - 6 → (x - 3)(x + 2)</li>
    <li>x² + 7x + 10 → (x + 2)(x + 5)</li>
  </ul>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Factor común</h3>
  <p>Factorizar: 12x + 18</p>
  <ol>
    <li>Identificamos el factor común: 6</li>
    <li>Extraemos el factor: 6(2x + 3)</li>
  </ol>

  <h3>2) Factorización por agrupación</h3>
  <p>Factorizar: x² + 5x + 2x + 10</p>
  <ol>
    <li>Agrupamos: (x² + 5x) + (2x + 10)</li>
    <li>Factorizamos cada grupo: x(x + 5) + 2(x + 5)</li>
    <li>Factor común: (x + 2)(x + 5)</li>
  </ol>

  <h3>3) Trinomio cuadrado perfecto</h3>
  <p>Factorizar: x² + 10x + 25</p>
  <ol>
    <li>Verificamos si es un cuadrado perfecto: 10x = 2*5*x → sí</li>
    <li>Resultado: (x + 5)²</li>
  </ol>

  <h3>4) Diferencia de cuadrados</h3>
  <p>Factorizar: 9a² - 16</p>
  <ol>
    <li>Identificamos cuadrados: 9a² = (3a)², 16 = 4²</li>
    <li>Factorizamos: (3a + 4)(3a - 4)</li>
  </ol>

  <h3>5) Trinomio tipo x² + bx + c</h3>
  <p>Factorizar: x² + 5x + 6</p>
  <ol>
    <li>Buscamos dos números que multiplicados den 6 y sumados den 5 → 2 y 3</li>
    <li>Factorizamos: (x + 2)(x + 3)</li>
  </ol>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) Factor común</h3>
  <ul class="exercise-list">
    <li>a) 8x + 12</li>
    <li>b) 15a + 20</li>
    <li>c) 6xy + 9x</li>
  </ul>

  <h3>2) Factorización por agrupación</h3>
  <ul class="exercise-list">
    <li>a) x² + 5x + 2x + 10</li>
    <li>b) ab + ac + bd + bc</li>
    <li>c) 3x² + 6x + 2x + 4</li>
  </ul>

  <h3>3) Trinomio cuadrado perfecto</h3>
  <ul class="exercise-list">
    <li>a) x² + 10x + 25</li>
    <li>b) 4a² - 12a + 9</li>
    <li>c) m² + 8m + 16</li>
  </ul>

  <h3>4) Diferencia de cuadrados</h3>
  <ul class="exercise-list">
    <li>a) x² - 49</li>
    <li>b) 9a² - 16</li>
    <li>c) 4x² - y²</li>
  </ul>

  <h3>5) Trinomio tipo x² + bx + c</h3>
  <ul class="exercise-list">
    <li>a) x² + 7x + 12</li>
    <li>b) x² - x - 6</li>
    <li>c) x² + 5x + 6</li>
    <li>d) x² + 9x + 20</li>
  </ul>
</div>
