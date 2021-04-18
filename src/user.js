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
    const checkName = this.favoriteRecipes.filter(recipe => recipe.name.includes(searchWord))

    const checkIng = this.favoriteRecipes.filter(recipe => {
       const checkNestedIngredients = recipe.ingredients.find(ingredient => ingredient.name.includes(searchWord))
       return checkNestedIngredients
     });
    const searchResults = checkName.concat(checkIng)
    return searchResults
  }
}


export default User;
