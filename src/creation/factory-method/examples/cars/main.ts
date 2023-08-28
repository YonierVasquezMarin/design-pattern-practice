import { PorcheCarCreator } from './creators/porche-car-creator'
import { BmwCarCreator } from './creators/bmw-car-creator'

class CarShop {
  constructor() {
    this.initCars()
  }

  initCars(): void {
    let carFactory = new BmwCarCreator()
    let car = carFactory.createCar()
    car.start()

    carFactory = new PorcheCarCreator()
    car = carFactory.createCar()
    car.start()
  }
}

new CarShop()
