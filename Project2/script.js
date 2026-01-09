const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form from submitting

  // input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // error divs
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Name validation
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters!";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address!";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters!";
    isValid = false;
  }

  // If all are valid
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset(); // Clear form fields
  }
});
