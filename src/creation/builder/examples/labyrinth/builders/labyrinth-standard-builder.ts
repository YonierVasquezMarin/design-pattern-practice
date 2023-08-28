import { ILabyrinthBuilder } from './abstract-builder/labyrinth-abstract-builder'
import { Labyrinth } from '../class/labyrinth'

export class StandardLabyrinthBuilder implements ILabyrinthBuilder {
  #labyrinth: Labyrinth = new Labyrinth()

  build_labyrinth(): void {
    this.#labyrinth = new Labyrinth()
  }

  build_room(room_id: number): void {
    this.#labyrinth.add_room(room_id)
  }

  build_door(room_id_1: number, room_id_2: number): void {
    this.#labyrinth.add_door(room_id_1, room_id_2)
  }

  get_labyrinth(): Labyrinth {
    return this.#labyrinth
  }
}
