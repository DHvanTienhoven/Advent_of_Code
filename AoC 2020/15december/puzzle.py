
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

def play_game(list, length):
    while len(list) < length:
        most_recent_num = list[-1]
        test_list = list[:-1]
        if len(test_list) - 1 - test_list[::-1].index(most_recent_num) == -1:
            list.append(0)
        else:
            list.append(len(list) - test_list[::-1].index(most_recent_num) -1 )
    return list[-1]

print(play_game([ 9, 5, 3, 1,0, 5,0,9,5], 10))


"""test_list = [ 9, 5, 3, 1,0, 5,0,9,5]
second_list = test_list[:-1]

result = len(second_list) - 1 - second_list[::-1].index(5) 

print(result)"""