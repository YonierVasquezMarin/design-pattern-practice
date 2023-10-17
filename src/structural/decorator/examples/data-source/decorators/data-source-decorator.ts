import { DataSource } from '../data-source/data-source'

export class DataSourceDecorator implements DataSource {
  protected wrappee: DataSource
  data: string = ''

  constructor(wrappee: DataSource) {
    this.wrappee = wrappee
  }

  writeData(data: string): void {
    this.wrappee.writeData(data)
  }

  readData(): string {
    return this.wrappee.readData()
  }
}
