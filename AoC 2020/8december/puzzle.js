const inputModule = require("./input.js");
const instructions = inputModule.instructions;

//part 1

let accumulator = 0;

const findAccumulator = (array, index) =>{
    let command = array[index];
    if (command.slice(-1)==="x"){
        console.log(accumulator);
        return accumulator;
    };
    if (command.slice(0,3)==="acc"){
        accumulator += parseInt(command.slice(4));
        array[index] += "x";
        findAccumulator(array, index+1)
    };
    if (command.slice(0,3)==="nop"){
        array[index] += "x";
        findAccumulator(array, index+1)
    };
    if (command.slice(0,3)==="jmp"){
        array[index] += "x";
        findAccumulator(array, index + parseInt(command.slice(4)))
    };
};

findAccumulator(instructions, 0)


//part 2
