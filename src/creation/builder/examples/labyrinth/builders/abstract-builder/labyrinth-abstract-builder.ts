export interface ILabyrinthBuilder {
  build_labyrinth(): void
  build_room(room_id: number): void
  build_door(room_id_1: number, room_id_2: number): void
}
