# Que es el patron bridge

Su objetivo principal es separar una abstracción de su implementación, permitiendo que ambas puedan variar de forma independiente. Esto proporciona flexibilidad y promueve el principio de "componer en lugar de heredar".

La abstracción puede enumerar los mismos métodos que la implementación, pero normalmente la abstracción declara algunos comportamientos complejos que se basan en una amplia variedad de operaciones primitivas declaradas por la implementación.

Ventajas:

- Desacoplamiento entre la abstracción y la implementación, lo que facilita la extensión y modificación de ambas sin afectar a la otra.
- Permite que diferentes implementaciones coexistan y se utilicen en tiempo de ejecución.
- Facilita la creación de interfaces limpias y mantenibles, lo que es especialmente útil en sistemas complejos.

Ejemplos de uso:

- uso de diferentes componentes visuales en GUI
- conexion a diferentes bases de datos
- gestion de diferentes dispositivos de almacenamiento
- en plataforma de juegos, cada una usa su propia api para gestionar la renderizacion de graficos
- impresion de documentos, cada dispositivo tiene su propia tecnologia y forma de imprimir

# Pasos para implementar el patrón

1. definir la implementacion abstracta (implementation)
2. definir las clases concretas que implementan la interfaz abstracta (concrete implementation)
3. definir las clase de alto nivel principal (abstraction)
4. definir las clases que heredan de la de alto nivel principal (refined abstraction)
