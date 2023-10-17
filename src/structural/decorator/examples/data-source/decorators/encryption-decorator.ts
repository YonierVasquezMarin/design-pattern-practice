import { DataSourceDecorator } from './data-source-decorator'
import { DataSource } from '../../data-source/data-source/data-source'

export class EncryptionDecorator extends DataSourceDecorator {
  constructor(wrappee: DataSource) {
    super(wrappee)
  }

  writeData(data: string): void {
    super.writeData(this.encode(data))
  }

  readData(): string {
    return super.readData()
  }

  /**
   * @example
   * 'hello world' -> 'dlrow olleh'
   */
  private encode(data: string): string {
    return data.split('').reverse().join('')
  }

  /**
   * @example
   * 'dlrow olleh' -> 'hello world'
   */
  private decode(data: string): string {
    return data.split('').reverse().join('')
  }
}
