"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[5305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},s="Get Account Info",i={unversionedId:"general/manage-tokens/advanced/oasis-cli-tools/get-account-info",id:"general/manage-tokens/advanced/oasis-cli-tools/get-account-info",title:"Get Account Info",description:"This example assumes you have read and followed the instructions in the Prerequisites and Setup sections.",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/get-account-info.md",sourceDirName:"general/manage-tokens/advanced/oasis-cli-tools",slug:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-info",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-info",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/get-account-info.md",tags:[],version:"current",lastUpdatedAt:1678701669,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"general",previous:{title:"List Accounts",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/list-accounts"},next:{title:"Get Account Nonce",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-nonce"}},l={},c=[{value:"General Account",id:"general-account",level:2},{value:"Escrow Account",id:"escrow-account",level:2},{value:"Commission Schedule",id:"commission-schedule",level:3},{value:"Stake Accumulator",id:"stake-accumulator",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-account-info"},"Get Account Info"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This example assumes you have read and followed the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites"},"Prerequisites")," and ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup"},"Setup")," sections.")),(0,o.kt)("p",null,"To get more information about a particular staking account, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis1qrvsa8ukfw3p6kw2vcs0fk9t59mceqq7fyttwqgx"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node stake account info \\\n  -a $ADDR \\\n  --stake.account.address oasis1qrvsa8ukfw3p6kw2vcs0fk9t59mceqq7fyttwqgx\n")),(0,o.kt)("p",null,"This will output all staking information about this particular account, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"General Account:\n  Balance: ROSE 376.594833237\n  Nonce:   0\nEscrow Account:\n  Active:\n    Balance:      ROSE 10528.684187046\n    Total Shares: 10000000000000\n  Debonding:\n    Balance:      ROSE 0.0\n    Total Shares: 0\n  Commission Schedule:\n    Rates: (none)\n    Rate Bounds: (none)\n  Stake Accumulator:\n    Claims:\n      - Name: registry.RegisterEntity\n        Staking Thresholds:\n          - Global: entity\n      - Name: registry.RegisterNode.9Epy5pYPGa91IJlJ8Ivb5iby+2ii8APXdfQoMZDEIDc=\n        Staking Thresholds:\n          - Global: node-validator\n")),(0,o.kt)("h2",{id:"general-account"},"General Account"),(0,o.kt)("p",null,"We can observe that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"General account's ",(0,o.kt)("strong",{parentName:"li"},"balance"),", the amount of tokens that are available to the account owner, is ","~","377 tokens."),(0,o.kt)("li",{parentName:"ul"},"General account's ",(0,o.kt)("strong",{parentName:"li"},"nonce"),", the incremental number that must be unique for each account's transaction, is 0. That means there haven't been any transactions made with this account as the source. Therefore, the next transaction should have nonce equal to 0.")),(0,o.kt)("h2",{id:"escrow-account"},"Escrow Account"),(0,o.kt)("p",null,"We can observe that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The amount of tokens that are ",(0,o.kt)("strong",{parentName:"li"},"actively bounded")," to the escrow account is ","~","10529 tokens."),(0,o.kt)("li",{parentName:"ul"},"The total number of ",(0,o.kt)("strong",{parentName:"li"},"shares")," for the tokens actively bounded to the escrow account is 10 trillion."),(0,o.kt)("li",{parentName:"ul"},"The amount of tokens that are currently ",(0,o.kt)("strong",{parentName:"li"},"debonding")," is 0."),(0,o.kt)("li",{parentName:"ul"},"The total number of ",(0,o.kt)("strong",{parentName:"li"},"shares")," for the tokens that are currently debonding is 0.")),(0,o.kt)("h3",{id:"commission-schedule"},"Commission Schedule"),(0,o.kt)("p",null,"An entity can also charge commission for tokens that are delegated to it. It would defined the commission schedule ",(0,o.kt)("strong",{parentName:"p"},"rate steps")," and the commission schedule ",(0,o.kt)("strong",{parentName:"p"},"rate bound steps"),". For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/amend-commission-schedule"},"Amend Commission Schedule")," documentation."),(0,o.kt)("h3",{id:"stake-accumulator"},"Stake Accumulator"),(0,o.kt)("p",null,"Each escrow account also has a corresponding stake accumulator. It stores ",(0,o.kt)("strong",{parentName:"p"},"stake claims")," for an escrow account and ensures all claims are satisfied at any given point. Adding a new claim is only possible if all of the existing claims plus the new claim can be satisfied."),(0,o.kt)("p",null,"We can observe that the stake accumulator currently has two claims:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"registry.RegisterEntity")," claim is for registering an entity."),(0,o.kt)("p",{parentName:"li"},"It needs to satisfy the global threshold for registering an entity (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),") which is defined by the staking consensus parameters."),(0,o.kt)("p",{parentName:"li"},"To see the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"entity")," global staking threshold, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node stake info")," command as described in ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/common-staking-info"},"Common Staking Info")," doc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"registry.RegisterNode.9Epy5pYPGa91IJlJ8Ivb5iby+2ii8APXdfQoMZDEIDc=")," claim is for registering the node with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"9Epy5pYPGa91IJlJ8Ivb5iby+2ii8APXdfQoMZDEIDc="),"."),(0,o.kt)("p",{parentName:"li"},"It needs to satisfy the global staking threshold for registering a validator node (",(0,o.kt)("inlineCode",{parentName:"p"},"node-validator"),") which is defined by the staking consensus parameters."),(0,o.kt)("p",{parentName:"li"},"To see the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"node-validator")," global staking threshold, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node stake info")," command as described in ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/common-staking-info"},"Common Staking Info")," doc."),(0,o.kt)("p",{parentName:"li"},"In addition to the global thresholds, each runtime the node is registering for may define their own thresholds. In case the node is registering for multiple runtimes, it needs to satisfy the sum of thresholds of all the runtimes it is registering for."),(0,o.kt)("p",{parentName:"li"},"For more details, see ",(0,o.kt)("a",{parentName:"p",href:"/core/consensus/services/registry#register-node"},"Oasis Core Developer Docs on registering a node"),"."))))}m.isMDXComponent=!0}}]);