// object of protos
const bookprotos={
    getSummary:function(){
        return `${this.title} is ${this.year} years old`
    },
    getAge:function(){
        return `${this.year}`
    }
}


const book1= Object.create(bookprotos);
book1.title="maddy";
book1.year="2022";

const book2 = Object.create(bookprotos,{
    title:{value:"basu"},
    year:{value:"30"}
})
console.log(book2.getSummary())