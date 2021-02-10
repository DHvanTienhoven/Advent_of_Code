const inputModule = require("./input.js");
const adapters = inputModule.adapters;

//part 1
const joltDiff = adapters.sort((a,b)=> a > b? 1: -1)
    .map((v, i, a) => v - (a[i - 1] || 0));
const solution = joltDiff.filter(item => item === 1).length * (joltDiff.filter(item => item === 3).length +1);

console.log(solution);

//part 2



