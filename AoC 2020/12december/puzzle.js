const inputModule = require("./input.js");
const directions = inputModule.directions;

//part 1



const calculateManhattanDistance = array => {
    let currDir = "E"
    let E = 0
    let N = 0
    // const calculateNewPosition = (direction, distance) =>{
    //     if (direction === "E"){
    //         E += distance
    //     }
    //     if (direction === "W"){
    //         E  -distance
    //     }
    //     if (direction === "N"){
    //         N + distance
    //     }
    //     if (direction === "S"){
    //         N  - distance
    //     }
    // }
    array.forEach(element => {
        console.log(currDir)
        dirCommand = element.slice(0, 1);
        distCommand = parseInt(element.slice(1));
        // console.log(distCommand)
        if (dirCommand === "F") {
            if (currDir === "E") {
                E += distCommand
            }
            if (currDir === "W") {
                E += -distCommand
            }
            if (currDir === "N") {
                N += distCommand
            }
            if (currDir === "S") {
                N += -distCommand
            }
        } if (dirCommand === "L" && distCommand === 180 && currDir === "E") {
            currDir = "W"
        } if (dirCommand === "L" && distCommand === 180 && currDir === "W") {
            currDir = "E"
        } if (dirCommand === "L" && distCommand === 180 && currDir === "S") {
            currDir = "N"
        } if (dirCommand === "L" && distCommand === 180 && currDir === "N") {
            currDir = "S"
        } if (dirCommand === "L" && distCommand === 90 && currDir === "E") {
            currDir = "N"
        } if (dirCommand === "L" && distCommand === 90 && currDir === "N") {
            currDir = "W"
        } if (dirCommand === "L" && distCommand === 90 && currDir === "W") {
            currDir = "S"
        } if (dirCommand === "L" && distCommand === 180 && currDir === "S") {
            currDir = "E"
        } if (dirCommand === "R" && distCommand === 180 && currDir === "E") {
            currDir = "W"
        } if (dirCommand === "R" && distCommand === 180 && currDir === "W") {
            currDir = "E"
        } if (dirCommand === "R" && distCommand === 180 && currDir === "S") {
            currDir = "N"
        } if (dirCommand === "R" && distCommand === 180 && currDir === "N") {
            currDir = "S"
        } if (dirCommand === "R" && distCommand === 90 && currDir === "E") {
            currDir = "S"
        } if (dirCommand === "R" && distCommand === 90 && currDir === "S") {
            currDir = "W"
        } if (dirCommand === "R" && distCommand === 90 && currDir === "W") {
            currDir = "N"
        } if (dirCommand === "R" && distCommand === 180 && currDir === "N") {
            currDir = "E"
        } else{
            if (dirCommand === "E") {
                E += distCommand
            }
            if (dirCommand === "W") {
                E += -distCommand
            }
            if (dirCommand === "N") {
                N += distCommand
            }
            if (dirCommand === "S") {
                N += -distCommand
            }
        }
    });
    console.log(E, N)
    return [E, N]
}

console.log(calculateManhattanDistance(directions))

console.log(635 +967)