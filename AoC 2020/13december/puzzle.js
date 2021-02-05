const timestamp = 1007153
const buses = [29,"x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",37,"x","x","x","x","x",433,"x","x","x","x","x","x","x","x","x","x","x","x",13,17,"x","x","x","x",19,"x","x","x",23,"x","x","x","x","x","x","x",977,"x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",41]


//part 1
const validBuses = buses.filter(item => typeof(item)=== "number")

const waitTimes = validBuses.map(item => item-(timestamp%item))

console.log(5*433)

//part 2