import { expect } from 'chai';

import Recipe from '../src/recipe.js';
import Pantry from '../src/pantry.js';
import recipeTestingData from '../test/recipe-testing-data';
import pantryTestingData from '../test/pantry-testing-data';

describe('Pantry', () => {
  let pantry;
  let recipe1;
  let recipe2;
  let recipe3;

  beforeEach(() => {
    pantry = new Pantry(pantryTestingData[0].pantry);
    recipe1 = new Recipe(recipeTestingData[0].id, recipeTestingData[0].image, recipeTestingData[0].ingredients, recipeTestingData[0].instructions, recipeTestingData[0].name, recipeTestingData[0].tags)
    recipe2 = new Recipe(recipeTestingData[1].id, recipeTestingData[1].image, recipeTestingData[1].ingredients, recipeTestingData[1].instructions, recipeTestingData[1].name, recipeTestingData[1].tags)
    recipe3 = new Recipe(recipeTestingData[2].id, recipeTestingData[2].image, recipeTestingData[2].ingredients, recipeTestingData[2].instructions, recipeTestingData[2].name, recipeTestingData[2].tags)
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    expect(pantry).to.be.instanceOf(Pantry);
  });

  it('should have stocked ingredients', () => {
    expect(pantry.contents).to.deep.equal(pantryTestingData[0].pantry)
  });

});

