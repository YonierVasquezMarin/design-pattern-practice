export class LabyrinthWindow {
  width: number
  height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  open(): void {
    console.log('Window is open')
  }
}
