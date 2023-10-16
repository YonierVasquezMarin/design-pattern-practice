# Que es composite

Su objetivo principal es tratar a los objetos individuales y a las composiciones de objetos de la misma manera, lo que significa que los clientes del código pueden tratar tanto a los objetos individuales como a las estructuras compuestas de manera uniforme.

Este patrón es útil cuando se trabaja con objetos que forman una estructura de árbol o jerarquía, donde los objetos individuales y los grupos de objetos (composiciones) deben tratarse de manera consistente.

Ejemplos de aplicación del patrón:

- GUI donde agrupa botones y elementos visuales en contenedores o ventanas
- documentos: agrupar textos en parrafos, y estos a su vez agruparlos en columnas y en hojas
- jerarquía de documentos

# Pasos para implementar el patrón

1. definir la interfaz base que contiene las operaciones de los elementos simples y de los elementos compuestos (component)
2. definir las clases concretas que heredan los metodos de la interfaz base (leaf, hoja)
3. definir la clase que contendrá los elementos complejos y hojas (compound objects)
4. definir implementaciones en el cliente
