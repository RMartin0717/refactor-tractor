import ingredientsData from "./data/ingredients";

class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  getPantryStock() {
    return this.contents;
  }

  getRequiredIngredients(recipe) {
    return recipe.ingredients.map(ingredient => {
      const ingredientList = {};
      const id = ingredient.id;
      const amount = ingredient.quantity.amount;
      ingredientsData.forEach(ingredientData => {
        const name = ingredientData.name;
        if (ingredientData.id === id) {
          ingredientList.name = name;
          ingredientList.amount = amount;
        }
      })
      return ingredientList;
    })
  }
}

export default Pantry;
