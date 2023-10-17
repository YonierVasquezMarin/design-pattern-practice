import { CompressionDecorator } from './decorators/compression-decorator'
import { EncryptionDecorator } from './decorators/encryption-decorator'
import { FileDataSource } from './data-source/file-data-source'

const text = 'Hello World!'

// direct usage
let source = new FileDataSource(text)
source.writeData(text)
console.log('Texto normal:', source.readData())

// encrypted usage
source = new EncryptionDecorator(source)
source.writeData(text)
console.log('Texto encriptado:', source.readData())

// encrypted twice usage
source = new EncryptionDecorator(source)
source.writeData(text)
console.log('Texto encriptado dos veces:', source.readData())

// encrypted and compressed usage
let newSource = new FileDataSource(text)
newSource = new CompressionDecorator(newSource)
newSource = new EncryptionDecorator(newSource)
newSource.writeData(text)
console.log('Texto encriptado y comprimido:', newSource.readData())
