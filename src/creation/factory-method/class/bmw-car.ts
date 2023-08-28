import { Car } from './abstract-class/car'

export class BmwCar implements Car {
  start(): void {
    console.log('BmwCar started')
  }
}
