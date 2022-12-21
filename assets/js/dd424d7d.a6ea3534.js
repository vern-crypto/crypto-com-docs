"use strict";(self.webpackChunkcrypto_com_docs=self.webpackChunkcrypto_com_docs||[]).push([[4348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Supported Environments",sidebar_position:3},l="Supported Environments",i={unversionedId:"defi-wallet/introduction/environments",id:"defi-wallet/introduction/environments",title:"Supported Environments",description:"DeFi Wallet SDK lets you connect your dapps to DeFi Wallet in the following ways:",source:"@site/docs/defi-wallet/introduction/environments.md",sourceDirName:"defi-wallet/introduction",slug:"/defi-wallet/introduction/environments",permalink:"/crypto-com-docs/docs/defi-wallet/introduction/environments",draft:!1,editUrl:"https://github.com/vern-crypto/crypto-com-docs/tree/main/docs/defi-wallet/introduction/environments.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Supported Environments",sidebar_position:3},sidebar:"defiWalletSidebar",previous:{title:"Features",permalink:"/crypto-com-docs/docs/defi-wallet/introduction/features"},next:{title:"Whitelisted Networks",permalink:"/crypto-com-docs/docs/defi-wallet/introduction/whitelisted-networks"}},p={},c=[],d={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supported-environments"},"Supported Environments"),(0,o.kt)("p",null,"DeFi Wallet SDK lets you connect your dapps to DeFi Wallet in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desktop web: Automatically connects to Wallet extension or displays a QR code for users to connect with the Wallet mobile app.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mobile browser: Wallet SDK generates a dynamic deep link that takes users straight to your dapp in the Wallet mobile dapp browser.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Dapp browser in Wallet: Wallet SDK recognizes and connects to the injected web3 provider in Wallet's mobile dapp browser with no need for extra approvals."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,o.kt)("th",{parentName:"tr",align:null},"Key location"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Standalone browser extension"),(0,o.kt)("td",{parentName:"tr",align:null},"Browser")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Extension linked to Ledger hardware wallet"),(0,o.kt)("td",{parentName:"tr",align:null},"Hardware wallet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Extension linked to wallet mobile app (iOS/Android)"),(0,o.kt)("td",{parentName:"tr",align:null},"Mobile device")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Link dapp directly to mobile wallet"),(0,o.kt)("td",{parentName:"tr",align:null},"Mobile device")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dapp running inside mobile wallet browser"),(0,o.kt)("td",{parentName:"tr",align:null},"Mobile device")))))}s.isMDXComponent=!0}}]);