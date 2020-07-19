// feetToMile conversion function start
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(5280); //check total distance in mile.
console.log(result + " mile");

// feetToMile conversion function end



// woodCalculator function start
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

var result = woodCalculator(14, 5, 12);
console.log(result + " cube feet wood");

// woodCalculator function end



//brickcalculator function start
function brickCalculator(floor) {
    var totalBricks = 0;
    for (var i = 1; i <= floor; i++) {
        if (i <= 10) {
            totalBricks = i * 15000;
        } else if (i > 10 && i <= 20) {
            totalBricks = i * 12000;
        } else if (i > 20) {
            totalBricks = i * 10000;
        }
    }
    return totalBricks;
}
var result = brickCalculator(19);
console.log(result);

//brickcalculator function end



// tinyFriend function start
function tinyFriend(names) {
    var min = names[0].length;
    names.map((shortName) => (min = Math.min(min, shortName.length)));
    result = names.filter((shortName) => shortName.length == min);
    return result;
}

var frindNameList = tinyFriend(["fardeen", "asad", "bitu", "joy", "bakhtiar"]);
console.log(frindNameList);

// tinyFriend function end