import { ClavijaCuadrada } from '../clavija-cuadrada'
import { ClavijaRedonda } from '../clavija-redonda'

export class ClavijaCuadradaAdaptada extends ClavijaRedonda {
  private clavijaCuadrada: ClavijaCuadrada

  constructor(clavijaCuadrada: ClavijaCuadrada) {
    super(clavijaCuadrada.getLado())
    this.clavijaCuadrada = clavijaCuadrada
  }

  getRadio(): number {
    const lado = this.clavijaCuadrada.getLado()
    return (lado * Math.sqrt(2)) / 2
  }
}
