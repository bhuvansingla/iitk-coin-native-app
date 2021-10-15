import { LENGTH } from "constant";

function validate(remarks: string): boolean {
	// must contain words
	const regex = new RegExp(
		`^[a-zA-Z0-9 ]{,${LENGTH.MAX.REMARK}}$`
	);
	return regex.test(remarks);
}

export default validate;
