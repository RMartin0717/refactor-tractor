import { expect } from 'chai';

import User from '../src/user.js';


describe('User', () => {
  let user1, recipeData
  beforeEach(() => {
    user1 = new User(1, 'Boba', [
      {
        'ingredient': 1077,
        'amount': 1
      },
      {
        'ingredient': 14412,
        'amount': 1
      },
      {
        'ingredient': 1009054,
        'amount': 3
      }]
    );
    recipeData = [
      {
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "name": "all purpose flour",
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "name": "baking soda",
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "name": "egg",
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          },
        ],
        "instructions": [
          {
            "number": 1,
            "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
          },
          {
            "number": 2,
            "instruction": "Add egg and vanilla and mix until combined."
          },
        ],
        "tags": [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]
      },
      {
        "name": "Maple Dijon Apple Cider Grilled Pork Chops",
        "id": 678353,
        "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
        "ingredients": [
          {
            "name": "apple cider",
            "id": 1009016,
            "quantity": {
              "amount": 1.5,
              "unit": "cups"
            }
          },
          {
            "name": "apples",
            "id": 9003,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
        ],
        "instructions": [
          {
            "number": 1,
            "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!"
          }
        ],
        "tags": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ]
      },
      {
        "name": "Dirty Steve's Original Wing Sauce",
        "id": 412309,
        "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
        "ingredients": [
          {
            "name": "black pepper",
            "id": 1002030,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "name": "brown sugar",
            "id": 19334,
            "quantity": {
              "amount": 8,
              "unit": "tablespoons"
            }
          },
          {
            "name": "butter",
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
        ],
        "instructions": [
          {
            "number": 1,
            "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined."
          }
        ],
        "tags": [
          "sauce"
        ]
      },
    ]
    //need to put dummy data in separate file
  });
  it("Should store a user's id and name", () => {
    expect(user1.id).to.equal(1);
    expect(user1.name).to.equal("Boba");
  });
  it("Should store the contents of a user's pantry", () => {
    expect(user1.pantry).to.deep.equal([
      {
        'ingredient': 1077,
        'amount': 1
      },
      {
        'ingredient': 14412,
        'amount': 1
      },
      {
        'ingredient': 1009054,
        'amount': 3
      }
    ]);
  });
  it('Should have a property of favoriteRecipes with a default value of an empty array', () => {
    expect(user1.favoriteRecipes).to.deep.equal([]);
  });
  it('Should have a property of recipesToCook with a default value of an empty array', () => {
    expect(user1.recipesToCook).to.deep.equal([]);
  });
  it('Should be able to add recipes to favoriteRecipes', () =>{
    user1.addToFavorites(recipeData[0]);
    expect(user1.favoriteRecipes.includes(recipeData[0])).to.equal(true);
  });
  it('Should be able to remove recipes from favoriteRecipes', () =>{
    user1.removeFromFavorites(recipeData[0]);
    expect(user1.favoriteRecipes).to.deep.equal([]);
  });
  it("Should add a recipe to a list of recipes to cook", () => {
    user1.addToRecipesToCook(recipeData[1]);
    expect(user1.recipesToCook).to.deep.equal([recipeData[1]]);
  });
  it('Should be able to filter through favoriteRecipes by tag', () => {
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[1]);
    expect(user1.filterFavorites('antipasti')).to.eql([recipeData[0]]);
  });
  it('Should be able to filter through favoriteRecipes by more than one tag', () => {

  });
  it('Should be able to search favoriteRecipes by name or ingredient', () => {
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[1]);
    expect(user1.findFavorites('egg')).to.eql([recipeData[0]]);
  });

  it('Should be able to check ingredients in User/s pantry for a given recipe', () => {
    expect(user1.checkPantry(recipeIngredients)).to.eql('You have the ingredients!');
  });

  it('Should inform User if they lack required ingredients for a given recipe', () => {
    expect(user1.checkPantry(recipeIngredients)).to.eql(missingIngredientsWithPrice);
  });
});
