function Book(title,year){
    this.title=title;
    this.year=year;
}

// prototype method
Book.prototype.getSummary=function(){
    return `${this.title} is ${this.year} years old`
}

function Magazine(title,year,month){
  Book.call(this,title,year);
  this.month=month;
}

// inherit prototype
Magazine.prototype = Object.create(Book.prototype)

const magazine1= new Magazine("Saru",2019,"april");

// use magazine constructor instead of Book
Magazine.prototype.constructor=Magazine;


console.log(magazine1.getSummary())