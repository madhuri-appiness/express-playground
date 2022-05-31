// object property from shorthand
class Book{
    constructor(title,age){
        this.title=title;
        this.age=age;
    }
    getSummary(){
        return `${this.title} is ${this.age} years old`
    }
}

class Magazine extends Book{
    constructor(title,age,month){
        super(title,age);
        this.month=month;
    }
}

// Book.prototype.getInfo= function(){
//     return `${this.title} is ${this.age}  old man`
// }

// Instantiate Magazine
const mag2= new Book("Basu","32","Hello");
const mag1= new Magazine("Maddy","29","March");


console.log(mag2.getSummary());
console.log(mag1.getSummary())