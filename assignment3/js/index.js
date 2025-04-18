// Unsplash API tutorial from: https://www.youtube.com/watch?v=oaliV2Dp7WQ&ab_channel=Tech2etc

// The URL for the Unsplash API at https://unsplash.com/documentation#creating-a-developer-account
const key = "Z_KKcnKLVFxcx3YBMW3OkT2AYN2fYc-sqzW2kO5HqbM";

//  Grab references to all the DOM elements you'll need to access
const searchForm = document.querySelector("form");
const searchBar = document.querySelector("#searchBar");
const searchBtn = document.querySelector("#searchBtn");
const searchResults = document.querySelector(".results");

// initialize variables
let page = 1;
let input = "";
// Functions for the search form
async function fetchResults(event) {
  // Use preventDefault() to stop the form submitting
  event.preventDefault();
  input = searchBar.value;
  // Assemble the full URL
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${key}`;

  // Use fetch() to fetch all data from the URL
  const response = await fetch(url);
  // convert the response to JSON
  const data = await response.json();
  // convert the JSON to HTML
  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  // Add the results to the page
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    imageWrapper.appendChild(imageLink);
    imageWrapper.appendChild(image);
    searchResults.appendChild(imageWrapper);
  });
}

// Add a submit event listener for the search form, referencing the fetchResults function as the callback
searchForm.addEventListener("submit", displayResults);

function displayResults(event) {
  event.preventDefault();
  page = 1;
  fetchResults(event);
}
