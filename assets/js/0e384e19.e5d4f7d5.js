"use strict";(self.webpackChunkeu_dcc_site=self.webpackChunkeu_dcc_site||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},c="Tutorial Intro",s={unversionedId:"intro",id:"intro",title:"Tutorial Intro",description:"Let's discover EU DCC in less than 5 minutes",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/eu-dcc-site/docs/intro",draft:!1,editUrl:"https://github.com/ehn-dcc-development/eu-dcc-site/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/eu-dcc-site/docs/category/tutorial---basics"}},p={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Checkout the repository",id:"checkout-the-repository",level:2},{value:"Install all the dependencies",id:"install-all-the-dependencies",level:3},{value:"Generate CSCA and DSC certificates",id:"generate-csca-and-dsc-certificates",level:2},{value:"Create and Verify Certificate",id:"create-and-verify-certificate",level:2},{value:"Create and Sign",id:"create-and-sign",level:3},{value:"Unpack and Verify",id:"unpack-and-verify",level:3},{value:"Live",id:"live",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,i.kt)("p",null,"Let's discover ",(0,i.kt)("strong",{parentName:"p"},"EU DCC in less than 5 minutes")," "),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Get started by ",(0,i.kt)("strong",{parentName:"p"},"by creating, signing, and verifying a new certificate."),"."),(0,i.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 14 or above:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies."))),(0,i.kt)("li",{parentName:"ul"},"The JavaScript and shell scripts in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ehn-dcc-development/ehn-sign-verify-javascript-trivial"},"ehn-sign-verify-javascript-trivial")," repository.")),(0,i.kt)("h2",{id:"checkout-the-repository"},"Checkout the repository"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ehn-dcc-development/ehn-sign-verify-javascript-trivial"},"ehn-sign-verify-javascript-trivial")," repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ehn-dcc-development/ehn-sign-verify-javascript-trivial.git eu-dcc-start\ncd eu-dcc-start\n")),(0,i.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with.\nIn order to work with files you checked out, you'll need to navigate the terminal there."),(0,i.kt)("p",null,"You could also use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/degit"},(0,i.kt)("inlineCode",{parentName:"a"},"degit"))," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," to clone that repository."),(0,i.kt)("h3",{id:"install-all-the-dependencies"},"Install all the dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,i.kt)("h2",{id:"generate-csca-and-dsc-certificates"},"Generate CSCA and DSC certificates"),(0,i.kt)("p",null,"CSCA and DSC certificates will be used for signing and verifying the EU-DCC certificate we will create. "),(0,i.kt)("p",null,"All the shell commands for creating the certificates are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"gen-csca.sh")," scripts, so run the following command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./gen-csca-dsc.sh\n")),(0,i.kt)("p",null,"The script will generate the following files: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Certificate Authority: ",(0,i.kt)("inlineCode",{parentName:"li"},"csca.pem")),(0,i.kt)("li",{parentName:"ul"},"Private key: ",(0,i.kt)("inlineCode",{parentName:"li"},"dsc-worker.key")),(0,i.kt)("li",{parentName:"ul"},"Private key in ",(0,i.kt)("inlineCode",{parentName:"li"},"p8")," format: ",(0,i.kt)("inlineCode",{parentName:"li"},"dsc-worker.p8")),(0,i.kt)("li",{parentName:"ul"},"Public key: ",(0,i.kt)("inlineCode",{parentName:"li"},"dsc-worker.pem"))),(0,i.kt)("h2",{id:"create-and-verify-certificate"},"Create and Verify Certificate"),(0,i.kt)("h3",{id:"create-and-sign"},"Create and Sign"),(0,i.kt)("p",null,"First, create the payload you will attach to the certificate. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'{ "fname": "John", "lname": "Smith" }\' > payload.json\n')),(0,i.kt)("p",null,"Now you are ready to attach this payload to the certificate and sign it. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat payload.json | npm --silent run sign > my-dcc.cert\n")),(0,i.kt)("p",null,"This command will create the ",(0,i.kt)("inlineCode",{parentName:"p"},"my.cert")," file which a fully signed certificate with the above payload attached.\nThe process for producing it follows the steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Compact the JSON into CBOR."),(0,i.kt)("li",{parentName:"ol"},"Sign and package the CBOR as a COSE message."),(0,i.kt)("li",{parentName:"ol"},"ZLIB compress the message."),(0,i.kt)("li",{parentName:"ol"},"Base45 encode and generate the final string. ")),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/ehn-dcc-development/eu-dcc-hcert-spec/main/overview.png"}),(0,i.kt)("p",null,"See the string representation of the certificate by entering the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat my-dcc.cert\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="./my-dcc.cert"',title:'"./my-dcc.cert"'},"HC1:6BF580B30FFWTWGSLKC 4+59TYJZ10M8J6AO76B%NKW.CBEC  CKI949D: C..DF$DJ CJ$DAWE27BM+3*-L28VKNS6SL3UPDJIYP9YO0.J0:*Q DPNOQJFLE0UKDK%/E+U77WSIVG:EW+ M88KWMQ::F3J3DOIY3T40OK%74V25-139J-L6\n")),(0,i.kt)("h3",{id:"unpack-and-verify"},"Unpack and Verify"),(0,i.kt)("p",null,"For verifying the EU-DCC Certificate you just created you need to follow the reverse process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Base45 decode the string in the ",(0,i.kt)("inlineCode",{parentName:"li"},"my-dcc.cert")," file."),(0,i.kt)("li",{parentName:"ol"},"ZLIB decompress."),(0,i.kt)("li",{parentName:"ol"},"Verify the COSE signature unpack it into a CBOR document."),(0,i.kt)("li",{parentName:"ol"},"Unpack the CBOR document into JSON.")),(0,i.kt)("p",null,"Run the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat my-dcc.cert | npm --silent run verify\n")),(0,i.kt)("p",null,"The verifying process uses the public key in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dsc-worker.pem")," file verifying the COSE signature.\nIf the signature is valid it proceeds, unpacks the document, and displays the JSON payload."),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "fname": "John",\n     "lname": "Smith"\n}\n')),(0,i.kt)("h2",{id:"live"},"Live"),(0,i.kt)("p",null,"Check this tutorial live in ",(0,i.kt)("a",{parentName:"p",href:"https://replit.com/@StavrosKounis/EU-DCC-Sign-and-Verify-Online"},"replit")),(0,i.kt)("iframe",{width:"100%",height:"500px",src:"https://replit.com/@StavrosKounis/EU-DCC-Sign-and-Verify-Online?embed=true"}))}m.isMDXComponent=!0}}]);