// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function husband() {
	const husbandName = 'Amine';
	console.log(`${husbandName} is learning to code.`);

	function wife() {
		const wifeName = 'Shana';
		console.log(`${wifeName} is married to ${husbandName}.`);

		function cat() {
			const catName = 'EggShen';
			console.log(`Their cat, ${catName} eats too much but ${wifeName} and ${husbandName} love her.`);
		}
		cat();
	}
	wife();
}
husband();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
	let count = 0;
	return function() {
		return ++count;
	};
	// Return a function that when invoked increments and returns a counter variable.
};

let newCounter = counter();
// Example usage: const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter());
console.log(newCounter());
console.log(newCounter()); // 2
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
	let count = 0;
	return {
		increment : function() {
			return (count += 1);
		},
		decrement : function() {
			return (count = count - 1);
		},
	};
	// Return an object that has two methods called `increment` and `decrement`.
	// `increment` should increment a counter variable in closure scope and return it.
	// `decrement` should decrement the counter variable and return it.
};

let newCounterFactory = counterFactory();

console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
// console.log(newCounterFactory.decrement());
