# Que es fachade

El patrón de diseño de software llamado "Fachada" (Facade en inglés) es un patrón estructural que proporciona una interfaz simplificada a un conjunto más grande de interfaces en un subsistema, haciendo que sea más fácil de usar y entender. Este patrón oculta la complejidad del sistema y proporciona una interfaz unificada para interactuar con él.

En términos más sencillos, la fachada actúa como una capa intermedia entre un cliente (que utiliza un sistema) y las partes internas complejas del sistema. Proporciona una interfaz única y simplificada que oculta los detalles de implementación del sistema subyacente. Esto puede mejorar la modularidad y la claridad del código al proporcionar un punto de entrada coherente.

Los subsistemas suelen volverse mas complicados a medida que van evolucionando. La mayoria de los patrones, cuando se aplican, dan como resultado mas clases y mas pequeñas. Esto hace que el subsistema sea mas reutilizable y facil de personalizar. Una fachada puede proporcionar, por omision, una vista simple del subsistema que resulta adecuada para la mayoria de clientes.

Una fachada es una clase que proporciona una interfaz simple a un subsistema complejo que contiene muchas partes móviles. Una fachada puede proporcionar una funcionalidad limitada en comparación con el trabajo directo con el subsistema. Sin embargo, solo incluye aquellas características que realmente interesan a los clientes.

Ejemplos:

- sistema de subsistemas de videojuegos, mediante metodos exponer acciones generales que todos los clientes usan
- sistema de gestion de archivos, exponer acciones generales
- sistema de comunicacion de api, por ejemplo exponer acciones de creacion de usuarios
