import { MagicDoor } from '../map-place/doors/magic-door'
import { NormalDoor } from '../map-place/doors/normal-door'
import { NormalRoom } from '../map-place/rooms/normal-room'
import { LabyrinthFactory } from './labyrinth-factory'
import { NormalLabyrinthFactory } from './normal-labyrinth-factory'

export class MagicLabyrinthFactory
  extends NormalLabyrinthFactory
  implements LabyrinthFactory
{
  make_door(room1: NormalRoom, room2: NormalRoom): NormalDoor {
    return new MagicDoor(room1, room2)
  }
}
