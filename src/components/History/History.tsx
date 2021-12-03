import React from "react";
import { View } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

import {HistoryList, NoHistory, Props} from "./HistoryList";
import styles from "./History.styles";

const History: React.FC<Props> = (props) => {

	const { history, isFetched=true } = props;

	const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

	let historyComponent = <NoHistory />;
	if (history.length > 0) {
		historyComponent = <HistoryList history={history} />;
	}

	if (isFetched) {
		return historyComponent;
	} else {
		return (
			<View style={styles.wrapper} >
				<ShimmerPlaceholder
					visible={isFetched}
					style={styles.shimmer}
				/>
			</View>
		);
	}
	
};

export default History;
