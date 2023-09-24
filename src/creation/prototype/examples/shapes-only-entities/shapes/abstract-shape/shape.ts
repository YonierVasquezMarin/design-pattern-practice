export abstract class Shape {
  clone(): Shape {
    return Object.create(this)
  }
  abstract getArea(): number
  abstract getPerimeter(): number
  abstract toString(): string
}
