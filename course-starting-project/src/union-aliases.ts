type Combinable= number|string


function combine(n1:Combinable  ,n2:Combinable  ){
    let result;

    if(typeof n1 ==='number' && typeof n2 === 'number'){
        result=n1+n2;
    }else{
        result=n1.toString()+n2.toString();
    }
    return result;
}

const combineAges=combine(20,30);
console.log(combineAges);

const combineNames=combine('baraa','mohammad');

console.log(combineNames)