import { Car } from './abstract-class/car'

export class PorcheCar implements Car {
  start(): void {
    console.log('PorcheCar started')
  }
}
