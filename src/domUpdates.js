import Recipe from "./recipe"

const recipeCards = document.querySelector('.all-cards');
const favButton = document.querySelector('.view-favorites');

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
      this.displayDirections(event, recipeRepo);
    } else if (event.target.classList.contains('home')) {
      favButton.innerHTML = 'View Favorites';
      this.populateCards(recipeRepo.recipes);
    }
  },


  displayDirections(event, recipeRepo) {
    const matchingRecipe = recipeRepo.recipes.find(recipe => {
      if (recipe.id === parseInt(event.target.id)) {
        return recipe;
      }
      return recipe;
    });

    let currentRecipe = new Recipe(matchingRecipe.name, matchingRecipe.id, matchingRecipe.image, matchingRecipe.ingredients, matchingRecipe.instructions, matchingRecipe.tags);
    let cost = currentRecipe.calculateCost().toFixed(2);
    let curIngredientNames = currentRecipe.getIngredientNames();

    const ingredientsObj = currentRecipe.ingredients.map(ingredient => {
      const ingList = {};
      const id = ingredient.id;
      const amount = ingredient.quantity.amount;
      const unit = ingredient.quantity.unit;
      curIngredientNames.forEach(ingredientData => {
        const name = ingredientData.name;
        if (ingredientData.id === id) {
          ingList.name = name;
          ingList.amount = amount;
          ingList.unit = unit;
        }
      })
      return ingList;
    });

    recipeCards.classList.add('all');
    recipeCards.innerHTML = `
      <h3>${currentRecipe.name}</h3>
      <p class='all-recipe-info'>
        <strong>It will cost: </strong><span class='cost recipe-info'>
        ${cost}</span><br><br>
        <strong>You will need: </strong><span class='ingredients recipe-info'></span>
        <strong>Instructions: </strong><ol><span class='instructions
        recipe-info'>
        </span></ol>
      </p>`
    ;

    let ingredientsSpan = document.querySelector('.ingredients');
    let instructionsSpan = document.querySelector('.instructions');
    ingredientsObj.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `
      <ul><li>
      ${ingredient.amount.toFixed(2)}
      ${ingredient.unit}
      ${ingredient.name}
    </li></ul>
    `)
    });
    currentRecipe.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
    ${instruction.instruction}</li>
    `)
    });
  }
}

export default domUpdates;
