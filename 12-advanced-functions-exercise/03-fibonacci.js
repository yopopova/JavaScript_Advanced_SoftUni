function getFibonator() {
    let [a, b] = [0, 1];

    return function () {
        let c = a + b;
        a = b;
        b = c;
        return a;
    }
}