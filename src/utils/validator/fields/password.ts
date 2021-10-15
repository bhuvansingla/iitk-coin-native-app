import { LENGTH } from "constant";

function validate(password: string): boolean {
	// atleast one number, one lowercase, one uppercase letter,
	// one special character, atleast 8 characters, and atmax 16 characters
	const regex = new RegExp(
		`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{${LENGTH.MIN.PASSWORD},${LENGTH.MAX.PASSWORD}}$`
	);
	return regex.test(password);
}

export default validate;
