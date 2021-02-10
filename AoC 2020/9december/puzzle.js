const inputModule = require("./input.js");
const numbers = inputModule.numbers;

//part 1

const findPair = (array, target) =>{
    for (i = 0; i < array.length; i++){
        for (j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === target){
                return true
            }
        } 
    }
};


const solution = (array, index) =>{
    const testArray = array.slice(index -25, index);
    if (findPair(testArray, array[index])){
        solution(array, index+1);
    } else {
        console.log(array[index]);
        return array[index];
    }
}
solution(numbers, 25);

//part 2

