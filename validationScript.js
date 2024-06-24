document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the input field element using JavaScript
  const inputField = document.getElementById('inputField');
  const form = document.getElementById('myForm');

  // Function to validate the input value using a regular expression for alphanumeric input
  function validateInput(value) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(value);
  }

  // Add an event listener to the form that submits an event
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting by default

    const inputValue = inputField.value;

    // Validate the input value
    if (!validateInput(inputValue)) {
      // Display error message if the input value is not alphanumeric
      alert('Error: Input is not alphanumeric. Please enter only letters and numbers.');
    } else {
      // Display a confirmation if the input is valid
      alert('Success: Input is valid and form is submitted.');
      // Simulate form submission (since the actual submission is not processed)
      // Here, you can reset the form or perform any other action as needed
      form.reset();
    }
  });
});
