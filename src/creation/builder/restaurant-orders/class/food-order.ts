export class FoodOrder {
  private _food: string = 'None'
  private _drink: string = 'None'
  private _dessert: string = 'None'
  private _protein: string = 'None'
  private _grain: string = 'None'
  private _salad: string = 'None'

  setFood(food: string): void {
    this._food = food
  }

  setDrink(drink: string): void {
    this._drink = drink
  }

  setDessert(dessert: string): void {
    this._dessert = dessert
  }

  setProtein(protein: string): void {
    this._protein = protein
  }

  setGrain(grain: string): void {
    this._grain = grain
  }

  setSalad(salad: string): void {
    this._salad = salad
  }

  describe(): string {
    return `Food: ${this._food}, Drink: ${this._drink}, Dessert: ${this._dessert}, Protein: ${this._protein}, Grain: ${this._grain}, Salad: ${this._salad}`
  }
}
