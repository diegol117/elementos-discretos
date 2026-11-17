# 📐 Notas Generales — Teoría de Conjuntos

> **Autor:** Diego Linares &nbsp;|&nbsp; **Área:** Fundamentos de Matemáticas y Teoría de Conjuntos &nbsp;|&nbsp; **Nivel:** Universitario

---

## 📑 Mapa de Contenidos

| Módulo | Tema Principal | Subtemas Clave |
| :--- | :--- | :--- |
| **01** | [**Definiciones Fundamentales**](#1-definiciones-fundamentales) | [1.1 Concepto de conjunto](#11-concepto-de-conjunto) • [1.2 Conjuntos notables](#12-conjuntos-notables-vacío-y-universal) • [1.3 Formas de definición](#13-formas-de-definición) |
| **02** | [**Operaciones entre Conjuntos**](#2-operaciones-entre-conjuntos) | [2.1 Operaciones básicas](#21-operaciones-aritmético-lógicas) • [2.2 Diferencia simétrica](#22-diferencia-simétrica) • [2.3 Ejercicios combinados](#23-ejemplo-de-operaciones-combinadas) |
| **03** | [**Cardinalidad y Venn**](#3-cardinalidad-y-diagramas-de-venn) | [3.1 Diagramas de Venn](#31-estudio-visual-y-diagramas-de-venn) • [3.2 Teorema de cardinales](#32-cardinalidad-y-teoremas) |
| **04** | [**Relaciones y Demostraciones**](#4-relaciones-y-demostraciones-con-hipótesis) | [4.1 Inclusión e igualdad](#41-relaciones-entre-conjuntos) • [4.2 Estrategias de demostración](#42-estrategias-de-demostración) |
| **05** | [**Álgebra de Conjuntos**](#5-leyes-del-álgebra-de-conjuntos) | [5.1 Demostraciones sin hipótesis](#51-demostraciones-sin-hipótesis-previa) • [5.2 Tabla de leyes](#52-tabla-general-de-leyes-algebraicas) |
| **06** | [**Conjuntos Especiales**](#6-conjuntos-especiales) | [6.1 Familias](#61-familias-de-conjuntos) • [6.2 Potencia](#62-la-familia-potencia) • [6.3 Partición](#63-la-subfamilia-partición) • [6.4 Producto cartesiano](#64-el-conjunto-producto-cartesiano) |
| **07** | [**Referencias**](#7-bibliografía) | [7.1 Bibliografía recomendada](#7-bibliografía) |

---

## 1. Definiciones Fundamentales

### 1.1 Concepto de conjunto

Habiendo estudiado las leyes de la lógica proposicional y el comportamiento de los conectivos lógicos, nos encontramos en la posición idónea para abordar la Teoría de Conjuntos. Existe una analogía profunda y estructural entre ambas disciplinas: mientras que la lógica opera sobre proposiciones que pueden ser verdaderas o falsas, la teoría de conjuntos trabaja sobre colecciones de objetos que cumplen o no con dichas proposiciones.

De este modo, los conectivos lógicos que ya conocemos ($\land, \lor, \neg$) se materializan textualmente y formalmente en operaciones algebraicas entre conjuntos.

> 📌 **Definición Formal**
>
> Un **conjunto** es una colección de objetos bien definidos, llamados elementos, que comparten una característica común o están agrupados bajo un mismo criterio.
> 
> Un conjunto se denota generalmente por letras mayúsculas ($A, B, C, \dots$) y sus elementos se encierran entre llaves, separados por comas.

#### 🧪 Ejemplo 1: Notación básica
El conjunto de las vocales del alfabeto español se puede escribir por extensión como:
$$V = \{a, e, i, o, u\}$$

---

### 1.2 Conjuntos notables: Vacío y Universal

Antes de establecer cómo se relacionan u operan los conjuntos entre sí, es necesario definir dos conjuntos notables que sirven como los límites absolutos de cualquier espacio de estudio: el que carece por completo de elementos y el marco de referencia que los contiene a todos.

Estos conjuntos representan los extremos lógicos de la teoría y se definen formalmente a partir de proposiciones que son siempre falsas (contradicciones) o siempre verdaderas (tautologías), utilizando un conjunto arbitrario $A$ y un universo $U$.

| Conjunto | Definición Formal | Sentido Lógico |
| :--- | :--- | :--- |
| **Vacío ($\emptyset$)** | $\emptyset = \{x \mid x \in A \land x \notin A\}$ | Es una contradicción. |
| **Universal ($U$)** | $U = \{x \mid x \in A \lor x \notin A\}$ | Es una tautología. |

---

### 1.3 Formas de definición

Para trabajar con conjuntos de manera matemática, es indispensable establecer con precisión qué elementos forman parte de ellos mediante dos métodos principales:

* **Por Extensión (o Tabulación):** Se enumeran o listan cada uno de los elementos del conjunto, separándolos por comas.
  $$A = \{a_1, a_2, \dots, a_n\}$$
* **Por Comprensión (o Forma Constructiva):** Se menciona una propiedad común a todos los elementos mediante una función proposicional.
  $$A = \{x \in U \mid P(x)\}$$
  Donde $P(x)$ representa la propiedad (o función proposicional) que debe cumplir cada elemento $x$ para pertenecer al conjunto universo $U$.

#### 🧩 Ejemplo 2: Conversión entre formas
A partir de las descripciones dadas, defina por comprensión y analice su representación por extensión:
* **a)** El conjunto de los números naturales impares ($I$).
  $$I = \{x \in \mathbb{N} \mid x = 2k - 1 \text{ para algún } k \in \mathbb{N}\}$$
* **b)** El conjunto de todos los números reales mayores que 5 ($M$).
  $$M = \{x \in \mathbb{R} \mid x > 5\}$$
  *Análisis:* Es un conjunto infinito y no numerable; es rigurosamente imposible representarlo por extensión completa.
* **c)** El conjunto $B = \{7, 14, 21, 28, 35\}$.
  $$B = \{x \in \mathbb{N} \mid x = 7k \land 1 \leq k \leq 5\}$$

#### 🧩 Ejemplo 3: Evaluación y resolución de conjuntos
Exprese por extensión los siguientes conjuntos e identifique su cardinalidad:
* **a)** $A = \{x \in \mathbb{Z} \mid -2 \leq x < 3\}$
  $$\implies A = \{-2, -1, 0, 1, 2\}, \quad |A| = 5$$
* **b)** $C = \{x \in \mathbb{R} \mid 3x - 7 = 2\}$
  $$\text{Resolviendo: } 3x = 9 \implies x = 3 \implies C = \{3\}, \quad |C| = 1$$
* **c)** $D = \{x \in \mathbb{R} \mid x^2 + 4 = 0\}$
  $$\text{En } \mathbb{R} \text{ no existe solución real para } x^2 = -4 \implies D = \emptyset \text{ o } \{\}$$

<div align="right"><a href="#-mapa-de-contenidos">⬆️ Volver al índice</a></div>

---

## 2. Operaciones entre Conjuntos

### 2.1 Operaciones aritmético-lógicas

El verdadero puente algebraico con la lógica proposicional ocurre al introducir las operaciones. Cada operación fundamental se gobierna por un conectivo lógico específico: la **unión** responde a la disyunción ($\lor$), la **intersección** a la conjunción ($\land$) y el **complemento** a la negación ($\neg$).

Dados los conjuntos $A$ y $B$ en un universo $U$, se definen las siguientes operaciones:

| Operación | Definición Formal | Conectivo Lógico |
| :--- | :--- | :---: |
| **Unión** | $A \cup B = \{x \mid x \in A \lor x \in B\}$ | $\lor$ |
| **Intersección** | $A \cap B = \{x \mid x \in A \land x \in B\}$ | $\land$ |
| **Diferencia** | $A - B = \{x \mid x \in A \land x \notin B\}$ | $\land \ \neg$ |
| **Complemento** | $A^c = \{x \in U \mid x \notin A\}$ | $\neg$ |

---

### 2.2 Diferencia simétrica

A partir de estas operaciones básicas, es posible estructurar operaciones más complejas. Un caso de especial interés geométrico y algebraico es la exclusión mutua de elementos, conocida como **diferencia simétrica**, la cual puede entenderse desde dos perspectivas equivalentes:

| Perspectiva | Definición Formal |
| :--- | :--- |
| **Definición I (Por exclusión)** | $A \triangle B = (A \cup B) - (A \cap B)$ |
| **Definición II (Por unión de diferencias)** | $A \triangle B = (A - B) \cup (B - A)$ |

---

### 2.3 Ejemplo de operaciones combinadas

Considere el universo $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$, $A = \{1, 2, 3, 4, 5\}$, $B = {4, 5, 6, 7}$ y $C = \{2, 4, 8, 9\}$. Determine por extensión:
$$\left[(A \cup B) - C\right]^c \cap (A \triangle B)$$

<details>
<summary>🔍 <b>Ver desarrollo paso a paso</b></summary>
<br>

1. **Unión ($A \cup B$):** 
   $$A \cup B = \{1, 2, 3, 4, 5, 6, 7\}$$
2. **Diferencia ($(A \cup B) - C$):** Eliminamos los elementos de $C$ ($2$ y $4$):
   $$(A \cup B) - C = \{1, 3, 5, 6, 7\}$$
3. **Complemento ($[\dots]^c$):** Respecto a $U$:
   $$\left[(A \cup B) - C\right]^c = \{2, 4, 8, 9, 10\}$$
4. **Diferencia Simétrica ($A \triangle B$):** Elementos exclusivos de $A$ ($\{1, 2, 3\}$) y de $B$ ($\{6, 7\}$):
   $$A \triangle B = \{1, 2, 3, 6, 7\}$$
5. **Intersección Final:** Elementos comunes entre el paso 3 y el paso 4:
   $$\{2, 4, 8, 9, 10\} \cap \{1, 2, 3, 6, 7\} = \{2\}$$

$\blacksquare$

</details>

<div align="right"><a href="#-mapa-de-contenidos">⬆️ Volver al índice</a></div>

---

## 3. Cardinalidad y Diagramas de Venn

### 3.1 Estudio visual y diagramas de Venn

Los **Diagramas de Venn** son representaciones gráficas utilizadas para mostrar las relaciones de pertenencia, inclusión y operaciones entre conjuntos mediante regiones espaciales delimitadas por un rectángulo universal ($U$) y círculos u elipses para los conjuntos.

---

### 3.2 Cardinalidad y teoremas

> 📌 **Definición Formal**
>
> El **cardinal** de un conjunto finito $A$ es el número entero no negativo que indica la cantidad de elementos únicos y distintos que posee. Se denota por $|A|$ o $n(A)$.

> 📌 **Teorema 1: Propiedades de Cardinales**
>
> | Propiedad | Fórmula de Cardinalidad |
| :--- | :--- |
| **Unión** | $|A \cup B| = |A| + |B| - |A \cap B|$ |
| **Complemento** | $|A^c| = |U| - |A|$ |
| **Diferencia** | $|A - B| = |A| - |A \cap B|$ |
| **Diferencia Simétrica (Def. I)** | $|A \triangle B| = |A \cup B| - |A \cap B|$ |
| **Diferencia Simétrica (Def. II)** | $|A \triangle B| = |A - B| + |B - A|$ |

#### 🧩 Ejemplo 4: Aplicación práctica con conteo
En un grupo de $100$ estudiantes universitarios ($|U| = 100$), $60$ programan en Python ($|P| = 60$), $40$ asisten a asesorías de Estructuras Discretas ($|D| = 40$) y $20$ realizan ambas actividades ($|P \cap D| = 20$). Determine:
* **a)** Estudiantes que programan en Python o asisten a asesorías:
  $$|P \cup D| = |P| + |D| - |P \cap D| = 60 + 40 - 20 = 80$$
* **b)** Estudiantes que no realizan ninguna de las dos actividades:
  $$|(P \cup D)^c| = |U| - |P \cup D| = 100 - 80 = 20$$

<div align="right"><a href="#-mapa-de-contenidos">⬆️ Volver al índice</a></div>

---

## 4. Relaciones y Demostraciones con Hipótesis

### 4.1 Relaciones entre conjuntos

Mediante el cuantificador universal ($\forall$) y el condicional lógico ($\implies$), formalizamos la inclusión y la igualdad:

| Concepto | Definición Formal |
| :--- | :--- |
| **Subconjunto (Inclusión)** | $A \subseteq B \iff (\forall x)(x \in A \implies x \in B)$ |
| **Subconjunto Propio** | $A \subset B \iff (A \subseteq B \land A \neq B)$ |
| **Igualdad de Conjuntos** | $A = B \iff (A \subseteq B \land B \subseteq A)$ |

Cuando fijamos $A \subseteq B$ como hipótesis restrictiva, las operaciones colapsan en equivalencias directas:

> 📌 **Teorema 2: Consecuencias de la Inclusión ($A \subseteq B$)**
> 1. $A \cup B = B$ (Absorción en la unión)
> 2. $A \cap B = A$ (Absorción en la intersección)
> 3. $A - B = \emptyset$ (Vaciamiento de diferencia)
> 4. $A^c \cup B = U$ (Cobertura universal)

---

### 4.2 Estrategias de demostración

Ante un enunciado del tipo: *"Si $C_1 \subseteq C_2$, entonces $(C_1 - C_3) \subseteq (C_2 - C_3)$"*, la demostración formal exige:
1. Declarar premisas e hipótesis.
2. Introducir un elemento genérico ($x \in C_1 - C_3$).
3. Aplicar definiciones formales y reglas de inferencia lógica para llegar a la tesis.

#### 🧩 Ejemplo 5: Demostración de inclusión
Si $A \subseteq B$, demuestre que $A \cap A \subseteq B \cap A$.

<details>
<summary>🔍 <b>Ver desarrollo formal paso a paso</b></summary>
<br>

| Paso | Proposición | Justificación |
| :---: | :--- | :--- |
| **1** | $x \in A \implies x \in B$ | Hipótesis (Def. de $A \subseteq B$) |
| **2** | $x \in A \land x \in A$ | Nueva hipótesis auxiliar |
| **3** | $x \in A$ | Idempotencia en (2) |
| **4** | $x \in B$ | Modus Ponens en (1) y (3) |
| **5** | $x \in B \land x \in A$ | Conjunción entre (3) y (4) |

Por tanto, $A \cap A \subseteq B \cap A$. $\blacksquare$

</details>

<div align="right"><a href="#-mapa-de-contenidos">⬆️ Volver al índice</a></div>

---

## 5. Leyes del Álgebra de Conjuntos

### 5.1 Demostraciones sin hipótesis previa

Para demostrar igualdades de conjuntos sin hipótesis adicionales, se parte de un lado de la igualdad aplicando definiciones de operadores y equivalencias lógicas paso a paso.

#### 🧩 Ejemplo 6: Demostración de Ley Distributiva
Demuestre que $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$.

<details>
<summary>🔍 <b>Ver desarrollo paso a paso</b></summary>
<br>

Sea $x$ un elemento arbitrario:
$$
\begin{aligned}
x \in A \cup (B \cap C) &\iff x \in A \lor (x \in B \land x \in C) && \text{(Def. de } \cup, \cap) \\
&\iff (x \in A \lor x \in B) \land (x \in A \lor x \in C) && \text{(Distributividad de } \lor) \\
&\iff x \in (A \cup B) \land x \in (A \cup C) && \text{(Def. de } \cup) \\
&\iff x \in [(A \cup B) \cap (A \cup C)] && \text{(Def. de } \cap) \quad \blacksquare
\end{aligned}
$$

</details>

---

### 5.2 Tabla general de leyes algebraicas

| Ley / Propiedad | Variante con Unión ($\cup$) | Variante con Intersección ($\cap$) |
| :--- | :--- | :--- |
| **Conmutativa** | $A \cup B = B \cup A$ | $A \cap B = B \cap A$ |
| **Asociativa** | $A \cup (B \cup C) = (A \cup B) \cup C$ | $A \cap (B \cap C) = (A \cap B) \cap C$ |
| **Distributiva** | $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ | $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ |
| **Absorción** | $A \cup (A \cap B) = A$ | $A \cap (A \cup B) = A$ |
| **De Morgan** | $(A \cup B)^c = A^c \cap B^c$ | $(A \cap B)^c = A^c \cup B^c$ |
| **Idempotencia** | $A \cup A = A$ | $A \cap A = A$ |
| **Identidad** | $A \cup \emptyset = A \quad \mid \quad A \cup U = U$ | $A \cap U = A \quad \mid \quad A \cap \emptyset = \emptyset$ |
| **Complementación** | $A \cup A^c = U$ | $A \cap A^c = \emptyset$ |
| **Doble Complemento** | $(A^c)^c = A$ | — |

<div align="right"><a href="#-mapa-de-contenidos">⬆️ Volver al índice</a></div>

---

## 6. Conjuntos Especiales

### 6.1 Familias de conjuntos
Una **familia de conjuntos** es una colección cuyos elementos son, a su vez, otros conjuntos: $\mathcal{A} = \{A_i\}_{i \in I}$.
* **Unión generalizada:** $\bigcup_{i \in I} A_i = A_1 \cup A_2 \cup \dots \cup A_n$
* **Intersección generalizada:** $\bigcap_{i \in I} A_i = A_1 \cap A_2 \cap \dots \cap A_n$

---

### 6.2 La familia potencia

> 📌 **Definición Formal**
>
> El **conjunto potencia** $\mathcal{P}(A)$ es la familia compuesta por todos los subconjuntos posibles de $A$ (incluyendo $\emptyset$ y $A$).

> 📌 **Teorema 3: Cardinal de la Potencia**
>
> Si $A$ es un conjunto finito, el cardinal de su conjunto potencia es:
> $$|\mathcal{P}(A)| = 2^{|A|}$$

---

### 6.3 La subfamilia partición

> 📌 **Definición Formal**
>
> Una **partición** $\mathcal{P}$ de un conjunto $A$ es una familia de subconjuntos no vacíos y mutuamente disjuntos cuya unión es exactamente $A$. Cumple:
> 1. $\forall X \in \mathcal{P} \implies X \neq \emptyset$
> 2. $\forall X, Y \in \mathcal{P}$ con $X \neq Y \implies X \cap Y = \emptyset$
> 3. $\bigcup_{X \in \mathcal{P}} X = A$

> 📌 **Teorema 4:** Si $A$ no es vacío, el cardinal de una partición $\mathcal{P}$ cumple:
> $$1 \leq |\mathcal{P}| \leq |A|$$

---

### 6.4 El conjunto producto cartesiano

> 📌 **Definición Formal**
>
> El **producto cartesiano** de dos conjuntos $A$ y $B$ es el conjunto de todos los pares ordenados formados por un elemento de $A$ y uno de $B$:
> $$A \times B = \{(a, b) \mid a \in A \land b \in B\}$$

> 📌 **Teorema 5: Cardinal del Producto Cartesiano**
> 
> Si $A$ y $B$ son finitos:
> $$|A \times B| = |A| \cdot |B|$$

#### Propiedades del Producto Cartesiano
* **No conmutatividad:** $A \times B \neq B \times A$ (salvo que $A = B$ o alguno sea $\emptyset$).
* **Elemento absorbente:** $A \times \emptyset = \emptyset \times A = \emptyset$.
* **Distributividad:** $A \times (B \cup C) = (A \times B) \cup (A \times C)$.

<div align="right"><a href="#-mapa-de-contenidos">⬆️ Volver al índice</a></div>

---

## 7. Bibliografía

* **Halmos, P. R.** (1974). *Teoría intuitiva de los conjuntos*. Compañía Editorial Continental (CECSA).
* **Suppes, P.** (1972). *Teoría axiomática de conjuntos*. Editorial Norma.
* **Lipschutz, S.** (1991). *Teoría de conjuntos y temas afines* (Serie Schaum). McGraw-Hill.
* **Enderton, H. B.** (1977). *Elements of Set Theory*. Academic Press.
* **Hrbacek, K., & Jech, T.** (1999). *Introduction to Set Theory* (3.ª ed.). Marcel Dekker.
* **Rosen, K. H.** (2012). *Matemática discreta y sus aplicaciones* (7.ª ed.). McGraw-Hill Interamericana.

<div align="right"><a href="#-mapa-de-contenidos">⬆️ Volver al índice</a></div>