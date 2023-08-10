import { Room } from '../rooms/room'

export interface Labyrinth {
  rooms: Array<Room>

  add_room(room: Room): void

  count_from_room(): void
}
