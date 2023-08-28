// import { FoodOrderNormalBuilder } from './builders/food-order-normal-builder'
import { FoodOrderSpecialBuilder } from './builders/food-order-special-builder'
import { FoodOrder } from './class/food-order'
import { FoodOrderDirector } from './director/food-order-director'

class RestaurantMenu {
  private _order: FoodOrder = new FoodOrder()

  constructor() {
    this.initOrder()
    this.describeOrder()
  }

  initOrder(): void {
    // ## NORMAL ORDER
    // const orderBuilder = new FoodOrderNormalBuilder()
    // const orderDirector = new FoodOrderDirector(orderBuilder)
    // orderDirector.buildFullDish()
    // this._order = orderBuilder.getOrder()

    // ## EASY ORDER
    const orderBuilder = new FoodOrderSpecialBuilder()
    const orderDirector = new FoodOrderDirector(orderBuilder)
    orderDirector.buildEasyDish()
    this._order = orderBuilder.getOrder()
  }

  describeOrder(): void {
    console.log(this._order.describe())
  }
}

new RestaurantMenu()
