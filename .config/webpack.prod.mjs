
import { merge } from "webpack-merge";

import { appCommonConfig } from "./webpack.common.mjs";

/**
 * @type {import("webpack").Configuration}
 */
const baseConfig = {
	"mode": "production"
};

const appConfig = merge(baseConfig, appCommonConfig, {
});


export default [appConfig];
