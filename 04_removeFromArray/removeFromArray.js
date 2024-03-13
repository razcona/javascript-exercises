const removeFromArray = function(array, ...items) {
    let currentIndex;
    while(true) {
            for (let item of items) {
                currentIndex = array.indexOf(item);
                if (currentIndex != -1)
                    array.splice(currentIndex, 1);
            }
        if (currentIndex === -1) break;
    } 
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;

