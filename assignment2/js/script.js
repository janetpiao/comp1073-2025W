// check if this file is working
// console.log("Assignment 2");
const output = document.getElementById("output");

// Create a class called Smoothie
class Smoothie {
  name;
  size;
  ingredients;
  yogurt;
  // Class constructor
  constructor(name, size, ingredients, yogurt) {
    this.name = name;
    this.size = size;
    this.ingredients = ingredients;
    this.yogurt = yogurt;
  }
  // Class methods
  serveIt() {
    // Create an image element
    const smoothie = document.createElement("img");
    // Set src attribute
    smoothie.setAttribute("src", smoothieImage);
    // Set the size of the image according to smoothie size
    let smoothieSize;
    switch (this.size) {
      case "small":
        smoothieSize = "100";
        break;
      case "medium":
        smoothieSize = "125";
        break;
      case "large":
        smoothieSize = "150";
        break;
      case "extralarge":
        smoothieSize = "175";
        break;
    }
    smoothie.setAttribute("height", smoothieSize);
    // set src attribute of the image element according to ingredients
    // Set image path
    let smoothieImage;
    if (this.yogurt === "yes") {
      smoothieImage = `img/${this.ingredients}-yogurt.svg`;
    } else {
      smoothieImage = `img/${this.ingredients}.svg`;
    }
    // Determine if this smoothie has yogurt
    let ifYogurt;
    if (this.yogurt === "yes") {
      ifYogurt = "with yogurt";
    } else {
      ifYogurt = "without yogurt";
    }
    // Set the title of the image element to be a description
    let description = `Hi ${this.name}, here is a ${this.size} smoothie with ${this.ingredients} ${this.yogurt}.`;
    smoothie.setAttribute("title", description);
    // Append the image element to the output element
    output.appendChild(smoothie);
  }
}
