
const box = document.getElementById("box");
const reactionText = document.getElementById("reaction-time");

let startTime; 


function moveBoxRandomly() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}


function showBox() {
  const delay = Math.random() * 2000 + 1000; // between 1s and 3s
  setTimeout(() => {
    moveBoxRandomly();
    box.style.display = "block";
    startTime = Date.now();
  }, delay);
}


box.addEventListener("click", () => {
  const endTime = Date.now();
  const reactionTime = ((endTime - startTime) / 1000).toFixed(3); // in seconds

  box.style.display = "none";
  reactionText.textContent = `Your reaction time: ${reactionTime} seconds`;


  box.style.backgroundColor = getRandomColor();

  showBox(); // Start next round
});


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Start game
showBox();
