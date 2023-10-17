import { DataSourceDecorator } from './data-source-decorator'
import { DataSource } from '../../data-source/data-source/data-source'

export class CompressionDecorator extends DataSourceDecorator {
  constructor(wrappee: DataSource) {
    super(wrappee)
  }

  writeData(data: string): void {
    super.writeData(this.compress(data))
  }

  readData(): string {
    return this.decompress(super.readData())
  }

  private compress(data: string): string {
    return data + ' (compressed)'
  }

  private decompress(data: string): string {
    return data
  }
}
