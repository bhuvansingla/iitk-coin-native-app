import { StyleSheet } from "react-native";

import { Layout } from "constant";
import { Colors, Font } from "styles";

const PADDING_VERTICAL = 12;
export default StyleSheet.create({
	container: {
		marginTop: 5,
		marginHorizontal: Layout.PADDING_HORIZONTAL,
		width:"100%",    
	},

	input: {
		marginTop:2,
		marginBottom: 20,
		paddingHorizontal: Layout.PADDING_HORIZONTAL,
		paddingVertical: PADDING_VERTICAL,
		borderRadius: 20,
		backgroundColor: Colors.grey,

		fontFamily:Font.FontWeight.SemiBold,
		color:Colors.black,
		fontSize:Font.FontSize.H3,
		fontWeight:"600",

		shadowRadius:4,
		shadowColor:Colors.black,
		shadowOpacity:0.25,
		shadowOffset:{width:0, height:4},
    
	},

	containerOptionalTitle: {
		marginBottom: 7,
		flexDirection: "row",
	},

	fullWidth: {
		width: "100%",
		alignItems: "center",
		paddingHorizontal: 0,
	},
});
