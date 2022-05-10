const calculator = require("../calculator")

describe('It should be a calculator with four different sign', () => {

    test("Add two numbers", () => {
        expect(calculator(1, 2, '+')).toBe(3)
    });

    test("0 plus 0 shuld be equal 0", () => {
        expect(calculator(0, 0, '+')).toBe(0);
    });

    test("0 plus 0 shuld be equal empty string", () => {
        expect(calculator(0, 0, '')).toBeUndefined();
    });

    test("Substract two numbers", () => {
        expect(calculator(2, 1, '-')).toBe(1)
    });

    test("0 substeact 0 shuld be equal 0", () => {
        expect(calculator(0, 1, '-')).toBe(-1);
    });

    test("0 substract 0 shuld be equal empty string", () => {
        expect(calculator(0, 0, '')).toBeUndefined();
    });




    test("Multiply two numbers", () => {
        expect(calculator(2, 2, '*')).toBe(4)
    });

    test("0 multiply 0 shuld be equal 0", () => {
        expect(calculator(0, 0, '*')).toBe(0);
    });

    test("0 plus 0 shuld be equal empty string", () => {
        expect(calculator(0, 0, '')).toBeUndefined();
    });

    test("Divide two numbers", () => {
        expect(calculator(2, 1, '/')).toBe(2)
    });

    test("0 divided by 0 shuld be equal 0", () => {
        expect(calculator(0, 1, '/')).toBe(0);
    });

    test("0 divided by 0 shuld be equal empty string", () => {
        expect(calculator(0, 0, 'l')).toBeUndefined();
    });
})