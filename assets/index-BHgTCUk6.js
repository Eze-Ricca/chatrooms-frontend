var mC=Object.defineProperty;var vC=(i,e,n)=>e in i?mC(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var Qo=(i,e,n)=>vC(i,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();class yC extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var f,_;const e=document.createElement("button"),n=this.getAttribute("label")||"Click Me",s=this.getAttribute("bg-color")||"#9CBBE9",a=this.getAttribute("text-color")||"#fff",l=this.getAttribute("border-color")||"none",u=document.createElement("style");u.textContent=`
    button{
        background-color: ${s};
        color: ${a};
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 0.15rem;
        width: 100%;
        height: 84px;
        border: ${l};
        border-radius: 10px;
        transition: background-color 0.3s ease;
    }
     button:hover{
        background-color: ${this.getAttribute("hover-bg-color")};
        border: solid 10px rgb(75, 126, 202);
     }   
    button:active{
        background-color: ${this.getAttribute("active-bg-color")};
    }
    `,e.textContent=n,(f=this.shadowRoot)==null||f.appendChild(u),(_=this.shadowRoot)==null||_.appendChild(e)}}customElements.define("reusable-button",yC);class wC extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var a;const e=document.createElement("header"),n=document.createElement("h3");n.textContent="";const s=document.createElement("style");s.textContent=`
    header{
        background-color: #ff8282;
         max-width: 1280px;
         height: 80px;
         margin-left: auto;
         margin-right: auto;
         display: grid;
         place-content: center;
         }
    `,e.appendChild(n),e.appendChild(s),(a=this.shadowRoot)==null||a.appendChild(e)}}customElements.define("header-el",wC);class CC extends HTMLElement{constructor(){super();Qo(this,"inputElement");this.attachShadow({mode:"open"})}connectedCallback(){var E,C;const n=document.createElement("div"),s=document.createElement("input"),a=document.createElement("label"),l=this.getAttribute("label")||"",u=this.getAttribute("size-label")||"18px",f=this.getAttribute("placeholder")||"Escribe aqui...",_=this.getAttribute("type")||"text",g=this.hasAttribute("required");a.textContent=l,s.placeholder=f,s.type=_,g?s.required=!0:s.required=!1,this.inputElement=s;const b=document.createElement("style");b.textContent=`
    div {
        margin-bottom: 10px;
              
        }
    label {
        display: block;
        font-size: ${u};
        margin-bottom: 10px;     
    }
     input{
        box-sizing: border-box; 
        width: 100%;
        height: 79px;
        padding: 5px;
        font-size: 1.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
     }   
    `,n.appendChild(a),n.appendChild(s),(E=this.shadowRoot)==null||E.appendChild(b),(C=this.shadowRoot)==null||C.appendChild(n)}getValue(){return this.inputElement.value}setValue(n){this.inputElement.value=n}}customElements.define("reusable-input",CC);class EC extends HTMLElement{constructor(){super();Qo(this,"selectElement");this.attachShadow({mode:"open"})}connectedCallback(){var b,E;const n=document.createElement("div"),s=document.createElement("select"),a=document.createElement("label"),l=this.getAttribute("label")||"Etiqueta",u=this.getAttribute("size-label")||"18px",f=this.getAttribute("options")||"Opción 1,Opción 2,Opción 3";a.textContent=l,f.split(",").forEach(C=>{const A=document.createElement("option");A.value=C,A.textContent=C,s.appendChild(A)}),this.selectElement=s,this.selectElement.addEventListener("change",()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))});const g=document.createElement("style");g.textContent=`
      div {
          margin-bottom: 10px;
      }
      label {
          display: block;
          font-size: ${u};
          margin-bottom: 10px;
      }
      select {
          box-sizing: border-box; 
          width: 100%;
          height: 79px;
          padding: 5px;
          font-size: 1.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #242424;      }
      `,n.appendChild(a),n.appendChild(s),(b=this.shadowRoot)==null||b.appendChild(g),(E=this.shadowRoot)==null||E.appendChild(n)}getValue(){return this.selectElement?this.selectElement.value:(console.warn("Select element not found in reusable-select"),"")}}customElements.define("reusable-select",EC);const bC=()=>{};var qu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(i,e){if(!i)throw Qn(e)},Qn=function(i){return new Error("Firebase Database ("+Bh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},IC=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[n++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[n++],u=i[n++],f=i[n++],_=((a&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(_>>10)),e[s++]=String.fromCharCode(56320+(_&1023))}else{const l=i[n++],u=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},Ra={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],u=a+1<i.length,f=u?i[a+1]:0,_=a+2<i.length,g=_?i[a+2]:0,b=l>>2,E=(l&3)<<4|f>>4;let C=(f&15)<<2|g>>6,A=g&63;_||(A=64,u||(C=64)),s.push(n[b],n[E],n[C],n[A])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Wh(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):IC(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=n[i.charAt(a++)],f=a<i.length?n[i.charAt(a)]:0;++a;const g=a<i.length?n[i.charAt(a)]:64;++a;const E=a<i.length?n[i.charAt(a)]:64;if(++a,l==null||f==null||g==null||E==null)throw new SC;const C=l<<2|f>>4;if(s.push(C),g!==64){const A=f<<4&240|g>>2;if(s.push(A),E!==64){const P=g<<6&192|E;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class SC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uh=function(i){const e=Wh(i);return Ra.encodeByteArray(e,!0)},Jr=function(i){return Uh(i).replace(/\./g,"")},aa=function(i){try{return Ra.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(i){return Hh(void 0,i)}function Hh(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xC(n)||(i[n]=Hh(i[n],e[n]));return i}function xC(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=()=>RC().__FIREBASE_DEFAULTS__,NC=()=>{if(typeof process>"u"||typeof qu>"u")return;const i=qu.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},OC=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&aa(i[1]);return e&&JSON.parse(e)},$h=()=>{try{return bC()||AC()||NC()||OC()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},DC=i=>{var e,n;return(n=(e=$h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},PC=i=>{const e=DC(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qh=()=>{var i;return(i=$h())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(i){return i.endsWith(".cloudworkstations.dev")}async function LC(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Jr(JSON.stringify(n)),Jr(JSON.stringify(u)),""].join(".")}const xi={};function kC(){const i={prod:[],emulator:[]};for(const e of Object.keys(xi))xi[e]?i.emulator.push(e):i.prod.push(e);return i}function FC(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Gu=!1;function BC(i,e){if(typeof window>"u"||typeof document>"u"||!Na(window.location.host)||xi[i]===e||xi[i]||Gu)return;xi[i]=e;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",l=kC().prod.length>0;function u(){const C=document.getElementById(s);C&&C.remove()}function f(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function _(C,A){C.setAttribute("width","24"),C.setAttribute("id",A),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function g(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Gu=!0,u()},C}function b(C,A){C.setAttribute("id",A),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function E(){const C=FC(s),A=n("text"),P=document.getElementById(A)||document.createElement("span"),H=n("learnmore"),G=document.getElementById(H)||document.createElement("a"),de=n("preprendIcon"),Le=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const Ie=C.element;f(Ie),b(G,H);const yt=g();_(Le,de),Ie.append(Le,P,G,yt),document.body.appendChild(Ie)}l?(P.innerText="Preview backend disconnected.",Le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Le.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(WC())}function UC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HC(){return Bh.NODE_ADMIN===!0}function $C(){try{return typeof indexedDB=="object"}catch{return!1}}function qC(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="FirebaseError";class qi extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=GC,Object.setPrototypeOf(this,qi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zh.prototype.create)}}class zh{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?zC(l,s):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new qi(a,f,s)}}function zC(i,e){return i.replace(VC,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const VC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(i){return JSON.parse(i)}function be(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=function(i){let e={},n={},s={},a="";try{const l=i.split(".");e=Pi(aa(l[0])||""),n=Pi(aa(l[1])||""),a=l[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:a}},KC=function(i){const e=Vh(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},YC=function(i){const e=Vh(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Gn(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function zu(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Zr(i,e,n){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(n,i[a],a,i));return s}function jr(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const l=i[a],u=e[a];if(Vu(l)&&Vu(u)){if(!jr(l,u))return!1}else if(l!==u)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Vu(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)s[E]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let E=0;E<16;E++)s[E]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let E=16;E<80;E++){const C=s[E-3]^s[E-8]^s[E-14]^s[E-16];s[E]=(C<<1|C>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],_=this.chain_[4],g,b;for(let E=0;E<80;E++){E<40?E<20?(g=f^l&(u^f),b=1518500249):(g=l^u^f,b=1859775393):E<60?(g=l&u|f&(l|u),b=2400959708):(g=l^u^f,b=3395469782);const C=(a<<5|a>>>27)+g+_+b+s[E]&4294967295;_=f,f=u,u=(l<<30|l>>>2)&4294967295,l=a,a=C}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<n;){if(u===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<n;)if(l[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<n;)if(l[u]=e[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function Kh(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,N(s<i.length,"Surrogate pair missing trail surrogate.");const u=i.charCodeAt(s)-56320;a=65536+(l<<10)+u}a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):a<65536?(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},_s=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(i){return i&&i._delegate?i._delegate:i}class Li{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Aa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(e0(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&u.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const u=this.instances.get(a);return u&&e(u,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jC(i){return i===un?void 0:i}function e0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(se||(se={}));const n0={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},i0=se.INFO,r0={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},s0=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=r0[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=i0,this._logHandler=s0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?n0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const o0=(i,e)=>e.some(n=>i instanceof n);let Ku,Yu;function a0(){return Ku||(Ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l0(){return Yu||(Yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qh=new WeakMap,la=new WeakMap,Xh=new WeakMap,Xo=new WeakMap,Oa=new WeakMap;function c0(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",u)},l=()=>{n(Kt(i.result)),a()},u=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&Qh.set(n,i)}).catch(()=>{}),Oa.set(e,i),e}function u0(i){if(la.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",u),i.removeEventListener("abort",u)},l=()=>{n(),a()},u=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",u),i.addEventListener("abort",u)});la.set(i,e)}let ca={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return la.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Xh.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function h0(i){ca=i(ca)}function f0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Jo(this),e,...n);return Xh.set(s,e.sort?e.sort():[e]),Kt(s)}:l0().includes(i)?function(...e){return i.apply(Jo(this),e),Kt(Qh.get(this))}:function(...e){return Kt(i.apply(Jo(this),e))}}function d0(i){return typeof i=="function"?f0(i):(i instanceof IDBTransaction&&u0(i),o0(i,a0())?new Proxy(i,ca):i)}function Kt(i){if(i instanceof IDBRequest)return c0(i);if(Xo.has(i))return Xo.get(i);const e=d0(i);return e!==i&&(Xo.set(i,e),Oa.set(e,i)),e}const Jo=i=>Oa.get(i);function p0(i,e,{blocked:n,upgrade:s,blocking:a,terminated:l}={}){const u=indexedDB.open(i,e),f=Kt(u);return s&&u.addEventListener("upgradeneeded",_=>{s(Kt(u.result),_.oldVersion,_.newVersion,Kt(u.transaction),_)}),n&&u.addEventListener("blocked",_=>n(_.oldVersion,_.newVersion,_)),f.then(_=>{l&&_.addEventListener("close",()=>l()),a&&_.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const _0=["get","getKey","getAll","getAllKeys","count"],g0=["put","add","delete","clear"],Zo=new Map;function Qu(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Zo.get(e))return Zo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=g0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||_0.includes(n)))return;const l=async function(u,...f){const _=this.transaction(u,a?"readwrite":"readonly");let g=_.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),a&&_.done]))[0]};return Zo.set(e,l),l}h0(i=>({...i,get:(e,n,s)=>Qu(e,n)||i.get(e,n,s),has:(e,n)=>!!Qu(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function v0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ua="@firebase/app",Xu="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Yh("@firebase/app"),y0="@firebase/app-compat",w0="@firebase/analytics-compat",C0="@firebase/analytics",E0="@firebase/app-check-compat",b0="@firebase/app-check",I0="@firebase/auth",S0="@firebase/auth-compat",T0="@firebase/database",x0="@firebase/data-connect",R0="@firebase/database-compat",A0="@firebase/functions",N0="@firebase/functions-compat",O0="@firebase/installations",D0="@firebase/installations-compat",P0="@firebase/messaging",L0="@firebase/messaging-compat",M0="@firebase/performance",k0="@firebase/performance-compat",F0="@firebase/remote-config",B0="@firebase/remote-config-compat",W0="@firebase/storage",U0="@firebase/storage-compat",H0="@firebase/firestore",$0="@firebase/ai",q0="@firebase/firestore-compat",G0="firebase",z0="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="[DEFAULT]",V0={[ua]:"fire-core",[y0]:"fire-core-compat",[C0]:"fire-analytics",[w0]:"fire-analytics-compat",[b0]:"fire-app-check",[E0]:"fire-app-check-compat",[I0]:"fire-auth",[S0]:"fire-auth-compat",[T0]:"fire-rtdb",[x0]:"fire-data-connect",[R0]:"fire-rtdb-compat",[A0]:"fire-fn",[N0]:"fire-fn-compat",[O0]:"fire-iid",[D0]:"fire-iid-compat",[P0]:"fire-fcm",[L0]:"fire-fcm-compat",[M0]:"fire-perf",[k0]:"fire-perf-compat",[F0]:"fire-rc",[B0]:"fire-rc-compat",[W0]:"fire-gcs",[U0]:"fire-gcs-compat",[H0]:"fire-fst",[q0]:"fire-fst-compat",[$0]:"fire-vertex","fire-js":"fire-js",[G0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Map,K0=new Map,fa=new Map;function Ju(i,e){try{i.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ts(i){const e=i.name;if(fa.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,i);for(const n of es.values())Ju(n,i);for(const n of K0.values())Ju(n,i);return!0}function Y0(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Q0(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new zh("app","Firebase",X0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=z0;function Da(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ha,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw Yt.create("bad-app-name",{appName:String(a)});if(n||(n=qh()),!n)throw Yt.create("no-options");const l=es.get(a);if(l){if(jr(n,l.options)&&jr(s,l.config))return l;throw Yt.create("duplicate-app",{appName:a})}const u=new t0(a);for(const _ of fa.values())u.addComponent(_);const f=new J0(n,s,u);return es.set(a,f),f}function j0(i=ha){const e=es.get(i);if(!e&&i===ha&&qh())return Da();if(!e)throw Yt.create("no-app",{appName:i});return e}function Un(i,e,n){var s;let a=(s=V0[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const l=a.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const f=[`Unable to register library "${a}" with version "${e}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(f.join(" "));return}ts(new Li(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="firebase-heartbeat-database",tE=1,Mi="firebase-heartbeat-store";let jo=null;function Jh(){return jo||(jo=p0(eE,tE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Mi)}catch(n){console.warn(n)}}}}).catch(i=>{throw Yt.create("idb-open",{originalErrorMessage:i.message})})),jo}async function nE(i){try{const n=(await Jh()).transaction(Mi),s=await n.objectStore(Mi).get(Zh(i));return await n.done,s}catch(e){if(e instanceof qi)Mt.warn(e.message);else{const n=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(n.message)}}}async function Zu(i,e){try{const s=(await Jh()).transaction(Mi,"readwrite");await s.objectStore(Mi).put(e,Zh(i)),await s.done}catch(n){if(n instanceof qi)Mt.warn(n.message);else{const s=Yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mt.warn(s.message)}}}function Zh(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=1024,rE=30;class sE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ju();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>rE){const u=lE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Mt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ju(),{heartbeatsToSend:s,unsentEntries:a}=oE(this._heartbeatsCache.heartbeats),l=Jr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Mt.warn(n),""}}}function ju(){return new Date().toISOString().substring(0,10)}function oE(i,e=iE){const n=[];let s=i.slice();for(const a of i){const l=n.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),eh(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),eh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class aE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $C()?qC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function eh(i){return Jr(JSON.stringify({version:2,heartbeats:i})).length}function lE(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(i){ts(new Li("platform-logger",e=>new m0(e),"PRIVATE")),ts(new Li("heartbeat",e=>new sE(e),"PRIVATE")),Un(ua,Xu,i),Un(ua,Xu,"esm2017"),Un("fire-js","")}cE("");var uE="firebase",hE="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(uE,hE,"app");var th={};const nh="@firebase/database",ih="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh="";function fE(i){jh=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Pi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dE(e)}}catch{}return new pE},fn=ef("localStorage"),_E=ef("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Yh("@firebase/database"),gE=function(){let i=1;return function(){return i++}}(),tf=function(i){const e=JC(i),n=new XC;n.update(e);const s=n.digest();return Ra.encodeByteArray(s)},Gi=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Gi.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let Ri=null,rh=!0;const mE=function(i,e){N(!0,"Can't turn on custom loggers persistently."),Hn.logLevel=se.VERBOSE,Ri=Hn.log.bind(Hn)},Ae=function(...i){if(rh===!0&&(rh=!1,Ri===null&&_E.get("logging_enabled")===!0&&mE()),Ri){const e=Gi.apply(null,i);Ri(e)}},zi=function(i){return function(...e){Ae(i,...e)}},da=function(...i){const e="FIREBASE INTERNAL ERROR: "+Gi(...i);Hn.error(e)},kt=function(...i){const e=`FIREBASE FATAL ERROR: ${Gi(...i)}`;throw Hn.error(e),new Error(e)},Qe=function(...i){const e="FIREBASE WARNING: "+Gi(...i);Hn.warn(e)},vE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nf=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},yE=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zn="[MIN_NAME]",dn="[MAX_NAME]",Xn=function(i,e){if(i===e)return 0;if(i===zn||e===dn)return-1;if(e===zn||i===dn)return 1;{const n=sh(i),s=sh(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},wE=function(i,e){return i===e?0:i<e?-1:1},Ei=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+be(e))},Pa=function(i){if(typeof i!="object"||i===null)return be(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=Pa(i[e[s]]);return n+="}",n},rf=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let a=0;a<n;a+=e)a+e>n?s.push(i.substring(a,n)):s.push(i.substring(a,a+e));return s};function He(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const sf=function(i){N(!nf(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let a,l,u,f,_;i===0?(l=0,u=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=f+s,u=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(_=n;_;_-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(_=e;_;_-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const b=g.join("");let E="";for(_=0;_<64;_+=8){let C=parseInt(b.substr(_,8),2).toString(16);C.length===1&&(C="0"+C),E=E+C}return E.toLowerCase()},CE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bE(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const IE=new RegExp("^-?(0*)\\d{1,10}$"),SE=-2147483648,TE=2147483647,sh=function(i){if(IE.test(i)){const e=Number(i);if(e>=SE&&e<=TE)return e}return null},Vi=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},xE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ai=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Q0(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class Xr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="5",of="v",af="s",lf="r",cf="f",uf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hf="ls",ff="p",pa="ac",df="websocket",pf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n,s,a,l=!1,u="",f=!1,_=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=_,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NE(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function gf(i,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let s;if(e===df)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===pf)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NE(i)&&(n.ns=i.namespace);const a=[];return He(n,(l,u)=>{a.push(l+"="+u)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return TC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea={},ta={};function Ma(i){const e=i.toString();return ea[e]||(ea[e]=new OE),ea[e]}function DE(i,e){const n=i.toString();return ta[n]||(ta[n]=e()),ta[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Vi(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="start",LE="close",ME="pLPCommand",kE="pRTLPCB",mf="id",vf="pw",yf="ser",FE="cb",BE="seg",WE="ts",UE="d",HE="dframe",wf=1870,Cf=30,$E=wf-Cf,qE=25e3,GE=3e4;class Bn{constructor(e,n,s,a,l,u,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zi(e),this.stats_=Ma(n),this.urlFn=_=>(this.appCheckToken&&(_[pa]=this.appCheckToken),gf(n,pf,_))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new PE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GE)),yE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ka((...l)=>{const[u,f,_,g,b]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===oh)this.id=f,this.password=_;else if(u===LE)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[oh]="t",s[yf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[FE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[of]=La,this.transportSessionId&&(s[af]=this.transportSessionId),this.lastSessionId&&(s[hf]=this.lastSessionId),this.applicationId&&(s[ff]=this.applicationId),this.appCheckToken&&(s[pa]=this.appCheckToken),typeof location<"u"&&location.hostname&&uf.test(location.hostname)&&(s[lf]=cf);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bn.forceAllow_=!0}static forceDisallow(){Bn.forceDisallow_=!0}static isAvailable(){return Bn.forceAllow_?!0:!Bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CE()&&!EE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Uh(n),a=rf(s,$E);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[HE]="t",s[mf]=e,s[vf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ka{constructor(e,n,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gE(),window[ME+this.uniqueCallbackIdentifier]=e,window[kE+this.uniqueCallbackIdentifier]=n,this.myIFrame=ka.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Ae("frame writing exception"),f.stack&&Ae(f.stack),Ae(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mf]=this.myID,e[vf]=this.myPW,e[yf]=this.currentSerial;let n=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cf+s.length<=wf;){const u=this.pendingSegs.shift();s=s+"&"+BE+a+"="+u.seg+"&"+WE+a+"="+u.ts+"&"+UE+a+"="+u.d,a++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(s,Math.floor(qE)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=16384,VE=45e3;let ns=null;typeof MozWebSocket<"u"?ns=MozWebSocket:typeof WebSocket<"u"&&(ns=WebSocket);class ht{constructor(e,n,s,a,l,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zi(this.connId),this.stats_=Ma(n),this.connURL=ht.connectionURL_(n,u,f,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,a,l){const u={};return u[of]=La,typeof location<"u"&&location.hostname&&uf.test(location.hostname)&&(u[lf]=cf),n&&(u[af]=n),s&&(u[hf]=s),a&&(u[pa]=a),l&&(u[ff]=l),gf(e,df,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fn.set("previous_websocket_failure",!0);try{let s;HC(),this.mySock=new ns(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ns!==null&&!ht.forceDisallow_}static previouslyFailed(){return fn.isInMemoryStorage||fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Pi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=rf(n,zE);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{static get ALL_TRANSPORTS(){return[Bn,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ht&&ht.isAvailable();let s=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ht];else{const a=this.transports_=[];for(const l of ki.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ki.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=6e4,YE=5e3,QE=10*1024,XE=100*1024,na="t",ah="d",JE="s",lh="r",ZE="e",ch="o",uh="a",hh="n",fh="p",jE="h";class e1{constructor(e,n,s,a,l,u,f,_,g,b){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=_,this.onKill_=g,this.lastSessionId=b,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zi("c:"+this.id+":"),this.transportManager_=new ki(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>XE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(na in e){const n=e[na];n===uh?this.upgradeIfSecondaryHealthy_():n===lh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ch&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ei("t",e),s=Ei("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ei("t",e),s=Ei("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ei(na,e);if(ah in e){const s=e[ah];if(n===jE){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(n===hh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JE?this.onConnectionShutdown_(s):n===lh?this.onReset_(s):n===ZE?da("Server Error: "+s):n===ch?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):da("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),La!==s&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{put(e,n,s,a){}merge(e,n,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const a=this.getInitialEvent(e);a&&n.apply(s,a)}off(e,n,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===n&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends bf{static getInstance(){return new is}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=32,ph=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new ie("")}function Y(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Xt(i){return i.pieces_.length-i.pieceNum_}function oe(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ie(i.pieces_,e)}function If(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function t1(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function Sf(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function Tf(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new ie(e,0)}function ye(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&n.push(s[a])}return new ie(n,0)}function Q(i){return i.pieceNum_>=i.pieces_.length}function We(i,e){const n=Y(i),s=Y(e);if(n===null)return e;if(n===s)return We(oe(i),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Fa(i,e){if(Xt(i)!==Xt(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function ft(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Xt(i)>Xt(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class n1{constructor(e,n){this.errorPrefix_=n,this.parts_=Sf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_s(this.parts_[s]);xf(this)}}function i1(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=_s(e),xf(i)}function r1(i){const e=i.parts_.pop();i.byteLength_-=_s(e),i.parts_.length>0&&(i.byteLength_-=1)}function xf(i){if(i.byteLength_>ph)throw new Error(i.errorPrefix_+"has a key path longer than "+ph+" bytes ("+i.byteLength_+").");if(i.parts_.length>dh)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dh+") or object contains a cycle "+hn(i))}function hn(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends bf{static getInstance(){return new Ba}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=1e3,s1=60*5*1e3,_h=30*1e3,o1=1.3,a1=3e4,l1="server_kill",gh=3;class Pt extends Ef{constructor(e,n,s,a,l,u,f,_){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=_,this.id=Pt.nextPersistentConnectionId_++,this.log_=zi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bi,this.maxReconnectDelay_=s1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ba.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&is.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const a=++this.requestNumber_,l={r:a,a:e,b:n};this.log_(be(l)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const n=new Aa,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(e,n,s,a){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:n,query:e,tag:s};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},u="q";e.tag&&(l.q=n._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,f=>{const _=f.d,g=f.s;Pt.warnOnListenWarnings_(_,n),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,_))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const s=Gn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_h)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=KC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,a=>{const l=a.s,u=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,n)}sendUnlisten_(e,n,s,a){this.log_("Unlisten on "+e+" for "+n);const l={p:e},u="n";a&&(l.q=s,l.t=a),this.sendRequest(u,l)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,a){const l={p:n,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,n,s,a){this.putInternal("p",e,n,s,a)}merge(e,n,s,a){this.putInternal("m",e,n,s,a)}putInternal(e,n,s,a,l){this.initConnection_();const u={p:n,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):da("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>a1&&(this.reconnectDelay_=bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*o1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Pt.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const _=function(){f?f.close():(u=!0,s())},g=function(E){N(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(E)};this.realtime_={close:_,sendRequest:g};const b=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,C]=await Promise.all([this.authTokenProvider_.getToken(b),this.appCheckTokenProvider_.getToken(b)]);u?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=C&&C.token,f=new e1(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,A=>{Qe(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(l1)},l))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Qe(E),_())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zu(this.interruptReasons_)&&(this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(l=>Pa(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,n){const s=new ie(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(n),l.delete(n),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gh&&(this.reconnectDelay_=_h,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jh.replace(/\./g,"-")]=1,Gh()?e["framework.cordova"]=1:UC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=is.getInstance().currentlyOnline();return zu(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(zn,e),a=new V(zn,n);return this.compare(s,a)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;class Rf extends ms{static get __EMPTY_NODE(){return Kr}static set __EMPTY_NODE(e){Kr=e}compare(e,n){return Xn(e.name,n.name)}isDefinedOn(e){throw Qn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(dn,Kr)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,Kr)}toString(){return".key"}}const $n=new Rf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,a,l){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=a??Ue.EMPTY_NODE,this.right=l??Ue.EMPTY_NODE}copy(e,n,s,a,l){return new Ee(e??this.key,n??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,n,s),null):l===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,a;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class c1{copy(e,n,s,a,l){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,a=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Yr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Yr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Yr(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new c1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(i,e){return Xn(i.name,e.name)}function Wa(i,e){return Xn(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;function h1(i){_a=i}const Af=function(i){return typeof i=="number"?"number:"+sf(i):"string:"+i},Nf=function(i){if(i.isLeafNode()){const e=i.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else N(i===_a||i.isEmpty(),"priority of unexpected type.");N(i===_a||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mh;class Ce{static set __childrenNodeConstructor(e){mh=e}static get __childrenNodeConstructor(){return mh}constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:Y(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Y(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(N(s!==".priority"||Xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Af(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sf(this.value_):e+=this.value_,this.lazyHash_=tf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,a=Ce.VALUE_TYPE_ORDER.indexOf(n),l=Ce.VALUE_TYPE_ORDER.indexOf(s);return N(a>=0,"Unknown leaf type: "+n),N(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of,Df;function f1(i){Of=i}function d1(i){Df=i}class p1 extends ms{compare(e,n){const s=e.node.getPriority(),a=n.node.getPriority(),l=s.compareTo(a);return l===0?Xn(e.name,n.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(dn,new Ce("[PRIORITY-POST]",Df))}makePost(e,n){const s=Of(e);return new V(n,new Ce("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new p1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=Math.log(2);class g1{constructor(e){const n=l=>parseInt(Math.log(l)/_1,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rs=function(i,e,n,s){i.sort(e);const a=function(_,g){const b=g-_;let E,C;if(b===0)return null;if(b===1)return E=i[_],C=n?n(E):E,new Ee(C,E.node,Ee.BLACK,null,null);{const A=parseInt(b/2,10)+_,P=a(_,A),H=a(A+1,g);return E=i[A],C=n?n(E):E,new Ee(C,E.node,Ee.BLACK,P,H)}},l=function(_){let g=null,b=null,E=i.length;const C=function(P,H){const G=E-P,de=E;E-=P;const Le=a(G+1,de),Ie=i[G],yt=n?n(Ie):Ie;A(new Ee(yt,Ie.node,H,null,Le))},A=function(P){g?(g.left=P,g=P):(b=P,g=P)};for(let P=0;P<_.count;++P){const H=_.nextBitIsOne(),G=Math.pow(2,_.count-(P+1));H?C(G,Ee.BLACK):(C(G,Ee.BLACK),C(G,Ee.RED))}return b},u=new g1(i.length),f=l(u);return new Ue(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia;const kn={};class Dt{static get Default(){return N(kn&&fe,"ChildrenNode.ts has not been loaded"),ia=ia||new Dt({".priority":kn},{".priority":fe}),ia}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Gn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){N(e!==$n,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=n.getIterator(V.Wrap);let u=l.getNext();for(;u;)a=a||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let f;a?f=rs(s,e.getCompare()):f=kn;const _=e.toString(),g=Object.assign({},this.indexSet_);g[_]=e;const b=Object.assign({},this.indexes_);return b[_]=f,new Dt(b,g)}addToIndexes(e,n){const s=Zr(this.indexes_,(a,l)=>{const u=Gn(this.indexSet_,l);if(N(u,"Missing index implementation for "+l),a===kn)if(u.isDefinedOn(e.node)){const f=[],_=n.getIterator(V.Wrap);let g=_.getNext();for(;g;)g.name!==e.name&&f.push(g),g=_.getNext();return f.push(e),rs(f,u.getCompare())}else return kn;else{const f=n.get(e.name);let _=a;return f&&(_=_.remove(new V(e.name,f))),_.insert(e,e.node)}});return new Dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Zr(this.indexes_,a=>{if(a===kn)return a;{const l=n.get(e.name);return l?a.remove(new V(e.name,l)):a}});return new Dt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii;class B{static get EMPTY_NODE(){return Ii||(Ii=new B(new Ue(Wa),null,Dt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Nf(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ii}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ii:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let a,l;n.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,n),l=this.indexMap_.addToIndexes(s,this.children_));const u=a.isEmpty()?Ii:this.priorityNode_;return new B(a,u,l)}}updateChild(e,n){const s=Y(e);if(s===null)return n;{N(Y(e)!==".priority"||Xt(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(oe(e),n);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,a=0,l=!0;if(this.forEachChild(fe,(u,f)=>{n[u]=f.val(e),s++,l&&B.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!e&&l&&a<2*s){const u=[];for(const f in n)u[f]=n[f];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Af(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const a=s.hash();a!==""&&(e+=":"+n+":"+a)}),this.lazyHash_=e===""?"":tf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new V(e,n));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,V.Wrap);let l=a.peek();for(;l!=null&&n.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let l=a.peek();for(;l!=null&&n.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ki?-1:0}withIndex(e){if(e===$n||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$n||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),a=n.getIterator(fe);let l=s.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===$n?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class m1 extends B{constructor(){super(new Ue(Wa),B.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ki=new m1;Object.defineProperties(V,{MIN:{value:new V(zn,B.EMPTY_NODE)},MAX:{value:new V(dn,Ki)}});Rf.__EMPTY_NODE=B.EMPTY_NODE;Ce.__childrenNodeConstructor=B;h1(Ki);d1(Ki);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=!0;function Ne(i,e=null){if(i===null)return B.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new Ce(n,Ne(e))}if(!(i instanceof Array)&&v1){const n=[];let s=!1;if(He(i,(u,f)=>{if(u.substring(0,1)!=="."){const _=Ne(f);_.isEmpty()||(s=s||!_.getPriority().isEmpty(),n.push(new V(u,_)))}}),n.length===0)return B.EMPTY_NODE;const l=rs(n,u1,u=>u.name,Wa);if(s){const u=rs(n,fe.getCompare());return new B(l,Ne(e),new Dt({".priority":u},{".priority":fe}))}else return new B(l,Ne(e),Dt.Default)}else{let n=B.EMPTY_NODE;return He(i,(s,a)=>{if(Ft(i,s)&&s.substring(0,1)!=="."){const l=Ne(a);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(s,l))}}),n.updatePriority(Ne(e))}}f1(Ne);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1 extends ms{constructor(e){super(),this.indexPath_=e,N(!Q(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),a=this.extractChild(n.node),l=s.compareTo(a);return l===0?Xn(e.name,n.name):l}makePost(e,n){const s=Ne(e),a=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,a)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ki);return new V(dn,e)}toString(){return Sf(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1 extends ms{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Xn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=Ne(e);return new V(n,s)}toString(){return".value"}}const C1=new w1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(i){return{type:"value",snapshotNode:i}}function Vn(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Fi(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function Bi(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function E1(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.index_=e}updateChild(e,n,s,a,l,u){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(a).equals(s.getChild(a))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(Fi(n,f)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Vn(n,s)):u.trackChildChange(Bi(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(a,l)=>{n.hasChild(a)||s.trackChildChange(Fi(a,l))}),n.isLeafNode()||n.forEachChild(fe,(a,l)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(l)||s.trackChildChange(Bi(a,l,u))}else s.trackChildChange(Vn(a,l))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.indexedFilter_=new Ua(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wi.getStartPost_(e),this.endPost_=Wi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,a,l,u){return this.matches(new V(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,a,l,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let a=n.withIndex(this.index_);a=a.updatePriority(B.EMPTY_NODE);const l=this;return n.forEachChild(fe,(u,f)=>{l.matches(new V(u,f))||(a=a.updateImmediateChild(u,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,a,l,u){return this.rangedFilter_.matches(new V(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,a,l,u):this.fullLimitUpdateChild_(e,n,s,l,u)}updateFullNode(e,n,s){let a;if(n.isLeafNode()||n.isEmpty())a=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){a=B.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{a=n.withIndex(this.index_),a=a.updatePriority(B.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:a=a.updateImmediateChild(f.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,a,l){let u;if(this.reverse_){const E=this.index_.getCompare();u=(C,A)=>E(A,C)}else u=this.index_.getCompare();const f=e;N(f.numChildren()===this.limit_,"");const _=new V(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),b=this.rangedFilter_.matches(_);if(f.hasChild(n)){const E=f.getImmediateChild(n);let C=a.getChildAfterChild(this.index_,g,this.reverse_);for(;C!=null&&(C.name===n||f.hasChild(C.name));)C=a.getChildAfterChild(this.index_,C,this.reverse_);const A=C==null?1:u(C,_);if(b&&!s.isEmpty()&&A>=0)return l!=null&&l.trackChildChange(Bi(n,s,E)),f.updateImmediateChild(n,s);{l!=null&&l.trackChildChange(Fi(n,E));const H=f.updateImmediateChild(n,B.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(l!=null&&l.trackChildChange(Vn(C.name,C.node)),H.updateImmediateChild(C.name,C.node)):H}}else return s.isEmpty()?e:b&&u(g,_)>=0?(l!=null&&(l.trackChildChange(Fi(g.name,g.node)),l.trackChildChange(Vn(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zn}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Ha;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function I1(i){return i.loadsAllData()?new Ua(i.getIndex()):i.hasLimit()?new b1(i):new Wi(i)}function vh(i){const e={};if(i.isDefault())return e;let n;if(i.index_===fe?n="$priority":i.index_===C1?n="$value":i.index_===$n?n="$key":(N(i.index_ instanceof y1,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=be(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=be(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+be(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=be(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+be(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function yh(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==fe&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Ef{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=zi("p:rest:"),this.listens_={}}listen(e,n,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=ss.getListenId_(e,s),f={};this.listens_[u]=f;const _=vh(e._queryParams);this.restRequest_(l+".json",_,(g,b)=>{let E=b;if(g===404&&(E=null,g=null),g===null&&this.onDataUpdate_(l,E,!1,s),Gn(this.listens_,u)===f){let C;g?g===401?C="permission_denied":C="rest_error:"+g:C="ok",a(C,null)}})}unlisten(e,n){const s=ss.getListenId_(e,n);delete this.listens_[s]}get(e){const n=vh(e._queryParams),s=e._path.toString(),a=new Aa;return this.restRequest_(s+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(n.auth=a.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+QC(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let _=null;if(f.status>=200&&f.status<300){try{_=Pi(f.responseText)}catch{Qe("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,_)}else f.status!==401&&f.status!==404&&Qe("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(){return{value:null,children:new Map}}function Lf(i,e,n){if(Q(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=Y(e);i.children.has(s)||i.children.set(s,os());const a=i.children.get(s);e=oe(e),Lf(a,e,n)}}function ga(i,e,n){i.value!==null?n(e,i.value):T1(i,(s,a)=>{const l=new ie(e.toString()+"/"+s);ga(a,l,n)})}function T1(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(s,a)=>{n[s]=n[s]-a}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=10*1e3,R1=30*1e3,A1=5*60*1e3;class N1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new x1(e);const s=wh+(R1-wh)*Math.random();Ai(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;He(e,(a,l)=>{l>0&&Ft(this.statsToReport_,a)&&(n[a]=l,s=!0)}),s&&this.server_.reportStats(n),Ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*A1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function Mf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $a(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qa(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dt.ACK_USER_WRITE,this.source=Mf()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new as(j(),n,this.revert)}}else return N(Y(this.path)===e,"operationForChild called for unrelated child."),new as(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.source=e,this.path=n,this.type=dt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Ui(this.source,j()):new Ui(this.source,oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dt.OVERWRITE}operationForChild(e){return Q(this.path)?new pn(this.source,j(),this.snap.getImmediateChild(e)):new pn(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new pn(this.source,j(),n.value):new Hi(this.source,j(),n)}else return N(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hi(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function D1(i,e,n,s){const a=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&i.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(E1(u.childName,u.snapshotNode))}),Si(i,a,"child_removed",e,s,n),Si(i,a,"child_added",e,s,n),Si(i,a,"child_moved",l,s,n),Si(i,a,"child_changed",e,s,n),Si(i,a,"value",e,s,n),a}function Si(i,e,n,s,a,l){const u=s.filter(f=>f.type===n);u.sort((f,_)=>L1(i,f,_)),u.forEach(f=>{const _=P1(i,f,l);a.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(_,i.query_))})})}function P1(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function L1(i,e,n){if(e.childName==null||n.childName==null)throw Qn("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),a=new V(n.childName,n.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(i,e){return{eventCache:i,serverCache:e}}function Ni(i,e,n,s){return vs(new _n(e,n,s),i.serverCache)}function kf(i,e,n,s){return vs(i.eventCache,new _n(e,n,s))}function ma(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function gn(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;const M1=()=>(ra||(ra=new Ue(wE)),ra);class le{static fromObject(e){let n=new le(null);return He(e,(s,a)=>{n=n.set(new ie(s),a)}),n}constructor(e,n=M1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(Q(e))return null;{const s=Y(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(oe(e),n);return l!=null?{path:ye(new ie(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=Y(e),s=this.children.get(n);return s!==null?s.subtree(oe(e)):new le(null)}}set(e,n){if(Q(e))return new le(n,this.children);{const s=Y(e),l=(this.children.get(s)||new le(null)).set(oe(e),n),u=this.children.insert(s,l);return new le(this.value,u)}}remove(e){if(Q(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=Y(e),s=this.children.get(n);if(s){const a=s.remove(oe(e));let l;return a.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,a),this.value===null&&l.isEmpty()?new le(null):new le(this.value,l)}else return this}}get(e){if(Q(e))return this.value;{const n=Y(e),s=this.children.get(n);return s?s.get(oe(e)):null}}setTree(e,n){if(Q(e))return n;{const s=Y(e),l=(this.children.get(s)||new le(null)).setTree(oe(e),n);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new le(this.value,u)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(ye(e,a),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,s){const a=this.value?s(n,this.value):!1;if(a)return a;if(Q(e))return null;{const l=Y(e),u=this.children.get(l);return u?u.findOnPath_(oe(e),ye(n,l),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,s){if(Q(e))return this;{this.value&&s(n,this.value);const a=Y(e),l=this.children.get(a);return l?l.foreachOnPath_(oe(e),ye(n,a),s):new le(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((s,a)=>{a.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new le(null))}}function Oi(i,e,n){if(Q(e))return new pt(new le(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const u=We(a,e);return l=l.updateChild(u,n),new pt(i.writeTree_.set(a,l))}else{const a=new le(n),l=i.writeTree_.setTree(e,a);return new pt(l)}}}function Ch(i,e,n){let s=i;return He(n,(a,l)=>{s=Oi(s,ye(e,a),l)}),s}function Eh(i,e){if(Q(e))return pt.empty();{const n=i.writeTree_.setTree(e,new le(null));return new pt(n)}}function va(i,e){return mn(i,e)!=null}function mn(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(We(n.path,e)):null}function bh(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,a)=>{e.push(new V(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new V(s,a.value))}),e}function Qt(i,e){if(Q(e))return i;{const n=mn(i,e);return n!=null?new pt(new le(n)):new pt(i.writeTree_.subtree(e))}}function ya(i){return i.writeTree_.isEmpty()}function Kn(i,e){return Ff(j(),i.writeTree_,e)}function Ff(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(N(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):n=Ff(ye(i,a),l,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(ye(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(i,e){return Hf(e,i)}function k1(i,e,n,s,a){N(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:a}),a&&(i.visibleWrites=Oi(i.visibleWrites,e,n)),i.lastWriteId=s}function F1(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function B1(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let a=s.visible,l=!1,u=i.allWrites.length-1;for(;a&&u>=0;){const f=i.allWrites[u];f.visible&&(u>=n&&W1(f,s.path)?a=!1:ft(s.path,f.path)&&(l=!0)),u--}if(a){if(l)return U1(i),!0;if(s.snap)i.visibleWrites=Eh(i.visibleWrites,s.path);else{const f=s.children;He(f,_=>{i.visibleWrites=Eh(i.visibleWrites,ye(s.path,_))})}return!0}else return!1}function W1(i,e){if(i.snap)return ft(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&ft(ye(i.path,n),e))return!0;return!1}function U1(i){i.visibleWrites=Bf(i.allWrites,H1,j()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function H1(i){return i.visible}function Bf(i,e,n){let s=pt.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const u=l.path;let f;if(l.snap)ft(n,u)?(f=We(n,u),s=Oi(s,f,l.snap)):ft(u,n)&&(f=We(u,n),s=Oi(s,j(),l.snap.getChild(f)));else if(l.children){if(ft(n,u))f=We(n,u),s=Ch(s,f,l.children);else if(ft(u,n))if(f=We(u,n),Q(f))s=Ch(s,j(),l.children);else{const _=Gn(l.children,Y(f));if(_){const g=_.getChild(oe(f));s=Oi(s,j(),g)}}}else throw Qn("WriteRecord should have .snap or .children")}}return s}function Wf(i,e,n,s,a){if(!s&&!a){const l=mn(i.visibleWrites,e);if(l!=null)return l;{const u=Qt(i.visibleWrites,e);if(ya(u))return n;if(n==null&&!va(u,j()))return null;{const f=n||B.EMPTY_NODE;return Kn(u,f)}}}else{const l=Qt(i.visibleWrites,e);if(!a&&ya(l))return n;if(!a&&n==null&&!va(l,j()))return null;{const u=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(ft(g.path,e)||ft(e,g.path))},f=Bf(i.allWrites,u,e),_=n||B.EMPTY_NODE;return Kn(f,_)}}}function $1(i,e,n){let s=B.EMPTY_NODE;const a=mn(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(fe,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(n){const l=Qt(i.visibleWrites,e);return n.forEachChild(fe,(u,f)=>{const _=Kn(Qt(l,new ie(u)),f);s=s.updateImmediateChild(u,_)}),bh(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=Qt(i.visibleWrites,e);return bh(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function q1(i,e,n,s,a){N(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=ye(e,n);if(va(i.visibleWrites,l))return null;{const u=Qt(i.visibleWrites,l);return ya(u)?a.getChild(n):Kn(u,a.getChild(n))}}function G1(i,e,n,s){const a=ye(e,n),l=mn(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(n)){const u=Qt(i.visibleWrites,a);return Kn(u,s.getNode().getImmediateChild(n))}else return null}function z1(i,e){return mn(i.visibleWrites,e)}function V1(i,e,n,s,a,l,u){let f;const _=Qt(i.visibleWrites,e),g=mn(_,j());if(g!=null)f=g;else if(n!=null)f=Kn(_,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const b=[],E=u.getCompare(),C=l?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let A=C.getNext();for(;A&&b.length<a;)E(A,s)!==0&&b.push(A),A=C.getNext();return b}else return[]}function K1(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function ls(i,e,n,s){return Wf(i.writeTree,i.treePath,e,n,s)}function za(i,e){return $1(i.writeTree,i.treePath,e)}function Ih(i,e,n,s){return q1(i.writeTree,i.treePath,e,n,s)}function cs(i,e){return z1(i.writeTree,ye(i.treePath,e))}function Y1(i,e,n,s,a,l){return V1(i.writeTree,i.treePath,e,n,s,a,l)}function Va(i,e,n){return G1(i.writeTree,i.treePath,e,n)}function Uf(i,e){return Hf(ye(i.treePath,e),i.writeTree)}function Hf(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(s,Bi(s,e.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(s,Fi(s,a.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(s,Vn(s,e.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(s,Bi(s,e.snapshotNode,a.oldSnap));else throw Qn("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const $f=new X1;class Ka{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new _n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Va(this.writes_,e,s)}}getChildAfterChild(e,n,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gn(this.viewCache_),l=Y1(this.writes_,a,n,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(i){return{filter:i}}function Z1(i,e){N(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function j1(i,e,n,s,a){const l=new Q1;let u,f;if(n.type===dt.OVERWRITE){const g=n;g.source.fromUser?u=wa(i,e,g.path,g.snap,s,a,l):(N(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Q(g.path),u=us(i,e,g.path,g.snap,s,a,f,l))}else if(n.type===dt.MERGE){const g=n;g.source.fromUser?u=tb(i,e,g.path,g.children,s,a,l):(N(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=Ca(i,e,g.path,g.children,s,a,f,l))}else if(n.type===dt.ACK_USER_WRITE){const g=n;g.revert?u=rb(i,e,g.path,s,a,l):u=nb(i,e,g.path,g.affectedTree,s,a,l)}else if(n.type===dt.LISTEN_COMPLETE)u=ib(i,e,n.path,s,l);else throw Qn("Unknown operation type: "+n.type);const _=l.getChanges();return eb(e,u,_),{viewCache:u,changes:_}}function eb(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=ma(i);(n.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&n.push(Pf(ma(e)))}}function qf(i,e,n,s,a,l){const u=e.eventCache;if(cs(s,n)!=null)return e;{let f,_;if(Q(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=gn(e),b=g instanceof B?g:B.EMPTY_NODE,E=za(s,b);f=i.filter.updateFullNode(e.eventCache.getNode(),E,l)}else{const g=ls(s,gn(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Y(n);if(g===".priority"){N(Xt(n)===1,"Can't have a priority with additional path components");const b=u.getNode();_=e.serverCache.getNode();const E=Ih(s,n,b,_);E!=null?f=i.filter.updatePriority(b,E):f=u.getNode()}else{const b=oe(n);let E;if(u.isCompleteForChild(g)){_=e.serverCache.getNode();const C=Ih(s,n,u.getNode(),_);C!=null?E=u.getNode().getImmediateChild(g).updateChild(b,C):E=u.getNode().getImmediateChild(g)}else E=Va(s,g,e.serverCache);E!=null?f=i.filter.updateChild(u.getNode(),g,E,b,a,l):f=u.getNode()}}return Ni(e,f,u.isFullyInitialized()||Q(n),i.filter.filtersNodes())}}function us(i,e,n,s,a,l,u,f){const _=e.serverCache;let g;const b=u?i.filter:i.filter.getIndexedFilter();if(Q(n))g=b.updateFullNode(_.getNode(),s,null);else if(b.filtersNodes()&&!_.isFiltered()){const A=_.getNode().updateChild(n,s);g=b.updateFullNode(_.getNode(),A,null)}else{const A=Y(n);if(!_.isCompleteForPath(n)&&Xt(n)>1)return e;const P=oe(n),G=_.getNode().getImmediateChild(A).updateChild(P,s);A===".priority"?g=b.updatePriority(_.getNode(),G):g=b.updateChild(_.getNode(),A,G,P,$f,null)}const E=kf(e,g,_.isFullyInitialized()||Q(n),b.filtersNodes()),C=new Ka(a,E,l);return qf(i,E,n,a,C,f)}function wa(i,e,n,s,a,l,u){const f=e.eventCache;let _,g;const b=new Ka(a,e,l);if(Q(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,u),_=Ni(e,g,!0,i.filter.filtersNodes());else{const E=Y(n);if(E===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),_=Ni(e,g,f.isFullyInitialized(),f.isFiltered());else{const C=oe(n),A=f.getNode().getImmediateChild(E);let P;if(Q(C))P=s;else{const H=b.getCompleteChild(E);H!=null?If(C)===".priority"&&H.getChild(Tf(C)).isEmpty()?P=H:P=H.updateChild(C,s):P=B.EMPTY_NODE}if(A.equals(P))_=e;else{const H=i.filter.updateChild(f.getNode(),E,P,C,b,u);_=Ni(e,H,f.isFullyInitialized(),i.filter.filtersNodes())}}}return _}function Sh(i,e){return i.eventCache.isCompleteForChild(e)}function tb(i,e,n,s,a,l,u){let f=e;return s.foreach((_,g)=>{const b=ye(n,_);Sh(e,Y(b))&&(f=wa(i,f,b,g,a,l,u))}),s.foreach((_,g)=>{const b=ye(n,_);Sh(e,Y(b))||(f=wa(i,f,b,g,a,l,u))}),f}function Th(i,e,n){return n.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Ca(i,e,n,s,a,l,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,g;Q(n)?g=s:g=new le(null).setTree(n,s);const b=e.serverCache.getNode();return g.children.inorderTraversal((E,C)=>{if(b.hasChild(E)){const A=e.serverCache.getNode().getImmediateChild(E),P=Th(i,A,C);_=us(i,_,new ie(E),P,a,l,u,f)}}),g.children.inorderTraversal((E,C)=>{const A=!e.serverCache.isCompleteForChild(E)&&C.value===null;if(!b.hasChild(E)&&!A){const P=e.serverCache.getNode().getImmediateChild(E),H=Th(i,P,C);_=us(i,_,new ie(E),H,a,l,u,f)}}),_}function nb(i,e,n,s,a,l,u){if(cs(a,n)!=null)return e;const f=e.serverCache.isFiltered(),_=e.serverCache;if(s.value!=null){if(Q(n)&&_.isFullyInitialized()||_.isCompleteForPath(n))return us(i,e,n,_.getNode().getChild(n),a,l,f,u);if(Q(n)){let g=new le(null);return _.getNode().forEachChild($n,(b,E)=>{g=g.set(new ie(b),E)}),Ca(i,e,n,g,a,l,f,u)}else return e}else{let g=new le(null);return s.foreach((b,E)=>{const C=ye(n,b);_.isCompleteForPath(C)&&(g=g.set(b,_.getNode().getChild(C)))}),Ca(i,e,n,g,a,l,f,u)}}function ib(i,e,n,s,a){const l=e.serverCache,u=kf(e,l.getNode(),l.isFullyInitialized()||Q(n),l.isFiltered());return qf(i,u,n,s,$f,a)}function rb(i,e,n,s,a,l){let u;if(cs(s,n)!=null)return e;{const f=new Ka(s,e,a),_=e.eventCache.getNode();let g;if(Q(n)||Y(n)===".priority"){let b;if(e.serverCache.isFullyInitialized())b=ls(s,gn(e));else{const E=e.serverCache.getNode();N(E instanceof B,"serverChildren would be complete if leaf node"),b=za(s,E)}b=b,g=i.filter.updateFullNode(_,b,l)}else{const b=Y(n);let E=Va(s,b,e.serverCache);E==null&&e.serverCache.isCompleteForChild(b)&&(E=_.getImmediateChild(b)),E!=null?g=i.filter.updateChild(_,b,E,oe(n),f,l):e.eventCache.getNode().hasChild(b)?g=i.filter.updateChild(_,b,B.EMPTY_NODE,oe(n),f,l):g=_,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=ls(s,gn(e)),u.isLeafNode()&&(g=i.filter.updateFullNode(g,u,l)))}return u=e.serverCache.isFullyInitialized()||cs(s,j())!=null,Ni(e,g,u,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Ua(s.getIndex()),l=I1(s);this.processor_=J1(l);const u=n.serverCache,f=n.eventCache,_=a.updateFullNode(B.EMPTY_NODE,u.getNode(),null),g=l.updateFullNode(B.EMPTY_NODE,f.getNode(),null),b=new _n(_,u.isFullyInitialized(),a.filtersNodes()),E=new _n(g,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=vs(E,b),this.eventGenerator_=new O1(this.query_)}get query(){return this.query_}}function ob(i){return i.viewCache_.serverCache.getNode()}function ab(i,e){const n=gn(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function xh(i){return i.eventRegistrations_.length===0}function lb(i,e){i.eventRegistrations_.push(e)}function Rh(i,e,n){const s=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const a=i.query._path;i.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,a);u&&s.push(u)})}if(e){let a=[];for(let l=0;l<i.eventRegistrations_.length;++l){const u=i.eventRegistrations_[l];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(i.eventRegistrations_.slice(l+1));break}}i.eventRegistrations_=a}else i.eventRegistrations_=[];return s}function Ah(i,e,n,s){e.type===dt.MERGE&&e.source.queryId!==null&&(N(gn(i.viewCache_),"We should always have a full cache before handling merges"),N(ma(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=j1(i.processor_,a,e,n,s);return Z1(i.processor_,l.viewCache),N(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,Gf(i,l.changes,l.viewCache.eventCache.getNode(),null)}function cb(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(l,u)=>{s.push(Vn(l,u))}),n.isFullyInitialized()&&s.push(Pf(n.getNode())),Gf(i,s,n.getNode(),e)}function Gf(i,e,n,s){const a=s?[s]:i.eventRegistrations_;return D1(i.eventGenerator_,e,n,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs;class ub{constructor(){this.views=new Map}}function hb(i){N(!hs,"__referenceConstructor has already been defined"),hs=i}function fb(){return N(hs,"Reference.ts has not been loaded"),hs}function db(i){return i.views.size===0}function Ya(i,e,n,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return N(l!=null,"SyncTree gave us an op for an invalid query."),Ah(l,e,n,s)}else{let l=[];for(const u of i.views.values())l=l.concat(Ah(u,e,n,s));return l}}function pb(i,e,n,s,a){const l=e._queryIdentifier,u=i.views.get(l);if(!u){let f=ls(n,a?s:null),_=!1;f?_=!0:s instanceof B?(f=za(n,s),_=!1):(f=B.EMPTY_NODE,_=!1);const g=vs(new _n(f,_,!1),new _n(s,a,!1));return new sb(e,g)}return u}function _b(i,e,n,s,a,l){const u=pb(i,e,s,a,l);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,u),lb(u,n),cb(u,n)}function gb(i,e,n,s){const a=e._queryIdentifier,l=[];let u=[];const f=Jt(i);if(a==="default")for(const[_,g]of i.views.entries())u=u.concat(Rh(g,n,s)),xh(g)&&(i.views.delete(_),g.query._queryParams.loadsAllData()||l.push(g.query));else{const _=i.views.get(a);_&&(u=u.concat(Rh(_,n,s)),xh(_)&&(i.views.delete(a),_.query._queryParams.loadsAllData()||l.push(_.query)))}return f&&!Jt(i)&&l.push(new(fb())(e._repo,e._path)),{removed:l,events:u}}function zf(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qn(i,e){let n=null;for(const s of i.views.values())n=n||ab(s,e);return n}function Vf(i,e){if(e._queryParams.loadsAllData())return ys(i);{const s=e._queryIdentifier;return i.views.get(s)}}function Kf(i,e){return Vf(i,e)!=null}function Jt(i){return ys(i)!=null}function ys(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;function mb(i){N(!fs,"__referenceConstructor has already been defined"),fs=i}function vb(){return N(fs,"Reference.ts has not been loaded"),fs}let yb=1;class Nh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=K1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wb(i,e,n,s,a){return k1(i.pendingWriteTree_,e,n,s,a),a?Yi(i,new pn(Mf(),e,n)):[]}function Wn(i,e,n=!1){const s=F1(i.pendingWriteTree_,e);if(B1(i.pendingWriteTree_,e)){let l=new le(null);return s.snap!=null?l=l.set(j(),!0):He(s.children,u=>{l=l.set(new ie(u),!0)}),Yi(i,new as(s.path,l,n))}else return[]}function ws(i,e,n){return Yi(i,new pn($a(),e,n))}function Cb(i,e,n){const s=le.fromObject(n);return Yi(i,new Hi($a(),e,s))}function Eb(i,e){return Yi(i,new Ui($a(),e))}function bb(i,e,n){const s=Qa(i,n);if(s){const a=Xa(s),l=a.path,u=a.queryId,f=We(l,e),_=new Ui(qa(u),f);return Ja(i,l,_)}else return[]}function Ea(i,e,n,s,a=!1){const l=e._path,u=i.syncPointTree_.get(l);let f=[];if(u&&(e._queryIdentifier==="default"||Kf(u,e))){const _=gb(u,e,n,s);db(u)&&(i.syncPointTree_=i.syncPointTree_.remove(l));const g=_.removed;if(f=_.events,!a){const b=g.findIndex(C=>C._queryParams.loadsAllData())!==-1,E=i.syncPointTree_.findOnPath(l,(C,A)=>Jt(A));if(b&&!E){const C=i.syncPointTree_.subtree(l);if(!C.isEmpty()){const A=Tb(C);for(let P=0;P<A.length;++P){const H=A[P],G=H.query,de=Jf(i,H);i.listenProvider_.startListening(Di(G),ds(i,G),de.hashFn,de.onComplete)}}}!E&&g.length>0&&!s&&(b?i.listenProvider_.stopListening(Di(e),null):g.forEach(C=>{const A=i.queryToTagMap.get(Cs(C));i.listenProvider_.stopListening(Di(C),A)}))}xb(i,g)}return f}function Ib(i,e,n,s){const a=Qa(i,s);if(a!=null){const l=Xa(a),u=l.path,f=l.queryId,_=We(u,e),g=new pn(qa(f),_,n);return Ja(i,u,g)}else return[]}function Sb(i,e,n,s){const a=Qa(i,s);if(a){const l=Xa(a),u=l.path,f=l.queryId,_=We(u,e),g=le.fromObject(n),b=new Hi(qa(f),_,g);return Ja(i,u,b)}else return[]}function Oh(i,e,n,s=!1){const a=e._path;let l=null,u=!1;i.syncPointTree_.foreachOnPath(a,(C,A)=>{const P=We(C,a);l=l||qn(A,P),u=u||Jt(A)});let f=i.syncPointTree_.get(a);f?(u=u||Jt(f),l=l||qn(f,j())):(f=new ub,i.syncPointTree_=i.syncPointTree_.set(a,f));let _;l!=null?_=!0:(_=!1,l=B.EMPTY_NODE,i.syncPointTree_.subtree(a).foreachChild((A,P)=>{const H=qn(P,j());H&&(l=l.updateImmediateChild(A,H))}));const g=Kf(f,e);if(!g&&!e._queryParams.loadsAllData()){const C=Cs(e);N(!i.queryToTagMap.has(C),"View does not exist, but we have a tag");const A=Rb();i.queryToTagMap.set(C,A),i.tagToQueryMap.set(A,C)}const b=Ga(i.pendingWriteTree_,a);let E=_b(f,e,n,b,l,_);if(!g&&!u&&!s){const C=Vf(f,e);E=E.concat(Ab(i,e,C))}return E}function Yf(i,e,n){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(u,f)=>{const _=We(u,e),g=qn(f,_);if(g)return g});return Wf(a,e,l,n,!0)}function Yi(i,e){return Qf(e,i.syncPointTree_,null,Ga(i.pendingWriteTree_,j()))}function Qf(i,e,n,s){if(Q(i.path))return Xf(i,e,n,s);{const a=e.get(j());n==null&&a!=null&&(n=qn(a,j()));let l=[];const u=Y(i.path),f=i.operationForChild(u),_=e.children.get(u);if(_&&f){const g=n?n.getImmediateChild(u):null,b=Uf(s,u);l=l.concat(Qf(f,_,g,b))}return a&&(l=l.concat(Ya(a,i,s,n))),l}}function Xf(i,e,n,s){const a=e.get(j());n==null&&a!=null&&(n=qn(a,j()));let l=[];return e.children.inorderTraversal((u,f)=>{const _=n?n.getImmediateChild(u):null,g=Uf(s,u),b=i.operationForChild(u);b&&(l=l.concat(Xf(b,f,_,g)))}),a&&(l=l.concat(Ya(a,i,s,n))),l}function Jf(i,e){const n=e.query,s=ds(i,n);return{hashFn:()=>(ob(e)||B.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?bb(i,n._path,s):Eb(i,n._path);{const l=bE(a,n);return Ea(i,n,null,l)}}}}function ds(i,e){const n=Cs(e);return i.queryToTagMap.get(n)}function Cs(i){return i._path.toString()+"$"+i._queryIdentifier}function Qa(i,e){return i.tagToQueryMap.get(e)}function Xa(i){const e=i.indexOf("$");return N(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ie(i.substr(0,e))}}function Ja(i,e,n){const s=i.syncPointTree_.get(e);N(s,"Missing sync point for query tag that we're tracking");const a=Ga(i.pendingWriteTree_,e);return Ya(s,n,a,null)}function Tb(i){return i.fold((e,n,s)=>{if(n&&Jt(n))return[ys(n)];{let a=[];return n&&(a=zf(n)),He(s,(l,u)=>{a=a.concat(u)}),a}})}function Di(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(vb())(i._repo,i._path):i}function xb(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const a=Cs(s),l=i.queryToTagMap.get(a);i.queryToTagMap.delete(a),i.tagToQueryMap.delete(l)}}}function Rb(){return yb++}function Ab(i,e,n){const s=e._path,a=ds(i,e),l=Jf(i,n),u=i.listenProvider_.startListening(Di(e),a,l.hashFn,l.onComplete),f=i.syncPointTree_.subtree(s);if(a)N(!Jt(f.value),"If we're adding a query, it shouldn't be shadowed");else{const _=f.fold((g,b,E)=>{if(!Q(g)&&b&&Jt(b))return[ys(b).query];{let C=[];return b&&(C=C.concat(zf(b).map(A=>A.query))),He(E,(A,P)=>{C=C.concat(P)}),C}});for(let g=0;g<_.length;++g){const b=_[g];i.listenProvider_.stopListening(Di(b),ds(i,b))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Za(n)}node(){return this.node_}}class ja{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new ja(this.syncTree_,n)}node(){return Yf(this.syncTree_,this.path_)}}const Nb=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Dh=function(i,e,n){if(!i||typeof i!="object")return i;if(N(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return Ob(i[".sv"],e,n);if(typeof i[".sv"]=="object")return Db(i[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},Ob=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+i)}},Db=function(i,e,n){i.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&N(!1,"Unexpected increment value: "+s);const a=e.node();if(N(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const u=a.getValue();return typeof u!="number"?s:u+s},Pb=function(i,e,n,s){return el(e,new ja(n,i),s)},Lb=function(i,e,n){return el(i,new Za(e),n)};function el(i,e,n){const s=i.getPriority().val(),a=Dh(s,e.getImmediateChild(".priority"),n);let l;if(i.isLeafNode()){const u=i,f=Dh(u.getValue(),e,n);return f!==u.getValue()||a!==u.getPriority().val()?new Ce(f,Ne(a)):i}else{const u=i;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new Ce(a))),u.forEachChild(fe,(f,_)=>{const g=el(_,e.getImmediateChild(f),n);g!==_&&(l=l.updateImmediateChild(f,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function nl(i,e){let n=e instanceof ie?e:new ie(e),s=i,a=Y(n);for(;a!==null;){const l=Gn(s.node.children,a)||{children:{},childCount:0};s=new tl(a,s,l),n=oe(n),a=Y(n)}return s}function Jn(i){return i.node.value}function Zf(i,e){i.node.value=e,ba(i)}function jf(i){return i.node.childCount>0}function Mb(i){return Jn(i)===void 0&&!jf(i)}function Es(i,e){He(i.node.children,(n,s)=>{e(new tl(n,i,s))})}function ed(i,e,n,s){n&&e(i),Es(i,a=>{ed(a,e,!0)})}function kb(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Qi(i){return new ie(i.parent===null?i.name:Qi(i.parent)+"/"+i.name)}function ba(i){i.parent!==null&&Fb(i.parent,i.name,i)}function Fb(i,e,n){const s=Mb(n),a=Ft(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,ba(i)):!s&&!a&&(i.node.children[e]=n.node,i.node.childCount++,ba(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=/[\[\].#$\/\u0000-\u001F\u007F]/,Wb=/[\[\].#$\u0000-\u001F\u007F]/,sa=10*1024*1024,td=function(i){return typeof i=="string"&&i.length!==0&&!Bb.test(i)},nd=function(i){return typeof i=="string"&&i.length!==0&&!Wb.test(i)},Ub=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),nd(i)},id=function(i,e,n){const s=n instanceof ie?new n1(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+hn(s));if(typeof e=="function")throw new Error(i+"contains a function "+hn(s)+" with contents = "+e.toString());if(nf(e))throw new Error(i+"contains "+e.toString()+" "+hn(s));if(typeof e=="string"&&e.length>sa/3&&_s(e)>sa)throw new Error(i+"contains a string greater than "+sa+" utf8 bytes "+hn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(He(e,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!td(u)))throw new Error(i+" contains an invalid key ("+u+") "+hn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);i1(s,u),id(i,f,s),r1(s)}),a&&l)throw new Error(i+' contains ".value" child '+hn(s)+" in addition to actual children.")}},rd=function(i,e,n,s){if(!nd(n))throw new Error(Kh(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Hb=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rd(i,e,n)},$b=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!td(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ub(n))throw new Error(Kh(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sd(i,e){let n=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();n!==null&&!Fa(l,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(a)}n&&i.eventLists_.push(n)}function od(i,e,n){sd(i,n),ad(i,s=>Fa(s,e))}function vn(i,e,n){sd(i,n),ad(i,s=>ft(s,e)||ft(e,s))}function ad(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(Gb(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function Gb(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();Ri&&Ae("event: "+n.toString()),Vi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="repo_interrupt",Vb=25;class Kb{constructor(e,n,s,a){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=os(),this.transactionQueueTree_=new tl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Yb(i,e,n){if(i.stats_=Ma(i.repoInfo_),i.forceRestClient_||xE())i.server_=new ss(i.repoInfo_,(s,a,l,u)=>{Ph(i,s,a,l,u)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Lh(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Pt(i.repoInfo_,e,(s,a,l,u)=>{Ph(i,s,a,l,u)},s=>{Lh(i,s)},s=>{Xb(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=DE(i.repoInfo_,()=>new N1(i.stats_,i.server_)),i.infoData_=new S1,i.infoSyncTree_=new Nh({startListening:(s,a,l,u)=>{let f=[];const _=i.infoData_.getNode(s._path);return _.isEmpty()||(f=ws(i.infoSyncTree_,s._path,_),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),il(i,"connected",!1),i.serverSyncTree_=new Nh({startListening:(s,a,l,u)=>(i.server_.listen(s,l,a,(f,_)=>{const g=u(f,_);vn(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function Qb(i){const n=i.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ld(i){return Nb({timestamp:Qb(i)})}function Ph(i,e,n,s,a){i.dataUpdateCount++;const l=new ie(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let u=[];if(a)if(s){const _=Zr(n,g=>Ne(g));u=Sb(i.serverSyncTree_,l,_,a)}else{const _=Ne(n);u=Ib(i.serverSyncTree_,l,_,a)}else if(s){const _=Zr(n,g=>Ne(g));u=Cb(i.serverSyncTree_,l,_)}else{const _=Ne(n);u=ws(i.serverSyncTree_,l,_)}let f=l;u.length>0&&(f=sl(i,l)),vn(i.eventQueue_,f,u)}function Lh(i,e){il(i,"connected",e),e===!1&&Zb(i)}function Xb(i,e){He(e,(n,s)=>{il(i,n,s)})}function il(i,e,n){const s=new ie("/.info/"+e),a=Ne(n);i.infoData_.updateSnapshot(s,a);const l=ws(i.infoSyncTree_,s,a);vn(i.eventQueue_,s,l)}function Jb(i){return i.nextWriteId_++}function Zb(i){cd(i,"onDisconnectEvents");const e=ld(i),n=os();ga(i.onDisconnect_,j(),(a,l)=>{const u=Pb(a,l,i.serverSyncTree_,e);Lf(n,a,u)});let s=[];ga(n,j(),(a,l)=>{s=s.concat(ws(i.serverSyncTree_,a,l));const u=rI(i,a);sl(i,u)}),i.onDisconnect_=os(),vn(i.eventQueue_,j(),s)}function jb(i,e,n){let s;Y(e._path)===".info"?s=Oh(i.infoSyncTree_,e,n):s=Oh(i.serverSyncTree_,e,n),od(i.eventQueue_,e._path,s)}function eI(i,e,n){let s;Y(e._path)===".info"?s=Ea(i.infoSyncTree_,e,n):s=Ea(i.serverSyncTree_,e,n),od(i.eventQueue_,e._path,s)}function tI(i){i.persistentConnection_&&i.persistentConnection_.interrupt(zb)}function cd(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),Ae(n,...e)}function ud(i,e,n){return Yf(i.serverSyncTree_,e,n)||B.EMPTY_NODE}function rl(i,e=i.transactionQueueTree_){if(e||bs(i,e),Jn(e)){const n=fd(i,e);N(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&nI(i,Qi(e),n)}else jf(e)&&Es(e,n=>{rl(i,n)})}function nI(i,e,n){const s=n.map(g=>g.currentWriteId),a=ud(i,e,s);let l=a;const u=a.hash();for(let g=0;g<n.length;g++){const b=n[g];N(b.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),b.status=1,b.retryCount++;const E=We(e,b.path);l=l.updateChild(E,b.currentOutputSnapshotRaw)}const f=l.val(!0),_=e;i.server_.put(_.toString(),f,g=>{cd(i,"transaction put response",{path:_.toString(),status:g});let b=[];if(g==="ok"){const E=[];for(let C=0;C<n.length;C++)n[C].status=2,b=b.concat(Wn(i.serverSyncTree_,n[C].currentWriteId)),n[C].onComplete&&E.push(()=>n[C].onComplete(null,!0,n[C].currentOutputSnapshotResolved)),n[C].unwatcher();bs(i,nl(i.transactionQueueTree_,e)),rl(i,i.transactionQueueTree_),vn(i.eventQueue_,e,b);for(let C=0;C<E.length;C++)Vi(E[C])}else{if(g==="datastale")for(let E=0;E<n.length;E++)n[E].status===3?n[E].status=4:n[E].status=0;else{Qe("transaction at "+_.toString()+" failed: "+g);for(let E=0;E<n.length;E++)n[E].status=4,n[E].abortReason=g}sl(i,e)}},u)}function sl(i,e){const n=hd(i,e),s=Qi(n),a=fd(i,n);return iI(i,a,s),s}function iI(i,e,n){if(e.length===0)return;const s=[];let a=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const _=e[f],g=We(n,_.path);let b=!1,E;if(N(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)b=!0,E=_.abortReason,a=a.concat(Wn(i.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=Vb)b=!0,E="maxretry",a=a.concat(Wn(i.serverSyncTree_,_.currentWriteId,!0));else{const C=ud(i,_.path,u);_.currentInputSnapshot=C;const A=e[f].update(C.val());if(A!==void 0){id("transaction failed: Data returned ",A,_.path);let P=Ne(A);typeof A=="object"&&A!=null&&Ft(A,".priority")||(P=P.updatePriority(C.getPriority()));const G=_.currentWriteId,de=ld(i),Le=Lb(P,C,de);_.currentOutputSnapshotRaw=P,_.currentOutputSnapshotResolved=Le,_.currentWriteId=Jb(i),u.splice(u.indexOf(G),1),a=a.concat(wb(i.serverSyncTree_,_.path,Le,_.currentWriteId,_.applyLocally)),a=a.concat(Wn(i.serverSyncTree_,G,!0))}else b=!0,E="nodata",a=a.concat(Wn(i.serverSyncTree_,_.currentWriteId,!0))}vn(i.eventQueue_,n,a),a=[],b&&(e[f].status=2,function(C){setTimeout(C,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(E==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(E),!1,null))))}bs(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Vi(s[f]);rl(i,i.transactionQueueTree_)}function hd(i,e){let n,s=i.transactionQueueTree_;for(n=Y(e);n!==null&&Jn(s)===void 0;)s=nl(s,n),e=oe(e),n=Y(e);return s}function fd(i,e){const n=[];return dd(i,e,n),n.sort((s,a)=>s.order-a.order),n}function dd(i,e,n){const s=Jn(e);if(s)for(let a=0;a<s.length;a++)n.push(s[a]);Es(e,a=>{dd(i,a,n)})}function bs(i,e){const n=Jn(e);if(n){let s=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[s]=n[a],s++);n.length=s,Zf(e,n.length>0?n:void 0)}Es(e,s=>{bs(i,s)})}function rI(i,e){const n=Qi(hd(i,e)),s=nl(i.transactionQueueTree_,e);return kb(s,a=>{oa(i,a)}),oa(i,s),ed(s,a=>{oa(i,a)}),n}function oa(i,e){const n=Jn(e);if(n){const s=[];let a=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(N(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(N(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),a=a.concat(Wn(i.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Zf(e,void 0):n.length=l+1,vn(i.eventQueue_,Qi(e),a);for(let u=0;u<s.length;u++)Vi(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let a=n[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function oI(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Qe(`Invalid query segment '${n}' in query '${i}'`)}return e}const Mh=function(i,e){const n=aI(i),s=n.namespace;n.domain==="firebase.com"&&kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vE();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _f(n.host,n.secure,s,a,e,"",s!==n.subdomain),path:new ie(n.pathString)}},aI=function(i){let e="",n="",s="",a="",l="",u=!0,f="https",_=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let b=i.indexOf("/");b===-1&&(b=i.length);let E=i.indexOf("?");E===-1&&(E=i.length),e=i.substring(0,Math.min(b,E)),b<E&&(a=sI(i.substring(b,E)));const C=oI(i.substring(Math.min(i.length,E)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",_=parseInt(e.substring(g+1),10)):g=e.length;const A=e.slice(0,g);if(A.toLowerCase()==="localhost")n="localhost";else if(A.split(".").length<=2)n=A;else{const P=e.indexOf(".");s=e.substring(0,P).toLowerCase(),n=e.substring(P+1),l=s}"ns"in C&&(l=C.ns)}return{host:e,port:_,domain:n,subdomain:s,secure:u,scheme:f,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,s,a){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class cI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,s,a){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=a}get key(){return Q(this._path)?null:If(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=yh(this._queryParams),n=Pa(e);return n==="{}"?"default":n}get _queryObject(){return yh(this._queryParams)}isEqual(e){if(e=gs(e),!(e instanceof ol))return!1;const n=this._repo===e._repo,s=Fa(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return n&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+t1(this._path)}}class jt extends ol{constructor(e,n){super(e,n,new Ha,!1)}get parent(){const e=Tf(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ps{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),s=Ia(this.ref,e);return new ps(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new ps(a,Ia(this.ref,s),fe)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function pd(i,e){return i=gs(i),i._checkNotDeleted("ref"),e!==void 0?Ia(i._root,e):i._root}function Ia(i,e){return i=gs(i),Y(i._path)===null?Hb("child","path",e):rd("child","path",e),new jt(i._repo,ye(i._path,e))}class al{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new lI("value",this,new ps(e.snapshotNode,new jt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cI(this,e,n):null}matches(e){return e instanceof al?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function hI(i,e,n,s,a){const l=new uI(n,void 0),u=new al(l);return jb(i._repo,i,u),()=>eI(i._repo,i,u)}function _d(i,e,n,s){return hI(i,"value",e)}hb(jt);mb(jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="FIREBASE_DATABASE_EMULATOR_HOST",Sa={};let dI=!1;function pI(i,e,n,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),u=Na(l);i.repoInfo_=new _f(e,u,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function _I(i,e,n,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let u=Mh(l,a),f=u.repoInfo,_;typeof process<"u"&&th&&(_=th[fI]),_?(l=`http://${_}?ns=${f.namespace}`,u=Mh(l,a),f=u.repoInfo):u.repoInfo.secure;const g=new AE(i.name,i.options,e);$b("Invalid Firebase Database URL",u),Q(u.path)||kt("Database URL must point to the root of a Firebase Database (not including a child path).");const b=mI(f,i,g,new RE(i,n));return new vI(b,i)}function gI(i,e){const n=Sa[e];(!n||n[i.key]!==i)&&kt(`Database ${e}(${i.repoInfo_}) has already been deleted.`),tI(i),delete n[i.key]}function mI(i,e,n,s){let a=Sa[e.name];a||(a={},Sa[e.name]=a);let l=a[i.toURLString()];return l&&kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new Kb(i,dI,n,s),a[i.toURLString()]=l,l}class vI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Yb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kt("Cannot call "+e+" on a deleted database.")}}function gd(i=j0(),e){const n=Y0(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=PC("database");s&&yI(n,...s)}return n}function yI(i,e,n,s={}){i=gs(i),i._checkNotDeleted("useEmulator");const a=`${e}:${n}`,l=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&jr(s,l.repoInfo_.emulatorOptions))return;kt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Xr(Xr.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:MC(s.mockUserToken,i.app.options.projectId);u=new Xr(f)}Na(e)&&(LC(e),BC("Database",!0)),pI(l,a,s,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(i){fE(Z0),ts(new Li("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return _I(s,a,l,n)},"PUBLIC").setMultipleInstances(!0)),Un(nh,ih,i),Un(nh,ih,"esm2017")}Pt.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Pt.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};wI();var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ti={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var CI=Ti.exports,kh;function EI(){return kh||(kh=1,function(i,e){(function(){var n,s="4.17.21",a=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",f="Invalid `variable` option passed into `_.template`",_="__lodash_hash_undefined__",g=500,b="__lodash_placeholder__",E=1,C=2,A=4,P=1,H=2,G=1,de=2,Le=4,Ie=8,yt=16,wt=32,Zn=64,Ct=128,jn=256,Ts=512,Ed=30,bd="...",Id=800,Sd=16,hl=1,Td=2,xd=3,ji=1/0,yn=9007199254740991,Rd=17976931348623157e292,er=NaN,_t=4294967295,Ad=_t-1,Nd=_t>>>1,Od=[["ary",Ct],["bind",G],["bindKey",de],["curry",Ie],["curryRight",yt],["flip",Ts],["partial",wt],["partialRight",Zn],["rearg",jn]],wn="[object Arguments]",tr="[object Array]",Dd="[object AsyncFunction]",ei="[object Boolean]",ti="[object Date]",Pd="[object DOMException]",nr="[object Error]",ir="[object Function]",fl="[object GeneratorFunction]",st="[object Map]",ni="[object Number]",Ld="[object Null]",Et="[object Object]",dl="[object Promise]",Md="[object Proxy]",ii="[object RegExp]",ot="[object Set]",ri="[object String]",rr="[object Symbol]",kd="[object Undefined]",si="[object WeakMap]",Fd="[object WeakSet]",oi="[object ArrayBuffer]",Cn="[object DataView]",xs="[object Float32Array]",Rs="[object Float64Array]",As="[object Int8Array]",Ns="[object Int16Array]",Os="[object Int32Array]",Ds="[object Uint8Array]",Ps="[object Uint8ClampedArray]",Ls="[object Uint16Array]",Ms="[object Uint32Array]",Bd=/\b__p \+= '';/g,Wd=/\b(__p \+=) '' \+/g,Ud=/(__e\(.*?\)|\b__t\)) \+\n'';/g,pl=/&(?:amp|lt|gt|quot|#39);/g,_l=/[&<>"']/g,Hd=RegExp(pl.source),$d=RegExp(_l.source),qd=/<%-([\s\S]+?)%>/g,Gd=/<%([\s\S]+?)%>/g,gl=/<%=([\s\S]+?)%>/g,zd=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Vd=/^\w*$/,Kd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ks=/[\\^$.*+?()[\]{}|]/g,Yd=RegExp(ks.source),Fs=/^\s+/,Qd=/\s/,Xd=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Jd=/\{\n\/\* \[wrapped with (.+)\] \*/,Zd=/,? & /,jd=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ep=/[()=,{}\[\]\/\s]/,tp=/\\(\\)?/g,np=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ml=/\w*$/,ip=/^[-+]0x[0-9a-f]+$/i,rp=/^0b[01]+$/i,sp=/^\[object .+?Constructor\]$/,op=/^0o[0-7]+$/i,ap=/^(?:0|[1-9]\d*)$/,lp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sr=/($^)/,cp=/['\n\r\u2028\u2029\\]/g,or="\\ud800-\\udfff",up="\\u0300-\\u036f",hp="\\ufe20-\\ufe2f",fp="\\u20d0-\\u20ff",vl=up+hp+fp,yl="\\u2700-\\u27bf",wl="a-z\\xdf-\\xf6\\xf8-\\xff",dp="\\xac\\xb1\\xd7\\xf7",pp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_p="\\u2000-\\u206f",gp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Cl="A-Z\\xc0-\\xd6\\xd8-\\xde",El="\\ufe0e\\ufe0f",bl=dp+pp+_p+gp,Bs="['’]",mp="["+or+"]",Il="["+bl+"]",ar="["+vl+"]",Sl="\\d+",vp="["+yl+"]",Tl="["+wl+"]",xl="[^"+or+bl+Sl+yl+wl+Cl+"]",Ws="\\ud83c[\\udffb-\\udfff]",yp="(?:"+ar+"|"+Ws+")",Rl="[^"+or+"]",Us="(?:\\ud83c[\\udde6-\\uddff]){2}",Hs="[\\ud800-\\udbff][\\udc00-\\udfff]",En="["+Cl+"]",Al="\\u200d",Nl="(?:"+Tl+"|"+xl+")",wp="(?:"+En+"|"+xl+")",Ol="(?:"+Bs+"(?:d|ll|m|re|s|t|ve))?",Dl="(?:"+Bs+"(?:D|LL|M|RE|S|T|VE))?",Pl=yp+"?",Ll="["+El+"]?",Cp="(?:"+Al+"(?:"+[Rl,Us,Hs].join("|")+")"+Ll+Pl+")*",Ep="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",bp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ml=Ll+Pl+Cp,Ip="(?:"+[vp,Us,Hs].join("|")+")"+Ml,Sp="(?:"+[Rl+ar+"?",ar,Us,Hs,mp].join("|")+")",Tp=RegExp(Bs,"g"),xp=RegExp(ar,"g"),$s=RegExp(Ws+"(?="+Ws+")|"+Sp+Ml,"g"),Rp=RegExp([En+"?"+Tl+"+"+Ol+"(?="+[Il,En,"$"].join("|")+")",wp+"+"+Dl+"(?="+[Il,En+Nl,"$"].join("|")+")",En+"?"+Nl+"+"+Ol,En+"+"+Dl,bp,Ep,Sl,Ip].join("|"),"g"),Ap=RegExp("["+Al+or+vl+El+"]"),Np=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Op=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Dp=-1,ae={};ae[xs]=ae[Rs]=ae[As]=ae[Ns]=ae[Os]=ae[Ds]=ae[Ps]=ae[Ls]=ae[Ms]=!0,ae[wn]=ae[tr]=ae[oi]=ae[ei]=ae[Cn]=ae[ti]=ae[nr]=ae[ir]=ae[st]=ae[ni]=ae[Et]=ae[ii]=ae[ot]=ae[ri]=ae[si]=!1;var re={};re[wn]=re[tr]=re[oi]=re[Cn]=re[ei]=re[ti]=re[xs]=re[Rs]=re[As]=re[Ns]=re[Os]=re[st]=re[ni]=re[Et]=re[ii]=re[ot]=re[ri]=re[rr]=re[Ds]=re[Ps]=re[Ls]=re[Ms]=!0,re[nr]=re[ir]=re[si]=!1;var Pp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Lp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Mp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},kp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Fp=parseFloat,Bp=parseInt,kl=typeof Qr=="object"&&Qr&&Qr.Object===Object&&Qr,Wp=typeof self=="object"&&self&&self.Object===Object&&self,Se=kl||Wp||Function("return this")(),qs=e&&!e.nodeType&&e,en=qs&&!0&&i&&!i.nodeType&&i,Fl=en&&en.exports===qs,Gs=Fl&&kl.process,Xe=function(){try{var y=en&&en.require&&en.require("util").types;return y||Gs&&Gs.binding&&Gs.binding("util")}catch{}}(),Bl=Xe&&Xe.isArrayBuffer,Wl=Xe&&Xe.isDate,Ul=Xe&&Xe.isMap,Hl=Xe&&Xe.isRegExp,$l=Xe&&Xe.isSet,ql=Xe&&Xe.isTypedArray;function $e(y,S,I){switch(I.length){case 0:return y.call(S);case 1:return y.call(S,I[0]);case 2:return y.call(S,I[0],I[1]);case 3:return y.call(S,I[0],I[1],I[2])}return y.apply(S,I)}function Up(y,S,I,D){for(var W=-1,Z=y==null?0:y.length;++W<Z;){var me=y[W];S(D,me,I(me),y)}return D}function Je(y,S){for(var I=-1,D=y==null?0:y.length;++I<D&&S(y[I],I,y)!==!1;);return y}function Hp(y,S){for(var I=y==null?0:y.length;I--&&S(y[I],I,y)!==!1;);return y}function Gl(y,S){for(var I=-1,D=y==null?0:y.length;++I<D;)if(!S(y[I],I,y))return!1;return!0}function Bt(y,S){for(var I=-1,D=y==null?0:y.length,W=0,Z=[];++I<D;){var me=y[I];S(me,I,y)&&(Z[W++]=me)}return Z}function lr(y,S){var I=y==null?0:y.length;return!!I&&bn(y,S,0)>-1}function zs(y,S,I){for(var D=-1,W=y==null?0:y.length;++D<W;)if(I(S,y[D]))return!0;return!1}function ce(y,S){for(var I=-1,D=y==null?0:y.length,W=Array(D);++I<D;)W[I]=S(y[I],I,y);return W}function Wt(y,S){for(var I=-1,D=S.length,W=y.length;++I<D;)y[W+I]=S[I];return y}function Vs(y,S,I,D){var W=-1,Z=y==null?0:y.length;for(D&&Z&&(I=y[++W]);++W<Z;)I=S(I,y[W],W,y);return I}function $p(y,S,I,D){var W=y==null?0:y.length;for(D&&W&&(I=y[--W]);W--;)I=S(I,y[W],W,y);return I}function Ks(y,S){for(var I=-1,D=y==null?0:y.length;++I<D;)if(S(y[I],I,y))return!0;return!1}var qp=Ys("length");function Gp(y){return y.split("")}function zp(y){return y.match(jd)||[]}function zl(y,S,I){var D;return I(y,function(W,Z,me){if(S(W,Z,me))return D=Z,!1}),D}function cr(y,S,I,D){for(var W=y.length,Z=I+(D?1:-1);D?Z--:++Z<W;)if(S(y[Z],Z,y))return Z;return-1}function bn(y,S,I){return S===S?i_(y,S,I):cr(y,Vl,I)}function Vp(y,S,I,D){for(var W=I-1,Z=y.length;++W<Z;)if(D(y[W],S))return W;return-1}function Vl(y){return y!==y}function Kl(y,S){var I=y==null?0:y.length;return I?Xs(y,S)/I:er}function Ys(y){return function(S){return S==null?n:S[y]}}function Qs(y){return function(S){return y==null?n:y[S]}}function Yl(y,S,I,D,W){return W(y,function(Z,me,ne){I=D?(D=!1,Z):S(I,Z,me,ne)}),I}function Kp(y,S){var I=y.length;for(y.sort(S);I--;)y[I]=y[I].value;return y}function Xs(y,S){for(var I,D=-1,W=y.length;++D<W;){var Z=S(y[D]);Z!==n&&(I=I===n?Z:I+Z)}return I}function Js(y,S){for(var I=-1,D=Array(y);++I<y;)D[I]=S(I);return D}function Yp(y,S){return ce(S,function(I){return[I,y[I]]})}function Ql(y){return y&&y.slice(0,jl(y)+1).replace(Fs,"")}function qe(y){return function(S){return y(S)}}function Zs(y,S){return ce(S,function(I){return y[I]})}function ai(y,S){return y.has(S)}function Xl(y,S){for(var I=-1,D=y.length;++I<D&&bn(S,y[I],0)>-1;);return I}function Jl(y,S){for(var I=y.length;I--&&bn(S,y[I],0)>-1;);return I}function Qp(y,S){for(var I=y.length,D=0;I--;)y[I]===S&&++D;return D}var Xp=Qs(Pp),Jp=Qs(Lp);function Zp(y){return"\\"+kp[y]}function jp(y,S){return y==null?n:y[S]}function In(y){return Ap.test(y)}function e_(y){return Np.test(y)}function t_(y){for(var S,I=[];!(S=y.next()).done;)I.push(S.value);return I}function js(y){var S=-1,I=Array(y.size);return y.forEach(function(D,W){I[++S]=[W,D]}),I}function Zl(y,S){return function(I){return y(S(I))}}function Ut(y,S){for(var I=-1,D=y.length,W=0,Z=[];++I<D;){var me=y[I];(me===S||me===b)&&(y[I]=b,Z[W++]=I)}return Z}function ur(y){var S=-1,I=Array(y.size);return y.forEach(function(D){I[++S]=D}),I}function n_(y){var S=-1,I=Array(y.size);return y.forEach(function(D){I[++S]=[D,D]}),I}function i_(y,S,I){for(var D=I-1,W=y.length;++D<W;)if(y[D]===S)return D;return-1}function r_(y,S,I){for(var D=I+1;D--;)if(y[D]===S)return D;return D}function Sn(y){return In(y)?o_(y):qp(y)}function at(y){return In(y)?a_(y):Gp(y)}function jl(y){for(var S=y.length;S--&&Qd.test(y.charAt(S)););return S}var s_=Qs(Mp);function o_(y){for(var S=$s.lastIndex=0;$s.test(y);)++S;return S}function a_(y){return y.match($s)||[]}function l_(y){return y.match(Rp)||[]}var c_=function y(S){S=S==null?Se:Tn.defaults(Se.Object(),S,Tn.pick(Se,Op));var I=S.Array,D=S.Date,W=S.Error,Z=S.Function,me=S.Math,ne=S.Object,eo=S.RegExp,u_=S.String,Ze=S.TypeError,hr=I.prototype,h_=Z.prototype,xn=ne.prototype,fr=S["__core-js_shared__"],dr=h_.toString,te=xn.hasOwnProperty,f_=0,ec=function(){var t=/[^.]+$/.exec(fr&&fr.keys&&fr.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pr=xn.toString,d_=dr.call(ne),p_=Se._,__=eo("^"+dr.call(te).replace(ks,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_r=Fl?S.Buffer:n,Ht=S.Symbol,gr=S.Uint8Array,tc=_r?_r.allocUnsafe:n,mr=Zl(ne.getPrototypeOf,ne),nc=ne.create,ic=xn.propertyIsEnumerable,vr=hr.splice,rc=Ht?Ht.isConcatSpreadable:n,li=Ht?Ht.iterator:n,tn=Ht?Ht.toStringTag:n,yr=function(){try{var t=an(ne,"defineProperty");return t({},"",{}),t}catch{}}(),g_=S.clearTimeout!==Se.clearTimeout&&S.clearTimeout,m_=D&&D.now!==Se.Date.now&&D.now,v_=S.setTimeout!==Se.setTimeout&&S.setTimeout,wr=me.ceil,Cr=me.floor,to=ne.getOwnPropertySymbols,y_=_r?_r.isBuffer:n,sc=S.isFinite,w_=hr.join,C_=Zl(ne.keys,ne),ve=me.max,xe=me.min,E_=D.now,b_=S.parseInt,oc=me.random,I_=hr.reverse,no=an(S,"DataView"),ci=an(S,"Map"),io=an(S,"Promise"),Rn=an(S,"Set"),ui=an(S,"WeakMap"),hi=an(ne,"create"),Er=ui&&new ui,An={},S_=ln(no),T_=ln(ci),x_=ln(io),R_=ln(Rn),A_=ln(ui),br=Ht?Ht.prototype:n,fi=br?br.valueOf:n,ac=br?br.toString:n;function d(t){if(he(t)&&!U(t)&&!(t instanceof X)){if(t instanceof je)return t;if(te.call(t,"__wrapped__"))return lu(t)}return new je(t)}var Nn=function(){function t(){}return function(r){if(!ue(r))return{};if(nc)return nc(r);t.prototype=r;var o=new t;return t.prototype=n,o}}();function Ir(){}function je(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=n}d.templateSettings={escape:qd,evaluate:Gd,interpolate:gl,variable:"",imports:{_:d}},d.prototype=Ir.prototype,d.prototype.constructor=d,je.prototype=Nn(Ir.prototype),je.prototype.constructor=je;function X(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=_t,this.__views__=[]}function N_(){var t=new X(this.__wrapped__);return t.__actions__=Me(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Me(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Me(this.__views__),t}function O_(){if(this.__filtered__){var t=new X(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function D_(){var t=this.__wrapped__.value(),r=this.__dir__,o=U(t),c=r<0,h=o?t.length:0,p=Gg(0,h,this.__views__),m=p.start,v=p.end,w=v-m,T=c?v:m-1,x=this.__iteratees__,R=x.length,O=0,L=xe(w,this.__takeCount__);if(!o||!c&&h==w&&L==w)return Oc(t,this.__actions__);var k=[];e:for(;w--&&O<L;){T+=r;for(var q=-1,F=t[T];++q<R;){var K=x[q],J=K.iteratee,Ve=K.type,Pe=J(F);if(Ve==Td)F=Pe;else if(!Pe){if(Ve==hl)continue e;break e}}k[O++]=F}return k}X.prototype=Nn(Ir.prototype),X.prototype.constructor=X;function nn(t){var r=-1,o=t==null?0:t.length;for(this.clear();++r<o;){var c=t[r];this.set(c[0],c[1])}}function P_(){this.__data__=hi?hi(null):{},this.size=0}function L_(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}function M_(t){var r=this.__data__;if(hi){var o=r[t];return o===_?n:o}return te.call(r,t)?r[t]:n}function k_(t){var r=this.__data__;return hi?r[t]!==n:te.call(r,t)}function F_(t,r){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=hi&&r===n?_:r,this}nn.prototype.clear=P_,nn.prototype.delete=L_,nn.prototype.get=M_,nn.prototype.has=k_,nn.prototype.set=F_;function bt(t){var r=-1,o=t==null?0:t.length;for(this.clear();++r<o;){var c=t[r];this.set(c[0],c[1])}}function B_(){this.__data__=[],this.size=0}function W_(t){var r=this.__data__,o=Sr(r,t);if(o<0)return!1;var c=r.length-1;return o==c?r.pop():vr.call(r,o,1),--this.size,!0}function U_(t){var r=this.__data__,o=Sr(r,t);return o<0?n:r[o][1]}function H_(t){return Sr(this.__data__,t)>-1}function $_(t,r){var o=this.__data__,c=Sr(o,t);return c<0?(++this.size,o.push([t,r])):o[c][1]=r,this}bt.prototype.clear=B_,bt.prototype.delete=W_,bt.prototype.get=U_,bt.prototype.has=H_,bt.prototype.set=$_;function It(t){var r=-1,o=t==null?0:t.length;for(this.clear();++r<o;){var c=t[r];this.set(c[0],c[1])}}function q_(){this.size=0,this.__data__={hash:new nn,map:new(ci||bt),string:new nn}}function G_(t){var r=Fr(this,t).delete(t);return this.size-=r?1:0,r}function z_(t){return Fr(this,t).get(t)}function V_(t){return Fr(this,t).has(t)}function K_(t,r){var o=Fr(this,t),c=o.size;return o.set(t,r),this.size+=o.size==c?0:1,this}It.prototype.clear=q_,It.prototype.delete=G_,It.prototype.get=z_,It.prototype.has=V_,It.prototype.set=K_;function rn(t){var r=-1,o=t==null?0:t.length;for(this.__data__=new It;++r<o;)this.add(t[r])}function Y_(t){return this.__data__.set(t,_),this}function Q_(t){return this.__data__.has(t)}rn.prototype.add=rn.prototype.push=Y_,rn.prototype.has=Q_;function lt(t){var r=this.__data__=new bt(t);this.size=r.size}function X_(){this.__data__=new bt,this.size=0}function J_(t){var r=this.__data__,o=r.delete(t);return this.size=r.size,o}function Z_(t){return this.__data__.get(t)}function j_(t){return this.__data__.has(t)}function eg(t,r){var o=this.__data__;if(o instanceof bt){var c=o.__data__;if(!ci||c.length<a-1)return c.push([t,r]),this.size=++o.size,this;o=this.__data__=new It(c)}return o.set(t,r),this.size=o.size,this}lt.prototype.clear=X_,lt.prototype.delete=J_,lt.prototype.get=Z_,lt.prototype.has=j_,lt.prototype.set=eg;function lc(t,r){var o=U(t),c=!o&&cn(t),h=!o&&!c&&Vt(t),p=!o&&!c&&!h&&Ln(t),m=o||c||h||p,v=m?Js(t.length,u_):[],w=v.length;for(var T in t)(r||te.call(t,T))&&!(m&&(T=="length"||h&&(T=="offset"||T=="parent")||p&&(T=="buffer"||T=="byteLength"||T=="byteOffset")||Rt(T,w)))&&v.push(T);return v}function cc(t){var r=t.length;return r?t[_o(0,r-1)]:n}function tg(t,r){return Br(Me(t),sn(r,0,t.length))}function ng(t){return Br(Me(t))}function ro(t,r,o){(o!==n&&!ct(t[r],o)||o===n&&!(r in t))&&St(t,r,o)}function di(t,r,o){var c=t[r];(!(te.call(t,r)&&ct(c,o))||o===n&&!(r in t))&&St(t,r,o)}function Sr(t,r){for(var o=t.length;o--;)if(ct(t[o][0],r))return o;return-1}function ig(t,r,o,c){return $t(t,function(h,p,m){r(c,h,o(h),m)}),c}function uc(t,r){return t&&mt(r,we(r),t)}function rg(t,r){return t&&mt(r,Fe(r),t)}function St(t,r,o){r=="__proto__"&&yr?yr(t,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[r]=o}function so(t,r){for(var o=-1,c=r.length,h=I(c),p=t==null;++o<c;)h[o]=p?n:Uo(t,r[o]);return h}function sn(t,r,o){return t===t&&(o!==n&&(t=t<=o?t:o),r!==n&&(t=t>=r?t:r)),t}function et(t,r,o,c,h,p){var m,v=r&E,w=r&C,T=r&A;if(o&&(m=h?o(t,c,h,p):o(t)),m!==n)return m;if(!ue(t))return t;var x=U(t);if(x){if(m=Vg(t),!v)return Me(t,m)}else{var R=Re(t),O=R==ir||R==fl;if(Vt(t))return Lc(t,v);if(R==Et||R==wn||O&&!h){if(m=w||O?{}:jc(t),!v)return w?Mg(t,rg(m,t)):Lg(t,uc(m,t))}else{if(!re[R])return h?t:{};m=Kg(t,R,v)}}p||(p=new lt);var L=p.get(t);if(L)return L;p.set(t,m),Ru(t)?t.forEach(function(F){m.add(et(F,r,o,F,t,p))}):Tu(t)&&t.forEach(function(F,K){m.set(K,et(F,r,o,K,t,p))});var k=T?w?To:So:w?Fe:we,q=x?n:k(t);return Je(q||t,function(F,K){q&&(K=F,F=t[K]),di(m,K,et(F,r,o,K,t,p))}),m}function sg(t){var r=we(t);return function(o){return hc(o,t,r)}}function hc(t,r,o){var c=o.length;if(t==null)return!c;for(t=ne(t);c--;){var h=o[c],p=r[h],m=t[h];if(m===n&&!(h in t)||!p(m))return!1}return!0}function fc(t,r,o){if(typeof t!="function")throw new Ze(u);return wi(function(){t.apply(n,o)},r)}function pi(t,r,o,c){var h=-1,p=lr,m=!0,v=t.length,w=[],T=r.length;if(!v)return w;o&&(r=ce(r,qe(o))),c?(p=zs,m=!1):r.length>=a&&(p=ai,m=!1,r=new rn(r));e:for(;++h<v;){var x=t[h],R=o==null?x:o(x);if(x=c||x!==0?x:0,m&&R===R){for(var O=T;O--;)if(r[O]===R)continue e;w.push(x)}else p(r,R,c)||w.push(x)}return w}var $t=Wc(gt),dc=Wc(ao,!0);function og(t,r){var o=!0;return $t(t,function(c,h,p){return o=!!r(c,h,p),o}),o}function Tr(t,r,o){for(var c=-1,h=t.length;++c<h;){var p=t[c],m=r(p);if(m!=null&&(v===n?m===m&&!ze(m):o(m,v)))var v=m,w=p}return w}function ag(t,r,o,c){var h=t.length;for(o=$(o),o<0&&(o=-o>h?0:h+o),c=c===n||c>h?h:$(c),c<0&&(c+=h),c=o>c?0:Nu(c);o<c;)t[o++]=r;return t}function pc(t,r){var o=[];return $t(t,function(c,h,p){r(c,h,p)&&o.push(c)}),o}function Te(t,r,o,c,h){var p=-1,m=t.length;for(o||(o=Qg),h||(h=[]);++p<m;){var v=t[p];r>0&&o(v)?r>1?Te(v,r-1,o,c,h):Wt(h,v):c||(h[h.length]=v)}return h}var oo=Uc(),_c=Uc(!0);function gt(t,r){return t&&oo(t,r,we)}function ao(t,r){return t&&_c(t,r,we)}function xr(t,r){return Bt(r,function(o){return At(t[o])})}function on(t,r){r=Gt(r,t);for(var o=0,c=r.length;t!=null&&o<c;)t=t[vt(r[o++])];return o&&o==c?t:n}function gc(t,r,o){var c=r(t);return U(t)?c:Wt(c,o(t))}function Oe(t){return t==null?t===n?kd:Ld:tn&&tn in ne(t)?qg(t):nm(t)}function lo(t,r){return t>r}function lg(t,r){return t!=null&&te.call(t,r)}function cg(t,r){return t!=null&&r in ne(t)}function ug(t,r,o){return t>=xe(r,o)&&t<ve(r,o)}function co(t,r,o){for(var c=o?zs:lr,h=t[0].length,p=t.length,m=p,v=I(p),w=1/0,T=[];m--;){var x=t[m];m&&r&&(x=ce(x,qe(r))),w=xe(x.length,w),v[m]=!o&&(r||h>=120&&x.length>=120)?new rn(m&&x):n}x=t[0];var R=-1,O=v[0];e:for(;++R<h&&T.length<w;){var L=x[R],k=r?r(L):L;if(L=o||L!==0?L:0,!(O?ai(O,k):c(T,k,o))){for(m=p;--m;){var q=v[m];if(!(q?ai(q,k):c(t[m],k,o)))continue e}O&&O.push(k),T.push(L)}}return T}function hg(t,r,o,c){return gt(t,function(h,p,m){r(c,o(h),p,m)}),c}function _i(t,r,o){r=Gt(r,t),t=iu(t,r);var c=t==null?t:t[vt(nt(r))];return c==null?n:$e(c,t,o)}function mc(t){return he(t)&&Oe(t)==wn}function fg(t){return he(t)&&Oe(t)==oi}function dg(t){return he(t)&&Oe(t)==ti}function gi(t,r,o,c,h){return t===r?!0:t==null||r==null||!he(t)&&!he(r)?t!==t&&r!==r:pg(t,r,o,c,gi,h)}function pg(t,r,o,c,h,p){var m=U(t),v=U(r),w=m?tr:Re(t),T=v?tr:Re(r);w=w==wn?Et:w,T=T==wn?Et:T;var x=w==Et,R=T==Et,O=w==T;if(O&&Vt(t)){if(!Vt(r))return!1;m=!0,x=!1}if(O&&!x)return p||(p=new lt),m||Ln(t)?Xc(t,r,o,c,h,p):Hg(t,r,w,o,c,h,p);if(!(o&P)){var L=x&&te.call(t,"__wrapped__"),k=R&&te.call(r,"__wrapped__");if(L||k){var q=L?t.value():t,F=k?r.value():r;return p||(p=new lt),h(q,F,o,c,p)}}return O?(p||(p=new lt),$g(t,r,o,c,h,p)):!1}function _g(t){return he(t)&&Re(t)==st}function uo(t,r,o,c){var h=o.length,p=h,m=!c;if(t==null)return!p;for(t=ne(t);h--;){var v=o[h];if(m&&v[2]?v[1]!==t[v[0]]:!(v[0]in t))return!1}for(;++h<p;){v=o[h];var w=v[0],T=t[w],x=v[1];if(m&&v[2]){if(T===n&&!(w in t))return!1}else{var R=new lt;if(c)var O=c(T,x,w,t,r,R);if(!(O===n?gi(x,T,P|H,c,R):O))return!1}}return!0}function vc(t){if(!ue(t)||Jg(t))return!1;var r=At(t)?__:sp;return r.test(ln(t))}function gg(t){return he(t)&&Oe(t)==ii}function mg(t){return he(t)&&Re(t)==ot}function vg(t){return he(t)&&Gr(t.length)&&!!ae[Oe(t)]}function yc(t){return typeof t=="function"?t:t==null?Be:typeof t=="object"?U(t)?Ec(t[0],t[1]):Cc(t):Hu(t)}function ho(t){if(!yi(t))return C_(t);var r=[];for(var o in ne(t))te.call(t,o)&&o!="constructor"&&r.push(o);return r}function yg(t){if(!ue(t))return tm(t);var r=yi(t),o=[];for(var c in t)c=="constructor"&&(r||!te.call(t,c))||o.push(c);return o}function fo(t,r){return t<r}function wc(t,r){var o=-1,c=ke(t)?I(t.length):[];return $t(t,function(h,p,m){c[++o]=r(h,p,m)}),c}function Cc(t){var r=Ro(t);return r.length==1&&r[0][2]?tu(r[0][0],r[0][1]):function(o){return o===t||uo(o,t,r)}}function Ec(t,r){return No(t)&&eu(r)?tu(vt(t),r):function(o){var c=Uo(o,t);return c===n&&c===r?Ho(o,t):gi(r,c,P|H)}}function Rr(t,r,o,c,h){t!==r&&oo(r,function(p,m){if(h||(h=new lt),ue(p))wg(t,r,m,o,Rr,c,h);else{var v=c?c(Do(t,m),p,m+"",t,r,h):n;v===n&&(v=p),ro(t,m,v)}},Fe)}function wg(t,r,o,c,h,p,m){var v=Do(t,o),w=Do(r,o),T=m.get(w);if(T){ro(t,o,T);return}var x=p?p(v,w,o+"",t,r,m):n,R=x===n;if(R){var O=U(w),L=!O&&Vt(w),k=!O&&!L&&Ln(w);x=w,O||L||k?U(v)?x=v:pe(v)?x=Me(v):L?(R=!1,x=Lc(w,!0)):k?(R=!1,x=Mc(w,!0)):x=[]:Ci(w)||cn(w)?(x=v,cn(v)?x=Ou(v):(!ue(v)||At(v))&&(x=jc(w))):R=!1}R&&(m.set(w,x),h(x,w,c,p,m),m.delete(w)),ro(t,o,x)}function bc(t,r){var o=t.length;if(o)return r+=r<0?o:0,Rt(r,o)?t[r]:n}function Ic(t,r,o){r.length?r=ce(r,function(p){return U(p)?function(m){return on(m,p.length===1?p[0]:p)}:p}):r=[Be];var c=-1;r=ce(r,qe(M()));var h=wc(t,function(p,m,v){var w=ce(r,function(T){return T(p)});return{criteria:w,index:++c,value:p}});return Kp(h,function(p,m){return Pg(p,m,o)})}function Cg(t,r){return Sc(t,r,function(o,c){return Ho(t,c)})}function Sc(t,r,o){for(var c=-1,h=r.length,p={};++c<h;){var m=r[c],v=on(t,m);o(v,m)&&mi(p,Gt(m,t),v)}return p}function Eg(t){return function(r){return on(r,t)}}function po(t,r,o,c){var h=c?Vp:bn,p=-1,m=r.length,v=t;for(t===r&&(r=Me(r)),o&&(v=ce(t,qe(o)));++p<m;)for(var w=0,T=r[p],x=o?o(T):T;(w=h(v,x,w,c))>-1;)v!==t&&vr.call(v,w,1),vr.call(t,w,1);return t}function Tc(t,r){for(var o=t?r.length:0,c=o-1;o--;){var h=r[o];if(o==c||h!==p){var p=h;Rt(h)?vr.call(t,h,1):vo(t,h)}}return t}function _o(t,r){return t+Cr(oc()*(r-t+1))}function bg(t,r,o,c){for(var h=-1,p=ve(wr((r-t)/(o||1)),0),m=I(p);p--;)m[c?p:++h]=t,t+=o;return m}function go(t,r){var o="";if(!t||r<1||r>yn)return o;do r%2&&(o+=t),r=Cr(r/2),r&&(t+=t);while(r);return o}function z(t,r){return Po(nu(t,r,Be),t+"")}function Ig(t){return cc(Mn(t))}function Sg(t,r){var o=Mn(t);return Br(o,sn(r,0,o.length))}function mi(t,r,o,c){if(!ue(t))return t;r=Gt(r,t);for(var h=-1,p=r.length,m=p-1,v=t;v!=null&&++h<p;){var w=vt(r[h]),T=o;if(w==="__proto__"||w==="constructor"||w==="prototype")return t;if(h!=m){var x=v[w];T=c?c(x,w,v):n,T===n&&(T=ue(x)?x:Rt(r[h+1])?[]:{})}di(v,w,T),v=v[w]}return t}var xc=Er?function(t,r){return Er.set(t,r),t}:Be,Tg=yr?function(t,r){return yr(t,"toString",{configurable:!0,enumerable:!1,value:qo(r),writable:!0})}:Be;function xg(t){return Br(Mn(t))}function tt(t,r,o){var c=-1,h=t.length;r<0&&(r=-r>h?0:h+r),o=o>h?h:o,o<0&&(o+=h),h=r>o?0:o-r>>>0,r>>>=0;for(var p=I(h);++c<h;)p[c]=t[c+r];return p}function Rg(t,r){var o;return $t(t,function(c,h,p){return o=r(c,h,p),!o}),!!o}function Ar(t,r,o){var c=0,h=t==null?c:t.length;if(typeof r=="number"&&r===r&&h<=Nd){for(;c<h;){var p=c+h>>>1,m=t[p];m!==null&&!ze(m)&&(o?m<=r:m<r)?c=p+1:h=p}return h}return mo(t,r,Be,o)}function mo(t,r,o,c){var h=0,p=t==null?0:t.length;if(p===0)return 0;r=o(r);for(var m=r!==r,v=r===null,w=ze(r),T=r===n;h<p;){var x=Cr((h+p)/2),R=o(t[x]),O=R!==n,L=R===null,k=R===R,q=ze(R);if(m)var F=c||k;else T?F=k&&(c||O):v?F=k&&O&&(c||!L):w?F=k&&O&&!L&&(c||!q):L||q?F=!1:F=c?R<=r:R<r;F?h=x+1:p=x}return xe(p,Ad)}function Rc(t,r){for(var o=-1,c=t.length,h=0,p=[];++o<c;){var m=t[o],v=r?r(m):m;if(!o||!ct(v,w)){var w=v;p[h++]=m===0?0:m}}return p}function Ac(t){return typeof t=="number"?t:ze(t)?er:+t}function Ge(t){if(typeof t=="string")return t;if(U(t))return ce(t,Ge)+"";if(ze(t))return ac?ac.call(t):"";var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}function qt(t,r,o){var c=-1,h=lr,p=t.length,m=!0,v=[],w=v;if(o)m=!1,h=zs;else if(p>=a){var T=r?null:Wg(t);if(T)return ur(T);m=!1,h=ai,w=new rn}else w=r?[]:v;e:for(;++c<p;){var x=t[c],R=r?r(x):x;if(x=o||x!==0?x:0,m&&R===R){for(var O=w.length;O--;)if(w[O]===R)continue e;r&&w.push(R),v.push(x)}else h(w,R,o)||(w!==v&&w.push(R),v.push(x))}return v}function vo(t,r){return r=Gt(r,t),t=iu(t,r),t==null||delete t[vt(nt(r))]}function Nc(t,r,o,c){return mi(t,r,o(on(t,r)),c)}function Nr(t,r,o,c){for(var h=t.length,p=c?h:-1;(c?p--:++p<h)&&r(t[p],p,t););return o?tt(t,c?0:p,c?p+1:h):tt(t,c?p+1:0,c?h:p)}function Oc(t,r){var o=t;return o instanceof X&&(o=o.value()),Vs(r,function(c,h){return h.func.apply(h.thisArg,Wt([c],h.args))},o)}function yo(t,r,o){var c=t.length;if(c<2)return c?qt(t[0]):[];for(var h=-1,p=I(c);++h<c;)for(var m=t[h],v=-1;++v<c;)v!=h&&(p[h]=pi(p[h]||m,t[v],r,o));return qt(Te(p,1),r,o)}function Dc(t,r,o){for(var c=-1,h=t.length,p=r.length,m={};++c<h;){var v=c<p?r[c]:n;o(m,t[c],v)}return m}function wo(t){return pe(t)?t:[]}function Co(t){return typeof t=="function"?t:Be}function Gt(t,r){return U(t)?t:No(t,r)?[t]:au(ee(t))}var Ag=z;function zt(t,r,o){var c=t.length;return o=o===n?c:o,!r&&o>=c?t:tt(t,r,o)}var Pc=g_||function(t){return Se.clearTimeout(t)};function Lc(t,r){if(r)return t.slice();var o=t.length,c=tc?tc(o):new t.constructor(o);return t.copy(c),c}function Eo(t){var r=new t.constructor(t.byteLength);return new gr(r).set(new gr(t)),r}function Ng(t,r){var o=r?Eo(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}function Og(t){var r=new t.constructor(t.source,ml.exec(t));return r.lastIndex=t.lastIndex,r}function Dg(t){return fi?ne(fi.call(t)):{}}function Mc(t,r){var o=r?Eo(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}function kc(t,r){if(t!==r){var o=t!==n,c=t===null,h=t===t,p=ze(t),m=r!==n,v=r===null,w=r===r,T=ze(r);if(!v&&!T&&!p&&t>r||p&&m&&w&&!v&&!T||c&&m&&w||!o&&w||!h)return 1;if(!c&&!p&&!T&&t<r||T&&o&&h&&!c&&!p||v&&o&&h||!m&&h||!w)return-1}return 0}function Pg(t,r,o){for(var c=-1,h=t.criteria,p=r.criteria,m=h.length,v=o.length;++c<m;){var w=kc(h[c],p[c]);if(w){if(c>=v)return w;var T=o[c];return w*(T=="desc"?-1:1)}}return t.index-r.index}function Fc(t,r,o,c){for(var h=-1,p=t.length,m=o.length,v=-1,w=r.length,T=ve(p-m,0),x=I(w+T),R=!c;++v<w;)x[v]=r[v];for(;++h<m;)(R||h<p)&&(x[o[h]]=t[h]);for(;T--;)x[v++]=t[h++];return x}function Bc(t,r,o,c){for(var h=-1,p=t.length,m=-1,v=o.length,w=-1,T=r.length,x=ve(p-v,0),R=I(x+T),O=!c;++h<x;)R[h]=t[h];for(var L=h;++w<T;)R[L+w]=r[w];for(;++m<v;)(O||h<p)&&(R[L+o[m]]=t[h++]);return R}function Me(t,r){var o=-1,c=t.length;for(r||(r=I(c));++o<c;)r[o]=t[o];return r}function mt(t,r,o,c){var h=!o;o||(o={});for(var p=-1,m=r.length;++p<m;){var v=r[p],w=c?c(o[v],t[v],v,o,t):n;w===n&&(w=t[v]),h?St(o,v,w):di(o,v,w)}return o}function Lg(t,r){return mt(t,Ao(t),r)}function Mg(t,r){return mt(t,Jc(t),r)}function Or(t,r){return function(o,c){var h=U(o)?Up:ig,p=r?r():{};return h(o,t,M(c,2),p)}}function On(t){return z(function(r,o){var c=-1,h=o.length,p=h>1?o[h-1]:n,m=h>2?o[2]:n;for(p=t.length>3&&typeof p=="function"?(h--,p):n,m&&De(o[0],o[1],m)&&(p=h<3?n:p,h=1),r=ne(r);++c<h;){var v=o[c];v&&t(r,v,c,p)}return r})}function Wc(t,r){return function(o,c){if(o==null)return o;if(!ke(o))return t(o,c);for(var h=o.length,p=r?h:-1,m=ne(o);(r?p--:++p<h)&&c(m[p],p,m)!==!1;);return o}}function Uc(t){return function(r,o,c){for(var h=-1,p=ne(r),m=c(r),v=m.length;v--;){var w=m[t?v:++h];if(o(p[w],w,p)===!1)break}return r}}function kg(t,r,o){var c=r&G,h=vi(t);function p(){var m=this&&this!==Se&&this instanceof p?h:t;return m.apply(c?o:this,arguments)}return p}function Hc(t){return function(r){r=ee(r);var o=In(r)?at(r):n,c=o?o[0]:r.charAt(0),h=o?zt(o,1).join(""):r.slice(1);return c[t]()+h}}function Dn(t){return function(r){return Vs(Wu(Bu(r).replace(Tp,"")),t,"")}}function vi(t){return function(){var r=arguments;switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3]);case 5:return new t(r[0],r[1],r[2],r[3],r[4]);case 6:return new t(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new t(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=Nn(t.prototype),c=t.apply(o,r);return ue(c)?c:o}}function Fg(t,r,o){var c=vi(t);function h(){for(var p=arguments.length,m=I(p),v=p,w=Pn(h);v--;)m[v]=arguments[v];var T=p<3&&m[0]!==w&&m[p-1]!==w?[]:Ut(m,w);if(p-=T.length,p<o)return Vc(t,r,Dr,h.placeholder,n,m,T,n,n,o-p);var x=this&&this!==Se&&this instanceof h?c:t;return $e(x,this,m)}return h}function $c(t){return function(r,o,c){var h=ne(r);if(!ke(r)){var p=M(o,3);r=we(r),o=function(v){return p(h[v],v,h)}}var m=t(r,o,c);return m>-1?h[p?r[m]:m]:n}}function qc(t){return xt(function(r){var o=r.length,c=o,h=je.prototype.thru;for(t&&r.reverse();c--;){var p=r[c];if(typeof p!="function")throw new Ze(u);if(h&&!m&&kr(p)=="wrapper")var m=new je([],!0)}for(c=m?c:o;++c<o;){p=r[c];var v=kr(p),w=v=="wrapper"?xo(p):n;w&&Oo(w[0])&&w[1]==(Ct|Ie|wt|jn)&&!w[4].length&&w[9]==1?m=m[kr(w[0])].apply(m,w[3]):m=p.length==1&&Oo(p)?m[v]():m.thru(p)}return function(){var T=arguments,x=T[0];if(m&&T.length==1&&U(x))return m.plant(x).value();for(var R=0,O=o?r[R].apply(this,T):x;++R<o;)O=r[R].call(this,O);return O}})}function Dr(t,r,o,c,h,p,m,v,w,T){var x=r&Ct,R=r&G,O=r&de,L=r&(Ie|yt),k=r&Ts,q=O?n:vi(t);function F(){for(var K=arguments.length,J=I(K),Ve=K;Ve--;)J[Ve]=arguments[Ve];if(L)var Pe=Pn(F),Ke=Qp(J,Pe);if(c&&(J=Fc(J,c,h,L)),p&&(J=Bc(J,p,m,L)),K-=Ke,L&&K<T){var _e=Ut(J,Pe);return Vc(t,r,Dr,F.placeholder,o,J,_e,v,w,T-K)}var ut=R?o:this,Ot=O?ut[t]:t;return K=J.length,v?J=im(J,v):k&&K>1&&J.reverse(),x&&w<K&&(J.length=w),this&&this!==Se&&this instanceof F&&(Ot=q||vi(Ot)),Ot.apply(ut,J)}return F}function Gc(t,r){return function(o,c){return hg(o,t,r(c),{})}}function Pr(t,r){return function(o,c){var h;if(o===n&&c===n)return r;if(o!==n&&(h=o),c!==n){if(h===n)return c;typeof o=="string"||typeof c=="string"?(o=Ge(o),c=Ge(c)):(o=Ac(o),c=Ac(c)),h=t(o,c)}return h}}function bo(t){return xt(function(r){return r=ce(r,qe(M())),z(function(o){var c=this;return t(r,function(h){return $e(h,c,o)})})})}function Lr(t,r){r=r===n?" ":Ge(r);var o=r.length;if(o<2)return o?go(r,t):r;var c=go(r,wr(t/Sn(r)));return In(r)?zt(at(c),0,t).join(""):c.slice(0,t)}function Bg(t,r,o,c){var h=r&G,p=vi(t);function m(){for(var v=-1,w=arguments.length,T=-1,x=c.length,R=I(x+w),O=this&&this!==Se&&this instanceof m?p:t;++T<x;)R[T]=c[T];for(;w--;)R[T++]=arguments[++v];return $e(O,h?o:this,R)}return m}function zc(t){return function(r,o,c){return c&&typeof c!="number"&&De(r,o,c)&&(o=c=n),r=Nt(r),o===n?(o=r,r=0):o=Nt(o),c=c===n?r<o?1:-1:Nt(c),bg(r,o,c,t)}}function Mr(t){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=it(r),o=it(o)),t(r,o)}}function Vc(t,r,o,c,h,p,m,v,w,T){var x=r&Ie,R=x?m:n,O=x?n:m,L=x?p:n,k=x?n:p;r|=x?wt:Zn,r&=~(x?Zn:wt),r&Le||(r&=-4);var q=[t,r,h,L,R,k,O,v,w,T],F=o.apply(n,q);return Oo(t)&&ru(F,q),F.placeholder=c,su(F,t,r)}function Io(t){var r=me[t];return function(o,c){if(o=it(o),c=c==null?0:xe($(c),292),c&&sc(o)){var h=(ee(o)+"e").split("e"),p=r(h[0]+"e"+(+h[1]+c));return h=(ee(p)+"e").split("e"),+(h[0]+"e"+(+h[1]-c))}return r(o)}}var Wg=Rn&&1/ur(new Rn([,-0]))[1]==ji?function(t){return new Rn(t)}:Vo;function Kc(t){return function(r){var o=Re(r);return o==st?js(r):o==ot?n_(r):Yp(r,t(r))}}function Tt(t,r,o,c,h,p,m,v){var w=r&de;if(!w&&typeof t!="function")throw new Ze(u);var T=c?c.length:0;if(T||(r&=-97,c=h=n),m=m===n?m:ve($(m),0),v=v===n?v:$(v),T-=h?h.length:0,r&Zn){var x=c,R=h;c=h=n}var O=w?n:xo(t),L=[t,r,o,c,h,x,R,p,m,v];if(O&&em(L,O),t=L[0],r=L[1],o=L[2],c=L[3],h=L[4],v=L[9]=L[9]===n?w?0:t.length:ve(L[9]-T,0),!v&&r&(Ie|yt)&&(r&=-25),!r||r==G)var k=kg(t,r,o);else r==Ie||r==yt?k=Fg(t,r,v):(r==wt||r==(G|wt))&&!h.length?k=Bg(t,r,o,c):k=Dr.apply(n,L);var q=O?xc:ru;return su(q(k,L),t,r)}function Yc(t,r,o,c){return t===n||ct(t,xn[o])&&!te.call(c,o)?r:t}function Qc(t,r,o,c,h,p){return ue(t)&&ue(r)&&(p.set(r,t),Rr(t,r,n,Qc,p),p.delete(r)),t}function Ug(t){return Ci(t)?n:t}function Xc(t,r,o,c,h,p){var m=o&P,v=t.length,w=r.length;if(v!=w&&!(m&&w>v))return!1;var T=p.get(t),x=p.get(r);if(T&&x)return T==r&&x==t;var R=-1,O=!0,L=o&H?new rn:n;for(p.set(t,r),p.set(r,t);++R<v;){var k=t[R],q=r[R];if(c)var F=m?c(q,k,R,r,t,p):c(k,q,R,t,r,p);if(F!==n){if(F)continue;O=!1;break}if(L){if(!Ks(r,function(K,J){if(!ai(L,J)&&(k===K||h(k,K,o,c,p)))return L.push(J)})){O=!1;break}}else if(!(k===q||h(k,q,o,c,p))){O=!1;break}}return p.delete(t),p.delete(r),O}function Hg(t,r,o,c,h,p,m){switch(o){case Cn:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case oi:return!(t.byteLength!=r.byteLength||!p(new gr(t),new gr(r)));case ei:case ti:case ni:return ct(+t,+r);case nr:return t.name==r.name&&t.message==r.message;case ii:case ri:return t==r+"";case st:var v=js;case ot:var w=c&P;if(v||(v=ur),t.size!=r.size&&!w)return!1;var T=m.get(t);if(T)return T==r;c|=H,m.set(t,r);var x=Xc(v(t),v(r),c,h,p,m);return m.delete(t),x;case rr:if(fi)return fi.call(t)==fi.call(r)}return!1}function $g(t,r,o,c,h,p){var m=o&P,v=So(t),w=v.length,T=So(r),x=T.length;if(w!=x&&!m)return!1;for(var R=w;R--;){var O=v[R];if(!(m?O in r:te.call(r,O)))return!1}var L=p.get(t),k=p.get(r);if(L&&k)return L==r&&k==t;var q=!0;p.set(t,r),p.set(r,t);for(var F=m;++R<w;){O=v[R];var K=t[O],J=r[O];if(c)var Ve=m?c(J,K,O,r,t,p):c(K,J,O,t,r,p);if(!(Ve===n?K===J||h(K,J,o,c,p):Ve)){q=!1;break}F||(F=O=="constructor")}if(q&&!F){var Pe=t.constructor,Ke=r.constructor;Pe!=Ke&&"constructor"in t&&"constructor"in r&&!(typeof Pe=="function"&&Pe instanceof Pe&&typeof Ke=="function"&&Ke instanceof Ke)&&(q=!1)}return p.delete(t),p.delete(r),q}function xt(t){return Po(nu(t,n,hu),t+"")}function So(t){return gc(t,we,Ao)}function To(t){return gc(t,Fe,Jc)}var xo=Er?function(t){return Er.get(t)}:Vo;function kr(t){for(var r=t.name+"",o=An[r],c=te.call(An,r)?o.length:0;c--;){var h=o[c],p=h.func;if(p==null||p==t)return h.name}return r}function Pn(t){var r=te.call(d,"placeholder")?d:t;return r.placeholder}function M(){var t=d.iteratee||Go;return t=t===Go?yc:t,arguments.length?t(arguments[0],arguments[1]):t}function Fr(t,r){var o=t.__data__;return Xg(r)?o[typeof r=="string"?"string":"hash"]:o.map}function Ro(t){for(var r=we(t),o=r.length;o--;){var c=r[o],h=t[c];r[o]=[c,h,eu(h)]}return r}function an(t,r){var o=jp(t,r);return vc(o)?o:n}function qg(t){var r=te.call(t,tn),o=t[tn];try{t[tn]=n;var c=!0}catch{}var h=pr.call(t);return c&&(r?t[tn]=o:delete t[tn]),h}var Ao=to?function(t){return t==null?[]:(t=ne(t),Bt(to(t),function(r){return ic.call(t,r)}))}:Ko,Jc=to?function(t){for(var r=[];t;)Wt(r,Ao(t)),t=mr(t);return r}:Ko,Re=Oe;(no&&Re(new no(new ArrayBuffer(1)))!=Cn||ci&&Re(new ci)!=st||io&&Re(io.resolve())!=dl||Rn&&Re(new Rn)!=ot||ui&&Re(new ui)!=si)&&(Re=function(t){var r=Oe(t),o=r==Et?t.constructor:n,c=o?ln(o):"";if(c)switch(c){case S_:return Cn;case T_:return st;case x_:return dl;case R_:return ot;case A_:return si}return r});function Gg(t,r,o){for(var c=-1,h=o.length;++c<h;){var p=o[c],m=p.size;switch(p.type){case"drop":t+=m;break;case"dropRight":r-=m;break;case"take":r=xe(r,t+m);break;case"takeRight":t=ve(t,r-m);break}}return{start:t,end:r}}function zg(t){var r=t.match(Jd);return r?r[1].split(Zd):[]}function Zc(t,r,o){r=Gt(r,t);for(var c=-1,h=r.length,p=!1;++c<h;){var m=vt(r[c]);if(!(p=t!=null&&o(t,m)))break;t=t[m]}return p||++c!=h?p:(h=t==null?0:t.length,!!h&&Gr(h)&&Rt(m,h)&&(U(t)||cn(t)))}function Vg(t){var r=t.length,o=new t.constructor(r);return r&&typeof t[0]=="string"&&te.call(t,"index")&&(o.index=t.index,o.input=t.input),o}function jc(t){return typeof t.constructor=="function"&&!yi(t)?Nn(mr(t)):{}}function Kg(t,r,o){var c=t.constructor;switch(r){case oi:return Eo(t);case ei:case ti:return new c(+t);case Cn:return Ng(t,o);case xs:case Rs:case As:case Ns:case Os:case Ds:case Ps:case Ls:case Ms:return Mc(t,o);case st:return new c;case ni:case ri:return new c(t);case ii:return Og(t);case ot:return new c;case rr:return Dg(t)}}function Yg(t,r){var o=r.length;if(!o)return t;var c=o-1;return r[c]=(o>1?"& ":"")+r[c],r=r.join(o>2?", ":" "),t.replace(Xd,`{
/* [wrapped with `+r+`] */
`)}function Qg(t){return U(t)||cn(t)||!!(rc&&t&&t[rc])}function Rt(t,r){var o=typeof t;return r=r??yn,!!r&&(o=="number"||o!="symbol"&&ap.test(t))&&t>-1&&t%1==0&&t<r}function De(t,r,o){if(!ue(o))return!1;var c=typeof r;return(c=="number"?ke(o)&&Rt(r,o.length):c=="string"&&r in o)?ct(o[r],t):!1}function No(t,r){if(U(t))return!1;var o=typeof t;return o=="number"||o=="symbol"||o=="boolean"||t==null||ze(t)?!0:Vd.test(t)||!zd.test(t)||r!=null&&t in ne(r)}function Xg(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}function Oo(t){var r=kr(t),o=d[r];if(typeof o!="function"||!(r in X.prototype))return!1;if(t===o)return!0;var c=xo(o);return!!c&&t===c[0]}function Jg(t){return!!ec&&ec in t}var Zg=fr?At:Yo;function yi(t){var r=t&&t.constructor,o=typeof r=="function"&&r.prototype||xn;return t===o}function eu(t){return t===t&&!ue(t)}function tu(t,r){return function(o){return o==null?!1:o[t]===r&&(r!==n||t in ne(o))}}function jg(t){var r=$r(t,function(c){return o.size===g&&o.clear(),c}),o=r.cache;return r}function em(t,r){var o=t[1],c=r[1],h=o|c,p=h<(G|de|Ct),m=c==Ct&&o==Ie||c==Ct&&o==jn&&t[7].length<=r[8]||c==(Ct|jn)&&r[7].length<=r[8]&&o==Ie;if(!(p||m))return t;c&G&&(t[2]=r[2],h|=o&G?0:Le);var v=r[3];if(v){var w=t[3];t[3]=w?Fc(w,v,r[4]):v,t[4]=w?Ut(t[3],b):r[4]}return v=r[5],v&&(w=t[5],t[5]=w?Bc(w,v,r[6]):v,t[6]=w?Ut(t[5],b):r[6]),v=r[7],v&&(t[7]=v),c&Ct&&(t[8]=t[8]==null?r[8]:xe(t[8],r[8])),t[9]==null&&(t[9]=r[9]),t[0]=r[0],t[1]=h,t}function tm(t){var r=[];if(t!=null)for(var o in ne(t))r.push(o);return r}function nm(t){return pr.call(t)}function nu(t,r,o){return r=ve(r===n?t.length-1:r,0),function(){for(var c=arguments,h=-1,p=ve(c.length-r,0),m=I(p);++h<p;)m[h]=c[r+h];h=-1;for(var v=I(r+1);++h<r;)v[h]=c[h];return v[r]=o(m),$e(t,this,v)}}function iu(t,r){return r.length<2?t:on(t,tt(r,0,-1))}function im(t,r){for(var o=t.length,c=xe(r.length,o),h=Me(t);c--;){var p=r[c];t[c]=Rt(p,o)?h[p]:n}return t}function Do(t,r){if(!(r==="constructor"&&typeof t[r]=="function")&&r!="__proto__")return t[r]}var ru=ou(xc),wi=v_||function(t,r){return Se.setTimeout(t,r)},Po=ou(Tg);function su(t,r,o){var c=r+"";return Po(t,Yg(c,rm(zg(c),o)))}function ou(t){var r=0,o=0;return function(){var c=E_(),h=Sd-(c-o);if(o=c,h>0){if(++r>=Id)return arguments[0]}else r=0;return t.apply(n,arguments)}}function Br(t,r){var o=-1,c=t.length,h=c-1;for(r=r===n?c:r;++o<r;){var p=_o(o,h),m=t[p];t[p]=t[o],t[o]=m}return t.length=r,t}var au=jg(function(t){var r=[];return t.charCodeAt(0)===46&&r.push(""),t.replace(Kd,function(o,c,h,p){r.push(h?p.replace(tp,"$1"):c||o)}),r});function vt(t){if(typeof t=="string"||ze(t))return t;var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}function ln(t){if(t!=null){try{return dr.call(t)}catch{}try{return t+""}catch{}}return""}function rm(t,r){return Je(Od,function(o){var c="_."+o[0];r&o[1]&&!lr(t,c)&&t.push(c)}),t.sort()}function lu(t){if(t instanceof X)return t.clone();var r=new je(t.__wrapped__,t.__chain__);return r.__actions__=Me(t.__actions__),r.__index__=t.__index__,r.__values__=t.__values__,r}function sm(t,r,o){(o?De(t,r,o):r===n)?r=1:r=ve($(r),0);var c=t==null?0:t.length;if(!c||r<1)return[];for(var h=0,p=0,m=I(wr(c/r));h<c;)m[p++]=tt(t,h,h+=r);return m}function om(t){for(var r=-1,o=t==null?0:t.length,c=0,h=[];++r<o;){var p=t[r];p&&(h[c++]=p)}return h}function am(){var t=arguments.length;if(!t)return[];for(var r=I(t-1),o=arguments[0],c=t;c--;)r[c-1]=arguments[c];return Wt(U(o)?Me(o):[o],Te(r,1))}var lm=z(function(t,r){return pe(t)?pi(t,Te(r,1,pe,!0)):[]}),cm=z(function(t,r){var o=nt(r);return pe(o)&&(o=n),pe(t)?pi(t,Te(r,1,pe,!0),M(o,2)):[]}),um=z(function(t,r){var o=nt(r);return pe(o)&&(o=n),pe(t)?pi(t,Te(r,1,pe,!0),n,o):[]});function hm(t,r,o){var c=t==null?0:t.length;return c?(r=o||r===n?1:$(r),tt(t,r<0?0:r,c)):[]}function fm(t,r,o){var c=t==null?0:t.length;return c?(r=o||r===n?1:$(r),r=c-r,tt(t,0,r<0?0:r)):[]}function dm(t,r){return t&&t.length?Nr(t,M(r,3),!0,!0):[]}function pm(t,r){return t&&t.length?Nr(t,M(r,3),!0):[]}function _m(t,r,o,c){var h=t==null?0:t.length;return h?(o&&typeof o!="number"&&De(t,r,o)&&(o=0,c=h),ag(t,r,o,c)):[]}function cu(t,r,o){var c=t==null?0:t.length;if(!c)return-1;var h=o==null?0:$(o);return h<0&&(h=ve(c+h,0)),cr(t,M(r,3),h)}function uu(t,r,o){var c=t==null?0:t.length;if(!c)return-1;var h=c-1;return o!==n&&(h=$(o),h=o<0?ve(c+h,0):xe(h,c-1)),cr(t,M(r,3),h,!0)}function hu(t){var r=t==null?0:t.length;return r?Te(t,1):[]}function gm(t){var r=t==null?0:t.length;return r?Te(t,ji):[]}function mm(t,r){var o=t==null?0:t.length;return o?(r=r===n?1:$(r),Te(t,r)):[]}function vm(t){for(var r=-1,o=t==null?0:t.length,c={};++r<o;){var h=t[r];c[h[0]]=h[1]}return c}function fu(t){return t&&t.length?t[0]:n}function ym(t,r,o){var c=t==null?0:t.length;if(!c)return-1;var h=o==null?0:$(o);return h<0&&(h=ve(c+h,0)),bn(t,r,h)}function wm(t){var r=t==null?0:t.length;return r?tt(t,0,-1):[]}var Cm=z(function(t){var r=ce(t,wo);return r.length&&r[0]===t[0]?co(r):[]}),Em=z(function(t){var r=nt(t),o=ce(t,wo);return r===nt(o)?r=n:o.pop(),o.length&&o[0]===t[0]?co(o,M(r,2)):[]}),bm=z(function(t){var r=nt(t),o=ce(t,wo);return r=typeof r=="function"?r:n,r&&o.pop(),o.length&&o[0]===t[0]?co(o,n,r):[]});function Im(t,r){return t==null?"":w_.call(t,r)}function nt(t){var r=t==null?0:t.length;return r?t[r-1]:n}function Sm(t,r,o){var c=t==null?0:t.length;if(!c)return-1;var h=c;return o!==n&&(h=$(o),h=h<0?ve(c+h,0):xe(h,c-1)),r===r?r_(t,r,h):cr(t,Vl,h,!0)}function Tm(t,r){return t&&t.length?bc(t,$(r)):n}var xm=z(du);function du(t,r){return t&&t.length&&r&&r.length?po(t,r):t}function Rm(t,r,o){return t&&t.length&&r&&r.length?po(t,r,M(o,2)):t}function Am(t,r,o){return t&&t.length&&r&&r.length?po(t,r,n,o):t}var Nm=xt(function(t,r){var o=t==null?0:t.length,c=so(t,r);return Tc(t,ce(r,function(h){return Rt(h,o)?+h:h}).sort(kc)),c});function Om(t,r){var o=[];if(!(t&&t.length))return o;var c=-1,h=[],p=t.length;for(r=M(r,3);++c<p;){var m=t[c];r(m,c,t)&&(o.push(m),h.push(c))}return Tc(t,h),o}function Lo(t){return t==null?t:I_.call(t)}function Dm(t,r,o){var c=t==null?0:t.length;return c?(o&&typeof o!="number"&&De(t,r,o)?(r=0,o=c):(r=r==null?0:$(r),o=o===n?c:$(o)),tt(t,r,o)):[]}function Pm(t,r){return Ar(t,r)}function Lm(t,r,o){return mo(t,r,M(o,2))}function Mm(t,r){var o=t==null?0:t.length;if(o){var c=Ar(t,r);if(c<o&&ct(t[c],r))return c}return-1}function km(t,r){return Ar(t,r,!0)}function Fm(t,r,o){return mo(t,r,M(o,2),!0)}function Bm(t,r){var o=t==null?0:t.length;if(o){var c=Ar(t,r,!0)-1;if(ct(t[c],r))return c}return-1}function Wm(t){return t&&t.length?Rc(t):[]}function Um(t,r){return t&&t.length?Rc(t,M(r,2)):[]}function Hm(t){var r=t==null?0:t.length;return r?tt(t,1,r):[]}function $m(t,r,o){return t&&t.length?(r=o||r===n?1:$(r),tt(t,0,r<0?0:r)):[]}function qm(t,r,o){var c=t==null?0:t.length;return c?(r=o||r===n?1:$(r),r=c-r,tt(t,r<0?0:r,c)):[]}function Gm(t,r){return t&&t.length?Nr(t,M(r,3),!1,!0):[]}function zm(t,r){return t&&t.length?Nr(t,M(r,3)):[]}var Vm=z(function(t){return qt(Te(t,1,pe,!0))}),Km=z(function(t){var r=nt(t);return pe(r)&&(r=n),qt(Te(t,1,pe,!0),M(r,2))}),Ym=z(function(t){var r=nt(t);return r=typeof r=="function"?r:n,qt(Te(t,1,pe,!0),n,r)});function Qm(t){return t&&t.length?qt(t):[]}function Xm(t,r){return t&&t.length?qt(t,M(r,2)):[]}function Jm(t,r){return r=typeof r=="function"?r:n,t&&t.length?qt(t,n,r):[]}function Mo(t){if(!(t&&t.length))return[];var r=0;return t=Bt(t,function(o){if(pe(o))return r=ve(o.length,r),!0}),Js(r,function(o){return ce(t,Ys(o))})}function pu(t,r){if(!(t&&t.length))return[];var o=Mo(t);return r==null?o:ce(o,function(c){return $e(r,n,c)})}var Zm=z(function(t,r){return pe(t)?pi(t,r):[]}),jm=z(function(t){return yo(Bt(t,pe))}),ev=z(function(t){var r=nt(t);return pe(r)&&(r=n),yo(Bt(t,pe),M(r,2))}),tv=z(function(t){var r=nt(t);return r=typeof r=="function"?r:n,yo(Bt(t,pe),n,r)}),nv=z(Mo);function iv(t,r){return Dc(t||[],r||[],di)}function rv(t,r){return Dc(t||[],r||[],mi)}var sv=z(function(t){var r=t.length,o=r>1?t[r-1]:n;return o=typeof o=="function"?(t.pop(),o):n,pu(t,o)});function _u(t){var r=d(t);return r.__chain__=!0,r}function ov(t,r){return r(t),t}function Wr(t,r){return r(t)}var av=xt(function(t){var r=t.length,o=r?t[0]:0,c=this.__wrapped__,h=function(p){return so(p,t)};return r>1||this.__actions__.length||!(c instanceof X)||!Rt(o)?this.thru(h):(c=c.slice(o,+o+(r?1:0)),c.__actions__.push({func:Wr,args:[h],thisArg:n}),new je(c,this.__chain__).thru(function(p){return r&&!p.length&&p.push(n),p}))});function lv(){return _u(this)}function cv(){return new je(this.value(),this.__chain__)}function uv(){this.__values__===n&&(this.__values__=Au(this.value()));var t=this.__index__>=this.__values__.length,r=t?n:this.__values__[this.__index__++];return{done:t,value:r}}function hv(){return this}function fv(t){for(var r,o=this;o instanceof Ir;){var c=lu(o);c.__index__=0,c.__values__=n,r?h.__wrapped__=c:r=c;var h=c;o=o.__wrapped__}return h.__wrapped__=t,r}function dv(){var t=this.__wrapped__;if(t instanceof X){var r=t;return this.__actions__.length&&(r=new X(this)),r=r.reverse(),r.__actions__.push({func:Wr,args:[Lo],thisArg:n}),new je(r,this.__chain__)}return this.thru(Lo)}function pv(){return Oc(this.__wrapped__,this.__actions__)}var _v=Or(function(t,r,o){te.call(t,o)?++t[o]:St(t,o,1)});function gv(t,r,o){var c=U(t)?Gl:og;return o&&De(t,r,o)&&(r=n),c(t,M(r,3))}function mv(t,r){var o=U(t)?Bt:pc;return o(t,M(r,3))}var vv=$c(cu),yv=$c(uu);function wv(t,r){return Te(Ur(t,r),1)}function Cv(t,r){return Te(Ur(t,r),ji)}function Ev(t,r,o){return o=o===n?1:$(o),Te(Ur(t,r),o)}function gu(t,r){var o=U(t)?Je:$t;return o(t,M(r,3))}function mu(t,r){var o=U(t)?Hp:dc;return o(t,M(r,3))}var bv=Or(function(t,r,o){te.call(t,o)?t[o].push(r):St(t,o,[r])});function Iv(t,r,o,c){t=ke(t)?t:Mn(t),o=o&&!c?$(o):0;var h=t.length;return o<0&&(o=ve(h+o,0)),zr(t)?o<=h&&t.indexOf(r,o)>-1:!!h&&bn(t,r,o)>-1}var Sv=z(function(t,r,o){var c=-1,h=typeof r=="function",p=ke(t)?I(t.length):[];return $t(t,function(m){p[++c]=h?$e(r,m,o):_i(m,r,o)}),p}),Tv=Or(function(t,r,o){St(t,o,r)});function Ur(t,r){var o=U(t)?ce:wc;return o(t,M(r,3))}function xv(t,r,o,c){return t==null?[]:(U(r)||(r=r==null?[]:[r]),o=c?n:o,U(o)||(o=o==null?[]:[o]),Ic(t,r,o))}var Rv=Or(function(t,r,o){t[o?0:1].push(r)},function(){return[[],[]]});function Av(t,r,o){var c=U(t)?Vs:Yl,h=arguments.length<3;return c(t,M(r,4),o,h,$t)}function Nv(t,r,o){var c=U(t)?$p:Yl,h=arguments.length<3;return c(t,M(r,4),o,h,dc)}function Ov(t,r){var o=U(t)?Bt:pc;return o(t,qr(M(r,3)))}function Dv(t){var r=U(t)?cc:Ig;return r(t)}function Pv(t,r,o){(o?De(t,r,o):r===n)?r=1:r=$(r);var c=U(t)?tg:Sg;return c(t,r)}function Lv(t){var r=U(t)?ng:xg;return r(t)}function Mv(t){if(t==null)return 0;if(ke(t))return zr(t)?Sn(t):t.length;var r=Re(t);return r==st||r==ot?t.size:ho(t).length}function kv(t,r,o){var c=U(t)?Ks:Rg;return o&&De(t,r,o)&&(r=n),c(t,M(r,3))}var Fv=z(function(t,r){if(t==null)return[];var o=r.length;return o>1&&De(t,r[0],r[1])?r=[]:o>2&&De(r[0],r[1],r[2])&&(r=[r[0]]),Ic(t,Te(r,1),[])}),Hr=m_||function(){return Se.Date.now()};function Bv(t,r){if(typeof r!="function")throw new Ze(u);return t=$(t),function(){if(--t<1)return r.apply(this,arguments)}}function vu(t,r,o){return r=o?n:r,r=t&&r==null?t.length:r,Tt(t,Ct,n,n,n,n,r)}function yu(t,r){var o;if(typeof r!="function")throw new Ze(u);return t=$(t),function(){return--t>0&&(o=r.apply(this,arguments)),t<=1&&(r=n),o}}var ko=z(function(t,r,o){var c=G;if(o.length){var h=Ut(o,Pn(ko));c|=wt}return Tt(t,c,r,o,h)}),wu=z(function(t,r,o){var c=G|de;if(o.length){var h=Ut(o,Pn(wu));c|=wt}return Tt(r,c,t,o,h)});function Cu(t,r,o){r=o?n:r;var c=Tt(t,Ie,n,n,n,n,n,r);return c.placeholder=Cu.placeholder,c}function Eu(t,r,o){r=o?n:r;var c=Tt(t,yt,n,n,n,n,n,r);return c.placeholder=Eu.placeholder,c}function bu(t,r,o){var c,h,p,m,v,w,T=0,x=!1,R=!1,O=!0;if(typeof t!="function")throw new Ze(u);r=it(r)||0,ue(o)&&(x=!!o.leading,R="maxWait"in o,p=R?ve(it(o.maxWait)||0,r):p,O="trailing"in o?!!o.trailing:O);function L(_e){var ut=c,Ot=h;return c=h=n,T=_e,m=t.apply(Ot,ut),m}function k(_e){return T=_e,v=wi(K,r),x?L(_e):m}function q(_e){var ut=_e-w,Ot=_e-T,$u=r-ut;return R?xe($u,p-Ot):$u}function F(_e){var ut=_e-w,Ot=_e-T;return w===n||ut>=r||ut<0||R&&Ot>=p}function K(){var _e=Hr();if(F(_e))return J(_e);v=wi(K,q(_e))}function J(_e){return v=n,O&&c?L(_e):(c=h=n,m)}function Ve(){v!==n&&Pc(v),T=0,c=w=h=v=n}function Pe(){return v===n?m:J(Hr())}function Ke(){var _e=Hr(),ut=F(_e);if(c=arguments,h=this,w=_e,ut){if(v===n)return k(w);if(R)return Pc(v),v=wi(K,r),L(w)}return v===n&&(v=wi(K,r)),m}return Ke.cancel=Ve,Ke.flush=Pe,Ke}var Wv=z(function(t,r){return fc(t,1,r)}),Uv=z(function(t,r,o){return fc(t,it(r)||0,o)});function Hv(t){return Tt(t,Ts)}function $r(t,r){if(typeof t!="function"||r!=null&&typeof r!="function")throw new Ze(u);var o=function(){var c=arguments,h=r?r.apply(this,c):c[0],p=o.cache;if(p.has(h))return p.get(h);var m=t.apply(this,c);return o.cache=p.set(h,m)||p,m};return o.cache=new($r.Cache||It),o}$r.Cache=It;function qr(t){if(typeof t!="function")throw new Ze(u);return function(){var r=arguments;switch(r.length){case 0:return!t.call(this);case 1:return!t.call(this,r[0]);case 2:return!t.call(this,r[0],r[1]);case 3:return!t.call(this,r[0],r[1],r[2])}return!t.apply(this,r)}}function $v(t){return yu(2,t)}var qv=Ag(function(t,r){r=r.length==1&&U(r[0])?ce(r[0],qe(M())):ce(Te(r,1),qe(M()));var o=r.length;return z(function(c){for(var h=-1,p=xe(c.length,o);++h<p;)c[h]=r[h].call(this,c[h]);return $e(t,this,c)})}),Fo=z(function(t,r){var o=Ut(r,Pn(Fo));return Tt(t,wt,n,r,o)}),Iu=z(function(t,r){var o=Ut(r,Pn(Iu));return Tt(t,Zn,n,r,o)}),Gv=xt(function(t,r){return Tt(t,jn,n,n,n,r)});function zv(t,r){if(typeof t!="function")throw new Ze(u);return r=r===n?r:$(r),z(t,r)}function Vv(t,r){if(typeof t!="function")throw new Ze(u);return r=r==null?0:ve($(r),0),z(function(o){var c=o[r],h=zt(o,0,r);return c&&Wt(h,c),$e(t,this,h)})}function Kv(t,r,o){var c=!0,h=!0;if(typeof t!="function")throw new Ze(u);return ue(o)&&(c="leading"in o?!!o.leading:c,h="trailing"in o?!!o.trailing:h),bu(t,r,{leading:c,maxWait:r,trailing:h})}function Yv(t){return vu(t,1)}function Qv(t,r){return Fo(Co(r),t)}function Xv(){if(!arguments.length)return[];var t=arguments[0];return U(t)?t:[t]}function Jv(t){return et(t,A)}function Zv(t,r){return r=typeof r=="function"?r:n,et(t,A,r)}function jv(t){return et(t,E|A)}function ey(t,r){return r=typeof r=="function"?r:n,et(t,E|A,r)}function ty(t,r){return r==null||hc(t,r,we(r))}function ct(t,r){return t===r||t!==t&&r!==r}var ny=Mr(lo),iy=Mr(function(t,r){return t>=r}),cn=mc(function(){return arguments}())?mc:function(t){return he(t)&&te.call(t,"callee")&&!ic.call(t,"callee")},U=I.isArray,ry=Bl?qe(Bl):fg;function ke(t){return t!=null&&Gr(t.length)&&!At(t)}function pe(t){return he(t)&&ke(t)}function sy(t){return t===!0||t===!1||he(t)&&Oe(t)==ei}var Vt=y_||Yo,oy=Wl?qe(Wl):dg;function ay(t){return he(t)&&t.nodeType===1&&!Ci(t)}function ly(t){if(t==null)return!0;if(ke(t)&&(U(t)||typeof t=="string"||typeof t.splice=="function"||Vt(t)||Ln(t)||cn(t)))return!t.length;var r=Re(t);if(r==st||r==ot)return!t.size;if(yi(t))return!ho(t).length;for(var o in t)if(te.call(t,o))return!1;return!0}function cy(t,r){return gi(t,r)}function uy(t,r,o){o=typeof o=="function"?o:n;var c=o?o(t,r):n;return c===n?gi(t,r,n,o):!!c}function Bo(t){if(!he(t))return!1;var r=Oe(t);return r==nr||r==Pd||typeof t.message=="string"&&typeof t.name=="string"&&!Ci(t)}function hy(t){return typeof t=="number"&&sc(t)}function At(t){if(!ue(t))return!1;var r=Oe(t);return r==ir||r==fl||r==Dd||r==Md}function Su(t){return typeof t=="number"&&t==$(t)}function Gr(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=yn}function ue(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}function he(t){return t!=null&&typeof t=="object"}var Tu=Ul?qe(Ul):_g;function fy(t,r){return t===r||uo(t,r,Ro(r))}function dy(t,r,o){return o=typeof o=="function"?o:n,uo(t,r,Ro(r),o)}function py(t){return xu(t)&&t!=+t}function _y(t){if(Zg(t))throw new W(l);return vc(t)}function gy(t){return t===null}function my(t){return t==null}function xu(t){return typeof t=="number"||he(t)&&Oe(t)==ni}function Ci(t){if(!he(t)||Oe(t)!=Et)return!1;var r=mr(t);if(r===null)return!0;var o=te.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&dr.call(o)==d_}var Wo=Hl?qe(Hl):gg;function vy(t){return Su(t)&&t>=-9007199254740991&&t<=yn}var Ru=$l?qe($l):mg;function zr(t){return typeof t=="string"||!U(t)&&he(t)&&Oe(t)==ri}function ze(t){return typeof t=="symbol"||he(t)&&Oe(t)==rr}var Ln=ql?qe(ql):vg;function yy(t){return t===n}function wy(t){return he(t)&&Re(t)==si}function Cy(t){return he(t)&&Oe(t)==Fd}var Ey=Mr(fo),by=Mr(function(t,r){return t<=r});function Au(t){if(!t)return[];if(ke(t))return zr(t)?at(t):Me(t);if(li&&t[li])return t_(t[li]());var r=Re(t),o=r==st?js:r==ot?ur:Mn;return o(t)}function Nt(t){if(!t)return t===0?t:0;if(t=it(t),t===ji||t===-1/0){var r=t<0?-1:1;return r*Rd}return t===t?t:0}function $(t){var r=Nt(t),o=r%1;return r===r?o?r-o:r:0}function Nu(t){return t?sn($(t),0,_t):0}function it(t){if(typeof t=="number")return t;if(ze(t))return er;if(ue(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=ue(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=Ql(t);var o=rp.test(t);return o||op.test(t)?Bp(t.slice(2),o?2:8):ip.test(t)?er:+t}function Ou(t){return mt(t,Fe(t))}function Iy(t){return t?sn($(t),-9007199254740991,yn):t===0?t:0}function ee(t){return t==null?"":Ge(t)}var Sy=On(function(t,r){if(yi(r)||ke(r)){mt(r,we(r),t);return}for(var o in r)te.call(r,o)&&di(t,o,r[o])}),Du=On(function(t,r){mt(r,Fe(r),t)}),Vr=On(function(t,r,o,c){mt(r,Fe(r),t,c)}),Ty=On(function(t,r,o,c){mt(r,we(r),t,c)}),xy=xt(so);function Ry(t,r){var o=Nn(t);return r==null?o:uc(o,r)}var Ay=z(function(t,r){t=ne(t);var o=-1,c=r.length,h=c>2?r[2]:n;for(h&&De(r[0],r[1],h)&&(c=1);++o<c;)for(var p=r[o],m=Fe(p),v=-1,w=m.length;++v<w;){var T=m[v],x=t[T];(x===n||ct(x,xn[T])&&!te.call(t,T))&&(t[T]=p[T])}return t}),Ny=z(function(t){return t.push(n,Qc),$e(Pu,n,t)});function Oy(t,r){return zl(t,M(r,3),gt)}function Dy(t,r){return zl(t,M(r,3),ao)}function Py(t,r){return t==null?t:oo(t,M(r,3),Fe)}function Ly(t,r){return t==null?t:_c(t,M(r,3),Fe)}function My(t,r){return t&&gt(t,M(r,3))}function ky(t,r){return t&&ao(t,M(r,3))}function Fy(t){return t==null?[]:xr(t,we(t))}function By(t){return t==null?[]:xr(t,Fe(t))}function Uo(t,r,o){var c=t==null?n:on(t,r);return c===n?o:c}function Wy(t,r){return t!=null&&Zc(t,r,lg)}function Ho(t,r){return t!=null&&Zc(t,r,cg)}var Uy=Gc(function(t,r,o){r!=null&&typeof r.toString!="function"&&(r=pr.call(r)),t[r]=o},qo(Be)),Hy=Gc(function(t,r,o){r!=null&&typeof r.toString!="function"&&(r=pr.call(r)),te.call(t,r)?t[r].push(o):t[r]=[o]},M),$y=z(_i);function we(t){return ke(t)?lc(t):ho(t)}function Fe(t){return ke(t)?lc(t,!0):yg(t)}function qy(t,r){var o={};return r=M(r,3),gt(t,function(c,h,p){St(o,r(c,h,p),c)}),o}function Gy(t,r){var o={};return r=M(r,3),gt(t,function(c,h,p){St(o,h,r(c,h,p))}),o}var zy=On(function(t,r,o){Rr(t,r,o)}),Pu=On(function(t,r,o,c){Rr(t,r,o,c)}),Vy=xt(function(t,r){var o={};if(t==null)return o;var c=!1;r=ce(r,function(p){return p=Gt(p,t),c||(c=p.length>1),p}),mt(t,To(t),o),c&&(o=et(o,E|C|A,Ug));for(var h=r.length;h--;)vo(o,r[h]);return o});function Ky(t,r){return Lu(t,qr(M(r)))}var Yy=xt(function(t,r){return t==null?{}:Cg(t,r)});function Lu(t,r){if(t==null)return{};var o=ce(To(t),function(c){return[c]});return r=M(r),Sc(t,o,function(c,h){return r(c,h[0])})}function Qy(t,r,o){r=Gt(r,t);var c=-1,h=r.length;for(h||(h=1,t=n);++c<h;){var p=t==null?n:t[vt(r[c])];p===n&&(c=h,p=o),t=At(p)?p.call(t):p}return t}function Xy(t,r,o){return t==null?t:mi(t,r,o)}function Jy(t,r,o,c){return c=typeof c=="function"?c:n,t==null?t:mi(t,r,o,c)}var Mu=Kc(we),ku=Kc(Fe);function Zy(t,r,o){var c=U(t),h=c||Vt(t)||Ln(t);if(r=M(r,4),o==null){var p=t&&t.constructor;h?o=c?new p:[]:ue(t)?o=At(p)?Nn(mr(t)):{}:o={}}return(h?Je:gt)(t,function(m,v,w){return r(o,m,v,w)}),o}function jy(t,r){return t==null?!0:vo(t,r)}function ew(t,r,o){return t==null?t:Nc(t,r,Co(o))}function tw(t,r,o,c){return c=typeof c=="function"?c:n,t==null?t:Nc(t,r,Co(o),c)}function Mn(t){return t==null?[]:Zs(t,we(t))}function nw(t){return t==null?[]:Zs(t,Fe(t))}function iw(t,r,o){return o===n&&(o=r,r=n),o!==n&&(o=it(o),o=o===o?o:0),r!==n&&(r=it(r),r=r===r?r:0),sn(it(t),r,o)}function rw(t,r,o){return r=Nt(r),o===n?(o=r,r=0):o=Nt(o),t=it(t),ug(t,r,o)}function sw(t,r,o){if(o&&typeof o!="boolean"&&De(t,r,o)&&(r=o=n),o===n&&(typeof r=="boolean"?(o=r,r=n):typeof t=="boolean"&&(o=t,t=n)),t===n&&r===n?(t=0,r=1):(t=Nt(t),r===n?(r=t,t=0):r=Nt(r)),t>r){var c=t;t=r,r=c}if(o||t%1||r%1){var h=oc();return xe(t+h*(r-t+Fp("1e-"+((h+"").length-1))),r)}return _o(t,r)}var ow=Dn(function(t,r,o){return r=r.toLowerCase(),t+(o?Fu(r):r)});function Fu(t){return $o(ee(t).toLowerCase())}function Bu(t){return t=ee(t),t&&t.replace(lp,Xp).replace(xp,"")}function aw(t,r,o){t=ee(t),r=Ge(r);var c=t.length;o=o===n?c:sn($(o),0,c);var h=o;return o-=r.length,o>=0&&t.slice(o,h)==r}function lw(t){return t=ee(t),t&&$d.test(t)?t.replace(_l,Jp):t}function cw(t){return t=ee(t),t&&Yd.test(t)?t.replace(ks,"\\$&"):t}var uw=Dn(function(t,r,o){return t+(o?"-":"")+r.toLowerCase()}),hw=Dn(function(t,r,o){return t+(o?" ":"")+r.toLowerCase()}),fw=Hc("toLowerCase");function dw(t,r,o){t=ee(t),r=$(r);var c=r?Sn(t):0;if(!r||c>=r)return t;var h=(r-c)/2;return Lr(Cr(h),o)+t+Lr(wr(h),o)}function pw(t,r,o){t=ee(t),r=$(r);var c=r?Sn(t):0;return r&&c<r?t+Lr(r-c,o):t}function _w(t,r,o){t=ee(t),r=$(r);var c=r?Sn(t):0;return r&&c<r?Lr(r-c,o)+t:t}function gw(t,r,o){return o||r==null?r=0:r&&(r=+r),b_(ee(t).replace(Fs,""),r||0)}function mw(t,r,o){return(o?De(t,r,o):r===n)?r=1:r=$(r),go(ee(t),r)}function vw(){var t=arguments,r=ee(t[0]);return t.length<3?r:r.replace(t[1],t[2])}var yw=Dn(function(t,r,o){return t+(o?"_":"")+r.toLowerCase()});function ww(t,r,o){return o&&typeof o!="number"&&De(t,r,o)&&(r=o=n),o=o===n?_t:o>>>0,o?(t=ee(t),t&&(typeof r=="string"||r!=null&&!Wo(r))&&(r=Ge(r),!r&&In(t))?zt(at(t),0,o):t.split(r,o)):[]}var Cw=Dn(function(t,r,o){return t+(o?" ":"")+$o(r)});function Ew(t,r,o){return t=ee(t),o=o==null?0:sn($(o),0,t.length),r=Ge(r),t.slice(o,o+r.length)==r}function bw(t,r,o){var c=d.templateSettings;o&&De(t,r,o)&&(r=n),t=ee(t),r=Vr({},r,c,Yc);var h=Vr({},r.imports,c.imports,Yc),p=we(h),m=Zs(h,p),v,w,T=0,x=r.interpolate||sr,R="__p += '",O=eo((r.escape||sr).source+"|"+x.source+"|"+(x===gl?np:sr).source+"|"+(r.evaluate||sr).source+"|$","g"),L="//# sourceURL="+(te.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Dp+"]")+`
`;t.replace(O,function(F,K,J,Ve,Pe,Ke){return J||(J=Ve),R+=t.slice(T,Ke).replace(cp,Zp),K&&(v=!0,R+=`' +
__e(`+K+`) +
'`),Pe&&(w=!0,R+=`';
`+Pe+`;
__p += '`),J&&(R+=`' +
((__t = (`+J+`)) == null ? '' : __t) +
'`),T=Ke+F.length,F}),R+=`';
`;var k=te.call(r,"variable")&&r.variable;if(!k)R=`with (obj) {
`+R+`
}
`;else if(ep.test(k))throw new W(f);R=(w?R.replace(Bd,""):R).replace(Wd,"$1").replace(Ud,"$1;"),R="function("+(k||"obj")+`) {
`+(k?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(v?", __e = _.escape":"")+(w?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+R+`return __p
}`;var q=Uu(function(){return Z(p,L+"return "+R).apply(n,m)});if(q.source=R,Bo(q))throw q;return q}function Iw(t){return ee(t).toLowerCase()}function Sw(t){return ee(t).toUpperCase()}function Tw(t,r,o){if(t=ee(t),t&&(o||r===n))return Ql(t);if(!t||!(r=Ge(r)))return t;var c=at(t),h=at(r),p=Xl(c,h),m=Jl(c,h)+1;return zt(c,p,m).join("")}function xw(t,r,o){if(t=ee(t),t&&(o||r===n))return t.slice(0,jl(t)+1);if(!t||!(r=Ge(r)))return t;var c=at(t),h=Jl(c,at(r))+1;return zt(c,0,h).join("")}function Rw(t,r,o){if(t=ee(t),t&&(o||r===n))return t.replace(Fs,"");if(!t||!(r=Ge(r)))return t;var c=at(t),h=Xl(c,at(r));return zt(c,h).join("")}function Aw(t,r){var o=Ed,c=bd;if(ue(r)){var h="separator"in r?r.separator:h;o="length"in r?$(r.length):o,c="omission"in r?Ge(r.omission):c}t=ee(t);var p=t.length;if(In(t)){var m=at(t);p=m.length}if(o>=p)return t;var v=o-Sn(c);if(v<1)return c;var w=m?zt(m,0,v).join(""):t.slice(0,v);if(h===n)return w+c;if(m&&(v+=w.length-v),Wo(h)){if(t.slice(v).search(h)){var T,x=w;for(h.global||(h=eo(h.source,ee(ml.exec(h))+"g")),h.lastIndex=0;T=h.exec(x);)var R=T.index;w=w.slice(0,R===n?v:R)}}else if(t.indexOf(Ge(h),v)!=v){var O=w.lastIndexOf(h);O>-1&&(w=w.slice(0,O))}return w+c}function Nw(t){return t=ee(t),t&&Hd.test(t)?t.replace(pl,s_):t}var Ow=Dn(function(t,r,o){return t+(o?" ":"")+r.toUpperCase()}),$o=Hc("toUpperCase");function Wu(t,r,o){return t=ee(t),r=o?n:r,r===n?e_(t)?l_(t):zp(t):t.match(r)||[]}var Uu=z(function(t,r){try{return $e(t,n,r)}catch(o){return Bo(o)?o:new W(o)}}),Dw=xt(function(t,r){return Je(r,function(o){o=vt(o),St(t,o,ko(t[o],t))}),t});function Pw(t){var r=t==null?0:t.length,o=M();return t=r?ce(t,function(c){if(typeof c[1]!="function")throw new Ze(u);return[o(c[0]),c[1]]}):[],z(function(c){for(var h=-1;++h<r;){var p=t[h];if($e(p[0],this,c))return $e(p[1],this,c)}})}function Lw(t){return sg(et(t,E))}function qo(t){return function(){return t}}function Mw(t,r){return t==null||t!==t?r:t}var kw=qc(),Fw=qc(!0);function Be(t){return t}function Go(t){return yc(typeof t=="function"?t:et(t,E))}function Bw(t){return Cc(et(t,E))}function Ww(t,r){return Ec(t,et(r,E))}var Uw=z(function(t,r){return function(o){return _i(o,t,r)}}),Hw=z(function(t,r){return function(o){return _i(t,o,r)}});function zo(t,r,o){var c=we(r),h=xr(r,c);o==null&&!(ue(r)&&(h.length||!c.length))&&(o=r,r=t,t=this,h=xr(r,we(r)));var p=!(ue(o)&&"chain"in o)||!!o.chain,m=At(t);return Je(h,function(v){var w=r[v];t[v]=w,m&&(t.prototype[v]=function(){var T=this.__chain__;if(p||T){var x=t(this.__wrapped__),R=x.__actions__=Me(this.__actions__);return R.push({func:w,args:arguments,thisArg:t}),x.__chain__=T,x}return w.apply(t,Wt([this.value()],arguments))})}),t}function $w(){return Se._===this&&(Se._=p_),this}function Vo(){}function qw(t){return t=$(t),z(function(r){return bc(r,t)})}var Gw=bo(ce),zw=bo(Gl),Vw=bo(Ks);function Hu(t){return No(t)?Ys(vt(t)):Eg(t)}function Kw(t){return function(r){return t==null?n:on(t,r)}}var Yw=zc(),Qw=zc(!0);function Ko(){return[]}function Yo(){return!1}function Xw(){return{}}function Jw(){return""}function Zw(){return!0}function jw(t,r){if(t=$(t),t<1||t>yn)return[];var o=_t,c=xe(t,_t);r=M(r),t-=_t;for(var h=Js(c,r);++o<t;)r(o);return h}function eC(t){return U(t)?ce(t,vt):ze(t)?[t]:Me(au(ee(t)))}function tC(t){var r=++f_;return ee(t)+r}var nC=Pr(function(t,r){return t+r},0),iC=Io("ceil"),rC=Pr(function(t,r){return t/r},1),sC=Io("floor");function oC(t){return t&&t.length?Tr(t,Be,lo):n}function aC(t,r){return t&&t.length?Tr(t,M(r,2),lo):n}function lC(t){return Kl(t,Be)}function cC(t,r){return Kl(t,M(r,2))}function uC(t){return t&&t.length?Tr(t,Be,fo):n}function hC(t,r){return t&&t.length?Tr(t,M(r,2),fo):n}var fC=Pr(function(t,r){return t*r},1),dC=Io("round"),pC=Pr(function(t,r){return t-r},0);function _C(t){return t&&t.length?Xs(t,Be):0}function gC(t,r){return t&&t.length?Xs(t,M(r,2)):0}return d.after=Bv,d.ary=vu,d.assign=Sy,d.assignIn=Du,d.assignInWith=Vr,d.assignWith=Ty,d.at=xy,d.before=yu,d.bind=ko,d.bindAll=Dw,d.bindKey=wu,d.castArray=Xv,d.chain=_u,d.chunk=sm,d.compact=om,d.concat=am,d.cond=Pw,d.conforms=Lw,d.constant=qo,d.countBy=_v,d.create=Ry,d.curry=Cu,d.curryRight=Eu,d.debounce=bu,d.defaults=Ay,d.defaultsDeep=Ny,d.defer=Wv,d.delay=Uv,d.difference=lm,d.differenceBy=cm,d.differenceWith=um,d.drop=hm,d.dropRight=fm,d.dropRightWhile=dm,d.dropWhile=pm,d.fill=_m,d.filter=mv,d.flatMap=wv,d.flatMapDeep=Cv,d.flatMapDepth=Ev,d.flatten=hu,d.flattenDeep=gm,d.flattenDepth=mm,d.flip=Hv,d.flow=kw,d.flowRight=Fw,d.fromPairs=vm,d.functions=Fy,d.functionsIn=By,d.groupBy=bv,d.initial=wm,d.intersection=Cm,d.intersectionBy=Em,d.intersectionWith=bm,d.invert=Uy,d.invertBy=Hy,d.invokeMap=Sv,d.iteratee=Go,d.keyBy=Tv,d.keys=we,d.keysIn=Fe,d.map=Ur,d.mapKeys=qy,d.mapValues=Gy,d.matches=Bw,d.matchesProperty=Ww,d.memoize=$r,d.merge=zy,d.mergeWith=Pu,d.method=Uw,d.methodOf=Hw,d.mixin=zo,d.negate=qr,d.nthArg=qw,d.omit=Vy,d.omitBy=Ky,d.once=$v,d.orderBy=xv,d.over=Gw,d.overArgs=qv,d.overEvery=zw,d.overSome=Vw,d.partial=Fo,d.partialRight=Iu,d.partition=Rv,d.pick=Yy,d.pickBy=Lu,d.property=Hu,d.propertyOf=Kw,d.pull=xm,d.pullAll=du,d.pullAllBy=Rm,d.pullAllWith=Am,d.pullAt=Nm,d.range=Yw,d.rangeRight=Qw,d.rearg=Gv,d.reject=Ov,d.remove=Om,d.rest=zv,d.reverse=Lo,d.sampleSize=Pv,d.set=Xy,d.setWith=Jy,d.shuffle=Lv,d.slice=Dm,d.sortBy=Fv,d.sortedUniq=Wm,d.sortedUniqBy=Um,d.split=ww,d.spread=Vv,d.tail=Hm,d.take=$m,d.takeRight=qm,d.takeRightWhile=Gm,d.takeWhile=zm,d.tap=ov,d.throttle=Kv,d.thru=Wr,d.toArray=Au,d.toPairs=Mu,d.toPairsIn=ku,d.toPath=eC,d.toPlainObject=Ou,d.transform=Zy,d.unary=Yv,d.union=Vm,d.unionBy=Km,d.unionWith=Ym,d.uniq=Qm,d.uniqBy=Xm,d.uniqWith=Jm,d.unset=jy,d.unzip=Mo,d.unzipWith=pu,d.update=ew,d.updateWith=tw,d.values=Mn,d.valuesIn=nw,d.without=Zm,d.words=Wu,d.wrap=Qv,d.xor=jm,d.xorBy=ev,d.xorWith=tv,d.zip=nv,d.zipObject=iv,d.zipObjectDeep=rv,d.zipWith=sv,d.entries=Mu,d.entriesIn=ku,d.extend=Du,d.extendWith=Vr,zo(d,d),d.add=nC,d.attempt=Uu,d.camelCase=ow,d.capitalize=Fu,d.ceil=iC,d.clamp=iw,d.clone=Jv,d.cloneDeep=jv,d.cloneDeepWith=ey,d.cloneWith=Zv,d.conformsTo=ty,d.deburr=Bu,d.defaultTo=Mw,d.divide=rC,d.endsWith=aw,d.eq=ct,d.escape=lw,d.escapeRegExp=cw,d.every=gv,d.find=vv,d.findIndex=cu,d.findKey=Oy,d.findLast=yv,d.findLastIndex=uu,d.findLastKey=Dy,d.floor=sC,d.forEach=gu,d.forEachRight=mu,d.forIn=Py,d.forInRight=Ly,d.forOwn=My,d.forOwnRight=ky,d.get=Uo,d.gt=ny,d.gte=iy,d.has=Wy,d.hasIn=Ho,d.head=fu,d.identity=Be,d.includes=Iv,d.indexOf=ym,d.inRange=rw,d.invoke=$y,d.isArguments=cn,d.isArray=U,d.isArrayBuffer=ry,d.isArrayLike=ke,d.isArrayLikeObject=pe,d.isBoolean=sy,d.isBuffer=Vt,d.isDate=oy,d.isElement=ay,d.isEmpty=ly,d.isEqual=cy,d.isEqualWith=uy,d.isError=Bo,d.isFinite=hy,d.isFunction=At,d.isInteger=Su,d.isLength=Gr,d.isMap=Tu,d.isMatch=fy,d.isMatchWith=dy,d.isNaN=py,d.isNative=_y,d.isNil=my,d.isNull=gy,d.isNumber=xu,d.isObject=ue,d.isObjectLike=he,d.isPlainObject=Ci,d.isRegExp=Wo,d.isSafeInteger=vy,d.isSet=Ru,d.isString=zr,d.isSymbol=ze,d.isTypedArray=Ln,d.isUndefined=yy,d.isWeakMap=wy,d.isWeakSet=Cy,d.join=Im,d.kebabCase=uw,d.last=nt,d.lastIndexOf=Sm,d.lowerCase=hw,d.lowerFirst=fw,d.lt=Ey,d.lte=by,d.max=oC,d.maxBy=aC,d.mean=lC,d.meanBy=cC,d.min=uC,d.minBy=hC,d.stubArray=Ko,d.stubFalse=Yo,d.stubObject=Xw,d.stubString=Jw,d.stubTrue=Zw,d.multiply=fC,d.nth=Tm,d.noConflict=$w,d.noop=Vo,d.now=Hr,d.pad=dw,d.padEnd=pw,d.padStart=_w,d.parseInt=gw,d.random=sw,d.reduce=Av,d.reduceRight=Nv,d.repeat=mw,d.replace=vw,d.result=Qy,d.round=dC,d.runInContext=y,d.sample=Dv,d.size=Mv,d.snakeCase=yw,d.some=kv,d.sortedIndex=Pm,d.sortedIndexBy=Lm,d.sortedIndexOf=Mm,d.sortedLastIndex=km,d.sortedLastIndexBy=Fm,d.sortedLastIndexOf=Bm,d.startCase=Cw,d.startsWith=Ew,d.subtract=pC,d.sum=_C,d.sumBy=gC,d.template=bw,d.times=jw,d.toFinite=Nt,d.toInteger=$,d.toLength=Nu,d.toLower=Iw,d.toNumber=it,d.toSafeInteger=Iy,d.toString=ee,d.toUpper=Sw,d.trim=Tw,d.trimEnd=xw,d.trimStart=Rw,d.truncate=Aw,d.unescape=Nw,d.uniqueId=tC,d.upperCase=Ow,d.upperFirst=$o,d.each=gu,d.eachRight=mu,d.first=fu,zo(d,function(){var t={};return gt(d,function(r,o){te.call(d.prototype,o)||(t[o]=r)}),t}(),{chain:!1}),d.VERSION=s,Je(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){d[t].placeholder=d}),Je(["drop","take"],function(t,r){X.prototype[t]=function(o){o=o===n?1:ve($(o),0);var c=this.__filtered__&&!r?new X(this):this.clone();return c.__filtered__?c.__takeCount__=xe(o,c.__takeCount__):c.__views__.push({size:xe(o,_t),type:t+(c.__dir__<0?"Right":"")}),c},X.prototype[t+"Right"]=function(o){return this.reverse()[t](o).reverse()}}),Je(["filter","map","takeWhile"],function(t,r){var o=r+1,c=o==hl||o==xd;X.prototype[t]=function(h){var p=this.clone();return p.__iteratees__.push({iteratee:M(h,3),type:o}),p.__filtered__=p.__filtered__||c,p}}),Je(["head","last"],function(t,r){var o="take"+(r?"Right":"");X.prototype[t]=function(){return this[o](1).value()[0]}}),Je(["initial","tail"],function(t,r){var o="drop"+(r?"":"Right");X.prototype[t]=function(){return this.__filtered__?new X(this):this[o](1)}}),X.prototype.compact=function(){return this.filter(Be)},X.prototype.find=function(t){return this.filter(t).head()},X.prototype.findLast=function(t){return this.reverse().find(t)},X.prototype.invokeMap=z(function(t,r){return typeof t=="function"?new X(this):this.map(function(o){return _i(o,t,r)})}),X.prototype.reject=function(t){return this.filter(qr(M(t)))},X.prototype.slice=function(t,r){t=$(t);var o=this;return o.__filtered__&&(t>0||r<0)?new X(o):(t<0?o=o.takeRight(-t):t&&(o=o.drop(t)),r!==n&&(r=$(r),o=r<0?o.dropRight(-r):o.take(r-t)),o)},X.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},X.prototype.toArray=function(){return this.take(_t)},gt(X.prototype,function(t,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),c=/^(?:head|last)$/.test(r),h=d[c?"take"+(r=="last"?"Right":""):r],p=c||/^find/.test(r);h&&(d.prototype[r]=function(){var m=this.__wrapped__,v=c?[1]:arguments,w=m instanceof X,T=v[0],x=w||U(m),R=function(K){var J=h.apply(d,Wt([K],v));return c&&O?J[0]:J};x&&o&&typeof T=="function"&&T.length!=1&&(w=x=!1);var O=this.__chain__,L=!!this.__actions__.length,k=p&&!O,q=w&&!L;if(!p&&x){m=q?m:new X(this);var F=t.apply(m,v);return F.__actions__.push({func:Wr,args:[R],thisArg:n}),new je(F,O)}return k&&q?t.apply(this,v):(F=this.thru(R),k?c?F.value()[0]:F.value():F)})}),Je(["pop","push","shift","sort","splice","unshift"],function(t){var r=hr[t],o=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",c=/^(?:pop|shift)$/.test(t);d.prototype[t]=function(){var h=arguments;if(c&&!this.__chain__){var p=this.value();return r.apply(U(p)?p:[],h)}return this[o](function(m){return r.apply(U(m)?m:[],h)})}}),gt(X.prototype,function(t,r){var o=d[r];if(o){var c=o.name+"";te.call(An,c)||(An[c]=[]),An[c].push({name:r,func:o})}}),An[Dr(n,de).name]=[{name:"wrapper",func:n}],X.prototype.clone=N_,X.prototype.reverse=O_,X.prototype.value=D_,d.prototype.at=av,d.prototype.chain=lv,d.prototype.commit=cv,d.prototype.next=uv,d.prototype.plant=fv,d.prototype.reverse=dv,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=pv,d.prototype.first=d.prototype.head,li&&(d.prototype[li]=hv),d},Tn=c_();en?((en.exports=Tn)._=Tn,qs._=Tn):Se._=Tn}).call(CI)}(Ti,Ti.exports)),Ti.exports}var bI=EI();const Fn="https://chatrooms-backend-6lhi.onrender.com",II={apiKey:"QLrNSjLc0rVOo6LZ35zofmPWHYnlLLxc3nt2NQWO",databaseURL:"https://chats-rooms-9a40f-default-rtdb.firebaseio.com/",authDomain:"chats-rooms-9a40f.firebaseapp.com"},SI=Da(II),TI=gd(SI),Ye={data:{},listener:[],init(){const i=localStorage.getItem("state");i?this.data=JSON.parse(i):this.data={fullName:"",nombre:"",userId:"",email:"",roomId:"",messages:[],realtimeDBRoomId:""},console.log("Soy el state, e inicializado",this.data)},listenRoom(){const i=this.getState(),e=pd(TI,"/rooms/"+i.realtimeDBRoomId);_d(e,n=>{const s=this.getState(),a=n.val();console.log("listenRoom",a);const l=bI.map(a.messages);s.messages=l,this.setState(s)})},getState(){return this.data},setNombre(i){const e=this.getState();e.nombre=i,this.setState(e)},pushMessage(i){const e=this.getState(),n=e.nombre,s=e.realtimeDBRoomId;fetch(Fn+`/rooms/${s}/messages`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({text:i,author:n})})},setEmailAndFullName(i,e){const n=this.getState();n.fullName=e,n.nombre=e,n.email=i,this.setState(n)},setState(i){this.data=i,this.listener.forEach(e=>e(i)),localStorage.setItem("state",JSON.stringify(i)),console.log("Soy el state, e cambiado",this.data)},signIn(i){const e=this.getState();e.email&&e.fullName?fetch(Fn+"/auth",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:e.email})}).then(n=>n.status===404?fetch(Fn+"/signup",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:e.email,nombre:e.fullName})}).then(()=>fetch(Fn+"/auth",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:e.email})})):n).then(n=>n.json()).then(n=>{e.userId=n.id,this.setState(e),console.log(n),i()}).catch(n=>{console.error("Error en signIn:",n),i(!0)}):(console.error("No hay un email o nombre en el state"),i(!0))},askNewRoom(i){const e=this.getState();e.userId?fetch(Fn+"/rooms",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({userId:e.userId})}).then(n=>n.json()).then(n=>{e.roomId=n.id,this.setState(e),console.log(n),i&&i()}):(console.error("No hay userId"),i&&i())},accessToRoom(i){const e=this.getState(),n=e.roomId;fetch(Fn+"/rooms/"+n+"?userId="+e.userId).then(s=>s.json()).then(s=>{e.realtimeDBRoomId=s.realtimeDB,this.setState(e),this.listenRoom(),i&&i()})},suscribe(i){this.listener.push(i)}};var Ta=Array.isArray||function(i){return Object.prototype.toString.call(i)=="[object Array]"},Xi=wd,xI=ll,RI=DI,AI=md,NI=yd,OI=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function ll(i){for(var e=[],n=0,s=0,a="",l;(l=OI.exec(i))!=null;){var u=l[0],f=l[1],_=l.index;if(a+=i.slice(s,_),s=_+u.length,f){a+=f[1];continue}a&&(e.push(a),a="");var g=l[2],b=l[3],E=l[4],C=l[5],A=l[6],P=l[7],H=A==="+"||A==="*",G=A==="?"||A==="*",de=g||"/",Le=E||C||(P?".*":"[^"+de+"]+?");e.push({name:b||n++,prefix:g||"",delimiter:de,optional:G,repeat:H,pattern:PI(Le)})}return s<i.length&&(a+=i.substr(s)),a&&e.push(a),e}function DI(i){return md(ll(i))}function md(i){for(var e=new Array(i.length),n=0;n<i.length;n++)typeof i[n]=="object"&&(e[n]=new RegExp("^"+i[n].pattern+"$"));return function(s){for(var a="",l=s||{},u=0;u<i.length;u++){var f=i[u];if(typeof f=="string"){a+=f;continue}var _=l[f.name],g;if(_==null){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to be defined')}if(Ta(_)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received "'+_+'"');if(_.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var b=0;b<_.length;b++){if(g=encodeURIComponent(_[b]),!e[u].test(g))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received "'+g+'"');a+=(b===0?f.prefix:f.delimiter)+g}continue}if(g=encodeURIComponent(_),!e[u].test(g))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+g+'"');a+=f.prefix+g}return a}}function Fh(i){return i.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function PI(i){return i.replace(/([=!:$\/()])/g,"\\$1")}function cl(i,e){return i.keys=e,i}function vd(i){return i.sensitive?"":"i"}function LI(i,e){var n=i.source.match(/\((?!\?)/g);if(n)for(var s=0;s<n.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return cl(i,e)}function MI(i,e,n){for(var s=[],a=0;a<i.length;a++)s.push(wd(i[a],e,n).source);var l=new RegExp("(?:"+s.join("|")+")",vd(n));return cl(l,e)}function kI(i,e,n){for(var s=ll(i),a=yd(s,n),l=0;l<s.length;l++)typeof s[l]!="string"&&e.push(s[l]);return cl(a,e)}function yd(i,e){e=e||{};for(var n=e.strict,s=e.end!==!1,a="",l=i[i.length-1],u=typeof l=="string"&&/\/$/.test(l),f=0;f<i.length;f++){var _=i[f];if(typeof _=="string")a+=Fh(_);else{var g=Fh(_.prefix),b=_.pattern;_.repeat&&(b+="(?:"+g+b+")*"),_.optional?g?b="(?:"+g+"("+b+"))?":b="("+b+")?":b=g+"("+b+")",a+=b}}return n||(a=(u?a.slice(0,-2):a)+"(?:\\/(?=$))?"),s?a+="$":a+=n&&u?"":"(?=\\/|$)",new RegExp("^"+a,vd(e))}function wd(i,e,n){return e=e||[],Ta(e)?n||(n={}):(n=e,e=[]),i instanceof RegExp?LI(i,e):Ta(i)?MI(i,e,n):kI(i,e,n)}Xi.parse=xI;Xi.compile=RI;Xi.tokensToFunction=AI;Xi.tokensToRegExp=NI;var Yn=typeof document<"u",rt=typeof window<"u",Is=typeof history<"u",FI=typeof process<"u",xa=Yn&&document.ontouchstart?"touchstart":"click",Lt=rt&&!!(window.history.location||window.location);function ge(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}ge.prototype.configure=function(i){var e=i||{};this._window=e.window||rt&&window,this._decodeURLComponents=e.decodeURLComponents!==!1,this._popstate=e.popstate!==!1&&rt,this._click=e.click!==!1&&Yn,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):rt&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(xa,this.clickHandler,!1):Yn&&n.document.removeEventListener(xa,this.clickHandler,!1),this._hashbang&&rt&&!Is?n.addEventListener("hashchange",this._onpopstate,!1):rt&&n.removeEventListener("hashchange",this._onpopstate,!1)};ge.prototype.base=function(i){if(arguments.length===0)return this._base;this._base=i};ge.prototype._getBase=function(){var i=this._base;if(i)return i;var e=rt&&this._window&&this._window.location;return rt&&this._hashbang&&e&&e.protocol==="file:"&&(i=e.pathname),i};ge.prototype.strict=function(i){if(arguments.length===0)return this._strict;this._strict=i};ge.prototype.start=function(i){var e=i||{};if(this.configure(e),e.dispatch!==!1){this._running=!0;var n;if(Lt){var s=this._window,a=s.location;this._hashbang&&~a.hash.indexOf("#!")?n=a.hash.substr(2)+a.search:this._hashbang?n=a.search+a.hash:n=a.pathname+a.search+a.hash}this.replace(n,null,!0,e.dispatch)}};ge.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var i=this._window;this._click&&i.document.removeEventListener(xa,this.clickHandler,!1),rt&&i.removeEventListener("popstate",this._onpopstate,!1),rt&&i.removeEventListener("hashchange",this._onpopstate,!1)}};ge.prototype.show=function(i,e,n,s){var a=new Ji(i,e,this),l=this.prevContext;return this.prevContext=a,this.current=a.path,n!==!1&&this.dispatch(a,l),a.handled!==!1&&s!==!1&&a.pushState(),a};ge.prototype.back=function(i,e){var n=this;if(this.len>0){var s=this._window;Is&&s.history.back(),this.len--}else setTimeout(i?function(){n.show(i,e)}:function(){n.show(n._getBase(),e)})};ge.prototype.redirect=function(i,e){var n=this;typeof i=="string"&&typeof e=="string"&&Ss.call(this,i,function(s){setTimeout(function(){n.replace(e)},0)}),typeof i=="string"&&typeof e>"u"&&setTimeout(function(){n.replace(i)},0)};ge.prototype.replace=function(i,e,n,s){var a=new Ji(i,e,this),l=this.prevContext;return this.prevContext=a,this.current=a.path,a.init=n,a.save(),s!==!1&&this.dispatch(a,l),a};ge.prototype.dispatch=function(i,e){var n=0,s=0,a=this;function l(){var f=a.exits[s++];if(!f)return u();f(e,l)}function u(){var f=a.callbacks[n++];if(i.path!==a.current){i.handled=!1;return}if(!f)return BI.call(a,i);f(i,u)}e?l():u()};ge.prototype.exit=function(i,e){if(typeof i=="function")return this.exit("*",i);for(var n=new Zi(i,null,this),s=1;s<arguments.length;++s)this.exits.push(n.middleware(arguments[s]))};ge.prototype.clickHandler=function(i){if(this._which(i)===1&&!(i.metaKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented){var e=i.target,n=i.path||(i.composedPath?i.composedPath():null);if(n){for(var s=0;s<n.length;s++)if(n[s].nodeName&&n[s].nodeName.toUpperCase()==="A"&&n[s].href){e=n[s];break}}for(;e&&e.nodeName.toUpperCase()!=="A";)e=e.parentNode;if(!(!e||e.nodeName.toUpperCase()!=="A")){var a=typeof e.href=="object"&&e.href.constructor.name==="SVGAnimatedString";if(!(e.hasAttribute("download")||e.getAttribute("rel")==="external")){var l=e.getAttribute("href");if(!(!this._hashbang&&this._samePath(e)&&(e.hash||l==="#"))&&!(l&&l.indexOf("mailto:")>-1)&&!(a?e.target.baseVal:e.target)&&!(!a&&!this.sameOrigin(e.href))){var u=a?e.href.baseVal:e.pathname+e.search+(e.hash||"");u=u[0]!=="/"?"/"+u:u,FI&&u.match(/^\/[a-zA-Z]:\//)&&(u=u.replace(/^\/[a-zA-Z]:\//,"/"));var f=u,_=this._getBase();u.indexOf(_)===0&&(u=u.substr(_.length)),this._hashbang&&(u=u.replace("#!","")),!(_&&f===u&&(!Lt||this._window.location.protocol!=="file:"))&&(i.preventDefault(),this.show(f))}}}}};ge.prototype._onpopstate=function(){var i=!1;return rt?(Yn&&document.readyState==="complete"?i=!0:window.addEventListener("load",function(){setTimeout(function(){i=!0},0)}),function(n){if(i){var s=this;if(n.state){var a=n.state.path;s.replace(a,n.state)}else if(Lt){var l=s._window.location;s.show(l.pathname+l.search+l.hash,void 0,void 0,!1)}}}):function(){}}();ge.prototype._which=function(i){return i=i||rt&&this._window.event,i.which==null?i.button:i.which};ge.prototype._toURL=function(i){var e=this._window;if(typeof URL=="function"&&Lt)return new URL(i,e.location.toString());if(Yn){var n=e.document.createElement("a");return n.href=i,n}};ge.prototype.sameOrigin=function(i){if(!i||!Lt)return!1;var e=this._toURL(i),n=this._window,s=n.location;return s.protocol===e.protocol&&s.hostname===e.hostname&&(s.port===e.port||s.port===""&&(e.port==80||e.port==443))};ge.prototype._samePath=function(i){if(!Lt)return!1;var e=this._window,n=e.location;return i.pathname===n.pathname&&i.search===n.search};ge.prototype._decodeURLEncodedURIComponent=function(i){return typeof i!="string"?i:this._decodeURLComponents?decodeURIComponent(i.replace(/\+/g," ")):i};function Cd(){var i=new ge;function e(){return Ss.apply(i,arguments)}return e.callbacks=i.callbacks,e.exits=i.exits,e.base=i.base.bind(i),e.strict=i.strict.bind(i),e.start=i.start.bind(i),e.stop=i.stop.bind(i),e.show=i.show.bind(i),e.back=i.back.bind(i),e.redirect=i.redirect.bind(i),e.replace=i.replace.bind(i),e.dispatch=i.dispatch.bind(i),e.exit=i.exit.bind(i),e.configure=i.configure.bind(i),e.sameOrigin=i.sameOrigin.bind(i),e.clickHandler=i.clickHandler.bind(i),e.create=Cd,Object.defineProperty(e,"len",{get:function(){return i.len},set:function(n){i.len=n}}),Object.defineProperty(e,"current",{get:function(){return i.current},set:function(n){i.current=n}}),e.Context=Ji,e.Route=Zi,e}function Ss(i,e){if(typeof i=="function")return Ss.call(this,"*",i);if(typeof e=="function")for(var n=new Zi(i,null,this),s=1;s<arguments.length;++s)this.callbacks.push(n.middleware(arguments[s]));else typeof i=="string"?this[typeof e=="string"?"redirect":"show"](i,e):this.start(i)}function BI(i){if(!i.handled){var e,n=this,s=n._window;n._hashbang?e=Lt&&this._getBase()+s.location.hash.replace("#!",""):e=Lt&&s.location.pathname+s.location.search,e!==i.canonicalPath&&(n.stop(),i.handled=!1,Lt&&(s.location.href=i.canonicalPath))}}function WI(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ji(i,e,n){var s=this.page=n||Ss,a=s._window,l=s._hashbang,u=s._getBase();i[0]==="/"&&i.indexOf(u)!==0&&(i=u+(l?"#!":"")+i);var f=i.indexOf("?");this.canonicalPath=i;var _=new RegExp("^"+WI(u));if(this.path=i.replace(_,"")||"/",l&&(this.path=this.path.replace("#!","")||"/"),this.title=Yn&&a.document.title,this.state=e||{},this.state.path=i,this.querystring=~f?s._decodeURLEncodedURIComponent(i.slice(f+1)):"",this.pathname=s._decodeURLEncodedURIComponent(~f?i.slice(0,f):i),this.params={},this.hash="",!l){if(!~this.path.indexOf("#"))return;var g=this.path.split("#");this.path=this.pathname=g[0],this.hash=s._decodeURLEncodedURIComponent(g[1])||"",this.querystring=this.querystring.split("#")[0]}}Ji.prototype.pushState=function(){var i=this.page,e=i._window,n=i._hashbang;i.len++,Is&&e.history.pushState(this.state,this.title,n&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};Ji.prototype.save=function(){var i=this.page;Is&&i._window.history.replaceState(this.state,this.title,i._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function Zi(i,e,n){var s=this.page=n||ul,a=e||{};a.strict=a.strict||s._strict,this.path=i==="*"?"(.*)":i,this.method="GET",this.regexp=Xi(this.path,this.keys=[],a)}Zi.prototype.middleware=function(i){var e=this;return function(n,s){if(e.match(n.path,n.params))return n.routePath=e.path,i(n,s);s()}};Zi.prototype.match=function(i,e){var n=this.keys,s=i.indexOf("?"),a=~s?i.slice(0,s):i,l=this.regexp.exec(decodeURIComponent(a));if(!l)return!1;delete e[0];for(var u=1,f=l.length;u<f;++u){var _=n[u-1],g=this.page._decodeURLEncodedURIComponent(l[u]);(g!==void 0||!hasOwnProperty.call(e,_.name))&&(e[_.name]=g)}return!0};var ul=Cd(),Zt=ul,UI=ul;Zt.default=UI;function HI(i){const e=document.createElement("div");e.classList.add("app"),e.innerHTML=`
 <header-el></header-el>
 <main class="main">
    <h2>Bienvenidos</h2>              
    <form class="container-btn-input">
     <reusable-input class="input-email" label="Email:" size-label="30px" required></reusable-input>       
       <span class="error-message-email"></span>

    <reusable-input class="input-name" label="Nombre:" size-label="30px" required></reusable-input>    
        <span class="error-message-name"></span>

    <reusable-select class="select-roomid" label="Elige una sala:" size-label="30px" options="Crea una sala, Ingresa a una Sala conocida"></reusable-select>

    <reusable-input class="input-roomid" label="RoomId:" size-label="30px" ></reusable-input>
        <span class="error-message-roomid"></span>

    <reusable-button class="button" label="Comenzar" text-color="fff" border-color="none" hover-bg-color="#88afeb" active-bg-color="#639cf1"></reusable-button>
      </form>
    </main>
  `;const n=document.createElement("style");n.textContent=`
    .app {
        background-color:rgb(43, 42, 42);
        margin-left: auto;
        margin-right: auto;
        max-width: 1260px;
        min-height: 100vh;  
    }
    h2{
        margin: 10px 0;
        font-size: 50px
    }
    .main{
        display: flex;
        flex-direction: column;
        align-items: center;        
    }
     .container-btn-input{
         width: 500px    
    }
    .button{
        display: block;
        margin: 25px 0;
    }
    .error-message-email, .error-message-name, .error-message-roomid {
        background: #f08484;
        padding: 10px;
        border-radius: 4px;
        border: solid 6px rgb(241, 80, 80);
        margin-bottom: 10px;
        display: none;
        color: black;
        font-size: 16px;
        margin-top: 5px;
    }
      @media (max-width: 768px) {
        .container-btn-input {
        width: 90%; /* Hacerlo más adaptable */
      }
      h2 {
          font-size: 32px; 
      }
      .button {
          width: 100%; 
      }
      .error-message {
          font-size: 14px; 
          padding: 8px;
      }
  }
  `,console.log("Entré a home");const s=e.querySelector(".select-roomid"),a=e.querySelector(".input-email"),l=e.querySelector(".input-name"),u=e.querySelector(".input-roomid"),f=e.querySelector(".button"),_=e.querySelector(".error-message-email"),g=e.querySelector(".error-message-name"),b=e.querySelector(".error-message-roomid");return u.style.display="none",s.addEventListener("change",()=>{const E=s.getValue().trim();u.style.display=E==="Ingresa a una Sala conocida"?"block":"none"}),u.style.display=s.getValue().trim()==="Ingresa a una Sala conocida"?"block":"none",f.addEventListener("click",E=>{E.preventDefault();const C=a.getValue().trim(),A=l.getValue().trim(),P=u.getValue().trim(),H=s.getValue().trim();if(_.style.display="none",g.style.display="none",b.style.display="none",!C){_.textContent="Por favor, ingrese un Email antes de continuar.",_.style.display="block";return}if(!A){g.textContent="Por favor, ingrese un nombre antes de continuar.",g.style.display="block";return}if(H==="Ingresa a una Sala conocida"&&!P){b.textContent="Por favor, ingrese un RoomId válido.",b.style.display="block";return}Ye.setEmailAndFullName(C,A),H==="Crea una sala"?Ye.signIn(G=>{if(G){console.error("hubo un error");return}Ye.askNewRoom(()=>{Ye.getState().roomId?Ye.accessToRoom(()=>{i.goTo("/chat")}):alert("No se pudo obtener el Room ID")})}):H==="Ingresa a una Sala conocida"&&(Ye.getState().roomId=P,Ye.signIn(G=>{if(G){console.error("hubo un error");return}Ye.getState().roomId?Ye.accessToRoom(()=>{i.goTo("/chat")}):alert("No se pudo obtener el Room ID")}))}),e.appendChild(n),e}const $I={apiKey:"QLrNSjLc0rVOo6LZ35zofmPWHYnlLLxc3nt2NQWO",databaseURL:"https://chats-rooms-9a40f-default-rtdb.firebaseio.com/",authDomain:"chats-rooms-9a40f.firebaseapp.com"},qI=Da($I),GI=gd(qI);function zI(){const i=document.createElement("div");i.innerHTML=`
   <header-el></header-el>
  <main class="main">
  <h2>Chat</h2>
  <ul class="container-messages"></ul>
  <form class="form">
      <reusable-input
        class="input-mesagge"        
        size-label="30px" required></reusable-input>
      <reusable-button
        class="button"
        label="Enviar"
        text-color="fff"
        border-color="none"
        hover-bg-color="#88afeb"
        active-bg-color="#639cf1"
      ></reusable-button>
    </form>
    </main>
  `;const e=document.createElement("style");e.textContent=`
    .app {
      background-color:rgb(43, 42, 42);
      margin-left: auto;
      margin-right: auto;
      max-width: 1260px;
      min-height: 100vh;  
    }
    h2{
      margin-top: 10px;
      font-size: 50px;
      text-align: center;
    }
    .main{
      background-color:rgb(43, 42, 42);       
      max-width: 960px;
      min-height: 90vh;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
    }
    .form{
      margin-top: auto;
      padding: 10px 10px;
    }
    .container-messages {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      max-height: 50vh;
      padding: 10px;
    }
    .container-mesagge {
      display: flex;
      flex-direction: column;
      padding: 15px;
      width: fit-content;        
    }
    .container-mesagge-msg {
      background-color: #d8d8d8;
      color: #000000;
      border-radius: 4px;
      padding: 10px;
      font-weight: 500;
    }
    .usuario-message {
      margin-left: auto;
    }
    .usuario-message .container-mesagge-msg {
      background-color: #8bc34a; /* Verde */
    }
    .container-mesagge p {
      margin: 0;
    }
    .name-message {
      font-weight: 100;
    }
    .hour-message {
      text-align: end;
    }
    @media (max-width: 768px) {
      .app {
        max-width: 100%;
        padding: 10px;
      }
      .main {
        max-width: 100%;
        min-height: auto;
        padding: 10px;
      }
      h2 {
        font-size: 32px;
      }
      .container-messages {
        max-height: 57vh; 
        padding: 5px;
      }
      .container-mesagge-msg {
        font-size: 14px;
        padding: 8px;
      }
      .form {
        display: flex;
        flex-direction: column;     
        width: 100%;
        padding: 0 10px;
      }
      .input-mesagge {
        width: 100%; 
      }
      .button {
        width: 100%; 
        margin-top: 5px;
      }
      .error-message {
        font-size: 14px;
        padding: 8px;
      }
    }
  `;const s=Ye.getState().realtimeDBRoomId;function a(l){Ye.pushMessage(l),console.log("Mensaje enviado correctamente!")}return(()=>{const l=pd(GI,`/rooms/${s}/messages`);_d(l,_=>{const g=_.val()||{},b=i.querySelector(".container-messages");b.innerHTML="";function E(){b.scrollTop=b.scrollHeight}Object.values(g).forEach(C=>{const A=document.createElement("li"),H=new Date(C.timestamp).toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),G=C.author===Ye.data.nombre;A.classList.add(G?"usuario-message":"otro-message"),A.innerHTML=`
        <div class="container-mesagge">
          <p class="name-message"><em>${C.author}</em></p>
          <p class="container-mesagge-msg">${C.text}</p>
          <p class="hour-message"><em>${H}</em></p>
        </div>
        `,b.appendChild(A),E()})});const u=i.querySelector(".input-mesagge"),f=i.querySelector(".button");f==null||f.addEventListener("click",()=>{const _=u.getValue();_.trim()!==""&&(a(_),u.setValue(""))}),u.addEventListener("keypress",_=>{if(_.key==="Enter"){_.preventDefault();const g=u.getValue();g.trim()!==""&&(a(g),u.setValue(""))}})})(),i.appendChild(e),i}const $i=document.querySelector("#app");if(!$i)throw new Error("Elemento #app no encontrado");const VI=location.hostname==="localhost"||location.hostname==="127.0.0.1"||location.hostname.startsWith("192.168.")||location.hostname==="[::1]";VI||Zt.base("/chatrooms-backend/");function KI(i){Zt(i)}Zt("/",()=>Zt.redirect("/home"));Zt("/home",()=>{$i.innerHTML="",$i.appendChild(HI({goTo:KI}))});Zt("/chat",()=>{$i.innerHTML="",$i.appendChild(zI())});function YI(){Zt.start()}YI(),Ye.init();
