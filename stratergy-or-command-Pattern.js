// It allows to swap statergy in and out for each other

// stratergy pattern is encapsulate a group of closely related algorithms

// all stratergy is a function

function Fedex(){
    this.calculate=package=>{
        // fedex calculation...
        return 2.45
    }
}

function UPS(){
    this.calculate=package=>{
        // UPS calculation...
        return 4.5
    }
}

function USPS(){
    this.calculate=package=>{
        // USPS calculation...
        return 1.5
    }
}


//create stratergy obj
function Shipping(){
    this.company="";
    // set stratergy
    this.setStratergy=(company)=>{
        this.company=company;
    }
    // call calculate to respective company 
    this.calculate = package =>{
      return this.company.calculate(package)
    }
}


const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

let package ={ from:"Hvaeri", to:"Sandur", weight:1.56};

const shipping = new Shipping();
shipping.setStratergy(usps);




console.log(shipping.calculate(package))