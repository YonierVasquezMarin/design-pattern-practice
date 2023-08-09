import { Room } from '../rooms/room'

export interface Labyrinth {
  add_room(room: Room): void

  count_from_room(): void
}
