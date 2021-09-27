import { StyleSheet } from "react-native";

import { Colors,Font } from "styles";

export default StyleSheet.create({
	container: {
		borderRadius:20,

		shadowRadius:5,
		shadowColor:Colors.black,
		shadowOpacity:0.25,
		shadowOffset:{width:0, height:4},
		elevation:10,
		backgroundColor: Colors.teal,
		paddingVertical: 12,

		width: "100%",
		alignItems: "center",
		paddingHorizontal: 20,
		marginTop:5,
		marginBottom:15,
	},

	text: {
		flexDirection: "row",
		opacity:1,
		fontSize:Font.FontSize.H3,
		
		fontWeight:"700"
	},

	fullWidth: {
		
	},
});
