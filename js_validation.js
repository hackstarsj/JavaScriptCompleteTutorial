function ValidateForm() {
  //var name=document.forms[0][]
  //  console.log(document.forms["dataform"]["name"].value);
  var name = document.forms["dataform"]["name"];
  var email = document.forms["dataform"]["email"];
  var age = document.forms["dataform"]["age"].value;
  var course = document.forms["dataform"]["course"].value;
  var message = document.forms["dataform"]["message"].value;

  if (name.value == "") {
    alert("Please Enter Name .");
    name.style.backgroundColor = "red";
    name.focus();
    return false;
  }

  if (!email.value.includes("@") && !email.value.includes(".")) {
    alert("Please Enter Valid Email");
    email.focus();
    return false;
  }

  if (age.length != 2) {
    alert("Age Must be in Two Digits");
    return false;
  }

  if (message.length < 10) {
    alert("Mesasge must be Greater Than 20");
    return false;
  }
  if (message.length > 100) {
    alert("Mesasge must be Smaller than 100");
    return false;
  }
}
