import { Graphic } from './graphic'

export class Dot implements Graphic {
  private x: number
  private y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  move(x: number, y: number): void {
    this.x += x
    this.y += y
  }

  draw(): void {
    console.log(`Drawing a dot at (${this.x}, ${this.y})`)
  }
}
