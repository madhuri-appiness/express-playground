// clean implementation of creating many different objects using factory pattern
function Tester(name){
    this.name=name;
    this.type="Tester"
}

function Developer(name){
    this.name=name;
    this.type="Developer"
}

function EmployeeFactory(){
    this.create=(name,type)=>{
        switch(type){
            case 1:return new Developer(name);
            break;
            case 2:return new Tester(name);
            break;
        }
    }
}

function say(){
    console.log(`Hi, I'm ${this.name} is ${this.type}`)
}

const employeefactory = new EmployeeFactory();
const emp=[];

emp.push(employeefactory.create("madhuri",1))
emp.push(employeefactory.create("basu",2))

emp.forEach(e=>{
    say.call(e)
})
console.log(emp)

