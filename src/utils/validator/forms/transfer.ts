import { LABELS } from "constant";

import fields from "../fields";

interface Errors {
	rollNo: string;
	amount: string;
	remarks: string;
}

const emptyError: Errors = {
	rollNo: "",
	amount: "",
	remarks: "",
};

function validate(rollNo: string, remarks: string, amount: number, availableCoins: number): Errors {
	const error: Errors = { ...emptyError };

	if (!fields.validateRollNo(rollNo)) {
		error.rollNo = LABELS.VALIDATION_ROLLNO_INVALID;
	}

	if (!fields.validateRemarks(remarks)) {
		error.remarks = LABELS.VALIDATION_REMARKS_INVALID;
	}

	if (!fields.validateAmount(amount, availableCoins)) {
		error.amount = LABELS.VALIDATION_AMOUNT_INVALID;
	}

	return error;
}

function isError(error: Errors): boolean {
	let iserror = false;
	iserror = iserror || error.rollNo !== emptyError.rollNo;
	iserror = iserror || error.amount !== emptyError.amount;
	iserror = iserror || error.remarks !== emptyError.remarks;
	return iserror;
}

export default { validate, isError, emptyError };
