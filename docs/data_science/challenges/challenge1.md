
# PROBLEM DESCRIPTION

Imagina que has sido contratado como Analista de Datos en una **empresa de
fabricación de dispositivos electrónicos**. Antes de tu reunión inicial con el
equipo directivo, te ofrecen un recorrido por la planta de la mano del jefe de
turno.

El recorrido comienza en el ***depósito de materias primas***. Caminas por
pasillos llenos de *materiales apilados hasta el techo en algunas secciones,
mientras que otras áreas están completamente vacías*. El jefe de turno comenta:
"Hemos recibido una gran cantidad de componentes esta semana, pero parece que
**nos hemos quedado cortos de algunos insumos cruciales**."

Luego pasas a la ***sala de producción***, donde observas varias líneas de
producción idénticas. De las diez líneas que ves, cinco funcionan de manera
fluida y eficiente, con operarios trabajando sincronizadamente. En las otras
cinco, la situación es diferente. Dos líneas tienen productos acumulados en
varios puntos. *En una línea, los operarios están parados junto a máquinas
detenidas, esperando a que se reanuden*. Escuchas a un operario decir: "**Otra
vez se detuvo la máquina.** Necesitamos que venga el técnico de mantenimiento."
Otro operario responde: "Sí, **ha estado fallando toda la semana.** Esto nos
está retrasando mucho." Las otras dos líneas más están completamente paradas,
sin operarios a la vista.

La siguiente parada es el ***depósito de productos terminados***. Aquí, ves
*espacios de bodega densamente cargados y otros espacios donde faltan
productos*. Escuchas a un empleado diciendo: "Otra vez nos quedamos sin poder
completar el cargamento de protectores de sobrecargas." Otro empleado responde:
"aunque no sobren, al menos, los circuitos temporizadores nunca faltan"
Mientras continúas, otro trabajador menciona: "Tenemos que reubicar las placas
de control, están ocupando demasiado espacio."

Después del recorrido, llegas a la reunión con el equipo directivo. Ellos te
explican que tu primer proyecto esta relacionado con la optimización los costos
de producción. Te proporcionan acceso a una vasta cantidad de datos históricos
que incluyen registros de producción, inventarios, costos de materia prima,
entre otros. Tu trabajo inicial implica verificar la integridad y veracidad de
estos datos, proponer mejoras en la gestión de adquisición y registro de datos,
para luego identificar áreas de mejora y optimización.


## OBJETIVOS DEL PROYECTO

1- Optimización de costos de producción.

2- Verificar la integridad y veracidad de datos.

3- Proponer mejoras en la adquisición y registro de datos.

4- Identificar áreas de mejora y optimización.


### Observaciones sobre los objetivos del proyecto. 

Dado que el presente es un ejercicio teórico solo se puede especular sobre los
posibles resultados del mismo. Únicamente se presentan posibles caminos a
seguir.

Sobre la *integridad y veracidad de los datos.* **no se provee mayor claridad
sobre los métodos de recolección de datos** actuales y datos disponibles para
análisis.

Sobre las *mejoras en la adquisición y registro de datos.* Una vez finalizado
el proyecto se pueden establecer criterios de validación y recolección de
datos, según utilidad características, prioridades y necesidades. 

Sobre *identificar áreas de mejora y optimización.* Tanto en los procesos de
producir como así también los procesos de recolección y validación de datos.
Solo es posible proveer sugerencias para mejoras una vez culminada la
investigación. 


## DATOS/HERRAMIENTAS

- Datos históricos.
    - Registros de producción.
    - Inventarios
    - Costos de materia prima.


## DATOS DE INTERÉS <a id="datos_de_interes"></a>

Se mencionan a continuación los datos que serian de interés para el proyecto.
Datos necesarios como así también información de utilidad para el proyecto.

* **MATERIAS PRIMAS**   
     - Oferta de materias primas y costos.   
     - Costos de almacenamiento.
     - Normativas de uso internacionales. (Implica algún costo adicional su
       utilización?)
 
* **PRODUCCIÓN**
     - Operarios involucrados en producción y mantenimiento.
     - Productividad de cuadrillas de operarios. (Operarios involucrados,
       tiempo en la empresa vs. productividad.)
     - Historial de mantenimiento.
     - Cronograma de mantenimiento.
     - Costos de mantenimiento.
     - Costos de inactividad. 
     - Rentabilidad de productos terminados vs materia prima.
     - Cumplimiento de normas internacionales para la producción. (Se deben
       cumplir normas internacionales para la producción?. Tipo certificaciones
       internacionales. permisos ambientales, etc.)
     - Tiempos de producción vs. costo por producto.
     - Tiempos de producción vs. costo por cuadrilla de operarios.
 
* **PRODUCTOS TERMINADOS**
     - Costo de almacenamiento.
     - "Completar cargamentos".  
     - Valuación temporal del producto. (Varia su valor según el tiempo que
       pasa en almacén?)
     - Ubicación de productos?.

# PROCEDIMIENTO DE INVESTIGACIÓN 

Se describe a continuación la metodología de análisis para el presente
proyecto. Que tipo de análisis se utilizaría. Las herramientas que se
utilizarían. 


### OBSERVACIONES INICIALES 

Para realizar la investigación se aria una segmentación en áreas de interés
según lo indicado en el punto anterior: *materias primas, producción, productos
terminados*.

Dado que no se puede evaluar del desempeño productivo de una empresa
considerando únicamente factores internos. Se procederían a la segmentación en
periodos temporales de 5 años a partir del año 2000. Siendo así 4 periodos de 5
años en total. Esto es porque:

-  Las regulaciones gubernamentales cambian. Permitiendo o restringiendo
   importaciones. Imponiendo variaciones impositivas. etc.
-  Existen periodos de inactividad obligatoria como la [pandemia
   covid-19](https://es.wikipedia.org/wiki/Pandemia_de_COVID-19) ocurrida en el
   año 2020-2023 que afecto la producción y economía mundial.
-  Existen competencias economicas o sanciones impuestas entre gobiernos que
   hacen que la economia y la produccion varie.
-  En algunas ocaciones las temporadas de invierno son mas fuertes que en otras
   provocando de esta forma que los operarios sufran mas enfermedades de epoca.

Estas son solo algunas de las razones existentes que hacen necesaria la
segmentacion temporal en el proceso de analisis para poder evaluar de forma
individual y veraz los datos existentes.

### Procedimientos para cada area de interes.

El procedimiento para realizar el analisis en cada area de interes. seria el
siguiente:

- Obtencion de datos mediante consultas sql u otro tipo de metodos.
- Se realizaran tareas de limpieza de datos y normalizacion de datos.
- Se realizaran tareas exploratorias de datos. Teniendo en cuenta lo expuesto
  en el apartado [DATOS DE INTERES](#datos_de_interes).
- [**ANALISIS DE
  Pareto**](https://es.wikipedia.org/wiki/Principio_de_Pareto).[^2]
[^2]: Es un postulado que establece de manera arbitraria que el el 80% de los
efectos proviene del 20% de las causas. Podria traducirse en terminos
empresariales: *es probable que el 20% de los clientes generen aproximadamente
el 80% de los ingresos de una empresa.*  para cada area de interes dentro del
analisis se intentaria identificar los factores de exito para la optimisacion
de los procesos de la empresa.

- Para cada caso se intentara identificar los factores de mayor productividad
  que son de interes segun lo expuesto en el apartado [DATOS DE
  ITERES](#datos_de_interes). 
- Analisis global del proyecto. una vez finalisadas las etapas anteriores y con
  una vision mas amplia de los procesos de la empresa. Se procede a realizar
  una integracion glbal de los resultados. Redactando conclusiones para cada
  area de interes del proyecto.
- conclusiones finales. Integracion de conclusiones finales en una conclusion
  final del proyecto indicando ayaszgos principales y puntos fuertes y debiles
  del proceso de produccion.

**PRESENTACION DE RESULTADOS**   

La metodologia de presentacion de los resultados seria a travez de informes
ejecutivos. No mas de 5 paginas por area de interes resaltando los ayazgos y
los puntos fuertes y debiles con respecto al area analizadas.

Tambien la preparacion de graficas para ilustrar los datos de mayor relevancia.

Entrega de informe completo con toda la informacion dentro del mismo. 