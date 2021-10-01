import { LAYOUT } from "../layout";

const WEIGHT = {
	HEAD: "MerriweatherSans_800ExtraBold",
	BOLD: "OpenSans_700Bold",
	SEMI_BOLD: "OpenSans_600SemiBold",
	REGULAR: "OpenSans_400Regular",
};

const SIZE_NORMAL_DEVICE = {
	HEADER: 20,
	H1: 28,
	H2: 24,
	H3: 22,
	PRIMARY: 18,
	SECONDARY: 16,
	TERTIARY: 14,

};

const SIZE_SMALL_DEVICE = {
	HEADER: 18,
	H1: 22,
	H2: 20,
	H3: 18,
	PRIMARY: 16,
	SECONDARY: 14,
	TERTIARY: 12,
};

const SIZE = LAYOUT.IS_SMALL_DEVICE ? SIZE_SMALL_DEVICE : SIZE_NORMAL_DEVICE;

export const FONT = { WEIGHT, SIZE };
