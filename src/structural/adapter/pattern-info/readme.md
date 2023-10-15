# Que es adapter

El patrón Adapter (también conocido como el patrón de adaptador) es un patrón de diseño de software estructural que se utiliza para permitir que dos interfaces incompatibles o clases trabajen juntas. Este patrón se utiliza cuando se desea que una clase funcione con una interfaz que no es compatible con la interfaz que la clase espera. El Adapter actúa como un intermediario que permite que dos clases o componentes interactúen sin cambiar su código original.

El patrón Adapter se utiliza en situaciones en las que se necesita conectar componentes o clases que no fueron diseñadas inicialmente para trabajar juntas. Al usar un adaptador, se pueden evitar cambios significativos en el código existente, lo que lo hace especialmente útil cuando se trabaja con bibliotecas o sistemas de terceros

Ejemlos de uso:

- cuando se usa una biblioteca de terceros y no se manejan los mismos formatos
- adaptar nuevas bases de datos a las operaciones realizadas dentro de la aplicacion
- cuando se integran diferentes protocolos de comunicacion en una aplicacion web
- adaptacion de diferentes hardware a los comandos usados en la aplicacion
- proporcionar una interfaz comun para comunicarse con diferentes librerias
- crear un adaptador para que las diferentes apis reciban los mismos llamados estandar
- adaptar un sistema que trabaja en kilometros y en capas superiores manejar millas

# Como implementar el patron

1. Crear las clases de la lógica de negocio
2. Crear el adaptador que herede de la clase objetivo (la clase que normalmente se usa en la aplicacion), este adaptador debe recibir una instancia de clase objetivo
3. Implementar el adaptador cuando se requiere usar una interfaz no compatible
