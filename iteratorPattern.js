// loop over some collection of objects.
// It allows us to define our own rules to define iterator pattern

const items=[
    1, "devsage", false, 1.24
];


function Iterator(items){
    this.items = items;
    this.index=0;
}

Iterator.prototype={
    hasNext:function(){
        return this.index < this.items.length;
    },
    getNext:function(){
        return this.items[this.index++]
    }
}

const iterator = new Iterator(items);
while(iterator.hasNext()){
    console.log(iterator.getNext())
}