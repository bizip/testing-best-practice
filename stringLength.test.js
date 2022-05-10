const stringLength = require("./stringLength");

describe("It should return the length of the string", () => {
    test("input 'pascal' return 6", () => {
        expect(stringLength("pascal")).toBe(6);
    })
    test("Input shuld not be empty", () => {
        expect(() => stringLength()).toThrow();
        expect(() => stringLength()).toThrow(Error);
    })
})

