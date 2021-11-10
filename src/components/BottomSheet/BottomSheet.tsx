import React, { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { COLORS } from "styles";

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
	const snapPoints = useMemo(() => ["71%", "94%"], []);

	// custom backdrop
	const CustomBackdrop = CustomBackdropGenerator(shrinkedHeader);

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		isNaN(index);
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
				<BottomSheetScrollView keyboardShouldPersistTaps="always">{children}</BottomSheetScrollView>
			</BottomSheet>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.MAIN_BG,
		flex: 1,
		margin: 0,
		padding: 0,
		width: "100%",
	},
});

export default MyBottomSheet;
