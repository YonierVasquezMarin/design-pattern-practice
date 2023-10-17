import { DataSource } from './data-source'

export class FileDataSource implements DataSource {
  data: string = ''

  constructor(data: string) {
    this.data = data
  }

  writeData(data: string): void {
    this.data = data
  }

  readData(): string {
    return this.data
  }
}
