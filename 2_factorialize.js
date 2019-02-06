function factorialize(num) {
    var result = 1;
    for (var i=1; i<=num; i++) {
        result *= i;        // result = result * i;
    }
    return result;
}

console.log(factorialize(5));