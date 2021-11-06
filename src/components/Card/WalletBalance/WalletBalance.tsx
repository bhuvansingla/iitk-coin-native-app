import React from "react";
import { View } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

import Text from "components/Text";
import Image from "components/SVGImage";
import { LABELS } from "constant";
import { FONT } from "styles";

import styles from "./WalletBalance.styles";

interface Props {
	coins: number;
	isFetched?: boolean;
}

const WalletBalance: React.FC<Props> = (props) => {

	const { coins, isFetched } = props;

	const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
	const isLoaded = isFetched === undefined ? true : isFetched;

	return (
		<View style={styles.wrapper}>
			<ShimmerPlaceholder
				visible = {isLoaded}
				style = {styles.shimmer}
			>
				{isLoaded &&
					<View style={styles.container}>
						<View style={styles.left}>
							<Image name="CoinLogo" />
						</View>
						<View style={styles.right}>
							<Text.Title semibold white style={{ fontSize: FONT.SIZE.H2 / 2 }} >{LABELS.YOU_HAVE}</Text.Title>
							<View style={styles.row}>
								<Text.Title bold white style={styles.shadowCoinCount} >{coins}</Text.Title>
								<View style={styles.coinMargin}>
									<Text.Title semibold white style={styles.shadow}>{coins == 1 ? LABELS.COINS : LABELS.COIN}</Text.Title>
								</View>
							</View>
						</View>
					</View>
				}
			</ShimmerPlaceholder>
		</View>
	);
};

export default WalletBalance;
