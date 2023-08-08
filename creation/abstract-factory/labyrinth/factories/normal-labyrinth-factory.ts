import { Labyrinth } from '../labyrinth'
import { Door } from '../map-place/doors/door'
import { Room } from '../map-place/rooms/room'
import { Wall } from '../map-place/walls/wall'
import { LabyrinthFactory } from './labyrinth-factory'

export class NormalLabyrinthFactory implements LabyrinthFactory {
  make_labyrinth(): Labyrinth {
    return new Labyrinth()
  }
  make_wall(): Wall {
    return new Wall()
  }
  make_room(room_number: number): Room {
    return new Room(room_number)
  }
  make_door(room1: Room, room2: Room): Door {
    return new Door(room1, room2)
  }
}
