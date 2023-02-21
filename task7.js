let arr = [null, 0.3, 4, 8, 1.4, 7, 53, 0, 'b'];
let zeroCount = 0;
let numberCount = 0;
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numberCount += 1;
        if (arr[i] === 0) {
            zeroCount += 1;
        } else if (arr[i] % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        }
    }
}

console.log("Even: " + evenCount);
console.log("Odd: " + evenCount);
console.log("Zero: " + zeroCount);
console.log("Numbers: " + numberCount);

