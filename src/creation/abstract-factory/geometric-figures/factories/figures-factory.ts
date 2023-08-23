import { Figure } from '../figures/figure.interface'

export interface FiguresFactory {
  create_circle(radius: number): Figure
  create_square(side: number): Figure
  create_triangle(side: number): Figure
}
