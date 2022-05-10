const calculator = (number1, number2, sign) => {
    switch (sign) {
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
            break;
        case '*':
            return number1 * number2;
            break;
        case '/':
            return number1 / number2;
            break;
        default:
            return undefined;
    }

}
module.exports = calculator;
