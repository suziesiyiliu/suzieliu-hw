//data
const rolls = {
  "Original": {
      "basePrice": 2.49,
      "imageFile": "original-cinnamon-roll.jpg"
  },
  "Apple": {
      "basePrice": 3.49,
      "imageFile": "apple-cinnamon-roll.jpg"
  },
  "Raisin": {
      "basePrice": 2.99,
      "imageFile": "raisin-cinnamon-roll.jpg"
  },
  "Walnut": {
      "basePrice": 3.49,
      "imageFile": "walnut-cinnamon-roll.jpg"
  },
  "Double-Chocolate": {
      "basePrice": 3.99,
      "imageFile": "double-chocolate-cinnamon-roll.jpg"
  },
  "Strawberry": {
      "basePrice": 3.99,
      "imageFile": "strawberry-cinnamon-roll.jpg"
  }    
};


//get query string from URL
const queryString = window.location.search;
console.log(queryString);

//create a URLSearchParams object
const params = new URLSearchParams(queryString);
console.log(params);

//access parameter
const chosenRoll = params.get("roll");

//URL parameter update page
const rollType=document.querySelector("#rollType");
rollType.innerText=chosenRoll+" Cinnamon Roll"

//update the image
const rollPic=document.querySelector("#pic")
rollPic.src='./products/' + chosenRoll + '-cinnamon-roll.jpg';




let selectPackSize = document.querySelector("#pack")
let selectGlazing = document.querySelector("#glazing")
let cartButton = document.querySelector(".addToCart")

//prepare cart
cart=[];

//default
glazingOptionChosen="Keep Original"
packSizeOptionChosen=1

//retrieving base price
chosenRollBasePrice=rolls[chosenRoll].basePrice;
console.log(chosenRollBasePrice);

//defining price variables
var pricePartA=chosenRollBasePrice;
console.log(pricePartA);
var pricePartB=1;

displayPriceFinal()

//defining glazing options
let allGlazingOptions = [
    {glazingOption:"Keep original",
    price:0},
    {glazingOption:"Sugar milk",
    price:0},
    {glazingOption:"Vanilla milk",
    price:0.5},
    {glazingOption:"Double chocolate",
    price:1.5},
];

//defining pack size options
let allPackSizeOptions = [
    {packSizeOption:"1",
    price:1},
    {packSizeOption:"3",
    price:3},
    {packSizeOption:"6",
    price:5},
    {packSizeOption:"12",
    price:10}
];

//adding glazing options to UI
for (let i in allGlazingOptions){
  let newGlazingOption = allGlazingOptions[i];
  console.log(i);
  var option = document.createElement('option');
  option.text = newGlazingOption.glazingOption;
  option.value = i;
  selectGlazing.add(option);
};

//adding pack size options to UI
for (let i in allPackSizeOptions){
  let newPackSizeOption = allPackSizeOptions[i];
  var option = document.createElement('option');
  option.text = newPackSizeOption.packSizeOption;
  option.value = i;
  selectPackSize.add(option);
};

//updating glazing option selected
function onSelectGlazingChange(){
 let glazingIndex = this.value;
 console.log(glazingIndex);
 glazingOptionChosen = allGlazingOptions[glazingIndex];
 console.log(glazingOptionChosen);
 glazingPriceChosen = glazingOptionChosen.price;
 console.log(glazingPriceChosen);
 pricePartA=chosenRollBasePrice;
 pricePartA+=glazingPriceChosen;
}

//updating pack size option selected
function onSelectPackSizeChange(){
 let packSizeIndex = this.value;
 packSizeOptionChosen = allPackSizeOptions[packSizeIndex];
 packSizePriceChosen = packSizeOptionChosen.price;
 console.log(packSizePriceChosen);
 pricePartB=1;
 pricePartB=packSizePriceChosen;
}

//listener
selectGlazing.addEventListener("change", onSelectGlazingChange);
selectGlazing.addEventListener("change", displayPriceFinal);
selectPackSize.addEventListener("change", onSelectPackSizeChange);
selectPackSize.addEventListener("change", displayPriceFinal);

function displayPriceFinal(){
  priceFinal=pricePartA*pricePartB;
  let priceToDisplay=document.querySelector(".price");
  priceToDisplay.innerText = "$"+ priceFinal.toFixed(2);
  console.log(priceToDisplay);}



class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice){
      this.type=rollType;
      this.glazing=rollGlazing;
      this.size=packSize;
      this.basePrice=basePrice;
  }
}


cartButton.addEventListener("click", addNewRoll);

function addNewRoll(){
  const roll=new Roll(chosenRoll,glazingOptionChosen.glazingOption,packSizeOptionChosen.packSizeOption,chosenRollBasePrice);
  cart.push(roll);
  console.log(cart);
};



