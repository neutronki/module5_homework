let numbers = new Map([
    ["one", "odd"],
    ["two", "even"],
    ["three", "odd"]
]);
numbers.forEach((value, key) => {
    console.log(`${key} - X, ${value} - Y`);
});