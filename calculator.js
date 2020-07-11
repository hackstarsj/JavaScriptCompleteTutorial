var input_box=document.getElementById("calculation");

function UserClickButton(input) {
    var oldinput=input_box.value;
    var newinput=oldinput+""+input;
    input_box.value=newinput;
}
function CalculateValue() {
    console.log("Click");
    var input=input_box.value;
    input=input.replace('"',"").replace("'","");
    var result=eval(input);
    input_box.value=result;
}
function ClearData() {
    input_box.value="";
}