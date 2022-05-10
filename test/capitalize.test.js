const capitalize = require("../capitalize")
describe("It should retun the first string with first letter capitalized", () => {
    test("Input 'pascal' return 'Pascal'", () => {
        expect(capitalize("pascal")).toBe("Pascal");
    })
})