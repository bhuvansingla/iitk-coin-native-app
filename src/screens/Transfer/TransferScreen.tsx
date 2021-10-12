import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";

import { AppState } from "redux-store/reducers";
import { setCurrentScreen, setCoins } from "redux-store/actions";
import { Text, WalletBalance, Transfer } from "components";
import TransferForm from "components/Forms/Transfer";
import { LABELS } from "constant";
import VerifyOtpForm from "components/Forms/VerifyOtp";
import { COLORS, FONT } from "styles";
import { ScreenType } from "screens/screen.types";

import styles from "../screen.styles";

const fontSize = FONT.SIZE.H2;
const fontAwesomeSize = fontSize * 1.3;

const TransferScreen: () => JSX.Element = () => {

	const enum TransferStage {
		FORM = "TRANSFER FORM",
		CONFIRM_DETAILS = "CONFIRM DETAILS",
		VERIFY_OTP = "VERIFY OTP",
		SUCCESS = "SUCCESS"
	}

	const dispatch = useDispatch();

	const initialcoins: number = useSelector((state: AppState) => state.user.coins);
	const [coin, setCoin] = useState<number>(initialcoins);

	const [transferStage, setTransferStage] = useState<TransferStage>(TransferStage.FORM);

	const [rollNo, setRollNo] = useState<string>("");
	const [name, setName] = useState<string>("");

	const [amount, setAmount] = useState<number>(0);
	const [tax, setTax] = useState<number>(0);

	const [remark, setRemark] = useState<string>("");
	const [otp, setOTP] = useState<string>("");
	const [txnID, setTxnID] = useState<string>("");

	const onPressForm = () => {
		// TODO verify rollno, amount, remarks
		console.log(rollNo, remark, amount);
		// TODO call api to get name and tax
		setName("Harshit Raj");
		setTax(1);
		setTransferStage(TransferStage.CONFIRM_DETAILS);
	};

	const onPressConfirmDetails = () => {
		console.log(rollNo, name, tax, amount, remark);
		// TODO request otp
		setTransferStage(TransferStage.VERIFY_OTP);
	};

	const onPressVerifyOtp = () => {
		console.log(otp);
		// TODO call api to validate transfer and get txnID
		setTxnID("AFK");
		setCoins(coin-amount);
		setCoin(coin-amount);
		setTransferStage(TransferStage.SUCCESS);
	};

	const onPressSuccess = () => {
		console.log("onPressSuccess");
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	const onPressBack = () => {
		console.log("back");
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	const Heading: JSX.Element = (
		<View style={styles.header}>
			<Ripple
				rippleDuration={360}
				rippleColor={COLORS.DARK_TEAL}
				rippleContainerBorderRadius={20}
				onPress={onPressBack}>
				<Ionicons name="arrow-back-outline" size={fontAwesomeSize} color={COLORS.BLACK} />
			</Ripple>
			<Text.Title semibold style={[styles.heading, { fontSize }]}>{LABELS.TRANSFER_FORM_TITLE}</Text.Title>
			<FontAwesome name="send" size={fontAwesomeSize} color={COLORS.BLACK} />
		</View>
	);

	return (
		<View style={styles.contentContainer}>
			{Heading}

			<WalletBalance coins={coin} />

			{transferStage === TransferStage.FORM &&
				<React.Fragment>

					<View style={styles.formContainer}>
						<TransferForm onPressSend={onPressForm} setAmount={setAmount} setRemark={setRemark} setRollNo={setRollNo} />
					</View>

				</React.Fragment>
			}
			{transferStage === TransferStage.CONFIRM_DETAILS &&
				<React.Fragment>

					<View style={styles.formContainer}>
						<Transfer.ConfirmDetails name={name} rollNo={rollNo} amount={amount} tax={tax} onPress={onPressConfirmDetails} />
					</View>

				</React.Fragment>
			}
			{transferStage === TransferStage.VERIFY_OTP &&
				<React.Fragment>

					<View style={styles.formContainer}>
						<VerifyOtpForm setOTP={setOTP} onPressSubmit={onPressVerifyOtp} />
					</View>

				</React.Fragment>
			}
			{transferStage === TransferStage.SUCCESS &&
				<React.Fragment>

					<View style={styles.formContainer}>
						<Transfer.TransferSuccess txnID={txnID} onPress={onPressSuccess} />
					</View>

				</React.Fragment>
			}
		</View>
	);
};

export default TransferScreen;
