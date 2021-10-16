import { LABELS } from "constant";

import fields from "../fields";

interface Errors {
	amount: string;
	item: string;
}

const emptyError: Errors = {
	amount: "",
	item: "",
};

function validate(item: string, amount: number, availableCoins: number): Errors {
	const error: Errors = { ...emptyError };

	if (!fields.validateItem(item)) {
		error.item = LABELS.VALIDATION_ITEM_INVALID;
	}

	if (!fields.validateAmount(amount, availableCoins)) {
		error.amount = LABELS.VALIDATION_AMOUNT_INVALID;
	}

	return error;
}

function isError(error: Errors): boolean {
	let iserror = false;
	iserror = iserror || error.item !== emptyError.item;
	iserror = iserror || error.amount !== emptyError.amount;
	return iserror;
}

export default { validate, isError, emptyError };
