---
title: Chrome Extension Wallet Integration (Aptos)
sidebar_position: 2
---

# Introduction

Crypto.com | Wallet Extension now support the [Aptos blockchain](https://aptos.dev/). Crypto.com | Wallet Extension is a free web application. Using Crypto.com | Wallet Extension, a user can store and transfer assets, and interact with the decentralized applications (dApps), all on the Aptos blockchain.

This developer documentation describes how to integrate Wallet into your dApp and enable your user to connect their Wallet to the Aptos blockchain.

NOTE: Crypto.com | Wallet Extension is currently available as a browser extension on [Google Chrome](https://chrome.google.com/webstore/detail/cryptocom-wallet-extensio/hifafgmccdpekplomjjkcfgodnhcellj).

The rest of the documentation describes in detail the following steps for your dApp integration:

* Checking for Crypto.com | Wallet Extension.
* Connecting to Crypto.com | Wallet Extension.
* Getting a user to sign, and optionally, send, a transaction to the Aptos blockchain.
* Getting a user to sign a message.
* Handling event updates from the wallet.
* Error messages.

***

# Interface of `window.deficonnect.aptos`

```ts
import type { Types } from 'aptos'

enum Network {
  Testnet = 'Testnet',
  Mainnet = 'Mainnet',
  Devnet = 'Devnet',
  'Aptos Testnet' = 'Testnet',
  Aptos = 'Mainnet',
  'Aptos Devnet' = 'Devnet',
}

type Networks = keyof typeof Network

interface NetworkConfig {
  name: string
  chainType: 'aptos'
  chainId: string
  rpcUrl: string
  symbol: string
  explorer?: string
}

interface IAccount {
  publicKey: MaybeHexString | undefined
  address: MaybeHexString | undefined
  method?: string
  status: number
}

interface IOptions {
  sender?: MaybeHexString
  sequence_number?: any
  max_gas_amount?: string,
  gas_unit_price?: string,
  gas_currency_code?: string,
  expiration_timestamp_secs?: string,
}

interface SignMessagePayload {
  address?: boolean // Should we include the address of the account in the message
  application?: boolean // Should we include the domain of the dapp
  chainId?: boolean // Should we include the current chain id the wallet is connected to
  message: string // The message to be signed and displayed to the user
  nonce: string // A nonce the dapp should generate
}

interface SignMessageResponse {
  address: string
  application: string
  chainId: number
  fullMessage: string // The message that was generated to sign
  message: string // The message passed in by the user
  nonce: string
  prefix: string // Should always be APTOS
  signature: string // The signed full message
}

interface IDeficonnectAptos {
  connect: (network?: NetworkConfig) => Promise<IAccount>;
  account: () => Promise<IAccount>;
  isConnected: () => Promise<boolean>;
  signAndSubmitTransaction(
    transaction: Types.TransactionPayload,
    options?: IOptions
  ): Promise<Types.Transaction>;
  signTransaction(transaction: Types.TransactionPayload, options?: IOptions): Promise<Uint8Array>;
  signMessage(message: SignMessagePayload): Promise<SignMessageResponse>;
  disconnect(): Promise<void>;
  network(): Promise<Networks>;
  onAccountChange: (listener: (newAddress: IAccount) => void) => void;
  onNetworkChange: (listener: (network: { networkName: Networks }) => void) => void;
}
```

***

# Connecting to Crypto.com | Wallet Extension

To use Crypto.com | Wallet Extension with your dApp, your user must first install Crypto.com | Wallet Extension on their Chrome browser. Crypto.com | Wallet Extension injects an `aptos` object inside the `deficonnect` object of [window](https://developer.mozilla.org/en-US/docs/Web/API/Window) on any web app the user visits.

To check if the user has installed Crypto.com | Wallet Extension, perform the below check:
```javascript
const isInstalled = window.deficonnect.aptos
```
If Crypto.com | Wallet Extension is not installed, you can prompt the user to first install Crypto.com | Wallet Extension and provide the below installation instructions. For example, see below:
```javascript
const getWallet = () => {
    if (window.deficonnect && window.deficonnect.aptos) {
        return window.deficonnect.aptos;
    } else {
        window.open('https://crypto.com/defi-wallet#wallet_extension', `_blank`);
    }
}
```
## Installing Crypto.com | Wallet Extension
To install Crypto.com | Wallet Extension on your Chrome browser, you can download it from the [chrome store](https://chrome.google.com/webstore/detail/cryptocom-wallet-extensio/hifafgmccdpekplomjjkcfgodnhcellj).
## Connecting to Crypto.com | Wallet Extension
After confirming that the web app has the `deficonnect.aptos` object, we can connect to Wallet by calling `deficonnect.aptos.connect()`.

When you call `deficonnect.aptos.connect()`, it prompts the user to allow your web app to make additional calls to the Wallet, and obtains from the user basic information like the address and public key. It also exposes a convenience isConnected.

See the example code below:
```javascript
await window.deficonnect.aptos.connect(); // { address: string, publicKey: string }

await window.deficonnect.aptos.isConnected(); // true
```
**NOTE**: After a web application connects to the wallet for the first time, it becomes whitelisted session. Once whitelisted, it's possible for the application to automatically connect to the wallet on subsequent visits or page refreshes.

## Switch network
Crypto.com | Wallet Extension also support switch network, you can pass `networkConfig` parameter into `connect()`, and it will trigger network switch confirmation popup.

See the example code below:
```typescript
interface AptosNetworkConfig {
  name: string
  chainType: 'aptos'
  chainId: string
  rpcUrl: string
  symbol: string
  explorer?: string
}

const networkConfig: AptosNetworkConfig = {
  chainId: '2',
  chainType: 'aptos',
  name: 'Testnet',
  rpcUrl: 'https://fullnode.testnet.aptoslabs.com/v1',
  symbol: 'APT',
}

await window.deficonnect.aptos.connect(networkConfig); // { address: string, publicKey: string }

```

## Disconnecting Crypto.com | Wallet Extension
When you want the web app to forget about the connection status with the Wallet, you can do this by calling `window.deficonnect.aptos.disconnect()` in your web app. See below:
```javascript
await window.deficonnect.aptos.disconnect()
```
**NOTE**: After disconnecting, the web app must reconnect to the Wallet if user want to make requests again.

***

# Sending a Transaction
After the web app is connected to the Wallet, the web app can prompt the user to sign and send transactions to the Aptos blockchain.

Crypto.com | Wallet Extension API handles the transactions in the following two ways:

1. Sign a transaction and submit it to the Aptos blockchain. Return a pending transaction to the web app.
2. Sign a transaction but do not submit the transaction to the Aptos blockchain. Return the signed transaction to the web app, for the web app to submit the transaction.

See the below examples for both the options.
> For more on Aptos transactions, see the 
[Aptos Typescript SDK](https://aptos-labs.github.io/ts-sdk-doc/)
 and 
[Transactions guide from Aptos](https://aptos.dev/guides/creating-a-signed-transaction)
.
## Sign and submit
The below code example shows how to use the `signAndSubmitTransaction()` API to sign the transaction and send it to the Aptos blockchain.
```typescript
interface IResponse {
  hash: string
  sender?: string
  sequence_number?: string
  max_gas_amount?: string
  gas_unit_price?: string
  expiration_timestamp_secs?: string
  payload?: TransactionPayload
  signature?: AccountSignature
}

const wallet = window.deficonnect.aptos.connect(); // see "Connecting"

// Example Transaction, following an [EntryFunctionPayload](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/src/generated/models/EntryFunctionPayload.ts#L8-L21)
const transaction = {
    arguments: [wallet.address, '717'],
    function: '0x1::coin::transfer',
    type: 'entry_function_payload',
    type_arguments: ['0x1::aptos_coin::TestCoin'],
};


try {
    const pendingTransaction: IResponse = await window.deficonnect.aptos.signAndSubmitTransaction(transaction);

    // In most cases a dApp will want to wait for the transaction, in these cases you can use the typescript sdk
    const client = new AptosClient('https://testnet.aptoslabs.com');
    client.waitForTransaction(pendingTransaction.hash);
} catch (error) {
    // see "Errors"
}
```
## Sign only
The below code example shows how to use the `signTransaction()` API to only sign the transaction, without submitting it to the Aptos blockchain.
```javascript
const wallet = window.deficonnect.aptos.connect(); // see "Connecting"

// Example Transaction
const transaction = {
    arguments: [wallet.address, '717'],
    function: '0x1::coin::transfer',
    type: 'entry_function_payload',
    type_arguments: ['0x1::aptos_coin::TestCoin'],
};

try {
    const signTransaction = await window.deficonnect.aptos.signTransaction(transaction)
} catch (error) {
    // see "Errors"
}
```

***
# Signing Messages
A web app can also request the user to sign a message, by using API `window.deficonnect.aptos.signMessage(payload: SignMessagePayload)`.

Web apps can write their own message, then send it to the Wallet. The user will be prompted to sign that message, and then the signed message will be returned to the web app.
The following is provided for additional security.
- `signMessage(payload: SignMessagePayload)` prompts the user with the `payload.message` to be signed
    - returns `Promise<SignMessageResponse>`

Types:
```typescript
export interface SignMessagePayload {
  address?: boolean; // Should we include the address of the account in the message
  application?: boolean; // Should we include the domain of the dapp
  chainId?: boolean; // Should we include the current chain id the wallet is connected to
  message: string; // The message to be signed and displayed to the user
  nonce: string; // A nonce the dapp should generate
}

export interface SignMessageResponse {
  address: string;
  application: string;
  chainId: number;
  fullMessage: string; // The message that was generated to sign
  message: string; // The message passed in by the user
  nonce: string,
  prefix: string, // Should always be APTOS
  signature: string; // The signed full message
}
```
## Verifying a signature
```typescript
import nacl from 'tweetnacl';

const message = "hello";
const nonce = "random_string"

try {
  const response = await window.deficonnect.aptos.signMessage({
    message,
    nonce,
  });
  const { publicKey } = await window.deficonnect.aptos.account();
  // Remove the 0x prefix
  const key = publicKey!.slice(2, 66);
  const verified = nacl.sign.detached.verify(Buffer.from(response.fullMessage), 
                                             Buffer.from(response.signature, 'hex'), 
                                             Buffer.from(key, 'hex'));
  console.log(verified);
} catch (error) {
  console.error(error);
}
```

***
# Event Listening
## `onNetworkChange()` and `network()`
A dApp may want to make sure that a user is on the right network. In this case you will need to check what network the wallet is using.

Default networks provided by the wallet:
```javascript
// default networks in the wallet
enum Network {
  Testnet = 'Testnet',
  Mainnet = 'Mainnet',
  Devnet = 'Devnet'
}

// Current network
let network = await window.deficonnect.aptos.network();

// event listener for network changing
window.deficonnect.aptos.onNetworkChange((newNetwork) => {
  network = newNetwork.networkName;
});
```
## `onAccountChange()`
In the Wallet a user may change accounts while interacting with your app. To check for these events you can listen for them with `onAccountChange`
```javascript
// get current account
let currentAccount = await window.aptos.account();

// event listener for disconnecting
window.deficonnect.aptos.onAccountChange((newAccount) => {
  // If the new account has already connected to your app then the newAccount will be returned
  if (newAccount) {
    currentAccount = newAccount;
  } else {
    // Otherwise you will need to ask to connect to the new account
    currentAccount = window.deficonnect.aptos.connect();
  }
});
```
## `onDisconnect()`
A user may choose to disconnect from your dApp. In that case you will want to update your state.
```js
// get current connection status
let connectionStatus = await window.deficonnect.aptos.isConnected();

// event listener for disconnecting
window.deficonnect.aptos.onDisconnect(() => {
  connectionStatus = false;
});
```
# Errors
When making requests to Petra Wallet API, you may receive an error. The following is a partial list of the possible errors and their corresponding codes:

## Code 4000
- Code: 4000
- Name: No Accounts
- Message: No accounts found.
## Code 4001
- Code: 4001
- Name: User rejection
- Message: The user rejected the request.
## Code 4100
- Code: 4100
- Name: Unauthorized
- Message: The requested method and/or account has not been authorized by the user.