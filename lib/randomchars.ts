// const numbers = "0123456789";
// const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
// const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const arrayOfNumbers = numbers.split("");
// const arrayOfLowerCaseAlphabet = lowerCaseAlphabet.split("");
// const arrayOfUpperCaseAlphabet = upperCaseAlphabet.split("");

export default function createRandomChars(length: number) {
	if (length === undefined) {
		return;
	}

	let completeChars =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let arrayOfCompleteChars = completeChars.split("");

	let result: string = "";

	for (let i: number = 0; i < length; i++) {
		let randomNumber = Math.round(Math.random() * 60);

		result += arrayOfCompleteChars[randomNumber];
	}

	return result;
}
