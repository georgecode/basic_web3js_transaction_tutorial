if not installed already install create-react-app globally
web_wallet:> npm i -g create-react-app

Create a new react boiler plate by running create-react-app in project’s main directory.
web_wallet:> create-react-app web_wallet

clean up boiler plate
index.js should look like this EXAMPLE
App.js should look like this EXAMPLE

delete
logo.svg
index.css
//END CLEAN UP

//Start sign up for infura
sign up for infura
https://infura.io/

create new project

name it web_wallet

select KOVAN as end point, copy end point

link for more info about end points

//END sign up for infura
//install web 3 && ethereumjs-tx

install web3.js
:>npm install web3

install ethereumjs-tx
:>npm i ethereumjs-tx

import Web3 from "web3";
import Tx from "ethereumjs-tx"

generate keys copy and save them
YOU WILL NEED THEM LATER
these will act as you test account keys
ispect page for keys

//End web3 && ethereumjs-tx install

//Add web 3 var to app.js

//END Add web 3 var

//Start sign up for Gitter.i0

https://gitter.im/kovan-testnet/faucet

with github or twitter

paste public key to chat

wait about 1 min for conformation and funding
etherscan link can show when transaction goes through

this will act as you test account to send funds to
and receive funds from
//End sign up for gitter

add check balance

//Generate project keys
Now generat another pair of keys
you can do this by refreshing the react page you created

copy and save them, they will act as your project keys

//End Generate Project Keys

//Check account balances to make sure everything is working

check App.js
run it

All amounts are in wei ~ 0.000000000000000001 Ether

Account 1 (Your test account The one you funded on gitter) should have 3000000000000000000 wei

Account 2 (Your Project account) should have 0 wei

//END Check account balances

/
/
/
/
/
/
/
/
/
/

## Create React APP STUFF BELOW

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
