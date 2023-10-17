export interface DataSource {
  data: string

  writeData(data: string): void
  readData(): string
}
