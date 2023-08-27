import { IFoodOrderBuilder } from "../builders/abstract-builder/food-order-abstract-builder"

export class FoodOrderDirector {
  private _builder: IFoodOrderBuilder

  constructor(builder: IFoodOrderBuilder) {
    this._builder = builder
  }

  buildFullDish(): void {
    this._builder.buildMainDish()
    this._builder.buildDrink()
    this._builder.buildDessert()
  }

  buildEasyDish(): void {
    this._builder.buildMainDish()
    this._builder.buildDrink()
  }
}