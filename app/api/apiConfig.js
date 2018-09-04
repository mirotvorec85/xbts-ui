import {getFaucet} from "../branding";

export const blockTradesAPIs = {
    BASE: "https://api.blocktrades.us/v2",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const openledgerAPIs = {
    BASE: "https://ol-api1.openledger.info/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount",
    RPC_URL: "https://openledger.info/api/"
};

export const rudexAPIs = {
    BASE: "https://gateway.rudex.org/api/v0_3",
    COINS_LIST: "/coins"
};

export const cryptoBridgeAPIs = {
    BASE: "https://api.crypto-bridge.org/api/v1",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/wallets",
    MARKETS: "/markets",
    TRADING_PAIRS: "/trading-pairs"
};

export const widechainAPIs = {
    BASE: "https://gateway.winex.pro/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    NEW_DEPOSIT_ADDRESS: "/new-deposit-address",
    WITHDRAW_HISTORY: "/latelyWithdraw",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_HISTORY: "/latelyRecharge"
};

export const gdex2APIs = {
    BASE: "https://api.gdex.io/adjust",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs"
};

// Legacy Deposit/Withdraw
export const gdexAPIs = {
    BASE: "https://api.gdex.io",
    ASSET_LIST: "/gateway/asset/assetList",
    ASSET_DETAIL: "/gateway/asset/assetDetail",
    GET_DEPOSIT_ADDRESS: "/gateway/address/getAddress",
    CHECK_WITHDRAY_ADDRESS: "/gateway/address/checkAddress",
    DEPOSIT_RECORD_LIST: "/gateway/deposit/recordList",
    DEPOSIT_RECORD_DETAIL: "/gateway/deposit/recordDetail",
    WITHDRAW_RECORD_LIST: "/gateway/withdraw/recordList",
    WITHDRAW_RECORD_DETAIL: "/gateway/withdraw/recordDetail",
    GET_USER_INFO: "/gateway/user/getUserInfo",
    USER_AGREEMENT: "/gateway/user/isAgree",
    WITHDRAW_RULE: "/gateway/withdraw/rule"
};

export const xbtsxAPIs = {
    BASE: "https://apis.xbts.io/api/v1",
    // BASE: "http://localhost:3080/api/v1",
    COINS_LIST: "/coin"
};

export const nodeRegions = [
    // region of the node follows roughly https://en.wikipedia.org/wiki/Subregion#/media/File:United_Nations_geographical_subregions.png
    "Northern Europe",
    "Western Europe",
    "Southern Europe",
    "Eastern Europe",
    "Northern Asia",
    "Western Asia",
    "Southern Asia",
    "Eastern Asia",
    "Central Asia",
    "Southeastern Asia",
    "Australia",
    "New Zealand",
    "Melanesia",
    "Polynesia",
    "Micronesia",
    "Northern Africa",
    "Western Africa",
    "Middle Africa",
    "Eastern Africa",
    "Southern Africa",
    "Northern America",
    "Central America",
    "Caribbean",
    "South America"
];

export const settingsAPIs = {
    DEFAULT_WS_NODE: "wss://fake.automatic-selection.com",
    WS_NODE_LIST: [
        {
            url: "wss://fake.automatic-selection.com",
            location: {translate: "settings.api_closest"}
        },
        {url: "ws://127.0.0.1:8090", location: "Locally hosted"},
        {
            url: "wss://api.bts.blckchnd.com",
            region: "Western Europe",
            country: "Germany",
            location: "Falkenstein",
            operator: "Witness: blckchnd",
            contact:
                "email:admin@blckchnd.com;telegram:ruslansalikhov;github:blckchnd"
        },
        {
            url: "wss://api-ru.bts.blckchnd.com",
            region: "Eastern Europe",
            country: "Russia",
            location: "Moscow",
            operator: "Witness: blckchnd",
            contact:
                "email:admin@blckchnd.com;telegram:ruslansalikhov;github:blckchnd"
        },
        {
            url: "wss://node.market.rudex.org",
            region: "Western Europe",
            country: "Germany",
            location: "Falkenstein",
            operator: "Witness: blckchnd",
            contact:
                "email:admin@blckchnd.com;telegram:ruslansalikhov;github:blckchnd"
        },
        {
            url: "wss://bitshares.openledger.info/ws",
            location: "Nuremberg",
            region: "Western Europe",
            country: "Germany",
            operator: "Witness: openledger-dc",
            contact: "telegram:mtopenledger"
        },
        {url: "wss://eu.openledger.info/ws", location: "Berlin, Germany"},
        {
            url: "wss://bitshares.nu/ws",
            location: "Stockholm",
            region: "Northern Europe",
            country: "Sweden"
        },
        {
            url: "wss://bit.btsabc.org/ws",
            region: "Eastern Asia",
            country: "China",
            location: "Hong Kong",
            operator: "Witness: abc123",
            contact: "QQ:58291;email:58291@qq.com"
        },
        {
            url: "wss://node.btscharts.com/ws",
            region: "Eastern Asia",
            country: "China",
            location: "Beijing",
            operator: "leo2017",
            contact: "wechat:wx8855221;email:8855221@qq.com"
        },
        /*
        {
            url: "wss://japan.bitshares.apasia.tech/ws",
            country: "Japan",
            region: "Southeastern Asia",
            operator: "APAsia",
            contact: "telegram:murda_ra"
        },
        */
        {
            url: "wss://openledger.hk/ws",
            region: "Southeastern Asia",
            country: "Singapore",
            operator: "Witness: openledger-dc",
            contact: "telegram:mtopenledger"
        },
        {
            url: "wss://na.openledger.info/ws",
            location: "Quebec",
            region: "Northern America",
            country: "Canada",
            operator: "Witness: openledger-dc",
            contact: "telegram:mtopenledger"
        },
        /*
        {
            url: "wss://bitshares.crypto.fans/ws",
            region: "Western Europe",
            country: "Germany",
            location: "Munich",
            operator: "Witness: sc-ol",
            contact: "telegram:startail"
        },
        */
        {url: "wss://ws.gdex.io", location: "Japan"},
        {
            url: "wss://ws.gdex.top",
            region: "Eastern Asia",
            country: "China",
            location: "Shanghai",
            operator: "Witness: gdex-witness",
            contact: "telegram:BrianZhang"
        },
        {
            url: "wss://dex.rnglab.org",
            location: "Netherlands",
            operator: "Witness: rnglab"
        },
        {
            url: "wss://dexnode.net/ws",
            region: "Northern America",
            country: "U.S.A.",
            location: "Dallas",
            operator: "Witness: Sahkan",
            contact: "telegram:Sahkan_bitshares"
        },
        {url: "wss://la.dexnode.net/ws", location: "LA, USA"},
        /*
        {
            url: "wss://kc-us-dex.xeldal.com/ws",
            region: "North America",
            country: "U.S.A.",
            location: "Kansas City, U.S.A.",
            operator: "Witness: xeldal",
            contact: "telegram:xeldal"
        },
        */
        //{url: "wss://btsza.co.za:8091/ws", location: "Cape Town, South Africa"},
        {url: "wss://api.bitsharesdex.com/ws", location: "Missouri, USA"},
        {
            url: "wss://api.fr.bitsharesdex.com",
            region: "Western Europe",
            country: "France",
            location: "Paris",
            operator: "Witness: delegate.ihashfury",
            contact: "telegram:ihashfury"
        },
        {url: "wss://blockzms.xyz/ws", location: "USA"},
        {
            url: "wss://eu.nodes.bitshares.ws",
            location: "Central Europe - BitShares Infrastructure Program"
        },
        {
            url: "wss://us.nodes.bitshares.ws",
            location: "U.S. West Coast - BitShares Infrastructure Program"
        },
        {
            url: "wss://sg.nodes.bitshares.ws",
            location: "Singapore - BitShares Infrastructure Program"
        },
        {url: "wss://ws.winex.pro", location: "Singapore"},
        {url: "wss://api.bts.mobi/ws", location: "VA, USA"},
        // {url: "wss://api.btsxchng.com", location:"Global (Asia Pacific (Singapore) / US East (N. Virginia) / EU (London))"},
        {url: "wss://api.bts.network", location: "East Coast, USA"},
        {url: "wss://btsws.roelandp.nl/ws", location: "Finland"},
        {url: "wss://api.bitshares.bhuz.info/ws", location: "Europe"},
        {url: "wss://bts-api.lafona.net/ws", location: "USA"},
        {url: "wss://kimziv.com/ws", location: "Singapore"},
        {url: "wss://api.btsgo.net/ws", location: "Singapore"},
        // {url: "wss://bts.proxyhosts.info/wss", location: "Germany"},
        {url: "wss://bts.open.icowallet.net/ws", location: "Hangzhou, China"},
        // {url: "wss://crazybit.online", location: "China"},
        // {url: "wss://freedom.bts123.cc:15138/", location: "China"},
        /*
        {
            url: "wss://bitshares.bts123.cc:15138/",
            region: "North China",
            country: "China",
            location: "Hangzhou",
            operator: "Witness: delegate.freedom",
            contact: "telegram:eggplant"
        },
        */
        /*
        {
            url: "wss://api.bts.ai",
            region: "Eastern Asia",
            country: "China",
            location: "Beijing",
            operator: "Witness: witness.hiblockchain",
            contact: "telegram:vianull;wechat:strugglingl"
        },
        */
        /*
        {
            url: "wss://ws.hellobts.com",
            region: "Eastern Asia",
            country: "Japan",
            location: "Tokyo, Tokyo",
            operator: "Witness: xman",
            contact: "wechat:hidpos;email:hellobts@qq.com"
        },
        */
        {
            url: "wss://bitshares.cyberit.io",
            region: "Eastern Asia",
            country: "China",
            location: "Hong Kong",
            operator: "Witness: witness.still",
            contact: "telegram:gordoor;wechat:overyard"
        },
        {
            url: "wss://bts-seoul.clockwork.gr",
            region: "Southeastern Asia",
            country: "Korea",
            location: "Seoul",
            operator: "Witness: clockwork",
            contact: "telegram:clockworkgr"
        },
        {
            url: "wss://bts.liuye.tech:4443/ws",
            region: "Eastern Asia",
            country: "China",
            location: "Shandong",
            operator: "Witness: liuye",
            contact: "email:work@liuye.tech"
        },
        {url: "wss://bts.to0l.cn:4443/ws", location: "China"},
        {url: "wss://btsfullnode.bangzi.info/ws", location: "Germany"},
        {
            url: "wss://api.dex.trading/",
            region: "Western Europe",
            country: "France",
            location: "Paris",
            operator: "Witness: zapata42-witness",
            contact: "telegram:Zapata_42"
        },
        {url: "wss://node.xbts.io/ws", location: "Germany"}
        // Testnet
        /*
        {
            url: "wss://node.testnet.bitshares.eu",
            location: "TESTNET - BitShares Europe (Frankfurt, Germany)"
        },
        {
            url: "wss://testnet.nodes.bitshares.ws",
            location: "TESTNET - BitShares Infrastructure Program"
        },
        {
            url: "wss://testnet.bitshares.apasia.tech/ws",
            location: "TESTNET - APT BitShares (Dallas, USA)"
        }
        */
    ],
    DEFAULT_FAUCET: getFaucet().url,
    TESTNET_FAUCET: "https://faucet.testnet.bitshares.eu",
    RPC_URL: "https://openledger.info/api/"
};
