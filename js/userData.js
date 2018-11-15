//Registration Form Data
var userName = document.getElementById("user");
var passWord = document.getElementById("pass");
var email = document.getElementById("emailAdd");
var firstName = document.getElementById("fName");
var lastName = document.getElementById("lName");

function saveData(){
  localStorage.setItem('userName', user.value);
  localStorage.setItem('passWord', pass.value);
  localStorage.setItem('email', emailAdd.value);
  localStorage.setItem('firstName', fName.value);
  localStorage.setItem('lastName', lName.value);
  window.location.href="index.html";
  alert("Your User Details Have Been Saved!");
};

//Login Page Data
var inputUser = document.getElementById('inputU');
var inputPass = document.getElementById('inputP');

function logIn(){
  var storedUser = localStorage.getItem('userName');
  var storedPass = localStorage.getItem('passWord');

  if(inputUser.value == storedUser && inputPass.value == storedPass){
    alert ("You Have Successfully Logged in!");
    window.location.href="home.html";
  } else {
    alert ("This Login Information is Invalid");
  }
}

$(document).ready(function() {
  console.log('hello world');



});
