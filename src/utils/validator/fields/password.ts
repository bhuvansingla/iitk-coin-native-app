import { LENGTH } from "constant";

function validate(password: string): boolean {
	// atleast one number, one lowercase, one uppercase letter,
	// one special character, atleast 8 characters, and atmax 16 characters
	const regex = new RegExp(
		`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&+*-_]).{${LENGTH.MIN.PASSWORD},${LENGTH.MAX.PASSWORD}}$`
	);
	const exclude = new RegExp ("[\"',./:;<>]");
	return regex.test(password) && !exclude.test(password);
}

export default validate;
