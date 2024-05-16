(()=>{var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var o in s)e.o(s,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var o=s.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p=window.wcpayAssets.url,(()=>{"use strict";const t=window.wp.data,s=window.wp.hooks,o=window.lodash,n="wc/store/cart",a=e=>new Promise((t=>{setTimeout(t,e)})),i=e=>"undefined"!=typeof wcpayConfig?wcpayConfig[e]:r(e),r=e=>{let t=null;if("undefined"!=typeof wcpay_upe_config)t=wcpay_upe_config;else{if("object"!=typeof wc||void 0===wc.wcSettings)return null;t=wc.wcSettings.getSetting("woocommerce_payments_data")||{}}return t[e]||null};function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2?arguments[2]:void 0;for(const o in e){const n=e[o],a=t?t+"["+o+"]":o;"string"==typeof n||"number"==typeof n?s.append(a,n):"object"==typeof n&&c(n,a,s)}return s}async function d(e,t,s){const o=c(t,"",new FormData),n=await fetch(e,{method:"POST",body:o,...s});return await n.json()}const l=e=>"object"==typeof wcpayPaymentRequestParams&&wcpayPaymentRequestParams.hasOwnProperty(e)?wcpayPaymentRequestParams[e]:null,u=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"wcpay_";return e.toString().replace("%%endpoint%%",s+t)},y=window.wp.element,h=window.React,p=window.wp.i18n;window.wp.domReady;const w=()=>{return e=void 0,t=void 0,o=function*(){var e,t,s;let o=(()=>{const e=document.cookie.split(";");for(let t=0;t<e.length;t++){let s=e[t];for(;" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf("tk_ai="))return s.substring(6,s.length)}})();if(o){const e={_ut:"anon",_ui:o};return JSON.stringify(e)}const n=null!==(e=i("platformTrackerNonce"))&&void 0!==e?e:null===(t=l("nonce"))||void 0===t?void 0:t.platform_tracker,a=null!==(s=i("ajaxUrl"))&&void 0!==s?s:l("ajax_url"),r=new FormData;r.append("tracksNonce",n),r.append("action","get_identity");try{const e=yield fetch(a,{method:"post",body:r});if(!e.ok)return;const t=yield e.json();return t.success&&t.data&&t.data._ui&&t.data._ut?JSON.stringify(t.data):void 0}catch(e){return}},new((s=void 0)||(s=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function r(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,r)}c((o=o.apply(e,t||[])).next())}));var e,t,s,o};function m(e){window.WooPayConnect||(window.WooPayConnect={}),window.WooPayConnect.iframeInjectedState=e}const g=()=>{const e=(0,h.useRef)(),[t,s]=(0,h.useState)("");return(0,h.useEffect)((()=>{(async()=>{const e=i("testMode"),t=i("woopayHost"),o=new URLSearchParams({testMode:e,source_url:window.location.href}),n=await w();n&&o.append("tracksUserIdentity",n),s(`${t}/connect/?${o.toString()}`)})()}),[]),(0,h.useEffect)((()=>{if(!e.current)return;const t=e.current;t.addEventListener("load",(()=>{m(2),window.dispatchEvent(new MessageEvent("message",{source:window,origin:i("woopayHost"),data:{action:"get_iframe_post_message_success",value:e=>t.contentWindow.postMessage(e,i("woopayHost"))}}))}))}),[t]),(0,y.createElement)("iframe",{ref:e,id:"woopay-connect-iframe",src:t,style:{height:0,width:0,border:"none",margin:0,padding:0,overflow:"hidden",display:"block",visibility:"hidden",position:"fixed",pointerEvents:"none",userSelect:"none"},title:(0,p.__)("WooPay Connect Direct Checkout","woocommerce-payments")})},f=window.ReactDOM;var _=e.n(f);const P=class{iframePostMessage=null;listeners={};constructor(){this.listeners={getIframePostMessageCallback:()=>{}},this.removeMessageListener=this.attachMessageListener(),this.injectWooPayConnectIframe()}attachMessageListener(){const e=e=>{i("woopayHost").startsWith(e.origin)&&this.callbackFn(e.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}}detachMessageListener(){"function"==typeof this.removeMessageListener&&this.removeMessageListener()}injectWooPayConnectIframe(){const e=window?.WooPayConnect?.iframeInjectedState||0;if(2===e){const e=document.querySelector("#woopay-connect-iframe");return void(e&&(this.iframePostMessage=Promise.resolve((t=>{e.contentWindow.postMessage(t,i("woopayHost"))}))))}if(1===e)return void(this.iframePostMessage=new Promise((e=>{this.listeners.getIframePostMessageCallback=e})));m(1);const t=document.createElement("div");t.style.visibility="hidden",t.style.position="fixed",t.style.height="0",t.style.width="0",t.style.bottom="0",t.style.right="0",t.id="woopay-connect-iframe-container",document.body.appendChild(t);const s=this;this.iframePostMessage=new Promise((e=>{s.listeners.getIframePostMessageCallback=e})),_().render((0,y.createElement)(g,null),t)}injectTemporaryWooPayConnectIframe(){let e;const t=new Promise((t=>{e=t})),s=document.createElement("iframe");return s.id="temp-woopay-connect-iframe",s.src=i("woopayHost")+"/connect/",s.height=0,s.width=0,s.border="none",s.margin=0,s.padding=0,s.overflow="hidden",s.display="block",s.visibility="hidden",s.position="fixed",s.pointerEvents="none",s.userSelect="none",s.addEventListener("load",(()=>{e((e=>s.contentWindow.postMessage(e,i("woopayHost"))))})),document.body.appendChild(s),{resolvePostMessagePromise:t,removeTemporaryIframe:()=>{document.body.removeChild(s)}}}async sendMessageAndListenWith(e,t){const s=new Promise((e=>{this.listeners[t]=e}));return(await this.iframePostMessage)(e),await s}callbackFn(e){"get_iframe_post_message_success"===e.action&&this.listeners.getIframePostMessageCallback(e.value)}},C=class extends P{constructor(){super(),this.listeners={...this.listeners,getIsUserLoggedInCallback:()=>{}}}async isUserLoggedIn(){return await this.sendMessageAndListenWith({action:"getIsUserLoggedIn"},"getIsUserLoggedInCallback")}callbackFn(e){super.callbackFn(e),"get_is_user_logged_in_success"===e.action&&this.listeners.getIsUserLoggedInCallback(e.value)}},b=class extends P{constructor(){super(),this.listeners={...this.listeners,setRedirectSessionDataCallback:()=>{},setTempThirdPartyCookieCallback:()=>{},getIsThirdPartyCookiesEnabledCallback:()=>{},setPreemptiveSessionDataCallback:()=>{}}}async isWooPayThirdPartyCookiesEnabled(){const{resolvePostMessagePromise:e,removeTemporaryIframe:t}=this.injectTemporaryWooPayConnectIframe(),s=new Promise((e=>{this.listeners.setTempThirdPartyCookieCallback=e})),o=await e;if(o({action:"setTempThirdPartyCookie"}),!await s)return!1;const n=new Promise((e=>{this.listeners.getIsThirdPartyCookiesEnabledCallback=e}));o({action:"getIsThirdPartyCookiesEnabled"});const a=await n;return t(),a}async sendRedirectSessionDataToWooPay(e){return await super.sendMessageAndListenWith({action:"setRedirectSessionData",value:e},"setRedirectSessionDataCallback")}async setPreemptiveSessionData(e){return await super.sendMessageAndListenWith({action:"setPreemptiveSessionData",value:e},"setPreemptiveSessionDataCallback")}callbackFn(e){switch(super.callbackFn(e),e.action){case"set_redirect_session_data_success":this.listeners.setRedirectSessionDataCallback(e.value);break;case"set_redirect_session_data_error":this.listeners.setRedirectSessionDataCallback({is_error:!0});break;case"set_temp_third_party_cookie_success":this.listeners.setTempThirdPartyCookieCallback(e.value);break;case"get_is_third_party_cookies_enabled_success":this.listeners.getIsThirdPartyCookiesEnabledCallback(e.value);break;case"set_preemptive_session_data_success":this.listeners.setPreemptiveSessionDataCallback(e.value);break;case"set_preemptive_session_data_error":this.listeners.setPreemptiveSessionDataCallback({is_error:!0})}}},k=class{static userConnect;static sessionConnect;static encryptedSessionDataPromise;static redirectElements={CLASSIC_CART_PROCEED_BUTTON:".wc-proceed-to-checkout .checkout-button",BLOCKS_CART_PROCEED_BUTTON:".wp-block-woocommerce-proceed-to-checkout-block"};static init(){this.getSessionConnect()}static getUserConnect(){return this.userConnect||(this.userConnect=new C),this.userConnect}static getSessionConnect(){return this.sessionConnect||(this.sessionConnect=new b),this.sessionConnect}static teardown(){this.sessionConnect?.detachMessageListener(),this.userConnect?.detachMessageListener(),this.sessionConnect=null,this.userConnect=null}static isWooPayDirectCheckoutEnabled(){return i("isWooPayDirectCheckoutEnabled")}static async isUserLoggedIn(){return this.getUserConnect().isUserLoggedIn()}static async isWooPayThirdPartyCookiesEnabled(){return this.getSessionConnect().isWooPayThirdPartyCookiesEnabled()}static async getWooPayCheckoutUrl(){try{let e;if(e=this.isEncryptedSessionDataPrefetched()?await this.encryptedSessionDataPromise:await this.getEncryptedSessionData(),!this.isValidEncryptedSessionData(e))throw new Error("Could not retrieve encrypted session data from store.");const t=await this.getSessionConnect().sendRedirectSessionDataToWooPay(e);if(!t?.redirect_url)throw new Error("Could not retrieve WooPay checkout URL.");const{redirect_url:s}=t;if(!this.validateRedirectUrl(s,"platform_checkout_key"))throw new Error("Invalid WooPay session URL: "+s);return t.redirect_url}catch(e){throw new Error(e.message)}}static isValidEncryptedSessionData(e){return e&&e?.blog_id&&e?.data?.session&&e?.data?.iv&&e?.data?.hash}static async getWooPayMinimumSessionUrl(){const e=await this.getWooPayMinimumSesssionDataFromMerchant();if(!1===e?.success)throw new Error("Could not retrieve redirect data from merchant.");if(!this.isValidEncryptedSessionData(e))throw new Error("Invalid encrypted session data.");const{blog_id:t,data:{session:s,iv:o,hash:n}}=e,a=new URLSearchParams({checkout_redirect:1,blog_id:t,session:s,iv:o,hash:n});return i("woopayHost")+"/woopay/?"+a.toString()}static getCheckoutRedirectElements(){const e=[],t=t=>{const s=document.querySelector(t);s&&e.push(s)};return t(this.redirectElements.CLASSIC_CART_PROCEED_BUTTON),t(this.redirectElements.BLOCKS_CART_PROCEED_BUTTON),e}static getClassicProceedToCheckoutButton(){return document.querySelector(this.redirectElements.CLASSIC_CART_PROCEED_BUTTON)}static redirectToWooPay(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.forEach((e=>{const s={is_loading:!1};e.addEventListener("click",(async o=>{if(s.is_loading)return void o.preventDefault();let n;if(s.is_loading=!0,(e=>{const t=e.classList.contains("checkout-button"),s=e.parentElement?.classList?.contains("wc-proceed-to-checkout");return t&&s})(e)&&(e=>{const t=document.createElement("span");t.classList.add("wc-block-components-spinner"),t.style.position="relative",t.style.fontSize="unset",t.style.display="inline",t.style.lineHeight="0",t.style.margin="0",t.style.border="0",t.style.padding="0",e.innerHTML="&nbsp;",e.classList.remove("wc-forward"),e.appendChild(t)})(e),n="a"===e.tagName.toLowerCase()?e.href:e.querySelector("a")?.href,n){o.preventDefault();try{let e="";e=t?await this.getWooPayCheckoutUrl():await this.getWooPayMinimumSessionUrl(),this.teardown(),window.location.href=e}catch(e){console.warn(e),this.teardown(),window.location.href=n}}else this.teardown()}))}))}static async getEncryptedSessionData(){return d(u(i("wcAjaxUrl"),"get_woopay_session"),{_ajax_nonce:i("woopaySessionNonce")})}static async getWooPayMinimumSesssionDataFromMerchant(){return i("woopayMinimumSessionData")?i("woopayMinimumSessionData"):d(u(i("wcAjaxUrl"),"get_woopay_minimum_session_data"),{_ajax_nonce:i("woopaySessionNonce")})}static validateRedirectUrl(e,t){try{const s=new URL(e);return!(s.origin!==i("woopayHost")||!s.searchParams.has(t))}catch(e){return!1}}static maybePrefetchEncryptedSessionData(){const e=window?.wcpayWooPayDirectCheckout?.params?.is_product_page;void 0===e||e||(this.encryptedSessionDataPromise=new Promise((e=>{e(this.getEncryptedSessionData())})))}static setEncryptedSessionDataAsNotPrefetched(){this.encryptedSessionDataPromise=null}static isEncryptedSessionDataPrefetched(){return"function"==typeof this.encryptedSessionDataPromise?.then}},v=()=>{const e=document.cookie.split(";").find((e=>e.includes("skip_woopay")));if(!e)return!1;const t=e?.split("=");return"skip_woopay"===t[0].trim()&&"1"===t[1].trim()};let S=!1;window.addEventListener("load",(async()=>{if(!k.isWooPayDirectCheckoutEnabled()||v())return;k.init(),S=await k.isWooPayThirdPartyCookiesEnabled();const e=k.getCheckoutRedirectElements();S?await k.isUserLoggedIn()&&(k.maybePrefetchEncryptedSessionData(),k.redirectToWooPay(e,!0)):k.redirectToWooPay(e,!1)})),jQuery((e=>{e(document.body).on("updated_cart_totals",(async()=>{if(!k.isWooPayDirectCheckoutEnabled()||v())return;const e=k.getClassicProceedToCheckoutButton();S?await k.isUserLoggedIn()&&(k.maybePrefetchEncryptedSessionData(),k.redirectToWooPay([e])):k.redirectToWooPay([e],!0)}))}));const E=async()=>S&&await k.isUserLoggedIn(),D=(0,o.debounce)((async e=>{let{product:s}=e;if(!await E())return void k.setEncryptedSessionDataAsNotPrefetched();const o=(0,t.select)(n);(0,t.dispatch)(n).itemIsPendingQuantity(s.key,!0);let i=60;for(;o.isItemPendingQuantity(s.key)&&i>0;)i-=1,await a(100);i>0?k.maybePrefetchEncryptedSessionData():k.setEncryptedSessionDataAsNotPrefetched()}),400);(0,s.addAction)("experimental__woocommerce_blocks-cart-add-item","wcpay_woopay_direct_checkout",(async()=>{await E()?k.maybePrefetchEncryptedSessionData():k.setEncryptedSessionDataAsNotPrefetched()})),(0,s.addAction)("experimental__woocommerce_blocks-cart-set-item-quantity","wcpay_woopay_direct_checkout",D),(0,s.addAction)("experimental__woocommerce_blocks-cart-remove-item","wcpay_woopay_direct_checkout",(async e=>{let{product:s}=e;if(!await E())return void k.setEncryptedSessionDataAsNotPrefetched();const o=(0,t.select)(n);(0,t.dispatch)(n).itemIsPendingDelete(s.key,!0);let i=60;for(;o.isItemPendingDelete(s.key)&&i>0;)i-=1,await a(100);i>0?k.maybePrefetchEncryptedSessionData():k.setEncryptedSessionDataAsNotPrefetched()}))})()})();