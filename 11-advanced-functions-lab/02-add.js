function solution(num) {

    function add(a, b) {
        return a + b;
    }

    return add.bind(this, num);
    // ^ 'this' is for the context, 'num' is the parameter that comes from the 'solution' function.
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));