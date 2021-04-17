// import ingredientsData from "./data/ingredients";

class Pantry {
  constructor(userIngredients, ingredientsData) {
    this.contents = userIngredients;
    this.ingredientsData = ingredientsData;
  }

  getPantryStock() {
    return this.contents;
  }

  getRequiredIngredients(recipe) {
    return recipe.ingredients.map(ingredient => {
      const ingredientList = {};
      const id = ingredient.id;
      const amount = ingredient.quantity.amount;
      this.ingredientsData.forEach(ingredientData => {
        const name = ingredientData.name;
        if (ingredientData.id === id) {
          ingredientList.name = name;
          ingredientList.amount = amount;
        }
      })
      return ingredientList;
    })
  }

  removeStockFromPantry(recipe) {
    this.contents.forEach(item => {
      recipe.ingredients.forEach((ingredient => {
        if (item.ingredient === ingredient.id) {
          item.amount -= ingredient.quantity.amount
        }
      }))
    });
    this.contents = this.contents.filter((item) => {
      return item.amount > 0;
    })
  }

  checkPantryForRequiredIngredients(recipe) {
    let requiredIngredient = recipe.ingredients
    let ingredientsAvailable = {
      canCook: true,
      missingIngredients: []
    };
    requiredIngredient.forEach(ingredient => {
      let matchingPantryItem = this.contents.reduce((stock, pantryItem) => {
        const idMatch = this.contents.find(pantryItem => pantryItem.ingredient === ingredient.id)
        if (idMatch === undefined) {
          ingredientsAvailable.canCook = false;
          return {"ingredient": ingredient.id, "amount": ingredient.quantity.amount}
        } else if (idMatch.amount < ingredient.quantity.amount) {
          ingredientsAvailable.canCook = false;
          return {"ingredient": ingredient.id, "amount": (ingredient.quantity.amount - idMatch.amount)}
        } else {
          return idMatch;
        }
      }, []);
      ingredientsAvailable.missingIngredients.push(matchingPantryItem)
    });
    return ingredientsAvailable;
  }
}


export default Pantry;
