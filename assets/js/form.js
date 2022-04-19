let openModalBtns = document.querySelectorAll('.openModal');
let modalForm = document.querySelector('.modal-form');
let modalFormItem = document.querySelector('.modal-form-item');
let modalSucces = document.querySelector('.modal-succes');
let btnClose = document.querySelector('.btn-close');
let form = document.getElementById('form');
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let message = document.getElementById('message');
let submitBtn = document.getElementById('submitForm');
let error = document.querySelector('small.error');


openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modalForm.classList.remove('d-none');
    userName.value = '';
    userEmail.value = '';
    message.value = '';
  });
});

btnClose.addEventListener('click', () => {
  modalForm.classList.add('d-none')
});


submitBtn.addEventListener('click', (e) => {
  checkInputs()
  if(error.innerHTML == '') {
    const values = {
      name: userName.value.trim(),
      email: userEmail.value.trim(),
      message: message.value.trim()
    }

    submitBtn.type = 'submit'
    e.preventDefault();
    removeModalSucces();

    modalForm.classList.add('d-none');
    modalSucces.classList.remove('d-none');

    console.log(values)
  }
});



function removeModalSucces() {
  setTimeout(() => {
    modalSucces.classList.add('d-none');
  }, 2500);
}



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
