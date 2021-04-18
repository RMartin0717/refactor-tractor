<<<<<<< HEAD
import ingredientsData from "./data/ingredients";
class Recipe {
  constructor(name, id, image, ingredients, instructions, tags, ingredientsData) {
    this.name = name;
=======
// import { allIngredientsData } from '../src/scripts'
import ingredientsData from './data/ingredients'

class Recipe {
  constructor(name, id, image, ingredients, instructions, tags) {
    this.name = name; 
>>>>>>> 3350bfc8726ff78be422671f9ceb4d9eeeb3c209
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
    this.ingredientsData = ingredientsData;
  }

  getIngredientNames() {
    let ingredientNames = [];
    this.ingredients.forEach(ingredient => {
      ingredientsData.find(specificIngredient => {
        if (ingredient.id === specificIngredient.id) {
          ingredientNames.push(specificIngredient);
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
