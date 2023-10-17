# Que es decorator

El patrón Decorator es un patrón de diseño estructural que permite agregar funcionalidades adicionales a objetos existentes sin necesidad de modificar su estructura. Este patrón se basa en la composición en lugar de la herencia y se utiliza para extender dinámicamente el comportamiento de objetos sin cambiar su código original.

El patrón Decorator permite agregar y combinar funcionalidades de manera flexible. Puedes apilar varios Decoradores para extender las capacidades del objeto base de forma dinámica. Esto es especialmente útil cuando se necesita agregar funcionalidades de manera modular y cuando la herencia se vuelve complicada o inflexible.

Ejemplos:

- flujos I/O, para maniuplar o cifrar los datos
- GUI, agregar bordes, sombreado o efectos

# Pasos para implementar el patron

1. definir la interfaz para la clase que se va a decorar, debe tener los mismos metodos que la clase a decorar
2. definir la clase concreta que implementa la interfaz anterior
3. definir la clase base de los decoradores, como pueden existir varios decoradores se debe crear una clase base que defina un estandar para todos
4. definir los decoradores concretos que harán tareas adicionales
5. definir en el cliente el objeto y los decoradores a usar, hay varios enfoques, uno es emplear condicionales if para ir poco a poco agregando decoradores, el otro enfoque es aplicar de forma serial los decoradores sin aplicar condicionales
