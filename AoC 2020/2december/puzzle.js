const inputModule = require("./input.js");
const passwordsAndConditions = inputModule.passwordsAndConditions;

// part1
const passWordChecker = (target, min, max, password) =>{
    numberOfOccurences = password.split(target).length -1;
    return numberOfOccurences >= min && numberOfOccurences <= max
};

const numberOfValidPasswords = passwordsAndConditions
    .map(item => passWordChecker(item.target, item.min, item.max, item.password))
    .filter(item => item == true).length;

console.log(numberOfValidPasswords);

//part2

const passWordChecker2 = (target, index1, index2, password) =>
    password[index1-1] === target && password[index2-1] !== target ||
    password[index1-1] !== target && password[index2-1] === target;


const numberOfValidPasswords2 = passwordsAndConditions
    .map(item => passWordChecker2(item.target, item.min, item.max, item.password))
    .filter(item => item == true).length;

console.log(numberOfValidPasswords2);

//finished