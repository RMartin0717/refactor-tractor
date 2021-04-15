import ingredientsData from './data/ingredients.js'

class Recipe {
  constructor(name, id, image, ingredients, instructions, tags) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
  }

  getIngredientNames() {
    let ingredientNames = [];
    this.ingredients.forEach(ingredient => {
      ingredientsData.find(specificIngredient => {
        if (ingredient.id === specificIngredient.id) {
          ingredientNames.push(specificIngredient.name);
        }
      });
    });
    return ingredientNames;
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
      ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (specificIngredient.estimatedCostInCents * ingredient.quantity.amount) / 100;
        }
      });
    });
    return costCounter;
  }

  getInstructions() {
    const instructionList = this.instructions.map(instruction => instruction.instruction);

    return instructionList;
  }
}


export default Recipe;
