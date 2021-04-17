
let domUpdates = {

   greetUser(user) {
  const userName = document.querySelector('.user-name');
  userName.innerHTML =
      user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
}

}

export default domUpdates;