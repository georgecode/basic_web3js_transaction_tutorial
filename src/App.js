import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import Tx from "ethereumjs-tx";

//Specifies which network you want to use ie. testnet mainnet ect...
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    //*** DON'T FORGET to change this to the infura endpoint you created below***//
    "https://kovan.infura.io/v3/YOUR_ENDPOINT_KEY"
    //*** DON'T FORGET to change this to the infura endpoint you created ***//
  )
);

////Generates key pairs
// let genKeyPairs = web3.eth.accounts.create();
// console.log("KEYS", genKeyPairs);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendingAddress: "",
      receivingAddress: "",
      priKey: "",
      amount: 0,
      sendingAddressBalance: "",
      receivingAddressBalance: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckAccountBalance = this.handleCheckAccountBalance.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCheckAccountBalance(event) {
    //Check if Address is valid
    if (
      web3.utils.isAddress(this.state.sendingAddress) &&
      web3.utils.isAddress(this.state.receivingAddress)
    ) {
      //Gets balance of Sending Address Input
      web3.eth.getBalance(this.state.sendingAddress).then(res => {
        console.log("Sending Address Balance: ", res);
        this.setState({
          sendingAddressBalance: `Sending Address Balance: ${res} wei`
        });
      });
      //Gets balance of Receiving Address Input
      web3.eth.getBalance(this.state.receivingAddress).then(res => {
        console.log("Receiving Address Balance: ", res);
        this.setState({
          receivingAddressBalance: `Receiving Address Balance: ${res} wei`
        });
      });
    } else {
      alert("Sending Address or Receiving Address is not valid");
    }
  }

  async handleSend() {
    if (
      //Checks to see if addressses are valid
      web3.utils.isAddress(this.state.sendingAddress) &&
      web3.utils.isAddress(this.state.receivingAddress)
    ) {
      ////***Gets nonce sending address (this is the count of send transactions)
      const noncePromise = web3.eth.getTransactionCount(
        this.state.sendingAddress
      );
      ////**Get the current gas price (determined by the last few blocks median gas price)
      const gasPricePromise = web3.eth.getGasPrice();

      //await gasPrice and nonce promises
      const [nonce, gasPrice] = await Promise.all([
        noncePromise,
        gasPricePromise
      ]);

      const rawTransaction = {
        from: this.state.sendingAddress,
        //The nonce is the count
        nonce: nonce,
        //Gas Price is in prefixed Hex string(price per gas)
        gasPrice: "0x" + parseInt(gasPrice, 10).toString(16),
        //gasLimit is the maximum amount of gas you are willing to use
        //In this case we are only makeing a transaction
        //which takes a fixed amount of 21000 gas
        //If you put a higher gaslimit it will still work and only take 21000 gas
        //If you put a lower gasLimit you will not have enough to make a transaction
        gasLimit: 21000,
        to: this.state.receivingAddress,
        //The Amount you want to send (this.state.amount is base 10
        //which is converted to Hex)
        value: web3.utils.toHex(this.state.amount)
      };

      //Removes Prefix of private key if it has one
      if (this.state.priKey.slice(0, 2) === "0x") {
        this.setState({
          priKey: this.state.priKey.slice(2)
        });
      }

      const privKey = new Buffer(this.state.priKey, "hex");
      const tx = new Tx(rawTransaction);

      //signs the transaction
      tx.sign(privKey);

      const serializedTx = tx.serialize();

      //Sends the transaction
      web3.eth.sendSignedTransaction(
        "0x" + serializedTx.toString("hex"),
        function(err, hash) {
          if (!err) {
            //this console.logs back information about the transaction
            // including transaction Hash, block number, block Hash,gar used etc..
            console.log("Txn Sent and hash is " + JSON.stringify(hash));
          } else {
            console.error(err);
          }
        }
      );
    } else {
      //Alerts if one of the addresses is bad
      alert("Bad Address");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Web3.js & React.js Tutorial</h1>
        <label>Sending Address:</label>
        <input
          type="text"
          name="sendingAddress"
          size="48"
          onChange={this.handleInputChange}
        />
        <br />
        <label>Sending Private Key:</label>
        <input
          type="text"
          name="priKey"
          size="48"
          onChange={this.handleInputChange}
        />
        <br />
        <label>Receiving Address:</label>
        <input
          type="text"
          name="receivingAddress"
          size="48"
          onChange={this.handleInputChange}
        />
        <br />
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          size="48"
          onChange={this.handleInputChange}
        />
        <br />
        <button onClick={this.handleSend}>Send</button>
        <br />
        <button onClick={this.handleCheckAccountBalance}>
          Check Account Balance
        </button>
        <h5>{this.state.sendingAddressBalance}</h5>
        <h5>{this.state.receivingAddressBalance}</h5>
      </div>
    );
  }
}

export default App;
