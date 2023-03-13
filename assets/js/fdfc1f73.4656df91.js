"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[6228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(p(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const s={},l="System Configuration",u={unversionedId:"node/run-your-node/prerequisites/system-configuration",id:"node/run-your-node/prerequisites/system-configuration",title:"System Configuration",description:"This page describes changes that should be made to the configuration of the",source:"@site/docs/node/run-your-node/prerequisites/system-configuration.mdx",sourceDirName:"node/run-your-node/prerequisites",slug:"/node/run-your-node/prerequisites/system-configuration",permalink:"/node/run-your-node/prerequisites/system-configuration",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/prerequisites/system-configuration.mdx",tags:[],version:"current",lastUpdatedAt:1678701669,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Install Oasis Node Binary",permalink:"/node/run-your-node/prerequisites/oasis-node"},next:{title:"Set up Trusted Execution Environment (TEE)",permalink:"/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee"}},c={},p=[{value:"File Descriptor Limit",id:"file-descriptor-limit",level:2},{value:"System-wide Resource Limits Configuration File",id:"system-wide-resource-limits-configuration-file",level:3},{value:"Systemd Service Configuration",id:"systemd-service-configuration",level:3},{value:"Docker",id:"docker",level:3},{value:"Running Oasis Services with Non-root System User",id:"non-root",level:2},{value:"Changing Your Setup to Run Oasis Services with Non-root System User",id:"change-to-non-root",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-configuration"},"System Configuration"),(0,a.kt)("p",null,"This page describes changes that should be made to the configuration of the\nsystem where you are running an Oasis Node instance."),(0,a.kt)("h2",{id:"file-descriptor-limit"},"File Descriptor Limit"),(0,a.kt)("p",null,"Make sure that the user under which you are running your Oasis Node has a high-enough file descriptor limit as the databases can have many files open and running out of file descriptors can lead to the node stopping unexpectedly."),(0,a.kt)("p",null,"You can check the file descriptor limit by running the following as the same user that will run Oasis Node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ulimit -n\n")),(0,a.kt)("p",null,"If this number is lower than 102400 you should consider increasing it by updating your system configuration. You can configure ",(0,a.kt)("em",{parentName:"p"},"temporary")," limits by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ulimit -n 102400\n")),(0,a.kt)("p",null,"Note that this limit only applies to any processes started from the same shell after the command was executed. If you want to make the change permanent, you have the following options."),(0,a.kt)("h3",{id:"system-wide-resource-limits-configuration-file"},"System-wide Resource Limits Configuration File"),(0,a.kt)("p",null,"As ",(0,a.kt)("inlineCode",{parentName:"p"},"root"),", create a file in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/security/limits.d/99-oasis-node.conf")," with content similar to the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"*        soft    nofile    102400\n*        hard    nofile    1048576\n")),(0,a.kt)("p",null,"You can replace ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," with the name of the user that is running the Oasis Node in case you only want to change the limits for that particular user."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In order for the changes to take effect a system restart may be required.")),(0,a.kt)("h3",{id:"systemd-service-configuration"},"Systemd Service Configuration"),(0,a.kt)("p",null,"In case you are running your Oasis Node process via ",(0,a.kt)("a",{parentName:"p",href:"https://systemd.io/"},"systemd"),", you can add the following directive under the ",(0,a.kt)("inlineCode",{parentName:"p"},"[Service]")," section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"LimitNOFILE=102400\n")),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"If you are running Oasis Node via ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," you can pass the following option to ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," in order to increase the limit to desired values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"--ulimit nofile=102400:1048576\n")),(0,a.kt)("h2",{id:"non-root"},"Running Oasis Services with Non-root System User"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Beginning with ",(0,a.kt)("strong",{parentName:"p"},"Oasis Core 22.1.x release series")," it is\n",(0,a.kt)("strong",{parentName:"p"},"no longer allowed to run Oasis Node")," (i.e. the ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-node")," binary)\n",(0,a.kt)("strong",{parentName:"p"},"as root")," (effective user ID of 0).")),(0,a.kt)("p",null,'Running network accessible services as the root user is extremely bad for\nsystem security as a general rule. While it would be "ok" if we could drop\nprivileges, ',(0,a.kt)("inlineCode",{parentName:"p"},"syscall.AllThreadsSyscall")," does not work if the binary uses ",(0,a.kt)("inlineCode",{parentName:"p"},"cgo"),"\nat all."),(0,a.kt)("p",null,"Nothing in Oasis Node will ever require elevated privileges.\nAttempting to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-node")," process as the root user will now terminate\nimmediately on startup."),(0,a.kt)("p",null,"While there may be specific circumstances where it is safe to run network\nservices with the effective user ID set to 0, the overwhelming majority of cases\nwhere this is done is a misconfiguration."),(0,a.kt)("h3",{id:"change-to-non-root"},"Changing Your Setup to Run Oasis Services with Non-root System User"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In these examples, we change the setup to run Oasis Services (e.g. Oasis Node)\nwith a non-root system user named ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis"),".\nThese instructions also assume that the node's datadir is ",(0,a.kt)("inlineCode",{parentName:"p"},"/serverdir/node"),"."),(0,a.kt)("p",{parentName:"admonition"},"Adjust these as appropriate to your setup.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the ",(0,a.kt)("inlineCode",{parentName:"li"},"oasis")," system user:")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Ubuntu",mdxType:"TabItem"},(0,a.kt)("p",null,"As root, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"adduser --system oasis --shell /usr/sbin/nologin\n"))),(0,a.kt)(i.Z,{value:"Fedora",mdxType:"TabItem"},(0,a.kt)("p",null,"As root, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"useradd -r -s /usr/sbin/nologin\n"))),(0,a.kt)(i.Z,{value:"Ansible",mdxType:"TabItem"},(0,a.kt)("p",null,"Add the following task to your playbook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Create oasis user\n  user:\n    name: oasis\n    comment: Oasis Services user\n    system: yes\n    shell: /usr/sbin/nologin\n")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis")," user's Shell to ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/sbin/nologin")," prevents (accidentally)\nlogging-in as this user.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Stop your Oasis Node.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Transfer ownership of the datadir to the ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis")," user:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"chown -R oasis /serverdir/node\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/node/run-your-node/troubleshooting#invalid-permissions"},"Invalid Permissions")," troubleshooting guide for more information."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Update how you run Oasis Node:")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"systemd",mdxType:"TabItem"},(0,a.kt)("p",null,"Add a ",(0,a.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.exec.html#User="},(0,a.kt)("inlineCode",{parentName:"a"},"User")," directive")," to the Oasis service's systemd unit file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"...\nUser=oasis\n...\n")),(0,a.kt)("p",null,"Below can be found a simple systemd unit file for ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-node")," that can be used\nas a starting point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"[Unit]\nDescription=Oasis Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=oasis\nWorkingDirectory=/serverdir/node\nExecStart=/serverdir/bin/oasis-node --config /serverdir/etc/config.yml\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=1024000\n\n[Install]\nWantedBy=multi-user.target\n"))),(0,a.kt)(i.Z,{value:"Docker",mdxType:"TabItem"},(0,a.kt)("p",null,"Add ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#user"},(0,a.kt)("inlineCode",{parentName:"a"},"USER")," instruction")," to your Oasis service's Dockerfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"...\nUSER oasis\n...\n"))),(0,a.kt)(i.Z,{value:"runit",mdxType:"TabItem"},(0,a.kt)("p",null,"Wrap the invocation in a ",(0,a.kt)("a",{parentName:"p",href:"http://smarden.org/runit/chpst.8.html"},(0,a.kt)("inlineCode",{parentName:"a"},"chpst")," command"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"chpst -u oasis oasis-node ...\n")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Start your Oasis Node.")))}h.isMDXComponent=!0}}]);