

//part 1

const answerstrings = answers.map(item => item.join())
    .map(item => item.replaceAll(",", ""));

const uniqueCharacters = string => {
    let unique = "";
    for (let x = 0; x < string.length; x++) {
        if (unique.indexOf(string.charAt(x)) == -1) {
            unique += string[x];
        }
    }
    return unique;
}
const solution = answerstrings.map(item => uniqueCharacters(item))
    .map(string => string.length)
    .reduce((acc, curr) => acc + curr);

console.log(solution);

//part 2


const solution2 = answers.map(array => {
    let validAnswers = [];
    const searchString = array[0].split("");
    searchString.forEach(char => {
        if (array.every(string => string.includes(char))) {
            validAnswers.push(char)
        }
    })
    return validAnswers.join()})
    .map(string => {
    return string.replaceAll(",", "").length})
    .reduce((acc, curr) => acc + curr);


console.log(solution2);


//finished