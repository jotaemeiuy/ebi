---
layout: ../../../layouts/Leccion.astro
title: "Resolución de Ecuaciones con Denominador"
unitId: 6
unitTitle: "Ecuaciones"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#pasos">• Pasos para resolver</a></li>
    <li><a href="#minimo">• Mínimo común múltiplo (m.c.m.)</a></li>
    <li><a href="#metodo">• Ejemplo resuelto completo</a></li>
    <li><a href="#problemas">• Problemas resueltos paso a paso</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="pasos" class="lesson-box">
  <h2>Pasos del método con denominadores</h2>
  <p>
    Para resolver una ecuación con denominadores conviene seguir estos pasos, añadidos al método
    general ya visto:
  </p>
  <ol>
    <li><strong>Eliminar denominadores:</strong> multiplicar todos los términos por el m.c.m. de los denominadores.</li>
    <li><strong>Eliminar paréntesis</strong> (si los hay).</li>
    <li><strong>Reducir términos semejantes.</strong></li>
    <li><strong>Transponer términos</strong> (agrupar la incógnita).</li>
    <li><strong>Despejar la incógnita.</strong></li>
  </ol>
</div>

<div id="minimo" class="lesson-box">
  <h2>Mínimo común múltiplo (m.c.m.)</h2>
  <p>
    El <strong>m.c.m.</strong> de los denominadores es el menor número que es múltiplo de todos ellos.
    Al multiplicar cada término por él, las fracciones desaparecen.
  </p>
  <p>Ejemplos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>m.c.m.(2, 3) = 6</li>
    <li>m.c.m.(3, 2, 4) = 12</li>
    <li>m.c.m.(4, 5) = 20</li>
  </ul>
</div>

<div id="metodo" class="lesson-box">
  <h2>Ejemplo resuelto completo</h2>
  <p>Resuelve la ecuación:</p>
  <p class="font-mono text-violet-400">(2x − 1)/3 + (x − 3)/2 = (3x + 7)/4</p>

  <p><strong>Paso 1. Eliminar denominadores.</strong> m.c.m.(3, 2, 4) = 12. Multiplicamos todo por 12:</p>
  <p class="font-mono text-violet-400">12 · (2x − 1)/3 + 12 · (x − 3)/2 = 12 · (3x + 7)/4</p>
  <p class="font-mono text-violet-400">4(2x − 1) + 6(x − 3) = 3(3x + 7)</p>

  <p><strong>Paso 2. Eliminar paréntesis:</strong></p>
  <p class="font-mono text-violet-400">8x − 4 + 6x − 18 = 9x + 21</p>

  <p><strong>Paso 3. Reducir términos semejantes:</strong></p>
  <p class="font-mono text-violet-400">14x − 22 = 9x + 21</p>

  <p><strong>Paso 4. Transponer términos:</strong></p>
  <p class="font-mono text-violet-400">14x − 9x = 21 + 22 → 5x = 43</p>

  <p><strong>Paso 5. Despejar la incógnita:</strong></p>
  <p class="font-mono text-violet-400">x = 43/5</p>

  <p><strong>Comprobación aproximada:</strong> sustituimos en los denominadores y verificamos que ambos miembros coinciden.</p>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Denominador único</h3>
  <p class="font-mono text-violet-400">x/3 + 5 = 8</p>
  <ol>
    <li>Multiplicamos todo por 3: x + 15 = 24</li>
    <li>Transponemos: x = 24 − 15 = 9</li>
    <li>Comprobación: 9/3 + 5 = 3 + 5 = 8 ✓</li>
  </ol>

  <h3>2) Dos denominadores</h3>
  <p class="font-mono text-violet-400">x/2 + x/4 = 9</p>
  <ol>
    <li>m.c.m.(2, 4) = 4 → multiplicamos por 4: 2x + x = 36</li>
    <li>Reducimos: 3x = 36 → x = 12</li>
    <li>Comprobación: 12/2 + 12/4 = 6 + 3 = 9 ✓</li>
  </ol>

  <h3>3) Denominadores 2 y 3</h3>
  <p class="font-mono text-violet-400">x/2 − 1 = x/3 + 2</p>
  <ol>
    <li>m.c.m.(2, 3) = 6: multiplicamos: 3x − 6 = 2x + 12</li>
    <li>Transponemos: 3x − 2x = 12 + 6 → x = 18</li>
    <li>Comprobación: 18/2 − 1 = 8 y 18/3 + 2 = 8 ✓</li>
  </ol>

  <h3>4) La incógnita multiplicada en el numerador</h3>
  <p class="font-mono text-violet-400">2x/3 = 8</p>
  <ol>
    <li>Multiplicamos por 3: 2x = 24</li>
    <li>Dividimos entre 2: x = 12</li>
    <li>Comprobación: 2 · 12/3 = 24/3 = 8 ✓</li>
  </ol>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) Calcula el m.c.m.</h3>
  <ul class="exercise-list">
    <li>a) m.c.m.(2, 4)</li>
    <li>b) m.c.m.(3, 6)</li>
    <li>c) m.c.m.(2, 5)</li>
    <li>d) m.c.m.(3, 4, 6)</li>
  </ul>

  <h3>2) Resuelve las ecuaciones con denominador</h3>
  <ul class="exercise-list">
    <li>a) x/2 + 1 = 5</li>
    <li>b) x/5 = 4</li>
    <li>c) x/3 + 2 = 7</li>
    <li>d) x/4 − 1 = 2</li>
    <li>e) x/2 + x/6 = 8</li>
    <li>f) x/3 = 6</li>
    <li>g) 2x/3 + x/2 = 7</li>
    <li>h) x/2 − 1 = x/4 + 1</li>
  </ul>
</div>