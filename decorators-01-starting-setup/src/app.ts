function Logger(loggingPerson:string){
    return function( constructor:any){
        const n=new constructor();
        n.getdata()
        console.log(loggingPerson)
        console.log('Logging ...')
        console.log(constructor)
    }

}

function Template(template:string,hookId:string){
    return function(constructor:any){
        const p = new constructor();
        const hookEl=document.getElementById(hookId)
        if(hookEl){
            hookEl.innerHTML=template
            hookEl.innerHTML=p.name
        }
    }
}


@Logger('LOGGING - PERSON')
@Template('<h1>Hello World</h1>','app')
class Person{
    name='max';
    constructor(){
        console.log('Creating new person ');
    }
    getdata(){
        console.log("data")
    }
}

const pers=new Person();

console.log(pers)

//--

function Log(target:any,propertyName:string|Symbol){
    console.log('Property decorator!');
    console.log(target,propertyName)
    
}

function Log2(target:any,name:string,descriptor: PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    
}

function Log3(target:any,name:string|Symbol, descriptor:PropertyDescriptor){
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target:any,name:string|Symbol,position:number ){
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position)
}

class Product{
    @Log
    title:string;
    private _price:number;
    
    @Log2
    set price(val:number){
        if(val>0){
            this._price=val
        }else{
            new Error('Invalid price - should be positive')
        }
    }

    constructor(title:string,price:number){
        this.title=title,
        this._price=price
    }

    @Log3
    getPriceWithTax(@Log4 tax:number){
        return this._price*(1+tax);
    }
}


// function AutoBind(_:any,_:string,descriptor:PropertyDescriptor){
//     const originalMethod=descriptor.value;
//     const adjDescriptor:PropertyDescriptor={
//         configurable:true,
//         enumerable:false,
//         get(){
//             const boundFu=originalMethod.originalMethod.bind(this);
//             return boundFu;
//         },
//     }
//     return adjDescriptor
// }

// class Printer{
//     message='This work!';

//     @AutoBind
//     showMessage(){
//         console.log(this.message)
//     }
// }

// const p=new Printer();

// const button=document.querySelector('button')!;

// button.addEventListener('click',p.showMessage)


//---

interface ValidatorConfig{
    [property:string]:{
        [validatableProp:string]:string[] //[required. positive]
    }
}

const registeredValidators:ValidatorConfig={}

function Required(target:any,propName:string){
    registeredValidators[target.constructor.name]={
        ...registeredValidators[target.constructor.name],
        [propName]:['required']
    }
}

function PositiveNumber(target:any,propName:string){
    registeredValidators[target.constructor.name]={
        ...registeredValidators[target.constructor.name],
        [propName]:['positive']
    }
}

function validate(obj:any){
    const objValidatorConfig=registeredValidators[obj.constructor.name]
    if(!objValidatorConfig){
        return true
    }
    let isValid=true
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch(validator){
                case 'required':
                    isValid=isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid=isValid &&  obj[prop]>0
                    break;
            }
        }
    }

    return isValid
}


class Course{
    @Required
    title:string
    @PositiveNumber
    price:number

    constructor(t:string,p:number){
        this.title=t;
        this.price=p;
    }
}

const courseForm=document.querySelector('form')!;

courseForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const titleEl=document.getElementById('title') as HTMLInputElement;
    const priceEl=document.getElementById('price') as HTMLInputElement;

    const title=titleEl.value;
    const price=+priceEl.value;

    const createdCourse=new Course(title,price);

    if(!validate(createdCourse)){
        alert('Invalid input, please try again!')
        return
    }

    console.log(createdCourse)

})
