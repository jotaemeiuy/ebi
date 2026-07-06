---
layout: ../../../layouts/Leccion.astro
title: "Sistemas de ecuaciones - Método de Sustitución"
unitId: 4
unitTitle: "Ecuaciones"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#concepto">• ¿Qué es un sistema lineal 2×2?</a></li>
    <li><a href="#metodo">• Método de sustitución</a></li>
    <li><a href="#problemas">• Problemas resueltos</a></li>
    <li><a href="#ejercicios">• Ejercicios</a></li>
  </ul>
</div>

<div id="concepto" class="lesson-box">
  <h2>¿Qué es un sistema lineal 2×2?</h2>
  <p>
    Un sistema lineal de dos ecuaciones con dos incógnitas tiene la forma:
  </p>
  <p class="font-mono text-violet-400">
    a₁x + b₁y = c₁<br>
    a₂x + b₂y = c₂
  </p>
  <p>
    Resolver el sistema significa encontrar los valores de <strong>x</strong> e <strong>y</strong>
    que satisfacen ambas ecuaciones simultáneamente.
  </p>
</div>

<div id="metodo" class="lesson-box">
  <h2>Método de sustitución</h2>
  <p>Consiste en despejar una variable de una ecuación y reemplazarla en la otra.</p>
  <p><strong>Pasos:</strong></p>
  <ol>
    <li>Despejar una variable (x o y) de una de las ecuaciones</li>
    <li>Sustituir esa expresión en la otra ecuación</li>
    <li>Resolver la ecuación resultante (una sola variable)</li>
    <li>Reemplazar el valor obtenido en la expresión del paso 1 para hallar la otra variable</li>
  </ol>
  <p>Ejemplo rápido:</p>
  <p class="font-mono text-violet-400">
    x + y = 5<br>
    2x - y = 1
  </p>
  <ol>
    <li>De la 1ª: y = 5 - x</li>
    <li>Sustituimos en la 2ª: 2x - (5 - x) = 1</li>
    <li>2x - 5 + x = 1 → 3x = 6 → x = 2</li>
    <li>y = 5 - 2 = 3</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 2, y = 3</p>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1)</h3>
  <p class="font-mono text-violet-400">x + y = 10<br>x - y = 4</p>
  <ol>
    <li>De la 1ª despejamos x: x = 10 - y</li>
    <li>Sustituimos en la 2ª: (10 - y) - y = 4</li>
    <li>10 - 2y = 4 → -2y = -6 → y = 3</li>
    <li>x = 10 - 3 = 7</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 7, y = 3</p>

  <h3>2)</h3>
  <p class="font-mono text-violet-400">2x + y = 8<br>x - y = 1</p>
  <ol>
    <li>De la 2ª despejamos x: x = 1 + y</li>
    <li>Sustituimos en la 1ª: 2(1 + y) + y = 8</li>
    <li>2 + 2y + y = 8 → 3y = 6 → y = 2</li>
    <li>x = 1 + 2 = 3</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 3, y = 2</p>

  <h3>3)</h3>
  <p class="font-mono text-violet-400">3x + 2y = 12<br>x - y = 1</p>
  <ol>
    <li>De la 2ª despejamos x: x = 1 + y</li>
    <li>Sustituimos en la 1ª: 3(1 + y) + 2y = 12</li>
    <li>3 + 3y + 2y = 12 → 5y = 9 → y = 9/5</li>
    <li>x = 1 + 9/5 = 14/5</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 14/5, y = 9/5</p>

  <h3>4)</h3>
  <p class="font-mono text-violet-400">x + 3y = 7<br>2x + y = 4</p>
  <ol>
    <li>De la 1ª despejamos x: x = 7 - 3y</li>
    <li>Sustituimos en la 2ª: 2(7 - 3y) + y = 4</li>
    <li>14 - 6y + y = 4 → -5y = -10 → y = 2</li>
    <li>x = 7 - 3(2) = 1</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 1, y = 2</p>

  <h3>5)</h3>
  <p class="font-mono text-violet-400">4x - y = 5<br>x + 2y = 8</p>
  <ol>
    <li>De la 1ª despejamos y: y = 4x - 5</li>
    <li>Sustituimos en la 2ª: x + 2(4x - 5) = 8</li>
    <li>x + 8x - 10 = 8 → 9x = 18 → x = 2</li>
    <li>y = 4(2) - 5 = 3</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 2, y = 3</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>
  <h3>Resolver por el método de sustitución:</h3>
  <ul class="exercise-list">
    <li>a) x + y = 6 &nbsp;;&nbsp; x - y = 2</li>
    <li>b) 2x + y = 7 &nbsp;;&nbsp; x + y = 5</li>
    <li>c) 3x - y = 5 &nbsp;;&nbsp; x + 2y = 4</li>
    <li>d) x + 4y = 10 &nbsp;;&nbsp; 2x - y = 1</li>
    <li>e) 5x + y = 13 &nbsp;;&nbsp; x - y = 1</li>
    <li>f) 2x + 3y = 12 &nbsp;;&nbsp; x - y = 1</li>
    <li>g) x + y = 8 &nbsp;;&nbsp; 3x - 2y = 4</li>
    <li>h) 4x + y = 11 &nbsp;;&nbsp; x + 3y = 11</li>
  </ul>
</div>
