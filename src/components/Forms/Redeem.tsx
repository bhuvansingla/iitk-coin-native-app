import React from "react";
import { View, StyleSheet } from "react-native";

import { TextInput, NumericInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS } from "constant";
import Image from "components/SVGImage";
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

			<View style={styles.amountContainer}>
				<NumericInput
					placeholder={LABELS.COINS_PLACEHOLDER}
					title={LABELS.COINS_INPUT_FIELD_TITLE}
					onChangeText={onChangeAmount}
					error={errors?.amount}
				/>
				<Image name="CoinLogo" style={styles.imageStyle} />
			</View>

			<Button title={LABELS.REDEEM_BUTTON_TEXT} onPress={onPressSend} />

		</View>

	);
};

const styles = StyleSheet.create({
	amountContainer: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
	},

	imageStyle: {
		height: "40%",
		marginLeft: "-28%",
		marginTop: "6%",
		width: "40%",
	},
});

export default RedeemForm;
