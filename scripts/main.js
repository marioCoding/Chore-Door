// Access HTML elements
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let startButton = document.getElementById('start');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door
const isClicked = (door) => {
  if (door.src == closedDoorPath) 
    return true;
  else 
    return false;
}

const isBot = (door) => {
  if (door.src === botDoorPath)
    return true;
  else 
    return false;
}

const gameOver = (status) => {
  if (status == 'win')
    startButton.innerHTML = 'You win! Play again?';
  else
    startButton.innerHTML = 'Game over! Play again?';
  currentlyPlaying = false;
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0)
    gameOver('win');
  else if (isBot(door) == true)
    gameOver(); 
}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  // Define logic that will assign where the ChoreBot will hide
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) { 
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}

// Start a game round
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  // Reset variables to initial values
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good Luck!';
  randomChoreDoorGenerator();
}

startRound();


/* Notes:
    - I had some spelling errors in this script. For example, I forgot 'Door' in randomChoreDoorGenerator. Also misspelled 'inner' in .innerHTML.
        Forgot the 's' in numClosedDoors.
    - Going to dinner. The doorPath images stay behind the same door for each game after the first game has been won. Find out why when you 
        get back. 

    - Access all HTML elements without any space between each line of code.
*/