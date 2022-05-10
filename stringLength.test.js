const stringLength = require("./stringLength");

test("It should retur the length of the string", () => {
    expect(stringLength("pascal")).toBe(6);
})