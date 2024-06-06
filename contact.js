// Get the form element
const form = document.getElementById('contact-form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to the server (replace with your server-side code)
  fetch('/submit-contact-form', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    // Display a success message
    const messageElement = document.getElementById('form-message');
    messageElement.textContent = 'Thank you for your message!';
    messageElement.style.color = 'green';

    // Clear the form fields
    form.reset();
  })
  .catch(error => {
    // Display an error message
    const messageElement = document.getElementById('form-message');
    messageElement.textContent = 'An error occurred. Please try again later.';
    messageElement.style.color = 'red';
  });
});