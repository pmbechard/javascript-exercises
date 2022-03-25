const repeatString = function(text, num) {
    if (num < 0) return "ERROR";
    let result = "";
    for (num; num > 0; num--) {
        result += text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
