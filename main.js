function checkPassword() {
  //This variable should be the content of what's inputted into password
  var password = el.value;
  //This variable should be the content of what's inputted into password_check
  var password_check =
  //if password != password_check, show message that passwords do not match.
  //also disable the submit button.
  //if password === password_check, show no message.
  if
}

function submitMessage() {
  window.alert("Thank you for entering a username and password!");
}

var elSubmit = document.getElementById('submit');
elSubmit.addEventListener('click', submitMessage, true);