var carsObject={"model":"2020","name":"Maruti","mileage":"20Km"};
//{"KEY":"Value"}
console.log(carsObject);
//print single value

console.log(carsObject["model"]);
console.log(carsObject.model);

//changing the value
carsObject['mileage']="30km";
console.log(carsObject);


//for each loop for objects
for(var key in carsObject){
    console.log("Key : "+key+" value : "+carsObject[key]);
}

//adding value in object

carsObject["yearold"]="5 Years";

console.log(carsObject);

//Array of Objects
var manycarObject=[{"model":"2020","name":"Maruti","mileage":"20Km"},{"model":"2010","name":"Tata","mileage":"25Km"}];
console.log(manycarObject);

//Accessing first item Object
console.log(manycarObject[0]["mileage"]);


console.log("Car Names :");
for(var i=0;i<manycarObject.length;i++){
    console.log("Name : "+manycarObject[i]["name"]);
}

for(var key in manycarObject){
    console.log("Name : "+manycarObject[key]["name"]);
}


var listInObjects={"name":["Rahul","AMana","Vishal"]};
console.log(listInObjects);

//Accessing list in object
console.log(listInObjects["name"][0]);
console.log(listInObjects["name"][1]);
console.log(listInObjects["name"][2]);


//all data access
for(var key in listInObjects["name"]){
    console.log(listInObjects["name"][key]);
}

//adding item into list
listInObjects["name"].push("Ankit");
console.log(listInObjects);