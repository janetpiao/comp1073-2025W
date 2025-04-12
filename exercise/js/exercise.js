// W8 Objects
const output = document.getElementById("output");

// Create an object called person
const person = {
  name: {
    first: "Janet",
    last: "Piao",
  },
  age: 31,
  gender: "female",
  interests: ["skiing", "programming"],
  greeting() {
    let greeting = `Hi  my name is ${this.name.first} ${this.name.last} and i am ${this.age}years old. One of my interests is ${this.interests[1]}.`;
    return greeting;
  },
};

output.textContent = `${person["name"]["first"]} ${person["name"]["last"]} is my name.`;

person.name.first = "James";
person.age = 28;

function logProperty(propName) {
  console.log(person[propName]);
}

person.eyeColor = "green";

person.goodbye = function () {
  let goodbye = `${this.name.first} syas goodbye~`;
  return goodbye;
};

const person1 = {
  name: {
    first: "Janney",
    last: "Piao",
  },
  age: 32,
  gender: "male",
  interests: ["skiing", "programming"],
  greeting() {
    let greeting = `Hi, my name is ${this.name.first} ${this.name.last}, one of my interests is ${this.interests[1]}.`;
    return greeting;
  },
};

const output1 = document.getElementById("output");

function Album(name, artist, year, numTracks) {
  this.name = name;
  this.artists = artist;
  this.year = year;
  this.numTracks = numTracks;
  this.description = function () {
    let description = `The album ${this.name} by ${this.artist}...`;
    return description;
  };
}

const album1 = new Album("Disney", "The Cure", 1989, 12);

function Movie(name, genre) {
  this.name = name;
  this.genre = genre;
  this.description = function () {
    let description = `The movie ${this.name} is a ${this.genre} movie.`;
    return description;
  };
}

let movie1 = new Movie("The Matrix", "Sci-Fi");

// W9 Object Prototypes
const output2 = document.querySelector("#output");

// Build a class
class Coffee {
  // class members
  size;
  isDecaf;

  //  class constructor
  constructor(size, isDecaf) {
    this.size = size;
    this.isDecaf = isDecaf;
  }

  // Class methods
  serveIt() {
    //  Create an IMG element
    const cup = document.createElement("img");
    // set img path
    let cupImage = "images/coffee-cup.svg";
    let decaf;
    if (this.isDecaf === treu) {
      cupImage = "images/coffee-cup-green.svg";
      decaf = "decaffeinated";
    } else {
      decaf = "caffeinated";
    }

    cup.setAttribute("src", cupImage);

    let cupSize;
    switch (this.size) {
      case "small":
        cupSize = "100";
        break;
      case "medium":
        cupSize = "125";
        break;
      case "large":
        cupSize = "150";
        break;
      case "extralarge":
        cupSize = "175";
        break;
    }
    cup.setAttribute("height", cupSize);

    let description = `A ${this.size} ${decaf} coffee`;
    cup.setAttribute("title", description);
    output2.appendChild(cup);
  }
}

let scottsCoffee = new Coffee("large", true);

class Latte extends Coffee {
  //  class properties
  milkType;

  // class constructor
  constructor(size, isDecaf, milkType) {
    super(size, isDecaf);
    this.milkType = milkType;
  }

  // class methods
  latteDesc() {
    alert(
      `A ${this.size} ${
        this.isDecaf ? "decaffeinated" : "caffeinated"
      } latte with steamed ${this.milkType}.`
    );
  }
}

let scottsLatte = new Latte("medium", false, "almond");

class Coffee1 {
  size;
  isDecaf;
  constructor(size, isDecaf) {
    this.size = size;
    this.isDecaf = isDecaf;
  }

  serveIt() {
    const cup = OfflineAudioCompletionEvent.createElements("img");
    let cupImage = "images/coffee-cup.svg";
    let decaf;
    if (this.isDecaf === true) {
      cupImage = "images/coffee-cup-green.svg";
      decaf = "decaffeinated";
    } else {
      decaf = "caffeinated";
    }

    cup.setAttribute("src", cupImage);
    let cupSize;
    switch (this.size) {
      case "small":
        cupSize = "100";
        break;
      case "medium":
        cupSize = "125";
        break;
      case "large":
        cupSize = "150";
        break;
      case "extralarge":
        cupSize = "175";
        break;
    }
    let description = `A ${this.size} ${decaf} coffee`;
    cup.setAttribute("title", description);
    cup.setAttribute("height", cupSize);
    output2.appendChild(cup);
  }
}
class Mocha extends Coffee1 {
  milkType;
  constructor(size, isDecaf, milkType) {
    super(size, isDecaf);
    this.milkType = milkType;
  }

  mochaDesc() {
    alert(
      `A ${this.size} ${
        this.isDecaf ? "decaffeinated" : "caffeinated"
      } mocha with steamed ${this.milkType}.`
    );
  }
}

//W10 JSON
const header = document.querySelector("header");
const section = document.querySelector("section");

async function populate() {
  const requestURL = "js/i-scream.json";

  const request = new Request(requestURL);
  const response = await fetch(request);
  const iSream = await response.json();

  console.log(iScream);
  populateHeader(iScream);
  showTopFlavors(iScream);
}

populate();
function populateHeader(jsonObj) {
  let headerH1 = document.createElement("h1");
  headerH1.textContent = jsonObj.companyName;
  header.appendChild(headerH1);
}

function showTopFlavors(jsonObj) {
  let tipFlavors = jsonObj.topFlavors;
  for (let i = 0; i < topFlavors.length; i++) {
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let ul = document.createElement("ul");

    h2.textContent = topFlavors[i]["name"];
    img.setAttribute("src", `images/${topFlavors[i]["image"]}`);

    let ingredients = topFlavors[i]["ingredients"];
    for (let j = 0; j < ingredients.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = ingredients[j];
      ul.appendChild(listItem);
    }
    article.appendChild(h2);
    article.appendChild(img);
    article.appendChild(ul);
    section.appendChild(article);
  }
}

//W11 API Getting Data From a Server
const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const key = "fOmVODUA7VWfou4RPYmpGQuFZZkwhExk";
let url;

const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");

searchForm.addEventListener("submit", fetchResults);

function fetchResults(event) {
  event.preventDefaullt();
  url = `${baseURL}?api-key=${key}&q=${searchTerm.value}&fq=document_type:("article")`;
}

const person = {
  name: {
    first: "John",
    last: "Doe",
  },
  age: 30,
  eyeColor: "blue",
  interests: ["music", "skiing"],
  bio() {
    let bio = `${this.name.first} ${this.name.last} is ${this.age} years old. They like ${this.interests[0]} and ${this.interests[1]}.`;
    return bio;
  },
};

output.textContent = `${person["name"]["first"]} ${person["name"]["last"]} is my name.`;

person.name.first = "James";
person.age = 28;

person.eyeColor = "green";
person.goodbye = function () {
  let goodbye = `${this.name.first} syas goodbye`;
  return goodbye;
};

const person2 = {
  name: {
    first: "Janney",
    last: "Piao",
  },
  hobbies: ["skiing", "programming"],
  introduction() {
    console.log(
      `Hi, my name is ${this.name.first} ${this.name.last}. I like ${this.hobbies[0]} and ${this.hobbies[1]}.`
    );
  },
};
