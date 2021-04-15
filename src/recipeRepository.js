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

  findRecipe(searchTerm) {
    const searchResults = this.recipes.reduce((results, recipe) => {
      const matchingTerms = recipe.ingredients.find(ingredient => {
        return ingredient.name === searchTerm || recipe.name === searchTerm;
      });
      if (matchingTerms) {
        results.push(recipe);
      }
      return results;
    }, [])
    return searchResults;
  }
}

export default RecipeRepository;
