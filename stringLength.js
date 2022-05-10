const stringLength = (str) => {
    if (str.length < 1) {
        throw new Error('Input should not be empty')
    } else {
        return str.length;
    }

}
module.exports = stringLength;