import { Vehicle } from './../vehicle'

export class LightCar implements Vehicle {
  mass: number
  speed: number

  constructor(mass: number, speed: number) {
    this.mass = mass
    this.speed = speed
  }

  accelerate() {
    this.speed += 10
  }

  break(): void {
    this.speed = 0
  }

  calculate_momentum(): number {
    return this.mass * this.speed
  }
}
