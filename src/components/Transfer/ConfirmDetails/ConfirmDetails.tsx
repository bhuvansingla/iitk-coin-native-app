import React from "react";
import { View } from "react-native";

import Text from "components/Text";
import Button from "components/Button";
import { LABELS } from "constant";

import styles from "./ConfirmDetails.styles";
import ConfirmDetailsItem from "./ConfirmDetailsItem";

interface Props {
	name: string;
	rollNo: string;
	amount: number;
	tax: number;
	isClicked?: boolean;
	onPressConfirmTransfer: () => void;
}

const ConfirmDetails: React.FC<Props> = (props) => {
	const { name, rollNo, amount, tax, onPressConfirmTransfer, isClicked } = props;
	const totalAmount = amount - tax;

	const label = isClicked ? LABELS.CONFIRM_DETAILS_BUTTON_TEXT_CLICKED : LABELS.TRANSFER_BUTTON;

	return (
		<View style={styles.container}>
			<Text.Heading title={LABELS.TRANSFER_TITLE} />
			
			<ConfirmDetailsItem key={LABELS.TRANSFER_TO} label={LABELS.TRANSFER_TO} value={name} rollNo={rollNo} />
			
			<View style={styles.amountTaxContainer}>
				<View style={styles.halfBox}>
					<ConfirmDetailsItem key={LABELS.TRANSFER_AMOUNT} label={LABELS.TRANSFER_AMOUNT} value={amount} />
				</View>
				<View style={styles.halfBox}>
					<ConfirmDetailsItem key={LABELS.TRANSFER_TAX} label={LABELS.TRANSFER_TAX} value={tax} />
				</View>
			</View>

			<View>
				<ConfirmDetailsItem key={LABELS.TRANSFER_FINAL_AMOUNT} label={LABELS.TRANSFER_FINAL_AMOUNT} value={totalAmount} />
			</View>
			
			<Button title={label} onPress={onPressConfirmTransfer} disabled={isClicked} />
		
		</View>
	);
};

export default ConfirmDetails;
