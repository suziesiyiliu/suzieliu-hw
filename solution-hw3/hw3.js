
let selectPackSize = document.querySelector("#pack")
let selectGlazing = document.querySelector("#glazing")


//defining price variables
var pricePartA=2.49
var pricePartB=1


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
  console.log(i)
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
 pricePartA=2.49;
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
  priceToDisplay.innerText = "$"+ priceFinal
  console.log(priceToDisplay);}




