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
    // const searchResults = this.favoriteRecipes.filter(recipe => {
    //   return recipe.name.includes(searchWord) || ingredient.name.includes(searchWord)
    //   });
    // return searchResults
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(searchWord)
      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(searchWord)
      });
    });
  }
}


export default User;
