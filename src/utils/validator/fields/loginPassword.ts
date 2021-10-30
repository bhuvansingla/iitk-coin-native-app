import { LENGTH } from "constant";

function validate(password: string): boolean {
	const exclude = new RegExp ("[\"',./:;<>]");
	const validLength = password.length >= LENGTH.MIN.PASSWORD && password.length <= LENGTH.MAX.PASSWORD;
	return validLength && !exclude.test(password);
}

export default validate;
