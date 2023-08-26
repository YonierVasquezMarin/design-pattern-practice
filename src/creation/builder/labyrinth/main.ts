import { StandardWithWindowsBuilder } from './builders/labyrinth-with-windows-builder'
// import { StandardLabyrinthBuilder } from './builders/labyrinth-standard-builder'
import { DirectorInTheConstructionOfLabyrinths } from './director/director-in-the-construction-of-labyrinths'

export class LabyrinthBuilderForGame {
  constructor() {
    this.init_labyrinth()
  }

  init_labyrinth(): void {
    // ## STANDARD LABYRINTH
    // const standard_labyrinth_builder = new StandardLabyrinthBuilder()
    // const labyrinth_director = new DirectorInTheConstructionOfLabyrinths(standard_labyrinth_builder)
    // labyrinth_director.construct_standard_labyrinth()
    // const labyrinth = standard_labyrinth_builder.get_labyrinth()
    // console.log(labyrinth)

    // ## LABYRINTH WITH WINDOWS
    const labyrinth_with_windows_builder = new StandardWithWindowsBuilder()
    const labyrinth_director = new DirectorInTheConstructionOfLabyrinths(labyrinth_with_windows_builder)
    labyrinth_director.contruct_labyrinth_with_windows()
    const labyrinth = labyrinth_with_windows_builder.get_labyrinth()
    console.log(labyrinth)
  }
}

new LabyrinthBuilderForGame()
