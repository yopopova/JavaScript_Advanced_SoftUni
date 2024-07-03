// The three dots (...) in JavaScript: https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript
// Rest vs Spread Operator: https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/

const adrian = {
    fullName: 'Adrian Oprea',
    occupation: 'Software developer',
    age: 31,
    website: 'https://oprea.rocks'
};

console.log(adrian);

const bill = {
    ...adrian, // We use the upper object, but we change its 'fullname' and 'website'.
    fullName: 'Bill Gates',
    website: 'https://microsoft.com'
};

console.log(bill);