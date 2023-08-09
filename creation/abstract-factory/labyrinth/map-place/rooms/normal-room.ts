import { MapPlace } from '../map-place'
import { Room } from './room'

export class NormalRoom extends MapPlace implements Room {
  sides: Array<MapPlace> = []
  room_number: number

  constructor(room_number: number) {
    super()
    this.room_number = room_number
  }

  enter_to(): void {}

  set_side(direction: string, elemento: MapPlace): void {}

  get_side(): void {}
}
