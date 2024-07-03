class List {
    constructor() {
        this.result = []; // Each instance (object) of the class will have an array inside itself, in which we will store the numbers.
        this.size = this.result.length; // Number of elements in the array. The length of the array.
    }

    add(value) {
        this.result.push(value); // Add the elements to the array we created in the constructor.
        this.size = this.result.length; // We update its length because when we add a new element, the length of the array will change.
        this.result.sort((a, b) => a - b);
        // ^ We must sort every time because the condition says we must maintain the order in the array.
        // 'The correct order of the elements must be kept at all times, regardless of which operation is called.'
    }

    remove(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index!');
        }

        this.result.splice(index, 1); // Remove the element at the corresponding index from the array.
        this.size = this.result.length; // And we update the length of the array again since we have a change.
    }

    get(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index!');
        }

        return this.result[index]; // Returns the element at the corresponding index from the array.
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));