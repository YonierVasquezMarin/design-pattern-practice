import { Shape, Circle, Square, Rectangle, Triangle } from '../shapes/'
import { SHAPE } from './shapes-types'

export class ShapesRegistry {
  private shapes: Map<SHAPE, Shape> = new Map()

  private initShapes() {
    this.shapes.set(SHAPE.CIRCLE, new Circle(50))
    this.shapes.set(SHAPE.RECTANGLE, new Rectangle(50, 100))
    this.shapes.set(SHAPE.SQUARE, new Square(50))
    this.shapes.set(SHAPE.TRIANGLE, new Triangle(50, 100))
  }

  constructor() {
    this.initShapes()
  }

  getShape(name: SHAPE): Shape | undefined {
    return this.shapes.get(name)?.clone()
  }
}
