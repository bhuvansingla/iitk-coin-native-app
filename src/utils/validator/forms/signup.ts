import { LABELS } from "constant";

import fields from "../fields";

interface Errors {
	name: string;
	rollNo: string;
	password: string;
	confirmPassword: string;
}

const emptyError: Errors = {
	name: "",
	rollNo: "",
	password: "",
	confirmPassword: "",
};

function validate(name: string, rollNo: string, password: string, confirmPassword: string,): Errors {
	const error: Errors = { ...emptyError };

	if (!fields.validateName(name)) {
		error.name = LABELS.VALIDATION_NAME_INVALID;
	}

	if (!fields.validateRollNo(rollNo)) {
		error.rollNo = LABELS.VALIDATION_ROLLNO_INVALID;
	}

	if (confirmPassword != password) {
		error.confirmPassword = LABELS.VALDATION_PASSWORD_MISMATCH;
		return error;
	}

	if (!fields.validatePassword(password)) {
		error.password = LABELS.VALIDATION_PASSWORD_INVALID;
	}

	return error;
}

function isError(error: Errors): boolean {
	let iserror = false;
	iserror = iserror || error.name !== emptyError.name;
	iserror = iserror || error.rollNo !== emptyError.rollNo;
	iserror = iserror || error.password !== emptyError.password;
	iserror = iserror || error.confirmPassword !== emptyError.confirmPassword;
	return iserror;
}

export default { validate, isError, emptyError };
