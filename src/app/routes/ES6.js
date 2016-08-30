import React from 'react';

let array = [1, 2, 3, 4, 5];

// Destructuring assignment
let [a, b] = array;
// console.log(a); // > 1
// console.log(b); // > 2
let [ , , c] = array;
// console.log(c); // > 3

// Spread operator
let [x, ...rest] = array;
// console.log(x); // > 1
// console.log(rest); // > [2, 3, 4, 5]

// Default value
let [y] = []; // > undefined
let [z = "default"] = []; // > "default"

// Arrow function
let inc = x => x + 1; // let inc = function(x) { return x + 1; };
// console.log(inc(1)); // > 2

let text = "test";
// console.debug(`Тексеру: ${text}`);

let twice = array.map(el => el*2);
// console.debug("twice:", twice);

let hello = (firstPerson, ...people) =>
	`Hello ${people.join(', ')} and ${firstPerson}!`;

let e = 2;
let f = 5;
// console.debug(`${e} + ${f} = ${e + f}`);

// Оператор Spread можно использовать не только 
// при объявлении функции, но и при ее вызове
let max = Math.max(...array);
// console.debug(max); // > 5

// console.debug(`This
// is
// multiline
// string.`);


// Вычисляемые свойства объекта
let propName = 'name';
let user = {
	[propName]: 'Aidar',
};
// console.debug(user.name);


export default () => (
	<section>
		<h3>ES6</h3>

		<h4>{hello('Aidar', 'Aliya', 'Adiya')}</h4>
	</section>
);
