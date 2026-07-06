---
layout: ../../../layouts/Leccion.astro
title: "Ecuación ax² + c = 0"
unitId: 4
unitTitle: "Ecuaciones"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#forma">• Forma de la ecuación</a></li>
    <li><a href="#metodo">• Método de resolución por factorización</a></li>
    <li><a href="#problemas">• Problemas resueltos paso a paso</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="forma" class="lesson-box">
  <h2>Forma de la ecuación</h2>
  <p>
    Una ecuación cuadrática de la forma <span class="font-mono text-violet-400">ax² + c = 0</span> 
    no tiene término lineal (el coeficiente b = 0). Esto significa que solo aparece el término cuadrático y el término independiente.
  </p>
  <p>Características:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>No tiene término en x (no hay bx)</li>
    <li>Se resuelve despejando x² y luego aplicando raíz cuadrada</li>
    <li>Cuando c es negativo, se puede factorizar como diferencia de cuadrados</li>
  </ul>
</div>

<div id="metodo" class="lesson-box">
  <h2>Método de resolución por factorización</h2>
  <p>
    Cuando la ecuación ax² + c = 0 puede expresarse como una <strong>diferencia de cuadrados</strong>, 
    la factorizamos usando:
  </p>
  <p class="font-mono text-violet-400">
    a² - b² = (a + b)(a - b)
  </p>
  <p>Pasos:</p>
  <ol>
    <li>Pasar c al otro lado: ax² = -c</li>
    <li>Si es posible, expresar como diferencia de cuadrados</li>
    <li>Factorizar: (√a · x + √(-c))(√a · x - √(-c)) = 0</li>
    <li>Igualar cada factor a cero y resolver</li>
  </ol>
  <p>Ejemplo:</p>
  <p class="font-mono text-violet-400">x² - 9 = 0</p>
  <ol>
    <li>Reconocemos diferencia de cuadrados: x² - 3² = 0</li>
    <li>Factorizamos: (x + 3)(x - 3) = 0</li>
    <li>x + 3 = 0 → x = -3</li>
    <li>x - 3 = 0 → x = 3</li>
    <li>Soluciones: x = 3 y x = -3</li>
  </ol>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) x² - 25 = 0</h3>
  <ol>
    <li>Reconocemos diferencia de cuadrados: x² - 5² = 0</li>
    <li>Factorizamos: (x + 5)(x - 5) = 0</li>
    <li>x + 5 = 0 → x = -5</li>
    <li>x - 5 = 0 → x = 5</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 5 y x = -5</p>

  <h3>2) x² - 49 = 0</h3>
  <ol>
    <li>Reconocemos diferencia de cuadrados: x² - 7² = 0</li>
    <li>Factorizamos: (x + 7)(x - 7) = 0</li>
    <li>x + 7 = 0 → x = -7</li>
    <li>x - 7 = 0 → x = 7</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 7 y x = -7</p>

  <h3>3) 4x² - 16 = 0</h3>
  <ol>
    <li>Sacamos factor común 4: 4(x² - 4) = 0</li>
    <li>Diferencia de cuadrados: 4(x + 2)(x - 2) = 0</li>
    <li>x + 2 = 0 → x = -2</li>
    <li>x - 2 = 0 → x = 2</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 2 y x = -2</p>

  <h3>4) 9x² - 36 = 0</h3>
  <ol>
    <li>Sacamos factor común 9: 9(x² - 4) = 0</li>
    <li>Diferencia de cuadrados: 9(x + 2)(x - 2) = 0</li>
    <li>x + 2 = 0 → x = -2</li>
    <li>x - 2 = 0 → x = 2</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 2 y x = -2</p>

  <h3>5) 2x² - 50 = 0</h3>
  <ol>
    <li>Sacamos factor común 2: 2(x² - 25) = 0</li>
    <li>Diferencia de cuadrados: 2(x + 5)(x - 5) = 0</li>
    <li>x + 5 = 0 → x = -5</li>
    <li>x - 5 = 0 → x = 5</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 5 y x = -5</p>

  <h3>6) 3x² - 27 = 0</h3>
  <ol>
    <li>Sacamos factor común 3: 3(x² - 9) = 0</li>
    <li>Diferencia de cuadrados: 3(x + 3)(x - 3) = 0</li>
    <li>x + 3 = 0 → x = -3</li>
    <li>x - 3 = 0 → x = 3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 3 y x = -3</p>

  <h3>7) 25x² - 4 = 0</h3>
  <ol>
    <li>Reconocemos diferencia de cuadrados: (5x)² - 2² = 0</li>
    <li>Factorizamos: (5x + 2)(5x - 2) = 0</li>
    <li>5x + 2 = 0 → x = -2/5</li>
    <li>5x - 2 = 0 → x = 2/5</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 2/5 y x = -2/5</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>Resolver por factorización (diferencia de cuadrados):</h3>
  <ul class="exercise-list">
    <li>a) x² - 4 = 0</li>
    <li>b) x² - 36 = 0</li>
    <li>c) x² - 64 = 0</li>
    <li>d) x² - 100 = 0</li>
    <li>e) x² - 81 = 0</li>
    <li>f) 4x² - 1 = 0</li>
    <li>g) 9x² - 25 = 0</li>
    <li>h) 16x² - 49 = 0</li>
    <li>i) 2x² - 32 = 0</li>
    <li>j) 5x² - 45 = 0</li>
    <li>k) 3x² - 48 = 0</li>
    <li>l) 7x² - 63 = 0</li>
  </ul>
</div>
