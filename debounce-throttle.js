const input = document.querySelector('input');
const defaultText= document.getElementById('default');
const debounceText= document.getElementById('debounce');
const throttlwText= document.getElementById('throttle');

const updateDebounce = debounce((text)=>{
    debounceText.textContent = text;
})

const updateThrottle = debounce((text)=>{
    throttlwText.textContent = text;
})
input.addEventListener('input',e=>{
    defaultText.textContent= e.target.value;
    updateDebounce(e.target.value)
})

function debounce(cb,delay=1000){
    let timer;
    return (...args)=>{
        // clears timeout everytime and do new call
        clearTimeout(timer);

        // waits for 1 sec until we finish typing
        timer = setTimeout(()=>{
            cb(...args)
        },delay)
    }
}

function throttle(cb,delay=1000){
    let shouldWait=false;
    let waitingArgs;
    const timeoutFunc=()=>{
        if(!waitingArgs){
            shouldWait=false;
        }else{
            cb(...waitingArgs);
            waitingArgs=null;
            setTimeout(timeoutFunc,delay)
        }
        
    }
    return (...args)=>{
        if(shouldWait) {
            waitingArgs=args;
            return;
        };
        // first call immedeatly
        cb(...args);
        shouldWait=true;

        setTimeout(timeoutFunc,delay)
    }
}


