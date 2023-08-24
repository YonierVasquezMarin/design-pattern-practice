import { Vehicle } from '../vehicles/vehicle.interface'
import { HeavyVehicleWithNitro } from '../vehicles/heavy-vehicles/heavy-vehicle-with-nitro.class'
import { LightVehicleWithNitro } from '../vehicles/light-vehicles/light-vehicle-with-nitro.class'
import { VehiclesFactory } from './vehicles-factory.interface'

export class VehiclesWithNitroFactory implements VehiclesFactory {
  create_heavy_vehicle(): Vehicle {
    return new HeavyVehicleWithNitro(1000, 0)
  }

  create_light_vehicle(): Vehicle {
    return new LightVehicleWithNitro(1000, 0)
  }
}
