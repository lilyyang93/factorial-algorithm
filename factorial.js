exports.factorial = function(num) {
    let result = num
    for (let i = num-1; i >= 1; i--) {
        result *= i
    }
    return result
};