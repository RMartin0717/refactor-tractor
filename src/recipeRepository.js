class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData;
  }

  returnTags(recipeTag) {
    const taggedRecipes = [];
    this.recipes.filter(recipe => {
      if (recipe.tags.includes(recipeTag)) {
        taggedRecipes.push(recipe);
      }
    });
    return taggedRecipes;
  }

  findRecipe(searchText) {
    const filteredRecipes = this.recipes.filter(recipe => {
      const ingredientKeys = Object.keys(recipe.ingredients);
      if (recipe.ingredients.name.includes(searchText) || recipe.name.includes(searchText)) {
      }
   
    })
    // console.log(filteredRecipes);
    return filteredRecipes;
  
    // const filteredRecipes = this.recipes.filter(recipe => {
    //   return recipe.ingredients.find(ingredient => {
    //     return (ingredient.name.includes(searchText)) ||
    //     (recipe.name.includes(searchText))
    //   });
    // })
    // console.log(filteredRecipes);
  }
}

export default RecipeRepository;
