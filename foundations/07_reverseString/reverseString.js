const reverseString = function(string) {
    let strToArr = string.split("");
    strToArr.reverse();
    const newString = strToArr.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
