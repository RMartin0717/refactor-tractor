// import './app.js';
import './css/base.scss';
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


//want to get working off linked app.js

let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');


Promise.all([retrieveUserData, retrieveIngredientsData, retrieveRecipesData])
  .then((data) => {
    allUsersData = data[0]
    allIngredientsData = data[1];
    allRecipesData = data[2]
    onStartup(allUsersData, allIngredientsData, allRecipesData);

  })

let user, pantry, recipeRepo;

favButton.addEventListener('click', handleFavorites);
homeButton.addEventListener('click', handleCards);
cardArea.addEventListener('click', handleCards);


function handleFavorites() {
  domUpdates.viewFavorites(user, recipeRepo);
}

function handleCards() {
  domUpdates.cardButtonConditionals(event, recipeRepo);
}

function onStartup(allUsersData, allIngredientsData, allRecipesData) {
  createRandomUser(allUsersData);
  createUserPantry(allIngredientsData);
  createRecipeRepo(allRecipesData);
  domUpdates.greetUser(user)
  domUpdates.populateCards(allRecipesData)
  //do something allIngredientsData
}

function createRandomUser(allUsersData) {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = allUsersData.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
}

function createUserPantry(allIngredientsData) {
  pantry = new Pantry(user.pantry)
}

function createRecipeRepo(allRecipesData) {
  recipeRepo = new RecipeRepository(allRecipesData);
}