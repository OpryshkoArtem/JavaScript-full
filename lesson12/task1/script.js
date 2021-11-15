const calc = input => {
	const [num1, operator, num2] = input.split(' ');

	let output = 0;
	switch (operator) {
		case '+':
			output = Number(num1) + Number(num2);
			break;
		case '-':
			output = num1 - num2;
			break;
		case '*':
			output = num1 * num2;
			break;
		case '/':
			output = num1 / num2;
			break;

	}

	return `${input} = ${output}`;
}

//for example

let exp = '1 + 5';

console.log(calc(exp));