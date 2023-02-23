import {
  applyScheme,
  getSavedScheme,
  getSystemScheme,
} from "@/features/colorScheme/utils";

applyScheme(getSavedScheme() || getSystemScheme());
