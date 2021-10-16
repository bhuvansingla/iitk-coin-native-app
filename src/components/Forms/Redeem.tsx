import React from "react";
import { View } from "react-native";

import { TextInput, AmountInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS } from "constant";
import { validator } from "utils";

interface Props {
	setAmount: (amount: number) => void;
	setItem: (item: string) => void;
	onPressSend: () => void;
	errors?: typeof validator.forms.redeem.emptyError;
}

const RedeemForm: React.FC<Props> = (props) => {

	const { setItem, setAmount, onPressSend, errors } = props;

	const onChangeItem = (item: string) => {
		setItem(item);
	};

	const onChangeAmount = (amount: string) => {
		setAmount(Number(amount));
	};

	return (

		<View>

			<TextInput
				placeholder={LABELS.ITEM_NAME_PLACEHOLDER}
				title={LABELS.ITEM_NAME_FIELD_TITLE}
				onChangeText={onChangeItem}
				error={errors?.item}
			/>

			<AmountInput
				placeholder={LABELS.COINS_PLACEHOLDER}
				title={LABELS.COINS_INPUT_FIELD_TITLE}
				onChangeText={onChangeAmount}
				error={errors?.amount}
			/>

			<Button title={LABELS.REDEEM_BUTTON_TEXT} onPress={onPressSend} />

		</View>

	);
};

export default RedeemForm;
