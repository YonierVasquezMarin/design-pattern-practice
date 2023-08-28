# Que es factory method

El patrón Factory Method (Método de Fábrica) es un patrón de diseño creacional en programación orientada a objetos. Su objetivo principal es proporcionar una interfaz para crear objetos en una superclase, pero permitiendo a las subclases alterar el tipo de objetos que se crearán. Esto se logra definiendo un método abstracto en la superclase que se encargará de crear los objetos, y luego las subclases concretas implementarán ese método para crear instancias específicas de objetos.

En otras palabras, el patrón Factory Method ofrece una forma de encapsular la creación de objetos, lo que puede ser útil en situaciones en las que no se conoce de antemano el tipo exacto de objeto que se debe crear, o cuando se necesita una mayor flexibilidad para extender y agregar nuevos tipos de objetos en el futuro.

# Diferencia entre factory method y abstract factory

1. Propósito:

   - Factory Method: El propósito principal del Factory Method es definir una interfaz para crear un solo tipo de objeto dentro de una clase base, permitiendo que las subclases decidan qué clase concreta implementar.
   - Abstract Factory: El propósito del Abstract Factory es proporcionar una interfaz para crear familias completas de objetos relacionados (conjunto de objetos) sin especificar sus clases concretas.

2. Tipo de Creación:

   - Factory Method: Se enfoca en la creación de un único tipo de objeto. Cada subclase concreta del Factory Method puede crear una instancia de una clase concreta.
   - Abstract Factory: Se enfoca en la creación de múltiples objetos que están relacionados o que forman parte de una familia de objetos. Cada subclase concreta de Abstract Factory crea una familia completa de objetos.

3. Complejidad:

   - Factory Method: Es más simple en comparación con el Abstract Factory. Se utiliza cuando solo hay una variante del objeto a crear.
   - Abstract Factory: Es más complejo, ya que se encarga de crear conjuntos completos de objetos relacionados, lo que implica una mayor estructura jerárquica y más interacciones entre objetos.

4. Escalabilidad:

   - Factory Method: Es más fácil de extender para agregar nuevos tipos de objetos individuales, ya que solo requiere la creación de nuevas subclases concretas del Factory Method.
   - Abstract Factory: Permite una mayor escalabilidad al agregar nuevas familias completas de objetos. Esto implica crear nuevas subclases concretas tanto para la fábrica abstracta como para los productos concretos.

5. Nivel de Abstracción:
   - Factory Method: Ofrece un nivel de abstracción moderado, ya que separa la creación del objeto de su uso, pero no abstrae completamente las familias de objetos relacionados.
   - Abstract Factory: Ofrece un nivel de abstracción más alto, ya que proporciona una interfaz para crear familias completas de objetos y aísla al cliente de los detalles de implementación.

En resumen, el Factory Method se centra en la creación de un solo tipo de objeto y permite que las subclases decidan cuál clase concreta implementar, mientras que el Abstract Factory se enfoca en la creación de familias completas de objetos relacionados. La elección entre estos patrones depende de la complejidad y la naturaleza de las interacciones entre los objetos que se deben crear en tu diseño.

# Pasos para crear el sistema factory method

1. Crear el producto abstracto
2. Crear los productos concretos
3. Crear el creador abstracto
4. Crear los creadores concretos
