import { LABELS } from "constant";

import { Errors, fieldValidators } from "..";

function loginFormValidator(rollNo:string, password: string): Errors.LoginFromErrors {
	const errors: Errors.LoginFromErrors = {
		rollNo: "",
		password: ""
	};

	if (!fieldValidators.rollNoValidator(rollNo)) {
		errors.rollNo = LABELS.VALIDATION_ROLLNO;
	}

	if (!fieldValidators.passwordValidator(password)) {
		errors.password = LABELS.VALIDATION_PASSWORD;
	}
	
	return errors;
}

export default loginFormValidator;
