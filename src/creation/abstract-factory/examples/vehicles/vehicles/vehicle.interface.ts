export interface Vehicle {
  mass: number
  speed: number

  accelerate(): void
  break(): void
  calculate_momentum(): number
}
