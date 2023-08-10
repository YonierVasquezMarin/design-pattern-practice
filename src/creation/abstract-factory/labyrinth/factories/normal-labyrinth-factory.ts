import { NormalDoor } from '../map-place/doors/normal-door'
import { NormalLabyrinth } from '../map-place/labyrinths/normal-labyrinth'
import { NormalRoom } from '../map-place/rooms/normal-room'
import { NormalWall } from '../map-place/walls/normal-wall'
import { LabyrinthFactory } from './labyrinth-factory'

export class NormalLabyrinthFactory implements LabyrinthFactory {
  make_labyrinth(): NormalLabyrinth {
    return new NormalLabyrinth()
  }

  make_wall(): NormalWall {
    return new NormalWall()
  }

  make_room(room_number: number): NormalRoom {
    return new NormalRoom(room_number)
  }

  make_door(room1: NormalRoom, room2: NormalRoom): NormalDoor {
    return new NormalDoor(room1, room2)
  }
}
