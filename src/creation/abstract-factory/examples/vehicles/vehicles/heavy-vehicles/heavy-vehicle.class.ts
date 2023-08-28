import { Vehicle } from '../vehicle.interface'

export class HeavyVehicle implements Vehicle {
  mass: number
  speed: number

  constructor(mass: number, speed: number) {
    this.mass = mass
    this.speed = speed
  }

  accelerate() {
    const acceleration_unit = 10
    if (this.speed + acceleration_unit < 100) {
      this.speed += 10
    }
  }

  break(): void {
    const reduction_unit = 20
    if (this.speed - reduction_unit > 0) {
      this.speed -= 20
    }
  }

  calculate_momentum(): number {
    return this.mass * this.speed
  }
}
