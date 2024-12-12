const reverseString = function(str) {
    const splitString = str.split(""); //Splits string to return new array
    
    const reverseArray = splitString.reverse(); //Flips split array

    const joinArray = reverseArray.join(""); // Re joins flipped array

    return joinArray; // Joins split array together. 

};

// Do not edit below this line
module.exports = reverseString;
