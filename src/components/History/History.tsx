import React from "react";
import { View } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

import {HistoryList, NoHistory, Props} from "./HistoryList";
import styles from "./History.styles";

const History: React.FC<Props> = (props) => {

	const { history, isFetched } = props;

	const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
	const isLoaded = isFetched===undefined ? true : isFetched;

	let historyComponent = <NoHistory />;
	if (history.length > 0) {
		historyComponent = <HistoryList history={history} />;
	}

	return (
		<View style={styles.wrapper} >
			<ShimmerPlaceholder
				visible = {isLoaded}
				style = {styles.shimmer}
			>
				{isLoaded &&
					historyComponent
				}
			</ShimmerPlaceholder>
		</View>
	);
};

export default History;
