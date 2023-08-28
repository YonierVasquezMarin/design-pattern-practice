import { Vehicle } from '../vehicles/vehicle.interface'
import { LightVehicle } from '../vehicles/light-vehicles/light-vehicle.class'
import { HeavyVehicle } from '../vehicles/heavy-vehicles/heavy-vehicle.class'
import { VehiclesFactory } from './vehicles-factory.interface'

export class NormalVehiclesFactory implements VehiclesFactory {
  create_heavy_vehicle(): Vehicle {
    return new HeavyVehicle(1000, 0)
  }

  create_light_vehicle(): Vehicle {
    return new LightVehicle(100, 0)
  }
}
