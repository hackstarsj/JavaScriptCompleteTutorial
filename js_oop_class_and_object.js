console.log("JAVASCRIPT OOP TUTORIAL");

//Creating Class in JavaScript
class ProductItems {
  id;
  name;
  image;
  price;

  //Constuctor is a First Method Which is Call By Default When We Create Object of Class

  //Setting Property Value Using Constructor
  constructor(id, name, image, price) {
    //this is keyword for accessing current class properties
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    console.log("Call First After Creating Object");
  }

  getProductFullDetails() {
    return (
      "Name : " + this.name + " ID : " + this.id + " Price : " + this.price
    );
  }

  updateProductName(name) {
    this.name = name;
  }
}

class App {
  //Static Method Can be Call Directly Without Creating Objects
  static init() {
    console.log("App is Initialize...");
  }
}

//Inheritance Child Class of ProductItems
class Mobiles extends ProductItems {
  size;
  ram;
  storage;
  //Constructor Overiding
  constructor(id, name, image, price, size, ram, storage) {
    super(id, name, image, price);
    this.ram = ram;
    this.size = size;
    this.storage = storage;
  }
  //Method Overiding
  getProductFullDetails() {
    return (
      "Name : " +
      this.name +
      " RAM : " +
      this.ram +
      " Storage : " +
      this.storage
    );
  }
}

//Inheritance Child Class of ProductItems
class LED extends ProductItems {
  size;
  is_smarttv;
  weight;
}

//Create Object Of Class (Syntax : var variableName=new ClassName)
var variable1 = new Mobiles();

//Set Property Value
variable1.id = 1;
variable1.name = "Samsung Galaxy";
variable1.image =
  "https://i.picsum.photos/id/669/200/300.jpg?hmac=ypH3d7OM0ROvll045TKXPpwkg24nCbbWckekDHVyH0U";
variable1.price = 1000;

console.log(variable1);

//Get Property Value
console.log("Name : " + variable1.name);

//Second Object of Class
//Create Object Of Class (Syntax : var variableName=new ClassName)
var variable2 = new ProductItems();

//Set Property Value
variable2.id = 2;
variable2.name = "Samsung Note";
variable2.image =
  "https://i.picsum.photos/id/669/200/300.jpg?hmac=ypH3d7OM0ROvll045TKXPpwkg24nCbbWckekDHVyH0U";
variable2.price = 2000;

console.log(variable2);

//Get Property Value
console.log("Name : " + variable2.name);
console.log(variable2.getProductFullDetails());
//Creating Next Object With Constructor()
var variable3 = new ProductItems(
  3,
  "Nokia",
  "https://i.picsum.photos/id/669/200/300.jpg?hmac=ypH3d7OM0ROvll045TKXPpwkg24nCbbWckekDHVyH0U",
  3000
);

console.log(variable3);

var fulldetails = variable3.getProductFullDetails();
variable3.updateProductName("Oneplus");
console.log(fulldetails);
console.log(variable3);

App.init();

// //You Can't Call the Static Function by Creating a Object
// var app = new App();
// app.init();

var ledObj = new LED(
  5,
  "MI SMART TV",
  "https://i.picsum.photos/id/669/200/300.jpg?hmac=ypH3d7OM0ROvll045TKXPpwkg24nCbbWckekDHVyH0U",
  5000
);
console.log(ledObj);

var mobileObj = new Mobiles(
  6,
  "MI",
  "https://i.picsum.photos/id/669/200/300.jpg?hmac=ypH3d7OM0ROvll045TKXPpwkg24nCbbWckekDHVyH0U",
  6000,
  7,
  "4 GB",
  "64 GB"
);

console.log(mobileObj);

console.log(mobileObj.getProductFullDetails());
