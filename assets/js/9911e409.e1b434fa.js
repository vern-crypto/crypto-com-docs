"use strict";(self.webpackChunkcrypto_com_docs=self.webpackChunkcrypto_com_docs||[]).push([[1278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"Injected Provider",sidebar_position:5},a="Injected Provider",s={unversionedId:"defi-wallet/introduction/injected-provider",id:"defi-wallet/introduction/injected-provider",title:"Injected Provider",description:"The DeFi Wallet browser extension injects an Ethereum provider, as specified by EIP-1193, into the browser at window.ethereum.",source:"@site/docs/defi-wallet/introduction/injected-provider.md",sourceDirName:"defi-wallet/introduction",slug:"/defi-wallet/introduction/injected-provider",permalink:"/crypto-com-docs/docs/defi-wallet/introduction/injected-provider",draft:!1,editUrl:"https://github.com/vern-crypto/crypto-com-docs/tree/main/docs/defi-wallet/introduction/injected-provider.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Injected Provider",sidebar_position:5},sidebar:"defiWalletSidebar",previous:{title:"Whitelisted Networks",permalink:"/crypto-com-docs/docs/defi-wallet/introduction/whitelisted-networks"},next:{title:"Web SDK",permalink:"/crypto-com-docs/docs/category/web-sdk"}},l={},c=[{value:"Wallet browser extension injects environment variables",id:"wallet-browser-extension-injects-environment-variables",level:2},{value:"Benefits of Using DeFi Wallet SDK vs. the Injected Provider",id:"benefits-of-using-defi-wallet-sdk-vs-the-injected-provider",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"injected-provider"},"Injected Provider"),(0,i.kt)("p",null,"The DeFi Wallet browser extension injects an Ethereum provider, as specified by ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),", into the browser at window.ethereum."),(0,i.kt)("p",null,"You can use this provider in your dapp to request user's Ethereum accounts, read on-chain data, and have the user sign messages and transactions, without using the DeFi Wallet SDK."),(0,i.kt)("h2",{id:"wallet-browser-extension-injects-environment-variables"},"Wallet browser extension injects environment variables"),(0,i.kt)("p",null,"if you are installed wallet browser extension, then it will auto inject followings variables to window:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Injected Provider(Adapt to different eco)"',title:'"Injected',"Provider(Adapt":!0,to:!0,different:!0,'eco)"':!0},"interface Window {\n  ethereum?: Provider;\n  deficonnectProvider?: Provider;\n  aptos?: PetraProvider;\n  petra?: PetraProvider;\n  martian?: MartianProvider;\n  deficonnect: { aptos?: PetraProvider; ethereum?: Provider };\n}\n")),(0,i.kt)("p",null,"but you don't need care about it, DeFi Wallet SDK will auto handle it."),(0,i.kt)("h2",{id:"benefits-of-using-defi-wallet-sdk-vs-the-injected-provider"},"Benefits of Using DeFi Wallet SDK vs. the Injected Provider"),(0,i.kt)("p",null,"The basic functionality between DeFi Wallet SDK and the DeFi Wallet injected provider is very similar. However, the SDK provides some additional helpful features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TODO: Implement")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isDeficonnectProvider")),(0,i.kt)("p",null,"Identifies if this provider is DeFi Wallet."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="request(args)"',title:'"request(args)"'},"interface RequestArguments {\n  readonly method: string;\n  readonly params?: readonly unknown[] | object;\n}\n")),(0,i.kt)("p",null,"DeFi Wallet uses ",(0,i.kt)("inlineCode",{parentName:"p"},"request(args)")," to wrap an RPC API. The params and return value vary by RPC method."),(0,i.kt)("p",null,"If the request fails for any reason, the Promise will reject with an Ethereum RPC Error."),(0,i.kt)("p",null,"DeFi Wallet supports many standardized Ethereum RPC methods and others, including:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const dappAllowMethods = [\n  "aptos_createCollection",\n  "aptos_createToken",\n  "aptos_generateSignAndSubmitTransaction",\n  "aptos_generateTransaction",\n  "aptos_getAccount",\n  "aptos_getAccountResources",\n  "aptos_getAccountTransactions",\n  "aptos_getChainId",\n  "aptos_getLedgerInfo",\n  "aptos_getTransactionByHash",\n  "aptos_getTransactions",\n  "aptos_signAndSubmitTransaction",\n  "aptos_signAndSubmitTransactionMartian",\n  "aptos_signGenericTransaction",\n  "aptos_signMessage",\n  "aptos_signTransaction",\n  "aptos_signTransactionMartian",\n  "aptos_submitTransactionMartian",\n  "cosmos_getAccounts",\n  "cosmos_sendTransaction",\n  "cosmos_signDirect",\n  "cosmos_proxyJsonRpcRequest",\n  "dapp_ping",\n  "dc_sessionInit",\n  "dc_sessionRequest",\n  "dc_sessionUpdate",\n  "eth_accounts",\n  "eth_chainId",\n  "eth_proxyJsonRpcRequest",\n  "eth_sendTransaction",\n  "eth_sign",\n  "eth_signTransaction",\n  "eth_signTypedData",\n  "eth_signTypedData_v1",\n  "eth_signTypedData_v2",\n  "eth_signTypedData_v3",\n  "eth_signTypedData_v4",\n  "eth_proxyJsonRpcRequest",\n  "eth_requestAccounts",\n  "net_version",\n  "personal_sign",\n  "wallet_addEthereumChain",\n  "wallet_getAllAccounts",\n  "wallet_switchEthereumChain",\n  "wallet_watchAsset",\n];\n')))}p.isMDXComponent=!0}}]);