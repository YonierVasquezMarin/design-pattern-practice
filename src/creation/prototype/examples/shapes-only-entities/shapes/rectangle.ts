import { Shape } from './abstract-shape/shape'

export class Rectangle extends Shape {
  width: number
  height: number

  constructor(width: number = 0, height: number = 0) {
    super()
    this.width = width
    this.height = height
  }

  getArea(): number {
    return this.width * this.height
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height)
  }

  toString(): string {
    return `Rectangle { width: ${this.width}, height: ${this.height} }`
  }
}
