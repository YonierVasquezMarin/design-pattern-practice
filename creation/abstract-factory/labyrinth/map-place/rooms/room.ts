import { MapPlace } from '../map-place'

export interface Room {
  sides: Array<MapPlace>
  room_number: number

  enter_to(): void

  set_side(element: MapPlace): void

  get_side(): void
}
