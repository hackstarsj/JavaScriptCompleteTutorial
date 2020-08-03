console.log("Page is Ready");

//First Selecting Element
var heading1=document.querySelector("h1");

//Then Changing Text Content
heading1.textContent="New Heading";
//textContent is Used for Changing text Only

var heading2=document.querySelector("h2");
//textContent Doesn't Render Html tags
heading2.textContent="<b>New Heading With Bold Tag But It Will Work as a Plain Text</b>";

var heading3=document.querySelector("h3");
//innerHTML is Used for Adding Text With With HTML tags
heading3.innerHTML="<i>New Heading With Italic Added by InnerHTML</i>";

//Query Selector for Selecting ELement by ID
var selectingelementbyidusingqueryselector=document.querySelector("h6#h6id");
selectingelementbyidusingqueryselector.textContent="New Content Changed by JS";


//Query Selector for Selecting Element by Class
var allhead6=document.querySelectorAll("h6.head6");

console.log(allhead6);

for(var i=0;i<allhead6.length;i++){
    allhead6[i].textContent="New Content by JS at Position "+i;
}

var pid=document.getElementById("pid");
//Reading text Content
console.log(pid.textContent);
//Changing Style CSS of Element
pid.style.color="red";
pid.style.background="green";
console.dir(pid);

console.log(pid.style.background);


//Adding Attributes and value
pid.className="newclassaddedbyjs";

var pall=document.querySelectorAll("p");

for(var p of pall){
    p.onclick=function(){

        if(this.style.color==="green"){
            this.style.color="red";
            this.style.background="green";
        }
        else{
            this.style.background="red";
            this.style.color="green";
        }

    };
}

var alink=document.querySelectorAll("a");
for(var a of alink){
    a.target="_blank";
}

//First Method for Appending Item in List
var listitem=document.querySelectorAll("ul");

for(var li of listitem){

    var oldcontent=li.innerHTML;
    var newitem="<li>New Item Added By JS</li>";
    var finalCOntent=oldcontent+newitem;
    li.innerHTML=finalCOntent;

}

//Second Method for Appending Content in HTML
var listitem=document.querySelectorAll("ul");
for(var li of listitem){

    var newlinode=document.createElement("li");
    newlinode.textContent="New Node Created By JS";
    newlinode.style.color="blue";
    li.appendChild(newlinode);
    console.log(newlinode);

}

//Bulb Off On Example
var btn_on=document.getElementById("on_btn");
var btn_off=document.getElementById("off_btn");
var immg_bulb=document.getElementById("bulb_img");

btn_on.onclick=function(){
    immg_bulb.src="img_on.png";
}


btn_off.onclick=function(){
    immg_bulb.src="img_off.png";
}

immg_bulb.onclick=function(){
    console.log("click");
    console.log(this.src);
    if(this.src==="file:///D:/WebstormProjects/JavaScriptTutorial/img_off.png"){
        this.src="img_on.png";
    }
    else{
        this.src="img_off.png";
    }
}

//Hide Show Password Input Example
var name_input=document.getElementById("name_input");
name_input.value="New Value Set By JS";

var hideshow=document.getElementById("hideshow");

hideshow.onclick=function(){
    if(name_input.type==="password"){
        hideshow.textContent="HIDE";
         name_input.type="text";
    }
    else{
        name_input.type="password";
        hideshow.textContent="SHOW";
    }
}

//Changing Dropdown Default Item Selection
var select_one=document.getElementById("select_one");
select_one.selectedIndex=1;

//Check Default Radio Button Using javaScript
var radioButton=document.querySelectorAll("[ type='radio' ]");
console.log(radioButton);

radioButton[1].checked=true;

var checkButton=document.querySelectorAll("[ type='checkbox' ]");
console.log(checkButton);

checkButton[1].checked=true;
checkButton[0].checked=true;
checkButton[2].checked=true;

