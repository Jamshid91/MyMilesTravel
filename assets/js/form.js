let form = document.getElementById('form');
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let message = document.getElementById('message');
let submitBtn = document.getElementById('submitForm');
let error = document.querySelector('small.error');


submitBtn.addEventListener('click', () => {
  checkInputs()
  if(error.innerHTML == '') {
    submitBtn.type = 'submit'
  }
});



function checkInputs() {
  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const messageValue = message.value.trim();


  if(userNameValue === '' || userNameValue.length <= 2) {
    setErrorFor(userName, '1px solid #FF0000')
  } else {
    setSuccesFor(userName)
  }

  if(userEmailValue === '') {
    setErrorFor(userEmail, '1px solid #FF0000')
  }
  else if(!isEmail(userEmailValue)) {
    setErrorFor(userEmail, '1px solid #FF0000')
  }
  else {
    setSuccesFor(userEmail)
  }

  
  if(messageValue === '' && messageValue.length < 10) {
    setErrorFor(message, '1px solid #FF0000')
  }
  else if(messageValue.length < 10) {
    setErrorFor(message, '1px solid #FF0000')
  }
  else {
    setSuccesFor(message)
  }
}

function setErrorFor(input, border) {
    error.classList.add('inputError');
    input.classList.add('inputError');
    error.innerHTML = 'Не правильно заполнили поле'
    input.style.border = border
}

function setSuccesFor(input) {
    input.style.border = '1px solid #605dec'
    input.classList.remove('inputError');
    input.classList.add('inputSucces');
    error.innerHTML = ''
} 

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}