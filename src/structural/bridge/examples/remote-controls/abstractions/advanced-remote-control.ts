import { RemoteControl } from './remote-control'

export class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0)
  }
}
