import {applyScheme, getSavedScheme, getSystemScheme} from "@/features/theme/utils";

applyScheme(getSavedScheme() || getSystemScheme());
