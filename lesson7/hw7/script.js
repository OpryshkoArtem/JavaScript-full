const filterNames = (arr, delta) => {
	if(!Array.isArray(arr)) {
		return null;
	}
	return arr.filter(name => name.length > 5 && name.includes(delta));
}

// example
// input: filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya');
// output: ['Olivya', 'Nastya'];
console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Den', 'Nastya'], 'ya'));