const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    const fibNums = [0, 1, 1];
    for (let i = 0; i <= num; i++) {
        if (fibNums.length <= num){
            fibNums.push(fibNums[fibNums.length -2] + fibNums[fibNums.length - 1]);

        }

    }
    return fibNums[num];

};


// Do not edit below this line
module.exports = fibonacci;
