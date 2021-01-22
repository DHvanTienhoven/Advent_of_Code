const RoundOneToSix = [17,1,3,16,19,0]

//part 1

let gameArray = [...RoundOneToSix]


const playGame = array =>{
    while (array.length <30000000){
        const mostRecentNumber = array[array.length-1]
        if(array.lastIndexOf(mostRecentNumber, -2) === -1){
            array.push(0)
        } else{
            array.push((array.length)-(array.lastIndexOf(mostRecentNumber, -2))-1)
        }
    }
    console.log(array[29999999])
    return array[29999999]
}

playGame(gameArray)

