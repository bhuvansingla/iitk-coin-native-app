import React from "react";
import { Text, Image } from "components";
import { View } from "react-native";
import styles from "./Coin.styles";

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
					<Text.Title semibold white style={{fontSize:12}} >You have</Text.Title>
					<View style={styles.row}>
						<Text.Title bold white style={styles.shadowCoinCount} >{coins}</Text.Title>
						<View style={ styles.coinMargin }>
							<Text.Title semibold white style={styles.shadow}> coin{coins > 1 ? "s" : ""}</Text.Title>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default WalletBalance;
