type Admin ={
    name:string;
    privilege:string[];
}

type Employee={
    name:string,
    startDate:Date
}

type ElevatedEmployee=Admin&Employee;

const el:ElevatedEmployee={
    name:'max',
    privilege:['create-server'],
    startDate:new Date()
}

type Combinable=string|number;
type Numeric=number|boolean;

type Universal=Combinable&Numeric


function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:number,b:string):string;
function add(a:string,b:number):string;
function add(a:Combinable,b:Combinable){
    if(typeof a==='string'||typeof b==='string'){
        return a.toString()+b.toString();
    }
    return a+b
}

const res=add('Max',' Schwarz');
res.split(' ')

const userInput='';
const storeData=userInput ?? 'DEFAULT';

console.log(storeData)


// type UnknownEmployee=Employee|Admin

// const printEmployeeInformation=(emp:UnknownEmployee)=>{
//     console.log(emp.name);
//     if('privilege' in emp){
//         console.log("Privilege : "+emp.privilege)
//     }
//     if('startDate' in emp){
//         console.log('Start Date : '+emp.startDate)
//     }
// }

// let emp2:UnknownEmployee={
//     name:'Max',
//     privilege:['Come on']
// }

// let emp3:UnknownEmployee={
//     name:'Max',
//     startDate:new Date()
// }

// printEmployeeInformation(emp2)
// printEmployeeInformation(emp3)

// class Car{
//     drive(){
//         console.log('Drive car')
//     }
// }

// class Bus{
//     drive(){
//         console.log('Drive bus')
//     }

//     loadingCargo(amount:number){
//         console.log('loading cargo is'+ amount)
//     }
// }

// type Vehicle=Car|Bus

// function useVehicle(vehicle:Vehicle){
//     vehicle.drive();
//     if(vehicle instanceof Bus){
//         vehicle.loadingCargo(1000)
//     }
// }

// const v1=new Car();
// const v2=new Bus();

// useVehicle(v1);
// useVehicle(v2);


// interface Bird {
//     type:'bird'
//     flyingSpeed:number;
// }

// interface Horse{
//     type:'horse'
//     runningSpeed:number;
// }

// type Animal=Bird|Horse;

// function moveAnimal(animal:Animal){
//     let speed;
//     switch (animal.type) {
//         case 'horse':
//             speed= animal.runningSpeed
//            break;
//         case 'bird':
//             speed= animal.flyingSpeed
//             break;
//     }

//     console.log('Moving speed is '+ speed)
// }

// moveAnimal({type:'horse',runningSpeed:10})

// const paragraph=document.querySelector('message-output');

// // const userInputElement=document.getElementById('user-input') as HTMLInputElement;

// const userInputElement= <HTMLInputElement> document.getElementById('user-input');
// userInputElement.value='Hi there!'

// interface ErrorContainer{
//     [prop: string]:string;
// }

// const errorBag:ErrorContainer={
//     email:'Not valid email',
//     username:'Must start with a capital character!'
// };



