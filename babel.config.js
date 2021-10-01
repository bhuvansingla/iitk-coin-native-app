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
						styles: "./src/styles",
						["redux-store"]: "./src/redux-store",
						utils: "./src/utils",
					},
				},
			],
			"react-native-reanimated/plugin",
		],
	};
};
