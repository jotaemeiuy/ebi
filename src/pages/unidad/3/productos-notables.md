---
layout: ../../../layouts/Leccion.astro
title: "Productos Notables - Cuadrados"
unitId: 3
unitTitle: "Álgebra"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#binomio-suma">• Binomio al Cuadrado (Suma)</a></li>
    <li><a href="#binomio-diferencia">• Binomio al Cuadrado (Diferencia)</a></li>
    <li><a href="#conjugados">• Binomios Conjugados (Suma por Diferencia)</a></li>
    <li><a href="#termino-comun">• Binomios con Término Común</a></li>
    <li><a href="#problemas">• Problemas resueltos</a></li>
    <li><a href="#ejercicios">• Ejercicios</a></li>
  </ul>
</div>

<div id="binomio-suma" class="lesson-box">
  <h2>Binomio al Cuadrado (Suma)</h2>
  <p>Fórmula:</p>
  <p class="font-mono text-violet-400">
    (a + b)² = a² + 2ab + b²
  </p>
  <p>Regla para recordar: primero al cuadrado + doble producto + segundo al cuadrado.</p>
  <p>Ejemplos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>(x + 5)² = x² + 10x + 25</li>
    <li>(2 + y)² = 4 + 4y + y²</li>
    <li>(3a + 7)² = 9a² + 42a + 49</li>
    <li>(m + n)² = m² + 2mn + n²</li>
    <li>(4x + 3)² = 16x² + 24x + 9</li>
    <li>(2a + 5b)² = 4a² + 20ab + 25b²</li>
  </ul>
</div>

<div id="binomio-diferencia" class="lesson-box">
  <h2>Binomio al Cuadrado (Diferencia)</h2>
  <p>Fórmula:</p>
  <p class="font-mono text-violet-400">
    (a - b)² = a² - 2ab + b²
  </p>
  <p>Atención: el término del medio siempre es negativo.</p>
  <p>Ejemplos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>(x - 5)² = x² - 10x + 25</li>
    <li>(2 - y)² = 4 - 4y + y²</li>
    <li>(3a - 7)² = 9a² - 42a + 49</li>
    <li>(m - n)² = m² - 2mn + n²</li>
    <li>(5x - 2)² = 25x² - 20x + 4</li>
    <li>(3m - 4n)² = 9m² - 24mn + 16n²</li>
  </ul>
</div>

<div id="conjugados" class="lesson-box">
  <h2>Binomios Conjugados (Suma por Diferencia)</h2>
  <p>Fórmula:</p>
  <p class="font-mono text-violet-400">
    (a + b)(a - b) = a² - b²
  </p>
  <p>El resultado es siempre una diferencia de cuadrados. El término del medio desaparece.</p>
  <p>Ejemplos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>(x + 5)(x - 5) = x² - 25</li>
    <li>(2 + y)(2 - y) = 4 - y²</li>
    <li>(3a + 7)(3a - 7) = 9a² - 49</li>
    <li>(m + n)(m - n) = m² - n²</li>
    <li>(6x + 1)(6x - 1) = 36x² - 1</li>
    <li>(4a + 3b)(4a - 3b) = 16a² - 9b²</li>
  </ul>
</div>

<div id="termino-comun" class="lesson-box">
  <h2>Binomios con Término Común</h2>
  <p>Fórmula:</p>
  <p class="font-mono text-violet-400">
    (x + a)(x + b) = x² + (a + b)x + ab
  </p>
  <p>El coeficiente de x es la suma de los términos independientes, y el término independiente es su producto.</p>
  <p>Ejemplos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>(x + 3)(x + 5) = x² + 8x + 15 &nbsp;&nbsp;[suma: 3+5=8, producto: 3·5=15]</li>
    <li>(x + 2)(x + 7) = x² + 9x + 14 &nbsp;&nbsp;[suma: 2+7=9, producto: 2·7=14]</li>
    <li>(x - 4)(x + 6) = x² + 2x - 24 &nbsp;&nbsp;[suma: -4+6=2, producto: -4·6=-24]</li>
    <li>(x - 3)(x - 8) = x² - 11x + 24 &nbsp;&nbsp;[suma: -3+(-8)=-11, producto: (-3)(-8)=24]</li>
    <li>(m + 4)(m + 7) = m² + 11m + 28</li>
    <li>(p - 5)(p + 2) = p² - 3p - 10</li>
  </ul>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Binomio al cuadrado (Suma)</h3>
  <p>Calcular (x + 6)²</p>
  <ol>
    <li>Identificamos: a = x, b = 6</li>
    <li>Aplicamos (a + b)² = a² + 2ab + b²</li>
    <li>x² + 2 · x · 6 + 6²</li>
    <li>Resultado: x² + 12x + 36</li>
  </ol>

  <h3>2) Binomio al cuadrado (Diferencia)</h3>
  <p>Calcular (3y - 5)²</p>
  <ol>
    <li>Identificamos: a = 3y, b = 5</li>
    <li>Aplicamos (a - b)² = a² - 2ab + b²</li>
    <li>(3y)² - 2 · 3y · 5 + 5²</li>
    <li>9y² - 30y + 25</li>
    <li>Resultado: 9y² - 30y + 25</li>
  </ol>

  <h3>3) Binomios conjugados</h3>
  <p>Calcular (5a + 4)(5a - 4)</p>
  <ol>
    <li>Identificamos: a = 5a, b = 4</li>
    <li>Aplicamos (a + b)(a - b) = a² - b²</li>
    <li>(5a)² - 4²</li>
    <li>Resultado: 25a² - 16</li>
  </ol>

  <h3>4) Binomios con término común</h3>
  <p>Calcular (x - 3)(x + 8)</p>
  <ol>
    <li>Identificamos: a = x, b = -3, c = 8</li>
    <li>Aplicamos (x + b)(x + c) = x² + (b+c)x + bc</li>
    <li>Suma: -3 + 8 = 5</li>
    <li>Producto: -3 · 8 = -24</li>
    <li>Resultado: x² + 5x - 24</li>
  </ol>

  <h3>5) Binomio al cuadrado con coeficiente</h3>
  <p>Calcular (2x + 3y)²</p>
  <ol>
    <li>Identificamos: a = 2x, b = 3y</li>
    <li>Aplicamos (a + b)² = a² + 2ab + b²</li>
    <li>(2x)² + 2 · 2x · 3y + (3y)²</li>
    <li>4x² + 12xy + 9y²</li>
    <li>Resultado: 4x² + 12xy + 9y²</li>
  </ol>

  <h3>6) Cálculo numérico usando productos notables</h3>
  <p>Calcular 99² de forma rápida</p>
  <ol>
    <li>Escribimos: (100 - 1)²</li>
    <li>Aplicamos (a - b)² = a² - 2ab + b²</li>
    <li>100² - 2 · 100 · 1 + 1²</li>
    <li>10000 - 200 + 1</li>
    <li>Resultado: 9801</li>
  </ol>

  <h3>7) Conjugados con expresiones compuestas</h3>
  <p>Calcular (3x² + 2)(3x² - 2)</p>
  <ol>
    <li>Identificamos: a = 3x², b = 2</li>
    <li>Aplicamos (a + b)(a - b) = a² - b²</li>
    <li>(3x²)² - 2²</li>
    <li>Resultado: 9x⁴ - 4</li>
  </ol>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) Binomio al cuadrado (Suma)</h3>
  <ul class="exercise-list">
    <li>a) (x + 7)²</li>
    <li>b) (y + 4)²</li>
    <li>c) (2 + z)²</li>
    <li>d) (3a + 5)²</li>
    <li>e) (m + n)²</li>
    <li>f) (5x + 2)²</li>
    <li>g) (4a + 3b)²</li>
  </ul>

  <h3>2) Binomio al cuadrado (Diferencia)</h3>
  <ul class="exercise-list">
    <li>a) (x - 7)²</li>
    <li>b) (y - 4)²</li>
    <li>c) (2 - z)²</li>
    <li>d) (3a - 5)²</li>
    <li>e) (m - n)²</li>
    <li>f) (6y - 1)²</li>
    <li>g) (2x - 3y)²</li>
  </ul>

  <h3>3) Binomios conjugados</h3>
  <ul class="exercise-list">
    <li>a) (x + 8)(x - 8)</li>
    <li>b) (y + 5)(y - 5)</li>
    <li>c) (2 + z)(2 - z)</li>
    <li>d) (3a + 7)(3a - 7)</li>
    <li>e) (10x + 3)(10x - 3)</li>
    <li>f) (5m + 4n)(5m - 4n)</li>
  </ul>

  <h3>4) Binomios con término común</h3>
  <ul class="exercise-list">
    <li>a) (x + 3)(x + 6)</li>
    <li>b) (y + 2)(y + 5)</li>
    <li>c) (a - 4)(a + 9)</li>
    <li>d) (m - 4)(m - 9)</li>
    <li>e) (p + 2)(p + 7)</li>
    <li>f) (z - 6)(z + 10)</li>
    <li>g) (k - 5)(k - 3)</li>
  </ul>

  <h3>5) Cálculo numérico con productos notables</h3>
  <ul class="exercise-list">
    <li>a) Calcular 101² usando (100 + 1)²</li>
    <li>b) Calcular 98² usando (100 - 2)²</li>
    <li>c) Calcular 51 · 49 usando (50 + 1)(50 - 1)</li>
    <li>d) Calcular 103 · 97 usando (100 + 3)(100 - 3)</li>
  </ul>
</div>
