# Laberinto
En el laberinto hay paredes, habitaciones y puertas entre habitaciones. El patrón `Abstract Factory` escala esta solución a futuro para que cualquier tipo de laberinto pueda ser utilizado y pueda ser implementado inmediatamente sin necesidad de cambiar código.

Aquí se crea la factoria `LabyrinthFactory` que genera objetos utiles para la solución, si en el futuro se desea usar "Habitaciones encantadas" entonces se crea `EnchantedLabyrinthFactory` el cual hereda la interfaz de `LabyrinthFactory`, esto permite implementar los nuevos objetos encantados sin aplicar modificaciones en el código existente.

# Cuando usar una clase abstracta o una interfaz
Se emplea una clase abstracta cuando se modela una jerarquía de clases y en otros casos se usa una interfaz cuando se desea usar nombres comunes entre objetos no emparentados.