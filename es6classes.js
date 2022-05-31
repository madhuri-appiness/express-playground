class Book{
    constructor(title,age){
        this.title=title;
        this.age=age;
    }
    getSummary(){
        return `${this.title} is ${this.age} years old`
    }
    getAge(){
        return `${this.age}`
    }
}

// Instantiate Object
const book = new Book("Maady","2018");
console.log(book.getAge())