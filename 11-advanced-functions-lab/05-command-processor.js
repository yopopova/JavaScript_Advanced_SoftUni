function solution() {
    let result = '';

    return {
        append(str) {
            result += str;
        },

        removeStart(num) {
            result = result.substring(num);
        },

        removeEnd(num) {
            result = result.substring(0, result.length - num);
        },

        print() {
            console.log(result);
        }
    };
}