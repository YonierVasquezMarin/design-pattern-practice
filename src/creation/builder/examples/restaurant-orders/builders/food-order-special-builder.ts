import { FoodOrder } from "../class/food-order";
import { IFoodOrderBuilder } from "./abstract-builder/food-order-abstract-builder";

export class FoodOrderSpecialBuilder implements IFoodOrderBuilder {
  private _order: FoodOrder = new FoodOrder()

  buildMainDish(): void {
    this._order.setFood('Sushi')
    this._order.setProtein('Salmon')
    this._order.setGrain('Rice')
    this._order.setSalad('Kani Salad')
  }

  buildDrink(): void {
    this._order.setDrink('Sake')
  }

  buildDessert(): void {
    this._order.setDessert('Mochi')
  }

  getOrder(): FoodOrder {
    return this._order
  }
}