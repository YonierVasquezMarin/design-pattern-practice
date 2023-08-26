import { ILabyrinthBuilder } from './../builders/abstract-builder/labyrinth-abstract-builder'

export class DirectorInTheConstructionOfLabyrinths {
  #builder: ILabyrinthBuilder

  constructor(builder: any) {
    this.#builder = builder
  }

  construct_standard_labyrinth(): void {
    this.#builder.build_labyrinth()
    this.#builder.build_room(1)
    this.#builder.build_room(2)
    this.#builder.build_door(1, 2)
  }

  construct_complex_labyrinth(): void {
    this.#builder.build_labyrinth()
    this.#builder.build_room(100)
    this.#builder.build_room(301)
    this.#builder.build_door(100, 301)
  }

  contruct_labyrinth_with_windows(): void {
    this.#builder.build_labyrinth()
    this.#builder.build_room(1)
    this.#builder.build_room(2)
    this.#builder.build_door(1, 2)
  }
}
