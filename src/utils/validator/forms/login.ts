import { LABELS } from "constant";

import fields from "../fields";

interface Errors {
	rollNo: string;
	password: string;
}

const emptyError: Errors = {
	rollNo: "",
	password: "",
};

function validate(rollNo: string, password: string): Errors {

	const error: Errors = {...emptyError};

	if (!fields.validateRollNo(rollNo)) {
		error.rollNo = LABELS.VALIDATION_ROLLNO_INVALID;
	}

	if (!fields.validatePassword(password)) {
		error.password = LABELS.VALIDATION_PASSWORD_INVALID;
	}

	return error;
}

function isError(error: Errors): boolean {
	let iserror = false;
	iserror = iserror || error.rollNo !== emptyError.rollNo;
	iserror = iserror || error.password !== emptyError.password;
	return iserror;
}

export default { validate, isError, emptyError };
