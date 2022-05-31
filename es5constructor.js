function Book(title,age){
    this.title=title;
    this.age=age;
    this.getSummary=function(){
        return `${this.title} is ${this.age} years old`
    }
}

const book1= new Book("Maddy",29);
console.log(book1.getSummary())