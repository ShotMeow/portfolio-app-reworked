import { applyScheme, getSavedScheme, getSystemScheme } from "./utils";

applyScheme(getSavedScheme() || getSystemScheme());
