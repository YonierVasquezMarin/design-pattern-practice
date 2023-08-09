import { NormalRoom } from './map-place/rooms/normal-room'

export class Labyrinth {
  rooms: Array<NormalRoom> = []

  add_room(room: NormalRoom): void {
    this.rooms.push(room)
  }

  count_from_room(): void {}
}
