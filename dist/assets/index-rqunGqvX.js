const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./home-feRqeTfL.js","./v-input-C66VGk2a.js","./v-input-BVf2o5WC.css","./home-1wJNqjMs.css","./register-CxThPBnG.js","./user-form-DyVPuaZA.js","./user-form-CEIbjOcV.css","./register-Cbs0WIjQ.css","./login-DiDRLaQS.js","./login-DcAWBrvL.css","./404-DVs6B5xA.js","./404-D5HUjuFv.css","./arrow-down-DV5MO5Wz.js","./runtime-tq9aMXk4.js","./enter-B8yrjItm.js","./esc-DaSdlEIo.js","./eye-FQPLFOMg.js","./info-f7v3t9JV.js","./keyboard-DeiZ7uon.js","./login-DpwWwMxK.js","./logo-B0dzovq0.js","./logout-khzyhxWT.js","./register-D9wzccOP.js","./vertical-dots-BhMVLjY-.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const AA="modulepreload",RA=function(t,e){return new URL(t,e).href},sm={},Ft=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=RA(u,s),u in sm)return;sm[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!s)for(let T=o.length-1;T>=0;T--){const A=o[T];if(A.href===u&&(!h||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":AA,h||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),h)return new Promise((T,A)=>{g.addEventListener("load",T),g.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Be={},ci=[],Vn=()=>{},SA=()=>!1,dc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_d=t=>t.startsWith("onUpdate:"),ot=Object.assign,yd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},CA=Object.prototype.hasOwnProperty,ke=(t,e)=>CA.call(t,e),ie=Array.isArray,ui=t=>la(t)==="[object Map]",Oi=t=>la(t)==="[object Set]",rm=t=>la(t)==="[object Date]",de=t=>typeof t=="function",Ye=t=>typeof t=="string",In=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Ay=t=>(xe(t)||de(t))&&de(t.then)&&de(t.catch),Ry=Object.prototype.toString,la=t=>Ry.call(t),bA=t=>la(t).slice(8,-1),Sy=t=>la(t)==="[object Object]",vd=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,To=gd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},PA=/-(\w)/g,dn=fc(t=>t.replace(PA,(e,n)=>n?n.toUpperCase():"")),kA=/\B([A-Z])/g,Vr=fc(t=>t.replace(kA,"-$1").toLowerCase()),pc=fc(t=>t.charAt(0).toUpperCase()+t.slice(1)),wu=fc(t=>t?`on${pc(t)}`:""),Bs=(t,e)=>!Object.is(t,e),al=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cy=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Al=t=>{const e=parseFloat(t);return isNaN(e)?t:e},NA=t=>{const e=Ye(t)?Number(t):NaN;return isNaN(e)?t:e};let im;const mc=()=>im||(im=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ed(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ye(s)?LA(s):Ed(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ye(t)||xe(t))return t}const OA=/;(?![^(]*\))/g,DA=/:([^]+)/,MA=/\/\*[^]*?\*\//g;function LA(t){const e={};return t.replace(MA,"").split(OA).forEach(n=>{if(n){const s=n.split(DA);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Di(t){let e="";if(Ye(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const s=Di(t[n]);s&&(e+=s+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",VA=gd(xA);function by(t){return!!t||t===""}function FA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=br(t[s],e[s]);return n}function br(t,e){if(t===e)return!0;let n=rm(t),s=rm(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=In(t),s=In(e),n||s)return t===e;if(n=ie(t),s=ie(e),n||s)return n&&s?FA(t,e):!1;if(n=xe(t),s=xe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!br(t[o],e[o]))return!1}}return String(t)===String(e)}function Td(t,e){return t.findIndex(n=>br(n,e))}const Py=t=>!!(t&&t.__v_isRef===!0),lh=t=>Ye(t)?t:t==null?"":ie(t)||xe(t)&&(t.toString===Ry||!de(t.toString))?Py(t)?lh(t.value):JSON.stringify(t,ky,2):String(t),ky=(t,e)=>Py(e)?ky(t,e.value):ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Au(s,i)+" =>"]=r,n),{})}:Oi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Au(n))}:In(e)?Au(e):xe(e)&&!ie(e)&&!Sy(e)?String(e):e,Au=(t,e="")=>{var n;return In(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class Ny{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Id(t){return new Ny(t)}function gc(){return Bt}function wd(t,e=!1){Bt&&Bt.cleanups.push(t)}let $e;const Ru=new WeakSet;class Oy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ru.has(this)&&(Ru.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||My(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,om(this),Ly(this);const e=$e,n=vn;$e=this,vn=!0;try{return this.fn()}finally{xy(this),$e=e,vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sd(e);this.deps=this.depsTail=void 0,om(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ru.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ch(this)&&this.run()}get dirty(){return ch(this)}}let Dy=0,Io,wo;function My(t,e=!1){if(t.flags|=8,e){t.next=wo,wo=t;return}t.next=Io,Io=t}function Ad(){Dy++}function Rd(){if(--Dy>0)return;if(wo){let e=wo;for(wo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Io;){let e=Io;for(Io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ly(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xy(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Sd(s),UA(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function ch(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Vy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Uo))return;t.globalVersion=Uo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ch(t)){t.flags&=-3;return}const n=$e,s=vn;$e=t,vn=!0;try{Ly(t);const r=t.fn(t._value);(e.version===0||Bs(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{$e=n,vn=s,xy(t),t.flags&=-3}}function Sd(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Sd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function UA(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let vn=!0;const Fy=[];function tr(){Fy.push(vn),vn=!1}function nr(){const t=Fy.pop();vn=t===void 0?!0:t}function om(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let Uo=0;class BA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!vn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new BA($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,Uy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=s)}return n}trigger(e){this.version++,Uo++,this.notify(e)}notify(e){Ad();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rd()}}}function Uy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Uy(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Rl=new WeakMap,Ar=Symbol(""),uh=Symbol(""),Bo=Symbol("");function Ct(t,e,n){if(vn&&$e){let s=Rl.get(t);s||Rl.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Cd),r.map=s,r.key=n),r.track()}}function ns(t,e,n,s,r,i){const o=Rl.get(t);if(!o){Uo++;return}const a=c=>{c&&c.trigger()};if(Ad(),e==="clear")o.forEach(a);else{const c=ie(t),u=c&&vd(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,m)=>{(m==="length"||m===Bo||!In(m)&&m>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Bo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Ar)),ui(t)&&a(o.get(uh)));break;case"delete":c||(a(o.get(Ar)),ui(t)&&a(o.get(uh)));break;case"set":ui(t)&&a(o.get(Ar));break}}Rd()}function $A(t,e){const n=Rl.get(t);return n&&n.get(e)}function Xr(t){const e=Ie(t);return e===t?e:(Ct(e,"iterate",Bo),ln(t)?e:e.map(bt))}function _c(t){return Ct(t=Ie(t),"iterate",Bo),t}const jA={__proto__:null,[Symbol.iterator](){return Su(this,Symbol.iterator,bt)},concat(...t){return Xr(this).concat(...t.map(e=>ie(e)?Xr(e):e))},entries(){return Su(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return Xn(this,"every",t,e,void 0,arguments)},filter(t,e){return Xn(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return Xn(this,"find",t,e,bt,arguments)},findIndex(t,e){return Xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xn(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return Xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Cu(this,"includes",t)},indexOf(...t){return Cu(this,"indexOf",t)},join(t){return Xr(this).join(t)},lastIndexOf(...t){return Cu(this,"lastIndexOf",t)},map(t,e){return Xn(this,"map",t,e,void 0,arguments)},pop(){return so(this,"pop")},push(...t){return so(this,"push",t)},reduce(t,...e){return am(this,"reduce",t,e)},reduceRight(t,...e){return am(this,"reduceRight",t,e)},shift(){return so(this,"shift")},some(t,e){return Xn(this,"some",t,e,void 0,arguments)},splice(...t){return so(this,"splice",t)},toReversed(){return Xr(this).toReversed()},toSorted(t){return Xr(this).toSorted(t)},toSpliced(...t){return Xr(this).toSpliced(...t)},unshift(...t){return so(this,"unshift",t)},values(){return Su(this,"values",bt)}};function Su(t,e,n){const s=_c(t),r=s[e]();return s!==t&&!ln(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const qA=Array.prototype;function Xn(t,e,n,s,r,i){const o=_c(t),a=o!==t&&!ln(t),c=o[e];if(c!==qA[e]){const d=c.apply(t,i);return a?bt(d):d}let u=n;o!==t&&(a?u=function(d,m){return n.call(this,bt(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const h=c.call(o,u,s);return a&&r?r(h):h}function am(t,e,n,s){const r=_c(t);let i=n;return r!==t&&(ln(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,bt(a),c,t)}),r[e](i,...s)}function Cu(t,e,n){const s=Ie(t);Ct(s,"iterate",Bo);const r=s[e](...n);return(r===-1||r===!1)&&kd(n[0])?(n[0]=Ie(n[0]),s[e](...n)):r}function so(t,e,n=[]){tr(),Ad();const s=Ie(t)[e].apply(t,n);return Rd(),nr(),s}const WA=gd("__proto__,__v_isRef,__isVue"),By=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(In));function HA(t){In(t)||(t=String(t));const e=Ie(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class $y{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?tR:Hy:i?Wy:qy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ie(e);if(!r){let c;if(o&&(c=jA[n]))return c;if(n==="hasOwnProperty")return HA}const a=Reflect.get(e,n,Ke(e)?e:s);return(In(n)?By.has(n):WA(n))||(r||Ct(e,"get",n),i)?a:Ke(a)?o&&vd(n)?a:a.value:xe(a)?r?Ky(a):ca(a):a}}class jy extends $y{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Pr(i);if(!ln(s)&&!Pr(s)&&(i=Ie(i),s=Ie(s)),!ie(e)&&Ke(i)&&!Ke(s))return c?!1:(i.value=s,!0)}const o=ie(e)&&vd(n)?Number(n)<e.length:ke(e,n),a=Reflect.set(e,n,s,Ke(e)?e:r);return e===Ie(r)&&(o?Bs(s,i)&&ns(e,"set",n,s):ns(e,"add",n,s)),a}deleteProperty(e,n){const s=ke(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ns(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!In(n)||!By.has(n))&&Ct(e,"has",n),s}ownKeys(e){return Ct(e,"iterate",ie(e)?"length":Ar),Reflect.ownKeys(e)}}class zA extends $y{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const KA=new jy,GA=new zA,QA=new jy(!0);const hh=t=>t,qa=t=>Reflect.getPrototypeOf(t);function YA(t,e,n){return function(...s){const r=this.__v_raw,i=Ie(r),o=ui(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),h=n?hh:e?dh:bt;return!e&&Ct(i,"iterate",c?uh:Ar),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:a?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function Wa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function XA(t,e){const n={get(r){const i=this.__v_raw,o=Ie(i),a=Ie(r);t||(Bs(r,a)&&Ct(o,"get",r),Ct(o,"get",a));const{has:c}=qa(o),u=e?hh:t?dh:bt;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ct(Ie(r),"iterate",Ar),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Ie(i),a=Ie(r);return t||(Bs(r,a)&&Ct(o,"has",r),Ct(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Ie(a),u=e?hh:t?dh:bt;return!t&&Ct(c,"iterate",Ar),a.forEach((h,d)=>r.call(i,u(h),u(d),o))}};return ot(n,t?{add:Wa("add"),set:Wa("set"),delete:Wa("delete"),clear:Wa("clear")}:{add(r){!e&&!ln(r)&&!Pr(r)&&(r=Ie(r));const i=Ie(this);return qa(i).has.call(i,r)||(i.add(r),ns(i,"add",r,r)),this},set(r,i){!e&&!ln(i)&&!Pr(i)&&(i=Ie(i));const o=Ie(this),{has:a,get:c}=qa(o);let u=a.call(o,r);u||(r=Ie(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Bs(i,h)&&ns(o,"set",r,i):ns(o,"add",r,i),this},delete(r){const i=Ie(this),{has:o,get:a}=qa(i);let c=o.call(i,r);c||(r=Ie(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&ns(i,"delete",r,void 0),u},clear(){const r=Ie(this),i=r.size!==0,o=r.clear();return i&&ns(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=YA(r,t,e)}),n}function bd(t,e){const n=XA(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ke(n,r)&&r in s?n:s,r,i)}const JA={get:bd(!1,!1)},ZA={get:bd(!1,!0)},eR={get:bd(!0,!1)};const qy=new WeakMap,Wy=new WeakMap,Hy=new WeakMap,tR=new WeakMap;function nR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sR(t){return t.__v_skip||!Object.isExtensible(t)?0:nR(bA(t))}function ca(t){return Pr(t)?t:Pd(t,!1,KA,JA,qy)}function zy(t){return Pd(t,!1,QA,ZA,Wy)}function Ky(t){return Pd(t,!0,GA,eR,Hy)}function Pd(t,e,n,s,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=sR(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function us(t){return Pr(t)?us(t.__v_raw):!!(t&&t.__v_isReactive)}function Pr(t){return!!(t&&t.__v_isReadonly)}function ln(t){return!!(t&&t.__v_isShallow)}function kd(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Nd(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&Cy(t,"__v_skip",!0),t}const bt=t=>xe(t)?ca(t):t,dh=t=>xe(t)?Ky(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function Dt(t){return Qy(t,!1)}function Gy(t){return Qy(t,!0)}function Qy(t,e){return Ke(t)?t:new rR(t,e)}class rR{constructor(e,n){this.dep=new Cd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||ln(e)||Pr(e);e=s?e:Ie(e),Bs(e,n)&&(this._rawValue=e,this._value=s?e:bt(e),this.dep.trigger())}}function hs(t){return Ke(t)?t.value:t}function es(t){return de(t)?t():hs(t)}const iR={get:(t,e,n)=>e==="__v_raw"?t:hs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Yy(t){return us(t)?t:new Proxy(t,iR)}function oR(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=Xy(t,n);return e}class aR{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $A(Ie(this._object),this._key)}}class lR{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function cR(t,e,n){return Ke(t)?t:de(t)?new lR(t):xe(t)&&arguments.length>1?Xy(t,e,n):Dt(t)}function Xy(t,e,n){const s=t[e];return Ke(s)?s:new aR(t,e,n)}class uR{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Cd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Uo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return My(this,!0),!0}get value(){const e=this.dep.track();return Vy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hR(t,e,n=!1){let s,r;return de(t)?s=t:(s=t.get,r=t.set),new uR(s,r,n)}const Ha={},Sl=new WeakMap;let yr;function dR(t,e=!1,n=yr){if(n){let s=Sl.get(n);s||Sl.set(n,s=[]),s.push(t)}}function fR(t,e,n=Be){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,u=L=>r?L:ln(L)||r===!1||r===0?ss(L,1):ss(L);let h,d,m,g,T=!1,A=!1;if(Ke(t)?(d=()=>t.value,T=ln(t)):us(t)?(d=()=>u(t),T=!0):ie(t)?(A=!0,T=t.some(L=>us(L)||ln(L)),d=()=>t.map(L=>{if(Ke(L))return L.value;if(us(L))return u(L);if(de(L))return c?c(L,2):L()})):de(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){tr();try{m()}finally{nr()}}const L=yr;yr=h;try{return c?c(t,3,[g]):t(g)}finally{yr=L}}:d=Vn,e&&r){const L=d,K=r===!0?1/0:r;d=()=>ss(L(),K)}const P=gc(),O=()=>{h.stop(),P&&P.active&&yd(P.effects,h)};if(i&&e){const L=e;e=(...K)=>{L(...K),O()}}let x=A?new Array(t.length).fill(Ha):Ha;const M=L=>{if(!(!(h.flags&1)||!h.dirty&&!L))if(e){const K=h.run();if(r||T||(A?K.some((J,S)=>Bs(J,x[S])):Bs(K,x))){m&&m();const J=yr;yr=h;try{const S=[K,x===Ha?void 0:A&&x[0]===Ha?[]:x,g];c?c(e,3,S):e(...S),x=K}finally{yr=J}}}else h.run()};return a&&a(M),h=new Oy(d),h.scheduler=o?()=>o(M,!1):M,g=L=>dR(L,!1,h),m=h.onStop=()=>{const L=Sl.get(h);if(L){if(c)c(L,4);else for(const K of L)K();Sl.delete(h)}},e?s?M(!0):x=h.run():o?o(M.bind(null,!0),!0):h.run(),O.pause=h.pause.bind(h),O.resume=h.resume.bind(h),O.stop=O,O}function ss(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))ss(t.value,e,n);else if(ie(t))for(let s=0;s<t.length;s++)ss(t[s],e,n);else if(Oi(t)||ui(t))t.forEach(s=>{ss(s,e,n)});else if(Sy(t)){for(const s in t)ss(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ss(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ua(t,e,n,s){try{return s?t(...s):t()}catch(r){yc(r,e,n)}}function wn(t,e,n,s){if(de(t)){const r=ua(t,e,n,s);return r&&Ay(r)&&r.catch(i=>{yc(i,e,n)}),r}if(ie(t)){const r=[];for(let i=0;i<t.length;i++)r.push(wn(t[i],e,n,s));return r}}function yc(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Be;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}a=a.parent}if(i){tr(),ua(i,null,10,[t,c,u]),nr();return}}pR(t,n,r,s,o)}function pR(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const $t=[];let Nn=-1;const hi=[];let Ns=null,ei=0;const Jy=Promise.resolve();let Cl=null;function vc(t){const e=Cl||Jy;return t?e.then(this?t.bind(this):t):e}function mR(t){let e=Nn+1,n=$t.length;for(;e<n;){const s=e+n>>>1,r=$t[s],i=$o(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Od(t){if(!(t.flags&1)){const e=$o(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=$o(n)?$t.push(t):$t.splice(mR(e),0,t),t.flags|=1,Zy()}}function Zy(){Cl||(Cl=Jy.then(tv))}function gR(t){ie(t)?hi.push(...t):Ns&&t.id===-1?Ns.splice(ei+1,0,t):t.flags&1||(hi.push(t),t.flags|=1),Zy()}function lm(t,e,n=Nn+1){for(;n<$t.length;n++){const s=$t[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;$t.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ev(t){if(hi.length){const e=[...new Set(hi)].sort((n,s)=>$o(n)-$o(s));if(hi.length=0,Ns){Ns.push(...e);return}for(Ns=e,ei=0;ei<Ns.length;ei++){const n=Ns[ei];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ns=null,ei=0}}const $o=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tv(t){try{for(Nn=0;Nn<$t.length;Nn++){const e=$t[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ua(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<$t.length;Nn++){const e=$t[Nn];e&&(e.flags&=-2)}Nn=-1,$t.length=0,ev(),Cl=null,($t.length||hi.length)&&tv()}}let lt=null,nv=null;function bl(t){const e=lt;return lt=t,nv=t&&t.type.__scopeId||null,e}function is(t,e=lt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Tm(-1);const i=bl(e);let o;try{o=t(...r)}finally{bl(i),s._d&&Tm(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function PF(t,e){if(lt===null)return t;const n=Rc(lt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Be]=e[r];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&ss(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function fr(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(tr(),wn(c,n,8,[t.el,a,t,e]),nr())}}const sv=Symbol("_vte"),rv=t=>t.__isTeleport,Ao=t=>t&&(t.disabled||t.disabled===""),cm=t=>t&&(t.defer||t.defer===""),um=t=>typeof SVGElement<"u"&&t instanceof SVGElement,hm=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,fh=(t,e)=>{const n=t&&t.to;return Ye(n)?e?e(n):null:n},iv={name:"Teleport",__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,u){const{mc:h,pc:d,pbc:m,o:{insert:g,querySelector:T,createText:A,createComment:P}}=u,O=Ao(e.props);let{shapeFlag:x,children:M,dynamicChildren:L}=e;if(t==null){const K=e.el=A(""),J=e.anchor=A("");g(K,n,s),g(J,n,s);const S=(y,w)=>{x&16&&(r&&r.isCE&&(r.ce._teleportTarget=y),h(M,y,w,r,i,o,a,c))},v=()=>{const y=e.target=fh(e.props,T),w=av(y,e,A,g);y&&(o!=="svg"&&um(y)?o="svg":o!=="mathml"&&hm(y)&&(o="mathml"),O||(S(y,w),ll(e,!1)))};O&&(S(n,J),ll(e,!0)),cm(e.props)?Ut(()=>{v(),e.el.__isMounted=!0},i):v()}else{if(cm(e.props)&&!t.el.__isMounted){Ut(()=>{iv.process(t,e,n,s,r,i,o,a,c,u),delete t.el.__isMounted},i);return}e.el=t.el,e.targetStart=t.targetStart;const K=e.anchor=t.anchor,J=e.target=t.target,S=e.targetAnchor=t.targetAnchor,v=Ao(t.props),y=v?n:J,w=v?K:S;if(o==="svg"||um(J)?o="svg":(o==="mathml"||hm(J))&&(o="mathml"),L?(m(t.dynamicChildren,L,y,r,i,o,a),xd(t,e,!0)):c||d(t,e,y,w,r,i,o,a,!1),O)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):za(e,n,K,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const b=e.target=fh(e.props,T);b&&za(e,b,null,u,0)}else v&&za(e,J,S,u,1);ll(e,O)}},remove(t,e,n,{um:s,o:{remove:r}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:h,target:d,props:m}=t;if(d&&(r(u),r(h)),i&&r(c),o&16){const g=i||!Ao(m);for(let T=0;T<a.length;T++){const A=a[T];s(A,e,n,g,!!A.dynamicChildren)}}},move:za,hydrate:_R};function za(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:h}=t,d=i===2;if(d&&s(o,e,n),(!d||Ao(h))&&c&16)for(let m=0;m<u.length;m++)r(u[m],e,n,2);d&&s(a,e,n)}function _R(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:h}},d){const m=e.target=fh(e.props,c);if(m){const g=Ao(e.props),T=m._lpa||m.firstChild;if(e.shapeFlag&16)if(g)e.anchor=d(o(t),e,a(t),n,s,r,i),e.targetStart=T,e.targetAnchor=T&&o(T);else{e.anchor=o(t);let A=T;for(;A;){if(A&&A.nodeType===8){if(A.data==="teleport start anchor")e.targetStart=A;else if(A.data==="teleport anchor"){e.targetAnchor=A,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}A=o(A)}e.targetAnchor||av(m,e,h,u),d(T&&o(T),e,m,n,s,r,i)}ll(e,g)}return e.anchor&&o(e.anchor)}const ov=iv;function ll(t,e){const n=t.ctx;if(n&&n.ut){let s,r;for(e?(s=t.el,r=t.anchor):(s=t.targetStart,r=t.targetAnchor);s&&s!==r;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function av(t,e,n,s){const r=e.targetStart=n(""),i=e.targetAnchor=n("");return r[sv]=i,t&&(s(r,t),s(i,t)),i}const Os=Symbol("_leaveCb"),Ka=Symbol("_enterCb");function yR(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ic(()=>{t.isMounted=!0}),mv(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],lv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},cv=t=>{const e=t.subTree;return e.component?cv(e.component):e},vR={name:"BaseTransition",props:lv,setup(t,{slots:e}){const n=Fd(),s=yR();return()=>{const r=e.default&&dv(e.default(),!0);if(!r||!r.length)return;const i=uv(r),o=Ie(t),{mode:a}=o;if(s.isLeaving)return bu(i);const c=dm(i);if(!c)return bu(i);let u=ph(c,o,s,n,d=>u=d);c.type!==jt&&jo(c,u);let h=n.subTree&&dm(n.subTree);if(h&&h.type!==jt&&!Tr(c,h)&&cv(n).type!==jt){let d=ph(h,o,s,n);if(jo(h,d),a==="out-in"&&c.type!==jt)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},bu(i);a==="in-out"&&c.type!==jt?d.delayLeave=(m,g,T)=>{const A=hv(s,h);A[String(h.key)]=h,m[Os]=()=>{g(),m[Os]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{T(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function uv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==jt){e=n;break}}return e}const ER=vR;function hv(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ph(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:T,onLeaveCancelled:A,onBeforeAppear:P,onAppear:O,onAfterAppear:x,onAppearCancelled:M}=e,L=String(t.key),K=hv(n,t),J=(y,w)=>{y&&wn(y,s,9,w)},S=(y,w)=>{const b=w[1];J(y,w),ie(y)?y.every(C=>C.length<=1)&&b():y.length<=1&&b()},v={mode:o,persisted:a,beforeEnter(y){let w=c;if(!n.isMounted)if(i)w=P||c;else return;y[Os]&&y[Os](!0);const b=K[L];b&&Tr(t,b)&&b.el[Os]&&b.el[Os](),J(w,[y])},enter(y){let w=u,b=h,C=d;if(!n.isMounted)if(i)w=O||u,b=x||h,C=M||d;else return;let I=!1;const be=y[Ka]=tt=>{I||(I=!0,tt?J(C,[y]):J(b,[y]),v.delayedLeave&&v.delayedLeave(),y[Ka]=void 0)};w?S(w,[y,be]):be()},leave(y,w){const b=String(t.key);if(y[Ka]&&y[Ka](!0),n.isUnmounting)return w();J(m,[y]);let C=!1;const I=y[Os]=be=>{C||(C=!0,w(),be?J(A,[y]):J(T,[y]),y[Os]=void 0,K[b]===t&&delete K[b])};K[b]=t,g?S(g,[y,I]):I()},clone(y){const w=ph(y,e,n,s,r);return r&&r(w),w}};return v}function bu(t){if(Ec(t))return t=zs(t),t.children=null,t}function dm(t){if(!Ec(t))return rv(t.type)&&t.children?uv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function jo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dv(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===zt?(o.patchFlag&128&&r++,s=s.concat(dv(o.children,e,a))):(e||o.type!==jt)&&s.push(a!=null?zs(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function zn(t,e){return de(t)?ot({name:t.name},e,{setup:t}):t}function fv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Pl(t,e,n,s,r=!1){if(ie(t)){t.forEach((T,A)=>Pl(T,e&&(ie(e)?e[A]:e),n,s,r));return}if(di(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Pl(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Rc(s.component):s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===Be?a.refs={}:a.refs,d=a.setupState,m=Ie(d),g=d===Be?()=>!1:T=>ke(m,T);if(u!=null&&u!==c&&(Ye(u)?(h[u]=null,g(u)&&(d[u]=null)):Ke(u)&&(u.value=null)),de(c))ua(c,a,12,[o,h]);else{const T=Ye(c),A=Ke(c);if(T||A){const P=()=>{if(t.f){const O=T?g(c)?d[c]:h[c]:c.value;r?ie(O)&&yd(O,i):ie(O)?O.includes(i)||O.push(i):T?(h[c]=[i],g(c)&&(d[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else T?(h[c]=o,g(c)&&(d[c]=o)):A&&(c.value=o,t.k&&(h[t.k]=o))};o?(P.id=-1,Ut(P,n)):P()}}}mc().requestIdleCallback;mc().cancelIdleCallback;const di=t=>!!t.type.__asyncLoader,Ec=t=>t.type.__isKeepAlive;function TR(t,e){pv(t,"a",e)}function IR(t,e){pv(t,"da",e)}function pv(t,e,n=ft){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Tc(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ec(r.parent.vnode)&&wR(s,e,n,r),r=r.parent}}function wR(t,e,n,s){const r=Tc(e,t,s,!0);Dd(()=>{yd(s[e],r)},n)}function Tc(t,e,n=ft,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{tr();const a=ha(n),c=wn(e,n,t,o);return a(),nr(),c});return s?r.unshift(i):r.push(i),i}}const Es=t=>(e,n=ft)=>{(!Ho||t==="sp")&&Tc(t,(...s)=>e(...s),n)},AR=Es("bm"),Ic=Es("m"),RR=Es("bu"),SR=Es("u"),mv=Es("bum"),Dd=Es("um"),gv=Es("sp"),CR=Es("rtg"),bR=Es("rtc");function PR(t,e=ft){Tc("ec",t,e)}const _v="components";function ds(t,e){return vv(_v,t,!0,e)||t}const yv=Symbol.for("v-ndc");function kR(t){return Ye(t)?vv(_v,t,!1)||t:t||yv}function vv(t,e,n=!0,s=!1){const r=lt||ft;if(r){const i=r.type;{const a=y0(i,!1);if(a&&(a===e||a===dn(e)||a===pc(dn(e))))return i}const o=fm(r[t]||i[t],e)||fm(r.appContext[t],e);return!o&&s?i:o}}function fm(t,e){return t&&(t[e]||t[dn(e)]||t[pc(dn(e))])}function kF(t,e,n,s){let r;const i=n,o=ie(t);if(o||Ye(t)){const a=o&&us(t);let c=!1;a&&(c=!ln(t),t=_c(t)),r=new Array(t.length);for(let u=0,h=t.length;u<h;u++)r[u]=e(c?bt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}function NF(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(ie(s))for(let r=0;r<s.length;r++)t[s[r].name]=s[r].fn;else s&&(t[s.name]=s.key?(...r)=>{const i=s.fn(...r);return i&&(i.key=s.key),i}:s.fn)}return t}function Ev(t,e,n={},s,r){if(lt.ce||lt.parent&&di(lt.parent)&&lt.parent.ce)return e!=="default"&&(n.name=e),et(),cn(zt,null,[Ne("slot",n,s)],64);let i=t[e];i&&i._c&&(i._d=!1),et();const o=i&&Tv(i(n)),a=n.key||o&&o.key,c=cn(zt,{key:(a&&!In(a)?a:`_${e}`)+(!o&&s?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Tv(t){return t.some(e=>Wo(e)?!(e.type===jt||e.type===zt&&!Tv(e.children)):!0)?t:null}const mh=t=>t?Bv(t)?Rc(t):mh(t.parent):null,Ro=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mh(t.parent),$root:t=>mh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Md(t),$forceUpdate:t=>t.f||(t.f=()=>{Od(t.update)}),$nextTick:t=>t.n||(t.n=vc.bind(t.proxy)),$watch:t=>JR.bind(t)}),Pu=(t,e)=>t!==Be&&!t.__isScriptSetup&&ke(t,e),NR={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Pu(s,e))return o[e]=1,s[e];if(r!==Be&&ke(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Be&&ke(n,e))return o[e]=4,n[e];gh&&(o[e]=0)}}const h=Ro[e];let d,m;if(h)return e==="$attrs"&&Ct(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Be&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Pu(r,e)?(r[e]=n,!0):s!==Be&&ke(s,e)?(s[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Be&&ke(t,o)||Pu(e,o)||(a=i[0])&&ke(a,o)||ke(s,o)||ke(Ro,o)||ke(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pm(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let gh=!0;function OR(t){const e=Md(t),n=t.proxy,s=t.ctx;gh=!1,e.beforeCreate&&mm(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:T,activated:A,deactivated:P,beforeDestroy:O,beforeUnmount:x,destroyed:M,unmounted:L,render:K,renderTracked:J,renderTriggered:S,errorCaptured:v,serverPrefetch:y,expose:w,inheritAttrs:b,components:C,directives:I,filters:be}=e;if(u&&DR(u,s,null),o)for(const ue in o){const ge=o[ue];de(ge)&&(s[ue]=ge.bind(n))}if(r){const ue=r.call(n,n);xe(ue)&&(t.data=ca(ue))}if(gh=!0,i)for(const ue in i){const ge=i[ue],Qt=de(ge)?ge.bind(n,n):de(ge.get)?ge.get.bind(n,n):Vn,pn=!de(ge)&&de(ge.set)?ge.set.bind(n):Vn,nn=Ze({get:Qt,set:pn});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>nn.value,set:Ge=>nn.value=Ge})}if(a)for(const ue in a)Iv(a[ue],s,n,ue);if(c){const ue=de(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(ge=>{cl(ge,ue[ge])})}h&&mm(h,t,"c");function Me(ue,ge){ie(ge)?ge.forEach(Qt=>ue(Qt.bind(n))):ge&&ue(ge.bind(n))}if(Me(AR,d),Me(Ic,m),Me(RR,g),Me(SR,T),Me(TR,A),Me(IR,P),Me(PR,v),Me(bR,J),Me(CR,S),Me(mv,x),Me(Dd,L),Me(gv,y),ie(w))if(w.length){const ue=t.exposed||(t.exposed={});w.forEach(ge=>{Object.defineProperty(ue,ge,{get:()=>n[ge],set:Qt=>n[ge]=Qt})})}else t.exposed||(t.exposed={});K&&t.render===Vn&&(t.render=K),b!=null&&(t.inheritAttrs=b),C&&(t.components=C),I&&(t.directives=I),y&&fv(t)}function DR(t,e,n=Vn){ie(t)&&(t=_h(t));for(const s in t){const r=t[s];let i;xe(r)?"default"in r?i=Gt(r.from||s,r.default,!0):i=Gt(r.from||s):i=Gt(r),Ke(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function mm(t,e,n){wn(ie(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Iv(t,e,n,s){let r=s.includes(".")?Lv(n,s):()=>n[s];if(Ye(t)){const i=e[t];de(i)&&Sr(r,i)}else if(de(t))Sr(r,t.bind(n));else if(xe(t))if(ie(t))t.forEach(i=>Iv(i,e,n,s));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Sr(r,i,t)}}function Md(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>kl(c,u,o,!0)),kl(c,e,o)),xe(e)&&i.set(e,c),c}function kl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&kl(t,i,n,!0),r&&r.forEach(o=>kl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=MR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const MR={data:gm,props:_m,emits:_m,methods:uo,computed:uo,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:uo,directives:uo,watch:xR,provide:gm,inject:LR};function gm(t,e){return e?t?function(){return ot(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function LR(t,e){return uo(_h(t),_h(e))}function _h(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function uo(t,e){return t?ot(Object.create(null),t,e):e}function _m(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:ot(Object.create(null),pm(t),pm(e??{})):e}function xR(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const s in e)n[s]=Vt(t[s],e[s]);return n}function wv(){return{app:null,config:{isNativeTag:SA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VR=0;function FR(t,e){return function(s,r=null){de(s)||(s=ot({},s)),r!=null&&!xe(r)&&(r=null);const i=wv(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:VR++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:E0,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(u,...d)):de(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,m){if(!c){const g=u._ceVNode||Ne(s,r);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(g,h):t(g,h,m),c=!0,u._container=h,h.__vue_app__=u,Rc(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(wn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Rr;Rr=u;try{return h()}finally{Rr=d}}};return u}}let Rr=null;function cl(t,e){if(ft){let n=ft.provides;const s=ft.parent&&ft.parent.provides;s===n&&(n=ft.provides=Object.create(s)),n[t]=e}}function Gt(t,e,n=!1){const s=ft||lt;if(s||Rr){const r=Rr?Rr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&de(e)?e.call(s&&s.proxy):e}}function UR(){return!!(ft||lt||Rr)}const Av={},Rv=()=>Object.create(Av),Sv=t=>Object.getPrototypeOf(t)===Av;function BR(t,e,n,s=!1){const r={},i=Rv();t.propsDefaults=Object.create(null),Cv(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:zy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function $R(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Ie(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(wc(t.emitsOptions,m))continue;const g=e[m];if(c)if(ke(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const T=dn(m);r[T]=yh(c,a,T,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{Cv(t,e,r,i)&&(u=!0);let h;for(const d in a)(!e||!ke(e,d)&&((h=Vr(d))===d||!ke(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(r[d]=yh(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!ke(e,d))&&(delete i[d],u=!0)}u&&ns(t.attrs,"set","")}function Cv(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(To(c))continue;const u=e[c];let h;r&&ke(r,h=dn(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:wc(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Ie(n),u=a||Be;for(let h=0;h<i.length;h++){const d=i[h];n[d]=yh(r,c,d,u[d],t,!ke(u,d))}}return o}function yh(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=ha(r);s=u[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Vr(n))&&(s=!0))}return s}const jR=new WeakMap;function bv(t,e,n=!1){const s=n?jR:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!de(t)){const h=d=>{c=!0;const[m,g]=bv(d,e,!0);ot(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return xe(t)&&s.set(t,ci),ci;if(ie(i))for(let h=0;h<i.length;h++){const d=dn(i[h]);ym(d)&&(o[d]=Be)}else if(i)for(const h in i){const d=dn(h);if(ym(d)){const m=i[h],g=o[d]=ie(m)||de(m)?{type:m}:ot({},m),T=g.type;let A=!1,P=!0;if(ie(T))for(let O=0;O<T.length;++O){const x=T[O],M=de(x)&&x.name;if(M==="Boolean"){A=!0;break}else M==="String"&&(P=!1)}else A=de(T)&&T.name==="Boolean";g[0]=A,g[1]=P,(A||ke(g,"default"))&&a.push(d)}}const u=[o,a];return xe(t)&&s.set(t,u),u}function ym(t){return t[0]!=="$"&&!To(t)}const Pv=t=>t[0]==="_"||t==="$stable",Ld=t=>ie(t)?t.map(On):[On(t)],qR=(t,e,n)=>{if(e._n)return e;const s=is((...r)=>Ld(e(...r)),n);return s._c=!1,s},kv=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Pv(r))continue;const i=t[r];if(de(i))e[r]=qR(r,i,s);else if(i!=null){const o=Ld(i);e[r]=()=>o}}},Nv=(t,e)=>{const n=Ld(e);t.slots.default=()=>n},Ov=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},WR=(t,e,n)=>{const s=t.slots=Rv();if(t.vnode.shapeFlag&32){const r=e._;r?(Ov(s,e,n),n&&Cy(s,"_",r,!0)):kv(e,s)}else e&&Nv(t,e)},HR=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ov(r,e,n):(i=!e.$stable,kv(e,r)),o=e}else e&&(Nv(t,e),o={default:1});if(i)for(const a in r)!Pv(a)&&o[a]==null&&delete r[a]},Ut=i0;function zR(t){return KR(t)}function KR(t,e){const n=mc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=Vn,insertStaticContent:T}=t,A=(E,R,N,$=null,V=null,j=null,G=void 0,H=null,W=!!R.dynamicChildren)=>{if(E===R)return;E&&!Tr(E,R)&&($=F(E),Ge(E,V,j,!0),E=null),R.patchFlag===-2&&(W=!1,R.dynamicChildren=null);const{type:q,ref:ae,shapeFlag:X}=R;switch(q){case Ac:P(E,R,N,$);break;case jt:O(E,R,N,$);break;case Ou:E==null&&x(R,N,$,G);break;case zt:C(E,R,N,$,V,j,G,H,W);break;default:X&1?K(E,R,N,$,V,j,G,H,W):X&6?I(E,R,N,$,V,j,G,H,W):(X&64||X&128)&&q.process(E,R,N,$,V,j,G,H,W,ne)}ae!=null&&V&&Pl(ae,E&&E.ref,j,R||E,!R)},P=(E,R,N,$)=>{if(E==null)s(R.el=a(R.children),N,$);else{const V=R.el=E.el;R.children!==E.children&&u(V,R.children)}},O=(E,R,N,$)=>{E==null?s(R.el=c(R.children||""),N,$):R.el=E.el},x=(E,R,N,$)=>{[E.el,E.anchor]=T(E.children,R,N,$,E.el,E.anchor)},M=({el:E,anchor:R},N,$)=>{let V;for(;E&&E!==R;)V=m(E),s(E,N,$),E=V;s(R,N,$)},L=({el:E,anchor:R})=>{let N;for(;E&&E!==R;)N=m(E),r(E),E=N;r(R)},K=(E,R,N,$,V,j,G,H,W)=>{R.type==="svg"?G="svg":R.type==="math"&&(G="mathml"),E==null?J(R,N,$,V,j,G,H,W):y(E,R,V,j,G,H,W)},J=(E,R,N,$,V,j,G,H)=>{let W,q;const{props:ae,shapeFlag:X,transition:re,dirs:se}=E;if(W=E.el=o(E.type,j,ae&&ae.is,ae),X&8?h(W,E.children):X&16&&v(E.children,W,null,$,V,ku(E,j),G,H),se&&fr(E,null,$,"created"),S(W,E,E.scopeId,G,$),ae){for(const Ce in ae)Ce!=="value"&&!To(Ce)&&i(W,Ce,null,ae[Ce],j,$);"value"in ae&&i(W,"value",null,ae.value,j),(q=ae.onVnodeBeforeMount)&&kn(q,$,E)}se&&fr(E,null,$,"beforeMount");const le=GR(V,re);le&&re.beforeEnter(W),s(W,R,N),((q=ae&&ae.onVnodeMounted)||le||se)&&Ut(()=>{q&&kn(q,$,E),le&&re.enter(W),se&&fr(E,null,$,"mounted")},V)},S=(E,R,N,$,V)=>{if(N&&g(E,N),$)for(let j=0;j<$.length;j++)g(E,$[j]);if(V){let j=V.subTree;if(R===j||Vv(j.type)&&(j.ssContent===R||j.ssFallback===R)){const G=V.vnode;S(E,G,G.scopeId,G.slotScopeIds,V.parent)}}},v=(E,R,N,$,V,j,G,H,W=0)=>{for(let q=W;q<E.length;q++){const ae=E[q]=H?Ds(E[q]):On(E[q]);A(null,ae,R,N,$,V,j,G,H)}},y=(E,R,N,$,V,j,G)=>{const H=R.el=E.el;let{patchFlag:W,dynamicChildren:q,dirs:ae}=R;W|=E.patchFlag&16;const X=E.props||Be,re=R.props||Be;let se;if(N&&pr(N,!1),(se=re.onVnodeBeforeUpdate)&&kn(se,N,R,E),ae&&fr(R,E,N,"beforeUpdate"),N&&pr(N,!0),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&h(H,""),q?w(E.dynamicChildren,q,H,N,$,ku(R,V),j):G||ge(E,R,H,null,N,$,ku(R,V),j,!1),W>0){if(W&16)b(H,X,re,N,V);else if(W&2&&X.class!==re.class&&i(H,"class",null,re.class,V),W&4&&i(H,"style",X.style,re.style,V),W&8){const le=R.dynamicProps;for(let Ce=0;Ce<le.length;Ce++){const Re=le[Ce],Tt=X[Re],ut=re[Re];(ut!==Tt||Re==="value")&&i(H,Re,Tt,ut,V,N)}}W&1&&E.children!==R.children&&h(H,R.children)}else!G&&q==null&&b(H,X,re,N,V);((se=re.onVnodeUpdated)||ae)&&Ut(()=>{se&&kn(se,N,R,E),ae&&fr(R,E,N,"updated")},$)},w=(E,R,N,$,V,j,G)=>{for(let H=0;H<R.length;H++){const W=E[H],q=R[H],ae=W.el&&(W.type===zt||!Tr(W,q)||W.shapeFlag&70)?d(W.el):N;A(W,q,ae,null,$,V,j,G,!0)}},b=(E,R,N,$,V)=>{if(R!==N){if(R!==Be)for(const j in R)!To(j)&&!(j in N)&&i(E,j,R[j],null,V,$);for(const j in N){if(To(j))continue;const G=N[j],H=R[j];G!==H&&j!=="value"&&i(E,j,H,G,V,$)}"value"in N&&i(E,"value",R.value,N.value,V)}},C=(E,R,N,$,V,j,G,H,W)=>{const q=R.el=E?E.el:a(""),ae=R.anchor=E?E.anchor:a("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:se}=R;se&&(H=H?H.concat(se):se),E==null?(s(q,N,$),s(ae,N,$),v(R.children||[],N,ae,V,j,G,H,W)):X>0&&X&64&&re&&E.dynamicChildren?(w(E.dynamicChildren,re,N,V,j,G,H),(R.key!=null||V&&R===V.subTree)&&xd(E,R,!0)):ge(E,R,N,ae,V,j,G,H,W)},I=(E,R,N,$,V,j,G,H,W)=>{R.slotScopeIds=H,E==null?R.shapeFlag&512?V.ctx.activate(R,N,$,G,W):be(R,N,$,V,j,G,W):tt(E,R,W)},be=(E,R,N,$,V,j,G)=>{const H=E.component=f0(E,$,V);if(Ec(E)&&(H.ctx.renderer=ne),p0(H,!1,G),H.asyncDep){if(V&&V.registerDep(H,Me,G),!E.el){const W=H.subTree=Ne(jt);O(null,W,R,N)}}else Me(H,E,R,N,V,j,G)},tt=(E,R,N)=>{const $=R.component=E.component;if(s0(E,R,N))if($.asyncDep&&!$.asyncResolved){ue($,R,N);return}else $.next=R,$.update();else R.el=E.el,$.vnode=R},Me=(E,R,N,$,V,j,G)=>{const H=()=>{if(E.isMounted){let{next:X,bu:re,u:se,parent:le,vnode:Ce}=E;{const It=Dv(E);if(It){X&&(X.el=Ce.el,ue(E,X,G)),It.asyncDep.then(()=>{E.isUnmounted||H()});return}}let Re=X,Tt;pr(E,!1),X?(X.el=Ce.el,ue(E,X,G)):X=Ce,re&&al(re),(Tt=X.props&&X.props.onVnodeBeforeUpdate)&&kn(Tt,le,X,Ce),pr(E,!0);const ut=Nu(E),mt=E.subTree;E.subTree=ut,A(mt,ut,d(mt.el),F(mt),E,V,j),X.el=ut.el,Re===null&&r0(E,ut.el),se&&Ut(se,V),(Tt=X.props&&X.props.onVnodeUpdated)&&Ut(()=>kn(Tt,le,X,Ce),V)}else{let X;const{el:re,props:se}=R,{bm:le,m:Ce,parent:Re,root:Tt,type:ut}=E,mt=di(R);if(pr(E,!1),le&&al(le),!mt&&(X=se&&se.onVnodeBeforeMount)&&kn(X,Re,R),pr(E,!0),re&&Ve){const It=()=>{E.subTree=Nu(E),Ve(re,E.subTree,E,V,null)};mt&&ut.__asyncHydrate?ut.__asyncHydrate(re,E,It):It()}else{Tt.ce&&Tt.ce._injectChildStyle(ut);const It=E.subTree=Nu(E);A(null,It,N,$,E,V,j),R.el=It.el}if(Ce&&Ut(Ce,V),!mt&&(X=se&&se.onVnodeMounted)){const It=R;Ut(()=>kn(X,Re,It),V)}(R.shapeFlag&256||Re&&di(Re.vnode)&&Re.vnode.shapeFlag&256)&&E.a&&Ut(E.a,V),E.isMounted=!0,R=N=$=null}};E.scope.on();const W=E.effect=new Oy(H);E.scope.off();const q=E.update=W.run.bind(W),ae=E.job=W.runIfDirty.bind(W);ae.i=E,ae.id=E.uid,W.scheduler=()=>Od(ae),pr(E,!0),q()},ue=(E,R,N)=>{R.component=E;const $=E.vnode.props;E.vnode=R,E.next=null,$R(E,R.props,$,N),HR(E,R.children,N),tr(),lm(E),nr()},ge=(E,R,N,$,V,j,G,H,W=!1)=>{const q=E&&E.children,ae=E?E.shapeFlag:0,X=R.children,{patchFlag:re,shapeFlag:se}=R;if(re>0){if(re&128){pn(q,X,N,$,V,j,G,H,W);return}else if(re&256){Qt(q,X,N,$,V,j,G,H,W);return}}se&8?(ae&16&&Wt(q,V,j),X!==q&&h(N,X)):ae&16?se&16?pn(q,X,N,$,V,j,G,H,W):Wt(q,V,j,!0):(ae&8&&h(N,""),se&16&&v(X,N,$,V,j,G,H,W))},Qt=(E,R,N,$,V,j,G,H,W)=>{E=E||ci,R=R||ci;const q=E.length,ae=R.length,X=Math.min(q,ae);let re;for(re=0;re<X;re++){const se=R[re]=W?Ds(R[re]):On(R[re]);A(E[re],se,N,null,V,j,G,H,W)}q>ae?Wt(E,V,j,!0,!1,X):v(R,N,$,V,j,G,H,W,X)},pn=(E,R,N,$,V,j,G,H,W)=>{let q=0;const ae=R.length;let X=E.length-1,re=ae-1;for(;q<=X&&q<=re;){const se=E[q],le=R[q]=W?Ds(R[q]):On(R[q]);if(Tr(se,le))A(se,le,N,null,V,j,G,H,W);else break;q++}for(;q<=X&&q<=re;){const se=E[X],le=R[re]=W?Ds(R[re]):On(R[re]);if(Tr(se,le))A(se,le,N,null,V,j,G,H,W);else break;X--,re--}if(q>X){if(q<=re){const se=re+1,le=se<ae?R[se].el:$;for(;q<=re;)A(null,R[q]=W?Ds(R[q]):On(R[q]),N,le,V,j,G,H,W),q++}}else if(q>re)for(;q<=X;)Ge(E[q],V,j,!0),q++;else{const se=q,le=q,Ce=new Map;for(q=le;q<=re;q++){const Lt=R[q]=W?Ds(R[q]):On(R[q]);Lt.key!=null&&Ce.set(Lt.key,q)}let Re,Tt=0;const ut=re-le+1;let mt=!1,It=0;const ws=new Array(ut);for(q=0;q<ut;q++)ws[q]=0;for(q=se;q<=X;q++){const Lt=E[q];if(Tt>=ut){Ge(Lt,V,j,!0);continue}let sn;if(Lt.key!=null)sn=Ce.get(Lt.key);else for(Re=le;Re<=re;Re++)if(ws[Re-le]===0&&Tr(Lt,R[Re])){sn=Re;break}sn===void 0?Ge(Lt,V,j,!0):(ws[sn-le]=q+1,sn>=It?It=sn:mt=!0,A(Lt,R[sn],N,null,V,j,G,H,W),Tt++)}const Hr=mt?QR(ws):ci;for(Re=Hr.length-1,q=ut-1;q>=0;q--){const Lt=le+q,sn=R[Lt],zr=Lt+1<ae?R[Lt+1].el:$;ws[q]===0?A(null,sn,N,zr,V,j,G,H,W):mt&&(Re<0||q!==Hr[Re]?nn(sn,N,zr,2):Re--)}}},nn=(E,R,N,$,V=null)=>{const{el:j,type:G,transition:H,children:W,shapeFlag:q}=E;if(q&6){nn(E.component.subTree,R,N,$);return}if(q&128){E.suspense.move(R,N,$);return}if(q&64){G.move(E,R,N,ne);return}if(G===zt){s(j,R,N);for(let X=0;X<W.length;X++)nn(W[X],R,N,$);s(E.anchor,R,N);return}if(G===Ou){M(E,R,N);return}if($!==2&&q&1&&H)if($===0)H.beforeEnter(j),s(j,R,N),Ut(()=>H.enter(j),V);else{const{leave:X,delayLeave:re,afterLeave:se}=H,le=()=>s(j,R,N),Ce=()=>{X(j,()=>{le(),se&&se()})};re?re(j,le,Ce):Ce()}else s(j,R,N)},Ge=(E,R,N,$=!1,V=!1)=>{const{type:j,props:G,ref:H,children:W,dynamicChildren:q,shapeFlag:ae,patchFlag:X,dirs:re,cacheIndex:se}=E;if(X===-2&&(V=!1),H!=null&&Pl(H,null,N,E,!0),se!=null&&(R.renderCache[se]=void 0),ae&256){R.ctx.deactivate(E);return}const le=ae&1&&re,Ce=!di(E);let Re;if(Ce&&(Re=G&&G.onVnodeBeforeUnmount)&&kn(Re,R,E),ae&6)Pn(E.component,N,$);else{if(ae&128){E.suspense.unmount(N,$);return}le&&fr(E,null,R,"beforeUnmount"),ae&64?E.type.remove(E,R,N,ne,$):q&&!q.hasOnce&&(j!==zt||X>0&&X&64)?Wt(q,R,N,!1,!0):(j===zt&&X&384||!V&&ae&16)&&Wt(W,R,N),$&&Qe(E)}(Ce&&(Re=G&&G.onVnodeUnmounted)||le)&&Ut(()=>{Re&&kn(Re,R,E),le&&fr(E,null,R,"unmounted")},N)},Qe=E=>{const{type:R,el:N,anchor:$,transition:V}=E;if(R===zt){Is(N,$);return}if(R===Ou){L(E);return}const j=()=>{r(N),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(E.shapeFlag&1&&V&&!V.persisted){const{leave:G,delayLeave:H}=V,W=()=>G(N,j);H?H(E.el,j,W):W()}else j()},Is=(E,R)=>{let N;for(;E!==R;)N=m(E),r(E),E=N;r(R)},Pn=(E,R,N)=>{const{bum:$,scope:V,job:j,subTree:G,um:H,m:W,a:q}=E;vm(W),vm(q),$&&al($),V.stop(),j&&(j.flags|=8,Ge(G,E,R,N)),H&&Ut(H,R),Ut(()=>{E.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Wt=(E,R,N,$=!1,V=!1,j=0)=>{for(let G=j;G<E.length;G++)Ge(E[G],R,N,$,V)},F=E=>{if(E.shapeFlag&6)return F(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=m(E.anchor||E.el),N=R&&R[sv];return N?m(N):R};let Z=!1;const Y=(E,R,N)=>{E==null?R._vnode&&Ge(R._vnode,null,null,!0):A(R._vnode||null,E,R,null,null,null,N),R._vnode=E,Z||(Z=!0,lm(),ev(),Z=!1)},ne={p:A,um:Ge,m:nn,r:Qe,mt:be,mc:v,pc:ge,pbc:w,n:F,o:t};let Ee,Ve;return{render:Y,hydrate:Ee,createApp:FR(Y,Ee)}}function ku({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function GR(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xd(t,e,n=!1){const s=t.children,r=e.children;if(ie(s)&&ie(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ds(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&xd(o,a)),a.type===Ac&&(a.el=o.el)}}function QR(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Dv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dv(e)}function vm(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const YR=Symbol.for("v-scx"),XR=()=>Gt(YR);function Sr(t,e,n){return Mv(t,e,n)}function Mv(t,e,n=Be){const{immediate:s,deep:r,flush:i,once:o}=n,a=ot({},n),c=e&&s||!e&&i!=="post";let u;if(Ho){if(i==="sync"){const g=XR();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Vn,g.resume=Vn,g.pause=Vn,g}}const h=ft;a.call=(g,T,A)=>wn(g,h,T,A);let d=!1;i==="post"?a.scheduler=g=>{Ut(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,T)=>{T?g():Od(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=fR(t,e,a);return Ho&&(u?u.push(m):c&&m()),m}function JR(t,e,n){const s=this.proxy,r=Ye(t)?t.includes(".")?Lv(s,t):()=>s[t]:t.bind(s,s);let i;de(e)?i=e:(i=e.handler,n=e);const o=ha(this),a=Mv(r,i.bind(s),n);return o(),a}function Lv(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ZR=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${dn(e)}Modifiers`]||t[`${Vr(e)}Modifiers`];function e0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Be;let r=n;const i=e.startsWith("update:"),o=i&&ZR(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>Ye(h)?h.trim():h)),o.number&&(r=n.map(Al)));let a,c=s[a=wu(e)]||s[a=wu(dn(e))];!c&&i&&(c=s[a=wu(Vr(e))]),c&&wn(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wn(u,t,6,r)}}function xv(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!de(t)){const c=u=>{const h=xv(u,e,!0);h&&(a=!0,ot(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(xe(t)&&s.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):ot(o,i),xe(t)&&s.set(t,o),o)}function wc(t,e){return!t||!dc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Vr(e))||ke(t,e))}function Nu(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:T,inheritAttrs:A}=t,P=bl(t);let O,x;try{if(n.shapeFlag&4){const L=r||s,K=L;O=On(u.call(K,L,h,d,g,m,T)),x=a}else{const L=e;O=On(L.length>1?L(d,{attrs:a,slots:o,emit:c}):L(d,null)),x=e.props?a:t0(a)}}catch(L){So.length=0,yc(L,t,1),O=Ne(jt)}let M=O;if(x&&A!==!1){const L=Object.keys(x),{shapeFlag:K}=M;L.length&&K&7&&(i&&L.some(_d)&&(x=n0(x,i)),M=zs(M,x,!1,!0))}return n.dirs&&(M=zs(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&jo(M,n.transition),O=M,bl(P),O}const t0=t=>{let e;for(const n in t)(n==="class"||n==="style"||dc(n))&&((e||(e={}))[n]=t[n]);return e},n0=(t,e)=>{const n={};for(const s in t)(!_d(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function s0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Em(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==s[m]&&!wc(u,m))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Em(s,o,u):!0:!!o;return!1}function Em(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!wc(n,i))return!0}return!1}function r0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Vv=t=>t.__isSuspense;function i0(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):gR(t)}const zt=Symbol.for("v-fgt"),Ac=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Ou=Symbol.for("v-stc"),So=[];let Jt=null;function et(t=!1){So.push(Jt=t?null:[])}function o0(){So.pop(),Jt=So[So.length-1]||null}let qo=1;function Tm(t,e=!1){qo+=t,t<0&&Jt&&e&&(Jt.hasOnce=!0)}function Fv(t){return t.dynamicChildren=qo>0?Jt||ci:null,o0(),qo>0&&Jt&&Jt.push(t),t}function Fn(t,e,n,s,r,i){return Fv(Ue(t,e,n,s,r,i,!0))}function cn(t,e,n,s,r){return Fv(Ne(t,e,n,s,r,!0))}function Wo(t){return t?t.__v_isVNode===!0:!1}function Tr(t,e){return t.type===e.type&&t.key===e.key}const Uv=({key:t})=>t??null,ul=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||Ke(t)||de(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function Ue(t,e=null,n=null,s=0,r=null,i=t===zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uv(e),ref:e&&ul(e),scopeId:nv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:lt};return a?(Vd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),qo>0&&!o&&Jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Jt.push(c),c}const Ne=a0;function a0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===yv)&&(t=jt),Wo(t)){const a=zs(t,e,!0);return n&&Vd(a,n),qo>0&&!i&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(t)]=a:Jt.push(a)),a.patchFlag=-2,a}if(v0(t)&&(t=t.__vccOpts),e){e=l0(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=Di(a)),xe(c)&&(kd(c)&&!ie(c)&&(c=ot({},c)),e.style=Ed(c))}const o=Ye(t)?1:Vv(t)?128:rv(t)?64:xe(t)?4:de(t)?2:0;return Ue(t,e,n,s,r,o,i,!0)}function l0(t){return t?kd(t)||Sv(t)?ot({},t):t:null}function zs(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?u0(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Uv(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(ul(e)):[i,ul(e)]:ul(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zs(t.ssContent),ssFallback:t.ssFallback&&zs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&jo(h,c.clone(h)),h}function c0(t=" ",e=0){return Ne(Ac,null,t,e)}function $s(t="",e=!1){return e?(et(),cn(jt,null,t)):Ne(jt,null,t)}function On(t){return t==null||typeof t=="boolean"?Ne(jt):ie(t)?Ne(zt,null,t.slice()):Wo(t)?Ds(t):Ne(Ac,null,String(t))}function Ds(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zs(t)}function Vd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Vd(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Sv(e)?e._ctx=lt:r===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[c0(e)]):n=8);t.children=e,t.shapeFlag|=n}function u0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Di([e.class,s.class]));else if(r==="style")e.style=Ed([e.style,s.style]);else if(dc(r)){const i=e[r],o=s[r];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function kn(t,e,n,s=null){wn(t,e,7,[n,s])}const h0=wv();let d0=0;function f0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||h0,i={uid:d0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bv(s,r),emitsOptions:xv(s,r),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=e0.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const Fd=()=>ft||lt;let Nl,vh;{const t=mc(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Nl=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),vh=e("__VUE_SSR_SETTERS__",n=>Ho=n)}const ha=t=>{const e=ft;return Nl(t),t.scope.on(),()=>{t.scope.off(),Nl(e)}},Im=()=>{ft&&ft.scope.off(),Nl(null)};function Bv(t){return t.vnode.shapeFlag&4}let Ho=!1;function p0(t,e=!1,n=!1){e&&vh(e);const{props:s,children:r}=t.vnode,i=Bv(t);BR(t,s,i,e),WR(t,r,n);const o=i?m0(t,e):void 0;return e&&vh(!1),o}function m0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,NR);const{setup:s}=n;if(s){tr();const r=t.setupContext=s.length>1?_0(t):null,i=ha(t),o=ua(s,t,0,[t.props,r]),a=Ay(o);if(nr(),i(),(a||t.sp)&&!di(t)&&fv(t),a){if(o.then(Im,Im),e)return o.then(c=>{wm(t,c,e)}).catch(c=>{yc(c,t,0)});t.asyncDep=o}else wm(t,o,e)}else $v(t,e)}function wm(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Yy(e)),$v(t,n)}let Am;function $v(t,e,n){const s=t.type;if(!t.render){if(!e&&Am&&!s.render){const r=s.template||Md(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=ot(ot({isCustomElement:i,delimiters:a},o),c);s.render=Am(r,u)}}t.render=s.render||Vn}{const r=ha(t);tr();try{OR(t)}finally{nr(),r()}}}const g0={get(t,e){return Ct(t,"get",""),t[e]}};function _0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,g0),slots:t.slots,emit:t.emit,expose:e}}function Rc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Yy(Nd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ro)return Ro[n](t)},has(e,n){return n in e||n in Ro}})):t.proxy}function y0(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function v0(t){return de(t)&&"__vccOpts"in t}const Ze=(t,e)=>hR(t,e,Ho);function Ud(t,e,n){const s=arguments.length;return s===2?xe(e)&&!ie(e)?Wo(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wo(n)&&(n=[n]),Ne(t,e,n))}const E0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Eh;const Rm=typeof window<"u"&&window.trustedTypes;if(Rm)try{Eh=Rm.createPolicy("vue",{createHTML:t=>t})}catch{}const jv=Eh?t=>Eh.createHTML(t):t=>t,T0="http://www.w3.org/2000/svg",I0="http://www.w3.org/1998/Math/MathML",ts=typeof document<"u"?document:null,Sm=ts&&ts.createElement("template"),w0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?ts.createElementNS(T0,t):e==="mathml"?ts.createElementNS(I0,t):n?ts.createElement(t,{is:n}):ts.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ts.createTextNode(t),createComment:t=>ts.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ts.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Sm.innerHTML=jv(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Sm.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cs="transition",ro="animation",zo=Symbol("_vtc"),qv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},A0=ot({},lv,qv),R0=t=>(t.displayName="Transition",t.props=A0,t),Wv=R0((t,{slots:e})=>Ud(ER,S0(t),e)),mr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cm=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function S0(t){const e={};for(const C in t)C in qv||(e[C]=t[C]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,T=C0(r),A=T&&T[0],P=T&&T[1],{onBeforeEnter:O,onEnter:x,onEnterCancelled:M,onLeave:L,onLeaveCancelled:K,onBeforeAppear:J=O,onAppear:S=x,onAppearCancelled:v=M}=e,y=(C,I,be,tt)=>{C._enterCancelled=tt,gr(C,I?h:a),gr(C,I?u:o),be&&be()},w=(C,I)=>{C._isLeaving=!1,gr(C,d),gr(C,g),gr(C,m),I&&I()},b=C=>(I,be)=>{const tt=C?S:x,Me=()=>y(I,C,be);mr(tt,[I,Me]),bm(()=>{gr(I,C?c:i),Jn(I,C?h:a),Cm(tt)||Pm(I,s,A,Me)})};return ot(e,{onBeforeEnter(C){mr(O,[C]),Jn(C,i),Jn(C,o)},onBeforeAppear(C){mr(J,[C]),Jn(C,c),Jn(C,u)},onEnter:b(!1),onAppear:b(!0),onLeave(C,I){C._isLeaving=!0;const be=()=>w(C,I);Jn(C,d),C._enterCancelled?(Jn(C,m),Om()):(Om(),Jn(C,m)),bm(()=>{C._isLeaving&&(gr(C,d),Jn(C,g),Cm(L)||Pm(C,s,P,be))}),mr(L,[C,be])},onEnterCancelled(C){y(C,!1,void 0,!0),mr(M,[C])},onAppearCancelled(C){y(C,!0,void 0,!0),mr(v,[C])},onLeaveCancelled(C){w(C),mr(K,[C])}})}function C0(t){if(t==null)return null;if(xe(t))return[Du(t.enter),Du(t.leave)];{const e=Du(t);return[e,e]}}function Du(t){return NA(t)}function Jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[zo]||(t[zo]=new Set)).add(e)}function gr(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[zo];n&&(n.delete(e),n.size||(t[zo]=void 0))}function bm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let b0=0;function Pm(t,e,n,s){const r=t._endId=++b0,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=P0(t,e);if(!o)return s();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},a+1),t.addEventListener(u,m)}function P0(t,e){const n=window.getComputedStyle(t),s=T=>(n[T]||"").split(", "),r=s(`${Cs}Delay`),i=s(`${Cs}Duration`),o=km(r,i),a=s(`${ro}Delay`),c=s(`${ro}Duration`),u=km(a,c);let h=null,d=0,m=0;e===Cs?o>0&&(h=Cs,d=o,m=i.length):e===ro?u>0&&(h=ro,d=u,m=c.length):(d=Math.max(o,u),h=d>0?o>u?Cs:ro:null,m=h?h===Cs?i.length:c.length:0);const g=h===Cs&&/\b(transform|all)(,|$)/.test(s(`${Cs}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:g}}function km(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Nm(n)+Nm(t[s])))}function Nm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Om(){return document.body.offsetHeight}function k0(t,e,n){const s=t[zo];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Dm=Symbol("_vod"),N0=Symbol("_vsh"),O0=Symbol(""),D0=/(^|;)\s*display\s*:/;function M0(t,e,n){const s=t.style,r=Ye(n);let i=!1;if(n&&!r){if(e)if(Ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hl(s,a,"")}else for(const o in e)n[o]==null&&hl(s,o,"");for(const o in n)o==="display"&&(i=!0),hl(s,o,n[o])}else if(r){if(e!==n){const o=s[O0];o&&(n+=";"+o),s.cssText=n,i=D0.test(n)}}else e&&t.removeAttribute("style");Dm in t&&(t[Dm]=i?s.display:"",t[N0]&&(s.display="none"))}const Mm=/\s*!important$/;function hl(t,e,n){if(ie(n))n.forEach(s=>hl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=L0(t,e);Mm.test(n)?t.setProperty(Vr(s),n.replace(Mm,""),"important"):t[s]=n}}const Lm=["Webkit","Moz","ms"],Mu={};function L0(t,e){const n=Mu[e];if(n)return n;let s=dn(e);if(s!=="filter"&&s in t)return Mu[e]=s;s=pc(s);for(let r=0;r<Lm.length;r++){const i=Lm[r]+s;if(i in t)return Mu[e]=i}return e}const xm="http://www.w3.org/1999/xlink";function Vm(t,e,n,s,r,i=VA(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xm,e.slice(6,e.length)):t.setAttributeNS(xm,e,n):n==null||i&&!by(n)?t.removeAttribute(e):t.setAttribute(e,i?"":In(n)?String(n):n)}function Fm(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=by(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function rs(t,e,n,s){t.addEventListener(e,n,s)}function x0(t,e,n,s){t.removeEventListener(e,n,s)}const Um=Symbol("_vei");function V0(t,e,n,s,r=null){const i=t[Um]||(t[Um]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=F0(e);if(s){const u=i[e]=$0(s,r);rs(t,a,u,c)}else o&&(x0(t,a,o,c),i[e]=void 0)}}const Bm=/(?:Once|Passive|Capture)$/;function F0(t){let e;if(Bm.test(t)){e={};let s;for(;s=t.match(Bm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vr(t.slice(2)),e]}let Lu=0;const U0=Promise.resolve(),B0=()=>Lu||(U0.then(()=>Lu=0),Lu=Date.now());function $0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;wn(j0(s,n.value),e,5,[s])};return n.value=t,n.attached=B0(),n}function j0(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const $m=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,q0=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?k0(t,s,o):e==="style"?M0(t,n,s):dc(e)?_d(e)||V0(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):W0(t,e,s,o))?(Fm(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vm(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(s))?Fm(t,dn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Vm(t,e,s,o))};function W0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&$m(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $m(e)&&Ye(n)?!1:e in t}const Ks=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>al(e,n):e};function H0(t){t.target.composing=!0}function jm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const un=Symbol("_assign"),qm={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[un]=Ks(r);const i=s||r.props&&r.props.type==="number";rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Al(a)),t[un](a)}),n&&rs(t,"change",()=>{t.value=t.value.trim()}),e||(rs(t,"compositionstart",H0),rs(t,"compositionend",jm),rs(t,"change",jm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[un]=Ks(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Al(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},z0={deep:!0,created(t,e,n){t[un]=Ks(n),rs(t,"change",()=>{const s=t._modelValue,r=vi(t),i=t.checked,o=t[un];if(ie(s)){const a=Td(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(Oi(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Hv(t,i))})},mounted:Wm,beforeUpdate(t,e,n){t[un]=Ks(n),Wm(t,e,n)}};function Wm(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(ie(e))r=Td(e,s.props.value)>-1;else if(Oi(e))r=e.has(s.props.value);else{if(e===n)return;r=br(e,Hv(t,!0))}t.checked!==r&&(t.checked=r)}const K0={created(t,{value:e},n){t.checked=br(e,n.props.value),t[un]=Ks(n),rs(t,"change",()=>{t[un](vi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[un]=Ks(s),e!==n&&(t.checked=br(e,s.props.value))}},G0={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Oi(e);rs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Al(vi(o)):vi(o));t[un](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,vc(()=>{t._assigning=!1})}),t[un]=Ks(s)},mounted(t,{value:e}){Hm(t,e)},beforeUpdate(t,e,n){t[un]=Ks(n)},updated(t,{value:e}){t._assigning||Hm(t,e)}};function Hm(t,e){const n=t.multiple,s=ie(e);if(!(n&&!s&&!Oi(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=vi(o);if(n)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Td(e,a)>-1}else o.selected=e.has(a);else if(br(vi(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function vi(t){return"_value"in t?t._value:t.value}function Hv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const OF={created(t,e,n){Ga(t,e,n,null,"created")},mounted(t,e,n){Ga(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Ga(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Ga(t,e,n,s,"updated")}};function Q0(t,e){switch(t){case"SELECT":return G0;case"TEXTAREA":return qm;default:switch(e){case"checkbox":return z0;case"radio":return K0;default:return qm}}}function Ga(t,e,n,s,r){const o=Q0(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Y0=["ctrl","shift","alt","meta"],X0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Y0.some(n=>t[`${n}Key`]&&!e.includes(n))},DF=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=X0[e[o]];if(a&&a(r,e))return}return t(r,...i)})},J0=ot({patchProp:q0},w0);let zm;function Z0(){return zm||(zm=zR(J0))}const eS=(...t)=>{const e=Z0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=nS(s);if(!r)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,tS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function tS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function nS(t){return Ye(t)?document.querySelector(t):t}var sS=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let zv;const Sc=t=>zv=t,Kv=Symbol();function Th(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Co;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Co||(Co={}));function rS(){const t=Id(!0),e=t.run(()=>Dt({}));let n=[],s=[];const r=Nd({install(i){Sc(r),r._a=i,i.provide(Kv,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!sS?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Gv=()=>{};function Km(t,e,n,s=Gv){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&gc()&&wd(r),r}function Jr(t,...e){t.slice().forEach(n=>{n(...e)})}const iS=t=>t(),Gm=Symbol(),xu=Symbol();function Ih(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Th(r)&&Th(s)&&t.hasOwnProperty(n)&&!Ke(s)&&!us(s)?t[n]=Ih(r,s):t[n]=s}return t}const oS=Symbol();function aS(t){return!Th(t)||!t.hasOwnProperty(oS)}const{assign:ks}=Object;function lS(t){return!!(Ke(t)&&t.effect)}function cS(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=r?r():{});const h=oR(n.state.value[t]);return ks(h,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=Nd(Ze(()=>{Sc(n);const g=n._s.get(t);return o[m].call(g,g)})),d),{}))}return c=Qv(t,u,e,n,s,!0),c}function Qv(t,e,n={},s,r,i){let o;const a=ks({actions:{}},n),c={deep:!0};let u,h,d=[],m=[],g;const T=s.state.value[t];!i&&!T&&(s.state.value[t]={}),Dt({});let A;function P(v){let y;u=h=!1,typeof v=="function"?(v(s.state.value[t]),y={type:Co.patchFunction,storeId:t,events:g}):(Ih(s.state.value[t],v),y={type:Co.patchObject,payload:v,storeId:t,events:g});const w=A=Symbol();vc().then(()=>{A===w&&(u=!0)}),h=!0,Jr(d,y,s.state.value[t])}const O=i?function(){const{state:y}=n,w=y?y():{};this.$patch(b=>{ks(b,w)})}:Gv;function x(){o.stop(),d=[],m=[],s._s.delete(t)}const M=(v,y="")=>{if(Gm in v)return v[xu]=y,v;const w=function(){Sc(s);const b=Array.from(arguments),C=[],I=[];function be(ue){C.push(ue)}function tt(ue){I.push(ue)}Jr(m,{args:b,name:w[xu],store:K,after:be,onError:tt});let Me;try{Me=v.apply(this&&this.$id===t?this:K,b)}catch(ue){throw Jr(I,ue),ue}return Me instanceof Promise?Me.then(ue=>(Jr(C,ue),ue)).catch(ue=>(Jr(I,ue),Promise.reject(ue))):(Jr(C,Me),Me)};return w[Gm]=!0,w[xu]=y,w},L={_p:s,$id:t,$onAction:Km.bind(null,m),$patch:P,$reset:O,$subscribe(v,y={}){const w=Km(d,v,y.detached,()=>b()),b=o.run(()=>Sr(()=>s.state.value[t],C=>{(y.flush==="sync"?h:u)&&v({storeId:t,type:Co.direct,events:g},C)},ks({},c,y)));return w},$dispose:x},K=ca(L);s._s.set(t,K);const S=(s._a&&s._a.runWithContext||iS)(()=>s._e.run(()=>(o=Id()).run(()=>e({action:M}))));for(const v in S){const y=S[v];if(Ke(y)&&!lS(y)||us(y))i||(T&&aS(y)&&(Ke(y)?y.value=T[v]:Ih(y,T[v])),s.state.value[t][v]=y);else if(typeof y=="function"){const w=M(y,v);S[v]=w,a.actions[v]=y}}return ks(K,S),ks(Ie(K),S),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:v=>{P(y=>{ks(y,v)})}}),s._p.forEach(v=>{ks(K,o.run(()=>v({store:K,app:s._a,pinia:s,options:a})))}),T&&i&&n.hydrate&&n.hydrate(K.$state,T),u=!0,h=!0,K}/*! #__NO_SIDE_EFFECTS__ */function Bd(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const u=UR();return a=a||(u?Gt(Kv,null):null),a&&Sc(a),a=zv,a._s.has(s)||(i?Qv(s,e,r,a):cS(s,r,a)),a._s.get(s)}return o.$id=s,o}function Cc(t){{const e=Ie(t),n={};for(const s in e){const r=e[s];r.effect?n[s]=Ze({get:()=>t[s],set(i){t[s]=i}}):(Ke(r)||us(r))&&(n[s]=cR(t,s))}return n}}const Qm=Bd("modalsStore",()=>{const t=Dt({}),e=c=>{t.value[c]=!0,r()},n=c=>{t.value[c]&&(delete t.value[c],r())},s=()=>{n(Object.keys(t.value)[Object.keys(t.value).length-1])},r=()=>{Object.keys(t.value).length>0?document.body.style.overflow="hidden":document.body.style.overflow=""},i=c=>{c.key==="Escape"&&s()};return{modals:t,openModal:e,closeModal:n,closeLastModal:s,setupEscapeHandler:()=>{document.addEventListener("keydown",i)},removeEscapeHandler:()=>{document.removeEventListener("keydown",i)}}}),sr=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},uS=zn({name:"VIcon",props:{width:[String,Number],height:[String,Number],size:{type:[String,Number],required:!1,default:24},name:{type:String,required:!0}}}),hS=["height","width"],dS=["xlink:href"];function fS(t,e,n,s,r,i){return et(),Fn("svg",{height:t.height??t.size,width:t.width??t.size,"aria-hidden":"true",class:"icon"},[Ue("use",{"xlink:href":`#${t.name}`},null,8,dS)],8,hS)}const Yv=sr(uS,[["render",fS],["__scopeId","data-v-f1a9963f"]]);function pS(t){return gc()?(wd(t),!0):!1}function on(t){return typeof t=="function"?t():hs(t)}const Xv=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const mS=Object.prototype.toString,gS=t=>mS.call(t)==="[object Object]",dl=()=>{},_S=yS();function yS(){var t,e;return Xv&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}const vS=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i,ES=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function TS(t,e,n,s){let r=t<12?"AM":"PM";return s&&(r=r.split("").reduce((i,o)=>i+=`${o}.`,"")),n?r.toLowerCase():r}function _r(t){const e=["th","st","nd","rd"],n=t%100;return t+(e[(n-20)%10]||e[n]||e[0])}function IS(t,e,n={}){var s;const r=t.getFullYear(),i=t.getMonth(),o=t.getDate(),a=t.getHours(),c=t.getMinutes(),u=t.getSeconds(),h=t.getMilliseconds(),d=t.getDay(),m=(s=n.customMeridiem)!=null?s:TS,g={Yo:()=>_r(r),YY:()=>String(r).slice(-2),YYYY:()=>r,M:()=>i+1,Mo:()=>_r(i+1),MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(on(n.locales),{month:"short"}),MMMM:()=>t.toLocaleDateString(on(n.locales),{month:"long"}),D:()=>String(o),Do:()=>_r(o),DD:()=>`${o}`.padStart(2,"0"),H:()=>String(a),Ho:()=>_r(a),HH:()=>`${a}`.padStart(2,"0"),h:()=>`${a%12||12}`.padStart(1,"0"),ho:()=>_r(a%12||12),hh:()=>`${a%12||12}`.padStart(2,"0"),m:()=>String(c),mo:()=>_r(c),mm:()=>`${c}`.padStart(2,"0"),s:()=>String(u),so:()=>_r(u),ss:()=>`${u}`.padStart(2,"0"),SSS:()=>`${h}`.padStart(3,"0"),d:()=>d,dd:()=>t.toLocaleDateString(on(n.locales),{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(on(n.locales),{weekday:"short"}),dddd:()=>t.toLocaleDateString(on(n.locales),{weekday:"long"}),A:()=>m(a,c),AA:()=>m(a,c,!1,!0),a:()=>m(a,c,!0),aa:()=>m(a,c,!0,!0)};return e.replace(ES,(T,A)=>{var P,O;return(O=A??((P=g[T])==null?void 0:P.call(g)))!=null?O:T})}function wS(t){if(t===null)return new Date(Number.NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(vS);if(e){const n=e[2]-1||0,s=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,s)}}return new Date(t)}function MF(t,e="HH:mm:ss",n={}){return Ze(()=>IS(wS(on(t)),on(e),n))}const Jv=Xv?window:void 0;function ho(t){var e;const n=on(t);return(e=n==null?void 0:n.$el)!=null?e:n}function Vu(...t){let e,n,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,r]=t,e=Jv):[e,n,s,r]=t,!e)return dl;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],o=()=>{i.forEach(h=>h()),i.length=0},a=(h,d,m,g)=>(h.addEventListener(d,m,g),()=>h.removeEventListener(d,m,g)),c=Sr(()=>[ho(e),on(r)],([h,d])=>{if(o(),!h)return;const m=gS(d)?{...d}:d;i.push(...n.flatMap(g=>s.map(T=>a(h,g,T,m))))},{immediate:!0,flush:"post"}),u=()=>{c(),o()};return pS(u),u}let Ym=!1;function AS(t,e,n={}){const{window:s=Jv,ignore:r=[],capture:i=!0,detectIframe:o=!1}=n;if(!s)return dl;_S&&!Ym&&(Ym=!0,Array.from(s.document.body.children).forEach(A=>A.addEventListener("click",dl)),s.document.documentElement.addEventListener("click",dl));let a=!0;const c=A=>on(r).some(P=>{if(typeof P=="string")return Array.from(s.document.querySelectorAll(P)).some(O=>O===A.target||A.composedPath().includes(O));{const O=ho(P);return O&&(A.target===O||A.composedPath().includes(O))}});function u(A){const P=on(A);return P&&P.$.subTree.shapeFlag===16}function h(A,P){const O=on(A),x=O.$.subTree&&O.$.subTree.children;return x==null||!Array.isArray(x)?!1:x.some(M=>M.el===P.target||P.composedPath().includes(M.el))}const d=A=>{const P=ho(t);if(A.target!=null&&!(!(P instanceof Element)&&u(t)&&h(t,A))&&!(!P||P===A.target||A.composedPath().includes(P))){if(A.detail===0&&(a=!c(A)),!a){a=!0;return}e(A)}};let m=!1;const g=[Vu(s,"click",A=>{m||(m=!0,setTimeout(()=>{m=!1},0),d(A))},{passive:!0,capture:i}),Vu(s,"pointerdown",A=>{const P=ho(t);a=!c(A)&&!!(P&&!A.composedPath().includes(P))},{passive:!0}),o&&Vu(s,"blur",A=>{setTimeout(()=>{var P;const O=ho(t);((P=s.document.activeElement)==null?void 0:P.tagName)==="IFRAME"&&!(O!=null&&O.contains(s.document.activeElement))&&e(A)},0)})].filter(Boolean);return()=>g.forEach(A=>A())}const RS=zn({name:"VLoader"}),SS={class:"loader"};function CS(t,e,n,s,r,i){return et(),Fn("div",SS)}const Zv=sr(RS,[["render",CS],["__scopeId","data-v-2972ab33"]]),bS=zn({name:"VModal",components:{VLoader:Zv},props:{type:{type:String,default:"overlay",required:!1,validator:t=>["overlay","side"].includes(t)},closable:{type:Boolean,default:!0,required:!1},isOpen:{type:Boolean,default:!1,required:!1},loading:{type:Boolean,default:!1,required:!1},closeOutside:{type:Boolean,default:!1,required:!1},size:{type:String,default:"normal",required:!1,validator:t=>["small","normal"].includes(t)}},emits:["closeModal"],setup(t,{emit:e,attrs:n}){const s=Dt(null),r=Ze(()=>["modal",{"modal--side":t.type==="side","modal--transparent":t.type==="overlay","modal--small":t.size==="small"},n.class]),i=Ze(()=>t.type==="side"?"fade-side":"fade"),o=()=>{e("closeModal")};return Ic(()=>{t.closeOutside&&AS(s,o)}),{modalRef:s,classes:r,transitionName:i,closeModal:o}}}),PS={class:"modal__content"},kS={key:1,class:"modal__loader"};function NS(t,e,n,s,r,i){const o=ds("v-loader");return et(),cn(ov,{to:"body"},[Ne(Wv,{name:t.transitionName},{default:is(()=>[t.isOpen?(et(),Fn("div",{key:0,class:Di(t.classes),ref:"modalRef"},[Ue("div",{class:"modal__backdrop",onClick:e[0]||(e[0]=(...a)=>t.closeModal&&t.closeModal(...a))}),Ue("div",PS,[Ev(t.$slots,"default",{},void 0,!0)]),t.closable?(et(),Fn("button",{key:0,class:"modal__close",onClick:e[1]||(e[1]=(...a)=>t.closeModal&&t.closeModal(...a))},"×")):$s("",!0),t.loading?(et(),Fn("div",kS,[Ne(o)])):$s("",!0)],2)):$s("",!0)]),_:3},8,["name"])])}const OS=sr(bS,[["render",NS],["__scopeId","data-v-b95ef15a"]]),DS=zn({name:"LayoutMain",components:{VIcon:Yv,VModal:OS},setup(){const{setupEscapeHandler:t,removeEscapeHandler:e}=Qm(),n=Qm(),{openModal:s,closeModal:r}=n,i=Ze(()=>n.modals.hotkeys);return Ic(()=>{t()}),Dd(()=>{e()}),{isOpenHotkeys:i,openModal:s,closeModal:r}}}),MS={class:"layout-main"},LS={class:"layout-main__container container"},xS={class:"hotkeys-modal__content"},VS={class:"hotkeys-modal__items"},FS={class:"hotkeys-modal__item"},US={class:"hotkeys-modal__item"};function BS(t,e,n,s,r,i){const o=ds("router-view"),a=ds("v-icon"),c=ds("v-modal");return et(),Fn("div",MS,[Ue("div",LS,[Ne(o)]),Ue("div",{class:"hotkeys-btn",onClick:e[0]||(e[0]=u=>t.openModal("hotkeys"))},[Ne(a,{class:"hotkeys-btn__icon",name:"keyboard",size:"40"})]),Ne(c,{class:"hotkeys-modal",isOpen:t.isOpenHotkeys,"onUpdate:isOpen":e[1]||(e[1]=u=>t.isOpenHotkeys=u),size:"small",onCloseModal:e[2]||(e[2]=u=>t.closeModal("hotkeys"))},{default:is(()=>[Ue("div",xS,[e[5]||(e[5]=Ue("div",{class:"hotkeys-modal__title"},"Горячие клавиши",-1)),Ue("div",VS,[Ue("div",FS,[Ne(a,{class:"hotkeys-modal__item-icon",name:"enter",size:"60"}),e[3]||(e[3]=Ue("div",{class:"hotkeys-modal__item-text"},"(Enter) отправить форму",-1))]),Ue("div",US,[Ne(a,{class:"hotkeys-modal__item-icon",name:"esc",size:"60"}),e[4]||(e[4]=Ue("div",{class:"hotkeys-modal__item-text"},"(Escape) закрыть модальное окно/форму",-1))])])])]),_:1},8,["isOpen"])])}const $S=sr(DS,[["render",BS],["__scopeId","data-v-a3362e7e"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ti=typeof document<"u";function eE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&eE(t.default)}const Pe=Object.assign;function Fu(t,e){const n={};for(const s in e){const r=e[s];n[s]=An(r)?r.map(t):t(r)}return n}const bo=()=>{},An=Array.isArray,tE=/#/g,qS=/&/g,WS=/\//g,HS=/=/g,zS=/\?/g,nE=/\+/g,KS=/%5B/g,GS=/%5D/g,sE=/%5E/g,QS=/%60/g,rE=/%7B/g,YS=/%7C/g,iE=/%7D/g,XS=/%20/g;function $d(t){return encodeURI(""+t).replace(YS,"|").replace(KS,"[").replace(GS,"]")}function JS(t){return $d(t).replace(rE,"{").replace(iE,"}").replace(sE,"^")}function wh(t){return $d(t).replace(nE,"%2B").replace(XS,"+").replace(tE,"%23").replace(qS,"%26").replace(QS,"`").replace(rE,"{").replace(iE,"}").replace(sE,"^")}function ZS(t){return wh(t).replace(HS,"%3D")}function eC(t){return $d(t).replace(tE,"%23").replace(zS,"%3F")}function tC(t){return t==null?"":eC(t).replace(WS,"%2F")}function Ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const nC=/\/$/,sC=t=>t.replace(nC,"");function Uu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=aC(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Ko(o)}}function rC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ei(e.matched[s],n.matched[r])&&oE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function oE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!oC(t[n],e[n]))return!1;return!0}function oC(t,e){return An(t)?Jm(t,e):An(e)?Jm(e,t):t===e}function Jm(t,e){return An(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function aC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const bs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Go;(function(t){t.pop="pop",t.push="push"})(Go||(Go={}));var Po;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Po||(Po={}));function lC(t){if(!t)if(ti){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),sC(t)}const cC=/^[^#]+#/;function uC(t,e){return t.replace(cC,"#")+e}function hC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const bc=()=>({left:window.scrollX,top:window.scrollY});function dC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=hC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zm(t,e){return(history.state?history.state.position-e:-1)+t}const Ah=new Map;function fC(t,e){Ah.set(t,e)}function pC(t){const e=Ah.get(t);return Ah.delete(t),e}let mC=()=>location.protocol+"//"+location.host;function aE(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Xm(c,"")}return Xm(n,t)+s+r}function gC(t,e,n,s){let r=[],i=[],o=null;const a=({state:m})=>{const g=aE(t,location),T=n.value,A=e.value;let P=0;if(m){if(n.value=g,e.value=m,o&&o===T){o=null;return}P=A?m.position-A.position:0}else s(g);r.forEach(O=>{O(n.value,T,{delta:P,type:Go.pop,direction:P?P>0?Po.forward:Po.back:Po.unknown})})};function c(){o=n.value}function u(m){r.push(m);const g=()=>{const T=r.indexOf(m);T>-1&&r.splice(T,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:bc()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function eg(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?bc():null}}function _C(t){const{history:e,location:n}=window,s={value:aE(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:mC()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),r.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){const h=Pe({},e.state,eg(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Pe({},r.value,e.state,{forward:c,scroll:bc()});i(h.current,h,!0);const d=Pe({},eg(s.value,c,null),{position:h.position+1},u);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function yC(t){t=lC(t);const e=_C(t),n=gC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Pe({location:"",base:t,go:s,createHref:uC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function vC(t){return typeof t=="string"||t&&typeof t=="object"}function lE(t){return typeof t=="string"||typeof t=="symbol"}const cE=Symbol("");var tg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(tg||(tg={}));function Ti(t,e){return Pe(new Error,{type:t,[cE]:!0},e)}function Zn(t,e){return t instanceof Error&&cE in t&&(e==null||!!(t.type&e))}const ng="[^/]+?",EC={sensitive:!1,strict:!1,start:!0,end:!0},TC=/[.+*?^${}()[\]/\\]/g;function IC(t,e){const n=Pe({},EC,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(r+="/"),r+=m.value.replace(TC,"\\$&"),g+=40;else if(m.type===1){const{value:T,repeatable:A,optional:P,regexp:O}=m;i.push({name:T,repeatable:A,optional:P});const x=O||ng;if(x!==ng){g+=10;try{new RegExp(`(${x})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${T}" (${x}): `+L.message)}}let M=A?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(M=P&&u.length<2?`(?:/${M})`:"/"+M),P&&(M+="?"),r+=M,g+=20,P&&(g+=-8),A&&(g+=-20),x===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",T=i[m-1];d[T.name]=g&&T.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:T,repeatable:A,optional:P}=g,O=T in u?u[T]:"";if(An(O)&&!A)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const x=An(O)?O.join("/"):O;if(!x)if(P)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${T}"`);h+=x}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function wC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function uE(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=wC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(sg(s))return 1;if(sg(r))return-1}return r.length-s.length}function sg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const AC={type:0,value:""},RC=/[a-zA-Z0-9_]/;function SC(t){if(!t)return[[]];if(t==="/")return[[AC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:RC.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function CC(t,e,n){const s=IC(SC(t.path),n),r=Pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function bC(t,e){const n=[],s=new Map;e=ag({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,m,g){const T=!g,A=ig(d);A.aliasOf=g&&g.record;const P=ag(e,d),O=[A];if("alias"in d){const L=typeof d.alias=="string"?[d.alias]:d.alias;for(const K of L)O.push(ig(Pe({},A,{components:g?g.record.components:A.components,path:K,aliasOf:g?g.record:A})))}let x,M;for(const L of O){const{path:K}=L;if(m&&K[0]!=="/"){const J=m.record.path,S=J[J.length-1]==="/"?"":"/";L.path=m.record.path+(K&&S+K)}if(x=CC(L,m,P),g?g.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),T&&d.name&&!og(x)&&o(d.name)),hE(x)&&c(x),A.children){const J=A.children;for(let S=0;S<J.length;S++)i(J[S],x,g&&g.children[S])}g=g||x}return M?()=>{o(M)}:bo}function o(d){if(lE(d)){const m=s.get(d);m&&(s.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const m=NC(d,n);n.splice(m,0,d),d.record.name&&!og(d)&&s.set(d.record.name,d)}function u(d,m){let g,T={},A,P;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Ti(1,{location:d});P=g.record.name,T=Pe(rg(m.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),d.params&&rg(d.params,g.keys.map(M=>M.name))),A=g.stringify(T)}else if(d.path!=null)A=d.path,g=n.find(M=>M.re.test(A)),g&&(T=g.parse(A),P=g.record.name);else{if(g=m.name?s.get(m.name):n.find(M=>M.re.test(m.path)),!g)throw Ti(1,{location:d,currentLocation:m});P=g.record.name,T=Pe({},m.params,d.params),A=g.stringify(T)}const O=[];let x=g;for(;x;)O.unshift(x.record),x=x.parent;return{name:P,path:A,params:T,matched:O,meta:kC(O)}}t.forEach(d=>i(d));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function rg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ig(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:PC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function PC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function og(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kC(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function ag(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function NC(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;uE(t,e[i])<0?s=i:n=i+1}const r=OC(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function OC(t){let e=t;for(;e=e.parent;)if(hE(e)&&uE(t,e)===0)return e}function hE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function DC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(nE," "),o=i.indexOf("="),a=Ko(o<0?i:i.slice(0,o)),c=o<0?null:Ko(i.slice(o+1));if(a in e){let u=e[a];An(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function lg(t){let e="";for(let n in t){const s=t[n];if(n=ZS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(An(s)?s.map(i=>i&&wh(i)):[s&&wh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function MC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=An(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const LC=Symbol(""),cg=Symbol(""),Pc=Symbol(""),jd=Symbol(""),Rh=Symbol("");function io(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ms(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(Ti(4,{from:n,to:e})):m instanceof Error?c(m):vC(m)?c(Ti(2,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),a())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Bu(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(eE(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Ms(h,n,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=jS(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Ms(g,n,s,o,a,r)()}))}}return i}function ug(t){const e=Gt(Pc),n=Gt(jd),s=Ze(()=>{const c=hs(t.to);return e.resolve(c)}),r=Ze(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(Ei.bind(null,h));if(m>-1)return m;const g=hg(c[u-2]);return u>1&&hg(h)===g&&d[d.length-1].path!==g?d.findIndex(Ei.bind(null,c[u-2])):m}),i=Ze(()=>r.value>-1&&BC(n.params,s.value.params)),o=Ze(()=>r.value>-1&&r.value===n.matched.length-1&&oE(n.params,s.value.params));function a(c={}){if(UC(c)){const u=e[hs(t.replace)?"replace":"push"](hs(t.to)).catch(bo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Ze(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function xC(t){return t.length===1?t[0]:t}const VC=zn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ug,setup(t,{slots:e}){const n=ca(ug(t)),{options:s}=Gt(Pc),r=Ze(()=>({[dg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[dg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&xC(e.default(n));return t.custom?i:Ud("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),FC=VC;function UC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function BC(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!An(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function hg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dg=(t,e,n)=>t??e??n,$C=zn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Gt(Rh),r=Ze(()=>t.route||s.value),i=Gt(cg,0),o=Ze(()=>{let u=hs(i);const{matched:h}=r.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Ze(()=>r.value.matched[o.value]);cl(cg,Ze(()=>o.value+1)),cl(LC,a),cl(Rh,r);const c=Dt();return Sr(()=>[c.value,a.value,t.name],([u,h,d],[m,g,T])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Ei(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,d=a.value,m=d&&d.components[h];if(!m)return fg(n.default,{Component:m,route:u});const g=d.props[h],T=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=Ud(m,Pe({},T,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return fg(n.default,{Component:P,route:u})||P}}});function fg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jC=$C;function qC(t){const e=bC(t.routes,t),n=t.parseQuery||DC,s=t.stringifyQuery||lg,r=t.history,i=io(),o=io(),a=io(),c=Gy(bs);let u=bs;ti&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Fu.bind(null,F=>""+F),d=Fu.bind(null,tC),m=Fu.bind(null,Ko);function g(F,Z){let Y,ne;return lE(F)?(Y=e.getRecordMatcher(F),ne=Z):ne=F,e.addRoute(ne,Y)}function T(F){const Z=e.getRecordMatcher(F);Z&&e.removeRoute(Z)}function A(){return e.getRoutes().map(F=>F.record)}function P(F){return!!e.getRecordMatcher(F)}function O(F,Z){if(Z=Pe({},Z||c.value),typeof F=="string"){const R=Uu(n,F,Z.path),N=e.resolve({path:R.path},Z),$=r.createHref(R.fullPath);return Pe(R,N,{params:m(N.params),hash:Ko(R.hash),redirectedFrom:void 0,href:$})}let Y;if(F.path!=null)Y=Pe({},F,{path:Uu(n,F.path,Z.path).path});else{const R=Pe({},F.params);for(const N in R)R[N]==null&&delete R[N];Y=Pe({},F,{params:d(R)}),Z.params=d(Z.params)}const ne=e.resolve(Y,Z),Ee=F.hash||"";ne.params=h(m(ne.params));const Ve=rC(s,Pe({},F,{hash:JS(Ee),path:ne.path})),E=r.createHref(Ve);return Pe({fullPath:Ve,hash:Ee,query:s===lg?MC(F.query):F.query||{}},ne,{redirectedFrom:void 0,href:E})}function x(F){return typeof F=="string"?Uu(n,F,c.value.path):Pe({},F)}function M(F,Z){if(u!==F)return Ti(8,{from:Z,to:F})}function L(F){return S(F)}function K(F){return L(Pe(x(F),{replace:!0}))}function J(F){const Z=F.matched[F.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ne=typeof Y=="function"?Y(F):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=x(ne):{path:ne},ne.params={}),Pe({query:F.query,hash:F.hash,params:ne.path!=null?{}:F.params},ne)}}function S(F,Z){const Y=u=O(F),ne=c.value,Ee=F.state,Ve=F.force,E=F.replace===!0,R=J(Y);if(R)return S(Pe(x(R),{state:typeof R=="object"?Pe({},Ee,R.state):Ee,force:Ve,replace:E}),Z||Y);const N=Y;N.redirectedFrom=Z;let $;return!Ve&&iC(s,ne,Y)&&($=Ti(16,{to:N,from:ne}),nn(ne,ne,!0,!1)),($?Promise.resolve($):w(N,ne)).catch(V=>Zn(V)?Zn(V,2)?V:pn(V):ge(V,N,ne)).then(V=>{if(V){if(Zn(V,2))return S(Pe({replace:E},x(V.to),{state:typeof V.to=="object"?Pe({},Ee,V.to.state):Ee,force:Ve}),Z||N)}else V=C(N,ne,!0,E,Ee);return b(N,ne,V),V})}function v(F,Z){const Y=M(F,Z);return Y?Promise.reject(Y):Promise.resolve()}function y(F){const Z=Is.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(F):F()}function w(F,Z){let Y;const[ne,Ee,Ve]=WC(F,Z);Y=Bu(ne.reverse(),"beforeRouteLeave",F,Z);for(const R of ne)R.leaveGuards.forEach(N=>{Y.push(Ms(N,F,Z))});const E=v.bind(null,F,Z);return Y.push(E),Wt(Y).then(()=>{Y=[];for(const R of i.list())Y.push(Ms(R,F,Z));return Y.push(E),Wt(Y)}).then(()=>{Y=Bu(Ee,"beforeRouteUpdate",F,Z);for(const R of Ee)R.updateGuards.forEach(N=>{Y.push(Ms(N,F,Z))});return Y.push(E),Wt(Y)}).then(()=>{Y=[];for(const R of Ve)if(R.beforeEnter)if(An(R.beforeEnter))for(const N of R.beforeEnter)Y.push(Ms(N,F,Z));else Y.push(Ms(R.beforeEnter,F,Z));return Y.push(E),Wt(Y)}).then(()=>(F.matched.forEach(R=>R.enterCallbacks={}),Y=Bu(Ve,"beforeRouteEnter",F,Z,y),Y.push(E),Wt(Y))).then(()=>{Y=[];for(const R of o.list())Y.push(Ms(R,F,Z));return Y.push(E),Wt(Y)}).catch(R=>Zn(R,8)?R:Promise.reject(R))}function b(F,Z,Y){a.list().forEach(ne=>y(()=>ne(F,Z,Y)))}function C(F,Z,Y,ne,Ee){const Ve=M(F,Z);if(Ve)return Ve;const E=Z===bs,R=ti?history.state:{};Y&&(ne||E?r.replace(F.fullPath,Pe({scroll:E&&R&&R.scroll},Ee)):r.push(F.fullPath,Ee)),c.value=F,nn(F,Z,Y,E),pn()}let I;function be(){I||(I=r.listen((F,Z,Y)=>{if(!Pn.listening)return;const ne=O(F),Ee=J(ne);if(Ee){S(Pe(Ee,{replace:!0,force:!0}),ne).catch(bo);return}u=ne;const Ve=c.value;ti&&fC(Zm(Ve.fullPath,Y.delta),bc()),w(ne,Ve).catch(E=>Zn(E,12)?E:Zn(E,2)?(S(Pe(x(E.to),{force:!0}),ne).then(R=>{Zn(R,20)&&!Y.delta&&Y.type===Go.pop&&r.go(-1,!1)}).catch(bo),Promise.reject()):(Y.delta&&r.go(-Y.delta,!1),ge(E,ne,Ve))).then(E=>{E=E||C(ne,Ve,!1),E&&(Y.delta&&!Zn(E,8)?r.go(-Y.delta,!1):Y.type===Go.pop&&Zn(E,20)&&r.go(-1,!1)),b(ne,Ve,E)}).catch(bo)}))}let tt=io(),Me=io(),ue;function ge(F,Z,Y){pn(F);const ne=Me.list();return ne.length?ne.forEach(Ee=>Ee(F,Z,Y)):console.error(F),Promise.reject(F)}function Qt(){return ue&&c.value!==bs?Promise.resolve():new Promise((F,Z)=>{tt.add([F,Z])})}function pn(F){return ue||(ue=!F,be(),tt.list().forEach(([Z,Y])=>F?Y(F):Z()),tt.reset()),F}function nn(F,Z,Y,ne){const{scrollBehavior:Ee}=t;if(!ti||!Ee)return Promise.resolve();const Ve=!Y&&pC(Zm(F.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return vc().then(()=>Ee(F,Z,Ve)).then(E=>E&&dC(E)).catch(E=>ge(E,F,Z))}const Ge=F=>r.go(F);let Qe;const Is=new Set,Pn={currentRoute:c,listening:!0,addRoute:g,removeRoute:T,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:A,resolve:O,options:t,push:L,replace:K,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Me.add,isReady:Qt,install(F){const Z=this;F.component("RouterLink",FC),F.component("RouterView",jC),F.config.globalProperties.$router=Z,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>hs(c)}),ti&&!Qe&&c.value===bs&&(Qe=!0,L(r.location).catch(Ee=>{}));const Y={};for(const Ee in bs)Object.defineProperty(Y,Ee,{get:()=>c.value[Ee],enumerable:!0});F.provide(Pc,Z),F.provide(jd,zy(Y)),F.provide(Rh,c);const ne=F.unmount;Is.add(F),F.unmount=function(){Is.delete(F),Is.size<1&&(u=bs,I&&I(),I=null,c.value=bs,Qe=!1,ue=!1),ne()}}};function Wt(F){return F.reduce((Z,Y)=>Z.then(()=>y(Y)),Promise.resolve())}return Pn}function WC(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ei(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ei(u,c))||r.push(c))}return[n,s,r]}function dE(){return Gt(Pc)}function HC(t){return Gt(jd)}var pg={};/**
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
 */const fE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Q=function(t,e){if(!t)throw Mi(e)},Mi=function(t){return new Error("Firebase Database ("+fE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const pE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},zC=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),s.push(n[h],n[d],n[m],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new KC;const m=i<<2|a>>4;if(s.push(m),u!==64){const g=a<<4&240|u>>2;if(s.push(g),d!==64){const T=u<<6&192|d;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mE=function(t){const e=pE(t);return kc.encodeByteArray(e,!0)},Ol=function(t){return mE(t).replace(/\./g,"")},Dl=function(t){try{return kc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GC(t){return gE(void 0,t)}function gE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!QC(n)||(t[n]=gE(t[n],e[n]));return t}function QC(t){return t!=="__proto__"}/**
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
 */function YC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XC=()=>YC().__FIREBASE_DEFAULTS__,JC=()=>{if(typeof process>"u"||typeof pg>"u")return;const t=pg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dl(t[1]);return e&&JSON.parse(e)},Nc=()=>{try{return XC()||JC()||ZC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_E=t=>{var e,n;return(n=(e=Nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eb=t=>{const e=_E(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yE=()=>{var t;return(t=Nc())===null||t===void 0?void 0:t.config},vE=t=>{var e;return(e=Nc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function tb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ol(JSON.stringify(n)),Ol(JSON.stringify(o)),""].join(".")}/**
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function nb(){var t;const e=(t=Nc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function EE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ib(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TE(){return fE.NODE_ADMIN===!0}function ob(){return!nb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function IE(){try{return typeof indexedDB=="object"}catch{return!1}}function ab(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const lb="FirebaseError";class Kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lb,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?cb(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Kn(r,a,s)}}function cb(t,e){return t.replace(ub,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ub=/\{\$([^}]+)}/g;/**
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
 */function Yo(t){return JSON.parse(t)}function yt(t){return JSON.stringify(t)}/**
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
 */const wE=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Yo(Dl(i[0])||""),n=Yo(Dl(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},hb=function(t){const e=wE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},db=function(t){const e=wE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ts(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Sh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ml(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Ll(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(mg(i)&&mg(o)){if(!Ll(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function mg(t){return t!==null&&typeof t=="object"}/**
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
 */function xi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class fb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const m=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(m<<1|m>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const m=(r<<5|r>>>27)+u+c+h+s[d]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=m}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function pb(t,e){const n=new mb(t,e);return n.subscribe.bind(n)}class mb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=$u),r.error===void 0&&(r.error=$u),r.complete===void 0&&(r.complete=$u);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $u(){}function _b(t,e){return`${t} failed: ${e} argument `}/**
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
 */const yb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,Q(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Oc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vr="[DEFAULT]";/**
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
 */class vb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tb(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Eb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eb(t){return t===vr?void 0:t}function Tb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ib{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const wb={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Ab=me.INFO,Rb={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Sb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Rb[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class da{constructor(e){this.name=e,this._logLevel=Ab,this._logHandler=Sb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const Cb=(t,e)=>e.some(n=>t instanceof n);let gg,_g;function bb(){return gg||(gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pb(){return _g||(_g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AE=new WeakMap,Ch=new WeakMap,RE=new WeakMap,ju=new WeakMap,Wd=new WeakMap;function kb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(js(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&AE.set(n,t)}).catch(()=>{}),Wd.set(e,t),e}function Nb(t){if(Ch.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ch.set(t,e)}let bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return js(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ob(t){bh=t(bh)}function Db(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qu(this),e,...n);return RE.set(s,e.sort?e.sort():[e]),js(s)}:Pb().includes(t)?function(...e){return t.apply(qu(this),e),js(AE.get(this))}:function(...e){return js(t.apply(qu(this),e))}}function Mb(t){return typeof t=="function"?Db(t):(t instanceof IDBTransaction&&Nb(t),Cb(t,bb())?new Proxy(t,bh):t)}function js(t){if(t instanceof IDBRequest)return kb(t);if(ju.has(t))return ju.get(t);const e=Mb(t);return e!==t&&(ju.set(t,e),Wd.set(e,t)),e}const qu=t=>Wd.get(t);function Lb(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=js(o);return s&&o.addEventListener("upgradeneeded",c=>{s(js(o.result),c.oldVersion,c.newVersion,js(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const xb=["get","getKey","getAll","getAllKeys","count"],Vb=["put","add","delete","clear"],Wu=new Map;function yg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wu.get(e))return Wu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Vb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||xb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Wu.set(e,i),i}Ob(t=>({...t,get:(e,n,s)=>yg(e,n)||t.get(e,n,s),has:(e,n)=>!!yg(e,n)||t.has(e,n)}));/**
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
 */class Fb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ub(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ub(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ph="@firebase/app",vg="0.10.17";/**
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
 */const gs=new da("@firebase/app"),Bb="@firebase/app-compat",$b="@firebase/analytics-compat",jb="@firebase/analytics",qb="@firebase/app-check-compat",Wb="@firebase/app-check",Hb="@firebase/auth",zb="@firebase/auth-compat",Kb="@firebase/database",Gb="@firebase/data-connect",Qb="@firebase/database-compat",Yb="@firebase/functions",Xb="@firebase/functions-compat",Jb="@firebase/installations",Zb="@firebase/installations-compat",eP="@firebase/messaging",tP="@firebase/messaging-compat",nP="@firebase/performance",sP="@firebase/performance-compat",rP="@firebase/remote-config",iP="@firebase/remote-config-compat",oP="@firebase/storage",aP="@firebase/storage-compat",lP="@firebase/firestore",cP="@firebase/vertexai",uP="@firebase/firestore-compat",hP="firebase",dP="11.1.0";/**
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
 */const kh="[DEFAULT]",fP={[Ph]:"fire-core",[Bb]:"fire-core-compat",[jb]:"fire-analytics",[$b]:"fire-analytics-compat",[Wb]:"fire-app-check",[qb]:"fire-app-check-compat",[Hb]:"fire-auth",[zb]:"fire-auth-compat",[Kb]:"fire-rtdb",[Gb]:"fire-data-connect",[Qb]:"fire-rtdb-compat",[Yb]:"fire-fn",[Xb]:"fire-fn-compat",[Jb]:"fire-iid",[Zb]:"fire-iid-compat",[eP]:"fire-fcm",[tP]:"fire-fcm-compat",[nP]:"fire-perf",[sP]:"fire-perf-compat",[rP]:"fire-rc",[iP]:"fire-rc-compat",[oP]:"fire-gcs",[aP]:"fire-gcs-compat",[lP]:"fire-fst",[uP]:"fire-fst-compat",[cP]:"fire-vertex","fire-js":"fire-js",[hP]:"fire-js-all"};/**
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
 */const xl=new Map,pP=new Map,Nh=new Map;function Eg(t,e){try{t.container.addComponent(e)}catch(n){gs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(Nh.has(e))return gs.debug(`There were multiple attempts to register component ${e}.`),!1;Nh.set(e,t);for(const n of xl.values())Eg(n,t);for(const n of pP.values())Eg(n,t);return!0}function Hd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dn(t){return t.settings!==void 0}/**
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
 */const mP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qs=new Li("app","Firebase",mP);/**
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
 */class gP{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qs.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=dP;function SE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:kh,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw qs.create("bad-app-name",{appName:String(r)});if(n||(n=yE()),!n)throw qs.create("no-options");const i=xl.get(r);if(i){if(Ll(n,i.options)&&Ll(s,i.config))return i;throw qs.create("duplicate-app",{appName:r})}const o=new Ib(r);for(const c of Nh.values())o.addComponent(c);const a=new gP(n,s,o);return xl.set(r,a),a}function zd(t=kh){const e=xl.get(t);if(!e&&t===kh&&yE())return SE();if(!e)throw qs.create("no-app",{appName:t});return e}function en(t,e,n){var s;let r=(s=fP[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gs.warn(a.join(" "));return}qn(new Rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const _P="firebase-heartbeat-database",yP=1,Xo="firebase-heartbeat-store";let Hu=null;function CE(){return Hu||(Hu=Lb(_P,yP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw qs.create("idb-open",{originalErrorMessage:t.message})})),Hu}async function vP(t){try{const n=(await CE()).transaction(Xo),s=await n.objectStore(Xo).get(bE(t));return await n.done,s}catch(e){if(e instanceof Kn)gs.warn(e.message);else{const n=qs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gs.warn(n.message)}}}async function Tg(t,e){try{const s=(await CE()).transaction(Xo,"readwrite");await s.objectStore(Xo).put(e,bE(t)),await s.done}catch(n){if(n instanceof Kn)gs.warn(n.message);else{const s=qs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gs.warn(s.message)}}}function bE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const EP=1024,TP=30*24*60*60*1e3;class IP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AP(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ig();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=TP}),this._storage.overwrite(this._heartbeatsCache))}catch(s){gs.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ig(),{heartbeatsToSend:s,unsentEntries:r}=wP(this._heartbeatsCache.heartbeats),i=Ol(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return gs.warn(n),""}}}function Ig(){return new Date().toISOString().substring(0,10)}function wP(t,e=EP){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),wg(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),wg(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class AP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IE()?ab().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wg(t){return Ol(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RP(t){qn(new Rn("platform-logger",e=>new Fb(e),"PRIVATE")),qn(new Rn("heartbeat",e=>new IP(e),"PRIVATE")),en(Ph,vg,t),en(Ph,vg,"esm2017"),en("fire-js","")}RP("");function Kd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function PE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SP=PE,kE=new Li("auth","Firebase",PE());/**
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
 */const Vl=new da("@firebase/auth");function CP(t,...e){Vl.logLevel<=me.WARN&&Vl.warn(`Auth (${rr}): ${t}`,...e)}function fl(t,...e){Vl.logLevel<=me.ERROR&&Vl.error(`Auth (${rr}): ${t}`,...e)}/**
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
 */function Sn(t,...e){throw Gd(t,...e)}function Un(t,...e){return Gd(t,...e)}function NE(t,e,n){const s=Object.assign(Object.assign({},SP()),{[e]:n});return new Li("auth","Firebase",s).create(e,{appName:t.name})}function fs(t){return NE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return kE.create(t,...e)}function ce(t,e,...n){if(!t)throw Gd(e,...n)}function os(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fl(e),new Error(e)}function _s(t,e){t||os(e)}/**
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
 */function Oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bP(){return Ag()==="http:"||Ag()==="https:"}function Ag(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bP()||rb()||"connection"in navigator)?navigator.onLine:!0}function kP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,_s(n>e,"Short delay should be less than long delay!"),this.isMobile=qd()||EE()}get(){return PP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qd(t,e){_s(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class OE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;os("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;os("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;os("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OP=new fa(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,s,r={}){return DE(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return sb()||(u.referrerPolicy="no-referrer"),OE.fetch()(ME(t,t.config.apiHost,n,a),u)})}async function DE(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},NP),e);try{const r=new MP(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qa(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw NE(t,h,u);Sn(t,h)}}catch(r){if(r instanceof Kn)throw r;Sn(t,"network-request-failed",{message:String(r)})}}async function pa(t,e,n,s,r={}){const i=await or(t,e,n,s,r);return"mfaPendingCredential"in i&&Sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ME(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Qd(t.config,r):`${t.config.apiScheme}://${r}`}function DP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Un(this.auth,"network-request-failed")),OP.get())})}}function Qa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Un(t,e,s);return r.customData._tokenResponse=n,r}function Rg(t){return t!==void 0&&t.enterprise!==void 0}class LP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xP(t,e){return or(t,"GET","/v2/recaptchaConfig",ir(t,e))}/**
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
 */async function VP(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function LE(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FP(t,e=!1){const n=at(t),s=await n.getIdToken(e),r=Yd(s);ce(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ko(zu(r.auth_time)),issuedAtTime:ko(zu(r.iat)),expirationTime:ko(zu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zu(t){return Number(t)*1e3}function Yd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return fl("JWT malformed, contained fewer than 3 sections"),null;try{const r=Dl(n);return r?JSON.parse(r):(fl("Failed to decode base64 JWT payload"),null)}catch(r){return fl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Sg(t){const e=Yd(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Kn&&UP(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function UP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fl(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Jo(t,LE(n,{idToken:s}));ce(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xE(i.providerUserInfo):[],a=jP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Dh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function $P(t){const e=at(t);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jP(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function xE(t){return t.map(e=>{var{providerId:n}=e,s=Kd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function qP(t,e){const n=await DE(t,{},async()=>{const s=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ME(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",OE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WP(t,e){return or(t,"POST","/v2/accounts:revokeToken",ir(t,e))}/**
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
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Sg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await qP(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new fi;return s&&(ce(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ce(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return os("not implemented")}}/**
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
 */function Ps(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class as{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FP(this,e)}reload(){return $P(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new as(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(fs(this.auth));const e=await this.getIdToken();return await Jo(this,VP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:M,emailVerified:L,isAnonymous:K,providerData:J,stsTokenManager:S}=n;ce(M&&S,e,"internal-error");const v=fi.fromJSON(this.name,S);ce(typeof M=="string",e,"internal-error"),Ps(d,e.name),Ps(m,e.name),ce(typeof L=="boolean",e,"internal-error"),ce(typeof K=="boolean",e,"internal-error"),Ps(g,e.name),Ps(T,e.name),Ps(A,e.name),Ps(P,e.name),Ps(O,e.name),Ps(x,e.name);const y=new as({uid:M,auth:e,email:m,emailVerified:L,displayName:d,isAnonymous:K,photoURL:T,phoneNumber:g,tenantId:A,stsTokenManager:v,createdAt:O,lastLoginAt:x});return J&&Array.isArray(J)&&(y.providerData=J.map(w=>Object.assign({},w))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,n,s=!1){const r=new fi;r.updateFromServerResponse(n);const i=new as({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Fl(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ce(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?xE(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new fi;a.updateFromIdToken(s);const c=new as({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Dh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Cg=new Map;function ls(t){_s(t instanceof Function,"Expected a class definition");let e=Cg.get(t);return e?(_s(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cg.set(t,e),e)}/**
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
 */class VE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VE.type="NONE";const bg=VE;/**
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
 */function pl(t,e,n){return`firebase:${t}:${e}:${n}`}class pi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=pl(this.userKey,r.apiKey,i),this.fullPersistenceKey=pl("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?as._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pi(ls(bg),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||ls(bg);const o=pl(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=as._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pi(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new pi(i,e,s))}}/**
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
 */function Pg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($E(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qE(e))return"Blackberry";if(WE(e))return"Webos";if(UE(e))return"Safari";if((e.includes("chrome/")||BE(e))&&!e.includes("edge/"))return"Chrome";if(jE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function FE(t=Mt()){return/firefox\//i.test(t)}function UE(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BE(t=Mt()){return/crios\//i.test(t)}function $E(t=Mt()){return/iemobile/i.test(t)}function jE(t=Mt()){return/android/i.test(t)}function qE(t=Mt()){return/blackberry/i.test(t)}function WE(t=Mt()){return/webos/i.test(t)}function Xd(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HP(t=Mt()){var e;return Xd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zP(){return ib()&&document.documentMode===10}function HE(t=Mt()){return Xd(t)||jE(t)||WE(t)||qE(t)||/windows phone/i.test(t)||$E(t)}/**
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
 */function zE(t,e=[]){let n;switch(t){case"Browser":n=Pg(Mt());break;case"Worker":n=`${Pg(Mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${s}`}/**
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
 */class KP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function GP(t,e={}){return or(t,"GET","/v2/passwordPolicy",ir(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const QP=6;class YP{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class XP{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kg(this),this.idTokenSubscription=new kg(this),this.beforeStateQueue=new KP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ls(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await LE(this,{idToken:e}),s=await as._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(fs(this));const n=e?at(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(fs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(fs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ls(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GP(this),n=new YP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await WP(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ls(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[ls(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fr(t){return at(t)}class kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=pb(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JP(t){Dc=t}function KE(t){return Dc.loadJS(t)}function ZP(){return Dc.recaptchaEnterpriseScript}function ek(){return Dc.gapiScript}function tk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class nk{constructor(){this.enterprise=new sk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class sk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const rk="recaptcha-enterprise",GE="NO_RECAPTCHA";class ik{constructor(e){this.type=rk,this.auth=Fr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{xP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new LP(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Rg(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(GE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nk().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Rg(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ZP();c.length!==0&&(c+=a),KE(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ng(t,e,n,s=!1,r=!1){const i=new ik(t);let o;if(r)o=GE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Mh(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ng(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ng(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function QE(t,e){const n=Hd(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ll(i,e??{}))return r;Sn(r,"already-initialized")}return n.initialize({options:e})}function ok(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ls);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ak(t,e,n){const s=Fr(t);ce(s._canInitEmulator,s,"emulator-config-failed"),ce(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=YE(e),{host:o,port:a}=lk(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),ck()}function YE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lk(t){const e=YE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Og(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Og(o)}}}function Og(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ck(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return os("not implemented")}_getIdTokenResponse(e){return os("not implemented")}_linkToIdToken(e,n){return os("not implemented")}_getReauthenticationResolver(e){return os("not implemented")}}async function uk(t,e){return or(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function hk(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}/**
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
 */async function dk(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function fk(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
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
 */class Zo extends Jd{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Zo(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Zo(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,n,"signInWithPassword",hk);case"emailLink":return dk(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,s,"signUpPassword",uk);case"emailLink":return fk(e,{idToken:n,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mi(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
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
 */const pk="http://localhost";class kr extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Kd(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new kr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,mi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:pk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
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
 */function mk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gk(t){const e=fo(po(t)).link,n=e?fo(po(e)).deep_link_id:null,s=fo(po(t)).deep_link_id;return(s?fo(po(s)).link:null)||s||n||e||t}class Zd{constructor(e){var n,s,r,i,o,a;const c=fo(po(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,d=mk((r=c.mode)!==null&&r!==void 0?r:null);ce(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gk(e);try{return new Zd(n)}catch{return null}}}/**
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
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,n){return Zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Zd.parseLink(n);return ce(s,"argument-error"),Zo._fromEmailAndCode(e,s.code,s.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class XE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ma extends XE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ls extends ma{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ls.credential(e.oauthAccessToken)}catch{return null}}}Ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ls.PROVIDER_ID="facebook.com";/**
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
 */class xs extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xs.credential(n,s)}catch{return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com";xs.PROVIDER_ID="google.com";/**
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
 */class Vs extends ma{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vs.credentialFromTaggedObject(e)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vs.credential(e.oauthAccessToken)}catch{return null}}}Vs.GITHUB_SIGN_IN_METHOD="github.com";Vs.PROVIDER_ID="github.com";/**
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
 */class Fs extends ma{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:Fs.PROVIDER_ID,signInMethod:Fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fs.credentialFromTaggedObject(e)}static credentialFromError(e){return Fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Fs.credential(n,s)}catch{return null}}}Fs.TWITTER_SIGN_IN_METHOD="twitter.com";Fs.PROVIDER_ID="twitter.com";/**
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
 */async function _k(t,e){return pa(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
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
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await as._fromIdTokenResponse(e,s,r),o=Dg(s);return new Nr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Dg(s);return new Nr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Dg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ul extends Kn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ul.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ul(e,n,s,r)}}function JE(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ul._fromErrorAndOperation(t,i,e,s):i})}async function yk(t,e,n=!1){const s=await Jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",s)}/**
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
 */async function vk(t,e,n=!1){const{auth:s}=t;if(Dn(s.app))return Promise.reject(fs(s));const r="reauthenticate";try{const i=await Jo(t,JE(s,r,e,t),n);ce(i.idToken,s,"internal-error");const o=Yd(i.idToken);ce(o,s,"internal-error");const{sub:a}=o;return ce(t.uid===a,s,"user-mismatch"),Nr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),i}}/**
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
 */async function ZE(t,e,n=!1){if(Dn(t.app))return Promise.reject(fs(t));const s="signIn",r=await JE(t,s,e),i=await Nr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Ek(t,e){return ZE(Fr(t),e)}/**
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
 */async function eT(t){const e=Fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Tk(t,e,n){if(Dn(t.app))return Promise.reject(fs(t));const s=Fr(t),o=await Mh(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_k).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&eT(t),c}),a=await Nr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Ik(t,e,n){return Dn(t.app)?Promise.reject(fs(t)):Ek(at(t),Vi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&eT(t),s})}function tT(t,e,n,s){return at(t).onIdTokenChanged(e,n,s)}function wk(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function Ak(t,e,n,s){return at(t).onAuthStateChanged(e,n,s)}function Rk(t){return at(t).signOut()}const Bl="__sak";/**
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
 */class nT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Sk=1e3,Ck=10;class sT extends nT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=HE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);zP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ck):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sT.type="LOCAL";const rT=sT;/**
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
 */class iT extends nT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iT.type="SESSION";const ef=iT;/**
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
 */function bk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Mc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await bk(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
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
 */function tf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=tf("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bn(){return window}function kk(t){Bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function oT(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function Nk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ok(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dk(){return oT()?self:null}/**
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
 */const aT="firebaseLocalStorageDb",Mk=1,$l="firebaseLocalStorage",lT="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lc(t,e){return t.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function Lk(){const t=indexedDB.deleteDatabase(aT);return new ga(t).toPromise()}function Lh(){const t=indexedDB.open(aT,Mk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore($l,{keyPath:lT})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains($l)?e(s):(s.close(),await Lk(),e(await Lh()))})})}async function Mg(t,e,n){const s=Lc(t,!0).put({[lT]:e,value:n});return new ga(s).toPromise()}async function xk(t,e){const n=Lc(t,!1).get(e),s=await new ga(n).toPromise();return s===void 0?null:s.value}function Lg(t,e){const n=Lc(t,!0).delete(e);return new ga(n).toPromise()}const Vk=800,Fk=3;class cT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Fk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(Dk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Nk(),!this.activeServiceWorker)return;this.sender=new Pk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ok()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lh();return await Mg(e,Bl,"1"),await Lg(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>xk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Lc(r,!1).getAll();return new ga(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cT.type="LOCAL";const uT=cT;new fa(3e4,6e4);/**
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
 */function Uk(t,e){return e?ls(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nf extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bk(t){return ZE(t.auth,new nf(t),t.bypassAuthState)}function $k(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),vk(n,new nf(t),t.bypassAuthState)}async function jk(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),yk(n,new nf(t),t.bypassAuthState)}/**
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
 */class hT{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bk;case"linkViaPopup":case"linkViaRedirect":return jk;case"reauthViaPopup":case"reauthViaRedirect":return $k;default:Sn(this.auth,"internal-error")}}resolve(e){_s(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_s(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qk=new fa(2e3,1e4);class oi extends hT{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){_s(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qk.get())};e()}}oi.currentPopupAction=null;/**
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
 */const Wk="pendingRedirect",ml=new Map;class Hk extends hT{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ml.get(this.auth._key());if(!e){try{const s=await zk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ml.set(this.auth._key(),e)}return this.bypassAuthState||ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zk(t,e){const n=Qk(e),s=Gk(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Kk(t,e){ml.set(t._key(),e)}function Gk(t){return ls(t._redirectPersistence)}function Qk(t){return pl(Wk,t.config.apiKey,t.name)}async function Yk(t,e,n=!1){if(Dn(t.app))return Promise.reject(fs(t));const s=Fr(t),r=Uk(s,e),o=await new Hk(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Xk=10*60*1e3;class Jk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dT(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Un(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xk&&this.cachedEventUids.clear(),this.cachedEventUids.has(xg(e))}saveEventToCache(e){this.cachedEventUids.add(xg(e)),this.lastProcessedEventTime=Date.now()}}function xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dT(t);default:return!1}}/**
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
 */async function eN(t,e={}){return or(t,"GET","/v1/projects",e)}/**
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
 */const tN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nN=/^https?/;async function sN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eN(t);for(const n of e)try{if(rN(n))return}catch{}Sn(t,"unauthorized-domain")}function rN(t){const e=Oh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!nN.test(n))return!1;if(tN.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const iN=new fa(3e4,6e4);function Vg(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oN(t){return new Promise((e,n)=>{var s,r,i;function o(){Vg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vg(),n(Un(t,"network-request-failed"))},timeout:iN.get()})}if(!((r=(s=Bn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Bn().gapi)===null||i===void 0)&&i.load)o();else{const a=tk("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(Un(t,"network-request-failed"))},KE(`${ek()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gl=null,e})}let gl=null;function aN(t){return gl=gl||oN(t),gl}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lN=new fa(5e3,15e3),cN="__/auth/iframe",uN="emulator/auth/iframe",hN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fN(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qd(e,uN):`https://${t.config.authDomain}/${cN}`,s={apiKey:e.apiKey,appName:t.name,v:rr},r=dN.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${xi(s).slice(1)}`}async function pN(t){const e=await aN(t),n=Bn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:fN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hN,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Un(t,"network-request-failed"),a=Bn().setTimeout(()=>{i(o)},lN.get());function c(){Bn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gN=500,_N=600,yN="_blank",vN="http://localhost";class Fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EN(t,e,n,s=gN,r=_N){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},mN),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Mt().toLowerCase();n&&(a=BE(u)?yN:n),FE(u)&&(e=e||vN,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[g,T])=>`${m}${g}=${T},`,"");if(HP(u)&&a!=="_self")return TN(e||"",a),new Fg(null);const d=window.open(e||"",a,h);ce(d,t,"popup-blocked");try{d.focus()}catch{}return new Fg(d)}function TN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const IN="__/auth/handler",wN="emulator/auth/handler",AN=encodeURIComponent("fac");async function Ug(t,e,n,s,r,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:rr,eventId:r};if(e instanceof XE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ma){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${AN}=${encodeURIComponent(c)}`:"";return`${RN(t)}?${xi(a).slice(1)}${u}`}function RN({config:t}){return t.emulator?Qd(t,wN):`https://${t.authDomain}/${IN}`}/**
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
 */const Ku="webStorageSupport";class SN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ef,this._completeRedirectFn=Yk,this._overrideRedirectResult=Kk}async _openPopup(e,n,s,r){var i;_s((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ug(e,n,s,Oh(),r);return EN(e,o,tf())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ug(e,n,s,Oh(),r);return kk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(_s(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await pN(e),s=new Jk(e);return n.register("authEvent",r=>(ce(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ku,{type:Ku},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ku];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return HE()||UE()||Xd()}}const fT=SN;var Bg="@firebase/auth",$g="1.8.1";/**
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
 */class CN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PN(t){qn(new Rn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zE(t)},u=new XP(s,r,i,c);return ok(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qn(new Rn("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(s=>new CN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Bg,$g,bN(t)),en(Bg,$g,"esm2017")}/**
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
 */const kN=5*60,NN=vE("authIdTokenMaxAge")||kN;let jg=null;const ON=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>NN)return;const r=n==null?void 0:n.token;jg!==r&&(jg=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function jl(t=zd()){const e=Hd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QE(t,{popupRedirectResolver:fT,persistence:[uT,rT,ef]}),s=vE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=ON(i.toString());wk(n,o,()=>o(n.currentUser)),tT(n,a=>o(a))}}const r=_E("auth");return r&&ak(n,`http://${r}`),n}function DN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JP({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Un("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",DN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PN("Browser");const xc=Bd("alert",()=>{const t=Dt(null);let e=null;const n=({title:r,text:i,type:o},a=3e3)=>{t.value={title:r,text:i,type:o},e=setTimeout(()=>s(),a)},s=()=>{t.value=null,clearTimeout(e)};return{alert:t,createAlert:n,clearAlert:s}}),MN={"auth/invalid-email":"Введите правильный email","auth/missing-password":"Введите пароль","auth/weak-password":"Пароль должен содержать минимум 6 символов","auth/email-already-in-use":"Email уже зарегистрирован"},LN={"auth/invalid-email":"Неправильный email","auth/missing-password":"Введите пароль","auth/invalid-credential":"Неправильные данные"},sf=Bd("auth",()=>{const{createAlert:t}=xc(),e=dE(),n=Dt(null),s=Dt(!1);return{currentUser:n,loading:s,signIn:async o=>{s.value=!0;const a=jl();await Ik(a,o.email,o.password).then(()=>{t({title:"Успешно",text:"Вы успешно вошли в систему",type:"primary"}),e.push("/")}).catch(c=>{t({title:"Ошибка",text:LN[c.code]||"Что-то пошло не так :(",type:"danger"})}),s.value=!1},signUp:async o=>{s.value=!0,await Tk(jl(),o.email,o.password).then(()=>{t({title:"Успешно",text:"Вы успешно зарегистрировались и вошли в систему",type:"primary"}),e.push("/")}).catch(a=>{t({title:"Ошибка",text:MN[a.code]||"Что-то пошло не так :(",type:"danger"})}),s.value=!1}}}),xN=zn({name:"LayoutAuth",components:{VLoader:Zv},setup(){const t=sf(),{loading:e}=Cc(t);return{loading:e}}}),VN={class:"layout-auth"},FN={class:"layout-auth__main"};function UN(t,e,n,s,r,i){const o=ds("router-view"),a=ds("v-loader");return et(),Fn("div",VN,[e[0]||(e[0]=Ue("div",{class:"layout-auth__background"},null,-1)),Ue("div",FN,[Ne(o),t.loading?(et(),cn(a,{key:0})):$s("",!0)])])}const BN=sr(xN,[["render",UN],["__scopeId","data-v-67bcc5ba"]]),$N=zn({name:"VButton",props:{to:{type:String,required:!1},type:{type:String,required:!1,validator(t){return["filled"].includes(t)}},size:{type:String,required:!1,default:"medium",validator(t){return["small","medium","big"].includes(t)}},color:{type:String,required:!1,default:"primary",validator(t){return["primary","white"].includes(t)}}},emits:["click"],setup(t,{emit:e}){const n=Ze(()=>t.to?"router-link":"button"),s=Ze(()=>({button:!0,[`button--${t.type}`]:t.type,[`button--${t.size}`]:t.size,[`button--${t.color}`]:t.color}));return{tag:n,classes:s,emitClick:()=>{e("click")}}}});function jN(t,e,n,s,r,i){return et(),cn(kR(t.tag),{class:Di(t.classes),onClick:t.emitClick,to:t.to||null},{default:is(()=>[Ev(t.$slots,"default",{},void 0,!0)]),_:3},8,["class","onClick","to"])}const qN=sr($N,[["render",jN],["__scopeId","data-v-c7cbe5b0"]]),WN=zn({name:"HeaderComponent",components:{VIcon:Yv,VButton:qN},setup(){const{createAlert:t}=xc(),e=dE(),{currentUser:n}=Cc(sf());return{authorized:Ze(()=>n.value),logout:()=>{Rk(jl()),t({title:"Успешно",text:"Вы вышли из системы",type:"primary"}),e.push("/login")}}}}),HN={class:"header"},zN={class:"header__container container"},KN={class:"header__actions"};function GN(t,e,n,s,r,i){const o=ds("v-icon"),a=ds("router-link"),c=ds("v-button");return et(),Fn("header",HN,[Ue("div",zN,[Ne(a,{to:"/",class:"header__logo"},{default:is(()=>[Ne(o,{name:"logo",width:"192",height:"80"})]),_:1}),e[3]||(e[3]=Ue("nav",{class:"header__nav"},[Ue("ul",{class:"header__menu"})],-1)),Ue("div",KN,[t.authorized?(et(),cn(c,{key:0,class:"header__action header__logout",onClick:t.logout},{default:is(()=>[e[0]||(e[0]=Ue("span",null,"Выйти",-1)),Ne(o,{name:"logout",width:"24",height:"24"})]),_:1},8,["onClick"])):$s("",!0),t.authorized?$s("",!0):(et(),cn(c,{key:1,to:"/login",class:"header__action header__login"},{default:is(()=>[e[1]||(e[1]=Ue("span",null,"Вход",-1)),Ne(o,{name:"login",width:"24",height:"24"})]),_:1})),t.authorized?$s("",!0):(et(),cn(c,{key:2,to:"/register",class:"header__action header__register",type:"filled"},{default:is(()=>[e[2]||(e[2]=Ue("span",null,"Регистрация",-1)),Ne(o,{name:"register",width:"24",height:"24"})]),_:1}))])])])}const QN=sr(WN,[["render",GN],["__scopeId","data-v-7a023888"]]),YN=zn({name:"Alert",setup(){const t=xc(),{alert:e}=Cc(t),{clearAlert:n}=t,s=Dt(""),r=Ze(()=>e.value&&!!Object.keys(e.value).length),i=Ze(()=>{var o;return["alert",(o=e.value)==null?void 0:o.type]});return{alert:e,alertRef:s,showAlert:r,classes:i,clearAlert:n}}}),XN={class:"alert__title"},JN={class:"alert__text"};function ZN(t,e,n,s,r,i){return et(),cn(ov,{to:"body"},[Ne(Wv,{name:"alert"},{default:is(()=>[t.showAlert?(et(),Fn("div",{key:0,class:Di(t.classes),ref:"alertRef"},[Ue("p",XN,lh(t.alert.title),1),Ue("p",JN,lh(t.alert.text),1),Ue("span",{class:"alert__close",onClick:e[0]||(e[0]=(...o)=>t.clearAlert&&t.clearAlert(...o))},"×")],2)):$s("",!0)]),_:1})])}const eO=sr(YN,[["render",ZN],["__scopeId","data-v-120bc206"]]),tO={class:"main"},nO={__name:"App",setup(t){const e=HC();return(n,s)=>(et(),Fn(zt,null,[Ne(QN),Ue("main",tO,[hs(e).meta.layout==="auth"?(et(),cn(BN,{key:0})):(et(),cn($S,{key:1}))]),Ne(eO)],64))}};/**
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
 */const sO=new Map,rO={activated:!1,tokenObservers:[]};function Cn(t){return sO.get(t)||Object.assign({},rO)}const qg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class iO{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Qo,this.pending.promise.catch(n=>{}),await oO(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Qo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function oO(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const aO={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ql=new Li("appCheck","AppCheck",aO);function pT(t){if(!Cn(t).activated)throw ql.create("use-before-activation",{appName:t.name})}/**
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
 */const lO="firebase-app-check-database",cO=1,xh="firebase-app-check-store";let Ya=null;function uO(){return Ya||(Ya=new Promise((t,e)=>{try{const n=indexedDB.open(lO,cO);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(ql.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(xh,{keyPath:"compositeKey"})}}}catch(n){e(ql.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ya)}function hO(t,e){return dO(fO(t),e)}async function dO(t,e){const s=(await uO()).transaction(xh,"readwrite"),i=s.objectStore(xh).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;a(ql.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function fO(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Vh=new da("@firebase/app-check");function Wg(t,e){return IE()?hO(t,e).catch(n=>{Vh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const pO={error:"UNKNOWN_ERROR"};function mO(t){return kc.encodeString(JSON.stringify(t),!1)}async function Fh(t,e=!1){const n=t.app;pT(n);const s=Cn(n);let r=s.token,i;if(r&&!mo(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(mo(c)?r=c:await Wg(n,void 0))}if(!e&&r&&mo(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await Cn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Vh.warn(c.message):Vh.error(c),i=c}let a;return r?i?mo(r)?a={token:r.token,internalError:i}:a=zg(i):(a={token:r.token},s.token=r,await Wg(n,r)):a=zg(i),o&&vO(n,a),a}async function gO(t){const e=t.app;pT(e);const{provider:n}=Cn(e);{const{token:s}=await n.getToken();return{token:s}}}function _O(t,e,n,s){const{app:r}=t,i=Cn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&mo(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Hg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Hg(t))}function mT(t,e){const n=Cn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Hg(t){const{app:e}=t,n=Cn(e);let s=n.tokenRefresher;s||(s=yO(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function yO(t){const{app:e}=t;return new iO(async()=>{const n=Cn(e);let s;if(n.token?s=await Fh(t,!0):s=await Fh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Cn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},qg.RETRIAL_MIN_WAIT,qg.RETRIAL_MAX_WAIT)}function vO(t,e){const n=Cn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function mo(t){return t.expireTimeMillis-Date.now()>0}function zg(t){return{token:mO(pO),error:t}}/**
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
 */class EO{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Cn(this.app);for(const n of e)mT(this.app,n.next);return Promise.resolve()}}function TO(t,e){return new EO(t,e)}function IO(t){return{getToken:e=>Fh(t,e),getLimitedUseToken:()=>gO(t),addTokenListener:e=>_O(t,"INTERNAL",e),removeTokenListener:e=>mT(t.app,e)}}const wO="@firebase/app-check",AO="0.8.10",RO="app-check",Kg="app-check-internal";function SO(){qn(new Rn(RO,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return TO(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Kg).initialize()})),qn(new Rn(Kg,t=>{const e=t.getProvider("app-check").getImmediate();return IO(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),en(wO,AO)}SO();var CO="firebase",bO="11.1.0";/**
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
 */en(CO,bO,"app");const gT=Symbol("firebaseApp");function Vc(t){return Fd()&&Gt(gT,null)||zd(t)}const Mn=()=>{};function rf(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function PO(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function Ur(t){return!!t&&typeof t=="object"}const kO=Object.prototype;function NO(t){return Ur(t)&&Object.getPrototypeOf(t)===kO}function of(t){return Ur(t)&&t.type==="document"}function OO(t){return Ur(t)&&t.type==="collection"}function DO(t){return of(t)||OO(t)}function MO(t){return Ur(t)&&t.type==="query"}function LO(t){return Ur(t)&&"ref"in t}function xO(t){return Ur(t)&&typeof t.bucket=="string"}function VO(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const FO=Symbol.for("v-scx");function UO(){return!!Gt(FO,0)}const Xa=new WeakMap;function BO(t,e){if(!Xa.has(t)){const n=Id(!0);Xa.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Xa.delete(t)}}return Xa.get(t)}const $O=new WeakMap,Ja=new WeakMap;function jO(t){const e=Vc(t);if(!Ja.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{Ja.set(e,i),n(i.value)}];Ja.set(e,r)}return Ja.get(e)}function qO(t,e){tT(e,n=>{const s=jO();t.value=n,Array.isArray(s)&&s[1](t)})}var Gg={};const Qg="@firebase/database",Yg="1.0.10";/**
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
 */let _T="";function WO(t){_T=t}/**
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
 */class HO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),yt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Yo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class zO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ts(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HO(e)}}catch{}return new zO},Ir=yT("localStorage"),KO=yT("sessionStorage");/**
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
 */const gi=new da("@firebase/database"),GO=function(){let t=1;return function(){return t++}}(),vT=function(t){const e=yb(t),n=new fb;n.update(e);const s=n.digest();return kc.encodeByteArray(s)},_a=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=_a.apply(null,s):typeof s=="object"?e+=yt(s):e+=s,e+=" "}return e};let No=null,Xg=!0;const QO=function(t,e){Q(!e,"Can't turn on custom loggers persistently."),gi.logLevel=me.VERBOSE,No=gi.log.bind(gi)},Pt=function(...t){if(Xg===!0&&(Xg=!1,No===null&&KO.get("logging_enabled")===!0&&QO()),No){const e=_a.apply(null,t);No(e)}},ya=function(t){return function(...e){Pt(t,...e)}},Uh=function(...t){const e="FIREBASE INTERNAL ERROR: "+_a(...t);gi.error(e)},Or=function(...t){const e=`FIREBASE FATAL ERROR: ${_a(...t)}`;throw gi.error(e),new Error(e)},tn=function(...t){const e="FIREBASE WARNING: "+_a(...t);gi.warn(e)},YO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ET=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wi="[MIN_NAME]",Dr="[MAX_NAME]",Fi=function(t,e){if(t===e)return 0;if(t===wi||e===Dr)return-1;if(e===wi||t===Dr)return 1;{const n=Jg(t),s=Jg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},JO=function(t,e){return t===e?0:t<e?-1:1},oo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+yt(e))},af=function(t){if(typeof t!="object"||t===null)return yt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=yt(e[s]),n+=":",n+=af(t[e[s]]);return n+="}",n},TT=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function fn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const IT=function(t){Q(!ET(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),d=d+m}return d.toLowerCase()},ZO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tD=new RegExp("^-?(0*)\\d{1,10}$"),nD=-2147483648,sD=2147483647,Jg=function(t){if(tD.test(t)){const e=Number(t);if(e>=nD&&e<=sD)return e}return null},va=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tn("Exception was thrown by user callback.",n),e},Math.floor(0))}},rD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Oo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class iD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){tn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class oD{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tn(e)}}/**
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
 */const lf="5",wT="v",AT="s",RT="r",ST="f",CT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bT="ls",PT="p",Bh="ac",kT="websocket",NT="long_polling";/**
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
 */class aD{constructor(e,n,s,r,i=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lD(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function OT(t,e,n){Q(typeof e=="string","typeof type must == string"),Q(typeof n=="object","typeof params must == object");let s;if(e===kT)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===NT)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lD(t)&&(n.ns=t.namespace);const r=[];return fn(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class cD{constructor(){this.counters_={}}incrementCounter(e,n=1){Ts(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return GC(this.counters_)}}/**
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
 */const Gu={},Qu={};function cf(t){const e=t.toString();return Gu[e]||(Gu[e]=new cD),Gu[e]}function uD(t,e){const n=t.toString();return Qu[n]||(Qu[n]=e()),Qu[n]}/**
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
 */class hD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&va(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zg="start",dD="close",fD="pLPCommand",pD="pRTLPCB",DT="id",MT="pw",LT="ser",mD="cb",gD="seg",_D="ts",yD="d",vD="dframe",xT=1870,VT=30,ED=xT-VT,TD=25e3,ID=3e4;class ai{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ya(e),this.stats_=cf(n),this.urlFn=c=>(this.appCheckToken&&(c[Bh]=this.appCheckToken),OT(n,NT,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ID)),XO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new uf((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zg)this.id=a,this.password=c;else if(o===dD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zg]="t",s[LT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[mD]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wT]=lf,this.transportSessionId&&(s[AT]=this.transportSessionId),this.lastSessionId&&(s[bT]=this.lastSessionId),this.applicationId&&(s[PT]=this.applicationId),this.appCheckToken&&(s[Bh]=this.appCheckToken),typeof location<"u"&&location.hostname&&CT.test(location.hostname)&&(s[RT]=ST);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ai.forceAllow_=!0}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){return ai.forceAllow_?!0:!ai.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZO()&&!eD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=mE(n),r=TT(s,ED);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[vD]="t",s[DT]=e,s[MT]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=yt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class uf{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=GO(),window[fD+this.uniqueCallbackIdentifier]=e,window[pD+this.uniqueCallbackIdentifier]=n,this.myIFrame=uf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Pt("frame writing exception"),a.stack&&Pt(a.stack),Pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[DT]=this.myID,e[MT]=this.myPW,e[LT]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+VT+s.length<=xT;){const o=this.pendingSegs.shift();s=s+"&"+gD+r+"="+o.seg+"&"+_D+r+"="+o.ts+"&"+yD+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(TD)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const wD=16384,AD=45e3;let Wl=null;typeof MozWebSocket<"u"?Wl=MozWebSocket:typeof WebSocket<"u"&&(Wl=WebSocket);class gn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ya(this.connId),this.stats_=cf(n),this.connURL=gn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[wT]=lf,typeof location<"u"&&location.hostname&&CT.test(location.hostname)&&(o[RT]=ST),n&&(o[AT]=n),s&&(o[bT]=s),r&&(o[Bh]=r),i&&(o[PT]=i),OT(e,kT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let s;TE(),this.mySock=new Wl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Wl!==null&&!gn.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Yo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=TT(n,wD);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(AD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gn.responsesRequiredToBeHealthy=2;gn.healthyTimeout=3e4;/**
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
 */class ea{static get ALL_TRANSPORTS(){return[ai,gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=gn&&gn.isAvailable();let s=n&&!gn.previouslyFailed();if(e.webSocketOnly&&(n||tn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[gn];else{const r=this.transports_=[];for(const i of ea.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);ea.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ea.globalTransportInitialized_=!1;/**
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
 */const RD=6e4,SD=5e3,CD=10*1024,bD=100*1024,Yu="t",e_="d",PD="s",t_="r",kD="e",n_="o",s_="a",r_="n",i_="p",ND="h";class OD{constructor(e,n,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ya("c:"+this.id+":"),this.transportManager_=new ea(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yu in e){const n=e[Yu];n===s_?this.upgradeIfSecondaryHealthy_():n===t_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===n_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oo("t",e),s=oo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:i_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:s_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:r_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oo("t",e),s=oo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oo(Yu,e);if(e_ in e){const s=e[e_];if(n===ND){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===r_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===PD?this.onConnectionShutdown_(s):n===t_?this.onReset_(s):n===kD?Uh("Server Error: "+s):n===n_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Uh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),lf!==s&&tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:i_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class FT{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class UT{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Hl extends UT{static getInstance(){return new Hl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const o_=32,a_=768;class ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Le(){return new ze("")}function we(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gs(t){return t.pieces_.length-t.pieceNum_}function We(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ze(t.pieces_,e)}function BT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $T(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ze(e,0)}function pt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ze)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new ze(n,0)}function ve(t){return t.pieceNum_>=t.pieces_.length}function an(t,e){const n=we(t),s=we(e);if(n===null)return e;if(n===s)return an(We(t),We(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qT(t,e){if(Gs(t)!==Gs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function _n(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Gs(t)>Gs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class MD{constructor(e,n){this.errorPrefix_=n,this.parts_=$T(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oc(this.parts_[s]);WT(this)}}function LD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oc(e),WT(t)}function xD(t){const e=t.parts_.pop();t.byteLength_-=Oc(e),t.parts_.length>0&&(t.byteLength_-=1)}function WT(t){if(t.byteLength_>a_)throw new Error(t.errorPrefix_+"has a key path longer than "+a_+" bytes ("+t.byteLength_+").");if(t.parts_.length>o_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+o_+") or object contains a cycle "+Er(t))}function Er(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class hf extends UT{static getInstance(){return new hf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ao=1e3,VD=60*5*1e3,l_=30*1e3,FD=1.3,UD=3e4,BD="server_kill",c_=3;class ps extends FT{constructor(e,n,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ps.nextPersistentConnectionId_++,this.log_=ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ao,this.maxReconnectDelay_=VD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!TE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(yt(i)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Qo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;ps.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ts(e,"w")){const s=Ii(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||db(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=l_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+yt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Uh("Unrecognized action received from server: "+yt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UD&&(this.reconnectDelay_=ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ps.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(d){Q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Pt("getToken() completed but was canceled"):(Pt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=m&&m.token,a=new OD(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{tn(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(BD)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&tn(d),c())}}}interrupt(e){Pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sh(this.interruptReasons_)&&(this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>af(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new ze(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=c_&&(this.reconnectDelay_=l_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=c_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_T.replace(/\./g,"-")]=1,qd()?e["framework.cordova"]=1:EE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hl.getInstance().currentlyOnline();return Sh(this.interruptReasons_)&&e}}ps.nextPersistentConnectionId_=0;ps.nextConnectionId_=0;/**
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
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
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
 */class Fc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Ae(wi,e),r=new Ae(wi,n);return this.compare(s,r)!==0}minPost(){return Ae.MIN}}/**
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
 */let Za;class HT extends Fc{static get __EMPTY_NODE(){return Za}static set __EMPTY_NODE(e){Za=e}compare(e,n){return Fi(e.name,n.name)}isDefinedOn(e){throw Mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Dr,Za)}makePost(e,n){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,Za)}toString(){return".key"}}const _i=new HT;/**
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
 */let el=class{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Xt=class go{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??go.RED,this.left=r??Ln.EMPTY_NODE,this.right=i??Ln.EMPTY_NODE}copy(e,n,s,r,i){return new go(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ln.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ln.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,go.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,go.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Xt.RED=!0;Xt.BLACK=!1;class $D{copy(e,n,s,r,i){return this}insert(e,n,s){return new Xt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Ln=class _l{constructor(e,n=_l.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _l(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xt.BLACK,null,null))}remove(e){return new _l(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new el(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new el(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new el(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new el(this.root_,null,this.comparator_,!0,e)}};Ln.EMPTY_NODE=new $D;/**
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
 */function jD(t,e){return Fi(t.name,e.name)}function df(t,e){return Fi(t,e)}/**
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
 */let $h;function qD(t){$h=t}const zT=function(t){return typeof t=="number"?"number:"+IT(t):"string:"+t},KT=function(t){if(t.isLeafNode()){const e=t.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ts(e,".sv"),"Priority must be a string or number.")}else Q(t===$h||t.isEmpty(),"priority of unexpected type.");Q(t===$h||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let u_;class ht{static set __childrenNodeConstructor(e){u_=e}static get __childrenNodeConstructor(){return u_}constructor(e,n=ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),KT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ve(e)?this:we(e)===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=we(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(Q(s!==".priority"||Gs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(We(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=IT(this.value_):e+=this.value_,this.lazyHash_=vT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ht.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=ht.VALUE_TYPE_ORDER.indexOf(n),i=ht.VALUE_TYPE_ORDER.indexOf(s);return Q(r>=0,"Unknown leaf type: "+n),Q(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let GT,QT;function WD(t){GT=t}function HD(t){QT=t}class zD extends Fc{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Fi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Dr,new ht("[PRIORITY-POST]",QT))}makePost(e,n){const s=GT(e);return new Ae(n,new ht("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ot=new zD;/**
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
 */const KD=Math.log(2);class GD{constructor(e){const n=i=>parseInt(Math.log(i)/KD,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zl=function(t,e,n,s){t.sort(e);const r=function(c,u){const h=u-c;let d,m;if(h===0)return null;if(h===1)return d=t[c],m=n?n(d):d,new Xt(m,d.node,Xt.BLACK,null,null);{const g=parseInt(h/2,10)+c,T=r(c,g),A=r(g+1,u);return d=t[g],m=n?n(d):d,new Xt(m,d.node,Xt.BLACK,T,A)}},i=function(c){let u=null,h=null,d=t.length;const m=function(T,A){const P=d-T,O=d;d-=T;const x=r(P+1,O),M=t[P],L=n?n(M):M;g(new Xt(L,M.node,A,null,x))},g=function(T){u?(u.left=T,u=T):(h=T,u=T)};for(let T=0;T<c.count;++T){const A=c.nextBitIsOne(),P=Math.pow(2,c.count-(T+1));A?m(P,Xt.BLACK):(m(P,Xt.BLACK),m(P,Xt.RED))}return h},o=new GD(t.length),a=i(o);return new Ln(s||e,a)};/**
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
 */let Xu;const Zr={};class cs{static get Default(){return Q(Zr&&Ot,"ChildrenNode.ts has not been loaded"),Xu=Xu||new cs({".priority":Zr},{".priority":Ot}),Xu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ln?n:null}hasIndex(e){return Ts(this.indexSet_,e.toString())}addIndex(e,n){Q(e!==_i,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Ae.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=zl(s,e.getCompare()):a=Zr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new cs(h,u)}addToIndexes(e,n){const s=Ml(this.indexes_,(r,i)=>{const o=Ii(this.indexSet_,i);if(Q(o,"Missing index implementation for "+i),r===Zr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ae.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),zl(a,o.getCompare())}else return Zr;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new Ae(e.name,a))),c.insert(e,e.node)}});return new cs(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ml(this.indexes_,r=>{if(r===Zr)return r;{const i=n.get(e.name);return i?r.remove(new Ae(e.name,i)):r}});return new cs(s,this.indexSet_)}}/**
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
 */let lo;class Oe{static get EMPTY_NODE(){return lo||(lo=new Oe(new Ln(df),null,cs.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&KT(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(e){return this.children_.isEmpty()?this:new Oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?lo:n}}getChild(e){const n=we(e);return n===null?this:this.getImmediateChild(n).getChild(We(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Ae(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?lo:this.priorityNode_;return new Oe(r,o,i)}}updateChild(e,n){const s=we(e);if(s===null)return n;{Q(we(e)!==".priority"||Gs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(We(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ot,(o,a)=>{n[o]=a.val(e),s++,i&&Oe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zT(this.getPriority().val())+":"),this.forEachChild(Ot,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":vT(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ea?-1:0}withIndex(e){if(e===_i||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_i||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ot),r=n.getIterator(Ot);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_i?null:this.indexMap_.get(e.toString())}}Oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QD extends Oe{constructor(){super(new Ln(df),Oe.EMPTY_NODE,cs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Oe.EMPTY_NODE}isEmpty(){return!1}}const Ea=new QD;Object.defineProperties(Ae,{MIN:{value:new Ae(wi,Oe.EMPTY_NODE)},MAX:{value:new Ae(Dr,Ea)}});HT.__EMPTY_NODE=Oe.EMPTY_NODE;ht.__childrenNodeConstructor=Oe;qD(Ea);HD(Ea);/**
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
 */const YD=!0;function kt(t,e=null){if(t===null)return Oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ht(n,kt(e))}if(!(t instanceof Array)&&YD){const n=[];let s=!1;if(fn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=kt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new Ae(o,c)))}}),n.length===0)return Oe.EMPTY_NODE;const i=zl(n,jD,o=>o.name,df);if(s){const o=zl(n,Ot.getCompare());return new Oe(i,kt(e),new cs({".priority":o},{".priority":Ot}))}else return new Oe(i,kt(e),cs.Default)}else{let n=Oe.EMPTY_NODE;return fn(t,(s,r)=>{if(Ts(t,s)&&s.substring(0,1)!=="."){const i=kt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(kt(e))}}WD(kt);/**
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
 */class XD extends Fc{constructor(e){super(),this.indexPath_=e,Q(!ve(e)&&we(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Fi(e.name,n.name):i}makePost(e,n){const s=kt(e),r=Oe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ae(n,r)}maxPost(){const e=Oe.EMPTY_NODE.updateChild(this.indexPath_,Ea);return new Ae(Dr,e)}toString(){return $T(this.indexPath_,0).join("/")}}/**
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
 */class JD extends Fc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Fi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const s=kt(e);return new Ae(n,s)}toString(){return".value"}}const ZD=new JD;/**
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
 */function e1(t){return{type:"value",snapshotNode:t}}function t1(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function n1(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function h_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function s1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ff{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wi}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ot}copy(){const e=new ff;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function d_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ot?n="$priority":t.index_===ZD?n="$value":t.index_===_i?n="$key":(Q(t.index_ instanceof XD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=yt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=yt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+yt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=yt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+yt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function f_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ot&&(e.i=t.index_.toString()),e}/**
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
 */class Kl extends FT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ya("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Kl.getListenId_(e,s),a={};this.listens_[o]=a;const c=d_(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),Ii(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",r(m,null)}})}unlisten(e,n){const s=Kl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=d_(e._queryParams),s=e._path.toString(),r=new Qo;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Yo(a.responseText)}catch{tn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&tn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class r1{constructor(){this.rootNode_=Oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Gl(){return{value:null,children:new Map}}function YT(t,e,n){if(ve(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=we(e);t.children.has(s)||t.children.set(s,Gl());const r=t.children.get(s);e=We(e),YT(r,e,n)}}function jh(t,e,n){t.value!==null?n(e,t.value):i1(t,(s,r)=>{const i=new ze(e.toString()+"/"+s);jh(r,i,n)})}function i1(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class o1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fn(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const p_=10*1e3,a1=30*1e3,l1=5*60*1e3;class c1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new o1(e);const s=p_+(a1-p_)*Math.random();Oo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;fn(e,(r,i)=>{i>0&&Ts(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*l1))}}/**
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
 */var xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function XT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function JT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ZT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ql{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=xn.ACK_USER_WRITE,this.source=XT()}operationForChild(e){if(ve(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ze(e));return new Ql(Le(),n,this.revert)}}else return Q(we(this.path)===e,"operationForChild called for unrelated child."),new Ql(We(this.path),this.affectedTree,this.revert)}}/**
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
 */class Mr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=xn.OVERWRITE}operationForChild(e){return ve(this.path)?new Mr(this.source,Le(),this.snap.getImmediateChild(e)):new Mr(this.source,We(this.path),this.snap)}}/**
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
 */class ta{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=xn.MERGE}operationForChild(e){if(ve(this.path)){const n=this.children.subtree(new ze(e));return n.isEmpty()?null:n.value?new Mr(this.source,Le(),n.value):new ta(this.source,Le(),n)}else return Q(we(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ta(this.source,We(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ve(e))return this.isFullyInitialized()&&!this.filtered_;const n=we(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function u1(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(s1(o.childName,o.snapshotNode))}),co(t,r,"child_removed",e,s,n),co(t,r,"child_added",e,s,n),co(t,r,"child_moved",i,s,n),co(t,r,"child_changed",e,s,n),co(t,r,"value",e,s,n),r}function co(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,c)=>d1(t,a,c)),o.forEach(a=>{const c=h1(t,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function h1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function d1(t,e,n){if(e.childName==null||n.childName==null)throw Mi("Should only compare child_ events.");const s=new Ae(e.childName,e.snapshotNode),r=new Ae(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function eI(t,e){return{eventCache:t,serverCache:e}}function Do(t,e,n,s){return eI(new pf(e,n,s),t.serverCache)}function tI(t,e,n,s){return eI(t.eventCache,new pf(e,n,s))}function qh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Lr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ju;const f1=()=>(Ju||(Ju=new Ln(JO)),Ju);class qe{static fromObject(e){let n=new qe(null);return fn(e,(s,r)=>{n=n.set(new ze(s),r)}),n}constructor(e,n=f1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Le(),value:this.value};if(ve(e))return null;{const s=we(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(We(e),n);return i!=null?{path:pt(new ze(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ve(e))return this;{const n=we(e),s=this.children.get(n);return s!==null?s.subtree(We(e)):new qe(null)}}set(e,n){if(ve(e))return new qe(n,this.children);{const s=we(e),i=(this.children.get(s)||new qe(null)).set(We(e),n),o=this.children.insert(s,i);return new qe(this.value,o)}}remove(e){if(ve(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=we(e),s=this.children.get(n);if(s){const r=s.remove(We(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new qe(null):new qe(this.value,i)}else return this}}get(e){if(ve(e))return this.value;{const n=we(e),s=this.children.get(n);return s?s.get(We(e)):null}}setTree(e,n){if(ve(e))return n;{const s=we(e),i=(this.children.get(s)||new qe(null)).setTree(We(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new qe(this.value,o)}}fold(e){return this.fold_(Le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(pt(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Le(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(ve(e))return null;{const i=we(e),o=this.children.get(i);return o?o.findOnPath_(We(e),pt(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Le(),n)}foreachOnPath_(e,n,s){if(ve(e))return this;{this.value&&s(n,this.value);const r=we(e),i=this.children.get(r);return i?i.foreachOnPath_(We(e),pt(n,r),s):new qe(null)}}foreach(e){this.foreach_(Le(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(pt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new qe(null))}}function Mo(t,e,n){if(ve(e))return new En(new qe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=an(r,e);return i=i.updateChild(o,n),new En(t.writeTree_.set(r,i))}else{const r=new qe(n),i=t.writeTree_.setTree(e,r);return new En(i)}}}function m_(t,e,n){let s=t;return fn(n,(r,i)=>{s=Mo(s,pt(e,r),i)}),s}function g_(t,e){if(ve(e))return En.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new En(n)}}function Wh(t,e){return Br(t,e)!=null}function Br(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(an(n.path,e)):null}function __(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ot,(s,r)=>{e.push(new Ae(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ae(s,r.value))}),e}function Ws(t,e){if(ve(e))return t;{const n=Br(t,e);return n!=null?new En(new qe(n)):new En(t.writeTree_.subtree(e))}}function Hh(t){return t.writeTree_.isEmpty()}function Ai(t,e){return nI(Le(),t.writeTree_,e)}function nI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(Q(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=nI(pt(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pt(t,".priority"),s)),n}}/**
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
 */function sI(t,e){return lI(e,t)}function p1(t,e,n,s,r){Q(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Mo(t.visibleWrites,e,n)),t.lastWriteId=s}function m1(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function g1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);Q(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&_1(a,s.path)?r=!1:_n(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return y1(t),!0;if(s.snap)t.visibleWrites=g_(t.visibleWrites,s.path);else{const a=s.children;fn(a,c=>{t.visibleWrites=g_(t.visibleWrites,pt(s.path,c))})}return!0}else return!1}function _1(t,e){if(t.snap)return _n(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_n(pt(t.path,n),e))return!0;return!1}function y1(t){t.visibleWrites=rI(t.allWrites,v1,Le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function v1(t){return t.visible}function rI(t,e,n){let s=En.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)_n(n,o)?(a=an(n,o),s=Mo(s,a,i.snap)):_n(o,n)&&(a=an(o,n),s=Mo(s,Le(),i.snap.getChild(a)));else if(i.children){if(_n(n,o))a=an(n,o),s=m_(s,a,i.children);else if(_n(o,n))if(a=an(o,n),ve(a))s=m_(s,Le(),i.children);else{const c=Ii(i.children,we(a));if(c){const u=c.getChild(We(a));s=Mo(s,Le(),u)}}}else throw Mi("WriteRecord should have .snap or .children")}}return s}function iI(t,e,n,s,r){if(!s&&!r){const i=Br(t.visibleWrites,e);if(i!=null)return i;{const o=Ws(t.visibleWrites,e);if(Hh(o))return n;if(n==null&&!Wh(o,Le()))return null;{const a=n||Oe.EMPTY_NODE;return Ai(o,a)}}}else{const i=Ws(t.visibleWrites,e);if(!r&&Hh(i))return n;if(!r&&n==null&&!Wh(i,Le()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(_n(u.path,e)||_n(e,u.path))},a=rI(t.allWrites,o,e),c=n||Oe.EMPTY_NODE;return Ai(a,c)}}}function E1(t,e,n){let s=Oe.EMPTY_NODE;const r=Br(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ot,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Ws(t.visibleWrites,e);return n.forEachChild(Ot,(o,a)=>{const c=Ai(Ws(i,new ze(o)),a);s=s.updateImmediateChild(o,c)}),__(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Ws(t.visibleWrites,e);return __(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function T1(t,e,n,s,r){Q(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=pt(e,n);if(Wh(t.visibleWrites,i))return null;{const o=Ws(t.visibleWrites,i);return Hh(o)?r.getChild(n):Ai(o,r.getChild(n))}}function I1(t,e,n,s){const r=pt(e,n),i=Br(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Ws(t.visibleWrites,r);return Ai(o,s.getNode().getImmediateChild(n))}else return null}function w1(t,e){return Br(t.visibleWrites,e)}function A1(t,e,n,s,r,i,o){let a;const c=Ws(t.visibleWrites,e),u=Br(c,Le());if(u!=null)a=u;else if(n!=null)a=Ai(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),m=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=m.getNext();for(;g&&h.length<r;)d(g,s)!==0&&h.push(g),g=m.getNext();return h}else return[]}function R1(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function zh(t,e,n,s){return iI(t.writeTree,t.treePath,e,n,s)}function oI(t,e){return E1(t.writeTree,t.treePath,e)}function y_(t,e,n,s){return T1(t.writeTree,t.treePath,e,n,s)}function Yl(t,e){return w1(t.writeTree,pt(t.treePath,e))}function S1(t,e,n,s,r,i){return A1(t.writeTree,t.treePath,e,n,s,r,i)}function mf(t,e,n){return I1(t.writeTree,t.treePath,e,n)}function aI(t,e){return lI(pt(t.treePath,e),t.writeTree)}function lI(t,e){return{treePath:t,writeTree:e}}/**
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
 */class C1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;Q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Q(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,h_(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,n1(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,t1(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,h_(s,e.snapshotNode,r.oldSnap));else throw Mi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class b1{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const cI=new b1;class gf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lr(this.viewCache_),i=S1(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function P1(t,e){Q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function k1(t,e,n,s,r){const i=new C1;let o,a;if(n.type===xn.OVERWRITE){const u=n;u.source.fromUser?o=Kh(t,e,u.path,u.snap,s,r,i):(Q(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ve(u.path),o=Xl(t,e,u.path,u.snap,s,r,a,i))}else if(n.type===xn.MERGE){const u=n;u.source.fromUser?o=O1(t,e,u.path,u.children,s,r,i):(Q(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Gh(t,e,u.path,u.children,s,r,a,i))}else if(n.type===xn.ACK_USER_WRITE){const u=n;u.revert?o=L1(t,e,u.path,s,r,i):o=D1(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===xn.LISTEN_COMPLETE)o=M1(t,e,n.path,s,i);else throw Mi("Unknown operation type: "+n.type);const c=i.getChanges();return N1(e,o,c),{viewCache:o,changes:c}}function N1(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=qh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(e1(qh(e)))}}function uI(t,e,n,s,r,i){const o=e.eventCache;if(Yl(s,n)!=null)return e;{let a,c;if(ve(n))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Lr(e),h=u instanceof Oe?u:Oe.EMPTY_NODE,d=oI(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=zh(s,Lr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=we(n);if(u===".priority"){Q(Gs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=y_(s,n,h,c);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=We(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=y_(s,n,o.getNode(),c);m!=null?d=o.getNode().getImmediateChild(u).updateChild(h,m):d=o.getNode().getImmediateChild(u)}else d=mf(s,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,r,i):a=o.getNode()}}return Do(e,a,o.isFullyInitialized()||ve(n),t.filter.filtersNodes())}}function Xl(t,e,n,s,r,i,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(ve(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=we(n);if(!c.isCompleteForPath(n)&&Gs(n)>1)return e;const T=We(n),P=c.getNode().getImmediateChild(g).updateChild(T,s);g===".priority"?u=h.updatePriority(c.getNode(),P):u=h.updateChild(c.getNode(),g,P,T,cI,null)}const d=tI(e,u,c.isFullyInitialized()||ve(n),h.filtersNodes()),m=new gf(r,d,i);return uI(t,d,n,r,m,a)}function Kh(t,e,n,s,r,i,o){const a=e.eventCache;let c,u;const h=new gf(r,e,i);if(ve(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Do(e,u,!0,t.filter.filtersNodes());else{const d=we(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=Do(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=We(n),g=a.getNode().getImmediateChild(d);let T;if(ve(m))T=s;else{const A=h.getCompleteChild(d);A!=null?BT(m)===".priority"&&A.getChild(jT(m)).isEmpty()?T=A:T=A.updateChild(m,s):T=Oe.EMPTY_NODE}if(g.equals(T))c=e;else{const A=t.filter.updateChild(a.getNode(),d,T,m,h,o);c=Do(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function v_(t,e){return t.eventCache.isCompleteForChild(e)}function O1(t,e,n,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=pt(n,c);v_(e,we(h))&&(a=Kh(t,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=pt(n,c);v_(e,we(h))||(a=Kh(t,a,h,u,r,i,o))}),a}function E_(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Gh(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;ve(n)?u=s:u=new qe(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,m)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),T=E_(t,g,m);c=Xl(t,c,new ze(d),T,r,i,o,a)}}),u.children.inorderTraversal((d,m)=>{const g=!e.serverCache.isCompleteForChild(d)&&m.value===null;if(!h.hasChild(d)&&!g){const T=e.serverCache.getNode().getImmediateChild(d),A=E_(t,T,m);c=Xl(t,c,new ze(d),A,r,i,o,a)}}),c}function D1(t,e,n,s,r,i,o){if(Yl(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ve(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Xl(t,e,n,c.getNode().getChild(n),r,i,a,o);if(ve(n)){let u=new qe(null);return c.getNode().forEachChild(_i,(h,d)=>{u=u.set(new ze(h),d)}),Gh(t,e,n,u,r,i,a,o)}else return e}else{let u=new qe(null);return s.foreach((h,d)=>{const m=pt(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),Gh(t,e,n,u,r,i,a,o)}}function M1(t,e,n,s,r){const i=e.serverCache,o=tI(e,i.getNode(),i.isFullyInitialized()||ve(n),i.isFiltered());return uI(t,o,n,s,cI,r)}function L1(t,e,n,s,r,i){let o;if(Yl(s,n)!=null)return e;{const a=new gf(s,e,r),c=e.eventCache.getNode();let u;if(ve(n)||we(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=zh(s,Lr(e));else{const d=e.serverCache.getNode();Q(d instanceof Oe,"serverChildren would be complete if leaf node"),h=oI(s,d)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=we(n);let d=mf(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,We(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Oe.EMPTY_NODE,We(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zh(s,Lr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Yl(s,Le())!=null,Do(e,u,o,t.filter.filtersNodes())}}function x1(t,e){const n=Lr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ve(e)&&!n.getImmediateChild(we(e)).isEmpty())?n.getChild(e):null}function T_(t,e,n,s){e.type===xn.MERGE&&e.source.queryId!==null&&(Q(Lr(t.viewCache_),"We should always have a full cache before handling merges"),Q(qh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=k1(t.processor_,r,e,n,s);return P1(t.processor_,i.viewCache),Q(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,V1(t,i.changes,i.viewCache.eventCache.getNode())}function V1(t,e,n,s){const r=t.eventRegistrations_;return u1(t.eventGenerator_,e,n,r)}/**
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
 */let I_;function F1(t){Q(!I_,"__referenceConstructor has already been defined"),I_=t}function _f(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return Q(i!=null,"SyncTree gave us an op for an invalid query."),T_(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(T_(o,e,n,s));return i}}function yf(t,e){let n=null;for(const s of t.views.values())n=n||x1(s,e);return n}/**
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
 */let w_;function U1(t){Q(!w_,"__referenceConstructor has already been defined"),w_=t}class A_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=R1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function B1(t,e,n,s,r){return p1(t.pendingWriteTree_,e,n,s,r),r?Bc(t,new Mr(XT(),e,n)):[]}function li(t,e,n=!1){const s=m1(t.pendingWriteTree_,e);if(g1(t.pendingWriteTree_,e)){let i=new qe(null);return s.snap!=null?i=i.set(Le(),!0):fn(s.children,o=>{i=i.set(new ze(o),!0)}),Bc(t,new Ql(s.path,i,n))}else return[]}function Uc(t,e,n){return Bc(t,new Mr(JT(),e,n))}function $1(t,e,n){const s=qe.fromObject(n);return Bc(t,new ta(JT(),e,s))}function j1(t,e,n,s){const r=pI(t,s);if(r!=null){const i=mI(r),o=i.path,a=i.queryId,c=an(o,e),u=new Mr(ZT(a),c,n);return gI(t,o,u)}else return[]}function q1(t,e,n,s){const r=pI(t,s);if(r){const i=mI(r),o=i.path,a=i.queryId,c=an(o,e),u=qe.fromObject(n),h=new ta(ZT(a),c,u);return gI(t,o,h)}else return[]}function hI(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=an(o,e),u=yf(a,c);if(u)return u});return iI(r,e,i,n,!0)}function Bc(t,e){return dI(e,t.syncPointTree_,null,sI(t.pendingWriteTree_,Le()))}function dI(t,e,n,s){if(ve(t.path))return fI(t,e,n,s);{const r=e.get(Le());n==null&&r!=null&&(n=yf(r,Le()));let i=[];const o=we(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=aI(s,o);i=i.concat(dI(a,c,u,h))}return r&&(i=i.concat(_f(r,t,s,n))),i}}function fI(t,e,n,s){const r=e.get(Le());n==null&&r!=null&&(n=yf(r,Le()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=aI(s,o),h=t.operationForChild(o);h&&(i=i.concat(fI(h,a,c,u)))}),r&&(i=i.concat(_f(r,t,s,n))),i}function pI(t,e){return t.tagToQueryMap.get(e)}function mI(t){const e=t.indexOf("$");return Q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ze(t.substr(0,e))}}function gI(t,e,n){const s=t.syncPointTree_.get(e);Q(s,"Missing sync point for query tag that we're tracking");const r=sI(t.pendingWriteTree_,e);return _f(s,n,r,null)}/**
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
 */class vf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vf(n)}node(){return this.node_}}class Ef{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pt(this.path_,e);return new Ef(this.syncTree_,n)}node(){return hI(this.syncTree_,this.path_)}}const W1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},R_=function(t,e,n){if(!t||typeof t!="object")return t;if(Q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return H1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return z1(t[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},H1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Q(!1,"Unexpected server value: "+t)}},z1=function(t,e,n){t.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&Q(!1,"Unexpected increment value: "+s);const r=e.node();if(Q(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},K1=function(t,e,n,s){return Tf(e,new Ef(n,t),s)},G1=function(t,e,n){return Tf(t,new vf(e),n)};function Tf(t,e,n){const s=t.getPriority().val(),r=R_(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=R_(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new ht(a,kt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new ht(r))),o.forEachChild(Ot,(a,c)=>{const u=Tf(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class If{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function wf(t,e){let n=e instanceof ze?e:new ze(e),s=t,r=we(n);for(;r!==null;){const i=Ii(s.node.children,r)||{children:{},childCount:0};s=new If(r,s,i),n=We(n),r=we(n)}return s}function Ui(t){return t.node.value}function _I(t,e){t.node.value=e,Qh(t)}function yI(t){return t.node.childCount>0}function Q1(t){return Ui(t)===void 0&&!yI(t)}function $c(t,e){fn(t.node.children,(n,s)=>{e(new If(n,t,s))})}function vI(t,e,n,s){n&&!s&&e(t),$c(t,r=>{vI(r,e,!0,s)}),n&&s&&e(t)}function Y1(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ta(t){return new ze(t.parent===null?t.name:Ta(t.parent)+"/"+t.name)}function Qh(t){t.parent!==null&&X1(t.parent,t.name,t)}function X1(t,e,n){const s=Q1(n),r=Ts(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Qh(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Qh(t))}/**
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
 */const J1=/[\[\].#$\/\u0000-\u001F\u007F]/,Z1=/[\[\].#$\u0000-\u001F\u007F]/,Zu=10*1024*1024,EI=function(t){return typeof t=="string"&&t.length!==0&&!J1.test(t)},eM=function(t){return typeof t=="string"&&t.length!==0&&!Z1.test(t)},tM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eM(t)},TI=function(t,e,n){const s=n instanceof ze?new MD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Er(s));if(typeof e=="function")throw new Error(t+"contains a function "+Er(s)+" with contents = "+e.toString());if(ET(e))throw new Error(t+"contains "+e.toString()+" "+Er(s));if(typeof e=="string"&&e.length>Zu/3&&Oc(e)>Zu)throw new Error(t+"contains a string greater than "+Zu+" utf8 bytes "+Er(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(fn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!EI(o)))throw new Error(t+" contains an invalid key ("+o+") "+Er(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LD(s,o),TI(t,a,s),xD(s)}),r&&i)throw new Error(t+' contains ".value" child '+Er(s)+" in addition to actual children.")}},nM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!EI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tM(n))throw new Error(_b(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class sM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rM(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!qT(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function $r(t,e,n){rM(t,n),iM(t,s=>_n(s,e)||_n(e,s))}function iM(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(oM(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function oM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();No&&Pt("event: "+n.toString()),va(s)}}}/**
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
 */const aM="repo_interrupt",lM=25;class cM{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gl(),this.transactionQueueTree_=new If,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uM(t,e,n){if(t.stats_=cf(t.repoInfo_),t.forceRestClient_||rD())t.server_=new Kl(t.repoInfo_,(s,r,i,o)=>{S_(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>C_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ps(t.repoInfo_,e,(s,r,i,o)=>{S_(t,s,r,i,o)},s=>{C_(t,s)},s=>{dM(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=uD(t.repoInfo_,()=>new c1(t.stats_,t.server_)),t.infoData_=new r1,t.infoSyncTree_=new A_({startListening:(s,r,i,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Uc(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Af(t,"connected",!1),t.serverSyncTree_=new A_({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);$r(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function hM(t){const n=t.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function II(t){return W1({timestamp:hM(t)})}function S_(t,e,n,s,r){t.dataUpdateCount++;const i=new ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=Ml(n,u=>kt(u));o=q1(t.serverSyncTree_,i,c,r)}else{const c=kt(n);o=j1(t.serverSyncTree_,i,c,r)}else if(s){const c=Ml(n,u=>kt(u));o=$1(t.serverSyncTree_,i,c)}else{const c=kt(n);o=Uc(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Sf(t,i)),$r(t.eventQueue_,a,o)}function C_(t,e){Af(t,"connected",e),e===!1&&pM(t)}function dM(t,e){fn(e,(n,s)=>{Af(t,n,s)})}function Af(t,e,n){const s=new ze("/.info/"+e),r=kt(n);t.infoData_.updateSnapshot(s,r);const i=Uc(t.infoSyncTree_,s,r);$r(t.eventQueue_,s,i)}function fM(t){return t.nextWriteId_++}function pM(t){wI(t,"onDisconnectEvents");const e=II(t),n=Gl();jh(t.onDisconnect_,Le(),(r,i)=>{const o=K1(r,i,t.serverSyncTree_,e);YT(n,r,o)});let s=[];jh(n,Le(),(r,i)=>{s=s.concat(Uc(t.serverSyncTree_,r,i));const o=yM(t,r);Sf(t,o)}),t.onDisconnect_=Gl(),$r(t.eventQueue_,Le(),s)}function mM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(aM)}function wI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pt(n,...e)}function AI(t,e,n){return hI(t.serverSyncTree_,e,n)||Oe.EMPTY_NODE}function Rf(t,e=t.transactionQueueTree_){if(e||jc(t,e),Ui(e)){const n=SI(t,e);Q(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&gM(t,Ta(e),n)}else yI(e)&&$c(e,n=>{Rf(t,n)})}function gM(t,e,n){const s=n.map(u=>u.currentWriteId),r=AI(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];Q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=an(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{wI(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(li(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&d.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();jc(t,wf(t.transactionQueueTree_,e)),Rf(t,t.transactionQueueTree_),$r(t.eventQueue_,e,h);for(let m=0;m<d.length;m++)va(d[m])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{tn("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Sf(t,e)}},o)}function Sf(t,e){const n=RI(t,e),s=Ta(n),r=SI(t,n);return _M(t,r,s),s}function _M(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=an(n,c.path);let h=!1,d;if(Q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,r=r.concat(li(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=lM)h=!0,d="maxretry",r=r.concat(li(t.serverSyncTree_,c.currentWriteId,!0));else{const m=AI(t,c.path,o);c.currentInputSnapshot=m;const g=e[a].update(m.val());if(g!==void 0){TI("transaction failed: Data returned ",g,c.path);let T=kt(g);typeof g=="object"&&g!=null&&Ts(g,".priority")||(T=T.updatePriority(m.getPriority()));const P=c.currentWriteId,O=II(t),x=G1(T,m,O);c.currentOutputSnapshotRaw=T,c.currentOutputSnapshotResolved=x,c.currentWriteId=fM(t),o.splice(o.indexOf(P),1),r=r.concat(B1(t.serverSyncTree_,c.path,x,c.currentWriteId,c.applyLocally)),r=r.concat(li(t.serverSyncTree_,P,!0))}else h=!0,d="nodata",r=r.concat(li(t.serverSyncTree_,c.currentWriteId,!0))}$r(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}jc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)va(s[a]);Rf(t,t.transactionQueueTree_)}function RI(t,e){let n,s=t.transactionQueueTree_;for(n=we(e);n!==null&&Ui(s)===void 0;)s=wf(s,n),e=We(e),n=we(e);return s}function SI(t,e){const n=[];return CI(t,e,n),n.sort((s,r)=>s.order-r.order),n}function CI(t,e,n){const s=Ui(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);$c(e,r=>{CI(t,r,n)})}function jc(t,e){const n=Ui(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,_I(e,n.length>0?n:void 0)}$c(e,s=>{jc(t,s)})}function yM(t,e){const n=Ta(RI(t,e)),s=wf(t.transactionQueueTree_,e);return Y1(s,r=>{eh(t,r)}),eh(t,s),vI(s,r=>{eh(t,r)}),n}function eh(t,e){const n=Ui(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Q(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(Q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(li(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?_I(e,void 0):n.length=i+1,$r(t.eventQueue_,Ta(e),r);for(let o=0;o<s.length;o++)va(s[o])}}/**
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
 */function vM(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function EM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):tn(`Invalid query segment '${n}' in query '${t}'`)}return e}const b_=function(t,e){const n=TM(t),s=n.namespace;n.domain==="firebase.com"&&Or(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Or("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||YO();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new aD(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new ze(n.pathString)}},TM=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(r=vM(t.substring(h,d)));const m=EM(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const T=e.indexOf(".");s=e.substring(0,T).toLowerCase(),n=e.substring(T+1),i=s}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class Cf{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return ve(this._path)?null:BT(this._path)}get ref(){return new Bi(this._repo,this._path)}get _queryIdentifier(){const e=f_(this._queryParams),n=af(e);return n==="{}"?"default":n}get _queryObject(){return f_(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof Cf))return!1;const n=this._repo===e._repo,s=qT(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+DD(this._path)}}class Bi extends Cf{constructor(e,n){super(e,n,new ff,!1)}get parent(){const e=jT(this._path);return e===null?null:new Bi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}F1(Bi);U1(Bi);/**
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
 */const IM="FIREBASE_DATABASE_EMULATOR_HOST",Yh={};let wM=!1;function AM(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Or("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=b_(i,r),a=o.repoInfo,c;typeof process<"u"&&Gg&&(c=Gg[IM]),c?(i=`http://${c}?ns=${a.namespace}`,o=b_(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new oD(t.name,t.options,e);nM("Invalid Firebase Database URL",o),ve(o.path)||Or("Database URL must point to the root of a Firebase Database (not including a child path).");const h=SM(a,t,u,new iD(t.name,n));return new CM(h,t)}function RM(t,e){const n=Yh[e];(!n||n[t.key]!==t)&&Or(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mM(t),delete n[t.key]}function SM(t,e,n,s){let r=Yh[e.name];r||(r={},Yh[e.name]=r);let i=r[t.toURLString()];return i&&Or("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new cM(t,wM,n,s),r[t.toURLString()]=i,i}class CM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bi(this._repo,Le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Or("Cannot call "+e+" on a deleted database.")}}/**
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
 */function bM(t){WO(rr),qn(new Rn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return AM(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),en(Qg,Yg,t),en(Qg,Yg,"esm2017")}ps.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ps.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bM();var P_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cr,bI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function y(){}y.prototype=v.prototype,S.D=v.prototype,S.prototype=new y,S.prototype.constructor=S,S.C=function(w,b,C){for(var I=Array(arguments.length-2),be=2;be<arguments.length;be++)I[be-2]=arguments[be];return v.prototype[b].apply(w,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,v,y){y||(y=0);var w=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)w[b]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(b=0;16>b;++b)w[b]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=S.g[0],y=S.g[1],b=S.g[2];var C=S.g[3],I=v+(C^y&(b^C))+w[0]+3614090360&4294967295;v=y+(I<<7&4294967295|I>>>25),I=C+(b^v&(y^b))+w[1]+3905402710&4294967295,C=v+(I<<12&4294967295|I>>>20),I=b+(y^C&(v^y))+w[2]+606105819&4294967295,b=C+(I<<17&4294967295|I>>>15),I=y+(v^b&(C^v))+w[3]+3250441966&4294967295,y=b+(I<<22&4294967295|I>>>10),I=v+(C^y&(b^C))+w[4]+4118548399&4294967295,v=y+(I<<7&4294967295|I>>>25),I=C+(b^v&(y^b))+w[5]+1200080426&4294967295,C=v+(I<<12&4294967295|I>>>20),I=b+(y^C&(v^y))+w[6]+2821735955&4294967295,b=C+(I<<17&4294967295|I>>>15),I=y+(v^b&(C^v))+w[7]+4249261313&4294967295,y=b+(I<<22&4294967295|I>>>10),I=v+(C^y&(b^C))+w[8]+1770035416&4294967295,v=y+(I<<7&4294967295|I>>>25),I=C+(b^v&(y^b))+w[9]+2336552879&4294967295,C=v+(I<<12&4294967295|I>>>20),I=b+(y^C&(v^y))+w[10]+4294925233&4294967295,b=C+(I<<17&4294967295|I>>>15),I=y+(v^b&(C^v))+w[11]+2304563134&4294967295,y=b+(I<<22&4294967295|I>>>10),I=v+(C^y&(b^C))+w[12]+1804603682&4294967295,v=y+(I<<7&4294967295|I>>>25),I=C+(b^v&(y^b))+w[13]+4254626195&4294967295,C=v+(I<<12&4294967295|I>>>20),I=b+(y^C&(v^y))+w[14]+2792965006&4294967295,b=C+(I<<17&4294967295|I>>>15),I=y+(v^b&(C^v))+w[15]+1236535329&4294967295,y=b+(I<<22&4294967295|I>>>10),I=v+(b^C&(y^b))+w[1]+4129170786&4294967295,v=y+(I<<5&4294967295|I>>>27),I=C+(y^b&(v^y))+w[6]+3225465664&4294967295,C=v+(I<<9&4294967295|I>>>23),I=b+(v^y&(C^v))+w[11]+643717713&4294967295,b=C+(I<<14&4294967295|I>>>18),I=y+(C^v&(b^C))+w[0]+3921069994&4294967295,y=b+(I<<20&4294967295|I>>>12),I=v+(b^C&(y^b))+w[5]+3593408605&4294967295,v=y+(I<<5&4294967295|I>>>27),I=C+(y^b&(v^y))+w[10]+38016083&4294967295,C=v+(I<<9&4294967295|I>>>23),I=b+(v^y&(C^v))+w[15]+3634488961&4294967295,b=C+(I<<14&4294967295|I>>>18),I=y+(C^v&(b^C))+w[4]+3889429448&4294967295,y=b+(I<<20&4294967295|I>>>12),I=v+(b^C&(y^b))+w[9]+568446438&4294967295,v=y+(I<<5&4294967295|I>>>27),I=C+(y^b&(v^y))+w[14]+3275163606&4294967295,C=v+(I<<9&4294967295|I>>>23),I=b+(v^y&(C^v))+w[3]+4107603335&4294967295,b=C+(I<<14&4294967295|I>>>18),I=y+(C^v&(b^C))+w[8]+1163531501&4294967295,y=b+(I<<20&4294967295|I>>>12),I=v+(b^C&(y^b))+w[13]+2850285829&4294967295,v=y+(I<<5&4294967295|I>>>27),I=C+(y^b&(v^y))+w[2]+4243563512&4294967295,C=v+(I<<9&4294967295|I>>>23),I=b+(v^y&(C^v))+w[7]+1735328473&4294967295,b=C+(I<<14&4294967295|I>>>18),I=y+(C^v&(b^C))+w[12]+2368359562&4294967295,y=b+(I<<20&4294967295|I>>>12),I=v+(y^b^C)+w[5]+4294588738&4294967295,v=y+(I<<4&4294967295|I>>>28),I=C+(v^y^b)+w[8]+2272392833&4294967295,C=v+(I<<11&4294967295|I>>>21),I=b+(C^v^y)+w[11]+1839030562&4294967295,b=C+(I<<16&4294967295|I>>>16),I=y+(b^C^v)+w[14]+4259657740&4294967295,y=b+(I<<23&4294967295|I>>>9),I=v+(y^b^C)+w[1]+2763975236&4294967295,v=y+(I<<4&4294967295|I>>>28),I=C+(v^y^b)+w[4]+1272893353&4294967295,C=v+(I<<11&4294967295|I>>>21),I=b+(C^v^y)+w[7]+4139469664&4294967295,b=C+(I<<16&4294967295|I>>>16),I=y+(b^C^v)+w[10]+3200236656&4294967295,y=b+(I<<23&4294967295|I>>>9),I=v+(y^b^C)+w[13]+681279174&4294967295,v=y+(I<<4&4294967295|I>>>28),I=C+(v^y^b)+w[0]+3936430074&4294967295,C=v+(I<<11&4294967295|I>>>21),I=b+(C^v^y)+w[3]+3572445317&4294967295,b=C+(I<<16&4294967295|I>>>16),I=y+(b^C^v)+w[6]+76029189&4294967295,y=b+(I<<23&4294967295|I>>>9),I=v+(y^b^C)+w[9]+3654602809&4294967295,v=y+(I<<4&4294967295|I>>>28),I=C+(v^y^b)+w[12]+3873151461&4294967295,C=v+(I<<11&4294967295|I>>>21),I=b+(C^v^y)+w[15]+530742520&4294967295,b=C+(I<<16&4294967295|I>>>16),I=y+(b^C^v)+w[2]+3299628645&4294967295,y=b+(I<<23&4294967295|I>>>9),I=v+(b^(y|~C))+w[0]+4096336452&4294967295,v=y+(I<<6&4294967295|I>>>26),I=C+(y^(v|~b))+w[7]+1126891415&4294967295,C=v+(I<<10&4294967295|I>>>22),I=b+(v^(C|~y))+w[14]+2878612391&4294967295,b=C+(I<<15&4294967295|I>>>17),I=y+(C^(b|~v))+w[5]+4237533241&4294967295,y=b+(I<<21&4294967295|I>>>11),I=v+(b^(y|~C))+w[12]+1700485571&4294967295,v=y+(I<<6&4294967295|I>>>26),I=C+(y^(v|~b))+w[3]+2399980690&4294967295,C=v+(I<<10&4294967295|I>>>22),I=b+(v^(C|~y))+w[10]+4293915773&4294967295,b=C+(I<<15&4294967295|I>>>17),I=y+(C^(b|~v))+w[1]+2240044497&4294967295,y=b+(I<<21&4294967295|I>>>11),I=v+(b^(y|~C))+w[8]+1873313359&4294967295,v=y+(I<<6&4294967295|I>>>26),I=C+(y^(v|~b))+w[15]+4264355552&4294967295,C=v+(I<<10&4294967295|I>>>22),I=b+(v^(C|~y))+w[6]+2734768916&4294967295,b=C+(I<<15&4294967295|I>>>17),I=y+(C^(b|~v))+w[13]+1309151649&4294967295,y=b+(I<<21&4294967295|I>>>11),I=v+(b^(y|~C))+w[4]+4149444226&4294967295,v=y+(I<<6&4294967295|I>>>26),I=C+(y^(v|~b))+w[11]+3174756917&4294967295,C=v+(I<<10&4294967295|I>>>22),I=b+(v^(C|~y))+w[2]+718787259&4294967295,b=C+(I<<15&4294967295|I>>>17),I=y+(C^(b|~v))+w[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,S.g[2]=S.g[2]+b&4294967295,S.g[3]=S.g[3]+C&4294967295}s.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var y=v-this.blockSize,w=this.B,b=this.h,C=0;C<v;){if(b==0)for(;C<=y;)r(this,S,C),C+=this.blockSize;if(typeof S=="string"){for(;C<v;)if(w[b++]=S.charCodeAt(C++),b==this.blockSize){r(this,w),b=0;break}}else for(;C<v;)if(w[b++]=S[C++],b==this.blockSize){r(this,w),b=0;break}}this.h=b,this.o+=v},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var y=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=y&255,y/=256;for(this.u(S),S=Array(16),v=y=0;4>v;++v)for(var w=0;32>w;w+=8)S[y++]=this.g[v]>>>w&255;return S};function i(S,v){var y=a;return Object.prototype.hasOwnProperty.call(y,S)?y[S]:y[S]=v(S)}function o(S,v){this.h=v;for(var y=[],w=!0,b=S.length-1;0<=b;b--){var C=S[b]|0;w&&C==v||(y[b]=C,w=!1)}this.g=y}var a={};function c(S){return-128<=S&&128>S?i(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return d;if(0>S)return P(u(-S));for(var v=[],y=1,w=0;S>=y;w++)v[w]=S/y|0,y*=4294967296;return new o(v,0)}function h(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return P(h(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),w=d,b=0;b<S.length;b+=8){var C=Math.min(8,S.length-b),I=parseInt(S.substring(b,b+C),v);8>C?(C=u(Math.pow(v,C)),w=w.j(C).add(u(I))):(w=w.j(y),w=w.add(u(I)))}return w}var d=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var S=0,v=1,y=0;y<this.g.length;y++){var w=this.i(y);S+=(0<=w?w:4294967296+w)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(T(this))return"0";if(A(this))return"-"+P(this).toString(S);for(var v=u(Math.pow(S,6)),y=this,w="";;){var b=L(y,v).g;y=O(y,b.j(v));var C=((0<y.g.length?y.g[0]:y.h)>>>0).toString(S);if(y=b,T(y))return C+w;for(;6>C.length;)C="0"+C;w=C+w}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function T(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function A(S){return S.h==-1}t.l=function(S){return S=O(this,S),A(S)?-1:T(S)?0:1};function P(S){for(var v=S.g.length,y=[],w=0;w<v;w++)y[w]=~S.g[w];return new o(y,~S.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),y=[],w=0,b=0;b<=v;b++){var C=w+(this.i(b)&65535)+(S.i(b)&65535),I=(C>>>16)+(this.i(b)>>>16)+(S.i(b)>>>16);w=I>>>16,C&=65535,I&=65535,y[b]=I<<16|C}return new o(y,y[y.length-1]&-2147483648?-1:0)};function O(S,v){return S.add(P(v))}t.j=function(S){if(T(this)||T(S))return d;if(A(this))return A(S)?P(this).j(P(S)):P(P(this).j(S));if(A(S))return P(this.j(P(S)));if(0>this.l(g)&&0>S.l(g))return u(this.m()*S.m());for(var v=this.g.length+S.g.length,y=[],w=0;w<2*v;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<S.g.length;b++){var C=this.i(w)>>>16,I=this.i(w)&65535,be=S.i(b)>>>16,tt=S.i(b)&65535;y[2*w+2*b]+=I*tt,x(y,2*w+2*b),y[2*w+2*b+1]+=C*tt,x(y,2*w+2*b+1),y[2*w+2*b+1]+=I*be,x(y,2*w+2*b+1),y[2*w+2*b+2]+=C*be,x(y,2*w+2*b+2)}for(w=0;w<v;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=v;w<2*v;w++)y[w]=0;return new o(y,0)};function x(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function M(S,v){this.g=S,this.h=v}function L(S,v){if(T(v))throw Error("division by zero");if(T(S))return new M(d,d);if(A(S))return v=L(P(S),v),new M(P(v.g),P(v.h));if(A(v))return v=L(S,P(v)),new M(P(v.g),v.h);if(30<S.g.length){if(A(S)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,w=v;0>=w.l(S);)y=K(y),w=K(w);var b=J(y,1),C=J(w,1);for(w=J(w,2),y=J(y,2);!T(w);){var I=C.add(w);0>=I.l(S)&&(b=b.add(y),C=I),w=J(w,1),y=J(y,1)}return v=O(S,b.j(v)),new M(b,v)}for(b=d;0<=S.l(v);){for(y=Math.max(1,Math.floor(S.m()/v.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),C=u(y),I=C.j(v);A(I)||0<I.l(S);)y-=w,C=u(y),I=C.j(v);T(C)&&(C=m),b=b.add(C),S=O(S,I)}return new M(b,S)}t.A=function(S){return L(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)&S.i(w);return new o(y,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)|S.i(w);return new o(y,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)^S.i(w);return new o(y,this.h^S.h)};function K(S){for(var v=S.g.length+1,y=[],w=0;w<v;w++)y[w]=S.i(w)<<1|S.i(w-1)>>>31;return new o(y,S.h)}function J(S,v){var y=v>>5;v%=32;for(var w=S.g.length-y,b=[],C=0;C<w;C++)b[C]=0<v?S.i(C+y)>>>v|S.i(C+y+1)<<32-v:S.i(C+y);return new o(b,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,bI=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Cr=o}).apply(typeof P_<"u"?P_:typeof self<"u"?self:typeof window<"u"?window:{});var tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PI,_o,kI,yl,Xh,NI,OI,DI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,p){return l==Array.prototype||l==Object.prototype||(l[f]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof tl=="object"&&tl];for(var f=0;f<l.length;++f){var p=l[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function r(l,f){if(f)e:{var p=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var k=l[_];if(!(k in p))break e;p=p[k]}l=l[l.length-1],_=p[l],f=f(_),f!=_&&f!=null&&e(p,l,{configurable:!0,writable:!0,value:f})}}function i(l,f){l instanceof String&&(l+="");var p=0,_=!1,k={next:function(){if(!_&&p<l.length){var D=p++;return{value:f(D,l[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(l){return l||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,p){return l.call.apply(l.bind,arguments)}function d(l,f,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),l.apply(f,k)}}return function(){return l.apply(f,arguments)}}function m(l,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(l,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function T(l,f){function p(){}p.prototype=f.prototype,l.aa=f.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,k,D){for(var z=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)z[Fe-2]=arguments[Fe];return f.prototype[k].apply(_,z)}}function A(l){const f=l.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=l[_];return p}return[]}function P(l,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const k=l.length||0,D=_.length||0;l.length=k+D;for(let z=0;z<D;z++)l[k+z]=_[z]}else l.push(_)}}class O{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function x(l){return/^[\s\xa0]*$/.test(l)}function M(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var K=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function J(l,f,p){for(const _ in l)f.call(p,l[_],_,l)}function S(l,f){for(const p in l)f.call(void 0,l[p],p,l)}function v(l){const f={};for(const p in l)f[p]=l[p];return f}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,f){let p,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(p in _)l[p]=_[p];for(let D=0;D<y.length;D++)p=y[D],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function b(l){var f=1;l=l.split(":");const p=[];for(;0<f&&l.length;)p.push(l.shift()),f--;return l.length&&p.push(l.join(":")),p}function C(l){a.setTimeout(()=>{throw l},0)}function I(){var l=Qt;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class be{constructor(){this.h=this.g=null}add(f,p){const _=tt.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var tt=new O(()=>new Me,l=>l.reset());class Me{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ge=!1,Qt=new be,pn=()=>{const l=a.Promise.resolve(void 0);ue=()=>{l.then(nn)}};var nn=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(p){C(p)}var f=tt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ge=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Is=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return l}();function Pn(l,f){if(Qe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(K){e:{try{L(f.nodeName);var k=!0;break e}catch{}k=!1}k||(f=null)}}else p=="mouseover"?f=l.fromElement:p=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Wt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Pn.aa.h.call(this)}}T(Pn,Qe);var Wt={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(l,f,p,_,k){this.listener=l,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=k,this.key=++Z,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ee(l){this.src=l,this.g={},this.h=0}Ee.prototype.add=function(l,f,p,_,k){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var z=E(l,f,_,k);return-1<z?(f=l[z],p||(f.fa=!1)):(f=new Y(f,this.src,D,!!_,k),f.fa=p,l.push(f)),f};function Ve(l,f){var p=f.type;if(p in l.g){var _=l.g[p],k=Array.prototype.indexOf.call(_,f,void 0),D;(D=0<=k)&&Array.prototype.splice.call(_,k,1),D&&(ne(f),l.g[p].length==0&&(delete l.g[p],l.h--))}}function E(l,f,p,_){for(var k=0;k<l.length;++k){var D=l[k];if(!D.da&&D.listener==f&&D.capture==!!p&&D.ha==_)return k}return-1}var R="closure_lm_"+(1e6*Math.random()|0),N={};function $(l,f,p,_,k){if(Array.isArray(f)){for(var D=0;D<f.length;D++)$(l,f[D],p,_,k);return null}return p=re(p),l&&l[F]?l.K(f,p,u(_)?!!_.capture:!!_,k):V(l,f,p,!1,_,k)}function V(l,f,p,_,k,D){if(!f)throw Error("Invalid event type");var z=u(k)?!!k.capture:!!k,Fe=ae(l);if(Fe||(l[R]=Fe=new Ee(l)),p=Fe.add(f,p,_,z,D),p.proxy)return p;if(_=j(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)Is||(k=z),k===void 0&&(k=!1),l.addEventListener(f.toString(),_,k);else if(l.attachEvent)l.attachEvent(W(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function j(){function l(p){return f.call(l.src,l.listener,p)}const f=q;return l}function G(l,f,p,_,k){if(Array.isArray(f))for(var D=0;D<f.length;D++)G(l,f[D],p,_,k);else _=u(_)?!!_.capture:!!_,p=re(p),l&&l[F]?(l=l.i,f=String(f).toString(),f in l.g&&(D=l.g[f],p=E(D,p,_,k),-1<p&&(ne(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete l.g[f],l.h--)))):l&&(l=ae(l))&&(f=l.g[f.toString()],l=-1,f&&(l=E(f,p,_,k)),(p=-1<l?f[l]:null)&&H(p))}function H(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[F])Ve(f.i,l);else{var p=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(p,_,l.capture):f.detachEvent?f.detachEvent(W(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=ae(f))?(Ve(p,l),p.h==0&&(p.src=null,f[R]=null)):ne(l)}}}function W(l){return l in N?N[l]:N[l]="on"+l}function q(l,f){if(l.da)l=!0;else{f=new Pn(f,this);var p=l.listener,_=l.ha||l.src;l.fa&&H(l),l=p.call(_,f)}return l}function ae(l){return l=l[R],l instanceof Ee?l:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(l){return typeof l=="function"?l:(l[X]||(l[X]=function(f){return l.handleEvent(f)}),l[X])}function se(){Ge.call(this),this.i=new Ee(this),this.M=this,this.F=null}T(se,Ge),se.prototype[F]=!0,se.prototype.removeEventListener=function(l,f,p,_){G(this,l,f,p,_)};function le(l,f){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new Qe(f,l);else if(f instanceof Qe)f.target=f.target||l;else{var k=f;f=new Qe(_,l),w(f,k)}if(k=!0,p)for(var D=p.length-1;0<=D;D--){var z=f.g=p[D];k=Ce(z,_,!0,f)&&k}if(z=f.g=l,k=Ce(z,_,!0,f)&&k,k=Ce(z,_,!1,f)&&k,p)for(D=0;D<p.length;D++)z=f.g=p[D],k=Ce(z,_,!1,f)&&k}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var p=l.g[f],_=0;_<p.length;_++)ne(p[_]);delete l.g[f],l.h--}}this.F=null},se.prototype.K=function(l,f,p,_){return this.i.add(String(l),f,!1,p,_)},se.prototype.L=function(l,f,p,_){return this.i.add(String(l),f,!0,p,_)};function Ce(l,f,p,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var k=!0,D=0;D<f.length;++D){var z=f[D];if(z&&!z.da&&z.capture==p){var Fe=z.listener,gt=z.ha||z.src;z.fa&&Ve(l.i,z),k=Fe.call(gt,_)!==!1&&k}}return k&&!_.defaultPrevented}function Re(l,f,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function Tt(l){l.g=Re(()=>{l.g=null,l.i&&(l.i=!1,Tt(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class ut extends Ge{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(l){Ge.call(this),this.h=l,this.g={}}T(mt,Ge);var It=[];function ws(l){J(l.g,function(f,p){this.g.hasOwnProperty(p)&&H(f)},l),l.g={}}mt.prototype.N=function(){mt.aa.N.call(this),ws(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=a.JSON.stringify,Lt=a.JSON.parse,sn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function zr(){}zr.prototype.h=null;function dp(l){return l.h||(l.h=l.i())}function fp(){}var Hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cu(){Qe.call(this,"d")}T(cu,Qe);function uu(){Qe.call(this,"c")}T(uu,Qe);var cr={},pp=null;function ba(){return pp=pp||new se}cr.La="serverreachability";function mp(l){Qe.call(this,cr.La,l)}T(mp,Qe);function zi(l){const f=ba();le(f,new mp(f))}cr.STAT_EVENT="statevent";function gp(l,f){Qe.call(this,cr.STAT_EVENT,l),this.stat=f}T(gp,Qe);function xt(l){const f=ba();le(f,new gp(f,l))}cr.Ma="timingevent";function _p(l,f){Qe.call(this,cr.Ma,l),this.size=f}T(_p,Qe);function Ki(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Gi(){this.g=!0}Gi.prototype.xa=function(){this.g=!1};function tA(l,f,p,_,k,D){l.info(function(){if(l.g)if(D)for(var z="",Fe=D.split("&"),gt=0;gt<Fe.length;gt++){var Se=Fe[gt].split("=");if(1<Se.length){var wt=Se[0];Se=Se[1];var At=wt.split("_");z=2<=At.length&&At[1]=="type"?z+(wt+"="+Se+"&"):z+(wt+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+f+`
`+p+`
`+z})}function nA(l,f,p,_,k,D,z){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+f+`
`+p+`
`+D+" "+z})}function Kr(l,f,p,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+rA(l,p)+(_?" "+_:"")})}function sA(l,f){l.info(function(){return"TIMEOUT: "+f})}Gi.prototype.info=function(){};function rA(l,f){if(!l.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<k.length;z++)k[z]=""}}}}return Hr(p)}catch{return f}}var Pa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hu;function ka(){}T(ka,zr),ka.prototype.g=function(){return new XMLHttpRequest},ka.prototype.i=function(){return{}},hu=new ka;function As(l,f,p,_){this.j=l,this.i=f,this.l=p,this.R=_||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vp}function vp(){this.i=null,this.g="",this.h=!1}var Ep={},du={};function fu(l,f,p){l.L=1,l.v=Ma(Qn(f)),l.m=p,l.P=!0,Tp(l,null)}function Tp(l,f){l.F=Date.now(),Na(l),l.A=Qn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Lp(p.i,"t",_),l.C=0,p=l.j.J,l.h=new vp,l.g=Zp(l.j,p?f:null,!l.m),0<l.O&&(l.M=new ut(m(l.Y,l,l.g),l.O)),f=l.U,p=l.g,_=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(It[0]=k.toString()),k=It);for(var D=0;D<k.length;D++){var z=$(p,k[D],_||f.handleEvent,!1,f.h||f);if(!z)break;f.g[z.key]=z}f=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),zi(),tA(l.i,l.u,l.A,l.l,l.R,l.m)}As.prototype.ca=function(l){l=l.target;const f=this.M;f&&Yn(l)==3?f.j():this.Y(l)},As.prototype.Y=function(l){try{if(l==this.g)e:{const At=Yn(this.g);var f=this.g.Ba();const Yr=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||jp(this.g)))){this.J||At!=4||f==7||(f==8||0>=Yr?zi(3):zi(2)),pu(this);var p=this.g.Z();this.X=p;t:if(Ip(this)){var _=jp(this.g);l="";var k=_.length,D=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Qi(this);var z="";break t}this.h.i=new a.TextDecoder}for(f=0;f<k;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(D&&f==k-1)});_.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,nA(this.i,this.u,this.A,this.l,this.R,At,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,gt=this.g;if((Fe=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Fe)){var Se=Fe;break t}}Se=null}if(p=Se)Kr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mu(this,p);else{this.o=!1,this.s=3,xt(12),ur(this),Qi(this);break e}}if(this.P){p=!0;let mn;for(;!this.J&&this.C<z.length;)if(mn=iA(this,z),mn==du){At==4&&(this.s=4,xt(14),p=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==Ep){this.s=4,xt(15),Kr(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Kr(this.i,this.l,mn,null),mu(this,mn);if(Ip(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||z.length!=0||this.h.h||(this.s=1,xt(16),p=!1),this.o=this.o&&p,!p)Kr(this.i,this.l,z,"[Invalid Chunked Response]"),ur(this),Qi(this);else if(0<z.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Tu(wt),wt.M=!0,xt(11))}}else Kr(this.i,this.l,z,null),mu(this,z);At==4&&ur(this),this.o&&!this.J&&(At==4?Qp(this.j,this):(this.o=!1,Na(this)))}else IA(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),ur(this),Qi(this)}}}catch{}finally{}};function Ip(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function iA(l,f){var p=l.C,_=f.indexOf(`
`,p);return _==-1?du:(p=Number(f.substring(p,_)),isNaN(p)?Ep:(_+=1,_+p>f.length?du:(f=f.slice(_,_+p),l.C=_+p,f)))}As.prototype.cancel=function(){this.J=!0,ur(this)};function Na(l){l.S=Date.now()+l.I,wp(l,l.I)}function wp(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ki(m(l.ba,l),f)}function pu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}As.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(sA(this.i,this.A),this.L!=2&&(zi(),xt(17)),ur(this),this.s=2,Qi(this)):wp(this,this.S-l)};function Qi(l){l.j.G==0||l.J||Qp(l.j,l)}function ur(l){pu(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,ws(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function mu(l,f){try{var p=l.j;if(p.G!=0&&(p.g==l||gu(p.h,l))){if(!l.K&&gu(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Ba(p),Fa(p);else break e;Eu(p),xt(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ki(m(p.Za,p),6e3));if(1>=Sp(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else dr(p,11)}else if((l.K||p.g==l)&&Ba(p),!x(f))for(k=p.Da.g.parse(f),f=0;f<k.length;f++){let Se=k[f];if(p.T=Se[0],Se=Se[1],p.G==2)if(Se[0]=="c"){p.K=Se[1],p.ia=Se[2];const wt=Se[3];wt!=null&&(p.la=wt,p.j.info("VER="+p.la));const At=Se[4];At!=null&&(p.Aa=At,p.j.info("SVER="+p.Aa));const Yr=Se[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(_=1.5*Yr,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const mn=l.g;if(mn){const ja=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ja){var D=_.h;D.g||ja.indexOf("spdy")==-1&&ja.indexOf("quic")==-1&&ja.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(_u(D,D.h),D.h=null))}if(_.D){const Iu=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Iu&&(_.ya=Iu,je(_.I,_.D,Iu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var z=l;if(_.qa=Jp(_,_.J?_.ia:null,_.W),z.K){Cp(_.h,z);var Fe=z,gt=_.L;gt&&(Fe.I=gt),Fe.B&&(pu(Fe),Na(Fe)),_.g=z}else Kp(_);0<p.i.length&&Ua(p)}else Se[0]!="stop"&&Se[0]!="close"||dr(p,7);else p.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?dr(p,7):vu(p):Se[0]!="noop"&&p.l&&p.l.ta(Se),p.v=0)}}zi(4)}catch{}}var oA=class{constructor(l,f){this.g=l,this.map=f}};function Ap(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Sp(l){return l.h?1:l.g?l.g.size:0}function gu(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function _u(l,f){l.g?l.g.add(f):l.h=f}function Cp(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ap.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function bp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const p of l.g.values())f=f.concat(p.D);return f}return A(l.i)}function aA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],p=l.length,_=0;_<p;_++)f.push(l[_]);return f}f=[],p=0;for(_ in l)f[p++]=l[_];return f}function lA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var p=0;p<l;p++)f.push(p);return f}f=[],p=0;for(const _ in l)f[p++]=_;return f}}}function Pp(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var p=lA(l),_=aA(l),k=_.length,D=0;D<k;D++)f.call(void 0,_[D],p&&p[D],l)}var kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cA(l,f){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),k=null;if(0<=_){var D=l[p].substring(0,_);k=l[p].substring(_+1)}else D=l[p];f(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function hr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof hr){this.h=l.h,Oa(this,l.j),this.o=l.o,this.g=l.g,Da(this,l.s),this.l=l.l;var f=l.i,p=new Ji;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Np(this,p),this.m=l.m}else l&&(f=String(l).match(kp))?(this.h=!1,Oa(this,f[1]||"",!0),this.o=Yi(f[2]||""),this.g=Yi(f[3]||"",!0),Da(this,f[4]),this.l=Yi(f[5]||"",!0),Np(this,f[6]||"",!0),this.m=Yi(f[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}hr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Xi(f,Op,!0),":");var p=this.g;return(p||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Xi(f,Op,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Xi(p,p.charAt(0)=="/"?dA:hA,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Xi(p,pA)),l.join("")};function Qn(l){return new hr(l)}function Oa(l,f,p){l.j=p?Yi(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Da(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Np(l,f,p){f instanceof Ji?(l.i=f,mA(l.i,l.h)):(p||(f=Xi(f,fA)),l.i=new Ji(f,l.h))}function je(l,f,p){l.i.set(f,p)}function Ma(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Yi(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Xi(l,f,p){return typeof l=="string"?(l=encodeURI(l).replace(f,uA),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function uA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Op=/[#\/\?@]/g,hA=/[#\?:]/g,dA=/[#\?]/g,fA=/[#\?@]/g,pA=/#/g;function Ji(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Rs(l){l.g||(l.g=new Map,l.h=0,l.i&&cA(l.i,function(f,p){l.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Ji.prototype,t.add=function(l,f){Rs(this),this.i=null,l=Gr(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(f),this.h+=1,this};function Dp(l,f){Rs(l),f=Gr(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Mp(l,f){return Rs(l),f=Gr(l,f),l.g.has(f)}t.forEach=function(l,f){Rs(this),this.g.forEach(function(p,_){p.forEach(function(k){l.call(f,k,_,this)},this)},this)},t.na=function(){Rs(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const k=l[_];for(let D=0;D<k.length;D++)p.push(f[_])}return p},t.V=function(l){Rs(this);let f=[];if(typeof l=="string")Mp(this,l)&&(f=f.concat(this.g.get(Gr(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)f=f.concat(l[p])}return f},t.set=function(l,f){return Rs(this),this.i=null,l=Gr(this,l),Mp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Lp(l,f,p){Dp(l,f),0<p.length&&(l.i=null,l.g.set(Gr(l,f),A(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const D=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var k=D;z[_]!==""&&(k+="="+encodeURIComponent(String(z[_]))),l.push(k)}}return this.i=l.join("&")};function Gr(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function mA(l,f){f&&!l.j&&(Rs(l),l.i=null,l.g.forEach(function(p,_){var k=_.toLowerCase();_!=k&&(Dp(this,_),Lp(this,k,p))},l)),l.j=f}function gA(l,f){const p=new Gi;if(a.Image){const _=new Image;_.onload=g(Ss,p,"TestLoadImage: loaded",!0,f,_),_.onerror=g(Ss,p,"TestLoadImage: error",!1,f,_),_.onabort=g(Ss,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(Ss,p,"TestLoadImage: timeout",!1,f,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function _A(l,f){const p=new Gi,_=new AbortController,k=setTimeout(()=>{_.abort(),Ss(p,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(D=>{clearTimeout(k),D.ok?Ss(p,"TestPingServer: ok",!0,f):Ss(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),Ss(p,"TestPingServer: error",!1,f)})}function Ss(l,f,p,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(p)}catch{}}function yA(){this.g=new sn}function vA(l,f,p){const _=p||"";try{Pp(l,function(k,D){let z=k;u(k)&&(z=Hr(k)),f.push(_+D+"="+encodeURIComponent(z))})}catch(k){throw f.push(_+"type="+encodeURIComponent("_badmap")),k}}function La(l){this.l=l.Ub||null,this.j=l.eb||!1}T(La,zr),La.prototype.g=function(){return new xa(this.l,this.j)},La.prototype.i=function(l){return function(){return l}}({});function xa(l,f){se.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(xa,se),t=xa.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,eo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function xp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Zi(this):eo(this),this.readyState==3&&xp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Zi(this))},t.Qa=function(l){this.g&&(this.response=l,Zi(this))},t.ga=function(){this.g&&Zi(this)};function Zi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,eo(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=f.next();return l.join(`\r
`)};function eo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Vp(l){let f="";return J(l,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function yu(l,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Vp(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):je(l,f,p))}function Je(l){se.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Je,se);var EA=/^https?$/i,TA=["POST","PUT"];t=Je.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hu.g(),this.v=this.o?dp(this.o):dp(hu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(D){Fp(this,D);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)p.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())p.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(TA,f,void 0))||_||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of p)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$p(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){Fp(this,D)}};function Fp(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Up(l),Va(l)}function Up(l){l.A||(l.A=!0,le(l,"complete"),le(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,le(this,"complete"),le(this,"abort"),Va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Va(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bp(this):this.bb())},t.bb=function(){Bp(this)};function Bp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Yn(l)!=4||l.Z()!=2)){if(l.u&&Yn(l)==4)Re(l.Ea,0,l);else if(le(l,"readystatechange"),Yn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=z===0){var k=String(l.D).match(kp)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),_=!EA.test(k?k.toLowerCase():"")}p=_}if(p)le(l,"complete"),le(l,"success");else{l.m=6;try{var D=2<Yn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",Up(l)}}finally{Va(l)}}}}function Va(l,f){if(l.g){$p(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||le(l,"ready");try{p.onreadystatechange=_}catch{}}}function $p(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Yn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Lt(f)}};function jp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function IA(l){const f={};l=(l.g&&2<=Yn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(x(l[_]))continue;var p=b(l[_]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=f[k]||[];f[k]=D,D.push(p)}S(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function to(l,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||f}function qp(l){this.Aa=0,this.i=[],this.j=new Gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=to("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=to("baseRetryDelayMs",5e3,l),this.cb=to("retryDelaySeedMs",1e4,l),this.Wa=to("forwardChannelMaxRetries",2,l),this.wa=to("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ap(l&&l.concurrentRequestLimit),this.Da=new yA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qp.prototype,t.la=8,t.G=1,t.connect=function(l,f,p,_){xt(0),this.W=l,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Jp(this,null,this.W),Ua(this)};function vu(l){if(Wp(l),l.G==3){var f=l.U++,p=Qn(l.I);if(je(p,"SID",l.K),je(p,"RID",f),je(p,"TYPE","terminate"),no(l,p),f=new As(l,l.j,f),f.L=2,f.v=Ma(Qn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=Zp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Na(f)}Xp(l)}function Fa(l){l.g&&(Tu(l),l.g.cancel(),l.g=null)}function Wp(l){Fa(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ba(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ua(l){if(!Rp(l.h)&&!l.s){l.s=!0;var f=l.Ga;ue||pn(),ge||(ue(),ge=!0),Qt.add(f,l),l.B=0}}function wA(l,f){return Sp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ki(m(l.Ga,l,f),Yp(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new As(this,this.j,l);let D=this.o;if(this.S&&(D?(D=v(D),w(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=zp(this,k,f),p=Qn(this.I),je(p,"RID",l),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),no(this,p),D&&(this.O?f="headers="+encodeURIComponent(String(Vp(D)))+"&"+f:this.m&&yu(p,this.m,D)),_u(this.h,k),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",f),je(p,"SID","null"),k.T=!0,fu(k,p,null)):fu(k,p,f),this.G=2}}else this.G==3&&(l?Hp(this,l):this.i.length==0||Rp(this.h)||Hp(this))};function Hp(l,f){var p;f?p=f.l:p=l.U++;const _=Qn(l.I);je(_,"SID",l.K),je(_,"RID",p),je(_,"AID",l.T),no(l,_),l.m&&l.o&&yu(_,l.m,l.o),p=new As(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),f&&(l.i=f.D.concat(l.i)),f=zp(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),_u(l.h,p),fu(p,_,f)}function no(l,f){l.H&&J(l.H,function(p,_){je(f,_,p)}),l.l&&Pp({},function(p,_){je(f,_,p)})}function zp(l,f,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var k=l.i;let D=-1;for(;;){const z=["count="+p];D==-1?0<p?(D=k[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let Fe=!0;for(let gt=0;gt<p;gt++){let Se=k[gt].g;const wt=k[gt].map;if(Se-=D,0>Se)D=Math.max(0,k[gt].g-100),Fe=!1;else try{vA(wt,z,"req"+Se+"_")}catch{_&&_(wt)}}if(Fe){_=z.join("&");break e}}}return l=l.i.splice(0,p),f.D=l,_}function Kp(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;ue||pn(),ge||(ue(),ge=!0),Qt.add(f,l),l.v=0}}function Eu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ki(m(l.Fa,l),Yp(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Gp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ki(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Fa(this),Gp(this))};function Tu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Gp(l){l.g=new As(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Qn(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),no(l,f),l.m&&l.o&&yu(f,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Ma(Qn(f)),p.m=null,p.P=!0,Tp(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Fa(this),Eu(this),xt(19))};function Ba(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Qp(l,f){var p=null;if(l.g==f){Ba(l),Tu(l),l.g=null;var _=2}else if(gu(l.h,f))p=f.D,Cp(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var k=l.B;_=ba(),le(_,new _p(_,p)),Ua(l)}else Kp(l);else if(k=f.s,k==3||k==0&&0<f.X||!(_==1&&wA(l,f)||_==2&&Eu(l)))switch(p&&0<p.length&&(f=l.h,f.i=f.i.concat(p)),k){case 1:dr(l,5);break;case 4:dr(l,10);break;case 3:dr(l,6);break;default:dr(l,2)}}}function Yp(l,f){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*f}function dr(l,f){if(l.j.info("Error code "+f),f==2){var p=m(l.fb,l),_=l.Xa;const k=!_;_=new hr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Oa(_,"https"),Ma(_),k?gA(_.toString(),p):_A(_.toString(),p)}else xt(2);l.G=0,l.l&&l.l.sa(f),Xp(l),Wp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Xp(l){if(l.G=0,l.ka=[],l.l){const f=bp(l.h);(f.length!=0||l.i.length!=0)&&(P(l.ka,f),P(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Jp(l,f,p){var _=p instanceof hr?Qn(p):new hr(p);if(_.g!="")f&&(_.g=f+"."+_.g),Da(_,_.s);else{var k=a.location;_=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;var D=new hr(null);_&&Oa(D,_),f&&(D.g=f),k&&Da(D,k),p&&(D.l=p),_=D}return p=l.D,f=l.ya,p&&f&&je(_,p,f),je(_,"VER",l.la),no(l,_),_}function Zp(l,f,p){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Je(new La({eb:p})):new Je(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function em(){}t=em.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $a(){}$a.prototype.g=function(l,f){return new Yt(l,f)};function Yt(l,f){se.call(this),this.g=new qp(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!x(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!x(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Qr(this)}T(Yt,se),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){vu(this.g)},Yt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Hr(l),l=p);f.i.push(new oA(f.Ya++,l)),f.G==3&&Ua(f)},Yt.prototype.N=function(){this.g.l=null,delete this.j,vu(this.g),delete this.g,Yt.aa.N.call(this)};function tm(l){cu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const p in f){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}T(tm,cu);function nm(){uu.call(this),this.status=1}T(nm,uu);function Qr(l){this.g=l}T(Qr,em),Qr.prototype.ua=function(){le(this.g,"a")},Qr.prototype.ta=function(l){le(this.g,new tm(l))},Qr.prototype.sa=function(l){le(this.g,new nm)},Qr.prototype.ra=function(){le(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,DI=function(){return new $a},OI=function(){return ba()},NI=cr,Xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pa.NO_ERROR=0,Pa.TIMEOUT=8,Pa.HTTP_ERROR=6,yl=Pa,yp.COMPLETE="complete",kI=yp,fp.EventType=Hi,Hi.OPEN="a",Hi.CLOSE="b",Hi.ERROR="c",Hi.MESSAGE="d",se.prototype.listen=se.prototype.K,_o=fp,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,PI=Je}).apply(typeof tl<"u"?tl:typeof self<"u"?self:typeof window<"u"?window:{});const k_="@firebase/firestore";/**
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
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let $i="11.0.2";/**
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
 */const xr=new da("@firebase/firestore");function ni(){return xr.logLevel}function ee(t,...e){if(xr.logLevel<=me.DEBUG){const n=e.map(bf);xr.debug(`Firestore (${$i}): ${t}`,...n)}}function ys(t,...e){if(xr.logLevel<=me.ERROR){const n=e.map(bf);xr.error(`Firestore (${$i}): ${t}`,...n)}}function Ri(t,...e){if(xr.logLevel<=me.WARN){const n=e.map(bf);xr.warn(`Firestore (${$i}): ${t}`,...n)}}function bf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${$i}) INTERNAL ASSERTION FAILED: `+t;throw ys(e),new Error(e)}function De(t,e){t||he()}function pe(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ms{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class MI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class kM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NM{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ms;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ms,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ms)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string"),new MI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new St(e)}}class OM{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=St.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class DM{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new OM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){De(this.o===void 0);const s=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new MM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class LI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=xM(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function Si(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new it(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new it(0,0))}static max(){return new fe(new it(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class na{constructor(e,n,s){n===void 0?n=0:n>e.length&&he(),s===void 0?s=e.length-n:s>e.length-n&&he(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof na?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends na{construct(e,n,s){return new He(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new He(n)}static emptyPath(){return new He([])}}const VM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends na{construct(e,n,s){return new vt(e,n,s)}static isValidIdentifier(e){return VM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new te(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new te(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(He.fromString(e))}static fromName(e){return new oe(He.fromString(e).popFirst(5))}static empty(){return new oe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new He(e.slice()))}}function FM(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=fe.fromTimestamp(s===1e9?new it(n+1,0):new it(n,s));return new Qs(r,oe.empty(),e)}function UM(t){return new Qs(t.readTime,t.key,-1)}class Qs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Qs(fe.min(),oe.empty(),-1)}static max(){return new Qs(fe.max(),oe.empty(),-1)}}function BM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const $M="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ji(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==$M)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,s)=>{n(e)})}static reject(e){return new U((n,s)=>{s(e)})}static waitFor(e){return new U((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=U.resolve(!1);for(const s of e)n=n.next(r=>r?U.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new U((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,n){return new U((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function qM(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class qc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qc.oe=-1;function Wc(t){return t==null}function Jl(t){return t===0&&1/t==-1/0}function WM(t){return typeof t=="number"&&Number.isInteger(t)&&!Jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function HM(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=N_(e)),e=zM(t.get(n),e);return N_(e)}function zM(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function N_(t){return t+""}/**
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
 */function O_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nl(this.root,e,this.comparator,!1)}getReverseIterator(){return new nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nl(this.root,e,this.comparator,!0)}}class nl{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??_t.RED,this.left=r??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new _t(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return _t.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,s,r,i){return this}insert(e,n,s){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new D_(this.data.getIterator())}getIteratorFrom(e){return new D_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class D_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new ct(vt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class VI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new VI("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const KM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ys(t){if(De(!!t),typeof t=="string"){let e=0;const n=KM.exec(t);if(De(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xs(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */function Pf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hc(t){const e=t.mapValue.fields.__previous_value__;return Pf(e)?Hc(e):e}function sa(t){const e=Ys(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class GM{constructor(e,n,s,r,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Js(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pf(t)?4:YM(t)?9007199254740991:QM(t)?10:11:he()}function Wn(t,e){if(t===e)return!0;const n=Js(t);if(n!==Js(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ys(r.timestampValue),a=Ys(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Xs(r.bytesValue).isEqual(Xs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return nt(r.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(r.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return nt(r.integerValue)===nt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=nt(r.doubleValue),a=nt(i.doubleValue);return o===a?Jl(o)===Jl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Si(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(O_(o)!==O_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Wn(o[c],a[c])))return!1;return!0}(t,e);default:return he()}}function ia(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function Ci(t,e){if(t===e)return 0;const n=Js(t),s=Js(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),c=nt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return M_(t.timestampValue,e.timestampValue);case 4:return M_(sa(t),sa(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Xs(i),c=Xs(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=ye(a[u],c[u]);if(h!==0)return h}return ye(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(nt(i.latitude),nt(o.latitude));return a!==0?a:ye(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return L_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const d=i.fields||{},m=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,T=(c=m.value)===null||c===void 0?void 0:c.arrayValue,A=ye(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:L_(g,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===sl.mapValue&&o===sl.mapValue)return 0;if(i===sl.mapValue)return 1;if(o===sl.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const m=ye(c[d],h[d]);if(m!==0)return m;const g=Ci(a[c[d]],u[h[d]]);if(g!==0)return g}return ye(c.length,h.length)}(t.mapValue,e.mapValue);default:throw he()}}function M_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Ys(t),s=Ys(e),r=ye(n.seconds,s.seconds);return r!==0?r:ye(n.nanos,s.nanos)}function L_(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Ci(n[r],s[r]);if(i)return i}return ye(n.length,s.length)}function bi(t){return Jh(t)}function Jh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Ys(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Jh(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Jh(n.fields[o])}`;return r+"}"}(t.mapValue):he()}function vl(t){switch(Js(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hc(t);return e?16+vl(e):16;case 5:return 2*t.stringValue.length;case 6:return Xs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+vl(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return ar(s.fields,(i,o)=>{r+=i.length+vl(o)}),r}(t.mapValue);default:throw he()}}function x_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zh(t){return!!t&&"integerValue"in t}function kf(t){return!!t&&"arrayValue"in t}function V_(t){return!!t&&"nullValue"in t}function F_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function El(t){return!!t&&"mapValue"in t}function QM(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ar(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Lo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!El(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(n)}setAll(e){let n=vt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Lo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());El(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];El(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ar(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Kt(Lo(this.value))}}function FI(t){const e=[];return ar(t.fields,(n,s)=>{const r=new vt([n]);if(El(s)){const i=FI(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Zt(e)}/**
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
 */class Nt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,fe.min(),fe.min(),fe.min(),Kt.empty(),0)}static newFoundDocument(e,n,s,r){return new Nt(e,1,n,fe.min(),s,r,0)}static newNoDocument(e,n){return new Nt(e,2,n,fe.min(),fe.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,fe.min(),fe.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zl{constructor(e,n){this.position=e,this.inclusive=n}}function U_(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=oe.comparator(oe.fromName(o.referenceValue),n.key):s=Ci(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function B_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ec{constructor(e,n="asc"){this.field=e,this.dir=n}}function XM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class UI{}class rt extends UI{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ZM(e,n,s):n==="array-contains"?new nL(e,s):n==="in"?new sL(e,s):n==="not-in"?new rL(e,s):n==="array-contains-any"?new iL(e,s):new rt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new eL(e,s):new tL(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ci(n,this.value)):n!==null&&Js(this.value)===Js(n)&&this.matchesComparison(Ci(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends UI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new bn(e,n)}matches(e){return BI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function BI(t){return t.op==="and"}function $I(t){return JM(t)&&BI(t)}function JM(t){for(const e of t.filters)if(e instanceof bn)return!1;return!0}function ed(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+bi(t.value);if($I(t))return t.filters.map(e=>ed(e)).join(",");{const e=t.filters.map(n=>ed(n)).join(",");return`${t.op}(${e})`}}function jI(t,e){return t instanceof rt?function(s,r){return r instanceof rt&&s.op===r.op&&s.field.isEqual(r.field)&&Wn(s.value,r.value)}(t,e):t instanceof bn?function(s,r){return r instanceof bn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&jI(o,r.filters[a]),!0):!1}(t,e):void he()}function qI(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${bi(n.value)}`}(t):t instanceof bn?function(n){return n.op.toString()+" {"+n.getFilters().map(qI).join(" ,")+"}"}(t):"Filter"}class ZM extends rt{constructor(e,n,s){super(e,n,s),this.key=oe.fromName(s.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class eL extends rt{constructor(e,n){super(e,"in",n),this.keys=WI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tL extends rt{constructor(e,n){super(e,"not-in",n),this.keys=WI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>oe.fromName(s.referenceValue))}class nL extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kf(n)&&ia(n.arrayValue,this.value)}}class sL extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class rL extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ia(this.value.arrayValue,n)}}class iL extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ia(this.value.arrayValue,s))}}/**
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
 */class oL{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function $_(t,e=null,n=[],s=[],r=null,i=null,o=null){return new oL(t,e,n,s,r,i,o)}function Nf(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ed(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Wc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>bi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>bi(s)).join(",")),e.ue=n}return e.ue}function Of(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!B_(t.startAt,e.startAt)&&B_(t.endAt,e.endAt)}function td(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ia{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aL(t,e,n,s,r,i,o,a){return new Ia(t,e,n,s,r,i,o,a)}function zc(t){return new Ia(t)}function j_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HI(t){return t.collectionGroup!==null}function xo(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ct(vt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ec(i,s))}),n.has(vt.keyField().canonicalString())||e.ce.push(new ec(vt.keyField(),s))}return e.ce}function $n(t){const e=pe(t);return e.le||(e.le=lL(e,xo(t))),e.le}function lL(t,e){if(t.limitType==="F")return $_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new ec(r.field,i)});const n=t.endAt?new Zl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Zl(t.startAt.position,t.startAt.inclusive):null;return $_(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function nd(t,e){const n=t.filters.concat([e]);return new Ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sd(t,e,n){return new Ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Kc(t,e){return Of($n(t),$n(e))&&t.limitType===e.limitType}function zI(t){return`${Nf($n(t))}|lt:${t.limitType}`}function si(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>qI(r)).join(", ")}]`),Wc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>bi(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>bi(r)).join(",")),`Target(${s})`}($n(t))}; limitType=${t.limitType})`}function Gc(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):oe.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of xo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=U_(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,xo(s),r)||s.endAt&&!function(o,a,c){const u=U_(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,xo(s),r))}(t,e)}function cL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function KI(t){return(e,n)=>{let s=!1;for(const r of xo(t)){const i=uL(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function uL(t,e,n){const s=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Ci(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return he()}}/**
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
 */class jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return xI(this.inner)}size(){return this.innerSize}}/**
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
 */const hL=new Xe(oe.comparator);function vs(){return hL}const GI=new Xe(oe.comparator);function yo(...t){let e=GI;for(const n of t)e=e.insert(n.key,n);return e}function QI(t){let e=GI;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function wr(){return Vo()}function YI(){return Vo()}function Vo(){return new jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const dL=new Xe(oe.comparator),fL=new ct(oe.comparator);function _e(...t){let e=fL;for(const n of t)e=e.add(n);return e}const pL=new ct(ye);function mL(){return pL}/**
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
 */function Df(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jl(e)?"-0":e}}function XI(t){return{integerValue:""+t}}function gL(t,e){return WM(e)?XI(e):Df(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Qc{constructor(){this._=void 0}}function _L(t,e,n){return t instanceof tc?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Pf(i)&&(i=Hc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof oa?ZI(t,e):t instanceof aa?ew(t,e):function(r,i){const o=JI(r,i),a=q_(o)+q_(r.Pe);return Zh(o)&&Zh(r.Pe)?XI(a):Df(r.serializer,a)}(t,e)}function yL(t,e,n){return t instanceof oa?ZI(t,e):t instanceof aa?ew(t,e):n}function JI(t,e){return t instanceof nc?function(s){return Zh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class tc extends Qc{}class oa extends Qc{constructor(e){super(),this.elements=e}}function ZI(t,e){const n=tw(e);for(const s of t.elements)n.some(r=>Wn(r,s))||n.push(s);return{arrayValue:{values:n}}}class aa extends Qc{constructor(e){super(),this.elements=e}}function ew(t,e){let n=tw(e);for(const s of t.elements)n=n.filter(r=>!Wn(r,s));return{arrayValue:{values:n}}}class nc extends Qc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function q_(t){return nt(t.integerValue||t.doubleValue)}function tw(t){return kf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vL(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof oa&&r instanceof oa||s instanceof aa&&r instanceof aa?Si(s.elements,r.elements,Wn):s instanceof nc&&r instanceof nc?Wn(s.Pe,r.Pe):s instanceof tc&&r instanceof tc}(t.transform,e.transform)}class EL{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yc{}function nw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mf(t.key,Tn.none()):new wa(t.key,t.data,Tn.none());{const n=t.data,s=Kt.empty();let r=new ct(vt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new lr(t.key,s,new Zt(r.toArray()),Tn.none())}}function TL(t,e,n){t instanceof wa?function(r,i,o){const a=r.value.clone(),c=H_(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(r,i,o){if(!Tl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=H_(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(sw(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,s){return t instanceof wa?function(i,o,a,c){if(!Tl(i.precondition,o))return a;const u=i.value.clone(),h=z_(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof lr?function(i,o,a,c){if(!Tl(i.precondition,o))return a;const u=z_(i.fieldTransforms,c,o),h=o.data;return h.setAll(sw(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,s):function(i,o,a){return Tl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function IL(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=JI(s.transform,r||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(s.field,i))}return n||null}function W_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Si(s,r,(i,o)=>vL(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends Yc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class lr extends Yc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function H_(t,e,n){const s=new Map;De(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,yL(o,a,n[r]))}return s}function z_(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,_L(i,o,e))}return s}class Mf extends Yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wL extends Yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AL{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&TL(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Fo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Fo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=YI();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=nw(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,(n,s)=>W_(n,s))&&Si(this.baseMutations,e.baseMutations,(n,s)=>W_(n,s))}}class Lf{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){De(e.mutations.length===s.length);let r=function(){return dL}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Lf(e,n,s,r)}}/**
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
 */class RL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class SL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,Te;function CL(t){switch(t){default:return he();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function rw(t){if(t===void 0)return ys("GRPC error has no .code"),B.UNKNOWN;switch(t){case st.OK:return B.OK;case st.CANCELLED:return B.CANCELLED;case st.UNKNOWN:return B.UNKNOWN;case st.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case st.INTERNAL:return B.INTERNAL;case st.UNAVAILABLE:return B.UNAVAILABLE;case st.UNAUTHENTICATED:return B.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case st.NOT_FOUND:return B.NOT_FOUND;case st.ALREADY_EXISTS:return B.ALREADY_EXISTS;case st.PERMISSION_DENIED:return B.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case st.ABORTED:return B.ABORTED;case st.OUT_OF_RANGE:return B.OUT_OF_RANGE;case st.UNIMPLEMENTED:return B.UNIMPLEMENTED;case st.DATA_LOSS:return B.DATA_LOSS;default:return he()}}(Te=st||(st={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function bL(){return new TextEncoder}/**
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
 */const PL=new Cr([4294967295,4294967295],0);function K_(t){const e=bL().encode(t),n=new bI;return n.update(e),new Uint8Array(n.digest())}function G_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cr([n,s],0),new Cr([r,i],0)]}class xf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new vo(`Invalid padding: ${n}`);if(s<0)throw new vo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new vo(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new vo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Cr.fromNumber(this.Te)}Ee(e,n,s){let r=e.add(n.multiply(Cr.fromNumber(s)));return r.compare(PL)===1&&(r=new Cr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=K_(e),[s,r]=G_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xf(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=K_(e),[s,r]=G_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Aa.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Xc(fe.min(),r,new Xe(ye),vs(),_e())}}class Aa{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Aa(s,n,_e(),_e(),_e())}}/**
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
 */class Il{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class iw{constructor(e,n){this.targetId=e,this.me=n}}class ow{constructor(e,n,s=Et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Q_{constructor(){this.fe=0,this.ge=Y_(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),s=_e();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:he()}}),new Aa(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=Y_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kL{constructor(e){this.Le=e,this.Be=new Map,this.ke=vs(),this.qe=rl(),this.Qe=rl(),this.Ke=new Xe(ye)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.je(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.me.count,r=this.Ye(n);if(r){const i=r.target;if(td(i))if(s===0){const o=new oe(i.path);this.We(n,o,Nt.newNoDocument(o,fe.min()))}else De(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Xs(s).toUint8Array()}catch(c){if(c instanceof VI)return Ri("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new xf(o,r,i)}catch(c){return Ri(c instanceof vo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,s){return n.me.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&td(a.target)){const c=new oe(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Nt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let s=_e();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new Xc(e,n,this.Ke,this.ke,s);return this.ke=vs(),this.qe=rl(),this.Qe=rl(),this.Ke=new Xe(ye),r}Ue(e,n){if(!this.je(e))return;const s=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.ot(e,n)?r.Fe(n,1):r.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Q_,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ct(ye),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(ye),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Q_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function rl(){return new Xe(oe.comparator)}function Y_(){return new Xe(oe.comparator)}const NL={asc:"ASCENDING",desc:"DESCENDING"},OL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DL={and:"AND",or:"OR"};class ML{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rd(t,e){return t.useProto3Json||Wc(e)?e:{value:e}}function sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LL(t,e){return sc(t,e.toTimestamp())}function jn(t){return De(!!t),fe.fromTimestamp(function(n){const s=Ys(n);return new it(s.seconds,s.nanos)}(t))}function Vf(t,e){return id(t,e).canonicalString()}function id(t,e){const n=function(r){return new He(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lw(t){const e=He.fromString(t);return De(fw(e)),e}function od(t,e){return Vf(t.databaseId,e.path)}function th(t,e){const n=lw(e);if(n.get(1)!==t.databaseId.projectId)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(uw(n))}function cw(t,e){return Vf(t.databaseId,e)}function xL(t){const e=lw(t);return e.length===4?He.emptyPath():uw(e)}function ad(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uw(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function X_(t,e,n){return{name:od(t,e),fields:n.value.mapValue.fields}}function VL(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(De(h===void 0||typeof h=="string"),Et.fromBase64String(h||"")):(De(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?B.UNKNOWN:rw(u.code);return new te(h,u.message||"")}(o);n=new ow(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=th(t,s.document.name),i=jn(s.document.updateTime),o=s.document.createTime?jn(s.document.createTime):fe.min(),a=new Kt({mapValue:{fields:s.document.fields}}),c=Nt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Il(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=th(t,s.document),i=s.readTime?jn(s.readTime):fe.min(),o=Nt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Il([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=th(t,s.document),i=s.removedTargetIds||[];n=new Il([],i,r,null)}else{if(!("filter"in e))return he();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new SL(r,i),a=s.targetId;n=new iw(a,o)}}return n}function FL(t,e){let n;if(e instanceof wa)n={update:X_(t,e.key,e.value)};else if(e instanceof Mf)n={delete:od(t,e.key)};else if(e instanceof lr)n={update:X_(t,e.key,e.data),updateMask:KL(e.fieldMask)};else{if(!(e instanceof wL))return he();n={verify:od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof tc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw he()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:LL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function UL(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?jn(r.updateTime):jn(i);return o.isEqual(fe.min())&&(o=jn(i)),new EL(o,r.transformResults||[])}(n,e))):[]}function BL(t,e){return{documents:[cw(t,e.path)]}}function $L(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=cw(t,r);const i=function(u){if(u.length!==0)return dw(bn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:ri(m.field),direction:WL(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=rd(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:r}}function jL(t){let e=xL(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){De(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=hw(d);return m instanceof bn&&$I(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(T){return new ec(ii(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,Wc(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,g=d.values||[];return new Zl(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new Zl(g,m)}(n.endAt)),aL(e,r,o,i,a,"F",c,u)}function qL(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ii(n.unaryFilter.field);return rt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=ii(n.unaryFilter.field);return rt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ii(n.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(ii(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return bn.create(n.compositeFilter.filters.map(s=>hw(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function WL(t){return NL[t]}function HL(t){return OL[t]}function zL(t){return DL[t]}function ri(t){return{fieldPath:t.canonicalString()}}function ii(t){return vt.fromServerFormat(t.fieldPath)}function dw(t){return t instanceof rt?function(n){if(n.op==="=="){if(F_(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if(V_(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(F_(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if(V_(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:HL(n.op),value:n.value}}}(t):t instanceof bn?function(n){const s=n.getFilters().map(r=>dw(r));return s.length===1?s[0]:{compositeFilter:{op:zL(n.op),filters:s}}}(t):he()}function KL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Us{constructor(e,n,s,r,i=fe.min(),o=fe.min(),a=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Us(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GL{constructor(e){this.ht=e}}function QL(t){const e=jL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
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
 */class YL{constructor(){this.ln=new XL}addToCollectionParentIndex(e,n){return this.ln.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Qs.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Qs.min())}updateCollectionGroup(e,n,s){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class XL{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ct(He.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ct(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const J_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ht{static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Ht.DEFAULT_COLLECTION_PERCENTILE=10,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ht.DEFAULT=new Ht(41943040,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ht.DISABLED=new Ht(-1,0,0);/**
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
 */class Pi{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Pi(0)}static Qn(){return new Pi(-1)}}/**
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
 */function Z_([t,e],[n,s]){const r=ye(t,n);return r===0?ye(e,s):r}class JL{constructor(e){this.Gn=e,this.buffer=new ct(Z_),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Z_(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ZL{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ee("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qi(n)?ee("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ji(n)}await this.Yn(3e5)})}}class ex{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return U.resolve(qc.oe);const s=new JL(n);return this.Zn.forEachTarget(e,r=>s.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>s.Hn(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Zn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(J_)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),J_):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r))).next(d=>(s=d,a=Date.now(),this.removeTargets(e,s,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(d=>(u=Date.now(),ni()<=me.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d})))}}function tx(t,e){return new ex(t,e)}/**
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
 */class nx{constructor(){this.changes=new jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?U.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class sx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class rx{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Fo(s.mutation,r,Zt.empty(),it.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,_e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=_e()){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=yo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,_e()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=vs();const o=Vo(),a=function(){return Vo()}();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof lr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Fo(h.mutation,u,h.mutation.getFieldMask(),it.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new sx(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Vo();let r=new Xe((o,a)=>o-a),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||Zt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const d=(r.get(a.batchId)||_e()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=YI();h.forEach(m=>{if(!i.has(m)){const g=nw(n.get(m),s.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return U.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):U.resolve(wr());let a=-1,c=i;return o.next(u=>U.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,_e())).next(h=>({batchId:a,changes:QI(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(s=>{let r=yo();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=yo();return this.indexManager.getCollectionParents(e,i).next(a=>U.forEach(a,c=>{const u=function(d,m){return new Ia(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Nt.newInvalidDocument(h)))});let a=yo();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Fo(h.mutation,u,Zt.empty(),it.now()),Gc(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class ix{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return U.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:jn(r.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(r){return{name:r.name,query:QL(r.bundledQuery),readTime:jn(r.readTime)}}(n)),U.resolve()}}/**
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
 */class ox{constructor(){this.overlays=new Xe(oe.comparator),this.Er=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const s=wr();return U.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Tt(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Er.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(s)),U.resolve()}getOverlaysForCollection(e,n,s){const r=wr(),i=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return U.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Xe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=wr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=wr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return U.resolve(a)}Tt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(s.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new RL(n,s));let i=this.Er.get(n);i===void 0&&(i=_e(),this.Er.set(n,i)),this.Er.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ax{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Ff{constructor(){this.dr=new ct(dt.Ar),this.Rr=new ct(dt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const s=new dt(e,n);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gr(new dt(e,n))}pr(e,n){e.forEach(s=>this.removeReference(s,n))}yr(e){const n=new oe(new He([])),s=new dt(n,e),r=new dt(n,e+1),i=[];return this.Rr.forEachInRange([s,r],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new oe(new He([])),s=new dt(n,e),r=new dt(n,e+1);let i=_e();return this.Rr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new dt(e,0),s=this.dr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class dt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return oe.comparator(e.key,n.key)||ye(e.br,n.br)}static Vr(e,n){return ye(e.br,n.br)||oe.comparator(e.key,n.key)}}/**
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
 */class lx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ct(dt.Ar)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AL(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new dt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Fr(s),i=r<0?0:r;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new dt(n,0),r=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([s,r],o=>{const a=this.Cr(o.br);i.push(a)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ct(ye);return n.forEach(r=>{const i=new dt(r,0),o=new dt(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{s=s.add(a.br)})}),U.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;oe.isDocumentKey(i)||(i=i.child(""));const o=new dt(new oe(i),0);let a=new ct(ye);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.br)),!0)},o),U.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(s=>{const r=this.Cr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){De(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return U.forEach(n.mutations,r=>{const i=new dt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,n){const s=new dt(n,0),r=this.vr.firstAfterOrEqual(s);return U.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class cx{constructor(e){this.Nr=e,this.docs=function(){return new Xe(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Nr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return U.resolve(s?s.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let s=vs();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Nt.newInvalidDocument(r))}),U.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=vs();const o=n.path,a=new oe(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||BM(UM(h),s)<=0||(r.has(h.key)||Gc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,s,r){he()}Lr(e,n){return U.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new ux(this)}getSize(e){return U.resolve(this.size)}}class ux extends nx{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.hr.addEntry(e,r)):this.hr.removeEntry(s)}),U.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class hx{constructor(e){this.persistence=e,this.Br=new jr(n=>Nf(n),Of),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ff,this.targetCount=0,this.Qr=Pi.qn()}forEachTarget(e,n){return this.Br.forEach((s,r)=>n(r)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.kr&&(this.kr=n),U.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Pi(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Un(n),U.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),U.waitFor(i).next(()=>r)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const s=this.Br.get(n)||null;return U.resolve(s)}addMatchingKeys(e,n,s){return this.qr.mr(n,s),U.resolve()}removeMatchingKeys(e,n,s){this.qr.pr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qr.Sr(n);return U.resolve(s)}containsKey(e,n){return U.resolve(this.qr.containsKey(n))}}/**
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
 */class pw{constructor(e,n){this.Kr={},this.overlays={},this.$r=new qc(0),this.Ur=!1,this.Ur=!0,this.Wr=new ax,this.referenceDelegate=e(this),this.Gr=new hx(this),this.indexManager=new YL,this.remoteDocumentCache=function(r){return new cx(r)}(s=>this.referenceDelegate.zr(s)),this.serializer=new GL(n),this.jr=new ix(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ox,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Kr[e.toKey()];return s||(s=new lx(n,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,s){ee("MemoryPersistence","Starting transaction:",e);const r=new dx(this.$r.next());return this.referenceDelegate.Hr(),s(r).next(i=>this.referenceDelegate.Jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Yr(e,n){return U.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,n)))}}class dx extends jM{constructor(e){super(),this.currentSequenceNumber=e}}class Uf{constructor(e){this.persistence=e,this.Zr=new Ff,this.Xr=null}static ei(e){return new Uf(e)}get ti(){if(this.Xr)return this.Xr;throw he()}addReference(e,n,s){return this.Zr.addReference(s,n),this.ti.delete(s.toString()),U.resolve()}removeReference(e,n,s){return this.Zr.removeReference(s,n),this.ti.add(s.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),U.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(r=>this.ti.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.ti.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ti,s=>{const r=oe.fromPath(s);return this.ni(e,r).next(i=>{i||n.removeEntry(r,fe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(s=>{s?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return U.or([()=>U.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class rc{constructor(e,n){this.persistence=e,this.ri=new jr(s=>HM(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=tx(this,n)}static ei(e,n){return new rc(e,n)}Hr(){}Jr(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}nr(e){let n=0;return this.er(e,s=>{n++}).next(()=>n)}er(e,n){return U.forEach(this.ri,(s,r)=>this.ir(e,s,r).next(i=>i?U.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(s++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),U.resolve()}removeReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=vl(e.data.value)),n}ir(e,n,s){return U.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.ri.get(n);return U.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bf{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Wi=s,this.Gi=r}static zi(e,n){let s=_e(),r=_e();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Bf(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class fx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class px{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return ob()?8:qM(Mt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new fx;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,s,r){return s.documentReadCount<this.Ji?(ni()<=me.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),U.resolve()):(ni()<=me.DEBUG&&ee("QueryEngine","Query:",si(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Yi*r?(ni()<=me.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(n))):U.resolve())}Xi(e,n){if(j_(n))return U.resolve(null);let s=$n(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=sd(n,null,"F"),s=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=_e(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,sd(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,s,r){return j_(n)||r.isEqual(fe.min())?U.resolve(null):this.Zi.getDocuments(e,s).next(i=>{const o=this.rs(n,i);return this.ss(n,o,s,r)?U.resolve(null):(ni()<=me.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),si(n)),this.os(e,o,n,FM(r,-1)).next(a=>a))})}rs(e,n){let s=new ct(KI(e));return n.forEach((r,i)=>{Gc(e,i)&&(s=s.add(i))}),s}ss(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,n,s){return ni()<=me.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",si(n)),this.Zi.getDocumentsMatchingQuery(e,n,Qs.min(),s)}os(e,n,s,r){return this.Zi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class mx{constructor(e,n,s,r){this.persistence=e,this._s=n,this.serializer=r,this.us=new Xe(ye),this.cs=new jr(i=>Nf(i),Of),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rx(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function gx(t,e,n,s){return new mx(t,e,n,s)}async function mw(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=_e();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function _x(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const d=u.batch,m=d.keys();let g=U.resolve();return m.forEach(T=>{g=g.next(()=>h.getEntry(c,T)).next(A=>{const P=u.docVersions.get(T);De(P!==null),A.version.compareTo(P)<0&&(d.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=_e();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function gw(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function yx(t,e){const n=pe(t),s=e.snapshotVersion;let r=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});r=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const m=r.get(d);if(!m)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Et.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(d,g),function(A,P,O){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(m,g,h)&&a.push(n.Gr.updateTargetData(i,g))});let c=vs(),u=_e();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(vx(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!s.isEqual(fe.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return U.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=r,i))}function vx(t,e,n){let s=_e(),r=_e();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=vs();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:r}})}function Ex(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Tx(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Gr.getTargetData(s,e).next(i=>i?(r=i,U.resolve(r)):n.Gr.allocateTargetId(s).next(o=>(r=new Us(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Gr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.us.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(s.targetId,s),n.cs.set(e,s.targetId)),s})}async function ld(t,e,n){const s=pe(t),r=s.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!qi(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(r.target)}function ey(t,e,n){const s=pe(t);let r=fe.min(),i=_e();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=pe(c),m=d.cs.get(h);return m!==void 0?U.resolve(d.us.get(m)):d.Gr.getTargetData(u,h)}(s,o,$n(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,n?r:fe.min(),n?i:_e())).next(a=>(Ix(s,cL(e),a),{documents:a,ds:i})))}function Ix(t,e,n){let s=t.ls.get(e)||fe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ls.set(e,s)}class ty{constructor(){this.activeTargetIds=mL()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wx{constructor(){this._o=new ty,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,s){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new ty,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ax{uo(e){}shutdown(){}}/**
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
 */class ny{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let il=null;function nh(){return il===null?il=function(){return 268435456+Math.round(2147483648*Math.random())}():il++,"0x"+il.toString(16)}/**
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
 */const Rx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Sx{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Rt="WebChannelConnection";class Cx extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+n.host,this.Mo=`projects/${r}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Oo(n,s,r,i,o){const a=nh(),c=this.No(n,s.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,r).then(h=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ri("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}ko(n,s,r,i,o,a){return this.Oo(n,s,r,i,o)}Lo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$i}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}No(n,s){const r=Rx[n];return`${this.Fo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,s,r){const i=nh();return new Promise((o,a)=>{const c=new PI;c.setWithCredentials(!0),c.listenOnce(kI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yl.NO_ERROR:const h=c.getResponseJson();ee(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case yl.TIMEOUT:ee(Rt,`RPC '${e}' ${i} timed out`),a(new te(B.DEADLINE_EXCEEDED,"Request time out"));break;case yl.HTTP_ERROR:const d=c.getStatus();if(ee(Rt,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const T=function(P){const O=P.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(O)>=0?O:B.UNKNOWN}(g.status);a(new te(T,g.message))}else a(new te(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new te(B.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ee(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);ee(Rt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}qo(e,n,s){const r=nh(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DI(),a=OI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");ee(Rt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const d=o.createWebChannel(h,c);let m=!1,g=!1;const T=new Sx({Eo:P=>{g?ee(Rt,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(m||(ee(Rt,`Opening RPC '${e}' stream ${r} transport.`),d.open(),m=!0),ee(Rt,`RPC '${e}' stream ${r} sending:`,P),d.send(P))},Ao:()=>d.close()}),A=(P,O,x)=>{P.listen(O,M=>{try{x(M)}catch(L){setTimeout(()=>{throw L},0)}})};return A(d,_o.EventType.OPEN,()=>{g||(ee(Rt,`RPC '${e}' stream ${r} transport opened.`),T.So())}),A(d,_o.EventType.CLOSE,()=>{g||(g=!0,ee(Rt,`RPC '${e}' stream ${r} transport closed`),T.Do())}),A(d,_o.EventType.ERROR,P=>{g||(g=!0,Ri(Rt,`RPC '${e}' stream ${r} transport errored:`,P),T.Do(new te(B.UNAVAILABLE,"The operation could not be completed")))}),A(d,_o.EventType.MESSAGE,P=>{var O;if(!g){const x=P.data[0];De(!!x);const M=x,L=(M==null?void 0:M.error)||((O=M[0])===null||O===void 0?void 0:O.error);if(L){ee(Rt,`RPC '${e}' stream ${r} received error:`,L);const K=L.status;let J=function(y){const w=st[y];if(w!==void 0)return rw(w)}(K),S=L.message;J===void 0&&(J=B.INTERNAL,S="Unknown error status: "+K+" with message "+L.message),g=!0,T.Do(new te(J,S)),d.close()}else ee(Rt,`RPC '${e}' stream ${r} received:`,x),T.vo(x)}}),A(a,NI.STAT_EVENT,P=>{P.stat===Xh.PROXY?ee(Rt,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===Xh.NOPROXY&&ee(Rt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{T.bo()},0),T}}function sh(){return typeof document<"u"?document:null}/**
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
 */function Jc(t){return new ML(t,!0)}/**
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
 */class _w{constructor(e,n,s=1e3,r=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),r=Math.max(0,n-s);r>0&&ee("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class yw{constructor(e,n,s,r,i,o,a,c){this.li=e,this.Yo=s,this.Zo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new _w(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(ys(n.toString()),ys("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Xo===n&&this.I_(s,r)},s=>{e(()=>{const r=new te(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(r)})})}I_(e,n){const s=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{s(()=>this.E_(r))}),this.stream.onMessage(r=>{s(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bx extends yw{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=VL(this.serializer,e),s=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?jn(o.readTime):fe.min()}(e);return this.listener.R_(n,s)}V_(e){const n={};n.database=ad(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=td(c)?{documents:BL(i,c)}:{query:$L(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=aw(i,o.resumeToken);const u=rd(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=sc(i,o.snapshotVersion.toTimestamp());const u=rd(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=qL(this.serializer,e);s&&(n.labels=s),this.c_(n)}m_(e){const n={};n.database=ad(this.serializer),n.removeTarget=e,this.c_(n)}}class Px extends yw{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return De(!!e.streamToken),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=UL(e.writeResults,e.commitTime),s=jn(e.commitTime);return this.listener.y_(s,n)}w_(){const e={};e.database=ad(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>FL(this.serializer,s))};this.c_(n)}}/**
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
 */class kx extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,id(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(B.UNKNOWN,i.toString())})}ko(e,n,s,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,id(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(B.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Nx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ys(n),this.C_=!1):ee("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Ox{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{qr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=pe(c);u.k_.add(4),await Ra(u),u.K_.set("Unknown"),u.k_.delete(4),await Zc(u)}(this))})}),this.K_=new Nx(s,r)}}async function Zc(t){if(qr(t))for(const e of t.q_)await e(!0)}async function Ra(t){for(const e of t.q_)await e(!1)}function vw(t,e){const n=pe(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Wf(n)?qf(n):Wi(n).s_()&&jf(n,e))}function $f(t,e){const n=pe(t),s=Wi(n);n.B_.delete(e),s.s_()&&Ew(n,e),n.B_.size===0&&(s.s_()?s.a_():qr(n)&&n.K_.set("Unknown"))}function jf(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wi(t).V_(e)}function Ew(t,e){t.U_.xe(e),Wi(t).m_(e)}function qf(t){t.U_=new kL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Wi(t).start(),t.K_.F_()}function Wf(t){return qr(t)&&!Wi(t).i_()&&t.B_.size>0}function qr(t){return pe(t).k_.size===0}function Tw(t){t.U_=void 0}async function Dx(t){t.K_.set("Online")}async function Mx(t){t.B_.forEach((e,n)=>{jf(t,e)})}async function Lx(t,e){Tw(t),Wf(t)?(t.K_.O_(e),qf(t)):t.K_.set("Unknown")}async function xx(t,e,n){if(t.K_.set("Online"),e instanceof ow&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(t,e)}catch(s){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ic(t,s)}else if(e instanceof Il?t.U_.$e(e):e instanceof iw?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(fe.min()))try{const s=await gw(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(Et.EMPTY_BYTE_STRING,h.snapshotVersion)),Ew(i,c);const d=new Us(h.target,c,u,h.sequenceNumber);jf(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){ee("RemoteStore","Failed to raise snapshot:",s),await ic(t,s)}}async function ic(t,e,n){if(!qi(e))throw e;t.k_.add(1),await Ra(t),t.K_.set("Offline"),n||(n=()=>gw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Zc(t)})}function Iw(t,e){return e().catch(n=>ic(t,n,e))}async function eu(t){const e=pe(t),n=Zs(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Vx(e);)try{const r=await Ex(e.localStore,s);if(r===null){e.L_.length===0&&n.a_();break}s=r.batchId,Fx(e,r)}catch(r){await ic(e,r)}ww(e)&&Aw(e)}function Vx(t){return qr(t)&&t.L_.length<10}function Fx(t,e){t.L_.push(e);const n=Zs(t);n.s_()&&n.f_&&n.g_(e.mutations)}function ww(t){return qr(t)&&!Zs(t).i_()&&t.L_.length>0}function Aw(t){Zs(t).start()}async function Ux(t){Zs(t).w_()}async function Bx(t){const e=Zs(t);for(const n of t.L_)e.g_(n.mutations)}async function $x(t,e,n){const s=t.L_.shift(),r=Lf.from(s,e,n);await Iw(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await eu(t)}async function jx(t,e){e&&Zs(t).f_&&await async function(s,r){if(function(o){return CL(o)&&o!==B.ABORTED}(r.code)){const i=s.L_.shift();Zs(s).__(),await Iw(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await eu(s)}}(t,e),ww(t)&&Aw(t)}async function sy(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const s=qr(n);n.k_.add(3),await Ra(n),s&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Zc(n)}async function qx(t,e){const n=pe(t);e?(n.k_.delete(2),await Zc(n)):e||(n.k_.add(2),await Ra(n),n.K_.set("Unknown"))}function Wi(t){return t.W_||(t.W_=function(n,s,r){const i=pe(n);return i.b_(),new bx(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Ro:Dx.bind(null,t),mo:Mx.bind(null,t),po:Lx.bind(null,t),R_:xx.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Wf(t)?qf(t):t.K_.set("Unknown")):(await t.W_.stop(),Tw(t))})),t.W_}function Zs(t){return t.G_||(t.G_=function(n,s,r){const i=pe(n);return i.b_(),new Px(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:Ux.bind(null,t),po:jx.bind(null,t),p_:Bx.bind(null,t),y_:$x.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await eu(t)):(await t.G_.stop(),t.L_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class Hf{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Hf(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zf(t,e){if(ys("AsyncQueue",`${e}: ${t}`),qi(t))return new te(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class yi{static emptySet(e){return new yi(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||oe.comparator(n.key,s.key):(n,s)=>oe.comparator(n.key,s.key),this.keyedMap=yo(),this.sortedSet=new Xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ry{constructor(){this.z_=new Xe(oe.comparator)}track(e){const n=e.doc.key,s=this.z_.get(n);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(n,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(n):e.type===1&&s.type===2?this.z_=this.z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):he():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class ki{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ki(e,n,yi.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Wx{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Hx{constructor(){this.queries=iy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,s){const r=pe(n),i=r.queries;r.queries=iy(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(s)})})(this,new te(B.ABORTED,"Firestore shutting down"))}}function iy(){return new jr(t=>zI(t),Kc)}async function Kf(t,e){const n=pe(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Y_()&&e.Z_()&&(s=2):(i=new Wx,s=e.Z_()?0:1);try{switch(s){case 0:i.H_=await n.onListen(r,!0);break;case 1:i.H_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=zf(o,`Initialization of query '${si(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Qf(n)}async function Gf(t,e){const n=pe(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?r=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function zx(t,e){const n=pe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(r)&&(s=!0);o.H_=r}}s&&Qf(n)}function Kx(t,e,n){const s=pe(t),r=s.queries.get(e);if(r)for(const i of r.J_)i.onError(n);s.queries.delete(e)}function Qf(t){t.X_.forEach(e=>{e.next()})}var cd,oy;(oy=cd||(cd={})).na="default",oy.Cache="cache";class Yf{constructor(e,n,s){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ki(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const s=n!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==cd.Cache}}/**
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
 */class Rw{constructor(e){this.key=e}}class Sw{constructor(e){this.key=e}}class Gx{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=_e(),this.mutatedKeys=_e(),this.Va=KI(e),this.ma=new yi(this.Va)}get fa(){return this.da}ga(e,n){const s=n?n.pa:new ry,r=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,d)=>{const m=r.get(h),g=Gc(this.query,d)?d:null,T=!!m&&this.mutatedKeys.has(m.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;m&&g?m.data.isEqual(g.data)?T!==A&&(s.track({type:3,doc:g}),P=!0):this.ya(m,g)||(s.track({type:2,doc:g}),P=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(a=!0)):!m&&g?(s.track({type:0,doc:g}),P=!0):m&&!g&&(s.track({type:1,doc:m}),P=!0,(c||u)&&(a=!0)),P&&(g?(o=o.add(g),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,T){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return A(g)-A(T)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(s),r=r!=null&&r;const a=n&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new ki(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ry,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=_e(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const n=[];return e.forEach(s=>{this.Ra.has(s)||n.push(new Sw(s))}),this.Ra.forEach(s=>{e.has(s)||n.push(new Rw(s))}),n}va(e){this.da=e.ds,this.Ra=_e();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ki.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Qx{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Yx{constructor(e){this.key=e,this.Fa=!1}}class Xx{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new jr(a=>zI(a),Kc),this.Oa=new Map,this.Na=new Set,this.La=new Xe(oe.comparator),this.Ba=new Map,this.ka=new Ff,this.qa={},this.Qa=new Map,this.Ka=Pi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Jx(t,e,n=!0){const s=Ow(t);let r;const i=s.xa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Ca()):r=await Cw(s,e,n,!0),r}async function Zx(t,e){const n=Ow(t);await Cw(n,e,!0,!1)}async function Cw(t,e,n,s){const r=await Tx(t.localStore,$n(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await eV(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&vw(t.remoteStore,r),a}async function eV(t,e,n,s,r){t.Ua=(d,m,g)=>async function(A,P,O,x){let M=P.view.ga(O);M.ss&&(M=await ey(A.localStore,P.query,!1).then(({documents:S})=>P.view.ga(S,M)));const L=x&&x.targetChanges.get(P.targetId),K=x&&x.targetMismatches.get(P.targetId)!=null,J=P.view.applyChanges(M,A.isPrimaryClient,L,K);return ly(A,P.targetId,J.ba),J.snapshot}(t,d,m,g);const i=await ey(t.localStore,e,!0),o=new Gx(e,i.ds),a=o.ga(i.documents),c=Aa.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);ly(t,n,u.ba);const h=new Qx(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function tV(t,e,n){const s=pe(t),r=s.xa.get(e),i=s.Oa.get(r.targetId);if(i.length>1)return s.Oa.set(r.targetId,i.filter(o=>!Kc(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ld(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&$f(s.remoteStore,r.targetId),ud(s,r.targetId)}).catch(ji)):(ud(s,r.targetId),await ld(s.localStore,r.targetId,!0))}async function nV(t,e){const n=pe(t),s=n.xa.get(e),r=n.Oa.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),$f(n.remoteStore,s.targetId))}async function sV(t,e,n){const s=uV(t);try{const r=await function(o,a){const c=pe(o),u=it.now(),h=a.reduce((g,T)=>g.add(T.key),_e());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let T=vs(),A=_e();return c.hs.getEntries(g,h).next(P=>{T=P,T.forEach((O,x)=>{x.isValidDocument()||(A=A.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,T)).next(P=>{d=P;const O=[];for(const x of a){const M=IL(x,d.get(x.key).overlayedDocument);M!=null&&O.push(new lr(x.key,M,FI(M.value.mapValue),Tn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,O,a)}).next(P=>{m=P;const O=P.applyToLocalDocumentSet(d,A);return c.documentOverlayCache.saveOverlays(g,P.batchId,O)})}).then(()=>({batchId:m.batchId,changes:QI(d)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Xe(ye)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(s,r.batchId,n),await Sa(s,r.changes),await eu(s.remoteStore)}catch(r){const i=zf(r,"Failed to persist write");n.reject(i)}}async function bw(t,e){const n=pe(t);try{const s=await yx(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Ba.get(i);o&&(De(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?De(o.Fa):r.removedDocuments.size>0&&(De(o.Fa),o.Fa=!1))}),await Sa(n,s,e)}catch(s){await ji(s)}}function ay(t,e,n){const s=pe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=pe(o);c.onlineState=a;let u=!1;c.queries.forEach((h,d)=>{for(const m of d.J_)m.ea(a)&&(u=!0)}),u&&Qf(c)}(s.eventManager,e),r.length&&s.Ma.R_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rV(t,e,n){const s=pe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Ba.get(e),i=r&&r.key;if(i){let o=new Xe(oe.comparator);o=o.insert(i,Nt.newNoDocument(i,fe.min()));const a=_e().add(i),c=new Xc(fe.min(),new Map,new Xe(ye),o,a);await bw(s,c),s.La=s.La.remove(i),s.Ba.delete(e),Xf(s)}else await ld(s.localStore,e,!1).then(()=>ud(s,e,n)).catch(ji)}async function iV(t,e){const n=pe(t),s=e.batch.batchId;try{const r=await _x(n.localStore,e);kw(n,s,null),Pw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Sa(n,r)}catch(r){await ji(r)}}async function oV(t,e,n){const s=pe(t);try{const r=await function(o,a){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(De(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);kw(s,e,n),Pw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Sa(s,r)}catch(r){await ji(r)}}function Pw(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function kw(t,e,n){const s=pe(t);let r=s.qa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.qa[s.currentUser.toKey()]=r}}function ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Oa.get(e))t.xa.delete(s),n&&t.Ma.Wa(s,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(s=>{t.ka.containsKey(s)||Nw(t,s)})}function Nw(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&($f(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Xf(t))}function ly(t,e,n){for(const s of n)s instanceof Rw?(t.ka.addReference(s.key,e),aV(t,s)):s instanceof Sw?(ee("SyncEngine","Document no longer in limbo: "+s.key),t.ka.removeReference(s.key,e),t.ka.containsKey(s.key)||Nw(t,s.key)):he()}function aV(t,e){const n=e.key,s=n.path.canonicalString();t.La.get(n)||t.Na.has(s)||(ee("SyncEngine","New document in limbo: "+n),t.Na.add(s),Xf(t))}function Xf(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new oe(He.fromString(e)),s=t.Ka.next();t.Ba.set(s,new Yx(n)),t.La=t.La.insert(n,s),vw(t.remoteStore,new Us($n(zc(n.path)),s,"TargetPurposeLimboResolution",qc.oe))}}async function Sa(t,e,n){const s=pe(t),r=[],i=[],o=[];s.xa.isEmpty()||(s.xa.forEach((a,c)=>{o.push(s.Ua(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){r.push(u);const d=Bf.zi(c.targetId,u);i.push(d)}}))}),await Promise.all(o),s.Ma.R_(r),await async function(c,u){const h=pe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>U.forEach(u,m=>U.forEach(m.Wi,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>U.forEach(m.Gi,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!qi(d))throw d;ee("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.us.get(m),T=g.snapshotVersion,A=g.withLastLimboFreeSnapshotVersion(T);h.us=h.us.insert(m,A)}}}(s.localStore,i))}async function lV(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const s=await mw(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new te(B.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Sa(n,s.Ts)}}function cV(t,e){const n=pe(t),s=n.Ba.get(e);if(s&&s.Fa)return _e().add(s.key);{let r=_e();const i=n.Oa.get(e);if(!i)return r;for(const o of i){const a=n.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function Ow(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rV.bind(null,e),e.Ma.R_=zx.bind(null,e.eventManager),e.Ma.Wa=Kx.bind(null,e.eventManager),e}function uV(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oV.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return gx(this.persistence,new px,e.initialUser,this.serializer)}ja(e){return new pw(Uf.ei,this.serializer)}za(e){return new wx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class hV extends oc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){De(this.persistence.referenceDelegate instanceof rc);const s=this.persistence.referenceDelegate.garbageCollector;return new ZL(s,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new pw(s=>rc.ei(s,n),this.serializer)}}class hd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ay(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lV.bind(null,this.syncEngine),await qx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Hx}()}createDatastore(e){const n=Jc(e.databaseInfo.databaseId),s=function(i){return new Cx(i)}(e.databaseInfo);return function(i,o,a,c){return new kx(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new Ox(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ay(this.syncEngine,n,0),function(){return ny.p()?new ny:new Ax}())}createSyncEngine(e,n){return function(r,i,o,a,c,u,h){const d=new Xx(r,i,o,a,c,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=pe(r);ee("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Ra(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hd.provider={build:()=>new hd};/**
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
 *//**
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
 */class Jf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ys("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class dV{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=St.UNAUTHENTICATED,this.clientId=LI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=zf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function rh(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await mw(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fV(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>sy(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>sy(e.remoteStore,r)),t._onlineComponents=e}async function fV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Ri("Error using user provided cache. Falling back to memory cache: "+n),await rh(t,new oc)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await rh(t,new hV(void 0));return t._offlineComponents}async function Dw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await cy(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await cy(t,new hd))),t._onlineComponents}function pV(t){return Dw(t).then(e=>e.syncEngine)}async function ac(t){const e=await Dw(t),n=e.eventManager;return n.onListen=Jx.bind(null,e.syncEngine),n.onUnlisten=tV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Zx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nV.bind(null,e.syncEngine),n}function mV(t,e,n={}){const s=new ms;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new Jf({next:m=>{h.eu(),o.enqueueAndForget(()=>Gf(i,d));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new te(B.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new te(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new Yf(zc(a.path),h,{includeMetadataChanges:!0,ua:!0});return Kf(i,d)}(await ac(t),t.asyncQueue,e,n,s)),s.promise}function gV(t,e,n={}){const s=new ms;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new Jf({next:m=>{h.eu(),o.enqueueAndForget(()=>Gf(i,d)),m.fromCache&&c.source==="server"?u.reject(new te(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new Yf(a,h,{includeMetadataChanges:!0,ua:!0});return Kf(i,d)}(await ac(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Mw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const uy=new Map;/**
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
 */function Lw(t,e,n){if(!n)throw new te(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _V(t,e,n,s){if(e===!0&&s===!0)throw new te(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hy(t){if(!oe.isDocumentKey(t))throw new te(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dy(t){if(oe.isDocumentKey(t))throw new te(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tu(t);throw new te(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class fy{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new te(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_V("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fy(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new PM;switch(s.type){case"firstParty":return new DM(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=uy.get(n);s&&(ee("ComponentProvider","Removing Datastore"),uy.delete(n),s.terminate())}(this),Promise.resolve()}}function yV(t,e,n,s={}){var r;const i=(t=hn(t,nu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=St.MOCK_USER;else{a=tb(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new te(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new St(u)}t._authCredentials=new kM(new MI(a,c))}}/**
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
 */class Wr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wr(this.firestore,e,this._query)}}class qt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class Hs extends Wr{constructor(e,n,s){super(e,n,zc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new oe(e))}withConverter(e){return new Hs(this.firestore,e,this._path)}}function vV(t,e,...n){if(t=at(t),Lw("collection","path",e),t instanceof nu){const s=He.fromString(e,...n);return dy(s),new Hs(t,null,s)}{if(!(t instanceof qt||t instanceof Hs))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(He.fromString(e,...n));return dy(s),new Hs(t.firestore,null,s)}}function EV(t,e,...n){if(t=at(t),arguments.length===1&&(e=LI.newId()),Lw("doc","path",e),t instanceof nu){const s=He.fromString(e,...n);return hy(s),new qt(t,null,new oe(s))}{if(!(t instanceof qt||t instanceof Hs))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(He.fromString(e,...n));return hy(s),new qt(t.firestore,t instanceof Hs?t.converter:null,new oe(s))}}/**
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
 */class py{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new _w(this,"async_queue_retry"),this.fu=()=>{const s=sh();s&&ee("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=sh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new ms;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!qi(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw ys("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const r=Hf.createAndSchedule(this,e,n,s,i=>this.Su(i));return this.du.push(r),r}pu(){this.Au&&he()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function my(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class er extends nu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new py,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new py(e),this._firestoreClient=void 0,await e}}}function xw(t,e){const n=typeof t=="object"?t:zd(),s=typeof t=="string"?t:"(default)",r=Hd(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=eb("firestore");i&&yV(r,...i)}return r}function su(t){if(t._terminated)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||TV(t),t._firestoreClient}function TV(t){var e,n,s;const r=t._freezeSettings(),i=function(a,c,u,h){return new GM(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Mw(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new dV(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ni(Et.fromBase64String(e))}catch(n){throw new te(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ni(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ru{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zf{constructor(e){this._methodName=e}}/**
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
 */class iu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ep{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const IV=/^__.*__$/;class wV{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}class Vw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class tp{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new tp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:s,Nu:!1});return r.Lu(e),r}Bu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:s,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return lc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Fw(this.Mu)&&IV.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class AV{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Jc(e)}$u(e,n,s,r=!1){return new tp({Mu:e,methodName:n,Ku:s,path:vt.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function np(t){const e=t._freezeSettings(),n=Jc(t._databaseId);return new AV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function RV(t,e,n,s,r,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,r);sp("Data must be an object, but it was:",o,s);const a=Uw(s,o);let c,u;if(i.merge)c=new Zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=dd(e,d,n);if(!o.contains(m))throw new te(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);$w(h,m)||h.push(m)}c=new Zt(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new wV(new Kt(a),c,u)}class ou extends Zf{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ou}}function SV(t,e,n,s){const r=t.$u(1,e,n);sp("Data must be an object, but it was:",r,s);const i=[],o=Kt.empty();ar(s,(c,u)=>{const h=rp(e,c,n);u=at(u);const d=r.Bu(h);if(u instanceof ou)i.push(h);else{const m=Ca(u,d);m!=null&&(i.push(h),o.set(h,m))}});const a=new Zt(i);return new Vw(o,a,r.fieldTransforms)}function CV(t,e,n,s,r,i){const o=t.$u(1,e,n),a=[dd(e,s,n)],c=[r];if(i.length%2!=0)throw new te(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(dd(e,i[m])),c.push(i[m+1]);const u=[],h=Kt.empty();for(let m=a.length-1;m>=0;--m)if(!$w(u,a[m])){const g=a[m];let T=c[m];T=at(T);const A=o.Bu(g);if(T instanceof ou)u.push(g);else{const P=Ca(T,A);P!=null&&(u.push(g),h.set(g,P))}}const d=new Zt(u);return new Vw(h,d,o.fieldTransforms)}function bV(t,e,n,s=!1){return Ca(n,t.$u(s?4:3,e))}function Ca(t,e){if(Bw(t=at(t)))return sp("Unsupported field value:",e,t),Uw(t,e);if(t instanceof Zf)return function(s,r){if(!Fw(r.Mu))throw r.qu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Ca(a,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=at(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return gL(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=it.fromDate(s);return{timestampValue:sc(r.serializer,i)}}if(s instanceof it){const i=new it(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sc(r.serializer,i)}}if(s instanceof iu)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ni)return{bytesValue:aw(r.serializer,s._byteString)};if(s instanceof qt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vf(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof ep)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Df(a.serializer,c)})}}}}}}(s,r);throw r.qu(`Unsupported field value: ${tu(s)}`)}(t,e)}function Uw(t,e){const n={};return xI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(t,(s,r)=>{const i=Ca(r,e.Ou(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Bw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof iu||t instanceof Ni||t instanceof qt||t instanceof Zf||t instanceof ep)}function sp(t,e,n){if(!Bw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=tu(n);throw s==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+s)}}function dd(t,e,n){if((e=at(e))instanceof ru)return e._internalPath;if(typeof e=="string")return rp(t,e);throw lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const PV=new RegExp("[~\\*/\\[\\]]");function rp(t,e,n){if(e.search(PV)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ru(...e.split("."))._internalPath}catch{throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lc(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new te(B.INVALID_ARGUMENT,a+t+c)}function $w(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jw{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ip("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kV extends jw{data(){return super.data()}}function ip(t,e){return typeof e=="string"?rp(t,e):e instanceof ru?e._internalPath:e._delegate._internalPath}/**
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
 */function qw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class op{}class NV extends op{}function UF(t,e,...n){let s=[];e instanceof op&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof ap).length,a=i.filter(c=>c instanceof au).length;if(o>1||o>0&&a>0)throw new te(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class au extends NV{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new au(e,n,s)}_apply(e){const n=this._parse(e);return Ww(e._query,n),new Wr(e.firestore,e.converter,nd(e._query,n))}_parse(e){const n=np(e.firestore);return function(i,o,a,c,u,h,d){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){_y(d,h);const g=[];for(const T of d)g.push(gy(c,i,T));m={arrayValue:{values:g}}}else m=gy(c,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||_y(d,h),m=bV(a,o,d,h==="in"||h==="not-in");return rt.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function BF(t,e,n){const s=e,r=ip("where",t);return au._create(r,s,n)}class ap extends op{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ap(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)Ww(o,c),o=nd(o,c)}(e._query,n),new Wr(e.firestore,e.converter,nd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gy(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new te(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!HI(e)&&n.indexOf("/")!==-1)throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(He.fromString(n));if(!oe.isDocumentKey(s))throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return x_(t,new oe(s))}if(n instanceof qt)return x_(t,n._key);throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tu(n)}.`)}function _y(t,e){if(!Array.isArray(t)||t.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ww(t,e){const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class OV{convertValue(e,n="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ar(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>nt(o.doubleValue));return new ep(i)}convertGeoPoint(e){return new iu(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Hc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=Ys(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=He.fromString(e);De(fw(s));const r=new ra(s.get(1),s.get(3)),i=new oe(s.popFirst(5));return r.isEqual(n)||ys(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function DV(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
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
 */class Eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hw extends jw{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ip("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class wl extends Hw{data(e={}){return super.data(e)}}class zw{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Eo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new wl(this._firestore,this._userDataWriter,s.key,s,new Eo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new wl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Eo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new wl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Eo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:MV(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function MV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function Kw(t){t=hn(t,qt);const e=hn(t.firestore,er);return mV(su(e),t._key).then(n=>Gw(e,t,n))}class lp extends OV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ni(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function LV(t){t=hn(t,Wr);const e=hn(t.firestore,er),n=su(e),s=new lp(e);return qw(t._query),gV(n,t._query).then(r=>new zw(e,s,t,r))}function $F(t,e,n,...s){t=hn(t,qt);const r=hn(t.firestore,er),i=np(r);let o;return o=typeof(e=at(e))=="string"||e instanceof ru?CV(i,"updateDoc",t._key,e,n,s):SV(i,"updateDoc",t._key,e),up(r,[o.toMutation(t._key,Tn.exists(!0))])}function jF(t){return up(hn(t.firestore,er),[new Mf(t._key,Tn.none())])}function qF(t,e){const n=hn(t.firestore,er),s=EV(t),r=DV(t.converter,e);return up(n,[RV(np(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Tn.exists(!1))]).then(()=>s)}function cp(t,...e){var n,s,r;t=at(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||my(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(my(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,h;if(t instanceof qt)u=hn(t.firestore,er),h=zc(t._key.path),c={next:d=>{e[o]&&e[o](Gw(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=hn(t,Wr);u=hn(d.firestore,er),h=d._query;const m=new lp(u);c={next:g=>{e[o]&&e[o](new zw(u,m,d,g))},error:e[o+1],complete:e[o+2]},qw(t._query)}return function(m,g,T,A){const P=new Jf(A),O=new Yf(g,P,T);return m.asyncQueue.enqueueAndForget(async()=>Kf(await ac(m),O)),()=>{P.eu(),m.asyncQueue.enqueueAndForget(async()=>Gf(await ac(m),O))}}(su(u),h,a,c)}function up(t,e){return function(s,r){const i=new ms;return s.asyncQueue.enqueueAndForget(async()=>sV(await pV(s),r,i)),i.promise}(su(t),e)}function Gw(t,e,n){const s=n.docs.get(e._key),r=new lp(t);return new Hw(t,r,e._key,s,new Eo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){$i=r})(rr),qn(new Rn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new er(new NM(s.getProvider("auth-internal")),new LM(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),en(k_,"4.7.5",e),en(k_,"4.7.5","esm2017")})();/**
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
 */const Qw="firebasestorage.googleapis.com",xV="storageBucket",VV=2*60*1e3,FV=10*60*1e3;/**
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
 */class Gn extends Kn{constructor(e,n,s=0){super(ih(e),`Firebase Storage: ${n} (${ih(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ih(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Hn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Hn||(Hn={}));function ih(t){return"storage/"+t}function UV(){const t="An unknown error occurred, please check the error payload for server response.";return new Gn(Hn.UNKNOWN,t)}function BV(){return new Gn(Hn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $V(){return new Gn(Hn.CANCELED,"User canceled the upload/download.")}function jV(t){return new Gn(Hn.INVALID_URL,"Invalid URL '"+t+"'.")}function qV(t){return new Gn(Hn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function yy(t){return new Gn(Hn.INVALID_ARGUMENT,t)}function Yw(){return new Gn(Hn.APP_DELETED,"The Firebase app was deleted.")}function WV(t){return new Gn(Hn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(s.path==="")return s;throw qV(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${r}/o${m}`,"i"),T={bucket:1,path:3},A=n===Qw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",O=new RegExp(`^https?://${A}/${r}/${P}`,"i"),M=[{regex:a,indices:c,postModify:i},{regex:g,indices:T,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<M.length;L++){const K=M[L],J=K.regex.exec(e);if(J){const S=J[K.indices.bucket];let v=J[K.indices.path];v||(v=""),s=new yn(S,v),K.postModify(s);break}}if(s==null)throw jV(e);return s}}class HV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function zV(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function d(P){r=setTimeout(()=>{r=null,t(g,c())},P)}function m(){i&&clearTimeout(i)}function g(P,...O){if(u){m();return}if(P){m(),h.call(null,P,...O);return}if(c()||o){m(),h.call(null,P,...O);return}s<64&&(s*=2);let M;a===1?(a=2,M=0):M=(s+Math.random())*1e3,d(M)}let T=!1;function A(P){T||(T=!0,m(),!u&&(r!==null?(P||(a=2),clearTimeout(r),d(0)):P||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function KV(t){t(!1)}/**
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
 */function GV(t){return t!==void 0}function vy(t,e,n,s){if(s<e)throw yy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw yy(`Invalid value for '${t}'. Expected ${n} or less.`)}function QV(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var cc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(cc||(cc={}));/**
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
 */function YV(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class XV{constructor(e,n,s,r,i,o,a,c,u,h,d,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,T)=>{this.resolve_=g,this.reject_=T,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ol(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===cc.NO_ERROR,c=i.getStatus();if(!a||YV(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===cc.ABORT;s(!1,new ol(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ol(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());GV(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=UV();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Yw():$V();o(c)}else{const c=BV();o(c)}};this.canceled_?n(!1,new ol(!1,null,!0)):this.backoffId_=zV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ol{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function JV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ZV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nF(t,e,n,s,r,i,o=!0){const a=QV(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return eF(u,e),JV(u,n),ZV(u,i),tF(u,s),new XV(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function sF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class uc{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new uc(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rF(this._location.path)}get storage(){return this._service}get parent(){const e=sF(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new uc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WV(e)}}function Ey(t,e){const n=e==null?void 0:e[xV];return n==null?null:yn.makeFromBucketSpec(n,t)}class iF{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Qw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VV,this._maxUploadRetryTime=FV,this._requests=new Set,r!=null?this._bucket=yn.makeFromBucketSpec(r,this._host):this._bucket=Ey(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=Ey(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new uc(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new HV(Yw());{const o=nF(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Ty="@firebase/storage",Iy="0.13.4";/**
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
 */const oF="storage";function aF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new iF(n,s,r,e,rr)}function lF(){qn(new Rn(oF,aF,"PUBLIC").setMultipleInstances(!0)),en(Ty,Iy,""),en(Ty,Iy,"esm2017")}lF();const oh=new WeakMap;function Xw(t,e){return oh.has(e)||oh.set(e,{f:{},r:{},s:{},u:{}}),oh.get(e)}function cF(t,e,n,s){if(!t)return n;const[r,i]=Jw(t);if(!r)return n;const o=Xw(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:n}function uF(t,e,n,s){if(!t)return;const[r,i]=Jw(t);if(!r)return;const o=Xw(void 0,s)[r],a=e||i;if(a)return n.then(c=>{o[a]=c}).catch(Mn),a}function Jw(t){return DO(t)||MO(t)?["f",t.path]:LO(t)?["r",t.toString()]:xO(t)?["s",t.toString()]:[]}const ah=new WeakMap;function hF(t,e,n){const s=Vc();ah.has(s)||ah.set(s,new Map);const r=ah.get(s),i=uF(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):Mn}const dF={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function fd(t,e,n,s){if(!NO(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((a,c)=>{const u=n[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[d,m]=h;Object.getOwnPropertyNames(a).forEach(g=>{const T=Object.getOwnPropertyDescriptor(a,g);T&&!T.enumerable&&Object.defineProperty(d,g,T)});for(const g in a){const T=a[g];if(T==null||T instanceof Date||T instanceof it||T instanceof iu)d[g]=T;else if(of(T)){const A=u+g;d[g]=A in n?c[g]:T.path,m[A]=T.converter?T:T.withConverter(s.converter)}else if(Array.isArray(T)){d[g]=Array(T.length);for(let A=0;A<T.length;A++){const P=T[A];P&&P.path in i&&(d[g][A]=i[P.path])}o(T,c[g]||d[g],u+g+".",[d[g],m])}else Ur(T)?(d[g]={},o(T,c[g],u+g+".",[d[g],m])):d[g]=T}}return o(t,e,"",r),r}const hp={reset:!1,wait:!0,maxRefDepth:2,converter:dF,snapshotOptions:{serverTimestamps:"estimate"}};function hc(t){for(const e in t)t[e].unsub()}function pd(t,e,n,s,r,i,o,a,c){const[u,h]=fd(s.data(t.snapshotOptions),rf(e,n),r,t);i.set(e,n,u),md(t,e,n,r,h,i,o,a,c)}function fF({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},a){const c=Object.create(null);let u=Mn;return a.once?Kw(t).then(h=>{h.exists()?pd(a,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())}).catch(i):u=cp(t,h=>{h.exists()?pd(a,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())},i),()=>{u(),hc(c)}}function md(t,e,n,s,r,i,o,a,c){const u=Object.keys(r);if(Object.keys(s).filter(A=>u.indexOf(A)<0).forEach(A=>{s[A].unsub(),delete s[A]}),!u.length||++o>t.maxRefDepth)return a(n);let d=0;const m=u.length,g=Object.create(null);function T(A){A in g&&++d>=m&&a(n)}u.forEach(A=>{const P=s[A],O=r[A],x=`${n}.${A}`;if(g[x]=!0,P)if(P.path!==O.path)P.unsub();else return;s[A]={data:()=>rf(e,x),unsub:fF({ref:O,target:e,path:x,depth:o,ops:i,resolve:T.bind(null,x),reject:c},t),path:O.path}})}function pF(t,e,n,s,r,i){const o=Object.assign({},hp,i),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,d="value";let m=Dt(u?[]:t.value);u||n.set(t,d,[]);const g=s;let T,A=Mn;const P=[],O={added:({newIndex:M,doc:L})=>{P.splice(M,0,Object.create(null));const K=P[M],[J,S]=fd(L.data(c),void 0,K,o);n.add(es(m),M,J),md(o,m,`${d}.${M}`,K,S,n,0,s.bind(null,L),r)},modified:({oldIndex:M,newIndex:L,doc:K})=>{const J=es(m),S=P[M],v=J[M],[y,w]=fd(K.data(c),v,S,o);P.splice(L,0,S),n.remove(J,M),n.add(J,L,y),md(o,m,`${d}.${L}`,S,w,n,0,s,r)},removed:({oldIndex:M})=>{const L=es(m);n.remove(L,M),hc(P.splice(M,1)[0])}};function x(M){const L=M.docChanges(a);if(!T&&L.length){T=!0;let K=0;const J=L.length,S=Object.create(null);for(let v=0;v<J;v++)S[L[v].doc.id]=!0;s=v=>{v&&v.id in S&&++K>=J&&(u&&(n.set(t,d,es(m)),m=t),g(es(m)),s=Mn)}}L.forEach(K=>{O[K.type](K)}),L.length||(u&&(n.set(t,d,es(m)),m=t),s(es(m)))}return h?LV(e).then(x).catch(r):A=cp(e,x,r),M=>{if(A(),M){const L=typeof M=="function"?M():[];n.set(t,d,L)}P.forEach(hc)}}function mF(t,e,n,s,r,i){const o=Object.assign({},hp,i),a="value",c=Object.create(null);s=VO(s,()=>rf(t,a));let u=Mn;function h(d){d.exists()?pd(o,t,a,d,c,n,0,s,r):(n.set(t,a,null),s(null))}return o.once?Kw(e).then(h).catch(r):u=cp(e,h,r),d=>{if(u(),d){const m=typeof d=="function"?d():null;n.set(t,a,m)}hc(c)}}const wy=Symbol();function gF(t,e){let n=Mn;const s=Object.assign({},hp,e),r=es(t),i=s.target||Dt();UO()&&(s.once=!0);const o=cF(r,s.ssrKey,wy,Vc()),a=o!==wy;a&&(i.value=o);let c=!a;const u=Dt(!1),h=Dt(),d=Gy(),m=gc();let g=Mn;function T(){let O=es(t);const x=new Promise((M,L)=>{if(n(s.reset),!O)return n=Mn,M(null);u.value=c,c=!0,O.converter||(O=O.withConverter(s.converter)),n=(of(O)?mF:pF)(i,O,_F,M,L,s)}).catch(M=>(d.value===x&&(h.value=M),Promise.reject(M))).finally(()=>{d.value===x&&(u.value=!1)});d.value=x}let A=Mn;(Ke(t)||typeof t=="function")&&(A=Sr(t,T)),T(),r&&(g=hF(d.value,r,s.ssrKey)),Fd()&&gv(()=>d.value),m&&wd(P);function P(O=s.reset){A(),g(),n(O)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>P}})}const _F={set:(t,e,n)=>PO(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function WF(t,e){return gF(t,{target:Dt([]),...e})}function HF(t){return xw(Vc(t))}function yF(t){return EF({initialUser:t,dependencies:{popupRedirectResolver:fT,persistence:[uT,rT,ef]}})}const vF=Symbol("VueFireAuth");function EF({dependencies:t,initialUser:e}){return(n,s)=>{const[r,i]=TF(n,s,e,t);qO(r,i)}}function TF(t,e,n,s,r=QE(t,s)){const i=BO(t,e).run(()=>Dt(n));return $O.set(t,i),e.provide(vF,r),[i,r]}function IF(t,{firebaseApp:e,modules:n=[]}){t.provide(gT,e);for(const s of n)s(e,t)}const wF={apiKey:"AIzaSyCjGV6Xm-ZrCjxqhR_HMy7X3TMpt0HR1pE",authDomain:"er-telekom-test.firebaseapp.com",projectId:"er-telekom-test",storageBucket:"er-telekom-test.firebasestorage.app",messagingSenderId:"84507139939",appId:"1:84507139939:web:395082e196de8274adbd56"},Zw=SE(wF),AF=xw(Zw);vV(AF,"todos");const RF=[{path:"/",name:"home",component:()=>Ft(()=>import("./home-feRqeTfL.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),meta:{authRequired:!0}},{path:"/register",name:"register",component:()=>Ft(()=>import("./register-CxThPBnG.js"),__vite__mapDeps([4,5,1,2,6,7]),import.meta.url),meta:{layout:"auth"}},{path:"/login",name:"login",component:()=>Ft(()=>import("./login-DiDRLaQS.js"),__vite__mapDeps([8,5,1,2,6,9]),import.meta.url),meta:{layout:"auth"}},{path:"/:pathMatch(.*)*",name:"404",component:async()=>await Ft(()=>import("./404-DVs6B5xA.js"),__vite__mapDeps([10,11]),import.meta.url)}],eA=qC({history:yC(),routes:RF}),SF=()=>new Promise((t,e)=>{const n=Ak(jl(),s=>{const{currentUser:r}=Cc(sf());r.value=s,n(),t(s)},e)});eA.beforeEach(async(t,e,n)=>{const s=await SF();if(t.meta.authRequired)if(s)n();else{const{createAlert:r}=xc();r({title:"Внимание!",text:"Войдите в систему",type:"warning"}),n("/login")}else t.meta.layout==="auth"&&s?n({name:"home"}):n()});const CF=Object.assign({"./assets/icons/arrow-down.svg":()=>Ft(()=>import("./arrow-down-DV5MO5Wz.js"),__vite__mapDeps([12,13]),import.meta.url),"./assets/icons/enter.svg":()=>Ft(()=>import("./enter-B8yrjItm.js"),__vite__mapDeps([14,13]),import.meta.url),"./assets/icons/esc.svg":()=>Ft(()=>import("./esc-DaSdlEIo.js"),__vite__mapDeps([15,13]),import.meta.url),"./assets/icons/eye.svg":()=>Ft(()=>import("./eye-FQPLFOMg.js"),__vite__mapDeps([16,13]),import.meta.url),"./assets/icons/info.svg":()=>Ft(()=>import("./info-f7v3t9JV.js"),__vite__mapDeps([17,13]),import.meta.url),"./assets/icons/keyboard.svg":()=>Ft(()=>import("./keyboard-DeiZ7uon.js"),__vite__mapDeps([18,13]),import.meta.url),"./assets/icons/login.svg":()=>Ft(()=>import("./login-DpwWwMxK.js"),__vite__mapDeps([19,13]),import.meta.url),"./assets/icons/logo.svg":()=>Ft(()=>import("./logo-B0dzovq0.js"),__vite__mapDeps([20,13]),import.meta.url),"./assets/icons/logout.svg":()=>Ft(()=>import("./logout-khzyhxWT.js"),__vite__mapDeps([21,13]),import.meta.url),"./assets/icons/register.svg":()=>Ft(()=>import("./register-D9wzccOP.js"),__vite__mapDeps([22,13]),import.meta.url),"./assets/icons/vertical-dots.svg":()=>Ft(()=>import("./vertical-dots-BhMVLjY-.js"),__vite__mapDeps([23,13]),import.meta.url)});Object.values(CF).forEach(async t=>await t());const lu=eS(nO),bF=rS();lu.use(IF,{firebaseApp:Zw,modules:[yF()]});lu.use(eA);lu.use(bF);lu.mount("#app");export{DF as A,cn as B,is as C,Ed as D,ov as E,zt as F,vc as G,qN as H,kF as I,c0 as J,NF as K,UF as L,BF as M,LV as N,MF as O,Zv as P,OS as Q,Qm as R,it as S,Wv as T,Cc as U,Yv as V,sf as W,PF as X,OF as Y,u0 as Z,sr as _,xc as a,WF as b,vV as c,Bd as d,Ze as e,qF as f,$F as g,EV as h,jF as i,zn as j,ds as k,Fn as l,Ue as m,Ev as n,et as o,Ne as p,$s as q,Dt as r,Di as s,lh as t,HF as u,ca as v,Sr as w,AS as x,Ic as y,mv as z};
