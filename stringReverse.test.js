const stringReverse = require("./stringReverse")
describe("It should check if the input return its reversed version", () => {
    test("Input 'pascal' return 'lacsap'", () => {
        expect(stringReverse("pascal")).toBe("lacsap");
    })
})