const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6

// b) How many function calls are there?
// 0

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It's a remainder operator that returns a left over number from division

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The film remaining seconds subtract from the film duration and then divide by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The film elapsed time, so the constant could be called `filmElapsedTime`

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It seems to work for any number including 0, negative and decimal numbers