const sortContacts = (arr, sortDirection) => {
	if (!Array.isArray(arr)) {
		return null;
	};

	const sortByName = arr.sort((a, b) => {
		if (sortDirection == undefined) {
			return a.name.localeCompare(b.name)
		} else if (sortDirection == true) {
			return a.name.localeCompare(b.name)
		} else if (sortDirection == false) {
			return b.name.localeCompare(a.name)
		}
	});

	return sortByName;
}



// for example
let phoneBook = [
	{name: 'Olha', phoneNumber: '777-77-77'},
	{name: 'Kataleya', phoneNumber: '888-88-88'},
	{name: 'Dasha', phoneNumber: '333-33-33'},
];

console.log(sortContacts(phoneBook));