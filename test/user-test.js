import { expect } from 'chai';

import User from '../src/user.js';
import userTestingData from '../test/user-testing-data';
import recipeTestingData from '../test/recipe-testing-data';


describe('User', () => {
  let user1, recipeData
  beforeEach(() => {
    user1 = new User(userTestingData[0].id, userTestingData[0].name, userTestingData[0].pantry);
  });
  it("Should store a user's id and name", () => {
    expect(user1.id).to.equal(1);
    expect(user1.name).to.equal("Saige O'Kon");
  });
  it("Should store the contents of a user's pantry", () => {
    expect(user1.pantry).to.deep.equal(userTestingData[0].pantry);
  });
  it('Should have a property of favoriteRecipes with a default value of an empty array', () => {
    expect(user1.favoriteRecipes).to.deep.equal([]);
  });
  it('Should have a property of recipesToCook with a default value of an empty array', () => {
    expect(user1.recipesToCook).to.deep.equal([]);
  });
  it('Should be able to add recipes to favoriteRecipes', () =>{
    user1.addToFavorites(recipeTestingData[0]);
    expect(user1.favoriteRecipes.includes(recipeTestingData[0])).to.equal(true);
  });
  it('Should be able to remove recipes from favoriteRecipes', () =>{
    user1.removeFromFavorites(recipeTestingData[0]);
    expect(user1.favoriteRecipes).to.deep.equal([]);
  });
  it("Should add a recipe to a list of recipes to cook", () => {
    user1.addToRecipesToCook(recipeTestingData[1]);
    expect(user1.recipesToCook).to.deep.equal([recipeTestingData[1]]);
  });
  describe('Search Methods', () => {
    beforeEach(() => {
      user1.addToFavorites(recipeTestingData[0]);
      user1.addToFavorites(recipeTestingData[1]);
      user1.addToFavorites(recipeTestingData[2]);
      user1.addToFavorites(recipeTestingData[3]);
    });
    it('Should be able to filter through favoriteRecipes by tag', () => {
      const searchByTag = user1.searchFavoritesByTag(["starter"]);
      expect(searchByTag).to.deep.equal([recipeTestingData[0], recipeTestingData[3]]);
    });
    it('Should be able to filter through favoriteRecipes by more than one tag', () => {
      const searchByTag = user1.searchFavoritesByTag(["snack", "dinner"]);
      expect(searchByTag).to.deep.equal([recipeTestingData[0], recipeTestingData[1]]);
    });
    it('Should be able to search favoriteRecipes by name', () => {
      const searchByName = user1.searchFavoritesByNameOrIng("Pudding");
      expect(searchByName).to.deep.equal([recipeTestingData[0]]);
    });
    it('Should be able to search favoriteRecipes by ingredient', () => {
      const searchByIng = user1.searchFavoritesByNameOrIng("mango");
      expect(searchByIng).to.deep.equal([recipeTestingData[2]]);
    });
  });
});
