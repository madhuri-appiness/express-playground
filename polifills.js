var logicAlbums = [
    {
      name: 'Bobby Tarantino',
      rating: 5,
    },
    { name: 'The Incredible True Story', rating: 4.5 },
    {
      name: 'Supermarket',
      rating: 4.9,
    },
    { name: 'Under Pressure', rating: 5 },
  ]

// polifil for foreeach
Array.prototype.myforeach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

logicAlbums.myforeach((item)=>console.log(item))

// polifil for map
Array.prototype.myMap= function(callback){
    var arr = []
    for(var i=0; i<this.length; i++){
        arr.push(callback(this[i],i,this))
    }
    return arr;
}

// polifil for filter
Array.prototype.myfilter = function(callback,context){
    for(var i=0; i<this.length; i++){
        if(callback.call(context,this[i],i,this)){
            arr.push(this[i])
        }
    }
}

Array.prototype.reducefn= function(callback,initialvalue){
    var acc= !initialvalue ? null : initialvalue;
    for(var i=0; i<this.length; i++){
        if(acc){
            acc = callback.call(undefined,acc,this[i],i ,this)
        }else{
            acc = this[i]
        }
    }
    return acc;
}