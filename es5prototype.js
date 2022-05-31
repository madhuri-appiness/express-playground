function Book(title,age){
    this.title=title;
    this.age=age;
}

// prototype method
Book.prototype.getSummary=function(){
    return `${this.title} is ${this.age} years old`
}
const book1= new Book("Madd",29);
const book2= new Book("Basu",22);

console.log(book2.getSummary())