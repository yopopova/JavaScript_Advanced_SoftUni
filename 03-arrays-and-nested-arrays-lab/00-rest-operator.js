// The three dots (...) in JavaScript: https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript
// Rest vs Spread Operator: https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/

function sum(...numbers) {

	console.log(typeof numbers); // it's an array-like object

	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};

// let result = sum(1, 2) // 3
let result = sum(1, 2, 3, 4, 5) // 15
console.log(result);