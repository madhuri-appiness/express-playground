// one to many dependency relationship for objects
// example subscribe the user

function Subject(){
    this.observers=[];
}

Subject.prototype={
    subscribe: function(fn){
        this.observers.push(fn)
    },
    unsubscribe:function(fn){
        this.observers = this.observers.filter(func =>{
            if(func !== fn)
                return fn
        })
    },
    fire:function(){
        this.observers.forEach(fn => fn.call())
    }
}

const subject = new Subject();

function Observer1(){
    console.log("oberver 1 firing")
}

function Observer2(){
    console.log("oberver 2 firing")
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer1);

subject.fire();


