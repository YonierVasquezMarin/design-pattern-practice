import { LabyrinthWindow } from './window'

export class Labyrinth {
  rooms: Array<any> = []
  windows: Array<any> = []
  doors: Array<any> = []

  add_room(room: any): void {
    this.rooms.push(room)
  }

  add_door(room_id_1: number, room_id_2: number): void {
    this.doors.push(room_id_1, room_id_2)
  }

  add_window(window: LabyrinthWindow): void {
    this.windows.push(window)
  }

  rooms_count(): number {
    return this.rooms.length
  }
}
