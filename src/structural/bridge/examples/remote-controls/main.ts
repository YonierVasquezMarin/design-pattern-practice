import { AdvancedRemoteControl } from './abstractions/advanced-remote-control'
import { Radio } from './implementatios/radio'
import { RemoteControl } from './abstractions/remote-control'
import { Tv } from './implementatios/tv'

const tv = new Tv()
const remoteControl = new RemoteControl(tv)
remoteControl.togglePower()

const radio = new Radio()
const advancedRemoteControl = new AdvancedRemoteControl(radio)
advancedRemoteControl.togglePower()
advancedRemoteControl.togglePower()
