class List {
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }

    add(value) {
        this.result.push(value);
        this.size = this.result.length;
        this.result.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index!');
        }

        this.result.splice(index, 1);
        this.size = this.result.length;
    }

    get(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index!');
        }

        return this.result[index];
    }
}