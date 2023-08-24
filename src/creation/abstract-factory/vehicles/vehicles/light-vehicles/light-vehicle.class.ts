import { Vehicle } from '../vehicle.interface'

export class LightVehicle implements Vehicle {
  mass: number
  speed: number

  constructor(mass: number, speed: number) {
    this.mass = mass
    this.speed = speed
  }

  accelerate() {
    const acceleration_unit = 30
    if (this.speed + acceleration_unit < 240) {
      this.speed += 30
    }
  }

  break(): void {
    const reduction_unit = 40
    if (this.speed - reduction_unit > 0) {
      this.speed -= 40
    }
  }

  calculate_momentum(): number {
    return this.mass * this.speed
  }
}
