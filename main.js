var elSubmit = document.getElementById('submit');
  var pw = document.getElementById('password').value;
  var pwch = document.getElementById('password_check').value;

elSubmit.addEventListener('click', function(e) {

  if (pw !== pwch) {
    window.alert("Passwords do not match. Please try again.");
  } else {
  window.alert("Thank you for entering a username and password!");
  }
});