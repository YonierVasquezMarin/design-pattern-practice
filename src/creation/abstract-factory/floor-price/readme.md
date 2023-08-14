# Calculo de precio de plantas de construcciones

Calculadora que halla el valor total de un piso dadas condiciones como: área del piso, materiales en uso y lugar donde se construyó.

# Factorias implicadas

## CityFloorFactory

- `Area piso`: el precio de área se obtiene multiplicando el total del área por el precio del metro cuadrado y adicional los impuestos.
- `Materiales`: el precio de los materiales es el mismo cancelado en la tienda de construcción.
- `Lugar de construcción`: el precio sube un poco si supera la segunda planta, cada planta eleva el precio un 3,5%. No importa la ubicación dentro de la ciudad.

## RuralFloorFactory

- `Area piso`: el precio de área se obtiene multiplicando el total del área por el precio del metro cuadrado y adicional los impuestos, menos un 4% según la calidad del terreno.
- `Materiales`: el precio de los materiales es el mismo cancelado en la tienda de construcción, adicional aumenta un 5% cada km de distancia entre la construcción y la ciudad.
- `Lugar de construcción`: el precio sube un poco si supera la segunda planta, cada planta eleva el precio un 3,5%. Cada 10km desde la ciudad eleva un 2,35% el precio.

## EverestFloorFactory

- ``
