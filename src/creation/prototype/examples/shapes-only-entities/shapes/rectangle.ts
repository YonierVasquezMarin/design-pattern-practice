import { Shape } from './shape'

export class Rectangle implements Shape {
  width: number
  height: number

  constructor(source: Rectangle) {
    this.width = source.width
    this.height = source.height
  }

  clone(): Shape {
    return new Rectangle(this)
  }

  getArea(): number {
    return this.width * this.height
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height)
  }
}
