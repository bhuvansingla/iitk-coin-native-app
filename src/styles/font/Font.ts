import { Layout } from "constant";
import { 
	MerriweatherSans_800ExtraBold,  
} from "@expo-google-fonts/merriweather-sans";

import { 
	useFonts,
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,  
} from "@expo-google-fonts/open-sans";

const FontWeight = {
	Head: "MerriweatherSans_800ExtraBold",
	Bold: "OpenSans_700Bold",
	SemiBold: "OpenSans_600SemiBold",
	Regular: "OpenSans_400Regular",
};

const FontSizeNormalDevice = {
	Header: 20,
	H1: 28,
	H2: 24,
	H3: 22,
	Primary: 18,
	Secondary: 16,
	Tertiary: 14,
};

const FontSizeSmallDevice = {
	Header: 18,
	H1: 22,
	H2: 20,
	H3: 18,
	Primary: 16,
	Secondary: 14,
	Tertiary: 12,
};

const FontSize = Layout.isSmallDevice ? FontSizeSmallDevice : FontSizeNormalDevice;

const Font = { FontWeight, FontSize };

export { Font };
