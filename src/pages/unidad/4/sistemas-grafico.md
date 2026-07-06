---
layout: ../../../layouts/Leccion.astro
title: "Sistemas de ecuaciones - Método Gráfico"
unitId: 4
unitTitle: "Ecuaciones"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#metodo">• Método gráfico</a></li>
    <li><a href="#tipos">• Tipos de soluciones</a></li>
    <li><a href="#problemas">• Problemas resueltos</a></li>
    <li><a href="#ejercicios">• Ejercicios</a></li>
  </ul>
</div>

<div id="metodo" class="lesson-box">
  <h2>Método gráfico</h2>
  <p>
    Consiste en representar cada ecuación como una recta en el plano cartesiano.
    La <strong>solución del sistema</strong> es el punto donde ambas rectas se cortan (se intersecan).
  </p>
  <p><strong>Pasos:</strong></p>
  <ol>
    <li>Despejar y en ambas ecuaciones (forma y = mx + n)</li>
    <li>Armar una tabla de valores para cada recta (al menos 2 puntos)</li>
    <li>Graficar ambas rectas en el mismo plano cartesiano</li>
    <li>Identificar el punto de intersección: ese es la solución (x, y)</li>
  </ol>
</div>

<div id="tipos" class="lesson-box">
  <h2>Tipos de soluciones según el gráfico</h2>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li><strong>Sistema compatible determinado:</strong> las rectas se cortan en un solo punto → una única solución</li>
    <li><strong>Sistema compatible indeterminado:</strong> las rectas son coincidentes (la misma recta) → infinitas soluciones</li>
    <li><strong>Sistema incompatible:</strong> las rectas son paralelas (no se cortan) → no tiene solución</li>
  </ul>
  <p>¿Cómo identificarlos?</p>
  <ul class="list-disc pl-5 marker:text-red-500">
    <li>Si las pendientes son diferentes → se cortan → <strong>una solución</strong></li>
    <li>Si las pendientes son iguales y las ordenadas al origen son diferentes → paralelas → <strong>sin solución</strong></li>
    <li>Si las pendientes y las ordenadas al origen son iguales → misma recta → <strong>infinitas soluciones</strong></li>
  </ul>
</div>

<div id="problemas" class="lesson-box">
  <h2>Problemas resueltos paso a paso</h2>

  <h3>1) Sistema compatible determinado</h3>
  <p class="font-mono text-violet-400">x + y = 4<br>x - y = 2</p>
  <ol>
    <li>Despejamos y:
      <ul class="list-disc pl-5">
        <li>Recta 1: y = 4 - x</li>
        <li>Recta 2: y = x - 2</li>
      </ul>
    </li>
    <li>Tabla de valores:
      <ul class="list-disc pl-5">
        <li>Recta 1: si x = 0 → y = 4 ; si x = 4 → y = 0</li>
        <li>Recta 2: si x = 0 → y = -2 ; si x = 4 → y = 2</li>
      </ul>
    </li>
    <li>Al graficar, las rectas se cortan en el punto (3, 1)</li>
  </ol>
  <p>Verificación: 3 + 1 = 4 ✓ &nbsp;&nbsp; 3 - 1 = 2 ✓</p>
  <p class="font-mono text-violet-400">Solución: x = 3, y = 1</p>

  <h3>2) Sistema compatible determinado</h3>
  <p class="font-mono text-violet-400">2x + y = 6<br>x - y = 0</p>
  <ol>
    <li>Despejamos y:
      <ul class="list-disc pl-5">
        <li>Recta 1: y = 6 - 2x</li>
        <li>Recta 2: y = x</li>
      </ul>
    </li>
    <li>Tabla de valores:
      <ul class="list-disc pl-5">
        <li>Recta 1: si x = 0 → y = 6 ; si x = 3 → y = 0</li>
        <li>Recta 2: si x = 0 → y = 0 ; si x = 3 → y = 3</li>
      </ul>
    </li>
    <li>Las rectas se cortan en el punto (2, 2)</li>
  </ol>
  <p>Verificación: 2(2) + 2 = 6 ✓ &nbsp;&nbsp; 2 - 2 = 0 ✓</p>
  <p class="font-mono text-violet-400">Solución: x = 2, y = 2</p>

  <h3>3) Sistema compatible determinado</h3>
  <p class="font-mono text-violet-400">x + 2y = 8<br>3x - y = 3</p>
  <ol>
    <li>Despejamos y:
      <ul class="list-disc pl-5">
        <li>Recta 1: y = (8 - x)/2 = 4 - x/2</li>
        <li>Recta 2: y = 3x - 3</li>
      </ul>
    </li>
    <li>Tabla de valores:
      <ul class="list-disc pl-5">
        <li>Recta 1: si x = 0 → y = 4 ; si x = 8 → y = 0</li>
        <li>Recta 2: si x = 0 → y = -3 ; si x = 2 → y = 3</li>
      </ul>
    </li>
    <li>Las rectas se cortan en el punto (2, 3)</li>
  </ol>
  <p>Verificación: 2 + 2(3) = 8 ✓ &nbsp;&nbsp; 3(2) - 3 = 3 ✓</p>
  <p class="font-mono text-violet-400">Solución: x = 2, y = 3</p>

  <h3>4) Sistema incompatible (sin solución)</h3>
  <p class="font-mono text-violet-400">2x + y = 4<br>2x + y = 6</p>
  <ol>
    <li>Despejamos y:
      <ul class="list-disc pl-5">
        <li>Recta 1: y = -2x + 4</li>
        <li>Recta 2: y = -2x + 6</li>
      </ul>
    </li>
    <li>Ambas rectas tienen la misma pendiente (-2) pero diferente ordenada al origen</li>
    <li>Son rectas paralelas → no se cortan</li>
  </ol>
  <p class="font-mono text-violet-400">No tiene solución (sistema incompatible)</p>

  <h3>5) Sistema compatible indeterminado (infinitas soluciones)</h3>
  <p class="font-mono text-violet-400">x + y = 3<br>2x + 2y = 6</p>
  <ol>
    <li>Despejamos y:
      <ul class="list-disc pl-5">
        <li>Recta 1: y = 3 - x</li>
        <li>Recta 2: y = 3 - x (la misma recta)</li>
      </ul>
    </li>
    <li>La 2ª ecuación es el doble de la 1ª → son la misma recta</li>
    <li>Todos los puntos de la recta son solución</li>
  </ol>
  <p class="font-mono text-violet-400">Infinitas soluciones (sistema compatible indeterminado)</p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de práctica</h3>
  <h3>Resolver gráficamente (despejar y, armar tabla, graficar e identificar la solución):</h3>
  <ul class="exercise-list">
    <li>a) x + y = 5 &nbsp;;&nbsp; x - y = 1</li>
    <li>b) 2x + y = 8 &nbsp;;&nbsp; x - y = 1</li>
    <li>c) x + 3y = 9 &nbsp;;&nbsp; 2x - y = 4</li>
    <li>d) 3x + y = 7 &nbsp;;&nbsp; x + y = 5</li>
    <li>e) x + y = 4 &nbsp;;&nbsp; 2x + 2y = 8 (clasificar)</li>
    <li>f) x + y = 3 &nbsp;;&nbsp; x + y = 5 (clasificar)</li>
    <li>g) 2x - y = 1 &nbsp;;&nbsp; x + y = 5</li>
    <li>h) 4x + 2y = 10 &nbsp;;&nbsp; x - y = 1</li>
  </ul>
</div>
