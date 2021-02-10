

//part 1

const findRow = string => {
    const fbString = string.slice(0, 7);
    const binaryCode = convertToBinary(fbString, "B", "F");
    const rowNumber = parseInt(binaryCode, 2);
    return rowNumber
};

const findColumn = string => {
    const lrString = string.slice(7);
    const binaryCode = convertToBinary(lrString, "R", "L");
    const column = parseInt(binaryCode, 2);
    return column
};

const convertToBinary = (string, a, b) => string.replaceAll(a, 1).replaceAll(b, 0);

const findSeatID = array => array.map(item =>{
    const row = findRow(item);
    const column = findColumn(item);
    return row * 8 + column
});

const sortedSeatIDs = (findSeatID(boardingPasses).sort((a,b)=> a > b? 1: -1));

console.log(sortedSeatIDs[sortedSeatIDs.length-1]);

//part 2

const differenceIDs = sortedSeatIDs.map((v, i, a) => v - (a[i - 1] || 0));
    
console.log(differenceIDs.indexOf(2));

console.log(`${sortedSeatIDs[569]} ${sortedSeatIDs[570]}`);


//finished