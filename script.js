function rollSingleDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function createDieElement(sides, index) {
  const die = document.createElement("div");
  die.classList.add("die");
  die.id = `die${index + 1}`; // Unique ID for each die
  die.innerHTML = rollSingleDie(sides); // Just displays a random value visually
  return die;
}

function updateDice() {
  const numDice = parseInt(document.getElementById("numDice").value);
  const numSides = parseInt(document.getElementById("numSides").value);
  const diceContainer = document.getElementById("dice");

  // Updating the number of dice elements
  const currentDiceCount = diceContainer.children.length;
  if (numDice > currentDiceCount) {
    // Adding more dice
    for (let i = currentDiceCount; i < numDice; i++) {
      const newDie = createDieElement(numSides, i);
      diceContainer.appendChild(newDie);
    }
  } else if (numDice < currentDiceCount) {
    // Removing extra dice
    for (let i = numDice; i < currentDiceCount; i++) {
      diceContainer.removeChild(diceContainer.lastChild);
    }
  }
}

function rollDice() {
  const numDice = parseInt(document.getElementById("numDice").value);
  const numSides = parseInt(document.getElementById("numSides").value);
  const diceContainer = document.getElementById("dice");
  const sumDisplay = document.getElementById("sum");

  // Rolling existing dice
  let sum = 0;
  for (let i = 0; i < numDice; i++) {
    const die = diceContainer.children[i];
    die.innerHTML = rollSingleDie(numSides);
    die.classList.add("roll"); // Adding the "roll" class to trigger the animation
    setTimeout(() => {
      die.classList.remove("roll"); // Removing the "roll" class after the animation
    }, 777); // Adjusting the delay as needed
    sum += parseInt(die.innerHTML);
  }

  sumDisplay.innerHTML = "Result : " + sum;
}

//  event listener to the 'numDice' dropdown
document.getElementById("numDice").addEventListener("change", updateDice);

// Initial setup (create dice elements on page load)
updateDice();

// spacebar functionality
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    rollDice();
  }
});


