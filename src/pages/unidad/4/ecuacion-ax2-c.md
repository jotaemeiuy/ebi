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
    <li><a href="#metodo">• Método: despejar x² y aplicar raíz</a></li>
    <li><a href="#sin-solucion">• ¿Cuándo no hay solución real?</a></li>
    <li><a href="#problemas">• Problemas resueltos paso a paso</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="forma" class="lesson-box">
  <h2>Forma de la ecuación</h2>
  <p>
    Una ecuación de la forma <span class="font-mono text-violet-400">ax² + c = 0</span>
    no tiene término lineal (el coeficiente b = 0). Solo aparecen el término cuadrático y el término independiente.
  </p>
  <p>Características:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>No tiene término en x (no hay bx).</li>
    <li>Se resuelve despejando <strong>x²</strong> y aplicando raíz cuadrada.</li>
    <li>Puede tener dos soluciones, una sola (x = 0) o ninguna solución real.</li>
  </ul>
</div>

<div id="metodo" class="lesson-box">
  <h2>Método: despejar x² y aplicar raíz</h2>
  <p>Partimos de la ecuación y despejamos x²:</p>
  <p class="font-mono text-violet-400">ax² + c = 0 → ax² = −c → x² = −c/a</p>
  <p>Luego aplicamos raíz cuadrada a ambos lados:</p>
  <blockquote>
    <p>x = ± √(−c/a)</p>
  </blockquote>
  <p>El signo <strong>±</strong> indica que hay dos soluciones: una positiva y una negativa.</p>
  <p>Pasos:</p>
  <ol>
    <li>Pasar el término independiente al otro miembro: ax² = −c.</li>
    <li>Dividir entre a: x² = −c/a.</li>
    <li>Aplicar raíz cuadrada: x = ±√(−c/a).</li>
    <li>Simplificar las soluciones.</li>
  </ol>
  <p>Ejemplo:</p>
  <p class="font-mono text-violet-400">x² − 9 = 0</p>
  <ol>
    <li>x² = 9</li>
    <li>x = ±√9</li>
    <li>x = 3 y x = −3</li>
  </ol>
</div>

<div id="sin-solucion" class="lesson-box">
  <h2>¿Cuándo no hay solución real?</h2>
  <p>
    Al despejar queda <span class="font-mono text-violet-400">x² = −c/a</span>.
    Si el número de la derecha es <strong>negativo</strong>, no existe ningún número real
    cuyo cuadrado sea negativo.
  </p>
  <p class="font-mono text-violet-400">x² = −4 → x = ±√(−4) → no tiene solución real</p>
  <p>En cambio, si queda <strong>x² = 0</strong>, la única solución es x = 0.</p>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) x² − 25 = 0</h3>
  <ol>
    <li>x² = 25</li>
    <li>x = ±√25</li>
    <li>x = 5 y x = −5</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 5 y x = −5</p>

  <h3>2) x² − 49 = 0</h3>
  <ol>
    <li>x² = 49</li>
    <li>x = ±√49</li>
    <li>x = 7 y x = −7</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 7 y x = −7</p>

  <h3>3) 4x² − 16 = 0</h3>
  <ol>
    <li>4x² = 16</li>
    <li>x² = 16/4 = 4</li>
    <li>x = ±√4</li>
    <li>x = 2 y x = −2</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 2 y x = −2</p>

  <h3>4) 9x² − 36 = 0</h3>
  <ol>
    <li>9x² = 36</li>
    <li>x² = 36/9 = 4</li>
    <li>x = ±√4</li>
    <li>x = 2 y x = −2</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 2 y x = −2</p>

  <h3>5) 2x² − 50 = 0</h3>
  <ol>
    <li>2x² = 50</li>
    <li>x² = 50/2 = 25</li>
    <li>x = ±√25</li>
    <li>x = 5 y x = −5</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 5 y x = −5</p>

  <h3>6) 3x² − 27 = 0</h3>
  <ol>
    <li>3x² = 27</li>
    <li>x² = 27/3 = 9</li>
    <li>x = ±√9</li>
    <li>x = 3 y x = −3</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 3 y x = −3</p>

  <h3>7) 25x² − 4 = 0</h3>
  <ol>
    <li>25x² = 4</li>
    <li>x² = 4/25</li>
    <li>x = ±√(4/25) = ±2/5</li>
    <li>x = 2/5 y x = −2/5</li>
  </ol>
  <p class="font-mono text-violet-400">Soluciones: x = 2/5 y x = −2/5</p>

  <h3>8) 2x² + 8 = 0</h3>
  <ol>
    <li>2x² = −8</li>
    <li>x² = −8/2 = −4</li>
    <li>x = ±√(−4)</li>
    <li>No existe raíz cuadrada real de un número negativo.</li>
  </ol>
  <p class="font-mono text-violet-400">No tiene soluciones reales</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>
  <p>Resolver despejando x² y aplicando raíz cuadrada:</p>
  <ul class="exercise-list">
    <li>a) x² − 4 = 0</li>
    <li>b) x² − 36 = 0</li>
    <li>c) x² − 64 = 0</li>
    <li>d) x² − 100 = 0</li>
    <li>e) x² − 81 = 0</li>
    <li>f) 4x² − 1 = 0</li>
    <li>g) 9x² − 25 = 0</li>
    <li>h) 16x² − 49 = 0</li>
    <li>i) 2x² − 32 = 0</li>
    <li>j) 5x² − 45 = 0</li>
    <li>k) 3x² − 48 = 0</li>
    <li>l) 7x² − 63 = 0</li>
    <li>m) x² + 16 = 0</li>
    <li>n) 2x² + 18 = 0</li>
    <li>o) 3x² = 0</li>
  </ul>
</div>
