const inputModule = require("./input.js");
const forest = inputModule.forest;

//part 1 & 2

const findTrees = (array, multiplier) =>{
    let trees = 0;
    for(i = 0; i < array.length; i++){
        (array[i])[(i*multiplier)%31] === "#" ? trees ++ : null
    };
    return trees
};

const findTrees2 = array =>{
    let trees = 0;
    for(i = 0; i < array.length; i++){
        if(i%2==0){
            (array[i])[Math.ceil(i/2)%31] === "#"? trees ++ : null
        }};
    return trees
}

const answer = findTrees(forest, 1) * findTrees(forest, 3) *  findTrees(forest, 5) * findTrees(forest, 7) * findTrees2(forest);

console.log(answer);

//finished