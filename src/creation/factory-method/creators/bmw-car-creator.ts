import { Car } from '../class/abstract-class/car'
import { BmwCar } from '../class/bmw-car'
import { CarCreator } from './abstract-creator/car-creator'

export class BmwCarCreator implements CarCreator {
  createCar(): Car {
    return new BmwCar()
  }
}
