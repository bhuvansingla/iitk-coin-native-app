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
						utils: "./src/utils",
						api: "./src/api",
						["secure-store"]: "./src/secure-store",
					},
				},
			],
			"react-native-reanimated/plugin",
		],
	};
};
