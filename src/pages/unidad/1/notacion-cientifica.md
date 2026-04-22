---
layout: ../../../layouts/Leccion.astro
title: "Notación científica"
unitId: 1
unitTitle: "Números y Finanzas"
next: "/unidad/1/porcentajes"
---

<div class="lesson-box">
  <h2>Contenido de esta lección:</h2>
  <ul>
    <li>• Qué es la notación científica y para qué sirve</li>
    <li>• Cómo convertir números a notación científica</li>
    <li>• Ejercicios de práctica de conversión</li>
    <li>• Operaciones con números en notación científica</li>
    <li>• Ejercicios de práctica de operaciones</li>
  </ul>
</div>

## ¿Qué es la notación científica?

La <strong>notación científica</strong> es una forma de escribir números muy grandes o muy pequeños de manera más compacta. Consiste en expresar un número como el producto de un número entre 1 y 10, multiplicado por una potencia de 10.

<blockquote>
  <p class="text-center font-mono text-xl">a × 10<sup>n</sup></p>
  <p class="text-slate-400 text-sm mt-2">Donde 1 ≤ a &lt; 10 numero decimal,y n es un número entero</p>
  <p class="text-slate-400 text-sm mt-2">a se llama mantisa,y n se llama exponente</p>
</blockquote>

## Ejemplos

### Números grandes

<ul class="space-y-3">
  <li><span class="font-mono bg-slate-800 px-2 py-1 rounded">6.000.000</span> = <span class="font-mono text-violet-400">6 × 10⁶</span></li>
  <li><span class="font-mono bg-slate-800 px-2 py-1 rounded">300.000.000</span> = <span class="font-mono text-violet-400">3 × 10⁸</span></li>
  <li><span class="font-mono bg-slate-800 px-2 py-1 rounded">25.000</span> = <span class="font-mono text-violet-400">2,5 × 10⁴</span></li>
</ul>

### Números pequeños

<ul class="space-y-3">
  <li><span class="font-mono bg-slate-800 px-2 py-1 rounded">0,000004</span> = <span class="font-mono text-violet-400">4 × 10⁻⁶</span></li>
  <li><span class="font-mono bg-slate-800 px-2 py-1 rounded">0,000000003</span> = <span class="font-mono text-violet-400">3 × 10⁻⁹</span></li>
  <li><span class="font-mono bg-slate-800 px-2 py-1 rounded">0,00025</span> = <span class="font-mono text-violet-400">2,5 × 10⁻⁴</span></li>
</ul>

## Cómo convertir a notación científica

**Para números grandes:**

1. Contá cuántas cifras hay desde la coma hasta el final del número
2. Colocá la coma después de la primera cifra distinta de cero
3. El exponente será positivo y igual a la cantidad de lugares que moviste la coma

**Para números pequeños:**

1. Contá cuántos ceros hay desde la coma hasta la primera cifra distinta de cero
2. Colocá la coma después de esa primera cifra
3. El exponente será negativo y igual a la cantidad de lugares que moviste la coma

<div class="exercise-box">
  <h3>Ejercicio de práctica</h3>
  <p>Convertí los siguientes números a notación científica:</p>
  <ul class="grid grid-cols-2 gap-x-8 gap-y-2 text-slate-200 font-mono text-lg">
    <li>a) 45000000</li>
    <li>b) 0,0000072</li>
    <li>c) 890000</li>
    <li>d) 0,00000045</li>
    <li>e) 1230000000</li>
    <li>f) 0,000000000789</li>
    <li>g) 8998,789</li>
    <li>h) 0,0123</li>
  </ul>
</div>

## Operaciones con notación científica

<div class="card-grid">
  <div class="card">
    <h4>Multiplicación</h4>
    <p>Multiplicá los coeficientes y sumá los exponentes</p>
    <p class="text-slate-400 font-mono text-sm mt-2">(a × 10<sup>n</sup>) × (b × 10<sup>m</sup>) = (a×b) × 10 <sup>n+m</sup></p>
    <p>Ejemplo: (2 × 10³) × (3 × 10²) = 6 × 10⁵</p>
  </div>
</div>  

<div class="card-grid">  
  <div class="card">
    <h4>División</h4>
    <p>Dividí los coeficientes y restá los exponentes</p>
    <p class="text-slate-400 font-mono text-sm mt-2">(a × 10<sup>n</sup>) ÷ (b × 10<sup>m</sup>) = (a÷b) × 10 <sup>n-m</sup></p>
    <p>Ejemplo: (8 × 10⁵) ÷ (2 × 10²) = 4 × 10³</p>
  </div>
</div>

<div class="card-grid">
  <div class="card">
    <h4>Suma y resta</h4>
    <p>Para sumar o restar números en notación científica, primero igualamos los exponentes, es decir deben tener ambos el mismo exponente, por ejemplo 10 <sup>p</sup>.</p>
    <ul class="list-disc pl-5 marker:text-red-500">
        <li>Igualar los exponentes,es decir deben tener ambos el mismo exponente,por ejemplo 10 <sup>p</sup></li>
        <li>Sumar o restar las mantisas (coeficientes)</li>
        <li>Mantener el mismo exponente</li>
        <li>Si el resultado no está en notación científica, convertirlo</li>
    </ul>
  </p>
  <p>Ejemplo:(3.2 x 10⁵) + (4.5 x 10³)</p>
  <p>Primero igualamos los exponentes:</p>
  <p>(4.5 x 10³) = (0.045 x 10⁵)</p>
  <p>Luego sumamos las mantisas y mantenemos el exponente:</p>
  <p>(3.2 x 10⁵) + (0.045 x 10⁵) = 3.245 x 10⁵</p>
</div>
</div>

<div class="exercise-box">
  <h3>Ejercicios</h3>
  <p>Realizar las siguientes operaciones en notación científica:</p>
  <ul class="grid grid-cols-2 gap-x-8 gap-y-2 text-slate-200 font-mono text-lg">
    <li>a) (1,23x10<sup>7</sup>) + (8,9x10<sup>8</sup>)</li>
    <li>b) (4,05x10<sup>-4</sup> ) +(2,1x10<sup>-5</sup>)</li>
    <li>c) (3,2x10<sup>3</sup>) - (2,5x10<sup>2</sup>)</li>
    <li>d) (25x10<sup>5</sup>) ÷ (5x10<sup>2</sup>)</li>
    <li>e) (5,5x10<sup>3</sup>) ÷ (10x10<sup>8</sup>)</li>
    <li>f) (7,2x10<sup>-2</sup>) × (4,0x10<sup>-3</sup>)</li>
    <li>g) (9x10<sup>6</sup>) × (2x10<sup>3</sup>)</li>
    <li>h) (1,2x10<sup>4</sup>) + (3,8x10<sup>3</sup>)</li>
 
  </ul>
</div>


