import { MapPlace } from '../map-place'

export interface Room {
  enter_to(): void

  set_side(direction: string, elemento: MapPlace): void

  get_side(): void
}
