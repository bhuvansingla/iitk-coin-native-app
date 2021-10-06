module.exports = function(api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["."],
					extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
					alias: {
						components: "./src/components",
						constant: "./src/constant",
						callbacks: "./src/callbacks",
						styles: "./src/styles",
						["redux-store"]: "./src/redux-store",
						utils: "./src/utils",
						api: "./src/api",
						["secure-store"]: "./src/secure-store",
						screens: "./src/screens"
					},
				},
			],
			"react-native-reanimated/plugin",
		],
	};
};
