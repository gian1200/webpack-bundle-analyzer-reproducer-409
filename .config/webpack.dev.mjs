import { join } from "path";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { merge } from "webpack-merge";

import { appCommonConfig } from "./webpack.common.mjs";

/**
 * @type {import("webpack").Configuration}
 */
const baseConfig = {
	"devtool": "cheap-module-source-map",
	"mode": "development"
};

const appConfig = merge(baseConfig, appCommonConfig, {
	"plugins": [
		new BundleAnalyzerPlugin({
			"analyzerMode": "static",
			"openAnalyzer": false,
			"reportFilename": join(import.meta.dirname, "../target/webpack/app_report.html")
		})
	]
});

export default [appConfig];
