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
          
        </MainLayout>
      </div>
    );
  }
}

export default App;
