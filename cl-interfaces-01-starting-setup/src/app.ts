// type AddFun=(a:number,b:number)=>number;

interface AddFun{
    (a:number,b:number):number
}

let add:AddFun;

add=(a:number,b:number)=>{
    return a+b
}

interface Named{
    readonly name:string;
    outputName?:string
}

interface Greetable extends Named{
    greet(phrase:string):void
}

class Person implements Greetable{
    name: string;
    age:number=30
    constructor(name: string){
        this.name=name;
    }
    greet(phrase: string): void {
        console.log(`${phrase} Hello I am ${this.name} I am  ${this.age} years old`)
}
}

let user1:Greetable;
user1={
    name:'Baraa',
    greet(phrase:string){
        console.log(`${phrase} Hello I am ${this.name}`)
    }
}

user1.greet('Wow')

const user=new Person('Baraa');
user.name='Mohammad'
user.greet('Wow')