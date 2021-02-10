const inputModule = require("./input.js");
const buses = inputModule.buses;
const timestamp = inputModule.timestamp


//part 1
const validBuses = buses.filter(item => typeof(item)=== "number")

const waitTimes = validBuses.map(item => item-(timestamp%item))

console.log(waitTimes)

console.log(5*433)

//part 2