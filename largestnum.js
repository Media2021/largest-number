function largestOf(arr) {
    return arr.map(function(s) {
    return Math.max.apply(Math, s);
    });
}
var result = largestOf([[4, 5, 1, 13], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result);