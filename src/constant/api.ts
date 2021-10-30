const BACKEND = {
	BASE_URL: "https://iitkcoin-op711.herokuapp.com",
	ENDPOINT: {
		"OTP": "/auth/otp",
		"SIGNUP": "/auth/signup",
		"LOGIN": "/auth/login",
		"LOGOUT": "/auth/logout",
		"CHECK_LOGIN": "/auth/check",
		"USERNAME": "/user/name",
		"WALLET_TRANSFER": "/wallet/transfer",
		"WALLET_BALANCE": "/wallet/balance",
		"WALLET_TAX": "/wallet/transfer/tax",
		"REDEEM_NEW": "/wallet/redeem/new",
		"TRANSFER_HISTORY": "/wallet/history"
	},
	ERROR: {
		NETWORK: {
			"PAYLOAD": "Oops! Server didn't Respond. Please try again later.",
			"STATUS": 500
		},
	},
};

export { BACKEND };
