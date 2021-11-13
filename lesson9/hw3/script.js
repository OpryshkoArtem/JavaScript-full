function mergeObjectsV1(obj1, obj2) {
	const copyObj1 = {...obj1};
	const copyObj2 = {...obj2};
	return Object.assign(copyObj1, copyObj2);
 }

 function mergeObjectsV2(obj1, obj2) {
	const copyObj1 = {...obj1};
	const copyObj2 = {...obj2};
	return Object.assign(copyObj2, copyObj1);
 }

 function mergeObjectsV3(obj1, obj2) {
	const copyObj1 = {...obj1};
	const copyObj2 = {...obj2};
	return {...copyObj1, ...copyObj2};
 }

 function mergeObjectsV4(obj1, obj2) {
	const copyObj1 = {...obj1};
	const copyObj2 = {...obj2};
	return {...copyObj2, ...copyObj1};
 }

 // examples
 const obj1 = {
	name: 'Tom',
	age: 17,
 };

 const obj2 = {
	name: 'Bob',
	student: false,
 };

 console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
 console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
 console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
 console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }