var wo=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);import{C as ya,F as _a,I as xa,S as Eo,P as Co,H as So,W as $o,M as Ao,V as ms,i as Oo}from"./basicVR-BpQA2zHf.js";import*as tt from"https://cdn.skypack.dev/three@0.128.0";import{GLTFLoader as ko}from"https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js";var Im=wo(A=>{var To=Object.defineProperty,No=(t,e,i)=>e in t?To(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ut=(t,e,i)=>(No(t,typeof e!="symbol"?e+"":e,i),i);const me=Math.min,Ct=Math.max,zi=Math.round,It=t=>({x:t,y:t}),Po={left:"right",right:"left",bottom:"top",top:"bottom"},Io={start:"end",end:"start"};function fn(t,e,i){return Ct(t,me(e,i))}function ci(t,e){return typeof t=="function"?t(e):t}function St(t){return t.split("-")[0]}function ts(t){return t.split("-")[1]}function Ma(t){return t==="x"?"y":"x"}function wa(t){return t==="y"?"height":"width"}function Xt(t){return["top","bottom"].includes(St(t))?"y":"x"}function Ea(t){return Ma(Xt(t))}function Ro(t,e,i){i===void 0&&(i=!1);const n=ts(t),s=Ea(t),a=wa(s);let r=s==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(r=Bi(r)),[r,Bi(r)]}function Lo(t){const e=Bi(t);return[Ss(t),e,Ss(e)]}function Ss(t){return t.replace(/start|end/g,e=>Io[e])}function zo(t,e,i){const n=["left","right"],s=["right","left"],a=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return i?e?s:n:e?n:s;case"left":case"right":return e?a:r;default:return[]}}function Bo(t,e,i,n){const s=ts(t);let a=zo(St(t),i==="start",n);return s&&(a=a.map(r=>r+"-"+s),e&&(a=a.concat(a.map(Ss)))),a}function Bi(t){return t.replace(/left|right|bottom|top/g,e=>Po[e])}function qo(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ca(t){return typeof t!="number"?qo(t):{top:t,right:t,bottom:t,left:t}}function pe(t){const{x:e,y:i,width:n,height:s}=t;return{width:n,height:s,top:i,left:e,right:e+n,bottom:i+s,x:e,y:i}}function mn(t,e,i){let{reference:n,floating:s}=t;const a=Xt(e),r=Ea(e),o=wa(r),h=St(e),l=a==="y",u=n.x+n.width/2-s.width/2,c=n.y+n.height/2-s.height/2,d=n[o]/2-s[o]/2;let f;switch(h){case"top":f={x:u,y:n.y-s.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:c};break;case"left":f={x:n.x-s.width,y:c};break;default:f={x:n.x,y:n.y}}switch(ts(e)){case"start":f[r]-=d*(i&&l?-1:1);break;case"end":f[r]+=d*(i&&l?-1:1);break}return f}const jo=async(t,e,i)=>{const{placement:n="bottom",strategy:s="absolute",middleware:a=[],platform:r}=i,o=a.filter(Boolean),h=await(r.isRTL==null?void 0:r.isRTL(e));let l=await r.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:c}=mn(l,n,h),d=n,f={},m=0;for(let v=0;v<o.length;v++){const{name:p,fn:y}=o[v],{x:_,y:w,data:S,reset:$}=await y({x:u,y:c,initialPlacement:n,placement:d,strategy:s,middlewareData:f,rects:l,platform:r,elements:{reference:t,floating:e}});u=_??u,c=w??c,f={...f,[p]:{...f[p],...S}},$&&m<=50&&(m++,typeof $=="object"&&($.placement&&(d=$.placement),$.rects&&(l=$.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:s}):$.rects),{x:u,y:c}=mn(l,d,h)),v=-1)}return{x:u,y:c,placement:d,strategy:s,middlewareData:f}};async function Sa(t,e){var i;e===void 0&&(e={});const{x:n,y:s,platform:a,rects:r,elements:o,strategy:h}=t,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:c="floating",altBoundary:d=!1,padding:f=0}=ci(e,t),m=Ca(f),v=o[d?c==="floating"?"reference":"floating":c],p=pe(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement(v)))==null||i?v:v.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(o.floating)),boundary:l,rootBoundary:u,strategy:h})),y=c==="floating"?{x:n,y:s,width:r.floating.width,height:r.floating.height}:r.reference,_=await(a.getOffsetParent==null?void 0:a.getOffsetParent(o.floating)),w=await(a.isElement==null?void 0:a.isElement(_))?await(a.getScale==null?void 0:a.getScale(_))||{x:1,y:1}:{x:1,y:1},S=pe(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:y,offsetParent:_,strategy:h}):y);return{top:(p.top-S.top+m.top)/w.y,bottom:(S.bottom-p.bottom+m.bottom)/w.y,left:(p.left-S.left+m.left)/w.x,right:(S.right-p.right+m.right)/w.x}}const Fo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,n;const{placement:s,middlewareData:a,rects:r,initialPlacement:o,platform:h,elements:l}=e,{mainAxis:u=!0,crossAxis:c=!0,fallbackPlacements:d,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...p}=ci(t,e);if((i=a.arrow)!=null&&i.alignmentOffset)return{};const y=St(s),_=Xt(o),w=St(o)===o,S=await(h.isRTL==null?void 0:h.isRTL(l.floating)),$=d||(w||!v?[Bi(o)]:Lo(o)),E=m!=="none";!d&&E&&$.push(...Bo(o,v,m,S));const T=[o,...$],O=await Sa(e,p),P=[];let k=((n=a.flip)==null?void 0:n.overflows)||[];if(u&&P.push(O[y]),c){const Q=Ro(s,r,S);P.push(O[Q[0]],O[Q[1]])}if(k=[...k,{placement:s,overflows:P}],!P.every(Q=>Q<=0)){var q,V;const Q=(((q=a.flip)==null?void 0:q.index)||0)+1,wt=T[Q];if(wt)return{data:{index:Q,overflows:k},reset:{placement:wt}};let st=(V=k.filter(kt=>kt.overflows[0]<=0).sort((kt,mt)=>kt.overflows[1]-mt.overflows[1])[0])==null?void 0:V.placement;if(!st)switch(f){case"bestFit":{var H;const kt=(H=k.filter(mt=>{if(E){const Tt=Xt(mt.placement);return Tt===_||Tt==="y"}return!0}).map(mt=>[mt.placement,mt.overflows.filter(Tt=>Tt>0).reduce((Tt,Mo)=>Tt+Mo,0)]).sort((mt,Tt)=>mt[1]-Tt[1])[0])==null?void 0:H[0];kt&&(st=kt);break}case"initialPlacement":st=o;break}if(s!==st)return{reset:{placement:st}}}return{}}}};function $a(t){const e=me(...t.map(a=>a.left)),i=me(...t.map(a=>a.top)),n=Ct(...t.map(a=>a.right)),s=Ct(...t.map(a=>a.bottom));return{x:e,y:i,width:n-e,height:s-i}}function Do(t){const e=t.slice().sort((s,a)=>s.y-a.y),i=[];let n=null;for(let s=0;s<e.length;s++){const a=e[s];!n||a.y-n.y>n.height/2?i.push([a]):i[i.length-1].push(a),n=a}return i.map(s=>pe($a(s)))}const Ho=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:i,elements:n,rects:s,platform:a,strategy:r}=e,{padding:o=2,x:h,y:l}=ci(t,e),u=Array.from(await(a.getClientRects==null?void 0:a.getClientRects(n.reference))||[]),c=Do(u),d=pe($a(u)),f=Ca(o);function m(){if(c.length===2&&c[0].left>c[1].right&&h!=null&&l!=null)return c.find(p=>h>p.left-f.left&&h<p.right+f.right&&l>p.top-f.top&&l<p.bottom+f.bottom)||d;if(c.length>=2){if(Xt(i)==="y"){const k=c[0],q=c[c.length-1],V=St(i)==="top",H=k.top,Q=q.bottom,wt=V?k.left:q.left,st=V?k.right:q.right,kt=st-wt,mt=Q-H;return{top:H,bottom:Q,left:wt,right:st,width:kt,height:mt,x:wt,y:H}}const p=St(i)==="left",y=Ct(...c.map(k=>k.right)),_=me(...c.map(k=>k.left)),w=c.filter(k=>p?k.left===_:k.right===y),S=w[0].top,$=w[w.length-1].bottom,E=_,T=y,O=T-E,P=$-S;return{top:S,bottom:$,left:E,right:T,width:O,height:P,x:E,y:S}}return d}const v=await a.getElementRects({reference:{getBoundingClientRect:m},floating:n.floating,strategy:r});return s.reference.x!==v.reference.x||s.reference.y!==v.reference.y||s.reference.width!==v.reference.width||s.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function Uo(t,e){const{placement:i,platform:n,elements:s}=t,a=await(n.isRTL==null?void 0:n.isRTL(s.floating)),r=St(i),o=ts(i),h=Xt(i)==="y",l=["left","top"].includes(r)?-1:1,u=a&&h?-1:1,c=ci(e,t);let{mainAxis:d,crossAxis:f,alignmentAxis:m}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return o&&typeof m=="number"&&(f=o==="end"?m*-1:m),h?{x:f*u,y:d*l}:{x:d*l,y:f*u}}const Aa=function(t){return{name:"offset",options:t,async fn(e){var i,n;const{x:s,y:a,placement:r,middlewareData:o}=e,h=await Uo(e,t);return r===((i=o.offset)==null?void 0:i.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:s+h.x,y:a+h.y,data:{...h,placement:r}}}}},Go=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:n,placement:s}=e,{mainAxis:a=!0,crossAxis:r=!1,limiter:o={fn:p=>{let{x:y,y:_}=p;return{x:y,y:_}}},...h}=ci(t,e),l={x:i,y:n},u=await Sa(e,h),c=Xt(St(s)),d=Ma(c);let f=l[d],m=l[c];if(a){const p=d==="y"?"top":"left",y=d==="y"?"bottom":"right",_=f+u[p],w=f-u[y];f=fn(_,f,w)}if(r){const p=c==="y"?"top":"left",y=c==="y"?"bottom":"right",_=m+u[p],w=m-u[y];m=fn(_,m,w)}const v=o.fn({...e,[d]:f,[c]:m});return{...v,data:{x:v.x-i,y:v.y-n,enabled:{[d]:a,[c]:r}}}}}};function es(){return typeof window<"u"}function Rt(t){return Oa(t)?(t.nodeName||"").toLowerCase():"#document"}function et(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function qt(t){var e;return(e=(Oa(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Oa(t){return es()?t instanceof Node||t instanceof et(t).Node:!1}function yt(t){return es()?t instanceof Element||t instanceof et(t).Element:!1}function _t(t){return es()?t instanceof HTMLElement||t instanceof et(t).HTMLElement:!1}function pn(t){return!es()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof et(t).ShadowRoot}function ui(t){const{overflow:e,overflowX:i,overflowY:n,display:s}=rt(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+i)&&!["inline","contents"].includes(s)}function Wo(t){return["table","td","th"].includes(Rt(t))}function Vo(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Us(t){const e=Gs(),i=yt(t)?rt(t):t;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function Qo(t){let e=ve(t);for(;_t(e)&&!is(e);){if(Us(e))return e;if(Vo(e))return null;e=ve(e)}return null}function Gs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function is(t){return["html","body","#document"].includes(Rt(t))}function rt(t){return et(t).getComputedStyle(t)}function ss(t){return yt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ve(t){if(Rt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||pn(t)&&t.host||qt(t);return pn(e)?e.host:e}function ka(t){const e=ve(t);return is(e)?t.ownerDocument?t.ownerDocument.body:t.body:_t(e)&&ui(e)?e:ka(e)}function Ta(t,e,i){var n;e===void 0&&(e=[]);const s=ka(t),a=s===((n=t.ownerDocument)==null?void 0:n.body),r=et(s);return a?(Xo(r),e.concat(r,r.visualViewport||[],ui(s)?s:[],[])):e.concat(s,Ta(s,[]))}function Xo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Na(t){const e=rt(t);let i=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const s=_t(t),a=s?t.offsetWidth:i,r=s?t.offsetHeight:n,o=zi(i)!==a||zi(n)!==r;return o&&(i=a,n=r),{width:i,height:n,$:o}}function Pa(t){return yt(t)?t:t.contextElement}function ue(t){const e=Pa(t);if(!_t(e))return It(1);const i=e.getBoundingClientRect(),{width:n,height:s,$:a}=Na(e);let r=(a?zi(i.width):i.width)/n,o=(a?zi(i.height):i.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!o||!Number.isFinite(o))&&(o=1),{x:r,y:o}}const Jo=It(0);function Ia(t){const e=et(t);return!Gs()||!e.visualViewport?Jo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ko(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==et(t)?!1:e}function Ke(t,e,i,n){e===void 0&&(e=!1),i===void 0&&(i=!1);const s=t.getBoundingClientRect(),a=Pa(t);let r=It(1);e&&(n?yt(n)&&(r=ue(n)):r=ue(t));const o=Ko(a,i,n)?Ia(a):It(0);let h=(s.left+o.x)/r.x,l=(s.top+o.y)/r.y,u=s.width/r.x,c=s.height/r.y;if(a){const d=et(a),f=n&&yt(n)?et(n):n;let m=d,v=m.frameElement;for(;v&&n&&f!==m;){const p=ue(v),y=v.getBoundingClientRect(),_=rt(v),w=y.left+(v.clientLeft+parseFloat(_.paddingLeft))*p.x,S=y.top+(v.clientTop+parseFloat(_.paddingTop))*p.y;h*=p.x,l*=p.y,u*=p.x,c*=p.y,h+=w,l+=S,m=et(v),v=m.frameElement}}return pe({width:u,height:c,x:h,y:l})}const Yo=[":popover-open",":modal"];function Ra(t){return Yo.some(e=>{try{return t.matches(e)}catch{return!1}})}function Zo(t){let{elements:e,rect:i,offsetParent:n,strategy:s}=t;const a=s==="fixed",r=qt(n),o=e?Ra(e.floating):!1;if(n===r||o&&a)return i;let h={scrollLeft:0,scrollTop:0},l=It(1);const u=It(0),c=_t(n);if((c||!c&&!a)&&((Rt(n)!=="body"||ui(r))&&(h=ss(n)),_t(n))){const d=Ke(n);l=ue(n),u.x=d.x+n.clientLeft,u.y=d.y+n.clientTop}return{width:i.width*l.x,height:i.height*l.y,x:i.x*l.x-h.scrollLeft*l.x+u.x,y:i.y*l.y-h.scrollTop*l.y+u.y}}function th(t){return Array.from(t.getClientRects())}function La(t){return Ke(qt(t)).left+ss(t).scrollLeft}function eh(t){const e=qt(t),i=ss(t),n=t.ownerDocument.body,s=Ct(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),a=Ct(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+La(t);const o=-i.scrollTop;return rt(n).direction==="rtl"&&(r+=Ct(e.clientWidth,n.clientWidth)-s),{width:s,height:a,x:r,y:o}}function ih(t,e){const i=et(t),n=qt(t),s=i.visualViewport;let a=n.clientWidth,r=n.clientHeight,o=0,h=0;if(s){a=s.width,r=s.height;const l=Gs();(!l||l&&e==="fixed")&&(o=s.offsetLeft,h=s.offsetTop)}return{width:a,height:r,x:o,y:h}}function sh(t,e){const i=Ke(t,!0,e==="fixed"),n=i.top+t.clientTop,s=i.left+t.clientLeft,a=_t(t)?ue(t):It(1),r=t.clientWidth*a.x,o=t.clientHeight*a.y,h=s*a.x,l=n*a.y;return{width:r,height:o,x:h,y:l}}function vn(t,e,i){let n;if(e==="viewport")n=ih(t,i);else if(e==="document")n=eh(qt(t));else if(yt(e))n=sh(e,i);else{const s=Ia(t);n={...e,x:e.x-s.x,y:e.y-s.y}}return pe(n)}function za(t,e){const i=ve(t);return i===e||!yt(i)||is(i)?!1:rt(i).position==="fixed"||za(i,e)}function nh(t,e){const i=e.get(t);if(i)return i;let n=Ta(t,[]).filter(o=>yt(o)&&Rt(o)!=="body"),s=null;const a=rt(t).position==="fixed";let r=a?ve(t):t;for(;yt(r)&&!is(r);){const o=rt(r),h=Us(r);!h&&o.position==="fixed"&&(s=null),(a?!h&&!s:!h&&o.position==="static"&&s&&["absolute","fixed"].includes(s.position)||ui(r)&&!h&&za(t,r))?n=n.filter(l=>l!==r):s=o,r=ve(r)}return e.set(t,n),n}function ah(t){let{element:e,boundary:i,rootBoundary:n,strategy:s}=t;const a=[...i==="clippingAncestors"?nh(e,this._c):[].concat(i),n],r=a[0],o=a.reduce((h,l)=>{const u=vn(e,l,s);return h.top=Ct(u.top,h.top),h.right=me(u.right,h.right),h.bottom=me(u.bottom,h.bottom),h.left=Ct(u.left,h.left),h},vn(e,r,s));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function rh(t){const{width:e,height:i}=Na(t);return{width:e,height:i}}function oh(t,e,i){const n=_t(e),s=qt(e),a=i==="fixed",r=Ke(t,!0,a,e);let o={scrollLeft:0,scrollTop:0};const h=It(0);if(n||!n&&!a)if((Rt(e)!=="body"||ui(s))&&(o=ss(e)),n){const c=Ke(e,!0,a,e);h.x=c.x+e.clientLeft,h.y=c.y+e.clientTop}else s&&(h.x=La(s));const l=r.left+o.scrollLeft-h.x,u=r.top+o.scrollTop-h.y;return{x:l,y:u,width:r.width,height:r.height}}function bn(t,e){return!_t(t)||rt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ba(t,e){const i=et(t);if(!_t(t)||Ra(t))return i;let n=bn(t,e);for(;n&&Wo(n)&&rt(n).position==="static";)n=bn(n,e);return n&&(Rt(n)==="html"||Rt(n)==="body"&&rt(n).position==="static"&&!Us(n))?i:n||Qo(t)||i}const hh=async function(t){const e=this.getOffsetParent||Ba,i=this.getDimensions;return{reference:oh(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await i(t.floating)}}};function lh(t){return rt(t).direction==="rtl"}const ch={convertOffsetParentRelativeRectToViewportRelativeRect:Zo,getDocumentElement:qt,getClippingRect:ah,getOffsetParent:Ba,getElementRects:hh,getClientRects:th,getDimensions:rh,getScale:ue,isElement:yt,isRTL:lh},qa=Go,ja=Fo,Fa=Ho,Da=(t,e,i)=>{const n=new Map,s={platform:ch,...i},a={...s.platform,_c:n};return jo(t,e,{...s,platform:a})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ti=globalThis,Ws=Ti.ShadowRoot&&(Ti.ShadyCSS===void 0||Ti.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vs=Symbol(),gn=new WeakMap;let Ha=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Vs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ws&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=gn.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&gn.set(e,t))}return t}toString(){return this.cssText}};const uh=t=>new Ha(typeof t=="string"?t:t+"",void 0,Vs),z=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((n,s,a)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[a+1],t[0]);return new Ha(i,t,Vs)},dh=(t,e)=>{if(Ws)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const n=document.createElement("style"),s=Ti.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}},yn=Ws?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const n of e.cssRules)i+=n.cssText;return uh(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fh,defineProperty:mh,getOwnPropertyDescriptor:ph,getOwnPropertyNames:vh,getOwnPropertySymbols:bh,getPrototypeOf:gh}=Object,be=globalThis,_n=be.trustedTypes,yh=_n?_n.emptyScript:"",xn=be.reactiveElementPolyfillSupport,Fe=(t,e)=>t,qi={toAttribute(t,e){switch(e){case Boolean:t=t?yh:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Qs=(t,e)=>!fh(t,e),Mn={attribute:!0,type:String,converter:qi,reflect:!1,hasChanged:Qs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),be.litPropertyMetadata??(be.litPropertyMetadata=new WeakMap);class ne extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Mn){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,i);s!==void 0&&mh(this.prototype,e,s)}}static getPropertyDescriptor(e,i,n){const{get:s,set:a}=ph(this.prototype,e)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return s==null?void 0:s.call(this)},set(r){const o=s==null?void 0:s.call(this);a.call(this,r),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Mn}static _$Ei(){if(this.hasOwnProperty(Fe("elementProperties")))return;const e=gh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fe("properties"))){const i=this.properties,n=[...vh(i),...bh(i)];for(const s of n)this.createProperty(s,i[s])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[n,s]of i)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const s=this._$Eu(i,n);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)i.unshift(yn(s))}else e!==void 0&&i.push(yn(e));return i}static _$Eu(e,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dh(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(e,i,n){this._$AK(e,n)}_$EC(e,i){var n;const s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){const r=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:qi).toAttribute(i,s.type);this._$Em=e,r==null?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(e,i){var n;const s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const r=s.getPropertyOptions(a),o=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:qi;this._$Em=a,this[a]=o.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(e,i,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Qs)(this[e],i))return;this.P(e,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,i,n){this._$AL.has(e)||this._$AL.set(e,i),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,r]of this._$Ep)this[a]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,r]of s)r.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(e=this._$EO)==null||e.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(n)):this._$EU()}catch(s){throw i=!1,this._$EU(),s}i&&this._$AE(n)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(e){}firstUpdated(e){}}ne.elementStyles=[],ne.shadowRootOptions={mode:"open"},ne[Fe("elementProperties")]=new Map,ne[Fe("finalized")]=new Map,xn==null||xn({ReactiveElement:ne}),(be.reactiveElementVersions??(be.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=globalThis,Fi=ji.trustedTypes,wn=Fi?Fi.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ua="$lit$",Nt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ga="?"+Nt,_h=`<${Ga}>`,Jt=document,Ye=()=>Jt.createComment(""),Ze=t=>t===null||typeof t!="object"&&typeof t!="function",Xs=Array.isArray,xh=t=>Xs(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ps=`[ 	
\f\r]`,Re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,En=/-->/g,Cn=/>/g,Gt=RegExp(`>|${ps}(?:([^\\s"'>=/]+)(${ps}*=${ps}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sn=/'/g,$n=/"/g,Wa=/^(?:script|style|textarea|title)$/i,Mh=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),C=Mh(1),ge=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),An=new WeakMap,Vt=Jt.createTreeWalker(Jt,129);function Va(t,e){if(!Xs(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return wn!==void 0?wn.createHTML(e):e}const wh=(t,e)=>{const i=t.length-1,n=[];let s,a=e===2?"<svg>":e===3?"<math>":"",r=Re;for(let o=0;o<i;o++){const h=t[o];let l,u,c=-1,d=0;for(;d<h.length&&(r.lastIndex=d,u=r.exec(h),u!==null);)d=r.lastIndex,r===Re?u[1]==="!--"?r=En:u[1]!==void 0?r=Cn:u[2]!==void 0?(Wa.test(u[2])&&(s=RegExp("</"+u[2],"g")),r=Gt):u[3]!==void 0&&(r=Gt):r===Gt?u[0]===">"?(r=s??Re,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,l=u[1],r=u[3]===void 0?Gt:u[3]==='"'?$n:Sn):r===$n||r===Sn?r=Gt:r===En||r===Cn?r=Re:(r=Gt,s=void 0);const f=r===Gt&&t[o+1].startsWith("/>")?" ":"";a+=r===Re?h+_h:c>=0?(n.push(l),h.slice(0,c)+Ua+h.slice(c)+Nt+f):h+Nt+(c===-2?o:f)}return[Va(t,a+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ti{constructor({strings:e,_$litType$:i},n){let s;this.parts=[];let a=0,r=0;const o=e.length-1,h=this.parts,[l,u]=wh(e,i);if(this.el=ti.createElement(l,n),Vt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=Vt.nextNode())!==null&&h.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Ua)){const d=u[r++],f=s.getAttribute(c).split(Nt),m=/([.?@])?(.*)/.exec(d);h.push({type:1,index:a,name:m[2],strings:f,ctor:m[1]==="."?Ch:m[1]==="?"?Sh:m[1]==="@"?$h:ns}),s.removeAttribute(c)}else c.startsWith(Nt)&&(h.push({type:6,index:a}),s.removeAttribute(c));if(Wa.test(s.tagName)){const c=s.textContent.split(Nt),d=c.length-1;if(d>0){s.textContent=Fi?Fi.emptyScript:"";for(let f=0;f<d;f++)s.append(c[f],Ye()),Vt.nextNode(),h.push({type:2,index:++a});s.append(c[d],Ye())}}}else if(s.nodeType===8)if(s.data===Ga)h.push({type:2,index:a});else{let c=-1;for(;(c=s.data.indexOf(Nt,c+1))!==-1;)h.push({type:7,index:a}),c+=Nt.length-1}a++}}static createElement(e,i){const n=Jt.createElement("template");return n.innerHTML=e,n}}function ye(t,e,i=t,n){var s,a;if(e===ge)return e;let r=n!==void 0?(s=i._$Co)==null?void 0:s[n]:i._$Cl;const o=Ze(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(e=ye(t,r._$AS(t,e.values),r,n)),e}class Eh{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??Jt).importNode(i,!0);Vt.currentNode=s;let a=Vt.nextNode(),r=0,o=0,h=n[0];for(;h!==void 0;){if(r===h.index){let l;h.type===2?l=new di(a,a.nextSibling,this,e):h.type===1?l=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(l=new Ah(a,this,e)),this._$AV.push(l),h=n[++o]}r!==(h==null?void 0:h.index)&&(a=Vt.nextNode(),r++)}return Vt.currentNode=Jt,s}p(e){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,i),i+=n.strings.length-2):n._$AI(e[i])),i++}}class di{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,n,s){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=ye(this,e,i),Ze(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&Ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(Jt.createTextNode(e)),this._$AH=e}$(e){var i;const{values:n,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ti.createElement(Va(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===a)this._$AH.p(n);else{const r=new Eh(a,this),o=r.u(this.options);r.p(n),this.T(o),this._$AH=r}}_$AC(e){let i=An.get(e.strings);return i===void 0&&An.set(e.strings,i=new ti(e)),i}k(e){Xs(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,s=0;for(const a of e)s===i.length?i.push(n=new di(this.O(Ye()),this.O(Ye()),this,this.options)):n=i[s],n._$AI(a),s++;s<i.length&&(this._$AR(n&&n._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class ns{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,n,s,a){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(e,i=this,n,s){const a=this.strings;let r=!1;if(a===void 0)e=ye(this,e,i,0),r=!Ze(e)||e!==this._$AH&&e!==ge,r&&(this._$AH=e);else{const o=e;let h,l;for(e=a[0],h=0;h<a.length-1;h++)l=ye(this,o[n+h],i,h),l===ge&&(l=this._$AH[h]),r||(r=!Ze(l)||l!==this._$AH[h]),l===j?e=j:e!==j&&(e+=(l??"")+a[h+1]),this._$AH[h]=l}r&&!s&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ch extends ns{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class Sh extends ns{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class $h extends ns{constructor(e,i,n,s,a){super(e,i,n,s,a),this.type=5}_$AI(e,i=this){if((e=ye(this,e,i,0)??j)===ge)return;const n=this._$AH,s=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==j&&(n===j||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class Ah{constructor(e,i,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ye(this,e)}}const On=ji.litHtmlPolyfillSupport;On==null||On(ti,di),(ji.litHtmlVersions??(ji.litHtmlVersions=[])).push("3.2.1");const _e=(t,e,i)=>{const n=(i==null?void 0:i.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const a=(i==null?void 0:i.renderBefore)??null;n._$litPart$=s=new di(e.insertBefore(Ye(),a),a,void 0,i??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let L=class extends ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_e(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ge}};var kn;L._$litElement$=!0,L.finalized=!0,(kn=globalThis.litElementHydrateSupport)==null||kn.call(globalThis,{LitElement:L});const Tn=globalThis.litElementPolyfillSupport;Tn==null||Tn({LitElement:L});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oh={attribute:!0,type:String,converter:qi,reflect:!1,hasChanged:Qs},kh=(t=Oh,e,i)=>{const{kind:n,metadata:s}=i;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(i.name,t),n==="accessor"){const{name:r}=i;return{set(o){const h=e.get.call(this);e.set.call(this,o),this.requestUpdate(r,h,t)},init(o){return o!==void 0&&this.P(r,void 0,t),o}}}if(n==="setter"){const{name:r}=i;return function(o){const h=this[r];e.call(this,o),this.requestUpdate(r,h,t)}}throw Error("Unsupported decorator location: "+n)};function b(t){return(e,i)=>typeof i=="object"?kh(t,e,i):((n,s,a)=>{const r=s.hasOwnProperty(a);return s.constructor.createProperty(a,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(s,a):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce(t){return b({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Th=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nh={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ph=t=>(...e)=>({_$litDirective$:t,values:e});let Ih=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=(t,e)=>{var i;const n=t._$AN;if(n===void 0)return!1;for(const s of n)(i=s._$AO)==null||i.call(s,e,!1),De(s,e);return!0},Di=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},Qa=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),zh(e)}};function Rh(t){this._$AN!==void 0?(Di(this),this._$AM=t,Qa(this)):this._$AM=t}function Lh(t,e=!1,i=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let a=i;a<n.length;a++)De(n[a],!1),Di(n[a]);else n!=null&&(De(n,!1),Di(n));else De(this,t)}const zh=t=>{t.type==Nh.CHILD&&(t._$AP??(t._$AP=Lh),t._$AQ??(t._$AQ=Rh))};class Bh extends Ih{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,n){super._$AT(e,i,n),Qa(this),this.isConnected=e._$AU}_$AO(e,i=!0){var n,s;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(s=this.disconnected)==null||s.call(this)),i&&(De(this,e),Di(this))}setValue(e){if(Th(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=()=>new qh;class qh{}const vs=new WeakMap,Me=Ph(class extends Bh{render(t){return j}update(t,[e]){var i;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),j}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let i=vs.get(e);i===void 0&&(i=new WeakMap,vs.set(e,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=vs.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Xa=Object.freeze({left:0,top:0,width:16,height:16}),Hi=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),fi=Object.freeze({...Xa,...Hi}),$s=Object.freeze({...fi,body:"",hidden:!1}),jh=Object.freeze({width:null,height:null}),Ja=Object.freeze({...jh,...Hi});function Fh(t,e=0){const i=t.replace(/^-?[0-9.]*/,"");function n(s){for(;s<0;)s+=4;return s%4}if(i===""){const s=parseInt(t);return isNaN(s)?0:n(s)}else if(i!==t){let s=0;switch(i){case"%":s=25;break;case"deg":s=90}if(s){let a=parseFloat(t.slice(0,t.length-i.length));return isNaN(a)?0:(a=a/s,a%1===0?n(a):0)}}return e}const Dh=/[\s,]+/;function Hh(t,e){e.split(Dh).forEach(i=>{switch(i.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const Ka={...Ja,preserveAspectRatio:""};function Nn(t){const e={...Ka},i=(n,s)=>t.getAttribute(n)||s;return e.width=i("width",null),e.height=i("height",null),e.rotate=Fh(i("rotate","")),Hh(e,i("flip","")),e.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),e}function Uh(t,e){for(const i in Ka)if(t[i]!==e[i])return!0;return!1}const He=/^[a-z0-9]+(-[a-z0-9]+)*$/,mi=(t,e,i,n="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;n=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const o=s.pop(),h=s.pop(),l={provider:s.length>0?s[0]:n,prefix:h,name:o};return e&&!Ni(l)?null:l}const a=s[0],r=a.split("-");if(r.length>1){const o={provider:n,prefix:r.shift(),name:r.join("-")};return e&&!Ni(o)?null:o}if(i&&n===""){const o={provider:n,prefix:"",name:a};return e&&!Ni(o,i)?null:o}return null},Ni=(t,e)=>t?!!((t.provider===""||t.provider.match(He))&&(e&&t.prefix===""||t.prefix.match(He))&&t.name.match(He)):!1;function Gh(t,e){const i={};!t.hFlip!=!e.hFlip&&(i.hFlip=!0),!t.vFlip!=!e.vFlip&&(i.vFlip=!0);const n=((t.rotate||0)+(e.rotate||0))%4;return n&&(i.rotate=n),i}function Pn(t,e){const i=Gh(t,e);for(const n in $s)n in Hi?n in t&&!(n in i)&&(i[n]=Hi[n]):n in e?i[n]=e[n]:n in t&&(i[n]=t[n]);return i}function Wh(t,e){const i=t.icons,n=t.aliases||Object.create(null),s=Object.create(null);function a(r){if(i[r])return s[r]=[];if(!(r in s)){s[r]=null;const o=n[r]&&n[r].parent,h=o&&a(o);h&&(s[r]=[o].concat(h))}return s[r]}return Object.keys(i).concat(Object.keys(n)).forEach(a),s}function Vh(t,e,i){const n=t.icons,s=t.aliases||Object.create(null);let a={};function r(o){a=Pn(n[o]||s[o],a)}return r(e),i.forEach(r),Pn(t,a)}function Ya(t,e){const i=[];if(typeof t!="object"||typeof t.icons!="object")return i;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),i.push(s)});const n=Wh(t);for(const s in n){const a=n[s];a&&(e(s,Vh(t,s,a)),i.push(s))}return i}const Qh={provider:"",aliases:{},not_found:{},...Xa};function bs(t,e){for(const i in e)if(i in t&&typeof t[i]!=typeof e[i])return!1;return!0}function Za(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!bs(t,Qh))return null;const i=e.icons;for(const s in i){const a=i[s];if(!s.match(He)||typeof a.body!="string"||!bs(a,$s))return null}const n=e.aliases||Object.create(null);for(const s in n){const a=n[s],r=a.parent;if(!s.match(He)||typeof r!="string"||!i[r]&&!n[r]||!bs(a,$s))return null}return e}const Ui=Object.create(null);function Xh(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Lt(t,e){const i=Ui[t]||(Ui[t]=Object.create(null));return i[e]||(i[e]=Xh(t,e))}function Js(t,e){return Za(e)?Ya(e,(i,n)=>{n?t.icons[i]=n:t.missing.add(i)}):[]}function Jh(t,e,i){try{if(typeof i.body=="string")return t.icons[e]={...i},!0}catch{}return!1}function Kh(t,e){let i=[];return(typeof t=="string"?[t]:Object.keys(Ui)).forEach(n=>{(typeof n=="string"&&typeof e=="string"?[e]:Object.keys(Ui[n]||{})).forEach(s=>{const a=Lt(n,s);i=i.concat(Object.keys(a.icons).map(r=>(n!==""?"@"+n+":":"")+s+":"+r))})}),i}let ei=!1;function tr(t){return typeof t=="boolean"&&(ei=t),ei}function ii(t){const e=typeof t=="string"?mi(t,!0,ei):t;if(e){const i=Lt(e.provider,e.prefix),n=e.name;return i.icons[n]||(i.missing.has(n)?null:void 0)}}function er(t,e){const i=mi(t,!0,ei);if(!i)return!1;const n=Lt(i.provider,i.prefix);return Jh(n,i.name,e)}function In(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),ei&&!e&&!t.prefix){let s=!1;return Za(t)&&(t.prefix="",Ya(t,(a,r)=>{r&&er(a,r)&&(s=!0)})),s}const i=t.prefix;if(!Ni({provider:e,prefix:i,name:"a"}))return!1;const n=Lt(e,i);return!!Js(n,t)}function Rn(t){return!!ii(t)}function Yh(t){const e=ii(t);return e?{...fi,...e}:null}function Zh(t){const e={loaded:[],missing:[],pending:[]},i=Object.create(null);t.sort((s,a)=>s.provider!==a.provider?s.provider.localeCompare(a.provider):s.prefix!==a.prefix?s.prefix.localeCompare(a.prefix):s.name.localeCompare(a.name));let n={provider:"",prefix:"",name:""};return t.forEach(s=>{if(n.name===s.name&&n.prefix===s.prefix&&n.provider===s.provider)return;n=s;const a=s.provider,r=s.prefix,o=s.name,h=i[a]||(i[a]=Object.create(null)),l=h[r]||(h[r]=Lt(a,r));let u;o in l.icons?u=e.loaded:r===""||l.missing.has(o)?u=e.missing:u=e.pending;const c={provider:a,prefix:r,name:o};u.push(c)}),e}function ir(t,e){t.forEach(i=>{const n=i.loaderCallbacks;n&&(i.loaderCallbacks=n.filter(s=>s.id!==e))})}function tl(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let i=!1;const n=t.provider,s=t.prefix;e.forEach(a=>{const r=a.icons,o=r.pending.length;r.pending=r.pending.filter(h=>{if(h.prefix!==s)return!0;const l=h.name;if(t.icons[l])r.loaded.push({provider:n,prefix:s,name:l});else if(t.missing.has(l))r.missing.push({provider:n,prefix:s,name:l});else return i=!0,!0;return!1}),r.pending.length!==o&&(i||ir([t],a.id),a.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),a.abort))})}))}let el=0;function il(t,e,i){const n=el++,s=ir.bind(null,i,n);if(!e.pending.length)return s;const a={id:n,icons:e,callback:t,abort:s};return i.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(a)}),s}const As=Object.create(null);function Ln(t,e){As[t]=e}function Os(t){return As[t]||As[""]}function sl(t,e=!0,i=!1){const n=[];return t.forEach(s=>{const a=typeof s=="string"?mi(s,e,i):s;a&&n.push(a)}),n}var nl={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function al(t,e,i,n){const s=t.resources.length,a=t.random?Math.floor(Math.random()*s):t.index;let r;if(t.random){let E=t.resources.slice(0);for(r=[];E.length>1;){const T=Math.floor(Math.random()*E.length);r.push(E[T]),E=E.slice(0,T).concat(E.slice(T+1))}r=r.concat(E)}else r=t.resources.slice(a).concat(t.resources.slice(0,a));const o=Date.now();let h="pending",l=0,u,c=null,d=[],f=[];typeof n=="function"&&f.push(n);function m(){c&&(clearTimeout(c),c=null)}function v(){h==="pending"&&(h="aborted"),m(),d.forEach(E=>{E.status==="pending"&&(E.status="aborted")}),d=[]}function p(E,T){T&&(f=[]),typeof E=="function"&&f.push(E)}function y(){return{startTime:o,payload:e,status:h,queriesSent:l,queriesPending:d.length,subscribe:p,abort:v}}function _(){h="failed",f.forEach(E=>{E(void 0,u)})}function w(){d.forEach(E=>{E.status==="pending"&&(E.status="aborted")}),d=[]}function S(E,T,O){const P=T!=="success";switch(d=d.filter(k=>k!==E),h){case"pending":break;case"failed":if(P||!t.dataAfterTimeout)return;break;default:return}if(T==="abort"){u=O,_();return}if(P){u=O,d.length||(r.length?$():_());return}if(m(),w(),!t.random){const k=t.resources.indexOf(E.resource);k!==-1&&k!==t.index&&(t.index=k)}h="completed",f.forEach(k=>{k(O)})}function $(){if(h!=="pending")return;m();const E=r.shift();if(E===void 0){if(d.length){c=setTimeout(()=>{m(),h==="pending"&&(w(),_())},t.timeout);return}_();return}const T={status:"pending",resource:E,callback:(O,P)=>{S(T,O,P)}};d.push(T),l++,c=setTimeout($,t.rotate),i(E,e,T.callback)}return setTimeout($),y}function sr(t){const e={...nl,...t};let i=[];function n(){i=i.filter(r=>r().status==="pending")}function s(r,o,h){const l=al(e,r,o,(u,c)=>{n(),h&&h(u,c)});return i.push(l),l}function a(r){return i.find(o=>r(o))||null}return{query:s,find:a,setIndex:r=>{e.index=r},getIndex:()=>e.index,cleanup:n}}function Ks(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const as=Object.create(null),Si=["https://api.simplesvg.com","https://api.unisvg.com"],ks=[];for(;Si.length>0;)Si.length===1||Math.random()>.5?ks.push(Si.shift()):ks.push(Si.pop());as[""]=Ks({resources:["https://api.iconify.design"].concat(ks)});function zn(t,e){const i=Ks(e);return i===null?!1:(as[t]=i,!0)}function rs(t){return as[t]}function rl(){return Object.keys(as)}function Bn(){}const gs=Object.create(null);function ol(t){if(!gs[t]){const e=rs(t);if(!e)return;const i=sr(e),n={config:e,redundancy:i};gs[t]=n}return gs[t]}function nr(t,e,i){let n,s;if(typeof t=="string"){const a=Os(t);if(!a)return i(void 0,424),Bn;s=a.send;const r=ol(t);r&&(n=r.redundancy)}else{const a=Ks(t);if(a){n=sr(a);const r=t.resources?t.resources[0]:"",o=Os(r);o&&(s=o.send)}}return!n||!s?(i(void 0,424),Bn):n.query(e,s,i)().abort}const qn="iconify2",si="iconify",ar=si+"-count",jn=si+"-version",rr=36e5,hl=168,ll=50;function Ts(t,e){try{return t.getItem(e)}catch{}}function Ys(t,e,i){try{return t.setItem(e,i),!0}catch{}}function Fn(t,e){try{t.removeItem(e)}catch{}}function Ns(t,e){return Ys(t,ar,e.toString())}function Ps(t){return parseInt(Ts(t,ar))||0}const Qt={local:!0,session:!0},or={local:new Set,session:new Set};let Zs=!1;function cl(t){Zs=t}let $i=typeof window>"u"?{}:window;function hr(t){const e=t+"Storage";try{if($i&&$i[e]&&typeof $i[e].length=="number")return $i[e]}catch{}Qt[t]=!1}function lr(t,e){const i=hr(t);if(!i)return;const n=Ts(i,jn);if(n!==qn){if(n){const o=Ps(i);for(let h=0;h<o;h++)Fn(i,si+h.toString())}Ys(i,jn,qn),Ns(i,0);return}const s=Math.floor(Date.now()/rr)-hl,a=o=>{const h=si+o.toString(),l=Ts(i,h);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>s&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,o))return!0}catch{}Fn(i,h)}};let r=Ps(i);for(let o=r-1;o>=0;o--)a(o)||(o===r-1?(r--,Ns(i,r)):or[t].add(o))}function cr(){if(!Zs){cl(!0);for(const t in Qt)lr(t,e=>{const i=e.data,n=e.provider,s=i.prefix,a=Lt(n,s);if(!Js(a,i).length)return!1;const r=i.lastModified||-1;return a.lastModifiedCached=a.lastModifiedCached?Math.min(a.lastModifiedCached,r):r,!0})}}function ul(t,e){const i=t.lastModifiedCached;if(i&&i>=e)return i===e;if(t.lastModifiedCached=e,i)for(const n in Qt)lr(n,s=>{const a=s.data;return s.provider!==t.provider||a.prefix!==t.prefix||a.lastModified===e});return!0}function dl(t,e){Zs||cr();function i(n){let s;if(!Qt[n]||!(s=hr(n)))return;const a=or[n];let r;if(a.size)a.delete(r=Array.from(a).shift());else if(r=Ps(s),r>=ll||!Ns(s,r+1))return;const o={cached:Math.floor(Date.now()/rr),provider:t.provider,data:e};return Ys(s,si+r.toString(),JSON.stringify(o))}e.lastModified&&!ul(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),i("local")||i("session"))}function Dn(){}function fl(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,tl(t)}))}function ml(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:i,prefix:n}=t,s=t.iconsToLoad;delete t.iconsToLoad;let a;!s||!(a=Os(i))||a.prepare(i,n,s).forEach(r=>{nr(i,r,o=>{if(typeof o!="object")r.icons.forEach(h=>{t.missing.add(h)});else try{const h=Js(t,o);if(!h.length)return;const l=t.pendingIcons;l&&h.forEach(u=>{l.delete(u)}),dl(t,o)}catch(h){console.error(h)}fl(t)})})}))}const tn=(t,e)=>{const i=sl(t,!0,tr()),n=Zh(i);if(!n.pending.length){let h=!0;return e&&setTimeout(()=>{h&&e(n.loaded,n.missing,n.pending,Dn)}),()=>{h=!1}}const s=Object.create(null),a=[];let r,o;return n.pending.forEach(h=>{const{provider:l,prefix:u}=h;if(u===o&&l===r)return;r=l,o=u,a.push(Lt(l,u));const c=s[l]||(s[l]=Object.create(null));c[u]||(c[u]=[])}),n.pending.forEach(h=>{const{provider:l,prefix:u,name:c}=h,d=Lt(l,u),f=d.pendingIcons||(d.pendingIcons=new Set);f.has(c)||(f.add(c),s[l][u].push(c))}),a.forEach(h=>{const{provider:l,prefix:u}=h;s[l][u].length&&ml(h,s[l][u])}),e?il(e,n,a):Dn},pl=t=>new Promise((e,i)=>{const n=typeof t=="string"?mi(t,!0):t;if(!n){i(t);return}tn([n||t],s=>{if(s.length&&n){const a=ii(n);if(a){e({...fi,...a});return}}i(t)})});function vl(t){try{const e=typeof t=="string"?JSON.parse(t):t;if(typeof e.body=="string")return{...e}}catch{}}function bl(t,e){const i=typeof t=="string"?mi(t,!0,!0):null;if(!i){const a=vl(t);return{value:t,data:a}}const n=ii(i);if(n!==void 0||!i.prefix)return{value:t,name:i,data:n};const s=tn([i],()=>e(t,i,ii(i)));return{value:t,name:i,loading:s}}function ys(t){return t.hasAttribute("inline")}let ur=!1;try{ur=navigator.vendor.indexOf("Apple")===0}catch{}function gl(t,e){switch(e){case"svg":case"bg":case"mask":return e}return e!=="style"&&(ur||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const yl=/(-?[0-9.]*[0-9]+[0-9.]*)/g,_l=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Is(t,e,i){if(e===1)return t;if(i=i||100,typeof t=="number")return Math.ceil(t*e*i)/i;if(typeof t!="string")return t;const n=t.split(yl);if(n===null||!n.length)return t;const s=[];let a=n.shift(),r=_l.test(a);for(;;){if(r){const o=parseFloat(a);isNaN(o)?s.push(a):s.push(Math.ceil(o*e*i)/i)}else s.push(a);if(a=n.shift(),a===void 0)return s.join("");r=!r}}function xl(t,e="defs"){let i="";const n=t.indexOf("<"+e);for(;n>=0;){const s=t.indexOf(">",n),a=t.indexOf("</"+e);if(s===-1||a===-1)break;const r=t.indexOf(">",a);if(r===-1)break;i+=t.slice(s+1,a).trim(),t=t.slice(0,n).trim()+t.slice(r+1)}return{defs:i,content:t}}function Ml(t,e){return t?"<defs>"+t+"</defs>"+e:e}function wl(t,e,i){const n=xl(t);return Ml(n.defs,e+n.content+i)}const El=t=>t==="unset"||t==="undefined"||t==="none";function dr(t,e){const i={...fi,...t},n={...Ja,...e},s={left:i.left,top:i.top,width:i.width,height:i.height};let a=i.body;[i,n].forEach(v=>{const p=[],y=v.hFlip,_=v.vFlip;let w=v.rotate;y?_?w+=2:(p.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),p.push("scale(-1 1)"),s.top=s.left=0):_&&(p.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),p.push("scale(1 -1)"),s.top=s.left=0);let S;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:S=s.height/2+s.top,p.unshift("rotate(90 "+S.toString()+" "+S.toString()+")");break;case 2:p.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:S=s.width/2+s.left,p.unshift("rotate(-90 "+S.toString()+" "+S.toString()+")");break}w%2===1&&(s.left!==s.top&&(S=s.left,s.left=s.top,s.top=S),s.width!==s.height&&(S=s.width,s.width=s.height,s.height=S)),p.length&&(a=wl(a,'<g transform="'+p.join(" ")+'">',"</g>"))});const r=n.width,o=n.height,h=s.width,l=s.height;let u,c;r===null?(c=o===null?"1em":o==="auto"?l:o,u=Is(c,h/l)):(u=r==="auto"?h:r,c=o===null?Is(u,l/h):o==="auto"?l:o);const d={},f=(v,p)=>{El(p)||(d[v]=p.toString())};f("width",u),f("height",c);const m=[s.left,s.top,h,l];return d.viewBox=m.join(" "),{attributes:d,viewBox:m,body:a}}function en(t,e){let i=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in e)i+=" "+n+'="'+e[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+t+"</svg>"}function Cl(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Sl(t){return"data:image/svg+xml,"+Cl(t)}function fr(t){return'url("'+Sl(t)+'")'}const $l=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Gi=$l();function Al(t){Gi=t}function Ol(){return Gi}function kl(t,e){const i=rs(t);if(!i)return 0;let n;if(!i.maxURL)n=0;else{let s=0;i.resources.forEach(r=>{s=Math.max(s,r.length)});const a=e+".json?icons=";n=i.maxURL-s-i.path.length-a.length}return n}function Tl(t){return t===404}const Nl=(t,e,i)=>{const n=[],s=kl(t,e),a="icons";let r={type:a,provider:t,prefix:e,icons:[]},o=0;return i.forEach((h,l)=>{o+=h.length+1,o>=s&&l>0&&(n.push(r),r={type:a,provider:t,prefix:e,icons:[]},o=h.length),r.icons.push(h)}),n.push(r),n};function Pl(t){if(typeof t=="string"){const e=rs(t);if(e)return e.path}return"/"}const Il=(t,e,i)=>{if(!Gi){i("abort",424);return}let n=Pl(e.provider);switch(e.type){case"icons":{const a=e.prefix,r=e.icons.join(","),o=new URLSearchParams({icons:r});n+=a+".json?"+o.toString();break}case"custom":{const a=e.uri;n+=a.slice(0,1)==="/"?a.slice(1):a;break}default:i("abort",400);return}let s=503;Gi(t+n).then(a=>{const r=a.status;if(r!==200){setTimeout(()=>{i(Tl(r)?"abort":"next",r)});return}return s=501,a.json()}).then(a=>{if(typeof a!="object"||a===null){setTimeout(()=>{a===404?i("abort",a):i("next",s)});return}setTimeout(()=>{i("success",a)})}).catch(()=>{i("next",s)})},Rl={prepare:Nl,send:Il};function Hn(t,e){switch(t){case"local":case"session":Qt[t]=e;break;case"all":for(const i in Qt)Qt[i]=e;break}}const _s="data-style";let mr="";function Ll(t){mr=t}function Un(t,e){let i=Array.from(t.childNodes).find(n=>n.hasAttribute&&n.hasAttribute(_s));i||(i=document.createElement("style"),i.setAttribute(_s,_s),t.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+mr}function pr(){Ln("",Rl),tr(!0);let t;try{t=window}catch{}if(t){if(cr(),t.IconifyPreload!==void 0){const e=t.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!In(n))&&console.error(i)}catch{console.error(i)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(const i in e){const n="IconifyProviders["+i+"] is invalid.";try{const s=e[i];if(typeof s!="object"||!s||s.resources===void 0)continue;zn(i,s)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>Hn(e,!0),disableCache:e=>Hn(e,!1),iconLoaded:Rn,iconExists:Rn,getIcon:Yh,listIcons:Kh,addIcon:er,addCollection:In,calculateSize:Is,buildIcon:dr,iconToHTML:en,svgToURL:fr,loadIcons:tn,loadIcon:pl,addAPIProvider:zn,appendCustomStyle:Ll,_api:{getAPIConfig:rs,setAPIModule:Ln,sendAPIQuery:nr,setFetch:Al,getFetch:Ol,listAPIProviders:rl}}}const Rs={"background-color":"currentColor"},vr={"background-color":"transparent"},Gn={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Wn={"-webkit-mask":Rs,mask:Rs,background:vr};for(const t in Wn){const e=Wn[t];for(const i in Gn)e[t+"-"+i]=Gn[i]}function Vn(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function zl(t,e,i){const n=document.createElement("span");let s=t.body;s.indexOf("<a")!==-1&&(s+="<!-- "+Date.now()+" -->");const a=t.attributes,r=en(s,{...a,width:e.width+"",height:e.height+""}),o=fr(r),h=n.style,l={"--svg":o,width:Vn(a.width),height:Vn(a.height),...i?Rs:vr};for(const u in l)h.setProperty(u,l[u]);return n}let Ue;function Bl(){try{Ue=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch{Ue=null}}function ql(t){return Ue===void 0&&Bl(),Ue?Ue.createHTML(t):t}function jl(t){const e=document.createElement("span"),i=t.attributes;let n="";i.width||(n="width: inherit;"),i.height||(n+="height: inherit;"),n&&(i.style=n);const s=en(t.body,i);return e.innerHTML=ql(s),e.firstChild}function Ls(t){return Array.from(t.childNodes).find(e=>{const i=e.tagName&&e.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function Qn(t,e){const i=e.icon.data,n=e.customisations,s=dr(i,n);n.preserveAspectRatio&&(s.attributes.preserveAspectRatio=n.preserveAspectRatio);const a=e.renderedMode;let r;switch(a){case"svg":r=jl(s);break;default:r=zl(s,{...fi,...i},a==="mask")}const o=Ls(t);o?r.tagName==="SPAN"&&o.tagName===r.tagName?o.setAttribute("style",r.getAttribute("style")):t.replaceChild(r,o):t.appendChild(r)}function Xn(t,e,i){const n=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:e,icon:t,lastRender:n}}function Fl(t="iconify-icon"){let e,i;try{e=window.customElements,i=window.HTMLElement}catch{return}if(!e||!i)return;const n=e.get(t);if(n)return n;const s=["icon","mode","inline","observe","width","height","rotate","flip"],a=class extends i{constructor(){super(),Ut(this,"_shadowRoot"),Ut(this,"_initialised",!1),Ut(this,"_state"),Ut(this,"_checkQueued",!1),Ut(this,"_connected",!1),Ut(this,"_observer",null),Ut(this,"_visible",!0);const o=this._shadowRoot=this.attachShadow({mode:"open"}),h=ys(this);Un(o,h),this._state=Xn({value:""},h),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return s.slice(0)}attributeChangedCallback(o){switch(o){case"inline":{const h=ys(this),l=this._state;h!==l.inline&&(l.inline=h,Un(this._shadowRoot,h));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const o=this.getAttribute("icon");if(o&&o.slice(0,1)==="{")try{return JSON.parse(o)}catch{}return o}set icon(o){typeof o=="object"&&(o=JSON.stringify(o)),this.setAttribute("icon",o)}get inline(){return ys(this)}set inline(o){o?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(o){o?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const o=this._state;if(o.rendered){const h=this._shadowRoot;if(o.renderedMode==="svg")try{h.lastChild.setCurrentTime(0);return}catch{}Qn(h,o)}}get status(){const o=this._state;return o.rendered?"rendered":o.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const o=this._state,h=this.getAttribute("icon");if(h!==o.icon.value){this._iconChanged(h);return}if(!o.rendered||!this._visible)return;const l=this.getAttribute("mode"),u=Nn(this);(o.attrMode!==l||Uh(o.customisations,u)||!Ls(this._shadowRoot))&&this._renderIcon(o.icon,u,l)}_iconChanged(o){const h=bl(o,(l,u,c)=>{const d=this._state;if(d.rendered||this.getAttribute("icon")!==l)return;const f={value:l,name:u,data:c};f.data?this._gotIconData(f):d.icon=f});h.data?this._gotIconData(h):this._state=Xn(h,this._state.inline,this._state)}_forceRender(){if(!this._visible){const o=Ls(this._shadowRoot);o&&this._shadowRoot.removeChild(o);return}this._queueCheck()}_gotIconData(o){this._checkQueued=!1,this._renderIcon(o,Nn(this),this.getAttribute("mode"))}_renderIcon(o,h,l){const u=gl(o.data.body,l),c=this._state.inline;Qn(this._shadowRoot,this._state={rendered:!0,icon:o,inline:c,customisations:h,attrMode:l,renderedMode:u})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(o=>{const h=o.some(l=>l.isIntersecting);h!==this._visible&&(this._visible=h,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};s.forEach(o=>{o in a.prototype||Object.defineProperty(a.prototype,o,{get:function(){return this.getAttribute(o)},set:function(h){h!==null?this.setAttribute(o,h):this.removeAttribute(o)}})});const r=pr();for(const o in r)a[o]=a.prototype[o]=r[o];return e.define(t,a),a}Fl()||pr();const Dl=z`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_main-base), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }
`,Hl=z`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-3: hsl(210 10% 30%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-6: hsl(210 10% 60%);
    --bim-ui_gray-7: hsl(210 10% 70%);
    --bim-ui_gray-8: hsl(210 10% 80%);
    --bim-ui_gray-9: hsl(210 10% 90%);
    --bim-ui_gray-10: hsl(210 10% 95%);

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem;
    --bim-ui_size-3xs: 0.5rem;
    --bim-ui_size-2xs: 0.625rem;
    --bim-ui_size-xs: 0.75rem;
    --bim-ui_size-sm: 0.875rem;
    --bim-ui_size-base: 1rem;
    --bim-ui_size-lg: 1.125rem;
    --bim-ui_size-xl: 1.25rem;
    --bim-ui_size-2xl: 1.375rem;
    --bim-ui_size-3xl: 1.5rem;
    --bim-ui_size-4xl: 1.625rem;
    --bim-ui_size-5xl: 1.75rem;
    --bim-ui_size-6xl: 1.875rem;
    --bim-ui_size-7xl: 2rem;
    --bim-ui_size-8xl: 2.125rem;
    --bim-ui_size-9xl: 2.25rem;
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-10);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`,jt={scrollbar:Dl,globalStyles:Hl},br=class N{static set config(e){this._config={...N._config,...e}}static get config(){return N._config}static addGlobalStyles(){let e=document.querySelector("style[id='bim-ui']");if(e)return;e=document.createElement("style"),e.id="bim-ui",e.textContent=jt.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(e,i):document.head.append(e)}static defineCustomElement(e,i){customElements.get(e)||customElements.define(e,i)}static registerComponents(){N.init()}static init(){N.addGlobalStyles(),N.defineCustomElement("bim-button",Xl),N.defineCustomElement("bim-checkbox",Se),N.defineCustomElement("bim-color-input",Zt),N.defineCustomElement("bim-context-menu",Bs),N.defineCustomElement("bim-dropdown",$t),N.defineCustomElement("bim-grid",nn),N.defineCustomElement("bim-icon",sc),N.defineCustomElement("bim-input",vi),N.defineCustomElement("bim-label",Ae),N.defineCustomElement("bim-number-input",it),N.defineCustomElement("bim-option",D),N.defineCustomElement("bim-panel",te),N.defineCustomElement("bim-panel-section",Oe),N.defineCustomElement("bim-selector",ke),N.defineCustomElement("bim-table",ct),N.defineCustomElement("bim-tabs",ie),N.defineCustomElement("bim-tab",at),N.defineCustomElement("bim-table-cell",Pr),N.defineCustomElement("bim-table-children",Rr),N.defineCustomElement("bim-table-group",zr),N.defineCustomElement("bim-table-row",ee),N.defineCustomElement("bim-text-input",Mt),N.defineCustomElement("bim-toolbar",ds),N.defineCustomElement("bim-toolbar-group",cs),N.defineCustomElement("bim-toolbar-section",Pe),N.defineCustomElement("bim-viewport",Qr)}static newRandomId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let n=0;n<10;n++){const s=Math.floor(Math.random()*e.length);i+=e.charAt(s)}return i}};br._config={sectionLabelOnVerticalToolbar:!1};let gr=br;class Wi extends L{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=e=>{if(!this.useObserver)return;for(const n of e)this.elements.add(n);const i=e.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const n of i)n.remove();this.observeLastElement()}}set visibleElements(e){this._visibleElements=this.useObserver?e:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const e=new IntersectionObserver(i=>{const n=i[0];if(!n.isIntersecting)return;const s=n.target;e.unobserve(s);const a=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][a];r&&(this.visibleElements=[...this.visibleElements,r],e.observe(r))},{threshold:.5});return e}observeLastElement(){const e=this.getLazyObserver();if(!e)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,n=[...this.elements][i];n&&e.observe(n)}resetVisibleElements(){const e=this.getLazyObserver();if(e){for(const i of this.elements)e.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(e,i){const n=document.createDocumentFragment();if(e.length===0)return _e(e(),n),n.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let s=i;const a=e,r=h=>(s={...s,...h},_e(a(s,r),n),s);r(i);const o=()=>s;return[n.firstElementChild,r,o]}}const Vi=(t,e={},i=!0)=>{let n={};for(const s of t.children){const a=s,r=a.getAttribute("name")||a.getAttribute("label"),o=e[r];if(r){if("value"in a&&typeof a.value<"u"&&a.value!==null){const h=a.value;if(typeof h=="object"&&!Array.isArray(h)&&Object.keys(h).length===0)continue;n[r]=o?o(a.value):a.value}else if(i){const h=Vi(a,e);if(Object.keys(h).length===0)continue;n[r]=o?o(h):h}}else i&&(n={...n,...Vi(a,e)})}return n},os=t=>t==="true"||t==="false"?t==="true":t&&!isNaN(Number(t))&&t.trim()!==""?Number(t):t,Ul=[">=","<=","=",">","<","?","/","#"];function Jn(t){const e=Ul.find(r=>t.split(r).length===2),i=t.split(e).map(r=>r.trim()),[n,s]=i,a=s.startsWith("'")&&s.endsWith("'")?s.replace(/'/g,""):os(s);return{key:n,condition:e,value:a}}const zs=t=>{try{const e=[],i=t.split(/&(?![^()]*\))/).map(n=>n.trim());for(const n of i){const s=!n.startsWith("(")&&!n.endsWith(")"),a=n.startsWith("(")&&n.endsWith(")");if(s){const r=Jn(n);e.push(r)}if(a){const r={operator:"&",queries:n.replace(/^(\()|(\))$/g,"").split("&").map(o=>o.trim()).map((o,h)=>{const l=Jn(o);return h>0&&(l.operator="&"),l})};e.push(r)}}return e}catch{return null}},Kn=(t,e,i)=>{let n=!1;switch(e){case"=":n=t===i;break;case"?":n=String(t).includes(String(i));break;case"<":(typeof t=="number"||typeof i=="number")&&(n=t<i);break;case"<=":(typeof t=="number"||typeof i=="number")&&(n=t<=i);break;case">":(typeof t=="number"||typeof i=="number")&&(n=t>i);break;case">=":(typeof t=="number"||typeof i=="number")&&(n=t>=i);break;case"/":n=String(t).startsWith(String(i));break}return n};var Gl=Object.defineProperty,Wl=Object.getOwnPropertyDescriptor,yr=(t,e,i,n)=>{for(var s=Wl(e,i),a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&Gl(e,i,s),s},F;const sn=(F=class extends L{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(t){this._placement=t,this.updatePosition()}static removeMenus(){for(const t of F.menus)t instanceof F&&(t.visible=!1);F.dialog.close(),F.dialog.remove()}get visible(){return this._visible}set visible(t){var e;this._visible=t,t?(F.dialog.parentElement||document.body.append(F.dialog),this._previousContainer=this.parentElement,F.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,F.dialog.append(this),F.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((e=this._previousContainer)==null||e.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const t=this.placement??"right",e=await Da(this._previousContainer,this,{placement:t,middleware:[Aa(10),Fa(),ja(),qa({padding:5})]}),{x:i,y:n}=e;this.style.left=`${i}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),F.menus.push(this)}render(){return C` <slot></slot> `}},F.styles=[jt.scrollbar,z`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host(:not([visible])) {
        display: none;
      }
    `],F.dialog=Wi.create(()=>C` <dialog
      @click=${t=>{t.target===F.dialog&&F.removeMenus()}}
      @cancel=${()=>F.removeMenus()}
      data-context-dialog
      style="
      width: 0;
      height: 0;
      position: relative;
      padding: 0;
      border: none;
      outline: none;
      margin: none;
      overflow: visible;
      background-color: transparent;
    "
    ></dialog>`),F.menus=[],F);yr([b({type:String,reflect:!0})],sn.prototype,"placement");yr([b({type:Boolean,reflect:!0})],sn.prototype,"visible");let Bs=sn;var Vl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,dt=(t,e,i,n)=>{for(var s=n>1?void 0:n?Ql(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&Vl(e,i,s),s},Le;const ht=(Le=class extends L{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=xe(),this._tooltip=xe(),this._mouseLeave=!1,this.onClick=t=>{t.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const t=this._contextMenu;if(t){const e=this.getAttribute("data-context-group");e&&t.setAttribute("data-context-group",e),this.closeNestedContexts();const i=gr.newRandomId();for(const n of t.children)n instanceof Le&&n.setAttribute("data-context-group",i);t.visible=!0}},this.mouseLeave=!0}set loading(t){if(this._loading=t,t)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=t,this.icon="eos-icons:loading";else{const{disabled:e,icon:i}=this._stateBeforeLoading;this.disabled=e,this.icon=i}}get loading(){return this._loading}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&Da(t,e,{placement:"bottom",middleware:[Aa(10),Fa(),ja(),qa({padding:5})]}).then(i=>{const{x:n,y:s}=i;Object.assign(e.style,{left:`${n}px`,top:`${s}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}closeNestedContexts(){const t=this.getAttribute("data-context-group");if(t)for(const e of Bs.dialog.children){const i=e.getAttribute("data-context-group");if(e instanceof Bs&&i===t){e.visible=!1,e.removeAttribute("data-context-group");for(const n of e.children)n instanceof Le&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const t=C`
      <div ${Me(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?C`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?C`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,e=C`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return C`
      <div ${Me(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?C`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label&&this._contextMenu?e:null}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?t:null}
      </div>
      <slot></slot>
    `}},Le.styles=z`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-icon--c: var(--bim-label--c);
      position: relative;
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
    }

    .children {
      padding: 0 0.375rem;
      position: absolute;
      height: 100%;
      right: 0;
    }

    :host(:not([label-hidden])[icon][vertical]) .parent {
      min-height: 2.5rem;
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover),
    :host([active]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
    }

    :host([disabled]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80) !important;
      background-color: gray !important;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    .tooltip {
      position: absolute;
      padding: 0.75rem;
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      box-shadow: 0 0 10px 3px rgba(0 0 0 / 20%);
      outline: 1px solid var(--bim-ui_bg-contrast-40);
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100);
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      display: none;
    }
  `,Le);dt([b({type:String,reflect:!0})],ht.prototype,"label",2);dt([b({type:Boolean,attribute:"label-hidden",reflect:!0})],ht.prototype,"labelHidden",2);dt([b({type:Boolean,reflect:!0})],ht.prototype,"active",2);dt([b({type:Boolean,reflect:!0,attribute:"disabled"})],ht.prototype,"disabled",2);dt([b({type:String,reflect:!0})],ht.prototype,"icon",2);dt([b({type:Boolean,reflect:!0})],ht.prototype,"vertical",2);dt([b({type:Number,attribute:"tooltip-time",reflect:!0})],ht.prototype,"tooltipTime",2);dt([b({type:Boolean,attribute:"tooltip-visible",reflect:!0})],ht.prototype,"tooltipVisible",2);dt([b({type:String,attribute:"tooltip-title",reflect:!0})],ht.prototype,"tooltipTitle",2);dt([b({type:String,attribute:"tooltip-text",reflect:!0})],ht.prototype,"tooltipText",2);dt([b({type:Boolean,reflect:!0})],ht.prototype,"loading",1);let Xl=ht;var Jl=Object.defineProperty,pi=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&Jl(e,i,s),s};const _r=class extends L{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(e){e.stopPropagation(),this.checked=e.target.checked,this.dispatchEvent(this.onValueChange)}render(){return C`
      <div class="parent">
        ${this.label?C`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};_r.styles=z`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.25rem;
      width: 100%;
      align-items: center;
      transition: all 0.15s;
    }

    :host([inverted]) .parent {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
      transition: all 0.15s;
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }
  `;let Se=_r;pi([b({type:String,reflect:!0})],Se.prototype,"icon");pi([b({type:String,reflect:!0})],Se.prototype,"name");pi([b({type:String,reflect:!0})],Se.prototype,"label");pi([b({type:Boolean,reflect:!0})],Se.prototype,"checked");pi([b({type:Boolean,reflect:!0})],Se.prototype,"inverted");var Kl=Object.defineProperty,$e=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&Kl(e,i,s),s};const xr=class extends L{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=xe(),this._textInput=xe(),this.onValueChange=new Event("input"),this.onOpacityInput=e=>{const i=e.target;this.opacity=i.value,this.dispatchEvent(this.onValueChange)}}set value(e){const{color:i,opacity:n}=e;this.color=i,n&&(this.opacity=n)}get value(){const e={color:this.color};return this.opacity&&(e.opacity=this.opacity),e}onColorInput(e){e.stopPropagation();const{value:i}=this._colorInput;i&&(this.color=i.value,this.dispatchEvent(this.onValueChange))}onTextInput(e){e.stopPropagation();const{value:i}=this._textInput;if(!i)return;const{value:n}=i;let s=n.replace(/[^a-fA-F0-9]/g,"");s.startsWith("#")||(s=`#${s}`),i.value=s.slice(0,7),i.value.length===7&&(this.color=i.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:e}=this._colorInput;e&&e.click()}render(){return C`
      <div class="parent">
        <bim-input
          .label=${this.label}
          .icon=${this.icon}
          .vertical="${this.vertical}"
        >
          <div class="color-container">
            <div
              style="display: flex; align-items: center; gap: .375rem; height: 100%; flex: 1; padding: 0 0.5rem;"
            >
              <input
                ${Me(this._colorInput)}
                @input="${this.onColorInput}"
                type="color"
                aria-label=${this.label||this.name||"Color Input"}
                value="${this.color}"
              />
              <div
                @click=${this.focus}
                class="sample"
                style="background-color: ${this.color}"
              ></div>
              <input
                ${Me(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?C`<bim-number-input
                  @change=${this.onOpacityInput}
                  slider
                  suffix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};xr.styles=z`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    .parent {
      display: flex;
      gap: 0.375rem;
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      border-radius: var(--bim-color-input--bdrs, var(--bim-ui_size-4xs));
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      width: 3.25rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let Zt=xr;$e([b({type:String,reflect:!0})],Zt.prototype,"name");$e([b({type:String,reflect:!0})],Zt.prototype,"label");$e([b({type:String,reflect:!0})],Zt.prototype,"icon");$e([b({type:Boolean,reflect:!0})],Zt.prototype,"vertical");$e([b({type:Number,reflect:!0})],Zt.prototype,"opacity");$e([b({type:String,reflect:!0})],Zt.prototype,"color");var Yl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Ft=(t,e,i,n)=>{for(var s=n>1?void 0:n?Zl(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&Yl(e,i,s),s};const Mr=class extends L{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?os(this.label):this.label}set value(e){this._value=e}render(){return C`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?C` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?C`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`:null}
              <bim-label
                .vertical=${this.vertical}
                .icon=${this.icon}
                .img=${this.img}
                >${this.label}</bim-label
              >
            </div>`:null}
        ${!this.checkbox&&!this.noMark&&this.checked?C`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`:null}
        <slot></slot>
      </div>
    `}};Mr.styles=z`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:hover) {
      cursor: pointer;
      background-color: color-mix(
        in lab,
        var(--bim-selector--bgc, var(--bim-ui_bg-contrast-20)),
        var(--bim-ui_main-base) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }

    bim-label {
      pointer-events: none;
    }
  `;let D=Mr;Ft([b({type:String,reflect:!0})],D.prototype,"img",2);Ft([b({type:String,reflect:!0})],D.prototype,"label",2);Ft([b({type:String,reflect:!0})],D.prototype,"icon",2);Ft([b({type:Boolean,reflect:!0})],D.prototype,"checked",2);Ft([b({type:Boolean,reflect:!0})],D.prototype,"checkbox",2);Ft([b({type:Boolean,attribute:"no-mark",reflect:!0})],D.prototype,"noMark",2);Ft([b({converter:{fromAttribute(t){return t&&os(t)}}})],D.prototype,"value",1);Ft([b({type:Boolean,reflect:!0})],D.prototype,"vertical",2);var tc=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,Dt=(t,e,i,n)=>{for(var s=n>1?void 0:n?ec(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&tc(e,i,s),s};const wr=class extends Wi{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=xe(),this.onOptionClick=e=>{const i=e.target,n=this._value.has(i);if(!this.multiple&&!this.required&&!n)this._value=new Set([i]);else if(!this.multiple&&!this.required&&n)this._value=new Set([]);else if(!this.multiple&&this.required&&!n)this._value=new Set([i]);else if(this.multiple&&!this.required&&!n)this._value=new Set([...this._value,i]);else if(this.multiple&&!this.required&&n){const s=[...this._value].filter(a=>a!==i);this._value=new Set(s)}else if(this.multiple&&this.required&&!n)this._value=new Set([...this._value,i]);else if(this.multiple&&this.required&&n){const s=[...this._value].filter(r=>r!==i),a=new Set(s);a.size!==0&&(this._value=a)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(e){if(e){const{value:i}=this._contextMenu;if(!i)return;for(const n of this.elements)i.append(n);this._visible=!0}else{for(const i of this.elements)this.append(i);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(e){if(this.required&&Object.keys(e).length===0)return;const i=new Set;for(const n of e){const s=this.findOption(n);if(s&&(i.add(s),!this.multiple&&Object.keys(e).length===1))break}this._value=i,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof D&&e.checked).map(e=>e.value)}get _options(){const e=new Set([...this.elements]);for(const i of this.children)i instanceof D&&e.add(i);return[...e]}onSlotChange(e){const i=e.target.assignedElements();this.observe(i);const n=new Set;for(const s of this.elements){if(!(s instanceof D)){s.remove();continue}s.checked&&n.add(s),s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick)}this._value=n}updateOptionsState(){for(const e of this._options)e instanceof D&&(e.checked=this._value.has(e))}findOption(e){return this._options.find(i=>i instanceof D?i.label===e||i.value===e:!1)}render(){let e,i,n;if(this._value.size===0)e="Select an option...";else if(this._value.size===1){const s=[...this._value][0];e=(s==null?void 0:s.label)||(s==null?void 0:s.value),i=s==null?void 0:s.img,n=s==null?void 0:s.icon}else e=`Multiple (${this._value.size})`;return C`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${i}
            .icon=${n}
            style="overflow: hidden;"
            >${e}</bim-label
          >
          <svg
            style="flex-shrink: 0; fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100))"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
          <bim-context-menu
            ${Me(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};wr.styles=[jt.scrollbar,z`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-4xs);
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
      }

      bim-label {
        pointer-events: none;
      }
    `];let $t=wr;Dt([b({type:String,reflect:!0})],$t.prototype,"name",2);Dt([b({type:String,reflect:!0})],$t.prototype,"icon",2);Dt([b({type:String,reflect:!0})],$t.prototype,"label",2);Dt([b({type:Boolean,reflect:!0})],$t.prototype,"multiple",2);Dt([b({type:Boolean,reflect:!0})],$t.prototype,"required",2);Dt([b({type:Boolean,reflect:!0})],$t.prototype,"vertical",2);Dt([b({type:Boolean,reflect:!0})],$t.prototype,"visible",1);Dt([Ce()],$t.prototype,"_value",2);var ic=Object.defineProperty,Er=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&ic(e,i,s),s};const Cr=class extends L{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._updateFunctions={}}set layouts(e){this._layouts=e;const i={};for(const[n,s]of Object.entries(e))for(const a in s.elements)i[n]||(i[n]={}),i[n][a]=r=>{const o=this._updateFunctions[n];if(!o)return;const h=o[a];h&&h(r)};this.updateComponent=i}get layouts(){return this._layouts}getLayoutAreas(e){const{template:i}=e,n=i.split(`
`).map(s=>s.trim()).map(s=>s.split('"')[1]).filter(s=>s!==void 0).flatMap(s=>s.split(/\s+/));return[...new Set(n)].filter(s=>s!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const e=this._updateFunctions[this.layout],i=this.layouts[this.layout],n=this.getLayoutAreas(i).map(s=>{const a=i.elements[s];if(!a)return null;if(a instanceof HTMLElement)return a.style.gridArea=s,a;if("template"in a){const{template:r,initialState:o}=a,[h,l]=Wi.create(r,o);return h.style.gridArea=s,e[s]=l,h}return Wi.create(a)}).filter(s=>!!s);this.style.gridTemplate=i.template,this.append(...n),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return C`<slot></slot>`}};Cr.styles=z`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    /* :host(:not([layout])) {
      display: none;
    } */

    :host([floating]) {
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;let nn=Cr;Er([b({type:Boolean,reflect:!0})],nn.prototype,"floating");Er([b({type:String,reflect:!0})],nn.prototype,"layout");const qs=class extends L{render(){return C`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};qs.styles=z`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
      transition: all 0.15s;
    }
  `,qs.properties={icon:{type:String}};let sc=qs;var nc=Object.defineProperty,hs=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&nc(e,i,s),s};const Sr=class extends L{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const e={};for(const i of this.children){const n=i;"value"in n?e[n.name||n.label]=n.value:"checked"in n&&(e[n.name||n.label]=n.checked)}return e}set value(e){const i=[...this.children];for(const n in e){const s=i.find(o=>{const h=o;return h.name===n||h.label===n});if(!s)continue;const a=s,r=e[n];typeof r=="boolean"?a.checked=r:a.value=r}}render(){return C`
      <div class="parent">
        ${this.label||this.icon?C`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};Sr.styles=z`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.375rem;
      user-select: none;
      flex: 1;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      outline: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
      transition: all 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let vi=Sr;hs([b({type:String,reflect:!0})],vi.prototype,"name");hs([b({type:String,reflect:!0})],vi.prototype,"label");hs([b({type:String,reflect:!0})],vi.prototype,"icon");hs([b({type:Boolean,reflect:!0})],vi.prototype,"vertical");var ac=Object.defineProperty,bi=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&ac(e,i,s),s};const $r=class extends L{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?os(this.textContent):this.textContent}render(){return C`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?C`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?C`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};$r.styles=z`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      overflow: hidden;
      display: block;
      white-space: nowrap;
      line-height: 1.1rem;
      transition: all 0.15s;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      user-select: none;
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: 0.125rem;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.8)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let Ae=$r;bi([b({type:String,reflect:!0})],Ae.prototype,"img");bi([b({type:Boolean,attribute:"label-hidden",reflect:!0})],Ae.prototype,"labelHidden");bi([b({type:String,reflect:!0})],Ae.prototype,"icon");bi([b({type:Boolean,attribute:"icon-hidden",reflect:!0})],Ae.prototype,"iconHidden");bi([b({type:Boolean,reflect:!0})],Ae.prototype,"vertical");var rc=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,lt=(t,e,i,n)=>{for(var s=n>1?void 0:n?oc(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&rc(e,i,s),s};const Ar=class extends L{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=xe(),this.onValueChange=new Event("change")}set value(e){this.setValue(e.toString())}get value(){return this._value}onChange(e){e.stopPropagation();const{value:i}=this._input;i&&this.setValue(i.value)}setValue(e){const{value:i}=this._input;let n=e;if(n=n.replace(/[^0-9.-]/g,""),n=n.replace(/(\..*)\./g,"$1"),n.endsWith(".")||(n.lastIndexOf("-")>0&&(n=n[0]+n.substring(1).replace(/-/g,"")),n==="-"||n==="-0"))return;let s=Number(n);Number.isNaN(s)||(s=this.min!==void 0?Math.max(s,this.min):s,s=this.max!==void 0?Math.min(s,this.max):s,this.value!==s&&(this._value=s,i&&(i.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:e}=this._input;e&&Number.isNaN(Number(e.value))&&(e.value=this.value.toString())}onSliderMouseDown(e){document.body.style.cursor="w-resize";const{clientX:i}=e,n=this.value;let s=!1;const a=h=>{var l;s=!0;const{clientX:u}=h,c=this.step??1,d=((l=c.toString().split(".")[1])==null?void 0:l.length)||0,f=1/(this.sensitivity??1),m=(u-i)/f;if(Math.floor(Math.abs(m))!==Math.abs(m))return;const v=n+m*c;this.setValue(v.toFixed(d))},r=()=>{this.slider=!0,this.removeEventListener("blur",r)},o=()=>{document.removeEventListener("mousemove",a),document.body.style.cursor="default",s?s=!1:(this.addEventListener("blur",r),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",o)}onFocus(e){e.stopPropagation();const i=n=>{n.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",i))};window.addEventListener("keydown",i)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:e}=this._input;e&&e.focus()}render(){const e=C`
      ${this.pref||this.icon?C`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${Me(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${o=>o.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?C`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,i=this.min??-1/0,n=this.max??1/0,s=100*(this.value-i)/(n-i),a=C`
      <style>
        .slider-indicator {
          width: ${`${s}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?C`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?C`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,r=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return C`
      <bim-input
        title=${r}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?a:e}
      </bim-input>
    `}};Ar.styles=z`
    :host {
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_accent-base)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([suffix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_main-base);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-input {
      display: flex;
    }

    bim-label {
      pointer-events: none;
    }
  `;let it=Ar;lt([b({type:String,reflect:!0})],it.prototype,"name",2);lt([b({type:String,reflect:!0})],it.prototype,"icon",2);lt([b({type:String,reflect:!0})],it.prototype,"label",2);lt([b({type:String,reflect:!0})],it.prototype,"pref",2);lt([b({type:Number,reflect:!0})],it.prototype,"min",2);lt([b({type:Number,reflect:!0})],it.prototype,"value",1);lt([b({type:Number,reflect:!0})],it.prototype,"step",2);lt([b({type:Number,reflect:!0})],it.prototype,"sensitivity",2);lt([b({type:Number,reflect:!0})],it.prototype,"max",2);lt([b({type:String,reflect:!0})],it.prototype,"suffix",2);lt([b({type:Boolean,reflect:!0})],it.prototype,"vertical",2);lt([b({type:Boolean,reflect:!0})],it.prototype,"slider",2);var hc=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,gi=(t,e,i,n)=>{for(var s=n>1?void 0:n?lc(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&hc(e,i,s),s};const Or=class extends L{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(e){this._hidden=e,this.activationButton.active=!e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return Vi(this,this.valueTransform)}set value(e){const i=[...this.children];for(const n in e){const s=i.find(r=>{const o=r;return o.name===n||o.label===n});if(!s)continue;const a=s;a.value=e[n]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const e=this.querySelectorAll("bim-panel-section");for(const i of e)i.collapsed=!0}expandSections(){const e=this.querySelectorAll("bim-panel-section");for(const i of e)i.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,C`
      <div class="parent">
        ${this.label||this.name||this.icon?C`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};Or.styles=[jt.scrollbar,z`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
      }

      :host([hidden]) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        overflow: auto;
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([header-hidden]) .parent bim-label {
        display: none;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let te=Or;gi([b({type:String,reflect:!0})],te.prototype,"icon",2);gi([b({type:String,reflect:!0})],te.prototype,"name",2);gi([b({type:String,reflect:!0})],te.prototype,"label",2);gi([b({type:Boolean,reflect:!0})],te.prototype,"hidden",1);gi([b({type:Boolean,attribute:"header-hidden",reflect:!0})],te.prototype,"headerHidden",2);var cc=Object.defineProperty,yi=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&cc(e,i,s),s};const kr=class extends L{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const e=this.parentElement;let i;return e instanceof te&&(i=e.valueTransform),Object.values(this.valueTransform).length!==0&&(i=this.valueTransform),Vi(this,i)}set value(e){const i=[...this.children];for(const n in e){const s=i.find(r=>{const o=r;return o.name===n||o.label===n});if(!s)continue;const a=s;a.value=e[n]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const e=this.label||this.icon||this.name||this.fixed,i=C`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,n=C`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,s=this.collapsed?i:n,a=C`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?C`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:s}
      </div>
    `;return C`
      <div class="parent">
        ${e?a:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};kr.styles=[jt.scrollbar,z`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover svg {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .header svg {
        fill: var(--bim-ui_bg-contrast-80);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .components {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
        height: 0px;
      }

      bim-label {
        pointer-events: none;
      }
    `];let Oe=kr;yi([b({type:String,reflect:!0})],Oe.prototype,"icon");yi([b({type:String,reflect:!0})],Oe.prototype,"label");yi([b({type:String,reflect:!0})],Oe.prototype,"name");yi([b({type:Boolean,reflect:!0})],Oe.prototype,"fixed");yi([b({type:Boolean,reflect:!0})],Oe.prototype,"collapsed");var uc=Object.defineProperty,_i=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&uc(e,i,s),s};const Tr=class extends L{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=e=>{this._value=e.target,this.dispatchEvent(this.onValueChange);for(const i of this.children)i instanceof D&&(i.checked=i===e.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(e){const i=this.findOption(e);if(i){for(const n of this._options)n.checked=n===i;this._value=i,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(e){const i=e.target.assignedElements();for(const n of i)n instanceof D&&(n.noMark=!0,n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick))}findOption(e){return this._options.find(i=>i instanceof D?i.label===e||i.value===e:!1)}firstUpdated(){const e=[...this.children].find(i=>i instanceof D&&i.checked);e&&(this._value=e)}render(){return C`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};Tr.styles=z`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      border-radius: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }
  `;let ke=Tr;_i([b({type:String,reflect:!0})],ke.prototype,"name");_i([b({type:String,reflect:!0})],ke.prototype,"icon");_i([b({type:String,reflect:!0})],ke.prototype,"label");_i([b({type:Boolean,reflect:!0})],ke.prototype,"vertical");_i([Ce()],ke.prototype,"_value");const dc=()=>C`
    <style>
      div {
        display: flex;
        gap: 0.375rem;
        border-radius: 0.25rem;
        min-height: 1.25rem;
      }

      [data-type="row"] {
        background-color: var(--bim-ui_bg-contrast-10);
        animation: row-loading 1s linear infinite alternate;
        padding: 0.5rem;
      }

      [data-type="cell"] {
        background-color: var(--bim-ui_bg-contrast-20);
        flex: 0.25;
      }

      @keyframes row-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-10);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
      }
    </style>
    <div style="display: flex; flex-direction: column;">
      <div data-type="row" style="gap: 2rem">
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 2"></div>
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 0.5"></div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.7s5"></div>
        </div>
      </div>
    </div>
  `,fc=()=>C`
    <style>
      .loader {
        grid-area: Processing;
        position: relative;
        padding: 0.125rem;
      }
      .loader:before {
        content: "";
        position: absolute;
      }
      .loader .loaderBar {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: var(--bim-ui_main-base);
        /* width: 25%; */
        width: 0;
        animation: borealisBar 2s linear infinite;
      }

      @keyframes borealisBar {
        0% {
          left: 0%;
          right: 100%;
          width: 0%;
        }
        10% {
          left: 0%;
          right: 75%;
          width: 25%;
        }
        90% {
          right: 0%;
          left: 75%;
          width: 25%;
        }
        100% {
          left: 100%;
          right: 0%;
          width: 0%;
        }
      }
    </style>
    <div class="loader">
      <div class="loaderBar"></div>
    </div>
  `;var mc=Object.defineProperty,pc=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&mc(e,i,s),s};const Nr=class extends L{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return C`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};Nr.styles=z`
    :host {
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]) {
      justify-content: normal;
    }

    :host([data-column-index="0"]:not([data-cell-header]))
      ::slotted(bim-label) {
      text-align: left;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }

    ::slotted(bim-label) {
      white-space: normal;
      text-align: center;
    }
  `;let Pr=Nr;pc([b({type:String,reflect:!0})],Pr.prototype,"column");var vc=Object.defineProperty,bc=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&vc(e,i,s),s};const Ir=class extends L{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(e,i=!1){for(const n of this._groups)n.childrenHidden=typeof e>"u"?!n.childrenHidden:!e,i&&n.toggleChildren(e,i)}render(){return this._groups=[],C`
      <slot></slot>
      ${this.data.map(e=>{const i=document.createElement("bim-table-group");return this._groups.push(i),i.table=this.table,i.data=e,i})}
    `}};Ir.styles=z`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let Rr=Ir;bc([b({type:Array,attribute:!1})],Rr.prototype,"data");var gc=Object.defineProperty,yc=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&gc(e,i,s),s};const Lr=class extends L{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(e,i=!1){this._children&&(this.childrenHidden=typeof e>"u"?!this.childrenHidden:!e,i&&this._children.toggleGroups(e,i))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const e=this.table.getGroupIndentation(this.data)??0,i=C`
      ${this.table.noIndentation?null:C`
            <style>
              .branch-vertical {
                left: ${e+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,n=document.createDocumentFragment();_e(i,n);let s=null;this.table.noIndentation||(s=document.createElement("div"),s.classList.add("branch","branch-horizontal"),s.style.left=`${e-1+(this.table.selectableRows?2.05:.5625)}rem`);let a=null;if(!this.table.noIndentation){const h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.setAttribute("height","9.5"),h.setAttribute("width","7.5"),h.setAttribute("viewBox","0 0 4.6666672 7.3333333");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),h.append(l);const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("height","6.5"),u.setAttribute("width","9.5"),u.setAttribute("viewBox","0 0 5.9111118 5.0175439");const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),u.append(c),a=document.createElement("div"),a.addEventListener("click",d=>{d.stopPropagation(),this.toggleChildren()}),a.classList.add("caret"),a.style.left=`${(this.table.selectableRows?1.5:.125)+e}rem`,this.childrenHidden?a.append(h):a.append(u)}const r=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&r.append(n),r.table=this.table,r.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:r}})),a&&this.data.children&&r.append(a),e!==0&&(!this.data.children||this.childrenHidden)&&s&&r.append(s);let o;if(this.data.children){o=document.createElement("bim-table-children"),this._children=o,o.table=this.table,o.data=this.data.children;const h=document.createDocumentFragment();_e(i,h),o.append(h)}return C`
      <div class="parent">${r} ${this.childrenHidden?null:o}</div>
    `}};Lr.styles=z`
    :host {
      position: relative;
    }

    .parent {
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      border-left: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .caret {
      position: absolute;
      z-index: 2;
      transform: translateY(-50%) rotate(0deg);
      top: 50%;
      display: flex;
      width: 0.95rem;
      height: 0.95rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let zr=Lr;yc([b({type:Boolean,attribute:"children-hidden",reflect:!0})],zr.prototype,"childrenHidden");var _c=Object.defineProperty,Te=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&_c(e,i,s),s};const Br=class extends L{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(e=>{this._intersecting=e[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.name)}get _columnWidths(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.width)}get _isSelected(){var e;return(e=this.table)==null?void 0:e.selection.has(this.data)}onSelectionChange(e){if(!this.table)return;const i=e.target;this.selected=i.value,i.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const e=this.table.getRowIndentation(this.data)??0,i=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,n=[];for(const s in i){if(this.hiddenColumns.includes(s))continue;const a=i[s];let r;if(typeof a=="string"||typeof a=="boolean"||typeof a=="number"?(r=document.createElement("bim-label"),r.textContent=String(a)):a instanceof HTMLElement?r=a:(r=document.createDocumentFragment(),_e(a,r)),!r)continue;const o=document.createElement("bim-table-cell");o.append(r),o.column=s,this._columnNames.indexOf(s)===0&&(o.style.marginLeft=`${this.table.noIndentation?0:e+.75}rem`);const h=this._columnNames.indexOf(s);o.setAttribute("data-column-index",String(h)),o.toggleAttribute("data-no-indentation",h===0&&this.table.noIndentation),o.toggleAttribute("data-cell-header",this.isHeader),o.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:o}})),n.push(o)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,C`
      ${!this.isHeader&&this.table.selectableRows?C`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${n}
      <slot></slot>
    `}render(){return C`${this._intersecting?this.compute():C``}`}};Br.styles=z`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      transition: all 0.15s;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      );
    }
  `;let ee=Br;Te([b({type:Boolean,reflect:!0})],ee.prototype,"selected");Te([b({attribute:!1})],ee.prototype,"columns");Te([b({attribute:!1})],ee.prototype,"hiddenColumns");Te([b({attribute:!1})],ee.prototype,"data");Te([b({type:Boolean,attribute:"is-header",reflect:!0})],ee.prototype,"isHeader");Te([Ce()],ee.prototype,"_intersecting");var xc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,ft=(t,e,i,n)=>{for(var s=n>1?void 0:n?Mc(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&xc(e,i,s),s};const qr=class extends L{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(e,i)=>Object.values(i.data).some(n=>String(n).toLowerCase().includes(e.toLowerCase())),this._queryFilterFunction=(e,i)=>{let n=!1;const s=zs(e)??[];for(const a of s){if("queries"in a){n=!1;break}const{condition:r,value:o}=a;let{key:h}=a;if(h.startsWith("[")&&h.endsWith("]")){const l=h.replace("[","").replace("]","");h=l,n=Object.keys(i.data).filter(u=>u.includes(l)).map(u=>Kn(i.data[u],r,o)).some(u=>u)}else n=Kn(i.data[h],r,o);if(!n)break}return n}}set columns(e){const i=[];for(const n of e){const s=typeof n=="string"?{name:n,width:`minmax(${this.minColWidth}, 1fr)`}:n;i.push(s)}this._columns=i,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const e={};for(const i of this.columns){const{name:n}=i;e[n]=String(n)}return e}get value(){return this._filteredData}set queryString(e){this.toggleAttribute("data-processing",!0),this._queryString=e&&e.trim()!==""?e.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(e){this._data=e,this.updateFilteredData(),this.computeMissingColumns(e)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(e=>{setTimeout(()=>{e(this.data)})})}set hiddenColumns(e){this._hiddenColumns=e,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(zs(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(e){let i=!1;for(const n of e){const{children:s,data:a}=n;for(const r in a)this._columns.map(o=>typeof o=="string"?o:o.name).includes(r)||(this._columns.push({name:r,width:`minmax(${this.minColWidth}, 1fr)`}),i=!0);if(s){const r=this.computeMissingColumns(s);r&&!i&&(i=r)}}return i}generateText(e="comma",i=this.value,n="",s=!0){const a=this._textDelimiters[e];let r="";const o=this.columns.map(h=>h.name);if(s){this.indentationInText&&(r+=`Indentation${a}`);const h=`${o.join(a)}
`;r+=h}for(const[h,l]of i.entries()){const{data:u,children:c}=l,d=this.indentationInText?`${n}${h+1}${a}`:"",f=o.map(v=>u[v]??""),m=`${d}${f.join(a)}
`;r+=m,c&&(r+=this.generateText(e,l.children,`${n}${h+1}.`,!1))}return r}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(e){const i={};for(const s of Object.keys(this.dataTransform)){const a=this.columns.find(r=>r.name===s);a&&a.forceDataTransform&&(s in e||(e[s]=""))}const n=e;for(const s in n){const a=this.dataTransform[s];a?i[s]=a(n[s],e):i[s]=e[s]}return i}downloadData(e="BIM Table Data",i="json"){let n=null;if(i==="json"&&(n=new File([JSON.stringify(this.value,void 0,2)],`${e}.json`)),i==="csv"&&(n=new File([this.csv],`${e}.csv`)),i==="tsv"&&(n=new File([this.tsv],`${e}.tsv`)),!n)return;const s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=n.name,s.click(),URL.revokeObjectURL(s.href)}getRowIndentation(e,i=this.value,n=0){for(const s of i){if(s.data===e)return n;if(s.children){const a=this.getRowIndentation(e,s.children,n+1);if(a!==null)return a}}return null}getGroupIndentation(e,i=this.value,n=0){for(const s of i){if(s===e)return n;if(s.children){const a=this.getGroupIndentation(e,s.children,n+1);if(a!==null)return a}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(e=!1){if(this._filteredData.length!==0&&!e||!this.loadFunction)return!1;this.loading=!0;try{const i=await this.loadFunction();return this.data=i,this.loading=!1,this._errorLoading=!1,!0}catch(i){if(this.loading=!1,this._filteredData.length!==0)return!1;const n=this.querySelector("[slot='error-loading']"),s=n==null?void 0:n.querySelector("[data-table-element='error-message']");return i instanceof Error&&s&&i.message.trim()!==""&&(s.textContent=i.message),this._errorLoading=!0,!1}}filter(e,i=this.filterFunction??this._stringFilterFunction,n=this.data){const s=[];for(const a of n)if(i(e,a)){if(this.preserveStructureOnFilter){const r={data:a.data};if(a.children){const o=this.filter(e,i,a.children);o.length&&(r.children=o)}s.push(r)}else if(s.push({data:a.data}),a.children){const r=this.filter(e,i,a.children);s.push(...r)}}else if(a.children){const r=this.filter(e,i,a.children);this.preserveStructureOnFilter&&r.length?s.push({data:a.data,children:r}):s.push(...r)}return s}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return dc();if(this._errorLoading)return C`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return C`<slot name="missing-data"></slot>`;const e=document.createElement("bim-table-row");e.table=this,e.isHeader=!0,e.data=this._headerRowData,e.style.gridArea="Header",e.style.position="sticky",e.style.top="0",e.style.zIndex="5";const i=document.createElement("bim-table-children");return i.table=this,i.data=this.value,i.style.gridArea="Body",i.style.backgroundColor="transparent",C`
      <div class="parent">
        ${this.headersHidden?null:e} ${fc()}
        <div style="overflow-x: hidden; grid-area: Body">${i}</div>
      </div>
    `}};qr.styles=[jt.scrollbar,z`
      :host {
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      :host(:not([data-processing])) .loader {
        display: none;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Processing" auto
          "Body" 1fr
          "Footer" auto;
        overflow: auto;
        height: 100%;
      }

      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(
          --bim-table_header--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `];let ct=qr;ft([Ce()],ct.prototype,"_filteredData",2);ft([b({type:Boolean,attribute:"headers-hidden",reflect:!0})],ct.prototype,"headersHidden",2);ft([b({type:String,attribute:"min-col-width",reflect:!0})],ct.prototype,"minColWidth",2);ft([b({type:Array,attribute:!1})],ct.prototype,"columns",1);ft([b({type:Array,attribute:!1})],ct.prototype,"data",1);ft([b({type:Boolean,reflect:!0})],ct.prototype,"expanded",2);ft([b({type:Boolean,reflect:!0,attribute:"selectable-rows"})],ct.prototype,"selectableRows",2);ft([b({attribute:!1})],ct.prototype,"selection",2);ft([b({type:Boolean,attribute:"no-indentation",reflect:!0})],ct.prototype,"noIndentation",2);ft([b({type:Boolean,reflect:!0})],ct.prototype,"loading",2);ft([Ce()],ct.prototype,"_errorLoading",2);var wc=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,ls=(t,e,i,n)=>{for(var s=n>1?void 0:n?Ec(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&wc(e,i,s),s};const jr=class extends L{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:e}=this;if(e&&this.name===this._defaultName){const i=[...e.children].indexOf(this);this.name=`${this._defaultName}${i}`}}render(){return C` <slot></slot> `}};jr.styles=z`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let at=jr;ls([b({type:String,reflect:!0})],at.prototype,"name",2);ls([b({type:String,reflect:!0})],at.prototype,"label",2);ls([b({type:String,reflect:!0})],at.prototype,"icon",2);ls([b({type:Boolean,reflect:!0})],at.prototype,"hidden",1);var Cc=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,Ne=(t,e,i,n)=>{for(var s=n>1?void 0:n?Sc(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&Cc(e,i,s),s};const Fr=class extends L{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=e=>{const i=e.target;i instanceof at&&!i.hidden&&(i.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=i.name,i.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(e){this._tab=e;const i=[...this.children],n=i.find(s=>s instanceof at&&s.name===e);for(const s of i){if(!(s instanceof at))continue;s.hidden=n!==s;const a=this.getTabSwitcher(s.name);a&&a.toggleAttribute("data-active",!s.hidden)}}get tab(){return this._tab}getTabSwitcher(e){return this._switchers.find(i=>i.getAttribute("data-name")===e)}createSwitchers(){this._switchers=[];for(const e of this.children){if(!(e instanceof at))continue;const i=document.createElement("div");i.addEventListener("click",()=>{this.tab===e.name?this.toggleAttribute("tab",!1):this.tab=e.name}),i.setAttribute("data-name",e.name),i.className="switcher";const n=document.createElement("bim-label");n.textContent=e.label??"",n.icon=e.icon,i.append(n),this._switchers.push(i)}}onSlotChange(e){this.createSwitchers();const i=e.target.assignedElements(),n=i.find(s=>s instanceof at?this.tab?s.name===this.tab:!s.hidden:!1);n&&n instanceof at&&(this.tab=n.name);for(const s of i){if(!(s instanceof at)){s.remove();continue}s.removeEventListener("hiddenchange",this.onTabHiddenChange),n!==s&&(s.hidden=!0),s.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return C`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Fr.styles=[jt.scrollbar,z`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-base);
        display: block;
        overflow: auto;
      }

      .parent {
        display: grid;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: var(--bim-ui_bg-base);
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
        transition: all 0.15s;
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher:hover,
      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
        background-color: var(--bim-ui_main-base);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        grid-area: content;
        overflow: auto;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:not([tab])) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: auto;
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([tab])) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]:not([tab])) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let ie=Fr;Ne([Ce()],ie.prototype,"_switchers",2);Ne([b({type:Boolean,reflect:!0})],ie.prototype,"bottom",2);Ne([b({type:Boolean,attribute:"switchers-hidden",reflect:!0})],ie.prototype,"switchersHidden",2);Ne([b({type:Boolean,reflect:!0})],ie.prototype,"floating",2);Ne([b({type:String,reflect:!0})],ie.prototype,"tab",1);Ne([b({type:Boolean,attribute:"switchers-full",reflect:!0})],ie.prototype,"switchersFull",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yn=t=>t??j;var $c=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,At=(t,e,i,n)=>{for(var s=n>1?void 0:n?Ac(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&$c(e,i,s),s};const Dr=class extends L{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(e){this._inputTypes.includes(e)&&(this._type=e)}get type(){return this._type}get query(){return zs(this.value)}onInputChange(e){e.stopPropagation();const i=e.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=i.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("input");i==null||i.focus()})}render(){return C`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?C` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              placeholder=${Yn(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:C` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Yn(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};Dr.styles=[jt.scrollbar,z`
      :host {
        --bim-input--bgc: var(--bim-ui_bg-contrast-20);
        flex: 1;
        display: block;
      }

      input,
      textarea {
        font-family: inherit;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: var(--bim-ui_size-3xs);
        color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
      }

      input {
        outline: none;
        height: 100%;
        padding: 0 var(--bim-ui_size-3xs); /* Override padding */
        border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      }

      textarea {
        line-height: 1.1rem;
        resize: vertical;
      }

      :host(:focus) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
    `];let Mt=Dr;At([b({type:String,reflect:!0})],Mt.prototype,"icon",2);At([b({type:String,reflect:!0})],Mt.prototype,"label",2);At([b({type:String,reflect:!0})],Mt.prototype,"name",2);At([b({type:String,reflect:!0})],Mt.prototype,"placeholder",2);At([b({type:String,reflect:!0})],Mt.prototype,"value",2);At([b({type:Boolean,reflect:!0})],Mt.prototype,"vertical",2);At([b({type:Number,reflect:!0})],Mt.prototype,"debounce",2);At([b({type:Number,reflect:!0})],Mt.prototype,"rows",2);At([b({type:String,reflect:!0})],Mt.prototype,"type",1);var Oc=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,Hr=(t,e,i,n)=>{for(var s=n>1?void 0:n?kc(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&Oc(e,i,s),s};const Ur=class extends L{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const e=this.children;for(const i of e)this.vertical?i.setAttribute("label-hidden",""):i.removeAttribute("label-hidden")}render(){return C`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Ur.styles=z`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }
  `;let cs=Ur;Hr([b({type:Number,reflect:!0})],cs.prototype,"rows",2);Hr([b({type:Boolean,reflect:!0})],cs.prototype,"vertical",1);var Tc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,us=(t,e,i,n)=>{for(var s=n>1?void 0:n?Nc(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&Tc(e,i,s),s};const Gr=class extends L{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(e){this._labelHidden=e,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const e=this.children;for(const i of e)i instanceof cs&&(i.vertical=this.vertical),i.toggleAttribute("label-hidden",this.vertical)}render(){return C`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?C`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Gr.styles=z`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      display: block;
      flex: 1;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: tb;
    }

    .children {
      display: flex;
      gap: 0.25rem;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;let Pe=Gr;us([b({type:String,reflect:!0})],Pe.prototype,"label",2);us([b({type:String,reflect:!0})],Pe.prototype,"icon",2);us([b({type:Boolean,reflect:!0})],Pe.prototype,"vertical",1);us([b({type:Boolean,attribute:"label-hidden",reflect:!0})],Pe.prototype,"labelHidden",1);var Pc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,an=(t,e,i,n)=>{for(var s=n>1?void 0:n?Ic(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&Pc(e,i,s),s};const Wr=class extends L{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(e){this._vertical=e,this.updateSections()}get vertical(){return this._vertical}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const e=this.children;for(const i of e)i instanceof Pe&&(i.labelHidden=this.vertical&&!gr.config.sectionLabelOnVerticalToolbar,i.vertical=this.vertical)}render(){return C`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Wr.styles=z`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-2xs);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: min-content;
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: min-content;
      border-radius: var(--bim-ui_size-2xs);
      border: 1px solid var(--bim-ui_bg-contrast-20);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `;let ds=Wr;an([b({type:String,reflect:!0})],ds.prototype,"icon",2);an([b({type:Boolean,attribute:"labels-hidden",reflect:!0})],ds.prototype,"labelsHidden",2);an([b({type:Boolean,reflect:!0})],ds.prototype,"vertical",1);var Rc=Object.defineProperty,Lc=(t,e,i,n)=>{for(var s=void 0,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=r(e,i,s)||s);return s&&Rc(e,i,s),s};const Vr=class extends L{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return C`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Vr.styles=z`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let Qr=Vr;Lc([b({type:String,reflect:!0})],Qr.prototype,"name");function zc(t){t("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),t("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),t("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var e=1;e<=60;++e)t("EPSG:"+(32600+e),"+proj=utm +zone="+e+" +datum=WGS84 +units=m"),t("EPSG:"+(32700+e),"+proj=utm +zone="+e+" +south +datum=WGS84 +units=m");t.WGS84=t["EPSG:4326"],t["EPSG:3785"]=t["EPSG:3857"],t.GOOGLE=t["EPSG:3857"],t["EPSG:900913"]=t["EPSG:3857"],t["EPSG:102113"]=t["EPSG:3857"]}var Kt=1,Yt=2,de=3,Bc=4,js=5,Zn=6378137,qc=6356752314e-3,ta=.0066943799901413165,Ge=484813681109536e-20,g=Math.PI/2,jc=.16666666666666666,Fc=.04722222222222222,Dc=.022156084656084655,x=1e-10,U=.017453292519943295,bt=57.29577951308232,I=Math.PI/4,ni=Math.PI*2,G=3.14159265359,Z={};Z.greenwich=0;Z.lisbon=-9.131906111111;Z.paris=2.337229166667;Z.bogota=-74.080916666667;Z.madrid=-3.687938888889;Z.rome=12.452333333333;Z.bern=7.439583333333;Z.jakarta=106.807719444444;Z.ferro=-17.666666666667;Z.brussels=4.367975;Z.stockholm=18.058277777778;Z.athens=23.7163375;Z.oslo=10.722916666667;const Hc={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.01},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var ea=/[\s_\-\/\(\)]/g;function zt(t,e){if(t[e])return t[e];for(var i=Object.keys(t),n=e.toLowerCase().replace(ea,""),s=-1,a,r;++s<i.length;)if(a=i[s],r=a.toLowerCase().replace(ea,""),r===n)return t[a]}function Fs(t){var e={},i=t.split("+").map(function(o){return o.trim()}).filter(function(o){return o}).reduce(function(o,h){var l=h.split("=");return l.push(!0),o[l[0].toLowerCase()]=l[1],o},{}),n,s,a,r={proj:"projName",datum:"datumCode",rf:function(o){e.rf=parseFloat(o)},lat_0:function(o){e.lat0=o*U},lat_1:function(o){e.lat1=o*U},lat_2:function(o){e.lat2=o*U},lat_ts:function(o){e.lat_ts=o*U},lon_0:function(o){e.long0=o*U},lon_1:function(o){e.long1=o*U},lon_2:function(o){e.long2=o*U},alpha:function(o){e.alpha=parseFloat(o)*U},gamma:function(o){e.rectified_grid_angle=parseFloat(o)},lonc:function(o){e.longc=o*U},x_0:function(o){e.x0=parseFloat(o)},y_0:function(o){e.y0=parseFloat(o)},k_0:function(o){e.k0=parseFloat(o)},k:function(o){e.k0=parseFloat(o)},a:function(o){e.a=parseFloat(o)},b:function(o){e.b=parseFloat(o)},r:function(o){e.a=e.b=parseFloat(o)},r_a:function(){e.R_A=!0},zone:function(o){e.zone=parseInt(o,10)},south:function(){e.utmSouth=!0},towgs84:function(o){e.datum_params=o.split(",").map(function(h){return parseFloat(h)})},to_meter:function(o){e.to_meter=parseFloat(o)},units:function(o){e.units=o;var h=zt(Hc,o);h&&(e.to_meter=h.to_meter)},from_greenwich:function(o){e.from_greenwich=o*U},pm:function(o){var h=zt(Z,o);e.from_greenwich=(h||parseFloat(o))*U},nadgrids:function(o){o==="@null"?e.datumCode="none":e.nadgrids=o},axis:function(o){var h="ewnsud";o.length===3&&h.indexOf(o.substr(0,1))!==-1&&h.indexOf(o.substr(1,1))!==-1&&h.indexOf(o.substr(2,1))!==-1&&(e.axis=o)},approx:function(){e.approx=!0}};for(n in i)s=i[n],n in r?(a=r[n],typeof a=="function"?a(s):e[a]=s):e[n]=s;return typeof e.datumCode=="string"&&e.datumCode!=="WGS84"&&(e.datumCode=e.datumCode.toLowerCase()),e}var ai=1,Xr=2,Jr=3,Qi=4,Kr=5,rn=-1,Uc=/\s/,Gc=/[A-Za-z]/,Wc=/[A-Za-z84_]/,fs=/[,\]]/,Yr=/[\d\.E\-\+]/;function Ot(t){if(typeof t!="string")throw new Error("not a string");this.text=t.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=ai}Ot.prototype.readCharicter=function(){var t=this.text[this.place++];if(this.state!==Qi)for(;Uc.test(t);){if(this.place>=this.text.length)return;t=this.text[this.place++]}switch(this.state){case ai:return this.neutral(t);case Xr:return this.keyword(t);case Qi:return this.quoted(t);case Kr:return this.afterquote(t);case Jr:return this.number(t);case rn:return}};Ot.prototype.afterquote=function(t){if(t==='"'){this.word+='"',this.state=Qi;return}if(fs.test(t)){this.word=this.word.trim(),this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in afterquote yet, index '+this.place)};Ot.prototype.afterItem=function(t){if(t===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=ai;return}if(t==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=ai,this.currentObject=this.stack.pop(),this.currentObject||(this.state=rn);return}};Ot.prototype.number=function(t){if(Yr.test(t)){this.word+=t;return}if(fs.test(t)){this.word=parseFloat(this.word),this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in number yet, index '+this.place)};Ot.prototype.quoted=function(t){if(t==='"'){this.state=Kr;return}this.word+=t};Ot.prototype.keyword=function(t){if(Wc.test(t)){this.word+=t;return}if(t==="["){var e=[];e.push(this.word),this.level++,this.root===null?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,this.state=ai;return}if(fs.test(t)){this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in keyword yet, index '+this.place)};Ot.prototype.neutral=function(t){if(Gc.test(t)){this.word=t,this.state=Xr;return}if(t==='"'){this.word="",this.state=Qi;return}if(Yr.test(t)){this.word=t,this.state=Jr;return}if(fs.test(t)){this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in neutral yet, index '+this.place)};Ot.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===rn)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Vc(t){var e=new Ot(t);return e.output()}function xs(t,e,i){Array.isArray(e)&&(i.unshift(e),e=null);var n=e?{}:t,s=i.reduce(function(a,r){return oe(r,a),a},n);e&&(t[e]=s)}function oe(t,e){if(!Array.isArray(t)){e[t]=!0;return}var i=t.shift();if(i==="PARAMETER"&&(i=t.shift()),t.length===1){if(Array.isArray(t[0])){e[i]={},oe(t[0],e[i]);return}e[i]=t[0];return}if(!t.length){e[i]=!0;return}if(i==="TOWGS84"){e[i]=t;return}if(i==="AXIS"){i in e||(e[i]=[]),e[i].push(t);return}Array.isArray(i)||(e[i]={});var n;switch(i){case"UNIT":case"PRIMEM":case"VERT_DATUM":e[i]={name:t[0].toLowerCase(),convert:t[1]},t.length===3&&oe(t[2],e[i]);return;case"SPHEROID":case"ELLIPSOID":e[i]={name:t[0],a:t[1],rf:t[2]},t.length===4&&oe(t[3],e[i]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":t[0]=["name",t[0]],xs(e,i,t);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":t[0]=["name",t[0]],xs(e,i,t),e[i].type=i;return;default:for(n=-1;++n<t.length;)if(!Array.isArray(t[n]))return oe(t,e[i]);return xs(e,i,t)}}var Qc=.017453292519943295,Xc=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function Jc(t,e){var i=e[0],n=e[1];!(i in t)&&n in t&&(t[i]=t[n],e.length===3&&(t[i]=e[2](t[i])))}function pt(t){return t*Qc}function Zr(t){for(var e=Object.keys(t),i=0,n=e.length;i<n;++i){var s=e[i];Xc.indexOf(s)!==-1&&Kc(t[s]),typeof t[s]=="object"&&Zr(t[s])}}function Kc(t){if(t.AUTHORITY){var e=Object.keys(t.AUTHORITY)[0];e&&e in t.AUTHORITY&&(t.title=e+":"+t.AUTHORITY[e])}if(t.type==="GEOGCS"?t.projName="longlat":t.type==="LOCAL_CS"?(t.projName="identity",t.local=!0):typeof t.PROJECTION=="object"?t.projName=Object.keys(t.PROJECTION)[0]:t.projName=t.PROJECTION,t.AXIS){for(var i="",n=0,s=t.AXIS.length;n<s;++n){var a=[t.AXIS[n][0].toLowerCase(),t.AXIS[n][1].toLowerCase()];a[0].indexOf("north")!==-1||(a[0]==="y"||a[0]==="lat")&&a[1]==="north"?i+="n":a[0].indexOf("south")!==-1||(a[0]==="y"||a[0]==="lat")&&a[1]==="south"?i+="s":a[0].indexOf("east")!==-1||(a[0]==="x"||a[0]==="lon")&&a[1]==="east"?i+="e":(a[0].indexOf("west")!==-1||(a[0]==="x"||a[0]==="lon")&&a[1]==="west")&&(i+="w")}i.length===2&&(i+="u"),i.length===3&&(t.axis=i)}t.UNIT&&(t.units=t.UNIT.name.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.UNIT.convert&&(t.type==="GEOGCS"?t.DATUM&&t.DATUM.SPHEROID&&(t.to_meter=t.UNIT.convert*t.DATUM.SPHEROID.a):t.to_meter=t.UNIT.convert));var r=t.GEOGCS;t.type==="GEOGCS"&&(r=t),r&&(r.DATUM?t.datumCode=r.DATUM.name.toLowerCase():t.datumCode=r.name.toLowerCase(),t.datumCode.slice(0,2)==="d_"&&(t.datumCode=t.datumCode.slice(2)),t.datumCode==="new_zealand_1949"&&(t.datumCode="nzgd49"),(t.datumCode==="wgs_1984"||t.datumCode==="world_geodetic_system_1984")&&(t.PROJECTION==="Mercator_Auxiliary_Sphere"&&(t.sphere=!0),t.datumCode="wgs84"),t.datumCode==="belge_1972"&&(t.datumCode="rnb72"),r.DATUM&&r.DATUM.SPHEROID&&(t.ellps=r.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),t.ellps.toLowerCase().slice(0,13)==="international"&&(t.ellps="intl"),t.a=r.DATUM.SPHEROID.a,t.rf=parseFloat(r.DATUM.SPHEROID.rf,10)),r.DATUM&&r.DATUM.TOWGS84&&(t.datum_params=r.DATUM.TOWGS84),~t.datumCode.indexOf("osgb_1936")&&(t.datumCode="osgb36"),~t.datumCode.indexOf("osni_1952")&&(t.datumCode="osni52"),(~t.datumCode.indexOf("tm65")||~t.datumCode.indexOf("geodetic_datum_of_1965"))&&(t.datumCode="ire65"),t.datumCode==="ch1903+"&&(t.datumCode="ch1903"),~t.datumCode.indexOf("israel")&&(t.datumCode="isr93")),t.b&&!isFinite(t.b)&&(t.b=t.a);function o(u){var c=t.to_meter||1;return u*c}var h=function(u){return Jc(t,u)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",pt],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",pt],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",pt],["lat0","latitude_of_origin",pt],["lat0","standard_parallel_1",pt],["lat1","standard_parallel_1",pt],["lat2","standard_parallel_2",pt],["azimuth","Azimuth"],["alpha","azimuth",pt],["srsCode","name"]];l.forEach(h),!t.long0&&t.longc&&(t.projName==="Albers_Conic_Equal_Area"||t.projName==="Lambert_Azimuthal_Equal_Area")&&(t.long0=t.longc),!t.lat_ts&&t.lat1&&(t.projName==="Stereographic_South_Pole"||t.projName==="Polar Stereographic (variant B)")?(t.lat0=pt(t.lat1>0?90:-90),t.lat_ts=t.lat1):!t.lat_ts&&t.lat0&&t.projName==="Polar_Stereographic"&&(t.lat_ts=t.lat0,t.lat0=pt(t.lat0>0?90:-90))}function to(t){var e=Vc(t),i=e[0],n={};return oe(e,n),Zr(n),n[i]}function X(t){var e=this;if(arguments.length===2){var i=arguments[1];typeof i=="string"?i.charAt(0)==="+"?X[t]=Fs(arguments[1]):X[t]=to(arguments[1]):X[t]=i}else if(arguments.length===1){if(Array.isArray(t))return t.map(function(n){Array.isArray(n)?X.apply(e,n):X(n)});if(typeof t=="string"){if(t in X)return X[t]}else"EPSG"in t?X["EPSG:"+t.EPSG]=t:"ESRI"in t?X["ESRI:"+t.ESRI]=t:"IAU2000"in t?X["IAU2000:"+t.IAU2000]=t:console.log(t);return}}zc(X);function Yc(t){return typeof t=="string"}function Zc(t){return t in X}var tu=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function eu(t){return tu.some(function(e){return t.indexOf(e)>-1})}var iu=["3857","900913","3785","102113"];function su(t){var e=zt(t,"authority");if(e){var i=zt(e,"epsg");return i&&iu.indexOf(i)>-1}}function nu(t){var e=zt(t,"extension");if(e)return zt(e,"proj4")}function au(t){return t[0]==="+"}function ru(t){if(Yc(t)){if(Zc(t))return X[t];if(eu(t)){var e=to(t);if(su(e))return X["EPSG:3857"];var i=nu(e);return i?Fs(i):e}if(au(t))return Fs(t)}else return t}function ia(t,e){t=t||{};var i,n;if(!e)return t;for(n in e)i=e[n],i!==void 0&&(t[n]=i);return t}function xt(t,e,i){var n=t*e;return i/Math.sqrt(1-n*n)}function xi(t){return t<0?-1:1}function M(t){return Math.abs(t)<=G?t:t-xi(t)*ni}function ut(t,e,i){var n=t*i,s=.5*t;return n=Math.pow((1-n)/(1+n),s),Math.tan(.5*(g-e))/n}function ri(t,e){for(var i=.5*t,n,s,a=g-2*Math.atan(e),r=0;r<=15;r++)if(n=t*Math.sin(a),s=g-2*Math.atan(e*Math.pow((1-n)/(1+n),i))-a,a+=s,Math.abs(s)<=1e-10)return a;return-9999}function ou(){var t=this.b/this.a;this.es=1-t*t,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=xt(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function hu(t){var e=t.x,i=t.y;if(i*bt>90&&i*bt<-90&&e*bt>180&&e*bt<-180)return null;var n,s;if(Math.abs(Math.abs(i)-g)<=x)return null;if(this.sphere)n=this.x0+this.a*this.k0*M(e-this.long0),s=this.y0+this.a*this.k0*Math.log(Math.tan(I+.5*i));else{var a=Math.sin(i),r=ut(this.e,i,a);n=this.x0+this.a*this.k0*M(e-this.long0),s=this.y0-this.a*this.k0*Math.log(r)}return t.x=n,t.y=s,t}function lu(t){var e=t.x-this.x0,i=t.y-this.y0,n,s;if(this.sphere)s=g-2*Math.atan(Math.exp(-i/(this.a*this.k0)));else{var a=Math.exp(-i/(this.a*this.k0));if(s=ri(this.e,a),s===-9999)return null}return n=M(this.long0+e/(this.a*this.k0)),t.x=n,t.y=s,t}var cu=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const uu={init:ou,forward:hu,inverse:lu,names:cu};function du(){}function sa(t){return t}var fu=["longlat","identity"];const mu={init:du,forward:sa,inverse:sa,names:fu};var pu=[uu,mu],Pi={},Xi=[];function eo(t,e){var i=Xi.length;return t.names?(Xi[i]=t,t.names.forEach(function(n){Pi[n.toLowerCase()]=i}),this):(console.log(e),!0)}function vu(t){if(!t)return!1;var e=t.toLowerCase();if(typeof Pi[e]<"u"&&Xi[Pi[e]])return Xi[Pi[e]]}function bu(){pu.forEach(eo)}const gu={start:bu,add:eo,get:vu};var A={};A.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};A.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};A.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};A.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};A.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};A.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};A.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};A.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};A.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};A.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};A.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};A.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};A.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};A.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};A.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};A.clrk80ign={a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"};A.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};A.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};A.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};A.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};A.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};A.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};A.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};A.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};A.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};A.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};A.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};A.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};A.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};A.hough={a:6378270,rf:297,ellipseName:"Hough"};A.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};A.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};A.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};A.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};A.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};A.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};A.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};A.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};A.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};A.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};A.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};A.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var yu=A.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};A.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function _u(t,e,i,n){var s=t*t,a=e*e,r=(s-a)/s,o=0;n?(t*=1-r*(jc+r*(Fc+r*Dc)),s=t*t,r=0):o=Math.sqrt(r);var h=(s-a)/a;return{es:r,e:o,ep2:h}}function xu(t,e,i,n,s){if(!t){var a=zt(A,n);a||(a=yu),t=a.a,e=a.b,i=a.rf}return i&&!e&&(e=(1-1/i)*t),(i===0||Math.abs(t-e)<x)&&(s=!0,e=t),{a:t,b:e,rf:i,sphere:s}}var Ii={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"}};for(var Mu in Ii){var na=Ii[Mu];Ii[na.datumName]=na}function wu(t,e,i,n,s,a,r){var o={};return t===void 0||t==="none"?o.datum_type=js:o.datum_type=Bc,e&&(o.datum_params=e.map(parseFloat),(o.datum_params[0]!==0||o.datum_params[1]!==0||o.datum_params[2]!==0)&&(o.datum_type=Kt),o.datum_params.length>3&&(o.datum_params[3]!==0||o.datum_params[4]!==0||o.datum_params[5]!==0||o.datum_params[6]!==0)&&(o.datum_type=Yt,o.datum_params[3]*=Ge,o.datum_params[4]*=Ge,o.datum_params[5]*=Ge,o.datum_params[6]=o.datum_params[6]/1e6+1)),r&&(o.datum_type=de,o.grids=r),o.a=i,o.b=n,o.es=s,o.ep2=a,o}var io={};function Eu(t,e){var i=new DataView(e),n=$u(i),s=Au(i,n),a=Ou(i,s,n),r={header:s,subgrids:a};return io[t]=r,r}function Cu(t){if(t===void 0)return null;var e=t.split(",");return e.map(Su)}function Su(t){if(t.length===0)return null;var e=t[0]==="@";return e&&(t=t.slice(1)),t==="null"?{name:"null",mandatory:!e,grid:null,isNull:!0}:{name:t,mandatory:!e,grid:io[t]||null,isNull:!1}}function he(t){return t/3600*Math.PI/180}function $u(t){var e=t.getInt32(8,!1);return e===11?!1:(e=t.getInt32(8,!0),e!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function Au(t,e){return{nFields:t.getInt32(8,e),nSubgridFields:t.getInt32(24,e),nSubgrids:t.getInt32(40,e),shiftType:Ds(t,56,64).trim(),fromSemiMajorAxis:t.getFloat64(120,e),fromSemiMinorAxis:t.getFloat64(136,e),toSemiMajorAxis:t.getFloat64(152,e),toSemiMinorAxis:t.getFloat64(168,e)}}function Ds(t,e,i){return String.fromCharCode.apply(null,new Uint8Array(t.buffer.slice(e,i)))}function Ou(t,e,i){for(var n=176,s=[],a=0;a<e.nSubgrids;a++){var r=Tu(t,n,i),o=Nu(t,n,r,i),h=Math.round(1+(r.upperLongitude-r.lowerLongitude)/r.longitudeInterval),l=Math.round(1+(r.upperLatitude-r.lowerLatitude)/r.latitudeInterval);s.push({ll:[he(r.lowerLongitude),he(r.lowerLatitude)],del:[he(r.longitudeInterval),he(r.latitudeInterval)],lim:[h,l],count:r.gridNodeCount,cvs:ku(o)}),n+=176+r.gridNodeCount*16}return s}function ku(t){return t.map(function(e){return[he(e.longitudeShift),he(e.latitudeShift)]})}function Tu(t,e,i){return{name:Ds(t,e+8,e+16).trim(),parent:Ds(t,e+24,e+24+8).trim(),lowerLatitude:t.getFloat64(e+72,i),upperLatitude:t.getFloat64(e+88,i),lowerLongitude:t.getFloat64(e+104,i),upperLongitude:t.getFloat64(e+120,i),latitudeInterval:t.getFloat64(e+136,i),longitudeInterval:t.getFloat64(e+152,i),gridNodeCount:t.getInt32(e+168,i)}}function Nu(t,e,i,n){for(var s=e+176,a=16,r=[],o=0;o<i.gridNodeCount;o++){var h={latitudeShift:t.getFloat32(s+o*a,n),longitudeShift:t.getFloat32(s+o*a+4,n),latitudeAccuracy:t.getFloat32(s+o*a+8,n),longitudeAccuracy:t.getFloat32(s+o*a+12,n)};r.push(h)}return r}function gt(t,e){if(!(this instanceof gt))return new gt(t);e=e||function(l){if(l)throw l};var i=ru(t);if(typeof i!="object"){e("Could not parse to valid json: "+t);return}var n=gt.projections.get(i.projName);if(!n){e("Could not get projection name from: "+t);return}if(i.datumCode&&i.datumCode!=="none"){var s=zt(Ii,i.datumCode);s&&(i.datum_params=i.datum_params||(s.towgs84?s.towgs84.split(","):null),i.ellps=s.ellipse,i.datumName=s.datumName?s.datumName:i.datumCode)}i.k0=i.k0||1,i.axis=i.axis||"enu",i.ellps=i.ellps||"wgs84",i.lat1=i.lat1||i.lat0;var a=xu(i.a,i.b,i.rf,i.ellps,i.sphere),r=_u(a.a,a.b,a.rf,i.R_A),o=Cu(i.nadgrids),h=i.datum||wu(i.datumCode,i.datum_params,a.a,a.b,r.es,r.ep2,o);ia(this,i),ia(this,n),this.a=a.a,this.b=a.b,this.rf=a.rf,this.sphere=a.sphere,this.es=r.es,this.e=r.e,this.ep2=r.ep2,this.datum=h,this.init(),e(null,this)}gt.projections=gu;gt.projections.start();function Pu(t,e){return t.datum_type!==e.datum_type||t.a!==e.a||Math.abs(t.es-e.es)>5e-11?!1:t.datum_type===Kt?t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]:t.datum_type===Yt?t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]&&t.datum_params[3]===e.datum_params[3]&&t.datum_params[4]===e.datum_params[4]&&t.datum_params[5]===e.datum_params[5]&&t.datum_params[6]===e.datum_params[6]:!0}function so(t,e,i){var n=t.x,s=t.y,a=t.z?t.z:0,r,o,h,l;if(s<-g&&s>-1.001*g)s=-g;else if(s>g&&s<1.001*g)s=g;else{if(s<-g)return{x:-1/0,y:-1/0,z:t.z};if(s>g)return{x:1/0,y:1/0,z:t.z}}return n>Math.PI&&(n-=2*Math.PI),o=Math.sin(s),l=Math.cos(s),h=o*o,r=i/Math.sqrt(1-e*h),{x:(r+a)*l*Math.cos(n),y:(r+a)*l*Math.sin(n),z:(r*(1-e)+a)*o}}function no(t,e,i,n){var s=1e-12,a=s*s,r=30,o,h,l,u,c,d,f,m,v,p,y,_,w,S=t.x,$=t.y,E=t.z?t.z:0,T,O,P;if(o=Math.sqrt(S*S+$*$),h=Math.sqrt(S*S+$*$+E*E),o/i<s){if(T=0,h/i<s)return O=g,P=-n,{x:t.x,y:t.y,z:t.z}}else T=Math.atan2($,S);l=E/h,u=o/h,c=1/Math.sqrt(1-e*(2-e)*u*u),m=u*(1-e)*c,v=l*c,w=0;do w++,f=i/Math.sqrt(1-e*v*v),P=o*m+E*v-f*(1-e*v*v),d=e*f/(f+P),c=1/Math.sqrt(1-d*(2-d)*u*u),p=u*(1-d)*c,y=l*c,_=y*m-p*v,m=p,v=y;while(_*_>a&&w<r);return O=Math.atan(y/Math.abs(p)),{x:T,y:O,z:P}}function Iu(t,e,i){if(e===Kt)return{x:t.x+i[0],y:t.y+i[1],z:t.z+i[2]};if(e===Yt){var n=i[0],s=i[1],a=i[2],r=i[3],o=i[4],h=i[5],l=i[6];return{x:l*(t.x-h*t.y+o*t.z)+n,y:l*(h*t.x+t.y-r*t.z)+s,z:l*(-o*t.x+r*t.y+t.z)+a}}}function Ru(t,e,i){if(e===Kt)return{x:t.x-i[0],y:t.y-i[1],z:t.z-i[2]};if(e===Yt){var n=i[0],s=i[1],a=i[2],r=i[3],o=i[4],h=i[5],l=i[6],u=(t.x-n)/l,c=(t.y-s)/l,d=(t.z-a)/l;return{x:u+h*c-o*d,y:-h*u+c+r*d,z:o*u-r*c+d}}}function Ai(t){return t===Kt||t===Yt}function Lu(t,e,i){if(Pu(t,e)||t.datum_type===js||e.datum_type===js)return i;var n=t.a,s=t.es;if(t.datum_type===de){var a=aa(t,!1,i);if(a!==0)return;n=Zn,s=ta}var r=e.a,o=e.b,h=e.es;if(e.datum_type===de&&(r=Zn,o=qc,h=ta),s===h&&n===r&&!Ai(t.datum_type)&&!Ai(e.datum_type))return i;if(i=so(i,s,n),Ai(t.datum_type)&&(i=Iu(i,t.datum_type,t.datum_params)),Ai(e.datum_type)&&(i=Ru(i,e.datum_type,e.datum_params)),i=no(i,h,r,o),e.datum_type===de){var l=aa(e,!0,i);if(l!==0)return}return i}function aa(t,e,i){if(t.grids===null||t.grids.length===0)return console.log("Grid shift grids not found"),-1;var n={x:-i.x,y:i.y},s={x:Number.NaN,y:Number.NaN},a=[];t:for(var r=0;r<t.grids.length;r++){var o=t.grids[r];if(a.push(o.name),o.isNull){s=n;break}if(o.mandatory,o.grid===null){if(o.mandatory)return console.log("Unable to find mandatory grid '"+o.name+"'"),-1;continue}for(var h=o.grid.subgrids,l=0,u=h.length;l<u;l++){var c=h[l],d=(Math.abs(c.del[1])+Math.abs(c.del[0]))/1e4,f=c.ll[0]-d,m=c.ll[1]-d,v=c.ll[0]+(c.lim[0]-1)*c.del[0]+d,p=c.ll[1]+(c.lim[1]-1)*c.del[1]+d;if(!(m>n.y||f>n.x||p<n.y||v<n.x)&&(s=zu(n,e,c),!isNaN(s.x)))break t}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-n.x*bt+" "+n.y*bt+" tried: '"+a+"'"),-1):(i.x=-s.x,i.y=s.y,0)}function zu(t,e,i){var n={x:Number.NaN,y:Number.NaN};if(isNaN(t.x))return n;var s={x:t.x,y:t.y};s.x-=i.ll[0],s.y-=i.ll[1],s.x=M(s.x-Math.PI)+Math.PI;var a=ra(s,i);if(e){if(isNaN(a.x))return n;a.x=s.x-a.x,a.y=s.y-a.y;var r=9,o=1e-12,h,l;do{if(l=ra(a,i),isNaN(l.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}h={x:s.x-(l.x+a.x),y:s.y-(l.y+a.y)},a.x+=h.x,a.y+=h.y}while(r--&&Math.abs(h.x)>o&&Math.abs(h.y)>o);if(r<0)return console.log("Inverse grid shift iterator failed to converge."),n;n.x=M(a.x+i.ll[0]),n.y=a.y+i.ll[1]}else isNaN(a.x)||(n.x=t.x+a.x,n.y=t.y+a.y);return n}function ra(t,e){var i={x:t.x/e.del[0],y:t.y/e.del[1]},n={x:Math.floor(i.x),y:Math.floor(i.y)},s={x:i.x-1*n.x,y:i.y-1*n.y},a={x:Number.NaN,y:Number.NaN},r;if(n.x<0||n.x>=e.lim[0]||n.y<0||n.y>=e.lim[1])return a;r=n.y*e.lim[0]+n.x;var o={x:e.cvs[r][0],y:e.cvs[r][1]};r++;var h={x:e.cvs[r][0],y:e.cvs[r][1]};r+=e.lim[0];var l={x:e.cvs[r][0],y:e.cvs[r][1]};r--;var u={x:e.cvs[r][0],y:e.cvs[r][1]},c=s.x*s.y,d=s.x*(1-s.y),f=(1-s.x)*(1-s.y),m=(1-s.x)*s.y;return a.x=f*o.x+d*h.x+m*u.x+c*l.x,a.y=f*o.y+d*h.y+m*u.y+c*l.y,a}function oa(t,e,i){var n=i.x,s=i.y,a=i.z||0,r,o,h,l={};for(h=0;h<3;h++)if(!(e&&h===2&&i.z===void 0))switch(h===0?(r=n,"ew".indexOf(t.axis[h])!==-1?o="x":o="y"):h===1?(r=s,"ns".indexOf(t.axis[h])!==-1?o="y":o="x"):(r=a,o="z"),t.axis[h]){case"e":l[o]=r;break;case"w":l[o]=-r;break;case"n":l[o]=r;break;case"s":l[o]=-r;break;case"u":i[o]!==void 0&&(l.z=r);break;case"d":i[o]!==void 0&&(l.z=-r);break;default:return null}return l}function ao(t){var e={x:t[0],y:t[1]};return t.length>2&&(e.z=t[2]),t.length>3&&(e.m=t[3]),e}function Bu(t){ha(t.x),ha(t.y)}function ha(t){if(typeof Number.isFinite=="function"){if(Number.isFinite(t))return;throw new TypeError("coordinates must be finite numbers")}if(typeof t!="number"||t!==t||!isFinite(t))throw new TypeError("coordinates must be finite numbers")}function qu(t,e){return(t.datum.datum_type===Kt||t.datum.datum_type===Yt||t.datum.datum_type===de)&&e.datumCode!=="WGS84"||(e.datum.datum_type===Kt||e.datum.datum_type===Yt||e.datum.datum_type===de)&&t.datumCode!=="WGS84"}function Ji(t,e,i,n){var s;Array.isArray(i)?i=ao(i):i={x:i.x,y:i.y,z:i.z,m:i.m};var a=i.z!==void 0;if(Bu(i),t.datum&&e.datum&&qu(t,e)&&(s=new gt("WGS84"),i=Ji(t,s,i,n),t=s),n&&t.axis!=="enu"&&(i=oa(t,!1,i)),t.projName==="longlat")i={x:i.x*U,y:i.y*U,z:i.z||0};else if(t.to_meter&&(i={x:i.x*t.to_meter,y:i.y*t.to_meter,z:i.z||0}),i=t.inverse(i),!i)return;if(t.from_greenwich&&(i.x+=t.from_greenwich),i=Lu(t.datum,e.datum,i),!!i)return e.from_greenwich&&(i={x:i.x-e.from_greenwich,y:i.y,z:i.z||0}),e.projName==="longlat"?i={x:i.x*bt,y:i.y*bt,z:i.z||0}:(i=e.forward(i),e.to_meter&&(i={x:i.x/e.to_meter,y:i.y/e.to_meter,z:i.z||0})),n&&e.axis!=="enu"?oa(e,!0,i):(i&&!a&&delete i.z,i)}var la=gt("WGS84");function Ms(t,e,i,n){var s,a,r;return Array.isArray(i)?(s=Ji(t,e,i,n)||{x:NaN,y:NaN},i.length>2?typeof t.name<"u"&&t.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(i.slice(3)):[s.x,s.y,i[2]].concat(i.slice(3)):[s.x,s.y].concat(i.slice(2)):[s.x,s.y]):(a=Ji(t,e,i,n),r=Object.keys(i),r.length===2||r.forEach(function(o){if(typeof t.name<"u"&&t.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"){if(o==="x"||o==="y"||o==="z")return}else if(o==="x"||o==="y")return;a[o]=i[o]}),a)}function ca(t){return t instanceof gt?t:t.oProj?t.oProj:gt(t)}function ot(t,e,i){t=ca(t);var n=!1,s;return typeof e>"u"?(e=t,t=la,n=!0):(typeof e.x<"u"||Array.isArray(e))&&(i=e,e=t,t=la,n=!0),e=ca(e),i?Ms(t,e,i):(s={forward:function(a,r){return Ms(t,e,a,r)},inverse:function(a,r){return Ms(e,t,a,r)}},n&&(s.oProj=e),s)}var ua=6,ro="AJSAJS",oo="AFAFAF",le=65,K=73,nt=79,Be=86,qe=90;const ju={forward:ho,inverse:Fu,toPoint:lo};function ho(t,e){return e=e||5,Uu(Du({lat:t[1],lon:t[0]}),e)}function Fu(t){var e=on(uo(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat,e.lon,e.lat]:[e.left,e.bottom,e.right,e.top]}function lo(t){var e=on(uo(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat]:[(e.left+e.right)/2,(e.top+e.bottom)/2]}function ws(t){return t*(Math.PI/180)}function da(t){return 180*(t/Math.PI)}function Du(t){var e=t.lat,i=t.lon,n=6378137,s=.00669438,a=.9996,r,o,h,l,u,c,d,f=ws(e),m=ws(i),v,p;p=Math.floor((i+180)/6)+1,i===180&&(p=60),e>=56&&e<64&&i>=3&&i<12&&(p=32),e>=72&&e<84&&(i>=0&&i<9?p=31:i>=9&&i<21?p=33:i>=21&&i<33?p=35:i>=33&&i<42&&(p=37)),r=(p-1)*6-180+3,v=ws(r),o=s/(1-s),h=n/Math.sqrt(1-s*Math.sin(f)*Math.sin(f)),l=Math.tan(f)*Math.tan(f),u=o*Math.cos(f)*Math.cos(f),c=Math.cos(f)*(m-v),d=n*((1-s/4-3*s*s/64-5*s*s*s/256)*f-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*f)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*f)-35*s*s*s/3072*Math.sin(6*f));var y=a*h*(c+(1-l+u)*c*c*c/6+(5-18*l+l*l+72*u-58*o)*c*c*c*c*c/120)+5e5,_=a*(d+h*Math.tan(f)*(c*c/2+(5-l+9*u+4*u*u)*c*c*c*c/24+(61-58*l+l*l+600*u-330*o)*c*c*c*c*c*c/720));return e<0&&(_+=1e7),{northing:Math.round(_),easting:Math.round(y),zoneNumber:p,zoneLetter:Hu(e)}}function on(t){var e=t.northing,i=t.easting,n=t.zoneLetter,s=t.zoneNumber;if(s<0||s>60)return null;var a=.9996,r=6378137,o=.00669438,h,l=(1-Math.sqrt(1-o))/(1+Math.sqrt(1-o)),u,c,d,f,m,v,p,y,_,w=i-5e5,S=e;n<"N"&&(S-=1e7),p=(s-1)*6-180+3,h=o/(1-o),v=S/a,y=v/(r*(1-o/4-3*o*o/64-5*o*o*o/256)),_=y+(3*l/2-27*l*l*l/32)*Math.sin(2*y)+(21*l*l/16-55*l*l*l*l/32)*Math.sin(4*y)+151*l*l*l/96*Math.sin(6*y),u=r/Math.sqrt(1-o*Math.sin(_)*Math.sin(_)),c=Math.tan(_)*Math.tan(_),d=h*Math.cos(_)*Math.cos(_),f=r*(1-o)/Math.pow(1-o*Math.sin(_)*Math.sin(_),1.5),m=w/(u*a);var $=_-u*Math.tan(_)/f*(m*m/2-(5+3*c+10*d-4*d*d-9*h)*m*m*m*m/24+(61+90*c+298*d+45*c*c-252*h-3*d*d)*m*m*m*m*m*m/720);$=da($);var E=(m-(1+2*c+d)*m*m*m/6+(5-2*d+28*c-3*d*d+8*h+24*c*c)*m*m*m*m*m/120)/Math.cos(_);E=p+da(E);var T;if(t.accuracy){var O=on({northing:t.northing+t.accuracy,easting:t.easting+t.accuracy,zoneLetter:t.zoneLetter,zoneNumber:t.zoneNumber});T={top:O.lat,right:O.lon,bottom:$,left:E}}else T={lat:$,lon:E};return T}function Hu(t){var e="Z";return 84>=t&&t>=72?e="X":72>t&&t>=64?e="W":64>t&&t>=56?e="V":56>t&&t>=48?e="U":48>t&&t>=40?e="T":40>t&&t>=32?e="S":32>t&&t>=24?e="R":24>t&&t>=16?e="Q":16>t&&t>=8?e="P":8>t&&t>=0?e="N":0>t&&t>=-8?e="M":-8>t&&t>=-16?e="L":-16>t&&t>=-24?e="K":-24>t&&t>=-32?e="J":-32>t&&t>=-40?e="H":-40>t&&t>=-48?e="G":-48>t&&t>=-56?e="F":-56>t&&t>=-64?e="E":-64>t&&t>=-72?e="D":-72>t&&t>=-80&&(e="C"),e}function Uu(t,e){var i="00000"+t.easting,n="00000"+t.northing;return t.zoneNumber+t.zoneLetter+Gu(t.easting,t.northing,t.zoneNumber)+i.substr(i.length-5,e)+n.substr(n.length-5,e)}function Gu(t,e,i){var n=co(i),s=Math.floor(t/1e5),a=Math.floor(e/1e5)%20;return Wu(s,a,n)}function co(t){var e=t%ua;return e===0&&(e=ua),e}function Wu(t,e,i){var n=i-1,s=ro.charCodeAt(n),a=oo.charCodeAt(n),r=s+t-1,o=a+e,h=!1;r>qe&&(r=r-qe+le-1,h=!0),(r===K||s<K&&r>K||(r>K||s<K)&&h)&&r++,(r===nt||s<nt&&r>nt||(r>nt||s<nt)&&h)&&(r++,r===K&&r++),r>qe&&(r=r-qe+le-1),o>Be?(o=o-Be+le-1,h=!0):h=!1,(o===K||a<K&&o>K||(o>K||a<K)&&h)&&o++,(o===nt||a<nt&&o>nt||(o>nt||a<nt)&&h)&&(o++,o===K&&o++),o>Be&&(o=o-Be+le-1);var l=String.fromCharCode(r)+String.fromCharCode(o);return l}function uo(t){if(t&&t.length===0)throw"MGRSPoint coverting from nothing";for(var e=t.length,i=null,n="",s,a=0;!/[A-Z]/.test(s=t.charAt(a));){if(a>=2)throw"MGRSPoint bad conversion from: "+t;n+=s,a++}var r=parseInt(n,10);if(a===0||a+3>e)throw"MGRSPoint bad conversion from: "+t;var o=t.charAt(a++);if(o<="A"||o==="B"||o==="Y"||o>="Z"||o==="I"||o==="O")throw"MGRSPoint zone letter "+o+" not handled: "+t;i=t.substring(a,a+=2);for(var h=co(r),l=Vu(i.charAt(0),h),u=Qu(i.charAt(1),h);u<Xu(o);)u+=2e6;var c=e-a;if(c%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+t;var d=c/2,f=0,m=0,v,p,y,_,w;return d>0&&(v=1e5/Math.pow(10,d),p=t.substring(a,a+d),f=parseFloat(p)*v,y=t.substring(a+d),m=parseFloat(y)*v),_=f+l,w=m+u,{easting:_,northing:w,zoneLetter:o,zoneNumber:r,accuracy:v}}function Vu(t,e){for(var i=ro.charCodeAt(e-1),n=1e5,s=!1;i!==t.charCodeAt(0);){if(i++,i===K&&i++,i===nt&&i++,i>qe){if(s)throw"Bad character: "+t;i=le,s=!0}n+=1e5}return n}function Qu(t,e){if(t>"V")throw"MGRSPoint given invalid Northing "+t;for(var i=oo.charCodeAt(e-1),n=0,s=!1;i!==t.charCodeAt(0);){if(i++,i===K&&i++,i===nt&&i++,i>Be){if(s)throw"Bad character: "+t;i=le,s=!0}n+=1e5}return n}function Xu(t){var e;switch(t){case"C":e=11e5;break;case"D":e=2e6;break;case"E":e=28e5;break;case"F":e=37e5;break;case"G":e=46e5;break;case"H":e=55e5;break;case"J":e=64e5;break;case"K":e=73e5;break;case"L":e=82e5;break;case"M":e=91e5;break;case"N":e=0;break;case"P":e=8e5;break;case"Q":e=17e5;break;case"R":e=26e5;break;case"S":e=35e5;break;case"T":e=44e5;break;case"U":e=53e5;break;case"V":e=62e5;break;case"W":e=7e6;break;case"X":e=79e5;break;default:e=-1}if(e>=0)return e;throw"Invalid zone letter: "+t}function we(t,e,i){if(!(this instanceof we))return new we(t,e,i);if(Array.isArray(t))this.x=t[0],this.y=t[1],this.z=t[2]||0;else if(typeof t=="object")this.x=t.x,this.y=t.y,this.z=t.z||0;else if(typeof t=="string"&&typeof e>"u"){var n=t.split(",");this.x=parseFloat(n[0],10),this.y=parseFloat(n[1],10),this.z=parseFloat(n[2],10)||0}else this.x=t,this.y=e,this.z=i||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}we.fromMGRS=function(t){return new we(lo(t))};we.prototype.toMGRS=function(t){return ho([this.x,this.y],t)};var Ju=1,Ku=.25,fa=.046875,ma=.01953125,pa=.01068115234375,Yu=.75,Zu=.46875,td=.013020833333333334,ed=.007120768229166667,id=.3645833333333333,sd=.005696614583333333,nd=.3076171875;function hn(t){var e=[];e[0]=Ju-t*(Ku+t*(fa+t*(ma+t*pa))),e[1]=t*(Yu-t*(fa+t*(ma+t*pa)));var i=t*t;return e[2]=i*(Zu-t*(td+t*ed)),i*=t,e[3]=i*(id-t*sd),e[4]=i*t*nd,e}function Ie(t,e,i,n){return i*=e,e*=e,n[0]*t-i*(n[1]+e*(n[2]+e*(n[3]+e*n[4])))}var ad=20;function ln(t,e,i){for(var n=1/(1-e),s=t,a=ad;a;--a){var r=Math.sin(s),o=1-e*r*r;if(o=(Ie(s,r,Math.cos(s),i)-t)*(o*Math.sqrt(o))*n,s-=o,Math.abs(o)<x)return s}return s}function rd(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=hn(this.es),this.ml0=Ie(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function od(t){var e=t.x,i=t.y,n=M(e-this.long0),s,a,r,o=Math.sin(i),h=Math.cos(i);if(this.es){var u=h*n,c=Math.pow(u,2),d=this.ep2*Math.pow(h,2),f=Math.pow(d,2),m=Math.abs(h)>x?Math.tan(i):0,v=Math.pow(m,2),p=Math.pow(v,2);s=1-this.es*Math.pow(o,2),u=u/Math.sqrt(s);var y=Ie(i,o,h,this.en);a=this.a*(this.k0*u*(1+c/6*(1-v+d+c/20*(5-18*v+p+14*d-58*v*d+c/42*(61+179*p-p*v-479*v)))))+this.x0,r=this.a*(this.k0*(y-this.ml0+o*n*u/2*(1+c/12*(5-v+9*d+4*f+c/30*(61+p-58*v+270*d-330*v*d+c/56*(1385+543*p-p*v-3111*v))))))+this.y0}else{var l=h*Math.sin(n);if(Math.abs(Math.abs(l)-1)<x)return 93;if(a=.5*this.a*this.k0*Math.log((1+l)/(1-l))+this.x0,r=h*Math.cos(n)/Math.sqrt(1-Math.pow(l,2)),l=Math.abs(r),l>=1){if(l-1>x)return 93;r=0}else r=Math.acos(r);i<0&&(r=-r),r=this.a*this.k0*(r-this.lat0)+this.y0}return t.x=a,t.y=r,t}function hd(t){var e,i,n,s,a=(t.x-this.x0)*(1/this.a),r=(t.y-this.y0)*(1/this.a);if(this.es)if(e=this.ml0+r/this.k0,i=ln(e,this.es,this.en),Math.abs(i)<g){var c=Math.sin(i),d=Math.cos(i),f=Math.abs(d)>x?Math.tan(i):0,m=this.ep2*Math.pow(d,2),v=Math.pow(m,2),p=Math.pow(f,2),y=Math.pow(p,2);e=1-this.es*Math.pow(c,2);var _=a*Math.sqrt(e)/this.k0,w=Math.pow(_,2);e=e*f,n=i-e*w/(1-this.es)*.5*(1-w/12*(5+3*p-9*m*p+m-4*v-w/30*(61+90*p-252*m*p+45*y+46*m-w/56*(1385+3633*p+4095*y+1574*y*p)))),s=M(this.long0+_*(1-w/6*(1+2*p+m-w/20*(5+28*p+24*y+8*m*p+6*m-w/42*(61+662*p+1320*y+720*y*p))))/d)}else n=g*xi(r),s=0;else{var o=Math.exp(a/this.k0),h=.5*(o-1/o),l=this.lat0+r/this.k0,u=Math.cos(l);e=Math.sqrt((1-Math.pow(u,2))/(1+Math.pow(h,2))),n=Math.asin(e),r<0&&(n=-n),h===0&&u===0?s=0:s=M(Math.atan2(h,u)+this.long0)}return t.x=s,t.y=n,t}var ld=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const Ri={init:rd,forward:od,inverse:hd,names:ld};function fo(t){var e=Math.exp(t);return e=(e-1/e)/2,e}function Y(t,e){t=Math.abs(t),e=Math.abs(e);var i=Math.max(t,e),n=Math.min(t,e)/(i||1);return i*Math.sqrt(1+Math.pow(n,2))}function cd(t){var e=1+t,i=e-1;return i===0?t:t*Math.log(e)/i}function ud(t){var e=Math.abs(t);return e=cd(e*(1+e/(Y(1,e)+1))),t<0?-e:e}function cn(t,e){for(var i=2*Math.cos(2*e),n=t.length-1,s=t[n],a=0,r;--n>=0;)r=-a+i*s+t[n],a=s,s=r;return e+r*Math.sin(2*e)}function dd(t,e){for(var i=2*Math.cos(e),n=t.length-1,s=t[n],a=0,r;--n>=0;)r=-a+i*s+t[n],a=s,s=r;return Math.sin(e)*r}function fd(t){var e=Math.exp(t);return e=(e+1/e)/2,e}function mo(t,e,i){for(var n=Math.sin(e),s=Math.cos(e),a=fo(i),r=fd(i),o=2*s*r,h=-2*n*a,l=t.length-1,u=t[l],c=0,d=0,f=0,m,v;--l>=0;)m=d,v=c,d=u,c=f,u=-m+o*d-h*c+t[l],f=-v+h*d+o*c;return o=n*r,h=s*a,[o*u-h*f,o*f+h*u]}function md(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(Ri.init.apply(this),this.forward=Ri.forward,this.inverse=Ri.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var t=this.es/(1+Math.sqrt(1-this.es)),e=t/(2-t),i=e;this.cgb[0]=e*(2+e*(-2/3+e*(-2+e*(116/45+e*(26/45+e*(-2854/675)))))),this.cbg[0]=e*(-2+e*(2/3+e*(4/3+e*(-82/45+e*(32/45+e*(4642/4725)))))),i=i*e,this.cgb[1]=i*(7/3+e*(-8/5+e*(-227/45+e*(2704/315+e*(2323/945))))),this.cbg[1]=i*(5/3+e*(-16/15+e*(-13/9+e*(904/315+e*(-1522/945))))),i=i*e,this.cgb[2]=i*(56/15+e*(-136/35+e*(-1262/105+e*(73814/2835)))),this.cbg[2]=i*(-26/15+e*(34/21+e*(8/5+e*(-12686/2835)))),i=i*e,this.cgb[3]=i*(4279/630+e*(-332/35+e*(-399572/14175))),this.cbg[3]=i*(1237/630+e*(-12/5+e*(-24832/14175))),i=i*e,this.cgb[4]=i*(4174/315+e*(-144838/6237)),this.cbg[4]=i*(-734/315+e*(109598/31185)),i=i*e,this.cgb[5]=i*(601676/22275),this.cbg[5]=i*(444337/155925),i=Math.pow(e,2),this.Qn=this.k0/(1+e)*(1+i*(1/4+i*(1/64+i/256))),this.utg[0]=e*(-.5+e*(2/3+e*(-37/96+e*(1/360+e*(81/512+e*(-96199/604800)))))),this.gtu[0]=e*(.5+e*(-2/3+e*(5/16+e*(41/180+e*(-127/288+e*(7891/37800)))))),this.utg[1]=i*(-1/48+e*(-1/15+e*(437/1440+e*(-46/105+e*(1118711/3870720))))),this.gtu[1]=i*(13/48+e*(-3/5+e*(557/1440+e*(281/630+e*(-1983433/1935360))))),i=i*e,this.utg[2]=i*(-17/480+e*(37/840+e*(209/4480+e*(-5569/90720)))),this.gtu[2]=i*(61/240+e*(-103/140+e*(15061/26880+e*(167603/181440)))),i=i*e,this.utg[3]=i*(-4397/161280+e*(11/504+e*(830251/7257600))),this.gtu[3]=i*(49561/161280+e*(-179/168+e*(6601661/7257600))),i=i*e,this.utg[4]=i*(-4583/161280+e*(108847/3991680)),this.gtu[4]=i*(34729/80640+e*(-3418889/1995840)),i=i*e,this.utg[5]=i*(-20648693/638668800),this.gtu[5]=i*(212378941/319334400);var n=cn(this.cbg,this.lat0);this.Zb=-this.Qn*(n+dd(this.gtu,2*n))}function pd(t){var e=M(t.x-this.long0),i=t.y;i=cn(this.cbg,i);var n=Math.sin(i),s=Math.cos(i),a=Math.sin(e),r=Math.cos(e);i=Math.atan2(n,r*s),e=Math.atan2(a*s,Y(n,s*r)),e=ud(Math.tan(e));var o=mo(this.gtu,2*i,2*e);i=i+o[0],e=e+o[1];var h,l;return Math.abs(e)<=2.623395162778?(h=this.a*(this.Qn*e)+this.x0,l=this.a*(this.Qn*i+this.Zb)+this.y0):(h=1/0,l=1/0),t.x=h,t.y=l,t}function vd(t){var e=(t.x-this.x0)*(1/this.a),i=(t.y-this.y0)*(1/this.a);i=(i-this.Zb)/this.Qn,e=e/this.Qn;var n,s;if(Math.abs(e)<=2.623395162778){var a=mo(this.utg,2*i,2*e);i=i+a[0],e=e+a[1],e=Math.atan(fo(e));var r=Math.sin(i),o=Math.cos(i),h=Math.sin(e),l=Math.cos(e);i=Math.atan2(r*l,Y(h,l*o)),e=Math.atan2(h,l*o),n=M(e+this.long0),s=cn(this.cgb,i)}else n=1/0,s=1/0;return t.x=n,t.y=s,t}var bd=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const Li={init:md,forward:pd,inverse:vd,names:bd};function gd(t,e){if(t===void 0){if(t=Math.floor((M(e)+Math.PI)*30/Math.PI)+1,t<0)return 0;if(t>60)return 60}return t}var yd="etmerc";function _d(){var t=gd(this.zone,this.long0);if(t===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(t)-183)*U,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Li.init.apply(this),this.forward=Li.forward,this.inverse=Li.inverse}var xd=["Universal Transverse Mercator System","utm"];const Md={init:_d,names:xd,dependsOn:yd};function un(t,e){return Math.pow((1-t)/(1+t),e)}var wd=20;function Ed(){var t=Math.sin(this.lat0),e=Math.cos(this.lat0);e*=e,this.rc=Math.sqrt(1-this.es)/(1-this.es*t*t),this.C=Math.sqrt(1+this.es*e*e/(1-this.es)),this.phic0=Math.asin(t/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+I)/(Math.pow(Math.tan(.5*this.lat0+I),this.C)*un(this.e*t,this.ratexp))}function Cd(t){var e=t.x,i=t.y;return t.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*i+I),this.C)*un(this.e*Math.sin(i),this.ratexp))-g,t.x=this.C*e,t}function Sd(t){for(var e=1e-14,i=t.x/this.C,n=t.y,s=Math.pow(Math.tan(.5*n+I)/this.K,1/this.C),a=wd;a>0&&(n=2*Math.atan(s*un(this.e*Math.sin(t.y),-.5*this.e))-g,!(Math.abs(n-t.y)<e));--a)t.y=n;return a?(t.x=i,t.y=n,t):null}var $d=["gauss"];const dn={init:Ed,forward:Cd,inverse:Sd,names:$d};function Ad(){dn.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function Od(t){var e,i,n,s;return t.x=M(t.x-this.long0),dn.forward.apply(this,[t]),e=Math.sin(t.y),i=Math.cos(t.y),n=Math.cos(t.x),s=this.k0*this.R2/(1+this.sinc0*e+this.cosc0*i*n),t.x=s*i*Math.sin(t.x),t.y=s*(this.cosc0*e-this.sinc0*i*n),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function kd(t){var e,i,n,s,a;if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,a=Y(t.x,t.y)){var r=2*Math.atan2(a,this.R2);e=Math.sin(r),i=Math.cos(r),s=Math.asin(i*this.sinc0+t.y*e*this.cosc0/a),n=Math.atan2(t.x*e,a*this.cosc0*i-t.y*this.sinc0*e)}else s=this.phic0,n=0;return t.x=n,t.y=s,dn.inverse.apply(this,[t]),t.x=M(t.x+this.long0),t}var Td=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const Nd={init:Ad,forward:Od,inverse:kd,names:Td};function Pd(t,e,i){return e*=i,Math.tan(.5*(g+t))*Math.pow((1-e)/(1+e),.5*i)}function Id(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=x&&(this.k0=.5*(1+xi(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=x&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=x&&Math.abs(Math.cos(this.lat_ts))>x&&(this.k0=.5*this.cons*xt(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/ut(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=xt(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-g,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function Rd(t){var e=t.x,i=t.y,n=Math.sin(i),s=Math.cos(i),a,r,o,h,l,u,c=M(e-this.long0);return Math.abs(Math.abs(e-this.long0)-Math.PI)<=x&&Math.abs(i+this.lat0)<=x?(t.x=NaN,t.y=NaN,t):this.sphere?(a=2*this.k0/(1+this.sinlat0*n+this.coslat0*s*Math.cos(c)),t.x=this.a*a*s*Math.sin(c)+this.x0,t.y=this.a*a*(this.coslat0*n-this.sinlat0*s*Math.cos(c))+this.y0,t):(r=2*Math.atan(this.ssfn_(i,n,this.e))-g,h=Math.cos(r),o=Math.sin(r),Math.abs(this.coslat0)<=x?(l=ut(this.e,i*this.con,this.con*n),u=2*this.a*this.k0*l/this.cons,t.x=this.x0+u*Math.sin(e-this.long0),t.y=this.y0-this.con*u*Math.cos(e-this.long0),t):(Math.abs(this.sinlat0)<x?(a=2*this.a*this.k0/(1+h*Math.cos(c)),t.y=a*o):(a=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*o+this.cosX0*h*Math.cos(c))),t.y=a*(this.cosX0*o-this.sinX0*h*Math.cos(c))+this.y0),t.x=a*h*Math.sin(c)+this.x0,t))}function Ld(t){t.x-=this.x0,t.y-=this.y0;var e,i,n,s,a,r=Math.sqrt(t.x*t.x+t.y*t.y);if(this.sphere){var o=2*Math.atan(r/(2*this.a*this.k0));return e=this.long0,i=this.lat0,r<=x?(t.x=e,t.y=i,t):(i=Math.asin(Math.cos(o)*this.sinlat0+t.y*Math.sin(o)*this.coslat0/r),Math.abs(this.coslat0)<x?this.lat0>0?e=M(this.long0+Math.atan2(t.x,-1*t.y)):e=M(this.long0+Math.atan2(t.x,t.y)):e=M(this.long0+Math.atan2(t.x*Math.sin(o),r*this.coslat0*Math.cos(o)-t.y*this.sinlat0*Math.sin(o))),t.x=e,t.y=i,t)}else if(Math.abs(this.coslat0)<=x){if(r<=x)return i=this.lat0,e=this.long0,t.x=e,t.y=i,t;t.x*=this.con,t.y*=this.con,n=r*this.cons/(2*this.a*this.k0),i=this.con*ri(this.e,n),e=this.con*M(this.con*this.long0+Math.atan2(t.x,-1*t.y))}else s=2*Math.atan(r*this.cosX0/(2*this.a*this.k0*this.ms1)),e=this.long0,r<=x?a=this.X0:(a=Math.asin(Math.cos(s)*this.sinX0+t.y*Math.sin(s)*this.cosX0/r),e=M(this.long0+Math.atan2(t.x*Math.sin(s),r*this.cosX0*Math.cos(s)-t.y*this.sinX0*Math.sin(s)))),i=-1*ri(this.e,Math.tan(.5*(g+a)));return t.x=e,t.y=i,t}var zd=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)","Polar_Stereographic"];const Bd={init:Id,forward:Rd,inverse:Ld,names:zd,ssfn_:Pd};function qd(){var t=this.lat0;this.lambda0=this.long0;var e=Math.sin(t),i=this.a,n=this.rf,s=1/n,a=2*s-Math.pow(s,2),r=this.e=Math.sqrt(a);this.R=this.k0*i*Math.sqrt(1-a)/(1-a*Math.pow(e,2)),this.alpha=Math.sqrt(1+a/(1-a)*Math.pow(Math.cos(t),4)),this.b0=Math.asin(e/this.alpha);var o=Math.log(Math.tan(Math.PI/4+this.b0/2)),h=Math.log(Math.tan(Math.PI/4+t/2)),l=Math.log((1+r*e)/(1-r*e));this.K=o-this.alpha*h+this.alpha*r/2*l}function jd(t){var e=Math.log(Math.tan(Math.PI/4-t.y/2)),i=this.e/2*Math.log((1+this.e*Math.sin(t.y))/(1-this.e*Math.sin(t.y))),n=-this.alpha*(e+i)+this.K,s=2*(Math.atan(Math.exp(n))-Math.PI/4),a=this.alpha*(t.x-this.lambda0),r=Math.atan(Math.sin(a)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(a))),o=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(a));return t.y=this.R/2*Math.log((1+Math.sin(o))/(1-Math.sin(o)))+this.y0,t.x=this.R*r+this.x0,t}function Fd(t){for(var e=t.x-this.x0,i=t.y-this.y0,n=e/this.R,s=2*(Math.atan(Math.exp(i/this.R))-Math.PI/4),a=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(n)),r=Math.atan(Math.sin(n)/(Math.cos(this.b0)*Math.cos(n)-Math.sin(this.b0)*Math.tan(s))),o=this.lambda0+r/this.alpha,h=0,l=a,u=-1e3,c=0;Math.abs(l-u)>1e-7;){if(++c>20)return;h=1/this.alpha*(Math.log(Math.tan(Math.PI/4+a/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),u=l,l=2*Math.atan(Math.exp(h))-Math.PI/2}return t.x=o,t.y=l,t}var Dd=["somerc"];const Hd={init:qd,forward:jd,inverse:Fd,names:Dd};var ae=1e-7;function Ud(t){var e=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],i=typeof t.PROJECTION=="object"?Object.keys(t.PROJECTION)[0]:t.PROJECTION;return"no_uoff"in t||"no_off"in t||e.indexOf(i)!==-1}function Gd(){var t,e,i,n,s,a,r,o,h,l,u=0,c,d=0,f=0,m=0,v=0,p=0,y=0;this.no_off=Ud(this),this.no_rot="no_rot"in this;var _=!1;"alpha"in this&&(_=!0);var w=!1;if("rectified_grid_angle"in this&&(w=!0),_&&(y=this.alpha),w&&(u=this.rectified_grid_angle*U),_||w)d=this.longc;else if(f=this.long1,v=this.lat1,m=this.long2,p=this.lat2,Math.abs(v-p)<=ae||(t=Math.abs(v))<=ae||Math.abs(t-g)<=ae||Math.abs(Math.abs(this.lat0)-g)<=ae||Math.abs(Math.abs(p)-g)<=ae)throw new Error;var S=1-this.es;e=Math.sqrt(S),Math.abs(this.lat0)>x?(o=Math.sin(this.lat0),i=Math.cos(this.lat0),t=1-this.es*o*o,this.B=i*i,this.B=Math.sqrt(1+this.es*this.B*this.B/S),this.A=this.B*this.k0*e/t,n=this.B*e/(i*Math.sqrt(t)),s=n*n-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=n,this.E*=Math.pow(ut(this.e,this.lat0,o),this.B)):(this.B=1/e,this.A=this.k0,this.E=n=s=1),_||w?(_?(c=Math.asin(Math.sin(y)/n),w||(u=y)):(c=u,y=Math.asin(n*Math.sin(c))),this.lam0=d-Math.asin(.5*(s-1/s)*Math.tan(c))/this.B):(a=Math.pow(ut(this.e,v,Math.sin(v)),this.B),r=Math.pow(ut(this.e,p,Math.sin(p)),this.B),s=this.E/a,h=(r-a)/(r+a),l=this.E*this.E,l=(l-r*a)/(l+r*a),t=f-m,t<-Math.pi?m-=ni:t>Math.pi&&(m+=ni),this.lam0=M(.5*(f+m)-Math.atan(l*Math.tan(.5*this.B*(f-m))/h)/this.B),c=Math.atan(2*Math.sin(this.B*M(f-this.lam0))/(s-1/s)),u=y=Math.asin(n*Math.sin(c))),this.singam=Math.sin(c),this.cosgam=Math.cos(c),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(n*n-1)/Math.cos(y))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*c,this.v_pole_n=this.ArB*Math.log(Math.tan(I-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(I+s))}function Wd(t){var e={},i,n,s,a,r,o,h,l;if(t.x=t.x-this.lam0,Math.abs(Math.abs(t.y)-g)>x){if(r=this.E/Math.pow(ut(this.e,t.y,Math.sin(t.y)),this.B),o=1/r,i=.5*(r-o),n=.5*(r+o),a=Math.sin(this.B*t.x),s=(i*this.singam-a*this.cosgam)/n,Math.abs(Math.abs(s)-1)<x)throw new Error;l=.5*this.ArB*Math.log((1-s)/(1+s)),o=Math.cos(this.B*t.x),Math.abs(o)<ae?h=this.A*t.x:h=this.ArB*Math.atan2(i*this.cosgam+a*this.singam,o)}else l=t.y>0?this.v_pole_n:this.v_pole_s,h=this.ArB*t.y;return this.no_rot?(e.x=h,e.y=l):(h-=this.u_0,e.x=l*this.cosrot+h*this.sinrot,e.y=h*this.cosrot-l*this.sinrot),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function Vd(t){var e,i,n,s,a,r,o,h={};if(t.x=(t.x-this.x0)*(1/this.a),t.y=(t.y-this.y0)*(1/this.a),this.no_rot?(i=t.y,e=t.x):(i=t.x*this.cosrot-t.y*this.sinrot,e=t.y*this.cosrot+t.x*this.sinrot+this.u_0),n=Math.exp(-this.BrA*i),s=.5*(n-1/n),a=.5*(n+1/n),r=Math.sin(this.BrA*e),o=(r*this.cosgam+s*this.singam)/a,Math.abs(Math.abs(o)-1)<x)h.x=0,h.y=o<0?-g:g;else{if(h.y=this.E/Math.sqrt((1+o)/(1-o)),h.y=ri(this.e,Math.pow(h.y,1/this.B)),h.y===1/0)throw new Error;h.x=-this.rB*Math.atan2(s*this.cosgam-r*this.singam,Math.cos(this.BrA*e))}return h.x+=this.lam0,h}var Qd=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const Xd={init:Gd,forward:Wd,inverse:Vd,names:Qd};function Jd(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<x)){var t=this.b/this.a;this.e=Math.sqrt(1-t*t);var e=Math.sin(this.lat1),i=Math.cos(this.lat1),n=xt(this.e,e,i),s=ut(this.e,this.lat1,e),a=Math.sin(this.lat2),r=Math.cos(this.lat2),o=xt(this.e,a,r),h=ut(this.e,this.lat2,a),l=ut(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>x?this.ns=Math.log(n/o)/Math.log(s/h):this.ns=e,isNaN(this.ns)&&(this.ns=e),this.f0=n/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(l,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function Kd(t){var e=t.x,i=t.y;Math.abs(2*Math.abs(i)-Math.PI)<=x&&(i=xi(i)*(g-2*x));var n=Math.abs(Math.abs(i)-g),s,a;if(n>x)s=ut(this.e,i,Math.sin(i)),a=this.a*this.f0*Math.pow(s,this.ns);else{if(n=i*this.ns,n<=0)return null;a=0}var r=this.ns*M(e-this.long0);return t.x=this.k0*(a*Math.sin(r))+this.x0,t.y=this.k0*(this.rh-a*Math.cos(r))+this.y0,t}function Yd(t){var e,i,n,s,a,r=(t.x-this.x0)/this.k0,o=this.rh-(t.y-this.y0)/this.k0;this.ns>0?(e=Math.sqrt(r*r+o*o),i=1):(e=-Math.sqrt(r*r+o*o),i=-1);var h=0;if(e!==0&&(h=Math.atan2(i*r,i*o)),e!==0||this.ns>0){if(i=1/this.ns,n=Math.pow(e/(this.a*this.f0),i),s=ri(this.e,n),s===-9999)return null}else s=-g;return a=M(h/this.ns+this.long0),t.x=a,t.y=s,t}var Zd=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const tf={init:Jd,forward:Kd,inverse:Yd,names:Zd};function ef(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function sf(t){var e,i,n,s,a,r,o,h=t.x,l=t.y,u=M(h-this.long0);return e=Math.pow((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)),this.alfa*this.e/2),i=2*(Math.atan(this.k*Math.pow(Math.tan(l/2+this.s45),this.alfa)/e)-this.s45),n=-u*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(i)+Math.sin(this.ad)*Math.cos(i)*Math.cos(n)),a=Math.asin(Math.cos(i)*Math.sin(n)/Math.cos(s)),r=this.n*a,o=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),t.y=o*Math.cos(r)/1,t.x=o*Math.sin(r)/1,this.czech||(t.y*=-1,t.x*=-1),t}function nf(t){var e,i,n,s,a,r,o,h,l=t.x;t.x=t.y,t.y=l,this.czech||(t.y*=-1,t.x*=-1),r=Math.sqrt(t.x*t.x+t.y*t.y),a=Math.atan2(t.y,t.x),s=a/Math.sin(this.s0),n=2*(Math.atan(Math.pow(this.ro0/r,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),e=Math.asin(Math.cos(this.ad)*Math.sin(n)-Math.sin(this.ad)*Math.cos(n)*Math.cos(s)),i=Math.asin(Math.cos(n)*Math.sin(s)/Math.cos(e)),t.x=this.long0-i/this.alfa,o=e,h=0;var u=0;do t.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(e/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(o))/(1-this.e*Math.sin(o)),this.e/2))-this.s45),Math.abs(o-t.y)<1e-10&&(h=1),o=t.y,u+=1;while(h===0&&u<15);return u>=15?null:t}var af=["Krovak","krovak"];const rf={init:ef,forward:sf,inverse:nf,names:af};function J(t,e,i,n,s){return t*s-e*Math.sin(2*s)+i*Math.sin(4*s)-n*Math.sin(6*s)}function Mi(t){return 1-.25*t*(1+t/16*(3+1.25*t))}function wi(t){return .375*t*(1+.25*t*(1+.46875*t))}function Ei(t){return .05859375*t*t*(1+.75*t)}function Ci(t){return t*t*t*(35/3072)}function Ee(t,e,i){var n=e*i;return t/Math.sqrt(1-n*n)}function Ht(t){return Math.abs(t)<g?t:t-xi(t)*Math.PI}function Ki(t,e,i,n,s){var a,r;a=t/e;for(var o=0;o<15;o++)if(r=(t-(e*a-i*Math.sin(2*a)+n*Math.sin(4*a)-s*Math.sin(6*a)))/(e-2*i*Math.cos(2*a)+4*n*Math.cos(4*a)-6*s*Math.cos(6*a)),a+=r,Math.abs(r)<=1e-10)return a;return NaN}function of(){this.sphere||(this.e0=Mi(this.es),this.e1=wi(this.es),this.e2=Ei(this.es),this.e3=Ci(this.es),this.ml0=this.a*J(this.e0,this.e1,this.e2,this.e3,this.lat0))}function hf(t){var e,i,n=t.x,s=t.y;if(n=M(n-this.long0),this.sphere)e=this.a*Math.asin(Math.cos(s)*Math.sin(n)),i=this.a*(Math.atan2(Math.tan(s),Math.cos(n))-this.lat0);else{var a=Math.sin(s),r=Math.cos(s),o=Ee(this.a,this.e,a),h=Math.tan(s)*Math.tan(s),l=n*Math.cos(s),u=l*l,c=this.es*r*r/(1-this.es),d=this.a*J(this.e0,this.e1,this.e2,this.e3,s);e=o*l*(1-u*h*(1/6-(8-h+8*c)*u/120)),i=d-this.ml0+o*a/r*u*(.5+(5-h+6*c)*u/24)}return t.x=e+this.x0,t.y=i+this.y0,t}function lf(t){t.x-=this.x0,t.y-=this.y0;var e=t.x/this.a,i=t.y/this.a,n,s;if(this.sphere){var a=i+this.lat0;n=Math.asin(Math.sin(a)*Math.cos(e)),s=Math.atan2(Math.tan(e),Math.cos(a))}else{var r=this.ml0/this.a+i,o=Ki(r,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(o)-g)<=x)return t.x=this.long0,t.y=g,i<0&&(t.y*=-1),t;var h=Ee(this.a,this.e,Math.sin(o)),l=h*h*h/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(o),2),c=e*this.a/h,d=c*c;n=o-h*Math.tan(o)/l*c*c*(.5-(1+3*u)*c*c/24),s=c*(1-d*(u/3+(1+3*u)*u*d/15))/Math.cos(o)}return t.x=M(s+this.long0),t.y=Ht(n),t}var cf=["Cassini","Cassini_Soldner","cass"];const uf={init:of,forward:hf,inverse:lf,names:cf};function Pt(t,e){var i;return t>1e-7?(i=t*e,(1-t*t)*(e/(1-i*i)-.5/t*Math.log((1-i)/(1+i)))):2*e}var df=1,ff=2,mf=3,pf=4;function vf(){var t=Math.abs(this.lat0);if(Math.abs(t-g)<x?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(t)<x?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var e;switch(this.qp=Pt(this.e,1),this.mmf=.5/(1-this.es),this.apa=Cf(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),e=Math.sin(this.lat0),this.sinb1=Pt(this.e,e)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*e*e)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function bf(t){var e,i,n,s,a,r,o,h,l,u,c=t.x,d=t.y;if(c=M(c-this.long0),this.sphere){if(a=Math.sin(d),u=Math.cos(d),n=Math.cos(c),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(i=this.mode===this.EQUIT?1+u*n:1+this.sinph0*a+this.cosph0*u*n,i<=x)return null;i=Math.sqrt(2/i),e=i*u*Math.sin(c),i*=this.mode===this.EQUIT?a:this.cosph0*a-this.sinph0*u*n}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),Math.abs(d+this.lat0)<x)return null;i=I-d*.5,i=2*(this.mode===this.S_POLE?Math.cos(i):Math.sin(i)),e=i*Math.sin(c),i*=n}}else{switch(o=0,h=0,l=0,n=Math.cos(c),s=Math.sin(c),a=Math.sin(d),r=Pt(this.e,a),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(o=r/this.qp,h=Math.sqrt(1-o*o)),this.mode){case this.OBLIQ:l=1+this.sinb1*o+this.cosb1*h*n;break;case this.EQUIT:l=1+h*n;break;case this.N_POLE:l=g+d,r=this.qp-r;break;case this.S_POLE:l=d-g,r=this.qp+r;break}if(Math.abs(l)<x)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),this.mode===this.OBLIQ?i=this.ymf*l*(this.cosb1*o-this.sinb1*h*n):i=(l=Math.sqrt(2/(1+h*n)))*o*this.ymf,e=this.xmf*l*h*s;break;case this.N_POLE:case this.S_POLE:r>=0?(e=(l=Math.sqrt(r))*s,i=n*(this.mode===this.S_POLE?l:-l)):e=i=0;break}}return t.x=this.a*e+this.x0,t.y=this.a*i+this.y0,t}function gf(t){t.x-=this.x0,t.y-=this.y0;var e=t.x/this.a,i=t.y/this.a,n,s,a,r,o,h,l;if(this.sphere){var u=0,c,d=0;if(c=Math.sqrt(e*e+i*i),s=c*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(d=Math.sin(s),u=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(c)<=x?0:Math.asin(i*d/c),e*=d,i=u*c;break;case this.OBLIQ:s=Math.abs(c)<=x?this.lat0:Math.asin(u*this.sinph0+i*d*this.cosph0/c),e*=d*this.cosph0,i=(u-Math.sin(s)*this.sinph0)*c;break;case this.N_POLE:i=-i,s=g-s;break;case this.S_POLE:s-=g;break}n=i===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(e,i)}else{if(l=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e/=this.dd,i*=this.dd,h=Math.sqrt(e*e+i*i),h<x)return t.x=this.long0,t.y=this.lat0,t;r=2*Math.asin(.5*h/this.rq),a=Math.cos(r),e*=r=Math.sin(r),this.mode===this.OBLIQ?(l=a*this.sinb1+i*r*this.cosb1/h,o=this.qp*l,i=h*this.cosb1*a-i*this.sinb1*r):(l=i*r/h,o=this.qp*l,i=h*a)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),o=e*e+i*i,!o)return t.x=this.long0,t.y=this.lat0,t;l=1-o/this.qp,this.mode===this.S_POLE&&(l=-l)}n=Math.atan2(e,i),s=Sf(Math.asin(l),this.apa)}return t.x=M(this.long0+n),t.y=s,t}var yf=.3333333333333333,_f=.17222222222222222,xf=.10257936507936508,Mf=.06388888888888888,wf=.0664021164021164,Ef=.016415012942191543;function Cf(t){var e,i=[];return i[0]=t*yf,e=t*t,i[0]+=e*_f,i[1]=e*Mf,e*=t,i[0]+=e*xf,i[1]+=e*wf,i[2]=e*Ef,i}function Sf(t,e){var i=t+t;return t+e[0]*Math.sin(i)+e[1]*Math.sin(i+i)+e[2]*Math.sin(i+i+i)}var $f=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const Af={init:vf,forward:bf,inverse:gf,names:$f,S_POLE:df,N_POLE:ff,EQUIT:mf,OBLIQ:pf};function Bt(t){return Math.abs(t)>1&&(t=t>1?1:-1),Math.asin(t)}function Of(){Math.abs(this.lat1+this.lat2)<x||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=xt(this.e3,this.sin_po,this.cos_po),this.qs1=Pt(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=xt(this.e3,this.sin_po,this.cos_po),this.qs2=Pt(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Pt(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>x?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function kf(t){var e=t.x,i=t.y;this.sin_phi=Math.sin(i),this.cos_phi=Math.cos(i);var n=Pt(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*n)/this.ns0,a=this.ns0*M(e-this.long0),r=s*Math.sin(a)+this.x0,o=this.rh-s*Math.cos(a)+this.y0;return t.x=r,t.y=o,t}function Tf(t){var e,i,n,s,a,r;return t.x-=this.x0,t.y=this.rh-t.y+this.y0,this.ns0>=0?(e=Math.sqrt(t.x*t.x+t.y*t.y),n=1):(e=-Math.sqrt(t.x*t.x+t.y*t.y),n=-1),s=0,e!==0&&(s=Math.atan2(n*t.x,n*t.y)),n=e*this.ns0/this.a,this.sphere?r=Math.asin((this.c-n*n)/(2*this.ns0)):(i=(this.c-n*n)/this.ns0,r=this.phi1z(this.e3,i)),a=M(s/this.ns0+this.long0),t.x=a,t.y=r,t}function Nf(t,e){var i,n,s,a,r,o=Bt(.5*e);if(t<x)return o;for(var h=t*t,l=1;l<=25;l++)if(i=Math.sin(o),n=Math.cos(o),s=t*i,a=1-s*s,r=.5*a*a/n*(e/(1-h)-i/a+.5/t*Math.log((1-s)/(1+s))),o=o+r,Math.abs(r)<=1e-7)return o;return null}var Pf=["Albers_Conic_Equal_Area","Albers","aea"];const If={init:Of,forward:kf,inverse:Tf,names:Pf,phi1z:Nf};function Rf(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function Lf(t){var e,i,n,s,a,r,o,h,l=t.x,u=t.y;return n=M(l-this.long0),e=Math.sin(u),i=Math.cos(u),s=Math.cos(n),r=this.sin_p14*e+this.cos_p14*i*s,a=1,r>0||Math.abs(r)<=x?(o=this.x0+this.a*a*i*Math.sin(n)/r,h=this.y0+this.a*a*(this.cos_p14*e-this.sin_p14*i*s)/r):(o=this.x0+this.infinity_dist*i*Math.sin(n),h=this.y0+this.infinity_dist*(this.cos_p14*e-this.sin_p14*i*s)),t.x=o,t.y=h,t}function zf(t){var e,i,n,s,a,r;return t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,(e=Math.sqrt(t.x*t.x+t.y*t.y))?(s=Math.atan2(e,this.rc),i=Math.sin(s),n=Math.cos(s),r=Bt(n*this.sin_p14+t.y*i*this.cos_p14/e),a=Math.atan2(t.x*i,e*this.cos_p14*n-t.y*this.sin_p14*i),a=M(this.long0+a)):(r=this.phic0,a=0),t.x=a,t.y=r,t}var Bf=["gnom"];const qf={init:Rf,forward:Lf,inverse:zf,names:Bf};function jf(t,e){var i=1-(1-t*t)/(2*t)*Math.log((1-t)/(1+t));if(Math.abs(Math.abs(e)-i)<1e-6)return e<0?-1*g:g;for(var n=Math.asin(.5*e),s,a,r,o,h=0;h<30;h++)if(a=Math.sin(n),r=Math.cos(n),o=t*a,s=Math.pow(1-o*o,2)/(2*r)*(e/(1-t*t)-a/(1-o*o)+.5/t*Math.log((1-o)/(1+o))),n+=s,Math.abs(s)<=1e-10)return n;return NaN}function Ff(){this.sphere||(this.k0=xt(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function Df(t){var e=t.x,i=t.y,n,s,a=M(e-this.long0);if(this.sphere)n=this.x0+this.a*a*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(i)/Math.cos(this.lat_ts);else{var r=Pt(this.e,Math.sin(i));n=this.x0+this.a*this.k0*a,s=this.y0+this.a*r*.5/this.k0}return t.x=n,t.y=s,t}function Hf(t){t.x-=this.x0,t.y-=this.y0;var e,i;return this.sphere?(e=M(this.long0+t.x/this.a/Math.cos(this.lat_ts)),i=Math.asin(t.y/this.a*Math.cos(this.lat_ts))):(i=jf(this.e,2*t.y*this.k0/this.a),e=M(this.long0+t.x/(this.a*this.k0))),t.x=e,t.y=i,t}var Uf=["cea"];const Gf={init:Ff,forward:Df,inverse:Hf,names:Uf};function Wf(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function Vf(t){var e=t.x,i=t.y,n=M(e-this.long0),s=Ht(i-this.lat0);return t.x=this.x0+this.a*n*this.rc,t.y=this.y0+this.a*s,t}function Qf(t){var e=t.x,i=t.y;return t.x=M(this.long0+(e-this.x0)/(this.a*this.rc)),t.y=Ht(this.lat0+(i-this.y0)/this.a),t}var Xf=["Equirectangular","Equidistant_Cylindrical","eqc"];const Jf={init:Wf,forward:Vf,inverse:Qf,names:Xf};var va=20;function Kf(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Mi(this.es),this.e1=wi(this.es),this.e2=Ei(this.es),this.e3=Ci(this.es),this.ml0=this.a*J(this.e0,this.e1,this.e2,this.e3,this.lat0)}function Yf(t){var e=t.x,i=t.y,n,s,a,r=M(e-this.long0);if(a=r*Math.sin(i),this.sphere)Math.abs(i)<=x?(n=this.a*r,s=-1*this.a*this.lat0):(n=this.a*Math.sin(a)/Math.tan(i),s=this.a*(Ht(i-this.lat0)+(1-Math.cos(a))/Math.tan(i)));else if(Math.abs(i)<=x)n=this.a*r,s=-1*this.ml0;else{var o=Ee(this.a,this.e,Math.sin(i))/Math.tan(i);n=o*Math.sin(a),s=this.a*J(this.e0,this.e1,this.e2,this.e3,i)-this.ml0+o*(1-Math.cos(a))}return t.x=n+this.x0,t.y=s+this.y0,t}function Zf(t){var e,i,n,s,a,r,o,h,l;if(n=t.x-this.x0,s=t.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=x)e=M(n/this.a+this.long0),i=0;else{r=this.lat0+s/this.a,o=n*n/this.a/this.a+r*r,h=r;var u;for(a=va;a;--a)if(u=Math.tan(h),l=-1*(r*(h*u+1)-h-.5*(h*h+o)*u)/((h-r)/u-1),h+=l,Math.abs(l)<=x){i=h;break}e=M(this.long0+Math.asin(n*Math.tan(h)/this.a)/Math.sin(i))}else if(Math.abs(s+this.ml0)<=x)i=0,e=M(this.long0+n/this.a);else{r=(this.ml0+s)/this.a,o=n*n/this.a/this.a+r*r,h=r;var c,d,f,m,v;for(a=va;a;--a)if(v=this.e*Math.sin(h),c=Math.sqrt(1-v*v)*Math.tan(h),d=this.a*J(this.e0,this.e1,this.e2,this.e3,h),f=this.e0-2*this.e1*Math.cos(2*h)+4*this.e2*Math.cos(4*h)-6*this.e3*Math.cos(6*h),m=d/this.a,l=(r*(c*m+1)-m-.5*c*(m*m+o))/(this.es*Math.sin(2*h)*(m*m+o-2*r*m)/(4*c)+(r-m)*(c*f-2/Math.sin(2*h))-f),h-=l,Math.abs(l)<=x){i=h;break}c=Math.sqrt(1-this.es*Math.pow(Math.sin(i),2))*Math.tan(i),e=M(this.long0+Math.asin(n*c/this.a)/Math.sin(i))}return t.x=e,t.y=i,t}var t0=["Polyconic","poly"];const e0={init:Kf,forward:Yf,inverse:Zf,names:t0};function i0(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function s0(t){var e,i=t.x,n=t.y,s=n-this.lat0,a=i-this.long0,r=s/Ge*1e-5,o=a,h=1,l=0;for(e=1;e<=10;e++)h=h*r,l=l+this.A[e]*h;var u=l,c=o,d=1,f=0,m,v,p=0,y=0;for(e=1;e<=6;e++)m=d*u-f*c,v=f*u+d*c,d=m,f=v,p=p+this.B_re[e]*d-this.B_im[e]*f,y=y+this.B_im[e]*d+this.B_re[e]*f;return t.x=y*this.a+this.x0,t.y=p*this.a+this.y0,t}function n0(t){var e,i=t.x,n=t.y,s=i-this.x0,a=n-this.y0,r=a/this.a,o=s/this.a,h=1,l=0,u,c,d=0,f=0;for(e=1;e<=6;e++)u=h*r-l*o,c=l*r+h*o,h=u,l=c,d=d+this.C_re[e]*h-this.C_im[e]*l,f=f+this.C_im[e]*h+this.C_re[e]*l;for(var m=0;m<this.iterations;m++){var v=d,p=f,y,_,w=r,S=o;for(e=2;e<=6;e++)y=v*d-p*f,_=p*d+v*f,v=y,p=_,w=w+(e-1)*(this.B_re[e]*v-this.B_im[e]*p),S=S+(e-1)*(this.B_im[e]*v+this.B_re[e]*p);v=1,p=0;var $=this.B_re[1],E=this.B_im[1];for(e=2;e<=6;e++)y=v*d-p*f,_=p*d+v*f,v=y,p=_,$=$+e*(this.B_re[e]*v-this.B_im[e]*p),E=E+e*(this.B_im[e]*v+this.B_re[e]*p);var T=$*$+E*E;d=(w*$+S*E)/T,f=(S*$-w*E)/T}var O=d,P=f,k=1,q=0;for(e=1;e<=9;e++)k=k*O,q=q+this.D[e]*k;var V=this.lat0+q*Ge*1e5,H=this.long0+P;return t.x=H,t.y=V,t}var a0=["New_Zealand_Map_Grid","nzmg"];const r0={init:i0,forward:s0,inverse:n0,names:a0};function o0(){}function h0(t){var e=t.x,i=t.y,n=M(e-this.long0),s=this.x0+this.a*n,a=this.y0+this.a*Math.log(Math.tan(Math.PI/4+i/2.5))*1.25;return t.x=s,t.y=a,t}function l0(t){t.x-=this.x0,t.y-=this.y0;var e=M(this.long0+t.x/this.a),i=2.5*(Math.atan(Math.exp(.8*t.y/this.a))-Math.PI/4);return t.x=e,t.y=i,t}var c0=["Miller_Cylindrical","mill"];const u0={init:o0,forward:h0,inverse:l0,names:c0};var d0=20;function f0(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=hn(this.es)}function m0(t){var e,i,n=t.x,s=t.y;if(n=M(n-this.long0),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var a=this.n*Math.sin(s),r=d0;r;--r){var o=(this.m*s+Math.sin(s)-a)/(this.m+Math.cos(s));if(s-=o,Math.abs(o)<x)break}e=this.a*this.C_x*n*(this.m+Math.cos(s)),i=this.a*this.C_y*s}else{var h=Math.sin(s),l=Math.cos(s);i=this.a*Ie(s,h,l,this.en),e=this.a*n*l/Math.sqrt(1-this.es*h*h)}return t.x=e,t.y=i,t}function p0(t){var e,i,n,s;return t.x-=this.x0,n=t.x/this.a,t.y-=this.y0,e=t.y/this.a,this.sphere?(e/=this.C_y,n=n/(this.C_x*(this.m+Math.cos(e))),this.m?e=Bt((this.m*e+Math.sin(e))/this.n):this.n!==1&&(e=Bt(Math.sin(e)/this.n)),n=M(n+this.long0),e=Ht(e)):(e=ln(t.y/this.a,this.es,this.en),s=Math.abs(e),s<g?(s=Math.sin(e),i=this.long0+t.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(e)),n=M(i)):s-x<g&&(n=this.long0)),t.x=n,t.y=e,t}var v0=["Sinusoidal","sinu"];const b0={init:f0,forward:m0,inverse:p0,names:v0};function g0(){}function y0(t){for(var e=t.x,i=t.y,n=M(e-this.long0),s=i,a=Math.PI*Math.sin(i);;){var r=-(s+Math.sin(s)-a)/(1+Math.cos(s));if(s+=r,Math.abs(r)<x)break}s/=2,Math.PI/2-Math.abs(i)<x&&(n=0);var o=.900316316158*this.a*n*Math.cos(s)+this.x0,h=1.4142135623731*this.a*Math.sin(s)+this.y0;return t.x=o,t.y=h,t}function _0(t){var e,i;t.x-=this.x0,t.y-=this.y0,i=t.y/(1.4142135623731*this.a),Math.abs(i)>.999999999999&&(i=.999999999999),e=Math.asin(i);var n=M(this.long0+t.x/(.900316316158*this.a*Math.cos(e)));n<-Math.PI&&(n=-Math.PI),n>Math.PI&&(n=Math.PI),i=(2*e+Math.sin(2*e))/Math.PI,Math.abs(i)>1&&(i=1);var s=Math.asin(i);return t.x=n,t.y=s,t}var x0=["Mollweide","moll"];const M0={init:g0,forward:y0,inverse:_0,names:x0};function w0(){Math.abs(this.lat1+this.lat2)<x||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Mi(this.es),this.e1=wi(this.es),this.e2=Ei(this.es),this.e3=Ci(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=xt(this.e,this.sinphi,this.cosphi),this.ml1=J(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<x?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=xt(this.e,this.sinphi,this.cosphi),this.ml2=J(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=J(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function E0(t){var e=t.x,i=t.y,n;if(this.sphere)n=this.a*(this.g-i);else{var s=J(this.e0,this.e1,this.e2,this.e3,i);n=this.a*(this.g-s)}var a=this.ns*M(e-this.long0),r=this.x0+n*Math.sin(a),o=this.y0+this.rh-n*Math.cos(a);return t.x=r,t.y=o,t}function C0(t){t.x-=this.x0,t.y=this.rh-t.y+this.y0;var e,i,n,s;this.ns>=0?(i=Math.sqrt(t.x*t.x+t.y*t.y),e=1):(i=-Math.sqrt(t.x*t.x+t.y*t.y),e=-1);var a=0;if(i!==0&&(a=Math.atan2(e*t.x,e*t.y)),this.sphere)return s=M(this.long0+a/this.ns),n=Ht(this.g-i/this.a),t.x=s,t.y=n,t;var r=this.g-i/this.a;return n=Ki(r,this.e0,this.e1,this.e2,this.e3),s=M(this.long0+a/this.ns),t.x=s,t.y=n,t}var S0=["Equidistant_Conic","eqdc"];const $0={init:w0,forward:E0,inverse:C0,names:S0};function A0(){this.R=this.a}function O0(t){var e=t.x,i=t.y,n=M(e-this.long0),s,a;Math.abs(i)<=x&&(s=this.x0+this.R*n,a=this.y0);var r=Bt(2*Math.abs(i/Math.PI));(Math.abs(n)<=x||Math.abs(Math.abs(i)-g)<=x)&&(s=this.x0,i>=0?a=this.y0+Math.PI*this.R*Math.tan(.5*r):a=this.y0+Math.PI*this.R*-Math.tan(.5*r));var o=.5*Math.abs(Math.PI/n-n/Math.PI),h=o*o,l=Math.sin(r),u=Math.cos(r),c=u/(l+u-1),d=c*c,f=c*(2/l-1),m=f*f,v=Math.PI*this.R*(o*(c-m)+Math.sqrt(h*(c-m)*(c-m)-(m+h)*(d-m)))/(m+h);n<0&&(v=-v),s=this.x0+v;var p=h+c;return v=Math.PI*this.R*(f*p-o*Math.sqrt((m+h)*(h+1)-p*p))/(m+h),i>=0?a=this.y0+v:a=this.y0-v,t.x=s,t.y=a,t}function k0(t){var e,i,n,s,a,r,o,h,l,u,c,d,f;return t.x-=this.x0,t.y-=this.y0,c=Math.PI*this.R,n=t.x/c,s=t.y/c,a=n*n+s*s,r=-Math.abs(s)*(1+a),o=r-2*s*s+n*n,h=-2*r+1+2*s*s+a*a,f=s*s/h+(2*o*o*o/h/h/h-9*r*o/h/h)/27,l=(r-o*o/3/h)/h,u=2*Math.sqrt(-l/3),c=3*f/l/u,Math.abs(c)>1&&(c>=0?c=1:c=-1),d=Math.acos(c)/3,t.y>=0?i=(-u*Math.cos(d+Math.PI/3)-o/3/h)*Math.PI:i=-(-u*Math.cos(d+Math.PI/3)-o/3/h)*Math.PI,Math.abs(n)<x?e=this.long0:e=M(this.long0+Math.PI*(a-1+Math.sqrt(1+2*(n*n-s*s)+a*a))/2/n),t.x=e,t.y=i,t}var T0=["Van_der_Grinten_I","VanDerGrinten","vandg"];const N0={init:A0,forward:O0,inverse:k0,names:T0};function P0(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function I0(t){var e=t.x,i=t.y,n=Math.sin(t.y),s=Math.cos(t.y),a=M(e-this.long0),r,o,h,l,u,c,d,f,m,v,p,y,_,w,S,$,E,T,O,P,k,q,V;return this.sphere?Math.abs(this.sin_p12-1)<=x?(t.x=this.x0+this.a*(g-i)*Math.sin(a),t.y=this.y0-this.a*(g-i)*Math.cos(a),t):Math.abs(this.sin_p12+1)<=x?(t.x=this.x0+this.a*(g+i)*Math.sin(a),t.y=this.y0+this.a*(g+i)*Math.cos(a),t):(T=this.sin_p12*n+this.cos_p12*s*Math.cos(a),$=Math.acos(T),E=$?$/Math.sin($):1,t.x=this.x0+this.a*E*s*Math.sin(a),t.y=this.y0+this.a*E*(this.cos_p12*n-this.sin_p12*s*Math.cos(a)),t):(r=Mi(this.es),o=wi(this.es),h=Ei(this.es),l=Ci(this.es),Math.abs(this.sin_p12-1)<=x?(u=this.a*J(r,o,h,l,g),c=this.a*J(r,o,h,l,i),t.x=this.x0+(u-c)*Math.sin(a),t.y=this.y0-(u-c)*Math.cos(a),t):Math.abs(this.sin_p12+1)<=x?(u=this.a*J(r,o,h,l,g),c=this.a*J(r,o,h,l,i),t.x=this.x0+(u+c)*Math.sin(a),t.y=this.y0+(u+c)*Math.cos(a),t):(d=n/s,f=Ee(this.a,this.e,this.sin_p12),m=Ee(this.a,this.e,n),v=Math.atan((1-this.es)*d+this.es*f*this.sin_p12/(m*s)),p=Math.atan2(Math.sin(a),this.cos_p12*Math.tan(v)-this.sin_p12*Math.cos(a)),p===0?O=Math.asin(this.cos_p12*Math.sin(v)-this.sin_p12*Math.cos(v)):Math.abs(Math.abs(p)-Math.PI)<=x?O=-Math.asin(this.cos_p12*Math.sin(v)-this.sin_p12*Math.cos(v)):O=Math.asin(Math.sin(a)*Math.cos(v)/Math.sin(p)),y=this.e*this.sin_p12/Math.sqrt(1-this.es),_=this.e*this.cos_p12*Math.cos(p)/Math.sqrt(1-this.es),w=y*_,S=_*_,P=O*O,k=P*O,q=k*O,V=q*O,$=f*O*(1-P*S*(1-S)/6+k/8*w*(1-2*S)+q/120*(S*(4-7*S)-3*y*y*(1-7*S))-V/48*w),t.x=this.x0+$*Math.sin(p),t.y=this.y0+$*Math.cos(p),t))}function R0(t){t.x-=this.x0,t.y-=this.y0;var e,i,n,s,a,r,o,h,l,u,c,d,f,m,v,p,y,_,w,S,$,E,T,O;return this.sphere?(e=Math.sqrt(t.x*t.x+t.y*t.y),e>2*g*this.a?void 0:(i=e/this.a,n=Math.sin(i),s=Math.cos(i),a=this.long0,Math.abs(e)<=x?r=this.lat0:(r=Bt(s*this.sin_p12+t.y*n*this.cos_p12/e),o=Math.abs(this.lat0)-g,Math.abs(o)<=x?this.lat0>=0?a=M(this.long0+Math.atan2(t.x,-t.y)):a=M(this.long0-Math.atan2(-t.x,t.y)):a=M(this.long0+Math.atan2(t.x*n,e*this.cos_p12*s-t.y*this.sin_p12*n))),t.x=a,t.y=r,t)):(h=Mi(this.es),l=wi(this.es),u=Ei(this.es),c=Ci(this.es),Math.abs(this.sin_p12-1)<=x?(d=this.a*J(h,l,u,c,g),e=Math.sqrt(t.x*t.x+t.y*t.y),f=d-e,r=Ki(f/this.a,h,l,u,c),a=M(this.long0+Math.atan2(t.x,-1*t.y)),t.x=a,t.y=r,t):Math.abs(this.sin_p12+1)<=x?(d=this.a*J(h,l,u,c,g),e=Math.sqrt(t.x*t.x+t.y*t.y),f=e-d,r=Ki(f/this.a,h,l,u,c),a=M(this.long0+Math.atan2(t.x,t.y)),t.x=a,t.y=r,t):(e=Math.sqrt(t.x*t.x+t.y*t.y),p=Math.atan2(t.x,t.y),m=Ee(this.a,this.e,this.sin_p12),y=Math.cos(p),_=this.e*this.cos_p12*y,w=-_*_/(1-this.es),S=3*this.es*(1-w)*this.sin_p12*this.cos_p12*y/(1-this.es),$=e/m,E=$-w*(1+w)*Math.pow($,3)/6-S*(1+3*w)*Math.pow($,4)/24,T=1-w*E*E/2-$*E*E*E/6,v=Math.asin(this.sin_p12*Math.cos(E)+this.cos_p12*Math.sin(E)*y),a=M(this.long0+Math.asin(Math.sin(p)*Math.sin(E)/Math.cos(v))),O=Math.sin(v),r=Math.atan2((O-this.es*T*this.sin_p12)*Math.tan(v),O*(1-this.es)),t.x=a,t.y=r,t))}var L0=["Azimuthal_Equidistant","aeqd"];const z0={init:P0,forward:I0,inverse:R0,names:L0};function B0(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function q0(t){var e,i,n,s,a,r,o,h,l=t.x,u=t.y;return n=M(l-this.long0),e=Math.sin(u),i=Math.cos(u),s=Math.cos(n),r=this.sin_p14*e+this.cos_p14*i*s,a=1,(r>0||Math.abs(r)<=x)&&(o=this.a*a*i*Math.sin(n),h=this.y0+this.a*a*(this.cos_p14*e-this.sin_p14*i*s)),t.x=o,t.y=h,t}function j0(t){var e,i,n,s,a,r,o;return t.x-=this.x0,t.y-=this.y0,e=Math.sqrt(t.x*t.x+t.y*t.y),i=Bt(e/this.a),n=Math.sin(i),s=Math.cos(i),r=this.long0,Math.abs(e)<=x?(o=this.lat0,t.x=r,t.y=o,t):(o=Bt(s*this.sin_p14+t.y*n*this.cos_p14/e),a=Math.abs(this.lat0)-g,Math.abs(a)<=x?(this.lat0>=0?r=M(this.long0+Math.atan2(t.x,-t.y)):r=M(this.long0-Math.atan2(-t.x,t.y)),t.x=r,t.y=o,t):(r=M(this.long0+Math.atan2(t.x*n,e*this.cos_p14*s-t.y*this.sin_p14*n)),t.x=r,t.y=o,t))}var F0=["ortho"];const D0={init:B0,forward:q0,inverse:j0,names:F0};var B={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},R={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function H0(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=g-I/2?this.face=B.TOP:this.lat0<=-(g-I/2)?this.face=B.BOTTOM:Math.abs(this.long0)<=I?this.face=B.FRONT:Math.abs(this.long0)<=g+I?this.face=this.long0>0?B.RIGHT:B.LEFT:this.face=B.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function U0(t){var e={x:0,y:0},i,n,s,a,r,o,h={value:0};if(t.x-=this.long0,this.es!==0?i=Math.atan(this.one_minus_f_squared*Math.tan(t.y)):i=t.y,n=t.x,this.face===B.TOP)a=g-i,n>=I&&n<=g+I?(h.value=R.AREA_0,s=n-g):n>g+I||n<=-(g+I)?(h.value=R.AREA_1,s=n>0?n-G:n+G):n>-(g+I)&&n<=-I?(h.value=R.AREA_2,s=n+g):(h.value=R.AREA_3,s=n);else if(this.face===B.BOTTOM)a=g+i,n>=I&&n<=g+I?(h.value=R.AREA_0,s=-n+g):n<I&&n>=-I?(h.value=R.AREA_1,s=-n):n<-I&&n>=-(g+I)?(h.value=R.AREA_2,s=-n-g):(h.value=R.AREA_3,s=n>0?-n+G:-n-G);else{var l,u,c,d,f,m,v;this.face===B.RIGHT?n=fe(n,+g):this.face===B.BACK?n=fe(n,3.14159265359):this.face===B.LEFT&&(n=fe(n,-g)),d=Math.sin(i),f=Math.cos(i),m=Math.sin(n),v=Math.cos(n),l=f*v,u=f*m,c=d,this.face===B.FRONT?(a=Math.acos(l),s=Oi(a,c,u,h)):this.face===B.RIGHT?(a=Math.acos(u),s=Oi(a,c,-l,h)):this.face===B.BACK?(a=Math.acos(-l),s=Oi(a,c,-u,h)):this.face===B.LEFT?(a=Math.acos(-u),s=Oi(a,c,l,h)):(a=s=0,h.value=R.AREA_0)}return o=Math.atan(12/G*(s+Math.acos(Math.sin(s)*Math.cos(I))-g)),r=Math.sqrt((1-Math.cos(a))/(Math.cos(o)*Math.cos(o))/(1-Math.cos(Math.atan(1/Math.cos(s))))),h.value===R.AREA_1?o+=g:h.value===R.AREA_2?o+=G:h.value===R.AREA_3&&(o+=1.5*G),e.x=r*Math.cos(o),e.y=r*Math.sin(o),e.x=e.x*this.a+this.x0,e.y=e.y*this.a+this.y0,t.x=e.x,t.y=e.y,t}function G0(t){var e={lam:0,phi:0},i,n,s,a,r,o,h,l,u,c={value:0};if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,n=Math.atan(Math.sqrt(t.x*t.x+t.y*t.y)),i=Math.atan2(t.y,t.x),t.x>=0&&t.x>=Math.abs(t.y)?c.value=R.AREA_0:t.y>=0&&t.y>=Math.abs(t.x)?(c.value=R.AREA_1,i-=g):t.x<0&&-t.x>=Math.abs(t.y)?(c.value=R.AREA_2,i=i<0?i+G:i-G):(c.value=R.AREA_3,i+=g),u=G/12*Math.tan(i),r=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),o=Math.atan(r),s=Math.cos(i),a=Math.tan(n),h=1-s*s*a*a*(1-Math.cos(Math.atan(1/Math.cos(o)))),h<-1?h=-1:h>1&&(h=1),this.face===B.TOP)l=Math.acos(h),e.phi=g-l,c.value===R.AREA_0?e.lam=o+g:c.value===R.AREA_1?e.lam=o<0?o+G:o-G:c.value===R.AREA_2?e.lam=o-g:e.lam=o;else if(this.face===B.BOTTOM)l=Math.acos(h),e.phi=l-g,c.value===R.AREA_0?e.lam=-o+g:c.value===R.AREA_1?e.lam=-o:c.value===R.AREA_2?e.lam=-o-g:e.lam=o<0?-o-G:-o+G;else{var d,f,m;d=h,u=d*d,u>=1?m=0:m=Math.sqrt(1-u)*Math.sin(o),u+=m*m,u>=1?f=0:f=Math.sqrt(1-u),c.value===R.AREA_1?(u=f,f=-m,m=u):c.value===R.AREA_2?(f=-f,m=-m):c.value===R.AREA_3&&(u=f,f=m,m=-u),this.face===B.RIGHT?(u=d,d=-f,f=u):this.face===B.BACK?(d=-d,f=-f):this.face===B.LEFT&&(u=d,d=f,f=-u),e.phi=Math.acos(-m)-g,e.lam=Math.atan2(f,d),this.face===B.RIGHT?e.lam=fe(e.lam,-g):this.face===B.BACK?e.lam=fe(e.lam,-3.14159265359):this.face===B.LEFT&&(e.lam=fe(e.lam,+g))}if(this.es!==0){var v,p,y;v=e.phi<0?1:0,p=Math.tan(e.phi),y=this.b/Math.sqrt(p*p+this.one_minus_f_squared),e.phi=Math.atan(Math.sqrt(this.a*this.a-y*y)/(this.one_minus_f*y)),v&&(e.phi=-e.phi)}return e.lam+=this.long0,t.x=e.lam,t.y=e.phi,t}function Oi(t,e,i,n){var s;return t<x?(n.value=R.AREA_0,s=0):(s=Math.atan2(e,i),Math.abs(s)<=I?n.value=R.AREA_0:s>I&&s<=g+I?(n.value=R.AREA_1,s-=g):s>g+I||s<=-(g+I)?(n.value=R.AREA_2,s=s>=0?s-G:s+G):(n.value=R.AREA_3,s+=g)),s}function fe(t,e){var i=t+e;return i<-3.14159265359?i+=ni:i>3.14159265359&&(i-=ni),i}var W0=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const V0={init:H0,forward:U0,inverse:G0,names:W0};var Hs=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],je=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],po=.8487,vo=1.3523,bo=bt/5,Q0=1/bo,ce=18,Yi=function(t,e){return t[0]+e*(t[1]+e*(t[2]+e*t[3]))},X0=function(t,e){return t[1]+e*(2*t[2]+e*3*t[3])};function J0(t,e,i,n){for(var s=e;n;--n){var a=t(s);if(s-=a,Math.abs(a)<i)break}return s}function K0(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function Y0(t){var e=M(t.x-this.long0),i=Math.abs(t.y),n=Math.floor(i*bo);n<0?n=0:n>=ce&&(n=ce-1),i=bt*(i-Q0*n);var s={x:Yi(Hs[n],i)*e,y:Yi(je[n],i)};return t.y<0&&(s.y=-s.y),s.x=s.x*this.a*po+this.x0,s.y=s.y*this.a*vo+this.y0,s}function Z0(t){var e={x:(t.x-this.x0)/(this.a*po),y:Math.abs(t.y-this.y0)/(this.a*vo)};if(e.y>=1)e.x/=Hs[ce][0],e.y=t.y<0?-g:g;else{var i=Math.floor(e.y*ce);for(i<0?i=0:i>=ce&&(i=ce-1);;)if(je[i][0]>e.y)--i;else if(je[i+1][0]<=e.y)++i;else break;var n=je[i],s=5*(e.y-n[0])/(je[i+1][0]-n[0]);s=J0(function(a){return(Yi(n,a)-e.y)/X0(n,a)},s,x,100),e.x/=Yi(Hs[i],s),e.y=(5*i+s)*U,t.y<0&&(e.y=-e.y)}return e.x=M(e.x+this.long0),e}var tm=["Robinson","robin"];const em={init:K0,forward:Y0,inverse:Z0,names:tm};function im(){this.name="geocent"}function sm(t){var e=so(t,this.es,this.a);return e}function nm(t){var e=no(t,this.es,this.a,this.b);return e}var am=["Geocentric","geocentric","geocent","Geocent"];const rm={init:im,forward:sm,inverse:nm,names:am};var W={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},ze={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function om(){if(Object.keys(ze).forEach((function(i){if(typeof this[i]>"u")this[i]=ze[i].def;else{if(ze[i].num&&isNaN(this[i]))throw new Error("Invalid parameter value, must be numeric "+i+" = "+this[i]);ze[i].num&&(this[i]=parseFloat(this[i]))}ze[i].degrees&&(this[i]=this[i]*U)}).bind(this)),Math.abs(Math.abs(this.lat0)-g)<x?this.mode=this.lat0<0?W.S_POLE:W.N_POLE:Math.abs(this.lat0)<x?this.mode=W.EQUIT:(this.mode=W.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var t=this.tilt,e=this.azi;this.cg=Math.cos(e),this.sg=Math.sin(e),this.cw=Math.cos(t),this.sw=Math.sin(t)}function hm(t){t.x-=this.long0;var e=Math.sin(t.y),i=Math.cos(t.y),n=Math.cos(t.x),s,a;switch(this.mode){case W.OBLIQ:a=this.sinph0*e+this.cosph0*i*n;break;case W.EQUIT:a=i*n;break;case W.S_POLE:a=-e;break;case W.N_POLE:a=e;break}switch(a=this.pn1/(this.p-a),s=a*i*Math.sin(t.x),this.mode){case W.OBLIQ:a*=this.cosph0*e-this.sinph0*i*n;break;case W.EQUIT:a*=e;break;case W.N_POLE:a*=-(i*n);break;case W.S_POLE:a*=i*n;break}var r,o;return r=a*this.cg+s*this.sg,o=1/(r*this.sw*this.h1+this.cw),s=(s*this.cg-a*this.sg)*this.cw*o,a=r*o,t.x=s*this.a,t.y=a*this.a,t}function lm(t){t.x/=this.a,t.y/=this.a;var e={x:t.x,y:t.y},i,n,s;s=1/(this.pn1-t.y*this.sw),i=this.pn1*t.x*s,n=this.pn1*t.y*this.cw*s,t.x=i*this.cg+n*this.sg,t.y=n*this.cg-i*this.sg;var a=Y(t.x,t.y);if(Math.abs(a)<x)e.x=0,e.y=t.y;else{var r,o;switch(o=1-a*a*this.pfact,o=(this.p-Math.sqrt(o))/(this.pn1/a+a/this.pn1),r=Math.sqrt(1-o*o),this.mode){case W.OBLIQ:e.y=Math.asin(r*this.sinph0+t.y*o*this.cosph0/a),t.y=(r-this.sinph0*Math.sin(e.y))*a,t.x*=o*this.cosph0;break;case W.EQUIT:e.y=Math.asin(t.y*o/a),t.y=r*a,t.x*=o;break;case W.N_POLE:e.y=Math.asin(r),t.y=-t.y;break;case W.S_POLE:e.y=-Math.asin(r);break}e.x=Math.atan2(t.x,t.y)}return t.x=e.x+this.long0,t.y=e.y,t}var cm=["Tilted_Perspective","tpers"];const um={init:om,forward:hm,inverse:lm,names:cm};function dm(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var t=1-this.es,e=1/t;this.radius_p=Math.sqrt(t),this.radius_p2=t,this.radius_p_inv2=e,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function fm(t){var e=t.x,i=t.y,n,s,a,r;if(e=e-this.long0,this.shape==="ellipse"){i=Math.atan(this.radius_p2*Math.tan(i));var o=this.radius_p/Y(this.radius_p*Math.cos(i),Math.sin(i));if(s=o*Math.cos(e)*Math.cos(i),a=o*Math.sin(e)*Math.cos(i),r=o*Math.sin(i),(this.radius_g-s)*s-a*a-r*r*this.radius_p_inv2<0)return t.x=Number.NaN,t.y=Number.NaN,t;n=this.radius_g-s,this.flip_axis?(t.x=this.radius_g_1*Math.atan(a/Y(r,n)),t.y=this.radius_g_1*Math.atan(r/n)):(t.x=this.radius_g_1*Math.atan(a/n),t.y=this.radius_g_1*Math.atan(r/Y(a,n)))}else this.shape==="sphere"&&(n=Math.cos(i),s=Math.cos(e)*n,a=Math.sin(e)*n,r=Math.sin(i),n=this.radius_g-s,this.flip_axis?(t.x=this.radius_g_1*Math.atan(a/Y(r,n)),t.y=this.radius_g_1*Math.atan(r/n)):(t.x=this.radius_g_1*Math.atan(a/n),t.y=this.radius_g_1*Math.atan(r/Y(a,n))));return t.x=t.x*this.a,t.y=t.y*this.a,t}function mm(t){var e=-1,i=0,n=0,s,a,r,o;if(t.x=t.x/this.a,t.y=t.y/this.a,this.shape==="ellipse"){this.flip_axis?(n=Math.tan(t.y/this.radius_g_1),i=Math.tan(t.x/this.radius_g_1)*Y(1,n)):(i=Math.tan(t.x/this.radius_g_1),n=Math.tan(t.y/this.radius_g_1)*Y(1,i));var h=n/this.radius_p;if(s=i*i+h*h+e*e,a=2*this.radius_g*e,r=a*a-4*s*this.C,r<0)return t.x=Number.NaN,t.y=Number.NaN,t;o=(-a-Math.sqrt(r))/(2*s),e=this.radius_g+o*e,i*=o,n*=o,t.x=Math.atan2(i,e),t.y=Math.atan(n*Math.cos(t.x)/e),t.y=Math.atan(this.radius_p_inv2*Math.tan(t.y))}else if(this.shape==="sphere"){if(this.flip_axis?(n=Math.tan(t.y/this.radius_g_1),i=Math.tan(t.x/this.radius_g_1)*Math.sqrt(1+n*n)):(i=Math.tan(t.x/this.radius_g_1),n=Math.tan(t.y/this.radius_g_1)*Math.sqrt(1+i*i)),s=i*i+n*n+e*e,a=2*this.radius_g*e,r=a*a-4*s*this.C,r<0)return t.x=Number.NaN,t.y=Number.NaN,t;o=(-a-Math.sqrt(r))/(2*s),e=this.radius_g+o*e,i*=o,n*=o,t.x=Math.atan2(i,e),t.y=Math.atan(n*Math.cos(t.x)/e)}return t.x=t.x+this.long0,t}var pm=["Geostationary Satellite View","Geostationary_Satellite","geos"];const vm={init:dm,forward:fm,inverse:mm,names:pm};var We=1.340264,Ve=-.081106,Qe=893e-6,Xe=.003796,Zi=Math.sqrt(3)/2;function bm(){this.es=0,this.long0=this.long0!==void 0?this.long0:0}function gm(t){var e=M(t.x-this.long0),i=t.y,n=Math.asin(Zi*Math.sin(i)),s=n*n,a=s*s*s;return t.x=e*Math.cos(n)/(Zi*(We+3*Ve*s+a*(7*Qe+9*Xe*s))),t.y=n*(We+Ve*s+a*(Qe+Xe*s)),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function ym(t){t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a;var e=1e-9,i=12,n=t.y,s,a,r,o,h,l;for(l=0;l<i&&(s=n*n,a=s*s*s,r=n*(We+Ve*s+a*(Qe+Xe*s))-t.y,o=We+3*Ve*s+a*(7*Qe+9*Xe*s),n-=h=r/o,!(Math.abs(h)<e));++l);return s=n*n,a=s*s*s,t.x=Zi*t.x*(We+3*Ve*s+a*(7*Qe+9*Xe*s))/Math.cos(n),t.y=Math.asin(Math.sin(n)/Zi),t.x=M(t.x+this.long0),t}var _m=["eqearth","Equal Earth","Equal_Earth"];const xm={init:bm,forward:gm,inverse:ym,names:_m};var oi=1e-10;function Mm(){var t;if(this.phi1=this.lat1,Math.abs(this.phi1)<oi)throw new Error;this.es?(this.en=hn(this.es),this.m1=Ie(this.phi1,this.am1=Math.sin(this.phi1),t=Math.cos(this.phi1),this.en),this.am1=t/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=Em,this.forward=wm):(Math.abs(this.phi1)+oi>=g?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=Sm,this.forward=Cm)}function wm(t){var e=M(t.x-(this.long0||0)),i=t.y,n,s,a;return n=this.am1+this.m1-Ie(i,s=Math.sin(i),a=Math.cos(i),this.en),s=a*e/(n*Math.sqrt(1-this.es*s*s)),t.x=n*Math.sin(s),t.y=this.am1-n*Math.cos(s),t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function Em(t){t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a;var e,i,n,s;if(i=Y(t.x,t.y=this.am1-t.y),s=ln(this.am1+this.m1-i,this.es,this.en),(e=Math.abs(s))<g)e=Math.sin(s),n=i*Math.atan2(t.x,t.y)*Math.sqrt(1-this.es*e*e)/Math.cos(s);else if(Math.abs(e-g)<=oi)n=0;else throw new Error;return t.x=M(n+(this.long0||0)),t.y=Ht(s),t}function Cm(t){var e=M(t.x-(this.long0||0)),i=t.y,n,s;return s=this.cphi1+this.phi1-i,Math.abs(s)>oi?(t.x=s*Math.sin(n=e*Math.cos(i)/s),t.y=this.cphi1-s*Math.cos(n)):t.x=t.y=0,t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function Sm(t){t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a;var e,i,n=Y(t.x,t.y=this.cphi1-t.y);if(i=this.cphi1+this.phi1-n,Math.abs(i)>g)throw new Error;return Math.abs(Math.abs(i)-g)<=oi?e=0:e=n*Math.atan2(t.x,t.y)/Math.cos(i),t.x=M(e+(this.long0||0)),t.y=Ht(i),t}var $m=["bonne","Bonne (Werner lat_1=90)"];const Am={init:Mm,names:$m};function Om(t){t.Proj.projections.add(Ri),t.Proj.projections.add(Li),t.Proj.projections.add(Md),t.Proj.projections.add(Nd),t.Proj.projections.add(Bd),t.Proj.projections.add(Hd),t.Proj.projections.add(Xd),t.Proj.projections.add(tf),t.Proj.projections.add(rf),t.Proj.projections.add(uf),t.Proj.projections.add(Af),t.Proj.projections.add(If),t.Proj.projections.add(qf),t.Proj.projections.add(Gf),t.Proj.projections.add(Jf),t.Proj.projections.add(e0),t.Proj.projections.add(r0),t.Proj.projections.add(u0),t.Proj.projections.add(b0),t.Proj.projections.add(M0),t.Proj.projections.add($0),t.Proj.projections.add(N0),t.Proj.projections.add(z0),t.Proj.projections.add(D0),t.Proj.projections.add(V0),t.Proj.projections.add(em),t.Proj.projections.add(rm),t.Proj.projections.add(um),t.Proj.projections.add(vm),t.Proj.projections.add(xm),t.Proj.projections.add(Am)}ot.defaultDatum="WGS84";ot.Proj=gt;ot.WGS84=new ot.Proj("WGS84");ot.Point=we;ot.toPoint=ao;ot.defs=X;ot.nadgrid=Eu;ot.transform=Ji;ot.mgrs=ju;ot.version="__VERSION__";Om(ot);function go(){const t=document.getElementById("coordX").value,e=document.getElementById("coordY").value,i=document.getElementById("coordZ").value;return[document.getElementById("chk1").checked,t,e,i]}let se=null,Wt=null,Es=0,ba=null,Et=null;async function km(){const t=new ya;t.init(),t.get(_a);const e=t.get(xa);await e.setup();const i=[];for(const p of i)e.settings.excludedCategories.add(p);e.settings.webIfc.COORDINATE_TO_ORIGIN=!0;async function n(p,y,_){const S=await(await fetch("https://manchadoc.github.io/bimxr/assets/dpto.ifc")).arrayBuffer(),$=new Uint8Array(S);Et=await e.load($),Et.name="example",r.add(Et);const E=new tt.Vector3;E.setFromMatrixPosition(p);const T=Et.coordinationMatrix.clone();T.invert();const O=new tt.Vector3(y.x,y.y,y.z).applyMatrix4(T);O.z*=-1;const P=O.sub(E);Et.position.set(P.x,-y.y,-P.z);const k=Et.getLocalProperties();console.log(k)}const s=document.createElement("canvas");document.body.appendChild(s);const a=s.getContext("webgl",{xrCompatible:!0}),r=new tt.Scene,o=new tt.DirectionalLight(16777215,.5);o.position.set(10,15,10);const h=new tt.AmbientLight(16777215,.3);r.add(h),r.add(o);const l=new ko;let u;l.load("https://immersive-web.github.io/webxr-samples/media/gltf/reticle/reticle.gltf",function(p){u=p.scene,u.visible=!1,r.add(u)});const c=new tt.WebGLRenderer({alpha:!0,preserveDrawingBuffer:!0,canvas:s,context:a});c.autoClear=!1;const d=window.innerWidth,f=window.innerHeight,m=d/f,v=new tt.PerspectiveCamera(50,m,.1,1e3);if(v.matrixAutoUpdate=!1,navigator.xr){const p=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["local-floor","hit-test"]});p.updateRenderState({baseLayer:new XRWebGLLayer(p,a)});const y=document.getElementById("overlayText");y.textContent="Seleccione el origen de ubicación del modelo";const _=await p.requestReferenceSpace("local-floor"),w=await p.requestReferenceSpace("viewer"),S=await p.requestHitTestSource({space:w}),$=T=>{if(Es+=1,Es==1)ba=se.transform.position,Wt.transform.orientation,y.textContent="Seleccione la dirección del eje X";else if(Es==2){const O=go();let P,k=new tt.Matrix4().makeTranslation(0,0,0);O[0]?k.makeTranslation(parseFloat(O[1]),parseFloat(O[3]),parseFloat(O[2])):getCurrentUTM(Q=>{P=Q,k.makeTranslation(P[0],O[3],P[1])}),Wt.transform.orientation;let q=Wt.transform.orientation,V=new tt.Euler().setFromQuaternion(new tt.Quaternion(q.x,q.y,q.z,q.w)),H=new tt.Euler(0,V.y,0);new tt.Quaternion().setFromEuler(H),n(k,ba)}};p.addEventListener("select",$);const E=(T,O)=>{if(p.requestAnimationFrame(E),a.bindFramebuffer(a.FRAMEBUFFER,p.renderState.baseLayer.framebuffer),se=O.getViewerPose(_),se){for(let P of se.views){const k=se.views[0],q=p.renderState.baseLayer.getViewport(k);c.setSize(q.width,q.height),v.matrix.fromArray(k.transform.matrix),v.projectionMatrix.fromArray(k.projectionMatrix),v.updateMatrixWorld(!0);const V=O.getHitTestResults(S);if(V.length>0&&u&&(Wt=V[0].getPose(_),u.visible=!0,u.position.set(Wt.transform.position.x,Wt.transform.position.y,Wt.transform.position.z),u.updateMatrixWorld(!0)),Et){const H=se.views[0].transform.position,Q=Et.position,wt=Et.coordinationMatrix.clone();wt.invert();const st=new tt.Vector3(H.x-Q.x,H.y,H.z-Q.z).applyMatrix4(wt);st.z*=-1,y.textContent=H.x+", "+H.y+", "+H.z+" ||| "+st.x.toFixed(2)+" | "+st.z.toFixed(2)}}c.render(r,v)}};p.requestAnimationFrame(E)}}let hi,Je,vt,li=null,re=null,ki=null,yo=null,ga=null;async function Tm(){const t=document.getElementById("container");Je=new Eo,hi=new Co(70,window.innerWidth/window.innerHeight,.01,20);const e=new So(16777215,12303359,1);e.position.set(.5,1,.25),Je.add(e),vt=new $o({antialias:!0,alpha:!0}),vt.setPixelRatio(window.devicePixelRatio),vt.setSize(window.innerWidth,window.innerHeight),vt.xr.enabled=!0,t.appendChild(vt.domElement),li===null?navigator.xr.requestSession("immersive-ar",{requiredFeatures:["local-floor","hit-test"]}).then(Cs):(li.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",{requiredFeatures:["local-floor","hit-test"]}).then(Cs).catch(n=>{console.warn(n)})),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",{requiredFeatures:["local-floor","hit-test"]}).then(Cs).catch(n=>{console.warn(n)}),window.addEventListener("resize",Nm),document.getElementById("slider").addEventListener("input",n=>{re.traverse(s=>{if(s.isMesh){const a=s.material;a[0].transparent=!0,a[0].opacity=parseFloat(n.target.value)}}),vt.render(Je,hi)})}function Nm(){hi.aspect=window.innerWidth/window.innerHeight,hi.updateProjectionMatrix(),vt.setSize(window.innerWidth,window.innerHeight)}function _o(t,e){ki=e.getViewerPose(yo);const i=e.session;ga===null&&ki&&(ga={position:ki.transform.position,orientation:ki.transform.orientation}),vt.render(Je,hi),i.requestAnimationFrame(_o)}async function Cs(t){t.addEventListener("end",xo),vt.xr.setReferenceSpaceType("local-floor"),await vt.xr.setSession(t),li=t,yo=await t.requestReferenceSpace("local-floor"),await Pm(),t.requestAnimationFrame(_o)}function xo(){li.removeEventListener("end",xo),li=null}async function Pm(){const t=new ya;t.init(),t.get(_a);const e=t.get(xa);await e.setup();const i=[];for(const m of i)e.settings.excludedCategories.add(m);e.settings.webIfc.COORDINATE_TO_ORIGIN=!0;const s=await(await fetch("https://manchadoc.github.io/bimxr/assets/dpto.ifc")).arrayBuffer(),a=new Uint8Array(s),r=await e.load(a);r.name="example",re=r,re.traverse(m=>{if(m.isMesh){const v=m.material;v[0].transparent=!0,v[0].opacity=parseFloat(.7)}});const o=go();let h,l=new Ao().makeTranslation(0,0,0);o[0]?l.makeTranslation(parseFloat(o[1]),parseFloat(o[3]),parseFloat(o[2])):getCurrentUTM(m=>{h=m,l.makeTranslation(h[0],o[3],h[1])});const u=new ms;new ms(0,1.7,0),u.setFromMatrixPosition(l);const c=re.coordinationMatrix.clone();c.invert();const d=new ms(0,0,0).applyMatrix4(c);d.z*=-1;const f=d.sub(u);console.log(f),re.position.set(f.x,f.y,-f.z),console.log(re.position),Je.add(r),r.getLocalProperties()}document.getElementById("fetchButton").addEventListener("click",()=>{overlayText.style.display="block",overlay.style.display="block",km()});document.getElementById("basicAR").addEventListener("click",()=>{overlayText.style.display="block",overlay.style.display="block",Tm()});document.getElementById("basicVR").addEventListener("click",()=>{overlayText.style.display="block",Oo()})});export default Im();
