class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData;
  }

  returnTags(recipeTags) {
      const searchResults = recipeTags.reduce((acc, tag) => {
        const checkTag = this.recipes.filter(recipe => recipe.tags.includes(tag));
        return acc.concat(checkTag)
      }, []);
      return searchResults
    // const taggedRecipes = [];
    // this.recipes.filter(recipe => {
    //   if (recipe.tags.includes(recipeTag)) {
    //     taggedRecipes.push(recipe);
    //   }
    // });
    // return taggedRecipes;
  }

  findRecipe(searchTerm) {
    return this.recipes.filter(recipe => {
      return recipe.name.includes(searchTerm)
      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(searchTerm)
      });
    });
    // const searchResults = this.recipes.reduce((results, recipe) => {
    //   const matchingTerms = recipe.ingredients.find(ingredient => {
    //     return ingredient.name === searchTerm || recipe.name === searchTerm;
    //   });
    //   if (matchingTerms) {
    //     results.push(recipe);
    //   }
    //   return results;
    // }, [])
    // return searchResults;
  }
}

export default RecipeRepository;
