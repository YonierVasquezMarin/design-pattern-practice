import { FoodOrder } from "../class/food-order";
import { IFoodOrderBuilder } from "./abstract-builder/food-order-abstract-builder";

export class FoodOrderNormalBuilder implements IFoodOrderBuilder {
  private _order: FoodOrder = new FoodOrder()

  buildMainDish(): void {
    this._order.setFood('Pizza')
    this._order.setProtein('Chicken')
    this._order.setGrain('Rice')
    this._order.setSalad('Caesar Salad')
  }

  buildDrink(): void {
    this._order.setDrink('Coke')
  }

  buildDessert(): void {
    this._order.setDessert('Ice Cream')
  }

  getOrder(): FoodOrder {
    return this._order
  }
}