import { StyleSheet } from "react-native";

import { COLORS, LAYOUT } from "styles";

const styles = StyleSheet.create({
	expanded: {
		width: "100%",
		height: LAYOUT.SCREEN.HEIGHT * 0.3,
		alignItems: "center",
		backgroundColor: COLORS.MAIN_BG,
		top: 0,
	},
	shrinked: {
		alignItems: "center",
		width: "100%",
		height: LAYOUT.SCREEN.HEIGHT * 0.06,
		backgroundColor: COLORS.MAIN_BG,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	about: {
		borderBottomWidth: 1,
		borderColor: COLORS.WHITE,
		margin: 5,
		padding: 2,
	},
});

export default styles;
