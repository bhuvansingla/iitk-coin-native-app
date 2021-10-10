import { StyleSheet } from "react-native";
import { COLORS } from "styles";

const COIN_FONT_SIZE = 44;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		minHeight: 100,
		height: "36%",
		borderRadius: 20,
		flexDirection: "row",
		position: "relative",
		backgroundColor: "#00937F",
		shadowRadius: 20,
		shadowColor: COLORS.BLACK,
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: 4 },
		elevation: 4,
		alignItems: "center",
	},
	left: {
		left: -25,
		height: "65%",
		width: 100, 
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	right: {
		flex: 1,
		flexDirection: "column",
		height: "70%",
		left: -50,
		top: 2,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	row: {
		flex: 2,
		top: -6,
		flexDirection: "row", 
	},
	shadowCoinCount: {
		fontSize:COIN_FONT_SIZE,
		textShadowColor: "rgba(0, 0, 0, 0.25)",
		textShadowOffset: {width: 0, height: 2},
		textShadowRadius: 4
	},
	shadow: {
		textShadowColor: "rgba(0, 0, 0, 0.25)",
		textShadowOffset: {width: 0, height: 2},
		textShadowRadius: 4
	},
	coinMargin: {
		marginTop: COIN_FONT_SIZE*0.7,
	}
});

export default styles;
