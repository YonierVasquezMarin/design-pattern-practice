import { Graphic } from './graphic'

export class CompoundGraphic implements Graphic {
  private children: Graphic[] = []

  add(child: Graphic): void {
    this.children.push(child)
  }

  remove(child: Graphic): void {
    const index = this.children.indexOf(child)
    this.children.splice(index, 1)
  }

  move(x: number, y: number): void {
    this.children.forEach((child) => child.move(x, y))
  }

  draw(): void {
    this.children.forEach((child) => child.draw())
  }
}
