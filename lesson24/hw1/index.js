//вираховуємо різницю між датами, проводимо її по модулю і переводимо в секунди

function getDiff(startDate, endDate) {
  const difference = Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime()) / 1000;
  const diffInDays = Math.floor(difference / 60 / 60 / 24);
	console.log(difference);
  const diffInHours = Math.floor(difference / 60 / 60 % 24);
	console.log(difference);
  const diffInMinutes = Math.floor(difference / 60 % 60);
	console.log(difference);
  const diffInSeconds = Math.floor(difference % 60);
	console.log(difference);

  return `${diffInDays}d ${diffInHours}h ${diffInMinutes}m ${diffInSeconds}s`;
}

console.log(getDiff(new Date(2019, 11, 31, 09, 24, 15), new Date(2021, 09, 31, 12, 30, 0)));
