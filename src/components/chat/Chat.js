import React, { Component } from "react";
import MessageList from "./MessageList";
import InputText from "./InputText";
import sendMessageAPI from "../../utils/api.service";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          user: "bot",
          message: "Hi I am your virtual dentist. How can I help you?."
        }
      ]
    };
    this.messages = React.createRef();
    this.sendMessage = this.sendMessage.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  sendMessage(message) {
    this.setState(prevState => {
      prevState.messages.push({ message, user: "human" });
      return { ...prevState };
    });

    sendMessageAPI(message).then(result => {
      this.setState(
        prevState => {
          //if it kept on failing substitute messages with message
          prevState.messages.push(result);
          return { ...prevState };
        },
        () => this.scrollToBottom()
      );
    });
  }

  scrollToBottom() {
    if (this.messages && this.messages.current && this.messages.current) {
      this.messages.current.scrollTop = this.messages.current.scrollHeight;
    }
  }

  render() {
    return (
      <div>
        <div className="chat_window">
          <div className="top_menu">
            <div className="buttons">
              <div className="button close" />
              <div className="button minimize" />
              <div className="button maximize" />
            </div>
            <div className="title">Dentist Chatbot</div>
          </div>
          <ul className="messages" ref={this.messages}>
            <MessageList messageList={this.state.messages} />
          </ul>
          <InputText sendMessage={this.sendMessage} />
        </div>
      </div>
    );
  }
}
