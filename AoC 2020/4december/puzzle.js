const inputModule = require("./input.js");
const passports = inputModule.passports;

//part 1

const findValidPassports = passports.filter(passport => "cid" in passport ? Object.keys(passport).length === 8 : Object.keys(passport).length === 7);

console.log(findValidPassports)

//part 2

