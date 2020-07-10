//alert("Hello World");
var name="Rahul";
var lastName="Kumar";
console.log(name);
console.log(lastName);
name="Vishal";
console.log(name);
age="14";
console.log(age);

const address="Delhi";
console.log(address);
//You Can't Assign Value in Constant
//address="New Address";
//console.log(address);

var _name="AMan";
console.log(_name);
var $newname="Rahul";
console.log($newname);

//You can't Start Variable name with number or special Character only  small letters,underscore(_),$ is Allowed

var name2="Aman 2";
console.log(name2);

//Number Data
//integer Data
var intnum1=10;
var intnum2=20;
var intnum3=-30;

console.log(intnum1);
console.log(intnum2);
console.log(intnum3);

//floating variable data
var floatdata1=10.50;
var floatdata2=120.50;
var floatdata3=-20.50;

console.log(floatdata1);
console.log(floatdata2);
console.log(floatdata3);

//Declaring String
var string1="Rahul";
var string2='Aman 2#$dsad cascas';
var string3=`Rahul`;

//string must close with double quotes or single quote or tilde which you use in declaring string opening
//var string4="Aman 11';
console.log(string1);
console.log(string2);
console.log(string3);

//Operators : + , - ,* , / % ,=
//Using operator with number
var num1=5;
var num2=10;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1*num2);

//using operator with strings
var string4="Aman";
var string5="Kumar";
//it concatenate the string
console.log(string4+" "+string5);
console.log(string4-string5);


var string6=`Vishal 6+4`;
console.log(string6);
//expression execute
var string7=`vishal ${6+4*10-500/10}`;
console.log(string7);
//not work because you must start string with tilde symbol (`)
var string8='vishal ${6+4}';
console.log(string8)

//Line Break
var string9='Vishal Kumar \n Delhi';
console.log(string9);

//Using Single Quote in string
var string10='Vishal Kumar \n Delhi \n Father \'s Name : FF';
console.log(string10);

//Using Double Quote in string
var string10="Vishal Kumar \n Delhi \n Father \"s Name : FF";
console.log(string10);

//Adding Error in JS
//var;

//Integer Addition Example
var num3=prompt("Input Num 1");
var num4=prompt("Input Num 2");
var num5=parseInt(num4)+parseInt(num3);
console.log("Sum of Num1 + Num 2 is : "+num5);

//Float Addition Example
var num6=prompt("Input Num 1");
var num7=prompt("Input Num 2");
var num8=parseFloat(num6)+parseFloat(num7);
console.log("Sum of Num1 + Num 2 is : "+num8);