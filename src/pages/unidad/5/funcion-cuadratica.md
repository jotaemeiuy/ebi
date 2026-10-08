---
layout: ../../../layouts/Leccion.astro
title: "Función cuadrática"
unitId: 5
unitTitle: "Funciones"
prev: /unidad/5
next: /unidad/5/representacion-grafica
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#forma">• Forma de la función cuadrática</a></li>
    <li><a href="#concavidad">• Concavidad: ¿alegre o triste?</a></li>
    <li><a href="#puntos">• Representación gráfica por puntos</a></li>
    <li><a href="#elementos">• Elementos de la parábola</a></li>
    <li><a href="#problemas">• Problemas resueltos paso a paso</a></li>
    <li><a href="#ejercicios">• Ejercicios de práctica</a></li>
  </ul>
</div>

<div id="forma" class="lesson-box">
  <h2>Forma de la función cuadrática</h2>
  <p>
    Una <strong>función cuadrática</strong> es una función de la forma
    <span class="font-mono text-violet-400">f(x) = ax² + bx + c</span>,
    con <strong>a ≠ 0</strong>.
  </p>
  <p>Los números a, b y c se llaman <strong>coeficientes</strong>:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>a</strong>: coeficiente cuadrático (el que acompaña a x², nunca puede ser 0)</li>
    <li><strong>b</strong>: coeficiente lineal (el que acompaña a x, puede ser 0)</li>
    <li><strong>c</strong>: término independiente (puede ser 0)</li>
  </ul>
  <p>Ejemplos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>f(x) = x² + 2x − 3 → a = 1, b = 2, c = −3</li>
    <li>f(x) = −2x² + 4x + 6 → a = −2, b = 4, c = 6</li>
    <li>f(x) = x² − 9 → a = 1, b = 0, c = −9</li>
    <li>f(x) = 7x² − 14x → a = 7, b = −14, c = 0</li>
    <li>f(x) = −x² → a = −1, b = 0, c = 0</li>
  </ul>
  <p>Su representación gráfica es una curva llamada <strong>parábola</strong>. Puede estar ubicada en cualquier lugar del plano.</p>
  <p>Dominio de toda función cuadrática: <span class="font-mono text-violet-400">Dom(f) = R</span> (se puede calcular f(x) para cualquier x).</p>
</div>

<div id="concavidad" class="lesson-box">
  <h2>Concavidad: ¿alegre o triste?</h2>
  <p>
    Las parábolas se diferencian fundamentalmente por el <strong>signo de a</strong>,
    el coeficiente del término de exponente dos.
  </p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>Si a &gt; 0:</strong> la parábola se abre hacia arriba, presenta <strong>concavidad positiva</strong> (curva “alegre” 🙂).</li>
    <li><strong>Si a &lt; 0:</strong> la parábola se abre hacia abajo, presenta <strong>concavidad negativa</strong> (curva “triste” 🙁).</li>
  </ul>
  <p>Ejemplos rápidos:</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>f(x) = x² − x − 6 → a = 1 &gt; 0 → abre hacia arriba</li>
    <li>f(x) = −2x² + 4x + 6 → a = −2 &lt; 0 → abre hacia abajo</li>
    <li>f(x) = 2x² − 6x − 20 → a = 2 &gt; 0 → abre hacia arriba</li>
    <li>f(x) = −3x² + 12 → a = −3 &lt; 0 → abre hacia abajo</li>
  </ul>
  <p><strong>Truco:</strong> antes de graficar, mirá el signo de a. Ya sabés si la “boca” va para arriba o para abajo.</p>
</div>

<div id="puntos" class="lesson-box">
  <h2>Representación gráfica por puntos</h2>
  <p>Para hacer una representación por puntos, se le dan varios valores a la variable x y se calculan los correspondientes valores de la función. Los datos se llevan como puntos a un sistema de ejes y luego se unen con una curva.</p>
  <p>Ejemplo guía:</p>
  <p class="font-mono text-violet-400">f: f(x) = x² + 2x − 3</p>
  <ol>
    <li>Elegimos valores de x: −5, −3, −1, 0, 1, 3</li>
    <li>Calculamos:
      <ul class="list-disc pl-5">
        <li>f(−5) = (−5)² + 2(−5) − 3 = 25 − 10 − 3 = 12</li>
        <li>f(−3) = (−3)² + 2(−3) − 3 = 9 − 6 − 3 = 0</li>
        <li>f(−1) = (−1)² + 2(−1) − 3 = 1 − 2 − 3 = −4</li>
        <li>f(0) = 0² + 2·0 − 3 = −3</li>
        <li>f(1) = 1² + 2·1 − 3 = 0</li>
        <li>f(3) = 3² + 2·3 − 3 = 9 + 6 − 3 = 12</li>
      </ul>
    </li>
    <li>Tabla de valores:
      <ul class="list-disc pl-5">
        <li>(−5, 12) ; (−3, 0) ; (−1, −4) ; (0, −3) ; (1, 0) ; (3, 12)</li>
      </ul>
    </li>
    <li>Ubicamos los puntos en los ejes y los unimos con una curva suave (no con rectas). Obtenemos una parábola que abre hacia arriba.</li>
  </ol>
  <p>Recorrido de este ejemplo: <span class="font-mono text-violet-400">Rec(f) = [−4, +∞)</span> (el valor más bajo que toma es −4).</p>
  <p>Es conveniente hacer la representación por puntos al principio, para conocer la forma de la figura y los elementos de una parábola (ver punto siguiente).</p>
</div>

<div id="elementos" class="lesson-box">
  <h2>Elementos de la parábola</h2>
  <p>Vamos a leerlos sobre un ejemplo dibujado:</p>
  <p class="font-mono text-violet-400">f: f(x) = −2x² + 4x + 6</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>Ceros (o raíces):</strong> abscisas donde la gráfica corta al eje horizontal (eje Ox). Aquí: <strong>x = −1 y x = 3</strong>.</li>
    <li><strong>Corte con Oy (ordenada en el origen):</strong> punto donde corta al eje vertical. Se calcula con f(0). Aquí: <strong>(0, 6)</strong>.</li>
    <li><strong>Vértice (extremo relativo):</strong> el punto más alto (máximo) o más bajo (mínimo) de la curva. Aquí: <strong>(1, 8)</strong>, es un máximo.</li>
    <li><strong>Eje de simetría:</strong> recta vertical que pasa por el vértice. Aquí: <strong>x = 1</strong>. La parábola es simétrica respecto a esa recta.</li>
    <li><strong>Signo:</strong> dónde la función es positiva (+) o negativa (−). Aquí: negativa antes de −1, positiva entre −1 y 3, negativa después de 3.
      <p class="font-mono text-violet-400">Signo(f): −−− | +++ | −−− con ceros en −1 y 3</p>
    </li>
    <li><strong>Crecimiento:</strong> es <strong>creciente en (−∞, 1)</strong> y <strong>decreciente en (1, +∞)</strong>.</li>
    <li><strong>Concavidad:</strong> a = −2 &lt; 0 → <strong>concavidad negativa</strong>.</li>
  </ul>
  <p><strong>Nota:</strong> el vértice también se llama extremo relativo. Puede ser un máximo (si a &lt; 0) o un mínimo (si a &gt; 0).</p>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Identificar a, b, c y concavidad</h3>
  <p class="font-mono text-violet-400">f(x) = −3x² − 12x − 9</p>
  <ol>
    <li>a = −3, b = −12, c = −9</li>
    <li>a &lt; 0 → abre hacia abajo, concavidad negativa</li>
  </ol>

  <h3>2) Tabla de valores</h3>
  <p class="font-mono text-violet-400">f(x) = x² − 4</p>
  <ol>
    <li>Elegimos x = −3, −2, 0, 2, 3</li>
    <li>f(−3) = 9 − 4 = 5 ; f(−2) = 4 − 4 = 0 ; f(0) = −4 ; f(2) = 0 ; f(3) = 5</li>
    <li>Puntos: (−3,5), (−2,0), (0,−4), (2,0), (3,5). Al unirlos se ve la parábola con mínimo en (0,−4).</li>
  </ol>

  <h3>3) Leer elementos de una gráfica dada</h3>
  <p>Supongamos que la gráfica corta a Ox en x = −2 y x = 2, corta a Oy en (0, 4) y tiene vértice en (0, 4) abriendo hacia abajo.</p>
  <ol>
    <li>Ceros: {−2, 2}</li>
    <li>Corte con Oy: (0, 4)</li>
    <li>Vértice: (0, 4), es máximo</li>
    <li>Eje de simetría: x = 0</li>
    <li>Concavidad negativa (a &lt; 0)</li>
  </ol>

  <h3>4) ¿Cuál función puede ser? (juego del PDF)</h3>
  <p>La gráfica abre hacia abajo (triste) y no corta al eje Oy en −4 sino en 0 (pasa cerca del origen, vértice en x = −2, por debajo del eje).</p>
  <p class="font-mono text-violet-400">Opciones: h(x) = −x² − ax ; h(x) = −x² + ax − 4 ; h(x) = x² + ax − 4</p>
  <ol>
    <li>Descartamos h(x) = x² + ax − 4 porque a = 1 &gt; 0 abriría hacia arriba.</li>
    <li>Descartamos h(x) = −x² + ax − 4 porque su corte con Oy sería (0, −4), pero la gráfica corta más arriba.</li>
    <li>Queda <strong>h(x) = −x² − ax</strong> (corte en (0,0), compatible con el dibujo).</li>
  </ol>

  <h3>5) Verdadero o falso con justificación</h3>
  <p>Sean f y g dos cuadráticas con a &gt; 0 en ambas (las dos abren hacia arriba). f corta a Ox en dos valores positivos, g toca a Ox en un solo punto bajo.</p>
  <ol>
    <li>“a &gt; 0” → <strong>V</strong>, ambas son “alegres”.</li>
    <li>“g(x) = 0 tiene una única solución” → <strong>V</strong>, toca al eje en un solo punto (cero doble).</li>
    <li>“f(x) = 0 tiene dos soluciones positivas” → <strong>V</strong>, los dos cortes están a la derecha del 0.</li>
  </ol>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>

  <h3>1) Identificá a, b, c y la concavidad</h3>
  <ul class="exercise-list">
    <li>a) f(x) = x² + x − 6</li>
    <li>b) f(x) = −3x² + 12</li>
    <li>c) f(x) = 7x² − 14x</li>
    <li>d) f(x) = −x² + 4x</li>
    <li>e) f(x) = x² + 1</li>
    <li>f) f(x) = −x²</li>
  </ul>

  <h3>2) Completá la tabla y ubicá los puntos (no unas con rectas)</h3>
  <ul class="exercise-list">
    <li>a) f(x) = x² − 9 con x = −4, −3, 0, 3, 4</li>
    <li>b) f(x) = −x² + 2x con x = −1, 0, 1, 2, 3</li>
  </ul>

  <h3>3) ¿Alegre o triste? Uní cada función con su tipo</h3>
  <ul class="exercise-list">
    <li>a) f(x) = 2x² − 6x − 20</li>
    <li>b) f(x) = −x² − 2x − 1</li>
    <li>c) f(x) = x² + 4x + 4</li>
    <li>d) f(x) = −2x² + 8x</li>
  </ul>

  <h3>4) Desafío “¿Cuál función será?”</h3>
  <p>Dibujá en tu cuaderno una parábola triste que corte a Oy en (0, −2) y a Ox en un solo punto a la derecha del 0. Luego elegí cuál de estas puede ser: f(x) = −x² + 4x − 4 ; g(x) = x² − 4 ; h(x) = −x² − 4. Justificá por concavidad y corte con Oy.</p>

  <h3>5) “¿Será cierto?” Respondé V o F justificando</h3>
  <ul class="exercise-list">
    <li>a) Si a &gt; 0, la función tiene mínimo.</li>
    <li>b) Toda cuadrática corta al eje Ox.</li>
    <li>c) El corte con Oy siempre es (0, c).</li>
    <li>d) El vértice siempre está sobre el eje de simetría.</li>
  </ul>
  <details>
    <summary class="cursor-pointer text-violet-300 hover:text-violet-200">Ver respuestas orientativas (hacé clic)</summary>
    <ul class="list-disc pl-5 mt-3">
      <li>1) a) 1, 1, −6, arriba ; b) −3, 0, 12, abajo ; c) 7, −14, 0, arriba ; d) −1, 4, 0, abajo ; e) 1, 0, 1, arriba ; f) −1, 0, 0, abajo</li>
      <li>4) Puede ser f(x) = −x² + 4x − 4 (triste y f(0) = −4... ojo: no da −2, ninguna es perfecta: hay que discutirlo en clase).</li>
      <li>5) a) V ; b) F (puede no cortar, ej. x²+1) ; c) V ; d) V</li>
    </ul>
  </details>
</div>
