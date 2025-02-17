// // STEP 1: Declare and initialize variables
// // STEP 1a: Grab the parts of the DOM that we need to build the invoice
// const productList = document.querySelector("tbody");
// const totalData = document.querySelector("tfoot td:first-of-type");
const productList = document.querySelector("tbody");
const totalData = document.querySelector("tfoot td:first-of-type");

let products = [
  "Frozen Pizza: 5.99",
  "Orange Juice: 7.95",
  "Milk: 6.95",
  "Dozen Eggs: 4.95",
  "Bacon: 7.49",
  "Kiwi Fruit: 3.95",
];

let invoiceTotal = 0;

let itemRow = new Array();
let itemDetail = new Array();
let itemDesc;
let itemPrice;

for (let i = 0; i < productList.clientHeight; i++) {
  products[i] = products[i].split(": ");
  products[i][1] = Number(products[i][1]);
  invoiceTotal += products[i][1];
  itemDesc = products[i][0];
  itemPrice = products[i][1];
  itemRow[i] = document.createElement("tr");
  itemDetail[i] = `<td>${itemDesc}</td><td>${itemPrice}</td>`;
  itemRow[i];
}
