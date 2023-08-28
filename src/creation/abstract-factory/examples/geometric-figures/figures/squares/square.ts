import { Figure } from '../figure.interface'

export class Square implements Figure {
  side: number

  constructor(side: number) {
    this.side = side
  }

  calculate_area(): number {
    return Math.pow(this.side, 2)
  }

  calculate_perimeter(): number {
    return 4 * this.side
  }
}
