
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function(e) {
    // Clear previous errors
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    let valid = true;

    // Validate Name - at least 2 characters
    const name = form.name.value.trim();
    if (name.length < 2) {
      showError(form.name, "Please enter your full name (at least 2 characters).");
      valid = false;
    }

    // Validate Email - basic regex
    const email = form.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError(form.email, "Please enter a valid email address.");
      valid = false;
    }

    // Validate Message - at least 10 characters
    const message = form.message.value.trim();
    if (message.length < 10) {
      showError(form.message, "Please enter a message with at least 10 characters.");
      valid = false;
    }

    if (!valid) {
      e.preventDefault(); // Prevent form submission if invalid
    }
  });

  function showError(inputElement, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '13px';
    error.style.marginTop = '4px';
    error.textContent = message;
    inputElement.parentNode.insertBefore(error, inputElement.nextSibling);
  }
