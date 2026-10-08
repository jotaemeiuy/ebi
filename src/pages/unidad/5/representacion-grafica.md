---
layout: ../../../layouts/Leccion.astro
title: "Representación gráfica"
unitId: 5
unitTitle: "Funciones"
prev: /unidad/5/funcion-cuadratica
next: /unidad/5
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#idea">• Idea del E.A. y R.G.</a></li>
    <li><a href="#ceros">• Ceros o raíces</a></li>
    <li><a href="#vertice">• Vértice</a></li>
    <li><a href="#corte">• Corte con Oy</a></li>
    <li><a href="#signo">• Signo de la función</a></li>
    <li><a href="#grafica">• Representación gráfica de f</a></li>
    <li><a href="#otros">• Otros elementos: eje, crecimiento, concavidad</a></li>
    <li><a href="#problemas">• Problemas resueltos paso a paso</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="idea" class="lesson-box">
  <h2>Idea del E.A. y R.G.</h2>
  <p>
    <strong>E.A. y R.G.</strong> significa <strong>Estudio Analítico y Representación Gráfica</strong>.
    Para graficar una cuadrática sin hacer una tabla enorme, estudiamos 4 datos y los llevamos a los ejes,
    para luego unirlos con un trazo curvo y continuo.
  </p>
  <p>Los 4 datos son:</p>
  <ol>
    <li><strong>Ceros</strong> (cortes con Ox)</li>
    <li><strong>Vértice</strong> (máximo o mínimo)</li>
    <li><strong>Corte con Oy</strong> (ordenada en el origen)</li>
    <li><strong>Signo</strong> (dónde va por arriba o por debajo del eje)</li>
  </ol>
  <p>Ejemplo hilo conductor de esta lección (el del libro, p.92):</p>
  <p class="font-mono text-violet-400">f: f(x) = x² − x − 6</p>
</div>

<div id="ceros" class="lesson-box">
  <h2>Ceros o raíces</h2>
  <p>
    Las abscisas de los puntos de corte con el eje horizontal (eje Ox) se llaman <strong>ceros</strong> de la función.
    Hallar los ceros de <span class="font-mono text-violet-400">f(x) = ax² + bx + c</span> implica resolver
    <span class="font-mono text-violet-400">ax² + bx + c = 0</span> con la fórmula de resolución (Bhaskara).
  </p>
  <p>En nuestro ejemplo: a = 1, b = −1, c = −6</p>
  <p class="font-mono text-violet-400">x = [−(−1) ± √((−1)² − 4·1·(−6))] / 2·1 = [1 ± √(1 + 24)] / 2 = [1 ± √25] / 2 = [1 ± 5] / 2</p>
  <ol>
    <li>x1 = (1 + 5) / 2 = 3</li>
    <li>x2 = (1 − 5) / 2 = −2</li>
  </ol>
  <p class="font-mono text-violet-400">Ceros = {−2, 3}</p>
  <p>En los ejes, marcamos los puntos (−2, 0) y (3, 0).</p>
</div>

<div id="vertice" class="lesson-box">
  <h2>Vértice</h2>
  <p>
    Al vértice también se le llama <strong>extremo relativo</strong>. Es el <strong>máximo o mínimo</strong> de la curva.
  </p>
  <p>Hay dos formas de hallar la abscisa del vértice:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>A partir de los ceros: está exactamente en la mitad entre los ceros: <span class="font-mono text-violet-400">x(vértice) = (x1 + x2) / 2</span></li>
    <li>A partir de los coeficientes: <span class="font-mono text-violet-400">x(vértice) = −b / 2a</span></li>
  </ul>
  <p>Para la ordenada, se sustituye ese valor en la función y se hacen cuentas.</p>
  <p>En nuestro ejemplo:</p>
  <ol>
    <li>x(vértice) = (−2 + 3) / 2 = 1/2 (también: −(−1) / 2·1 = 1/2)</li>
    <li>f(1/2) = (1/2)² − (1/2) − 6 = 1/4 − 1/2 − 6 = −25/4</li>
  </ol>
  <p class="font-mono text-violet-400">Vértice = (1/2, −25/4). Como a &gt; 0, es un mínimo.</p>
</div>

<div id="corte" class="lesson-box">
  <h2>Corte con Oy</h2>
  <p>
    Para calcular el punto de corte con el eje vertical (ordenada en el origen),
    se sustituye la x por cero y se hacen las cuentas.
  </p>
  <p>En el ejemplo: f(0) = 0² − 0 − 6 = −6</p>
  <p class="font-mono text-violet-400">Corte con Oy: (0, −6)</p>
  <p><strong>Nota útil:</strong> en toda cuadrática f(x) = ax² + bx + c, el corte con Oy es siempre (0, c).</p>
</div>

<div id="signo" class="lesson-box">
  <h2>Signo de la función</h2>
  <p>Sobre el eje Ox ubicamos los ceros. Regla práctica:</p>
  <p><strong>El signo que va a la derecha de los ceros es el signo de a</strong> (coeficiente de x²).</p>
  <p>En el ejemplo (a = 1 &gt; 0):</p>
  <p class="font-mono text-violet-400">Signo(x² − x − 6): ++++ | −−−− | ++++ con ceros en −2 y 3</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Si los valores son positivos, la gráfica va <strong>por encima</strong> del eje horizontal.</li>
    <li>Si son negativos, va <strong>por debajo</strong>.</li>
    <li>En el sistema de coordenadas se tacha la zona de signo contrario, porque por allí no pasa la gráfica.</li>
  </ul>
</div>

<div id="grafica" class="lesson-box">
  <h2>Representación gráfica de f</h2>
  <p>
    Con estos cuatro primeros datos ya se puede graficar con mucha exactitud.
    Se dibuja una curva suave que pasa por los ceros, llega hasta el vértice (en este caso un mínimo)
    y pasa por el punto de corte con el eje vertical.
  </p>
  <p>Pasos en el ejemplo:</p>
  <ol>
    <li>Marcá (−2, 0) y (3, 0)</li>
    <li>Marcá el vértice (1/2, −25/4) ≈ (0.5, −6.25)</li>
    <li>Marcá el corte (0, −6)</li>
    <li>Respetá el signo: por encima fuera del intervalo [−2, 3], por debajo dentro</li>
    <li>Uní con parábola que abre hacia arriba (a &gt; 0)</li>
  </ol>
</div>

<div id="otros" class="lesson-box">
  <h2>Otros elementos: eje, crecimiento, concavidad</h2>
  <p>Observando la gráfica ya hecha, indicamos con facilidad:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>Eje de simetría:</strong> recta vertical por el vértice: <span class="font-mono text-violet-400">x = 1/2</span>. En general: <span class="font-mono text-violet-400">x = −b / 2a</span>.</li>
    <li><strong>Crecimiento - decrecimiento</strong> (intervalos reales):
      <span class="font-mono text-violet-400">Decreciente en (−∞, 1/2)</span>,
      <span class="font-mono text-violet-400">Creciente en (1/2, +∞)</span>.
    </li>
    <li><strong>Concavidad:</strong> positiva (a = 1 &gt; 0).</li>
  </ul>
  <p>Regla memoria: a la izquierda del vértice baja (si abre arriba), a la derecha sube. Si abre abajo, al revés.</p>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) E.A. y R.G. completo: f(x) = x² + x − 6</h3>
  <ol>
    <li>Ceros: x² + x − 6 = 0 → x = [−1 ± √(1 + 24)]/2 = [−1 ± 5]/2 → x1 = 2, x2 = −3. Ceros = {−3, 2}</li>
    <li>Vértice: xv = (−3 + 2)/2 = −1/2 ; f(−1/2) = 1/4 − 1/2 − 6 = −25/4. Vértice (−1/2, −25/4), mínimo.</li>
    <li>Corte Oy: f(0) = −6 → (0, −6)</li>
    <li>Signo (a &gt; 0): ++++ | −−−− | ++++ con ceros en −3 y 2</li>
    <li>Eje: x = −1/2. Decreciente en (−∞, −1/2), creciente en (−1/2, +∞). Concavidad positiva.</li>
  </ol>

  <h3>2) E.A. y R.G. con a negativo: f(x) = −x² + 4x</h3>
  <ol>
    <li>Ceros: −x² + 4x = 0 → x(−x + 4) = 0 → x = 0 o x = 4. Ceros = {0, 4}</li>
    <li>Vértice: xv = (0 + 4)/2 = 2 ; f(2) = −4 + 8 = 4. Vértice (2, 4), máximo.</li>
    <li>Corte Oy: f(0) = 0 → (0, 0) (pasa por el origen)</li>
    <li>Signo (a &lt; 0, a la derecha va −): −−−− | ++++ | −−−− con ceros en 0 y 4</li>
    <li>Eje: x = 2. Creciente en (−∞, 2), decreciente en (2, +∞). Concavidad negativa.</li>
  </ol>

  <h3>3) Caso con cero doble: f(x) = x² + 4x + 4</h3>
  <ol>
    <li>Ceros: x² + 4x + 4 = 0 → x = [−4 ± √(16 − 16)]/2 = −2. Cero doble = {−2} (toca al eje, no lo cruza).</li>
    <li>Vértice: xv = −b/2a = −4/2 = −2 ; f(−2) = 0. Vértice (−2, 0).</li>
    <li>Corte Oy: (0, 4)</li>
    <li>Signo (a &gt; 0): ++++ || ++++ con doble marca en −2 (no hay cambio de signo).</li>
    <li>Gráfica: parábola que apoya su mínimo justo sobre Ox en x = −2.</li>
  </ol>

  <h3>4) Caso sin ceros: f(x) = x² + 1</h3>
  <ol>
    <li>Ceros: x² + 1 = 0 → x² = −1 → sin solución real. Ceros = { } (no corta ni toca a Ox).</li>
    <li>Vértice: xv = 0 ; f(0) = 1. Vértice (0, 1), mínimo.</li>
    <li>Corte Oy: (0, 1)</li>
    <li>Signo (a &gt; 0): siempre ++++</li>
  </ol>

  <h3>5) Hallar b y c mirando la gráfica (p.99 del libro)</h3>
  <p>Dada f(x) = x² + bx + c cuya gráfica corta a Oy en 4 y toca a Ox en un único punto positivo.</p>
  <ol>
    <li>Corte Oy: f(0) = c = 4 → c = 4. Queda f(x) = x² + bx + 4.</li>
    <li>Toca en un único punto → discriminante cero: b² − 4·1·4 = 0 → b² = 16 → b = 4 o b = −4.</li>
    <li>Como el cero debe ser positivo (se ve a la derecha), probamos: con b = −4, f(x) = x² − 4x + 4 = (x−2)², cero en x = 2 ✓.</li>
  </ol>
  <p class="font-mono text-violet-400">Solución: b = −4, f(x) = x² − 4x + 4</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) E.A. y R.G. completo (como el ej. 81 del libro)</h3>
  <p>Para cada una: a) ceros, b) vértice, c) corte Oy, d) signo, e) bosquejo, f) eje, crecimiento, concavidad.</p>
  <ul class="exercise-list">
    <li>a) f(x) = −3x² − 12x − 9</li>
    <li>b) f(x) = 2x² − 6x − 20</li>
    <li>c) f(x) = x² + x − 6</li>
    <li>d) f(x) = −3x² + 12</li>
    <li>e) f(x) = x² + 4x + 4</li>
    <li>f) f(x) = x² + x + 1</li>
    <li>g) f(x) = −x² + 4x</li>
    <li>h) f(x) = −x²</li>
  </ul>

  <h3>2) Lectura de gráficos (como el ej. 82)</h3>
  <p>En tu cuaderno, para estas 4 descripciones indicá: ceros, f(0), signo, abscisa del vértice, concavidad, crecimiento:</p>
  <ul class="list-disc pl-5">
    <li>A) Parábola triste, corta Ox en −2 y 2, vértice (0, 4).</li>
    <li>B) Parábola alegre, vértice abajo con xv = −1, corta Oy en 1.</li>
    <li>C) Parábola triste, apoya su máximo en (3, 0) sobre Ox.</li>
    <li>D) Parábola alegre, corta Ox en −1 y 3, mínimo en y = −1.</li>
  </ul>

  <h3>3) Adiviná la fórmula (observando la gráfica)</h3>
  <ul class="exercise-list">
    <li>a) Triste, vértice (2, 2), f(0) = 0. ¿Cuál es a y c si f(x) = ax² + c?</li>
    <li>b) Alegre, cero doble en x = 2, f(0) = 4. Hallá b y c si f(x) = x² + bx + c.</li>
    <li>c) El signo es −−− | +++ | −−− con ceros −1 y 3 y coeficiente principal −5. Hallá f.</li>
  </ul>
  <details>
    <summary class="cursor-pointer text-violet-300 hover:text-violet-200">Ver pistas y soluciones (hacé clic)</summary>
    <ul class="list-disc pl-5 mt-3">
      <li>1a) Ceros {−3, −1}, vértice (−2, 3) máximo, corte (0, −9), eje x = −2.</li>
      <li>1b) Ceros {−2, 5}, vértice (1.5, −24.5) mínimo, corte (0, −20), eje x = 3/2.</li>
      <li>1e) Cero doble {−2}, vértice (−2, 0), corte (0, 4).</li>
      <li>1f) Sin ceros reales, vértice (−0.5, 0.75), siempre positiva.</li>
      <li>3a) c = 0, a &lt; 0. 3b) c = 4, b = −4. 3c) f(x) = −5(x+1)(x−3) = −5x² + 10x + 15.</li>
    </ul>
  </details>
</div>
