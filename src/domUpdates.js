const recipeCards = document.querySelector('.all-cards');
const favButton = document.querySelector('.view-favorites');
import User from "./user";
let user;
import Recipe from "./recipe";

let domUpdates = {


  greetUser(user) {
    const userName = document.querySelector('.user-name');
    userName.innerHTML =
        user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
  },

  viewFavorites(user, recipeRepository) {
    if (recipeCards.classList.contains('all')) {
      recipeCards.classList.remove('all')
    }
    if (!user.favoriteRecipes.length) {
      favButton.innerHTML = 'You have no favorites!';
      this.populateCards(recipeRepository.recipes);
    } else {
      favButton.innerHTML = 'Refresh Favorites'
      recipeCards.innerHTML = '';
      user.favoriteRecipes.forEach(recipe => {
        recipeCards.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
      class='card'>
      <header id='${recipe.id}' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
      <img id='${recipe.id}' class='add'
      src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
      recipes to cook'></button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite-active card-button'>
      </button></header>
      <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
      <img id='${recipe.id}' tabindex='0' class='card-picture'
      src='${recipe.image}' alt='Food from recipe'>
      </div>`)
      })
    }
  },

  getFavorites(user) {
    if (user.favoriteRecipes.length) {
      user.favoriteRecipes.forEach(recipe => {
        document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
      })
     }
  },

  // will need to come back to this and debug the issues

  populateCards(recipes) {
    recipeCards.innerHTML = '';
    if (recipeCards.classList.contains('all')) {
      recipeCards.classList.remove('all')
    }
    recipes.forEach(recipe => {
      recipeCards.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
    class='card'>
        <header id='${recipe.id}' class='card-header'>
          <label for='add-button' class='hidden'>Click to add recipe</label>
          <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
            <img id='${recipe.id} favorite' class='add'
            src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
            recipes to cook'>
          </button>
          <label for='favorite-button' class='hidden'>Click to favorite recipe
          </label>
          <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
        </header>
          <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
          <img id='${recipe.id}' tabindex='0' class='card-picture'
          src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
    </div>`)
    })
  },

  favoriteCard(event, recipeRepo, user) {
    let specificRecipe = recipeRepo.recipes.find(recipe => {
      if (recipe.id  === Number(event.target.id)) {
        return recipe;
      }
    })
    if (!event.target.classList.contains('favorite-active')) {
      event.target.classList.add('favorite-active');
      favButton.innerHTML = 'View Favorites';
      user.addToFavorites(specificRecipe);
    } else if (event.target.classList.contains('favorite-active')) {
      event.target.classList.remove('favorite-active');
      user.removeFromFavorites(specificRecipe)
    }
  },

  cardButtonConditionals(event, recipeRepo, user) {
    if (event.target.classList.contains('favorite')) {
      this.favoriteCard(event, recipeRepo, user);
    } else if (event.target.classList.contains('card-picture')) {
      this.displayDirections(event);
    } else if (event.target.classList.contains('home')) {
      favButton.innerHTML = 'View Favorites';
      this.populateCards(recipeRepo.recipes);
    }
  },


  displayDirections(event, recipeRepo) {
    let newRecipeInfo = recipeRepo.recipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    })
    let recipeObject = new Recipe(newRecipeInfo);
    let cost = recipeObject.calculateCost()
    let costInDollars = (cost / 100).toFixed(2)
    recipeCards.classList.add('all');
    recipeCards.innerHTML = `<h3>${recipeObject.name}</h3>
  <p class='all-recipe-info'>
  <strong>It will cost: </strong><span class='cost recipe-info'>
  $${costInDollars}</span><br><br>
  <strong>You will need: </strong><span class='ingredients recipe-info'></span>
  <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
  </span></ol>
  </p>`;
    let ingredientsSpan = document.querySelector('.ingredients');
    let instructionsSpan = document.querySelector('.instructions');
    recipeObject.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
    ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
    ${ingredient.name}</li></ul>
    `)
    })
    recipeObject.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
    ${instruction.instruction}</li>
    `)
    })
  }
}

export default domUpdates;