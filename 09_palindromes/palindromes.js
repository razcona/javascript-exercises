const palindromes = function (str) {
    const trimmedStr  = str.toLowerCase().match(/[A-Za-z0-9]/g);
    const straightStr = trimmedStr.toString();
    const reversedStr = trimmedStr.reverse().toString();
    return straightStr === reversedStr;

};

// Do not edit below this line
module.exports = palindromes;
