# Notas generales — Lógica Matemática
**Autor:** Diego Linares

---

## 📑 Índice de contenidos

* [1. Proposiciones lógicas y conectivos](#1-proposiciones-lógicas-y-conectivos)
  * [1.1 Proposiciones simples](#11-proposiciones-simples)
  * [1.2 Proposición compuesta](#12-proposición-compuesta)
* [2. Clasificación de proposiciones](#2-clasificación-de-proposiciones)
  * [2.1 Formas alternativas del condicional](#21-formas-alternativas-del-condicional)
  * [2.2 Tautología, contradicción y contingencia](#22-tautología-contradicción-y-contingencia)
* [3. Leyes lógicas](#3-leyes-lógicas)
  * [3.1 Equivalencias lógicas notables](#31-equivalencias-lógicas-notables)
  * [3.2 Estrategia de simplificación](#32-estrategia-de-simplificación)
* [4. Razonamientos e inferencia](#4-razonamientos-e-inferencia)
  * [4.1 Determinación analítica de invalidez](#41-determinación-analítica-de-invalidez)
  * [4.2 Reglas de inferencia y prueba directa](#42-reglas-de-inferencia-y-prueba-directa)
  * [4.3 Reducción al absurdo](#43-reducción-al-absurdo)
* [5. Cuantificadores y lógica de predicados](#5-cuantificadores-y-lógica-de-predicados)
  * [5.1 Predicados y tipos de cuantificadores](#51-predicados-y-tipos-de-cuantificadores)
  * [5.2 Negación y propiedades](#52-negación-y-propiedades)
  * [5.3 Ejercicios propuestos](#53-ejercicios-propuestos)
* [6. Bibliografía](#6-bibliografía)

---

## 1. Proposiciones lógicas y conectivos

### 1.1 Proposiciones simples

> **Definición:** Una **proposición simple** (o atómica) es un enunciado declarativo que se representa con letras minúsculas ($p, q, r, \dots$) y cumple tres condiciones:
> 1. Es inequívocamente verdadera ($V$) o falsa ($F$).
> 2. No contiene conectivos lógicos ni puede descomponerse en partes más simples.
> 3. Su significado es preciso y objetivo.

En computación, solemos asignarles letras minúsculas ($p, q, r, \dots$) para facilitar su manipulación en instrucciones empleadas en un código. Las expresiones exclamativas, interrogativas, imperativas o los enunciados abiertos no son proposiciones, ya que carecen de un valor de verdad definido.

#### Ejemplo 1: Clasificación de enunciados

* **No son proposiciones:**
  * *“¡Qué hermoso día!”* $\rightarrow$ Exclamación.
  * *“¿Ya terminaste el arreglo?”* $\rightarrow$ Interrogación.
  * *“Limpia la base de datos.”* $\rightarrow$ Imperativo o mandato.
  * *“$x + 5 = 10$”* $\rightarrow$ Enunciado abierto (depende de $x$).

* **Sí son proposiciones simples:**
  * $p$: *“El número 15 es divisible por 3.”* (Valor lógico: $V$)
  * $q$: *“La capital de Francia es Madrid.”* (Valor lógico: $F$)
  * $s$: *“Python es un lenguaje de programación.”* (Valor lógico: $V$)

---

### 1.2 Proposición compuesta

Una **proposición compuesta** se forma utilizando conectivos lógicos (símbolos o palabras que unen proposiciones simples o modifican su valor de verdad).

| Operación | Expresión natural | Símbolo | Ejemplo formal | Comportamiento lógico |
| :--- | :--- | :---: | :---: | :--- |
| **Negación** | “No” | $\neg$ | $\neg p$ | Invierte el valor de verdad ($V \leftrightarrow F$). |
| **Conjunción** | “Y” | $\land$ | $p \land q$ | Verdadera **solo** si ambas son $V$. |
| **Disyunción** | “O” | $\lor$ | $p \lor q$ | Falsa **solo** si ambas son $F$. |
| **Condicional** | “Si ..., entonces” | $\to$ | $p \to q$ | Falsa **solo** si $p$ es $V$ y $q$ es $F$. |
| **Bicondicional** | “Si y solo si” | $\leftrightarrow$ | $p \leftrightarrow q$ | Verdadera si ambas tienen el **mismo** valor. |

#### Tablas de verdad básicas

Toda proposición tiene un único valor lógico ($V$ o $1$, $F$ o $0$). Una tabla de verdad muestra todas las combinaciones posibles para $n$ variables simples mediante la fórmula $2^n$ filas ($4$ filas para 2 variables; $8$ filas para 3 variables).

| $P$ | $Q$ | $\neg P$ | $P \land Q$ | $P \lor Q$ | $P \to Q$ | $P \leftrightarrow Q$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $V$ | $V$ | $F$ | $V$ | $V$ | $V$ | $V$ |
| $V$ | $F$ | $F$ | $F$ | $V$ | $F$ | $F$ |
| $F$ | $V$ | $V$ | $F$ | $V$ | $V$ | $F$ |
| $F$ | $F$ | $V$ | $F$ | $F$ | $V$ | $V$ |

#### Ejemplo 2: Conectivos en situaciones cotidianas
* **Negación:** Si $P$ es *“El número 4 es par”* ($V$), entonces $\neg P$ es *“El número 4 no es par”* ($F$).
* **Conjunción:** *“Aprobé cálculo ($P$) y aprobé física ($Q$)”*. Solo es verdad si aprobé ambas materias.
* **Disyunción:** *“Iré a la biblioteca ($P$) o estudiaré en casa ($Q$)”*. Solo es falsa si no hago ninguna de las dos cosas.
* **Implicación:** *“Si llueve ($P$), entonces llevo paraguas ($Q$)”*. Solo se rompe la promesa si llueve ($V$) y no llevo paraguas ($F$).
* **Doble implicación:** *“Un triángulo es equilátero ($P$) si y solo si todos sus ángulos miden $60^\circ$ ($Q$)”*.

#### Ejemplo 3: Tabla de verdad con 2 variables
Construya la tabla de verdad para $(P \to Q) \land \neg P$ ($2^2 = 4$ filas).

<details>
<summary><strong>👁️ Ver tabla de verdad resuelta</strong></summary>

| $P$ | $Q$ | $P \to Q$ | $\neg P$ | $(P \to Q) \land \neg P$ |
| :---: | :---: | :---: | :---: | :---: |
| $V$ | $V$ | $V$ | $F$ | **$F$** |
| $V$ | $F$ | $F$ | $F$ | **$F$** |
| $F$ | $V$ | $V$ | $V$ | **$V$** |
| $F$ | $F$ | $V$ | $V$ | **$V$** |

</details>

#### Ejemplo 4: Tabla de verdad con 3 variables
Analice la expresión $(P \land Q) \to \neg R$ ($2^3 = 8$ filas).

<details>
<summary><strong>👁️ Ver tabla de verdad resuelta</strong></summary>

| $P$ | $Q$ | $R$ | $P \land Q$ | $\neg R$ | $(P \land Q) \to \neg R$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $V$ | $V$ | $V$ | $V$ | $F$ | **$F$** |
| $V$ | $V$ | $F$ | $V$ | $V$ | **$V$** |
| $V$ | $F$ | $V$ | $F$ | $F$ | **$V$** |
| $V$ | $F$ | $F$ | $F$ | $V$ | **$V$** |
| $F$ | $V$ | $V$ | $F$ | $F$ | **$V$** |
| $F$ | $V$ | $F$ | $F$ | $V$ | **$V$** |
| $F$ | $F$ | $V$ | $F$ | $F$ | **$V$** |
| $F$ | $F$ | $F$ | $F$ | $V$ | **$V$** |

</details>

[⬆️ Volver al índice](#-índice-de-contenidos)

---

## 2. Clasificación de proposiciones

### 2.1 Formas alternativas del condicional

En matemáticas, las proposiciones condicionales ($P \to Q$) forman la base de los teoremas:

$$
\underbrace{P}_{\text{Antecedente / Hipótesis (Suficiente)}} \longrightarrow \underbrace{Q}_{\text{Consecuente / Tesis (Necesaria)}}
$$

#### Ejemplo 5: Variaciones gramaticales
Tomando $P$: *“Una figura es un cuadrado”* y $Q$: *“La figura tiene cuatro lados”*, la relación $P \to Q$ equivale a:
1. **Si** una figura es un cuadrado, **entonces** tiene cuatro lados.
2. Ser un cuadrado es **condición suficiente** para tener cuatro lados.
3. Tener cuatro lados es **condición necesaria** para ser un cuadrado.
4. Una figura es un cuadrado **solo si** tiene cuatro lados.
5. Una figura tiene cuatro lados **si** es un cuadrado.

---

### 2.2 Tautología, contradicción y contingencia

> **Clasificación según la columna resultado:**
> $$
> \text{Clasificación}(P) = \begin{cases} \text{Solo valores } V \implies \textbf{Tautología} \text{ (Verdad formal)} \\ \text{Solo valores } F \implies \textbf{Contradicción} \text{ (Absurdo lógico)} \\ \text{Valores } V \text{ y } F \implies \textbf{Contingencia} \end{cases}
> $$

Cuando una proposición es una **tautología**, el conectivo principal evoluciona para denotar validez universal:
* **Implicación lógica ($\implies$):** Reemplaza a $\to$ cuando la expresión es tautológica.
* **Equivalencia lógica ($\iff$ o $\equiv$):** Reemplaza a $\leftrightarrow$ cuando la expresión es tautológica.

#### Ejemplos rápidos de clasificación
* **Tautología ($P \lor \neg P$):** Principio del tercero excluido. Siempre resulta $V$.
* **Contradicción ($P \land \neg P$):** Principio de no contradicción. Siempre resulta $F$.
* **Contingencia ($P \to Q$):** Presenta tres $V$ y un $F$.

#### Ejemplo 6: Demostración de implicación lógica (Silogismo Hipotético)
Demuestre que $[(P \to Q) \land (Q \to R)] \implies (P \to R)$.

<details>
<summary><strong>👁️ Ver demostración por tabla de verdad</strong></summary>

Definimos $E_I \colon (P \to Q) \land (Q \to R)$ y $E_D \colon P \to R$. Evaluamos $E_I \to E_D$:

| $P$ | $Q$ | $R$ | $P \to Q$ | $Q \to R$ | $E_I$ | $E_D$ | $E_I \to E_D$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | **$V$** |
| $V$ | $V$ | $F$ | $V$ | $F$ | $F$ | $F$ | **$V$** |
| $V$ | $F$ | $V$ | $F$ | $V$ | $F$ | $V$ | **$V$** |
| $V$ | $F$ | $F$ | $F$ | $V$ | $F$ | $F$ | **$V$** |
| $F$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | **$V$** |
| $F$ | $V$ | $F$ | $V$ | $F$ | $F$ | $V$ | **$V$** |
| $F$ | $F$ | $V$ | $V$ | $V$ | $V$ | $V$ | **$V$** |
| $F$ | $F$ | $F$ | $V$ | $V$ | $V$ | $V$ | **$V$** |

Al obtener una tautología en la última columna, queda demostrada la implicación lógica. $\square$
</details>

#### Ejemplo 7: Verificación de equivalencia lógica (Ley Distributiva)
Verifique que $P \lor (Q \land R) \iff (P \lor Q) \land (P \lor R)$.

<details>
<summary><strong>👁️ Ver demostración por tabla de verdad</strong></summary>

Definimos $E_I \colon P \lor (Q \land R)$ y $E_D \colon (P \lor Q) \land (P \lor R)$:

| $P$ | $Q$ | $R$ | $Q \land R$ | $E_I$ | $P \lor Q$ | $P \lor R$ | $E_D$ | $E_I \leftrightarrow E_D$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | **$V$** |
| $V$ | $V$ | $F$ | $F$ | $V$ | $V$ | $V$ | $V$ | **$V$** |
| $V$ | $F$ | $V$ | $F$ | $V$ | $V$ | $V$ | $V$ | **$V$** |
| $V$ | $F$ | $F$ | $F$ | $V$ | $V$ | $V$ | $V$ | **$V$** |
| $F$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | **$V$** |
| $F$ | $V$ | $F$ | $F$ | $F$ | $V$ | $F$ | $F$ | **$V$** |
| $F$ | $F$ | $V$ | $F$ | $F$ | $F$ | $V$ | $F$ | **$V$** |
| $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | **$V$** |

Al ser tautología, se confirma que $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$. $\square$
</details>

[⬆️ Volver al índice](#-índice-de-contenidos)

---

## 3. Leyes lógicas

### 3.1 Equivalencias lógicas notables

Las leyes lógicas son tautologías universales usadas como “reglas de reemplazo” para simplificar expresiones complejas sin alterar su valor de verdad:

| Ley | Equivalencia | Ley | Equivalencia |
| :--- | :--- | :--- | :--- |
| **Def. Condicional** | $P \to Q \equiv \neg P \lor Q$ | **Idempotencia** | $P \land P \equiv P$ <br> $P \lor P \equiv P$ |
| **Def. Bicondicional** | $P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P)$ | **Inversos (Complemento)** | $P \lor \neg P \equiv V$ <br> $P \land \neg P \equiv F$ |
| **Conmutativa** | $P \lor Q \equiv Q \lor P$ <br> $P \land Q \equiv Q \land P$ | **Identidad / Dominancia** | $P \lor F \equiv P \quad \vert \quad P \land V \equiv P$ <br> $P \land F \equiv F \quad \vert \quad P \lor V \equiv V$ |
| **Asociativa** | $(P \lor Q) \lor R \equiv P \lor (Q \lor R)$ <br> $(P \land Q) \land R \equiv P \land (Q \land R)$ | **Absorción** | $P \lor (P \land Q) \equiv P$ <br> $P \land (P \lor Q) \equiv P$ |
| **Distributiva** | $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$ <br> $P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$ | **Contrapositiva** | $P \to Q \equiv \neg Q \to \neg P$ |
| **Doble Negación** | $\neg(\neg P) \equiv P$ | **Leyes de De Morgan** | $\neg(P \lor Q) \equiv \neg P \land \neg Q$ <br> $\neg(P \land Q) \equiv \neg P \lor \neg Q$ |

---

### 3.2 Estrategia de simplificación

Dado que las tablas de verdad crecen exponencialmente ($2^n$ filas; 10 variables requieren $1024$ filas), las leyes lógicas ofrecen escalabilidad y claridad estructural mediante el siguiente algoritmo heurístico:

1. **Fase 1: Reducción Estructural**
   * **Paso 1:** Eliminar condicionales ($\to$) y bicondicionales ($\leftrightarrow$) usando sus definiciones.
   * **Paso 2:** Interiorizar negaciones compuestas aplicando **Leyes de De Morgan** y eliminar dobles negaciones.
2. **Fase 2: Interacción Algebraica**
   * **Paso 3:** Expandir o factorizar mediante la **Ley Distributiva** cuando los conectivos interior y exterior difieran.
   * **Paso 4:** Reagrupar términos homogéneos usando **Asociatividad** y **Conmutatividad**.
   * **Paso 5:** Depurar redundancias aplicando **Absorción, Inversos, Idempotencia e Identidad**.

#### Ejemplos de simplificación algebraica

**Ejercicio A:** Simplificar $(A \land B) \to \neg(A \land B)$
<details>
<summary><strong>👁️ Ver solución paso a paso</strong></summary>

$$
\begin{aligned}
(A \land B) \to \neg(A \land B) &\equiv \neg(A \land B) \lor \neg(A \land B) && \text{(Definición de condicional)} \\
&\equiv \neg(A \land B) && \text{(Idempotencia)} \\
&\equiv \neg A \lor \neg B && \text{(Ley de De Morgan)} \quad \square
\end{aligned}
$$
</details>

**Ejercicio B:** Simplificar $\neg(B \land A) \lor \neg B$
<details>
<summary><strong>👁️ Ver solución paso a paso</strong></summary>

$$
\begin{aligned}
\neg(B \land A) \lor \neg B &\equiv (\neg B \lor \neg A) \lor \neg B && \text{(Ley de De Morgan)} \\
&\equiv (\neg B \lor \neg B) \lor \neg A && \text{(Asociatividad y Conmutatividad)} \\
&\equiv \neg B \lor \neg A && \text{(Idempotencia)} \quad \square
\end{aligned}
$$
</details>

**Ejercicio C:** Simplificar $(A \lor B) \land \neg A$
<details>
<summary><strong>👁️ Ver solución paso a paso</strong></summary>

$$
\begin{aligned}
(A \lor B) \land \neg A &\equiv (A \land \neg A) \lor (B \land \neg A) && \text{(Ley distributiva)} \\
&\equiv F \lor (B \land \neg A) && \text{(Ley de inversos)} \\
&\equiv B \land \neg A && \text{(Ley de identidad)} \quad \square
\end{aligned}
$$
</details>

**Ejercicio D:** Simplificar $[A \land (\neg A \lor B)] \lor (A \to \neg A)$
<details>
<summary><strong>👁️ Ver solución paso a paso</strong></summary>

$$
\begin{aligned}
[A \land (\neg A \lor B)] \lor (A \to \neg A) &\equiv [A \land (\neg A \lor B)] \lor (\neg A \lor \neg A) && \text{(Definición de condicional)} \\
&\equiv [A \land (\neg A \lor B)] \lor \neg A && \text{(Idempotencia)} \\
&\equiv [(A \land \neg A) \lor (A \land B)] \lor \neg A && \text{(Ley distributiva)} \\
&\equiv [F \lor (A \land B)] \lor \neg A && \text{(Ley de inversos)} \\
&\equiv (A \land B) \lor \neg A && \text{(Ley de identidad)} \\
&\equiv (A \lor \neg A) \land (B \lor \neg A) && \text{(Ley distributiva)} \\
&\equiv V \land (B \lor \neg A) && \text{(Ley de inversos)} \\
&\equiv B \lor \neg A && \text{(Ley de identidad)} \quad \square
\end{aligned}
$$
</details>

#### Ejercicios de práctica (Simplificación)
Simplifique las siguientes expresiones aplicando leyes lógicas:
1. $(B \land B) \land \neg B \land (B \lor B)$
2. $((A \to \neg A) \to A) \to (\neg B \lor A)$
3. $A \to \neg(A \to (A \to (\neg B \lor B)))$
4. $(A \lor B) \lor \neg A \lor B$

[⬆️ Volver al índice](#-índice-de-contenidos)

---

## 4. Razonamientos e inferencia

Un **razonamiento lógico** vincula un conjunto de premisas ($P_1, P_2, \dots, P_n$) con una conclusión ($C$):

$$
\underbrace{(P_1 \land P_2 \land \dots \land P_n)}_{\text{Premisas}} \longrightarrow \underbrace{C}_{\text{Conclusión}}
$$

* **Razonamiento válido:** La implicación asociada es una tautología (o sus premisas son contradictorias entre sí).
* **Razonamiento inválido (Falacia):** Existe al menos un contraejemplo donde todas las premisas son verdaderas ($V$) y la conclusión es falsa ($F$).

### 4.1 Determinación analítica de invalidez

En lugar de construir toda la tabla de verdad, podemos probar la invalidez buscando directamente una asignación de valores que haga **verdaderas todas las premisas** y **falsa la conclusión**.

#### Ejemplo 8: Prueba de invalidez por contraejemplo
Determine si el siguiente razonamiento es inválido:
* $P_1 \colon p \lor q$
* $P_2 \colon p$
* $P_3 \colon q \to p$
* $P_4 \colon \neg q \lor p$
* $\therefore q$

<details>
<summary><strong>👁️ Ver análisis de invalidez</strong></summary>

1. Forzamos la conclusión a ser falsa: $q \equiv F$.
2. Forzamos las premisas a ser verdaderas. De $P_2$, obtenemos directamente $p \equiv V$.
3. Verificamos si estos valores ($p \equiv V, q \equiv F$) satisfacen el resto de premisas sin contradicción:
   * $P_1 \colon V \lor F \equiv V$ (Cumple)
   * $P_3 \colon F \to V \equiv V$ (Cumple)
   * $P_4 \colon \neg F \lor V \equiv V \lor V \equiv V$ (Cumple)

Al existir un contraejemplo donde todas las premisas son $V$ y la conclusión es $F$, **el razonamiento es inválido**. $\square$
</details>

---

### 4.2 Reglas de inferencia y prueba directa

La **prueba directa** consiste en deducir la conclusión paso a paso aplicando reglas de inferencia válidas y equivalencias lógicas, justificando cada línea:

| Regla de inferencia | Esquema formal | Regla de inferencia | Esquema formal |
| :--- | :--- | :--- | :--- |
| **Modus Ponens (MP)** | $P \to Q, \; P \;\therefore\; Q$ | **Modus Tollens (MT)** | $P \to Q, \; \neg Q \;\therefore\; \neg P$ |
| **Silogismo Hipotético (SH)** | $P \to Q, \; Q \to R \;\therefore\; P \to R$ | **Silogismo Disyuntivo (SD)** | $P \lor Q, \; \neg P \;\therefore\; Q$ |
| **Silogismo Constructivo** | $P \to Q, \; R \to S, \; P \lor R \;\therefore\; Q \lor S$ | **Silogismo Destructivo** | $P \to Q, \; R \to S, \; \neg Q \lor \neg S \;\therefore\; \neg P \lor \neg R$ |
| **Simplificación** | $P \land Q \;\therefore\; P$ (o $Q$) | **Conjunción** | $P, \; Q \;\therefore\; P \land Q$ |
| **Adición** | $P \;\therefore\; P \lor R$ | **Exportación / Importación** | $(P \land R) \to Q \;\iff\; P \to (R \to Q)$ |

> **Estrategia híbrida de resolución:**
> * **Hacia atrás (por objetivos):** Parte de la conclusión deseada ($Q$) para identificar qué sub-metas necesitas obtener de las premisas.
> * **Hacia adelante (por datos):** Combina las premisas disponibles mediante reglas de inferencia hasta alcanzar las sub-metas planteadas.

#### Ejemplo 9: Demostración por prueba directa
Demuestre la validez de: $1.\; P \to Q, \quad 2.\; P \lor R, \quad 3.\; \neg R \quad \therefore\; Q$

<details>
<summary><strong>👁️ Ver tabla de deducción directa</strong></summary>

* **Análisis hacia atrás:** Para obtener $Q$, vemos en la premisa 1 ($P \to Q$) que necesitamos obtener $P$. Observamos que $P$ está en la premisa 2 ($P \lor R$) y podemos aislarlo usando la premisa 3 ($\neg R$).

| Línea | Proposición | Justificación | Referencias |
| :---: | :--- | :--- | :---: |
| 1 | $P \to Q$ | Premisa | — |
| 2 | $P \lor R$ | Premisa | — |
| 3 | $\neg R$ | Premisa | — |
| 4 | $P$ | Silogismo Disyuntivo (SD) | 2, 3 |
| 5 | $Q$ | Modus Ponens (MP) | 1, 4 |

Queda demostrada la validez del razonamiento. $\square$
</details>

---

### 4.3 Reducción al absurdo

La **reducción al absurdo** es un método indirecto que consiste en asumir la **negación de la conclusión** ($\neg C$) como una premisa auxiliar. Si al operar con ella se deriva una contradicción explícita ($r \land \neg r$), la suposición inicial es falsa y la conclusión original queda demostrada.

#### Ejemplo 10: Demostración por reducción al absurdo
Demuestre el mismo razonamiento anterior mediante reducción al absurdo: $1.\; P \to Q, \quad 2.\; P \lor R, \quad 3.\; \neg R \quad \therefore\; Q$

<details>
<summary><strong>👁️ Ver demostración por reducción al absurdo</strong></summary>

| Línea | Proposición | Justificación | Referencias |
| :---: | :--- | :--- | :---: |
| 1 | $P \to Q$ | Premisa | — |
| 2 | $P \lor R$ | Premisa | — |
| 3 | $\neg R$ | Premisa | — |
| 4 | $\neg Q$ | Premisa auxiliar (Reducción al Absurdo) | — |
| 5 | $\neg P$ | Modus Tollens (MT) | 1, 4 |
| 6 | $P$ | Silogismo Disyuntivo (SD) | 2, 3 |
| 7 | $P \land \neg P$ | Conjunción (**Contradicción**) | 6, 5 |

Al llegar al absurdo lógico $P \land \neg P$, se concluye que $\neg Q$ es falsa y, por tanto, $Q$ es verdadera. $\square$
</details>

[⬆️ Volver al índice](#-índice-de-contenidos)

---

## 5. Cuantificadores y lógica de predicados

La lógica proposicional analiza oraciones como bloques indivisibles, lo que impide validar razonamientos clásicos como el silogismo aristotélico (*“Todos los hombres son mortales; Sócrates es hombre; por tanto, Sócrates es mortal”*). Para superar esta limitación se introducen los **predicados** y **cuantificadores**.

### 5.1 Predicados y tipos de cuantificadores

Un **predicado** $P(x)$ es un enunciado con una o más variables que toma valores dentro de un **universo de discurso** ($U$). Se convierte en proposición al sustituir $x$ por un elemento de $U$ o al aplicar un cuantificador:

| Cuantificador | Símbolo | Notación | Condición de verdad |
| :--- | :---: | :---: | :--- |
| **Universal** | $\forall$ | $\forall x \, P(x)$ | Es $V$ si $P(x)$ se cumple para **todos** los elementos de $U$. |
| **Existencial** | $\exists$ | $\exists x \, P(x)$ | Es $V$ si $P(x)$ se cumple para **al menos un** elemento de $U$. |
| **Existencial Único** | $\exists!$ | $\exists! x \, P(x)$ | Es $V$ si $P(x)$ se cumple para **exactamente un** elemento de $U$. |

#### Ejemplo 11: Simbolización con predicados
Simbolice: *«Cualquier estudiante de la facultad debe aprobar Cálculo y Matemáticas Discretas»*.

<details>
<summary><strong>👁️ Ver formalización</strong></summary>

* **Universo de discurso ($U$):** Estudiantes de la facultad.
* **Predicados:**
  * $\text{ApruebaC}(x)$: *“$x$ aprueba Cálculo”*.
  * $\text{ApruebaMD}(x)$: *“$x$ aprueba Matemáticas Discretas”*.
* **Expresión simbólica:**
  $$
  \forall x \, [\text{ApruebaC}(x) \land \text{ApruebaMD}(x)] \quad \square
  $$
</details>

---

### 5.2 Negación y propiedades

> **Teorema 1 (Leyes de De Morgan para cuantificadores):**
> $$
> \neg \forall x \, P(x) \equiv \exists x \, (\neg P(x)) \qquad \text{y} \qquad \neg \exists x \, P(x) \equiv \forall x \, (\neg P(x))
> $$

#### Ejemplos de negación de expresiones cuantificadas

**Ejemplo 12:** Sea $U = \mathbb{R}$. Simplifique $\neg \forall x \, [x > 3 \to x^2 > 9]$
<details>
<summary><strong>👁️ Ver solución</strong></summary>

$$
\begin{aligned}
\neg \forall x \, [x > 3 \to x^2 > 9] &\equiv \exists x \, [\neg (x > 3 \to x^2 > 9)] && \text{(De Morgan para cuantificadores)} \\
&\equiv \exists x \, [x > 3 \land \neg (x^2 > 9)] && \text{(Negación del condicional)} \\
&\equiv \exists x \, [x > 3 \land x^2 \le 9] && \text{(Negación de desigualdad)} \quad \square
\end{aligned}
$$
</details>

**Ejemplo 13:** Sea $U = \mathbb{R}$. Simplifique $\neg \forall x \, [f(x) = 0 \to x = 0]$
<details>
<summary><strong>👁️ Ver solución</strong></summary>

$$
\begin{aligned}
\neg \forall x \, [f(x) = 0 \to x = 0] &\equiv \exists x \, [\neg (f(x) = 0 \to x = 0)] && \text{(De Morgan para cuantificadores)} \\
&\equiv \exists x \, [f(x) = 0 \land \neg (x = 0)] && \text{(Negación del condicional)} \\
&\equiv \exists x \, [f(x) = 0 \land x \ne 0] && \text{(Negación de igualdad)} \quad \square
\end{aligned}
$$
</details>

> **Teorema 2 (Distribución e interacción de cuantificadores):**
> Sea un dominio no vacío y sean $P, Q$ predicados:
> 
> **Equivalencias lógicas ($\equiv$):**
> 1. $\forall x \, (P(x) \land Q(x)) \equiv \forall x \, P(x) \land \forall x \, Q(x)$
> 2. $\forall x \, (P(x) \to \neg Q(x)) \equiv \neg \exists x \, (P(x) \land Q(x))$
> 3. $\neg \forall x \, (P(x) \to Q(x)) \equiv \exists x \, (P(x) \land \neg Q(x))$
> 4. $\forall x \, P(x) \to \exists x \, Q(x) \equiv \exists x \, (P(x) \to Q(x))$
> 5. $\exists x \, (P(x) \lor Q(x)) \equiv \exists x \, P(x) \lor \exists x \, Q(x)$
> 
> **Implicaciones unidireccionales ($\implies$):**
> 6. $\forall x \, P(x) \implies \exists x \, P(x)$
> 7. $\forall x \, P(x) \lor \forall x \, Q(x) \implies \forall x \, (P(x) \lor Q(x))$
> 8. $\forall x \, (P(x) \to Q(x)) \implies \forall x \, P(x) \to \forall x \, Q(x)$
> 9. $\exists x \, (P(x) \land Q(x)) \implies \exists x \, P(x) \land \exists x \, Q(x)$

---

### 5.3 Ejercicios propuestos

**1. Evaluación de predicados ($U = \mathbb{R}$):**
Dados $p(x) \colon x^2 - 7x + 10 = 0$ y $y(x) \colon \operatorname{sen}(x) = 0$:
* Determine el valor de verdad de $p(2)$, $p(1)$, $y(\pi)$ y $y(\pi/2)$.
* Justifique el valor de verdad de: $\forall x \, (x^2 \ge 0)$, $\exists x \, (x^2 + 1 = 0)$ y $\exists! x \, (x^2 = 0)$.

**2. Simbolización formal:**
Defina universo y predicados para traducir:
* *«Algunos programadores no toman café».*
* *«Existe un número real negativo».*
* *«No hay ningún número primo que sea par».*
* *«Todos los números enteros son positivos o negativos».*
* *«Existe un número natural que es menor o igual que cero».*
* *«Todo número real es mayor que 5 o menor que 2».*

**3. Negación y simplificación sobre $U = \mathbb{R}$:**
* $\neg \forall x \, [x^2 \ge 0]$
* $\neg \exists x \, [x > 0 \land x^2 = 2]$
* $\neg \exists x \, [1 < x < 5]$
* $\neg \exists x \, [x \ne 1 \land (x < -2 \lor x \ge 4)]$
* $\neg \forall x \, [x > 3 \to x^2 > 9]$
* $\neg \exists x \, [f(x) = 0 \land x = 0]$

**4. Negación y simplificación sobre $U = \mathbb{N}$:**
* $\neg \forall x \, [x + 1 > x]$
* $\neg \exists x \, [x^2 = 2]$
* $\neg \forall x \, [x \text{ es par} \lor x \text{ es impar}]$
* $\neg \exists x \, [x > 0 \land x < 1]$
* $\neg \forall x \, [x > 2 \to x \ge 3]$
* $\neg \exists x \, [x \ne 0 \land x^2 = 0]$

**5. Traducción sobre $U = \mathbb{Z}$:**
Dados $p(x) \colon x \text{ es par}$, $q(x) \colon x > 0$ y $r(x) \colon x \text{ es múltiplo de } 5$, simbolice:
1. Todo entero es par o múltiplo de 5.
2. Existe un entero positivo y par.
3. Si un entero es múltiplo de 5, entonces no es positivo.
4. Un entero es par si, y solo si, es positivo.
5. No existe ningún entero par que no sea positivo.

[⬆️ Volver al índice](#-índice-de-contenidos)

---

## 6. Bibliografía

* Epp, S. S. (2012). *Matemáticas discretas con aplicaciones* (4.ª ed.). Cengage Learning.
* Grimaldi, R. P. (1998). *Matemáticas discreta y combinatoria: Una introducción con aplicaciones* (3.ª ed.). Addison-Wesley Iberoamericana.
* Johnsonbaugh, R. (2005). *Matemáticas discretas* (6.ª ed.). Pearson Educación.
* Kolman, B., Busby, R. C., & Ross, S. (1997). *Estructuras de matemáticas discretas para la computación* (3.ª ed.). Prentice Hall Hispanoamericana.
* Murillo, M. (2012). *Introducción a la matemática discreta* (4.ª ed.). Editorial Tecnológica de Costa Rica.
* Rosen, K. H. (2012). *Matemática discreta y sus aplicaciones* (7.ª ed.). McGraw-Hill Interamericana.