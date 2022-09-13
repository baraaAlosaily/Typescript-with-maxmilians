// const names:Array<string>=['Max','Manuel']

// const promise:Promise<number>=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(10)
//     },2000)
// })

function merge<T,U>(objA:T,objB:U):T&U{
    return Object.assign(objB,objA)
}

const mergeObj=merge<object,object>({name:'Max'},{age:30})
const mergeObj2=merge<object,object>({name:'Baraa',hobbies:['football']},{age:25})
