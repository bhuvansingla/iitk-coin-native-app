import React from "react";
import { View } from "react-native";
import Ripple from "react-native-material-ripple";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { AppState } from "redux-store/reducers";
import Text from "components/Text";
import { COLORS, FONT } from "styles";
import { history } from "api";
import { LABELS } from "constant";

import styles from "./HistoryListItem.styles";

interface DetailsListItemProps {
	key: string;
	title: string;
	content: string | number;
}

interface ItemTitleProps {
	onPress: () => void;
	details: history.TransactionHistory;
	isExpanded: boolean;
}

const fontSize = FONT.SIZE.H3;
const fontAwesomeSize = fontSize * 1.3;
type ItemType = "Sent" | "Received" | "Redeem" | "Reward" | undefined;

const DetailsListItem: React.FC<DetailsListItemProps> = (props) => {
	const { title, content } = props;

	const TextStyle = {
		style: {
			fontSize: 12,
		},
	};

	const titleTextStyle = {
		...TextStyle,
		bold: true,
	};

	return (
		<Text.Title {...TextStyle}>
			<Text.Title {...titleTextStyle}>
				{title}{LABELS.COLON}{LABELS.SPACE}
			</Text.Title>
			{content}
		</Text.Title>
	);
};

const DetailsList: React.FC<history.TransactionHistory> = (props) => {

	const details: JSX.Element[] = [];

	const { Type, TimeStamp, TxnID, Amount, Remarks } = props;

	const timestamp = new Date(TimeStamp * 1000);
	details.push(<DetailsListItem key={LABELS.HISTORY_TIMESTAMP} title={LABELS.HISTORY_TIMESTAMP} content={timestamp.toDateString()} />);
	details.push(<DetailsListItem key={LABELS.HISTORY_TXNID} title={LABELS.HISTORY_TXNID} content={TxnID} />);

	if (Type === history.TransactionType.TRANSFER) {
		const { Tax, FromRollNo, ToRollNo } = props;
		details.push(<DetailsListItem key={LABELS.HISTORY_FROMROLLNO} title={LABELS.HISTORY_FROMROLLNO} content={FromRollNo} />);
		details.push(<DetailsListItem key={LABELS.HISTORY_TOROLLNO} title={LABELS.HISTORY_TOROLLNO} content={ToRollNo} />);
		details.push(<DetailsListItem key={LABELS.HISTORY_TRANSFER_AMOUNT} title={LABELS.HISTORY_TRANSFER_AMOUNT} content={Amount} />);
		details.push(<DetailsListItem key={LABELS.HISTORY_TAX} title={LABELS.HISTORY_TAX} content={Tax} />);
	}

	if (Type === history.TransactionType.REDEEM) {
		const { Status } = props;
		details.push(<DetailsListItem key={LABELS.HISTORY_REDEEM_AMOUNT} title={LABELS.HISTORY_REDEEM_AMOUNT} content={Amount} />);
		details.push(<DetailsListItem key={LABELS.HISTORY_STATUS} title={LABELS.HISTORY_STATUS} content={Status} />);
	}

	if (Type === history.TransactionType.REWARD) {
		details.push(<DetailsListItem key={LABELS.HISTORY_REWARD_AMOUNT} title={LABELS.HISTORY_REWARD_AMOUNT} content={Amount} />);
	}

	details.push(<DetailsListItem key={LABELS.HISTORY_REMARKS} title={LABELS.HISTORY_REMARKS} content={Remarks} />);

	return (
		<View style={styles.detailsContainer}>
			{details}
		</View>
	);
};

const ItemTitle: React.FC<ItemTitleProps> = (props) => {

	const userRollNo: string = useSelector((state: AppState) => state.user.rollNo);

	const { onPress, details, isExpanded } = props;

	let type: ItemType = undefined;
	let image: JSX.Element = <View />;
	let amount = details.Amount;
	let neutral = false;

	if (details.Type === history.TransactionType.REDEEM) {
		type = "Redeem";
		if (details.Status != history.RedeemStatus.APPROVED) {
			neutral = true;
		}
		image = <AntDesign name="gift" size={fontAwesomeSize} color={COLORS.BLUE} />;
	} else if (details.Type === history.TransactionType.REWARD) {
		type = "Reward";
		image = <FontAwesome name="trophy" size={fontAwesomeSize} color={COLORS.BLUE} />;
	} else if (details.Type === history.TransactionType.TRANSFER) {
		if (details.FromRollNo == userRollNo) {
			type = "Sent";
			image = <FontAwesome name="send" size={fontAwesomeSize*0.8} color={COLORS.BLUE} />;
		} else if (details.ToRollNo == userRollNo) {
			type = "Received";
			amount = amount - details.Tax;
			image = <FontAwesome name="send" size={fontAwesomeSize*0.8} color={COLORS.BLUE} />;
		}
	}

	const credited = type === "Reward" || type === "Received";

	const line = {
		borderBottomColor: COLORS.GREY,
		borderBottomWidth: 1,
	};

	const textContainerStyle = {
		opacity: 0.9,
		color: credited ? COLORS.GREEN : (neutral? COLORS.DARK_YELLOW : COLORS.RED), fontSize
	};

	return (
		<View style={styles.rippleWrapper}>
			<Ripple
				rippleOpacity={0.25}
				rippleSize={3500}
				rippleColor={COLORS.GREY}
				rippleDuration={1300}
				onPress={onPress}
				style={[styles.ripple, line]}
			>
				<View style={styles.container}>
					<View style={styles.left}>
						{image}
					</View>
					<View style={styles.text}>
						<Text.Title bold style={{ fontSize }}>
							{(type === "Reward" || type === "Redeem") ? (LABELS.SPACE) : (LABELS.SPACE + LABELS.SPACE)}{type}
						</Text.Title>
					</View>
					<View style={styles.right}>
						<Text.Title bold style={textContainerStyle}>
							{credited ? LABELS.HISTORY_PLUS : (neutral ? LABELS.SPACE : LABELS.HISTORY_MINUS)}{amount}
						</Text.Title>
					</View>
				</View>

				<View style={styles.footer}>
					<Text.Title small>{isExpanded? LABELS.HISTORY_HIDE_DETAILS : LABELS.HISTORY_SHOW_DETAILS}</Text.Title>
				</View>
			</Ripple>
		</View>
	);
};

export { DetailsList, ItemTitle };
