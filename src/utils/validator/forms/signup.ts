import { LABELS } from "constant";

import fields from "../fields";

interface Errors {
	name: string;
	rollNo: string;
	password: string;
}

const emptyError: Errors = {
	name: "",
	rollNo: "",
	password: "",
};

function validate(name: string, rollNo: string, password: string): Errors {
	const error: Errors = { ...emptyError };

	if (!fields.validateName(name)) {
		error.name = LABELS.VALIDATION_NAME_INVALID;
	}

	if (!fields.validateRollNo(rollNo)) {
		error.rollNo = LABELS.VALIDATION_ROLLNO_INVALID;
	}

	if (!fields.validateSignupPassword(password)) {
		error.password = LABELS.VALIDATION_PASSWORD_INVALID;
	}

	return error;
}

function isError(error: Errors): boolean {
	let iserror = false;
	iserror = iserror || error.name !== emptyError.name;
	iserror = iserror || error.rollNo !== emptyError.rollNo;
	iserror = iserror || error.password !== emptyError.password;
	return iserror;
}

export default { validate, isError, emptyError };
