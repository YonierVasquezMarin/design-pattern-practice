import { SHAPE, ShapesRegistry } from './shapes-registry'

class ShapeApp {
  constructor(private shapesRegistry: ShapesRegistry) {
    const circle = this.shapesRegistry.getShape(SHAPE.CIRCLE)
    const square = this.shapesRegistry.getShape(SHAPE.SQUARE)
    const rectangle = this.shapesRegistry.getShape(SHAPE.RECTANGLE)
    const triangle = this.shapesRegistry.getShape(SHAPE.TRIANGLE)
    console.log(circle?.toString())
    console.log(square?.toString())
    console.log(rectangle?.toString())
    console.log(triangle?.toString())
  }
}

new ShapeApp(new ShapesRegistry())
