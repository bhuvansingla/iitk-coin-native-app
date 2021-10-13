import React from "react";
import { View } from "react-native";

import Text from "components/Text";
import Button from "components/Button";
import { LABELS } from "constant";

import styles from "./ConfirmDetails.styles";
import DetailsListItem from "./ConfirmDetailsItem";

interface Props {
	name: string;
	rollNo: string;
	amount: number;
	tax: number;
	onPressConfirmTransfer: () => void;
}

const ConfirmDetails: React.FC<Props> = (props) => {
	const { name, rollNo, amount, tax, onPressConfirmTransfer } = props;
	const totalAmount = amount - tax;

	return (
		<View style={styles.container}>
			<Text.Heading title={LABELS.TRANSFER_TITLE} />
			
			<DetailsListItem key={LABELS.TRANSFER_TO} label={LABELS.TRANSFER_TO} value={name} rollNo={rollNo} />
			
			<View style={styles.amountTaxContainer}>
				<View style={styles.halfBox}>
					<DetailsListItem key={LABELS.TRANSFER_AMOUNT} label={LABELS.TRANSFER_AMOUNT} value={amount} />
				</View>
				<View style={styles.halfBox}>
					<DetailsListItem key={LABELS.TRANSFER_TAX} label={LABELS.TRANSFER_TAX} value={tax} />
				</View>
			</View>

			<View>
				<DetailsListItem key={LABELS.TRANSFER_FINAL_AMOUNT} label={LABELS.TRANSFER_FINAL_AMOUNT} value={totalAmount} />
			</View>
			
			<Button title={LABELS.TRANSFER_BUTTON} onPress={onPressConfirmTransfer} />
		
		</View>
	);
};

export default ConfirmDetails;
