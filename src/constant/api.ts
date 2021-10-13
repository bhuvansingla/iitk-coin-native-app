const BACKEND = {
	BASE_URL: "",
	ENDPOINT: {
		"OTP": "/auth/otp",
		"SIGNUP": "/auth/signup",
		"LOGIN": "/auth/login",
		"LOGOUT": "/auth/logout",
		"CHECK_LOGIN": "/auth/check"
	},
	ERROR: {
		NETWORK: {
			"PAYLOAD": "Oops! Server didn't Respond. Please try again later.",
			"STATUS": 500
		},
	},
};

export { BACKEND };
