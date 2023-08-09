import { MapPlace } from '../map-place'
import { NormalRoom } from '../rooms/normal-room'
import { Door } from './door'

export class NormalDoor extends MapPlace implements Door {
  is_opened: boolean
  room1: NormalRoom
  room2: NormalRoom

  constructor(room1: NormalRoom, room2: NormalRoom) {
    super()
    this.is_opened = false
    this.room1 = room1
    this.room2 = room2
  }

  enter_to(): void {}
}
