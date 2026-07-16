---
layout: ../../../layouts/Leccion.astro
title: "Propiedad Distributiva"
unitId: 3
unitTitle: "Álgebra"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#concepto">• ¿Qué es la propiedad distributiva?</a></li>
    <li><a href="#distributiva-suma">• Distributiva respecto a la suma</a></li>
    <li><a href="#distributiva-resta">• Distributiva respecto a la resta</a></li>
    <li><a href="#doble-distributiva">• Doble distributiva (binomio por binomio)</a></li>
    <li><a href="#distributiva-inversa">• Distributiva inversa (factor común)</a></li>
    <li><a href="#problemas">• Problemas resueltos paso a paso</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="concepto" class="lesson-box">
  <h2>¿Qué es la propiedad distributiva?</h2>
  <p>
    La propiedad distributiva permite multiplicar un factor por cada uno de los sumandos dentro de un paréntesis y luego sumar los resultados.
  </p>
  <p>Fórmula general:</p>
  <p class="font-mono text-violet-400">
    a · (b + c) = a · b + a · c
  </p>
  <p>
    Esta propiedad es fundamental en álgebra, ya que permite simplificar expresiones y operar con polinomios.
    También funciona "al revés": si identificamos un factor común, podemos extraerlo.
  </p>
</div>

<div id="distributiva-suma" class="lesson-box">
  <h2>Distributiva respecto a la suma</h2>
  <p>Fórmula:</p>
  <p class="font-mono text-violet-400">
    a · (b + c) = a · b + a · c
  </p>
  <p>Ejemplos con números:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>3 · (4 + 5) = 3 · 4 + 3 · 5 = 12 + 15 = 27</li>
    <li>5 · (2 + 8) = 5 · 2 + 5 · 8 = 10 + 40 = 50</li>
    <li>-2 · (6 + 3) = -2 · 6 + (-2) · 3 = -12 + (-6) = -18</li>
    <li>7 · (5 + 9) = 7 · 5 + 7 · 9 = 35 + 63 = 98</li>
  </ul>
  <p>Ejemplos con variables:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>x · (x + 3) = x² + 3x</li>
    <li>2a · (a + 5) = 2a² + 10a</li>
    <li>3m · (2m + 4n) = 6m² + 12mn</li>
    <li>-4x · (x + 2) = -4x² - 8x</li>
    <li>5y · (3y + 2z) = 15y² + 10yz</li>
  </ul>
</div>

<div id="distributiva-resta" class="lesson-box">
  <h2>Distributiva respecto a la resta</h2>
  <p>Fórmula:</p>
  <p class="font-mono text-violet-400">
    a · (b - c) = a · b - a · c
  </p>
  <p>Ejemplos con números:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>4 · (10 - 3) = 4 · 10 - 4 · 3 = 40 - 12 = 28</li>
    <li>6 · (9 - 2) = 6 · 9 - 6 · 2 = 54 - 12 = 42</li>
    <li>-3 · (7 - 5) = -3 · 7 - (-3) · 5 = -21 + 15 = -6</li>
    <li>8 · (12 - 4) = 8 · 12 - 8 · 4 = 96 - 32 = 64</li>
  </ul>
  <p>Ejemplos con variables:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>x · (x - 4) = x² - 4x</li>
    <li>3a · (2a - 1) = 6a² - 3a</li>
    <li>5y · (y - 3) = 5y² - 15y</li>
    <li>-2b · (3b - 7) = -6b² + 14b</li>
    <li>4mn · (2m - 3n) = 8m²n - 12mn²</li>
  </ul>
</div>

<div id="doble-distributiva" class="lesson-box">
  <h2>Doble distributiva (binomio por binomio)</h2>
  <p>Cuando multiplicamos dos binomios, aplicamos la propiedad distributiva dos veces:</p>
  <p class="font-mono text-violet-400">
    (a + b)(c + d) = ac + ad + bc + bd
  </p>
  <p>Ejemplos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6</li>
    <li>(x + 4)(x - 1) = x² - x + 4x - 4 = x² + 3x - 4</li>
    <li>(2a + 3)(a + 5) = 2a² + 10a + 3a + 15 = 2a² + 13a + 15</li>
    <li>(3x - 2)(x + 4) = 3x² + 12x - 2x - 8 = 3x² + 10x - 8</li>
    <li>(m - 3)(m - 5) = m² - 5m - 3m + 15 = m² - 8m + 15</li>
    <li>(2x + 5)(3x - 1) = 6x² - 2x + 15x - 5 = 6x² + 13x - 5</li>
  </ul>
</div>

<div id="distributiva-inversa" class="lesson-box">
  <h2>Distributiva inversa (factor común)</h2>
  <p>
    La propiedad distributiva también se puede usar "al revés": si todos los términos comparten un factor,
    podemos extraerlo del paréntesis.
  </p>
  <p class="font-mono text-violet-400">
    a · b + a · c = a · (b + c)
  </p>
  <p>Ejemplos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>6x + 12 = 6(x + 2)</li>
    <li>3a² + 9a = 3a(a + 3)</li>
    <li>4xy - 8x = 4x(y - 2)</li>
    <li>5m²n + 10mn² = 5mn(m + 2n)</li>
    <li>15x³ - 10x² + 5x = 5x(3x² - 2x + 1)</li>
    <li>14a²b - 21ab² = 7ab(2a - 3b)</li>
  </ul>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Distributiva con números</h3>
  <p>Resolver: 7 · (8 + 3)</p>
  <ol>
    <li>Aplicamos la propiedad distributiva: 7 · 8 + 7 · 3</li>
    <li>Realizamos las multiplicaciones: 56 + 21</li>
    <li>Resultado: 77</li>
  </ol>
  <p>Comprobamos: 7 · 11 = 77 ✓</p>

  <h3>2) Distributiva con variables (trinomio)</h3>
  <p>Resolver: 4x · (3x + 2y - 5)</p>
  <ol>
    <li>Distribuimos 4x a cada término del paréntesis</li>
    <li>4x · 3x = 12x²</li>
    <li>4x · 2y = 8xy</li>
    <li>4x · (-5) = -20x</li>
    <li>Resultado: 12x² + 8xy - 20x</li>
  </ol>

  <h3>3) Doble distributiva</h3>
  <p>Resolver: (2x + 3)(x - 4)</p>
  <ol>
    <li>Distribuimos el primer binomio sobre el segundo</li>
    <li>2x · x = 2x²</li>
    <li>2x · (-4) = -8x</li>
    <li>3 · x = 3x</li>
    <li>3 · (-4) = -12</li>
    <li>Sumamos: 2x² - 8x + 3x - 12</li>
    <li>Resultado: 2x² - 5x - 12</li>
  </ol>

  <h3>4) Distributiva inversa</h3>
  <p>Extraer factor común de: 18a²b - 12ab² + 6ab</p>
  <ol>
    <li>Identificamos el factor común: 6ab</li>
    <li>Dividimos cada término por 6ab:</li>
    <li>18a²b ÷ 6ab = 3a</li>
    <li>-12ab² ÷ 6ab = -2b</li>
    <li>6ab ÷ 6ab = 1</li>
    <li>Resultado: 6ab(3a - 2b + 1)</li>
  </ol>

  <h3>5) Distributiva con signo negativo</h3>
  <p>Resolver: -5x · (2x - 3y + 1)</p>
  <ol>
    <li>Distribuimos -5x a cada término (¡cuidado con los signos!)</li>
    <li>-5x · 2x = -10x²</li>
    <li>-5x · (-3y) = +15xy</li>
    <li>-5x · 1 = -5x</li>
    <li>Resultado: -10x² + 15xy - 5x</li>
  </ol>

  <h3>6) Doble distributiva con coeficientes</h3>
  <p>Resolver: (3a - 2)(4a + 5)</p>
  <ol>
    <li>3a · 4a = 12a²</li>
    <li>3a · 5 = 15a</li>
    <li>-2 · 4a = -8a</li>
    <li>-2 · 5 = -10</li>
    <li>Sumamos y simplificamos: 12a² + 15a - 8a - 10</li>
    <li>Resultado: 12a² + 7a - 10</li>
  </ol>

  <h3>7) Verificar igualdad usando distributiva</h3>
  <p>¿Es verdad que 6 · (5 + 4) = 6 · 5 + 6 · 4?</p>
  <ol>
    <li>Lado izquierdo: 6 · 9 = 54</li>
    <li>Lado derecho: 30 + 24 = 54</li>
    <li>Ambos lados son iguales → la propiedad distributiva se cumple ✓</li>
  </ol>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) Distributiva respecto a la suma</h3>
  <ul class="exercise-list">
    <li>a) 5 · (3 + 7)</li>
    <li>b) 4 · (6 + 2)</li>
    <li>c) x · (x + 5)</li>
    <li>d) 3a · (a + 4)</li>
    <li>e) 2m · (3m + 7n)</li>
    <li>f) -6k · (k + 9)</li>
    <li>g) 4pq · (2p + 3q)</li>
  </ul>

  <h3>2) Distributiva respecto a la resta</h3>
  <ul class="exercise-list">
    <li>a) 6 · (10 - 4)</li>
    <li>b) 8 · (7 - 3)</li>
    <li>c) x · (x - 6)</li>
    <li>d) 4y · (2y - 3)</li>
    <li>e) -3a · (a - 5)</li>
    <li>f) 7x · (4x - y)</li>
    <li>g) -2mn · (5m - n)</li>
  </ul>

  <h3>3) Distributiva con trinomios</h3>
  <ul class="exercise-list">
    <li>a) 2x · (x² + 3x - 4)</li>
    <li>b) 3a · (2a² - a + 5)</li>
    <li>c) -m · (m² + 4m - 7)</li>
    <li>d) 5xy · (x - 2y + 1)</li>
  </ul>

  <h3>4) Doble distributiva (binomio por binomio)</h3>
  <ul class="exercise-list">
    <li>a) (x + 1)(x + 4)</li>
    <li>b) (x + 5)(x - 2)</li>
    <li>c) (2a + 1)(a + 3)</li>
    <li>d) (3x - 4)(x + 2)</li>
    <li>e) (m - 6)(m - 3)</li>
    <li>f) (4y + 3)(2y - 5)</li>
    <li>g) (x - 7)(x + 7)</li>
  </ul>

  <h3>5) Distributiva inversa (extraer factor común)</h3>
  <ul class="exercise-list">
    <li>a) 10x + 15</li>
    <li>b) 8a² + 4a</li>
    <li>c) 6xy - 9x</li>
    <li>d) 12m²n + 18mn²</li>
    <li>e) 20x³ - 15x² + 5x</li>
    <li>f) 21a²b - 14ab²</li>
    <li>g) 16x³y² - 8x²y + 4xy</li>
  </ul>
</div>
