import { LENGTH } from "constant";

function validate(remarks: string): boolean {
	// must contain words
	const regex = new RegExp(
		`^[a-zA-Z0-9 #?!@%&+*-_.,]{0,${LENGTH.MAX.REMARKS}}$`
	);
	return regex.test(remarks);
}

export default validate;
