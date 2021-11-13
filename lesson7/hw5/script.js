const withdraw = (clients, balances, client, amount) => {
	const clientIndex = clients.indexOf(client);
	if (balances[clientIndex] > amount) {
		balances[clientIndex] = balances[clientIndex] - amount;
		return balances[clientIndex];
	}
	return -1;
}

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
//output
//37
//и массив balances должен быть [1400, 37, -6]

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
//output
//-1
//и массив balances должен быть [1400, 87, -6]