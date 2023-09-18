import { Shape } from './shape'

export class Square implements Shape {
  side: number

  constructor(source: Square) {
    this.side = source.side
  }
  clone() {
    return new Square(this)
  }
  getArea() {
    return this.side * this.side
  }
  getPerimeter() {
    return 4 * this.side
  }
}
