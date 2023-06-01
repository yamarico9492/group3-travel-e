document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var birthdate = document.getElementById("birthdate").value;

    if (firstName.trim() === "") {
      displayWarning("Please enter your first name.");
      return;
    }

    if (lastName.trim() === "") {
      displayWarning("Please enter your last name.");
      return;
    }

    if (email.trim() === "") {
      displayWarning("Please enter your email.");
      return;
    }

    if (password.trim() === "") {
      displayWarning("Please enter your password.");
      return;
    }

    if (gender.trim() === "") {
      displayWarning("Please select your gender.");
      return;
    }

    if (birthdate.trim() === "") {
      displayWarning("Please enter your birthdate.");
      return;
    }

    document.getElementById("login-form").reset();

    // ここに変えたら、ページ転送できると思う。
    window.location.href = "地名.html";
  });

function displayWarning(message) {
  var warning = document.getElementById("warning");
  warning.style.display = "block";
  warning.innerText = message;
}
