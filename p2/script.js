function cal(num1, num2, symbol) {
    var num1 = Number(prompt("first digit to calculate"));
    var num2 = Number(prompt("second digit to calculate"));
    var symbol = prompt("operation symbol");
    var op = symbol;
  
    switch (op) {
      case "+":
        console.log(num1 + num2);
        break;
      case "-":
        console.log(num1 - num2)
        break;
      case "*":
        console.log(num1 * num2)
        break;
      case "/":
        console.log(num1 / num2)
        break;
       case "%" :
        console.log(num1%num2)
        break;
      case ">":
      case "<":
      case "=":
        console.log("Result:", compare(num1, num2, op));
        break;
      default:
        console.log("Invalid operation");
    }
  }
  
  function compare(a, b, operation) {
    switch (operation) {
      case ">":
        return a > b ? "First number is greater" : "First number is not greater";
      case "<":
        return a < b ? "First number is smaller" : "First number is not smaller";
      case "=":
        return a === b ? "Numbers are equal" : "Numbers are not equal";
      default:
        return "Invalid operation";
    }
  }
  
  cal();
  