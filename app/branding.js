/** This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 *  the process.
 *
 *  @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "XBTS";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://ex.xbts.io";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "https://faucet.rudex.org",
        show: false,
        editable: false
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/logo-xbts.png");
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["darkTheme", "lightTheme", "midnightTheme"]
    return "lightTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "password";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 */
export function getUnits() {
    return ["BTS", "RUBLE", "USD", "CNY", "BTC", "EUR", "GBP"];
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */

export function getMyMarketsBases() {
    return ["BTS", "XBTSX.BTC", "XBTSX.STH", "RUBLE", "USD", "CNY"];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
    return [
        "BTS",
        "RUBLE",
        "USD",
        "EUR",
        "CNY",
        "GOLD",
        "SILVER",
        "XBTSX.STH",
        "XBTSX.POST",
        "XBTSX.DOGE",
        "XBTSX.BTC",
        "XBTSX.LTC",
        "XBTSX.DASH",
        "XBTSX.KEC",
        "CVCOIN",
        "HERTZ",
        "HERO",
        "OBITS",
        "YOYOW",
        "SMOKE",
        "BTWTY",
        "ZEPH"
    ];
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets() {
    return [
        ["BTS", "XBTSX.STH"],
        ["XBTSX.DOGE", "XBTSX.STH"],
        ["RUBLE", "XBTSX.STH"],
        ["XBTSX.BTC", "XBTSX.STH"],
        ["BTS", "CNY"],
        ["BTS", "USD"],
        ["BTS", "EUR"],
        ["BTS", "RUBLE"],
        ["BTS", "GOLD"],
        ["BTS", "SILVER"],
        ["XBTSX.BTC", "XBTSX.LTC"],
        ["XBTSX.BTC", "XBTSX.POST"],
        ["XBTSX.BTC", "XBTSX.DOGE"],
        ["BTS", "XBTSX.BTC"],
        ["BTS", "ZEPH"],
        ["BTS", "HERO"],
        ["BTS", "OBITS"],
        ["CNY", "YOYOW"],
        ["BTS", "OPEN.EOS"],
        ["BTS", "OPEN.ETH"]
    ];
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
    return [
        "TRADE.",
        "OPEN.",
        "METAEX.",
        "BRIDGE.",
        "RUDEX.",
        "GDEX.",
        "WIN.",
        "ESCROW.",
        "XBTSX."
    ];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for BitAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "OPEN.", "bit"
    return ["XBTSX.", "bit"];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
    return (
        ["OPEN", "RUDEX", "WIN", "BRIDGE", "GDEX", "XBTSX"].indexOf(gateway) >=
        0
    );
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}
