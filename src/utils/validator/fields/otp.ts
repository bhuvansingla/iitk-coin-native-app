import { LENGTH } from "constant";

function validate(otp: string | number): boolean {
	// must contain only numbers
	const regex = new RegExp(`^[0-9]{${LENGTH.OTP}}$`);
	return regex.test(String(otp));
}

export default validate;
