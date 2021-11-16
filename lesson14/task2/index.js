'use strict'

const createMessenger = () => {
	let message = 'Just learn it';
	let sender = 'Gromcode';

	function sendMessage (name) {

		console.log(`${name}, ${message}! Your ${sender}`);
	}
	function setMessage (text) {
		message = text;
	}
	function setSender (text) {
		sender = text;
	}

	return{
		sendMessage,
		setMessage,
		setSender,
	}
}
export default createMessenger;

// export default function createMessenger() {...};

// for example
// const messenger = createMessenger();
// messenger.sendMessage('Bob');
// messenger.setMessage('Good job');
// messenger.sendMessage('Bob');









// let message = 'Just learn it';

// export function sendMessage (name) {
// 	const sender = 'Your Gromcode';
// 	console.log(`${name}, ${message}! ${sender}`);
// }

// export function setMessage (text) {
// 	message = text;
// }