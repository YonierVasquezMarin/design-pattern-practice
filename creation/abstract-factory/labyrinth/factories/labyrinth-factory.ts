import { NormalLabyrinth as Labyrinth } from '../map-place/labyrinths/normal-labyrinth'
import { NormalRoom as Room } from '../map-place/rooms/normal-room'
import { NormalDoor as Door } from '../map-place/doors/normal-door'
import { Wall } from '../map-place/walls/wall'

export interface LabyrinthFactory {
  make_labyrinth(): Labyrinth

  make_wall(): Wall

  make_room(room_number: number): Room

  make_door(room1: Room, room2: Room): Door
}
