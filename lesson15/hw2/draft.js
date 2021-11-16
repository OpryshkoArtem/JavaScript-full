// function getRecords(str) {
// 	let result = [];
// 	switch (str) {
// 		case 'warn':
// 			result = loggerMemo.filter(elem => elem.type === 'warn');
// 			break;
// 		case 'error':
// 			result = loggerMemo.filter(elem => elem.type === 'error');
// 			break;
// 		case 'log':
// 			result = loggerMemo.filter(elem => elem.type === 'log');
// 			break;
// 		default:
// 			result = loggerMemo;
// 	}
// 	return result;
// }



	// function getRecords(str) {
	// 	if (str === 'warn') {
	// 		const result = [];
	// 		loggerMemo.map(elem => {
	// 			if (elem.type === 'warn') {
	// 				result.push(elem);
	// 			}
	// 		});
	// 		return result;
	// 	} else if (str === 'error') {
	// 		const result = [];
	// 		loggerMemo.map(elem => {
	// 			if (elem.type === 'error') {
	// 				result.push(elem);
	// 			}
	// 		});
	// 		return result;
	// 	} else if (str === 'log') {
	// 		const result = [];
	// 		loggerMemo.map(elem => {
	// 			if (elem.type === 'log') {
	// 				result.push(elem);
	// 			}
	// 		});
	// 		return result;
	// 	} else {
	// 		return loggerMemo;
	// 	}
	// }


//  result.sort((obj1, obj2) => obj2.dateTime.getTime() - obj1.dateTime.getTime());
// return result.sort((obj1, obj2) => new Date(obj2.dateTime).getTime() - new Date(obj1.dateTime).getTime());