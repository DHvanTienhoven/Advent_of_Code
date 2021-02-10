const inputModule = require("./input.js");
const rules = inputModule.rules;

//part 1

const splittedRules = rules.map(string => string.split("contain"));
const filterBags = (array, bag) => array.filter(item => item[1].includes(bag)).map(item => item[0].slice(0, -2));
const uniqueValues = (value, index, self) => self.indexOf(value) === index;
const searchBags = array => array.map(bag => filterBags(splittedRules, bag)).flat().concat(array).filter(uniqueValues);
const containsGold = filterBags(splittedRules, "shiny gold bag");
const solution = array => {
    let newArray = searchBags(array);
    if (newArray.length > array.length) {
        solution(newArray);
    };
    if (newArray.length === array.length) {
        console.log(newArray.length);
        return newArray.length;
    }
};
olution(containsGold);

//part 2

