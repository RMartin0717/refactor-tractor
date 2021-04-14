import { expect } from 'chai';

import Recipe from '../src/recipe.js';
import recipeData from '../src/data/recipes.js';
import ingredientsData from '../src/data/ingredients.js';

let recipe;

describe('Recipe', () => {
  beforeEach(() => {

    recipe = new Recipe('Loaded Chocolate Chip Pudding Cookie Cups', 595736, "https://spoonacular.com/recipeImages/595736-556x370.jpg", [
      {
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 18372,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      }], [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      }], [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]);
  });

  describe('Recipe Data', () => {

    it('should be a function', () => {
      expect(Recipe).to.be.a('function');
    });

    it('should be an instance of Recipe', () => {
      expect(recipe).to.be.an.instanceOf(Recipe);
    });

    it('should have a name', () => {
      expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
    });

    it('should have an id', () => {
      expect(recipe.id).to.equal(595736);
    });

    it('should have an image', () => {
      expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg')
    });

    it('should have a list of ingredients', () => {
      expect(recipe.ingredients).to.deep.equal([
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }])
    });

    it('should have a list of instructions', () => {
      expect(recipe.instructions).to.deep.equal([
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        }])
    });

    it('should have tags', () => {
      expect(recipe.tags).to.deep.equal([
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]);
    });


    // it('Should be able to calculate the cost of its ingredients', () => {
    //   // console.log(ingredientsData);
    //   expect(recipe.calculateCost()).to.equal(4166);
  });
});

