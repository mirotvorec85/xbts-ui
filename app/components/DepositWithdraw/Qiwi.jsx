import React from "react";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import Translate from "react-translate-component";
import cnames from "classnames";
import TransactionConfirmStore from "stores/TransactionConfirmStore";
import AccountActions from "actions/AccountActions";
import SettingsActions from "actions/SettingsActions";
import AccountBalance from "../Account/AccountBalance";
import utils from "common/utils";
import SettingsStore from "stores/SettingsStore";

class Qiwi extends React.Component {
    static propTypes = {
        jianjolly: ChainTypes.ChainAccount.isRequired,
        onay: ChainTypes.ChainAccount.isRequired,
        trustWallet: ChainTypes.ChainAccount.isRequired,
        asset: ChainTypes.ChainAsset.isRequired
    };

    static defaultProps = {
        jianjolly: "1.2.1068867", // "jianjolly-0",
        trustWallet: "1.2.1068867",
        onay: "1.2.1068867", // bitkapital dedicated whitelist management account
        asset: "RUBLE"
    };

    constructor(props) {
        super();
        this.state = {
            action: props.viewSettings.get("qiwiAction", "deposit"),
            min: 2,
            max: 12000,
            data: []
        };
    }

    loadData() {
        fetch("https://apis.xbts.io/api/v1/qiwi")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({max: data});
            })
            .catch(err => console.error(this.props.url, err.toString()));
    }

    componentDidMount() {
        this.loadData();
    }

    _renderDeposits() {
        return (
            <iframe
                style={{width: "100%", border: 0, minHeight: 480}}
                src={
                    "https://trustcash.org/widgets/bitshares/v1/?token=ea278fd12&account=" +
                    this.props.account.get("name")
                }
            />
        );

        // interim maintenance tout per issue #341
        return;
        <div style={{width: "100%", border: 0, minHeight: 600}}>
            Under Maintenance
        </div>;
    }

    _renderWithdrawals() {
        return (
            <form onSubmit={this._onSubmit.bind(this)}>
                <div style={{padding: "20px 0"}}>
                    <Translate content="gateway.balance" />: &nbsp;<span
                        style={{
                            fontWeight: "bold",
                            color: "#4A90E2",
                            textAlign: "right"
                        }}
                    >
                        <AccountBalance
                            account={this.props.account.get("name")}
                            asset={this.props.asset.get("symbol")}
                        />
                    </span>
                    <br />
                    <br />
                    <label>
                        <Translate content="gateway.fee" /> 1%
                    </label>
                    <br />
                    <small>
                        min:{this.state.min} max:{this.state.max}
                    </small>
                </div>

                <label>
                    <Translate content="exchange.quantity" />
                    <input
                        ref="amount"
                        required
                        id="amount"
                        type="number"
                        min={this.state.min}
                        max={this.state.max}
                    />
                </label>

                <label>
                    {/*<Translate content="gateway.iban"/>*/}
                    QIWI Account
                    <input
                        ref="iban"
                        required
                        id="iban"
                        type="text"
                        placeholder="79281234567"
                    />
                </label>

                <button className="button" type="submit">
                    <Translate content="gateway.withdraw_now" />
                </button>
            </form>
        );
    }

    changeAction(action) {
        this.setState({
            action
        });

        SettingsActions.changeViewSetting({
            qiwiAction: action
        });
    }

    _onSubmit(e) {
        e.preventDefault();
        let {min, max} = this.state;
        let {asset, account, trustWallet} = this.props;

        let amount = parseInt(this.refs.amount.value, 10);
        let iban = this.refs.iban.value;
        // console.log("amount:", amount, "account:", iban);

        let precision = utils.get_asset_precision(asset.get("precision"));

        if (amount < min || amount > max) {
            return;
        }

        AccountActions.transfer(
            account.get("id"), // from user
            trustWallet.get("id"), // to trustWallet account
            parseInt(amount * precision, 10), // amount in full precision
            asset.get("id"), // trustWallet asset id
            new Buffer(iban.toUpperCase(), "utf-8"), // memo
            null, // propose set to false
            asset.get("id") // Pay fee with KAPITAL
        );
        this.loadData(); //???
    }

    onTrxIncluded(confirm_store_state) {
        if (
            confirm_store_state.included &&
            confirm_store_state.broadcasted_transaction
        ) {
            // this.setState(Transfer.getInitialState());
            TransactionConfirmStore.unlisten(this.onTrxIncluded);
            TransactionConfirmStore.reset();
        } else if (confirm_store_state.closed) {
            TransactionConfirmStore.unlisten(this.onTrxIncluded);
            TransactionConfirmStore.reset();
        }
    }

    render() {
        // let {jianjolly, onay, account} = this.props;
        let {action} = this.state;
        // console.log("jianjolly:", jianjolly.toJS(), "asset:", asset.toJS());

        return (
            <div className="BitKapital">
                <div className="content-block">
                    <div style={{paddingBottom: 15}}>
                        <div
                            style={{marginRight: 10}}
                            onClick={this.changeAction.bind(this, "deposit")}
                            className={cnames(
                                "button",
                                action === "deposit" ? "active" : "outline"
                            )}
                        >
                            <Translate content="gateway.deposit" />
                        </div>
                        <div
                            onClick={this.changeAction.bind(this, "withdraw")}
                            className={cnames(
                                "button",
                                action === "withdraw" ? "active" : "outline"
                            )}
                        >
                            <Translate content="gateway.withdraw" />
                        </div>
                    </div>
                    {action === "deposit"
                        ? this._renderDeposits()
                        : this._renderWithdrawals()}
                </div>
            </div>
        );
    }
}

export default BindToChainState(Qiwi);
