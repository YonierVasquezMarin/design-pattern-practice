import { Vehicle } from '../vehicles/vehicle.interface'

export interface VehiclesFactory {
  create_light_vehicle(): Vehicle
  create_heavy_vehicle(): Vehicle
}
