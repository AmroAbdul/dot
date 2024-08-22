import{r as G,a as mt}from"./client-64cc3330.js";import{h as ht}from"./index-1a12ff06.js";var Ie=function(t){return t.reduce(function(r,n){var a=n[0],o=n[1];return r[a]=o,r},{})},Ue=typeof window<"u"&&window.document&&window.document.createElement?G.useLayoutEffect:G.useEffect,R="top",T="bottom",L="right",B="left",Se="auto",ue=[R,T,L,B],Z="start",se="end",yt="clippingParents",et="viewport",ae="popper",gt="reference",ze=ue.reduce(function(e,t){return e.concat([t+"-"+Z,t+"-"+se])},[]),tt=[].concat(ue,[Se]).reduce(function(e,t){return e.concat([t,t+"-"+Z,t+"-"+se])},[]),wt="beforeRead",bt="read",xt="afterRead",Ot="beforeMain",Et="main",At="afterMain",Pt="beforeWrite",jt="write",St="afterWrite",Dt=[wt,bt,xt,Ot,Et,At,Pt,jt,St];function F(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=C(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=C(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function De(e){if(typeof ShadowRoot>"u")return!1;var t=C(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Rt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},o=t.elements[r];!M(o)||!F(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(u){var i=a[u];i===!1?o.removeAttribute(u):o.setAttribute(u,i===!0?"":i)}))})}function Bt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],o=t.attributes[n]||{},u=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=u.reduce(function(s,c){return s[c]="",s},{});!M(a)||!F(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const $t={name:"applyStyles",enabled:!0,phase:"write",fn:Rt,effect:Bt,requires:["computeStyles"]};function H(e){return e.split("-")[0]}var J=Math.max,we=Math.min,_=Math.round;function Pe(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function rt(){return!/^((?!chrome|android).)*safari/i.test(Pe())}function ee(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&M(e)&&(a=e.offsetWidth>0&&_(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&_(n.height)/e.offsetHeight||1);var u=K(e)?C(e):window,i=u.visualViewport,s=!rt()&&r,c=(n.left+(s&&i?i.offsetLeft:0))/a,f=(n.top+(s&&i?i.offsetTop:0))/o,l=n.width/a,m=n.height/o;return{width:l,height:m,top:f,right:c+l,bottom:f+m,left:c,x:c,y:f}}function Re(e){var t=ee(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function nt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&De(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(e){return C(e).getComputedStyle(e)}function Ct(e){return["table","td","th"].indexOf(F(e))>=0}function N(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}function be(e){return F(e)==="html"?e:e.assignedSlot||e.parentNode||(De(e)?e.host:null)||N(e)}function Xe(e){return!M(e)||V(e).position==="fixed"?null:e.offsetParent}function Mt(e){var t=/firefox/i.test(Pe()),r=/Trident/i.test(Pe());if(r&&M(e)){var n=V(e);if(n.position==="fixed")return null}var a=be(e);for(De(a)&&(a=a.host);M(a)&&["html","body"].indexOf(F(a))<0;){var o=V(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function ce(e){for(var t=C(e),r=Xe(e);r&&Ct(r)&&V(r).position==="static";)r=Xe(r);return r&&(F(r)==="html"||F(r)==="body"&&V(r).position==="static")?t:r||Mt(e)||t}function Be(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e,t,r){return J(e,we(t,r))}function Tt(e,t,r){var n=oe(e,t,r);return n>r?r:n}function at(){return{top:0,right:0,bottom:0,left:0}}function ot(e){return Object.assign({},at(),e)}function it(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Lt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ot(typeof t!="number"?t:it(t,ue))};function kt(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,u=r.modifiersData.popperOffsets,i=H(r.placement),s=Be(i),c=[B,L].indexOf(i)>=0,f=c?"height":"width";if(!(!o||!u)){var l=Lt(a.padding,r),m=Re(o),p=s==="y"?R:B,y=s==="y"?T:L,h=r.rects.reference[f]+r.rects.reference[s]-u[s]-r.rects.popper[f],v=u[s]-r.rects.reference[s],b=ce(o),O=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,E=h/2-v/2,d=l[p],g=O-m[f]-l[y],w=O/2-m[f]/2+E,x=oe(d,w,g),j=s;r.modifiersData[n]=(t={},t[j]=x,t.centerOffset=x-w,t)}}function Wt(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||nt(t.elements.popper,a)&&(t.elements.arrow=a))}const Ht={name:"arrow",enabled:!0,phase:"main",fn:kt,effect:Wt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function te(e){return e.split("-")[1]}var Ft={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Vt(e,t){var r=e.x,n=e.y,a=t.devicePixelRatio||1;return{x:_(r*a)/a||0,y:_(n*a)/a||0}}function Ye(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,u=e.offsets,i=e.position,s=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,l=e.isFixed,m=u.x,p=m===void 0?0:m,y=u.y,h=y===void 0?0:y,v=typeof f=="function"?f({x:p,y:h}):{x:p,y:h};p=v.x,h=v.y;var b=u.hasOwnProperty("x"),O=u.hasOwnProperty("y"),E=B,d=R,g=window;if(c){var w=ce(r),x="clientHeight",j="clientWidth";if(w===C(r)&&(w=N(r),V(w).position!=="static"&&i==="absolute"&&(x="scrollHeight",j="scrollWidth")),w=w,a===R||(a===B||a===L)&&o===se){d=T;var P=l&&w===g&&g.visualViewport?g.visualViewport.height:w[x];h-=P-n.height,h*=s?1:-1}if(a===B||(a===R||a===T)&&o===se){E=L;var A=l&&w===g&&g.visualViewport?g.visualViewport.width:w[j];p-=A-n.width,p*=s?1:-1}}var S=Object.assign({position:i},c&&Ft),k=f===!0?Vt({x:p,y:h},C(r)):{x:p,y:h};if(p=k.x,h=k.y,s){var D;return Object.assign({},S,(D={},D[d]=O?"0":"",D[E]=b?"0":"",D.transform=(g.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",D))}return Object.assign({},S,(t={},t[d]=O?h+"px":"",t[E]=b?p+"px":"",t.transform="",t))}function qt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,u=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,c={placement:H(t.placement),variation:te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ye(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:u,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ye(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Nt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:qt,data:{}};var he={passive:!0};function It(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,u=n.resize,i=u===void 0?!0:u,s=C(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(f){f.addEventListener("scroll",r.update,he)}),i&&s.addEventListener("resize",r.update,he),function(){o&&c.forEach(function(f){f.removeEventListener("scroll",r.update,he)}),i&&s.removeEventListener("resize",r.update,he)}}const Ut={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:It,data:{}};var zt={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(e){return e.replace(/left|right|bottom|top/g,function(t){return zt[t]})}var Xt={start:"end",end:"start"};function Ge(e){return e.replace(/start|end/g,function(t){return Xt[t]})}function $e(e){var t=C(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ce(e){return ee(N(e)).left+$e(e).scrollLeft}function Yt(e,t){var r=C(e),n=N(e),a=r.visualViewport,o=n.clientWidth,u=n.clientHeight,i=0,s=0;if(a){o=a.width,u=a.height;var c=rt();(c||!c&&t==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:u,x:i+Ce(e),y:s}}function Gt(e){var t,r=N(e),n=$e(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=J(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),u=J(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+Ce(e),s=-n.scrollTop;return V(a||r).direction==="rtl"&&(i+=J(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:u,x:i,y:s}}function Me(e){var t=V(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function st(e){return["html","body","#document"].indexOf(F(e))>=0?e.ownerDocument.body:M(e)&&Me(e)?e:st(be(e))}function ie(e,t){var r;t===void 0&&(t=[]);var n=st(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=C(n),u=a?[o].concat(o.visualViewport||[],Me(n)?n:[]):n,i=t.concat(u);return a?i:i.concat(ie(be(u)))}function je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Jt(e,t){var r=ee(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Je(e,t,r){return t===et?je(Yt(e,r)):K(t)?Jt(t,r):je(Gt(N(e)))}function Kt(e){var t=ie(be(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,n=r&&M(e)?ce(e):e;return K(n)?t.filter(function(a){return K(a)&&nt(a,n)&&F(a)!=="body"}):[]}function Qt(e,t,r,n){var a=t==="clippingParents"?Kt(e):[].concat(t),o=[].concat(a,[r]),u=o[0],i=o.reduce(function(s,c){var f=Je(e,c,n);return s.top=J(f.top,s.top),s.right=we(f.right,s.right),s.bottom=we(f.bottom,s.bottom),s.left=J(f.left,s.left),s},Je(e,u,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ft(e){var t=e.reference,r=e.element,n=e.placement,a=n?H(n):null,o=n?te(n):null,u=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(a){case R:s={x:u,y:t.y-r.height};break;case T:s={x:u,y:t.y+t.height};break;case L:s={x:t.x+t.width,y:i};break;case B:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var c=a?Be(a):null;if(c!=null){var f=c==="y"?"height":"width";switch(o){case Z:s[c]=s[c]-(t[f]/2-r[f]/2);break;case se:s[c]=s[c]+(t[f]/2-r[f]/2);break}}return s}function fe(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,u=o===void 0?e.strategy:o,i=r.boundary,s=i===void 0?yt:i,c=r.rootBoundary,f=c===void 0?et:c,l=r.elementContext,m=l===void 0?ae:l,p=r.altBoundary,y=p===void 0?!1:p,h=r.padding,v=h===void 0?0:h,b=ot(typeof v!="number"?v:it(v,ue)),O=m===ae?gt:ae,E=e.rects.popper,d=e.elements[y?O:m],g=Qt(K(d)?d:d.contextElement||N(e.elements.popper),s,f,u),w=ee(e.elements.reference),x=ft({reference:w,element:E,strategy:"absolute",placement:a}),j=je(Object.assign({},E,x)),P=m===ae?j:w,A={top:g.top-P.top+b.top,bottom:P.bottom-g.bottom+b.bottom,left:g.left-P.left+b.left,right:P.right-g.right+b.right},S=e.modifiersData.offset;if(m===ae&&S){var k=S[a];Object.keys(A).forEach(function(D){var I=[L,T].indexOf(D)>=0?1:-1,U=[R,T].indexOf(D)>=0?"y":"x";A[D]+=k[U]*I})}return A}function Zt(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,u=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?tt:s,f=te(n),l=f?i?ze:ze.filter(function(y){return te(y)===f}):ue,m=l.filter(function(y){return c.indexOf(y)>=0});m.length===0&&(m=l);var p=m.reduce(function(y,h){return y[h]=fe(e,{placement:h,boundary:a,rootBoundary:o,padding:u})[H(h)],y},{});return Object.keys(p).sort(function(y,h){return p[y]-p[h]})}function _t(e){if(H(e)===Se)return[];var t=ye(e);return[Ge(e),t,Ge(t)]}function er(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,i=u===void 0?!0:u,s=r.fallbackPlacements,c=r.padding,f=r.boundary,l=r.rootBoundary,m=r.altBoundary,p=r.flipVariations,y=p===void 0?!0:p,h=r.allowedAutoPlacements,v=t.options.placement,b=H(v),O=b===v,E=s||(O||!y?[ye(v)]:_t(v)),d=[v].concat(E).reduce(function(Q,q){return Q.concat(H(q)===Se?Zt(t,{placement:q,boundary:f,rootBoundary:l,padding:c,flipVariations:y,allowedAutoPlacements:h}):q)},[]),g=t.rects.reference,w=t.rects.popper,x=new Map,j=!0,P=d[0],A=0;A<d.length;A++){var S=d[A],k=H(S),D=te(S)===Z,I=[R,T].indexOf(k)>=0,U=I?"width":"height",$=fe(t,{placement:S,boundary:f,rootBoundary:l,altBoundary:m,padding:c}),W=I?D?L:B:D?T:R;g[U]>w[U]&&(W=ye(W));var pe=ye(W),z=[];if(o&&z.push($[k]<=0),i&&z.push($[W]<=0,$[pe]<=0),z.every(function(Q){return Q})){P=S,j=!1;break}x.set(S,z)}if(j)for(var le=y?3:1,xe=function(q){var ne=d.find(function(de){var X=x.get(de);if(X)return X.slice(0,q).every(function(Oe){return Oe})});if(ne)return P=ne,"break"},re=le;re>0;re--){var ve=xe(re);if(ve==="break")break}t.placement!==P&&(t.modifiersData[n]._skip=!0,t.placement=P,t.reset=!0)}}const tr={name:"flip",enabled:!0,phase:"main",fn:er,requiresIfExists:["offset"],data:{_skip:!1}};function Ke(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Qe(e){return[R,L,T,B].some(function(t){return e[t]>=0})}function rr(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,u=fe(t,{elementContext:"reference"}),i=fe(t,{altBoundary:!0}),s=Ke(u,n),c=Ke(i,a,o),f=Qe(s),l=Qe(c);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}const nr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rr};function ar(e,t,r){var n=H(e),a=[B,R].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,u=o[0],i=o[1];return u=u||0,i=(i||0)*a,[B,L].indexOf(n)>=0?{x:i,y:u}:{x:u,y:i}}function or(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,u=tt.reduce(function(f,l){return f[l]=ar(l,t.rects,o),f},{}),i=u[t.placement],s=i.x,c=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=u}const ir={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:or};function sr(e){var t=e.state,r=e.name;t.modifiersData[r]=ft({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const fr={name:"popperOffsets",enabled:!0,phase:"read",fn:sr,data:{}};function ur(e){return e==="x"?"y":"x"}function cr(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,i=u===void 0?!1:u,s=r.boundary,c=r.rootBoundary,f=r.altBoundary,l=r.padding,m=r.tether,p=m===void 0?!0:m,y=r.tetherOffset,h=y===void 0?0:y,v=fe(t,{boundary:s,rootBoundary:c,padding:l,altBoundary:f}),b=H(t.placement),O=te(t.placement),E=!O,d=Be(b),g=ur(d),w=t.modifiersData.popperOffsets,x=t.rects.reference,j=t.rects.popper,P=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(w){if(o){var D,I=d==="y"?R:B,U=d==="y"?T:L,$=d==="y"?"height":"width",W=w[d],pe=W+v[I],z=W-v[U],le=p?-j[$]/2:0,xe=O===Z?x[$]:j[$],re=O===Z?-j[$]:-x[$],ve=t.elements.arrow,Q=p&&ve?Re(ve):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:at(),ne=q[I],de=q[U],X=oe(0,x[$],Q[$]),Oe=E?x[$]/2-le-X-ne-A.mainAxis:xe-X-ne-A.mainAxis,ut=E?-x[$]/2+le+X+de+A.mainAxis:re+X+de+A.mainAxis,Ee=t.elements.arrow&&ce(t.elements.arrow),ct=Ee?d==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,Te=(D=S==null?void 0:S[d])!=null?D:0,pt=W+Oe-Te-ct,lt=W+ut-Te,Le=oe(p?we(pe,pt):pe,W,p?J(z,lt):z);w[d]=Le,k[d]=Le-W}if(i){var ke,vt=d==="x"?R:B,dt=d==="x"?T:L,Y=w[g],me=g==="y"?"height":"width",We=Y+v[vt],He=Y-v[dt],Ae=[R,B].indexOf(b)!==-1,Fe=(ke=S==null?void 0:S[g])!=null?ke:0,Ve=Ae?We:Y-x[me]-j[me]-Fe+A.altAxis,qe=Ae?Y+x[me]+j[me]-Fe-A.altAxis:He,Ne=p&&Ae?Tt(Ve,Y,qe):oe(p?Ve:We,Y,p?qe:He);w[g]=Ne,k[g]=Ne-Y}t.modifiersData[n]=k}}const pr={name:"preventOverflow",enabled:!0,phase:"main",fn:cr,requiresIfExists:["offset"]};function lr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function vr(e){return e===C(e)||!M(e)?$e(e):lr(e)}function dr(e){var t=e.getBoundingClientRect(),r=_(t.width)/e.offsetWidth||1,n=_(t.height)/e.offsetHeight||1;return r!==1||n!==1}function mr(e,t,r){r===void 0&&(r=!1);var n=M(t),a=M(t)&&dr(t),o=N(t),u=ee(e,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((F(t)!=="body"||Me(o))&&(i=vr(t)),M(t)?(s=ee(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):o&&(s.x=Ce(o))),{x:u.left+i.scrollLeft-s.x,y:u.top+i.scrollTop-s.y,width:u.width,height:u.height}}function hr(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var u=[].concat(o.requires||[],o.requiresIfExists||[]);u.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&a(s)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function yr(e){var t=hr(e);return Dt.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function gr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function wr(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var Ze={placement:"bottom",modifiers:[],strategy:"absolute"};function _e(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function br(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?Ze:a;return function(i,s,c){c===void 0&&(c=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ze,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},l=[],m=!1,p={state:f,setOptions:function(b){var O=typeof b=="function"?b(f.options):b;h(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:K(i)?ie(i):i.contextElement?ie(i.contextElement):[],popper:ie(s)};var E=yr(wr([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(d){return d.enabled}),y(),p.update()},forceUpdate:function(){if(!m){var b=f.elements,O=b.reference,E=b.popper;if(_e(O,E)){f.rects={reference:mr(O,ce(E),f.options.strategy==="fixed"),popper:Re(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var d=0;d<f.orderedModifiers.length;d++){if(f.reset===!0){f.reset=!1,d=-1;continue}var g=f.orderedModifiers[d],w=g.fn,x=g.options,j=x===void 0?{}:x,P=g.name;typeof w=="function"&&(f=w({state:f,options:j,name:P,instance:p})||f)}}}},update:gr(function(){return new Promise(function(v){p.forceUpdate(),v(f)})}),destroy:function(){h(),m=!0}};if(!_e(i,s))return p;p.setOptions(c).then(function(v){!m&&c.onFirstUpdate&&c.onFirstUpdate(v)});function y(){f.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,E=O===void 0?{}:O,d=v.effect;if(typeof d=="function"){var g=d({state:f,name:b,instance:p,options:E}),w=function(){};l.push(g||w)}})}function h(){l.forEach(function(v){return v()}),l=[]}return p}}var xr=[Ut,fr,Nt,$t,ir,tr,pr,Ht,nr],Or=br({defaultModifiers:xr}),Er=typeof Element<"u",Ar=typeof Map=="function",Pr=typeof Set=="function",jr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ge(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,a;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!ge(e[n],t[n]))return!1;return!0}var o;if(Ar&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;for(o=e.entries();!(n=o.next()).done;)if(!ge(n.value[1],t.get(n.value[0])))return!1;return!0}if(Pr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(jr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;if(Er&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&e.$$typeof)&&!ge(e[a[n]],t[a[n]]))return!1;return!0}return e!==e&&t!==t}var Sr=function(t,r){try{return ge(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Dr=ht(Sr);var Rr=[],Cr=function(t,r,n){n===void 0&&(n={});var a=G.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Rr},u=G.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),i=u[0],s=u[1],c=G.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var y=p.state,h=Object.keys(y.elements);mt.flushSync(function(){s({styles:Ie(h.map(function(v){return[v,y.styles[v]||{}]})),attributes:Ie(h.map(function(v){return[v,y.attributes[v]]}))})})},requires:["computeStyles"]}},[]),f=G.useMemo(function(){var m={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[c,{name:"applyStyles",enabled:!1}])};return Dr(a.current,m)?a.current||m:(a.current=m,m)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,c]),l=G.useRef();return Ue(function(){l.current&&l.current.setOptions(f)},[f]),Ue(function(){if(!(t==null||r==null)){var m=n.createPopper||Or,p=m(t,r,f);return l.current=p,function(){p.destroy(),l.current=null}}},[t,r,n.createPopper]),{state:l.current?l.current.state:null,styles:i.styles,attributes:i.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}};export{Cr as u};
