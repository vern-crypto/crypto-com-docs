---
title: Chrome Extension Wallet Integration
sidebar_position: 20
---

# Quick Start

you can use our SDK to integrate our DeFiWallet(Chrome Extension & Mobile).
more detail: [deficonnect-monorepo](https://github.com/crypto-com/deficonnect-monorepo).

if you use [web3-react](https://www.npmjs.com/package/web3-react), you only need integrate [@deficonnect/web3-connector](https://github.com/crypto-com/deficonnect-monorepo/blob/develop/packages/web3-connector), this package implement the `AbstractConnector` from `web3-react`.

if not. you can import [@deficonnect/provider](https://github.com/crypto-com/deficonnect-monorepo/blob/develop/packages/provider). This package is used to help dapps connect to crypto.com wallet extension. Automatically detect the running environment, and proxy the method call to the provider.


# Basic Considerations


Once Wallet Extension is installed and running, you should find that new browser tabs have a `window.deficonnectProvider` object available in the developer console. This is how your website will interact with Wallet Extension.

> Remark：
You also can find a window.ethereum object. If you not install other Wallet Extension, this will  interact with Crypto.com | Wallet Extension. If you install other like MetaMask, window.ethereum object will interact with MetaMask.

### Web3 Browser Detection

To verify if the browser is running `Crypto.com | Wallet Extension`, copy and paste the code snippet below in the developer console of your web browser:

``` javascript
if (typeof window.deficonnectProvider !== 'undefined') {
  console.log('Crypto.com | Wallet Extension is installed!');
}
```

You can review the full API for the `window.deficonnectProvider` object [here](#deficonnectprovider-api).

> Remark：
because Chrome Extension [MV3](https://developer.chrome.com/docs/extensions/mv3/) load delay, you maybe need a timeout to detect `window.deficonnectProvider`


# DeFiConnectProvider API
## Properties

### isDeficonnectProvider

This property is non-standard.

true if the user has `Crypto.com | Wallet Extension` installed


### connected

Returns `true` if the provider is connected to the current chain, and `false` otherwise.


### chainType

represents the chainType where the current wallet is located.
currently support 'eth' | 'cosmos'.

example: 
if use select `cronos` `ethereum` `ropsten` or other evm like chain, the chainType will be `eth`.
if use select `crypto.org` or `cosmos`, the chainType will be `cosmos`.


### chainId
if `chainType == 'eth'` the chainId will be the Hex value for chainId:

|Hex |Decimal|Network
|----|-------|---------
|0x1 |1      |Ethereum Main Network (Mainnet)
|0x3 |3      |Ropsten Test Network
|0x4 |4      |Rinkeby Test Network
|0x5 |5      |Goerli Test Network
|0x2a|42     |Kovan Test Network

if `chainType == 'cosmos'` the chainId will be the value for chainId:

|chainId   |Network
|----------|---------
|crypto-org-chain-mainnet-1|Crypto.org Main Network (Mainnet)
|cosmoshub-4|Cosmos Main Network


### networkVersion
if `chainType == 'eth'` the chainId will be the Decimal value for chainId.
if `chainType == 'cosmos'` the chainId will be same as chainId


### accounts

current selected wallet address:

for eth: `0x615D68f12e953F61725d4A1C0532719E3F74651E`

for Crypto.org or Csomos: `cro1kdk6vpf5d5qphyqy70rx05nklmypqk64ucn52p` or `cosmos15rkfcvw0qq85v79l6m6gfwz3an4e6zw9hnwcsd`


## Methods

We have implemented all methods which defined in [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)

## Events

We have implemented all events which defined in [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)



## Errors
All errors thrown or returned by the Crypto.com | Wallet Extension provider follow this interface:

```javascript
interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}
```

The `ethereum.request(args)` method throws errors eagerly. You can often use the error `code` property to determine why the request failed. Common codes and their meaning include:

`4001`
The request was rejected by the user
`-32602`
The parameters were invalid
`-32603`
Internal error
For the complete list of errors, please see [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193#provider-errors) and [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474#error-codes).


# Ethereum RPC API

## personal_sign

The sign method calculates an Ethereum specific signature with:`sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))`.

By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature. This prevents misuse where a malicious DApp can sign arbitrary data \(e.g. transaction\) and use the signature to impersonate the victim.

**Note** See ecRecover to verify the signature.

**Parameters**

message, account

1. `DATA`, N Bytes - message to sign.
2. `DATA`, 20 Bytes - address.

**Returns**

`DATA`: Signature

**Example**

```javascript
// Request
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "personal_sign",
  "params":["0xdeadbeaf","0x9b2055d370f73ec7d8a03e965129118dc8f5bf83"],
}

// Result
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

## eth_sign

The sign method calculates an Ethereum specific signature with: `sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))`.

By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature. This prevents misuse where a malicious DApp can sign arbitrary data \(e.g. transaction\) and use the signature to impersonate the victim.

**Note** the address to sign with must be unlocked.

**Parameters**

account, message

1. `DATA`, 20 Bytes - address.
2. `DATA`, N Bytes - message to sign.

**Returns**

`DATA`: Signature

**Example**

```javascript
// Request
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_sign",
  "params": ["0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", "0xdeadbeaf"],
}


// Result
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

An example how to use solidity ecrecover to verify the signature calculated with `eth_sign` can be found [here](https://gist.github.com/bas-vk/d46d83da2b2b4721efb0907aecdb7ebd). The contract is deployed on the testnet Ropsten and Rinkeby.

## eth_signTypedData

Calculates an Ethereum-specific signature in the form of `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`

By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature. This prevents misuse where a malicious DApp can sign arbitrary data \(e.g. transaction\) and use the signature to impersonate the victim.

**Note** the address to sign with must be unlocked.

**Parameters**

account, message

1. `DATA`, 20 Bytes - address.
2. `DATA`, N Bytes - message to sign containing type information, a domain separator, and data

**Example** Parameters

```javascript
[
  "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
  {
    types: {
      EIP712Domain: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "version",
          type: "string",
        },
        {
          name: "chainId",
          type: "uint256",
        },
        {
          name: "verifyingContract",
          type: "address",
        },
      ],
      Person: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "wallet",
          type: "address",
        },
      ],
      Mail: [
        {
          name: "from",
          type: "Person",
        },
        {
          name: "to",
          type: "Person",
        },
        {
          name: "contents",
          type: "string",
        },
      ],
    },
    primaryType: "Mail",
    domain: {
      name: "Ether Mail",
      version: "1",
      chainId: 1,
      verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    },
    message: {
      from: {
        name: "Cow",
        wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
      },
      to: {
        name: "Bob",
        wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
      },
      contents: "Hello, Bob!",
    },
  },
];
```

**Returns**

`DATA`: Signature

**Example**

```javascript
// Request
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_signTypedData",
  "params": ["0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", {see above}],
}
'

// Result
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0x4355c47d63924e8a72e509b65029052eb6c299d53a04e167c5775fd466751c9d07299936d304c153f6443dfa05f40ff007d72911b6f72307f996231605b915621c"
}
```

## eth_sendTransaction

Creates new message call transaction or a contract creation, if the data field contains code.

**Parameters**

1. `Object` - The transaction object
2. `from`: `DATA`, 20 Bytes - The address the transaction is send from.
3. `to`: `DATA`, 20 Bytes - \(optional when creating new contract\) The address the transaction is directed to.
4. `data`: `DATA` - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)
5. `gas`: `QUANTITY` - \(optional\) Integer of the gas provided for the transaction execution. It will return unused gas.
6. `gasPrice`: `QUANTITY` - \(optional, default: To-Be-Determined\) Integer of the gasPrice used for each paid gas
7. `value`: `QUANTITY` - \(optional\) Integer of the value sent with this transaction
8. `nonce`: `QUANTITY` - \(optional\) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.

**Example** Parameters

```javascript
[
  {
    from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
    to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
    data:
      "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
    gas: "0x76c0", // 30400
    gasPrice: "0x9184e72a000", // 10000000000000
    value: "0x9184e72a", // 2441406250
    nonce: "0x117", // 279
  },
];
```

**Returns**

`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

Use [eth_getTransactionReceipt](https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactionreceipt) to get the contract address, after the transaction was mined, when you created a contract.

**Example**

```javascript
// Request
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_sendTransaction",
  "params":[{see above}],
}

// Result
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

## eth_signTransaction

Signs a transaction that can be submitted to the network at a later time using with `eth_sendRawTransaction`

**Parameters**

1. `Object` - The transaction object
2. `from`: `DATA`, 20 Bytes - The address the transaction is send from.
3. `to`: `DATA`, 20 Bytes - \(optional when creating new contract\) The address the transaction is directed to.
4. `data`: `DATA` - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)
5. `gas`: `QUANTITY` - \(optional\) Integer of the gas provided for the transaction execution. It will return unused gas.
6. `gasPrice`: `QUANTITY` - \(optional, default: To-Be-Determined\) Integer of the gasPrice used for each paid gas
7. `value`: `QUANTITY` - \(optional\) Integer of the value sent with this transaction
8. `nonce`: `QUANTITY` - \(optional\) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.

**Example** Parameters

```javascript
[
  {
    from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
    to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
    data:
      "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
    gas: "0x76c0", // 30400
    gasPrice: "0x9184e72a000", // 10000000000000
    value: "0x9184e72a", // 2441406250
    nonce: "0x117", // 279
  },
];
```

**Returns**

`DATA` - the signed transaction data

**Example**

```javascript
// Request
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_signTransaction",
  "params":[{see above}],
}

// Result
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

## eth_sendRawTransaction

Creates new message call transaction or a contract creation for signed transactions.

**Parameters**

1. `DATA`, the signed transaction data.

**Returns**

`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

Use [eth_getTransactionReceipt](https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactionreceipt) to get the contract address, after the transaction was mined, when you created a contract.

**Example**

```javascript
// Request
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_sendRawTransaction",
  "params":[
    "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f07244567"
  ],
}

// Result
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

##  wallet_addEthereumChain
> This method is specified by [EIP-3085](https://eips.ethereum.org/EIPS/eip-3085).

**Parameters**

interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}
**Returns**
`null` - The method returns null if the request was successful, and an error otherwise.

### Description
Creates a confirmation asking the user to add the specified chain to Wallet. The user may choose to switch to the chain once it has been added.

As with any method that causes a confirmation to appear, wallet_addEthereumChain should only be called as a result of direct user action, such as the click of a button.

Wallet stringently validates the parameters for this method, and will reject the request if any parameter is incorrectly formatted. In addition, Wallet will automatically reject the request under the following circumstances:

If the RPC endpoint doesn't respond to RPC calls.
If the RPC endpoint returns a different chain ID when eth_chainId is called.
If the chain ID corresponds to any default Wallet chains.
Wallet does not yet support chains with native currencies that do not have 18 decimals, but may do so in the future.


## wallet_switchEthereumChain

> This method is specified by [EIP-3326](https://eips.ethereum.org/EIPS/eip-3326).

**Parameters**
- about the chain that Wallet will switch to.

**Returns**
- null - The method returns null if the request was successful, and an error otherwise.

**Example**

```javascript
// Request
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "wallet_switchEthereumChain",
  "params":[
    {
      chainId: '0x1'
    }
  ],
}

// Result
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": null,
}
```

# Cosmos RPC API

## cosmos_sendTransaction

IBC request demo
``` json
{
    "id":1633401844820623,
    "jsonrpc":"2.1",
    "method":"cosmos_sendTransaction",
    "params":[
        {
            "signerAddress":"tcro1sqkt6egk7pgjt7deh52truhfvhznagc7tdqmuj",
            "signDoc":{
                "chainId":"testnet-croeseid-4",
                "accountNumber":"693",
                "body":{
                    "messages":[
                        {
                            "typeUrl": "/cosmos.bank.v1beta1.MsgSend",
			     "value": {
				"fromAddress": "senderAddress",
				"toAddress": "recipientAddress",
				"amount": [...amount],
			      },
                        }
                    ],
                    "memo":"",
                    "timeoutHeight":"0",
                    "extensionOptions":[

                    ],
                    "nonCriticalExtensionOptions":[

                    ]
                },
                "authInfo":{
                    "signerInfos":[
                        {
                            "publicKey":{
                                "typeUrl":"/cosmos.crypto.secp256k1.PubKey",
                                "value":"CiECXrin6CVU1nVW7m4wbHZq8m5uepUEeqtkavjoha7A1vo="
                            },
                            "modeInfo":{
                                "single":{
                                    "mode":"SIGN_MODE_DIRECT"
                                }
                            },
                            "sequence":"6"
                        }
                    ],
                    "fee":{
                        "amount":[{
                          "denom": "",
                          "amount": ""
                        }],
                        "gasLimit":"120000",
                        "payer":"",
                        "granter":""
                    }
                }
            }
        }
    ],
}
```

response demo for the cosmos_sendTransaction request:
``` json
{
  "id": xxx,
  "jsonrpc": '2.1',
  "result": "CsUBCsIBCikvaWJjLmFwcGxpY2F0aW9ucy50cmFuc2Zlci52MS5Nc2dUcmFuc2ZlchKUAQoIdHJhbnNmZXISC2NoYW5uZWwtMTI5GhUKCGJhc2V0Y3JvEgkxMDAwMDAwMDAiK3Rjcm8xc3FrdDZlZ2s3cGdqdDdkZWg1MnRydWhmdmh6bmFnYzd0ZHFtdWoqK3RjcmMxc3l5cTVsNWVyMHhhbXc1dnl2cDJ3cjY5NjY3bmR4NDQ5OHQ2YTUyADiA2Lbbz7jO1hYSawpQCkYKHy9jb3Ntb3MuY3J5cHRvLnNlY3AyNTZrMS5QdWJLZXkSIwohAl64p+glVNZ1Vu5uMGx2avJubnqVBHqrZGr46IWuwNb6EgQKAggBGBwSFwoRCghiYXNldGNybxIFMjAwMDAQwKkHGkAHTBUrbrFZL2zT0p8sIDn5TEVnnAFnf08fvWkDOexO/zGDLkB62OJPL7rNO82lNLLTI/cgDhr5PD6xM3CLbt/X" // RawTx base64 encode
}
```

> you can use this package to easier support cosmos chain [@deficonnect/cosmos-signer](https://github.com/crypto-com/deficonnect-monorepo/tree/develop/packages/cosmos-signer)
