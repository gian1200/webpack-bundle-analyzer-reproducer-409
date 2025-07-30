import { join } from "path";

/**
 * @type {import("webpack").Configuration}
 */
export const appCommonConfig = {
	"entry": {
		"reproducerEntry": { "import": "./src/app/index.mjs", "filename": "index.mjs" }
	},
	"experiments": {
		"outputModule": true, // If this is commented, then it doesn't show the error
	},
	"name": "app",
	"output": {
		"clean": true,
		"module": true, // This should be commented, too
		"path": join(import.meta.dirname, "../dist/public")
	}
};
