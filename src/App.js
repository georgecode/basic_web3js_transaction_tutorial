import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import Tx from "ethereumjs-tx";

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://kovan.infura.io/v3/YOUR_KEY_FROM_INFURA"
  )
);

//**Gen Keys
let genKeyPairs = web3.eth.accounts.create();
console.log("KEYS", genKeyPairs);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>sudo_web_wallet</h1>
      </div>
    );
  }
}

export default App;
