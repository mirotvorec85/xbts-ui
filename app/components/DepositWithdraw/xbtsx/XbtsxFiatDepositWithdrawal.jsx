import React from "react";
import Translate from "react-translate-component";
import ChainTypes from "components/Utility/ChainTypes";
import BindToChainState from "components/Utility/BindToChainState";
import WalletDb from "stores/WalletDb";
import BaseModal from "../../Modal/BaseModal";
import Trigger from "react-foundation-apps/src/trigger";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import AccountBalance from "../../Account/AccountBalance";
import BalanceComponent from "components/Utility/BalanceComponent";
import PropTypes from "prop-types";
import AccountStore from "../../../stores/AccountStore";
import SettingsActions from "../../../actions/SettingsActions";
import XbtsxWithdrawModal from "./XbtsxWithdrawModal";
import Modal from "react-foundation-apps/src/modal";

var mrktCashLogo = `${__BASE_URL__}images/partner-trustcash.png`;
let tradingAccounts = AccountStore.getMyAccounts();

class XbtsxFiatDepositWithdrawal extends React.Component {
    static propTypes = {
        account: ChainTypes.ChainAccount
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.handleKeyUp = this.keyUpHandler.bind(this, "inputDeposit");
    }

    componentWillUnmount() {}

    keyUpHandler(refName, e) {
        // console.log(refName, e.target.value);
    }

    render() {
        if (!this.props.account) return <div />;

        let trustCashLink =
            "https://trustcash.org/widgets/bitshares/v1/?token=ea278fd12&account=" +
            tradingAccounts[0];

        let trustCashLogoLink = (
            <a
                style={{padding: "12px 0.25rem"}}
                href="https://trustcash.org"
                target="_blank"
            >
                <img style={{margin: 0, height: 32}} src={mrktCashLogo} />
            </a>
        );

        let urlDeposit = (
            <a
                id={"urlDeposit"}
                target="_blank"
                className="button success"
                href={
                    "https://qiwi.com/payment/form/99?extra[%27account%27]=79256582732&amountInteger=1000.00&extra[%27comment%27]=ciphery256:ruble&currency=643"
                }
            >
                START EXCHANGE
            </a>
        );

        let trustcashForm = (
            <iframe
                style={{
                    padding: "0px",
                    border: "5px",
                    width: "100%",
                    height: "460px"
                }}
                src={trustCashLink}
            />
        );

        return (
            <div className={"content-block"}>
                <h1>
                    <Translate content="gateway.xbtsx.partners.trustcash.title" />{" "}
                    {trustCashLogoLink}
                </h1>
                <p>{trustcashForm}</p>
                <p
                    style={{
                        width: "100%",
                        float: "left",
                        clear: "both",
                        padding: "10px",
                        fontSize: "20px"
                    }}
                >
                    Recipient Account: {tradingAccounts[0]}
                </p>
                <div
                    className="formDeposit"
                    id={"depositFiat"}
                    style={{padding: "6px"}}
                >
                    <label
                        style={{
                            width: "120px",
                            float: "left",
                            clear: "left",
                            padding: "10px",
                            fontSize: "20px"
                        }}
                    >
                        Deposit
                    </label>
                    <input
                        onKeyUp={this.handleKeyUp}
                        ref="inputDeposit"
                        style={{
                            width: "120px",
                            float: "left"
                        }}
                        id="moneySend"
                        type="text"
                        placeholder="1001"
                        className="form-control"
                    />
                    <select
                        className="bts-select form-group"
                        style={{
                            width: "200px"
                        }}
                    >
                        <option key="QIWIRUR" value="QIWIRUR">
                            QIWI RUR
                        </option>
                    </select>
                </div>
                <div
                    className="formDeposit"
                    id={"receiveAsset"}
                    style={{padding: "6px"}}
                >
                    <label
                        style={{
                            width: "120px",
                            float: "left",
                            clear: "left",
                            padding: "10px",
                            fontSize: "20px"
                        }}
                    >
                        Receive
                    </label>
                    <input
                        onKeyUp={this.handleKeyUp}
                        ref="inputReceive"
                        style={{
                            width: "120px",
                            float: "left"
                        }}
                        id="moneySend"
                        type="text"
                        placeholder="1000"
                        className="form-control"
                    />
                    <select
                        className="bts-select form-group"
                        style={{
                            width: "200px"
                        }}
                    >
                        <option key="RUBLE" value="RUBLE">
                            bitRUBLE
                        </option>
                        <option disabled key="USD" value="USD">
                            bitUSD
                        </option>
                    </select>
                </div>
                <p>
                    <small>Deposit min:50 max:8500 fixed fee: 1 RUBLE</small>
                </p>
                <p>{urlDeposit}</p>
            </div>
        );
    }
} // XbtsxFiatDepositWithdrawal
XbtsxFiatDepositWithdrawal = BindToChainState(XbtsxFiatDepositWithdrawal);

export default XbtsxFiatDepositWithdrawal;
