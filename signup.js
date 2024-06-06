// Get the form element
const form = document.getElementById('sign-up-form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = new FormData(form);
  const name = formData.get('name');
  const contact = formData.get('contact');
  const email = formData.get('email');
  const password = formData.get('password');

  // Perform validation (replace with your server-side code)
  if (validateForm(name, contact, email, password)) {
    // Redirect to the dashboard or desired page
    window.location.href = 'dashboard.html';
  } else {
    // Display an error message
    const messageElement = document.getElementById('form-message');
    messageElement.textContent = 'Please fill in all the fields correctly';
    messageElement.style.color = 'red';
  }
});

// Dummy validation function (replace with your server-side validation)
function validateForm(name, contact, email, password) {
  // Perform validation logic here
  // For example, check if all fields are filled and have valid formats
  const nameRegex = /^[a-zA-Z\s]+$/;
  const contactRegex = /^\d{10}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  return nameRegex.test(name) && contactRegex.test(contact) && emailRegex.test(email) && passwordRegex.test(password);
}