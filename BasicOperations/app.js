const operations = require("./operation");

function printCalculation(operator, calculate){
    console.log("49 " + operator + " 7 = " + calculate(13, 7));
}

printCalculation("+", operations.sum);
printCalculation("-", operations.difference);
printCalculation("*", operations.product);
printCalculation("/", operations.quotient);