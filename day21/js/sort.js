

/*
SORT FUNCTION
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/

// arr = [5, 3, 7, 10 ....]

const numberSortASC = (arr) => {
	//5,3 -> 3,5
	//7,10 -> 7,10
	return arr.sort((a, b) => a - b);
};

const numberSortDESC = (arr) => {
	//5,3 ->  5,3
	//7,10 -> 10,7
	return arr.sort((a, b) => b - a);
};

const stringSortASC = (arr) => {
	return arr.sort((a, b) => a.localeCompare(b));
};

const stringSortDESC = (arr) => {
	return arr.sort((a, b) => b.localeCompare(a));
};

const randomMix = (arr) => {
	console.log(Math.random() - 0.5);

	return arr.sort(() => Math.random() - 0.5);
};

export {
	numberSortASC,
	numberSortDESC,
	stringSortASC,
	stringSortDESC,
	randomMix,
};