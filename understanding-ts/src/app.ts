import { myName } from "./name.js";
const helloworld=()=>{
    console.log('Hello world')
}

myName();

helloworld();

const button=document.querySelector('button') as HTMLInputElement;

button.addEventListener('click',()=>{
    console.log("hello again")
})

