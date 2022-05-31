// it acts as placeholder for other object
// its like implementing cache to avoid more external api

function CryptoApi() {
    this.getValue = function (coin) {
        switch (coin) {
            case "Bitcoin":
                return "$3.500";
            case "Litecoin":
                return "$300";
            case "Etherium":
                return "$500";
        }
    }
}


// create a proxy to keep the result in cache by reducing network api letency and make program faster

function CryptoProxy() {
    this.api = new CryptoApi();
    this.cache = {};
    this.getValue = function (coin) {
        if (!this.cache[coin]){
            console.log("external api")
            return this.cache[coin] = this.api.getValue(coin);
        }
          

        return this.cache[coin]
    }
}


const api = new CryptoProxy();

console.log(api.getValue("Bitcoin"))
console.log(api.getValue("Etherium"))
console.log(api.getValue("Etherium"))
console.log(api.getValue("Bitcoin"))



