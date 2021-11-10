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
	let detailsListHeight = 140;

	if (details.Type === history.TransactionType.REDEEM){
		detailsListHeight = 100;
	}else if (details.Type === history.TransactionType.REWARD){
		detailsListHeight = 85;
	}else if (details.Type === history.TransactionType.TRANSFER){
		detailsListHeight = 135;
	}

	const [isExpanded, setIsExpanded] = useState(false);

	// to hide padding when collapsed
	const opacity = height.interpolate({
		inputRange: [0, detailsListHeight * 0.3, detailsListHeight],
		outputRange: [0, 0.8, 1],
	});

	useEffect(() => {
		Animated.timing(height, {
			toValue: isExpanded ? detailsListHeight : 0,
			duration: 300,
			easing: EasingNode.inOut(EasingNode.ease),
		}).start();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isExpanded]);

	function toggle() {
		setIsExpanded(!isExpanded);
	}

	return (
		<View style={styles.mainContainer}>
			<ItemTitle onPress={toggle} details={details} isExpanded={isExpanded} />
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
