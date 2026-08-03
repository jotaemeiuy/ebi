---
layout: ../../../layouts/Leccion.astro
title: "Ecuación"
unitId: 6
unitTitle: "Ecuaciones"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#concepto">• ¿Qué es una ecuación?</a></li>
    <li><a href="#elementos">• Incógnita, miembros, grado</a></li>
    <li><a href="#solucion">• Solución de una ecuación</a></li>
    <li><a href="#comprobar">• Comprobación de un valor</a></li>
    <li><a href="#problemas">• Problemas resueltos paso a paso</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="concepto" class="lesson-box">
  <h2>¿Qué es una ecuación?</h2>
  <p>
    Una <strong>ecuación</strong> es una igualdad algebraica que <strong>solo es cierta para algunos
    valores</strong> de la variable.
  </p>
  <p class="font-mono text-violet-400">x + 4 = 10</p>
  <p>
    Esta igualdad solo se cumple cuando la incógnita vale x = 6 → 6 + 4 = 10.
  </p>
  <p>Otros ejemplos de ecuaciones:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>3x + 5 = 20</li>
    <li>2y − 3 = 7</li>
    <li>5a = 25</li>
  </ul>
</div>

<div id="elementos" class="lesson-box">
  <h2>Incógnita, miembros y grado</h2>
  <p>Elementos de la ecuación <span class="font-mono text-violet-400">4x + 2 = 6x − 8</span>:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>Incógnita:</strong> la letra de valor desconocido (x).</li>
    <li><strong>Primer miembro:</strong> 4x + 2.</li>
    <li><strong>Segundo miembro:</strong> 6x − 8.</li>
    <li><strong>Términos:</strong> 4x, 2, 6x y −8.</li>
  </ul>
  <p>
    El <strong>grado de una ecuación</strong> es el mayor exponente de la incógnita.
  </p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>3x + 5 = 20 → primer grado</li>
    <li>x² + 4 = 20 → segundo grado</li>
  </ul>
  <p>
    En este curso trabajaremos sobre todo con <strong>ecuaciones de primer grado</strong>, aunque
    debemos saber reconocer las de segundo grado.
  </p>
</div>

<div id="solucion" class="lesson-box">
  <h2>Solución de una ecuación</h2>
  <p>
    La <strong>solución</strong> o <strong>soluciones</strong> de una ecuación son los valores de la
    incógnita que hacen cierta la igualdad.
  </p>
  <p>Ejemplo: <span class="font-mono text-violet-400">3x + 4 = 10</span></p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Comprobamos x = 2: 3 · 2 + 4 = 6 + 4 = 10 → 10 = 10 ✓</li>
    <li>La solución es x = 2.</li>
  </ul>
  <p>
    La <strong>comprobación</strong> de si un valor es solución o no consiste en sustituir la
    incógnita por ese valor y ver si se cumple la igualdad.
  </p>
</div>

<div id="comprobar" class="lesson-box">
  <h2>Comprobar si un valor es solución</h2>
  <p>Para comprobar si un valor dado es solución de una ecuación:</p>
  <ol>
    <li>Sustituimos la incógnita por el valor propuesto.</li>
    <li>Calculamos cada miembro.</li>
    <li>Si los dos resultados coinciden, es solución; si no, no lo es.</li>
  </ol>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Identificar los elementos</h3>
  <p>Para <span class="font-mono text-violet-400">3x − 2 = x + 6</span>:</p>
  <ol>
    <li>Incógnita: x</li>
    <li>Primer miembro: 3x − 2</li>
    <li>Segundo miembro: x + 6</li>
    <li>Grado: 1 (primer grado)</li>
  </ol>

  <h3>2) Comprobar si un valor es solución</h3>
  <p>¿Es x = 5 solución de <span class="font-mono text-violet-400">x + 8 = 13</span>?</p>
  <ol>
    <li>Sustituimos x por 5: 5 + 8 = 13</li>
    <li>13 = 13 ✓</li>
    <li>Sí, x = 5 es la solución.</li>
  </ol>

  <h3>3) Comprobar que un valor no es solución</h3>
  <p>¿Es x = 2 solución de <span class="font-mono text-violet-400">3x + 1 = 10</span>?</p>
  <ol>
    <li>Sustituimos: 3 · 2 + 1 = 6 + 1 = 7</li>
    <li>7 ≠ 10 ✗</li>
    <li>No es solución (la correcta es x = 3, pues 3 · 3 + 1 = 10).</li>
  </ol>

  <h3>4) Hallar la solución por tanteo</h3>
  <p>¿Qué valor de x cumple <span class="font-mono text-violet-400">x + 9 = 12</span>?</p>
  <ol>
    <li>Probamos x = 2: 2 + 9 = 11 (falta)</li>
    <li>Probamos x = 3: 3 + 9 = 12 ✓</li>
    <li>Solución: x = 3</li>
  </ol>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) Señala la incógnita, los miembros y el grado</h3>
  <ul class="exercise-list">
    <li>a) x + 5 = 11</li>
    <li>b) 2y = 12</li>
    <li>c) 3x − 1 = x + 7</li>
    <li>d) m + 4 = m + 2</li>
    <li>e) 5 − a = 2</li>
  </ul>

  <h3>2) Indica si el valor dado es solución</h3>
  <ul class="exercise-list">
    <li>a) x + 6 = 11; ¿x = 5?</li>
    <li>b) 3y − 4 = 8; ¿y = 4?</li>
    <li>c) 2m = 14; ¿m = 7?</li>
    <li>d) x + 2 = 9; ¿x = 6?</li>
    <li>e) 4a = 20; ¿a = 5?</li>
    <li>f) x − 3 = 5; ¿x = 8?</li>
  </ul>

  <h3>3) Averigua la solución por tanteo</h3>
  <ul class="exercise-list">
    <li>a) x + 5 = 9</li>
    <li>b) x − 2 = 7</li>
    <li>c) 3x = 21</li>
    <li>d) x + 10 = 16</li>
  </ul>
</div>