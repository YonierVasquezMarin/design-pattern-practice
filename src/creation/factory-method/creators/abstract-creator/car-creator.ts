import { Car } from './../../class/abstract-class/car'

export interface CarCreator {
  createCar(): Car
}
