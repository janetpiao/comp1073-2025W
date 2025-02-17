const output = document.querySelector("#story");

// create variables for each element
const generateButton = document.querySelector("#generateButton");
const randomStory = document.querySelector("#randomStory");

// add event listener
generateButton.addEventListener("click", generateStory);

// create generateStory function
function generateStory() {
  // check if this function is working
  console.log("generateStory() function called!");
  let choice1 = document.getElementById("characters").value;
  let choice2 = document.querySelector("#actions").value;
  let choice3 = document.querySelector("#places").value;

  // create a random story
  randomStory.textContent = `Once upon a time, there was a ${choice1} ${choice2} in a ${choice3}...`;
}
