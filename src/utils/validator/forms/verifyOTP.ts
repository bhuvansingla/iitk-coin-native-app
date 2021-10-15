import { LABELS } from "constant";

import fields from "../fields";

interface Errors {
	otp: string;
}

const emptyError: Errors = {
	otp: "",
};

function validate(otp: string | number): Errors {
	const error: Errors = { ...emptyError };

	if (!fields.validateOTP(otp)) {
		error.otp = LABELS.VALIDATION_OTP_INVALID;
	}

	return error;
}

function isError(error: Errors): boolean {
  let iserror = false;
  iserror = iserror || error.otp !== emptyError.otp;
  return iserror;
}

export default { validate, isError, emptyError };
