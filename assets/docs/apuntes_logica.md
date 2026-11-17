# 📐 Notas Generales — Lógica Matemática

> **Autor:** Diego Linares &nbsp;|&nbsp; **Área:** Fundamentos de Computación y Matemáticas Discretas &nbsp;|&nbsp; **Nivel:** Universitario

---

<a id="indice"></a>
## 📑 Mapa de Contenidos

| Módulo | Tema Principal | Subtemas Clave |
| :--- | :--- | :--- |
| **01** | [**Proposiciones Lógicas**](#seccion-1) | [1.1 Proposiciones simples](#seccion-1-1) • [1.2 Proposición compuesta](#seccion-1-2) |
| **02** | [**Clasificación Lógica**](#seccion-2) | [2.1 Formas del condicional](#seccion-2-1) • [2.2 Tautología y contradicción](#seccion-2-2) |
| **03** | [**Leyes Lógicas**](#seccion-3) | [3.1 Equivalencias notables](#seccion-3-1) • [3.2 Algoritmo de simplificación](#seccion-3-2) |
| **04** | [**Razonamientos e Inferencia**](#seccion-4) | [4.1 Invalidez analítica](#seccion-4-1) • [4.2 Prueba directa](#seccion-4-2) • [4.3 Reducción al absurdo](#seccion-4-3) |
| **05** | [**Cuantificadores y Predicados**](#seccion-5) | [5.1 Tipos de cuantificadores](#seccion-5-1) • [5.2 Negación y propiedades](#seccion-5-2) • [5.3 Ejercicios](#seccion-5-3) |
| **06** | [**Referencias**](#seccion-6) | [6.1 Bibliografía recomendada](#seccion-6-1) |

---

<a id="seccion-1"></a>
## 1. Proposiciones lógicas y conectivos

<a id="seccion-1-1"></a>
### 1.1 Proposiciones simples

> 📌 **Definición Formal**
>
> Una **proposición simple** (o atómica) es un enunciado declarativo representado con letras minúsculas ($p, q, r, \dots$) que satisface tres criterios estrictos:
> 1. **Bivalencia:** Es inequívocamente verdadera ($V$) o falsa ($F$).
> 2. **Atomicidad:** No contiene conectivos lógicos ni puede descomponerse en partes más simples.
> 3. **Objetividad:** Su significado es preciso y libre de ambigüedades.

En ciencias de la computación, estas variables representan condiciones booleanas dentro de estructuras de control. Por el contrario, las expresiones exclamativas, interrogativas, imperativas o los enunciados abiertos **no** son proposiciones al carecer de un valor de verdad definido.

#### 🧪 Ejemplo 1: Clasificación de enunciados

| Tipo de Expresión | Enunciado | Clasificación | Motivo / Valor |
| :--- | :--- | :---: | :--- |
| Exclamativa | *“¡Qué hermoso día!”* | ❌ No | Carece de valor de verdad |
| Interrogativa | *“¿Ya terminaste el arreglo?”* | ❌ No | Es una pregunta |
| Imperativa | *“Limpia la base de datos.”* | ❌ No | Es una orden o mandato |
| Abierta | *“$x + 5 = 10$”* | ❌ No | Depende del valor de $x$ |
| Declarativa ($p$) | *“El número $15$ es divisible por $3$.”* | ✅ Sí | **Verdadero ($V$)** |
| Declarativa ($q$) | *“La capital de Francia es Madrid.”* | ✅ Sí | **Falso ($F$)** |
| Declarativa ($s$) | *“Python es un lenguaje de programación.”* | ✅ Sí | **Verdadero ($V$)** |

---

<a id="seccion-1-2"></a>
### 1.2 Proposición compuesta

Una **proposición compuesta** surge al combinar proposiciones simples mediante **conectivos lógicos**, los cuales operan sobre los valores de verdad de sus componentes.

| Operación | Lenguaje Natural | Símbolo | Notación | Regla de Verdad |
| :--- | :--- | :---: | :---: | :--- |
| **Negación** | *“No...”* | $\neg$ | $\neg P$ | Invierte el valor lógico ($V \leftrightarrow F$). |
| **Conjunción** | *“... y ...”* | $\land$ | $P \land Q$ | Es $V$ **únicamente** si ambas son $V$. |
| **Disyunción** | *“... o ...”* | $\lor$ | $P \lor Q$ | Es $F$ **únicamente** si ambas son $F$. |
| **Condicional** | *“Si ..., entonces ...”* | $\to$ | $P \to Q$ | Es $F$ **solo** si $P$ es $V$ y $Q$ es $F$. |
| **Bicondicional** | *“... si y solo si ...”* | $\leftrightarrow$ | $P \leftrightarrow Q$ | Es $V$ si ambas tienen el **mismo** valor. |

#### 📊 Tabla de Verdad Fundamental

Para $n$ proposiciones simples, una tabla de verdad requiere $2^n$ filas ($2^2 = 4$ para dos variables; $2^3 = 8$ para tres variables).

| $P$ | $Q$ | $\neg P$ | $P \land Q$ | $P \lor Q$ | $P \to Q$ | $P \leftrightarrow Q$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 🟢 $V$ | 🟢 $V$ | 🔴 $F$ | 🟢 $V$ | 🟢 $V$ | 🟢 $V$ | 🟢 $V$ |
| 🟢 $V$ | 🔴 $F$ | 🔴 $F$ | 🔴 $F$ | 🟢 $V$ | 🔴 $F$ | 🔴 $F$ |
| 🔴 $F$ | 🟢 $V$ | 🟢 $V$ | 🔴 $F$ | 🟢 $V$ | 🟢 $V$ | 🔴 $F$ |
| 🔴 $F$ | 🔴 $F$ | 🟢 $V$ | 🔴 $F$ | 🔴 $F$ | 🟢 $V$ | 🟢 $V$ |

#### 💡 Ejemplo 2: Conectivos en contexto

* **Negación ($\neg P$):** Si $P$ es *“El número $4$ es par”* ($V$), $\neg P$ es *“El número $4$ no es par”* ($F$).
* **Conjunción ($P \land Q$):** *“Aprobé cálculo ($P$) y aprobé física ($Q$)”*. Solo es cierta si se aprueban ambas.
* **Disyunción ($P \lor Q$):** *“Iré a la biblioteca ($P$) o estudiaré en casa ($Q$)”*. Solo es falsa si no se realiza ninguna acción.
* **Implicación ($P \to Q$):** *“Si llueve ($P$), entonces llevo paraguas ($Q$)”*. El compromiso solo se incumple si llueve ($V$) y no se lleva paraguas ($F$).
* **Doble implicación ($P \leftrightarrow Q$):** *“Un triángulo es equilátero ($P$) si y solo si todos sus ángulos miden $60^\circ$ ($Q$)”*.

#### 🧩 Ejemplo 3: Evaluación con 2 variables

Construya la tabla de verdad para la expresión $(P \to Q) \land \neg P$.

<details>
<summary>🔍 <b>Ver tabla de verdad resuelta (4 filas)</b></summary>
<br>

| $P$ | $Q$ | $P \to Q$ | $\neg P$ | $(P \to Q) \land \neg P$ |
| :---: | :---: | :---: | :---: | :---: |
| 🟢 $V$ | 🟢 $V$ | 🟢 $V$ | 🔴 $F$ | 🔴 **$F$** |
| 🟢 $V$ | 🔴 $F$ | 🔴 $F$ | 🔴 $F$ | 🔴 **$F$** |
| 🔴 $F$ | 🟢 $V$ | 🟢 $V$ | 🟢 $V$ | 🟢 **$V$** |
| 🔴 $F$ | 🔴 $F$ | 🟢 $V$ | 🟢 $V$ | 🟢 **$V$** |

</details>

#### 🧩 Ejemplo 4: Evaluación con 3 variables

Analice la expresión compuesta $(P \land Q) \to \neg R$.

<details>
<summary>🔍 <b>Ver tabla de verdad resuelta (8 filas)</b></summary>
<br>

| $P$ | $Q$ | $R$ | $P \land Q$ | $\neg R$ | $(P \land Q) \to \neg R$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 🟢 $V$ | 🟢 $V$ | 🟢 $V$ | 🟢 $V$ | 🔴 $F$ | 🔴 **$F$** |
| 🟢 $V$ | 🟢 $V$ | 🔴 $F$ | 🟢 $V$ | 🟢 $V$ | 🟢 **$V$** |
| 🟢 $V$ | 🔴 $F$ | 🟢 $V$ | 🔴 $F$ | 🔴 $F$ | 🟢 **$V$** |
| 🟢 $V$ | 🔴 $F$ | 🔴 $F$ | 🔴 $F$ | 🟢 $V$ | 🟢 **$V$** |
| 🔴 $F$ | 🟢 $V$ | 🟢 $V$ | 🔴 $F$ | 🔴 $F$ | 🟢 **$V$** |
| 🔴 $F$ | 🟢 $V$ | 🔴 $F$ | 🔴 $F$ | 🟢 $V$ | 🟢 **$V$** |
| 🔴 $F$ | 🔴 $F$ | 🟢 $V$ | 🔴 $F$ | 🔴 $F$ | 🟢 **$V$** |
| 🔴 $F$ | 🔴 $F$ | 🔴 $F$ | 🔴 $F$ | 🟢 $V$ | 🟢 **$V$** |

</details>

<div align="right"><a href="#indice">⬆️ Volver al índice</a></div>

---

<a id="seccion-2"></a>
## 2. Clasificación de proposiciones

<a id="seccion-2-1"></a>
### 2.1 Formas alternativas del condicional

En la estructura de los teoremas matemáticos, el condicional $P \to Q$ establece una relación de dependencia lógica:

{% raw %}
$$
\underbrace{P}_{\substack{\text{Antecedente / Hipótesis} \\ \textbf{(Condición Suficiente)}}} \quad \longrightarrow \quad \underbrace{Q}_{\substack{\text{Consecuente / Tesis} \\ \textbf{(Condición Necesaria)}}}
$$
{% endraw %}

#### 🗣️ Ejemplo 5: Traducciones equivalentes

Sean $P$: *“Una figura es un cuadrado”* y $Q$: *“La figura tiene cuatro lados”*. La implicación $P \to Q$ se expresa de cinco maneras equivalentes:

1. **Si** una figura es un cuadrado, **entonces** tiene cuatro lados.
2. Ser un cuadrado es **condición suficiente** para tener cuatro lados.
3. Tener cuatro lados es **condición necesaria** para ser un cuadrado.
4. Una figura es un cuadrado **solo si** tiene cuatro lados.
5. Una figura tiene cuatro lados **si** es un cuadrado.

---

<a id="seccion-2-2"></a>
### 2.2 Tautología, contradicción y contingencia

> 📌 **Clasificación por Resultado Final**
>
> {% raw %}
> $$
> \text{Clasificación}(P) = \begin{cases}
> \text{Solo valores } V & \implies \textbf{Tautología} \text{ (Verdad universal)} \\
> \text{Solo valores } F & \implies \textbf{Contradicción} \text{ (Absurdo lógico)} \\
> \text{Valores } V \text{ y } F & \implies \textbf{Contingencia} \text{ (Depende del caso)}
> \end{cases}
> $$
> {% endraw %}

Cuando una proposición compuesta resulta ser una **tautología**, su conectivo principal adquiere jerarquía metalógica:

* **Implicación lógica ($\implies$):** Sustituye a $\to$ cuando el condicional es tautológico.
* **Equivalencia lógica ($\iff$ o $\equiv$):** Sustituye a $\leftrightarrow$ cuando el bicondicional es tautológico.

#### ⚡ Casos Elementales

* **Tautología ($P \lor \neg P$):** Principio del tercero excluido (siempre $V$).
* **Contradicción ($P \land \neg P$):** Principio de no contradicción (siempre $F$).
* **Contingencia ($P \to Q$):** Presenta valores mixtos ($3V$ y $1F$).

#### 🧩 Ejemplo 6: Demostración de Silogismo Hipotético

Demuestre que $[(P \to Q) \land (Q \to R)] \implies (P \to R)$.

<details>
<summary>🔍 <b>Ver demostración por tabla de verdad</b></summary>
<br>

Definimos $E_I \colon (P \to Q) \land (Q \to R)$ y $E_D \colon P \to R$. Evaluamos $E_I \to E_D$:

| $P$ | $Q$ | $R$ | $P \to Q$ | $Q \to R$ | $E_I$ | $E_D$ | $E_I \to E_D$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | 🟢 **$V$** |
| $V$ | $V$ | $F$ | $V$ | $F$ | $F$ | $F$ | 🟢 **$V$** |
| $V$ | $F$ | $V$ | $F$ | $V$ | $F$ | $V$ | 🟢 **$V$** |
| $V$ | $F$ | $F$ | $F$ | $V$ | $F$ | $F$ | 🟢 **$V$** |
| $F$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | 🟢 **$V$** |
| $F$ | $V$ | $F$ | $V$ | $F$ | $F$ | $V$ | 🟢 **$V$** |
| $F$ | $F$ | $V$ | $V$ | $V$ | $V$ | $V$ | 🟢 **$V$** |
| $F$ | $F$ | $F$ | $V$ | $V$ | $V$ | $V$ | 🟢 **$V$** |

Al obtenerse una tautología en la columna final, la implicación lógica queda demostrada. $\blacksquare$

</details>

#### 🧩 Ejemplo 7: Verificación de Ley Distributiva

Determine si $P \lor (Q \land R) \iff (P \lor Q) \land (P \lor R)$ es una equivalencia válida.

<details>
<summary>🔍 <b>Ver demostración por tabla de verdad</b></summary>
<br>

Definimos $E_I \colon P \lor (Q \land R)$ y $E_D \colon (P \lor Q) \land (P \lor R)$:

| $P$ | $Q$ | $R$ | $Q \land R$ | $E_I$ | $P \lor Q$ | $P \lor R$ | $E_D$ | $E_I \leftrightarrow E_D$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | 🟢 **$V$** |
| $V$ | $V$ | $F$ | $F$ | $V$ | $V$ | $V$ | $V$ | 🟢 **$V$** |
| $V$ | $F$ | $V$ | $F$ | $V$ | $V$ | $V$ | $V$ | 🟢 **$V$** |
| $V$ | $F$ | $F$ | $F$ | $V$ | $V$ | $V$ | $V$ | 🟢 **$V$** |
| $F$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | $V$ | 🟢 **$V$** |
| $F$ | $V$ | $F$ | $F$ | $F$ | $V$ | $F$ | $F$ | 🟢 **$V$** |
| $F$ | $F$ | $V$ | $F$ | $F$ | $F$ | $V$ | $F$ | 🟢 **$V$** |
| $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | 🟢 **$V$** |

Por tanto, $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$. $\blacksquare$

</details>

<div align="right"><a href="#indice">⬆️ Volver al índice</a></div>

---

<a id="seccion-3"></a>
## 3. Leyes lógicas

<a id="seccion-3-1"></a>
### 3.1 Equivalencias lógicas notables

Las leyes lógicas son tautologías universales empleadas como **reglas de reemplazo algebraico** para simplificar expresiones sin alterar su valor de verdad.

| Ley Lógica | Equivalencias |
| :--- | :--- |
| **Def. del Condicional** | $P \to Q \equiv \neg P \lor Q$ |
| **Def. del Bicondicional** | $P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P)$ |
| **Conmutativa** | $P \lor Q \equiv Q \lor P$ <br> $P \land Q \equiv Q \land P$ |
| **Asociativa** | $(P \lor Q) \lor R \equiv P \lor (Q \lor R)$ <br> $(P \land Q) \land R \equiv P \land (Q \land R)$ |
| **Distributiva** | $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$ <br> $P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$ |
| **Doble Negación** | $\neg(\neg P) \equiv P$ |
| **Idempotencia** | $P \land P \equiv P$ <br> $P \lor P \equiv P$ |
| **Inversos (Complemento)** | $P \lor \neg P \equiv V$ <br> $P \land \neg P \equiv F$ |
| **Identidad y Dominación** | $P \lor F \equiv P \quad \mid \quad P \land V \equiv P$ <br> $P \land F \equiv F \quad \mid \quad P \lor V \equiv V$ |
| **Absorción** | $P \lor (P \land Q) \equiv P$ <br> $P \land (P \lor Q) \equiv P$ |
| **Contrapositiva** | $P \to Q \equiv \neg Q \to \neg P$ |
| **Leyes de De Morgan** | $\neg(P \lor Q) \equiv \neg P \land \neg Q$ <br> $\neg(P \land Q) \equiv \neg P \lor \neg Q$ |

---

<a id="seccion-3-2"></a>
### 3.2 Estrategia de simplificación

Dado que las tablas de verdad crecen exponencialmente ($2^n$: para $10$ variables se requieren $1024$ filas), la simplificación algebraica sigue un algoritmo heurístico en dos fases:

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ FASE 1: REDUCCIÓN ESTRUCTURAL (A operadores booleanos: ∧, ∨, ¬)         │
│   1. Eliminar condicionales (→) y bicondicionales (↔) por definición.   │
│   2. Interiorizar negaciones usando Leyes de De Morgan y Doble Negación.│
├─────────────────────────────────────────────────────────────────────────┤
│ FASE 2: INTERACCIÓN ALGEBRAICA                                          │
│   3. Expandir o factorizar mediante la Ley Distributiva.                │
│   4. Reagrupar términos semejantes con Leyes Asociativa y Conmutativa.  │
│   5. Colapsar redundancias con Absorción, Inversos, Idempotencia e Id.  │
└─────────────────────────────────────────────────────────────────────────┘
```

#### 🧩 Ejemplos Resueltos de Simplificación

**1. Simplificar:** $(A \land B) \to \neg(A \land B)$

<details>
<summary>🔍 <b>Ver desarrollo paso a paso</b></summary>
<br>

{% raw %}
$$
\begin{aligned}
(A \land B) \to \neg(A \land B) &\equiv \neg(A \land B) \lor \neg(A \land B) && \text{(Definición de condicional)} \\
&\equiv \neg(A \land B) && \text{(Idempotencia)} \\
&\equiv \neg A \lor \neg B && \text{(Ley de De Morgan)} \quad \blacksquare
\end{aligned}
$$
{% endraw %}

</details>

<br>

**2. Simplificar:** $\neg(B \land A) \lor \neg B$

<details>
<summary>🔍 <b>Ver desarrollo paso a paso</b></summary>
<br>

{% raw %}
$$
\begin{aligned}
\neg(B \land A) \lor \neg B &\equiv (\neg B \lor \neg A) \lor \neg B && \text{(Ley de De Morgan)} \\
&\equiv (\neg B \lor \neg B) \lor \neg A && \text{(Asociatividad y Conmutatividad)} \\
&\equiv \neg B \lor \neg A && \text{(Idempotencia)} \quad \blacksquare
\end{aligned}
$$
{% endraw %}

</details>

<br>

**3. Simplificar:** $(A \lor B) \land \neg A$

<details>
<summary>🔍 <b>Ver desarrollo paso a paso</b></summary>
<br>

{% raw %}
$$
\begin{aligned}
(A \lor B) \land \neg A &\equiv (A \land \neg A) \lor (B \land \neg A) && \text{(Ley distributiva)} \\
&\equiv F \lor (B \land \neg A) && \text{(Ley de inversos)} \\
&\equiv B \land \neg A && \text{(Ley de identidad)} \quad \blacksquare
\end{aligned}
$$
{% endraw %}

</details>

<br>

**4. Simplificar:** $[A \land (\neg A \lor B)] \lor (A \to \neg A)$

<details>
<summary>🔍 <b>Ver desarrollo paso a paso</b></summary>
<br>

{% raw %}
$$
\begin{aligned}
[A \land (\neg A \lor B)] \lor (A \to \neg A) &\equiv [A \land (\neg A \lor B)] \lor (\neg A \lor \neg A) && \text{(Definición de condicional)} \\
&\equiv [A \land (\neg A \lor B)] \lor \neg A && \text{(Idempotencia)} \\
&\equiv [(A \land \neg A) \lor (A \land B)] \lor \neg A && \text{(Ley distributiva)} \\
&\equiv [F \lor (A \land B)] \lor \neg A && \text{(Ley de inversos)} \\
&\equiv (A \land B) \lor \neg A && \text{(Ley de identidad)} \\
&\equiv (A \lor \neg A) \land (B \lor \neg A) && \text{(Ley distributiva)} \\
&\equiv V \land (B \lor \neg A) && \text{(Ley de inversos)} \\
&\equiv B \lor \neg A && \text{(Ley de identidad)} \quad \blacksquare
\end{aligned}
$$
{% endraw %}

</details>

#### 📝 Práctica: Ejercicios de Simplificación

Simplifique las siguientes expresiones aplicando las leyes lógicas:
1. $(B \land B) \land \neg B \land (B \lor B)$
2. $((A \to \neg A) \to A) \to (\neg B \lor A)$
3. $A \to \neg(A \to (A \to (\neg B \lor B)))$
4. $(A \lor B) \lor \neg A \lor B$

<div align="right"><a href="#indice">⬆️ Volver al índice</a></div>

---

<a id="seccion-4"></a>
## 4. Razonamientos e inferencia

Un **razonamiento** vincula un conjunto de premisas ($P_1, P_2, \dots, P_n$) con una conclusión ($C$):

{% raw %}
$$ \underbrace{(P_1 \land P_2 \land \cdots \land P_n)}_{\text{Premisas}} \longrightarrow \underbrace{C}_{\text{Conclusión}} \qquad\Longleftrightarrow\qquad \begin{array}{l} P_1 \\ P_2 \\ \vdots \\ P_n \\ \hline \therefore C \end{array} $$
{% endraw %}

* **Razonamiento Válido:** La implicación asociada es una **tautología** (es imposible que todas las premisas sean verdaderas y la conclusión falsa).
* **Razonamiento Inválido (Falacia):** Existe al menos un **contraejemplo** donde todas las premisas son $V$ y la conclusión es $F$.

---

<a id="seccion-4-1"></a>
### 4.1 Determinación analítica de invalidez

En lugar de construir una tabla de verdad completa, podemos probar la invalidez asignando directamente $C \equiv F$ y forzando que cada premisa sea $V$. Si no surge ninguna contradicción, el contraejemplo demuestra que el argumento es inválido.

#### 🧩 Ejemplo 8: Prueba de invalidez por contraejemplo

Demuestre la invalidez del siguiente razonamiento:

{% raw %}
$$
\begin{array}{ll}
P_1: & p \lor q \\
P_2: & p \\
P_3: & q \to p \\
P_4: & \neg q \lor p \\
\hline
\therefore & q
\end{array}
$$
{% endraw %}

<details>
<summary>🔍 <b>Ver resolución analítica</b></summary>
<br>

1. Imponemos conclusión falsa: $q \equiv F$.
2. Imponemos premisa $P_2$ verdadera: $p \equiv V$.
3. Verificamos el resto de las premisas con $p \equiv V$ y $q \equiv F$:
   * $P_1: V \lor F \equiv V$ ✅
   * $P_3: F \to V \equiv V$ ✅
   * $P_4: \neg F \lor V \equiv V \lor V \equiv V$ ✅

Como todas las premisas son verdaderas y la conclusión es falsa para la asignación $(p = V, q = F)$, el razonamiento es **inválido**. $\blacksquare$

</details>

---

<a id="seccion-4-2"></a>
### 4.2 Reglas de inferencia y prueba directa

La **prueba directa** construye una cadena deductiva finita partiendo de las premisas y aplicando reglas de inferencia válidas hasta alcanzar la conclusión.

| Regla de Inferencia | Esquema | Regla de Inferencia | Esquema |
| :--- | :--- | :--- | :--- |
| **Modus Ponens (MP)** | $P \to Q, \ P \ \therefore \ Q$ | **Modus Tollens (MT)** | $P \to Q, \ \neg Q \ \therefore \ \neg P$ |
| **Silogismo Hipotético (SH)** | $P \to Q, \ Q \to R \ \therefore \ P \to R$ | **Silogismo Disyuntivo (SD)** | $P \lor Q, \ \neg P \ \therefore \ Q$ |
| **Silogismo Constructivo** | $P \to Q, \ R \to S, \ P \lor R \ \therefore \ Q \lor S$ | **Silogismo Destructivo** | $P \to Q, \ R \to S, \ \neg Q \lor \neg S \ \therefore \ \neg P \lor \neg R$ |
| **Simplificación (Simp.)** | $P \land Q \ \therefore \ P$ (o $Q$) | **Conjunción (Conj.)** | $P, \ Q \ \therefore \ P \land Q$ |
| **Adición (Ad.)** | $P \ \therefore \ P \lor R$ | **Exportación / Importación** | $(P \land R) \to Q \iff P \to (R \to Q)$ |

#### 💡 Estrategia Híbrida de Resolución
1. **Hacia atrás (por objetivos):** Identificar qué regla produce la conclusión deseada ($C$) y determinar sus sub-metas.
2. **Hacia adelante (por datos):** Combinar las premisas disponibles para generar dichas sub-metas.

#### 🧩 Ejemplo 9: Demostración por Prueba Directa

Demuestre la validez del razonamiento: $1.\ P \to Q \quad 2.\ P \lor R \quad 3.\ \neg R \quad \therefore \quad Q$

<details>
<summary>🔍 <b>Ver tabla de deducción</b></summary>
<br>

| Paso | Proposición | Justificación | Referencias |
| :---: | :--- | :--- | :---: |
| **1** | $P \to Q$ | Premisa | — |
| **2** | $P \lor R$ | Premisa | — |
| **3** | $\neg R$ | Premisa | — |
| **4** | $P$ | Silogismo Disyuntivo (SD) | $2, 3$ |
| **5** | **$Q$** | **Modus Ponens (MP)** | **$1, 4$** |

$\blacksquare$

</details>

---

<a id="seccion-4-3"></a>
### 4.3 Reducción al absurdo

La **reducción al absurdo** es un método indirecto que incorpora la negación de la conclusión ($\neg C$) como una premisa auxiliar. Si al operar se deriva una contradicción explícita ($r \land \neg r$), la suposición $\neg C$ es falsa y la conclusión $C$ queda demostrada.

#### 🧩 Ejemplo 10: Demostración por Reducción al Absurdo

Valide el razonamiento anterior ($1.\ P \to Q \quad 2.\ P \lor R \quad 3.\ \neg R \quad \therefore \quad Q$) mediante reducción al absurdo.

<details>
<summary>🔍 <b>Ver tabla de deducción indirecta</b></summary>
<br>

| Paso | Proposición | Justificación | Referencias |
| :---: | :--- | :--- | :---: |
| **1** | $P \to Q$ | Premisa | — |
| **2** | $P \lor R$ | Premisa | — |
| **3** | $\neg R$ | Premisa | — |
| **4** | $\neg Q$ | Premisa auxiliar (Reducción al absurdo) | — |
| **5** | $\neg P$ | Modus Tollens (MT) | $1, 4$ |
| **6** | $P$ | Silogismo Disyuntivo (SD) | $2, 3$ |
| **7** | **$P \land \neg P$** | **Conjunción (Contradicción)** | **$6, 5$** |

Al alcanzar el absurdo $P \land \neg P$, se concluye que $Q$ es válido. $\blacksquare$

</details>

<div align="right"><a href="#indice">⬆️ Volver al índice</a></div>

---

<a id="seccion-5"></a>
## 5. Cuantificadores y lógica de predicados

<a id="seccion-5-1"></a>
### 5.1 Predicados y tipos de cuantificadores

La lógica proposicional no puede analizar la estructura interna de enunciados como *“Todos los hombres son mortales; Sócrates es hombre; por tanto, Sócrates es mortal”*. Para ello se introducen los **predicados** $P(x)$ sobre un **universo de discurso** ($U$) y los **cuantificadores**:

| Cuantificador | Símbolo | Notación | Condición de Verdad |
| :--- | :---: | :---: | :--- |
| **Universal** | $\forall$ | $\forall x\, P(x)$ | Es $V$ si $P(x)$ se cumple para **todos** los $x \in U$. |
| **Existencial** | $\exists$ | $\exists x\, P(x)$ | Es $V$ si $P(x)$ se cumple para **al menos un** $x \in U$. |
| **Existencial Único** | $\exists!$ | $\exists! x\, P(x)$ | Es $V$ si $P(x)$ se cumple para **exactamente un** $x \in U$. |

#### 🧩 Ejemplo 11: Formalización con predicados

Simbolice: *“Cualquier estudiante de la facultad debe aprobar Cálculo y Matemáticas Discretas”*.

* **Universo ($U$):** Estudiantes de la facultad.
* **Predicados:** $\text{ApruebaC}(x)$: *$x$ aprueba Cálculo*; $\text{ApruebaMD}(x)$: *$x$ aprueba Matemáticas Discretas*.
* **Formalización:**
  {% raw %}
  $$\forall x \big[\text{ApruebaC}(x) \land \text{ApruebaMD}(x)\big]$$
  {% endraw %}

---

<a id="seccion-5-2"></a>
### 5.2 Negación y propiedades

> 📌 **Teorema 1: Leyes de De Morgan para Cuantificadores**
>
> {% raw %}
> $$
> \neg \forall x\, P(x) \equiv \exists x\, (\neg P(x)) \qquad\qquad \neg \exists x\, P(x) \equiv \forall x\, (\neg P(x))
> $$
> {% endraw %}

#### 🧩 Ejemplo 12: Negación de expresiones cuantificadas

**1. En $U = \mathbb{R}$, simplifique:** $\neg \forall x [x > 3 \to x^2 > 9]$

<details>
<summary>🔍 <b>Ver solución</b></summary>
<br>

{% raw %}
$$
\begin{array}{rcl}
\neg \forall x [x > 3 \to x^2 > 9] &\equiv& \exists x \big[\neg(x > 3 \to x^2 > 9)\big] \quad \text{(De Morgan para cuantificadores)} \\[6pt]
&\equiv& \exists x \big[x > 3 \land \neg(x^2 > 9)\big] \quad \text{(Negación del condicional)} \\[6pt]
&\equiv& \exists x \big[x > 3 \land x^2 \leq 9\big] \quad \text{(Negación de desigualdad)} \quad \blacksquare
\end{array}
$$
{% endraw %}

</details>

<br>

**2. En $U = \mathbb{R}$, simplifique:** $\neg \forall x [f(x) = 0 \to x = 0]$

<details>
<summary>🔍 <b>Ver solución</b></summary>
<br>

{% raw %}
$$
\begin{array}{rcl}
\neg \forall x [f(x) = 0 \to x = 0] &\equiv& \exists x \big[\neg(f(x) = 0 \to x = 0)\big] \quad \text{(De Morgan para cuantificadores)} \\[6pt]
&\equiv& \exists x \big[f(x) = 0 \land \neg(x = 0)\big] \quad \text{(Negación del condicional)} \\[6pt]
&\equiv& \exists x \big[f(x) = 0 \land x \neq 0\big] \quad \text{(Negación de igualdad)} \quad \blacksquare
\end{array}
$$
{% endraw %}

</details>

> 📌 **Teorema 2: Álgebra de Cuantificadores (Dominio no vacío)**
>
> **Equivalencias Lógicas ($\equiv$):**
> 1. $\forall x (P(x) \land Q(x)) \equiv \forall x\, P(x) \land \forall x\, Q(x)$
> 2. $\forall x (P(x) \to \neg Q(x)) \equiv \neg \exists x (P(x) \land Q(x))$
> 3. $\neg \forall x (P(x) \to Q(x)) \equiv \exists x (P(x) \land \neg Q(x))$
> 4. $\forall x\, P(x) \to \exists x\, Q(x) \equiv \exists x (P(x) \to Q(x))$
> 5. $\exists x (P(x) \lor Q(x)) \equiv \exists x\, P(x) \lor \exists x\, Q(x)$
>
> **Implicaciones Unidireccionales ($\implies$):**
> 6. $\forall x\, P(x) \implies \exists x\, P(x)$
> 7. $\forall x\, P(x) \lor \forall x\, Q(x) \implies \forall x (P(x) \lor Q(x))$
> 8. $\forall x (P(x) \to Q(x)) \implies \forall x\, P(x) \to \forall x\, Q(x)$
> 9. $\exists x (P(x) \land Q(x)) \implies \exists x\, P(x) \land \exists x\, Q(x)$

---

<a id="seccion-5-3"></a>
### 5.3 Ejercicios propuestos

1. **Evaluación en $U = \mathbb{R}$:** Dados $p(x): x^2 - 7x + 10 = 0$ y $y(x): \text{sen}(x) = 0$:
   * **a)** Determine el valor de verdad de $p(2)$, $p(1)$, $y(\pi)$ y $y(\pi/2)$.
   * **b)** Justifique el valor de verdad de: $\forall x (x^2 \geq 0)$, $\exists x (x^2 + 1 = 0)$ y $\exists! x (x^2 = 0)$.

2. **Simbolización formal:** Defina el universo de discurso y los predicados para formalizar:
   * *“Algunos programadores no toman café.”*
   * *“Existe un número real negativo.”*
   * *“No hay ningún número primo que sea par.”*
   * *“Todos los números enteros son positivos o negativos.”*
   * *“Existe un número natural que es menor o igual que cero.”*
   * *“Todo número real es mayor que $5$ o menor que $2$.”*

3. **Negación en $U = \mathbb{R}$:** Simplifique justificando cada paso:
   * $\neg \forall x [x^2 \geq 0]$
   * $\neg \exists x [x > 0 \land x^2 = 2]$
   * $\neg \exists x [1 < x < 5]$
   * $\neg \exists x [x \neq 1 \land (x < -2 \lor x \geq 4)]$
   * $\neg \forall x [x > 3 \to x^2 > 9]$
   * $\neg \exists x [f(x) = 0 \land x = 0]$

4. **Negación en $U = \mathbb{N}$:** Simplifique justificando cada paso:
   * $\neg \forall x [x + 1 > x]$
   * $\neg \exists x [x^2 = 2]$
   * $\neg \forall x [x \text{ es par} \lor x \text{ es impar}]$
   * $\neg \exists x [x > 0 \land x < 1]$
   * $\neg \forall x [x > 2 \to x \geq 3]$
   * $\neg \exists x [x \neq 0 \land x^2 = 0]$

5. **Interpretación y simbolización:**
   * **a)** En el universo $U$ de todas las personas y $P(x)$: *$x$ es computista*, contraste el significado de $\forall x\, P(x)$ frente a $\exists x\, P(x)$.
   * **b)** En $U = \mathbb{Z}$, dados $p(x)$: *$x$ es par*, $q(x)$: *$x > 0$* y $r(x)$: *$x$ es múltiplo de $5$*, simbolice:
     1. Todo entero es par o múltiplo de $5$.
     2. Existe un entero positivo y par.
     3. Si un entero es múltiplo de $5$, entonces no es positivo.
     4. Un entero es par si, y solo si, es positivo.
     5. No existe ningún entero par que no sea positivo.

<div align="right"><a href="#indice">⬆️ Volver al índice</a></div>

---

<a id="seccion-6"></a>
## 6. Bibliografía

<a id="seccion-6-1"></a>
* **Epp, S. S.** (2012). *Matemáticas discretas con aplicaciones* (4.ª ed.). Cengage Learning.
* **Grimaldi, R. P.** (1998). *Matemáticas discreta y combinatoria: Una introducción con aplicaciones* (3.ª ed.). Addison-Wesley Iberoamericana.
* **Johnsonbaugh, R.** (2005). *Matemáticas discretas* (6.ª ed.). Pearson Educación.
* **Kolman, B., Busby, R. C., & Ross, S.** (1997). *Estructuras de matemáticas discretas para la computación* (3.ª ed.). Prentice Hall Hispanoamericana.
* **Murillo, m.** (2012). *Introducción a la matemática discreta* (4.ª ed.). Editorial Tecnológica de Costa Rica.
* **Rosen, K. H.** (2012). *Matemática discreta y sus aplicaciones* (7.ª ed.). McGraw-Hill Interamericana.