var input_box = document.getElementById("calculation");
var historyData = [];
var expressionData = "";
var resultData = "";
input_box.onkeydown = function () {
  console.log(input_box.value);
};

function UserClickButton(input) {
  var oldinput = input_box.value;
  var newinput = oldinput + input;
  expressionData = newinput;
  input_box.value = newinput;
}
function CalculateValue() {
  console.log("Click");
  var input = input_box.value;
  input = input.replace('"', "").replace("'", "");
  var result = eval(input);
  resultData = result;
  historyData.push({ expression: expressionData, result: resultData });
  showLogdata();
  resultData = "";
  expressionData = "";
  input_box.value = result;
}
function ClearData() {
  input_box.value = "";
}

function showLogdata() {
  var log = document.getElementById("history_log");
  var string = "";
  for (var key in historyData) {
    string +=
      "" +
      historyData[key]["expression"] +
      " = " +
      historyData[key]["result"] +
      "<br>";
  }

  log.innerHTML = string;
}
