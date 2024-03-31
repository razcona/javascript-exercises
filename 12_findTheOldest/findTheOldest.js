const findTheOldest = function(people) {
    const sortedPeople = people.sort((first, second) => {
        if (!first.yearOfDeath || !second.yearOfDeath) {
            return -1 * (first.yearOfBirth - second.yearOfBirth);
        }


        return (first.yearOfDeath - first.yearOfBirth) - (second.yearOfDeath - second.yearOfBirth);
        
    });

    console.log(sortedPeople);


    return sortedPeople[sortedPeople.length-1];

};

// Do not edit below this line
module.exports = findTheOldest;
