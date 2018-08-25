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

var mrktCashLogo = `${__BASE_URL__}images/partner-trustcash.png`;
let tradingAccounts = AccountStore.getMyAccounts();

class XbtsxFiatDepositWithdrawal extends React.Component {
    static propTypes = {
        account: ChainTypes.ChainAccount
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillUnmount() {}

    render() {
        if (!this.props.account) return <div />;

        let trustCashLink =
            "https://trustcash.org/widgets/bitshares/v1/?token=ea278fd12&account=" +
            tradingAccounts[0];
        let markCashLink = (
            <a
                style={{padding: "12px 0.25rem"}}
                href="https://trustcash.org"
                target="_blank"
            >
                <img style={{margin: 0, height: 32}} src={mrktCashLogo} />
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
            <div>
                <h1>
                    <Translate content="gateway.xbtsx.partners.trustcash.title" />
                </h1>
                <p>{markCashLink}</p>
                <p>{trustcashForm}</p>
            </div>
        );
    }
} // XbtsxFiatDepositWithdrawal
XbtsxFiatDepositWithdrawal = BindToChainState(XbtsxFiatDepositWithdrawal);

export default XbtsxFiatDepositWithdrawal;
