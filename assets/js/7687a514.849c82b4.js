"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[6476],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1564:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(7294),n=r(6010),i=r(9960),o=r(3438),c=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return a.createElement(i.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:i,description:o}=e;return a.createElement(p,{href:t},a.createElement("h2",{className:(0,n.Z)("text--truncate",l.cardTitle),title:i},r," ",i),o&&a.createElement("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:o},o))}function m(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?a.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.xz)(t.docId??void 0);return a.createElement(d,{href:t.href,icon:r,title:t.label,description:n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(u,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},9268:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010),i=r(3438),o=r(1564);function c(e){let{className:t}=e;const r=(0,i.jA)();return a.createElement(s,{items:r.items,className:t})}function s(e){const{items:t,className:r}=e;if(!t)return a.createElement(c,e);const s=(0,i.MN)(t);return a.createElement("section",{className:(0,n.Z)("row",r)},s.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(o.Z,{item:e})))))}},7525:(e,t,r)=>{r.d(t,{n:()=>i});var a=r(4477);function n(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&n(t.items)}}function i(e){const t=(0,a.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)n(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},7922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),i=r(1564),o=r(9268),c=r(7525);const s={},l="Cipher ParaTime",p={unversionedId:"dapp/cipher/README",id:"dapp/cipher/README",title:"Cipher ParaTime",description:"The Cipher ParaTime is a Confidential ParaTime for executing Wasm smart contracts.",source:"@site/docs/dapp/cipher/README.mdx",sourceDirName:"dapp/cipher",slug:"/dapp/cipher/",permalink:"/dapp/cipher/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/dapp/cipher/README.mdx",tags:[],version:"current",lastUpdatedAt:1678701669,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Standard Contract Addresses",permalink:"/dapp/sapphire/addresses"},next:{title:"Prerequisites",permalink:"/dapp/cipher/prerequisites"}},d={},m=[{value:"Smart Contracts Development",id:"smart-contracts-development",level:2},{value:"See also",id:"see-also",level:2}],u={toc:m},f="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cipher-paratime"},"Cipher ParaTime"),(0,n.kt)("p",null,"The Cipher ParaTime is a Confidential ParaTime for executing Wasm smart contracts."),(0,n.kt)("p",null,"As the officially supported ParaTime by the Oasis Protocol Foundation, Cipher\nallows for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flexibility \u2014 Developer can define which data to store in a public\nand which data in the (more expensive) confidential storage"),(0,n.kt)("li",{parentName:"ul"},"Security \u2014 Rust language primarily used for writing Wasm smart contracts is\nknown for its strict memory management and was developed specifically to\navoid memory leaks"),(0,n.kt)("li",{parentName:"ul"},"Scalability \u2014 increased throughput of transactions"),(0,n.kt)("li",{parentName:"ul"},"Low-cost \u2014 99%+ lower fees than Ethereum"),(0,n.kt)("li",{parentName:"ul"},"Cross-chain bridge to enable cross-chain interoperability (upcoming)")),(0,n.kt)("p",null,"If you're looking for EVM-compatible ParaTimes, check out the\n",(0,n.kt)("a",{parentName:"p",href:"/dapp/emerald/"},"Emerald")," and the confidential\n",(0,n.kt)("a",{parentName:"p",href:"/dapp/sapphire/"},"Sapphire")," paratimes."),(0,n.kt)("h2",{id:"smart-contracts-development"},"Smart Contracts Development"),(0,n.kt)("p",null,"The Cipher ParaTime implements the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/tree/main/contract-sdk"},"Oasis Contract SDK")," API. To learn how to\nwrite a confidential smart contract in Rust and deploy it on the Oasis Cipher\nParaTime, read the related Oasis Contract SDK chapters:"),(0,n.kt)(i.Z,{item:(0,c.n)("/dapp/cipher/prerequisites"),mdxType:"DocCard"}),(0,n.kt)(i.Z,{item:(0,c.n)("/dapp/cipher/hello-world"),mdxType:"DocCard"}),(0,n.kt)(i.Z,{item:(0,c.n)("/dapp/cipher/confidential-smart-contract"),mdxType:"DocCard"}),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)(o.Z,{items:[(0,c.n)("/general/manage-tokens/how-to-transfer-rose-into-paratime"),(0,c.n)("/node/run-your-node/paratime-node"),(0,c.n)("/node/run-your-node/paratime-client-node"),(0,c.n)("/dapp/emerald/"),(0,c.n)("/dapp/sapphire/")],mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);