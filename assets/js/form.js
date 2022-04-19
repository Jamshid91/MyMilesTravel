let openModalBtns = document.querySelectorAll('.openModal'),
    modalForm = document.querySelector('.modal-form'),
    modalFormItem = document.querySelector('.modal-form-item'),
    modalSucces = document.querySelector('.modal-succes'),
    btnClose = document.querySelector('.btn-close'),
    form = document.getElementById('form'),
    userName = document.getElementById('userName'),
    userEmail = document.getElementById('userEmail'),
    message = document.getElementById('message'),
    submitBtn = document.getElementById('submitForm'),
    error = document.querySelector('small.error'),
    whereFlayVal = document.querySelector('.where-flay'),
    whereFlayFromVal = document.querySelector('.where-flay-from'),
    dateFly = document.getElementById('dateFly'),
    passenger = document.querySelector('span.passenger'),
    classFly = document.querySelector('span.class');

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

document.addEventListener('click', (e) => {
  if(e.target === modalForm) {
    modalForm.classList.add('d-none')
  }
})


submitBtn.addEventListener('click', (e) => {
  checkInputs()
  if(error.innerHTML == '') {
    const values = {
      name: userName.value,
      email: userEmail.value,
      message: message.value
    }
    const valuesPrice = {
      'Откуда': whereFlayVal.value,
      'Куда': whereFlayFromVal.value,
      'Вылет': dateFly.value,
      'Пассажир': passenger.innerHTML,
      'Класс': classFly.innerHTML,
    }

    submitBtn.type = 'submit'
    e.preventDefault();
    removeModalSucces();

    modalForm.classList.add('d-none');
    modalSucces.classList.remove('d-none');

    console.log(values, valuesPrice)
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
