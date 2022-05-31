function Employee(name,salary){
    this.name=name;
    this.salary=salary;
}

Employee.prototype={
    getSalary:function(){
        return this.salary;
    },
    setSalary:function(salary){
        this.salary=salary;
    },
    accept:function(visitorfn){
        visitorfn(this)
    }
}

// ///////////
const emp = new Employee("Madhuri",1000);
console.log(emp.getSalary());

const visitorfn = function(emp){
    emp.setSalary(emp.getSalary() *3)
}

emp.accept(visitorfn);

console.log(emp.getSalary())