!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="assets/scripts/",r(r.s=77)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(78))},function(t,n,r){var e=r(0),o=r(30),i=r(3),c=r(33),u=r(34),a=r(44),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(7),o=r(43),i=r(5),c=r(20),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e=r(0),o=r(23).f,i=r(9),c=r(10),u=r(31),a=r(48),f=r(53);t.exports=function(t,n){var r,s,l,p,v,d=t.target,y=t.global,h=t.stat;if(r=y?e:h?e[d]||u(d,{}):(e[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(y?s:d+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n,r){var e=r(7),o=r(6),i=r(15);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(0),o=r(9),i=r(3),c=r(31),u=r(35),a=r(16),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=r:o(t,n,r)):f?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,r){var e=r(47),o=r(24);t.exports=function(t){return e(o(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(49),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports=!1},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e,o,i,c=r(79),u=r(0),a=r(4),f=r(9),s=r(3),l=r(21),p=r(22),v=u.WeakMap;if(c){var d=new v,y=d.get,h=d.has,g=d.set;e=function(t,n){return g.call(d,t,n),n},o=function(t){return y.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var m=l("state");p[m]=!0,e=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(37),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n){t.exports={}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(30),o=r(33),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,r){var e=r(7),o=r(46),i=r(15),c=r(11),u=r(20),a=r(3),f=r(43),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(6).f,o=r(3),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(18);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(12);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(24);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e={};e[r(1)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(14),o=r(42);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(0),o=r(9);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(0),o=r(4),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(2);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(42),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(50),o=r(38).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e,o=r(5),i=r(95),c=r(38),u=r(22),a=r(59),f=r(32),s=r(21),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;d=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=c.length;r--;)delete d.prototype[c[r]];return d()};u[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=d(),void 0===n?r:i(r,n)}},function(t,n,r){"use strict";r.r(n),r.d(n,"initProducts",(function(){return u})),r.d(n,"deleteProduct",(function(){return a})),r.d(n,"addProduct",(function(){return f}));r(94),r(98),r(99),r(100),r(102),r(69),r(108),r(110),r(111),r(41),r(112),r(114),r(116),r(119),r(120),r(122),r(124);function e(t,n){var r=document.getElementById("product-list");r.innerHTML="",t.forEach((function(t){var e=document.createElement("li"),o=document.createElement("h2"),i=document.createElement("p"),c=document.createElement("button");o.innerHTML=t.title,i.innerHTML=t.price,c.innerHTML="DELETE",c.addEventListener("click",n.bind(null,t.id)),e.appendChild(o),e.appendChild(i),e.appendChild(c),r.appendChild(e)}))}function o(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,c=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw c}}}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c=[{id:new Date("1/1/1970").toString(),title:"A Pen (1 set 50 Pens)",price:12.99},{id:new Date("1/2/1970").toString(),title:"A Pencial (1 set 50 Pencials)",price:12.99},{id:new Date("1/3/1970").toString(),title:"A eraser (1 set 30 erasers)",price:11.99},{id:new Date("1/4/1970").toString(),title:"A sharpener (1 set 30 sharpeners)",price:10.99},{id:new Date("1/5/1970").toString(),title:"A ruler (1 set 20 rulers)",price:10.99}];function u(){e(c,a)}function a(t){var n,r=[],i=o(c);try{for(i.s();!(n=i.n()).done;){var u=n.value;u.id!==t&&r.push(u)}}catch(t){i.e(t)}finally{i.f()}e(c=r,a)}function f(t){t.preventDefault();var n=document.querySelector("#new-product #title"),r=document.querySelector("#new-product #price"),o=n.value,i=r.value;if(0===o.trim().length||0===i.trim().length||+i<0)alert("Please enter some valid input values for title and price.");else{var u={id:(new Date).toString(),title:o,price:i};c.unshift(u),e(c,a)}}},function(t,n,r){var e=r(29),o=r(10),i=r(80);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,r){var e=r(0),o=r(31),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(7),o=r(2),i=r(32);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(34);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(29),o=r(12),i=r(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:c?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(2),o=r(12),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(3),o=r(82),i=r(23),c=r(6);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(3),o=r(11),i=r(83).indexOf,c=r(22);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(37),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(2),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(1),o=r(19),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,r){var e=r(45),o=r(19),i=r(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(5);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){var e,o,i,c=r(0),u=r(2),a=r(12),f=r(26),s=r(59),l=r(32),p=r(60),v=c.location,d=c.setImmediate,y=c.clearImmediate,h=c.process,g=c.MessageChannel,m=c.Dispatch,b=0,x={},S=function(t){if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},w=function(t){return function(){S(t)}},O=function(t){S(t.data)},j=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&y||(d=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},e(b),b},y=function(t){delete x[t]},"process"==a(h)?e=function(t){h.nextTick(w(t))}:m&&m.now?e=function(t){m.now(w(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=O,e=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(j)||"file:"===v.protocol?e="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),S(t)}}:function(t){setTimeout(w(t),0)}:(e=j,c.addEventListener("message",O,!1))),t.exports={set:d,clear:y}},function(t,n,r){var e=r(13);t.exports=e("document","documentElement")},function(t,n,r){var e=r(61);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(e)},function(t,n,r){var e=r(13);t.exports=e("navigator","userAgent")||""},function(t,n,r){"use strict";var e=r(18),o=function(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)};t.exports.f=function(t){return new o(t)}},function(t,n,r){var e,o,i=r(0),c=r(61),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e=r(50),o=r(38);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(1);n.f=e},function(t,n,r){var e=r(49),o=r(3),i=r(65),c=r(6).f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,r){var e=r(26),o=r(47),i=r(28),c=r(17),u=r(97),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,y,h){for(var g,m,b=i(v),x=o(b),S=e(d,y,3),w=c(x.length),O=0,j=h||u,E=n?j(v,w):r?j(v,0):void 0;w>O;O++)if((p||O in x)&&(m=S(g=x[O],O,b),t))if(n)E[O]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:a.call(E,g)}else if(s)return!1;return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){"use strict";var e=r(20),o=r(6),i=r(15);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,n,r){"use strict";var e=r(11),o=r(103),i=r(19),c=r(16),u=r(70),a=c.set,f=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,n){a(this,{type:"Array Iterator",target:e(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,r=t.kind,e=t.index++;return!n||e>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:e,done:!1}:"values"==r?{value:n[e],done:!1}:{value:[e,n[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,r){"use strict";var e=r(8),o=r(104),i=r(72),c=r(106),u=r(25),a=r(9),f=r(10),s=r(1),l=r(14),p=r(19),v=r(71),d=v.IteratorPrototype,y=v.BUGGY_SAFARI_ITERATORS,h=s("iterator"),g=function(){return this};t.exports=function(t,n,r,s,v,m,b){o(r,n,s);var x,S,w,O=function(t){if(t===v&&T)return T;if(!y&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},j=n+" Iterator",E=!1,A=t.prototype,P=A[h]||A["@@iterator"]||v&&A[v],T=!y&&P||O(v),L="Array"==n&&A.entries||P;if(L&&(x=i(L.call(new t)),d!==Object.prototype&&x.next&&(l||i(x)===d||(c?c(x,d):"function"!=typeof x[h]&&a(x,h,g)),u(x,j,!0,!0),l&&(p[j]=g))),"values"==v&&P&&"values"!==P.name&&(E=!0,T=function(){return P.call(this)}),l&&!b||A[h]===T||a(A,h,T),p[n]=T,v)if(S={values:O("values"),keys:m?T:O("keys"),entries:O("entries")},b)for(w in S)(y||E||!(w in A))&&f(A,w,S[w]);else e({target:n,proto:!0,forced:y||E},S);return S}},function(t,n,r){"use strict";var e,o,i,c=r(72),u=r(9),a=r(3),f=r(1),s=r(14),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||u(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(3),o=r(28),i=r(21),c=r(105),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),e(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,r){var e=r(7),o=r(2),i=r(3),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var r=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}},function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";var e=r(67).forEach,o=r(121),i=r(73),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,r){"use strict";r.r(n);r(41),r(81);var e=r(40);var o=document.getElementById("new-product");Object(e.initProducts)(),o.addEventListener("submit",(function(t){Promise.resolve().then(r.bind(null,40)).then((function(n){n.addProduct(t)}))}))},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(35),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){"use strict";var e=r(29),o=r(45);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,r){"use strict";var e,o,i,c,u=r(8),a=r(14),f=r(0),s=r(13),l=r(84),p=r(10),v=r(85),d=r(25),y=r(86),h=r(4),g=r(18),m=r(87),b=r(12),x=r(35),S=r(88),w=r(57),O=r(89),j=r(58).set,E=r(90),A=r(91),P=r(92),T=r(62),L=r(93),M=r(16),_=r(53),I=r(1),C=r(63),k=I("species"),D="Promise",R=M.get,F=M.set,N=M.getterFor(D),G=l,H=f.TypeError,V=f.document,B=f.process,W=s("fetch"),q=T.f,z=q,U="process"==b(B),$=!!(V&&V.createEvent&&f.dispatchEvent),Y=_(D,(function(){if(!(x(G)!==String(G))){if(66===C)return!0;if(!U&&"function"!=typeof PromiseRejectionEvent)return!0}if(a&&!G.prototype.finally)return!0;if(C>=51&&/native code/.test(G))return!1;var t=G.resolve(1),n=function(t){t((function(){}),(function(){}))};return(t.constructor={})[k]=n,!(t.then((function(){}))instanceof n)})),J=Y||!w((function(t){G.all(t).catch((function(){}))})),K=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},Q=function(t,n,r){if(!n.notified){n.notified=!0;var e=n.reactions;E((function(){for(var o=n.value,i=1==n.state,c=0;e.length>c;){var u,a,f,s=e[c++],l=i?s.ok:s.fail,p=s.resolve,v=s.reject,d=s.domain;try{l?(i||(2===n.rejection&&nt(t,n),n.rejection=1),!0===l?u=o:(d&&d.enter(),u=l(o),d&&(d.exit(),f=!0)),u===s.promise?v(H("Promise-chain cycle")):(a=K(u))?a.call(u,p,v):p(u)):v(o)}catch(t){d&&!f&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,r&&!n.rejection&&Z(t,n)}))}},X=function(t,n,r){var e,o;$?((e=V.createEvent("Event")).promise=n,e.reason=r,e.initEvent(t,!1,!0),f.dispatchEvent(e)):e={promise:n,reason:r},(o=f["on"+t])?o(e):"unhandledrejection"===t&&P("Unhandled promise rejection",r)},Z=function(t,n){j.call(f,(function(){var r,e=n.value;if(tt(n)&&(r=L((function(){U?B.emit("unhandledRejection",e,t):X("unhandledrejection",t,e)})),n.rejection=U||tt(n)?2:1,r.error))throw r.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,n){j.call(f,(function(){U?B.emit("rejectionHandled",t):X("rejectionhandled",t,n.value)}))},rt=function(t,n,r,e){return function(o){t(n,r,o,e)}},et=function(t,n,r,e){n.done||(n.done=!0,e&&(n=e),n.value=r,n.state=2,Q(t,n,!0))},ot=function(t,n,r,e){if(!n.done){n.done=!0,e&&(n=e);try{if(t===r)throw H("Promise can't be resolved itself");var o=K(r);o?E((function(){var e={done:!1};try{o.call(r,rt(ot,t,e,n),rt(et,t,e,n))}catch(r){et(t,e,r,n)}})):(n.value=r,n.state=1,Q(t,n,!1))}catch(r){et(t,{done:!1},r,n)}}};Y&&(G=function(t){m(this,G,D),g(t),e.call(this);var n=R(this);try{t(rt(ot,this,n),rt(et,this,n))}catch(t){et(this,n,t)}},(e=function(t){F(this,{type:D,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(G.prototype,{then:function(t,n){var r=N(this),e=q(O(this,G));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=U?B.domain:void 0,r.parent=!0,r.reactions.push(e),0!=r.state&&Q(this,r,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e,n=R(t);this.promise=t,this.resolve=rt(ot,t,n),this.reject=rt(et,t,n)},T.f=q=function(t){return t===G||t===i?new o(t):z(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var r=this;return new G((function(t,n){c.call(r,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof W&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return A(G,W.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:Y},{Promise:G}),d(G,D,!1,!0),y(D),i=s(D),u({target:D,stat:!0,forced:Y},{reject:function(t){var n=q(this);return n.reject.call(void 0,t),n.promise}}),u({target:D,stat:!0,forced:a||Y},{resolve:function(t){return A(a&&this===i?G:this,t)}}),u({target:D,stat:!0,forced:J},{all:function(t){var n=this,r=q(n),e=r.resolve,o=r.reject,i=L((function(){var r=g(n.resolve),i=[],c=0,u=1;S(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,r.call(n,t).then((function(t){f||(f=!0,i[a]=t,--u||e(i))}),o)})),--u||e(i)}));return i.error&&o(i.value),r.promise},race:function(t){var n=this,r=q(n),e=r.reject,o=L((function(){var o=g(n.resolve);S(t,(function(t){o.call(n,t).then(r.resolve,e)}))}));return o.error&&e(o.value),r.promise}})},function(t,n,r){var e=r(13),o=r(36),i=r(52),c=r(5);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(11),o=r(17),i=r(51),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,r){var e=r(0);t.exports=e.Promise},function(t,n,r){var e=r(10);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},function(t,n,r){"use strict";var e=r(13),o=r(6),i=r(1),c=r(7),u=i("species");t.exports=function(t){var n=e(t),r=o.f;c&&n&&!n[u]&&r(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r){if(!(t instanceof n))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},function(t,n,r){var e=r(5),o=r(54),i=r(17),c=r(26),u=r(55),a=r(56),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,r,s,l){var p,v,d,y,h,g,m,b=c(n,r,s?2:1);if(l)p=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,y=i(t.length);y>d;d++)if((h=s?b(e(m=t[d])[0],m[1]):b(t[d]))&&h instanceof f)return h;return new f(!1)}p=v.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(h=a(p,b,m.value,s))&&h&&h instanceof f)return h;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,r){var e=r(5),o=r(18),i=r(1)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},function(t,n,r){var e,o,i,c,u,a,f,s,l=r(0),p=r(23).f,v=r(12),d=r(58).set,y=r(60),h=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,b="process"==v(g),x=p(l,"queueMicrotask"),S=x&&x.value;S||(e=function(){var t,n;for(b&&(t=g.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},b?c=function(){g.nextTick(e)}:h&&!y?(u=!0,a=document.createTextNode(""),new h(e).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(f=m.resolve(void 0),s=f.then,c=function(){s.call(f,e)}):c=function(){d.call(l,e)}),t.exports=S||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,r){var e=r(5),o=r(4),i=r(62);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(0);t.exports=function(t,n){var r=e.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,r){"use strict";var e=r(8),o=r(0),i=r(13),c=r(14),u=r(7),a=r(34),f=r(44),s=r(2),l=r(3),p=r(27),v=r(4),d=r(5),y=r(28),h=r(11),g=r(20),m=r(15),b=r(39),x=r(64),S=r(36),w=r(96),O=r(52),j=r(23),E=r(6),A=r(46),P=r(9),T=r(10),L=r(30),M=r(21),_=r(22),I=r(33),C=r(1),k=r(65),D=r(66),R=r(25),F=r(16),N=r(67).forEach,G=M("hidden"),H=C("toPrimitive"),V=F.set,B=F.getterFor("Symbol"),W=Object.prototype,q=o.Symbol,z=i("JSON","stringify"),U=j.f,$=E.f,Y=w.f,J=A.f,K=L("symbols"),Q=L("op-symbols"),X=L("string-to-symbol-registry"),Z=L("symbol-to-string-registry"),tt=L("wks"),nt=o.QObject,rt=!nt||!nt.prototype||!nt.prototype.findChild,et=u&&s((function(){return 7!=b($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=U(W,n);e&&delete W[n],$(t,n,r),e&&t!==W&&$(W,n,e)}:$,ot=function(t,n){var r=K[t]=b(q.prototype);return V(r,{type:"Symbol",tag:t,description:n}),u||(r.description=n),r},it=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,n,r){t===W&&ct(Q,n,r),d(t);var e=g(n,!0);return d(r),l(K,e)?(r.enumerable?(l(t,G)&&t[G][e]&&(t[G][e]=!1),r=b(r,{enumerable:m(0,!1)})):(l(t,G)||$(t,G,m(1,{})),t[G][e]=!0),et(t,e,r)):$(t,e,r)},ut=function(t,n){d(t);var r=h(n),e=x(r).concat(lt(r));return N(e,(function(n){u&&!at.call(r,n)||ct(t,n,r[n])})),t},at=function(t){var n=g(t,!0),r=J.call(this,n);return!(this===W&&l(K,n)&&!l(Q,n))&&(!(r||!l(this,n)||!l(K,n)||l(this,G)&&this[G][n])||r)},ft=function(t,n){var r=h(t),e=g(n,!0);if(r!==W||!l(K,e)||l(Q,e)){var o=U(r,e);return!o||!l(K,e)||l(r,G)&&r[G][e]||(o.enumerable=!0),o}},st=function(t){var n=Y(h(t)),r=[];return N(n,(function(t){l(K,t)||l(_,t)||r.push(t)})),r},lt=function(t){var n=t===W,r=Y(n?Q:h(t)),e=[];return N(r,(function(t){!l(K,t)||n&&!l(W,t)||e.push(K[t])})),e};(a||(T((q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=I(t),r=function(t){this===W&&r.call(Q,t),l(this,G)&&l(this[G],n)&&(this[G][n]=!1),et(this,n,m(1,t))};return u&&rt&&et(W,n,{configurable:!0,set:r}),ot(n,t)}).prototype,"toString",(function(){return B(this).tag})),T(q,"withoutSetter",(function(t){return ot(I(t),t)})),A.f=at,E.f=ct,j.f=ft,S.f=w.f=st,O.f=lt,k.f=function(t){return ot(C(t),t)},u&&($(q.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),c||T(W,"propertyIsEnumerable",at,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:q}),N(x(tt),(function(t){D(t)})),e({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(l(X,n))return X[n];var r=q(n);return X[n]=r,Z[r]=n,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),e({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?b(t):ut(b(t),n)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),e({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),e({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(y(t))}}),z)&&e({target:"JSON",stat:!0,forced:!a||s((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}))},{stringify:function(t,n,r){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=n,(v(n)||void 0!==t)&&!it(t))return p(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!it(n))return n}),o[1]=n,z.apply(null,o)}});q.prototype[H]||P(q.prototype,H,q.prototype.valueOf),R(q,"Symbol"),_[G]=!0},function(t,n,r){var e=r(7),o=r(6),i=r(5),c=r(64);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),u=e.length,a=0;u>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(11),o=r(36).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(e(t))}},function(t,n,r){var e=r(4),o=r(27),i=r(1)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){"use strict";var e=r(8),o=r(7),i=r(0),c=r(3),u=r(4),a=r(6).f,f=r(48),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var d=v.toString,y="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=d.call(t);if(c(l,t))return"";var r=y?n.slice(7,-1):n.replace(h,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:p})}},function(t,n,r){r(66)("iterator")},function(t,n,r){var e=r(8),o=r(101);e({target:"Array",stat:!0,forced:!r(57)((function(t){Array.from(t)}))},{from:o})},function(t,n,r){"use strict";var e=r(26),o=r(28),i=r(56),c=r(54),u=r(17),a=r(68),f=r(55);t.exports=function(t){var n,r,s,l,p,v,d=o(t),y="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,m=void 0!==g,b=f(d),x=0;if(m&&(g=e(g,h>2?arguments[2]:void 0,2)),null==b||y==Array&&c(b))for(r=new y(n=u(d.length));n>x;x++)v=m?g(d[x],x):d[x],a(r,x,v);else for(p=(l=b.call(d)).next,r=new y;!(s=p.call(l)).done;x++)v=m?i(l,g,[s.value,x],!0):s.value,a(r,x,v);return r.length=x,r}},function(t,n,r){r(8)({target:"Array",stat:!0},{isArray:r(27)})},function(t,n,r){var e=r(1),o=r(39),i=r(6),c=e("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,n,r){"use strict";var e=r(71).IteratorPrototype,o=r(39),i=r(15),c=r(25),u=r(19),a=function(){return this};t.exports=function(t,n,r){var f=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),c(t,f,!1,!0),u[f]=a,t}},function(t,n,r){var e=r(2);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(5),o=r(107);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(8),o=r(4),i=r(27),c=r(51),u=r(17),a=r(11),f=r(68),s=r(1),l=r(109),p=r(73),v=l("slice"),d=p("slice",{ACCESSORS:!0,0:0,1:2}),y=s("species"),h=[].slice,g=Math.max;e({target:"Array",proto:!0,forced:!v||!d},{slice:function(t,n){var r,e,s,l=a(this),p=u(l.length),v=c(t,p),d=c(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(r=l.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[y])&&(r=void 0):r=void 0,r===Array||void 0===r))return h.call(l,v,d);for(e=new(void 0===r?Array:r)(g(d-v,0)),s=0;v<d;v++,s++)v in l&&f(e,s,l[v]);return e.length=s,e}})},function(t,n,r){var e=r(2),o=r(1),i=r(63),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e=r(10),o=Date.prototype,i=o.toString,c=o.getTime;new Date(NaN)+""!="Invalid Date"&&e(o,"toString",(function(){var t=c.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,n,r){var e=r(7),o=r(6).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;e&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},function(t,n,r){"use strict";var e=r(10),o=r(5),i=r(2),c=r(113),u=RegExp.prototype,a=u.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in u)?c.call(t):r)}),{unsafe:!0})},function(t,n,r){"use strict";var e=r(5);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(115).charAt,o=r(16),i=r(70),c=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=u(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){var e=r(37),o=r(24),i=function(t){return function(n,r){var i,c,u=String(o(n)),a=e(r),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){"use strict";var e=r(8),o=r(117).trim;e({target:"String",proto:!0,forced:r(118)("trim")},{trim:function(){return o(this)}})},function(t,n,r){var e=r(24),o="["+r(74)+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(n){var r=String(e(n));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,n,r){var e=r(2),o=r(74);t.exports=function(t){return e((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,n,r){var e=r(0),o=r(75),i=r(69),c=r(9),u=r(1),a=u("iterator"),f=u("toStringTag"),s=i.values;for(var l in o){var p=e[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{c(v,a,s)}catch(t){v[a]=s}if(v[f]||c(v,f,l),o[l])for(var d in i)if(v[d]!==i[d])try{c(v,d,i[d])}catch(t){v[d]=i[d]}}}},function(t,n,r){"use strict";var e=r(8),o=r(76);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){"use strict";var e=r(2);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){r(8)({target:"Function",proto:!0},{bind:r(123)})},function(t,n,r){"use strict";var e=r(18),o=r(4),i=[].slice,c={},u=function(t,n,r){if(!(n in c)){for(var e=[],o=0;o<n;o++)e[o]="a["+o+"]";c[n]=Function("C,a","return new C("+e.join(",")+")")}return c[n](t,r)};t.exports=Function.bind||function(t){var n=e(this),r=i.call(arguments,1),c=function(){var e=r.concat(i.call(arguments));return this instanceof c?u(n,e.length,e):n.apply(t,e)};return o(n.prototype)&&(c.prototype=n.prototype),c}},function(t,n,r){var e=r(0),o=r(75),i=r(76),c=r(9);for(var u in o){var a=e[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}}]);
//# sourceMappingURL=shop.js.map