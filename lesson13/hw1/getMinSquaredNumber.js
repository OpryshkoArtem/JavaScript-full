export default function getSquareAbs (arr) {
	if(!Array.isArray(arr) || arr.length === 0) {
		return null;
	}
	let minAbsNum = Math.abs(arr[0]);
	arr.forEach(elem => {
		if(Math.abs(elem) < minAbsNum) {
			console.log(elem);
			minAbsNum = Math.abs(elem);
		}
	})
	return minAbsNum * minAbsNum;
}


// for example
// console.log(getSquareAbs([-777, 3, -2, 6, 45, -20]));
// console.log(getSquareAbs('Petro'));
// console.log(getSquareAbs([]));