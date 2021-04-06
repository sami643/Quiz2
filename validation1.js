window.addEventListener("load", () => {
    document.getElementById("submit-form").addEventListener("click", submit);
  });
  
  function checkName() {
    var name_validation = document.getElementById("name").value;
    name_len = name_validation.length;
  
    if (name_len == 0) {
      document.getElementById("name-err").innerText = "Name required";
      document.getElementById("name").style.borderColor = "#DC2626";
      return false;
    }
    if (name_len <= 5) {
      document.getElementById("name-err").innerText =
        "More than 5 character required";
      document.getElementById("name").style.borderColor = "#DC2626";
      return false;
    } else {
      document.getElementById("name-err").innerText = "";
      document.getElementById("name").style.borderColor = "#9CA3AF";
      return true;
    }
  } 
  function checkPassword() {
    let password = document.getElementById("password");
    if (password.value.length == 0) {
      password.style.borderColor = "#DC2626";
      document.getElementById("password-err").innerText =
        "Password is required";
      return false;
    }
    if (password.value.length < 8) {
      password.style.borderColor = "#DC2626";
      document.getElementById("password-err").innerText =
        "Password must be 8 characters long";
      return false;
    } else {
      document.getElementById("password-err").innerText = "";
      password.style.borderColor = "#9CA3AF";
      return true;
    }
  }
  function checkConfirmPassword() {
    let confirm_password = document.getElementById("confirm-password");
    let password = document.getElementById("password");
    if (confirm_password.value.length == 0) {
      document.getElementById("confirm-password-err").innerText =
        "This field is required";
      confirm_password.style.borderColor = "#DC2626";
      return false;
    }
    if (confirm_password.value !== password.value) {
      document.getElementById("confirm-password-err").innerText =
        "Password doesn't match!";
      confirm_password.style.borderColor = "#DC2626";
      return false;
    } else {
      document.getElementById("confirm-password-err").innerText = "";
      confirm_password.style.borderColor = "#9CA3AF";
      return true;
    }
  } 
  function submit() {
    checkName();
    checkPassword();
    checkConfirmPassword();
  
    let email = document.getElementById("email");
  
    if (email.value.length == 0) {
      document.getElementById("email-err").innerText = "Email is required";
      email.style.borderColor = "#DC2626";
    } else {
      document.getElementById("email-err").innerText = "";
      email.style.borderColor = "#9CA3AF";
    }
  }