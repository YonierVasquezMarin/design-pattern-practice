import { Device } from './device'

export class Tv implements Device {
  private volume: number = 0
  private channel: number = 0
  private isOn: boolean = false

  getVolume(): number {
    return this.volume
  }

  setVolume(volume: number): void {
    this.volume = volume
  }

  getChannel(): number {
    return this.channel
  }

  setChannel(channel: number): void {
    this.channel = channel
  }

  isEnabled(): boolean {
    return this.isOn
  }

  enable(): void {
    this.isOn = true
  }

  disable(): void {
    this.isOn = false
  }
}
