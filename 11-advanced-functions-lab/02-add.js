function solution(num) {

    function add(a, b) {
        return a + b;
    }

    return add.bind(this, num);
}