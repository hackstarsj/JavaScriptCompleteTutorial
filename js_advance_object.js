console.log("JavaScript Advance Object Beyond the Basics");

//Create Empty Object
var ObjectFood = {};

//Create Object With Datatypes String Number Floating Point and Boolean
var ObjectFood = { name: "Pizza", price: 200, rating: 4.5, isAvailable: true };

//Print the Object
console.log(ObjectFood);

//Access Single Item of Object
console.log(ObjectFood.name);
console.log(ObjectFood.price);
console.log(ObjectFood.rating);
console.log(ObjectFood.isAvailable);

//Add New Item With Key and Value in Object
// Syntax Object.KEY_NAME:VALUE
ObjectFood.madewithin = "10 Min";

//Delete Key and Value from Object
delete ObjectFood.rating;

//Print the Object
console.log(ObjectFood);

//Object With Functions
var ObjectFood = {
  name: "Pizza",
  price: 200,
  rating: 4.5,
  isAvailable: true,
  fullName: function () {
    return "Extra Large Pizza With ID 1";
  },
};

console.log(ObjectFood);

//Calling the Function Which is Inside Object
//Call it by keyname and Add () Parenthesis..
console.log(ObjectFood.fullName());

var jsoObj = {
  name: "SuperCoders",
  Channel: "Youtube",
  callData: function () {
    return "ok";
  },
};

console.log(jsoObj);

//JAVAScript Object VS JSON
//JSON = You can Use String Number Floating and Boolean Data Types in JSON
// JavaScript Object =  You Can Use All Datatypes  With Also Function Inside Object

//Access Data Of Object Using Square Bracket On Some Special Types of Conditon
//Like Key name Contain Space ","  or Any Special Character So You Can use ["KEYNAME"]
// to Access Data

//Example

var ObjectFood = {
  "full name": "Pizza",
  price: 200,
  rating: 4.5,
  isAvailable: true,
};

//full name Can be Access By Square bRacket

console.log(ObjectFood["full name"]);

//Setting CSS Property Name Same as Css Instead of JS Property name
//Example in CSS We Use background-color:red to Set Color red in Background Red
//But in JS We User obj.style.backgroundColor=red to Set Color
// So if You Don't Know About CSS Property in JavaScript  You Can
// Use Like this way also obj.style["background-color"]=red here background-color property is same as css property name

var h1 = document.querySelector("h1");

//Setting Red Background Using JS CSS Property
h1.style.backgroundColor = "red";

//Setting Blue Background Using CSS Way Property Name
h1.style["background-color"] = "blue";

//Using Number as Key name in Objects
var ObjectFood = {
  name: "Pizza",
  price: 200,
  rating: 4.5,
  isAvailable: true,
  1: "My",
  2: "Name",
  3: "SuperCoders",
};

console.log(ObjectFood);

//Acces Value of Number key 1
console.log(ObjectFood[1]);

//For Setting Dynamic Key name in Object
var name = "foodname";

var FoodObj = { name: "Pizza" };

console.log(FoodObj);

//For Setting Dynamic Key You using Variable You Must Need to enclose
// Variable name inside [VARIABLE]
var FoodObj = { [name]: "Pizza" };
console.log(FoodObj);

//Another WAy;
var FoodObj = {};
FoodObj[name] = "Pizza";
console.log(FoodObj);

//Access All the Key and Value of Objects Using for in Loop
for (var key in ObjectFood) {
  console.log("KEY iS : " + key + " VALUE : " + ObjectFood[key]);
}

//Nested Object and Nested Array Objects
var ObjectFood = {
  name: { first: "pizza", last: "chesse" },
  price: 200,
  rating: 4.5,
  isAvailable: true,
  1: "My",
  2: "Name",
  3: "SuperCoders",
  size: [
    { type: "big", price: 200 },
    { type: "large", price: 400 },
    { type: "small", price: 300 },
  ],
};

//Access Size Array
console.log(ObjectFood.size);
//Access First Size Array
console.log(ObjectFood.size[0]);
//Access First Size Array Type
console.log(ObjectFood.size[0].type);
//Access First Size Array Price
console.log(ObjectFood.size[0].price);

//Access first name which is nested Object
console.log(ObjectFood.name.last);

//Use of Spread Operator to Copy data Object Not Reference
var ObjectFood = { name: "Pizza", price: 200, rating: 4.5, isAvailable: true };

//Store as Reference
var ObjectFood2 = ObjectFood;

//Here Any Change in Object It Will Update in both Variable
console.log("Before Any Update");
console.log(ObjectFood2);
console.log(ObjectFood);

//Updat the Value

ObjectFood2.name = "Pizza 1";

console.log("After Update");

//Value Get Update in Both Variable
console.log(ObjectFood2);
console.log(ObjectFood);

//Copy Only Data Use Spread Operator {...OBJECT}
var ObjectFood2 = { ...ObjectFood };
ObjectFood2.name = "Pizza 2";

console.log("Update Data After Spread Operator");

//Value Not Get Update in Both Variable
console.log(ObjectFood2);
console.log(ObjectFood);

//Object Destructor Example

var ObjectFood = { name: "Pizza", price: 200, rating: 4.5, isAvailable: true };

//Here name and Price key and value will be Extracted and Store it
//As a Variable and Value
var { name, price } = ObjectFood;

console.log(name);
console.log(price);

//Here name and Price key and value will be Extracted and Store it
//As a Variable and Value and Here ...restData Will Access all the Remaining Key and Value
var { name, price, ...restData } = ObjectFood;

console.log(name);
console.log(price);
console.log(restData);

//Check Key Exist in Object
if ("fullname" in ObjectFood) {
  console.log("yes");
} else {
  console.log("No");
}

if ("name" in ObjectFood) {
  console.log("yes");
} else {
  console.log("No");
}

//use of this keyword in Object
var ObjectFood = {
  name: "Pizza",
  price: 200,
  rating: 4.5,
  isAvailable: true,
  fulldetails: function () {
    return "Name : " + this.name + " Price : " + this.price;
  },
};

console.log(ObjectFood.fulldetails());
