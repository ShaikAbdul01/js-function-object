var shopping={
    books: 5,
    shirt: 2,
    mobile: 1,
    pen:10
}

//specific keys or proparies value shown...
var penCount=shopping.pen;
console.log('Pen: ',penCount);

//alternative ways
var penCount2=shopping['books']
console.log('Books: ',penCount2);

//object shown propaty (Array) 

var proparies=Object.keys(shopping);
console.log(proparies);
//object show values
var propartisValue=Object.values(shopping);
console.log(propartisValue);

//specific propary and proparty value
var propratyName='shirt';
var propartyValues=shopping[propratyName];
console.log(propratyName,propartyValues)


//set properti values
shopping.pen=14;//or
shopping['pen']=20;

console.log(shopping)