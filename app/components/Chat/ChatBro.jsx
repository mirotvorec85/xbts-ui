import React from "react";
import {PropTypes} from "react";
import SettingsStore from "stores/SettingsStore";

/**
 *  Wrapper component for chatbro iframe
 *
 */
class ChatBro extends React.Component {

    render() {

        let frameHeight =  this.props.height || "30%";

        let currentLocale = SettingsStore.getState().settings.get("locale");

        let chatUrl = null;
        switch (currentLocale) {
            case 'ru':
                chatUrl = "https://chat.rudex.org/ru/";
                break
            case 'zh':
                chatUrl = "https://chat.rudex.org/cn/";
                break;
            case 'en':
                chatUrl = "https://chat.rudex.org/en/";
                break;
            default:
                chatUrl = "https://chat.rudex.org/en/";
                break;
        }

        return <iframe
            style={{height: frameHeight,  width: "100%"}}
            src={chatUrl}
            sandbox="allow-same-origin allow-forms allow-scripts allow-popups"
        >
        </iframe>;
    }
}

ChatBro.propTypes = {
    height: PropTypes.string
};

export default ChatBro;