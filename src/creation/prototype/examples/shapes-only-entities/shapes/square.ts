import { Shape } from './abstract-shape/shape'

export class Square extends Shape {
  side: number

  constructor(side: number = 0) {
    super()
    this.side = side
  }

  getArea() {
    return this.side * this.side
  }

  getPerimeter() {
    return 4 * this.side
  }

  toString() {
    return `Square { side: ${this.side} }`
  }
}
