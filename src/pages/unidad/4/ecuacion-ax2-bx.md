---
layout: ../../../layouts/Leccion.astro
title: "Ecuación ax² + bx = 0"
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
    Una ecuación de la forma <span class="font-mono text-violet-400">ax² + bx = 0</span>
    no tiene término independiente (c = 0). Solo aparecen el término cuadrático y el lineal.
  </p>
  <p>Características:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>No tiene término independiente</li>
    <li>Siempre tiene x = 0 como una solución</li>
    <li>Se resuelve extrayendo x como factor común</li>
  </ul>
</div>

<div id="metodo" class="lesson-box">
  <h2>Método de resolución por factorización</h2>
  <p>Extraemos <strong>x como factor común</strong> y luego igualamos cada factor a cero.</p>
  <p>Pasos:</p>
  <ol>
    <li>Identificar el factor común (al menos x)</li>
    <li>Extraer el factor común: x(ax + b) = 0</li>
    <li>Igualar cada factor a cero y resolver</li>
  </ol>
  <p>Ejemplo:</p>
  <p class="font-mono text-violet-400">x² + 5x = 0</p>
  <ol>
    <li>Factor común x: x(x + 5) = 0</li>
    <li>x = 0</li>
    <li>x + 5 = 0 → x = -5</li>
    <li>Soluciones: x = 0 y x = -5</li>
  </ol>
  <p><strong>Importante:</strong> Nunca dividas ambos lados por x, porque perderías la solución x = 0.</p>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) x² - 3x = 0</h3>
  <ol>
    <li>Factor común x: x(x - 3) = 0</li>
    <li>x = 0</li>
    <li>x - 3 = 0 → x = 3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 0 y x = 3</p>

  <h3>2) 2x² + 6x = 0</h3>
  <ol>
    <li>Factor común 2x: 2x(x + 3) = 0</li>
    <li>2x = 0 → x = 0</li>
    <li>x + 3 = 0 → x = -3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 0 y x = -3</p>

  <h3>3) 3x² - 12x = 0</h3>
  <ol>
    <li>Factor común 3x: 3x(x - 4) = 0</li>
    <li>3x = 0 → x = 0</li>
    <li>x - 4 = 0 → x = 4</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 0 y x = 4</p>

  <h3>4) 5x² + 10x = 0</h3>
  <ol>
    <li>Factor común 5x: 5x(x + 2) = 0</li>
    <li>5x = 0 → x = 0</li>
    <li>x + 2 = 0 → x = -2</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 0 y x = -2</p>

  <h3>5) -4x² + 8x = 0</h3>
  <ol>
    <li>Factor común -4x: -4x(x - 2) = 0</li>
    <li>-4x = 0 → x = 0</li>
    <li>x - 2 = 0 → x = 2</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 0 y x = 2</p>

  <h3>6) 6x² - 9x = 0</h3>
  <ol>
    <li>Factor común 3x: 3x(2x - 3) = 0</li>
    <li>3x = 0 → x = 0</li>
    <li>2x - 3 = 0 → x = 3/2</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 0 y x = 3/2</p>

  <h3>7) x² + 7x = 0</h3>
  <ol>
    <li>Factor común x: x(x + 7) = 0</li>
    <li>x = 0</li>
    <li>x + 7 = 0 → x = -7</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 0 y x = -7</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>
  <h3>Resolver por factorización (factor común):</h3>
  <ul class="exercise-list">
    <li>a) x² + 4x = 0</li>
    <li>b) x² - 6x = 0</li>
    <li>c) x² - 10x = 0</li>
    <li>d) 2x² + 8x = 0</li>
    <li>e) 3x² - 15x = 0</li>
    <li>f) 4x² + 20x = 0</li>
    <li>g) 5x² - 25x = 0</li>
    <li>h) -2x² + 14x = 0</li>
    <li>i) 6x² + 18x = 0</li>
    <li>j) 7x² - 21x = 0</li>
    <li>k) 8x² - 6x = 0</li>
    <li>l) 10x² + 4x = 0</li>
  </ul>
</div>
