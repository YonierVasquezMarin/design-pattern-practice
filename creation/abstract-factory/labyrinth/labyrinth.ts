import { Room } from './map-place/rooms/room'

export class Labyrinth {
  rooms: Array<Room> = []

  add_room(room: Room): void {
    this.rooms.push(room)
  }

  count_from_room(): void {}
}
