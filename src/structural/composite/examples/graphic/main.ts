import { Circle } from './circle'
import { CompoundGraphic } from './compound-graphic'
import { Dot } from './dot'

class ImageEditor {
  all: CompoundGraphic = new CompoundGraphic()

  load() {
    this.all.add(new Dot(1, 2))
    this.all.add(new Circle(5, 3, 10))
  }

  addOthersDot() {
    const others = new CompoundGraphic()
    others.add(new Dot(1, 2))
    others.add(new Dot(5, 3))
    this.all.add(others)
  }

  draw() {
    this.all.draw()
  }
}

const imageEditor = new ImageEditor()
imageEditor.load()
imageEditor.addOthersDot()
imageEditor.draw()
