import { PorcheCar } from '../class/porche-car'
import { Car } from './../class/abstract-class/car'
import { CarCreator } from './abstract-creator/car-creator'

export class PorcheCarCreator implements CarCreator {
  createCar(): Car {
    return new PorcheCar()
  }
}
