

document.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("contact-form");

  // If the form isn't on the page for some reason, stop here.
  if (!form) {
    return;
  }

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var messageError = document.getElementById("message-error");

  var successMessage = document.getElementById("form-success");

  // Simple pattern for checking email format: something@something.something
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Shows an error message under a field and highlights the field's border.
  function showError(input, errorEl, message) {
    errorEl.textContent = message;
    input.classList.add("input-error");
  }

  // Clears the error message and border highlight for a field.
  function clearError(input, errorEl) {
    errorEl.textContent = "";
    input.classList.remove("input-error");
  }

  form.addEventListener("submit", function (event) {
    // Stop the form from reloading the page — we handle everything with JS.
    event.preventDefault();

    var isValid = true;

    // Hide any success message from a previous attempt.
    successMessage.textContent = "";
    successMessage.classList.remove("show");

    // --- Validate name ---
    if (nameInput.value.trim() === "") {
      showError(nameInput, nameError, "Please enter your name.");
      isValid = false;
    } else {
      clearError(nameInput, nameError);
    }

    // --- Validate email ---
    var emailValue = emailInput.value.trim();
    if (emailValue === "") {
      showError(emailInput, emailError, "Please enter your email.");
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      showError(emailInput, emailError, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(emailInput, emailError);
    }

    // --- Validate message ---
    if (messageInput.value.trim() === "") {
      showError(messageInput, messageError, "Please enter a message.");
      isValid = false;
    } else {
      clearError(messageInput, messageError);
    }

    // --- Show success message if everything passed ---
    if (isValid) {
      successMessage.textContent =
        "Thanks! Your message looks good. (This form isn't connected to a server yet, so nothing was actually sent — feel free to reach out using the links above.)";
      successMessage.classList.add("show");
      form.reset();
    }
  });

});