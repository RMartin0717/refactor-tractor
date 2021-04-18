class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }


  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1)
  }

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  searchFavoritesByTag(searchTags) {
    const searchResults = searchTags.reduce((acc, tag) => {
      const checkTag = this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag));
      return acc.concat(checkTag)
    }, []);
    return searchResults
  }

  searchFavoritesByNameOrIng(searchWord) {
    // return this.favoriteRecipes.filter(recipe => {
    //   return recipe.name.includes(searchWord)
    //   || recipe.ingredients.filter(ingredient => {
    //     return ingredient.name.includes(searchWord)
    //   });
    // });

    const checkName = this.favoriteRecipes.filter(recipe => recipe.name.includes(searchWord))

    const checkIng = [];
    this.favoriteRecipes.forEach(recipe => {
       const checkNestedIngredients = recipe.ingredients.filter(ingredient => ingredient.name.includes(searchWord))

       checkIng.concat(checkNestedIngredients)
     });
    console.log(checkIng, "check ingredients")
    const searchResults = checkName.concat(checkIng)
    return searchResults

    // const searchResults = this.favoriteRecipes.reduce((results, recipe) => {
    //   const matchingTerms = recipe.ingredients.find(ingredient => {
    //     return ingredient.name === searchWord || recipe.name === searchWord;
    //   });
    //   if (matchingTerms) {
    //     results.push(recipe);
    //   }
    //   return results;
    // }, [])
    // return searchResults;
  }
}


export default User;
