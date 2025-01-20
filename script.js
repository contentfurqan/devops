document.getElementById('colorButton').addEventListener('click', function() {
  // Generate a random color
  const randomColor = getRandomColor();
  
  // Change the background color of the page
  document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
  // Generate a random hexadecimal color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
