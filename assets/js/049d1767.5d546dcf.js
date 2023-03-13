"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[4073],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={},s="How to Transfer ETH/ERC20 to Emerald ParaTime",i={unversionedId:"general/manage-tokens/how-to-transfer-eth-erc20-to-emerald-paratime",id:"general/manage-tokens/how-to-transfer-eth-erc20-to-emerald-paratime",title:"How to Transfer ETH/ERC20 to Emerald ParaTime",description:"This guide will walk you through bringing your assets, i.e. ETH, USDC, USDT,",source:"@site/docs/general/manage-tokens/how-to-transfer-eth-erc20-to-emerald-paratime.md",sourceDirName:"general/manage-tokens",slug:"/general/manage-tokens/how-to-transfer-eth-erc20-to-emerald-paratime",permalink:"/general/manage-tokens/how-to-transfer-eth-erc20-to-emerald-paratime",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/how-to-transfer-eth-erc20-to-emerald-paratime.md",tags:[],version:"current",lastUpdatedAt:1678701669,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"general",previous:{title:"How to Transfer ROSE into a ParaTime",permalink:"/general/manage-tokens/how-to-transfer-rose-into-paratime"},next:{title:"Frequently Asked Questions",permalink:"/general/manage-tokens/faq"}},l={},p=[{value:"About",id:"about",level:2},{value:"Using Wormhole Bridge",id:"using-wormhole-bridge",level:2},{value:"Open Wormhole Bridge and Connect your Account",id:"open-wormhole-bridge-and-connect-your-account",level:3},{value:"Transfer Assets to Oasis",id:"transfer-assets-to-oasis",level:3},{value:"Using Wrapped Assets on Oasis",id:"using-wrapped-assets-on-oasis",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-transfer-etherc20-to-emerald-paratime"},"How to Transfer ETH/ERC20 to Emerald ParaTime"),(0,o.kt)("p",null,"This guide will walk you through bringing your assets, i.e. ETH, USDC, USDT,\nfrom Ethereum, BSC, Polygon or Avalanche networks to the Emerald ParaTime using\nthe Wormhole token bridge."),(0,o.kt)("h2",{id:"about"},"About"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/dapp/emerald/"},"Emerald")," is an Oasis ParaTime providing an Ethereum-compatible blockchain for the Oasis Network. If you want to use any dApp for DEX, NFT and similar built on Emerald, you will have to transfer your assets into the Emerald ParaTime."),(0,o.kt)("p",null,"To transfer your ROSE tokens into Emerald, follow ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/how-to-transfer-rose-into-paratime"},"How to Transfer ROSE into a ParaTime"),"."),(0,o.kt)("p",null,"To transfer (i.e. bridge and wrap) your ETH and ERC20 tokens, follow this guide. It will show you how to use ",(0,o.kt)("a",{parentName:"p",href:"https://wormholebridge.com"},"Wormhole Bridge")," to seamlessly transfer your tokens from Ethereum, Solana, Avalanche, BSC, Terra or Polygon to the Oasis Network."),(0,o.kt)("h2",{id:"using-wormhole-bridge"},"Using Wormhole Bridge"),(0,o.kt)("h3",{id:"open-wormhole-bridge-and-connect-your-account"},"Open Wormhole Bridge and Connect your Account"),(0,o.kt)("p",null,"First, get your assets ready in your MetaMask to be transferred over to Oasis. Then navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://wormholebridge.com"},"Wormhole Bridge"),"'s website and click on ",(0,o.kt)("em",{parentName:"p"},"Transfer Tokens")," to open the ",(0,o.kt)("a",{parentName:"p",href:"https://wormholebridge.com/#/transfer"},"Wormhole Bridge Transfer")," application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wormhole Bridge",src:a(1385).Z,width:"2616",height:"2612"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1 (Source)")," is to point ",(0,o.kt)("em",{parentName:"p"},"Source")," to the network from where you want to transfer your tokens to ",(0,o.kt)("strong",{parentName:"p"},"Ethereum")," and set the ",(0,o.kt)("em",{parentName:"p"},"Target")," to ",(0,o.kt)("strong",{parentName:"p"},"Oasis"),". Then click ",(0,o.kt)("em",{parentName:"p"},"Connect")," to connect your wallet with the Wormhole Bridge."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connect your wallet",src:a(2186).Z,width:"3004",height:"1732"})),(0,o.kt)("h3",{id:"transfer-assets-to-oasis"},"Transfer Assets to Oasis"),(0,o.kt)("p",null,"Now you can select an asset from all available assets in your wallet, e.g. ETH, to be transferred to Oasis."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select the asset to be transferred",src:a(5169).Z,width:"3008",height:"1516"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure, that you always have enough ETH (or other assets) for paying gas fees, not only to transfer (i.e. bridge) the assets to Oasis, but also to redeem any assets back to Ethereum.")),(0,o.kt)("p",null,"Choose the ",(0,o.kt)("em",{parentName:"p"},"Amount")," of tokens you want to transfer and click ",(0,o.kt)("em",{parentName:"p"},"Next"),". If your MetaMask wallet is switched to some other network, the Wormhole bridge will ask you to switch to the correct network (e.g. Ethereum Mainnet)."),(0,o.kt)("p",null,"You will then proceed to ",(0,o.kt)("strong",{parentName:"p"},"Step 2 (Target)"),". Your MetaMask wallet will show up again and ask you to switch to the Emerald Mainnet network because that is where your ETH will be wrapped to wETH."),(0,o.kt)("p",null,"The recipient address defaults to the source address on the Ethereum network. You can transfer your ETH into a different destination Ethereum account, by switching the currently opened account in MetaMask. The Wormhole Bridge web app will automatically switch the recipient address accordingly."),(0,o.kt)("p",null,"Next, confirm the recipient address and the amount of WETH tokens to be transferred (i.e. bridged) and click ",(0,o.kt)("em",{parentName:"p"},"Next"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirm your recipient address",src:a(5726).Z,width:"3004",height:"1728"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3 (Send tokens)")," is to transfer the tokens to the Wormhole Bridge. MetaMask will ask you to switch back to the Ethereum Mainnet so you will be able to confirm your transaction and commence the transfer. Click ",(0,o.kt)("em",{parentName:"p"},"Transfer"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you chose to transfer your ETH into a different destination Ethereum account, you will need to switch the currently opened account in MetaMask back to the same account as used in Step 1.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Send tokens to Wormhole",src:a(5828).Z,width:"3004",height:"1730"})),(0,o.kt)("p",null,"Confirm the Transfer of ETH from Ethereum to wETH on Oasis Emerald by clicking ",(0,o.kt)("em",{parentName:"p"},"Confirm"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirm the transfer ETH-&gt;WETH",src:a(9049).Z,width:"3010",height:"1728"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'If you use a Ledger hardware wallet backed Ethereum account, you will need to enable "Blind signing" or "Contract data" in the Ethereum Ledger app\'s settings to be able to sign the transaction.')),(0,o.kt)("p",null,"You will have to wait for the confirmations on Ethereum before redeeming your new wETH tokens in Oasis Emerald."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wait for Ethereum confirmations",src:a(1861).Z,width:"3006",height:"1732"})),(0,o.kt)("p",null,"Now you are ready to redeem your tokens on the Oasis Emerald. Confirm the wallet approval in your MetaMask."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirm Redeeming your wETH",src:a(3832).Z,width:"3006",height:"1730"})),(0,o.kt)("p",null,"Congratulations! You just bridged your first ETH (your chosen asset) to wETH on Oasis Emerald."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ETH to wETH bridging completed",src:a(178).Z,width:"3006",height:"1734"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We suggest that you add the new contract address for wETH (your newly wrapped asset) immediately after the transaction is confirmed, so you will see them available in your wallet.")),(0,o.kt)("h2",{id:"using-wrapped-assets-on-oasis"},"Using Wrapped Assets on Oasis"),(0,o.kt)("p",null,"Now you can start using that wrapped assets across new Oasis dApps like the first DEX build on Emerald - ",(0,o.kt)("a",{parentName:"p",href:"https://yuzu-swap.com"},"YuzuSwap"),", where you can swap, provide liquidity and farm YUZU rewards."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Start using wrapped assets on Oasis",src:a(4742).Z,width:"2990",height:"1732"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that your MetaMask is connected to the Emerald Mainnet network. You can find network parameters ",(0,o.kt)("a",{parentName:"p",href:"/dapp/emerald#web3-gateway"},"here"),".")))}m.isMDXComponent=!0},9049:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/confirm_transaction_ETH_WETH-9fb853c57c97ac65fe40ca29178ad684.png"},2186:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/connect_wallet-6c13918efbcc33da6004a1306f8a1b0e.png"},1385:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/index-45df31c8f3f67661a8d6c4944be35956.png"},3832:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redeem_tokens-f1082c546b479f813a98c3969e4257ba.png"},178:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redeem_tokens2-738d656761667f29cfbd85388866ea49.png"},5169:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/select_source_dest_amount-6be16ab5449bce3d7d1fe651cef4876f.png"},1861:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/send_tokens-0e219f5c38fda30ea6ec094e6dabec62.png"},5828:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/send_tokens_to_wormhole-a7154abd51883a7b0b9b10659830e7a1.png"},5726:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/switch_to_emerald-64787a9ffef61c7bc90fe1437e97d21d.png"},4742:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/yuzuswap-ea0c9c9a22e563c5b43b9ea538b5faac.png"}}]);