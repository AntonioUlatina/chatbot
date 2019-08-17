import React, { Component } from "react";
import MainLayout from "./components/layouts/MainLayout";
import Chat from "./components/chat/Chat";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="root">
        <MainLayout className="row">
          <Chat className="column" />
          <iframe
            className="column"
            width="350"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/0ff4bf4b-a100-4c49-93c6-83fa87db514f"
          />
        </MainLayout>
      </div>
    );
  }
}

export default App;
