function addPropertyV1(userData, userId) {
	userData.id = userId;
	return userData;
}

 // put your code here
 function addPropertyV2(userData, userId) {
	const copyObj = Object.assign(userData);
	copyObj.id = userId;
	return copyObj;
 }

 // put your code here
 function addPropertyV3(userData, userId) {
	const copyObj = Object.assign({}, userData);
	copyObj.id = userId;
	return copyObj;
}
 // put your code here
 function addPropertyV4(userData, userId) {
	const copyObj = {...userData};
	copyObj.id = userId;
	return copyObj;
}

 // examples
 const user = {
	name: 'Sam',
 };
console.log( addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log( addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log( addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log( addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }