(function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-76d57576":"b6e518db"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-76d57576":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-76d57576":"c2085d6d"}[e]+".css",a=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],d.parentNode.removeChild(d),n(s)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"04b0":function(e,t,n){e.exports=n.p+"img/connection-status-welcome.57d41e0e.svg"},"154a":function(e,t,n){},"1db8":function(e,t,n){e.exports=n.p+"img/onboarding-dark.b3d3144a.png"},"3fe3":function(e,t,n){},4924:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},["CONNECTING"===e.scene?n("ConnectionStatus",{attrs:{goToNextScene:e.goToNextScene}}):e._e(),"ONBOARDING"===e.scene?n("Onboarding",{attrs:{goToNextScene:e.goToNextScene}}):e._e(),"TRAIN"===e.scene?n("Train",{attrs:{goToNextScene:e.goToNextScene}}):e._e()],1)],1)},a=[],s=(n("c975"),n("b64b"),n("07ac"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[1===e.stage?r("h1",{key:"1",staticClass:"centered"},[e._v("Connecting...")]):e._e(),2===e.stage?r("div",{key:"2"},[2===e.stage?r("img",{staticClass:"text",attrs:{src:n("04b0")}}):e._e(),2===e.stage?r("img",{staticClass:"entrance",attrs:{src:n("5972")}}):e._e(),2===e.stage?r("img",{staticClass:"silhouette",attrs:{src:n("a497")}}):e._e()]):e._e()])],1)}),c=[],i={name:"ConnectionStatus",props:{goToNextScene:Function},sockets:{connect:function(){this.stage++},intro_scene:function(){this.goToNextScene()}},data:function(){return{stage:1}}},u=i,l=(n("895b"),n("2877")),f=Object(l["a"])(u,s,c,!1,null,"394691ae",null),d=f.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"full-height"},[1===e.stage?r("div",{staticClass:"full-height instruction"},[r("img",{staticClass:"hand",attrs:{src:n("b00f")}}),e._m(0)]):e._e(),r("div",{staticClass:"full-height canvas-wrapper",class:{opaque:e.stage>1},attrs:{id:"canvas-wrapper"},on:{touchstart:e.startErasing}},[r("vue-eraser",{ref:"vueEraser",staticClass:"full-height",attrs:{size:80,resultSrc:"",coverSrc:n("1db8"),completeFunction:e.complete}}),r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"centered text"},[e._v(" Pay attention to the big screen while you swipe on the screen ")])])],1)])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"centered text"},[n("br"),e._v(" You can try to swipe over your screen ")])}],h=n("67bc"),v=n.n(h),m=n("7fbf"),b=n.n(m),y={name:"Onboarding",props:{emitSocketMsg:Function,goToNextScene:Function},data:function(){return{stage:1}},components:{"vue-eraser":b.a},methods:{startErasing:function(){this.stage=2,(new v.a).enable()},complete:function(){this.$socket.emit("client_erase_block")}},sockets:{cut_scene:function(){this.goToNextScene()}}},_=y,N=(n("abbf"),Object(l["a"])(_,p,g,!1,null,"e5a66bc4",null)),w=N.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"carriage"})])}],O={name:"",props:{}},S=O,T=(n("a9e7"),Object(l["a"])(S,C,x,!1,null,"3701ef49",null)),E=T.exports,k={CONNECTING:"CONNECTING",ONBOARDING:"ONBOARDING",TRAIN:"TRAIN"},j={name:"app",components:{ConnectionStatus:d,Onboarding:w,Train:E},data:function(){return{scene:k.CONNECTING,connected:!1}},methods:{goToNextScene:function(){var e=Object.values(k).indexOf(this.scene);this.scene=k[Object.keys(k)[e+1]]}},mounted:function(){var e=this;window.addEventListener("keydown",(function(t){32===t.keyCode&&e.goToNextScene()}))}},A=j,I=(n("034f"),Object(l["a"])(A,o,a,!1,null,null,null)),P=I.exports,L=n("5132"),R=n.n(L);n("f5df1");n.e("chunk-76d57576").then(n.t.bind(null,"845f",7)),r["a"].config.productionTip=!1;var $=!1;r["a"].use(new R.a({debug:!0,connection:$?"http://10.18.84.78:3000/web-client":"/web-client"}),b.a),new r["a"]({render:function(e){return e(P)},mounted:function(){window.addEventListener("touchstart",(function(e){e.preventDefault()}),{passive:!1}),history.pushState(null,null,document.URL),window.addEventListener("popstate",(function(){history.pushState(null,null,document.URL)}))}}).$mount("#app")},5972:function(e,t,n){e.exports=n.p+"img/connection-status-entry.ffa24e08.png"},"85ec":function(e,t,n){},"895b":function(e,t,n){"use strict";var r=n("4924"),o=n.n(r);o.a},a497:function(e,t,n){e.exports=n.p+"img/connection-status-silhouette.851d22df.png"},a9e7:function(e,t,n){"use strict";var r=n("154a"),o=n.n(r);o.a},abbf:function(e,t,n){"use strict";var r=n("3fe3"),o=n.n(r);o.a},b00f:function(e,t,n){e.exports=n.p+"img/onboarding-hand.55563bd5.gif"}});
//# sourceMappingURL=app.3b5fa2e9.js.map