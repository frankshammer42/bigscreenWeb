(function(t){function e(e){for(var i,r,a=e[0],c=e[1],u=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var a=n[r];0!==o[a]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},o={app:0},s=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-76d57576":"b6e518db"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-76d57576":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-76d57576":"bb087f5c"}[t]+".css",o=c.p+i,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var u=s[a],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===i||d===o))return e()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){u=p[a],d=u.getAttribute("data-href");if(d===i||d===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var i=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete r[t],l.parentNode.removeChild(l),n(s)},l.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(l)})).then((function(){r[t]=0})));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise((function(e,n){i=o[t]=[e,n]}));e.push(i[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=a(t);var p=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",p.name="ChunkLoadError",p.type=i,p.request=r,n[1](p)}o[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var l=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"04b0":function(t,e,n){t.exports=n.p+"img/connection-status-welcome.57d41e0e.svg"},"04b4":function(t,e,n){},"099a":function(t,e,n){t.exports=n.p+"img/particle.38eeda37.png"},"0b10":function(t,e,n){t.exports=n.p+"img/train-thumbnail-7.a0321347.png"},1590:function(t,e,n){t.exports=n.p+"img/train-thumbnail-6.f1669133.png"},"1c0c":function(t,e,n){"use strict";var i=n("3858"),r=n.n(i);r.a},"1db8":function(t,e,n){t.exports=n.p+"img/onboarding-dark.b3d3144a.png"},2560:function(t,e,n){},"2a11":function(t,e,n){t.exports=n.p+"img/train-carriage-6.d0435e19.png"},"2a39":function(t,e,n){"use strict";var i=n("04b4"),r=n.n(i);r.a},3688:function(t,e,n){var i={"./train-thumbnail-1.png":"ff69","./train-thumbnail-2.png":"4c39","./train-thumbnail-3.png":"af73","./train-thumbnail-4.png":"b3f8","./train-thumbnail-5.png":"c138","./train-thumbnail-6.png":"1590","./train-thumbnail-7.png":"0b10"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="3688"},3858:function(t,e,n){},"427c":function(t,e,n){t.exports=n.p+"img/shadows-bg.ef54cc1e.jpg"},"47f9":function(t,e,n){t.exports=n.p+"img/shadows-shadow.ed1791a7.png"},"4c39":function(t,e,n){t.exports=n.p+"img/train-thumbnail-2.c456f9b7.png"},"4c62":function(t,e,n){},"4c7d":function(t,e,n){},"4f56":function(t,e,n){t.exports=n.p+"img/screens-remote-control-pressed.521fc0fd.png"},"54df":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isScene("CONNECTION_STATUS")?n("ConnectionStatus",{attrs:{goToNextScene:t.goToNextScene,development:t.development}}):t._e(),t.isScene("ONBOARDING")?n("Onboarding",{attrs:{goToWaiting:t.goToWaiting,stopCountdown:t.stopCountdown}}):t._e(),t.isScene("TRAIN")?n("Train",t._b({attrs:{goToWaiting:t.goToWaiting,stopCountdown:t.stopCountdown,development:t.development}},"Train",t.propsTrain,!1)):t._e(),t.isScene("SCREENS")?n("Screens",{attrs:{goToWaiting:t.goToWaiting,stopCountdown:t.stopCountdown,development:t.development}}):t._e(),t.isScene("SHADOWS")?n("Shadows",{attrs:{shadowIndex:t.shadowIndex,goToWaiting:t.goToWaiting,stopCountdown:t.stopCountdown,development:t.development}}):t._e(),t.isScene("STAIRCASE")?n("Staircase",t._b({attrs:{goToWaiting:t.goToWaiting,stopCountdown:t.stopCountdown,development:t.development}},"Staircase",t.propsStaircase,!1)):t._e(),t.isScene("ELSLAND")?n("Elsland",{attrs:{development:t.development}}):t._e()],1),n("transition",{attrs:{name:"fade"}},[t.waiting?n("Waiting"):t._e()],1),t.countdown<16&&t.countdown>0?n("div",{staticClass:"countdown"},[t._v(t._s(t.countdown))]):t._e(),t.development?n("button",{staticClass:"debug-button",on:{touchstart:t.goToNextScene,click:t.goToNextScene}},[t._v("Jump to Next Scene")]):t._e(),t.blinking?n("Blink"):t._e()],1)},o=[],s=(n("c975"),n("04d3"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"centered container"},[i("img",{staticClass:"logo",attrs:{src:n("a266")}}),i("p",{staticClass:"text"},[t._v("Wait for next interaction!")])])])}],c={name:"Waiting"},u=c,d=(n("e92c"),n("2877")),p=Object(d["a"])(u,s,a,!1,null,"8009f194",null),l=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blink"})},h=[],f={name:"Blink"},m=f,v=(n("2a39"),Object(d["a"])(m,g,h,!1,null,"b3633022",null)),w=v.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition-group",{staticClass:"wrapper",attrs:{tag:"div",name:"fade",mode:"out-in"}},[i("h1",{directives:[{name:"show",rawName:"v-show",value:1===t.stage,expression:"stage === 1"}],key:"1",staticClass:"centered"},[t._v("Connecting...")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.stage>=2,expression:"stage >= 2"}],key:"2",staticClass:"text"},[i("transition-group",{attrs:{tag:"div",name:"fade",mode:"out-in"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:2===t.stage,expression:"stage === 2"}],key:"1",staticClass:"welcome",attrs:{src:n("04b0")}}),i("p",{directives:[{name:"show",rawName:"v-show",value:3===t.stage,expression:"stage === 3"}],key:"2",staticClass:"instruction"},[t._v(" Most of the experience will be on the BIG SCREEN. "),i("br"),i("br"),t._v(" When you notice small particles on the screen, look back onto your phone. ")])]),i("transition",{attrs:{name:"entrance-animation",delay:"5000"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.stage<=4,expression:"stage <= 4"}],staticClass:"entrance",attrs:{src:n("5972")}})]),i("transition",{attrs:{name:"silhouette-animation"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.stage<=4,expression:"stage <= 4"}],staticClass:"silhouette",attrs:{src:n("a497")}})])],1)])},x=[],C={name:"ConnectionStatus",props:{goToNextScene:Function,development:Boolean},watch:{stage:function(t){var e=this;2===t&&setTimeout((function(){e.stage=3}),5e3),3===t&&this.development&&setTimeout((function(){e.stage=4}),6e3),4===t&&setTimeout((function(){e.stage=5}),1e3),5===t&&setTimeout((function(){e.stage=6}),8e3),6===t&&setTimeout((function(){e.goToNextScene()}))}},sockets:{connect:function(){this.stage=2},intro_scene:function(){this.stage=4}},data:function(){return{stage:1}},mounted:function(){var t=this;setTimeout((function(){t.development&&t.stage++}),1e3)}},_=C,S=(n("c13f"),Object(d["a"])(_,b,x,!1,null,"727f9b92",null)),T=S.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"full-height"},[i("transition",{attrs:{name:"fade",appear:""}},[1===t.stage?i("div",{staticClass:"full-height instruction"},[i("img",{staticClass:"hand",attrs:{src:n("b00f")}}),i("div",{staticClass:"centered text"},[i("br"),t._v(" You can try to swipe over your screen ")])]):t._e()]),i("div",{staticClass:"full-height canvas-wrapper",class:{opaque:t.stage>1},attrs:{id:"canvas-wrapper"},on:{touchstart:t.startErasing,mousedown:t.startErasing}},[i("vue-eraser",{ref:"vueEraser",staticClass:"full-height",attrs:{size:80,completeRatio:.75,resultSrc:"",coverSrc:n("1db8"),completeFunction:t.complete}}),i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"centered text"},[i("img",{attrs:{src:n("d0a9")}})])])],1)],1)])},W=[],I=n("67bc"),E=n.n(I),O=n("7fbf"),N=n.n(O),k={name:"Onboarding",props:{goToWaiting:Function,stopCountdown:Function},data:function(){return{stage:1}},components:{"vue-eraser":N.a},methods:{startErasing:function(){(new E.a).enable(),this.stage=2},complete:function(){this.stopCountdown(),this.$socket.emit("client_erase_block")}}},P=k,D=(n("1c0c"),Object(d["a"])(P,y,W,!1,null,"e238386c",null)),A=D.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",on:{touchmove:t.cut,mousemove:t.cut}},[n("div",{staticClass:"inner-wrapper",style:{backgroundImage:t.innerWrapperBackground}},[n("div",{staticClass:"centered-horizontal train"}),n("div",{staticClass:"centered-horizontal",attrs:{id:"carriage-container",ondragstart:"return false;",ondrop:"return false;"}},[n("div",{ref:"carriage1",staticClass:"carriage",attrs:{id:"carriage-1"}},[n("img",{style:{webkitClipPath:t.clipPathLeft},attrs:{src:t.carriageImg}})]),n("div",{ref:"carriage2",staticClass:"carriage",attrs:{id:"carriage-2"}},[n("img",{style:{webkitClipPath:t.clipPathRight},attrs:{src:t.carriageImg}})]),n("transition",{attrs:{name:"fade"}},[t.cutCompleted?t._e():n("div",{staticClass:"carriage-divider-wrapper",style:{transform:t.dividerTransform}},[n("div",{staticClass:"centered carriage-divider",style:{width:t.dividerWidth,webkitClipPath:t.clipPathDivider}})])]),n("transition",{attrs:{name:"fade"}},[t.cutCompleted?t._e():n("div",{staticClass:"particle-wrapper",style:{transform:t.dividerTransform}},[n("div",{staticClass:"centered",style:{width:t.particleWrapperWidth}},[n("div",{staticClass:"particle",style:{right:t.particleRight}})])])])],1)])])},M=[],B=(n("99af"),n("a9e3"),n("e25e"),n("17b2")),R={name:"Train",props:{top:Number,bottom:Number,cutIndex:Number,segmentIndex:Number,goToWaiting:Function,stopCountdown:Function,development:Boolean},data:function(){return{progress:0,carriageImgWidth:0,carriageImgHeight:0,dividerMultiple:1.3}},watch:{progress:function(t){var e=this;t>=1&&(this.stopCountdown(),this.$socket.emit("client_cut",this.cutIndex),this.development&&(setTimeout((function(){e.explode()}),1e3),setTimeout((function(){e.goToWaiting()}),3e3)))}},computed:{clipPathLeft:function(){return this.clipPath()},clipPathRight:function(){return this.clipPath(!0)},clipPathDivider:function(){if(0!==this.progress){var t=100*(1-(.05/(this.dividerMultiple/2)+this.progress/this.dividerMultiple));return this.top>this.bottom?"polygon(0 0, ".concat(t,"% 0, ").concat(t,"% 100%, 0 100%)"):"polygon(100% 0, ".concat(100-t,"% 0, ").concat(100-t,"% 100%, 100% 100%)")}},dividerDegree:function(){var t=100*(this.bottom-this.top),e=this.carriageImgHeight/(t/100*this.carriageImgWidth);return Math.atan(e)/(Math.PI/180)},dividerTransform:function(){var t=.5*(this.top+this.bottom-1)*100,e=Math.round(this.dividerDegree);return"translate(".concat(t,"%, -50%) rotate(").concat(e,"deg)")},particleWrapperWidth:function(){var t=2*Math.PI/360*this.dividerDegree,e=Math.sin(t),n=Math.abs(this.carriageImgHeight/this.carriageImgWidth/e*100);return n+"%"},dividerWidth:function(){return this.dividerMultiple*parseInt(this.particleWrapperWidth)+"%"},cutCompleted:function(){return this.progress>=1},innerWrapperBackground:function(){var t=n("3688")("./train-thumbnail-".concat(this.segmentIndex+1,".png"));return"url(".concat(t,")")},particleRight:function(){var t;return t=this.top>=this.bottom?this.progress:1-this.progress,100*t+"%"},carriageImg:function(){return n("f0e5")("./train-carriage-".concat(this.segmentIndex+1,".png"))}},methods:{cut:function(t){if(this.progress>1&&(this.progress=1),!(this.progress>=1)){var e=.1,n=30,i=document.getElementById("carriage-container"),r=i.getBoundingClientRect(),o=t;t.targetTouches&&(o=t.targetTouches[0]);var s=i.offsetWidth,a=r.left+s*this.top,c=r.left+s*this.bottom,u=a+(c-a)*(this.progress+e),d=i.offsetHeight,p=r.top+d*(this.progress+e),l=Math.abs(o.pageX-u),g=Math.abs(o.pageY-p),h=Math.sqrt(l*l+g*g);h<n&&(this.progress>.9?this.progress=1:this.progress=this.progress+e)}},explode:function(){var t=this,e=document.getElementById("carriage-container");e.style.height=e.offsetHeight+"px";var n=this.$refs,i=n.carriage1,r=n.carriage2,o=new B["TimelineLite"];o.to(i,2,{y:600,x:-300,rotate:-30,scale:.5,rotateX:90,rotateY:90}),o.to(r,2,{y:600,x:300,rotate:50,scale:.2,rotateX:90,rotateY:90},0),setTimeout((function(){t.goToWaiting()}),3e3)},clipPath:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=100*this.top-100*(this.top-this.bottom)*this.progress,n=100*this.progress,i=2;return t?"polygon(100% 0, ".concat(100*this.top+i,"% 0, ").concat(e+i,"% ").concat(n,"%, ").concat(e,"% ").concat(n,"%, ").concat(100*this.bottom,"% 100%, 100% 100%)"):"polygon(0 0, ".concat(100*this.top-i,"% 0, ").concat(e-i,"% ").concat(n,"%, ").concat(e,"% ").concat(n,"%, ").concat(100*this.bottom,"% 100%, 0 100%)")}},sockets:{cut_piece_fall:function(){this.explode()}},created:function(){var t=this,e=new Image;e.src=this.carriageImg,e.onload=function(){t.carriageImgWidth=e.width,t.carriageImgHeight=e.height}}},L=R,H=(n("582e"),Object(d["a"])(L,j,M,!1,null,"3130452a",null)),$=H.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("transition",{attrs:{name:"collapse"}},[t.buttonPressed?t._e():i("div",{staticClass:"screen-wrapper"},[i("img",{staticClass:"screen",attrs:{src:n("d61c")}})])]),i("div",{staticClass:"remote-control-wrapper"},[i("img",{staticClass:"remote-control",class:{inclined:t.buttonDown},attrs:{src:t.remoteControlImg}}),i("div",{staticClass:"button centered-horizontal",on:{touchstart:t.onButtonDown,touchend:t.onButtonUp,mousedown:t.onButtonDown,mouseup:t.onButtonUp}})])],1)},z=[],U={name:"Screens",props:{development:Boolean,stopCountdown:Function,goToWaiting:Function},data:function(){return{buttonDown:!1,buttonPressed:!1}},methods:{onButtonDown:function(){var t=this;this.buttonPressed||(this.stopCountdown(),this.$socket.emit("client_turnoff_screen"),this.buttonDown=!0,this.buttonPressed=!0,this.development&&setTimeout((function(){t.goToWaiting()}),2e3))},onButtonUp:function(){this.buttonDown=!1}},computed:{remoteControlImg:function(){var t=this.buttonDown?"-pressed":"";return n("9f1e")("./screens-remote-control".concat(t,".png"))}}},Y=U,X=(n("a87e"),Object(d["a"])(Y,F,z,!1,null,"00fd7b40",null)),q=X.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("img",{staticClass:"centered halo",style:{animationDuration:this.animationDuration},attrs:{src:n("5e47")}}),t._m(0),i("vue-draggable-resizable",{ref:"particleWrapper",style:{width:this.screenParticleSidePercentage+"%"},attrs:{draggable:!t.completed,id:"particle-wrapper",x:t.particleInitialPosition.x,y:t.particleInitialPosition.y,z:99,"drag-handle":".handle"},on:{dragging:t.onDragging,dragstop:t.onDragstop}},[i("img",{class:{completed:t.completed},style:{animationDuration:this.animationDuration},attrs:{id:"particle",src:n("099a")}}),i("div",{staticClass:"centered handle",style:{height:t.handleSideLength+"px",width:t.handleSideLength+"px"}})]),i("audio",{ref:"audio"},[i("source",{attrs:{src:n("c194"),type:"audio/wav"}}),t._v(" Your browser does not support the audio element. ")]),i("div",{staticClass:"debug"},[t._v(t._s(t.debug))]),i("div",{staticClass:"debug2"},[t._v(t._s(t.debug2))]),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.active,expression:"!active"}]},[i("div",{staticClass:"overlay"},[i("h1",{staticClass:"centered"},[t._v("Wait...")])])])])],1)},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay-wrapper"},[i("img",{staticClass:"overlay",attrs:{src:n("ddff")}})])}],K=(n("b680"),n("fb19")),Q=n.n(K),V={name:"Staircase",props:{screenIndex:Number,lightIndex:Number,development:Boolean,goToWaiting:Function,stopCountdown:Function},data:function(){return{prevPosition:0,bgWidth:0,bgHeight:0,debug:"",debug2:"",completed:!1,screenParticleSidePercentage:70,particleX:0,particleY:0,initialDistance:0,developmentActive:!1}},components:{"vue-draggable-resizable":Q.a},computed:{active:function(){return this.developmentActive||-1!=this.screenIndex&&-1!=this.lightIndex},particleSize:function(){return window.innerWidth*this.screenParticleSidePercentage/100},particleInitialPosition:function(){var t=this.particleSize,e=.3*window.innerWidth,n=window.innerHeight-t+.17*t;return{x:e,y:n}},particleCenterPosition:function(){var t=this.particleX+this.particleSize/2,e=this.particleY+this.particleSize/2;return{x:t,y:e}},jellyfishHeadCenterPosition:function(){var t=.43*window.innerWidth,e=window.innerWidth/this.bgWidth*this.bgHeight,n=.32*e-.5*(e-window.innerHeight);return{x:t,y:n}},handleSideLength:function(){return.5*this.particleSize},distance:function(){var t=this.particleCenterPosition.x-this.jellyfishHeadCenterPosition.x,e=this.particleCenterPosition.y-this.jellyfishHeadCenterPosition.y;return Math.sqrt(t*t+e*e)},progress:function(){var t=(this.initialDistance-this.distance)/this.initialDistance;return t<0&&(t=0),t},animationDuration:function(){return 2*this.progress.toFixed(2)+1+"s"}},methods:{complete:function(){this.completed=!0;var t=this.$refs,e=t.audio,n=t.particleWrapper;e.play();var i=new B["TimelineLite"],r=this.jellyfishHeadCenterPosition,o=r.x,s=r.y,a=o-this.particleSize/2,c=s-this.particleSize/2;i.to(n,1.5,{left:a,top:c,ease:B["Sine"].easeOut})},onDragging:function(t,e){this.particleX=t,this.particleY=e},onDragstop:function(){var t=this;this.progress>.82&&this.complete();this.progress;this.completed,this.$socket.emit("client_turnon_light",{screen_index:this.screenIndex,light_index:this.lightIndex,progress:this.progress}),this.development&&this.progress>=1&&setTimeout((function(){t.goToWaiting()}),1e3)}},mounted:function(){var t=this;this.particleX=this.particleInitialPosition.x,this.particleY=this.particleInitialPosition.y;var e=new Image;e.src=n("cc02"),e.onload=function(){t.bgWidth=e.width,t.bgHeight=e.height,t.initialDistance=t.distance},setTimeout((function(){t.developmentActive=!0}),5e3)}},Z=V,tt=(n("762c"),Object(d["a"])(Z,G,J,!1,null,"184f2895",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrapper"},on:{touchstart:t.dragStart,touchmove:t.dragMove,touchend:t.dragEnd,mousedown:t.dragStart,mousemove:t.dragMove,mouseup:t.dragEnd}},[i("div",{staticClass:"centered rod-wrapper"},[i("div",{staticClass:"rod",style:{transform:"translateY(-"+this.screenRodOffset+"px)"}})]),i("div",{staticClass:"centered curtain-wrapper",style:{width:this.screenCurtainWidth+"px",height:2*this.screenCurtainWidth+"px"}},[i("img",{staticClass:"curtain",style:{transform:"translateY(-"+100*this.progress+"%)"},attrs:{src:n("f75e")}})]),i("div",{staticClass:"centered shadow-wrapper"},[i("img",{staticClass:"shadow",style:{transform:"translateY("+this.screenShadowOffset+"px)"},attrs:{src:n("47f9")}})])])},it=[],rt={name:"Shadows",props:{shadowIndex:Number,development:Boolean,goToWaiting:Function,stopCountdown:Function},data:function(){return{progress:0,prevPosition:0,screenRodOffset:0,screenShadowOffset:0,screenCurtainWidth:0,bgWidth:0}},methods:{dragStart:function(t){var e=t;t.targetTouches&&(e=t.targetTouches[0]),this.prevPosition=e.pageY},dragMove:function(t){if(!(this.progress<0||this.progress>=1)){var e=t;t.targetTouches&&(e=t.targetTouches[0]);var n=e.pageY,i=n-this.prevPosition;i<=0||(this.progress+=i/700,this.progress>1&&(this.progress=1),1===this.progress&&this.stopCountdown(),this.prevPosition=n)}},dragEnd:function(t){var e=this;this.$socket.emit("client_moveup_curtain",{index:this.shadowIndex,progress:this.progress}),this.development&&this.progress>=1&&setTimeout((function(){e.goToWaiting()}),1e3)}},mounted:function(){var t=this,e=new Image;e.src=n("427c"),e.onload=function(){t.bgWidth=e.width;var n=680,i=900,r=680,o=document.getElementById("wrapper").offsetWidth;t.screenRodOffset=o/t.bgWidth*n,t.screenShadowOffset=o/t.bgWidth*i,t.screenCurtainWidth=o/t.bgWidth*r}}},ot=rt,st=(n("b820"),Object(d["a"])(ot,nt,it,!1,null,"71b3027e",null)),at=st.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"centered text"},[n("div",[t._v(" "+t._s(t.amPm)+" "+t._s(t.hours)+":"+t._s(t.minutes)+":"+t._s(t.seconds)+" ")]),n("div",[t._v(" DEC 20, 2019 ")])])])},ut=[],dt=(n("0d03"),{name:"Elsland",data:function(){return{date:new Date}},watch:{},computed:{seconds:function(){return this.date.getSeconds()},minutes:function(){return this.date.getMinutes()},hours:function(){var t=this.date.getHours();return t>12&&(t-=12),t},amPm:function(){return this.hours>12?"PM":"AM"}},mounted:function(){var t=this;setInterval((function(){t.date=new Date}),1e3)}}),pt=dt,lt=(n("f36b"),Object(d["a"])(pt,ct,ut,!1,null,"0827ecd3",null)),gt=lt.exports,ht=["CONNECTION_STATUS","ONBOARDING","TRAIN","SCREENS","STAIRCASE","SHADOWS","ELSLAND"],ft={name:"App",components:{Waiting:l,Blink:w,ConnectionStatus:T,Onboarding:A,Train:$,Screens:q,Staircase:et,Shadows:at,Elsland:gt},data:function(){return{scene:ht[0],countdown:0,connected:!1,propsTrain:{top:.3,bottom:.7,id:0,segmentIndex:-1},shadowIndex:0,propsStaircase:{screenIndex:-1,lightIndex:-1},waiting:!1,blinking:!1,development:!1}},methods:{goToScene:function(t){var e=this;setTimeout((function(){e.scene=t}),2e3),console.log("going to "+t),"ONBOARDING"===t&&setTimeout((function(){e.blink()}),3500)},goToNextScene:function(){var t=ht.indexOf(this.scene);this.goToScene(ht[t+1])},goToWaiting:function(){var t=this;this.waiting||(this.waiting=!0,this.stopCountdown(),this.goToNextScene(),this.development&&setTimeout((function(){t.stopWaiting()}),3e3))},switchToScene:function(t){this.goToScene(t),this.stopWaiting()},stopCountdown:function(){this.countdown=-1},stopWaiting:function(){var t=this;this.waiting=!1,setTimeout((function(){t.blink()}),700),this.countdown=50},isScene:function(t){return t===this.scene},notWaiting:function(){return!this.waiting},blink:function(){var t=this;this.blinking=!0,setTimeout((function(){t.blinking=!1}),1e3)}},watch:{countdown:function(t){0===t&&this.goToWaiting()}},mounted:function(){var t=this,e=this;window.addEventListener("keydown",(function(t){32===t.keyCode&&e.goToNextScene()})),setInterval((function(){t.countdown>0&&(t.countdown-=1)}),1e3)},sockets:{cut_scene:function(t){this.propsTrain={top:t.cut[2],bottom:t.cut[0],cutIndex:t.index,segmentIndex:t.segment_index},this.switchToScene("TRAIN")},screen_city_scene:function(){this.switchToScene("SCREENS")},shadow_scene:function(t){this.switchToScene("SHADOWS"),t.index&&(this.shadowIndex=t.index)},staircase_scene:function(t){this.switchToScene("STAIRCASE");var e=t.screen_index,n=t.light_index;this.propsStaircase={screenIndex:e,lightIndex:n}},staircase_scene_wait:function(){this.switchToScene("STAIRCASE")},waiting_page:function(){this.development||this.goToWaiting()}}},mt=ft,vt=(n("034f"),Object(d["a"])(mt,r,o,!1,null,null,null)),wt=vt.exports,bt=n("5132"),xt=n.n(bt);n("f5df1");n.e("chunk-76d57576").then(n.t.bind(null,"845f",7)),i["a"].config.productionTip=!1;var Ct=!1;i["a"].use(new xt.a({debug:!0,connection:Ct?"http://10.18.78.47:8000/web-client":"/web-client"}),N.a),new i["a"]({render:function(t){return t(wt)},mounted:function(){window.addEventListener("touchstart",(function(t){t.preventDefault()}),{passive:!1}),history.pushState(null,null,document.URL),window.addEventListener("popstate",(function(){history.pushState(null,null,document.URL)}))}}).$mount("#app")},"582e":function(t,e,n){"use strict";var i=n("80ac"),r=n.n(i);r.a},5972:function(t,e,n){t.exports=n.p+"img/connection-status-entry.ffa24e08.png"},"5e47":function(t,e,n){t.exports=n.p+"img/staircase-halo.1e52e323.png"},"762c":function(t,e,n){"use strict";var i=n("ea71"),r=n.n(i);r.a},"78a3":function(t,e,n){t.exports=n.p+"img/train-carriage-1.8fec1231.png"},"80ac":function(t,e,n){},"85ec":function(t,e,n){},"8eb9":function(t,e,n){t.exports=n.p+"img/train-carriage-7.b94d6225.png"},"9f1e":function(t,e,n){var i={"./screens-remote-control-pressed.png":"4f56","./screens-remote-control.png":"adff"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="9f1e"},a266:function(t,e,n){t.exports=n.p+"img/logo-white.9c07b775.svg"},a497:function(t,e,n){t.exports=n.p+"img/connection-status-silhouette.851d22df.png"},a87e:function(t,e,n){"use strict";var i=n("4c62"),r=n.n(i);r.a},a922:function(t,e,n){t.exports=n.p+"img/train-carriage-5.dbd39c07.png"},adff:function(t,e,n){t.exports=n.p+"img/screens-remote-control.80e3bfde.png"},af73:function(t,e,n){t.exports=n.p+"img/train-thumbnail-3.8c44a592.png"},b00f:function(t,e,n){t.exports=n.p+"img/onboarding-hand.55563bd5.gif"},b3f8:function(t,e,n){t.exports=n.p+"img/train-thumbnail-4.9391f77d.png"},b551:function(t,e,n){t.exports=n.p+"img/train-carriage-4.569c2c6e.png"},b820:function(t,e,n){"use strict";var i=n("4c7d"),r=n.n(i);r.a},c138:function(t,e,n){t.exports=n.p+"img/train-thumbnail-5.2fccc635.png"},c13f:function(t,e,n){"use strict";var i=n("2560"),r=n.n(i);r.a},c194:function(t,e,n){t.exports=n.p+"media/staircase.c19e243f.wav"},cc02:function(t,e,n){t.exports=n.p+"img/staircase-bg.b881441a.jpg"},d0a9:function(t,e,n){t.exports=n.p+"img/logo-black.dee90c45.svg"},d61c:function(t,e,n){t.exports=n.p+"img/screens-screen.20b51c70.jpg"},da12:function(t,e,n){t.exports=n.p+"img/train-carriage-3.b8f5d755.png"},da66:function(t,e,n){},ddff:function(t,e,n){t.exports=n.p+"img/staircase-bg-overlay.93eceb2d.png"},e92c:function(t,e,n){"use strict";var i=n("da66"),r=n.n(i);r.a},ea71:function(t,e,n){},f0e5:function(t,e,n){var i={"./train-carriage-1.png":"78a3","./train-carriage-2.png":"faf1","./train-carriage-3.png":"da12","./train-carriage-4.png":"b551","./train-carriage-5.png":"a922","./train-carriage-6.png":"2a11","./train-carriage-7.png":"8eb9"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="f0e5"},f36b:function(t,e,n){"use strict";var i=n("54df"),r=n.n(i);r.a},f75e:function(t,e,n){t.exports=n.p+"img/shadows-curtain.82c75c2e.png"},faf1:function(t,e,n){t.exports=n.p+"img/train-carriage-2.414b40fb.png"},ff69:function(t,e,n){t.exports=n.p+"img/train-thumbnail-1.ff7023e8.png"}});
//# sourceMappingURL=app.31071e52.js.map