import { Device } from './device'

export class Radio implements Device {
  private volume: number = 0
  private channel: number = 0
  private isOn: boolean = false

  getVolume(): number {
    return this.volume
  }

  setVolume(percent: number): void {
    this.volume = percent
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