const inputModule = require("./input.js");
const seats = inputModule.seats;

const countOccupiedAdjacentSeats = (array, index, position) => {
    occupiedSeats = 0;
    if (array[index][position - 1] === "#") {
        occupiedSeats += 1
    };
    if (array[index][position + 1] === "#") {
        occupiedSeats += 1
    };
    if (index > 0) {
        if (array[index - 1][position - 1] === "#") {
            occupiedSeats += 1
        };
        if (array[index - 1][position] === "#") {
            occupiedSeats += 1
        };
        if (array[index - 1][position + 1] === "#") {
            occupiedSeats += 1
        };
    };
    if (index < 98) {
        if (array[index + 1][position - 1] === "#") {
            occupiedSeats += 1
        };
        if (array[index + 1][position] === "#") {
            occupiedSeats += 1
        };
        if (array[index + 1][position + 1] === "#") {
            occupiedSeats += 1
        };
    };
    return occupiedSeats;
};

//part 1

const seatArrays = seats.map(string => string.split(""));

const applyRules = array => array.map((item, index) => item.map((item, position) => {
    if (item === "L" && (countOccupiedAdjacentSeats(array, index, position) === 0)) {
        return item.replace("L", "#")
    }
    if (item === "#" && (countOccupiedAdjacentSeats(array, index, position) >= 4)) {
        return item.replace("#", "L")
    }
    else {
        return item
    }
}));

let arrayCount = 0;

const solution = array => {
    let newArray = applyRules(array);
    arrayCount++;
    if (JSON.stringify(newArray) === JSON.stringify(array)) {
        console.log(newArray.flat().filter(item => item === "#").length);
        console.log(arrayCount)
        return newArray;
    } else {
        solution(newArray);
    }
}

console.log(solution(seatArrays))

//part 2



//wrong anwers: 2786, 2346, 2647