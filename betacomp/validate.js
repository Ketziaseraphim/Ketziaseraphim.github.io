const form = document.getElementById('apply');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lasttname');
const dob = document.getElementById('dob');
const gender = document.getElementsByName('Gender');
const street = document.getElementById('street');
const suburb = document.getElementById('suburb');
const state = document.getElementById('state');
const postcode = document.getElementById('postcode');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const skill = document.getElementsByName('Skill');
const otherskills = document.getElementById('otherskills');
var result = true;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from input
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const dobValue = dob.value.trim();
  const streetValue = street.value.trim();
  const suburbValue = suburb.value.trim();
  const stateValue = state.value.trim();
  const postcodeValue = postcode.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const otherskillsValue = otherskills.value.trim();

  if (firstnameValue === '') {
    setFailFor(firstname, 'First Name is Required');
    result = false;
  } else {
    setSuccessFor(firstname);
  }
  if (lastnameValue === '') {
    setFailFor(lastname, 'Last Name is Required');
    result = false;
  } else {
    setSuccessFor(lastname);
  }
  if (dobValue === '') {
    setFailFor(dob, 'Your Date of Birth is Required');
    result = false;
  } else {
    setSuccessFor(dob);
  }
  if (streetValue === '') {
    setFailFor(street, 'Street Address is Required');
    result = false;
  } else {
    setSuccessFor(street);
  }
  if (suburbValue === '') {
    setFailFor(suburb, 'Suburb is Required');
    result = false;
  } else {
    setSuccessFor(suburb);
  }
  if (stateValue === 'select') {
    setFailFor(state, 'State is Required');
    result = false;
  } else {
    setSuccessFor(state);
  }
  if (postcodeValue === '') {
    setFailFor(postcode, 'Postcode is Required');
    result = false;
  } else {
    setSuccessFor(postcode);
  }
  if (emailValue === '') {
    setFailFor(email, 'Email is Required');
    result = false;
  } else {
    setSuccessFor(email);
  }
  if (phoneValue === '') {
    setFailFor(phone, 'Phone Number is Required');
    result = false;
  } else {
    setSuccessFor(phone);
  }

  if (result == 1){
    alert('Something went wrong, Please check the form again');
    return false;
  }
}

function setFailFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  //add message inside the small tag
  small.innerText = message;
  //add error class
  formControl.className = 'form-control fail';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function store(){
  if(sessionStorage.refnum !=undefined) {
  document.getElementById("refnum").innerHTML = sessionStorage.getItem("refnum");
  }
}

function init() {
	store();
}
window.onload = init;