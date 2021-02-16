const inputModule = require("./input.js");
const rules = inputModule.rules;
const myTicket = inputModule.myTicket
const nearbyTickets = inputModule.nearbyTickets


//part 1

const isValidValue = value => value >= 27 && value <= 974;

const findErrorRate = nearbyTickets.flat().filter(item => !isValidValue(item)).reduce((acc, val) => acc + val)
console.log(findErrorRate)

//part 2

const validTickets = array =>{ 
    let newArray =[];
    array.forEach(ticket =>{
        ticket.every(item => isValidValue(item))? newArray.push(ticket) : null;
    });
    return newArray
}

const valueCheckers = Object.values(rules).map(item =>{
    const ValueChecker = value => value >= item[0] && value <= item[1] || value >= item[2] && value <= item[3]
    return ValueChecker
})

const firstArray = validTickets(nearbyTickets).map(item => item[12])
const secondArray = validTickets(nearbyTickets).map(item => item[13])
const thirdArray = validTickets(nearbyTickets).map(item => item[14])
const fourthArray = validTickets(nearbyTickets).map(item => item[15])
const fifthArray = validTickets(nearbyTickets).map(item => item[16])
const sixthArray = validTickets(nearbyTickets).map(item => item[17])
const seventhArray = validTickets(nearbyTickets).map(item => item[18])
const eighthArray = validTickets(nearbyTickets).map(item => item[19])
const ninthArray = validTickets(nearbyTickets).map(item => item[8])
const tenthArray = validTickets(nearbyTickets).map(item => item[9])
const eleventhArray =validTickets(nearbyTickets).map(item => item[10])
const twelvethArray =validTickets(nearbyTickets).map(item => item[11])

const checkFirst = valueCheckers.map(func => firstArray.every(item => func(item)))
const checkSecond = valueCheckers.map(func => secondArray.every(item => func(item)))
const checkThird = valueCheckers.map(func => thirdArray.every(item => func(item)))
const checkFourth = valueCheckers.map(func => fourthArray.every(item => func(item)))
const checkFifth = valueCheckers.map(func => fifthArray.every(item => func(item)))
const checkSixth = valueCheckers.map(func => sixthArray.every(item => func(item)))
const checkSeventh = valueCheckers.map(func => seventhArray.every(item => func(item)))
const checkEighth = valueCheckers.map(func => eighthArray.every(item => func(item)))
const checkNinth = valueCheckers.map(func => ninthArray.every(item => func(item)))
const checkTenth = valueCheckers.map(func => tenthArray.every(item => func(item)))
const checkEleventh = valueCheckers.map(func => eleventhArray.every(item => func(item)))
const checkTwelveth = valueCheckers.map(func => twelvethArray.every(item => func(item)))


console.log(myTicket[1]*myTicket[19]*myTicket[2]*myTicket[4]*myTicket[14]*myTicket[6])

//finished - niet op de meest elegante manier