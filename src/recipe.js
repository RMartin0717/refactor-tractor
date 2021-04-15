class Recipe {
  constructor(name, id, image, ingredients, instructions, tags, ingredientsData) {
    this.name = name;
    this.id = id;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
    this.ingredientsData = ingredientsData;
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount))
        }
      })
    });
    return costCounter;
  }

}

export default Recipe;
