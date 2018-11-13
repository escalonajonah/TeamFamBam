var defaultData = {
  'userName': 'User Name',
  'password': 'Password',
  'email': 'Email',
}


$(document).ready(function() {
  console.log('hello world');

  function saveData(){
    localStorage.setItem('userName', input.value);
    localStorage.setItem('password', input.value);
    localStorage.setItem('email', input.value);
  }

});
