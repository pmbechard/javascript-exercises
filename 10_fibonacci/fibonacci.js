const fibonacci = function(counter) {
    counter = Number.parseInt(counter);
    if (counter < 0) return "OOPS";
    let a = 0;
    let b = 1;
    let current = 1;
    for (let i = 1; i < counter - 1; i++) {
        a = b;
        b = current;
        current = a + b;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
