var array_data=["1","2","3","4","5"];
console.log(array_data);
console.log("Value of Array At Postition 0 : "+array_data[0]);
console.log("Length of Array : "+array_data.length);
array_data[0]="11";
console.log("After Changing Value of Array At Postition 0 : "+array_data[0]);

for(var i=0;i<10;i++){
    console.log("Value of i "+i);
}
console.log("Loop Stop");

for(var i=0;i<array_data.length;i++){
    console.log("Value of Array at "+i+" is : "+array_data[i])
}

array_data.forEach(function (value) {
    console.log(value)
});

var string_array_name=["Rahul","Aman","Vishal","Pratik","Banti","Bablu"];
console.log("Before Sorting of Array");
console.log(string_array_name);
string_array_name.sort();
console.log("After Sorting the Value of Array");
console.log(string_array_name);

console.log("Last Element of Array : "+string_array_name[string_array_name.length-1]);

string_array_name.push("Supercoders");
console.log("After Pushing Array ");
console.log(string_array_name);

console.log("Adding Item at Starting");
string_array_name.unshift("Ankit");

console.log(string_array_name);

string_array_name.pop()
console.log("After Removing from Last")
console.log(string_array_name);


string_array_name.shift();
console.log("Removing from First Position");
console.log(string_array_name);

var name="String Data";

console.log(name instanceof Array);
console.log(string_array_name instanceof Array);
console.log(array_data instanceof Array);