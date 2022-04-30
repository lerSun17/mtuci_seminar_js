function sumArray (arr) {
    var result = 0;
    for (let i = 0; i < arr.length; ++i) {
        result += arr[i];
        }
    return result;
}

console.log(sumArray([1, 2, 3])); //result = 6

console.log(sumArray([25, 10, 3])); //result = 38