import { Circle } from './../figures/circles/circle'
import { Square } from './../figures/squares/square'
import { Triangle } from './../figures/triangles/triangle'
import { FiguresFactory } from './figures-factory'

export class NormalFiguresFactory implements FiguresFactory {
  create_circle(radius: number) {
    return new Circle(radius)
  }

  create_square(side: number) {
    return new Square(side)
  }

  create_triangle(side: number) {
    return new Triangle(side)
  }
}
