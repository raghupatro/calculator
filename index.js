var numbers = [];
var operators = [];
var num = "";
var text = "";

$("button").click(function () {
  handleClick(this.classList[1], this.classList[2]);
});

$(document).on("keypress", function (event) {
  var key;
  var type = "op";
  if (event.key === "Enter") {
    key = "=";
  } else if (event.key === "c") {
    key = "c";
  } else if (event.key === "d") {
    key = "d";
  } else if (event.key === "+") {
    key = "+";
  } else if (event.key === "-") {
    key = "-";
  } else if (event.key === "*") {
    key = "*";
  } else if (event.key === "/") {
    key = "/";
  } else if (event.key === "%") {
    key = "%";
  } else {
    key = event.key;
    type = "num";
  }
  handleClick(key, type);
});

function calculate() {
  var result;
  var num1 = numbers[0];
  var num2 = numbers[1];
  var op = operators[0];

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
  }
  return result;
}

function handleClick(value, type) {
  if (value === "c") {
    $(".active").text("");
    numbers.length = 0;
    operators.length = 0;
    num = "";
    text = "";
  } else if (value === "d") {
    text = text.replace(text[text.length - 1], "");
    $(".active").text(text);
  } else {
    text = text + value;
    $(".active").text(text);
  }
  if (type !== "op") {
    num += value;
  } else {
    numbers.push(Number(num));
    operators.push(value);
    num = "";
  }
  if (value === "=") {
    var result = calculate();
    $(".active").text("");
    $(".active").text(result);
    text = String(result);
    num = String(result);
    numbers.length = 0;
    operators.length = 0;
  }
  console.log(num, text, numbers, operators);
}
