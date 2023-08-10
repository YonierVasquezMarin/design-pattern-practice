import { NormalLabyrinth } from './map-place/labyrinths/normal-labyrinth'
import { LabyrinthFactory } from './factories/labyrinth-factory'
import { MagicLabyrinthFactory } from './factories/magic-labyrinth-factory'
// import { NormalLabyrinthFactory } from './factories/normal-labyrinth-factory'

export class LabyrinthGame {
  labyrinth_factory: LabyrinthFactory
  constructor(labyrinth_factory: LabyrinthFactory) {
    this.labyrinth_factory = labyrinth_factory
  }

  create_labyrinth(): NormalLabyrinth {
    const labyrinth = this.labyrinth_factory.make_labyrinth()
    const room1 = this.labyrinth_factory.make_room(1)
    const room2 = this.labyrinth_factory.make_room(1)
    const door = this.labyrinth_factory.make_door(room1, room2)

    room1.set_side(this.labyrinth_factory.make_wall())
    room1.set_side(door)
    room1.set_side(this.labyrinth_factory.make_wall())
    room1.set_side(this.labyrinth_factory.make_wall())

    room2.set_side(this.labyrinth_factory.make_wall())
    room2.set_side(this.labyrinth_factory.make_wall())
    room2.set_side(this.labyrinth_factory.make_wall())
    room2.set_side(door)

    door.enter_to()

    labyrinth.add_room(room1)
    labyrinth.add_room(room2)
    return labyrinth
  }
}

new LabyrinthGame(new MagicLabyrinthFactory()).create_labyrinth()
// new LabyrinthGame(new NormalLabyrinthFactory()).create_labyrinth()
