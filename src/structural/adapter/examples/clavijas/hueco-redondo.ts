import { ClavijaRedonda } from './clavija-redonda'
export class HuecoRedondo {
  private radio: number

  constructor(radio: number) {
    this.radio = radio
  }

  getRadio(): number {
    return this.radio
  }

  encaja(clavija: ClavijaRedonda): boolean {
    return this.getRadio() >= clavija.getRadio()
  }
}
