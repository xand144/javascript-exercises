const sumAll = function(a, b) {
    if (!(a === +a) || !(b === +b)) return "ERROR";
    if (!Number.isInteger(a || b)) return "ERROR";
    if ((a || b) < 0) return "ERROR";

    let highNum = a > b ? a : b;
    let lowNum = a < b ? a : b;
    let result = 0;

    for (let i = lowNum; i <= highNum; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
