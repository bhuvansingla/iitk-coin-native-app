import { StyleSheet } from "react-native";
import { Layout } from "constant";

const Height = Layout.screen.height;

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
		height: Height * 0.4,
	},
	coin: {
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		// alignItems: "flex-end",
		justifyContent: "center",
	},
});
		

export default {Height, styles};