import { Figure } from '../figure.interface'

export class Triangle implements Figure {
  side: number

  constructor(side: number) {
    this.side = side
  }

  calculate_area(): number {
    return (Math.sqrt(3) / 4) * Math.pow(this.side, 2)
  }

  calculate_perimeter(): number {
    return 3 * this.side
  }
}
