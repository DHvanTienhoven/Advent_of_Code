const inputModule = require("./input.js");
const input = inputModule.input;

//part 1

const numbersUnderThousand = input.filter(number => number<1000);

const matchingNumbers = numbersUnderThousand.map(number => 2020-number);

const matchingNumber = matchingNumbers.map(number => input.find(element => element === number));

console.log(matchingNumber);

const result = numbersUnderThousand[2] * matchingNumbers[2];

console.log(result);

//part 2

const findTriplet = (array, target) =>{
    for (i = 0; i < array.length; i++){
        for (j = i + 1; j < array.length; j++){
            for(k = j + 1; k < array.length; k++){
                if (array[i] + array[j] + array[k] === target){
                    return [array[i], array[j], array[k]]
                }
            }
        }
    }
};

const triplet = findTriplet(input, 2020);

const productOfTriplet = triplet.reduce((acc, curr) => acc * curr);

console.log(productOfTriplet);

// finished

