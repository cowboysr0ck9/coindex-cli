// Module Metadata Information
export const PKG_NAME = "Coindex";
export const PKG_VERSION = "1.0.0";

// Module Command Info
export const SET_CMD = "set";
export const SET_MSG = "Set API key";

export const SHOW_CMD = "show";
export const SHOW_MSG = "Show API key";

export const REMOVE_CMD = "remove";
export const REMOVE_MSG = "Remove API key";

// Module High Level Info
export const KEY_CMD = "key";
export const KEY_MSG = "Manage API key";

export const CHECK_CMD = "check";
export const CHECK_MSG = "Check crypto currency coin price";

export const CHECK_PRICE_CMD = "price";
export const CHECK_PRICE_MSG = "Check current price";
export const CHECK_PRICE_FAILURE_MSG = "Failed to get Crypto market data";
export const CHECK_PRICE_UNFOUND_MSG = "Provided coins could not be found";

// Configstore Variables
export const API_KEY = "API_KEY";
export const API_KEY_UNFOUND_MSG = "No API key was found";
export const API_KEY_FAILURE_MSG = "Failed to set API key";
export const API_KEY_REMOVE_SUCCESS_MSG = "Successfully removed API key";
export const API_KEY_REMOVE_FAILURE_MSG = "Failed to remove API key";

// RESTful HTTP Constants
export const DEFAULT_HTTP_TIMEOUT = 3_000;
export const DEFAULT_API_BASE_URL =
  "https://api.nomics.com/v1/currencies/ticker";
