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
    //need to be able to filter by one OR MORE tags
    //pass in an array for the tag??
    //use a reduce and filter to check each tag and then concatonate the arrays
    const searchReslts = searchTags.reduce((acc, tag) => {
      const checkTag = this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag));
      return acc.concat(checkTag)
    }, []);
    return searchResults
  }

  searchFavoritesByNameOrIng(searchWord) {
    const searchResults = this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(searchWord) || ingredient.name.includes(searchWord)
      });
    return searchResults
  };
}


export default User;
