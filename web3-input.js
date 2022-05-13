(()=>{var E=Object.create;var v=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var I=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var U=(a,e,i,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of O(e))!P.call(a,s)&&s!==i&&v(a,s,{get:()=>e[s],enumerable:!(t=A(e,s))||t.enumerable});return a};var N=(a,e,i)=>(i=a!=null?E(x(a)):{},U(e||!a||!a.__esModule?v(i,"default",{value:a,enumerable:!0}):i,a));var C=I((q,S)=>{"use strict";function $({mustBeMetaMask:a=!1,silent:e=!1,timeout:i=3e3}={}){s();let t=!1;return new Promise(n=>{window.ethereum?r():(window.addEventListener("ethereum#initialized",r,{once:!0}),setTimeout(()=>{r()},i));function r(){if(t)return;t=!0,window.removeEventListener("ethereum#initialized",r);let{ethereum:c}=window;c&&(!a||c.isMetaMask)?n(c):(!e&&console.error("@metamask/detect-provider:",a&&c?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum."),n(null))}});function s(){if(typeof a!="boolean")throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if(typeof e!="boolean")throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if(typeof i!="number")throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}}S.exports=$});var T=N(C(),1);var B=function(a){let e=arguments,i=this,t,s,n=1,r="",c="",o=[0],l=h=>{n===1&&(h||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(h?e[h]:r):n===3&&(h||r)?(o[1]=h?e[h]:r,n=2):n===2&&r==="..."&&h?o[2]=Object.assign(o[2]||{},e[h]):n===2&&r&&!h?(o[2]=o[2]||{})[r]=!0:n>=5&&(n===5?((o[2]=o[2]||{})[s]=h?r?r+e[h]:e[h]:r,n=6):(h||r)&&(o[2][s]+=h?r+e[h]:r)),r=""};for(let h=0;h<a.length;h++){h&&(n===1&&l(),l(h));for(let d=0;d<a[h].length;d++)t=a[h][d],n===1?t==="<"?(l(),o=[o,"",null],n=3):r+=t:n===4?r==="--"&&t===">"?(n=1,r=""):r=t+r[0]:c?t===c?c="":r+=t:t==='"'||t==="'"?c=t:t===">"?(l(),n=1):n&&(t==="="?(n=5,s=r,r=""):t==="/"&&(n<5||a[h][d+1]===">")?(l(),n===3&&(o=o[0]),n=o,(o=o[0]).push(i.apply(null,n.slice(1))),n=0):t===" "||t==="	"||t===`
`||t==="\r"?(l(),n=2):r+=t),n===3&&r==="!--"&&(n=4,o=o[0])}return l(),o.length>2?o.slice(1):o[1]},u=B.bind((a,e,...i)=>{let t=null,s=!1;["svg","use","symbol","path","g","defs","title"].indexOf(a)>-1?(t=document.createElementNS("http://www.w3.org/2000/svg",a),s=!0):t=document.createElement(a);for(let n in e)if(n.slice(0,2)==="on"){let r=n.slice(2),c=e[n];if(c==null)continue;t.addEventListener(r,c)}else if(["disabled","selected","checked"].indexOf(n)>-1)e[n]&&t.setAttribute(n,n);else if(n==="xlinkHref"&&s)e[n]&&t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e[n]);else if(n==="href"&&s)e[n]&&t.setAttributeNS("http://www.w3.org/1999/xlink","href",e[n]);else{if(e[n]==null)continue;t.setAttribute(n,e[n])}return i.length===0?t:(i.flat(1).forEach(n=>{n instanceof Node?t.appendChild(n):t.appendChild(document.createTextNode(n))}),a==null?t.children:t)});function b(a,e){for(;e.firstChild;)e.removeChild(e.firstChild);Array.isArray(a)?a.forEach(i=>e.appendChild(i)):e.appendChild(a)}function p(a){return a.replace(/([A-Z])/g,"-$1").toLowerCase()}function f(a){return(typeof a=="object"||typeof a=="function")&&typeof a.then=="function"}function g(a,e){let i=function(t){if(!t)return[];let s=[];return Object.keys(t).forEach(n=>{(t[n].observed==null||t[n].observed)&&s.push(p(n))}),s}(e.props);globalThis.customElements.get(a)||globalThis.customElements.define(a,class extends globalThis.HTMLElement{static get observedAttributes(){return i}get componentTagName(){return a}connectedCallback(){this.connectedCallbackCount==null&&(this.connectedCallbackCount=0),this.connectedCallbackCount=this.connectedCallbackCount+1,this._checkInit(),this._preprocess()}disconnectedCallback(){typeof this.removed=="function"&&(this.removed(),this.isRemovedCalled=!0)}attributeChangedCallback(){this.connectedCallbackCount!=null&&(this._checkInit(),this._preprocess())}get initialised(){return this._props&&this._state&&this._computed&&this.templateRenderer}_checkInit(){this.initialised||this._init(e)}_init(t){if(this._props=t.props||{},this._computed=t.computed||{},t.state&&typeof t.state!="function")throw new Error("State must be a function!");this._state=t.state||{},this.computedCache={},this.status="render",this.connectedCallbackCount=0,this.props=this._processProps(),typeof this._state=="function"&&(this._state=this._state.bind(this)()),this.state=this._monitorState(this._state),this.root=this._processRoot(t.root),this.slots=this._processSlots(),this.render=t.render||null,this.templateRenderer=t.renderer,this.template=null,this.created=t.created||null,this.mounted=t.mounted||null,this.updated=t.updated||null,this.removed=t.removed||null,this.isCreatedCalled=!1,this.isMountedCalled=!1,this.isRemovedCalled=!1,this.emit=(s,n)=>{(function(r,c,o={}){let l=Object.assign({},{bubbles:!0,cancelable:!0,composed:!1},o),h;"composed"in CustomEvent.prototype?h=new CustomEvent(c,l):(h=document.createEvent("CustomEvent"),h.initCustomEvent(c,l.bubbles,l.cancelable,l.detail),Object.defineProperty(h,"composed",{value:l.composed})),r.dispatchEvent(h)})(this,s,{detail:n})},this.setState=(s,n)=>{let r=o=>{if(!o||typeof o!="object")return;let l=this.updated;n&&(this.updated=()=>{setTimeout(n),this.updated=l||void 0}),this.status="transaction";for(let h in o)this.state[h]&&this.state[h]===o[h]||(this.state[h]=o[h]);this.status="render",this._processRender()},c=s(this.state);f(c)?c.then(r):r(c)},this._processMethodsAndComputedProps(t),this._processInstanceProps(this._props),typeof this.created!="function"||this.isCreatedCalled||(this.created(),this.isCreatedCalled=!0)}_processProps(){let t={};return Object.keys(this._props).forEach(s=>{let n={},r=this._props[s],c=this._getAttribute(s),o=null;if(r.default!=null&&(o=r.default),r.required&&c==null)o!=null?(console.info(`No biggie, the required prop '${s}' has no value set, so the default has been set`),n[s]=o):(n[s]=null,console.error(`The required prop '${s}' has no value set`));else switch(r.type){case String:default:n[s]=c||o;break;case Number:n[s]=c!=null?parseFloat(c):o??0;break;case Boolean:n[s]=c!=null?c.toString()==="true":o!=null&&o;break;case Object:try{n[s]=c!=null?JSON.parse(c):o??void 0}catch(l){n[s]=o??void 0,console.error("An object parse issue occurred",l)}}t[s]=n[s],this._instanceProps&&this._instanceProps[s]&&(t[s]=this._instanceProps[s])}),t}_processMethodsAndComputedProps(t){let s=this,n=Object.keys(t);n.length&&n.forEach(r=>{s[r]||typeof t[r]!="function"||(s[r]=t[r].bind(s)),r==="computed"&&this._processComputed(t[r])})}_processRoot(t){switch(t){case"standard":default:return this;case"shadow":return this.attachShadow({mode:"open"});case"shadow:closed":return this.attachShadow({mode:"closed"})}}_processComputed(t){let s=this,n=Object.keys(t);n.length&&n.forEach(r=>{s[r]?console.warn(`Computed property '${r}' already exists on the component instance`):Object.defineProperty(s,r,{get:()=>(s.computedCache[r]||(s.computedCache[r]=t[r].bind(s)()),s.computedCache[r])})})}_processRender(){let t=this.render?this.render():void 0;t&&(this.template=t,this._updateRender())}_monitorState(t){let s=this;return new Proxy(t,{set:(n,r,c)=>(n[r]===c||(n[r]=c,s.computedCache={},s.status==="render"&&s._processRender()),!0)})}_processSlots(){let t=this.childNodes,s={default:[]};return t.length>0&&[...t].forEach(n=>{let r=n.getAttribute?n.getAttribute("slot"):null;r?s[r]=n:s.default.push(n)}),s}_getAttribute(t){try{return this.getAttribute(p(t))}catch(s){return console.error("A get prop error occurred",s),""}}_processInstanceProps(t){let s=this,n=Object.keys(t);t&&n.forEach(r=>{let c;s[r]&&(c=s[r],delete s[r]),Object.defineProperty(s,r,{get(){return this._instanceProps&&this._instanceProps[r]?this._instanceProps[r]:this.getAttribute(p(r))},set(o){return this._instanceProps||(this._instanceProps={}),this._instanceProps[r]=o,this.setAttribute(p(r),typeof o=="object"?JSON.stringify(o):o.toString()),!0},enumerable:!0}),c&&(s[r]=c)})}_preprocess(){this.computedCache={},this.props=this._processProps(),this._processRender()}_updateRender(){this.template&&(f(this.template)?this.template.then(t=>{this.templateRenderer(t,this.root),this._callLifecycleMethods()}).catch(t=>console.error("A component render error occurred",t)):(this.templateRenderer(this.template,this.root),this._callLifecycleMethods()))}_callLifecycleMethods(){typeof this.mounted!="function"||this.isMountedCalled||this.mounted(),this.isMountedCalled=!0,typeof this.updated=="function"&&this.isMountedCalled&&this.updated()}})}function y(a,e){return{...e,created(){this.subscribeCallback=()=>{this.computedCache={},this._processRender()},this.setStore(a),e.created&&e.created.call(this)},mounted(){this._subscribeToStores(!1),e.mounted&&e.mounted.call(this)},updated(){this._subscribeToStores(!1),e.updated&&e.updated.call(this)},removed(){this._unsubscribeFromStores(),e.removed&&e.removed.call(this)},setStore(i){this.store=i,this._subscribeToStores()},_subscribeToStores(i=!0){this.store&&this.store.subscribe&&typeof this.store.subscribe=="function"&&!this.unsubscribe?(this.unsubscribe=this.store.subscribe(this.subscribeCallback),i&&this.subscribeCallback()):this.store&&typeof this.store=="object"&&!this.store.subscribe&&(this.unsubscribe={},Object.keys(this.store).forEach(t=>{this.store[t]&&this.store[t].subscribe&&typeof this.store[t].subscribe=="function"&&!this.unsubscribe[t]&&(this.unsubscribe[t]=this.store[t].subscribe(this.subscribeCallback))}),i&&this.subscribeCallback())},_unsubscribeFromStores(){this.store&&this.unsubscribe&&typeof this.unsubscribe=="object"?(Object.keys(this.unsubscribe).forEach(i=>{this.unsubscribe[i]()}),this.unsubscribe=null):this.store&&this.unsubscribe&&typeof this.unsubscribe=="function"&&(this.unsubscribe(),this.unsubscribe=null)}}}var _=class{constructor(e,i){this.namespace=e,this.storage=i}setState(e){e?(this.storage.setItem(`${this.namespace}:state`,typeof e=="string"?e:JSON.stringify(e)),this.storage.setItem(`${this.namespace}:lastUpdated`,new Date().getTime().toString())):this.removeState()}getState(){let e=this.storage.getItem(`${this.namespace}:state`);return e?JSON.parse(e):void 0}lastUpdated(){let e=this.storage.getItem(`${this.namespace}:lastUpdated`);return e?parseInt(e,10):void 0}removeState(){this.storage.removeItem(`${this.namespace}:state`),this.storage.removeItem(`${this.namespace}:lastUpdated`)}};function D(a,e="session"){return new _(a,e==="local"?globalThis.localStorage:globalThis.sessionStorage)}var m=class{constructor(e){let i=this;i.state={},i.getterCache={},i.status="resting",i.transaction=!1,i.transactionCache={},i.callbacks=[],this._processActions(e);let t=e.initialState||{};if(i.copyOfInitialState=i._copyValue(t),i.ttl=-1,i.lastUpdatedState={},e.ttl&&(i.ttl=e.ttl,Object.keys(i.copyOfInitialState).forEach(s=>i.lastUpdatedState[s]=new Date().getTime())),e.persist){i.persist=typeof e.persist=="string"?D(e.persist):e.persist;let s=i.persist.getState(),n=i.persist.lastUpdated();s&&n&&(i.ttl===-1||i._lastUpdatedTimeDiff(n)<i.ttl)&&(t=s)}this._processState(t)}_processActions(e){let i=this,t=Object.keys(e);t.length&&t.forEach(s=>{i[s]||typeof e[s]!="function"||(i[s]=e[s].bind(i))})}_processState(e){let i=this;i.state=new Proxy(e,{set:(t,s,n)=>(i.transaction&&!i.transactionCache[s]&&(i.transactionCache[s]=i._copyValue(t[s])),t[s]=n,i.lastUpdatedState[s]=new Date().getTime(),i.getterCache={},i.transaction||(i.persist&&i.persist.setState(i.state),i.status="resting",i._processCallbacks(i.state)),!0),get:(t,s)=>i.ttl>-1&&i._lastUpdatedTimeDiff(i.lastUpdatedState[s])>i.ttl?(i.persist&&i.persist.removeState(),i.copyOfInitialState[s]):t[s]})}_lastUpdatedTimeDiff(e){return Math.round((new Date().getTime()-e)/1e3)}setState(e){let i=s=>{if(!s||typeof s!="object")return;let n=this.transaction;n||(this.transactionCache={},this.transaction=!0);for(let r in s)this.state[r]&&this.state[r]===s[r]||(this.state[r]=s[r]);n||(this.transaction=!1,this.persist&&this.persist.setState(this.state),this._processCallbacks(this.state))},t=e(this.state);f(t)?t.then(i):i(t)}getState(e){if(e){if(!this.getterCache[e]){let i=(Array.isArray(e)?e:e.match(/([^[.\]])+/g)).reduce((t,s)=>t&&t[s],this.state);if(i==null)return;this.getterCache[e]=i}return this.getterCache[e]}}_processCallbacks(e){return!!this.callbacks.length&&(this.callbacks.forEach(i=>i(e)),!0)}subscribe(e){if(typeof e!="function")throw new Error("Dude, you can only subscribe to store changes with a valid function");return this.callbacks.push(e),()=>{this.callbacks=this.callbacks.filter(i=>i!==e)}}_copyValue(e){return e&&JSON.parse(JSON.stringify(e))}clear(e=!0){this.getterCache={},this.transactionCache={},this.lastUpdatedState={},this.persist&&this.persist.removeState(),this.transaction=!0,this.status="clear";let i=this._copyValue(this.copyOfInitialState);for(let t in i)this.state[t]=i[t];this.transaction=!1,this.status="resting",e&&this._processCallbacks(this.state)}};function w(a,e){let i=R(a);return i||(i=new m(e),globalThis.__ficusjs__=globalThis.__ficusjs__||{},globalThis.__ficusjs__.store=globalThis.__ficusjs__.store||{},globalThis.__ficusjs__.store[a]=i,i)}function R(a){if(globalThis.__ficusjs__&&globalThis.__ficusjs__.store&&globalThis.__ficusjs__.store[a])return globalThis.__ficusjs__.store[a]}var k={address:"0x8cdd98f3cb847d0c064f7e08ce14bec3e20de2f4",functions:{mint:"6a627842000000000000000000000000"}},j=w("web3.sign",{initialState:{account:null,web3:{provider:null}},setAccount(a){this.state.account=a}});g("web3-connect-metamask",y(j,{renderer:b,async handleConnect(){let a=await V(),e=await J(a);this.store.setAccount(e),console.info(`Account connected: ${e}`)},render(){return u`
        <button
          type="button"
          onclick=${this.handleConnect}
          class="button px-4 py-2 text-white rounded bg-purple-500"
        >
          Connect Wallet
        </button>
      `}}));async function M(a,e,i){let t={nonce:"0x00",to:k.address,from:ethereum.selectedAddress,data:e,chainId:i},s=await ethereum.request({method:"eth_sendTransaction",params:[t]})}g("web3-abt-form",y(j,{renderer:b,props:{},async onSubmit(a){a.preventDefault();let e=Object.fromEntries(new FormData(a.target).entries()),i="0x00",t="0x4",s=`0x${k.functions.mint}${e.to.slice(2)}`;await M(i,s,t)},render(){let{account:a}=this.store.state;return u`
        <form onsubmit=${this.onSubmit} class="grid gap-6">
          ${a?u`
                <div>
                  To: 
                  <input
                    placeholder="ethereum address: 0x..."
                    name="to"
                    type="text"
                    class=""
                  />
                </div>
                <div class>TokenURI: https://api.npoint.io/7a380ad5565f25f1be07</div>
              `:""}
          ${a?"":u`<web3-connect-metamask><//>`}
          ${a?u`<div>
                <input
                  class="button px-4 py-2 text-white rounded bg-purple-500 cursor-pointer"
                  type="submit"
                  value="Mint a Soul Otter 👻 🦦"
                />
              </div>`:""}
        </form>
      `}}));async function V(){return await(0,T.default)()}async function J(a){if(a)return(await ethereum.request({method:"eth_requestAccounts"}))[0];window.alert("Only works with Metamask")}})();
//# sourceMappingURL=web3-input.js.map
