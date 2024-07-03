class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length < this.capacity) {
            let currBook = {
                bookName: bookName,
                bookAuthor: bookAuthor,
                payed: false
            }

            this.books.push(currBook);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;

        } else {
            throw new Error('Not enough space in the collection.');
        }
    }

    payBook(bookName) {
        let currentBook = this.books.find(x => x.bookName === bookName);

        if (this.books.some(x => x.bookName === bookName)) {
            if (currentBook.payed === false) {
                currentBook.payed = true;
                return `${bookName} has been successfully paid.`;
            } else {
                throw new Error(`${bookName} has already been paid.`);
            }
        } else {
            throw new Error(`${bookName} is not in the collection.`);
        }
    }

    removeBook(bookName) {
        let currentBook = this.books.find(x => x.bookName === bookName);

        if (this.books.some(x => x.bookName === bookName)) {
            if (currentBook.payed === false) {
                return `${bookName} need to be paid before removing from the collection.`;
            } else {
                let index = this.books.indexOf(currentBook); // Find the index at which the book we're looking for is located.
                let newBooksArr = this.books.splice(index, 1); // The variable holds the removed book.
                return `${bookName} remove from the collection.`;
            }
        } else {
            throw new Error("The book, you're looking for, is not found.");
        }
    }

    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let result = [];

            let firstLine = `The book collection has ${this.capacity - this.books.length} empty spots left.`;
            result.push(firstLine);

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            this.books.forEach(x => {
                if (x.payed === false) {
                    result.push(`${x.bookName} == ${x.bookAuthor} - Not Paid.`);
                } else {
                    result.push(`${x.bookName} == ${x.bookAuthor} - Has Paid.`);
                }
            });

            return result.join('\n');
        } else {
            if (this.books.some(x => x.bookAuthor === bookAuthor)) {
                let currentBook = this.books.find(x => x.bookAuthor === bookAuthor);

                if (currentBook.payed === true) {
                    return `${currentBook.bookName} == ${currentBook.bookAuthor} - Has Paid.`;
                } else {
                    return `${currentBook.bookName} == ${currentBook.bookAuthor} - Not Paid.`;
                }
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
    }
}

// const library = new LibraryCollection(2);
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2);
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());