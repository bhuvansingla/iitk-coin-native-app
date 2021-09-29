import React, { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { Colors } from "styles";
import CustomBackdropGenerator from "./CustomBackdrop";

interface Props {
  shrinkedHeader: React.ReactNode;
  expandedHeader: React.ReactNode;
  children: React.ReactNode;
}

const MyBottomSheet: React.FC<Props> = ({
	shrinkedHeader,
	expandedHeader,
	children,
}) => {
	// ref
	const bottomSheetRef = useRef<BottomSheet>(null);

	// variables
	const snapPoints = useMemo(() => ["60%", "87%"], []);

	// custom backdrop
	const CustomBackdrop = CustomBackdropGenerator(shrinkedHeader);

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);

	// render
	return (
		<View style={styles.container}>
			{expandedHeader}
			<BottomSheet
				ref={bottomSheetRef}
				index={0}
				snapPoints={snapPoints}
				backdropComponent={CustomBackdrop}
				onChange={handleSheetChanges}
			>
				{children}
			</BottomSheet>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: Colors.mainbg,
	},
});

export default MyBottomSheet;
