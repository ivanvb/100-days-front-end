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
},{"./arrayWithHoles":"OUZ9","./iterableToArrayLimit":"vKPt","./unsupportedIterableToArray":"UyFj","./nonIterableRest":"Rom6"}],"vb3r":[function(require,module,exports) {
"use strict";var e=n(require("@babel/runtime/helpers/slicedToArray"));function n(e){return e&&e.__esModule?e:{default:e}}var t=document.getElementsByClassName("form"),a=(0,e.default)(t,1),l=a[0],r=document.getElementsByClassName("button__add"),o=(0,e.default)(r,1),d=o[0],i=document.getElementsByClassName("button__start"),s=(0,e.default)(i,1),c=s[0],u=document.getElementById("text_field"),m=document.getElementById("container"),f=document.getElementsByClassName("seconds_field"),v=(0,e.default)(f,1),p=v[0],y=2,E=[];function g(e,n){e.disabled=n}function b(){var e=Number.parseInt(p.value)||y;_(E.length,e<=0?y:e),E.push(E[0]),m.innerHTML="\n        ".concat(E.map(function(e){return"<p>".concat(e,"</p>")}).join("\n"),"\n    "),m.classList.add("scroller"),g(c,!0),g(d,!0),g(p,!0)}function _(n,t){var a="\n    .scroller {\n        animation-name: vertical-scroll;\n        animation-duration: ".concat(t,"s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n    }\n\n    @keyframes vertical-scroll {\n        from {\n            transform: translateY(0%);\n        }\n        to {\n            transform: translateY(-").concat(n,"em);\n        }\n    }\n"),l=document.createElement("style");l.type="text/css";var r=document.createTextNode(a);l.appendChild(r);var o=document.getElementsByTagName("head");(0,e.default)(o,1)[0].appendChild(l)}l.addEventListener("submit",function(e){e.preventDefault(),""!==u.value&&(E.push(u.value),u.value="",g(c,!1))}),c.addEventListener("click",b),document.addEventListener("keydown",function(e){"Enter"===e.code&&e.ctrlKey&&!1===c.disabled&&b()});
},{"@babel/runtime/helpers/slicedToArray":"HETk"}]},{},["vb3r"], null)