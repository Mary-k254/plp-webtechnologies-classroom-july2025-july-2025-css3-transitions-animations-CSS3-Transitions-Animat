// Global variable example
let globalColorIndex = 0;

// Function to return a random color from a list (reusable)
function getNextColor(colors) {
  // local scope variable
  let color = colors[globalColorIndex % colors.length];
  globalColorIndex++;
  return color; // returns the chosen color
}

// Function to animate the box by toggling the bounce class
function bounceBox(boxElement) {
  boxElement.classList.remove('bounce'); // reset animation
  void boxElement.offsetWidth; // trigger reflow so animation restarts
  boxElement.classList.add('bounce');
}

// Function to change the box color dynamically
function changeBoxColor(boxElement, colors) {
  let newColor = getNextColor(colors); // get color from function
  boxElement.style.backgroundColor = newColor; // apply new color
}

// Setup DOM elements and event listeners
document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('box');
  const colorBtn = document.getElementById('colorBtn');

  // Array of colors to cycle through
  const colors = ['#3498db', '#2ecc71', '#e67e22', '#9b59b6', '#e74c3c'];

  colorBtn.addEventListener('click', () => {
    changeBoxColor(box, colors); // changes color using reusable function
    bounceBox(box); // triggers bounce animation
  });
});
