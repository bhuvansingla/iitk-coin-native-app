import { StyleSheet } from "react-native";

import { FONT } from "styles";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 44,
		flexDirection: "column",
		maxHeight: "50%",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	title: {
		marginTop: 15,
		marginBottom: 5,
		fontSize: FONT.SIZE.H2,
		opacity: 1,
		fontFamily: FONT.WEIGHT.SEMI_BOLD,
	},
	txnID: {
		fontFamily: FONT.WEIGHT.REGULAR,
		fontSize: FONT.SIZE.TERTIARY,
		opacity: 0.8,
		marginBottom: 30,
	},
});

export default styles;
