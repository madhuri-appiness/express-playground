// limit the number of instances of objects to 0 or 1 then singleton pattern is used
const SingleTon = (function(){
    function ProcessManager(){
        this.numprocess =0 
    }
    let pManager;
    function createProcessManager(){
        pManager= new ProcessManager();
        return pManager
    }
    return{
        getInfo:()=>{
            if(!pManager)
            pManager = createProcessManager();
            return pManager
        }
    }
})();

const processManager1 = SingleTon.getInfo();
const processManager2 = SingleTon.getInfo();

console.log(processManager1.numprocess === processManager2.numprocess)