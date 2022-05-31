const book={
    title:"Book one",
    author:"John doe",
    age:28,
    getSummary:function(){
        return `${this.author} is ${this.age} years old`;
    }
}

const book1={
    title:"Book two",
    author:"Madhuri Patil",
    age:30,
    getSummary:function(){
        return `${this.author} is ${this.age} years old`;
    }
}
console.log(book1.getSummary())

