**La Distancia de Edición Mínima: Entendiendo el Problema**

**Problema**

En el ámbito de la laboratorio de biotecnología y el análisis de secuencias de
ADN, el problema de la distancia de edición mínima ( edit distance, ED) es una
cuestión importante y controversial. La ED se refiere a la medida del número de
nudos que se necesitan para cambiar una secuencia de ADN de origen en otra
secuencia de ADN de destino. Esta medida es fundamental en la edición génica y
en la secuenciación de ADN, ya que determina la dificultad de llevar a cabo una
reacción de edición en un gen o un segmento de ADN. Sin embargo, la ED no es
solo un problema teórico, sino que tiene implicaciones prácticas en el
desarrollo de terapias génicas y en la comprensión de la evolución molecular.

[[Notanota: La ED se refiere a la distancia entre dos secuencias de ADN, y no a
la distancia física entre dos lugares en el genoma]]

**Historia**

La idea de la distancia de edición mínima se remonta a la década de 1970,
cuando Stephen Smith y Michael Waterman publicaron un artículo que propuso la
idea de utilizar una métrica de distancia entre dos secuências de ADN para
evaluar la similaridad entre ellas. En ese momento, la ED era considerada como
una medida de la cantidad de mutaciones necesarias para cambiar una secuencia
en otra. Sin embargo, en la década de 1990, la ED comenzó a recibir más
atención debido al avance de las técnicas de secuenciación de ADN y a la
emergencia de técnicas de edición génica.

[[Nota: El artículo de Smith y Waterman (1978) es considerado un clásico en el
campo de la biotecnología y la genómica]]

**Solución**

La solución para calcular la distancia de edición mínima se basa en la teoría
de la informática y la matemática. Hay varios algoritmos para calcular la ED,
algunos de los cuales incluyen:

* El algoritmo de Needleman-Wunsch (1970): es un algoritmo de secuenciación
  global que se basa en la comparación de matrices y que se utiliza comúnmente
  para calcular la ED entre dos secuencias de ADN.
* El algoritmo de Smith-Waterman (1981): es un algoritmo de secuenciación local
  que se basa en la comparación de patrones y que se utiliza comúnmente para
  encontrar regiones similares entre dos secuencias de ADN.
* El algoritmo de edit distance with real penalty (EDR) (2010): es un algoritmo
  que toma en cuenta el costo de las modificaciones, es decir, si una
  modificación es más costosa que otra.

[[Nota: El algoritmo de Needleman-Wunsch es un algoritmo de secuenciación
global, mientras que el algoritmo de Smith-Waterman es un algoritmo de
secuenciación local]]

**Ejemplos**

* Una secuencia de ADN puede ser editada para cambiar una nucleotida
  específica, lo que implica una pequeña ED.
* La ED también puede ser utilizada para evaluar la similitud entre dos
  secuencias de ADN. Por ejemplo, si la ED entre dos secuencias de ADN es baja,
  entonces las secuencias son muy similares.

``` Secuencia 1: 5' ATCGATCG 3' Secuencia 2: 5' ATCGCG 3'

La ED entre las dos secuencias es de 1, ya que solo se necesita cambiar una
nucleotida para convertir la secuencia 1 en la secuencia 2. ```

* La ED también puede ser utilizada para evaluar la diversidad genética entre
  diferentes especies. Por ejemplo, si la ED entre dos secuencias de ADN de
  diferentes especies es alta, entonces la especie 2 ha evolucionado
  significativamente differentemente de la especie 1.

``` Secuencia 1: 5' ATCGATCG 3' (Homo sapiens) Secuencia 2: 5' ATCGCTAG 3' (Pan
troglodytes)

La ED entre las dos secuencias es alta, lo que sugiere que los humanos y los
chimpancés han evolucionado significativamente differentemente. ```

**Conclusión**

La distancia de edición mínima es una medida crítica en la biotecnología y la
genómica, ya que determina la facilidad de edición genética y la comprensión de
la evolución molecular. La ED se puede calcular utilizando diferentes
algoritmos, algunos de los cuales se basan en la teoría de la informática y la
matemática. La ED también puede ser utilizada para evaluar la similitud entre
secuencias de ADN, la diversidad genética entre especies y la facilidad de
edición genética. En resumen, la ED es un concepto fundamental en la
biotecnología y la genómica, y su comprensión es esencial para avanzar en la
comprensión de la biología molecular.

#Biotech #GeneEditing #Genomics #Bioinformatics #EditDistance
