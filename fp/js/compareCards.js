//data
const products = {
    "beef": {
            "veganName":"VEGAN BEEF",
            "name": "BEEF",

            "veganPic":"veganBeef.png",
            "realPic":"beef.png",

            "veganIngredients":"Water, Textured Soy Protein Concentrate, Salt, Canola Oil, Natural Flavors, Garlic Powder, Yeast Extract, Onion Powder, Black Pepper",
            "realIngredients":"Beef",

            "veganCalories":"138",
            "realCalories":"272",

            "veganFat":"2g",
            "realFat":"18g",

            "veganCarbs":"8g",
            "realCarbs":"0g",

            "veganProtein":"21g",
            "realProtein":"27g",

            "veganVitaminA":"0%",
            "realVitaminA":"0%",

            "veganVitaminD":"0%",
            "realVitaminD":"0%",

            "veganCalcium":"7%",
            "realCalcium":"2%",

            "veganIron":"12%",
            "realIron":"16%",
            
            "veganPotassium":"11%",
            "realPotassium":"8%"
        },

    "chicken": {
        "veganName":"VEGAN CHICKEN",
        "name": "CHICKEN",

        "veganPic":"veganChicken.png",
        "realPic":"chicken.png",

        "veganIngredients":"Water, Soy Protein Concentrate, Canola Oil, Distilled Vinegar, Salt, Yeast Extract, Citric Acid, Roasted Onion Powder, Sugar",
        "realIngredients":"Chicken",

        "veganCalories":"153",
        "realCalories":"220",

        "veganFat":"5g",
        "realFat":"13g",

        "veganCarbs":"7g",
        "realCarbs":"0g",

        "veganProtein":"21g",
        "realProtein":"24g",

        "veganVitaminA":"0%",
        "realVitaminA":"0%",

        "veganVitaminD":"0%",
        "realVitaminD":"0%",

        "veganCalcium":"8%",
        "realCalcium":"5%",

        "veganIron":"29%",
        "realIron":"22%",
        
        "veganPotassium":"9%",
        "realPotassium":"4%"
    },

    "sausage": {
        "veganName":"VEGAN SAUSAGE",
        "name": "SAUSAGE",

        "veganPic":"veganSausage.png",
        "realPic":"sausage.png",

        "veganIngredients":"Water, Pea Protein Isolate, Refined Coconut Oil, Sunflower Oil, Rice Protein, Potato Starch, Salt, Fruit and Vegetable Juice",
        "realIngredients":"Pork, Water, Vinegar, Salt, Sodium Phosphate, Spices, Garlic, Sugar, Sodium Nitrite",

        "veganCalories":"247",
        "realCalories":"214",

        "veganFat":"16g",
        "realFat":"17g",

        "veganCarbs":"7g",
        "realCarbs":"3g",

        "veganProtein":"21g",
        "realProtein":"16g",

        "veganVitaminA":"3%",
        "realVitaminA":"0%",

        "veganVitaminD":"0%",
        "realVitaminD":"0%",

        "veganCalcium":"8%",
        "realCalcium":"5%",

        "veganIron":"29%",
        "realIron":"22%",
        
        "veganPotassium":"9%",
        "realPotassium":"4%"
    },

    "deli": {
        "veganName":"VEGAN DELI",
        "name": "DELI",

        "veganPic":"veganDeli.png",
        "realPic":"deli.png",

        "veganIngredients":"Water, Vital Wheat Gluten, Organic Tofu, Soy Sauce, Expeller Pressed Canola Oil, Granulated Garlic, Salt, Spices",
        "realIngredients":"White Turkey, Water, Modified Food Starch, Salt, Potassium Lactate, Potassium Acetate, Sodium Phosphate, Sodium Diacetate, Sodium Nitrite",

        "veganCalories":"209",
        "realCalories":"112",

        "veganFat":"7g",
        "realFat":"3g",

        "veganCarbs":"10g",
        "realCarbs":"8g",

        "veganProtein":"27g",
        "realProtein":"13g",

        "veganVitaminA":"0%",
        "realVitaminA":"0%",

        "veganVitaminD":"0%",
        "realVitaminD":"0%",

        "veganCalcium":"8%",
        "realCalcium":"2%",

        "veganIron":"11%",
        "realIron":"12%",
        
        "veganPotassium":"11%",
        "realPotassium":"7%"
    },

    "almondMilk": {
        "veganName": "ALMOND MILK",
        "name":"MILK",

        "veganPic":"almondMilk.png",
        "realPic":"milk.png",

        "veganIngredients":"Water, Almonds",
        "realIngredients":"Milk",

        "veganCalories":"13",
        "realCalories":"62",

        "veganFat":"1g",
        "realFat":"3g",

        "veganCarbs":"0g",
        "realCarbs":"5g",

        "veganProtein":"0g",
        "realProtein":"3g",

        "veganVitaminA":"6%",
        "realVitaminA":"4%",

        "veganVitaminD":"4%",
        "realVitaminD":"6%",

        "veganCalcium":"15%",
        "realCalcium":"10%",

        "veganIron":"0%",
        "realIron":"0%",
        
        "veganPotassium":"0%",
        "realPotassium":"3%"
    },

    "oatMilk": {
        "veganName": "OAT MILK",
        "name":"MILK",

        "veganPic":"oatMilk.png",
        "realPic":"milk.png",

        "veganIngredients":"Water, Almonds",
        "realIngredients":"Milk",

        "veganCalories":"50",
        "realCalories":"62",

        "veganFat":"2g",
        "realFat":"3g",

        "veganCarbs":"7g",
        "realCarbs":"5g",

        "veganProtein":"1g",
        "realProtein":"3g",

        "veganVitaminA":"8%",
        "realVitaminA":"4%",

        "veganVitaminD":"8%",
        "realVitaminD":"6%",

        "veganCalcium":"10%",
        "realCalcium":"10%",

        "veganIron":"1%",
        "realIron":"0%",
        
        "veganPotassium":"3%",
        "realPotassium":"3%"
    },

    "cashewMilk": {
        "veganName":"CASHEW MILK",
        "name": "MILK",

        "veganPic":"cashewMilk.png",
        "realPic":"milk.png",

        "veganIngredients":"Water, Cashews",
        "realIngredients":"Milk",

        "veganCalories":"10",
        "realCalories":"62",

        "veganFat":"1g",
        "realFat":"3g",

        "veganCarbs":"0g",
        "realCarbs":"5g",

        "veganProtein":"0g",
        "realProtein":"3g",

        "veganVitaminA":"6%",
        "realVitaminA":"4%",

        "veganVitaminD":"4%",
        "realVitaminD":"6%",

        "veganCalcium":"12%",
        "realCalcium":"10%",

        "veganIron":"1%",
        "realIron":"0%",
        
        "veganPotassium":"0%",
        "realPotassium":"3%"
    },

    "soyMilk": {
        "veganName": "SOY MILK",
        "name": "MILK",

        "veganPic":"soyMilk.png",
        "realPic":"milk.png",

        "veganIngredients":"Water, Soybeans",
        "realIngredients":"Milk",

        "veganCalories":"33",
        "realCalories":"62",

        "veganFat":"2g",
        "realFat":"3g",

        "veganCarbs":"1g",
        "realCarbs":"5g",

        "veganProtein":"3g",
        "realProtein":"3g",

        "veganVitaminA":"6%",
        "realVitaminA":"4%",

        "veganVitaminD":"10%",
        "realVitaminD":"6%",

        "veganCalcium":"6%",
        "realCalcium":"10%",

        "veganIron":"3%",
        "realIron":"0%",
        
        "veganPotassium":"3%",
        "realPotassium":"3%"
    },

    "egg": {
        "veganName": "VEGAN EGG",
        "name": "EGG",

        "veganPic":"veganEgg.png",
        "realPic":"egg.png",

        "veganIngredients":"Water, Mung Bean Protein Isolate, Expeller-Pressed Canola Oil, Corn Starch, Baking Powder, Dehydrated Garlic, Dehydrated Onion, Gellan Gum, Natural Carrot Extractives, Natural Turmeric Extractives, Potassium Citrate, Soy Lecithin, Tapioca Syrup, Salt",
        "realIngredients":"Egg",

        "veganCalories":"147",
        "realCalories":"147",

        "veganFat":"11g",
        "realFat":"11g",

        "veganCarbs":"2g",
        "realCarbs":"2g",

        "veganProtein":"13g",
        "realProtein":"13g",

        "veganVitaminA":"0%",
        "realVitaminA":"21%",

        "veganVitaminD":"0%",
        "realVitaminD":"32%",

        "veganCalcium":"0%",
        "realCalcium":"4%",

        "veganIron":"0%",
        "realIron":"13%",
        
        "veganPotassium":"0%",
        "realPotassium":"3%"
    },

    "tuna": {
        "veganName": "VEGAN TUNA",
        "name": "TUNA",

        "veganPic":"veganTuna.png",
        "realPic":"tuna.png",

        "veganIngredients":"Water, Pea Protein Isolate, Soy Protein Concentrate, Chickpea Flour, Lentil Protein, Faba Protein, Navy Bean Flour, Algal Oil, Sea Salt, Sunflower Oil, Seaweed Powder, Citric Acid, Onion Powder, Yeast Extract, Garlic Powder",
        "realIngredients":"Tuna",

        "veganCalories":"99",
        "realCalories":"106",

        "veganFat":"3g",
        "realFat":"1g",

        "veganCarbs":"5g",
        "realCarbs":"0g",

        "veganProtein":"15g",
        "realProtein":"23g",

        "veganVitaminA":"0%",
        "realVitaminA":"0%",

        "veganVitaminD":"0%",
        "realVitaminD":"7%",

        "veganCalcium":"2%",
        "realCalcium":"3%",

        "veganIron":"7%",
        "realIron":"2%",
        
        "veganPotassium":"2%",
        "realPotassium":"5%"
    },

    "crabCake": {
        "veganName": "VEGAN CRAB CAKE",
        "name": "CRAB CAKE",

        "veganPic":"veganCrabCake.png",
        "realPic":"crabCake.png",

        "veganIngredients":"Water, Pea Protein Isolate, Soy Protein Concentrate, Chickpea Flour, Faba Protein, Lentil Protein, Soy Protein Isolate, Navy Bean Powder, Red Bell Peppers, Green Onions, Sunflower Oil, Corn Starch, Italian Flat Leaf Parsley, Lemon Juice, Salt, Methylcellulose, Onion Powder, Algal Oil, Paprika, Spices, Yeast Extract, Garlic Powder",
        "realIngredients":"Crab Meat, Soybean Oil, Water, Egg, Acetic Acid, Sugar, Salt, Worcestershire Sauce, Mustard Powder, Breadcrumbs,  Seafood Seasoning, Parsley",

        "veganCalories":"142",
        "realCalories":"250",

        "veganFat":"4g",
        "realFat":"19g",

        "veganCarbs":"8g",
        "realCarbs":"7g",

        "veganProtein":"18g",
        "realProtein":"13g",

        "veganVitaminA":"0%",
        "realVitaminA":"0%",

        "veganVitaminD":"0%",
        "realVitaminD":"7%",

        "veganCalcium":"4%",
        "realCalcium":"5%",

        "veganIron":"18%",
        "realIron":"7%",
        
        "veganPotassium":"4%",
        "realPotassium":"2%"
    },

    "shrimp": {
        "veganName": "VEGAN SHRIMP",
        "name": "SHRIMP",

        "veganPic":"veganShrimp.png",
        "realPic":"shrimp.png",

        "veganIngredients":"Water, Modified Starch, Sunflower Oil, Glucomannan, Pea Extract, Sea Salt, Seaweed Extract, Brown Sugar",
        "realIngredients":"Shrimp",

        "veganCalories":"122",
        "realCalories":"71",

        "veganFat":"6g",
        "realFat":"1g",

        "veganCarbs":"15g",
        "realCarbs":"1g",

        "veganProtein":"1.5g",
        "realProtein":"16g",

        "veganVitaminA":"0%",
        "realVitaminA":"0%",

        "veganVitaminD":"0%",
        "realVitaminD":"0%",

        "veganCalcium":"4%",
        "realCalcium":"4%",

        "veganIron":"4%",
        "realIron":"4%",
        
        "veganPotassium":"0%",
        "realPotassium":"4%"
    }
    
};




//get query string from URL
const queryString = window.location.search;

//create a URLSearchParams object
const params = new URLSearchParams(queryString);

//access parameter
const chosenProduct = params.get("product");

//URL parameter update page
const veganName=document.querySelector(".veganName");
veganName.innerText=products[chosenProduct].veganName;

const regularName=document.querySelector(".regularName");
regularName.innerText=products[chosenProduct].name;


//update the image
const veganPic=document.querySelector("#veganPic");
veganPic.src='./links/' + products[chosenProduct].veganPic;
veganPic.alt=veganName.innerText;

const realPic=document.querySelector("#realPic");
realPic.src='./links/' + products[chosenProduct].realPic;
realPic.alt=regularName.innerText;


//update ingredients
const veganIngredients=document.querySelector("#veganIngredients");
veganIngredients.innerText=products[chosenProduct].veganIngredients;

const realIngredients=document.querySelector("#realIngredients");
realIngredients.innerText=products[chosenProduct].realIngredients;


//update nutrition
    //calories
    const caloriesAmountVegan=document.querySelector("#caloriesAmountVegan");
    caloriesAmountVegan.innerText=products[chosenProduct].veganCalories;

    const caloriesAmountReal=document.querySelector("#caloriesAmountReal");
    caloriesAmountReal.innerText=products[chosenProduct].realCalories;

    //fat
    const fatAmountVegan=document.querySelector("#fatAmountVegan");
    fatAmountVegan.innerText=products[chosenProduct].veganFat;

    const fatAmountReal=document.querySelector("#fatAmountReal");
    fatAmountReal.innerText=products[chosenProduct].realFat;

    //carbs
    const carbsAmountVegan=document.querySelector("#carbsAmountVegan");
    carbsAmountVegan.innerText=products[chosenProduct].veganCarbs;
    
    const carbsAmountReal=document.querySelector("#carbsAmountReal");
    carbsAmountReal.innerText=products[chosenProduct].realCarbs;

    //protein
    const proteinAmountVegan=document.querySelector("#proteinAmountVegan");
    proteinAmountVegan.innerText=products[chosenProduct].veganProtein;
    
    const proteinAmountReal=document.querySelector("#proteinAmountReal");
    proteinAmountReal.innerText=products[chosenProduct].realProtein;

    //vitaminA
    const vitaminAAmountVegan=document.querySelector("#vitaminAAmountVegan");
    vitaminAAmountVegan.innerText=products[chosenProduct].veganVitaminA;
    
    const vitaminAAmountReal=document.querySelector("#vitaminAAmountReal");
    vitaminAAmountReal.innerText=products[chosenProduct].realVitaminA;

    //vitaminD
    const vitaminDAmountVegan=document.querySelector("#vitaminDAmountVegan");
    vitaminDAmountVegan.innerText=products[chosenProduct].veganVitaminD;
    
    const vitaminDAmountReal=document.querySelector("#vitaminDAmountReal");
    vitaminDAmountReal.innerText=products[chosenProduct].realVitaminD;
 
    //calcium
    const calciumAmountVegan=document.querySelector("#calciumAmountVegan");
    calciumAmountVegan.innerText=products[chosenProduct].veganCalcium;
    
    const calciumAmountReal=document.querySelector("#calciumAmountReal");
    calciumAmountReal.innerText=products[chosenProduct].realCalcium;

    //iron
    const ironAmountVegan=document.querySelector("#ironAmountVegan");
    ironAmountVegan.innerText=products[chosenProduct].veganIron;
    
    const ironAmountReal=document.querySelector("#ironAmountReal");
    ironAmountReal.innerText=products[chosenProduct].realIron;

    //potassium
    const potassiumAmountVegan=document.querySelector("#potassiumAmountVegan");
    potassiumAmountVegan.innerText=products[chosenProduct].veganPotassium;
    
    const potassiumAmountReal=document.querySelector("#potassiumAmountReal");
    potassiumAmountReal.innerText=products[chosenProduct].realPotassium;


