module.exports = {
	plugins: {
		"postcss-import": {},
		"postcss-preset-env": {
			browsers: "last 4 versions",
		},
		// "cssnano": {
		// 	convertValues: {
		// 		length: false
		// 	},
		// 	discardComments: {
		// 		removeAll: true
		// 	}
		// }
	}
};