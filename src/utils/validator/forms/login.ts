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

export default { validate, emptyError };
