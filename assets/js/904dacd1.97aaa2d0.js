"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9572],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var i=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=i.createContext({}),p=function(e){var n=i.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),y=p(a),c=t,m=y["".concat(l,".").concat(c)]||y[c]||g[c]||r;return a?i.createElement(m,o(o({ref:n},d),{},{components:a})):i.createElement(m,o({ref:n},d))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[y]="string"==typeof e?e:t,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3253:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(7462),t=(a(7294),a(3905));const r={},o="Signing Key Manager Policy",s={unversionedId:"node/run-your-node/keymanager-node/signing-key-manager-policy",id:"node/run-your-node/keymanager-node/signing-key-manager-policy",title:"Signing Key Manager Policy",description:"This guide will describe how to print and sign an Oasis [key manager policy].",source:"@site/docs/node/run-your-node/keymanager-node/signing-key-manager-policy.md",sourceDirName:"node/run-your-node/keymanager-node",slug:"/node/run-your-node/keymanager-node/signing-key-manager-policy",permalink:"/node/run-your-node/keymanager-node/signing-key-manager-policy",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/keymanager-node/signing-key-manager-policy.md",tags:[],version:"current",lastUpdatedAt:1678701669,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Key Manager Node",permalink:"/node/run-your-node/keymanager-node/"},next:{title:"Upgrading Key Managers",permalink:"/node/run-your-node/keymanager-node/key-manager-upgrade"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Oasis Node Binary",id:"oasis-node-binary",level:3},{value:"Entity",id:"entity",level:3},{value:"Define Variables",id:"define-variables",level:2},{value:"Printing a Policy",id:"printing-a-policy",level:2},{value:"Signing a Policy",id:"signing-a-policy",level:2}],d={toc:p},y="wrapper";function g(e){let{components:n,...a}=e;return(0,t.kt)(y,(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"signing-key-manager-policy"},"Signing Key Manager Policy"),(0,t.kt)("p",null,"This guide will describe how to print and sign an Oasis ",(0,t.kt)("a",{parentName:"p",href:"/core/consensus/services/keymanager#policies"},"key manager policy"),"."),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"These instructions are only applicable if you are part of a key manager policy\nsigner set.")),(0,t.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,t.kt)("h3",{id:"oasis-node-binary"},"Oasis Node Binary"),(0,t.kt)("p",null,"Make sure you have followed the ",(0,t.kt)("a",{parentName:"p",href:"/node/run-your-node/prerequisites/oasis-node"},"Oasis Node binary installation guide")," and have\nthe Oasis Node binary installed on your system."),(0,t.kt)("h3",{id:"entity"},"Entity"),(0,t.kt)("p",null,"Similarly to other things, an entity's private key is used to sign a key manager\npolicy."),(0,t.kt)("p",null,"The trusted key manager policy signer set (i.e. the authorized public keys) and\nthe threshold of keys that need to sign the policy are hard-coded in the key\nmanager's source code.\nThe trusted signer set for the Oasis Key Manager is defined in ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/keymanager-paratime/blob/main/src/lib.rs"},"its source code\n"),"."),(0,t.kt)("admonition",{type:"danger"},(0,t.kt)("p",{parentName:"admonition"},"We strongly recommend using a dedicated (single-purpose) entity for signing key\nmanager policies for production key managers, i.e. the ones deployed on\nMainnet and connected to a production ParaTime.")),(0,t.kt)("p",null,"To provision a new entity, follow the ",(0,t.kt)("a",{parentName:"p",href:"../validator-node/#initializing-an-entity"},"instructions in our Validator Node\nguide"),"."),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Currently, Ledger-based signers do not support signing key manager policies.")),(0,t.kt)("admonition",{type:"danger"},(0,t.kt)("p",{parentName:"admonition"},"In case a file-based signer needs to be used, we strongly recommend using an\n",(0,t.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Air_gap_(networking)"},"offline/air-gapped machine")," for this purpose and never exposing the entity's\nprivate key to an online machine."),(0,t.kt)("p",{parentName:"admonition"},"Gaining access to the entity's private key can compromise the trusted key\nmanager policy signer set and hence the key manager itself.")),(0,t.kt)("h2",{id:"define-variables"},"Define Variables"),(0,t.kt)("p",null,"For easier handling of key manager policy files, define the following variables:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"POLICY=path/to/policy.cbor\nKEY=path/to/entity/key.pem\nNAME=your_name\n")),(0,t.kt)("h2",{id:"printing-a-policy"},"Printing a Policy"),(0,t.kt)("p",null,"To print and inspect a key manager policy, use the following command:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node keymanager verify_policy \\\n  --keymanager.policy.file $POLICY \\\n  --keymanager.policy.ignore.signature \\\n  --verbose\n")),(0,t.kt)("p",null,"This should output something like the following:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of an actual Oasis Testnet Key Manager policy"',title:'"Example',of:!0,an:!0,actual:!0,Oasis:!0,Testnet:!0,Key:!0,Manager:!0,'policy"':!0},'{\n  "serial": 8,\n  "id": "4000000000000000000000000000000000000000000000004a1a53dff2ae482d",\n  "enclaves": {\n    "ZhD5ufyc/MReZD1qMSKNCRxnkNiZ3BtxqcYdx4+M0N9AJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ==": {\n      "may_query": {\n        "0000000000000000000000000000000000000000000000000000000000000000": [\n          "c0SidcKhBx3iuonmtXURnFB+qIVkg+nAiaAozAh16ltAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="\n        ],\n        "000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c": [\n          "LwbLEQ6dv+R5wv5q5CGRZWiEBWGxgCi/gpphcJFQ5zVAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="\n        ]\n      },\n      "may_replicate": [\n        "jTX8etUcGSQBq3C4WbLlexga7dhQFnwzSJOEmRCPvfRAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="\n      ]\n    },\n    "jTX8etUcGSQBq3C4WbLlexga7dhQFnwzSJOEmRCPvfRAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ==": {\n      "may_query": {\n        "0000000000000000000000000000000000000000000000000000000000000000": [\n          "c0SidcKhBx3iuonmtXURnFB+qIVkg+nAiaAozAh16ltAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="\n        ],\n        "000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c": [\n          "LwbLEQ6dv+R5wv5q5CGRZWiEBWGxgCi/gpphcJFQ5zVAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="\n        ]\n      },\n      "may_replicate": []\n    }\n  }\n}\n')),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},'"serial"')," key, e.g. ",(0,t.kt)("inlineCode",{parentName:"p"},"8"),", represents the key manager policy's serial number\nthat must increase with every update of the key manager policy."),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},'"id"')," key, e.g.\n",(0,t.kt)("inlineCode",{parentName:"p"},'"4000000000000000000000000000000000000000000000004a1a53dff2ae482d"'),", represents\nthe key manager ParaTime's runtime ID."),(0,t.kt)("p",null,"The keys below ",(0,t.kt)("inlineCode",{parentName:"p"},'"enclaves"'),", e.g.\n",(0,t.kt)("inlineCode",{parentName:"p"},'"ZhD5ufyc/MReZD1qMSKNCRxnkNiZ3BtxqcYdx4+M0N9AJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="'),"\nand ",(0,t.kt)("inlineCode",{parentName:"p"},'"jTX8etUcGSQBq3C4WbLlexga7dhQFnwzSJOEmRCPvfRAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="'),",\nrepresent the identities of the key manager enclaves.\nEach key manager enclave ID is comprised of two parts: its ",(0,t.kt)("inlineCode",{parentName:"p"},"MRENCLAVE")," and its\n",(0,t.kt)("inlineCode",{parentName:"p"},"MRSIGNER"),"."),(0,t.kt)("p",null,"Each key manager enclave identity has two lists: ",(0,t.kt)("inlineCode",{parentName:"p"},'"may_query"')," and\n",(0,t.kt)("inlineCode",{parentName:"p"},'"may_replicate"'),"."),(0,t.kt)("p",null,"Items in ",(0,t.kt)("inlineCode",{parentName:"p"},'"may_query"')," list, e.g.\n",(0,t.kt)("inlineCode",{parentName:"p"},'"0000000000000000000000000000000000000000000000000000000000000000"')," and\n",(0,t.kt)("inlineCode",{parentName:"p"},'"000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c"'),",\nrepresent the runtime IDs of the ParaTimes that are allowed to query the key\nmanager (in this example, the Cipher and the Sapphire ParaTimes running on the\nTestnet)."),(0,t.kt)("p",null,"The items under runtime IDs of the ParaTimes, e.g.\n",(0,t.kt)("inlineCode",{parentName:"p"},'"c0SidcKhBx3iuonmtXURnFB+qIVkg+nAiaAozAh16ltAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="'),"\nand\n",(0,t.kt)("inlineCode",{parentName:"p"},'"LwbLEQ6dv+R5wv5q5CGRZWiEBWGxgCi/gpphcJFQ5zVAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="'),",\nrepresent the identities of the runtime enclaves.\nSimilarly to the key manager enclave ID, each runtime enclave ID is comprised of\ntwo parts: its ",(0,t.kt)("inlineCode",{parentName:"p"},"MRENCLAVE")," and its ",(0,t.kt)("inlineCode",{parentName:"p"},"MRSIGNER"),"."),(0,t.kt)("p",null,"Items in ",(0,t.kt)("inlineCode",{parentName:"p"},'"may_replicate"')," list, e.g.\n",(0,t.kt)("inlineCode",{parentName:"p"},'"jTX8etUcGSQBq3C4WbLlexga7dhQFnwzSJOEmRCPvfRAJdq369ofvsxONjdgbgISFND0HG0EIv03iyqLiIGEWQ=="'),",\nrepresent the key manager enclave IDs to which an existing key manager enclave is\nallowed to replicate itself to.\nThis is used for key manager upgrades when an old key manager enclave (i.e. its\nmaster secret) is allowed to replicate itself to a new key manager enclave."),(0,t.kt)("admonition",{type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"To see what has changed between two key manager policies, diff the outputs\nof the ",(0,t.kt)("inlineCode",{parentName:"p"},"oasis-node keymanager verify_policy")," commands for the corresponding key\nmanager policy files.")),(0,t.kt)("h2",{id:"signing-a-policy"},"Signing a Policy"),(0,t.kt)("p",null,"Once a key manager policy has been inspected, use the following command to sign\nit:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node keymanager sign_policy \\\n  --keymanager.policy.file $POLICY \\\n  --keymanager.policy.key.file $KEY \\\n  --keymanager.policy.signature.file $POLICY.$NAME.signed\n")))}g.isMDXComponent=!0}}]);