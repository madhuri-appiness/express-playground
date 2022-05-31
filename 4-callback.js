
const add =(a,b,callback)=>{
    debugger
    setTimeout(()=>{
        let val = a+b;
        callback(val)
    },2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})