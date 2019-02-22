import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import Tx from "ethereumjs-tx";

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    //**Add the infura endpoint you created below
    "https://kovan.infura.io/v3/YOUR_KEY_FROM_INFURA"
  )
);

//*** Add your Test Address (Account 1 the address you funded with gitter)
web3.eth.getBalance("YOUR_TEST_ADDRESS_GOES_HERE").then(res => {
  console.log("Account1 (Your test address) Balance", res);
});
//*** Add your Project Address (Account 2 the secont address you created that is not funded)
web3.eth.getBalance("YOUR_PROJECT_ADDRESS_GOES_HERE").then(res => {
  console.log("Account2 (Your Project address) Balance", res);
});

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
