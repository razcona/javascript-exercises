const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 != 0) {
        return true;
    }

    else if (year % 100 === 0 && year % 400 === 0) {
        return true; 
    }

    return false;

};

// Do not edit below this line
module.exports = leapYears;



//Divisble by 4
//Not divisible by 100 unless it is divisible by 400
//
//


