---
title: Chrome Extension Wallet Integration
sidebar_position: 4
---

# Introduction
Compared with a normal web browser application on a phone, the built-in DApp browser in the Crypto.com DeFi Wallet app provides more powerful functionalities and a smooth UX experience for users: 
1. Within the DApp browser, a user can interact with a DApp through multiple approaches, JS Bridge, WalletConnect.
2. A fast and stable connection with DApp can bring a one-step-to-transact experience, which helps users to get rid of scanning QRcode or interactions across applications or even across platforms.
3. A easy way to manage digital assets in the Crypto.com DeFi Wallet app, buy crypto, gain more earnings in DeFi Earn Protocols, and discover more high-investment-value NFT. 
# Wallet Connections
Currently, the DApp browser in Crypto.com DeFi Wallet app supports two kinds of connections with DApp:
## Ethereum.Provider
The Ethereum.Provider interface provides a functional interface and a more stable technical solution(i.e. JS bridge) for DApps to interact with. All the actions and the corresponding callbacks would be transformed as JS calls between DApp and the DApp browser. 
### Methods supported
1. requestAccounts
```
{"id":1634697171550,"name":"requestAccounts"}
```
To ask the user to grant permission to use his wallet address of a specific chain.
2. addEthereumChain
```
{"id":1634697171550,"name":"addEthereumChain","object":{"chainId":"0x152","chainName":"Cronos Mainnet","nativeCurrency":{"name":"VVS","symbol":"vvs","decimals":18},"rpcUrls":["https:\/\/cronos-testnet-3.crypto.org:8545"],"blockExplorerUrls":["https:\/\/cronos.crypto.org\/explorer\/\/"]}}
```
To ask the user to switch to a specific EVM-like chain. This action would be automatically finished by the DApp browser without bothering the user, if this EVM-like chain is supported in the DApp Browser.
3. switchEthereumChain
```
{"id":1653028273548,"name":"switchEthereumChain","object":{"chainId":25}}
```
Similar to the `addEthereumChain`, to ask the user to switch to a specific EVM-like chain. This action would be automatically finished by the DApp browser without bothering the user, if this EVM-like chain is supported in the DApp Browser.
4. signTypedMessage
```
{"id":1633955435461,"name":"signTypedMessage","object":{"data":"0x77c8bfd9eba1b7cb3733f7a592c169a07d9f49f2bbe9f44b7555e62c8cd416ce","raw":"{\"types\":{\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"},{\"name\":\"verifyingContract\",\"type\":\"address\"}],\"Permit\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"deadline\",\"type\":\"uint256\"}]},\"domain\":{\"name\":\"Pancake LPs\",\"version\":\"1\",\"chainId\":56,\"verifyingContract\":\"0x0eD7e52944161450477ee417DE9Cd3a859b14fD0\"},\"primaryType\":\"Permit\",\"message\":{\"owner\":\"0x81080a7e991bcDdDBA8C2302A70f45d6Bd369Ab5\",\"spender\":\"0x10ED43C718714eb63d5aA57B78B54704E256024E\",\"value\":\"31248219154274995\",\"nonce\":\"0x00\",\"deadline\":1633956630}}"}}                 
```
To ask the user to sign a typed message as approval to some actions. The type of the data to sign would be included in the `raw` field of the `object` struct. Calculates an Ethereum-specific signature in the form of 
``` sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))) ```. 
Adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature and would prevent misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.
5. signMessage
```
{"id":1653028273548,"name":"signMessage","object":{"data":"0x77c8bfd9eba1b7cb3733f7a592c169a07d9f49f2bbe9f44b7555e62c8cd416ce"}}
```
To ask the user to sign a message as approval to some actions. The data to sign would be included in the `data` field of the `object` struct.
The sign method calculates an Ethereum specific signature with: ``` sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))```.
6. signPersonalMessage
```
{"id":1653028273548,"name":"signPersonalMessage","object":{"data":"0x77c8bfd9eba1b7cb3733f7a592c169a07d9f49f2bbe9f44b7555e62c8cd416ce"}}
```
Similar to `signMessage`, to ask the user to sign a typed message as approval to some actions. The type of the data to sign would be included in the `raw` field of the `object` struct. The sign method calculates an Ethereum specific signature with: ```sign(keccack256("\x19Ethereum Signed Message:\n" + len(message) + message)))```.
7. signTransaction
```
{"id":1633951323851,"name":"signTransaction",  "object":{"gas":"0x21d29","gasPrice":"0x12a05f200","from":"0x81080a7e991bcdddba8c2302a70f45d6bd369ab5","to":"0x10ed43c718714eb63d5aa57b78b54704e256024e","data":"0x38ed1739000000000000000000000000000000000000000000000000016345785d8a00000000000000000000000000000000000000000000000000000012740d3ec560dd00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000081080a7e991bcdddba8c2302a70f45d6bd369ab500000000000000000000000000000000000000000000000000000000616422fe0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000e9e7cea3dedca5984780bafc599bd69add087d560000000000000000000000000e09fabb73bd3ade0a17ecc321fd13a19e81ce82"}}
```
To ask the user to sign a transaction as approval to contruct the raw data of a transaction to broadcast later. The raw transaction information to sign would be included in the `object`.
### Best practice 
A DApp could take advantage of the methods above to provide an easy-to-use expeprience to users.
1. When a DApp is loading and all JS scripts are loaded, it could ininitiatively call the `requestAccounts` to immediately get an address from a user. 
2. When the chain id set to a DApp is unmatched with expectation or unsupported, it could ininitiatively call the 'switchEthereumChain' to tell the DApp browser which chain would be correct to interact with. 
## WalletConnect
 [WalletConnect](https://docs.walletconnect.com/) is an open protocol to communicate securely between the DApp browser and Dapps (Web3 Apps), which establishes a remote connection (WebSocket). Currently, the DApp browser only supports WalletConnect V1.0. Since the connection is technically based on a WebSocket, it would be comparatively less stable than a JS bridge. But it could set up a connection remotely in cross-platforms or cross-devices scenarios. In WalletConnect, all the actions and the corresponding callbacks would be transformed as a typed message transferred via the underlying WebSockets. 
### Methods supported 
1. wc_sessionRequest \
   The first dispatched JSON RPC request is the connection request including the details of the requesting peers.  Related parameters](https://docs.walletconnect.com/tech-spec#session-request)
2. wc_sessionUpdate \
   This JSON RPC request is dispatched by the Wallet when updating the session. This can occur either when the session is killed by the Wallet, when it provides new accounts or when it changes the active chain id. [Related parameters](https://docs.walletconnect.com/tech-spec#session-update)
3. wallet_switchEthereumChain \
   A RPC method for switching the wallet’s active Ethereum chain([More information](https://eips.ethereum.org/EIPS/eip-3326)). This method accepts a single object parameter, specified by the following TypeScript interface: \
`interface SwitchEthereumChainParameter {
  chainId: string;
}`.
4. eth_sign \
   The sign method calculates an Ethereum specific signature with: sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))).[More information](https://docs.walletconnect.com/json-rpc-api-methods/ethereum#eth_sign)
5. personal_sign \
   Added a prefix to the data so it could not impersonate transactions. We also made this method able to display human readable text when UTF-8 encoded, making it a popular choice for site logins. \
`{"method": "personal_sign", "params": [message, account, password]}`
6. eth_signTypedData \
   Calculates an Ethereum-specific signature in the form of keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)). [More information](https://docs.walletconnect.com/json-rpc-api-methods/ethereum#eth_signtypeddata)
7. eth_signTypedData_v3 \
   The method signTypedData_v3 currently represents the latest version of the [EIP-712 spec](https://eips.ethereum.org/EIPS/eip-712), making it the most secure method for signing cheap-to-verify data on-chain that we have yet.
8. eth_signTypedData_v4 \
   The method signTypedData_v4 currently represents the latest version of the [EIP-712 spec](https://eips.ethereum.org/EIPS/eip-712), with added support for arrays and with a breaking fix for the way structs are encoded. 
   
* for `eth_signTypedData_v3` and `eth_signTypedData_v4`, you can also get more information from this [article](https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26)
# Network Switch
For DApps that support transactions on multiple chains, the DApp browser also provides a quick way for users to switch chains. By simply tapping the chain icon on the right corner of the top bar to pop up a supported chains list, a user can switch to any chain item in the list. The chain information including the chain id and the RPC URL (if necessary) would update to the DApp accordingly.
# Wallet Switch
If a user owns multiple wallets in the app, he can also quickly switch to the desired wallet by simply tapping the avatar icon on the right-most corner of the top bar.
# Reference
1. [Ethereum JSON RPC methods](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sign)
2. [Wallet Connect JSON RPC methods](https://docs.walletconnect.com/json-rpc-api-methods/ethereum)