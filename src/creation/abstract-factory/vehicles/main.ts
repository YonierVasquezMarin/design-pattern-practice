import { NormalVehiclesFactory } from './factories/vehicles-factory.class'
import { VehiclesFactory } from './factories/vehicles-factory.interface'
import { HeavyVehicle } from './vehicles/heavy-vehicles/heavy-vehicle.class'
import { LightVehicle } from './vehicles/light-vehicles/light-vehicle.class'

export class VehiclesStore {
  private vehicle_factory: VehiclesFactory

  constructor(vehicle_factory: VehiclesFactory) {
    this.vehicle_factory = vehicle_factory
  }

  test_vehicles(): void {
    const light_vehicle: LightVehicle = this.vehicle_factory.create_light_vehicle()
    const heavy_vehicle: HeavyVehicle = this.vehicle_factory.create_heavy_vehicle()

    console.log('Testing light vehicle:')
    light_vehicle.accelerate()
    light_vehicle.break()
    console.log(light_vehicle.calculate_momentum())

    console.log('Testing heavy vehicle:')
    heavy_vehicle.accelerate()
    heavy_vehicle.break()
    console.log(heavy_vehicle.calculate_momentum())
  }
}

new VehiclesStore(new NormalVehiclesFactory()).test_vehicles()
