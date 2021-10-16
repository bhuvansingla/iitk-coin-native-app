import React from "react";
import { View } from "react-native";

import { TextInput, AmountInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS } from "constant";
import { validator } from "utils";

interface Props {
	setRemark: (remark: string) => void;
	setRollNo: (rollNo: string) => void;
	setAmount: (amount: number) => void;
	onPressSend: () => void;
	errors?: typeof validator.forms.transfer.emptyError;
}

const TransferForm: React.FC<Props> = (props) => {

	const { setRemark, setRollNo, setAmount, onPressSend, errors } = props;

	const onChangeRollNo = (rollNo: string) => {
		setRollNo(rollNo);
	};

	const onChangeAmount = (amount: string) => {
		setAmount(Number(amount));
	};

	const onChangeRemark = (remark: string) => {
		setRemark(remark);
	};

	return (

		<View>

			<TextInput numeric
				placeholder={LABELS.ROLL_NO_PLACEHOLDER}
				title={LABELS.ROLL_NO_INPUT_FIELD_TITLE}
				onChangeText={onChangeRollNo}
				error={errors?.rollNo}
			/>

			<AmountInput
				placeholder={LABELS.COINS_PLACEHOLDER}
				title={LABELS.COINS_INPUT_FIELD_TITLE}
				onChangeText={onChangeAmount}
				error={errors?.amount}
			/>

			<TextInput
				placeholder={LABELS.REMARK_PLACEHOLDER}
				title={LABELS.REMARKS_INPUT_FIELD_TITLE}
				onChangeText={onChangeRemark}
				error={errors?.remarks}
			/>

			<Button title={LABELS.TRANSFER_BUTTON_TEXT} onPress={onPressSend} />

		</View>

	);
};

export default TransferForm;
