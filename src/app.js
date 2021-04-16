const userURL = "http://localhost:3001/api/v1/users";
const ingredientsURL = "http://localhost:3001/api/v1/ingredients";
const recipesURL ="http://localhost:3001/api/v1/recipes";


const retrieveUserData = fetch(userURL)
  .then(response => response.json())
  .then(data => {return data})
  .catch(err => console.log("Duck season wabbit season"))
