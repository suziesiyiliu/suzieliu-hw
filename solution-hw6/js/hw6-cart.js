
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

const glazings = {
  "Keep original": {price: 0},
  "Sugar milk": {price: 0},
  "Vanilla milk": {price: 0.5},
  "Double chocolate": {price: 1.5}
};

const packs = {
  "1": {coefficient: 1},
  "3": {coefficient: 3},
  "6": {coefficient: 5},
  "12": {coefficient: 10}
};

//prepare cart
const tempCart = [];
const cart = new Set();
totalPrice=document.querySelector(".totalPrice");
totalPriceNumber=0

//get cart from local storage
getFromLocalStorage();
function getFromLocalStorage(){
  var cartArrayString = localStorage.getItem('storedCart');
  var cartArray = JSON.parse(cartArrayString);
  for (const rollData of cartArray) {
    tempCart.push(rollData);
  }
  console.log(tempCart);
}

//create class
class Roll {
  constructor(rollType, rollGlazing, packSize){
      this.type=rollType;
      this.glazing=rollGlazing;
      this.size=packSize;
      this.basePrice=rolls[rollType].basePrice;
      this.finalPrice=packSize*(this.basePrice+glazings[rollGlazing].price)
      this.picName='./products/'+rolls[rollType].imageFile;
  }
}

for (const item of tempCart) {
  const roll=new Roll(item.type,item.glazing,item.size);
  cart.add(roll);
};

//add roll to UI
for (const item of cart) {
  createElement(item);
};

function createElement(item){

  const template = document.querySelector('#item-template');
  const clone = template.content.cloneNode(true);
  item.element = clone.querySelector('.item');

  const removeButton = item.element.querySelector('.remove');
  removeButton.addEventListener('click', () => {deleteItem(item);});
    
  const itemListElement = document.querySelector('#item-list');
  itemListElement.append(item.element);
  updateElement(item);
};

function updateElement(item) {
  const pic = item.element.querySelector('.pic');
  const rollType = item.element.querySelector('.rollType');
  const glazingType = item.element.querySelector('.glazingType');
  const packSize = item.element.querySelector(".packSize");
  const price = item.element.querySelector('.price');

  pic.src = item.picName;
  rollType.innerText = item.type+" Cinnamon Roll";
  glazingType.innerText = "Glazing: "+item.glazing;
  packSize.innerText = "Pack Size: "+item.size;
  price.innerText="$"+item.finalPrice.toFixed(2);

  getTotalPrice(item);
}

function getTotalPrice(item){
  totalPriceNumber+=item.finalPrice;
  totalPrice.innerText="$"+totalPriceNumber.toFixed(2)
}


//delete item
function deleteItem(item) {
  item.element.remove();
  cart.delete(item);
  reducePrice(item);
  deleteFromLocalStorage(item);
  console.log(cart);
}

//reduce price
function reducePrice(item){
  totalPriceNumber=Math.max(0,totalPriceNumber-item.finalPrice);
  totalPrice.innerText="$"+totalPriceNumber.toFixed(2)
}


//delete from local storage
function deleteFromLocalStorage(item){
  //bring back array
  var reCartArrayString = localStorage.getItem('storedCart');
  var reCartArray = JSON.parse(reCartArrayString);
  reCart=[]
  for (const rollData of reCartArray) {
    reCart.push(rollData);
  }
  //delete from array
  reCart.splice(reCart.indexOf(item),1);
  //convert to string
  const newCartArrayString=JSON.stringify(reCart);
  localStorage.setItem('storedCart', newCartArrayString);
}
