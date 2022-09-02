// Code goes here! 

const add=(...number:number[]):number=>{
    let res:number=0;
    number.map((ele)=>{
        res+=ele
    })
    return res;
}

console.log(add(12,3,5,12,458,89,6,3))

