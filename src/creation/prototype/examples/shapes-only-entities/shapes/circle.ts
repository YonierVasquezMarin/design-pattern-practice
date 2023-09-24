import { Shape } from './abstract-shape/shape'

export class Circle extends Shape {
  radius: number

  constructor(radius: number = 0) {
    super()
    this.radius = radius
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius
  }

  toString(): string {
    return `Circle { radius: ${this.radius} }`
  }
}
