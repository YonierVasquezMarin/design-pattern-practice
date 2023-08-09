import { NormalRoom } from '../rooms/normal-room'
import { Labyrinth } from './labyrinth'

export class NormalLabyrinth implements Labyrinth {
  rooms: Array<NormalRoom> = []

  add_room(room: NormalRoom): void {
    this.rooms.push(room)
  }

  count_from_room(): void {}
}
