abstract class Department{
    protected employees:string[]=[]

    constructor(protected readonly id:string,public name:string){

    }

    abstract describe(this: Department):void

    addEmployees(employee:string){
        this.employees.push(employee)
    }

    printEmployeesInformation(){
        console.log("Number of employees: "+this.employees.length)
        console.log("Employees list: "+this.employees)
    }

}

class ITDepartment extends Department {
     describe(): void {
        console.log(`Department ${this.name} with id : ${this.id}`)
     }
     constructor(id:string,public admin:string[]){
        super(id,'IT')
     }
     addEmployees(employee: string): void {
        this.employees.push(employee)
    }
}

class AccountingDepartment extends Department {
    private static instance:AccountingDepartment

    private constructor(id:string){
        super(id,'IT')
        this.reports=[];
        this.lastReport=this.reports[0]
    }

    static getInstance(){
        if(AccountingDepartment.instance){
           return  AccountingDepartment.instance
        }
        this.instance=new AccountingDepartment('d2')
        return this.instance
    }

    describe(): void {
        console.log(`Department ${this.name} with id : ${this.id}`)

    }
    private lastReport:string;

    public get mostLastReport(){
        if(this.lastReport){
            console.log(this.lastReport)
            return this.lastReport;
        }
        throw new Error('No report available')
    }

    public set mostLastReport(text:string){
       this.addReports(text);
    }

    public reports:string[]


    addReports(text:string){
        this.reports.push(text)
        this.lastReport=text
    }

    printReport(){
        console.log(`Reports: ${this.reports}`)
    }
}

const accounting=new ITDepartment('d1',['Max']);

accounting.addEmployees('Max');
accounting.addEmployees('Anna')

console.log(accounting)

accounting.describe();

const acc=AccountingDepartment.getInstance();
const acc2=AccountingDepartment.getInstance();

acc.addReports('report one')
acc.addReports('report two')
acc.addReports('report three')

acc2.addReports('report five')

console.log(acc===acc2)
console.log(acc,acc2)

acc.mostLastReport;


acc.addEmployees('Baraa')
acc.mostLastReport="report four"
acc.mostLastReport


acc.describe();

// const accountingCopy={name:'DUMMY',describe:accounting.describe};

// accountingCopy.describe();


