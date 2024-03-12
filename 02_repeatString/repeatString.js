const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let appendedStr = '';
    for (let i = 0; i < num; i++) {
        appendedStr += string;
    }

    return appendedStr;
 
};

// Do not edit below this line
module.exports = repeatString;


