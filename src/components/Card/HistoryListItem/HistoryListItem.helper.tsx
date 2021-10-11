import React from "react";
import { View } from "react-native";
import Ripple from "react-native-material-ripple";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { AppState } from "redux-store/reducers";
import { Text } from "components";
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
}

const fontSize = FONT.SIZE.H3;
type ItemType = "Sent" | "Received" | "Redeem" | "Reward" | undefined;

const DetailsListItem: React.FC<DetailsListItemProps> = (props) => {
	const { title, content } = props;

	const TextStyle = {
		white: true,
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
				{title}:{" "}
			</Text.Title>
			{content}
		</Text.Title>
	);
};

const DetailsList: React.FC<history.TransactionHistory> = (props) => {

	const details: JSX.Element[] = [];

	const { Type, TimeStamp, TxnID, Amount, Remarks } = props;

	const timestamp = new Date(TimeStamp * 1000);
	details.push(<DetailsListItem key="timestamp" title="Time Stamp" content={timestamp.toDateString()} />);
	details.push(<DetailsListItem key="TxnID" title="Transaction ID" content={TxnID} />);

	if (Type === history.TransactionType.TRANSFER) {
		const { Tax, FromRollNo, ToRollNo } = props;
		details.push(<DetailsListItem key={LABELS.HISTORY_FromRollNo} title={LABELS.HISTORY_FromRollNo} content={FromRollNo} />);
		details.push(<DetailsListItem key={LABELS.HISTORY_ToRollNo} title={LABELS.HISTORY_ToRollNo} content={ToRollNo} />);
		details.push(<DetailsListItem key={LABELS.HISTORY_Transfer_Amount} title={LABELS.HISTORY_Transfer_Amount} content={Amount} />);
		details.push(<DetailsListItem key={LABELS.HISTORY_Tax} title={LABELS.HISTORY_Tax} content={Tax} />);
	}

	if (Type === history.TransactionType.REDEEM) {
		const { Status } = props;
		details.push(<DetailsListItem key={LABELS.HISTORY_Redeem_Amount} title={LABELS.HISTORY_Redeem_Amount} content={Amount} />);
		details.push(<DetailsListItem key={LABELS.HISTORY_Status} title={LABELS.HISTORY_Status} content={Status} />);
	}

	if (Type === history.TransactionType.REWARD) {
		details.push(<DetailsListItem key={LABELS.HISTORY_Reward_Amount} title={LABELS.HISTORY_Reward_Amount} content={Amount} />);
	}
	
	details.push(<DetailsListItem key={LABELS.HISTORY_Remarks} title={LABELS.HISTORY_Remarks} content={Remarks} />);

	return (
		<View style={styles.detailsContainer}>
			{details}
		</View>
	);
};

const ItemTitle: React.FC<ItemTitleProps> = (props) => {

	const userRollNo: string = useSelector((state: AppState) => state.user.rollNo);

	const { onPress, details } = props;

	let type: ItemType = undefined;
	let image: JSX.Element = <View />;
	let amount = details.Amount;

	if (details.Type === history.TransactionType.REDEEM) {
		type = "Redeem";
		if(details.Status != history.RedeemStatus.APPROVED) {
			amount = 0;
		}
		image = <AntDesign name="gift" size={fontSize * 1.7} color="white" />;
	} else if (details.Type === history.TransactionType.REWARD) {
		type = "Reward";
		image = <FontAwesome name="trophy" size={fontSize * 1.7} color="black" />;
	} else if (details.Type === history.TransactionType.TRANSFER) {
		if (details.FromRollNo == userRollNo) {
			type = "Sent";
			image = <FontAwesome name="send" size={fontSize * 1.7} color="white" />;
		} else if (details.ToRollNo == userRollNo) {
			type = "Received";
			amount = amount - details.Tax;
			image = <FontAwesome name="send" size={fontSize * 1.7} color="black" />;
		}
	}

	const credited = type === "Reward" || type === "Received";

	return (
		<View style={styles.rippleWrapper}>
			<Ripple
				rippleOpacity={0.25}
				rippleSize={3500}
				rippleColor={COLORS.GREY}
				rippleDuration={1300}
				rippleContainerBorderRadius={20}
				onPress={onPress}
				style={styles.ripple}
			>
				<View style={styles.container}>
					<View style={[styles.left, {
						backgroundColor: credited ? COLORS.GREEN_BG : COLORS.RED,
						height: fontSize * 3,
						width: fontSize * 3,
						borderRadius: fontSize * 1.5,
					}]}>
						{image}
					</View>
					<View style={styles.text}>
						<Text.Title bold style={{ fontSize }}> {type} </Text.Title>
					</View>
					<View style={styles.right}>
						<Text.Title bold style={{ opacity: 0.9, color: credited ? COLORS.GREEN : COLORS.RED, fontSize }}>
							{credited ? "+" : "-"}{amount}
						</Text.Title>
					</View>
				</View>
			</Ripple>
		</View>
	);
};

export { DetailsList, ItemTitle };
