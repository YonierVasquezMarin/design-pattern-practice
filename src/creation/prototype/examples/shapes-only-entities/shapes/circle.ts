import { Shape } from './shape'

export class Circle implements Shape {
  radius: number

  constructor(source: Circle) {
    this.radius = source.radius
  }

  clone(): Shape {
    return new Circle(this)
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius
  }
}
