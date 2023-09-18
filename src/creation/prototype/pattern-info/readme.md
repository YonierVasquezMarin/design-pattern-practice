# Que es prototype

El patrón de diseño Prototype (Prototipo) es un patrón de diseño creacional en la programación orientada a objetos. Su objetivo principal es permitir la creación de nuevos objetos duplicando un objeto existente, conocido como prototipo, en lugar de crearlos desde cero. Esto puede ser útil cuando la creación de un objeto es costosa en términos de recursos o cuando se desea clonar un objeto con un estado específico.

El patrón Prototype se utiliza típicamente en situaciones en las que un sistema necesita crear múltiples instancias de un objeto, pero las instancias pueden variar en su estado inicial. En lugar de crear cada instancia manualmente y configurar su estado individualmente, el patrón Prototype permite que una instancia existente, el prototipo, se clone para crear nuevas instancias con un estado inicial similar.

El uso del patrón Prototype puede ayudar a reducir la duplicación de código y mejorar el rendimiento en situaciones en las que la creación de objetos es costosa. Además, permite la creación de objetos con estados personalizados sin tener que crear una nueva clase para cada variante.

## Observaciones adicionales

- Supongamos que tiene un objeto y desea crear una copia exacta del mismo. ¿Cómo lo harías? En primer lugar, debe crear un nuevo objeto de la misma clase. Luego debe revisar todos los campos del objeto original y copiar sus valores al nuevo objeto. Pero hay una trampa. No todos los objetos se pueden copiar de esa manera porque algunos de los campos del objeto pueden ser privados y no visibles desde fuera del propio objeto.
- Un objeto que admite la clonación se denomina prototipo. Cuando los objetos tienen docenas de campos y cientos de configuraciones posibles, clonarlos puede servir como alternativa a la subclase.
