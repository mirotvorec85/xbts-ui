import React from "react";
import {Apis} from "bitsharesjs-ws";
import {connect} from "alt-react";

import utils from "common/utils";
import SettingsStore from "stores/SettingsStore";
// import SettingsActions from "actions/SettingsActions";
import MarketsStore from "stores/MarketsStore";
import MarketsTable from "./MarketsTable";

class StarredMarkets extends React.Component {
    render() {
        let {starredMarkets} = this.props;
        let markets = [];

        if (starredMarkets.size) {
            for (let market of starredMarkets.values()) {
                markets.push([market.quote, market.base]);
            }
        }

        return <MarketsTable markets={markets} forceDirection={true} />;
    }
}
StarredMarkets = connect(
    StarredMarkets,
    {
        listenTo() {
            return [SettingsStore];
        },
        getProps() {
            return {
                starredMarkets: SettingsStore.getState().starredMarkets
            };
        }
    }
);

class FeaturedMarkets extends React.Component {
    constructor() {
        super();

        this.marketsByChain = {
            "4018d784": [
                ["BTS", "XBTSX:STH"],
                ["BTS", "XBTSX:POST"],
                ["BTS", "XBTSX:DOGE"],
                ["BTS", "XBTSX:BTC"],
                ["BTS", "RUBLE"],
                ["RUBLE", "ESCROW.RUBLE"],
                ["BTS", "OPEN.ETH"],
                ["BTS", "OPEN.BTC"],
                ["BTS", "OPEN.DOGE"],
                //["BTS", "PPY"],
                //["BTS", "RUDEX.ETH"],
                ["BTS", "RUDEX.BTC"],
                //["BTS", "RUDEX.DGB"],
                //["RUBLE", "RUDEX.GOLOS"],
                //["RUBLE", "RUDEX.GBG"],
                //["BTS", "RUDEX.STEEM"],
                //["BTS", "RUDEX.SBD"],
                //["BTS", "ZEPH"],
                //["BTS", "RUDEX.DCT"],
                //["BTS", "RUDEX.KRM"],
                //["BTS", "RUDEX.TT"],
                //["BTS", "RUDEX.SCR"],
                ["BTS", "USD"],
                ["BTS", "EUR"],
                ["BTS", "CNY"],
                ["BTS", "GOLD"],
                ["BTS", "SILVER"],
                //["BTS", "HERO"],
                //["BTS", "OBITS"],
                //["BTS", "SMOKE"],
                //["BTS", "YOYOW"],
                ["CNY", "GDEX.EOS"]
                //["BTS", "BTWTY"],
                //["BTS", "ZEPH"],
                //["BTS", "HERTZ"]
            ],
            "39f5e2ed": [["TEST", "PEG.FAKEUSD"], ["TEST", "BTWTY"]]
        };

        let chainID = Apis.instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);

        this.state = {
            chainID,
            markets: []
        };

        this.update = this.update.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return !utils.are_equal_shallow(nextProps, this.props);
    }

    componentWillMount() {
        this.update();
    }

    componentWillReceiveProps(nextProps) {
        this.update(nextProps);
    }

    update(nextProps = null) {
        let {lowVolumeMarkets} = nextProps || this.props;
        let markets =
            this.marketsByChain[this.state.chainID] ||
            this.marketsByChain["4018d784"];

        markets = markets.filter(pair => {
            let [first, second] = pair;
            let isLowVolume =
                lowVolumeMarkets.get(`${first}_${second}`) ||
                lowVolumeMarkets.get(`${second}_${first}`);
            return !isLowVolume;
        });

        this.setState({markets});
    }

    render() {
        return <MarketsTable markets={this.state.markets} />;
    }
}

FeaturedMarkets = connect(
    FeaturedMarkets,
    {
        listenTo() {
            return [MarketsStore];
        },
        getProps() {
            return {
                lowVolumeMarkets: MarketsStore.getState().lowVolumeMarkets
            };
        }
    }
);

class TopMarkets extends React.Component {
    render() {
        return <MarketsTable markets={[]} />;
    }
}

export {StarredMarkets, FeaturedMarkets, TopMarkets};
