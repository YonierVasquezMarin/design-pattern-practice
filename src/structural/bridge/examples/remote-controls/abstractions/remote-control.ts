import { Device } from "../implementatios/device"

export class RemoteControl {
  constructor(protected device: Device) {}

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable()
      console.log('The device is off')
    } else {
      this.device.enable()
      console.log('The device is on')
    }
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10)
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10)
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1)
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1)
  }
}
