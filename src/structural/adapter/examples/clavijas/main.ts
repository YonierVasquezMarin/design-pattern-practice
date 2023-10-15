import { ClavijaCuadradaAdaptada } from './adapters/clavija-cuadrada-adapter'
import { ClavijaCuadrada } from './clavija-cuadrada'
import { ClavijaRedonda } from './clavija-redonda'
import { HuecoRedondo } from './hueco-redondo'

const huecoRedondo = new HuecoRedondo(5)
const clavijaRedonda = new ClavijaRedonda(5)
console.log(huecoRedondo.encaja(clavijaRedonda))

const clavijaCuadrada = new ClavijaCuadrada(5)
// console.log(huecoRedondo.encaja(clavijaCuadrada)) // Error
const clavijaCuadradaAdaptada = new ClavijaCuadradaAdaptada(clavijaCuadrada)
console.log(huecoRedondo.encaja(clavijaCuadradaAdaptada))
