var shopping={
    books: 5,
    shirt: 2,
    mobile: 1,
    pen:10
}

const keys=Object.keys(shopping);
console.log(keys);
const vlaues=Object.values(shopping);
console.log(vlaues)


// looping
for (var i =0; i<keys.length; i++){
    propartyName=keys[i];
    propartyValues=shopping[propartyName];
    console.log(propartyName,propartyValues);
}