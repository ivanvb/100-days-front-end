parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OUZ9":[function(require,module,exports) {
function r(r){if(Array.isArray(r))return r}module.exports=r;
},{}],"vKPt":[function(require,module,exports) {
function r(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,l=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(a){o=!0,l=a}finally{try{n||null==u.return||u.return()}finally{if(o)throw l}}return e}}module.exports=r;
},{}],"NVR6":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"UyFj":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function t(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}module.exports=t;
},{"./arrayLikeToArray":"NVR6"}],"Rom6":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"HETk":[function(require,module,exports) {
var r=require("./arrayWithHoles"),e=require("./iterableToArrayLimit"),t=require("./unsupportedIterableToArray"),i=require("./nonIterableRest");function u(u,a){return r(u)||e(u,a)||t(u,a)||i()}module.exports=u;
},{"./arrayWithHoles":"OUZ9","./iterableToArrayLimit":"vKPt","./unsupportedIterableToArray":"UyFj","./nonIterableRest":"Rom6"}],"Jrch":[function(require,module,exports) {
"use strict";var e=t(require("@babel/runtime/helpers/slicedToArray"));function t(e){return e&&e.__esModule?e:{default:e}}window.onload=function(){var t=document.getElementsByClassName("collapsible"),a=(0,e.default)(t,1)[0],l=document.getElementsByClassName("paragraph"),r=(0,e.default)(l,1)[0],n=document.getElementById("arrow"),o=!1;a.addEventListener("click",function(){o?(r.style.maxHeight="0px",r.style.paddingBottom="0px",n.style.transform="rotate(0deg)"):(r.style.maxHeight=r.scrollHeight+"px",r.style.paddingBottom="15px",n.style.transform="rotate(180deg)"),o=!o})};
},{"@babel/runtime/helpers/slicedToArray":"HETk"}]},{},["Jrch"], null)