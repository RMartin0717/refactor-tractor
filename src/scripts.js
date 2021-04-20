import './css/styles.scss';
import domUpdates from './domUpdates';
import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import RecipeRepository from './recipeRepository';

const userURL = "http://localhost:3001/api/v1/users";
const ingredientsURL = "http://localhost:3001/api/v1/ingredients";
const recipesURL = "http://localhost:3001/api/v1/recipes";
const retrieveUserData = fetch(userURL)
  .then(response => response.json())
  .then(data => data)
const retrieveIngredientsData = fetch(ingredientsURL)
  .then(response => response.json())
  .then(data => data)
const retrieveRecipesData = fetch(recipesURL)
  .then(response => response.json())
  .then(data => data)

let allUsersData = [];
let allIngredientsData = [];
let allRecipesData = [];

const favButton = document.querySelector('.view-favorites');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
const userGreet = document.querySelector('.user-name')
const pantryButton = document.querySelector('#pantry-button')

Promise.all([retrieveUserData, retrieveIngredientsData, retrieveRecipesData])
  .then((data) => {
    allUsersData = data[0]
    allIngredientsData = data[1];
    allRecipesData = data[2]
    createDomData (allUsersData, allIngredientsData, allRecipesData)
    onStartup(domUpdates.usersDataDOM, domUpdates.ingredientsDataDOM, domUpdates.recipesDataDOM);
  })

let user, pantry, recipeRepo;

favButton.addEventListener('click', handleFavorites);
homeButton.addEventListener('click', handleCards);
cardArea.addEventListener('click', handleCards);
pantryButton.addEventListener('click', addUserIngredients)

function handleFavorites() {
  domUpdates.getFavorites(user);
  domUpdates.viewFavorites(user, recipeRepo);
}

function handleCards() {
  domUpdates.cardButtonConditionals(event, recipeRepo, user);
}

function onStartup(allUsersData, allIngredientsData, allRecipesData) {
  createRandomUser(allUsersData);
  createRecipeRepo(allRecipesData);
  createUserPantry(allIngredientsData);
  domUpdates.greetUser(user);
  domUpdates.populateCards(allRecipesData);
}

function createDomData (allUsersData, allIngredientsData, allRecipesData) {
  domUpdates.usersDataDOM = allUsersData;
  domUpdates.ingredientsDataDOM = allIngredientsData;
  domUpdates.recipesDataDOM = allRecipesData;
}

function createRandomUser(allUsersData) {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = allUsersData.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
}

function createUserPantry(allIngredientsData) {
  pantry = new Pantry(allIngredientsData)
}

function createRecipeRepo(allRecipesData) {
  recipeRepo = new RecipeRepository(allRecipesData);
}

function addUserIngredients() {
  let newData = {"userID": user.id, "ingredientID": user.pantry[0].ingredient, "ingredientModification": 5 };
  fetch(userURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData),
  })
    .then(response => userIngredientError(response.status))
    .catch(error => {
      userIngredientError(error)
    })
}

function userIngredientError(res) {
  if (res >= 400) {
    userGreet.innerText = "Request Failed.";
  }
}