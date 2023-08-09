import { MapPlace } from '../map-place'
import { Wall } from './wall'

export class NormalWall extends MapPlace implements Wall {
  enter_to(): void {}
}
