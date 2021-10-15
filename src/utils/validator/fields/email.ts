import { LENGTH } from "constant";

function validate(email: string): boolean {
	// must contain @iitk.ac.in
	const regex = new RegExp(
		`^[a-z0-9_]{${LENGTH.MIN.EMAIL},${LENGTH.MAX.EMAIL}}@iitk.ac.in$`
	);
	return regex.test(email);
}

export default validate;
