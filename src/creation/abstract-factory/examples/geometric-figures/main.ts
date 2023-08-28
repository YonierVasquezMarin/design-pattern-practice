import { FiguresFactory } from './factories/figures-factory'
import { NormalFiguresFactory } from './factories/normal-figures-factory'

export class GraphicApp {
  figures_factory: FiguresFactory

  constructor(figures_factory: FiguresFactory) {
    this.figures_factory = figures_factory
  }

  run() {
    const circle = this.figures_factory.create_circle(5)
    const square = this.figures_factory.create_square(5)
    const triangle = this.figures_factory.create_triangle(5)

    console.log('Circle area: ', circle.calculate_area())
    console.log('Circle square: ', square.calculate_area())
    console.log('Circle triangle: ', triangle.calculate_area())
  }
}

new GraphicApp(new NormalFiguresFactory()).run()
