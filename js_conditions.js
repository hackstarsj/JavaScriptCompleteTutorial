var a=prompt("Enter Value of A");
var b=prompt("Enter Value of B");
var c=prompt("Enter Value of C");

//Syntax
//if (condition)
// {
// Block Run on True
//}

if(a>b){
    alert("A is Greater");
}

if(b>a){
    alert("B is Greater");
}


//Syntax
//if (condition)
// {
// Block Run on True
//}
// else{
// Run of False
// }

if(a>b){
    console.log("A is Greater");
}
else{
    console.log("B is Greater")
}

//Syntax
//if (condition)
// {
// Block Run on True
//}
//else if (condition)
// {
// Block Run on True
//}
// else{
// Run of False
// }

if(a > b && a>c){
    console.log("A is Greater");
}
else if(b>a && b>c){
    console.log("B is Greater");
}
else{
    console.log("C is Greater")
}

//Terenray Operator
//Syntax
// (condition)? Run on True : Run on False
console.log( a>b ? "A is Greater" : "B is Greater");

