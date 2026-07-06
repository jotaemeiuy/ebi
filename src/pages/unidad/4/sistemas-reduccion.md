---
layout: ../../../layouts/Leccion.astro
title: "Sistemas de ecuaciones - Método de Reducción"
unitId: 4
unitTitle: "Ecuaciones"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#metodo">• Método de reducción</a></li>
    <li><a href="#problemas">• Problemas resueltos</a></li>
    <li><a href="#ejercicios">• Ejercicios</a></li>
  </ul>
</div>

<div id="metodo" class="lesson-box">
  <h2>Método de reducción (o eliminación)</h2>
  <p>
    Consiste en sumar o restar las ecuaciones para <strong>eliminar una de las variables</strong>.
    Si los coeficientes no se cancelan directamente, multiplicamos una o ambas ecuaciones por constantes adecuadas.
  </p>
  <p><strong>Pasos:</strong></p>
  <ol>
    <li>Preparar las ecuaciones para que una variable tenga coeficientes opuestos (o iguales)</li>
    <li>Sumar (o restar) las ecuaciones para eliminar esa variable</li>
    <li>Resolver la ecuación resultante</li>
    <li>Sustituir el valor en cualquiera de las ecuaciones originales para hallar la otra variable</li>
  </ol>
  <p>Ejemplo rápido:</p>
  <p class="font-mono text-violet-400">
    x + y = 6<br>
    x - y = 2
  </p>
  <ol>
    <li>Los coeficientes de y son opuestos (+1 y -1), sumamos directamente</li>
    <li>Sumamos: 2x = 8 → x = 4</li>
    <li>Reemplazamos en la 1ª: 4 + y = 6 → y = 2</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 4, y = 2</p>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Coeficientes opuestos directamente</h3>
  <p class="font-mono text-violet-400">3x + y = 11<br>x - y = 1</p>
  <ol>
    <li>Los coeficientes de y son +1 y -1 → sumamos</li>
    <li>4x = 12 → x = 3</li>
    <li>3(3) + y = 11 → y = 2</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 3, y = 2</p>

  <h3>2) Multiplicar una ecuación</h3>
  <p class="font-mono text-violet-400">2x + 3y = 16<br>x + y = 6</p>
  <ol>
    <li>Multiplicamos la 2ª por -2: -2x - 2y = -12</li>
    <li>Sumamos con la 1ª: (2x + 3y) + (-2x - 2y) = 16 + (-12)</li>
    <li>y = 4</li>
    <li>x + 4 = 6 → x = 2</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 2, y = 4</p>

  <h3>3) Multiplicar una ecuación</h3>
  <p class="font-mono text-violet-400">x + 2y = 7<br>3x - y = 7</p>
  <ol>
    <li>Multiplicamos la 2ª por 2: 6x - 2y = 14</li>
    <li>Sumamos con la 1ª: 7x = 21 → x = 3</li>
    <li>3 + 2y = 7 → y = 2</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 3, y = 2</p>

  <h3>4) Multiplicar ambas ecuaciones</h3>
  <p class="font-mono text-violet-400">3x + 2y = 11<br>2x + 5y = 16</p>
  <ol>
    <li>Multiplicamos la 1ª por 5: 15x + 10y = 55</li>
    <li>Multiplicamos la 2ª por -2: -4x - 10y = -32</li>
    <li>Sumamos: 11x = 23 → x = 23/11</li>
    <li>3(23/11) + 2y = 11 → 69/11 + 2y = 121/11 → 2y = 52/11 → y = 26/11</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 23/11, y = 26/11</p>

  <h3>5) Multiplicar ambas ecuaciones</h3>
  <p class="font-mono text-violet-400">2x + 3y = 7<br>5x - 2y = 4</p>
  <ol>
    <li>Multiplicamos la 1ª por 2: 4x + 6y = 14</li>
    <li>Multiplicamos la 2ª por 3: 15x - 6y = 12</li>
    <li>Sumamos: 19x = 26 → x = 26/19</li>
    <li>2(26/19) + 3y = 7 → 52/19 + 3y = 133/19 → 3y = 81/19 → y = 27/19</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: x = 26/19, y = 27/19</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>
  <h3>Resolver por el método de reducción:</h3>
  <ul class="exercise-list">
    <li>a) x + y = 5 &nbsp;;&nbsp; x - y = 1</li>
    <li>b) 2x + y = 9 &nbsp;;&nbsp; x - y = 0</li>
    <li>c) 3x + 2y = 12 &nbsp;;&nbsp; x + 2y = 8</li>
    <li>d) x + 3y = 10 &nbsp;;&nbsp; 2x - y = 6</li>
    <li>e) 4x + y = 14 &nbsp;;&nbsp; 2x + 3y = 12</li>
    <li>f) 3x - 2y = 1 &nbsp;;&nbsp; 2x + 3y = 12</li>
    <li>g) 5x + 4y = 22 &nbsp;;&nbsp; 3x - 2y = 2</li>
    <li>h) 2x + 5y = 17 &nbsp;;&nbsp; 3x + 2y = 12</li>
  </ul>
</div>
