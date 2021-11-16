'use strict'

export function createLogger() {
	let loggerMemo = [];

	function warn(str){
		let obj = {
			message: str,
			dateTime: new Date(),
			type: 'warn',
		}
		loggerMemo.push(obj);
	}
	function error(str){
		let obj = {
			message: str,
			dateTime: new Date(),
			type: 'error',
		}
		loggerMemo.push(obj);
	}
	function log(str){
		let obj = {
			message: str,
			dateTime: new Date(),
			type: 'log',
		}
		loggerMemo.push(obj);
	}

	function getRecords(str) {
		let result = [];
		if(typeof str === 'string' && str.length < 1) {
			return result;
		}
		switch (str) {
			case 'warn':
				result = loggerMemo.filter(elem => elem.type === 'warn');
				break;
			case 'error':
				result = loggerMemo.filter(elem => elem.type === 'error');
				break;
			case 'log':
				result = loggerMemo.filter(elem => elem.type === 'log');
				break;
			default:
				result = loggerMemo;
		}
		return result.sort((obj1, obj2) => obj2.dateTime.getTime() - obj1.dateTime.getTime());
	}

	return {
		warn,
		error,
		log,
		getRecords,
	}
}


// test ===================================
const logger = createLogger();
logger.log('User logged in1');
logger.log('User logged in2');
logger.log('User logged in3');
logger.log('User logged in4');
logger.log('User logged in5');
logger.warn('User try to restricted page');
// logger.log('User logged out');
logger.error('Unexpected error on the site');
// logger.log('User logged in');
logger.error('');
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords(''));
