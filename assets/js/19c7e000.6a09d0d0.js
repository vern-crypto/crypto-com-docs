"use strict";(self.webpackChunkcrypto_com_docs=self.webpackChunkcrypto_com_docs||[]).push([[1370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={title:"Setup",sidebar_position:3},a="Setup",l={unversionedId:"defi-wallet/web-sdk/setup",id:"defi-wallet/web-sdk/setup",title:"Setup",description:"This page explains how to integrate DeFi Wallet SDK as the default provider for your dapp using web3.js. You can follow a similar pattern if you are using ethers.js.",source:"@site/docs/defi-wallet/web-sdk/setup.md",sourceDirName:"defi-wallet/web-sdk",slug:"/defi-wallet/web-sdk/setup",permalink:"/crypto-com-docs/docs/defi-wallet/web-sdk/setup",draft:!1,editUrl:"https://github.com/vern-crypto/crypto-com-docs/tree/main/docs/defi-wallet/web-sdk/setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Setup",sidebar_position:3},sidebar:"defiWalletSidebar",previous:{title:"Install",permalink:"/crypto-com-docs/docs/defi-wallet/web-sdk/Install"},next:{title:"Connect",permalink:"/crypto-com-docs/docs/defi-wallet/web-sdk/connect"}},p={},s=[{value:"Setting up DeFi Wallet SDK",id:"setting-up-defi-wallet-sdk",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Initializing",id:"initializing",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup"},"Setup"),(0,i.kt)("p",null,"This page explains how to integrate DeFi Wallet SDK as the default provider for your dapp using web3.js. You can follow a similar pattern if you are using ethers.js."),(0,i.kt)("h2",{id:"setting-up-defi-wallet-sdk"},"Setting up DeFi Wallet SDK"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Instructions are in TypeScript. The usage is the same in JavaScript, except for the occasional TypeScript type annotation such as string[] or as any.")),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Typescript project set up locally, created with ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn create react-app my-app --template typescript")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"similar")),(0,i.kt)("li",{parentName:"ul"},"web3.js installed using ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install web3")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"similar"))),(0,i.kt)("h3",{id:"initializing"},"Initializing"),(0,i.kt)("p",null,"In your project, add the following code to initialize DeFi Wallet SDK and a Web3 object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { DeFiWeb3Connector } from "@deficonnect/web3-connector";\n\nconst connector = new DeFiWeb3Connector({\n  supportedChainIds: [1],\n  chainType: "eth", // only support \'eth\' for DeFiWeb3Connector\n  chainId: "25",\n  rpcUrls: {\n    1: "https://mainnet.infura.io/v3/INFURA_API_KEY",\n    25: "https://evm-cronos.crypto.org/",\n  },\n});\n')))}u.isMDXComponent=!0}}]);