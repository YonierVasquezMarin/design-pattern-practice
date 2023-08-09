import { Labyrinth } from '../labyrinth'
import { NormalWall } from '../map-place/walls/normal-wall'
import { NormalRoom } from '../map-place/rooms/normal-room'
import { NormalDoor } from '../map-place/doors/normal-door'

export interface LabyrinthFactory {
  make_labyrinth(): Labyrinth

  make_wall(): NormalWall

  make_room(room_number: number): NormalRoom

  make_door(room1: NormalRoom, room2: NormalRoom): NormalDoor
}
