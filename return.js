// function functionName(Parameter){
//     functionBody
//     return
// }
// functionName(ParameterValue)



// function add(num1,num2){
//     console.log(num1,num2);
//     console.log(num1+num2);
//     var sum=num1+num2;
//     // console.log('Sum: ',num1,num2)
//     return sum;
// }
// add(34,65)

// function shirt(money){
//     var shirtPrice=500;
//     var quantity=money/shirtPrice;
//     return quantity;
// }
// var myTaka=4000;
// var takeShirt=shirt(myTaka);
// console.log(takeShirt)


// function bringSingara(money){
//     var singaraPrice=10;
//     var quantity=money/singaraPrice;
//     return quantity;
// }
// var singaras=bringSingara(100);
// console.log('Singaras: ',singaras)



function getAvarage(assignment1,assignment2,assignment3){
    var total=assignment1+assignment2+assignment3;
    var avarage=total/3;
    return avarage;
}
var totalAvarage=getAvarage(60,59,60)
console.log("Total Avarage: ",totalAvarage.toFixed(2)); 