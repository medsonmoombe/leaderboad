(()=>{var n={477:()=>{},426:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    list-style: none;\n}\n\n.main-content {\n  width: 80%;\n  margin: auto;\n  margin-top: 10%;\n  height: 30rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* border: 1px solid black; */\n}\n\nh1 {\n    text-align: center;\n    padding-left: 20px;\n    padding-top: 30px;\n    position: relative;\n    top: -9px;\n    left: -186px;\n    font-size: 40px;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    gap: 25px;\n}\n\n.column1 {\n    display: flex;\n   justify-content: center;\n   align-items: center;\n   gap: 100px;\n} \n\n.column2 {\n    display: flex;\n    flex-direction: column;\n}\n\n.first-line {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n}\n\n.scores {\n    list-style: none;\n}\n\n.display-section {\n    border: 1px solid black;\n    padding: 10px;\n    width: inherit;\n    margin-top: 22px;\n}\n\n.refresh-btn {\n    padding: 4px;\n    border: 0;\n    box-shadow: 4px 4px 4px 4px;\n}\n\n/* .scores:nth-child(even) { background-color: white; }\n.scores:nth-child(odd) { background-color: grey; } */\n\nh3 {\n    font-size: 28px;\n}\n\n\n.adding-data {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 48px;\n}\n\n.input-boxes {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput {\n    outline: none;\n    padding: 2px;\n}\n\n#submit-btn {\n    padding: 4px;\n    border: 0;\n    box-shadow: 4px 1px 4px 2px;\n    margin-left: 124px;\n}",""]);const s=a},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var x=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:x,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),p=t.n(l),d=t(589),u=t.n(d),f=t(426),x={};x.styleTagTransform=u(),x.setAttributes=c(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=p(),e()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals;var m=t(477),v=t.n(m);const h=document.querySelector(".scores");document.addEventListener("DOMContentLoaded",(()=>(v().forEach(((n,e)=>{let t="";t=`\n    <li class="score-item" id="${e}">${n.name}: ${n.score}</li>\n`,h.innerHTML+=t})),h)))})()})();