import { StyleSheet } from "react-native";

import { FONT } from "styles";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	amountTaxContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	halfBox: {
		width: "50%",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	listItem: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	label: {
		paddingBottom: 5,
		fontSize: FONT.SIZE.SECONDARY,
		opacity: 0.7,
	},
	value: {
		opacity: 0.9,
		fontSize: FONT.SIZE.H2,
	},
	wrapper: {
		marginBottom: 15,
		fontFamily: FONT.WEIGHT.BOLD,
		opacity: 0.7,
		fontSize: FONT.SIZE.TERTIARY,
	},
});

export default styles;
