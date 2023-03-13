"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[1378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Identifying Wallets",s={unversionedId:"oasis-core-ledger/usage/wallets",id:"oasis-core-ledger/usage/wallets",title:"Identifying Wallets",description:"Before following the instructions below, make sure your Ledger wallet is",source:"@site/docs/oasis-core-ledger/usage/wallets.md",sourceDirName:"oasis-core-ledger/usage",slug:"/oasis-core-ledger/usage/wallets",permalink:"/oasis-core-ledger/usage/wallets",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core-ledger/edit/master/docs/usage/wallets.md",tags:[],version:"current",lastUpdatedAt:1663062926,formattedLastUpdatedAt:"Sep 13, 2022",frontMatter:{},sidebar:"oasisSdk",previous:{title:"Generating and Signing Transactions",permalink:"/oasis-core-ledger/usage/transactions"},next:{title:"Versioning",permalink:"/oasis-core-ledger/versioning"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"identifying-wallets"},"Identifying Wallets"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before following the instructions below, make sure your Ledger wallet is\nunlocked and the Oasis App is open.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"While the Oasis App is available in ",(0,o.kt)("em",{parentName:"p"},"Developer mode"),', opening the App brings\nup the "Pending Ledger review" screen.\nYou need to press both buttons at once to close that screen and transition to\nthe ',(0,o.kt)("em",{parentName:"p"},"ordinary"),' "Oasis Ready" screen where the Oasis App is ready to be used.')),(0,o.kt)("p",null,"To list all Ledger wallets connected to a system, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-core-ledger list_devices\n")),(0,o.kt)("p",null,"If your Ledger wallet is properly connected, you should see an output similar to\nthe one below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"- Wallet ID: 431fc6\n  App version: 1.7.2\n")),(0,o.kt)("p",null,"You can pass this ID when you need to specify which Ledger wallet you want to\nconnect to via ",(0,o.kt)("inlineCode",{parentName:"p"},"--wallet_id")," CLI flag or ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_id")," configuration key."))}d.isMDXComponent=!0}}]);