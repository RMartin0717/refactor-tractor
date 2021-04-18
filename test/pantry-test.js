import { expect } from 'chai';

import Recipe from '../src/recipe.js';
import Pantry from '../src/pantry.js';
import recipeTestingData from '../test/recipe-testing-data';
import pantryTestingData from '../test/pantry-testing-data';

describe('Pantry', () => {
  let pantry1;
  let pantry2;
  let recipe1;
  let recipe2;
  let recipe3;

  beforeEach(() => {
    pantry1 = new Pantry(pantryTestingData[0].pantry);
    pantry2 = new Pantry(pantryTestingData[1].pantry);
    recipe1 = new Recipe(recipeTestingData[0].name, recipeTestingData[0].id, recipeTestingData[0].image, recipeTestingData[0].ingredients, recipeTestingData[0].instructions, recipeTestingData[0].tags)
    recipe2 = new Recipe(recipeTestingData[1].name, recipeTestingData[1].id, recipeTestingData[1].image, recipeTestingData[1].ingredients, recipeTestingData[1].instructions, recipeTestingData[1].name, recipeTestingData[1].tags)
    recipe3 = new Recipe(recipeTestingData[2].name, recipeTestingData[2].id, recipeTestingData[2].image, recipeTestingData[2].ingredients, recipeTestingData[2].instructions, recipeTestingData[2].name, recipeTestingData[2].tags)
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    expect(pantry1).to.be.instanceOf(Pantry);
  });

  it('should have stocked ingredients', () => {
    expect(pantry2.contents).to.deep.equal(pantryTestingData[1].pantry)
  });

  it('should return the stocked ingredients in users pantry', () => {
    expect(pantry1.getPantryStock()).to.deep.equal(pantryTestingData[0].pantry)
  });

  it('should find the required ingredients', () => {
    expect(pantry1.getRequiredIngredients(recipe1)).to.deep.equal([{name: 'wheat flour', amount: 1.5},
      {name: 'bicarbonate of soda', amount: 0.5},
      {name: 'eggs', amount: 1},
      {name: 'sucrose', amount: 0.5},
      {name: 'instant vanilla pudding', amount: 3},
      {name: 'brown sugar', amount: 0.5},
      {name: 'salt', amount: 0.5},
      {name: 'fine sea salt', amount: 24},
      {name: 'semi sweet chips', amount: 2},
      {name: 'unsalted butter', amount: 0.5},
      {name: 'vanilla', amount: 0.5},
    ])
  });

  it('should remove items from pantry when meal is cooked', () => {
    pantry1.removeStockFromPantry(recipe3);
    expect(pantry1.contents).to.deep.equal([
      {
        "ingredient": 11477,
        "amount": 2
      },
      {
        "ingredient": 11297,
        "amount": 3.75
      },
      {
        "ingredient": 1082047,
        "amount": 9.75
      },
      {
        "ingredient": 20081,
        "amount": 4
      }])
  });

  it('should check for required ingredients in Pantry', () => {
    const testTrue = pantry1.checkPantryForRequiredIngredients(recipe3);
    expect(testTrue.canCook).to.equal(true);
  });

  it('should return false if there are not enough required ingredients', () => {
    const testFalse = pantry1.checkPantryForRequiredIngredients(recipe2);
    expect(testFalse.canCook).to.equal(false);
    expect(testFalse.missingIngredients).to.deep.equal([
      {ingredient: 1009016, amount: 1.5},
      {ingredient: 9003, amount: 2},
      {ingredient: 20027, amount: 1},
      {ingredient: 1002046, amount: 1},
      {ingredient: 11215, amount: 1},
      {ingredient: 1012046, amount: 1},
      {ingredient: 19911, amount: 0.25},
      {ingredient: 16112, amount: 1},
      {ingredient: 10010062, amount: 24},
      {ingredient: 1102047, amount: 4},
      {ingredient: 16124, amount: 1},
      {ingredient: 1016168, amount: 1}
    ])
  });

  it('should be able to return array of missing ingredients', () => {
    const testArray = pantry1.checkPantryForRequiredIngredients(recipe1);
    expect(testArray.missingIngredients).to.deep.equal([
      {ingredient: 20081, amount: 4},
      {ingredient: 18372, amount: 0.5},
      {ingredient: 1123, amount: 1},
      {ingredient: 19335, amount: 0.5},
      {ingredient: 19206, amount: 3},
      {ingredient: 19334, amount: 0.5},
      {ingredient: 2047, amount: 0.5},
      {ingredient: 1012047, amount: 24},
      {ingredient: 10019903, amount: 2},
      {ingredient: 1145, amount: 0.5},
      {ingredient: 2050, amount: 0.5}
    ])
  });
});
