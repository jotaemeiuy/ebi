---
layout: ../../../layouts/Leccion.astro
title: "Método General de Resolución de Ecuaciones"
unitId: 6
unitTitle: "Ecuaciones"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#pasos">• Pasos del método general</a></li>
    <li><a href="#reducir">• Reducir términos semejantes</a></li>
    <li><a href="#metodo">• Aplicación del método completo</a></li>
    <li><a href="#problemas">• Problemas resueltos paso a paso</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="pasos" class="lesson-box">
  <h2>Pasos del método general</h2>
  <p>
    Para resolver una ecuación de primer grado conviene seguir estos pasos:
  </p>
  <ol>
    <li><strong>Eliminar paréntesis</strong> (si los hay), aplicando la propiedad distributiva.</li>
    <li><strong>Reducir términos semejantes</strong> en cada miembro.</li>
    <li><strong>Transponer términos</strong>: agrupar la incógnita en un miembro y los números en el otro.</li>
    <li><strong>Despejar la incógnita</strong>, aplicando la regla del producto.</li>
  </ol>
</div>

<div id="reducir" class="lesson-box">
  <h2>Reducir términos semejantes</h2>
  <p>
    Para resolver ecuaciones de primer grado, los alumnos deben aprender a transponer términos.
    Primero simplificamos cada miembro combinando los términos que tienen la misma variable.
  </p>
  <p>Ejemplos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>3x + 2x = 5x</li>
    <li>5x − x = 4x</li>
    <li>4x + 3 + 2x + 5 = (4x + 2x) + (3 + 5) = 6x + 8</li>
  </ul>
</div>

<div id="resuelto" class="lesson-box">
  <h2>Ejemplo resuelto del método completo</h2>
  <p class="font-mono text-violet-400">2(x − 4) = x − 3(x + 4)</p>
  <p><strong>Paso 1. Eliminar paréntesis:</strong></p>
  <p class="font-mono text-violet-400">2x − 8 = x − 3x − 12</p>
  <p><strong>Paso 2. Reducir términos semejantes:</strong></p>
  <p class="font-mono text-violet-400">2x − 8 = −2x − 12</p>
  <p><strong>Paso 3. Transponer términos (agrupar la x):</strong></p>
  <p class="font-mono text-violet-400">2x + 2x = −12 + 8</p>
  <p class="font-mono text-violet-400">4x = −4</p>
  <p><strong>Paso 4. Despejar la incógnita:</strong></p>
  <p class="font-mono text-violet-400">x = −4 ÷ 4 = −1</p>
  <p><strong>Comprobación:</strong> 2(−1 − 4) = 2(−5) = −10 y −3(−1 + 4) = −3(3) = −9; el primer miembro es 2(−5) = −10 y el segundo (−1) − 3(3) = −1 − 9 = −10 ✓</p>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Ecuación sin paréntesis</h3>
  <p class="font-mono text-violet-400">6x − 7 = 2x + 9</p>
  <ol>
    <li>Reducir y transponer: 6x − 2x = 9 + 7 → 4x = 16</li>
    <li>Despejar: x = 16 ÷ 4 = 4</li>
    <li>Comprobación: 6 · 4 − 7 = 24 − 7 = 17 y 2 · 4 + 9 = 8 + 9 = 17 ✓</li>
  </ol>

  <h3>2) Ecuación con paréntesis</h3>
  <p class="font-mono text-violet-400">3(2x − 1) = 2(3x + 4)</p>
  <ol>
    <li>Eliminar paréntesis: 6x − 3 = 6x + 8</li>
    <li>Transponer: 6x − 6x = 8 + 3 → 0 = 11 (contradicción)</li>
    <li>No tiene solución: al reducir desaparece la incógnita y queda una igualdad falsa.</li>
  </ol>

  <h3>3) Ecuación con paréntesis resolubles</h3>
  <p class="font-mono text-violet-400">5(x − 1) = 3(x + 3)</p>
  <ol>
    <li>Eliminar paréntesis: 5x − 5 = 3x + 9</li>
    <li>Transponer: 5x − 3x = 9 + 5 → 2x = 14</li>
    <li>Despejar: x = 7</li>
    <li>Comprobación: 5(6) = 30 y 3(10) = 30 ✓</li>
  </ol>

  <h3>4) Ecuación con paréntesis y términos en ambos lados</h3>
  <p class="font-mono text-violet-400">4x − 3(x + 1) = 2(x + 6)</p>
  <ol>
    <li>Eliminar paréntesis: 4x − 3x − 3 = 2x + 12</li>
    <li>Reducir: x − 3 = 2x + 12</li>
    <li>Transponer: x − 2x = 12 + 3 → −x = 15</li>
    <li>Despejar: x = −15</li>
  </ol>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) Resuelve por el método general</h3>
  <ul class="exercise-list">
    <li>a) 3x + 4 = 19</li>
    <li>b) 5x − 6 = 29</li>
    <li>c) 2x + 7 = 21</li>
    <li>d) 4x − 9 = 23</li>
  </ul>

  <h3>2) Resuelve (con transposición de la incógnita)</h3>
  <ul class="exercise-list">
    <li>a) 5x + 3 = 2x + 12</li>
    <li>b) 7x − 4 = 3x + 8</li>
    <li>c) 2x + 1 = x + 6</li>
    <li>d) 4x − 5 = x + 10</li>
    <li>e) 6x + 2 = x + 17</li>
  </ul>

  <h3>3) Resuelve (con paréntesis)</h3>
  <ul class="exercise-list">
    <li>a) 2(x + 3) = 14</li>
    <li>b) 3(x − 1) = 9</li>
    <li>c) 4(x + 2) = 20</li>
    <li>d) 3(x − 5) = 2(x − 1)</li>
    <li>e) 5(x − 4) + 6 = 4(x + 1)</li>
  </ul>
</div>