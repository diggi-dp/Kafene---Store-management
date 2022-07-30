
const forms = document.getElementById('form')
const usernameInput = document.querySelector('.loginPage_loginForm input[type="text"]');
const passwordInput = document.querySelector('.loginPage_loginForm input[type="password"]');

function onSubmitHandler(e) {
  e.preventDefault();

  if (usernameInput.value != '' && passwordInput.value != '') {

    if (usernameInput.value === passwordInput.value) {
      localStorage.setItem("username", usernameInput.value)
      localStorage.setItem("password", usernameInput.value)
      alert('login Successfull')
      location.assign('./orders.html');
    }
    else {
      alert('Please enter valid credentials!')
    }

  }
}

forms.addEventListener('submit', onSubmitHandler);

