
""" const playGame = array =>{
    while (array.length <2020){
        const mostRecentNumber = array[array.length-1]
        if(array.lastIndexOf(mostRecentNumber, -2) === -1){
            array.push(0)
        } else{
            array.push((array.length)-(array.lastIndexOf(mostRecentNumber, -2))-1)
        }
    }
    console.log(array[2019])
}

playGame(gameArray) """




"""test_list = [ 9, 5, 3, 1,0, 5,0,9,5]
second_list = test_list[:-1]

result = len(second_list) - 1 - second_list[::-1].index(5) 

print(result)"""