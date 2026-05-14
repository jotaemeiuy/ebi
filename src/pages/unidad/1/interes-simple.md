---
layout: ../../../layouts/Leccion.astro
title: "Interés simple"
unitId: 1
unitTitle: "Números y Finanzas"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li><a href="#concepto">• Concepto de interés simple</a></li>
    <li><a href="#formula">• Fórmula del interés</a></li>
    <li><a href="#monto">• Monto final</a></li>
    <li><a href="#despejes">• Despejes</a></li>
    <li><a href="#problemas">• Problemas resueltos</a></li>
    <li><a href="#ejercicios">• Ejercicios</a></li>
  </ul>
</div>

<div id="concepto" class="lesson-box">
  <h2>Concepto de interés simple</h2>

  <p>
    El interés simple es una forma de calcular intereses donde los intereses
    generados no se suman al capital inicial.
  </p>

  <p>
    El interés siempre se calcula sobre el capital original.
  </p>

  <p>
    Se utiliza habitualmente en préstamos cortos, multas, recargos y algunas
    operaciones financieras simples.
  </p>
</div>

### Fórmula del interés simple

<div id="formula" class="lesson-box">
  <p>La fórmula principal es:</p>

  <p class="font-mono text-violet-400">
    I = C × i × t
  </p>

  <ul class="list-disc pl-5 marker:text-red-500">
    <li>I → interés generado</li>
    <li>C → capital inicial</li>
    <li>i → tasa de interés</li>
    <li>t → tiempo</li>
  </ul>

  <p>Ejemplo:</p>

  <p>
    Un capital de $1000 se presta al 10% anual durante 2 años.
  </p>

  <p class="font-mono text-violet-400">
    I = 1000 × 0,10 × 2 = 200
  </p>

  <p>
    El interés generado es de <strong>$200</strong>.
  </p>
</div>

### Monto final

<div id="monto" class="lesson-box">
  <p>
    El monto final es la suma del capital más el interés generado.
  </p>

  <p class="font-mono text-violet-400">
    M = C + I
  </p>

  <p>
    También puede escribirse:
  </p>

  <p class="font-mono text-violet-400">
    M = C × (1 + i × t)
  </p>

  <p>Ejemplo:</p>

  <p class="font-mono text-violet-400">
    M = 1000 × (1 + 0,10 × 2)
  </p>

  <p class="font-mono text-violet-400">
    M = 1000 × 1,20 = 1200
  </p>

  <p>
    El monto final es de <strong>$1200</strong>.
  </p>
</div>

### Despejes importantes

<div id="despejes" class="lesson-box">
  <p>
    A veces necesitamos calcular la tasa o el tiempo.
  </p>

  <p class="font-mono text-violet-400">
    i = I / (C × t)
  </p>

  <p class="font-mono text-violet-400">
    t = I / (C × i)
  </p>

  <p>Ejemplo:</p>

  <p>
    Si un capital de $500 genera $100 de interés al 5%, ¿durante cuánto tiempo?
  </p>

  <p class="font-mono text-violet-400">
    t = 100 / (500 × 0,05)
  </p>

  <p class="font-mono text-violet-400">
    t = 100 / 25 = 4
  </p>

  <p>
    El tiempo es de <strong>4 años</strong>.
  </p>
</div>

## Problemas resueltos

### 1) Calcular interés

<div id="problemas" class="lesson-box">
  <p>
    Calcular el interés producido por $2000 al 8% anual durante 3 años.
  </p>

  <p class="font-mono text-violet-400">
    I = 2000 × 0,08 × 3
  </p>

  <p class="font-mono text-violet-400">
    I = 480
  </p>

  <p>
    El interés generado es de <strong>$480</strong>.
  </p>
</div>

### 2) Calcular monto final

<div class="lesson-box">
  <p>
    Un capital de $1500 se coloca al 12% anual durante 2 años.
  </p>

  <p class="font-mono text-violet-400">
    I = 1500 × 0,12 × 2 = 360
  </p>

  <p class="font-mono text-violet-400">
    M = 1500 + 360 = 1860
  </p>

  <p>
    El monto final es de <strong>$1860</strong>.
  </p>
</div>

### 3) Calcular tasa

<div class="lesson-box">
  <p>
    Un capital de $1000 produce $150 en 3 años.
    ¿Cuál fue la tasa anual?
  </p>

  <p class="font-mono text-violet-400">
    i = 150 / (1000 × 3)
  </p>

  <p class="font-mono text-violet-400">
    i = 0,05 = 5%
  </p>
</div>

### 4) Calcular tiempo

<div class="lesson-box">
  <p>
    ¿Durante cuánto tiempo debe invertirse $4000 al 6%
    para obtener $720 de interés?
  </p>

  <p class="font-mono text-violet-400">
    t = 720 / (4000 × 0,06)
  </p>

  <p class="font-mono text-violet-400">
    t = 720 / 240 = 3
  </p>

  <p>
    El tiempo es de <strong>3 años</strong>.
  </p>
</div>

<div id="ejercicios" class="exercise-box">
  <h3>Ejercicios de aplicación</h3>

  <h3>1) Calcular interés</h3>

  <ul class="exercise-list">
    <li>a) $1000 al 5% durante 2 años</li>
    <li>b) $3500 al 12% durante 4 años</li>
    <li>c) $800 al 7% durante 6 años</li>
    <li>d) $12000 al 3% durante 5 años</li>
  </ul>

  <h3>2) Calcular monto final</h3>

  <ul class="exercise-list">
    <li>a) $5000 al 10% durante 2 años</li>
    <li>b) $2400 al 8% durante 3 años</li>
    <li>c) $900 al 15% durante 1 año</li>
  </ul>

  <h3>3) Calcular tasa</h3>

  <ul class="exercise-list">
    <li>a) $1000 producen $200 en 4 años</li>
    <li>b) $3000 producen $540 en 3 años</li>
    <li>c) $1500 producen $90 en 2 años</li>
  </ul>

  <h3>4) Calcular tiempo</h3>

  <ul class="exercise-list">
    <li>a) $2000 al 5% generan $300</li>
    <li>b) $4000 al 8% generan $960</li>
    <li>c) $1200 al 10% generan $240</li>
  </ul>

  <h3>5) Problemas aplicados</h3>

  <ul class="exercise-list">
    <li>
      a) Una persona pide un préstamo de $15000 al 9% anual durante 2 años.
      ¿Cuánto interés pagará?
    </li>

    <li>
      b) Un capital de $8000 se invierte al 6% anual durante 5 años.
      ¿Cuál será el monto final?
    </li>

    <li>
      c) ¿Qué capital produce $1000 de interés al 4% anual en 5 años?
    </li>
  </ul>
</div>
