// GENERATE A STORY FUNCTION

// create variables for elements
const output1 = document.querySelector("#story");
const generateButton = document.querySelector("#generateButton");

// add event listener for generateButton
generateButton.addEventListener("click", generateStory);

// create generateStory function for generateButton
function generateStory() {
  // check if this function is working
  console.log("generateStory() function called!");

  // generate a story
  let choice1 = document.getElementById("characters").value;
  let choice2 = document.querySelector("#actions").value;
  let choice3 = document.querySelector("#places").value;

  // output the story
  output1.textContent = `Once upon a time, there was a ${choice1} ${choice2} in a ${choice3}...`;
}

// GENERATE A RANDOM STORY FUNCTION

// create variables for elements
const output2 = document.querySelector("#randomStory");
const randomButton = document.querySelector("#randomButton");
let characters = ["cat", "dog", "robot", "wizard"];
let actions = ["jumps", "runs", "dances", "sings"];
let places = ["forest", "castle", "beach", "mountain"];

// add event listener for randomButton
randomButton.addEventListener("click", generateRandomStory);

// create randomElement function
// Get help from chatGPT and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random to create a randomElement function
function randomElement(array) {
  let randomInt = Math.floor(Math.random() * array.length);
  return array[randomInt];
}

// create generateRandomStory function for randomButton
function generateRandomStory() {
  // check if this function is working
  console.log("generateRandomStory() function called!");

  // generate a random story
  let choice1 = randomElement(characters);
  let choice2 = randomElement(actions);
  let choice3 = randomElement(places);

  // output the story
  output2.textContent = `Once upon a time, there was a ${choice1} ${choice2} in a ${choice3}...`;
}
