enum Roles {ADMIN='ADMIN',READ_ONLY='READ_ONLY',AUTHOR='AUTHOR'}

const person:{
    name:string;
    age:number;
    food:string[];
    role:any
    }={
    name:"Bara'a",
    age:30,
    food:["pizza","potato"],
    role:Roles.AUTHOR
    }

    // person.role.push('user')

    // person.role=[1,'admin']

    for (const food of person.food){
        console.log(food);
    }

console.log(person)