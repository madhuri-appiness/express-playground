let composition = function (f, g) {
    return function (x) {
        return f(g(x))
    };
};
let add = function (num) {
    return num + 10;
}
let multiply = function (num) {
    return num * 10
}
let ans = composition(multiply, add)
ans(5)