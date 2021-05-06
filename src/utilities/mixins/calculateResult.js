export const calculateResult = (expression) => {
  let Digit = [];
  let number = "";

  for (let i = 0; i < expression.length; i++) {
    var x = expression[i];
    if (x === "+" || x === "-" || x === "*" || x === "/") {
      Digit.push(number * 1);
      Digit.push(x);
      number = "";
      continue;
    }
    number += x;
  }
  Digit.push(number * 1);

  let answer = Digit[0];
  for (let i = 1; i < Digit.length; i += 2) {
    if (Digit[i] === "+") answer += Digit[i + 1];
    if (Digit[i] === "-") answer -= Digit[i + 1];
    if (Digit[i] === "*") answer *= Digit[i + 1];
    if (Digit[i] === "/") answer /= Digit[i + 1];
  }
  let result = answer;
  result =
    Math.round(parseFloat((result * Math.pow(10, 2)).toFixed(2))) /
    Math.pow(10, 2);
  return result.toString();
};
