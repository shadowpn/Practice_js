//конвертер валют 
const usdCurr = 28;
const eurCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}
// convert(500, usdCurr);
convert(500, eurCurr);
const res = convert(500, usdCurr);
promotion(res);

function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return;
	}
	console.log("Done");
}
test();

function doNothing() {};
console.log(doNothing() === undefined);


//Task

// Место для третьей задачи
function getMathResult(base, repeat) {
	if (typeof repeat !== "number" || repeat <= 0) {
		return base;
	}

	let result = " ";
	for (let i = 1; i <= repeat; i++) {
		result += base * i;
		if (i !== repeat) {
			result += "---";
		}
	}
	return result;
}
getMathResult(5, 3);
getMathResult(3, 10);
getMathResult(10, 5);
getMathResult(10, "5");
getMathResult(10, 0);
getMathResult(20, -5);

function first() {
	setTimeout(function() {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

function learnJS(lang, callback) {
   console.log(	`Я учу: ${lang}`);
   callback();
}

function done() {
	console.log("Я прошел этот урок")
}

learnJS("JavaScript", done);




