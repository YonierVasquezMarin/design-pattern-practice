## Que es un patrón builder

Es un sistema que permite construir paso a paso objetos complejos con muchos parámetros, al implementar este patrón se puede retirar el viejo método de generar subclases para diferentes representaciones de un mismo objeto.

En este patrón existe una entidad llamada director la cual se encarga de ejecutar una serie de pasos para la construcción del objeto complejo, si se requiere un objeto diferente el director dispone de otra serie de pasos, etc.

# Pasos para la construcción del sistema builder

1. Crear las clases de negocio
2. Crear el constructor abstracto
3. Crear el constructor concreto que aplica las implementaciones según el caso el cual toma los métodos compartidos de la interfaz del constructor abstracto
4. Crear el director el cual en cada método dispone de su propia receta para construir objetos.
5. En el cliente:
   - crear constructor concreto
   - crear director y se le da el constructor
   - al director se le pide construir el objeto complejo
   - al constructor se le pide el objeto complejo construido

# Ejemplos donde se puede usar el patrón builder

- creacion de personajes en un videojuego
- ordenes en un restaurante
- informes personalizados
- configuracion de automoviles
- creacion de documentos estructurados
- configuración de equipos deportivos
