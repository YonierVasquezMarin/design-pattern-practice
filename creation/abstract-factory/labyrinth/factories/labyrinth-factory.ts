import { Door } from '../map-place/doors/door'
import { Labyrinth } from '../map-place/labyrinths/labyrinth'
import { Room } from '../map-place/rooms/room'
import { Wall } from '../map-place/walls/wall'

export interface LabyrinthFactory {
  make_labyrinth(): Labyrinth

  make_wall(): Wall

  make_room(room_number: number): Room

  make_door(room1: Room, room2: Room): Door
}
