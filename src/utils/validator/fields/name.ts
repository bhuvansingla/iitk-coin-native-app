import { LENGTH } from "constant";

function validate(name: string): boolean {
	// must contain only alphabets and space
	const regex = new RegExp(
		`^[a-zA-Z ]{${LENGTH.MIN.NAME},${LENGTH.MAX.NAME}}$`
	);
	return regex.test(name);
}

export default validate;
