console.log("JS Array Beyond the Basics");
var arrayData = [1, 2, 3, 4, 5];

//Print all Data of Array
console.log(arrayData);

//Access Single Item of Array
console.log(arrayData[0]);

//Access last Item of Array
console.log(arrayData[arrayData.length - 1]);

//Access All Item of Array Using For Loop
for (var i = 0; i < arrayData.length; i++) {
  console.log(arrayData[i]);
}

var product = [
  { name: "Pizza", price: "200" },
  { name: "Burger", price: "100" },
];

product[1].price = "300";

//Printing all the Data of Array with Objects
console.log(product);

//Printing SIngle item Name from Array of Objects
console.log(product[1].name);

var randomData = [1, 2, 3, "ABC", { name: "Pizza" }];

console.log(randomData);

var product = { name: "pizza", price: [1, 2, 3, 4] };

console.log(product);

console.log(product.price);

//2d Array Example
var array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Access the Value
console.log(array2d[1][2]);

//Update the Value of Array

array2d[0][2] = 30;

console.log(array2d);

//Addition of Matrix 2d Array

var firstData2d = [
  [1, 2, 3],
  [4, 5, 5],
  [7, 8, 9],
];
var secondData2d = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

var resultMatrix = [[], [], []];

for (var i = 0; i < firstData2d.length; i++) {
  for (var j = 0; j < firstData2d[i].length; j++) {
    resultMatrix[i][j] = firstData2d[i][j] + secondData2d[i][j];
  }
}

console.log(firstData2d);
console.log(secondData2d);
console.log(resultMatrix);

for (item of arrayData) {
  console.log(item);
}

//Adding Item in Array at the End
arrayData.push(6);
arrayData.push(7);

console.log(arrayData);

//Removing Item from Array Using pop at the End

var itemremoved = arrayData.pop();
console.log(arrayData);
console.log(itemremoved);

//Adding  Item at Start Position using unshift()

arrayData.unshift(0);
arrayData.unshift(-1);

console.log(arrayData);

//Removing Item from Start Using .shift()

var removeitem2 = arrayData.shift();
console.log(arrayData);
console.log(removeitem2);

//Splice Method of Array in JS
arrayData.splice(0, 0, 4, 5, 67, 8);

console.log(arrayData);

//Remove Item in Array when Adding new Item Using .splice Method
arrayData.splice(0, 2, 78, 79, 80);

console.log(arrayData);

//Remove item from Last and Add item to last using .splice()

arrayData.splice(-1, 1, 101, 102);
console.log(arrayData);

//Last Item at Specifi postion
arrayData.splice(-2, 1, 104, 106);
console.log(arrayData);

//Accessing Item from specific position to specific positon using .slide()
var accessItem = arrayData.slice(2, 6);

console.log(accessItem);

///Accessing item from End using slice
var accessItemToEnd = arrayData.slice(-5, -1);
console.log(accessItemToEnd);

var itemslice = arrayData.slice();
console.log(itemslice);

//Reference Copy not Data Copy
var newArrayData = arrayData;

console.log(newArrayData);
console.log(arrayData);

arrayData.push(111);

console.log(newArrayData);
console.log(arrayData);

//Copy Array Data does not get any effect on updating the arraydata
var copyArrayData = arrayData.slice();

console.log(copyArrayData);

arrayData.push(120);

console.log("Copied Array : " + copyArrayData);
console.log("Array Data : " + arrayData);
console.log("New Array Data : " + newArrayData);

var firstArray = [1, 2, 3, 4];
var secondArray = [5, 6, 7];

var finalArray = firstArray.concat(secondArray);

console.log(finalArray);

var lastJoin = secondArray.concat(firstArray);

console.log(lastJoin);

//finding the position of item in array
var pos = lastJoin.indexOf(1);

console.log("Positon ", pos);

var newArray2 = [1, 5, 8, 9, 45, 78, 44, 74, 5];

console.log(newArray2.indexOf(5));

//No item exist it return -1

console.log(newArray2.indexOf(22));

//Access Position of item from last using lastindexOf()
console.log(newArray2.lastIndexOf(5));
console.log(newArray2);

var newArrayObject = [
  { name: "Super", age: 30 },
  { name: "Coders", age: 31 },
];

//Not work and You can't Access Item Position using Object
console.log(newArrayObject.indexOf({ name: "Coders", age: 31 }));

//Find Method to find object from Array
var item = newArrayObject.find((item, index, newArrayObject) => {
  if (item.name == "Coders1") {
    return item;
  }
});

console.log(item);

//Access Object Positon
var itemPos = newArrayObject.findIndex((item, index, newArrayObject) => {
  if (item.name == "Coders") {
    return index;
  }
});

//Return -1 if position not exisit
var itemPos1 = newArrayObject.findIndex((item, index, newArrayObject) => {
  if (item.name == "Coders1") {
    return index;
  }
});

console.log(itemPos);
console.log(itemPos1);

//for Each Loop in Array
newArray2.forEach((item, index, newArray2) => {
  console.log("Item : " + item + " position : " + index);
});

//Array .map() Method()

var newArray3 = newArray2.map((item, index, newArray2) => {
  return item * 20;
});

console.log(newArray3);

var newArray4 = newArray2.map((item, index, newArray2) => {
  return { item: item, pos: index };
});

console.log(newArray4);

//Using Sort() method to sort the Array
var newArray5 = [1, 5, 90, 40, 87, 54, 64, 10, 45];

console.log(newArray5);

console.log(newArray5.sort());

//Using reverse() to reverse the Array()

console.log(newArray5.reverse());

var productFood = [
  { id: 1, name: "Pizza", price: 200 },
  { id: 6, name: "Pizza Extra", price: 300 },
  { id: 2, name: "Burger", price: 100 },
  { id: 5, name: "Salad", price: 400 },
  { id: 4, name: "Fries", price: 50 },
];

console.log(productFood);

//Sort Array Data which contain Object
productFood.sort((a, b) => {
  if (a.price > b.price) {
    return 1;
  } else {
    return -1;
  }
});

console.log(productFood);

//Sort Array of object in Reverse Order
productFood.sort((a, b) => {
  if (a.price > b.price) {
    return -1;
  } else {
    return 1;
  }
});
console.log(productFood);

//Sort By Id
productFood.sort((a, b) => {
  if (a.id > b.id) {
    return 1;
  } else {
    return -1;
  }
});
console.log(productFood);

var tbody = document.getElementById("tbody");
var htmldata = "";
productFood.forEach((item, index, productFood) => {
  htmldata +=
    "<tr><td>" +
    item.id +
    "</td><td>" +
    item.name +
    "</td><td>" +
    item.price +
    "</td></tr>";
});
tbody.innerHTML = htmldata;

var sortid = document.getElementById("sortid");
var sortingmin = 1;
var sortingmax = -1;

sortid.onclick = function () {
  var htmldata = "";
  sortingmax = sortingmax == 1 ? -1 : 1;
  sortingmin = sortingmin == 1 ? -1 : 1;

  productFood.sort((a, b) => {
    if (a.id > b.id) {
      return sortingmin;
    } else {
      return sortingmax;
    }
  });

  console.log(productFood);
  productFood.forEach((item, index, productFood) => {
    htmldata +=
      "<tr><td>" +
      item.id +
      "</td><td>" +
      item.name +
      "</td><td>" +
      item.price +
      "</td></tr>";
  });
  tbody.innerHTML = htmldata;
};

var sortprice = document.getElementById("sortprice");
var sortingminp = 1;
var sortingmaxp = -1;

sortprice.onclick = function () {
  var htmldata = "";
  sortingmaxp = sortingmaxp == 1 ? -1 : 1;
  sortingminp = sortingminp == 1 ? -1 : 1;

  productFood.sort((a, b) => {
    if (a.price > b.price) {
      return sortingminp;
    } else {
      return sortingmaxp;
    }
  });

  console.log(productFood);
  productFood.forEach((item, index, productFood) => {
    htmldata +=
      "<tr><td>" +
      item.id +
      "</td><td>" +
      item.name +
      "</td><td>" +
      item.price +
      "</td></tr>";
  });
  tbody.innerHTML = htmldata;
};

var name = "Super Coders Youtube Channel";
//Converting String into Array
var nameArray = name.split(" ");

console.log(nameArray);

//Converting Array into string;
//join(" PASS the Sepeator Here default , will take")
var nameString = nameArray.join(" ");

console.log(nameString);

//Check Item Exist in Array or Not
if (nameArray.includes("Super")) {
  console.log("True");
} else {
  console.log("False");
}

//Check Item Exist in Array or Not
if (nameArray.includes("Super1s")) {
  console.log("True");
} else {
  console.log("False");
}

var filterData = productFood.filter((item, index, productFood) => {
  if (item.price > 100) {
    return true;
  } else {
    return false;
  }
});

console.log(filterData);

//Search Filter Data
var search = document.getElementById("search");

search.onkeyup = function () {
  console.log(search.value);
  htmldata = "";
  var searchFood = productFood.filter((item, index, productFood) => {
    if (item.name.includes(search.value)) {
      return true;
    } else {
      return false;
    }
  });

  searchFood.forEach((item, index, searchFood) => {
    htmldata +=
      "<tr><td>" +
      item.id +
      "</td><td>" +
      item.name +
      "</td><td>" +
      item.price +
      "</td></tr>";
  });
  tbody.innerHTML = htmldata;
};

//Spread Operator
var productCopy = [...productFood];

console.log(productCopy);

var num = [1, 2, 1, 2, 1, 2, 1, 10];

function SumofNum(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}
var sum = SumofNum(1, 3, 4, 5, 7, 5, 5);

console.log(sum);

var sum2 = SumofNum(...num);

console.log(sum2);

//Array Destructor
var nameData = ["Super", "Coders", "Youtube", "Channel", "Subscribe"];
console.log(nameData);

//Using Spread Operator You can Access All the Remaining data in Array
var [firstName, lastName, channel, ...alldata] = nameData;

console.log(firstName);
console.log(lastName);
console.log(channel);
console.log(alldata);
