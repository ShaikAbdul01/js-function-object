// Write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(assignment1,assignment2,assignment3){
    var total = assignment1+assignment2+assignment3;
    var avarage =total/3;
    return avarage;
}
var totalAvg= make_avg(60,59,60)
console.log(totalAvg.toFixed());