import { MapPlace } from '../map-place'
import { Room } from '../rooms/room'

export class Door extends MapPlace {
  is_opened: boolean
  room1: Room
  room2: Room

  constructor(room1: Room, room2: Room) {
    super()
    this.is_opened = false
    this.room1 = room1
    this.room2 = room2
  }

  enter_to(): void {}
}
