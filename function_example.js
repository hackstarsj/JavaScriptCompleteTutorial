//Function Declaration
function PrintTwoNumberAddition(){
    //This is Body of Function
    console.log(2+5);
}
//Function Calling
PrintTwoNumberAddition();

//Function With Argument
function AddTwoNumber(num1,num2){
    console.log(num1+num2);
}
//Calling Function
AddTwoNumber(50,60);
 var input1=prompt("Input Num 1");
 var input2=prompt("Input Num 2");
AddTwoNumber(parseFloat(input1),parseFloat(input2));


//Function with No Argument and Return Some Data
function withNoArgumentAndReturn(){
    return 5+7;

    //unreachable Code
    console.log(8);
}
console.log(withNoArgumentAndReturn());

//function with argument and return data
function MultiplyNo(num1,num2){
    return num1*num2;
}

//Global Variable Example
function GlobalVariableExample() {
    return num1input*num2input;
}

//Function for Local Variable
function localVariableExample() {
    var num1input=5;
    var num2input=6;
    return num1input*num2input;
}

//Accessing User Input from Prompt
var num1input=prompt("Input Num 1 for Multiply");
var num2input=prompt("Input Num 2 for Multiply");

//Calling Function
var result=MultiplyNo(parseFloat(num1input),parseFloat(num2input));
var result2=GlobalVariableExample();
var result3=localVariableExample();

//Print value
console.log(result);
console.log(result2);
console.log(result3);