const name="Rahul";

//Can't Set Value in Constant Again
//name="vishal";
console.log(name);


function ButtonClick1() {
    console.log("Button is Clicked");
}

function ButtonClick2() {
    console.log("Button 2 is Clicked");
}

function ButtonClick3() {
    console.log("Button 3 is Clicked");
}

//Second Example of Function Linked to Button
var button2=document.getElementById("button2");

button2.addEventListener("click",ButtonClick2);

//Third Example
var button3=document.getElementById("button3");
button3.onclick=ButtonClick3;


//Anonymous Function Example

var button4=document.getElementById("button4");
button4.onclick=function () {
    console.log("Anonymous Function Example ");
};

//Fifth Example of Function Linked to Button anonymous function using event listener
var button5=document.getElementById("button5");

button5.addEventListener("click",function () {
    console.log("Anonymous Example Using Event Listener ");
});

//Sixth Example Creating Variable for Function
var ButtonClick6=function () {
  console.log("Button 6 is Clicked");
};

var button6=document.getElementById("button6");
button6.onclick=ButtonClick6;


//Seventh Example Creating Example of Arrow Function
var ButtonClick7= () => {
    console.log("Button 7 is Clicked Arrow Function");
};

var button7=document.getElementById("button7");
button7.onclick=ButtonClick7;


//Eight Example Creating Function With Argument Button didn't Pass Any Value
function AddNo(a,b) {
    console.log("Value of A : "+a);
    console.log("Value of B : "+b);

}

var button8=document.getElementById("button8");
button8.onclick=function () {
    AddNo(10)
};

//Ninth Example Creating Function With Argument and Default Value
function Subtract(a=5,b=10) {
    console.log("Value of A : "+a);
    console.log("Value of B : "+b);

}

var button9=document.getElementById("button9");
button9.onclick=function () {
    Subtract();
    Subtract(10,20);
};



//Tenth Example Creating Function With Argument Array
function SumOfNum(a) {
    var sum=0;
    for(var key in a){
        sum+=a[key];
    }

    console.log(sum);
}

var button10=document.getElementById("button10");
button10.onclick=function () {
 SumOfNum([10,20,30,5,8]);
};


//Eleventh Example Creating Function With Rest Operator
// ... is for rest operator which convert variable into array
function SumOfNum2(...a) {
    console.log(ab);
    var sum=0;
    for(var key in a){
        sum+=a[key];
    }

    console.log(sum);
}

var button11=document.getElementById("button11");
button11.onclick=function () {
    SumOfNum2(10,20,30,5,8);
};


//Tweleve Example Creating Function Accessing arguments Keyword Data
// arguments is a global object inside inside Function Scope Which Hold all the Value in Array which we pass in function
function SumOfNum3() {
    console.log(arguments);
    var sum=0;
    for(var key in arguments){
        sum+=arguments[key];
    }

    console.log(sum);
}

var button12=document.getElementById("button12");
button12.onclick=function () {
    SumOfNum3(10,20,30,5,8);
};

//Thirteen Example Creating Function Inside Function
// ... is for rest operator which convert variable into array
function SumOfNum4(...a) {

    function validateNum(num){
        return isNaN(num) ? 0 :num;
    }

    console.log(a);
    var sum=0;
    for(var key in a){
        sum+=validateNum(a[key]);
    }

    console.log(sum);
}

var button13=document.getElementById("button13");
button13.onclick=function () {
    SumOfNum4(10,20,30,5,8,"ABC");
};


//Fourteen Example JavaScript Callback Function
// ... is for rest operator which convert variable into array
function SumOfNum5(cb,...a) {

    function validateNum(num){
        return isNaN(num) ? 0 :num;
    }

    console.log(a);
    var sum=0;
    for(var key in a){
        sum+=validateNum(a[key]);
    }

    cb(sum);
}

function PrintResult(value) {
    console.log("Sum of Number is "+value);
}

function PrintResult2(value) {
    console.log("Sum of Number 2 is "+value);
}

var button14=document.getElementById("button14");
button14.onclick=function () {
    SumOfNum5(PrintResult2,10,20,30,5,8,"ABC");
};


//Fifteen Example JavaScript bind method in function
// ... is for rest operator which convert variable into array

//bind assingn parameter in function before calling it
function SumOfNum6(cb,...a) {

    function validateNum(num){
        return isNaN(num) ? 0 :num;
    }

    console.log(a);
    var sum=0;
    for(var key in a){
        sum+=validateNum(a[key]);
    }

    cb(sum);
}

function PrintResult3(message,message2,value) {
    console.log(message+""+message2+""+value);
}

var button15=document.getElementById("button15");
button15.onclick=function () {
    SumOfNum5(PrintResult3.bind(this,"Sum of Number : ","is"),10,20,30,5,8,"ABC");
};



var arrow_with_param=(value1)=>{
    console.log("Arrow with Parameter "+value1);
};

var arrow_with_param1 = value1 =>{
    console.log("Arrow with Parameter "+value1);
};

//Multiple Argument in Arrow Function
var arrow_with_param3 = (value1,value2) =>{
    console.log("Arrow with Parameter "+value1+" Value 2 : "+value2);
};

arrow_with_param(50);
arrow_with_param1(60,71);
arrow_with_param3(60,71);


