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
  <p>Existen varias técnicas de factorización; elegimos la que corresponde según la forma del polinomio.</p>
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
    <li>8a³ - 12a² + 4a → factor común 4a → 4a(2a² - 3a + 1)</li>
    <li>9x²y³ + 6xy² - 3xy → factor común 3xy → 3xy(3xy² + 2y - 1)</li>
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
  <p>Tercer ejemplo:</p>
  <p>2x³ + 4x² - 3x - 6</p>
  <ol>
    <li>Agrupamos: (2x³ + 4x²) + (-3x - 6)</li>
    <li>Factorizamos: 2x²(x + 2) - 3(x + 2)</li>
    <li>Factor común final: (2x² - 3)(x + 2)</li>
  </ol>
</div>

<div id="cuadrado-perfecto" class="lesson-box">
  <h2>Trinomio cuadrado perfecto</h2>
  <p>Se reconoce porque sigue la forma:</p>
  <p class="font-mono text-violet-400">a² + 2ab + b² = (a + b)²</p>
  <p class="font-mono text-violet-400">a² - 2ab + b² = (a - b)²</p>
  <p>Para verificarlo: el término del medio debe ser el doble del producto de las raíces cuadradas de los extremos.</p>
  <p>Ejemplos resueltos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>x² + 6x + 9 → √x²=x, √9=3, doble producto=6x ✓ → (x + 3)²</li>
    <li>4a² - 12a + 9 → √4a²=2a, √9=3, doble producto=12a ✓ → (2a - 3)²</li>
    <li>m² + 10m + 25 → √m²=m, √25=5, doble producto=10m ✓ → (m + 5)²</li>
    <li>9x² + 24x + 16 → √9x²=3x, √16=4, doble producto=24x ✓ → (3x + 4)²</li>
    <li>25y² - 20y + 4 → √25y²=5y, √4=2, doble producto=20y ✓ → (5y - 2)²</li>
  </ul>
</div>

<div id="diferencia-cuadrados" class="lesson-box">
  <h2>Diferencia de cuadrados</h2>
  <p>Cuando un polinomio es de la forma a² - b², se factoriza como:</p>
  <p class="font-mono text-violet-400">a² - b² = (a + b)(a - b)</p>
  <p>Para identificarlo: dos términos perfectos al cuadrado separados por resta.</p>
  <p>Ejemplos resueltos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>x² - 16 → (x + 4)(x - 4)</li>
    <li>9a² - 25 → (3a + 5)(3a - 5)</li>
    <li>4x²y² - 1 → (2xy + 1)(2xy - 1)</li>
    <li>49m² - 36n² → (7m + 6n)(7m - 6n)</li>
    <li>100 - x² → (10 + x)(10 - x)</li>
  </ul>
</div>

<div id="trinomio" class="lesson-box">
  <h2>Trinomio tipo x² + bx + c</h2>
  <p>Se busca factorizar en dos binomios de la forma (x + m)(x + n), donde:</p>
  <ul>
    <li>m * n = c (producto)</li>
    <li>m + n = b (suma)</li>
  </ul>
  <p>Estrategia: listar los pares de factores de c y encontrar el que sume b.</p>
  <p>Ejemplos resueltos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>x² + 5x + 6 → buscamos m·n=6, m+n=5 → m=2, n=3 → (x + 2)(x + 3)</li>
    <li>x² - x - 6 → buscamos m·n=-6, m+n=-1 → m=-3, n=2 → (x - 3)(x + 2)</li>
    <li>x² + 7x + 10 → buscamos m·n=10, m+n=7 → m=2, n=5 → (x + 2)(x + 5)</li>
    <li>x² - 9x + 20 → buscamos m·n=20, m+n=-9 → m=-4, n=-5 → (x - 4)(x - 5)</li>
    <li>x² + 2x - 15 → buscamos m·n=-15, m+n=2 → m=5, n=-3 → (x + 5)(x - 3)</li>
  </ul>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Factor común</h3>
  <p>Factorizar: 12x + 18</p>
  <ol>
    <li>Factores de 12: 1, 2, 3, 4, 6, 12</li>
    <li>Factores de 18: 1, 2, 3, 6, 9, 18</li>
    <li>El mayor factor común es 6</li>
    <li>Resultado: 6(2x + 3)</li>
  </ol>

  <h3>2) Factor común con variables</h3>
  <p>Factorizar: 15x²y - 10xy² + 5xy</p>
  <ol>
    <li>Factor numérico común: mcd(15, 10, 5) = 5</li>
    <li>Factor literal común: x¹y¹ (mínimas potencias)</li>
    <li>Factor común total: 5xy</li>
    <li>15x²y ÷ 5xy = 3x; &nbsp; -10xy² ÷ 5xy = -2y; &nbsp; 5xy ÷ 5xy = 1</li>
    <li>Resultado: 5xy(3x - 2y + 1)</li>
  </ol>

  <h3>3) Factorización por agrupación</h3>
  <p>Factorizar: x² + 5x + 2x + 10</p>
  <ol>
    <li>Agrupamos: (x² + 5x) + (2x + 10)</li>
    <li>Factorizamos cada grupo: x(x + 5) + 2(x + 5)</li>
    <li>Factor común (x + 5): (x + 2)(x + 5)</li>
  </ol>

  <h3>4) Trinomio cuadrado perfecto</h3>
  <p>Factorizar: x² + 10x + 25</p>
  <ol>
    <li>Verificamos si es cuadrado perfecto:</li>
    <li>√x² = x &nbsp;&nbsp; √25 = 5 &nbsp;&nbsp; 2 · x · 5 = 10x ✓</li>
    <li>Resultado: (x + 5)²</li>
  </ol>

  <h3>5) Diferencia de cuadrados</h3>
  <p>Factorizar: 9a² - 16</p>
  <ol>
    <li>Identificamos cuadrados: 9a² = (3a)², 16 = 4²</li>
    <li>Aplicamos a² - b² = (a + b)(a - b)</li>
    <li>Resultado: (3a + 4)(3a - 4)</li>
  </ol>

  <h3>6) Trinomio tipo x² + bx + c</h3>
  <p>Factorizar: x² - 7x + 12</p>
  <ol>
    <li>Buscamos m y n tal que: m · n = 12 y m + n = -7</li>
    <li>Pares de factores de 12: (1,12), (2,6), (3,4)</li>
    <li>Negativos: (-3)·(-4) = 12 y (-3)+(-4) = -7 ✓</li>
    <li>Resultado: (x - 3)(x - 4)</li>
  </ol>

  <h3>7) Combinación de métodos</h3>
  <p>Factorizar completamente: 2x² - 8</p>
  <ol>
    <li>Paso 1: Extraemos factor común 2 → 2(x² - 4)</li>
    <li>Paso 2: x² - 4 es diferencia de cuadrados → (x + 2)(x - 2)</li>
    <li>Resultado final: 2(x + 2)(x - 2)</li>
  </ol>

  <h3>8) Trinomio cuadrado perfecto (Diferencia)</h3>
  <p>Factorizar: 4x² - 28x + 49</p>
  <ol>
    <li>Verificamos: √4x² = 2x; √49 = 7; 2 · 2x · 7 = 28x ✓</li>
    <li>Es (a - b)² con a = 2x y b = 7</li>
    <li>Resultado: (2x - 7)²</li>
  </ol>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) Factor común</h3>
  <ul class="exercise-list">
    <li>a) 8x + 12</li>
    <li>b) 15a + 20</li>
    <li>c) 6xy + 9x</li>
    <li>d) 10m² - 15m</li>
    <li>e) 4a³b - 8a²b² + 12ab</li>
    <li>f) 21x²y - 14xy² + 7xy</li>
    <li>g) 18x³ + 24x²</li>
    <li>h) 25a²b + 35ab²</li>
    <li>i) 16m³n - 12m²n² + 4mn</li>
    <li>j) 9x²y - 27xy + 3y</li>
    <li>k) 40a⁴ - 24a³ + 16a²</li>
    <li>l) 6p²q³ - 18pq² + 30pq</li>
  </ul>

  <h3>2) Factorización por agrupación</h3>
  <ul class="exercise-list">
    <li>a) x² + 5x + 2x + 10</li>
    <li>b) ab + ac + bd + bc</li>
    <li>c) 3x² + 6x + 2x + 4</li>
    <li>d) 2x³ - 6x² + x - 3</li>
    <li>e) mx + nx + my + ny</li>
  </ul>

  <h3>3) Trinomio cuadrado perfecto</h3>
  <ul class="exercise-list">
    <li>a) x² + 10x + 25</li>
    <li>b) 4a² - 12a + 9</li>
    <li>c) m² + 8m + 16</li>
    <li>d) 9y² + 30y + 25</li>
    <li>e) 16x² - 40x + 25</li>
    <li>f) 49m² + 28mn + 4n²</li>
  </ul>

  <h3>4) Diferencia de cuadrados</h3>
  <ul class="exercise-list">
    <li>a) x² - 49</li>
    <li>b) 9a² - 16</li>
    <li>c) 4x² - y²</li>
    <li>d) 25m² - 81</li>
    <li>e) 36a² - 49b²</li>
    <li>f) 100 - 9x²</li>
  </ul>

  <h3>5) Trinomio tipo x² + bx + c</h3>
  <ul class="exercise-list">
    <li>a) x² + 7x + 12</li>
    <li>b) x² - x - 6</li>
    <li>c) x² + 5x + 6</li>
    <li>d) x² + 9x + 20</li>
    <li>e) x² - 11x + 30</li>
    <li>f) x² + 3x - 18</li>
    <li>g) x² - 2x - 24</li>
  </ul>

  <h3>6) Combinación de métodos</h3>
  <ul class="exercise-list">
    <li>a) 3x² - 27</li>
    <li>b) 2x² + 8x + 8</li>
    <li>c) 5x² - 20</li>
    <li>d) 4x³ - 16x</li>
  </ul>
</div>
