document.addEventListener("DOMContentLoaded", function () {
  // Get references to the button, input field, and output div
  const button = document.getElementById("calculateSquare");
  const input = document.getElementById("inputNumber");
  const output = document.getElementById("output");

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Get the value from the input field
    const number = input.value;

    // Check if the input is empty
    if (number === "") {
      // Display a message if no number is provided
      output.textContent = "Please provide a number.";
    } else {
      // Calculate the square of the input number
      const square = number * number;
      // Display the result
      output.textContent = `The square of ${number} is ${square}.`;
    }
  });
});
