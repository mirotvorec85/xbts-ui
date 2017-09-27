import React from "react";
import {PropTypes} from "react";

/**
 *  Wrapper component for chatbro iframe
 *
 */
class ChatBro extends React.Component {

    render() {

        let frameHeight =  this.props.height || "30%";

        return <iframe
            style={{height: frameHeight,  width: "100%"}}
            src={"https://chat.rudex.org"}
            sandbox="allow-same-origin allow-forms allow-scripts allow-popups"
        >
        </iframe>;
    }
}

ChatBro.propTypes = {
    height: PropTypes.string
};

export default ChatBro;