import { Labyrinth } from './labyrinth'
import { LabyrinthFactory } from './factories/labyrinth-factory'
import { NormalLabyrinthFactory } from './factories/normal-labyrinth-factory'

export class LabyrinthGame {
  constructor(private labyrinth_factory: LabyrinthFactory) {}

  create_labyrinth(): Labyrinth {
    const labyrinth = this.labyrinth_factory.make_labyrinth()
    const room1 = this.labyrinth_factory.make_room(1)
    const room2 = this.labyrinth_factory.make_room(1)
    const door = this.labyrinth_factory.make_door(room1, room2)

    room1.set_side('north', this.labyrinth_factory.make_wall())
    room1.set_side('east', door)
    room1.set_side('surth', this.labyrinth_factory.make_wall())
    room1.set_side('west', this.labyrinth_factory.make_wall())

    room2.set_side('north', this.labyrinth_factory.make_wall())
    room2.set_side('east', this.labyrinth_factory.make_wall())
    room2.set_side('surth', this.labyrinth_factory.make_wall())
    room2.set_side('west', door)

    labyrinth.add_room(room1)
    labyrinth.add_room(room2)
    return labyrinth
  }
}

const labyrinth_game = new LabyrinthGame(new NormalLabyrinthFactory())
