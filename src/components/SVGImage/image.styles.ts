import { StyleSheet } from "react-native";
import { Layout } from "constant";

const height = Layout.screen.height;

const styles = StyleSheet.create({
	default: {
		flex: 1,
	},
	crow: {
		position: "absolute",
		top: 0,
		right: 0,
		marginRight: 0,
		paddingRight: 0,
		alignItems: "flex-end",
		justifyContent: "flex-start",
		height: height * 0.4,
	},
	coinTypographyLogo: {
		alignItems: "center",
		justifyContent: "center",
	},
	coinLogo: {
		// alignItems: "flex-end",
		justifyContent: "center",
	},
});

export default styles;
