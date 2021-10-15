import FormLabel from "./forms";
import HistoryLabel from "./history";
import TransferLabel from "./transfer";
import ValidationLabel from "./validation";
import SYMBOL_LABELS from "./symbols";
import HEADER_LABELS from "./header";

const LABELS = {

	...FormLabel,
	...HistoryLabel,
	...TransferLabel,
	...ValidationLabel,
	...SYMBOL_LABELS,
	...HEADER_LABELS,
	
	"COINS": "Coins",
	"COIN": "Coin",
	"YOU_HAVE": "You have",
	
	"ACCOUNT": "Account",
	"SEND": "Send",
	"REDEEM": "Redeem",

	"PAST_TRANSACTIONS": "PAST TRANSACTIONS",
	"GREET_MESSAGE": "Hi,",
	"GREET_EMOTE": "! 👋"
	
};

export default LABELS;
