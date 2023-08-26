import { ILabyrinthBuilder } from './abstract-builder/labyrinth-abstract-builder'
import { Labyrinth } from '../class/labyrinth'
import { LabyrinthWindow } from '../class/window'

export class StandardWithWindowsBuilder implements ILabyrinthBuilder {
  #labyrinth: Labyrinth = new Labyrinth()

  build_labyrinth(): void {
    this.#labyrinth = new Labyrinth()
  }

  build_room(room_id: number): void {
    const window = new LabyrinthWindow(30, 30)
    this.#labyrinth.add_window(window)
    this.#labyrinth.add_room(room_id)
  }

  build_door(room_id_1: number, room_id_2: number): void {
    this.#labyrinth.add_door(room_id_1, room_id_2)
  }

  get_labyrinth(): Labyrinth {
    return this.#labyrinth
  }
}
