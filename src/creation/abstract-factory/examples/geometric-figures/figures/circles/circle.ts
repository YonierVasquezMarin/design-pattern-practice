import { Figure } from '../figure.interface'

export class Circle implements Figure {
  side: number

  constructor(side: number) {
    this.side = side
  }

  calculate_area(): number {
    return Math.PI * Math.pow(this.side, 2)
    
  }

  calculate_perimeter(): number {
    return 2 * Math.PI * this.side
  }
}
