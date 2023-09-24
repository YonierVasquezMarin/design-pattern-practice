# Que es singleton

Singleton es un patrón de diseño que le permite asegurarse de que una clase tenga solo una instancia, al tiempo que proporciona un punto de acceso global a esta instancia.

Al igual que una variable global, el patrón Singleton le permite acceder a algún objeto desde cualquier lugar del programa. Sin embargo, también protege esa instancia de ser sobrescrita por otro código.

La primera vez que se usa el objeto interno se guarda en caché, luego puede ser obtenido sin problemas desde cualquier otro lugar de la aplicación.

Ejemplos donde se podría usar un objeto global puede ser:

- En un sistemas de impresoras hay varios equipos de impresión pero sólo una cola de documentos
- Sólo debe existir un gestor de ventanas para administrar el sistema gráfico
- Un intermediario con una base de datos, solo puede existir una conexión al tiempo
