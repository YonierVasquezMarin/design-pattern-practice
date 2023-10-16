import { Dot } from './dot'

export class Circle extends Dot {
  private radius: number

  constructor(x: number, y: number, radius: number) {
    super(x, y)
    this.radius = radius
  }

  draw(): void {
    console.log('Drawing circle')
  }
}
