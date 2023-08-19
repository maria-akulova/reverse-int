module.exports = function reverse (n) {
    let reverseString = new String(Math.abs(n));
    return reverseString.split("").reverse().join("");
}
