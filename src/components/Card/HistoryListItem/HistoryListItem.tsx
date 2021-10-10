import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import Animated, { EasingNode } from "react-native-reanimated";

import { history } from "api";
import styles from "./HistoryListItem.styles";
import { DetailsList, ItemTitle } from "./HistoryListItem.helper";

interface Props {
	key: string;
	details: history.TransactionHistory;
}

const HistoryListItem: React.FC<Props> = (props) => {

	const { details } = props;

	const height = useRef(new Animated.Value(0)).current;
	let detailsListHeight = 130;

	if (details.Type === history.TransactionType.REDEEM){
		detailsListHeight = 85;
	}else if (details.Type === history.TransactionType.REWARD){
		detailsListHeight = 70;
	}else if (details.Type === history.TransactionType.TRANSFER){
		detailsListHeight = 120;
	}

	const [isExpanded, setIsExpanded] = useState(false);

	// to hide padding when collapsed
	const opacity = height.interpolate({
		inputRange: [0, detailsListHeight * 0.05, detailsListHeight],
		outputRange: [0, 1, 1],
	});

	useEffect(() => {
		Animated.timing(height, {
			toValue: isExpanded ? detailsListHeight : 0,
			duration: 300,
			easing: EasingNode.inOut(EasingNode.ease),
		}).start();
	}, [isExpanded]);

	function toggle() {
		setIsExpanded(!isExpanded);
	}

	return (
		<View style={styles.mainContainer}>
			<ItemTitle onPress={toggle} details={details} />
			<Animated.View style={[styles.content, { 
				height: height, 
				opacity: opacity 
			}]} >
				<DetailsList {...details} />
			</Animated.View>
		</View>
	);
};

export default HistoryListItem;
