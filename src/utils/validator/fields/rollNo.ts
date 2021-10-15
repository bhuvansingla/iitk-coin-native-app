import { LENGTH } from "constant";

const rangeDifference = LENGTH.MAX.ROLL_NO - LENGTH.MIN.ROLL_NO;

function validate(rollNo: string): boolean {
	// must contain either 6 or 8 numbers
	// const regex = /^\d{6}$|^\d{8}$/;
	const regex = new RegExp(
		`^[0-9]{${LENGTH.MIN.ROLL_NO}}(?:[0-9]{${rangeDifference}})?$`
	);
	return regex.test(rollNo);
}

export default validate;
