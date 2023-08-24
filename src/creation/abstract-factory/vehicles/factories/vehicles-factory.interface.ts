import { HeavyVehicle } from '../vehicles/heavy-vehicles/heavy-vehicle.class'
import { LightVehicle } from '../vehicles/light-vehicles/light-vehicle.class'

export interface VehiclesFactory {
  create_light_vehicle(): LightVehicle
  create_heavy_vehicle(): HeavyVehicle
}
