// Define the USS Assembly 
const playerShip = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
  };
  
  // Define the alien spaceship class
  class AlienShip {
    constructor() {
      this.hull = getRandomValue(3, 6);
      this.firepower = getRandomValue(2, 4);
      this.accuracy = getRandomValue(0.6, 0.8);
    }
  }
  
  // Generate a random number within the specified range
  function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Create an array to hold the alien ships
  const alienShips = [];
  const numAlienShips = 6;
  
  // Generate the alien ships
  for (let i = 0; i < numAlienShips; i++) {
    alienShips.push(new AlienShip());
  }
  
  // Game loop
  let currentShip = 0;
  let playerTurn = true;
  
  while (currentShip < numAlienShips && playerShip.hull > 0) {
    const currentAlienShip = alienShips[currentShip];
  
    if (playerTurn) {
      // Player's turn to attack
      if (Math.random() < playerShip.accuracy) {
        currentAlienShip.hull -= playerShip.firepower;
        console.log('Player attacked the alien ship!');
        console.log(`Alien ship hull: ${currentAlienShip.hull}`);
      } else {
        console.log('Player missed the alien ship!');
      }
  
      // Check if the alien ship is destroyed
      if (currentAlienShip.hull <= 0) {
        console.log('Alien ship destroyed!');
        currentShip++;
  
        if (currentShip < numAlienShips) {
          const choice = prompt('Attack the next ship or retreat? (attack/retreat)');
          if (choice.toLowerCase() === 'retreat') {
            console.log('Game over! You retreated.');
            break;
          }
        }
      }
    } else {
      // Alien ship's turn to attack
      if (Math.random() < currentAlienShip.accuracy) {
        playerShip.hull -= currentAlienShip.firepower;
        console.log('Alien ship attacked the player!');
        console.log(`Player ship hull: ${playerShip.hull}`);
      } else {
        console.log('Alien ship missed the player!');
      }
    }
  
    playerTurn = !playerTurn;
  }
  
  // Check if the game ended
  if (playerShip.hull <= 0) {
    console.log('Game over! The player ship was destroyed.');
  } else if (currentShip >= numAlienShips) {
    console.log('Congratulations! You destroyed all alien ships.');
  }