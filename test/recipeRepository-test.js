import {expect} from 'chai';


import recipeData from '../src/data/recipes';
import RecipeRepository from '../src/recipeRepository';

let recipeRepository;

describe('User', () => {
  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData);
  });

  it('Should have an array of all recipes', () => {
    expect(recipeRepository.recipes).to.be.an('array');
  });

  describe('findRecipe', () => {
    it('Should be able to filter through its array by ingredients', () => {
      expect(recipeRepository.findRecipe('yolk').length).to.equal(2);
    });

    it('Should be able to filter through its array by name', () => {
      expect(recipeRepository.findRecipe('Sesame Cookies').length).to.equal(1);
    });
  });
})
