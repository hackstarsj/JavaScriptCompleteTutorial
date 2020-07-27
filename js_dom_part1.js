window.alert("Hello World")
alert("Hello World");

//Both Will Work alert is a Method of window and We can Directly Call it

//Query Selector
//Return Single Elements When Using Query Selector
var body=document.querySelector("body");
console.log(body);

var div=document.querySelector("div");
console.log(div);
console.dir(div);
//Chaning HTML Content
div.innerHTML="<p>New Data</p>";
console.log("Class name : "+div.className)

//Query Selector ALl
//Return Multiple Elements in Array
var body_array=document.querySelectorAll("body")
console.log(body_array);
console.log(body_array[0]);

var div_array=document.querySelectorAll("div")
console.log(div_array);

//Document by Get Element ID
var div_data=document.getElementById("div_data");
console.log(div_data);

//Document by Class name
var div_class=document.getElementsByClassName("div_class");
console.log(div_class)

//document by tag name
var div_tag=document.getElementsByTagName("div");
console.log(div_tag);
