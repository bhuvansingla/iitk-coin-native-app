import React from "react";
import { View } from "react-native";
import { TextInput, NumericInput, Button } from "components";
import { LABELS, LENGTH } from "constant";
import Image from "components/SVGImage";
import { StyleSheet } from "react-native";

interface Props {
	setRemark: (password: string) => void;
	setRollno: (rollno: string) => void;
	setAmount: (amount: string) => void;
	onPressSend: () => void;
}

const TransferForm: React.FC<Props> = (props) => {

	const { setRemark, setRollno: setRollno, setAmount, onPressSend } = props;

	const onChangeRollno = (rollno: string) => {
		if (rollno.length < LENGTH.ROLL_NO) {
			setRollno(rollno);
		}
	};

	const onChangeAmount = (amount: string) => {
		setAmount(amount);
	};

	const onChangeRemark = (remark: string) => {
		if (remark.length < LENGTH.REMARKS) {
			setRemark(remark);
		}
	};
	
	return (

		<View>
			
			<TextInput
				placeholder={LABELS.ROLL_NO_PLACEHOLDER}
				title={LABELS.ROLL_NO_INPUT_FIELD_TITLE}
				onChangeText={onChangeRollno}
			/>

			<View style={styles.amountContainer}>	 
				<NumericInput
					placeholder={LABELS.COINS_PLACEHOLDER}
					title={LABELS.COINS_INPUT_FIELD_TITLE}
					onChangeText={onChangeAmount}
				/>      
				<Image name = "CoinLogo" style={styles.imageStyle} />
			</View>

			<TextInput 
				placeholder={LABELS.REMARK_PLACEHOLDER}
				title={LABELS.REMARKS_INPUT_FIELD_TITLE}
				onChangeText={onChangeRemark}
			/>

			<Button title= {LABELS.TRANSFER_BUTTON_TEXT} onPress={() => onPressSend()}/>

		</View>	

	);
};

const styles =StyleSheet.create({
	amountContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},

	imageStyle: {
		height: "40%",
		width: "40%",
		marginLeft: "-28%",
		marginTop: "6%",
	},
});

export default TransferForm;
