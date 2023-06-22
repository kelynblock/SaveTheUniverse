// Define USS Assbemly
const ussShip = {
	hull: 20, 
	firepower: 5, 
	accuracy: 0.7,
	};


// Define Alien Spaceships
class alienShip {
	constructor () { 
		this.hull = getRandomNumber(3, 6), 
		this. firepower = getRandomNumber(2, 4),
		this.accuracy = getRandomNumber(.6 , .8);
		}	
	  }		
	

// Define random helper function
function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
  }

  // Array for the Alien ships
  const alienShips = [];
  const numAlienShips = 6;

  //Game Play

  for (let i = 0; i < numAlienShips; i++) {
	alienShips.push(new AlienShip());
  }

  let 



// You attack the first alien ship.
// Use a loop to iterate over the alien ships in the alienShips array.
// Inside the loop, allow the player to attack the current alien ship:
// Check if the attack is successful based on the player's ship accuracy.
// If successful, reduce the hull of the current alien ship by the player's ship firepower.
// Check if the alien ship has been destroyed (hull <= 0).
// If destroyed, prompt the player to attack the next ship or retreat.


// After the player's turn, allow the current alien ship to attack the player's ship:
// Check if the attack is successful based on the alien ship accuracy.
// If successful, reduce the hull of the player's ship by the alien ship firepower.
// Check if the player's ship has been destroyed (hull <= 0).
// If destroyed, end the game with a loss.
// Repeat the battle until all alien ships are destroyed or the player chooses to retreat

// If you destroy the ship, you have the option to attack the next ship or to retreat.
// If you retreat, the game is over, perhaps leaving the game open for further developments or options.
// You win the game if you destroy all of the aliens.
// You lose the game if you are destroyed.
// Implement the game outcome:
// If all alien ships are destroyed, end the game with a win.
// If the player chooses to retreat, end the game.
// Check if the battle logic works correctly by printing relevant messages during the battle phases.
// Ensure the game ends with the correct outcome (win/loss/retreat).