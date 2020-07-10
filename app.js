const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

document.querySelector('.fa-bars').addEventListener('click', (ev) => {
  document.body.classList.toggle("show-nav");
});
open.addEventListener('click', ev => {
  modal.classList.add("show-modal");
});
close.addEventListener('click', ev => {
  modal.classList.remove("show-modal");
});
//------------form validation---------------------
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-confirmation');

function success(input) {
  const formControl = input.parentElement;
  formControl.className='form-control success';
}
function fail(input, message) {
  const formControl = input.parentElement;
  formControl.className='form-control fail';
  const small = document.getElementById('small');
  small.innerHTML = message;
}

// function checkEmail(email) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(email.value.trim())) {
//     success(email);
//   } else {
//     fail(email, 'Email is not valid');
//   }
// }




function checkLength(input, min, max) {
  if (input.value.trim().length < min ) {
    fail(input, `${getIdName(input)} must be more than ${min}`);
  } else if(input.value.trim().length > max) {
    fail(input, `${getIdName(input)} must be less than ${max}`);
  } else {
    success(input);
  }
}



function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    fail(input2, `${getIdName(input2)} failed`);
  } else {
    success(input2);
  }
}

function getIdName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  if (username.value === '') {
    fail(username, "Username is required");
  } else {
    success(username);
  }


  if (email.value === '') {
    fail(email, "Email is required");
  } else {
    success(email);
  }

  if (password.value === '') {
    fail(password, "Password is required");
  } else {
    success(password);
  }

  if (password2.value === '') {
    fail(password2, "");
  } else {
    success(password);
  }
  // checkLength(username, 4, 16);
  // checkLength(password, 8, 24);

  checkPasswords(password, password2);
});
