const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
	[...allStudentsList]
		.filter(name => !studentsForRetake.includes(name))
		.map(name => `Good job, ${name}`);


//Example

//input:
// const allStud = ['a', 'b', 'c', 'd'];
// const retakeStud = ['b', 'd'];

// getMessagesForBestStudents(allStud, retakeStud));

//output:
//['Good job, a', 'Good job, c']