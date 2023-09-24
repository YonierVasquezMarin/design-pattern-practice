import { Shape } from './abstract-shape/shape'

export class Triangle extends Shape {
  base: number
  height: number

  constructor(base: number = 0, height: number = 0) {
    super()
    this.base = base
    this.height = height
  }

  getArea(): number {
    return (this.base * this.height) / 2
  }

  getPerimeter(): number {
    return 3 * this.base
  }

  toString(): string {
    return `Triangle { base: ${this.base}, height: ${this.height} }`
  }
}
