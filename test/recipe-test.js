import { expect } from 'chai';
import Recipe from '../src/recipe.js';

let recipe, ingredientsData;

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

    ingredientsData = [{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    }]
  });

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

  it('should hold an array of ingredients', () => {
    
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
      }]);
  });

  it('should have an array of instructions', () => {
      
    expect(recipe.instructions).to.deep.equal([
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      }]);
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

  it('should list ingredients needed', () => {
      
    expect(recipe.getIngredientNames(ingredientsData)).to.deep.equal([{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    }]);
  });

  it('should return recipe instructions', () => {
      
    expect(recipe.getInstructions()).to.deep.equal([
      "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
      "Add egg and vanilla and mix until combined."
    ]);
  });

  it('should calculate the cost of its ingredients', () => {
      
    expect(recipe.calculateCost(ingredientsData)).to.equal(5.04);
  });
});