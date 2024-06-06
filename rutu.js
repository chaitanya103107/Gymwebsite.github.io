// Get the form element
const form = document.getElementById('registration-form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = new FormData(form);
  const username = formData.get('username');
  const projectAddress = formData.get('project-address');
  const email = formData.get('email');
  const mobile = formData.get('mobile');

  // Perform validation (replace with your server-side code)
  if (validateForm(username, projectAddress, email, mobile)) {
    // Redirect to a success page or perform further actions
    window.location.href = 'success.html';
  } else {
    // Display an error message
    const messageElement = document.getElementById('form-message');
    messageElement.textContent = 'Please fill in all the fields correctly';
    messageElement.style.color = 'red';
  }
});

// Dummy validation function (replace with your server-side validation)
function validateForm(username, projectAddress, email, mobile) {
  // Perform validation logic here
  // For example, check if all fields are filled and have valid formats
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const mobileRegex = /^\d{10}$/;

  return usernameRegex.test(username) && projectAddress.trim() !== '' && emailRegex.test(email) && mobileRegex.test(mobile);
}