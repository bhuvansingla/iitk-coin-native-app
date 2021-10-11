import React from "react";
import { View } from "react-native";

import { Text, Image } from "components";
import { LABELS } from "constant";
import { FONT } from "styles";

import styles from "./WalletBalance.styles";

interface Props {
    coins: number;
}

const WalletBalance: React.FC<Props> = ({ coins = 0 }) => {
	return (
		<View style={{alignItems: "center"}}>
			<View style={styles.container}>
				<View style={styles.left}>
					<Image name="CoinLogo" />
				</View>
				<View style={styles.right}>
					<Text.Title semibold white style={{fontSize:FONT.SIZE.H2/2}} >{LABELS.YOU_HAVE}</Text.Title>
					<View style={styles.row}>
						<Text.Title bold white style={styles.shadowCoinCount} >{coins}</Text.Title>
						<View style={ styles.coinMargin }>
							<Text.Title semibold white style={styles.shadow}> {coins > 1 ? LABELS.COINS : LABELS.COIN}</Text.Title>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default WalletBalance;
