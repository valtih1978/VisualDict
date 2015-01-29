if(function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=_.type(a);return"function"===c||_.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(hb.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b=ob[a]={};return _.each(a.match(nb)||[],function(a,c){b[c]=!0}),b}function g(){Z.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),_.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+Math.random()}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ub,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:tb.test(c)?_.parseJSON(c):c}catch(e){}sb.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}function m(a,b){return _.nodeName(a,"table")&&_.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Kb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function p(a,b){for(var c=0,d=a.length;d>c;c++)rb.set(a[c],"globalEval",!b||rb.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(rb.hasData(a)&&(f=rb.access(a),g=rb.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)_.event.add(b,e,j[e][c])}sb.hasData(a)&&(h=sb.access(a),i=_.extend({},h),sb.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&_.nodeName(a,b)?_.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();"input"===c&&yb.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:_.css(e[0],"display");return e.detach(),f}function u(a){var b=Z,c=Ob[a];return c||(c=t(a,b),"none"!==c&&c||(Nb=(Nb||_("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Nb[0].contentDocument,b.write(),b.close(),c=t(a,b),Nb.detach()),Ob[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Rb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qb.test(g)&&Pb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xb.length;e--;)if(b=Xb[e]+c,b in a)return b;return d}function y(a,b,c){var d=Tb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=_.css(a,c+wb[f],!0,e)),d?("content"===c&&(g-=_.css(a,"padding"+wb[f],!0,e)),"margin"!==c&&(g-=_.css(a,"border"+wb[f]+"Width",!0,e))):(g+=_.css(a,"padding"+wb[f],!0,e),"padding"!==c&&(g+=_.css(a,"border"+wb[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Rb(a),g="border-box"===_.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qb.test(e))return e;d=g&&(Y.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=rb.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&xb(d)&&(f[g]=rb.access(d,"olddisplay",u(d.nodeName)))):(e=xb(d),"none"===c&&e||rb.set(d,"olddisplay",e?c:_.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Yb=void 0}),Yb=_.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=wb[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cc[b]||[]).concat(cc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&xb(a),p=rb.get(a,"fxshow");c.queue||(h=_._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,_.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=_.css(a,"display"),k="none"===j?rb.get(a,"olddisplay")||u(a.nodeName):j,"inline"===k&&"none"===_.css(a,"float")&&(n.display="inline-block")),c.overflow&&(n.overflow="hidden",l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$b.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))"inline"===("none"===j?u(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=rb.access(a,"fxshow",{}),f&&(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;rb.remove(a,"fxshow");for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=_.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bc.length,h=_.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Yb||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Yb||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bc[f].call(j,a,k,j.opts))return d;return _.map(k,F,j),_.isFunction(j.opts.start)&&j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(nb)||[];if(_.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===vc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&_.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(_.isArray(b))_.each(b,function(b,e){c||zc.test(a)?d(a,e):O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==_.type(b))d(a,b);else for(e in b)O(a+"["+e+"]",b[e],c,d)}function P(a){return _.isWindow(a)?a:9===a.nodeType&&a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},Z=a.document,$="2.1.1",_=function(a,b){return new _.fn.init(a,b)},ab=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bb=/^-ms-/,cb=/-([\da-z])/gi,db=function(a,b){return b.toUpperCase()};_.fn=_.prototype={jquery:$,constructor:_,selector:"",length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=_.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||_.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&&_.isArray(c)?c:[]):f=c&&_.isPlainObject(c)?c:{},g[b]=_.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},_.extend({expando:"jQuery"+($+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!_.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=_.trim(a),a&&(1===a.indexOf("use strict")?(b=Z.createElement("script"),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(bb,"ms-").replace(cb,db)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(ab,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?_.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,support:Y}),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var eb=function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ub,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=tb.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return _.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ib,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?bb.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return bb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ib,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,ab=Y.slice,bb=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},cb="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",db="[\\x20\\t\\r\\n\\f]",eb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fb=eb.replace("w","w#"),gb="\\["+db+"*("+eb+")(?:"+db+"*([*^$|!~]?=)"+db+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+fb+"))|)"+db+"*\\]",hb=":("+eb+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+gb+")*)|.*)\\)|)",ib=new RegExp("^"+db+"+|((?:^|[^\\\\])(?:\\\\.)*)"+db+"+$","g"),jb=new RegExp("^"+db+"*,"+db+"*"),kb=new RegExp("^"+db+"*([>+~]|"+db+")"+db+"*"),lb=new RegExp("="+db+"*([^\\]'\"]*?)"+db+"*\\]","g"),mb=new RegExp(hb),nb=new RegExp("^"+fb+"$"),ob={ID:new RegExp("^#("+eb+")"),CLASS:new RegExp("^\\.("+eb+")"),TAG:new RegExp("^("+eb.replace("w","w*")+")"),ATTR:new RegExp("^"+gb),PSEUDO:new RegExp("^"+hb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+db+"*(even|odd|(([+-]|)(\\d*)n|)"+db+"*(?:([+-]|)"+db+"*(\\d+)|))"+db+"*\\)|)","i"),bool:new RegExp("^(?:"+cb+")$","i"),needsContext:new RegExp("^"+db+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+db+"*((?:-\\d)?\\d*)"+db+"*\\)|)(?=[^-]|$)","i")},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/'|\\/g,vb=new RegExp("\\\\([\\da-f]{1,6}"+db+"?|("+db+")|.)","ig"),wb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{_.apply(Y=ab.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xb){_={apply:Y.length?function(a,b){$.apply(a,ab.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!y(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=rb.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),v.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=rb.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&J.push("[*^$]="+db+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+db+"*(?:value|"+cb+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+db+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=rb.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",hb)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!v.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?bb.call(D,a)-bb.call(D,b):0:4&d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?bb.call(D,a)-bb.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(lb,"='$1']"),!(!v.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&X.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[3]||a[4]||a[5]||"").replace(vb,wb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return ob.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&mb.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+db+")"+a+"("+db+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=bb.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ib,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return nb.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=jb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ib," ")}),h=h.slice(d.length));for(g in w.filter)!(e=ob[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return _.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,tb.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(cb,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);_.find=eb,_.expr=eb.selectors,_.expr[":"]=_.expr.pseudos,_.unique=eb.uniqueSort,_.text=eb.getText,_.isXMLDoc=eb.isXML,_.contains=eb.contains;var fb=_.expr.match.needsContext,gb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,hb=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c>b;b++)if(_.contains(e[b],this))return!0
}));for(b=0;c>b;b++)_.find(a,e[b],d);return d=this.pushStack(c>1?_.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&fb.test(a)?_(a):a||[],!1).length}});var ib,jb=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,kb=_.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:jb.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ib).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof _?b[0]:b,_.merge(this,_.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:Z,!0)),gb.test(c[1])&&_.isPlainObject(b))for(c in b)_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=Z.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?"undefined"!=typeof ib.ready?ib.ready(a):a(_):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};kb.prototype=_.fn,ib=_(Z);var lb=/^(?:parents|prev(?:Until|All))/,mb={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fb.test(a)||"string"!=typeof a?_(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?_.unique(f):f)},index:function(a){return a?"string"==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return _.dir(a,"parentNode")},parentsUntil:function(a,b,c){return _.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return _.dir(a,"nextSibling")},prevAll:function(a){return _.dir(a,"previousSibling")},nextUntil:function(a,b,c){return _.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return _.dir(a,"previousSibling",c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=_.filter(d,e)),this.length>1&&(mb[a]||_.unique(e),lb.test(a)&&e.reverse()),this.pushStack(e)}});var nb=/\S+/g,ob={};_.Callbacks=function(a){a="string"==typeof a?ob[a]||f(a):_.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),d?g=i.length:b&&(e=c,k(b))}return this},remove:function(){return i&&_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))>-1;)i.splice(c,1),d&&(g>=c&&g--,h>=c&&h--)}),this},has:function(a){return a?_.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[["resolve","done",_.Callbacks("once memory"),"resolved"],["reject","fail",_.Callbacks("once memory"),"rejected"],["notify","progress",_.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?_.extend(a,d):d}},e={};return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&&_.isFunction(a.promise)?g:0,i=1===h?a:_.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pb;_.fn.ready=function(a){return _.ready.promise().done(a),this},_.extend({isReady:!1,readyWait:1,holdReady:function(a){a?_.readyWait++:_.ready(!0)},ready:function(a){(a===!0?--_.readyWait:_.isReady)||(_.isReady=!0,a!==!0&&--_.readyWait>0||(pb.resolveWith(Z,[_]),_.fn.triggerHandler&&(_(Z).triggerHandler("ready"),_(Z).off("ready"))))}}),_.ready.promise=function(b){return pb||(pb=_.Deferred(),"complete"===Z.readyState?setTimeout(_.ready):(Z.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pb.promise(b)},_.ready.promise();var qb=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,_.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};_.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{_.isArray(b)?d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(nb)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var rb=new h,sb=new h,tb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ub=/([A-Z])/g;_.extend({hasData:function(a){return sb.hasData(a)||rb.hasData(a)},data:function(a,b,c){return sb.access(a,b,c)},removeData:function(a,b){sb.remove(a,b)},_data:function(a,b,c){return rb.access(a,b,c)},_removeData:function(a,b){rb.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=sb.get(f),1===f.nodeType&&!rb.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=_.camelCase(d.slice(5)),i(f,d,e[d])));rb.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){sb.set(this,a)}):qb(this,function(b){var c,d=_.camelCase(a);if(f&&void 0===b){if(c=sb.get(f,a),void 0!==c)return c;if(c=sb.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sb.get(this,d);sb.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&sb.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sb.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=rb.get(a,b),c&&(!d||_.isArray(c)?d=rb.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return rb.get(a,c)||rb.access(a,c,{empty:_.Callbacks("once memory").add(function(){rb.remove(a,[b+"queue",c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);_._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=rb.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var vb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wb=["Top","Right","Bottom","Left"],xb=function(a,b){return a=b||a,"none"===_.css(a,"display")||!_.contains(a.ownerDocument,a)},yb=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement("div")),c=Z.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var zb="undefined";Y.focusinBubbles="onfocusin"in a;var Ab=/^key/,Bb=/^(?:mouse|pointer|contextmenu)|click/,Cb=/^(?:focusinfocus|focusoutblur)$/,Db=/^([^.]*)(?:\.(.+)|)$/;_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=_.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof _!==zb&&_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(nb)||[""],j=b.length;j--;)h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=_.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=_.event.special[n]||{},k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&_.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),_.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.hasData(a)&&rb.get(a);if(q&&(i=q.events)){for(b=(b||"").match(nb)||[""],j=b.length;j--;)if(h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);_.isEmptyObject(i)&&(delete q.handle,rb.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||Z,3!==d.nodeType&&8!==d.nodeType&&!Cb.test(n+_.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[_.expando]?b:new _.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:_.makeArray(c,[b]),l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!_.isWindow(d)){for(i=l.delegateType||n,Cb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;h===(d.ownerDocument||Z)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(rb.get(g,"events")||{})[b.type]&&rb.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&_.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&&_.isFunction(d[n])&&!_.isWindow(d)&&(h=d[j],h&&(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(rb.get(this,"events")||{})[a.type]||[],j=_.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=_.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?_(e,this).index(i)>=0:_.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[_.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Bb.test(e)?this.mouseHooks:Ab.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=Z),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&_.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return _.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},_.Event=function(a,b){return this instanceof _.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?j:k):this.type=a,b&&_.extend(this,b),this.timeStamp=a&&a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!_.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Y.focusinBubbles||_.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=rb.access(d,b);e||d.addEventListener(a,c,!0),rb.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=rb.access(d,b)-1;e?rb.access(d,b,e):(d.removeEventListener(a,c,!0),rb.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&&(f=d,d=function(a){return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Eb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fb=/<([\w:]+)/,Gb=/<|&#?\w+;/,Hb=/<(?:script|style|link)/i,Ib=/checked\s*(?:[^=]|=\s*.checked.)/i,Jb=/^$|\/(?:java|ecma)script/i,Kb=/^true\/(.*)/,Lb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mb.optgroup=Mb.option,Mb.tbody=Mb.tfoot=Mb.colgroup=Mb.caption=Mb.thead,Mb.th=Mb.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);if(!(Y.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||_.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===_.type(e))_.merge(l,e.nodeType?[e]:e);else if(Gb.test(e)){for(f=f||k.appendChild(b.createElement("div")),g=(Fb.exec(e)||["",""])[1].toLowerCase(),h=Mb[g]||Mb._default,f.innerHTML=h[1]+e.replace(Eb,"<$1></$2>")+h[2],j=h[0];j--;)f=f.lastChild;_.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));for(k.textContent="",m=0;e=l[m++];)if((!d||-1===_.inArray(e,d))&&(i=_.contains(e.ownerDocument,e),f=r(k.appendChild(e),"script"),i&&p(f),c))for(j=0;e=f[j++];)Jb.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&&(e=c[rb.expando],e&&(b=rb.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);rb.cache[e]&&delete rb.cache[e]}delete sb.cache[c[sb.expando]]}}}),_.fn.extend({text:function(a){return qb(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&&(b&&_.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(_.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qb(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Hb.test(a)&&!Mb[(Fb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Eb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);if(p||j>1&&"string"==typeof m&&!Y.checkClone&&Ib.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(e=_.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=_.clone(g,!0,!0),f&&_.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,_.map(e,o),i=0;f>i;i++)g=e[i],Jb.test(g.type||"")&&!rb.access(g,"globalEval")&&_.contains(h,g)&&(g.src?_._evalUrl&&_._evalUrl(g.src):_.globalEval(g.textContent.replace(Lb,"")))}return this}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Nb,Ob={},Pb=/^margin/,Qb=new RegExp("^("+vb+")(?!px)[a-z%]+$","i"),Rb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};!function(){function b(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",g.innerHTML="",e.appendChild(f);var b=a.getComputedStyle(g,null);c="1%"!==b.top,d="4px"===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement("div"),g=Z.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",f.appendChild(g),a.getComputedStyle&&_.extend(Y,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){var b,c=g.appendChild(Z.createElement("div"));return c.style.cssText=g.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),b}}))}(),_.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sb=/^(none|table(?!-c[ea]).+)/,Tb=new RegExp("^("+vb+")(.*)$","i"),Ub=new RegExp("^([+-])=("+vb+")","i"),Vb={position:"absolute",visibility:"hidden",display:"block"},Wb={letterSpacing:"0",fontWeight:"400"},Xb=["Webkit","O","Moz","ms"];_.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=_.camelCase(b),i=a.style;return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ub.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||_.cssNumber[h]||(c+="px"),Y.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wb&&(e=Wb[b]),""===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each(["height","width"],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sb.test(_.css(a,"display"))&&0===a.offsetWidth?_.swap(a,Vb,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Rb(a);return y(a,c,d?z(a,b,d,"border-box"===_.css(a,"boxSizing",!1,e),e):0)}}}),_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),_.each({margin:"",padding:"",border:"Width"},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wb[d]+b]=f[d]||f[d-2]||f[0];return e}},Pb.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qb(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Rb(a),e=b.length;e>g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xb(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.pos=b=this.options.duration?_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,_.fx.step={};var Yb,Zb,$b=/^(?:toggle|show|hide)$/,_b=new RegExp("^(?:([+-])=|)("+vb+")([a-z%]*)$","i"),ac=/queueHooks$/,bc=[G],cc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_b.exec(b),f=e&&e[3]||(_.cssNumber[a]?"":"px"),g=(_.cssNumber[a]||"px"!==f&&+d)&&_b.exec(_.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cc[c]=cc[c]||[],cc[c].unshift(b)},prefilter:function(a,b){b?bc.unshift(a):bc.push(a)}}),_.speed=function(a,b,c){var d=a&&"object"==typeof a?_.extend({},a):{complete:c||!c&&b||_.isFunction(a)&&a,duration:a,easing:c&&b||b&&!_.isFunction(b)&&b};return d.duration=_.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&&d.old.call(this),d.queue&&_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xb).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){var b=I(this,_.extend({},a),f);(e||rb.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=_.timers,g=rb.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ac.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&_.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=rb.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=_.timers,g=d?d.length:0;for(c.finish=!0,_.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),_.each(["toggle","show","hide"],function(a,b){var c=_.fn[b];
_.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),_.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){_.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),_.timers=[],_.fx.tick=function(){var a,b=0,c=_.timers;for(Yb=_.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||_.fx.stop(),Yb=void 0},_.fx.timer=function(a){_.timers.push(a),a()?_.fx.start():_.timers.pop()},_.fx.interval=13,_.fx.start=function(){Zb||(Zb=setInterval(_.fx.tick,_.fx.interval))},_.fx.stop=function(){clearInterval(Zb),Zb=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(a,b){return a=_.fx?_.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=Z.createElement("input"),b=Z.createElement("select"),c=b.appendChild(Z.createElement("option"));a.type="checkbox",Y.checkOn=""!==a.value,Y.optSelected=c.selected,b.disabled=!0,Y.optDisabled=!c.disabled,a=Z.createElement("input"),a.value="t",a.type="radio",Y.radioValue="t"===a.value}();var dc,ec,fc=_.expr.attrHandle;_.fn.extend({attr:function(a,b){return qb(this,_.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){_.removeAttr(this,a)})}}),_.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===zb?_.prop(a,b,c):(1===f&&_.isXMLDoc(a)||(b=b.toLowerCase(),d=_.attrHooks[b]||(_.expr.match.bool.test(b)?ec:dc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=_.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void _.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(nb);if(f&&1===a.nodeType)for(;c=f[e++];)d=_.propFix[c]||c,_.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Y.radioValue&&"radio"===b&&_.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),ec={set:function(a,b,c){return b===!1?_.removeAttr(a,c):a.setAttribute(c,c),c}},_.each(_.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fc[b]||_.find.attr;fc[b]=function(a,b,d){var e,f;return d||(f=fc[b],fc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fc[b]=f),e}});var gc=/^(?:input|select|textarea|button)$/i;_.fn.extend({prop:function(a,b){return qb(this,_.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[_.propFix[a]||a]})}}),_.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!_.isXMLDoc(a),f&&(b=_.propFix[b]||b,e=_.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gc.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Y.optSelected||(_.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this});var hc=/[\t\r\n\f]/g;_.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=_.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?_.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(_.isFunction(a)?function(c){_(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=_(this),f=a.match(nb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===zb||"boolean"===c)&&(this.className&&rb.set(this,"__className__",this.className),this.className=this.className||a===!1?"":rb.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hc," ").indexOf(b)>=0)return!0;return!1}});var ic=/\r/g;_.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=_.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,_(this).val()):a,null==e?e="":"number"==typeof e?e+="":_.isArray(e)&&(e=_.map(e,function(a){return null==a?"":a+""})),b=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=_.valHooks[e.type]||_.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ic,""):null==c?"":c)}}}),_.extend({valHooks:{option:{get:function(a){var b=_.find.attr(a,"value");return null!=b?b:_.trim(_.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(Y.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&_.nodeName(c.parentNode,"optgroup"))){if(b=_(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=_.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=_.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(a,b){return _.isArray(b)?a.checked=_.inArray(_(a).val(),b)>=0:void 0}},Y.checkOn||(_.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),_.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){_.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),_.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jc=_.now(),kc=/\?/;_.parseJSON=function(a){return JSON.parse(a+"")},_.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&_.error("Invalid XML: "+a),b};var lc,mc,nc=/#.*$/,oc=/([?&])_=[^&]*/,pc=/^(.*?):[ \t]*([^\r\n]*)$/gm,qc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rc=/^(?:GET|HEAD)$/,sc=/^\/\//,tc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,uc={},vc={},wc="*/".concat("*");try{mc=location.href}catch(xc){mc=Z.createElement("a"),mc.href="",mc=mc.href}lc=tc.exec(mc.toLowerCase())||[],_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:mc,type:"GET",isLocal:qc.test(lc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":_.parseJSON,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?L(L(a,_.ajaxSettings),b):L(_.ajaxSettings,a)},ajaxPrefilter:J(uc),ajaxTransport:J(vc),ajax:function(a,b){function c(a,b,c,g){var i,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),d=void 0,f=g||"",v.readyState=a>0?4:0,i=a>=200&&300>a||304===a,c&&(s=M(l,v,c)),s=N(l,s,v,i),i?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(_.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(_.etag[e]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),--_.active||_.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=_.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?_(m):_.event,o=_.Deferred(),p=_.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=pc.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||mc)+"").replace(nc,"").replace(sc,lc[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=_.trim(l.dataType||"*").toLowerCase().match(nb)||[""],null==l.crossDomain&&(i=tc.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===lc[1]&&i[2]===lc[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(lc[3]||("http:"===lc[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=_.param(l.data,l.traditional)),K(uc,l,b,v),2===t)return v;j=l.global,j&&0===_.active++&&_.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!rc.test(l.type),e=l.url,l.hasContent||(l.data&&(e=l.url+=(kc.test(e)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=oc.test(e)?e.replace(oc,"$1_="+jc++):e+(kc.test(e)?"&":"?")+"_="+jc++)),l.ifModified&&(_.lastModified[e]&&v.setRequestHeader("If-Modified-Since",_.lastModified[e]),_.etag[e]&&v.setRequestHeader("If-None-Match",_.etag[e])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+wc+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)v.setRequestHeader(k,l.headers[k]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(k in{success:1,error:1,complete:1})v[k](l[k]);if(d=K(vc,l,b,v)){v.readyState=1,j&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return _.get(a,b,c,"json")},getScript:function(a,b){return _.get(a,void 0,b,"script")}}),_.each(["get","post"],function(a,b){_[b]=function(a,c,d,e){return _.isFunction(c)&&(e=e||d,d=c,c=void 0),_.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){_.fn[b]=function(a){return this.on(b,a)}}),_._evalUrl=function(a){return _.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},_.fn.extend({wrapAll:function(a){var b;return _.isFunction(a)?this.each(function(b){_(this).wrapAll(a.call(this,b))}):(this[0]&&(b=_(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(_.isFunction(a)?function(b){_(this).wrapInner(a.call(this,b))}:function(){var b=_(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=_.isFunction(a);return this.each(function(c){_(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){_.nodeName(this,"body")||_(this).replaceWith(this.childNodes)}).end()}}),_.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},_.expr.filters.visible=function(a){return!_.expr.filters.hidden(a)};var yc=/%20/g,zc=/\[\]$/,Ac=/\r?\n/g,Bc=/^(?:submit|button|image|reset|file)$/i,Cc=/^(?:input|select|textarea|keygen)/i;_.param=function(a,b){var c,d=[],e=function(a,b){b=_.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=_.ajaxSettings&&_.ajaxSettings.traditional),_.isArray(a)||a.jquery&&!_.isPlainObject(a))_.each(a,function(){e(this.name,this.value)});else for(c in a)O(c,a[c],b,e);return d.join("&").replace(yc,"+")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=_.prop(this,"elements");return a?_.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!_(this).is(":disabled")&&Cc.test(this.nodeName)&&!Bc.test(a)&&(this.checked||!yb.test(a))}).map(function(a,b){var c=_(this).val();return null==c?null:_.isArray(c)?_.map(c,function(a){return{name:b.name,value:a.replace(Ac,"\r\n")}}):{name:b.name,value:c.replace(Ac,"\r\n")}}).get()}}),_.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Dc=0,Ec={},Fc={0:200,1223:204},Gc=_.ajaxSettings.xhr();a.ActiveXObject&&_(a).on("unload",function(){for(var a in Ec)Ec[a]()}),Y.cors=!!Gc&&"withCredentials"in Gc,Y.ajax=Gc=!!Gc,_.ajaxTransport(function(a){var b;return Y.cors||Gc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Dc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Ec[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Fc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Ec[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return _.globalEval(a),a}}}),_.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),_.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=_("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),Z.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Hc=[],Ic=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Hc.pop()||_.expando+"_"+jc++;return this[a]=!0,a}}),_.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ic.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ic.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=_.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ic,"$1"+e):b.jsonp!==!1&&(b.url+=(kc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||_.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Hc.push(e)),g&&_.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),_.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||Z;var d=gb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=_.buildFragment([a],b,e),e&&e.length&&_(e).remove(),_.merge([],d.childNodes))};var Jc=_.fn.load;_.fn.load=function(a,b,c){if("string"!=typeof a&&Jc)return Jc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=_.trim(a.slice(h)),a=a.slice(0,h)),_.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&_.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?_("<div>").append(_.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},_.expr.filters.animated=function(a){return _.grep(_.timers,function(b){return a===b.elem}).length};var Kc=a.document.documentElement;_.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=_.css(a,"position"),l=_(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=_.css(a,"top"),i=_.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),_.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},_.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){_.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,_.contains(b,d)?(typeof d.getBoundingClientRect!==zb&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===_.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),_.nodeName(a[0],"html")||(d=a.offset()),d.top+=_.css(a[0],"borderTopWidth",!0),d.left+=_.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-_.css(c,"marginTop",!0),left:b.left-d.left-_.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Kc;a&&!_.nodeName(a,"html")&&"static"===_.css(a,"position");)a=a.offsetParent;return a||Kc})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;_.fn[b]=function(e){return qb(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),_.each(["top","left"],function(a,b){_.cssHooks[b]=w(Y.pixelPosition,function(a,c){return c?(c=v(a,b),Qb.test(c)?_(a).position()[b]+"px":c):void 0})}),_.each({Height:"height",Width:"width"},function(a,b){_.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){_.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qb(this,function(b,c,d){var e;return _.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?_.css(b,c,g):_.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),_.fn.size=function(){return this.length},_.fn.andSelf=_.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return _});var Lc=a.jQuery,Mc=a.$;return _.noConflict=function(b){return a.$===_&&(a.$=Mc),b&&a.jQuery===_&&(a.jQuery=Lc),_},typeof b===zb&&(a.jQuery=a.$=_),_}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});
d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery),!function(){function a(a,b){return b>a?-1:a>b?1:a>=b?0:0/0}function b(a){return null!=a&&!isNaN(a)}function c(a){return{left:function(b,c,d,e){for(arguments.length<3&&(d=0),arguments.length<4&&(e=b.length);e>d;){var f=d+e>>>1;a(b[f],c)<0?d=f+1:e=f}return d},right:function(b,c,d,e){for(arguments.length<3&&(d=0),arguments.length<4&&(e=b.length);e>d;){var f=d+e>>>1;a(b[f],c)>0?e=f:d=f+1}return d}}}function d(a){return a.length}function e(a){for(var b=1;a*b%1;)b*=10;return b}function f(a,b){try{for(var c in b)Object.defineProperty(a.prototype,c,{value:b[c],enumerable:!1})}catch(d){a.prototype=b}}function g(){}function h(a){return fh+a in this}function i(a){return a=fh+a,a in this&&delete this[a]}function j(){var a=[];return this.forEach(function(b){a.push(b)}),a}function k(){var a=0;for(var b in this)b.charCodeAt(0)===gh&&++a;return a}function l(){for(var a in this)if(a.charCodeAt(0)===gh)return!1;return!0}function m(){}function n(a,b,c){return function(){var d=c.apply(b,arguments);return d===b?a:d}}function o(a,b){if(b in a)return b;b=b.charAt(0).toUpperCase()+b.substring(1);for(var c=0,d=hh.length;d>c;++c){var e=hh[c]+b;if(e in a)return e}}function p(){}function q(){}function r(a){function b(){for(var b,d=c,e=-1,f=d.length;++e<f;)(b=d[e].on)&&b.apply(this,arguments);return a}var c=[],d=new g;return b.on=function(b,e){var f,g=d.get(b);return arguments.length<2?g&&g.on:(g&&(g.on=null,c=c.slice(0,f=c.indexOf(g)).concat(c.slice(f+1)),d.remove(b)),e&&c.push(d.set(b,{on:e})),a)},b}function s(){Sg.event.preventDefault()}function t(){for(var a,b=Sg.event;a=b.sourceEvent;)b=a;return b}function u(a){for(var b=new q,c=0,d=arguments.length;++c<d;)b[arguments[c]]=r(b);return b.of=function(c,d){return function(e){try{var f=e.sourceEvent=Sg.event;e.target=a,Sg.event=e,b[e.type].apply(c,d)}finally{Sg.event=f}}},b}function v(a){return jh(a,oh),a}function w(a){return"function"==typeof a?a:function(){return kh(a,this)}}function x(a){return"function"==typeof a?a:function(){return lh(a,this)}}function y(a,b){function c(){this.removeAttribute(a)}function d(){this.removeAttributeNS(a.space,a.local)}function e(){this.setAttribute(a,b)}function f(){this.setAttributeNS(a.space,a.local,b)}function g(){var c=b.apply(this,arguments);null==c?this.removeAttribute(a):this.setAttribute(a,c)}function h(){var c=b.apply(this,arguments);null==c?this.removeAttributeNS(a.space,a.local):this.setAttributeNS(a.space,a.local,c)}return a=Sg.ns.qualify(a),null==b?a.local?d:c:"function"==typeof b?a.local?h:g:a.local?f:e}function z(a){return a.trim().replace(/\s+/g," ")}function A(a){return new RegExp("(?:^|\\s+)"+Sg.requote(a)+"(?:\\s+|$)","g")}function B(a){return(a+"").trim().split(/^|\s+/)}function C(a,b){function c(){for(var c=-1;++c<e;)a[c](this,b)}function d(){for(var c=-1,d=b.apply(this,arguments);++c<e;)a[c](this,d)}a=B(a).map(D);var e=a.length;return"function"==typeof b?d:c}function D(a){var b=A(a);return function(c,d){if(e=c.classList)return d?e.add(a):e.remove(a);var e=c.getAttribute("class")||"";d?(b.lastIndex=0,b.test(e)||c.setAttribute("class",z(e+" "+a))):c.setAttribute("class",z(e.replace(b," ")))}}function E(a,b,c){function d(){this.style.removeProperty(a)}function e(){this.style.setProperty(a,b,c)}function f(){var d=b.apply(this,arguments);null==d?this.style.removeProperty(a):this.style.setProperty(a,d,c)}return null==b?d:"function"==typeof b?f:e}function F(a,b){function c(){delete this[a]}function d(){this[a]=b}function e(){var c=b.apply(this,arguments);null==c?delete this[a]:this[a]=c}return null==b?c:"function"==typeof b?e:d}function G(a){return"function"==typeof a?a:(a=Sg.ns.qualify(a)).local?function(){return this.ownerDocument.createElementNS(a.space,a.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,a)}}function H(a){return{__data__:a}}function I(a){return function(){return nh(this,a)}}function J(b){return arguments.length||(b=a),function(a,c){return a&&c?b(a.__data__,c.__data__):!a-!c}}function K(a,b){for(var c=0,d=a.length;d>c;c++)for(var e,f=a[c],g=0,h=f.length;h>g;g++)(e=f[g])&&b(e,g,c);return a}function L(a){return jh(a,qh),a}function M(a){var b,c;return function(d,e,f){var g,h=a[f].update,i=h.length;for(f!=c&&(c=f,b=0),e>=b&&(b=e+1);!(g=h[b])&&++b<i;);return g}}function N(){var a=this.__transition__;a&&++a.active}function O(a,b,c){function d(){var b=this[g];b&&(this.removeEventListener(a,b,b.$),delete this[g])}function e(){var e=i(b,Ug(arguments));d.call(this),this.addEventListener(a,this[g]=e,e.$=c),e._=b}function f(){var b,c=new RegExp("^__on([^.]+)"+Sg.requote(a)+"$");for(var d in this)if(b=d.match(c)){var e=this[d];this.removeEventListener(b[1],e,e.$),delete this[d]}}var g="__on"+a,h=a.indexOf("."),i=P;h>0&&(a=a.substring(0,h));var j=sh.get(a);return j&&(a=j,i=Q),h?b?e:d:b?p:f}function P(a,b){return function(c){var d=Sg.event;Sg.event=c,b[0]=this.__data__;try{a.apply(this,b)}finally{Sg.event=d}}}function Q(a,b){var c=P(a,b);return function(a){var b=this,d=a.relatedTarget;d&&(d===b||8&d.compareDocumentPosition(b))||c.call(b,a)}}function R(){var a=".dragsuppress-"+ ++uh,b="click"+a,c=Sg.select(Xg).on("touchmove"+a,s).on("dragstart"+a,s).on("selectstart"+a,s);if(th){var d=Wg.style,e=d[th];d[th]="none"}return function(f){function g(){c.on(b,null)}c.on(a,null),th&&(d[th]=e),f&&(c.on(b,function(){s(),g()},!0),setTimeout(g,0))}}function S(a,b){b.changedTouches&&(b=b.changedTouches[0]);var c=a.ownerSVGElement||a;if(c.createSVGPoint){var d=c.createSVGPoint();if(0>vh&&(Xg.scrollX||Xg.scrollY)){c=Sg.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var e=c[0][0].getScreenCTM();vh=!(e.f||e.e),c.remove()}return vh?(d.x=b.pageX,d.y=b.pageY):(d.x=b.clientX,d.y=b.clientY),d=d.matrixTransform(a.getScreenCTM().inverse()),[d.x,d.y]}var f=a.getBoundingClientRect();return[b.clientX-f.left-a.clientLeft,b.clientY-f.top-a.clientTop]}function T(){return Sg.event.changedTouches[0].identifier}function U(){return Sg.event.target}function V(){return Xg}function W(a){return a>0?1:0>a?-1:0}function X(a,b,c){return(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0])}function Y(a){return a>1?0:-1>a?wh:Math.acos(a)}function Z(a){return a>1?yh:-1>a?-yh:Math.asin(a)}function $(a){return((a=Math.exp(a))-1/a)/2}function _(a){return((a=Math.exp(a))+1/a)/2}function ab(a){return((a=Math.exp(2*a))-1)/(a+1)}function bb(a){return(a=Math.sin(a/2))*a}function cb(){}function db(a,b,c){return this instanceof db?(this.h=+a,this.s=+b,void(this.l=+c)):arguments.length<2?a instanceof db?new db(a.h,a.s,a.l):rb(""+a,sb,db):new db(a,b,c)}function eb(a,b,c){function d(a){return a>360?a-=360:0>a&&(a+=360),60>a?f+(g-f)*a/60:180>a?g:240>a?f+(g-f)*(240-a)/60:f}function e(a){return Math.round(255*d(a))}var f,g;return a=isNaN(a)?0:(a%=360)<0?a+360:a,b=isNaN(b)?0:0>b?0:b>1?1:b,c=0>c?0:c>1?1:c,g=.5>=c?c*(1+b):c+b-c*b,f=2*c-g,new nb(e(a+120),e(a),e(a-120))}function fb(a,b,c){return this instanceof fb?(this.h=+a,this.c=+b,void(this.l=+c)):arguments.length<2?a instanceof fb?new fb(a.h,a.c,a.l):a instanceof hb?jb(a.l,a.a,a.b):jb((a=tb((a=Sg.rgb(a)).r,a.g,a.b)).l,a.a,a.b):new fb(a,b,c)}function gb(a,b,c){return isNaN(a)&&(a=0),isNaN(b)&&(b=0),new hb(c,Math.cos(a*=Bh)*b,Math.sin(a)*b)}function hb(a,b,c){return this instanceof hb?(this.l=+a,this.a=+b,void(this.b=+c)):arguments.length<2?a instanceof hb?new hb(a.l,a.a,a.b):a instanceof fb?gb(a.l,a.c,a.h):tb((a=nb(a)).r,a.g,a.b):new hb(a,b,c)}function ib(a,b,c){var d=(a+16)/116,e=d+b/500,f=d-c/200;return e=kb(e)*Mh,d=kb(d)*Nh,f=kb(f)*Oh,new nb(mb(3.2404542*e-1.5371385*d-.4985314*f),mb(-.969266*e+1.8760108*d+.041556*f),mb(.0556434*e-.2040259*d+1.0572252*f))}function jb(a,b,c){return a>0?new fb(Math.atan2(c,b)*Ch,Math.sqrt(b*b+c*c),a):new fb(0/0,0/0,a)}function kb(a){return a>.206893034?a*a*a:(a-4/29)/7.787037}function lb(a){return a>.008856?Math.pow(a,1/3):7.787037*a+4/29}function mb(a){return Math.round(255*(.00304>=a?12.92*a:1.055*Math.pow(a,1/2.4)-.055))}function nb(a,b,c){return this instanceof nb?(this.r=~~a,this.g=~~b,void(this.b=~~c)):arguments.length<2?a instanceof nb?new nb(a.r,a.g,a.b):rb(""+a,nb,eb):new nb(a,b,c)}function ob(a){return new nb(a>>16,a>>8&255,255&a)}function pb(a){return ob(a)+""}function qb(a){return 16>a?"0"+Math.max(0,a).toString(16):Math.min(255,a).toString(16)}function rb(a,b,c){var d,e,f,g=0,h=0,i=0;if(d=/([a-z]+)\((.*)\)/i.exec(a))switch(e=d[2].split(","),d[1]){case"hsl":return c(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100);case"rgb":return b(vb(e[0]),vb(e[1]),vb(e[2]))}return(f=Rh.get(a))?b(f.r,f.g,f.b):(null==a||"#"!==a.charAt(0)||isNaN(f=parseInt(a.substring(1),16))||(4===a.length?(g=(3840&f)>>4,g=g>>4|g,h=240&f,h=h>>4|h,i=15&f,i=i<<4|i):7===a.length&&(g=(16711680&f)>>16,h=(65280&f)>>8,i=255&f)),b(g,h,i))}function sb(a,b,c){var d,e,f=Math.min(a/=255,b/=255,c/=255),g=Math.max(a,b,c),h=g-f,i=(g+f)/2;return h?(e=.5>i?h/(g+f):h/(2-g-f),d=a==g?(b-c)/h+(c>b?6:0):b==g?(c-a)/h+2:(a-b)/h+4,d*=60):(d=0/0,e=i>0&&1>i?0:d),new db(d,e,i)}function tb(a,b,c){a=ub(a),b=ub(b),c=ub(c);var d=lb((.4124564*a+.3575761*b+.1804375*c)/Mh),e=lb((.2126729*a+.7151522*b+.072175*c)/Nh),f=lb((.0193339*a+.119192*b+.9503041*c)/Oh);return hb(116*e-16,500*(d-e),200*(e-f))}function ub(a){return(a/=255)<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}function vb(a){var b=parseFloat(a);return"%"===a.charAt(a.length-1)?Math.round(2.55*b):b}function wb(a){return"function"==typeof a?a:function(){return a}}function xb(a){return a}function yb(a){return function(b,c,d){return 2===arguments.length&&"function"==typeof c&&(d=c,c=null),zb(b,c,a,d)}}function zb(a,b,c,d){function e(){var a,b=i.status;if(!b&&i.responseText||b>=200&&300>b||304===b){try{a=c.call(f,i)}catch(d){return void g.error.call(f,d)}g.load.call(f,a)}else g.error.call(f,i)}var f={},g=Sg.dispatch("beforesend","progress","load","error"),h={},i=new XMLHttpRequest,j=null;return!Xg.XDomainRequest||"withCredentials"in i||!/^(http(s)?:)?\/\//.test(a)||(i=new XDomainRequest),"onload"in i?i.onload=i.onerror=e:i.onreadystatechange=function(){i.readyState>3&&e()},i.onprogress=function(a){var b=Sg.event;Sg.event=a;try{g.progress.call(f,i)}finally{Sg.event=b}},f.header=function(a,b){return a=(a+"").toLowerCase(),arguments.length<2?h[a]:(null==b?delete h[a]:h[a]=b+"",f)},f.mimeType=function(a){return arguments.length?(b=null==a?null:a+"",f):b},f.responseType=function(a){return arguments.length?(j=a,f):j},f.response=function(a){return c=a,f},["get","post"].forEach(function(a){f[a]=function(){return f.send.apply(f,[a].concat(Ug(arguments)))}}),f.send=function(c,d,e){if(2===arguments.length&&"function"==typeof d&&(e=d,d=null),i.open(c,a,!0),null==b||"accept"in h||(h.accept=b+",*/*"),i.setRequestHeader)for(var k in h)i.setRequestHeader(k,h[k]);return null!=b&&i.overrideMimeType&&i.overrideMimeType(b),null!=j&&(i.responseType=j),null!=e&&f.on("error",e).on("load",function(a){e(null,a)}),g.beforesend.call(f,i),i.send(null==d?null:d),f},f.abort=function(){return i.abort(),f},Sg.rebind(f,g,"on"),null==d?f:f.get(Ab(d))}function Ab(a){return 1===a.length?function(b,c){a(null==b?c:null)}:a}function Bb(){var a=Cb(),b=Db()-a;b>24?(isFinite(b)&&(clearTimeout(Vh),Vh=setTimeout(Bb,b)),Uh=0):(Uh=1,Xh(Bb))}function Cb(){var a=Date.now();for(Wh=Sh;Wh;)a>=Wh.t&&(Wh.f=Wh.c(a-Wh.t)),Wh=Wh.n;return a}function Db(){for(var a,b=Sh,c=1/0;b;)b.f?b=a?a.n=b.n:Sh=b.n:(b.t<c&&(c=b.t),b=(a=b).n);return Th=a,c}function Eb(a,b){return b-(a?Math.ceil(Math.log(a)/Math.LN10):1)}function Fb(a,b){var c=Math.pow(10,3*eh(8-b));return{scale:b>8?function(a){return a/c}:function(a){return a*c},symbol:a}}function Gb(a){var b=a.decimal,c=a.thousands,d=a.grouping,e=a.currency,f=d?function(a){for(var b=a.length,e=[],f=0,g=d[0];b>0&&g>0;)e.push(a.substring(b-=g,b+g)),g=d[f=(f+1)%d.length];return e.reverse().join(c)}:xb;return function(a){var c=Zh.exec(a),d=c[1]||" ",g=c[2]||">",h=c[3]||"",i=c[4]||"",j=c[5],k=+c[6],l=c[7],m=c[8],n=c[9],o=1,p="",q="",r=!1;switch(m&&(m=+m.substring(1)),(j||"0"===d&&"="===g)&&(j=d="0",g="=",l&&(k-=Math.floor((k-1)/4))),n){case"n":l=!0,n="g";break;case"%":o=100,q="%",n="f";break;case"p":o=100,q="%",n="r";break;case"b":case"o":case"x":case"X":"#"===i&&(p="0"+n.toLowerCase());case"c":case"d":r=!0,m=0;break;case"s":o=-1,n="r"}"$"===i&&(p=e[0],q=e[1]),"r"!=n||m||(n="g"),null!=m&&("g"==n?m=Math.max(1,Math.min(21,m)):("e"==n||"f"==n)&&(m=Math.max(0,Math.min(20,m)))),n=$h.get(n)||Hb;var s=j&&l;return function(a){var c=q;if(r&&a%1)return"";var e=0>a||0===a&&0>1/a?(a=-a,"-"):h;if(0>o){var i=Sg.formatPrefix(a,m);a=i.scale(a),c=i.symbol+q}else a*=o;a=n(a,m);var t=a.lastIndexOf("."),u=0>t?a:a.substring(0,t),v=0>t?"":b+a.substring(t+1);!j&&l&&(u=f(u));var w=p.length+u.length+v.length+(s?0:e.length),x=k>w?new Array(w=k-w+1).join(d):"";return s&&(u=f(x+u)),e+=p,a=u+v,("<"===g?e+a+x:">"===g?x+e+a:"^"===g?x.substring(0,w>>=1)+e+a+x.substring(w):e+(s?a:x+a))+c}}}function Hb(a){return a+""}function Ib(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Jb(a,b,c){function d(b){var c=a(b),d=f(c,1);return d-b>b-c?c:d}function e(c){return b(c=a(new ai(c-1)),1),c}function f(a,c){return b(a=new ai(+a),c),a}function g(a,d,f){var g=e(a),h=[];if(f>1)for(;d>g;)c(g)%f||h.push(new Date(+g)),b(g,1);else for(;d>g;)h.push(new Date(+g)),b(g,1);return h}function h(a,b,c){try{ai=Ib;var d=new Ib;return d._=a,g(d,b,c)}finally{ai=Date}}a.floor=a,a.round=d,a.ceil=e,a.offset=f,a.range=g;var i=a.utc=Kb(a);return i.floor=i,i.round=Kb(d),i.ceil=Kb(e),i.offset=Kb(f),i.range=h,a}function Kb(a){return function(b,c){try{ai=Ib;var d=new Ib;return d._=b,a(d,c)._}finally{ai=Date}}}function Lb(a){function b(a){function b(b){for(var c,e,f,g=[],h=-1,i=0;++h<d;)37===a.charCodeAt(h)&&(g.push(a.substring(i,h)),null!=(e=ci[c=a.charAt(++h)])&&(c=a.charAt(++h)),(f=C[c])&&(c=f(b,null==e?"e"===c?" ":"0":e)),g.push(c),i=h+1);return g.push(a.substring(i,h)),g.join("")}var d=a.length;return b.parse=function(b){var d={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},e=c(d,a,b,0);if(e!=b.length)return null;"p"in d&&(d.H=d.H%12+12*d.p);var f=null!=d.Z&&ai!==Ib,g=new(f?Ib:ai);return"j"in d?g.setFullYear(d.y,0,d.j):"w"in d&&("W"in d||"U"in d)?(g.setFullYear(d.y,0,1),g.setFullYear(d.y,0,"W"in d?(d.w+6)%7+7*d.W-(g.getDay()+5)%7:d.w+7*d.U-(g.getDay()+6)%7)):g.setFullYear(d.y,d.m,d.d),g.setHours(d.H+Math.floor(d.Z/100),d.M+d.Z%100,d.S,d.L),f?g._:g},b.toString=function(){return a},b}function c(a,b,c,d){for(var e,f,g,h=0,i=b.length,j=c.length;i>h;){if(d>=j)return-1;if(e=b.charCodeAt(h++),37===e){if(g=b.charAt(h++),f=D[g in ci?b.charAt(h++):g],!f||(d=f(a,c,d))<0)return-1}else if(e!=c.charCodeAt(d++))return-1}return d}function d(a,b,c){w.lastIndex=0;var d=w.exec(b.substring(c));return d?(a.w=x.get(d[0].toLowerCase()),c+d[0].length):-1}function e(a,b,c){u.lastIndex=0;var d=u.exec(b.substring(c));return d?(a.w=v.get(d[0].toLowerCase()),c+d[0].length):-1}function f(a,b,c){A.lastIndex=0;var d=A.exec(b.substring(c));return d?(a.m=B.get(d[0].toLowerCase()),c+d[0].length):-1}function g(a,b,c){y.lastIndex=0;var d=y.exec(b.substring(c));return d?(a.m=z.get(d[0].toLowerCase()),c+d[0].length):-1
}function h(a,b,d){return c(a,C.c.toString(),b,d)}function i(a,b,d){return c(a,C.x.toString(),b,d)}function j(a,b,d){return c(a,C.X.toString(),b,d)}function k(a,b,c){var d=t.get(b.substring(c,c+=2).toLowerCase());return null==d?-1:(a.p=d,c)}var l=a.dateTime,m=a.date,n=a.time,o=a.periods,p=a.days,q=a.shortDays,r=a.months,s=a.shortMonths;b.utc=function(a){function c(a){try{ai=Ib;var b=new ai;return b._=a,d(b)}finally{ai=Date}}var d=b(a);return c.parse=function(a){try{ai=Ib;var b=d.parse(a);return b&&b._}finally{ai=Date}},c.toString=d.toString,c},b.multi=b.utc.multi=dc;var t=Sg.map(),u=Nb(p),v=Ob(p),w=Nb(q),x=Ob(q),y=Nb(r),z=Ob(r),A=Nb(s),B=Ob(s);o.forEach(function(a,b){t.set(a.toLowerCase(),b)});var C={a:function(a){return q[a.getDay()]},A:function(a){return p[a.getDay()]},b:function(a){return s[a.getMonth()]},B:function(a){return r[a.getMonth()]},c:b(l),d:function(a,b){return Mb(a.getDate(),b,2)},e:function(a,b){return Mb(a.getDate(),b,2)},H:function(a,b){return Mb(a.getHours(),b,2)},I:function(a,b){return Mb(a.getHours()%12||12,b,2)},j:function(a,b){return Mb(1+_h.dayOfYear(a),b,3)},L:function(a,b){return Mb(a.getMilliseconds(),b,3)},m:function(a,b){return Mb(a.getMonth()+1,b,2)},M:function(a,b){return Mb(a.getMinutes(),b,2)},p:function(a){return o[+(a.getHours()>=12)]},S:function(a,b){return Mb(a.getSeconds(),b,2)},U:function(a,b){return Mb(_h.sundayOfYear(a),b,2)},w:function(a){return a.getDay()},W:function(a,b){return Mb(_h.mondayOfYear(a),b,2)},x:b(m),X:b(n),y:function(a,b){return Mb(a.getFullYear()%100,b,2)},Y:function(a,b){return Mb(a.getFullYear()%1e4,b,4)},Z:bc,"%":function(){return"%"}},D={a:d,A:e,b:f,B:g,c:h,d:Xb,e:Xb,H:Zb,I:Zb,j:Yb,L:ac,m:Wb,M:$b,p:k,S:_b,U:Qb,w:Pb,W:Rb,x:i,X:j,y:Tb,Y:Sb,Z:Ub,"%":cc};return b}function Mb(a,b,c){var d=0>a?"-":"",e=(d?-a:a)+"",f=e.length;return d+(c>f?new Array(c-f+1).join(b)+e:e)}function Nb(a){return new RegExp("^(?:"+a.map(Sg.requote).join("|")+")","i")}function Ob(a){for(var b=new g,c=-1,d=a.length;++c<d;)b.set(a[c].toLowerCase(),c);return b}function Pb(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+1));return d?(a.w=+d[0],c+d[0].length):-1}function Qb(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c));return d?(a.U=+d[0],c+d[0].length):-1}function Rb(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c));return d?(a.W=+d[0],c+d[0].length):-1}function Sb(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+4));return d?(a.y=+d[0],c+d[0].length):-1}function Tb(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+2));return d?(a.y=Vb(+d[0]),c+d[0].length):-1}function Ub(a,b,c){return/^[+-]\d{4}$/.test(b=b.substring(c,c+5))?(a.Z=-b,c+5):-1}function Vb(a){return a+(a>68?1900:2e3)}function Wb(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+2));return d?(a.m=d[0]-1,c+d[0].length):-1}function Xb(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+2));return d?(a.d=+d[0],c+d[0].length):-1}function Yb(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+3));return d?(a.j=+d[0],c+d[0].length):-1}function Zb(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+2));return d?(a.H=+d[0],c+d[0].length):-1}function $b(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+2));return d?(a.M=+d[0],c+d[0].length):-1}function _b(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+2));return d?(a.S=+d[0],c+d[0].length):-1}function ac(a,b,c){di.lastIndex=0;var d=di.exec(b.substring(c,c+3));return d?(a.L=+d[0],c+d[0].length):-1}function bc(a){var b=a.getTimezoneOffset(),c=b>0?"-":"+",d=~~(eh(b)/60),e=eh(b)%60;return c+Mb(d,"0",2)+Mb(e,"0",2)}function cc(a,b,c){ei.lastIndex=0;var d=ei.exec(b.substring(c,c+1));return d?c+d[0].length:-1}function dc(a){for(var b=a.length,c=-1;++c<b;)a[c][0]=this(a[c][0]);return function(b){for(var c=0,d=a[c];!d[1](b);)d=a[++c];return d[0](b)}}function ec(){}function fc(a,b,c){var d=c.s=a+b,e=d-a,f=d-e;c.t=a-f+(b-e)}function gc(a,b){a&&ii.hasOwnProperty(a.type)&&ii[a.type](a,b)}function hc(a,b,c){var d,e=-1,f=a.length-c;for(b.lineStart();++e<f;)d=a[e],b.point(d[0],d[1],d[2]);b.lineEnd()}function ic(a,b){var c=-1,d=a.length;for(b.polygonStart();++c<d;)hc(a[c],b,1);b.polygonEnd()}function jc(){function a(a,b){a*=Bh,b=b*Bh/2+wh/4;var c=a-d,g=c>=0?1:-1,h=g*c,i=Math.cos(b),j=Math.sin(b),k=f*j,l=e*i+k*Math.cos(h),m=k*g*Math.sin(h);ki.add(Math.atan2(m,l)),d=a,e=i,f=j}var b,c,d,e,f;li.point=function(g,h){li.point=a,d=(b=g)*Bh,e=Math.cos(h=(c=h)*Bh/2+wh/4),f=Math.sin(h)},li.lineEnd=function(){a(b,c)}}function kc(a){var b=a[0],c=a[1],d=Math.cos(c);return[d*Math.cos(b),d*Math.sin(b),Math.sin(c)]}function lc(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}function mc(a,b){return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}function nc(a,b){a[0]+=b[0],a[1]+=b[1],a[2]+=b[2]}function oc(a,b){return[a[0]*b,a[1]*b,a[2]*b]}function pc(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);a[0]/=b,a[1]/=b,a[2]/=b}function qc(a){return[Math.atan2(a[1],a[0]),Z(a[2])]}function rc(a,b){return eh(a[0]-b[0])<zh&&eh(a[1]-b[1])<zh}function sc(a,b){a*=Bh;var c=Math.cos(b*=Bh);tc(c*Math.cos(a),c*Math.sin(a),Math.sin(b))}function tc(a,b,c){++mi,oi+=(a-oi)/mi,pi+=(b-pi)/mi,qi+=(c-qi)/mi}function uc(){function a(a,e){a*=Bh;var f=Math.cos(e*=Bh),g=f*Math.cos(a),h=f*Math.sin(a),i=Math.sin(e),j=Math.atan2(Math.sqrt((j=c*i-d*h)*j+(j=d*g-b*i)*j+(j=b*h-c*g)*j),b*g+c*h+d*i);ni+=j,ri+=j*(b+(b=g)),si+=j*(c+(c=h)),ti+=j*(d+(d=i)),tc(b,c,d)}var b,c,d;xi.point=function(e,f){e*=Bh;var g=Math.cos(f*=Bh);b=g*Math.cos(e),c=g*Math.sin(e),d=Math.sin(f),xi.point=a,tc(b,c,d)}}function vc(){xi.point=sc}function wc(){function a(a,b){a*=Bh;var c=Math.cos(b*=Bh),g=c*Math.cos(a),h=c*Math.sin(a),i=Math.sin(b),j=e*i-f*h,k=f*g-d*i,l=d*h-e*g,m=Math.sqrt(j*j+k*k+l*l),n=d*g+e*h+f*i,o=m&&-Y(n)/m,p=Math.atan2(m,n);ui+=o*j,vi+=o*k,wi+=o*l,ni+=p,ri+=p*(d+(d=g)),si+=p*(e+(e=h)),ti+=p*(f+(f=i)),tc(d,e,f)}var b,c,d,e,f;xi.point=function(g,h){b=g,c=h,xi.point=a,g*=Bh;var i=Math.cos(h*=Bh);d=i*Math.cos(g),e=i*Math.sin(g),f=Math.sin(h),tc(d,e,f)},xi.lineEnd=function(){a(b,c),xi.lineEnd=vc,xi.point=sc}}function xc(){return!0}function yc(a,b,c,d,e){var f=[],g=[];if(a.forEach(function(a){if(!((b=a.length-1)<=0)){var b,c=a[0],d=a[b];if(rc(c,d)){e.lineStart();for(var h=0;b>h;++h)e.point((c=a[h])[0],c[1]);return void e.lineEnd()}var i=new Ac(c,a,null,!0),j=new Ac(c,null,i,!1);i.o=j,f.push(i),g.push(j),i=new Ac(d,a,null,!1),j=new Ac(d,null,i,!0),i.o=j,f.push(i),g.push(j)}}),g.sort(b),zc(f),zc(g),f.length){for(var h=0,i=c,j=g.length;j>h;++h)g[h].e=i=!i;for(var k,l,m=f[0];;){for(var n=m,o=!0;n.v;)if((n=n.n)===m)return;k=n.z,e.lineStart();do{if(n.v=n.o.v=!0,n.e){if(o)for(var h=0,j=k.length;j>h;++h)e.point((l=k[h])[0],l[1]);else d(n.x,n.n.x,1,e);n=n.n}else{if(o){k=n.p.z;for(var h=k.length-1;h>=0;--h)e.point((l=k[h])[0],l[1])}else d(n.x,n.p.x,-1,e);n=n.p}n=n.o,k=n.z,o=!o}while(!n.v);e.lineEnd()}}}function zc(a){if(b=a.length){for(var b,c,d=0,e=a[0];++d<b;)e.n=c=a[d],c.p=e,e=c;e.n=c=a[0],c.p=e}}function Ac(a,b,c,d){this.x=a,this.z=b,this.o=c,this.e=d,this.v=!1,this.n=this.p=null}function Bc(a,b,c,d){return function(e,f){function g(b,c){var d=e(b,c);a(b=d[0],c=d[1])&&f.point(b,c)}function h(a,b){var c=e(a,b);q.point(c[0],c[1])}function i(){s.point=h,q.lineStart()}function j(){s.point=g,q.lineEnd()}function k(a,b){p.push([a,b]);var c=e(a,b);u.point(c[0],c[1])}function l(){u.lineStart(),p=[]}function m(){k(p[0][0],p[0][1]),u.lineEnd();var a,b=u.clean(),c=t.buffer(),d=c.length;if(p.pop(),o.push(p),p=null,d)if(1&b){a=c[0];var e,d=a.length-1,g=-1;if(d>0){for(v||(f.polygonStart(),v=!0),f.lineStart();++g<d;)f.point((e=a[g])[0],e[1]);f.lineEnd()}}else d>1&&2&b&&c.push(c.pop().concat(c.shift())),n.push(c.filter(Cc))}var n,o,p,q=b(f),r=e.invert(d[0],d[1]),s={point:g,lineStart:i,lineEnd:j,polygonStart:function(){s.point=k,s.lineStart=l,s.lineEnd=m,n=[],o=[]},polygonEnd:function(){s.point=g,s.lineStart=i,s.lineEnd=j,n=Sg.merge(n);var a=Fc(r,o);n.length?(v||(f.polygonStart(),v=!0),yc(n,Ec,a,c,f)):a&&(v||(f.polygonStart(),v=!0),f.lineStart(),c(null,null,1,f),f.lineEnd()),v&&(f.polygonEnd(),v=!1),n=o=null},sphere:function(){f.polygonStart(),f.lineStart(),c(null,null,1,f),f.lineEnd(),f.polygonEnd()}},t=Dc(),u=b(t),v=!1;return s}}function Cc(a){return a.length>1}function Dc(){var a,b=[];return{lineStart:function(){b.push(a=[])},point:function(b,c){a.push([b,c])},lineEnd:p,buffer:function(){var c=b;return b=[],a=null,c},rejoin:function(){b.length>1&&b.push(b.pop().concat(b.shift()))}}}function Ec(a,b){return((a=a.x)[0]<0?a[1]-yh-zh:yh-a[1])-((b=b.x)[0]<0?b[1]-yh-zh:yh-b[1])}function Fc(a,b){var c=a[0],d=a[1],e=[Math.sin(c),-Math.cos(c),0],f=0,g=0;ki.reset();for(var h=0,i=b.length;i>h;++h){var j=b[h],k=j.length;if(k)for(var l=j[0],m=l[0],n=l[1]/2+wh/4,o=Math.sin(n),p=Math.cos(n),q=1;;){q===k&&(q=0),a=j[q];var r=a[0],s=a[1]/2+wh/4,t=Math.sin(s),u=Math.cos(s),v=r-m,w=v>=0?1:-1,x=w*v,y=x>wh,z=o*t;if(ki.add(Math.atan2(z*w*Math.sin(x),p*u+z*Math.cos(x))),f+=y?v+w*xh:v,y^m>=c^r>=c){var A=mc(kc(l),kc(a));pc(A);var B=mc(e,A);pc(B);var C=(y^v>=0?-1:1)*Z(B[2]);(d>C||d===C&&(A[0]||A[1]))&&(g+=y^v>=0?1:-1)}if(!q++)break;m=r,o=t,p=u,l=a}}return(-zh>f||zh>f&&0>ki)^1&g}function Gc(a){var b,c=0/0,d=0/0,e=0/0;return{lineStart:function(){a.lineStart(),b=1},point:function(f,g){var h=f>0?wh:-wh,i=eh(f-c);eh(i-wh)<zh?(a.point(c,d=(d+g)/2>0?yh:-yh),a.point(e,d),a.lineEnd(),a.lineStart(),a.point(h,d),a.point(f,d),b=0):e!==h&&i>=wh&&(eh(c-e)<zh&&(c-=e*zh),eh(f-h)<zh&&(f-=h*zh),d=Hc(c,d,f,g),a.point(e,d),a.lineEnd(),a.lineStart(),a.point(h,d),b=0),a.point(c=f,d=g),e=h},lineEnd:function(){a.lineEnd(),c=d=0/0},clean:function(){return 2-b}}}function Hc(a,b,c,d){var e,f,g=Math.sin(a-c);return eh(g)>zh?Math.atan((Math.sin(b)*(f=Math.cos(d))*Math.sin(c)-Math.sin(d)*(e=Math.cos(b))*Math.sin(a))/(e*f*g)):(b+d)/2}function Ic(a,b,c,d){var e;if(null==a)e=c*yh,d.point(-wh,e),d.point(0,e),d.point(wh,e),d.point(wh,0),d.point(wh,-e),d.point(0,-e),d.point(-wh,-e),d.point(-wh,0),d.point(-wh,e);else if(eh(a[0]-b[0])>zh){var f=a[0]<b[0]?wh:-wh;e=c*f/2,d.point(-f,e),d.point(0,e),d.point(f,e)}else d.point(b[0],b[1])}function Jc(a){function b(a,b){return Math.cos(a)*Math.cos(b)>f}function c(a){var c,f,i,j,k;return{lineStart:function(){j=i=!1,k=1},point:function(l,m){var n,o=[l,m],p=b(l,m),q=g?p?0:e(l,m):p?e(l+(0>l?wh:-wh),m):0;if(!c&&(j=i=p)&&a.lineStart(),p!==i&&(n=d(c,o),(rc(c,n)||rc(o,n))&&(o[0]+=zh,o[1]+=zh,p=b(o[0],o[1]))),p!==i)k=0,p?(a.lineStart(),n=d(o,c),a.point(n[0],n[1])):(n=d(c,o),a.point(n[0],n[1]),a.lineEnd()),c=n;else if(h&&c&&g^p){var r;q&f||!(r=d(o,c,!0))||(k=0,g?(a.lineStart(),a.point(r[0][0],r[0][1]),a.point(r[1][0],r[1][1]),a.lineEnd()):(a.point(r[1][0],r[1][1]),a.lineEnd(),a.lineStart(),a.point(r[0][0],r[0][1])))}!p||c&&rc(c,o)||a.point(o[0],o[1]),c=o,i=p,f=q},lineEnd:function(){i&&a.lineEnd(),c=null},clean:function(){return k|(j&&i)<<1}}}function d(a,b,c){var d=kc(a),e=kc(b),g=[1,0,0],h=mc(d,e),i=lc(h,h),j=h[0],k=i-j*j;if(!k)return!c&&a;var l=f*i/k,m=-f*j/k,n=mc(g,h),o=oc(g,l),p=oc(h,m);nc(o,p);var q=n,r=lc(o,q),s=lc(q,q),t=r*r-s*(lc(o,o)-1);if(!(0>t)){var u=Math.sqrt(t),v=oc(q,(-r-u)/s);if(nc(v,o),v=qc(v),!c)return v;var w,x=a[0],y=b[0],z=a[1],A=b[1];x>y&&(w=x,x=y,y=w);var B=y-x,C=eh(B-wh)<zh,D=C||zh>B;if(!C&&z>A&&(w=z,z=A,A=w),D?C?z+A>0^v[1]<(eh(v[0]-x)<zh?z:A):z<=v[1]&&v[1]<=A:B>wh^(x<=v[0]&&v[0]<=y)){var E=oc(q,(-r+u)/s);return nc(E,o),[v,qc(E)]}}}function e(b,c){var d=g?a:wh-a,e=0;return-d>b?e|=1:b>d&&(e|=2),-d>c?e|=4:c>d&&(e|=8),e}var f=Math.cos(a),g=f>0,h=eh(f)>zh,i=jd(a,6*Bh);return Bc(b,c,i,g?[0,-a]:[-wh,a-wh])}function Kc(a,b,c,d){return function(e){var f,g=e.a,h=e.b,i=g.x,j=g.y,k=h.x,l=h.y,m=0,n=1,o=k-i,p=l-j;if(f=a-i,o||!(f>0)){if(f/=o,0>o){if(m>f)return;n>f&&(n=f)}else if(o>0){if(f>n)return;f>m&&(m=f)}if(f=c-i,o||!(0>f)){if(f/=o,0>o){if(f>n)return;f>m&&(m=f)}else if(o>0){if(m>f)return;n>f&&(n=f)}if(f=b-j,p||!(f>0)){if(f/=p,0>p){if(m>f)return;n>f&&(n=f)}else if(p>0){if(f>n)return;f>m&&(m=f)}if(f=d-j,p||!(0>f)){if(f/=p,0>p){if(f>n)return;f>m&&(m=f)}else if(p>0){if(m>f)return;n>f&&(n=f)}return m>0&&(e.a={x:i+m*o,y:j+m*p}),1>n&&(e.b={x:i+n*o,y:j+n*p}),e}}}}}}function Lc(a,b,c,d){function e(d,e){return eh(d[0]-a)<zh?e>0?0:3:eh(d[0]-c)<zh?e>0?2:1:eh(d[1]-b)<zh?e>0?1:0:e>0?3:2}function f(a,b){return g(a.x,b.x)}function g(a,b){var c=e(a,1),d=e(b,1);return c!==d?c-d:0===c?b[1]-a[1]:1===c?a[0]-b[0]:2===c?a[1]-b[1]:b[0]-a[0]}return function(h){function i(a){for(var b=0,c=q.length,d=a[1],e=0;c>e;++e)for(var f,g=1,h=q[e],i=h.length,j=h[0];i>g;++g)f=h[g],j[1]<=d?f[1]>d&&X(j,f,a)>0&&++b:f[1]<=d&&X(j,f,a)<0&&--b,j=f;return 0!==b}function j(f,h,i,j){var k=0,l=0;if(null==f||(k=e(f,i))!==(l=e(h,i))||g(f,h)<0^i>0){do j.point(0===k||3===k?a:c,k>1?d:b);while((k=(k+i+4)%4)!==l)}else j.point(h[0],h[1])}function k(e,f){return e>=a&&c>=e&&f>=b&&d>=f}function l(a,b){k(a,b)&&h.point(a,b)}function m(){D.point=o,q&&q.push(r=[]),y=!0,x=!1,v=w=0/0}function n(){p&&(o(s,t),u&&x&&B.rejoin(),p.push(B.buffer())),D.point=l,x&&h.lineEnd()}function o(a,b){a=Math.max(-zi,Math.min(zi,a)),b=Math.max(-zi,Math.min(zi,b));var c=k(a,b);if(q&&r.push([a,b]),y)s=a,t=b,u=c,y=!1,c&&(h.lineStart(),h.point(a,b));else if(c&&x)h.point(a,b);else{var d={a:{x:v,y:w},b:{x:a,y:b}};C(d)?(x||(h.lineStart(),h.point(d.a.x,d.a.y)),h.point(d.b.x,d.b.y),c||h.lineEnd(),z=!1):c&&(h.lineStart(),h.point(a,b),z=!1)}v=a,w=b,x=c}var p,q,r,s,t,u,v,w,x,y,z,A=h,B=Dc(),C=Kc(a,b,c,d),D={point:l,lineStart:m,lineEnd:n,polygonStart:function(){h=B,p=[],q=[],z=!0},polygonEnd:function(){h=A,p=Sg.merge(p);var b=i([a,d]),c=z&&b,e=p.length;(c||e)&&(h.polygonStart(),c&&(h.lineStart(),j(null,null,1,h),h.lineEnd()),e&&yc(p,f,b,j,h),h.polygonEnd()),p=q=r=null}};return D}}function Mc(a,b){function c(c,d){return c=a(c,d),b(c[0],c[1])}return a.invert&&b.invert&&(c.invert=function(c,d){return c=b.invert(c,d),c&&a.invert(c[0],c[1])}),c}function Nc(a){var b=0,c=wh/3,d=bd(a),e=d(b,c);return e.parallels=function(a){return arguments.length?d(b=a[0]*wh/180,c=a[1]*wh/180):[b/wh*180,c/wh*180]},e}function Oc(a,b){function c(a,b){var c=Math.sqrt(f-2*e*Math.sin(b))/e;return[c*Math.sin(a*=e),g-c*Math.cos(a)]}var d=Math.sin(a),e=(d+Math.sin(b))/2,f=1+d*(2*e-d),g=Math.sqrt(f)/e;return c.invert=function(a,b){var c=g-b;return[Math.atan2(a,c)/e,Z((f-(a*a+c*c)*e*e)/(2*e))]},c}function Pc(){function a(a,b){Bi+=e*a-d*b,d=a,e=b}var b,c,d,e;Gi.point=function(f,g){Gi.point=a,b=d=f,c=e=g},Gi.lineEnd=function(){a(b,c)}}function Qc(a,b){Ci>a&&(Ci=a),a>Ei&&(Ei=a),Di>b&&(Di=b),b>Fi&&(Fi=b)}function Rc(){function a(a,b){g.push("M",a,",",b,f)}function b(a,b){g.push("M",a,",",b),h.point=c}function c(a,b){g.push("L",a,",",b)}function d(){h.point=a}function e(){g.push("Z")}var f=Sc(4.5),g=[],h={point:a,lineStart:function(){h.point=b},lineEnd:d,polygonStart:function(){h.lineEnd=e},polygonEnd:function(){h.lineEnd=d,h.point=a},pointRadius:function(a){return f=Sc(a),h},result:function(){if(g.length){var a=g.join("");return g=[],a}}};return h}function Sc(a){return"m0,"+a+"a"+a+","+a+" 0 1,1 0,"+-2*a+"a"+a+","+a+" 0 1,1 0,"+2*a+"z"}function Tc(a,b){oi+=a,pi+=b,++qi}function Uc(){function a(a,d){var e=a-b,f=d-c,g=Math.sqrt(e*e+f*f);ri+=g*(b+a)/2,si+=g*(c+d)/2,ti+=g,Tc(b=a,c=d)}var b,c;Ii.point=function(d,e){Ii.point=a,Tc(b=d,c=e)}}function Vc(){Ii.point=Tc}function Wc(){function a(a,b){var c=a-d,f=b-e,g=Math.sqrt(c*c+f*f);ri+=g*(d+a)/2,si+=g*(e+b)/2,ti+=g,g=e*a-d*b,ui+=g*(d+a),vi+=g*(e+b),wi+=3*g,Tc(d=a,e=b)}var b,c,d,e;Ii.point=function(f,g){Ii.point=a,Tc(b=d=f,c=e=g)},Ii.lineEnd=function(){a(b,c)}}function Xc(a){function b(b,c){a.moveTo(b,c),a.arc(b,c,g,0,xh)}function c(b,c){a.moveTo(b,c),h.point=d}function d(b,c){a.lineTo(b,c)}function e(){h.point=b}function f(){a.closePath()}var g=4.5,h={point:b,lineStart:function(){h.point=c},lineEnd:e,polygonStart:function(){h.lineEnd=f},polygonEnd:function(){h.lineEnd=e,h.point=b},pointRadius:function(a){return g=a,h},result:p};return h}function Yc(a){function b(a){return(h?d:c)(a)}function c(b){return _c(b,function(c,d){c=a(c,d),b.point(c[0],c[1])})}function d(b){function c(c,d){c=a(c,d),b.point(c[0],c[1])}function d(){t=0/0,y.point=f,b.lineStart()}function f(c,d){var f=kc([c,d]),g=a(c,d);e(t,u,s,v,w,x,t=g[0],u=g[1],s=c,v=f[0],w=f[1],x=f[2],h,b),b.point(t,u)}function g(){y.point=c,b.lineEnd()}function i(){d(),y.point=j,y.lineEnd=k}function j(a,b){f(l=a,m=b),n=t,o=u,p=v,q=w,r=x,y.point=f}function k(){e(t,u,s,v,w,x,n,o,l,p,q,r,h,b),y.lineEnd=g,g()}var l,m,n,o,p,q,r,s,t,u,v,w,x,y={point:c,lineStart:d,lineEnd:g,polygonStart:function(){b.polygonStart(),y.lineStart=i},polygonEnd:function(){b.polygonEnd(),y.lineStart=d}};return y}function e(b,c,d,h,i,j,k,l,m,n,o,p,q,r){var s=k-b,t=l-c,u=s*s+t*t;if(u>4*f&&q--){var v=h+n,w=i+o,x=j+p,y=Math.sqrt(v*v+w*w+x*x),z=Math.asin(x/=y),A=eh(eh(x)-1)<zh||eh(d-m)<zh?(d+m)/2:Math.atan2(w,v),B=a(A,z),C=B[0],D=B[1],E=C-b,F=D-c,G=t*E-s*F;(G*G/u>f||eh((s*E+t*F)/u-.5)>.3||g>h*n+i*o+j*p)&&(e(b,c,d,h,i,j,C,D,A,v/=y,w/=y,x,q,r),r.point(C,D),e(C,D,A,v,w,x,k,l,m,n,o,p,q,r))}}var f=.5,g=Math.cos(30*Bh),h=16;return b.precision=function(a){return arguments.length?(h=(f=a*a)>0&&16,b):Math.sqrt(f)},b}function Zc(a){var b=Yc(function(b,c){return a([b*Ch,c*Ch])});return function(a){return cd(b(a))}}function $c(a){this.stream=a}function _c(a,b){return{point:b,sphere:function(){a.sphere()},lineStart:function(){a.lineStart()},lineEnd:function(){a.lineEnd()},polygonStart:function(){a.polygonStart()},polygonEnd:function(){a.polygonEnd()}}}function ad(a){return bd(function(){return a})()}function bd(a){function b(a){return a=h(a[0]*Bh,a[1]*Bh),[a[0]*m+i,j-a[1]*m]}function c(a){return a=h.invert((a[0]-i)/m,(j-a[1])/m),a&&[a[0]*Ch,a[1]*Ch]}function d(){h=Mc(g=fd(r,s,t),f);var a=f(p,q);return i=n-a[0]*m,j=o+a[1]*m,e()}function e(){return k&&(k.valid=!1,k=null),b}var f,g,h,i,j,k,l=Yc(function(a,b){return a=f(a,b),[a[0]*m+i,j-a[1]*m]}),m=150,n=480,o=250,p=0,q=0,r=0,s=0,t=0,u=yi,v=xb,w=null,x=null;return b.stream=function(a){return k&&(k.valid=!1),k=cd(u(g,l(v(a)))),k.valid=!0,k},b.clipAngle=function(a){return arguments.length?(u=null==a?(w=a,yi):Jc((w=+a)*Bh),e()):w},b.clipExtent=function(a){return arguments.length?(x=a,v=a?Lc(a[0][0],a[0][1],a[1][0],a[1][1]):xb,e()):x},b.scale=function(a){return arguments.length?(m=+a,d()):m},b.translate=function(a){return arguments.length?(n=+a[0],o=+a[1],d()):[n,o]},b.center=function(a){return arguments.length?(p=a[0]%360*Bh,q=a[1]%360*Bh,d()):[p*Ch,q*Ch]},b.rotate=function(a){return arguments.length?(r=a[0]%360*Bh,s=a[1]%360*Bh,t=a.length>2?a[2]%360*Bh:0,d()):[r*Ch,s*Ch,t*Ch]},Sg.rebind(b,l,"precision"),function(){return f=a.apply(this,arguments),b.invert=f.invert&&c,d()}}function cd(a){return _c(a,function(b,c){a.point(b*Bh,c*Bh)})}function dd(a,b){return[a,b]}function ed(a,b){return[a>wh?a-xh:-wh>a?a+xh:a,b]}function fd(a,b,c){return a?b||c?Mc(hd(a),id(b,c)):hd(a):b||c?id(b,c):ed}function gd(a){return function(b,c){return b+=a,[b>wh?b-xh:-wh>b?b+xh:b,c]}}function hd(a){var b=gd(a);return b.invert=gd(-a),b}function id(a,b){function c(a,b){var c=Math.cos(b),h=Math.cos(a)*c,i=Math.sin(a)*c,j=Math.sin(b),k=j*d+h*e;return[Math.atan2(i*f-k*g,h*d-j*e),Z(k*f+i*g)]}var d=Math.cos(a),e=Math.sin(a),f=Math.cos(b),g=Math.sin(b);return c.invert=function(a,b){var c=Math.cos(b),h=Math.cos(a)*c,i=Math.sin(a)*c,j=Math.sin(b),k=j*f-i*g;return[Math.atan2(i*f+j*g,h*d+k*e),Z(k*d-h*e)]},c}function jd(a,b){var c=Math.cos(a),d=Math.sin(a);return function(e,f,g,h){var i=g*b;null!=e?(e=kd(c,e),f=kd(c,f),(g>0?f>e:e>f)&&(e+=g*xh)):(e=a+g*xh,f=a-.5*i);for(var j,k=e;g>0?k>f:f>k;k-=i)h.point((j=qc([c,-d*Math.cos(k),-d*Math.sin(k)]))[0],j[1])}}function kd(a,b){var c=kc(b);c[0]-=a,pc(c);var d=Y(-c[1]);return((-c[2]<0?-d:d)+2*Math.PI-zh)%(2*Math.PI)}function ld(a,b,c){var d=Sg.range(a,b-zh,c).concat(b);return function(a){return d.map(function(b){return[a,b]})}}function md(a,b,c){var d=Sg.range(a,b-zh,c).concat(b);return function(a){return d.map(function(b){return[b,a]})}}function nd(a){return a.source}function od(a){return a.target}function pd(a,b,c,d){var e=Math.cos(b),f=Math.sin(b),g=Math.cos(d),h=Math.sin(d),i=e*Math.cos(a),j=e*Math.sin(a),k=g*Math.cos(c),l=g*Math.sin(c),m=2*Math.asin(Math.sqrt(bb(d-b)+e*g*bb(c-a))),n=1/Math.sin(m),o=m?function(a){var b=Math.sin(a*=m)*n,c=Math.sin(m-a)*n,d=c*i+b*k,e=c*j+b*l,g=c*f+b*h;return[Math.atan2(e,d)*Ch,Math.atan2(g,Math.sqrt(d*d+e*e))*Ch]}:function(){return[a*Ch,b*Ch]};return o.distance=m,o}function qd(){function a(a,e){var f=Math.sin(e*=Bh),g=Math.cos(e),h=eh((a*=Bh)-b),i=Math.cos(h);Ji+=Math.atan2(Math.sqrt((h=g*Math.sin(h))*h+(h=d*f-c*g*i)*h),c*f+d*g*i),b=a,c=f,d=g}var b,c,d;Ki.point=function(e,f){b=e*Bh,c=Math.sin(f*=Bh),d=Math.cos(f),Ki.point=a},Ki.lineEnd=function(){Ki.point=Ki.lineEnd=p}}function rd(a,b){function c(b,c){var d=Math.cos(b),e=Math.cos(c),f=a(d*e);return[f*e*Math.sin(b),f*Math.sin(c)]}return c.invert=function(a,c){var d=Math.sqrt(a*a+c*c),e=b(d),f=Math.sin(e),g=Math.cos(e);return[Math.atan2(a*f,d*g),Math.asin(d&&c*f/d)]},c}function sd(a,b){function c(a,b){g>0?-yh+zh>b&&(b=-yh+zh):b>yh-zh&&(b=yh-zh);var c=g/Math.pow(e(b),f);return[c*Math.sin(f*a),g-c*Math.cos(f*a)]}var d=Math.cos(a),e=function(a){return Math.tan(wh/4+a/2)},f=a===b?Math.sin(a):Math.log(d/Math.cos(b))/Math.log(e(b)/e(a)),g=d*Math.pow(e(a),f)/f;return f?(c.invert=function(a,b){var c=g-b,d=W(f)*Math.sqrt(a*a+c*c);return[Math.atan2(a,c)/f,2*Math.atan(Math.pow(g/d,1/f))-yh]},c):ud}function td(a,b){function c(a,b){var c=f-b;return[c*Math.sin(e*a),f-c*Math.cos(e*a)]}var d=Math.cos(a),e=a===b?Math.sin(a):(d-Math.cos(b))/(b-a),f=d/e+a;return eh(e)<zh?dd:(c.invert=function(a,b){var c=f-b;return[Math.atan2(a,c)/e,f-W(e)*Math.sqrt(a*a+c*c)]},c)}function ud(a,b){return[a,Math.log(Math.tan(wh/4+b/2))]}function vd(a){var b,c=ad(a),d=c.scale,e=c.translate,f=c.clipExtent;return c.scale=function(){var a=d.apply(c,arguments);return a===c?b?c.clipExtent(null):c:a},c.translate=function(){var a=e.apply(c,arguments);return a===c?b?c.clipExtent(null):c:a},c.clipExtent=function(a){var g=f.apply(c,arguments);if(g===c){if(b=null==a){var h=wh*d(),i=e();f([[i[0]-h,i[1]-h],[i[0]+h,i[1]+h]])}}else b&&(g=null);return g},c.clipExtent(null)}function wd(a,b){return[Math.log(Math.tan(wh/4+b/2)),-a]}function xd(a){return a[0]}function yd(a){return a[1]}function zd(a){for(var b=a.length,c=[0,1],d=2,e=2;b>e;e++){for(;d>1&&X(a[c[d-2]],a[c[d-1]],a[e])<=0;)--d;c[d++]=e}return c.slice(0,d)}function Ad(a,b){return a[0]-b[0]||a[1]-b[1]}function Bd(a,b,c){return(c[0]-b[0])*(a[1]-b[1])<(c[1]-b[1])*(a[0]-b[0])}function Cd(a,b,c,d){var e=a[0],f=c[0],g=b[0]-e,h=d[0]-f,i=a[1],j=c[1],k=b[1]-i,l=d[1]-j,m=(h*(i-j)-l*(e-f))/(l*g-h*k);return[e+m*g,i+m*k]}function Dd(a){var b=a[0],c=a[a.length-1];return!(b[0]-c[0]||b[1]-c[1])}function Ed(){Zd(this),this.edge=this.site=this.circle=null}function Fd(a){var b=Wi.pop()||new Ed;return b.site=a,b}function Gd(a){Qd(a),Ti.remove(a),Wi.push(a),Zd(a)}function Hd(a){var b=a.circle,c=b.x,d=b.cy,e={x:c,y:d},f=a.P,g=a.N,h=[a];Gd(a);for(var i=f;i.circle&&eh(c-i.circle.x)<zh&&eh(d-i.circle.cy)<zh;)f=i.P,h.unshift(i),Gd(i),i=f;h.unshift(i),Qd(i);for(var j=g;j.circle&&eh(c-j.circle.x)<zh&&eh(d-j.circle.cy)<zh;)g=j.N,h.push(j),Gd(j),j=g;h.push(j),Qd(j);var k,l=h.length;for(k=1;l>k;++k)j=h[k],i=h[k-1],Wd(j.edge,i.site,j.site,e);i=h[0],j=h[l-1],j.edge=Ud(i.site,j.site,null,e),Pd(i),Pd(j)}function Id(a){for(var b,c,d,e,f=a.x,g=a.y,h=Ti._;h;)if(d=Jd(h,g)-f,d>zh)h=h.L;else{if(e=f-Kd(h,g),!(e>zh)){d>-zh?(b=h.P,c=h):e>-zh?(b=h,c=h.N):b=c=h;break}if(!h.R){b=h;break}h=h.R}var i=Fd(a);if(Ti.insert(b,i),b||c){if(b===c)return Qd(b),c=Fd(b.site),Ti.insert(i,c),i.edge=c.edge=Ud(b.site,i.site),Pd(b),void Pd(c);if(!c)return void(i.edge=Ud(b.site,i.site));Qd(b),Qd(c);var j=b.site,k=j.x,l=j.y,m=a.x-k,n=a.y-l,o=c.site,p=o.x-k,q=o.y-l,r=2*(m*q-n*p),s=m*m+n*n,t=p*p+q*q,u={x:(q*s-n*t)/r+k,y:(m*t-p*s)/r+l};Wd(c.edge,j,o,u),i.edge=Ud(j,a,null,u),c.edge=Ud(a,o,null,u),Pd(b),Pd(c)}}function Jd(a,b){var c=a.site,d=c.x,e=c.y,f=e-b;if(!f)return d;var g=a.P;if(!g)return-1/0;c=g.site;var h=c.x,i=c.y,j=i-b;if(!j)return h;var k=h-d,l=1/f-1/j,m=k/j;return l?(-m+Math.sqrt(m*m-2*l*(k*k/(-2*j)-i+j/2+e-f/2)))/l+d:(d+h)/2}function Kd(a,b){var c=a.N;if(c)return Jd(c,b);var d=a.site;return d.y===b?d.x:1/0}function Ld(a){this.site=a,this.edges=[]}function Md(a){for(var b,c,d,e,f,g,h,i,j,k,l=a[0][0],m=a[1][0],n=a[0][1],o=a[1][1],p=Si,q=p.length;q--;)if(f=p[q],f&&f.prepare())for(h=f.edges,i=h.length,g=0;i>g;)k=h[g].end(),d=k.x,e=k.y,j=h[++g%i].start(),b=j.x,c=j.y,(eh(d-b)>zh||eh(e-c)>zh)&&(h.splice(g,0,new Xd(Vd(f.site,k,eh(d-l)<zh&&o-e>zh?{x:l,y:eh(b-l)<zh?c:o}:eh(e-o)<zh&&m-d>zh?{x:eh(c-o)<zh?b:m,y:o}:eh(d-m)<zh&&e-n>zh?{x:m,y:eh(b-m)<zh?c:n}:eh(e-n)<zh&&d-l>zh?{x:eh(c-n)<zh?b:l,y:n}:null),f.site,null)),++i)}function Nd(a,b){return b.angle-a.angle}function Od(){Zd(this),this.x=this.y=this.arc=this.site=this.cy=null}function Pd(a){var b=a.P,c=a.N;if(b&&c){var d=b.site,e=a.site,f=c.site;if(d!==f){var g=e.x,h=e.y,i=d.x-g,j=d.y-h,k=f.x-g,l=f.y-h,m=2*(i*l-j*k);if(!(m>=-Ah)){var n=i*i+j*j,o=k*k+l*l,p=(l*n-j*o)/m,q=(i*o-k*n)/m,l=q+h,r=Xi.pop()||new Od;r.arc=a,r.site=e,r.x=p+g,r.y=l+Math.sqrt(p*p+q*q),r.cy=l,a.circle=r;for(var s=null,t=Vi._;t;)if(r.y<t.y||r.y===t.y&&r.x<=t.x){if(!t.L){s=t.P;break}t=t.L}else{if(!t.R){s=t;break}t=t.R}Vi.insert(s,r),s||(Ui=r)}}}}function Qd(a){var b=a.circle;b&&(b.P||(Ui=b.N),Vi.remove(b),Xi.push(b),Zd(b),a.circle=null)}function Rd(a){for(var b,c=Ri,d=Kc(a[0][0],a[0][1],a[1][0],a[1][1]),e=c.length;e--;)b=c[e],(!Sd(b,a)||!d(b)||eh(b.a.x-b.b.x)<zh&&eh(b.a.y-b.b.y)<zh)&&(b.a=b.b=null,c.splice(e,1))}function Sd(a,b){var c=a.b;if(c)return!0;var d,e,f=a.a,g=b[0][0],h=b[1][0],i=b[0][1],j=b[1][1],k=a.l,l=a.r,m=k.x,n=k.y,o=l.x,p=l.y,q=(m+o)/2,r=(n+p)/2;if(p===n){if(g>q||q>=h)return;if(m>o){if(f){if(f.y>=j)return}else f={x:q,y:i};c={x:q,y:j}}else{if(f){if(f.y<i)return}else f={x:q,y:j};c={x:q,y:i}}}else if(d=(m-o)/(p-n),e=r-d*q,-1>d||d>1)if(m>o){if(f){if(f.y>=j)return}else f={x:(i-e)/d,y:i};c={x:(j-e)/d,y:j}}else{if(f){if(f.y<i)return}else f={x:(j-e)/d,y:j};c={x:(i-e)/d,y:i}}else if(p>n){if(f){if(f.x>=h)return}else f={x:g,y:d*g+e};c={x:h,y:d*h+e}}else{if(f){if(f.x<g)return}else f={x:h,y:d*h+e};c={x:g,y:d*g+e}}return a.a=f,a.b=c,!0}function Td(a,b){this.l=a,this.r=b,this.a=this.b=null}function Ud(a,b,c,d){var e=new Td(a,b);return Ri.push(e),c&&Wd(e,a,b,c),d&&Wd(e,b,a,d),Si[a.i].edges.push(new Xd(e,a,b)),Si[b.i].edges.push(new Xd(e,b,a)),e}function Vd(a,b,c){var d=new Td(a,null);return d.a=b,d.b=c,Ri.push(d),d}function Wd(a,b,c,d){a.a||a.b?a.l===c?a.b=d:a.a=d:(a.a=d,a.l=b,a.r=c)}function Xd(a,b,c){var d=a.a,e=a.b;this.edge=a,this.site=b,this.angle=c?Math.atan2(c.y-b.y,c.x-b.x):a.l===b?Math.atan2(e.x-d.x,d.y-e.y):Math.atan2(d.x-e.x,e.y-d.y)}function Yd(){this._=null}function Zd(a){a.U=a.C=a.L=a.R=a.P=a.N=null}function $d(a,b){var c=b,d=b.R,e=c.U;e?e.L===c?e.L=d:e.R=d:a._=d,d.U=e,c.U=d,c.R=d.L,c.R&&(c.R.U=c),d.L=c}function _d(a,b){var c=b,d=b.L,e=c.U;e?e.L===c?e.L=d:e.R=d:a._=d,d.U=e,c.U=d,c.L=d.R,c.L&&(c.L.U=c),d.R=c}function ae(a){for(;a.L;)a=a.L;return a}function be(a,b){var c,d,e,f=a.sort(ce).pop();for(Ri=[],Si=new Array(a.length),Ti=new Yd,Vi=new Yd;;)if(e=Ui,f&&(!e||f.y<e.y||f.y===e.y&&f.x<e.x))(f.x!==c||f.y!==d)&&(Si[f.i]=new Ld(f),Id(f),c=f.x,d=f.y),f=a.pop();else{if(!e)break;Hd(e.arc)}b&&(Rd(b),Md(b));var g={cells:Si,edges:Ri};return Ti=Vi=Ri=Si=null,g}function ce(a,b){return b.y-a.y||b.x-a.x}function de(a,b,c){return(a.x-c.x)*(b.y-a.y)-(a.x-b.x)*(c.y-a.y)}function ee(a){return a.x}function fe(a){return a.y}function ge(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function he(a,b,c,d,e,f){if(!a(b,c,d,e,f)){var g=.5*(c+e),h=.5*(d+f),i=b.nodes;i[0]&&he(a,i[0],c,d,g,h),i[1]&&he(a,i[1],g,d,e,h),i[2]&&he(a,i[2],c,h,g,f),i[3]&&he(a,i[3],g,h,e,f)}}function ie(a,b){a=Sg.rgb(a),b=Sg.rgb(b);var c=a.r,d=a.g,e=a.b,f=b.r-c,g=b.g-d,h=b.b-e;return function(a){return"#"+qb(Math.round(c+f*a))+qb(Math.round(d+g*a))+qb(Math.round(e+h*a))}}function je(a,b){var c,d={},e={};for(c in a)c in b?d[c]=me(a[c],b[c]):e[c]=a[c];for(c in b)c in a||(e[c]=b[c]);return function(a){for(c in d)e[c]=d[c](a);return e}}function ke(a,b){return b-=a=+a,function(c){return a+b*c}}function le(a,b){var c,d,e,f=Zi.lastIndex=$i.lastIndex=0,g=-1,h=[],i=[];for(a+="",b+="";(c=Zi.exec(a))&&(d=$i.exec(b));)(e=d.index)>f&&(e=b.substring(f,e),h[g]?h[g]+=e:h[++g]=e),(c=c[0])===(d=d[0])?h[g]?h[g]+=d:h[++g]=d:(h[++g]=null,i.push({i:g,x:ke(c,d)})),f=$i.lastIndex;return f<b.length&&(e=b.substring(f),h[g]?h[g]+=e:h[++g]=e),h.length<2?i[0]?(b=i[0].x,function(a){return b(a)+""}):function(){return b}:(b=i.length,function(a){for(var c,d=0;b>d;++d)h[(c=i[d]).i]=c.x(a);return h.join("")})}function me(a,b){for(var c,d=Sg.interpolators.length;--d>=0&&!(c=Sg.interpolators[d](a,b)););return c}function ne(a,b){var c,d=[],e=[],f=a.length,g=b.length,h=Math.min(a.length,b.length);for(c=0;h>c;++c)d.push(me(a[c],b[c]));for(;f>c;++c)e[c]=a[c];for(;g>c;++c)e[c]=b[c];return function(a){for(c=0;h>c;++c)e[c]=d[c](a);return e}}function oe(a){return function(b){return 0>=b?0:b>=1?1:a(b)}}function pe(a){return function(b){return 1-a(1-b)}}function qe(a){return function(b){return.5*(.5>b?a(2*b):2-a(2-2*b))}}function re(a){return a*a}function se(a){return a*a*a}function te(a){if(0>=a)return 0;if(a>=1)return 1;var b=a*a,c=b*a;return 4*(.5>a?c:3*(a-b)+c-.75)}function ue(a){return function(b){return Math.pow(b,a)}}function ve(a){return 1-Math.cos(a*yh)}function we(a){return Math.pow(2,10*(a-1))}function xe(a){return 1-Math.sqrt(1-a*a)}function ye(a,b){var c;return arguments.length<2&&(b=.45),arguments.length?c=b/xh*Math.asin(1/a):(a=1,c=b/4),function(d){return 1+a*Math.pow(2,-10*d)*Math.sin((d-c)*xh/b)}}function ze(a){return a||(a=1.70158),function(b){return b*b*((a+1)*b-a)}}function Ae(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}function Be(a,b){a=Sg.hcl(a),b=Sg.hcl(b);var c=a.h,d=a.c,e=a.l,f=b.h-c,g=b.c-d,h=b.l-e;return isNaN(g)&&(g=0,d=isNaN(d)?b.c:d),isNaN(f)?(f=0,c=isNaN(c)?b.h:c):f>180?f-=360:-180>f&&(f+=360),function(a){return gb(c+f*a,d+g*a,e+h*a)+""}}function Ce(a,b){a=Sg.hsl(a),b=Sg.hsl(b);var c=a.h,d=a.s,e=a.l,f=b.h-c,g=b.s-d,h=b.l-e;return isNaN(g)&&(g=0,d=isNaN(d)?b.s:d),isNaN(f)?(f=0,c=isNaN(c)?b.h:c):f>180?f-=360:-180>f&&(f+=360),function(a){return eb(c+f*a,d+g*a,e+h*a)+""}}function De(a,b){a=Sg.lab(a),b=Sg.lab(b);var c=a.l,d=a.a,e=a.b,f=b.l-c,g=b.a-d,h=b.b-e;return function(a){return ib(c+f*a,d+g*a,e+h*a)+""}}function Ee(a,b){return b-=a,function(c){return Math.round(a+b*c)}}function Fe(a){var b=[a.a,a.b],c=[a.c,a.d],d=He(b),e=Ge(b,c),f=He(Ie(c,b,-e))||0;b[0]*c[1]<c[0]*b[1]&&(b[0]*=-1,b[1]*=-1,d*=-1,e*=-1),this.rotate=(d?Math.atan2(b[1],b[0]):Math.atan2(-c[0],c[1]))*Ch,this.translate=[a.e,a.f],this.scale=[d,f],this.skew=f?Math.atan2(e,f)*Ch:0}function Ge(a,b){return a[0]*b[0]+a[1]*b[1]}function He(a){var b=Math.sqrt(Ge(a,a));return b&&(a[0]/=b,a[1]/=b),b}function Ie(a,b,c){return a[0]+=c*b[0],a[1]+=c*b[1],a}function Je(a,b){var c,d=[],e=[],f=Sg.transform(a),g=Sg.transform(b),h=f.translate,i=g.translate,j=f.rotate,k=g.rotate,l=f.skew,m=g.skew,n=f.scale,o=g.scale;return h[0]!=i[0]||h[1]!=i[1]?(d.push("translate(",null,",",null,")"),e.push({i:1,x:ke(h[0],i[0])},{i:3,x:ke(h[1],i[1])})):d.push(i[0]||i[1]?"translate("+i+")":""),j!=k?(j-k>180?k+=360:k-j>180&&(j+=360),e.push({i:d.push(d.pop()+"rotate(",null,")")-2,x:ke(j,k)})):k&&d.push(d.pop()+"rotate("+k+")"),l!=m?e.push({i:d.push(d.pop()+"skewX(",null,")")-2,x:ke(l,m)}):m&&d.push(d.pop()+"skewX("+m+")"),n[0]!=o[0]||n[1]!=o[1]?(c=d.push(d.pop()+"scale(",null,",",null,")"),e.push({i:c-4,x:ke(n[0],o[0])},{i:c-2,x:ke(n[1],o[1])})):(1!=o[0]||1!=o[1])&&d.push(d.pop()+"scale("+o+")"),c=e.length,function(a){for(var b,f=-1;++f<c;)d[(b=e[f]).i]=b.x(a);return d.join("")}}function Ke(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return(c-a)*b}}function Le(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return Math.max(0,Math.min(1,(c-a)*b))}}function Me(a){for(var b=a.source,c=a.target,d=Oe(b,c),e=[b];b!==d;)b=b.parent,e.push(b);for(var f=e.length;c!==d;)e.splice(f,0,c),c=c.parent;return e}function Ne(a){for(var b=[],c=a.parent;null!=c;)b.push(a),a=c,c=c.parent;
return b.push(a),b}function Oe(a,b){if(a===b)return a;for(var c=Ne(a),d=Ne(b),e=c.pop(),f=d.pop(),g=null;e===f;)g=e,e=c.pop(),f=d.pop();return g}function Pe(a){a.fixed|=2}function Qe(a){a.fixed&=-7}function Re(a){a.fixed|=4,a.px=a.x,a.py=a.y}function Se(a){a.fixed&=-5}function Te(a,b,c){var d=0,e=0;if(a.charge=0,!a.leaf)for(var f,g=a.nodes,h=g.length,i=-1;++i<h;)f=g[i],null!=f&&(Te(f,b,c),a.charge+=f.charge,d+=f.charge*f.cx,e+=f.charge*f.cy);if(a.point){a.leaf||(a.point.x+=Math.random()-.5,a.point.y+=Math.random()-.5);var j=b*c[a.point.index];a.charge+=a.pointCharge=j,d+=j*a.point.x,e+=j*a.point.y}a.cx=d/a.charge,a.cy=e/a.charge}function Ue(a,b){return Sg.rebind(a,b,"sort","children","value"),a.nodes=a,a.links=$e,a}function Ve(a,b){for(var c=[a];null!=(a=c.pop());)if(b(a),(e=a.children)&&(d=e.length))for(var d,e;--d>=0;)c.push(e[d])}function We(a,b){for(var c=[a],d=[];null!=(a=c.pop());)if(d.push(a),(f=a.children)&&(e=f.length))for(var e,f,g=-1;++g<e;)c.push(f[g]);for(;null!=(a=d.pop());)b(a)}function Xe(a){return a.children}function Ye(a){return a.value}function Ze(a,b){return b.value-a.value}function $e(a){return Sg.merge(a.map(function(a){return(a.children||[]).map(function(b){return{source:a,target:b}})}))}function _e(a){return a.x}function af(a){return a.y}function bf(a,b,c){a.y0=b,a.y=c}function cf(a){return Sg.range(a.length)}function df(a){for(var b=-1,c=a[0].length,d=[];++b<c;)d[b]=0;return d}function ef(a){for(var b,c=1,d=0,e=a[0][1],f=a.length;f>c;++c)(b=a[c][1])>e&&(d=c,e=b);return d}function ff(a){return a.reduce(gf,0)}function gf(a,b){return a+b[1]}function hf(a,b){return jf(a,Math.ceil(Math.log(b.length)/Math.LN2+1))}function jf(a,b){for(var c=-1,d=+a[0],e=(a[1]-d)/b,f=[];++c<=b;)f[c]=e*c+d;return f}function kf(a){return[Sg.min(a),Sg.max(a)]}function lf(a,b){return a.value-b.value}function mf(a,b){var c=a._pack_next;a._pack_next=b,b._pack_prev=a,b._pack_next=c,c._pack_prev=b}function nf(a,b){a._pack_next=b,b._pack_prev=a}function of(a,b){var c=b.x-a.x,d=b.y-a.y,e=a.r+b.r;return.999*e*e>c*c+d*d}function pf(a){function b(a){k=Math.min(a.x-a.r,k),l=Math.max(a.x+a.r,l),m=Math.min(a.y-a.r,m),n=Math.max(a.y+a.r,n)}if((c=a.children)&&(j=c.length)){var c,d,e,f,g,h,i,j,k=1/0,l=-1/0,m=1/0,n=-1/0;if(c.forEach(qf),d=c[0],d.x=-d.r,d.y=0,b(d),j>1&&(e=c[1],e.x=e.r,e.y=0,b(e),j>2))for(f=c[2],tf(d,e,f),b(f),mf(d,f),d._pack_prev=f,mf(f,e),e=d._pack_next,g=3;j>g;g++){tf(d,e,f=c[g]);var o=0,p=1,q=1;for(h=e._pack_next;h!==e;h=h._pack_next,p++)if(of(h,f)){o=1;break}if(1==o)for(i=d._pack_prev;i!==h._pack_prev&&!of(i,f);i=i._pack_prev,q++);o?(q>p||p==q&&e.r<d.r?nf(d,e=h):nf(d=i,e),g--):(mf(d,f),e=f,b(f))}var r=(k+l)/2,s=(m+n)/2,t=0;for(g=0;j>g;g++)f=c[g],f.x-=r,f.y-=s,t=Math.max(t,f.r+Math.sqrt(f.x*f.x+f.y*f.y));a.r=t,c.forEach(rf)}}function qf(a){a._pack_next=a._pack_prev=a}function rf(a){delete a._pack_next,delete a._pack_prev}function sf(a,b,c,d){var e=a.children;if(a.x=b+=d*a.x,a.y=c+=d*a.y,a.r*=d,e)for(var f=-1,g=e.length;++f<g;)sf(e[f],b,c,d)}function tf(a,b,c){var d=a.r+c.r,e=b.x-a.x,f=b.y-a.y;if(d&&(e||f)){var g=b.r+c.r,h=e*e+f*f;g*=g,d*=d;var i=.5+(d-g)/(2*h),j=Math.sqrt(Math.max(0,2*g*(d+h)-(d-=h)*d-g*g))/(2*h);c.x=a.x+i*e+j*f,c.y=a.y+i*f-j*e}else c.x=a.x+d,c.y=a.y}function uf(a,b){return a.parent==b.parent?1:2}function vf(a){var b=a.children;return b.length?b[0]:a.t}function wf(a){var b,c=a.children;return(b=c.length)?c[b-1]:a.t}function xf(a,b,c){var d=c/(b.i-a.i);b.c-=d,b.s+=c,a.c+=d,b.z+=c,b.m+=c}function yf(a){for(var b,c=0,d=0,e=a.children,f=e.length;--f>=0;)b=e[f],b.z+=c,b.m+=c,c+=b.s+(d+=b.c)}function zf(a,b,c){return a.a.parent===b.parent?a.a:c}function Af(a){return 1+Sg.max(a,function(a){return a.y})}function Bf(a){return a.reduce(function(a,b){return a+b.x},0)/a.length}function Cf(a){var b=a.children;return b&&b.length?Cf(b[0]):a}function Df(a){var b,c=a.children;return c&&(b=c.length)?Df(c[b-1]):a}function Ef(a){return{x:a.x,y:a.y,dx:a.dx,dy:a.dy}}function Ff(a,b){var c=a.x+b[3],d=a.y+b[0],e=a.dx-b[1]-b[3],f=a.dy-b[0]-b[2];return 0>e&&(c+=e/2,e=0),0>f&&(d+=f/2,f=0),{x:c,y:d,dx:e,dy:f}}function Gf(a){var b=a[0],c=a[a.length-1];return c>b?[b,c]:[c,b]}function Hf(a){return a.rangeExtent?a.rangeExtent():Gf(a.range())}function If(a,b,c,d){var e=c(a[0],a[1]),f=d(b[0],b[1]);return function(a){return f(e(a))}}function Jf(a,b){var c,d=0,e=a.length-1,f=a[d],g=a[e];return f>g&&(c=d,d=e,e=c,c=f,f=g,g=c),a[d]=b.floor(f),a[e]=b.ceil(g),a}function Kf(a){return a?{floor:function(b){return Math.floor(b/a)*a},ceil:function(b){return Math.ceil(b/a)*a}}:jj}function Lf(a,b,c,d){var e=[],f=[],g=0,h=Math.min(a.length,b.length)-1;for(a[h]<a[0]&&(a=a.slice().reverse(),b=b.slice().reverse());++g<=h;)e.push(c(a[g-1],a[g])),f.push(d(b[g-1],b[g]));return function(b){var c=Sg.bisect(a,b,1,h)-1;return f[c](e[c](b))}}function Mf(a,b,c,d){function e(){var e=Math.min(a.length,b.length)>2?Lf:If,i=d?Le:Ke;return g=e(a,b,i,c),h=e(b,a,i,me),f}function f(a){return g(a)}var g,h;return f.invert=function(a){return h(a)},f.domain=function(b){return arguments.length?(a=b.map(Number),e()):a},f.range=function(a){return arguments.length?(b=a,e()):b},f.rangeRound=function(a){return f.range(a).interpolate(Ee)},f.clamp=function(a){return arguments.length?(d=a,e()):d},f.interpolate=function(a){return arguments.length?(c=a,e()):c},f.ticks=function(b){return Qf(a,b)},f.tickFormat=function(b,c){return Rf(a,b,c)},f.nice=function(b){return Of(a,b),e()},f.copy=function(){return Mf(a,b,c,d)},e()}function Nf(a,b){return Sg.rebind(a,b,"range","rangeRound","interpolate","clamp")}function Of(a,b){return Jf(a,Kf(Pf(a,b)[2]))}function Pf(a,b){null==b&&(b=10);var c=Gf(a),d=c[1]-c[0],e=Math.pow(10,Math.floor(Math.log(d/b)/Math.LN10)),f=b/d*e;return.15>=f?e*=10:.35>=f?e*=5:.75>=f&&(e*=2),c[0]=Math.ceil(c[0]/e)*e,c[1]=Math.floor(c[1]/e)*e+.5*e,c[2]=e,c}function Qf(a,b){return Sg.range.apply(Sg,Pf(a,b))}function Rf(a,b,c){var d=Pf(a,b);if(c){var e=Zh.exec(c);if(e.shift(),"s"===e[8]){var f=Sg.formatPrefix(Math.max(eh(d[0]),eh(d[1])));return e[7]||(e[7]="."+Sf(f.scale(d[2]))),e[8]="f",c=Sg.format(e.join("")),function(a){return c(f.scale(a))+f.symbol}}e[7]||(e[7]="."+Tf(e[8],d)),c=e.join("")}else c=",."+Sf(d[2])+"f";return Sg.format(c)}function Sf(a){return-Math.floor(Math.log(a)/Math.LN10+.01)}function Tf(a,b){var c=Sf(b[2]);return a in kj?Math.abs(c-Sf(Math.max(eh(b[0]),eh(b[1]))))+ +("e"!==a):c-2*("%"===a)}function Uf(a,b,c,d){function e(a){return(c?Math.log(0>a?0:a):-Math.log(a>0?0:-a))/Math.log(b)}function f(a){return c?Math.pow(b,a):-Math.pow(b,-a)}function g(b){return a(e(b))}return g.invert=function(b){return f(a.invert(b))},g.domain=function(b){return arguments.length?(c=b[0]>=0,a.domain((d=b.map(Number)).map(e)),g):d},g.base=function(c){return arguments.length?(b=+c,a.domain(d.map(e)),g):b},g.nice=function(){var b=Jf(d.map(e),c?Math:mj);return a.domain(b),d=b.map(f),g},g.ticks=function(){var a=Gf(d),g=[],h=a[0],i=a[1],j=Math.floor(e(h)),k=Math.ceil(e(i)),l=b%1?2:b;if(isFinite(k-j)){if(c){for(;k>j;j++)for(var m=1;l>m;m++)g.push(f(j)*m);g.push(f(j))}else for(g.push(f(j));j++<k;)for(var m=l-1;m>0;m--)g.push(f(j)*m);for(j=0;g[j]<h;j++);for(k=g.length;g[k-1]>i;k--);g=g.slice(j,k)}return g},g.tickFormat=function(a,b){if(!arguments.length)return lj;arguments.length<2?b=lj:"function"!=typeof b&&(b=Sg.format(b));var d,h=Math.max(.1,a/g.ticks().length),i=c?(d=1e-12,Math.ceil):(d=-1e-12,Math.floor);return function(a){return a/f(i(e(a)+d))<=h?b(a):""}},g.copy=function(){return Uf(a.copy(),b,c,d)},Nf(g,a)}function Vf(a,b,c){function d(b){return a(e(b))}var e=Wf(b),f=Wf(1/b);return d.invert=function(b){return f(a.invert(b))},d.domain=function(b){return arguments.length?(a.domain((c=b.map(Number)).map(e)),d):c},d.ticks=function(a){return Qf(c,a)},d.tickFormat=function(a,b){return Rf(c,a,b)},d.nice=function(a){return d.domain(Of(c,a))},d.exponent=function(g){return arguments.length?(e=Wf(b=g),f=Wf(1/b),a.domain(c.map(e)),d):b},d.copy=function(){return Vf(a.copy(),b,c)},Nf(d,a)}function Wf(a){return function(b){return 0>b?-Math.pow(-b,a):Math.pow(b,a)}}function Xf(a,b){function c(c){return f[((e.get(c)||("range"===b.t?e.set(c,a.push(c)):0/0))-1)%f.length]}function d(b,c){return Sg.range(a.length).map(function(a){return b+c*a})}var e,f,h;return c.domain=function(d){if(!arguments.length)return a;a=[],e=new g;for(var f,h=-1,i=d.length;++h<i;)e.has(f=d[h])||e.set(f,a.push(f));return c[b.t].apply(c,b.a)},c.range=function(a){return arguments.length?(f=a,h=0,b={t:"range",a:arguments},c):f},c.rangePoints=function(e,g){arguments.length<2&&(g=0);var i=e[0],j=e[1],k=(j-i)/(Math.max(1,a.length-1)+g);return f=d(a.length<2?(i+j)/2:i+k*g/2,k),h=0,b={t:"rangePoints",a:arguments},c},c.rangeBands=function(e,g,i){arguments.length<2&&(g=0),arguments.length<3&&(i=g);var j=e[1]<e[0],k=e[j-0],l=e[1-j],m=(l-k)/(a.length-g+2*i);return f=d(k+m*i,m),j&&f.reverse(),h=m*(1-g),b={t:"rangeBands",a:arguments},c},c.rangeRoundBands=function(e,g,i){arguments.length<2&&(g=0),arguments.length<3&&(i=g);var j=e[1]<e[0],k=e[j-0],l=e[1-j],m=Math.floor((l-k)/(a.length-g+2*i)),n=l-k-(a.length-g)*m;return f=d(k+Math.round(n/2),m),j&&f.reverse(),h=Math.round(m*(1-g)),b={t:"rangeRoundBands",a:arguments},c},c.rangeBand=function(){return h},c.rangeExtent=function(){return Gf(b.a[0])},c.copy=function(){return Xf(a,b)},c.domain(a)}function Yf(c,d){function e(){var a=0,b=d.length;for(g=[];++a<b;)g[a-1]=Sg.quantile(c,a/b);return f}function f(a){return isNaN(a=+a)?void 0:d[Sg.bisect(g,a)]}var g;return f.domain=function(d){return arguments.length?(c=d.filter(b).sort(a),e()):c},f.range=function(a){return arguments.length?(d=a,e()):d},f.quantiles=function(){return g},f.invertExtent=function(a){return a=d.indexOf(a),0>a?[0/0,0/0]:[a>0?g[a-1]:c[0],a<g.length?g[a]:c[c.length-1]]},f.copy=function(){return Yf(c,d)},e()}function Zf(a,b,c){function d(b){return c[Math.max(0,Math.min(g,Math.floor(f*(b-a))))]}function e(){return f=c.length/(b-a),g=c.length-1,d}var f,g;return d.domain=function(c){return arguments.length?(a=+c[0],b=+c[c.length-1],e()):[a,b]},d.range=function(a){return arguments.length?(c=a,e()):c},d.invertExtent=function(b){return b=c.indexOf(b),b=0>b?0/0:b/f+a,[b,b+1/f]},d.copy=function(){return Zf(a,b,c)},e()}function $f(a,b){function c(c){return c>=c?b[Sg.bisect(a,c)]:void 0}return c.domain=function(b){return arguments.length?(a=b,c):a},c.range=function(a){return arguments.length?(b=a,c):b},c.invertExtent=function(c){return c=b.indexOf(c),[a[c-1],a[c]]},c.copy=function(){return $f(a,b)},c}function _f(a){function b(a){return+a}return b.invert=b,b.domain=b.range=function(c){return arguments.length?(a=c.map(b),b):a},b.ticks=function(b){return Qf(a,b)},b.tickFormat=function(b,c){return Rf(a,b,c)},b.copy=function(){return _f(a)},b}function ag(a){return a.innerRadius}function bg(a){return a.outerRadius}function cg(a){return a.startAngle}function dg(a){return a.endAngle}function eg(a){function b(b){function g(){j.push("M",f(a(k),h))}for(var i,j=[],k=[],l=-1,m=b.length,n=wb(c),o=wb(d);++l<m;)e.call(this,i=b[l],l)?k.push([+n.call(this,i,l),+o.call(this,i,l)]):k.length&&(g(),k=[]);return k.length&&g(),j.length?j.join(""):null}var c=xd,d=yd,e=xc,f=fg,g=f.key,h=.7;return b.x=function(a){return arguments.length?(c=a,b):c},b.y=function(a){return arguments.length?(d=a,b):d},b.defined=function(a){return arguments.length?(e=a,b):e},b.interpolate=function(a){return arguments.length?(g="function"==typeof a?f=a:(f=tj.get(a)||fg).key,b):g},b.tension=function(a){return arguments.length?(h=a,b):h},b}function fg(a){return a.join("L")}function gg(a){return fg(a)+"Z"}function hg(a){for(var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];++b<c;)e.push("H",(d[0]+(d=a[b])[0])/2,"V",d[1]);return c>1&&e.push("H",d[0]),e.join("")}function ig(a){for(var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];++b<c;)e.push("V",(d=a[b])[1],"H",d[0]);return e.join("")}function jg(a){for(var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];++b<c;)e.push("H",(d=a[b])[0],"V",d[1]);return e.join("")}function kg(a,b){return a.length<4?fg(a):a[1]+ng(a.slice(1,a.length-1),og(a,b))}function lg(a,b){return a.length<3?fg(a):a[0]+ng((a.push(a[0]),a),og([a[a.length-2]].concat(a,[a[1]]),b))}function mg(a,b){return a.length<3?fg(a):a[0]+ng(a,og(a,b))}function ng(a,b){if(b.length<1||a.length!=b.length&&a.length!=b.length+2)return fg(a);var c=a.length!=b.length,d="",e=a[0],f=a[1],g=b[0],h=g,i=1;if(c&&(d+="Q"+(f[0]-2*g[0]/3)+","+(f[1]-2*g[1]/3)+","+f[0]+","+f[1],e=a[1],i=2),b.length>1){h=b[1],f=a[i],i++,d+="C"+(e[0]+g[0])+","+(e[1]+g[1])+","+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1];for(var j=2;j<b.length;j++,i++)f=a[i],h=b[j],d+="S"+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1]}if(c){var k=a[i];d+="Q"+(f[0]+2*h[0]/3)+","+(f[1]+2*h[1]/3)+","+k[0]+","+k[1]}return d}function og(a,b){for(var c,d=[],e=(1-b)/2,f=a[0],g=a[1],h=1,i=a.length;++h<i;)c=f,f=g,g=a[h],d.push([e*(g[0]-c[0]),e*(g[1]-c[1])]);return d}function pg(a){if(a.length<3)return fg(a);var b=1,c=a.length,d=a[0],e=d[0],f=d[1],g=[e,e,e,(d=a[1])[0]],h=[f,f,f,d[1]],i=[e,",",f,"L",tg(wj,g),",",tg(wj,h)];for(a.push(a[c-1]);++b<=c;)d=a[b],g.shift(),g.push(d[0]),h.shift(),h.push(d[1]),ug(i,g,h);return a.pop(),i.push("L",d),i.join("")}function qg(a){if(a.length<4)return fg(a);for(var b,c=[],d=-1,e=a.length,f=[0],g=[0];++d<3;)b=a[d],f.push(b[0]),g.push(b[1]);for(c.push(tg(wj,f)+","+tg(wj,g)),--d;++d<e;)b=a[d],f.shift(),f.push(b[0]),g.shift(),g.push(b[1]),ug(c,f,g);return c.join("")}function rg(a){for(var b,c,d=-1,e=a.length,f=e+4,g=[],h=[];++d<4;)c=a[d%e],g.push(c[0]),h.push(c[1]);for(b=[tg(wj,g),",",tg(wj,h)],--d;++d<f;)c=a[d%e],g.shift(),g.push(c[0]),h.shift(),h.push(c[1]),ug(b,g,h);return b.join("")}function sg(a,b){var c=a.length-1;if(c)for(var d,e,f=a[0][0],g=a[0][1],h=a[c][0]-f,i=a[c][1]-g,j=-1;++j<=c;)d=a[j],e=j/c,d[0]=b*d[0]+(1-b)*(f+e*h),d[1]=b*d[1]+(1-b)*(g+e*i);return pg(a)}function tg(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]}function ug(a,b,c){a.push("C",tg(uj,b),",",tg(uj,c),",",tg(vj,b),",",tg(vj,c),",",tg(wj,b),",",tg(wj,c))}function vg(a,b){return(b[1]-a[1])/(b[0]-a[0])}function wg(a){for(var b=0,c=a.length-1,d=[],e=a[0],f=a[1],g=d[0]=vg(e,f);++b<c;)d[b]=(g+(g=vg(e=f,f=a[b+1])))/2;return d[b]=g,d}function xg(a){for(var b,c,d,e,f=[],g=wg(a),h=-1,i=a.length-1;++h<i;)b=vg(a[h],a[h+1]),eh(b)<zh?g[h]=g[h+1]=0:(c=g[h]/b,d=g[h+1]/b,e=c*c+d*d,e>9&&(e=3*b/Math.sqrt(e),g[h]=e*c,g[h+1]=e*d));for(h=-1;++h<=i;)e=(a[Math.min(i,h+1)][0]-a[Math.max(0,h-1)][0])/(6*(1+g[h]*g[h])),f.push([e||0,g[h]*e||0]);return f}function yg(a){return a.length<3?fg(a):a[0]+ng(a,xg(a))}function zg(a){for(var b,c,d,e=-1,f=a.length;++e<f;)b=a[e],c=b[0],d=b[1]+rj,b[0]=c*Math.cos(d),b[1]=c*Math.sin(d);return a}function Ag(a){function b(b){function i(){p.push("M",h(a(r),l),k,j(a(q.reverse()),l),"Z")}for(var m,n,o,p=[],q=[],r=[],s=-1,t=b.length,u=wb(c),v=wb(e),w=c===d?function(){return n}:wb(d),x=e===f?function(){return o}:wb(f);++s<t;)g.call(this,m=b[s],s)?(q.push([n=+u.call(this,m,s),o=+v.call(this,m,s)]),r.push([+w.call(this,m,s),+x.call(this,m,s)])):q.length&&(i(),q=[],r=[]);return q.length&&i(),p.length?p.join(""):null}var c=xd,d=xd,e=0,f=yd,g=xc,h=fg,i=h.key,j=h,k="L",l=.7;return b.x=function(a){return arguments.length?(c=d=a,b):d},b.x0=function(a){return arguments.length?(c=a,b):c},b.x1=function(a){return arguments.length?(d=a,b):d},b.y=function(a){return arguments.length?(e=f=a,b):f},b.y0=function(a){return arguments.length?(e=a,b):e},b.y1=function(a){return arguments.length?(f=a,b):f},b.defined=function(a){return arguments.length?(g=a,b):g},b.interpolate=function(a){return arguments.length?(i="function"==typeof a?h=a:(h=tj.get(a)||fg).key,j=h.reverse||h,k=h.closed?"M":"L",b):i},b.tension=function(a){return arguments.length?(l=a,b):l},b}function Bg(a){return a.radius}function Cg(a){return[a.x,a.y]}function Dg(a){return function(){var b=a.apply(this,arguments),c=b[0],d=b[1]+rj;return[c*Math.cos(d),c*Math.sin(d)]}}function Eg(){return 64}function Fg(){return"circle"}function Gg(a){var b=Math.sqrt(a/wh);return"M0,"+b+"A"+b+","+b+" 0 1,1 0,"+-b+"A"+b+","+b+" 0 1,1 0,"+b+"Z"}function Hg(a,b){return jh(a,Cj),a.id=b,a}function Ig(a,b,c,d){var e=a.id;return K(a,"function"==typeof c?function(a,f,g){a.__transition__[e].tween.set(b,d(c.call(a,a.__data__,f,g)))}:(c=d(c),function(a){a.__transition__[e].tween.set(b,c)}))}function Jg(a){return null==a&&(a=""),function(){this.textContent=a}}function Kg(a,b,c,d){var e=a.__transition__||(a.__transition__={active:0,count:0}),f=e[c];if(!f){var h=d.time;f=e[c]={tween:new g,time:h,ease:d.ease,delay:d.delay,duration:d.duration},++e.count,Sg.timer(function(d){function g(d){return e.active>c?j():(e.active=c,f.event&&f.event.start.call(a,k,b),f.tween.forEach(function(c,d){(d=d.call(a,k,b))&&p.push(d)}),void Sg.timer(function(){return o.c=i(d||1)?xc:i,1},0,h))}function i(d){if(e.active!==c)return j();for(var g=d/n,h=l(g),i=p.length;i>0;)p[--i].call(a,h);return g>=1?(f.event&&f.event.end.call(a,k,b),j()):void 0}function j(){return--e.count?delete e[c]:delete a.__transition__,1}var k=a.__data__,l=f.ease,m=f.delay,n=f.duration,o=Wh,p=[];return o.t=m+h,d>=m?g(d-m):void(o.c=g)},0,h)}}function Lg(a,b){a.attr("transform",function(a){return"translate("+b(a)+",0)"})}function Mg(a,b){a.attr("transform",function(a){return"translate(0,"+b(a)+")"})}function Ng(a){return a.toISOString()}function Og(a,b,c){function d(b){return a(b)}function e(a,c){var d=a[1]-a[0],e=d/c,f=Sg.bisect(Lj,e);return f==Lj.length?[b.year,Pf(a.map(function(a){return a/31536e6}),c)[2]]:f?b[e/Lj[f-1]<Lj[f]/e?f-1:f]:[Oj,Pf(a,c)[2]]}return d.invert=function(b){return Pg(a.invert(b))},d.domain=function(b){return arguments.length?(a.domain(b),d):a.domain().map(Pg)},d.nice=function(a,b){function c(c){return!isNaN(c)&&!a.range(c,Pg(+c+1),b).length}var f=d.domain(),g=Gf(f),h=null==a?e(g,10):"number"==typeof a&&e(g,a);return h&&(a=h[0],b=h[1]),d.domain(Jf(f,b>1?{floor:function(b){for(;c(b=a.floor(b));)b=Pg(b-1);return b},ceil:function(b){for(;c(b=a.ceil(b));)b=Pg(+b+1);return b}}:a))},d.ticks=function(a,b){var c=Gf(d.domain()),f=null==a?e(c,10):"number"==typeof a?e(c,a):!a.range&&[{range:a},b];return f&&(a=f[0],b=f[1]),a.range(c[0],Pg(+c[1]+1),1>b?1:b)},d.tickFormat=function(){return c},d.copy=function(){return Og(a.copy(),b,c)},Nf(d,a)}function Pg(a){return new Date(a)}function Qg(a){return JSON.parse(a.responseText)}function Rg(a){var b=Vg.createRange();return b.selectNode(Vg.body),b.createContextualFragment(a.responseText)}var Sg={version:"3.4.9"};Date.now||(Date.now=function(){return+new Date});var Tg=[].slice,Ug=function(a){return Tg.call(a)},Vg=document,Wg=Vg.documentElement,Xg=window;try{Ug(Wg.childNodes)[0].nodeType}catch(Yg){Ug=function(a){for(var b=a.length,c=new Array(b);b--;)c[b]=a[b];return c}}try{Vg.createElement("div").style.setProperty("opacity",0,"")}catch(Zg){var $g=Xg.Element.prototype,_g=$g.setAttribute,ah=$g.setAttributeNS,bh=Xg.CSSStyleDeclaration.prototype,ch=bh.setProperty;$g.setAttribute=function(a,b){_g.call(this,a,b+"")},$g.setAttributeNS=function(a,b,c){ah.call(this,a,b,c+"")},bh.setProperty=function(a,b,c){ch.call(this,a,b+"",c)}}Sg.ascending=a,Sg.descending=function(a,b){return a>b?-1:b>a?1:b>=a?0:0/0},Sg.min=function(a,b){var c,d,e=-1,f=a.length;if(1===arguments.length){for(;++e<f&&!(null!=(c=a[e])&&c>=c);)c=void 0;for(;++e<f;)null!=(d=a[e])&&c>d&&(c=d)}else{for(;++e<f&&!(null!=(c=b.call(a,a[e],e))&&c>=c);)c=void 0;for(;++e<f;)null!=(d=b.call(a,a[e],e))&&c>d&&(c=d)}return c},Sg.max=function(a,b){var c,d,e=-1,f=a.length;if(1===arguments.length){for(;++e<f&&!(null!=(c=a[e])&&c>=c);)c=void 0;for(;++e<f;)null!=(d=a[e])&&d>c&&(c=d)}else{for(;++e<f&&!(null!=(c=b.call(a,a[e],e))&&c>=c);)c=void 0;for(;++e<f;)null!=(d=b.call(a,a[e],e))&&d>c&&(c=d)}return c},Sg.extent=function(a,b){var c,d,e,f=-1,g=a.length;if(1===arguments.length){for(;++f<g&&!(null!=(c=e=a[f])&&c>=c);)c=e=void 0;for(;++f<g;)null!=(d=a[f])&&(c>d&&(c=d),d>e&&(e=d))}else{for(;++f<g&&!(null!=(c=e=b.call(a,a[f],f))&&c>=c);)c=void 0;for(;++f<g;)null!=(d=b.call(a,a[f],f))&&(c>d&&(c=d),d>e&&(e=d))}return[c,e]},Sg.sum=function(a,b){var c,d=0,e=a.length,f=-1;if(1===arguments.length)for(;++f<e;)isNaN(c=+a[f])||(d+=c);else for(;++f<e;)isNaN(c=+b.call(a,a[f],f))||(d+=c);return d},Sg.mean=function(a,c){var d,e=0,f=a.length,g=-1,h=f;if(1===arguments.length)for(;++g<f;)b(d=a[g])?e+=d:--h;else for(;++g<f;)b(d=c.call(a,a[g],g))?e+=d:--h;return h?e/h:void 0},Sg.quantile=function(a,b){var c=(a.length-1)*b+1,d=Math.floor(c),e=+a[d-1],f=c-d;return f?e+f*(a[d]-e):e},Sg.median=function(c,d){return arguments.length>1&&(c=c.map(d)),c=c.filter(b),c.length?Sg.quantile(c.sort(a),.5):void 0};var dh=c(a);Sg.bisectLeft=dh.left,Sg.bisect=Sg.bisectRight=dh.right,Sg.bisector=function(b){return c(1===b.length?function(c,d){return a(b(c),d)}:b)},Sg.shuffle=function(a){for(var b,c,d=a.length;d;)c=Math.random()*d--|0,b=a[d],a[d]=a[c],a[c]=b;return a},Sg.permute=function(a,b){for(var c=b.length,d=new Array(c);c--;)d[c]=a[b[c]];return d},Sg.pairs=function(a){for(var b,c=0,d=a.length-1,e=a[0],f=new Array(0>d?0:d);d>c;)f[c]=[b=e,e=a[++c]];return f},Sg.zip=function(){if(!(e=arguments.length))return[];for(var a=-1,b=Sg.min(arguments,d),c=new Array(b);++a<b;)for(var e,f=-1,g=c[a]=new Array(e);++f<e;)g[f]=arguments[f][a];return c},Sg.transpose=function(a){return Sg.zip.apply(Sg,a)},Sg.keys=function(a){var b=[];for(var c in a)b.push(c);return b},Sg.values=function(a){var b=[];for(var c in a)b.push(a[c]);return b},Sg.entries=function(a){var b=[];for(var c in a)b.push({key:c,value:a[c]});return b},Sg.merge=function(a){for(var b,c,d,e=a.length,f=-1,g=0;++f<e;)g+=a[f].length;for(c=new Array(g);--e>=0;)for(d=a[e],b=d.length;--b>=0;)c[--g]=d[b];return c};var eh=Math.abs;Sg.range=function(a,b,c){if(arguments.length<3&&(c=1,arguments.length<2&&(b=a,a=0)),(b-a)/c===1/0)throw new Error("infinite range");var d,f=[],g=e(eh(c)),h=-1;if(a*=g,b*=g,c*=g,0>c)for(;(d=a+c*++h)>b;)f.push(d/g);else for(;(d=a+c*++h)<b;)f.push(d/g);return f},Sg.map=function(a){var b=new g;if(a instanceof g)a.forEach(function(a,c){b.set(a,c)});else for(var c in a)b.set(c,a[c]);return b},f(g,{has:h,get:function(a){return this[fh+a]},set:function(a,b){return this[fh+a]=b},remove:i,keys:j,values:function(){var a=[];return this.forEach(function(b,c){a.push(c)}),a},entries:function(){var a=[];return this.forEach(function(b,c){a.push({key:b,value:c})}),a},size:k,empty:l,forEach:function(a){for(var b in this)b.charCodeAt(0)===gh&&a.call(this,b.substring(1),this[b])}});var fh="\x00",gh=fh.charCodeAt(0);Sg.nest=function(){function a(b,h,i){if(i>=f.length)return d?d.call(e,h):c?h.sort(c):h;for(var j,k,l,m,n=-1,o=h.length,p=f[i++],q=new g;++n<o;)(m=q.get(j=p(k=h[n])))?m.push(k):q.set(j,[k]);return b?(k=b(),l=function(c,d){k.set(c,a(b,d,i))}):(k={},l=function(c,d){k[c]=a(b,d,i)}),q.forEach(l),k}function b(a,c){if(c>=f.length)return a;var d=[],e=h[c++];return a.forEach(function(a,e){d.push({key:a,values:b(e,c)})}),e?d.sort(function(a,b){return e(a.key,b.key)}):d}var c,d,e={},f=[],h=[];return e.map=function(b,c){return a(c,b,0)},e.entries=function(c){return b(a(Sg.map,c,0),0)},e.key=function(a){return f.push(a),e},e.sortKeys=function(a){return h[f.length-1]=a,e},e.sortValues=function(a){return c=a,e},e.rollup=function(a){return d=a,e},e},Sg.set=function(a){var b=new m;if(a)for(var c=0,d=a.length;d>c;++c)b.add(a[c]);return b},f(m,{has:h,add:function(a){return this[fh+a]=!0,a},remove:function(a){return a=fh+a,a in this&&delete this[a]},values:j,size:k,empty:l,forEach:function(a){for(var b in this)b.charCodeAt(0)===gh&&a.call(this,b.substring(1))}}),Sg.behavior={},Sg.rebind=function(a,b){for(var c,d=1,e=arguments.length;++d<e;)a[c=arguments[d]]=n(a,b,b[c]);return a};var hh=["webkit","ms","moz","Moz","o","O"];Sg.dispatch=function(){for(var a=new q,b=-1,c=arguments.length;++b<c;)a[arguments[b]]=r(a);return a},q.prototype.on=function(a,b){var c=a.indexOf("."),d="";if(c>=0&&(d=a.substring(c+1),a=a.substring(0,c)),a)return arguments.length<2?this[a].on(d):this[a].on(d,b);if(2===arguments.length){if(null==b)for(a in this)this.hasOwnProperty(a)&&this[a].on(d,null);return this}},Sg.event=null,Sg.requote=function(a){return a.replace(ih,"\\$&")};var ih=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,jh={}.__proto__?function(a,b){a.__proto__=b}:function(a,b){for(var c in b)a[c]=b[c]},kh=function(a,b){return b.querySelector(a)},lh=function(a,b){return b.querySelectorAll(a)},mh=Wg.matches||Wg[o(Wg,"matchesSelector")],nh=function(a,b){return mh.call(a,b)};"function"==typeof Sizzle&&(kh=function(a,b){return Sizzle(a,b)[0]||null},lh=Sizzle,nh=Sizzle.matchesSelector),Sg.selection=function(){return rh};var oh=Sg.selection.prototype=[];oh.select=function(a){var b,c,d,e,f=[];a=w(a);for(var g=-1,h=this.length;++g<h;){f.push(b=[]),b.parentNode=(d=this[g]).parentNode;for(var i=-1,j=d.length;++i<j;)(e=d[i])?(b.push(c=a.call(e,e.__data__,i,g)),c&&"__data__"in e&&(c.__data__=e.__data__)):b.push(null)}return v(f)},oh.selectAll=function(a){var b,c,d=[];a=x(a);for(var e=-1,f=this.length;++e<f;)for(var g=this[e],h=-1,i=g.length;++h<i;)(c=g[h])&&(d.push(b=Ug(a.call(c,c.__data__,h,e))),b.parentNode=c);return v(d)};var ph={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Sg.ns={prefix:ph,qualify:function(a){var b=a.indexOf(":"),c=a;return b>=0&&(c=a.substring(0,b),a=a.substring(b+1)),ph.hasOwnProperty(c)?{space:ph[c],local:a}:a}},oh.attr=function(a,b){if(arguments.length<2){if("string"==typeof a){var c=this.node();return a=Sg.ns.qualify(a),a.local?c.getAttributeNS(a.space,a.local):c.getAttribute(a)}for(b in a)this.each(y(b,a[b]));return this}return this.each(y(a,b))},oh.classed=function(a,b){if(arguments.length<2){if("string"==typeof a){var c=this.node(),d=(a=B(a)).length,e=-1;if(b=c.classList){for(;++e<d;)if(!b.contains(a[e]))return!1}else for(b=c.getAttribute("class");++e<d;)if(!A(a[e]).test(b))return!1;return!0}for(b in a)this.each(C(b,a[b]));return this}return this.each(C(a,b))},oh.style=function(a,b,c){var d=arguments.length;if(3>d){if("string"!=typeof a){2>d&&(b="");for(c in a)this.each(E(c,a[c],b));return this}if(2>d)return Xg.getComputedStyle(this.node(),null).getPropertyValue(a);c=""}return this.each(E(a,b,c))},oh.property=function(a,b){if(arguments.length<2){if("string"==typeof a)return this.node()[a];for(b in a)this.each(F(b,a[b]));return this}return this.each(F(a,b))},oh.text=function(a){return arguments.length?this.each("function"==typeof a?function(){var b=a.apply(this,arguments);this.textContent=null==b?"":b}:null==a?function(){this.textContent=""}:function(){this.textContent=a}):this.node().textContent},oh.html=function(a){return arguments.length?this.each("function"==typeof a?function(){var b=a.apply(this,arguments);this.innerHTML=null==b?"":b}:null==a?function(){this.innerHTML=""}:function(){this.innerHTML=a}):this.node().innerHTML},oh.append=function(a){return a=G(a),this.select(function(){return this.appendChild(a.apply(this,arguments))})},oh.insert=function(a,b){return a=G(a),b=w(b),this.select(function(){return this.insertBefore(a.apply(this,arguments),b.apply(this,arguments)||null)})},oh.remove=function(){return this.each(function(){var a=this.parentNode;a&&a.removeChild(this)})},oh.data=function(a,b){function c(a,c){var d,e,f,h=a.length,l=c.length,m=Math.min(h,l),n=new Array(l),o=new Array(l),p=new Array(h);if(b){var q,r=new g,s=new g,t=[];for(d=-1;++d<h;)q=b.call(e=a[d],e.__data__,d),r.has(q)?p[d]=e:r.set(q,e),t.push(q);for(d=-1;++d<l;)q=b.call(c,f=c[d],d),(e=r.get(q))?(n[d]=e,e.__data__=f):s.has(q)||(o[d]=H(f)),s.set(q,f),r.remove(q);for(d=-1;++d<h;)r.has(t[d])&&(p[d]=a[d])}else{for(d=-1;++d<m;)e=a[d],f=c[d],e?(e.__data__=f,n[d]=e):o[d]=H(f);for(;l>d;++d)o[d]=H(c[d]);for(;h>d;++d)p[d]=a[d]}o.update=n,o.parentNode=n.parentNode=p.parentNode=a.parentNode,i.push(o),j.push(n),k.push(p)}var d,e,f=-1,h=this.length;if(!arguments.length){for(a=new Array(h=(d=this[0]).length);++f<h;)(e=d[f])&&(a[f]=e.__data__);return a}var i=L([]),j=v([]),k=v([]);if("function"==typeof a)for(;++f<h;)c(d=this[f],a.call(d,d.parentNode.__data__,f));else for(;++f<h;)c(d=this[f],a);return j.enter=function(){return i},j.exit=function(){return k},j},oh.datum=function(a){return arguments.length?this.property("__data__",a):this.property("__data__")},oh.filter=function(a){var b,c,d,e=[];"function"!=typeof a&&(a=I(a));for(var f=0,g=this.length;g>f;f++){e.push(b=[]),b.parentNode=(c=this[f]).parentNode;for(var h=0,i=c.length;i>h;h++)(d=c[h])&&a.call(d,d.__data__,h,f)&&b.push(d)}return v(e)},oh.order=function(){for(var a=-1,b=this.length;++a<b;)for(var c,d=this[a],e=d.length-1,f=d[e];--e>=0;)(c=d[e])&&(f&&f!==c.nextSibling&&f.parentNode.insertBefore(c,f),f=c);return this},oh.sort=function(a){a=J.apply(this,arguments);for(var b=-1,c=this.length;++b<c;)this[b].sort(a);return this.order()},oh.each=function(a){return K(this,function(b,c,d){a.call(b,b.__data__,c,d)})},oh.call=function(a){var b=Ug(arguments);return a.apply(b[0]=this,b),this},oh.empty=function(){return!this.node()},oh.node=function(){for(var a=0,b=this.length;b>a;a++)for(var c=this[a],d=0,e=c.length;e>d;d++){var f=c[d];if(f)return f}return null},oh.size=function(){var a=0;return this.each(function(){++a}),a};var qh=[];Sg.selection.enter=L,Sg.selection.enter.prototype=qh,qh.append=oh.append,qh.empty=oh.empty,qh.node=oh.node,qh.call=oh.call,qh.size=oh.size,qh.select=function(a){for(var b,c,d,e,f,g=[],h=-1,i=this.length;++h<i;){d=(e=this[h]).update,g.push(b=[]),b.parentNode=e.parentNode;for(var j=-1,k=e.length;++j<k;)(f=e[j])?(b.push(d[j]=c=a.call(e.parentNode,f.__data__,j,h)),c.__data__=f.__data__):b.push(null)}return v(g)},qh.insert=function(a,b){return arguments.length<2&&(b=M(this)),oh.insert.call(this,a,b)},oh.transition=function(){for(var a,b,c=yj||++Dj,d=[],e=zj||{time:Date.now(),ease:te,delay:0,duration:250},f=-1,g=this.length;++f<g;){d.push(a=[]);for(var h=this[f],i=-1,j=h.length;++i<j;)(b=h[i])&&Kg(b,i,c,e),a.push(b)}return Hg(d,c)},oh.interrupt=function(){return this.each(N)},Sg.select=function(a){var b=["string"==typeof a?kh(a,Vg):a];return b.parentNode=Wg,v([b])},Sg.selectAll=function(a){var b=Ug("string"==typeof a?lh(a,Vg):a);return b.parentNode=Wg,v([b])};var rh=Sg.select(Wg);oh.on=function(a,b,c){var d=arguments.length;if(3>d){if("string"!=typeof a){2>d&&(b=!1);for(c in a)this.each(O(c,a[c],b));return this}if(2>d)return(d=this.node()["__on"+a])&&d._;c=!1}return this.each(O(a,b,c))};var sh=Sg.map({mouseenter:"mouseover",mouseleave:"mouseout"});sh.forEach(function(a){"on"+a in Vg&&sh.remove(a)});var th="onselectstart"in Vg?null:o(Wg.style,"userSelect"),uh=0;Sg.mouse=function(a){return S(a,t())};var vh=/WebKit/.test(Xg.navigator.userAgent)?-1:0;Sg.touches=function(a,b){return arguments.length<2&&(b=t().touches),b?Ug(b).map(function(b){var c=S(a,b);return c.identifier=b.identifier,c}):[]},Sg.behavior.drag=function(){function a(){this.on("mousedown.drag",e).on("touchstart.drag",f)}function b(a,b,e,f,g){return function(){function h(){var a,c,d=b(m,p);d&&(a=d[0]-t[0],c=d[1]-t[1],o|=a|c,t=d,n({type:"drag",x:d[0]+j[0],y:d[1]+j[1],dx:a,dy:c}))}function i(){b(m,p)&&(r.on(f+q,null).on(g+q,null),s(o&&Sg.event.target===l),n({type:"dragend"}))}var j,k=this,l=Sg.event.target,m=k.parentNode,n=c.of(k,arguments),o=0,p=a(),q=".drag"+(null==p?"":"-"+p),r=Sg.select(e()).on(f+q,h).on(g+q,i),s=R(),t=b(m,p);d?(j=d.apply(k,arguments),j=[j.x-t[0],j.y-t[1]]):j=[0,0],n({type:"dragstart"})}}var c=u(a,"drag","dragstart","dragend"),d=null,e=b(p,Sg.mouse,V,"mousemove","mouseup"),f=b(T,Sg.touch,U,"touchmove","touchend");return a.origin=function(b){return arguments.length?(d=b,a):d},Sg.rebind(a,c,"on")};var wh=Math.PI,xh=2*wh,yh=wh/2,zh=1e-6,Ah=zh*zh,Bh=wh/180,Ch=180/wh,Dh=Math.SQRT2,Eh=2,Fh=4;Sg.interpolateZoom=function(a,b){function c(a){var b=a*s;if(r){var c=_(p),g=f/(Eh*m)*(c*ab(Dh*b+p)-$(p));return[d+g*j,e+g*k,f*c/_(Dh*b+p)]}return[d+a*j,e+a*k,f*Math.exp(Dh*b)]}var d=a[0],e=a[1],f=a[2],g=b[0],h=b[1],i=b[2],j=g-d,k=h-e,l=j*j+k*k,m=Math.sqrt(l),n=(i*i-f*f+Fh*l)/(2*f*Eh*m),o=(i*i-f*f-Fh*l)/(2*i*Eh*m),p=Math.log(Math.sqrt(n*n+1)-n),q=Math.log(Math.sqrt(o*o+1)-o),r=q-p,s=(r||Math.log(i/f))/Dh;
return c.duration=1e3*s,c},Sg.behavior.zoom=function(){function a(a){a.on(B,j).on(Ih+".zoom",l).on(C,m).on("dblclick.zoom",n).on(E,k)}function b(a){return[(a[0]-y.x)/y.k,(a[1]-y.y)/y.k]}function c(a){return[a[0]*y.k+y.x,a[1]*y.k+y.y]}function d(a){y.k=Math.max(A[0],Math.min(A[1],a))}function e(a,b){b=c(b),y.x+=a[0]-b[0],y.y+=a[1]-b[1]}function f(){v&&v.domain(t.range().map(function(a){return(a-y.x)/y.k}).map(t.invert)),x&&x.domain(w.range().map(function(a){return(a-y.y)/y.k}).map(w.invert))}function g(a){a({type:"zoomstart"})}function h(a){f(),a({type:"zoom",scale:y.k,translate:[y.x,y.y]})}function i(a){a({type:"zoomend"})}function j(){function a(){k=1,e(Sg.mouse(d),n),h(j)}function c(){l.on(C,Xg===d?m:null).on(D,null),o(k&&Sg.event.target===f),i(j)}var d=this,f=Sg.event.target,j=F.of(d,arguments),k=0,l=Sg.select(Xg).on(C,a).on(D,c),n=b(Sg.mouse(d)),o=R();N.call(d),g(j)}function k(){function a(){var a=Sg.touches(n);return m=y.k,a.forEach(function(a){a.identifier in p&&(p[a.identifier]=b(a))}),a}function c(){var b=Sg.event.target;Sg.select(b).on(u,f).on(v,l),w.push(b);for(var c=Sg.event.changedTouches,g=0,i=c.length;i>g;++g)p[c[g].identifier]=null;var j=a(),k=Date.now();if(1===j.length){if(500>k-r){var m=j[0],n=p[m.identifier];d(2*y.k),e(m,n),s(),h(o)}r=k}else if(j.length>1){var m=j[0],t=j[1],x=m[0]-t[0],z=m[1]-t[1];q=x*x+z*z}}function f(){for(var a,b,c,f,g=Sg.touches(n),i=0,j=g.length;j>i;++i,f=null)if(c=g[i],f=p[c.identifier]){if(b)break;a=c,b=f}if(f){var k=(k=c[0]-a[0])*k+(k=c[1]-a[1])*k,l=q&&Math.sqrt(k/q);a=[(a[0]+c[0])/2,(a[1]+c[1])/2],b=[(b[0]+f[0])/2,(b[1]+f[1])/2],d(l*m)}r=null,e(a,b),h(o)}function l(){if(Sg.event.touches.length){for(var b=Sg.event.changedTouches,c=0,d=b.length;d>c;++c)delete p[b[c].identifier];for(var e in p)return void a()}Sg.selectAll(w).on(t,null),x.on(B,j).on(E,k),z(),i(o)}var m,n=this,o=F.of(n,arguments),p={},q=0,t=".zoom-"+Sg.event.changedTouches[0].identifier,u="touchmove"+t,v="touchend"+t,w=[],x=Sg.select(n).on(B,null).on(E,c),z=R();N.call(n),c(),g(o)}function l(){var a=F.of(this,arguments);q?clearTimeout(q):(N.call(this),g(a)),q=setTimeout(function(){q=null,i(a)},50),s();var c=p||Sg.mouse(this);o||(o=b(c)),d(Math.pow(2,.002*Gh())*y.k),e(c,o),h(a)}function m(){o=null}function n(){var a=F.of(this,arguments),c=Sg.mouse(this),f=b(c),j=Math.log(y.k)/Math.LN2;g(a),d(Math.pow(2,Sg.event.shiftKey?Math.ceil(j)-1:Math.floor(j)+1)),e(c,f),h(a),i(a)}var o,p,q,r,t,v,w,x,y={x:0,y:0,k:1},z=[960,500],A=Hh,B="mousedown.zoom",C="mousemove.zoom",D="mouseup.zoom",E="touchstart.zoom",F=u(a,"zoomstart","zoom","zoomend");return a.event=function(a){a.each(function(){var a=F.of(this,arguments),b=y;yj?Sg.select(this).transition().each("start.zoom",function(){y=this.__chart__||{x:0,y:0,k:1},g(a)}).tween("zoom:zoom",function(){var c=z[0],d=z[1],e=c/2,f=d/2,g=Sg.interpolateZoom([(e-y.x)/y.k,(f-y.y)/y.k,c/y.k],[(e-b.x)/b.k,(f-b.y)/b.k,c/b.k]);return function(b){var d=g(b),i=c/d[2];this.__chart__=y={x:e-d[0]*i,y:f-d[1]*i,k:i},h(a)}}).each("end.zoom",function(){i(a)}):(this.__chart__=y,g(a),h(a),i(a))})},a.translate=function(b){return arguments.length?(y={x:+b[0],y:+b[1],k:y.k},f(),a):[y.x,y.y]},a.scale=function(b){return arguments.length?(y={x:y.x,y:y.y,k:+b},f(),a):y.k},a.scaleExtent=function(b){return arguments.length?(A=null==b?Hh:[+b[0],+b[1]],a):A},a.center=function(b){return arguments.length?(p=b&&[+b[0],+b[1]],a):p},a.size=function(b){return arguments.length?(z=b&&[+b[0],+b[1]],a):z},a.x=function(b){return arguments.length?(v=b,t=b.copy(),y={x:0,y:0,k:1},a):v},a.y=function(b){return arguments.length?(x=b,w=b.copy(),y={x:0,y:0,k:1},a):x},Sg.rebind(a,F,"on")};var Gh,Hh=[0,1/0],Ih="onwheel"in Vg?(Gh=function(){return-Sg.event.deltaY*(Sg.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Vg?(Gh=function(){return Sg.event.wheelDelta},"mousewheel"):(Gh=function(){return-Sg.event.detail},"MozMousePixelScroll");Sg.color=cb,cb.prototype.toString=function(){return this.rgb()+""},Sg.hsl=db;var Jh=db.prototype=new cb;Jh.brighter=function(a){return a=Math.pow(.7,arguments.length?a:1),new db(this.h,this.s,this.l/a)},Jh.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),new db(this.h,this.s,a*this.l)},Jh.rgb=function(){return eb(this.h,this.s,this.l)},Sg.hcl=fb;var Kh=fb.prototype=new cb;Kh.brighter=function(a){return new fb(this.h,this.c,Math.min(100,this.l+Lh*(arguments.length?a:1)))},Kh.darker=function(a){return new fb(this.h,this.c,Math.max(0,this.l-Lh*(arguments.length?a:1)))},Kh.rgb=function(){return gb(this.h,this.c,this.l).rgb()},Sg.lab=hb;var Lh=18,Mh=.95047,Nh=1,Oh=1.08883,Ph=hb.prototype=new cb;Ph.brighter=function(a){return new hb(Math.min(100,this.l+Lh*(arguments.length?a:1)),this.a,this.b)},Ph.darker=function(a){return new hb(Math.max(0,this.l-Lh*(arguments.length?a:1)),this.a,this.b)},Ph.rgb=function(){return ib(this.l,this.a,this.b)},Sg.rgb=nb;var Qh=nb.prototype=new cb;Qh.brighter=function(a){a=Math.pow(.7,arguments.length?a:1);var b=this.r,c=this.g,d=this.b,e=30;return b||c||d?(b&&e>b&&(b=e),c&&e>c&&(c=e),d&&e>d&&(d=e),new nb(Math.min(255,b/a),Math.min(255,c/a),Math.min(255,d/a))):new nb(e,e,e)},Qh.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),new nb(a*this.r,a*this.g,a*this.b)},Qh.hsl=function(){return sb(this.r,this.g,this.b)},Qh.toString=function(){return"#"+qb(this.r)+qb(this.g)+qb(this.b)};var Rh=Sg.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Rh.forEach(function(a,b){Rh.set(a,ob(b))}),Sg.functor=wb,Sg.xhr=yb(xb),Sg.dsv=function(a,b){function c(a,c,f){arguments.length<3&&(f=c,c=null);var g=zb(a,b,null==c?d:e(c),f);return g.row=function(a){return arguments.length?g.response(null==(c=a)?d:e(a)):c},g}function d(a){return c.parse(a.responseText)}function e(a){return function(b){return c.parse(b.responseText,a)}}function f(b){return b.map(g).join(a)}function g(a){return h.test(a)?'"'+a.replace(/\"/g,'""')+'"':a}var h=new RegExp('["'+a+"\n]"),i=a.charCodeAt(0);return c.parse=function(a,b){var d;return c.parseRows(a,function(a,c){if(d)return d(a,c-1);var e=new Function("d","return {"+a.map(function(a,b){return JSON.stringify(a)+": d["+b+"]"}).join(",")+"}");d=b?function(a,c){return b(e(a),c)}:e})},c.parseRows=function(a,b){function c(){if(k>=j)return g;if(e)return e=!1,f;var b=k;if(34===a.charCodeAt(b)){for(var c=b;c++<j;)if(34===a.charCodeAt(c)){if(34!==a.charCodeAt(c+1))break;++c}k=c+2;var d=a.charCodeAt(c+1);return 13===d?(e=!0,10===a.charCodeAt(c+2)&&++k):10===d&&(e=!0),a.substring(b+1,c).replace(/""/g,'"')}for(;j>k;){var d=a.charCodeAt(k++),h=1;if(10===d)e=!0;else if(13===d)e=!0,10===a.charCodeAt(k)&&(++k,++h);else if(d!==i)continue;return a.substring(b,k-h)}return a.substring(b)}for(var d,e,f={},g={},h=[],j=a.length,k=0,l=0;(d=c())!==g;){for(var m=[];d!==f&&d!==g;)m.push(d),d=c();(!b||(m=b(m,l++)))&&h.push(m)}return h},c.format=function(b){if(Array.isArray(b[0]))return c.formatRows(b);var d=new m,e=[];return b.forEach(function(a){for(var b in a)d.has(b)||e.push(d.add(b))}),[e.map(g).join(a)].concat(b.map(function(b){return e.map(function(a){return g(b[a])}).join(a)})).join("\n")},c.formatRows=function(a){return a.map(f).join("\n")},c},Sg.csv=Sg.dsv(",","text/csv"),Sg.tsv=Sg.dsv("	","text/tab-separated-values"),Sg.touch=function(a,b,c){if(arguments.length<3&&(c=b,b=t().changedTouches),b)for(var d,e=0,f=b.length;f>e;++e)if((d=b[e]).identifier===c)return S(a,d)};var Sh,Th,Uh,Vh,Wh,Xh=Xg[o(Xg,"requestAnimationFrame")]||function(a){setTimeout(a,17)};Sg.timer=function(a,b,c){var d=arguments.length;2>d&&(b=0),3>d&&(c=Date.now());var e=c+b,f={c:a,t:e,f:!1,n:null};Th?Th.n=f:Sh=f,Th=f,Uh||(Vh=clearTimeout(Vh),Uh=1,Xh(Bb))},Sg.timer.flush=function(){Cb(),Db()},Sg.round=function(a,b){return b?Math.round(a*(b=Math.pow(10,b)))/b:Math.round(a)};var Yh=["y","z","a","f","p","n","?�","m","","k","M","G","T","P","E","Z","Y"].map(Fb);Sg.formatPrefix=function(a,b){var c=0;return a&&(0>a&&(a*=-1),b&&(a=Sg.round(a,Eb(a,b))),c=1+Math.floor(1e-12+Math.log(a)/Math.LN10),c=Math.max(-24,Math.min(24,3*Math.floor((c-1)/3)))),Yh[8+c/3]};var Zh=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,$h=Sg.map({b:function(a){return a.toString(2)},c:function(a){return String.fromCharCode(a)},o:function(a){return a.toString(8)},x:function(a){return a.toString(16)},X:function(a){return a.toString(16).toUpperCase()},g:function(a,b){return a.toPrecision(b)},e:function(a,b){return a.toExponential(b)},f:function(a,b){return a.toFixed(b)},r:function(a,b){return(a=Sg.round(a,Eb(a,b))).toFixed(Math.max(0,Math.min(20,Eb(a*(1+1e-15),b))))}}),_h=Sg.time={},ai=Date;Ib.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){bi.setUTCDate.apply(this._,arguments)},setDay:function(){bi.setUTCDay.apply(this._,arguments)},setFullYear:function(){bi.setUTCFullYear.apply(this._,arguments)},setHours:function(){bi.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){bi.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){bi.setUTCMinutes.apply(this._,arguments)},setMonth:function(){bi.setUTCMonth.apply(this._,arguments)},setSeconds:function(){bi.setUTCSeconds.apply(this._,arguments)},setTime:function(){bi.setTime.apply(this._,arguments)}};var bi=Date.prototype;_h.year=Jb(function(a){return a=_h.day(a),a.setMonth(0,1),a},function(a,b){a.setFullYear(a.getFullYear()+b)},function(a){return a.getFullYear()}),_h.years=_h.year.range,_h.years.utc=_h.year.utc.range,_h.day=Jb(function(a){var b=new ai(2e3,0);return b.setFullYear(a.getFullYear(),a.getMonth(),a.getDate()),b},function(a,b){a.setDate(a.getDate()+b)},function(a){return a.getDate()-1}),_h.days=_h.day.range,_h.days.utc=_h.day.utc.range,_h.dayOfYear=function(a){var b=_h.year(a);return Math.floor((a-b-6e4*(a.getTimezoneOffset()-b.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(a,b){b=7-b;var c=_h[a]=Jb(function(a){return(a=_h.day(a)).setDate(a.getDate()-(a.getDay()+b)%7),a},function(a,b){a.setDate(a.getDate()+7*Math.floor(b))},function(a){var c=_h.year(a).getDay();return Math.floor((_h.dayOfYear(a)+(c+b)%7)/7)-(c!==b)});_h[a+"s"]=c.range,_h[a+"s"].utc=c.utc.range,_h[a+"OfYear"]=function(a){var c=_h.year(a).getDay();return Math.floor((_h.dayOfYear(a)+(c+b)%7)/7)}}),_h.week=_h.sunday,_h.weeks=_h.sunday.range,_h.weeks.utc=_h.sunday.utc.range,_h.weekOfYear=_h.sundayOfYear;var ci={"-":"",_:" ",0:"0"},di=/^\s*\d+/,ei=/^%/;Sg.locale=function(a){return{numberFormat:Gb(a),timeFormat:Lb(a)}};var fi=Sg.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Sg.format=fi.numberFormat,Sg.geo={},ec.prototype={s:0,t:0,add:function(a){fc(a,this.t,gi),fc(gi.s,this.s,this),this.s?this.t+=gi.t:this.s=gi.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var gi=new ec;Sg.geo.stream=function(a,b){a&&hi.hasOwnProperty(a.type)?hi[a.type](a,b):gc(a,b)};var hi={Feature:function(a,b){gc(a.geometry,b)},FeatureCollection:function(a,b){for(var c=a.features,d=-1,e=c.length;++d<e;)gc(c[d].geometry,b)}},ii={Sphere:function(a,b){b.sphere()},Point:function(a,b){a=a.coordinates,b.point(a[0],a[1],a[2])},MultiPoint:function(a,b){for(var c=a.coordinates,d=-1,e=c.length;++d<e;)a=c[d],b.point(a[0],a[1],a[2])},LineString:function(a,b){hc(a.coordinates,b,0)},MultiLineString:function(a,b){for(var c=a.coordinates,d=-1,e=c.length;++d<e;)hc(c[d],b,0)},Polygon:function(a,b){ic(a.coordinates,b)},MultiPolygon:function(a,b){for(var c=a.coordinates,d=-1,e=c.length;++d<e;)ic(c[d],b)},GeometryCollection:function(a,b){for(var c=a.geometries,d=-1,e=c.length;++d<e;)gc(c[d],b)}};Sg.geo.area=function(a){return ji=0,Sg.geo.stream(a,li),ji};var ji,ki=new ec,li={sphere:function(){ji+=4*wh},point:p,lineStart:p,lineEnd:p,polygonStart:function(){ki.reset(),li.lineStart=jc},polygonEnd:function(){var a=2*ki;ji+=0>a?4*wh+a:a,li.lineStart=li.lineEnd=li.point=p}};Sg.geo.bounds=function(){function a(a,b){t.push(u=[k=a,m=a]),l>b&&(l=b),b>n&&(n=b)}function b(b,c){var d=kc([b*Bh,c*Bh]);if(r){var e=mc(r,d),f=[e[1],-e[0],0],g=mc(f,e);pc(g),g=qc(g);var i=b-o,j=i>0?1:-1,p=g[0]*Ch*j,q=eh(i)>180;if(q^(p>j*o&&j*b>p)){var s=g[1]*Ch;s>n&&(n=s)}else if(p=(p+360)%360-180,q^(p>j*o&&j*b>p)){var s=-g[1]*Ch;l>s&&(l=s)}else l>c&&(l=c),c>n&&(n=c);q?o>b?h(k,b)>h(k,m)&&(m=b):h(b,m)>h(k,m)&&(k=b):m>=k?(k>b&&(k=b),b>m&&(m=b)):b>o?h(k,b)>h(k,m)&&(m=b):h(b,m)>h(k,m)&&(k=b)}else a(b,c);r=d,o=b}function c(){v.point=b}function d(){u[0]=k,u[1]=m,v.point=a,r=null}function e(a,c){if(r){var d=a-o;s+=eh(d)>180?d+(d>0?360:-360):d}else p=a,q=c;li.point(a,c),b(a,c)}function f(){li.lineStart()}function g(){e(p,q),li.lineEnd(),eh(s)>zh&&(k=-(m=180)),u[0]=k,u[1]=m,r=null}function h(a,b){return(b-=a)<0?b+360:b}function i(a,b){return a[0]-b[0]}function j(a,b){return b[0]<=b[1]?b[0]<=a&&a<=b[1]:a<b[0]||b[1]<a}var k,l,m,n,o,p,q,r,s,t,u,v={point:a,lineStart:c,lineEnd:d,polygonStart:function(){v.point=e,v.lineStart=f,v.lineEnd=g,s=0,li.polygonStart()},polygonEnd:function(){li.polygonEnd(),v.point=a,v.lineStart=c,v.lineEnd=d,0>ki?(k=-(m=180),l=-(n=90)):s>zh?n=90:-zh>s&&(l=-90),u[0]=k,u[1]=m}};return function(a){n=m=-(k=l=1/0),t=[],Sg.geo.stream(a,v);var b=t.length;if(b){t.sort(i);for(var c,d=1,e=t[0],f=[e];b>d;++d)c=t[d],j(c[0],e)||j(c[1],e)?(h(e[0],c[1])>h(e[0],e[1])&&(e[1]=c[1]),h(c[0],e[1])>h(e[0],e[1])&&(e[0]=c[0])):f.push(e=c);for(var g,c,o=-1/0,b=f.length-1,d=0,e=f[b];b>=d;e=c,++d)c=f[d],(g=h(e[1],c[0]))>o&&(o=g,k=c[0],m=e[1])}return t=u=null,1/0===k||1/0===l?[[0/0,0/0],[0/0,0/0]]:[[k,l],[m,n]]}}(),Sg.geo.centroid=function(a){mi=ni=oi=pi=qi=ri=si=ti=ui=vi=wi=0,Sg.geo.stream(a,xi);var b=ui,c=vi,d=wi,e=b*b+c*c+d*d;return Ah>e&&(b=ri,c=si,d=ti,zh>ni&&(b=oi,c=pi,d=qi),e=b*b+c*c+d*d,Ah>e)?[0/0,0/0]:[Math.atan2(c,b)*Ch,Z(d/Math.sqrt(e))*Ch]};var mi,ni,oi,pi,qi,ri,si,ti,ui,vi,wi,xi={sphere:p,point:sc,lineStart:uc,lineEnd:vc,polygonStart:function(){xi.lineStart=wc},polygonEnd:function(){xi.lineStart=uc}},yi=Bc(xc,Gc,Ic,[-wh,-wh/2]),zi=1e9;Sg.geo.clipExtent=function(){var a,b,c,d,e,f,g={stream:function(a){return e&&(e.valid=!1),e=f(a),e.valid=!0,e},extent:function(h){return arguments.length?(f=Lc(a=+h[0][0],b=+h[0][1],c=+h[1][0],d=+h[1][1]),e&&(e.valid=!1,e=null),g):[[a,b],[c,d]]}};return g.extent([[0,0],[960,500]])},(Sg.geo.conicEqualArea=function(){return Nc(Oc)}).raw=Oc,Sg.geo.albers=function(){return Sg.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Sg.geo.albersUsa=function(){function a(a){var f=a[0],g=a[1];return b=null,c(f,g),b||(d(f,g),b)||e(f,g),b}var b,c,d,e,f=Sg.geo.albers(),g=Sg.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),h=Sg.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),i={point:function(a,c){b=[a,c]}};return a.invert=function(a){var b=f.scale(),c=f.translate(),d=(a[0]-c[0])/b,e=(a[1]-c[1])/b;return(e>=.12&&.234>e&&d>=-.425&&-.214>d?g:e>=.166&&.234>e&&d>=-.214&&-.115>d?h:f).invert(a)},a.stream=function(a){var b=f.stream(a),c=g.stream(a),d=h.stream(a);return{point:function(a,e){b.point(a,e),c.point(a,e),d.point(a,e)},sphere:function(){b.sphere(),c.sphere(),d.sphere()},lineStart:function(){b.lineStart(),c.lineStart(),d.lineStart()},lineEnd:function(){b.lineEnd(),c.lineEnd(),d.lineEnd()},polygonStart:function(){b.polygonStart(),c.polygonStart(),d.polygonStart()},polygonEnd:function(){b.polygonEnd(),c.polygonEnd(),d.polygonEnd()}}},a.precision=function(b){return arguments.length?(f.precision(b),g.precision(b),h.precision(b),a):f.precision()},a.scale=function(b){return arguments.length?(f.scale(b),g.scale(.35*b),h.scale(b),a.translate(f.translate())):f.scale()},a.translate=function(b){if(!arguments.length)return f.translate();var j=f.scale(),k=+b[0],l=+b[1];return c=f.translate(b).clipExtent([[k-.455*j,l-.238*j],[k+.455*j,l+.238*j]]).stream(i).point,d=g.translate([k-.307*j,l+.201*j]).clipExtent([[k-.425*j+zh,l+.12*j+zh],[k-.214*j-zh,l+.234*j-zh]]).stream(i).point,e=h.translate([k-.205*j,l+.212*j]).clipExtent([[k-.214*j+zh,l+.166*j+zh],[k-.115*j-zh,l+.234*j-zh]]).stream(i).point,a},a.scale(1070)};var Ai,Bi,Ci,Di,Ei,Fi,Gi={point:p,lineStart:p,lineEnd:p,polygonStart:function(){Bi=0,Gi.lineStart=Pc},polygonEnd:function(){Gi.lineStart=Gi.lineEnd=Gi.point=p,Ai+=eh(Bi/2)}},Hi={point:Qc,lineStart:p,lineEnd:p,polygonStart:p,polygonEnd:p},Ii={point:Tc,lineStart:Uc,lineEnd:Vc,polygonStart:function(){Ii.lineStart=Wc},polygonEnd:function(){Ii.point=Tc,Ii.lineStart=Uc,Ii.lineEnd=Vc}};Sg.geo.path=function(){function a(a){return a&&("function"==typeof h&&f.pointRadius(+h.apply(this,arguments)),g&&g.valid||(g=e(f)),Sg.geo.stream(a,g)),f.result()}function b(){return g=null,a}var c,d,e,f,g,h=4.5;return a.area=function(a){return Ai=0,Sg.geo.stream(a,e(Gi)),Ai},a.centroid=function(a){return oi=pi=qi=ri=si=ti=ui=vi=wi=0,Sg.geo.stream(a,e(Ii)),wi?[ui/wi,vi/wi]:ti?[ri/ti,si/ti]:qi?[oi/qi,pi/qi]:[0/0,0/0]},a.bounds=function(a){return Ei=Fi=-(Ci=Di=1/0),Sg.geo.stream(a,e(Hi)),[[Ci,Di],[Ei,Fi]]},a.projection=function(a){return arguments.length?(e=(c=a)?a.stream||Zc(a):xb,b()):c},a.context=function(a){return arguments.length?(f=null==(d=a)?new Rc:new Xc(a),"function"!=typeof h&&f.pointRadius(h),b()):d},a.pointRadius=function(b){return arguments.length?(h="function"==typeof b?b:(f.pointRadius(+b),+b),a):h},a.projection(Sg.geo.albersUsa()).context(null)},Sg.geo.transform=function(a){return{stream:function(b){var c=new $c(b);for(var d in a)c[d]=a[d];return c}}},$c.prototype={point:function(a,b){this.stream.point(a,b)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Sg.geo.projection=ad,Sg.geo.projectionMutator=bd,(Sg.geo.equirectangular=function(){return ad(dd)}).raw=dd.invert=dd,Sg.geo.rotation=function(a){function b(b){return b=a(b[0]*Bh,b[1]*Bh),b[0]*=Ch,b[1]*=Ch,b}return a=fd(a[0]%360*Bh,a[1]*Bh,a.length>2?a[2]*Bh:0),b.invert=function(b){return b=a.invert(b[0]*Bh,b[1]*Bh),b[0]*=Ch,b[1]*=Ch,b},b},ed.invert=dd,Sg.geo.circle=function(){function a(){var a="function"==typeof d?d.apply(this,arguments):d,b=fd(-a[0]*Bh,-a[1]*Bh,0).invert,e=[];return c(null,null,1,{point:function(a,c){e.push(a=b(a,c)),a[0]*=Ch,a[1]*=Ch}}),{type:"Polygon",coordinates:[e]}}var b,c,d=[0,0],e=6;return a.origin=function(b){return arguments.length?(d=b,a):d},a.angle=function(d){return arguments.length?(c=jd((b=+d)*Bh,e*Bh),a):b},a.precision=function(d){return arguments.length?(c=jd(b*Bh,(e=+d)*Bh),a):e},a.angle(90)},Sg.geo.distance=function(a,b){var c,d=(b[0]-a[0])*Bh,e=a[1]*Bh,f=b[1]*Bh,g=Math.sin(d),h=Math.cos(d),i=Math.sin(e),j=Math.cos(e),k=Math.sin(f),l=Math.cos(f);return Math.atan2(Math.sqrt((c=l*g)*c+(c=j*k-i*l*h)*c),i*k+j*l*h)},Sg.geo.graticule=function(){function a(){return{type:"MultiLineString",coordinates:b()}}function b(){return Sg.range(Math.ceil(f/q)*q,e,q).map(m).concat(Sg.range(Math.ceil(j/r)*r,i,r).map(n)).concat(Sg.range(Math.ceil(d/o)*o,c,o).filter(function(a){return eh(a%q)>zh}).map(k)).concat(Sg.range(Math.ceil(h/p)*p,g,p).filter(function(a){return eh(a%r)>zh}).map(l))}var c,d,e,f,g,h,i,j,k,l,m,n,o=10,p=o,q=90,r=360,s=2.5;return a.lines=function(){return b().map(function(a){return{type:"LineString",coordinates:a}})},a.outline=function(){return{type:"Polygon",coordinates:[m(f).concat(n(i).slice(1),m(e).reverse().slice(1),n(j).reverse().slice(1))]}},a.extent=function(b){return arguments.length?a.majorExtent(b).minorExtent(b):a.minorExtent()},a.majorExtent=function(b){return arguments.length?(f=+b[0][0],e=+b[1][0],j=+b[0][1],i=+b[1][1],f>e&&(b=f,f=e,e=b),j>i&&(b=j,j=i,i=b),a.precision(s)):[[f,j],[e,i]]},a.minorExtent=function(b){return arguments.length?(d=+b[0][0],c=+b[1][0],h=+b[0][1],g=+b[1][1],d>c&&(b=d,d=c,c=b),h>g&&(b=h,h=g,g=b),a.precision(s)):[[d,h],[c,g]]},a.step=function(b){return arguments.length?a.majorStep(b).minorStep(b):a.minorStep()},a.majorStep=function(b){return arguments.length?(q=+b[0],r=+b[1],a):[q,r]},a.minorStep=function(b){return arguments.length?(o=+b[0],p=+b[1],a):[o,p]},a.precision=function(b){return arguments.length?(s=+b,k=ld(h,g,90),l=md(d,c,s),m=ld(j,i,90),n=md(f,e,s),a):s},a.majorExtent([[-180,-90+zh],[180,90-zh]]).minorExtent([[-180,-80-zh],[180,80+zh]])},Sg.geo.greatArc=function(){function a(){return{type:"LineString",coordinates:[b||d.apply(this,arguments),c||e.apply(this,arguments)]}}var b,c,d=nd,e=od;return a.distance=function(){return Sg.geo.distance(b||d.apply(this,arguments),c||e.apply(this,arguments))},a.source=function(c){return arguments.length?(d=c,b="function"==typeof c?null:c,a):d},a.target=function(b){return arguments.length?(e=b,c="function"==typeof b?null:b,a):e},a.precision=function(){return arguments.length?a:0},a},Sg.geo.interpolate=function(a,b){return pd(a[0]*Bh,a[1]*Bh,b[0]*Bh,b[1]*Bh)},Sg.geo.length=function(a){return Ji=0,Sg.geo.stream(a,Ki),Ji};var Ji,Ki={sphere:p,point:p,lineStart:qd,lineEnd:p,polygonStart:p,polygonEnd:p},Li=rd(function(a){return Math.sqrt(2/(1+a))},function(a){return 2*Math.asin(a/2)});(Sg.geo.azimuthalEqualArea=function(){return ad(Li)}).raw=Li;var Mi=rd(function(a){var b=Math.acos(a);return b&&b/Math.sin(b)},xb);(Sg.geo.azimuthalEquidistant=function(){return ad(Mi)}).raw=Mi,(Sg.geo.conicConformal=function(){return Nc(sd)}).raw=sd,(Sg.geo.conicEquidistant=function(){return Nc(td)}).raw=td;var Ni=rd(function(a){return 1/a},Math.atan);(Sg.geo.gnomonic=function(){return ad(Ni)}).raw=Ni,ud.invert=function(a,b){return[a,2*Math.atan(Math.exp(b))-yh]},(Sg.geo.mercator=function(){return vd(ud)}).raw=ud;var Oi=rd(function(){return 1},Math.asin);(Sg.geo.orthographic=function(){return ad(Oi)}).raw=Oi;var Pi=rd(function(a){return 1/(1+a)},function(a){return 2*Math.atan(a)});(Sg.geo.stereographic=function(){return ad(Pi)}).raw=Pi,wd.invert=function(a,b){return[-b,2*Math.atan(Math.exp(a))-yh]},(Sg.geo.transverseMercator=function(){var a=vd(wd),b=a.center,c=a.rotate;return a.center=function(a){return a?b([-a[1],a[0]]):(a=b(),[-a[1],a[0]])},a.rotate=function(a){return a?c([a[0],a[1],a.length>2?a[2]+90:90]):(a=c(),[a[0],a[1],a[2]-90])},a.rotate([0,0])}).raw=wd,Sg.geom={},Sg.geom.hull=function(a){function b(a){if(a.length<3)return[];var b,e=wb(c),f=wb(d),g=a.length,h=[],i=[];for(b=0;g>b;b++)h.push([+e.call(this,a[b],b),+f.call(this,a[b],b),b]);for(h.sort(Ad),b=0;g>b;b++)i.push([h[b][0],-h[b][1]]);var j=zd(h),k=zd(i),l=k[0]===j[0],m=k[k.length-1]===j[j.length-1],n=[];for(b=j.length-1;b>=0;--b)n.push(a[h[j[b]][2]]);for(b=+l;b<k.length-m;++b)n.push(a[h[k[b]][2]]);return n}var c=xd,d=yd;return arguments.length?b(a):(b.x=function(a){return arguments.length?(c=a,b):c},b.y=function(a){return arguments.length?(d=a,b):d},b)},Sg.geom.polygon=function(a){return jh(a,Qi),a};var Qi=Sg.geom.polygon.prototype=[];Qi.area=function(){for(var a,b=-1,c=this.length,d=this[c-1],e=0;++b<c;)a=d,d=this[b],e+=a[1]*d[0]-a[0]*d[1];return.5*e},Qi.centroid=function(a){var b,c,d=-1,e=this.length,f=0,g=0,h=this[e-1];for(arguments.length||(a=-1/(6*this.area()));++d<e;)b=h,h=this[d],c=b[0]*h[1]-h[0]*b[1],f+=(b[0]+h[0])*c,g+=(b[1]+h[1])*c;return[f*a,g*a]},Qi.clip=function(a){for(var b,c,d,e,f,g,h=Dd(a),i=-1,j=this.length-Dd(this),k=this[j-1];++i<j;){for(b=a.slice(),a.length=0,e=this[i],f=b[(d=b.length-h)-1],c=-1;++c<d;)g=b[c],Bd(g,k,e)?(Bd(f,k,e)||a.push(Cd(f,g,k,e)),a.push(g)):Bd(f,k,e)&&a.push(Cd(f,g,k,e)),f=g;h&&a.push(a[0]),k=e}return a};var Ri,Si,Ti,Ui,Vi,Wi=[],Xi=[];Ld.prototype.prepare=function(){for(var a,b=this.edges,c=b.length;c--;)a=b[c].edge,a.b&&a.a||b.splice(c,1);return b.sort(Nd),b.length},Xd.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},Yd.prototype={insert:function(a,b){var c,d,e;if(a){if(b.P=a,b.N=a.N,a.N&&(a.N.P=b),a.N=b,a.R){for(a=a.R;a.L;)a=a.L;a.L=b}else a.R=b;c=a}else this._?(a=ae(this._),b.P=null,b.N=a,a.P=a.L=b,c=a):(b.P=b.N=null,this._=b,c=null);for(b.L=b.R=null,b.U=c,b.C=!0,a=b;c&&c.C;)d=c.U,c===d.L?(e=d.R,e&&e.C?(c.C=e.C=!1,d.C=!0,a=d):(a===c.R&&($d(this,c),a=c,c=a.U),c.C=!1,d.C=!0,_d(this,d))):(e=d.L,e&&e.C?(c.C=e.C=!1,d.C=!0,a=d):(a===c.L&&(_d(this,c),a=c,c=a.U),c.C=!1,d.C=!0,$d(this,d))),c=a.U;this._.C=!1},remove:function(a){a.N&&(a.N.P=a.P),a.P&&(a.P.N=a.N),a.N=a.P=null;var b,c,d,e=a.U,f=a.L,g=a.R;if(c=f?g?ae(g):f:g,e?e.L===a?e.L=c:e.R=c:this._=c,f&&g?(d=c.C,c.C=a.C,c.L=f,f.U=c,c!==g?(e=c.U,c.U=a.U,a=c.R,e.L=a,c.R=g,g.U=c):(c.U=e,e=c,a=c.R)):(d=a.C,a=c),a&&(a.U=e),!d){if(a&&a.C)return void(a.C=!1);do{if(a===this._)break;if(a===e.L){if(b=e.R,b.C&&(b.C=!1,e.C=!0,$d(this,e),b=e.R),b.L&&b.L.C||b.R&&b.R.C){b.R&&b.R.C||(b.L.C=!1,b.C=!0,_d(this,b),b=e.R),b.C=e.C,e.C=b.R.C=!1,$d(this,e),a=this._;break}}else if(b=e.L,b.C&&(b.C=!1,e.C=!0,_d(this,e),b=e.L),b.L&&b.L.C||b.R&&b.R.C){b.L&&b.L.C||(b.R.C=!1,b.C=!0,$d(this,b),b=e.L),b.C=e.C,e.C=b.L.C=!1,_d(this,e),a=this._;break}b.C=!0,a=e,e=e.U}while(!a.C);a&&(a.C=!1)}}},Sg.geom.voronoi=function(a){function b(a){var b=new Array(a.length),d=h[0][0],e=h[0][1],f=h[1][0],g=h[1][1];return be(c(a),h).cells.forEach(function(c,h){var i=c.edges,j=c.site,k=b[h]=i.length?i.map(function(a){var b=a.start();return[b.x,b.y]}):j.x>=d&&j.x<=f&&j.y>=e&&j.y<=g?[[d,g],[f,g],[f,e],[d,e]]:[];k.point=a[h]}),b}function c(a){return a.map(function(a,b){return{x:Math.round(f(a,b)/zh)*zh,y:Math.round(g(a,b)/zh)*zh,i:b}})}var d=xd,e=yd,f=d,g=e,h=Yi;return a?b(a):(b.links=function(a){return be(c(a)).edges.filter(function(a){return a.l&&a.r}).map(function(b){return{source:a[b.l.i],target:a[b.r.i]}})},b.triangles=function(a){var b=[];return be(c(a)).cells.forEach(function(c,d){for(var e,f,g=c.site,h=c.edges.sort(Nd),i=-1,j=h.length,k=h[j-1].edge,l=k.l===g?k.r:k.l;++i<j;)e=k,f=l,k=h[i].edge,l=k.l===g?k.r:k.l,d<f.i&&d<l.i&&de(g,f,l)<0&&b.push([a[d],a[f.i],a[l.i]])}),b},b.x=function(a){return arguments.length?(f=wb(d=a),b):d},b.y=function(a){return arguments.length?(g=wb(e=a),b):e},b.clipExtent=function(a){return arguments.length?(h=null==a?Yi:a,b):h===Yi?null:h},b.size=function(a){return arguments.length?b.clipExtent(a&&[[0,0],a]):h===Yi?null:h&&h[1]},b)};var Yi=[[-1e6,-1e6],[1e6,1e6]];Sg.geom.delaunay=function(a){return Sg.geom.voronoi().triangles(a)},Sg.geom.quadtree=function(a,b,c,d,e){function f(a){function f(a,b,c,d,e,f,g,h){if(!isNaN(c)&&!isNaN(d))if(a.leaf){var i=a.x,k=a.y;if(null!=i)if(eh(i-c)+eh(k-d)<.01)j(a,b,c,d,e,f,g,h);else{var l=a.point;a.x=a.y=a.point=null,j(a,l,i,k,e,f,g,h),j(a,b,c,d,e,f,g,h)}else a.x=c,a.y=d,a.point=b}else j(a,b,c,d,e,f,g,h)}function j(a,b,c,d,e,g,h,i){var j=.5*(e+h),k=.5*(g+i),l=c>=j,m=d>=k,n=(m<<1)+l;a.leaf=!1,a=a.nodes[n]||(a.nodes[n]=ge()),l?e=j:h=j,m?g=k:i=k,f(a,b,c,d,e,g,h,i)}var k,l,m,n,o,p,q,r,s,t=wb(h),u=wb(i);if(null!=b)p=b,q=c,r=d,s=e;else if(r=s=-(p=q=1/0),l=[],m=[],o=a.length,g)for(n=0;o>n;++n)k=a[n],k.x<p&&(p=k.x),k.y<q&&(q=k.y),k.x>r&&(r=k.x),k.y>s&&(s=k.y),l.push(k.x),m.push(k.y);else for(n=0;o>n;++n){var v=+t(k=a[n],n),w=+u(k,n);p>v&&(p=v),q>w&&(q=w),v>r&&(r=v),w>s&&(s=w),l.push(v),m.push(w)}var x=r-p,y=s-q;x>y?s=q+x:r=p+y;var z=ge();if(z.add=function(a){f(z,a,+t(a,++n),+u(a,n),p,q,r,s)},z.visit=function(a){he(a,z,p,q,r,s)},n=-1,null==b){for(;++n<o;)f(z,a[n],l[n],m[n],p,q,r,s);--n}else a.forEach(z.add);return l=m=a=k=null,z}var g,h=xd,i=yd;return(g=arguments.length)?(h=ee,i=fe,3===g&&(e=c,d=b,c=b=0),f(a)):(f.x=function(a){return arguments.length?(h=a,f):h},f.y=function(a){return arguments.length?(i=a,f):i},f.extent=function(a){return arguments.length?(null==a?b=c=d=e=null:(b=+a[0][0],c=+a[0][1],d=+a[1][0],e=+a[1][1]),f):null==b?null:[[b,c],[d,e]]},f.size=function(a){return arguments.length?(null==a?b=c=d=e=null:(b=c=0,d=+a[0],e=+a[1]),f):null==b?null:[d-b,e-c]},f)},Sg.interpolateRgb=ie,Sg.interpolateObject=je,Sg.interpolateNumber=ke,Sg.interpolateString=le;var Zi=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,$i=new RegExp(Zi.source,"g");Sg.interpolate=me,Sg.interpolators=[function(a,b){var c=typeof b;return("string"===c?Rh.has(b)||/^(#|rgb\(|hsl\()/.test(b)?ie:le:b instanceof cb?ie:Array.isArray(b)?ne:"object"===c&&isNaN(b)?je:ke)(a,b)}],Sg.interpolateArray=ne;var _i=function(){return xb},aj=Sg.map({linear:_i,poly:ue,quad:function(){return re},cubic:function(){return se},sin:function(){return ve},exp:function(){return we},circle:function(){return xe},elastic:ye,back:ze,bounce:function(){return Ae}}),bj=Sg.map({"in":xb,out:pe,"in-out":qe,"out-in":function(a){return qe(pe(a))}});Sg.ease=function(a){var b=a.indexOf("-"),c=b>=0?a.substring(0,b):a,d=b>=0?a.substring(b+1):"in";
return c=aj.get(c)||_i,d=bj.get(d)||xb,oe(d(c.apply(null,Tg.call(arguments,1))))},Sg.interpolateHcl=Be,Sg.interpolateHsl=Ce,Sg.interpolateLab=De,Sg.interpolateRound=Ee,Sg.transform=function(a){var b=Vg.createElementNS(Sg.ns.prefix.svg,"g");return(Sg.transform=function(a){if(null!=a){b.setAttribute("transform",a);var c=b.transform.baseVal.consolidate()}return new Fe(c?c.matrix:cj)})(a)},Fe.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var cj={a:1,b:0,c:0,d:1,e:0,f:0};Sg.interpolateTransform=Je,Sg.layout={},Sg.layout.bundle=function(){return function(a){for(var b=[],c=-1,d=a.length;++c<d;)b.push(Me(a[c]));return b}},Sg.layout.chord=function(){function a(){var a,j,l,m,n,o={},p=[],q=Sg.range(f),r=[];for(c=[],d=[],a=0,m=-1;++m<f;){for(j=0,n=-1;++n<f;)j+=e[m][n];p.push(j),r.push(Sg.range(f)),a+=j}for(g&&q.sort(function(a,b){return g(p[a],p[b])}),h&&r.forEach(function(a,b){a.sort(function(a,c){return h(e[b][a],e[b][c])})}),a=(xh-k*f)/a,j=0,m=-1;++m<f;){for(l=j,n=-1;++n<f;){var s=q[m],t=r[s][n],u=e[s][t],v=j,w=j+=u*a;o[s+"-"+t]={index:s,subindex:t,startAngle:v,endAngle:w,value:u}}d[s]={index:s,startAngle:l,endAngle:j,value:(j-l)/a},j+=k}for(m=-1;++m<f;)for(n=m-1;++n<f;){var x=o[m+"-"+n],y=o[n+"-"+m];(x.value||y.value)&&c.push(x.value<y.value?{source:y,target:x}:{source:x,target:y})}i&&b()}function b(){c.sort(function(a,b){return i((a.source.value+a.target.value)/2,(b.source.value+b.target.value)/2)})}var c,d,e,f,g,h,i,j={},k=0;return j.matrix=function(a){return arguments.length?(f=(e=a)&&e.length,c=d=null,j):e},j.padding=function(a){return arguments.length?(k=a,c=d=null,j):k},j.sortGroups=function(a){return arguments.length?(g=a,c=d=null,j):g},j.sortSubgroups=function(a){return arguments.length?(h=a,c=null,j):h},j.sortChords=function(a){return arguments.length?(i=a,c&&b(),j):i},j.chords=function(){return c||a(),c},j.groups=function(){return d||a(),d},j},Sg.layout.force=function(){function a(a){return function(b,c,d,e){if(b.point!==a){var f=b.cx-a.x,g=b.cy-a.y,h=e-c,i=f*f+g*g;if(i>h*h/q){if(o>i){var j=b.charge/i;a.px-=f*j,a.py-=g*j}return!0}if(b.point&&i&&o>i){var j=b.pointCharge/i;a.px-=f*j,a.py-=g*j}}return!b.charge}}function b(a){a.px=Sg.event.x,a.py=Sg.event.y,h.resume()}var c,d,e,f,g,h={},i=Sg.dispatch("start","tick","end"),j=[1,1],k=.9,l=dj,m=ej,n=-30,o=fj,p=.1,q=.64,r=[],s=[];return h.tick=function(){if((d*=.99)<.005)return i.end({type:"end",alpha:d=0}),!0;var b,c,h,l,m,o,q,t,u,v=r.length,w=s.length;for(c=0;w>c;++c)h=s[c],l=h.source,m=h.target,t=m.x-l.x,u=m.y-l.y,(o=t*t+u*u)&&(o=d*f[c]*((o=Math.sqrt(o))-e[c])/o,t*=o,u*=o,m.x-=t*(q=l.weight/(m.weight+l.weight)),m.y-=u*q,l.x+=t*(q=1-q),l.y+=u*q);if((q=d*p)&&(t=j[0]/2,u=j[1]/2,c=-1,q))for(;++c<v;)h=r[c],h.x+=(t-h.x)*q,h.y+=(u-h.y)*q;if(n)for(Te(b=Sg.geom.quadtree(r),d,g),c=-1;++c<v;)(h=r[c]).fixed||b.visit(a(h));for(c=-1;++c<v;)h=r[c],h.fixed?(h.x=h.px,h.y=h.py):(h.x-=(h.px-(h.px=h.x))*k,h.y-=(h.py-(h.py=h.y))*k);i.tick({type:"tick",alpha:d})},h.nodes=function(a){return arguments.length?(r=a,h):r},h.links=function(a){return arguments.length?(s=a,h):s},h.size=function(a){return arguments.length?(j=a,h):j},h.linkDistance=function(a){return arguments.length?(l="function"==typeof a?a:+a,h):l},h.distance=h.linkDistance,h.linkStrength=function(a){return arguments.length?(m="function"==typeof a?a:+a,h):m},h.friction=function(a){return arguments.length?(k=+a,h):k},h.charge=function(a){return arguments.length?(n="function"==typeof a?a:+a,h):n},h.chargeDistance=function(a){return arguments.length?(o=a*a,h):Math.sqrt(o)},h.gravity=function(a){return arguments.length?(p=+a,h):p},h.theta=function(a){return arguments.length?(q=a*a,h):Math.sqrt(q)},h.alpha=function(a){return arguments.length?(a=+a,d?d=a>0?a:0:a>0&&(i.start({type:"start",alpha:d=a}),Sg.timer(h.tick)),h):d},h.start=function(){function a(a,d){if(!c){for(c=new Array(i),h=0;i>h;++h)c[h]=[];for(h=0;j>h;++h){var e=s[h];c[e.source.index].push(e.target),c[e.target.index].push(e.source)}}for(var f,g=c[b],h=-1,j=g.length;++h<j;)if(!isNaN(f=g[h][a]))return f;return Math.random()*d}var b,c,d,i=r.length,k=s.length,o=j[0],p=j[1];for(b=0;i>b;++b)(d=r[b]).index=b,d.weight=0;for(b=0;k>b;++b)d=s[b],"number"==typeof d.source&&(d.source=r[d.source]),"number"==typeof d.target&&(d.target=r[d.target]),++d.source.weight,++d.target.weight;for(b=0;i>b;++b)d=r[b],isNaN(d.x)&&(d.x=a("x",o)),isNaN(d.y)&&(d.y=a("y",p)),isNaN(d.px)&&(d.px=d.x),isNaN(d.py)&&(d.py=d.y);if(e=[],"function"==typeof l)for(b=0;k>b;++b)e[b]=+l.call(this,s[b],b);else for(b=0;k>b;++b)e[b]=l;if(f=[],"function"==typeof m)for(b=0;k>b;++b)f[b]=+m.call(this,s[b],b);else for(b=0;k>b;++b)f[b]=m;if(g=[],"function"==typeof n)for(b=0;i>b;++b)g[b]=+n.call(this,r[b],b);else for(b=0;i>b;++b)g[b]=n;return h.resume()},h.resume=function(){return h.alpha(.1)},h.stop=function(){return h.alpha(0)},h.drag=function(){return c||(c=Sg.behavior.drag().origin(xb).on("dragstart.force",Pe).on("drag.force",b).on("dragend.force",Qe)),arguments.length?void this.on("mouseover.force",Re).on("mouseout.force",Se).call(c):c},Sg.rebind(h,i,"on")};var dj=20,ej=1,fj=1/0;Sg.layout.hierarchy=function(){function a(e){var f,g=[e],h=[];for(e.depth=0;null!=(f=g.pop());)if(h.push(f),(j=c.call(a,f,f.depth))&&(i=j.length)){for(var i,j,k;--i>=0;)g.push(k=j[i]),k.parent=f,k.depth=f.depth+1;d&&(f.value=0),f.children=j}else d&&(f.value=+d.call(a,f,f.depth)||0),delete f.children;return We(e,function(a){var c,e;b&&(c=a.children)&&c.sort(b),d&&(e=a.parent)&&(e.value+=a.value)}),h}var b=Ze,c=Xe,d=Ye;return a.sort=function(c){return arguments.length?(b=c,a):b},a.children=function(b){return arguments.length?(c=b,a):c},a.value=function(b){return arguments.length?(d=b,a):d},a.revalue=function(b){return d&&(Ve(b,function(a){a.children&&(a.value=0)}),We(b,function(b){var c;b.children||(b.value=+d.call(a,b,b.depth)||0),(c=b.parent)&&(c.value+=b.value)})),b},a},Sg.layout.partition=function(){function a(b,c,d,e){var f=b.children;if(b.x=c,b.y=b.depth*e,b.dx=d,b.dy=e,f&&(g=f.length)){var g,h,i,j=-1;for(d=b.value?d/b.value:0;++j<g;)a(h=f[j],c,i=h.value*d,e),c+=i}}function b(a){var c=a.children,d=0;if(c&&(e=c.length))for(var e,f=-1;++f<e;)d=Math.max(d,b(c[f]));return 1+d}function c(c,f){var g=d.call(this,c,f);return a(g[0],0,e[0],e[1]/b(g[0])),g}var d=Sg.layout.hierarchy(),e=[1,1];return c.size=function(a){return arguments.length?(e=a,c):e},Ue(c,d)},Sg.layout.pie=function(){function a(f){var g=f.map(function(c,d){return+b.call(a,c,d)}),h=+("function"==typeof d?d.apply(this,arguments):d),i=(("function"==typeof e?e.apply(this,arguments):e)-h)/Sg.sum(g),j=Sg.range(f.length);null!=c&&j.sort(c===gj?function(a,b){return g[b]-g[a]}:function(a,b){return c(f[a],f[b])});var k=[];return j.forEach(function(a){var b;k[a]={data:f[a],value:b=g[a],startAngle:h,endAngle:h+=b*i}}),k}var b=Number,c=gj,d=0,e=xh;return a.value=function(c){return arguments.length?(b=c,a):b},a.sort=function(b){return arguments.length?(c=b,a):c},a.startAngle=function(b){return arguments.length?(d=b,a):d},a.endAngle=function(b){return arguments.length?(e=b,a):e},a};var gj={};Sg.layout.stack=function(){function a(h,i){var j=h.map(function(c,d){return b.call(a,c,d)}),k=j.map(function(b){return b.map(function(b,c){return[f.call(a,b,c),g.call(a,b,c)]})}),l=c.call(a,k,i);j=Sg.permute(j,l),k=Sg.permute(k,l);var m,n,o,p=d.call(a,k,i),q=j.length,r=j[0].length;for(n=0;r>n;++n)for(e.call(a,j[0][n],o=p[n],k[0][n][1]),m=1;q>m;++m)e.call(a,j[m][n],o+=k[m-1][n][1],k[m][n][1]);return h}var b=xb,c=cf,d=df,e=bf,f=_e,g=af;return a.values=function(c){return arguments.length?(b=c,a):b},a.order=function(b){return arguments.length?(c="function"==typeof b?b:hj.get(b)||cf,a):c},a.offset=function(b){return arguments.length?(d="function"==typeof b?b:ij.get(b)||df,a):d},a.x=function(b){return arguments.length?(f=b,a):f},a.y=function(b){return arguments.length?(g=b,a):g},a.out=function(b){return arguments.length?(e=b,a):e},a};var hj=Sg.map({"inside-out":function(a){var b,c,d=a.length,e=a.map(ef),f=a.map(ff),g=Sg.range(d).sort(function(a,b){return e[a]-e[b]}),h=0,i=0,j=[],k=[];for(b=0;d>b;++b)c=g[b],i>h?(h+=f[c],j.push(c)):(i+=f[c],k.push(c));return k.reverse().concat(j)},reverse:function(a){return Sg.range(a.length).reverse()},"default":cf}),ij=Sg.map({silhouette:function(a){var b,c,d,e=a.length,f=a[0].length,g=[],h=0,i=[];for(c=0;f>c;++c){for(b=0,d=0;e>b;b++)d+=a[b][c][1];d>h&&(h=d),g.push(d)}for(c=0;f>c;++c)i[c]=(h-g[c])/2;return i},wiggle:function(a){var b,c,d,e,f,g,h,i,j,k=a.length,l=a[0],m=l.length,n=[];for(n[0]=i=j=0,c=1;m>c;++c){for(b=0,e=0;k>b;++b)e+=a[b][c][1];for(b=0,f=0,h=l[c][0]-l[c-1][0];k>b;++b){for(d=0,g=(a[b][c][1]-a[b][c-1][1])/(2*h);b>d;++d)g+=(a[d][c][1]-a[d][c-1][1])/h;f+=g*a[b][c][1]}n[c]=i-=e?f/e*h:0,j>i&&(j=i)}for(c=0;m>c;++c)n[c]-=j;return n},expand:function(a){var b,c,d,e=a.length,f=a[0].length,g=1/e,h=[];for(c=0;f>c;++c){for(b=0,d=0;e>b;b++)d+=a[b][c][1];if(d)for(b=0;e>b;b++)a[b][c][1]/=d;else for(b=0;e>b;b++)a[b][c][1]=g}for(c=0;f>c;++c)h[c]=0;return h},zero:df});Sg.layout.histogram=function(){function a(a,f){for(var g,h,i=[],j=a.map(c,this),k=d.call(this,j,f),l=e.call(this,k,j,f),f=-1,m=j.length,n=l.length-1,o=b?1:1/m;++f<n;)g=i[f]=[],g.dx=l[f+1]-(g.x=l[f]),g.y=0;if(n>0)for(f=-1;++f<m;)h=j[f],h>=k[0]&&h<=k[1]&&(g=i[Sg.bisect(l,h,1,n)-1],g.y+=o,g.push(a[f]));return i}var b=!0,c=Number,d=kf,e=hf;return a.value=function(b){return arguments.length?(c=b,a):c},a.range=function(b){return arguments.length?(d=wb(b),a):d},a.bins=function(b){return arguments.length?(e="number"==typeof b?function(a){return jf(a,b)}:wb(b),a):e},a.frequency=function(c){return arguments.length?(b=!!c,a):b},a},Sg.layout.pack=function(){function a(a,f){var g=c.call(this,a,f),h=g[0],i=e[0],j=e[1],k=null==b?Math.sqrt:"function"==typeof b?b:function(){return b};if(h.x=h.y=0,We(h,function(a){a.r=+k(a.value)}),We(h,pf),d){var l=d*(b?1:Math.max(2*h.r/i,2*h.r/j))/2;We(h,function(a){a.r+=l}),We(h,pf),We(h,function(a){a.r-=l})}return sf(h,i/2,j/2,b?1:1/Math.max(2*h.r/i,2*h.r/j)),g}var b,c=Sg.layout.hierarchy().sort(lf),d=0,e=[1,1];return a.size=function(b){return arguments.length?(e=b,a):e},a.radius=function(c){return arguments.length?(b=null==c||"function"==typeof c?c:+c,a):b},a.padding=function(b){return arguments.length?(d=+b,a):d},Ue(a,c)},Sg.layout.tree=function(){function a(a,e){var k=g.call(this,a,e),l=k[0],m=b(l);if(We(m,c),m.parent.m=-m.z,Ve(m,d),j)Ve(l,f);else{var n=l,o=l,p=l;Ve(l,function(a){a.x<n.x&&(n=a),a.x>o.x&&(o=a),a.depth>p.depth&&(p=a)});var q=h(n,o)/2-n.x,r=i[0]/(o.x+h(o,n)/2+q),s=i[1]/(p.depth||1);Ve(l,function(a){a.x=(a.x+q)*r,a.y=a.depth*s})}return k}function b(a){for(var b,c={A:null,children:[a]},d=[c];null!=(b=d.pop());)for(var e,f=b.children,g=0,h=f.length;h>g;++g)d.push((f[g]=e={_:f[g],parent:b,children:(e=f[g].children)&&e.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:g}).a=e);return c.children[0]}function c(a){var b=a.children,c=a.parent.children,d=a.i?c[a.i-1]:null;if(b.length){yf(a);var f=(b[0].z+b[b.length-1].z)/2;d?(a.z=d.z+h(a._,d._),a.m=a.z-f):a.z=f}else d&&(a.z=d.z+h(a._,d._));a.parent.A=e(a,d,a.parent.A||c[0])}function d(a){a._.x=a.z+a.parent.m,a.m+=a.parent.m}function e(a,b,c){if(b){for(var d,e=a,f=a,g=b,i=e.parent.children[0],j=e.m,k=f.m,l=g.m,m=i.m;g=wf(g),e=vf(e),g&&e;)i=vf(i),f=wf(f),f.a=a,d=g.z+l-e.z-j+h(g._,e._),d>0&&(xf(zf(g,a,c),a,d),j+=d,k+=d),l+=g.m,j+=e.m,m+=i.m,k+=f.m;g&&!wf(f)&&(f.t=g,f.m+=l-k),e&&!vf(i)&&(i.t=e,i.m+=j-m,c=a)}return c}function f(a){a.x*=i[0],a.y=a.depth*i[1]}var g=Sg.layout.hierarchy().sort(null).value(null),h=uf,i=[1,1],j=null;return a.separation=function(b){return arguments.length?(h=b,a):h},a.size=function(b){return arguments.length?(j=null==(i=b)?f:null,a):j?null:i},a.nodeSize=function(b){return arguments.length?(j=null==(i=b)?null:f,a):j?i:null},Ue(a,g)},Sg.layout.cluster=function(){function a(a,f){var g,h=b.call(this,a,f),i=h[0],j=0;We(i,function(a){var b=a.children;b&&b.length?(a.x=Bf(b),a.y=Af(b)):(a.x=g?j+=c(a,g):0,a.y=0,g=a)});var k=Cf(i),l=Df(i),m=k.x-c(k,l)/2,n=l.x+c(l,k)/2;return We(i,e?function(a){a.x=(a.x-i.x)*d[0],a.y=(i.y-a.y)*d[1]}:function(a){a.x=(a.x-m)/(n-m)*d[0],a.y=(1-(i.y?a.y/i.y:1))*d[1]}),h}var b=Sg.layout.hierarchy().sort(null).value(null),c=uf,d=[1,1],e=!1;return a.separation=function(b){return arguments.length?(c=b,a):c},a.size=function(b){return arguments.length?(e=null==(d=b),a):e?null:d},a.nodeSize=function(b){return arguments.length?(e=null!=(d=b),a):e?d:null},Ue(a,b)},Sg.layout.treemap=function(){function a(a,b){for(var c,d,e=-1,f=a.length;++e<f;)d=(c=a[e]).value*(0>b?0:b),c.area=isNaN(d)||0>=d?0:d}function b(c){var f=c.children;if(f&&f.length){var g,h,i,j=l(c),k=[],m=f.slice(),o=1/0,p="slice"===n?j.dx:"dice"===n?j.dy:"slice-dice"===n?1&c.depth?j.dy:j.dx:Math.min(j.dx,j.dy);for(a(m,j.dx*j.dy/c.value),k.area=0;(i=m.length)>0;)k.push(g=m[i-1]),k.area+=g.area,"squarify"!==n||(h=d(k,p))<=o?(m.pop(),o=h):(k.area-=k.pop().area,e(k,p,j,!1),p=Math.min(j.dx,j.dy),k.length=k.area=0,o=1/0);k.length&&(e(k,p,j,!0),k.length=k.area=0),f.forEach(b)}}function c(b){var d=b.children;if(d&&d.length){var f,g=l(b),h=d.slice(),i=[];for(a(h,g.dx*g.dy/b.value),i.area=0;f=h.pop();)i.push(f),i.area+=f.area,null!=f.z&&(e(i,f.z?g.dx:g.dy,g,!h.length),i.length=i.area=0);d.forEach(c)}}function d(a,b){for(var c,d=a.area,e=0,f=1/0,g=-1,h=a.length;++g<h;)(c=a[g].area)&&(f>c&&(f=c),c>e&&(e=c));return d*=d,b*=b,d?Math.max(b*e*o/d,d/(b*f*o)):1/0}function e(a,b,c,d){var e,f=-1,g=a.length,h=c.x,j=c.y,k=b?i(a.area/b):0;if(b==c.dx){for((d||k>c.dy)&&(k=c.dy);++f<g;)e=a[f],e.x=h,e.y=j,e.dy=k,h+=e.dx=Math.min(c.x+c.dx-h,k?i(e.area/k):0);e.z=!0,e.dx+=c.x+c.dx-h,c.y+=k,c.dy-=k}else{for((d||k>c.dx)&&(k=c.dx);++f<g;)e=a[f],e.x=h,e.y=j,e.dx=k,j+=e.dy=Math.min(c.y+c.dy-j,k?i(e.area/k):0);e.z=!1,e.dy+=c.y+c.dy-j,c.x+=k,c.dx-=k}}function f(d){var e=g||h(d),f=e[0];return f.x=0,f.y=0,f.dx=j[0],f.dy=j[1],g&&h.revalue(f),a([f],f.dx*f.dy/f.value),(g?c:b)(f),m&&(g=e),e}var g,h=Sg.layout.hierarchy(),i=Math.round,j=[1,1],k=null,l=Ef,m=!1,n="squarify",o=.5*(1+Math.sqrt(5));return f.size=function(a){return arguments.length?(j=a,f):j},f.padding=function(a){function b(b){var c=a.call(f,b,b.depth);return null==c?Ef(b):Ff(b,"number"==typeof c?[c,c,c,c]:c)}function c(b){return Ff(b,a)}if(!arguments.length)return k;var d;return l=null==(k=a)?Ef:"function"==(d=typeof a)?b:"number"===d?(a=[a,a,a,a],c):c,f},f.round=function(a){return arguments.length?(i=a?Math.round:Number,f):i!=Number},f.sticky=function(a){return arguments.length?(m=a,g=null,f):m},f.ratio=function(a){return arguments.length?(o=a,f):o},f.mode=function(a){return arguments.length?(n=a+"",f):n},Ue(f,h)},Sg.random={normal:function(a,b){var c=arguments.length;return 2>c&&(b=1),1>c&&(a=0),function(){var c,d,e;do c=2*Math.random()-1,d=2*Math.random()-1,e=c*c+d*d;while(!e||e>1);return a+b*c*Math.sqrt(-2*Math.log(e)/e)}},logNormal:function(){var a=Sg.random.normal.apply(Sg,arguments);return function(){return Math.exp(a())}},bates:function(a){var b=Sg.random.irwinHall(a);return function(){return b()/a}},irwinHall:function(a){return function(){for(var b=0,c=0;a>c;c++)b+=Math.random();return b}}},Sg.scale={};var jj={floor:xb,ceil:xb};Sg.scale.linear=function(){return Mf([0,1],[0,1],me,!1)};var kj={s:1,g:1,p:1,r:1,e:1};Sg.scale.log=function(){return Uf(Sg.scale.linear().domain([0,1]),10,!0,[1,10])};var lj=Sg.format(".0e"),mj={floor:function(a){return-Math.ceil(-a)},ceil:function(a){return-Math.floor(-a)}};Sg.scale.pow=function(){return Vf(Sg.scale.linear(),1,[0,1])},Sg.scale.sqrt=function(){return Sg.scale.pow().exponent(.5)},Sg.scale.ordinal=function(){return Xf([],{t:"range",a:[[]]})},Sg.scale.category10=function(){return Sg.scale.ordinal().range(nj)},Sg.scale.category20=function(){return Sg.scale.ordinal().range(oj)},Sg.scale.category20b=function(){return Sg.scale.ordinal().range(pj)},Sg.scale.category20c=function(){return Sg.scale.ordinal().range(qj)};var nj=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(pb),oj=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(pb),pj=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(pb),qj=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(pb);Sg.scale.quantile=function(){return Yf([],[])},Sg.scale.quantize=function(){return Zf(0,1,[0,1])},Sg.scale.threshold=function(){return $f([.5],[0,1])},Sg.scale.identity=function(){return _f([0,1])},Sg.svg={},Sg.svg.arc=function(){function a(){var a=b.apply(this,arguments),f=c.apply(this,arguments),g=d.apply(this,arguments)+rj,h=e.apply(this,arguments)+rj,i=(g>h&&(i=g,g=h,h=i),h-g),j=wh>i?"0":"1",k=Math.cos(g),l=Math.sin(g),m=Math.cos(h),n=Math.sin(h);return i>=sj?a?"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+-f+"A"+f+","+f+" 0 1,1 0,"+f+"M0,"+a+"A"+a+","+a+" 0 1,0 0,"+-a+"A"+a+","+a+" 0 1,0 0,"+a+"Z":"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+-f+"A"+f+","+f+" 0 1,1 0,"+f+"Z":a?"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L"+a*m+","+a*n+"A"+a+","+a+" 0 "+j+",0 "+a*k+","+a*l+"Z":"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L0,0Z"}var b=ag,c=bg,d=cg,e=dg;return a.innerRadius=function(c){return arguments.length?(b=wb(c),a):b},a.outerRadius=function(b){return arguments.length?(c=wb(b),a):c},a.startAngle=function(b){return arguments.length?(d=wb(b),a):d},a.endAngle=function(b){return arguments.length?(e=wb(b),a):e},a.centroid=function(){var a=(b.apply(this,arguments)+c.apply(this,arguments))/2,f=(d.apply(this,arguments)+e.apply(this,arguments))/2+rj;return[Math.cos(f)*a,Math.sin(f)*a]},a};var rj=-yh,sj=xh-zh;Sg.svg.line=function(){return eg(xb)};var tj=Sg.map({linear:fg,"linear-closed":gg,step:hg,"step-before":ig,"step-after":jg,basis:pg,"basis-open":qg,"basis-closed":rg,bundle:sg,cardinal:mg,"cardinal-open":kg,"cardinal-closed":lg,monotone:yg});tj.forEach(function(a,b){b.key=a,b.closed=/-closed$/.test(a)});var uj=[0,2/3,1/3,0],vj=[0,1/3,2/3,0],wj=[0,1/6,2/3,1/6];Sg.svg.line.radial=function(){var a=eg(zg);return a.radius=a.x,delete a.x,a.angle=a.y,delete a.y,a},ig.reverse=jg,jg.reverse=ig,Sg.svg.area=function(){return Ag(xb)},Sg.svg.area.radial=function(){var a=Ag(zg);return a.radius=a.x,delete a.x,a.innerRadius=a.x0,delete a.x0,a.outerRadius=a.x1,delete a.x1,a.angle=a.y,delete a.y,a.startAngle=a.y0,delete a.y0,a.endAngle=a.y1,delete a.y1,a},Sg.svg.chord=function(){function a(a,h){var i=b(this,f,a,h),j=b(this,g,a,h);return"M"+i.p0+d(i.r,i.p1,i.a1-i.a0)+(c(i,j)?e(i.r,i.p1,i.r,i.p0):e(i.r,i.p1,j.r,j.p0)+d(j.r,j.p1,j.a1-j.a0)+e(j.r,j.p1,i.r,i.p0))+"Z"}function b(a,b,c,d){var e=b.call(a,c,d),f=h.call(a,e,d),g=i.call(a,e,d)+rj,k=j.call(a,e,d)+rj;return{r:f,a0:g,a1:k,p0:[f*Math.cos(g),f*Math.sin(g)],p1:[f*Math.cos(k),f*Math.sin(k)]}}function c(a,b){return a.a0==b.a0&&a.a1==b.a1}function d(a,b,c){return"A"+a+","+a+" 0 "+ +(c>wh)+",1 "+b}function e(a,b,c,d){return"Q 0,0 "+d}var f=nd,g=od,h=Bg,i=cg,j=dg;return a.radius=function(b){return arguments.length?(h=wb(b),a):h},a.source=function(b){return arguments.length?(f=wb(b),a):f},a.target=function(b){return arguments.length?(g=wb(b),a):g},a.startAngle=function(b){return arguments.length?(i=wb(b),a):i},a.endAngle=function(b){return arguments.length?(j=wb(b),a):j},a},Sg.svg.diagonal=function(){function a(a,e){var f=b.call(this,a,e),g=c.call(this,a,e),h=(f.y+g.y)/2,i=[f,{x:f.x,y:h},{x:g.x,y:h},g];return i=i.map(d),"M"+i[0]+"C"+i[1]+" "+i[2]+" "+i[3]}var b=nd,c=od,d=Cg;return a.source=function(c){return arguments.length?(b=wb(c),a):b},a.target=function(b){return arguments.length?(c=wb(b),a):c},a.projection=function(b){return arguments.length?(d=b,a):d},a},Sg.svg.diagonal.radial=function(){var a=Sg.svg.diagonal(),b=Cg,c=a.projection;return a.projection=function(a){return arguments.length?c(Dg(b=a)):b},a},Sg.svg.symbol=function(){function a(a,d){return(xj.get(b.call(this,a,d))||Gg)(c.call(this,a,d))}var b=Fg,c=Eg;return a.type=function(c){return arguments.length?(b=wb(c),a):b},a.size=function(b){return arguments.length?(c=wb(b),a):c},a};var xj=Sg.map({circle:Gg,cross:function(a){var b=Math.sqrt(a/5)/2;return"M"+-3*b+","+-b+"H"+-b+"V"+-3*b+"H"+b+"V"+-b+"H"+3*b+"V"+b+"H"+b+"V"+3*b+"H"+-b+"V"+b+"H"+-3*b+"Z"},diamond:function(a){var b=Math.sqrt(a/(2*Bj)),c=b*Bj;return"M0,"+-b+"L"+c+",0 0,"+b+" "+-c+",0Z"},square:function(a){var b=Math.sqrt(a)/2;return"M"+-b+","+-b+"L"+b+","+-b+" "+b+","+b+" "+-b+","+b+"Z"},"triangle-down":function(a){var b=Math.sqrt(a/Aj),c=b*Aj/2;return"M0,"+c+"L"+b+","+-c+" "+-b+","+-c+"Z"},"triangle-up":function(a){var b=Math.sqrt(a/Aj),c=b*Aj/2;return"M0,"+-c+"L"+b+","+c+" "+-b+","+c+"Z"}});Sg.svg.symbolTypes=xj.keys();var yj,zj,Aj=Math.sqrt(3),Bj=Math.tan(30*Bh),Cj=[],Dj=0;Cj.call=oh.call,Cj.empty=oh.empty,Cj.node=oh.node,Cj.size=oh.size,Sg.transition=function(a){return arguments.length?yj?a.transition():a:rh.transition()},Sg.transition.prototype=Cj,Cj.select=function(a){var b,c,d,e=this.id,f=[];a=w(a);for(var g=-1,h=this.length;++g<h;){f.push(b=[]);for(var i=this[g],j=-1,k=i.length;++j<k;)(d=i[j])&&(c=a.call(d,d.__data__,j,g))?("__data__"in d&&(c.__data__=d.__data__),Kg(c,j,e,d.__transition__[e]),b.push(c)):b.push(null)}return Hg(f,e)},Cj.selectAll=function(a){var b,c,d,e,f,g=this.id,h=[];a=x(a);for(var i=-1,j=this.length;++i<j;)for(var k=this[i],l=-1,m=k.length;++l<m;)if(d=k[l]){f=d.__transition__[g],c=a.call(d,d.__data__,l,i),h.push(b=[]);for(var n=-1,o=c.length;++n<o;)(e=c[n])&&Kg(e,n,g,f),b.push(e)}return Hg(h,g)},Cj.filter=function(a){var b,c,d,e=[];"function"!=typeof a&&(a=I(a));for(var f=0,g=this.length;g>f;f++){e.push(b=[]);for(var c=this[f],h=0,i=c.length;i>h;h++)(d=c[h])&&a.call(d,d.__data__,h,f)&&b.push(d)}return Hg(e,this.id)},Cj.tween=function(a,b){var c=this.id;return arguments.length<2?this.node().__transition__[c].tween.get(a):K(this,null==b?function(b){b.__transition__[c].tween.remove(a)}:function(d){d.__transition__[c].tween.set(a,b)})},Cj.attr=function(a,b){function c(){this.removeAttribute(h)}function d(){this.removeAttributeNS(h.space,h.local)}function e(a){return null==a?c:(a+="",function(){var b,c=this.getAttribute(h);return c!==a&&(b=g(c,a),function(a){this.setAttribute(h,b(a))})})}function f(a){return null==a?d:(a+="",function(){var b,c=this.getAttributeNS(h.space,h.local);return c!==a&&(b=g(c,a),function(a){this.setAttributeNS(h.space,h.local,b(a))})})}if(arguments.length<2){for(b in a)this.attr(b,a[b]);return this}var g="transform"==a?Je:me,h=Sg.ns.qualify(a);return Ig(this,"attr."+a,b,h.local?f:e)},Cj.attrTween=function(a,b){function c(a,c){var d=b.call(this,a,c,this.getAttribute(e));return d&&function(a){this.setAttribute(e,d(a))}}function d(a,c){var d=b.call(this,a,c,this.getAttributeNS(e.space,e.local));return d&&function(a){this.setAttributeNS(e.space,e.local,d(a))}}var e=Sg.ns.qualify(a);return this.tween("attr."+a,e.local?d:c)},Cj.style=function(a,b,c){function d(){this.style.removeProperty(a)}function e(b){return null==b?d:(b+="",function(){var d,e=Xg.getComputedStyle(this,null).getPropertyValue(a);return e!==b&&(d=me(e,b),function(b){this.style.setProperty(a,d(b),c)})})}var f=arguments.length;if(3>f){if("string"!=typeof a){2>f&&(b="");for(c in a)this.style(c,a[c],b);return this}c=""}return Ig(this,"style."+a,b,e)},Cj.styleTween=function(a,b,c){function d(d,e){var f=b.call(this,d,e,Xg.getComputedStyle(this,null).getPropertyValue(a));return f&&function(b){this.style.setProperty(a,f(b),c)}}return arguments.length<3&&(c=""),this.tween("style."+a,d)},Cj.text=function(a){return Ig(this,"text",a,Jg)},Cj.remove=function(){return this.each("end.transition",function(){var a;this.__transition__.count<2&&(a=this.parentNode)&&a.removeChild(this)})},Cj.ease=function(a){var b=this.id;return arguments.length<1?this.node().__transition__[b].ease:("function"!=typeof a&&(a=Sg.ease.apply(Sg,arguments)),K(this,function(c){c.__transition__[b].ease=a}))},Cj.delay=function(a){var b=this.id;return arguments.length<1?this.node().__transition__[b].delay:K(this,"function"==typeof a?function(c,d,e){c.__transition__[b].delay=+a.call(c,c.__data__,d,e)}:(a=+a,function(c){c.__transition__[b].delay=a}))},Cj.duration=function(a){var b=this.id;return arguments.length<1?this.node().__transition__[b].duration:K(this,"function"==typeof a?function(c,d,e){c.__transition__[b].duration=Math.max(1,a.call(c,c.__data__,d,e))}:(a=Math.max(1,a),function(c){c.__transition__[b].duration=a}))},Cj.each=function(a,b){var c=this.id;if(arguments.length<2){var d=zj,e=yj;yj=c,K(this,function(b,d,e){zj=b.__transition__[c],a.call(b,b.__data__,d,e)}),zj=d,yj=e}else K(this,function(d){var e=d.__transition__[c];(e.event||(e.event=Sg.dispatch("start","end"))).on(a,b)});return this},Cj.transition=function(){for(var a,b,c,d,e=this.id,f=++Dj,g=[],h=0,i=this.length;i>h;h++){g.push(a=[]);for(var b=this[h],j=0,k=b.length;k>j;j++)(c=b[j])&&(d=Object.create(c.__transition__[e]),d.delay+=d.duration,Kg(c,j,f,d)),a.push(c)}return Hg(g,f)},Sg.svg.axis=function(){function a(a){a.each(function(){var a,j=Sg.select(this),k=this.__chart__||c,l=this.__chart__=c.copy(),m=null==i?l.ticks?l.ticks.apply(l,h):l.domain():i,n=null==b?l.tickFormat?l.tickFormat.apply(l,h):xb:b,o=j.selectAll(".tick").data(m,l),p=o.enter().insert("g",".domain").attr("class","tick").style("opacity",zh),q=Sg.transition(o.exit()).style("opacity",zh).remove(),r=Sg.transition(o.order()).style("opacity",1),s=Hf(l),t=j.selectAll(".domain").data([0]),u=(t.enter().append("path").attr("class","domain"),Sg.transition(t));p.append("line"),p.append("text");var v=p.select("line"),w=r.select("line"),x=o.select("text").text(n),y=p.select("text"),z=r.select("text");switch(d){case"bottom":a=Lg,v.attr("y2",e),y.attr("y",Math.max(e,0)+g),w.attr("x2",0).attr("y2",e),z.attr("x",0).attr("y",Math.max(e,0)+g),x.attr("dy",".71em").style("text-anchor","middle"),u.attr("d","M"+s[0]+","+f+"V0H"+s[1]+"V"+f);break;case"top":a=Lg,v.attr("y2",-e),y.attr("y",-(Math.max(e,0)+g)),w.attr("x2",0).attr("y2",-e),z.attr("x",0).attr("y",-(Math.max(e,0)+g)),x.attr("dy","0em").style("text-anchor","middle"),u.attr("d","M"+s[0]+","+-f+"V0H"+s[1]+"V"+-f);break;case"left":a=Mg,v.attr("x2",-e),y.attr("x",-(Math.max(e,0)+g)),w.attr("x2",-e).attr("y2",0),z.attr("x",-(Math.max(e,0)+g)).attr("y",0),x.attr("dy",".32em").style("text-anchor","end"),u.attr("d","M"+-f+","+s[0]+"H0V"+s[1]+"H"+-f);break;case"right":a=Mg,v.attr("x2",e),y.attr("x",Math.max(e,0)+g),w.attr("x2",e).attr("y2",0),z.attr("x",Math.max(e,0)+g).attr("y",0),x.attr("dy",".32em").style("text-anchor","start"),u.attr("d","M"+f+","+s[0]+"H0V"+s[1]+"H"+f)}if(l.rangeBand){var A=l,B=A.rangeBand()/2;k=l=function(a){return A(a)+B}}else k.rangeBand?k=l:q.call(a,l);p.call(a,k),r.call(a,l)})}var b,c=Sg.scale.linear(),d=Ej,e=6,f=6,g=3,h=[10],i=null;return a.scale=function(b){return arguments.length?(c=b,a):c},a.orient=function(b){return arguments.length?(d=b in Fj?b+"":Ej,a):d},a.ticks=function(){return arguments.length?(h=arguments,a):h},a.tickValues=function(b){return arguments.length?(i=b,a):i},a.tickFormat=function(c){return arguments.length?(b=c,a):b},a.tickSize=function(b){var c=arguments.length;return c?(e=+b,f=+arguments[c-1],a):e},a.innerTickSize=function(b){return arguments.length?(e=+b,a):e},a.outerTickSize=function(b){return arguments.length?(f=+b,a):f},a.tickPadding=function(b){return arguments.length?(g=+b,a):g},a.tickSubdivide=function(){return arguments.length&&a},a};var Ej="bottom",Fj={top:1,right:1,bottom:1,left:1};Sg.svg.brush=function(){function a(f){f.each(function(){var f=Sg.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",e).on("touchstart.brush",e),g=f.selectAll(".background").data([0]);g.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),f.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var h=f.selectAll(".resize").data(o,xb);h.exit().remove(),h.enter().append("g").attr("class",function(a){return"resize "+a}).style("cursor",function(a){return Gj[a]}).append("rect").attr("x",function(a){return/[ew]$/.test(a)?-3:null}).attr("y",function(a){return/^[ns]/.test(a)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),h.style("display",a.empty()?"none":null);var k,l=Sg.transition(f),m=Sg.transition(g);i&&(k=Hf(i),m.attr("x",k[0]).attr("width",k[1]-k[0]),c(l)),j&&(k=Hf(j),m.attr("y",k[0]).attr("height",k[1]-k[0]),d(l)),b(l)})}function b(a){a.selectAll(".resize").attr("transform",function(a){return"translate("+k[+/e$/.test(a)]+","+l[+/^s/.test(a)]+")"})}function c(a){a.select(".extent").attr("x",k[0]),a.selectAll(".extent,.n>rect,.s>rect").attr("width",k[1]-k[0])}function d(a){a.select(".extent").attr("y",l[0]),a.selectAll(".extent,.e>rect,.w>rect").attr("height",l[1]-l[0])}function e(){function e(){32==Sg.event.keyCode&&(C||(t=null,E[0]-=k[1],E[1]-=l[1],C=2),s())}function o(){32==Sg.event.keyCode&&2==C&&(E[0]+=k[1],E[1]+=l[1],C=0,s())}function p(){var a=Sg.mouse(v),e=!1;u&&(a[0]+=u[0],a[1]+=u[1]),C||(Sg.event.altKey?(t||(t=[(k[0]+k[1])/2,(l[0]+l[1])/2]),E[0]=k[+(a[0]<t[0])],E[1]=l[+(a[1]<t[1])]):t=null),A&&q(a,i,0)&&(c(y),e=!0),B&&q(a,j,1)&&(d(y),e=!0),e&&(b(y),x({type:"brush",mode:C?"move":"resize"}))}function q(a,b,c){var d,e,h=Hf(b),i=h[0],j=h[1],o=E[c],p=c?l:k,q=p[1]-p[0];return C&&(i-=o,j-=q+o),d=(c?n:m)?Math.max(i,Math.min(j,a[c])):a[c],C?e=(d+=o)+q:(t&&(o=Math.max(i,Math.min(j,2*t[c]-d))),d>o?(e=d,d=o):e=o),p[0]!=d||p[1]!=e?(c?g=null:f=null,p[0]=d,p[1]=e,!0):void 0}function r(){p(),y.style("pointer-events","all").selectAll(".resize").style("display",a.empty()?"none":null),Sg.select("body").style("cursor",null),F.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),D(),x({type:"brushend"})}var t,u,v=this,w=Sg.select(Sg.event.target),x=h.of(v,arguments),y=Sg.select(v),z=w.datum(),A=!/^(n|s)$/.test(z)&&i,B=!/^(e|w)$/.test(z)&&j,C=w.classed("extent"),D=R(),E=Sg.mouse(v),F=Sg.select(Xg).on("keydown.brush",e).on("keyup.brush",o);if(Sg.event.changedTouches?F.on("touchmove.brush",p).on("touchend.brush",r):F.on("mousemove.brush",p).on("mouseup.brush",r),y.interrupt().selectAll("*").interrupt(),C)E[0]=k[0]-E[0],E[1]=l[0]-E[1];else if(z){var G=+/w$/.test(z),H=+/^n/.test(z);u=[k[1-G]-E[0],l[1-H]-E[1]],E[0]=k[G],E[1]=l[H]}else Sg.event.altKey&&(t=E.slice());y.style("pointer-events","none").selectAll(".resize").style("display",null),Sg.select("body").style("cursor",w.style("cursor")),x({type:"brushstart"}),p()}var f,g,h=u(a,"brushstart","brush","brushend"),i=null,j=null,k=[0,0],l=[0,0],m=!0,n=!0,o=Hj[0];return a.event=function(a){a.each(function(){var a=h.of(this,arguments),b={x:k,y:l,i:f,j:g},c=this.__chart__||b;this.__chart__=b,yj?Sg.select(this).transition().each("start.brush",function(){f=c.i,g=c.j,k=c.x,l=c.y,a({type:"brushstart"})}).tween("brush:brush",function(){var c=ne(k,b.x),d=ne(l,b.y);return f=g=null,function(e){k=b.x=c(e),l=b.y=d(e),a({type:"brush",mode:"resize"})}}).each("end.brush",function(){f=b.i,g=b.j,a({type:"brush",mode:"resize"}),a({type:"brushend"})}):(a({type:"brushstart"}),a({type:"brush",mode:"resize"}),a({type:"brushend"}))})},a.x=function(b){return arguments.length?(i=b,o=Hj[!i<<1|!j],a):i},a.y=function(b){return arguments.length?(j=b,o=Hj[!i<<1|!j],a):j},a.clamp=function(b){return arguments.length?(i&&j?(m=!!b[0],n=!!b[1]):i?m=!!b:j&&(n=!!b),a):i&&j?[m,n]:i?m:j?n:null},a.extent=function(b){var c,d,e,h,m;return arguments.length?(i&&(c=b[0],d=b[1],j&&(c=c[0],d=d[0]),f=[c,d],i.invert&&(c=i(c),d=i(d)),c>d&&(m=c,c=d,d=m),(c!=k[0]||d!=k[1])&&(k=[c,d])),j&&(e=b[0],h=b[1],i&&(e=e[1],h=h[1]),g=[e,h],j.invert&&(e=j(e),h=j(h)),e>h&&(m=e,e=h,h=m),(e!=l[0]||h!=l[1])&&(l=[e,h])),a):(i&&(f?(c=f[0],d=f[1]):(c=k[0],d=k[1],i.invert&&(c=i.invert(c),d=i.invert(d)),c>d&&(m=c,c=d,d=m))),j&&(g?(e=g[0],h=g[1]):(e=l[0],h=l[1],j.invert&&(e=j.invert(e),h=j.invert(h)),e>h&&(m=e,e=h,h=m))),i&&j?[[c,e],[d,h]]:i?[c,d]:j&&[e,h])
},a.clear=function(){return a.empty()||(k=[0,0],l=[0,0],f=g=null),a},a.empty=function(){return!!i&&k[0]==k[1]||!!j&&l[0]==l[1]},Sg.rebind(a,h,"on")};var Gj={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Hj=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Ij=_h.format=fi.timeFormat,Jj=Ij.utc,Kj=Jj("%Y-%m-%dT%H:%M:%S.%LZ");Ij.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Ng:Kj,Ng.parse=function(a){var b=new Date(a);return isNaN(b)?null:b},Ng.toString=Kj.toString,_h.second=Jb(function(a){return new ai(1e3*Math.floor(a/1e3))},function(a,b){a.setTime(a.getTime()+1e3*Math.floor(b))},function(a){return a.getSeconds()}),_h.seconds=_h.second.range,_h.seconds.utc=_h.second.utc.range,_h.minute=Jb(function(a){return new ai(6e4*Math.floor(a/6e4))},function(a,b){a.setTime(a.getTime()+6e4*Math.floor(b))},function(a){return a.getMinutes()}),_h.minutes=_h.minute.range,_h.minutes.utc=_h.minute.utc.range,_h.hour=Jb(function(a){var b=a.getTimezoneOffset()/60;return new ai(36e5*(Math.floor(a/36e5-b)+b))},function(a,b){a.setTime(a.getTime()+36e5*Math.floor(b))},function(a){return a.getHours()}),_h.hours=_h.hour.range,_h.hours.utc=_h.hour.utc.range,_h.month=Jb(function(a){return a=_h.day(a),a.setDate(1),a},function(a,b){a.setMonth(a.getMonth()+b)},function(a){return a.getMonth()}),_h.months=_h.month.range,_h.months.utc=_h.month.utc.range;var Lj=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Mj=[[_h.second,1],[_h.second,5],[_h.second,15],[_h.second,30],[_h.minute,1],[_h.minute,5],[_h.minute,15],[_h.minute,30],[_h.hour,1],[_h.hour,3],[_h.hour,6],[_h.hour,12],[_h.day,1],[_h.day,2],[_h.week,1],[_h.month,1],[_h.month,3],[_h.year,1]],Nj=Ij.multi([[".%L",function(a){return a.getMilliseconds()}],[":%S",function(a){return a.getSeconds()}],["%I:%M",function(a){return a.getMinutes()}],["%I %p",function(a){return a.getHours()}],["%a %d",function(a){return a.getDay()&&1!=a.getDate()}],["%b %d",function(a){return 1!=a.getDate()}],["%B",function(a){return a.getMonth()}],["%Y",xc]]),Oj={range:function(a,b,c){return Sg.range(Math.ceil(a/c)*c,+b,c).map(Pg)},floor:xb,ceil:xb};Mj.year=_h.year,_h.scale=function(){return Og(Sg.scale.linear(),Mj,Nj)};var Pj=Mj.map(function(a){return[a[0].utc,a[1]]}),Qj=Jj.multi([[".%L",function(a){return a.getUTCMilliseconds()}],[":%S",function(a){return a.getUTCSeconds()}],["%I:%M",function(a){return a.getUTCMinutes()}],["%I %p",function(a){return a.getUTCHours()}],["%a %d",function(a){return a.getUTCDay()&&1!=a.getUTCDate()}],["%b %d",function(a){return 1!=a.getUTCDate()}],["%B",function(a){return a.getUTCMonth()}],["%Y",xc]]);Pj.year=_h.year.utc,_h.scale.utc=function(){return Og(Sg.scale.linear(),Pj,Qj)},Sg.text=yb(function(a){return a.responseText}),Sg.json=function(a,b){return zb(a,"application/json",Qg,b)},Sg.html=function(a,b){return zb(a,"text/html",Rg,b)},Sg.xml=yb(function(a){return a.responseXML}),"function"==typeof define&&define.amd?define(Sg):"object"==typeof module&&module.exports?module.exports=Sg:this.d3=Sg}(),function(){function a(a,b,c){for(var d=(c||0)-1,e=a?a.length:0;++d<e;)if(a[d]===b)return d;return-1}function b(b,c){var d=typeof c;if(b=b.cache,"boolean"==d||null==c)return b[c]?0:-1;"number"!=d&&"string"!=d&&(d="object");var e="number"==d?c:u+c;return b=(b=b[d])&&b[e],"object"==d?b&&a(b,c)>-1?0:-1:b?0:-1}function c(a){var b=this.cache,c=typeof a;if("boolean"==c||null==a)b[a]=!0;else{"number"!=c&&"string"!=c&&(c="object");var d="number"==c?a:u+a,e=b[c]||(b[c]={});"object"==c?(e[d]||(e[d]=[])).push(a):e[d]=!0}}function d(a){return a.charCodeAt(0)}function e(a,b){for(var c=a.criteria,d=b.criteria,e=-1,f=c.length;++e<f;){var g=c[e],h=d[e];if(g!==h){if(g>h||"undefined"==typeof g)return 1;if(h>g||"undefined"==typeof h)return-1}}return a.index-b.index}function f(a){var b=-1,d=a.length,e=a[0],f=a[d/2|0],g=a[d-1];if(e&&"object"==typeof e&&f&&"object"==typeof f&&g&&"object"==typeof g)return!1;var h=i();h["false"]=h["null"]=h["true"]=h.undefined=!1;var j=i();for(j.array=a,j.cache=h,j.push=c;++b<d;)j.push(a[b]);return j}function g(a){return"\\"+_[a]}function h(){return q.pop()||[]}function i(){return r.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}function j(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}function l(a){a.length=0,q.length<w&&q.push(a)}function m(a){var b=a.cache;b&&m(b),a.array=a.cache=a.criteria=a.object=a.number=a.string=a.value=null,r.length<w&&r.push(a)}function n(a,b,c){b||(b=0),"undefined"==typeof c&&(c=a?a.length:0);for(var d=-1,e=c-b||0,f=Array(0>e?0:e);++d<e;)f[d]=a[b+d];return f}function o(c){function q(a){return a&&"object"==typeof a&&!ke(a)&&Rd.call(a,"__wrapped__")?a:new r(a)}function r(a,b){this.__chain__=!!b,this.__wrapped__=a}function w(a){function b(){if(d){var a=n(d);Sd.apply(a,arguments)}if(this instanceof b){var f=bb(c.prototype),g=c.apply(f,a||arguments);return Lb(g)?g:f}return c.apply(e,a||arguments)}var c=a[0],d=a[2],e=a[4];return je(b,a),b}function _(a,b,c,d,e){if(c){var f=c(a);if("undefined"!=typeof f)return f}var g=Lb(a);if(!g)return a;var i=Kd.call(a);if(!W[i]||!he.nodeClass&&j(a))return a;var k=fe[i];switch(i){case O:case P:return new k(+a);case S:case V:return new k(a);case U:return f=k(a.source,C.exec(a)),f.lastIndex=a.lastIndex,f}var m=ke(a);if(b){var o=!d;d||(d=h()),e||(e=h());for(var p=d.length;p--;)if(d[p]==a)return e[p];f=m?k(a.length):{}}else f=m?n(a):ve({},a);return m&&(Rd.call(a,"index")&&(f.index=a.index),Rd.call(a,"input")&&(f.input=a.input)),b?(d.push(a),e.push(f),(m?ue:ye)(a,function(a,g){f[g]=_(a,b,c,d,e)}),o&&(l(d),l(e)),f):f}function bb(a){return Lb(a)?Yd(a):{}}function cb(a,b,c){if("function"!=typeof a)return ed;if("undefined"==typeof b||!("prototype"in a))return a;var d=a.__bindData__;if("undefined"==typeof d&&(he.funcNames&&(d=!a.name),d=d||!he.funcDecomp,!d)){var e=Pd.call(a);he.funcNames||(d=!D.test(e)),d||(d=H.test(e),je(a,d))}if(d===!1||d!==!0&&1&d[1])return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return Pc(a,b)}function db(a){function b(){var a=i?g:this;if(e){var o=n(e);Sd.apply(o,arguments)}if((f||k)&&(o||(o=n(arguments)),f&&Sd.apply(o,f),k&&o.length<h))return d|=16,db([c,l?d:-4&d,o,null,g,h]);if(o||(o=arguments),j&&(c=a[m]),this instanceof b){a=bb(c.prototype);var p=c.apply(a,o);return Lb(p)?p:a}return c.apply(a,o)}var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],i=1&d,j=2&d,k=4&d,l=8&d,m=c;return je(b,a),b}function eb(c,d){var e=-1,g=pb(),h=c?c.length:0,i=h>=v&&g===a,j=[];if(i){var k=f(d);k?(g=b,d=k):i=!1}for(;++e<h;){var l=c[e];g(d,l)<0&&j.push(l)}return i&&m(d),j}function gb(a,b,c,d){for(var e=(d||0)-1,f=a?a.length:0,g=[];++e<f;){var h=a[e];if(h&&"object"==typeof h&&"number"==typeof h.length&&(ke(h)||tb(h))){b||(h=gb(h,b,c));var i=-1,j=h.length,k=g.length;for(g.length+=j;++i<j;)g[k++]=h[i]}else c||g.push(h)}return g}function hb(a,b,c,d,e,f){if(c){var g=c(a,b);if("undefined"!=typeof g)return!!g}if(a===b)return 0!==a||1/a==1/b;var i=typeof a,k=typeof b;if(!(a!==a||a&&$[i]||b&&$[k]))return!1;if(null==a||null==b)return a===b;var m=Kd.call(a),n=Kd.call(b);if(m==M&&(m=T),n==M&&(n=T),m!=n)return!1;switch(m){case O:case P:return+a==+b;case S:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case U:case V:return a==Dd(b)}var o=m==N;if(!o){var p=Rd.call(a,"__wrapped__"),q=Rd.call(b,"__wrapped__");if(p||q)return hb(p?a.__wrapped__:a,q?b.__wrapped__:b,c,d,e,f);if(m!=T||!he.nodeClass&&(j(a)||j(b)))return!1;var r=!he.argsObject&&tb(a)?Bd:a.constructor,s=!he.argsObject&&tb(b)?Bd:b.constructor;if(r!=s&&!(Kb(r)&&r instanceof r&&Kb(s)&&s instanceof s)&&"constructor"in a&&"constructor"in b)return!1}var t=!e;e||(e=h()),f||(f=h());for(var u=e.length;u--;)if(e[u]==a)return f[u]==b;var v=0;if(g=!0,e.push(a),f.push(b),o){if(u=a.length,v=b.length,g=v==u,g||d)for(;v--;){var w=u,x=b[v];if(d)for(;w--&&!(g=hb(a[w],x,c,d,e,f)););else if(!(g=hb(a[v],x,c,d,e,f)))break}}else xe(b,function(b,h,i){return Rd.call(i,h)?(v++,g=Rd.call(a,h)&&hb(a[h],b,c,d,e,f)):void 0}),g&&!d&&xe(a,function(a,b,c){return Rd.call(c,b)?g=--v>-1:void 0});return e.pop(),f.pop(),t&&(l(e),l(f)),g}function ib(a,b,c,d,e){(ke(b)?dc:ye)(b,function(b,f){var g,h,i=b,j=a[f];if(b&&((h=ke(b))||ze(b))){for(var k=d.length;k--;)if(g=d[k]==b){j=e[k];break}if(!g){var l;c&&(i=c(j,b),(l="undefined"!=typeof i)&&(j=i)),l||(j=h?ke(j)?j:[]:ze(j)?j:{}),d.push(b),e.push(j),l||ib(j,b,c,d,e)}}else c&&(i=c(j,b),"undefined"==typeof i&&(i=b)),"undefined"!=typeof i&&(j=i);a[f]=j})}function jb(a,b){return a+Od(ee()*(b-a+1))}function kb(c,d,e){var g=-1,i=pb(),j=c?c.length:0,k=[],n=!d&&j>=v&&i===a,o=e||n?h():k;if(n){var p=f(o);i=b,o=p}for(;++g<j;){var q=c[g],r=e?e(q,g,c):q;(d?!g||o[o.length-1]!==r:i(o,r)<0)&&((e||n)&&o.push(r),k.push(q))}return n?(l(o.array),m(o)):e&&l(o),k}function lb(a){return function(b,c,d){var e={};if(c=q.createCallback(c,d,3),ke(b))for(var f=-1,g=b.length;++f<g;){var h=b[f];a(e,h,c(h,f,b),b)}else ue(b,function(b,d,f){a(e,b,c(b,d,f),f)});return e}}function mb(a,b,c,d,e,f){var g=1&b,h=2&b,i=4&b,j=16&b,k=32&b;if(!h&&!Kb(a))throw new Ed;j&&!c.length&&(b&=-17,j=c=!1),k&&!d.length&&(b&=-33,k=d=!1);var l=a&&a.__bindData__;if(l&&l!==!0)return l=n(l),l[2]&&(l[2]=n(l[2])),l[3]&&(l[3]=n(l[3])),!g||1&l[1]||(l[4]=e),!g&&1&l[1]&&(b|=8),!i||4&l[1]||(l[5]=f),j&&Sd.apply(l[2]||(l[2]=[]),c),k&&Wd.apply(l[3]||(l[3]=[]),d),l[1]|=b,mb.apply(null,l);var m=1==b||17===b?w:db;return m([a,b,c,d,e,f])}function nb(){Z.shadowedProps=K,Z.array=Z.bottom=Z.loop=Z.top="",Z.init="iterable",Z.useHas=!0;for(var a,b=0;a=arguments[b];b++)for(var c in a)Z[c]=a[c];var d=Z.args;Z.firstArg=/^[^,]+/.exec(d)[0];var e=yd("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString","return function("+d+") {\n"+ie(Z)+"\n}");return e(cb,Q,Gd,Rd,t,tb,ke,Qb,Z.keys,Hd,$,ge,V,Id,Kd)}function ob(a){return qe[a]}function pb(){var b=(b=q.indexOf)===yc?a:b;return b}function qb(a){return"function"==typeof a&&Ld.test(a)}function rb(a){var b,c;return!a||Kd.call(a)!=T||(b=a.constructor,Kb(b)&&!(b instanceof b))||!he.argsClass&&tb(a)||!he.nodeClass&&j(a)?!1:he.ownLast?(xe(a,function(a,b,d){return c=Rd.call(d,b),!1}),c!==!1):(xe(a,function(a,b){c=b}),"undefined"==typeof c||Rd.call(a,c))}function sb(a){return re[a]}function tb(a){return a&&"object"==typeof a&&"number"==typeof a.length&&Kd.call(a)==M||!1}function ub(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c=b,b=!1),_(a,b,"function"==typeof c&&cb(c,d,1))}function vb(a,b,c){return _(a,!0,"function"==typeof b&&cb(b,c,1))}function wb(a,b){var c=bb(a);return b?ve(c,b):c}function xb(a,b,c){var d;return b=q.createCallback(b,c,3),ye(a,function(a,c,e){return b(a,c,e)?(d=c,!1):void 0}),d}function yb(a,b,c){var d;return b=q.createCallback(b,c,3),Ab(a,function(a,c,e){return b(a,c,e)?(d=c,!1):void 0}),d}function zb(a,b,c){var d=[];xe(a,function(a,b){d.push(b,a)});var e=d.length;for(b=cb(b,c,3);e--&&b(d[e--],d[e],a)!==!1;);return a}function Ab(a,b,c){var d=me(a),e=d.length;for(b=cb(b,c,3);e--;){var f=d[e];if(b(a[f],f,a)===!1)break}return a}function Bb(a){var b=[];return xe(a,function(a,c){Kb(a)&&b.push(c)}),b.sort()}function Cb(a,b){return a?Rd.call(a,b):!1}function Db(a){for(var b=-1,c=me(a),d=c.length,e={};++b<d;){var f=c[b];e[a[f]]=f}return e}function Eb(a){return a===!0||a===!1||a&&"object"==typeof a&&Kd.call(a)==O||!1}function Fb(a){return a&&"object"==typeof a&&Kd.call(a)==P||!1}function Gb(a){return a&&1===a.nodeType||!1}function Hb(a){var b=!0;if(!a)return b;var c=Kd.call(a),d=a.length;return c==N||c==V||(he.argsClass?c==M:tb(a))||c==T&&"number"==typeof d&&Kb(a.splice)?!d:(ye(a,function(){return b=!1}),b)}function Ib(a,b,c,d){return hb(a,b,"function"==typeof c&&cb(c,d,2))}function Jb(a){return $d(a)&&!_d(parseFloat(a))}function Kb(a){return"function"==typeof a}function Lb(a){return!(!a||!$[typeof a])}function Mb(a){return Ob(a)&&a!=+a}function Nb(a){return null===a}function Ob(a){return"number"==typeof a||a&&"object"==typeof a&&Kd.call(a)==S||!1}function Pb(a){return a&&$[typeof a]&&Kd.call(a)==U||!1}function Qb(a){return"string"==typeof a||a&&"object"==typeof a&&Kd.call(a)==V||!1}function Rb(a){return"undefined"==typeof a}function Sb(a,b,c){var d={};return b=q.createCallback(b,c,3),ye(a,function(a,c,e){d[c]=b(a,c,e)}),d}function Tb(a){var b=arguments,c=2;if(!Lb(a))return a;if("number"!=typeof b[2]&&(c=b.length),c>3&&"function"==typeof b[c-2])var d=cb(b[--c-1],b[c--],2);else c>2&&"function"==typeof b[c-1]&&(d=b[--c]);for(var e=n(arguments,1,c),f=-1,g=h(),i=h();++f<c;)ib(a,e[f],d,g,i);return l(g),l(i),a}function Ub(a,b,c){var d={};if("function"!=typeof b){var e=[];xe(a,function(a,b){e.push(b)}),e=eb(e,gb(arguments,!0,!1,1));for(var f=-1,g=e.length;++f<g;){var h=e[f];d[h]=a[h]}}else b=q.createCallback(b,c,3),xe(a,function(a,c,e){b(a,c,e)||(d[c]=a)});return d}function Vb(a){for(var b=-1,c=me(a),d=c.length,e=ud(d);++b<d;){var f=c[b];e[b]=[f,a[f]]}return e}function Wb(a,b,c){var d={};if("function"!=typeof b)for(var e=-1,f=gb(arguments,!0,!1,1),g=Lb(a)?f.length:0;++e<g;){var h=f[e];h in a&&(d[h]=a[h])}else b=q.createCallback(b,c,3),xe(a,function(a,c,e){b(a,c,e)&&(d[c]=a)});return d}function Xb(a,b,c,d){var e=ke(a);if(null==c)if(e)c=[];else{var f=a&&a.constructor,g=f&&f.prototype;c=bb(g)}return b&&(b=q.createCallback(b,d,4),(e?ue:ye)(a,function(a,d,e){return b(c,a,d,e)})),c}function Yb(a){for(var b=-1,c=me(a),d=c.length,e=ud(d);++b<d;)e[b]=a[c[b]];return e}function Zb(a){var b=arguments,c=-1,d=gb(b,!0,!1,1),e=b[2]&&b[2][b[1]]===a?1:d.length,f=ud(e);for(he.unindexedChars&&Qb(a)&&(a=a.split(""));++c<e;)f[c]=a[d[c]];return f}function $b(a,b,c){var d=-1,e=pb(),f=a?a.length:0,g=!1;return c=(0>c?be(0,f+c):c)||0,ke(a)?g=e(a,b,c)>-1:"number"==typeof f?g=(Qb(a)?a.indexOf(b,c):e(a,b,c))>-1:ue(a,function(a){return++d>=c?!(g=a===b):void 0}),g}function _b(a,b,c){var d=!0;if(b=q.createCallback(b,c,3),ke(a))for(var e=-1,f=a.length;++e<f&&(d=!!b(a[e],e,a)););else ue(a,function(a,c,e){return d=!!b(a,c,e)});return d}function ac(a,b,c){var d=[];if(b=q.createCallback(b,c,3),ke(a))for(var e=-1,f=a.length;++e<f;){var g=a[e];b(g,e,a)&&d.push(g)}else ue(a,function(a,c,e){b(a,c,e)&&d.push(a)});return d}function bc(a,b,c){if(b=q.createCallback(b,c,3),!ke(a)){var d;return ue(a,function(a,c,e){return b(a,c,e)?(d=a,!1):void 0}),d}for(var e=-1,f=a.length;++e<f;){var g=a[e];if(b(g,e,a))return g}}function cc(a,b,c){var d;return b=q.createCallback(b,c,3),ec(a,function(a,c,e){return b(a,c,e)?(d=a,!1):void 0}),d}function dc(a,b,c){if(b&&"undefined"==typeof c&&ke(a))for(var d=-1,e=a.length;++d<e&&b(a[d],d,a)!==!1;);else ue(a,b,c);return a}function ec(a,b,c){var d=a,e=a?a.length:0;if(b=b&&"undefined"==typeof c?b:cb(b,c,3),ke(a))for(;e--&&b(a[e],e,a)!==!1;);else{if("number"!=typeof e){var f=me(a);e=f.length}else he.unindexedChars&&Qb(a)&&(d=a.split(""));ue(a,function(a,c,g){return c=f?f[--e]:--e,b(d[c],c,g)})}return a}function fc(a,b){var c=n(arguments,2),d=-1,e="function"==typeof b,f=a?a.length:0,g=ud("number"==typeof f?f:0);return dc(a,function(a){g[++d]=(e?b:a[b]).apply(a,c)}),g}function gc(a,b,c){var d=-1,e=a?a.length:0,f=ud("number"==typeof e?e:0);if(b=q.createCallback(b,c,3),ke(a))for(;++d<e;)f[d]=b(a[d],d,a);else ue(a,function(a,c,e){f[++d]=b(a,c,e)});return f}function hc(a,b,c){var e=-1/0,f=e;if("function"!=typeof b&&c&&c[b]===a&&(b=null),null==b&&ke(a))for(var g=-1,h=a.length;++g<h;){var i=a[g];i>f&&(f=i)}else b=null==b&&Qb(a)?d:q.createCallback(b,c,3),ue(a,function(a,c,d){var g=b(a,c,d);g>e&&(e=g,f=a)});return f}function ic(a,b,c){var e=1/0,f=e;if("function"!=typeof b&&c&&c[b]===a&&(b=null),null==b&&ke(a))for(var g=-1,h=a.length;++g<h;){var i=a[g];f>i&&(f=i)}else b=null==b&&Qb(a)?d:q.createCallback(b,c,3),ue(a,function(a,c,d){var g=b(a,c,d);e>g&&(e=g,f=a)});return f}function jc(a,b,c,d){var e=arguments.length<3;if(b=q.createCallback(b,d,4),ke(a)){var f=-1,g=a.length;for(e&&(c=a[++f]);++f<g;)c=b(c,a[f],f,a)}else ue(a,function(a,d,f){c=e?(e=!1,a):b(c,a,d,f)});return c}function kc(a,b,c,d){var e=arguments.length<3;return b=q.createCallback(b,d,4),ec(a,function(a,d,f){c=e?(e=!1,a):b(c,a,d,f)}),c}function lc(a,b,c){return b=q.createCallback(b,c,3),ac(a,function(a,c,d){return!b(a,c,d)})}function mc(a,b,c){if(a&&"number"!=typeof a.length?a=Yb(a):he.unindexedChars&&Qb(a)&&(a=a.split("")),null==b||c)return a?a[jb(0,a.length-1)]:p;var d=nc(a);return d.length=ce(be(0,b),d.length),d}function nc(a){var b=-1,c=a?a.length:0,d=ud("number"==typeof c?c:0);return dc(a,function(a){var c=jb(0,++b);d[b]=d[c],d[c]=a}),d}function oc(a){var b=a?a.length:0;return"number"==typeof b?b:me(a).length}function pc(a,b,c){var d;if(b=q.createCallback(b,c,3),ke(a))for(var e=-1,f=a.length;++e<f&&!(d=b(a[e],e,a)););else ue(a,function(a,c,e){return!(d=b(a,c,e))});return!!d}function qc(a,b,c){var d=-1,f=ke(b),g=a?a.length:0,j=ud("number"==typeof g?g:0);for(f||(b=q.createCallback(b,c,3)),dc(a,function(a,c,e){var g=j[++d]=i();f?g.criteria=gc(b,function(b){return a[b]}):(g.criteria=h())[0]=b(a,c,e),g.index=d,g.value=a}),g=j.length,j.sort(e);g--;){var k=j[g];j[g]=k.value,f||l(k.criteria),m(k)}return j}function rc(a){return a&&"number"==typeof a.length?he.unindexedChars&&Qb(a)?a.split(""):n(a):Yb(a)}function sc(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function tc(a){return eb(a,gb(arguments,!0,!0,1))}function uc(a,b,c){var d=-1,e=a?a.length:0;for(b=q.createCallback(b,c,3);++d<e;)if(b(a[d],d,a))return d;return-1}function vc(a,b,c){var d=a?a.length:0;for(b=q.createCallback(b,c,3);d--;)if(b(a[d],d,a))return d;return-1}function wc(a,b,c){var d=0,e=a?a.length:0;if("number"!=typeof b&&null!=b){var f=-1;for(b=q.createCallback(b,c,3);++f<e&&b(a[f],f,a);)d++}else if(d=b,null==d||c)return a?a[0]:p;return n(a,0,ce(be(0,d),e))}function xc(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c="function"!=typeof b&&d&&d[b]===a?null:b,b=!1),null!=c&&(a=gc(a,c,d)),gb(a,b)}function yc(b,c,d){if("number"==typeof d){var e=b?b.length:0;d=0>d?be(0,e+d):d||0}else if(d){var f=Hc(b,c);return b[f]===c?f:-1}return a(b,c,d)}function zc(a,b,c){var d=0,e=a?a.length:0;if("number"!=typeof b&&null!=b){var f=e;for(b=q.createCallback(b,c,3);f--&&b(a[f],f,a);)d++}else d=null==b||c?1:b||d;return n(a,0,ce(be(0,e-d),e))}function Ac(){for(var c=[],d=-1,e=arguments.length,g=h(),i=pb(),j=i===a,k=h();++d<e;){var n=arguments[d];(ke(n)||tb(n))&&(c.push(n),g.push(j&&n.length>=v&&f(d?c[d]:k)))}var o=c[0],p=-1,q=o?o.length:0,r=[];a:for(;++p<q;){var s=g[0];if(n=o[p],(s?b(s,n):i(k,n))<0){for(d=e,(s||k).push(n);--d;)if(s=g[d],(s?b(s,n):i(c[d],n))<0)continue a;r.push(n)}}for(;e--;)s=g[e],s&&m(s);return l(g),l(k),r}function Bc(a,b,c){var d=0,e=a?a.length:0;if("number"!=typeof b&&null!=b){var f=e;for(b=q.createCallback(b,c,3);f--&&b(a[f],f,a);)d++}else if(d=b,null==d||c)return a?a[e-1]:p;return n(a,be(0,e-d))}function Cc(a,b,c){var d=a?a.length:0;for("number"==typeof c&&(d=(0>c?be(0,d+c):ce(c,d-1))+1);d--;)if(a[d]===b)return d;return-1}function Dc(a){for(var b=arguments,c=0,d=b.length,e=a?a.length:0;++c<d;)for(var f=-1,g=b[c];++f<e;)a[f]===g&&(Vd.call(a,f--,1),e--);return a}function Ec(a,b,c){a=+a||0,c="number"==typeof c?c:+c||1,null==b&&(b=a,a=0);for(var d=-1,e=be(0,Md((b-a)/(c||1))),f=ud(e);++d<e;)f[d]=a,a+=c;return f}function Fc(a,b,c){var d=-1,e=a?a.length:0,f=[];for(b=q.createCallback(b,c,3);++d<e;){var g=a[d];b(g,d,a)&&(f.push(g),Vd.call(a,d--,1),e--)}return f}function Gc(a,b,c){if("number"!=typeof b&&null!=b){var d=0,e=-1,f=a?a.length:0;for(b=q.createCallback(b,c,3);++e<f&&b(a[e],e,a);)d++}else d=null==b||c?1:be(0,b);return n(a,d)}function Hc(a,b,c,d){var e=0,f=a?a.length:e;for(c=c?q.createCallback(c,d,1):ed,b=c(b);f>e;){var g=e+f>>>1;c(a[g])<b?e=g+1:f=g}return e}function Ic(){return kb(gb(arguments,!0,!0))}function Jc(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c="function"!=typeof b&&d&&d[b]===a?null:b,b=!1),null!=c&&(c=q.createCallback(c,d,3)),kb(a,b,c)}function Kc(a){return eb(a,n(arguments,1))}function Lc(){for(var a=-1,b=arguments.length;++a<b;){var c=arguments[a];if(ke(c)||tb(c))var d=d?kb(eb(d,c).concat(eb(c,d))):c}return d||[]}function Mc(){for(var a=arguments.length>1?arguments:arguments[0],b=-1,c=a?hc(De(a,"length")):0,d=ud(0>c?0:c);++b<c;)d[b]=De(a,b);return d}function Nc(a,b){var c=-1,d=a?a.length:0,e={};for(b||!d||ke(a[0])||(b=[]);++c<d;){var f=a[c];b?e[f]=b[c]:f&&(e[f[0]]=f[1])}return e}function Oc(a,b){if(!Kb(b))throw new Ed;return function(){return--a<1?b.apply(this,arguments):void 0}}function Pc(a,b){return arguments.length>2?mb(a,17,n(arguments,2),null,b):mb(a,1,null,null,b)}function Qc(a){for(var b=arguments.length>1?gb(arguments,!0,!1,1):Bb(a),c=-1,d=b.length;++c<d;){var e=b[c];a[e]=mb(a[e],1,null,null,a)}return a}function Rc(a,b){return arguments.length>2?mb(b,19,n(arguments,2),null,a):mb(b,3,null,null,a)}function Sc(){for(var a=arguments,b=a.length;b--;)if(!Kb(a[b]))throw new Ed;return function(){for(var b=arguments,c=a.length;c--;)b=[a[c].apply(this,b)];return b[0]}}function Tc(a,b){return b="number"==typeof b?b:+b||a.length,mb(a,4,null,null,null,b)}function Uc(a,b,c){var d,e,f,g,h,i,j,k=0,l=!1,m=!0;if(!Kb(a))throw new Ed;if(b=be(0,b)||0,c===!0){var n=!0;m=!1}else Lb(c)&&(n=c.leading,l="maxWait"in c&&(be(b,c.maxWait)||0),m="trailing"in c?c.trailing:m);var o=function(){var c=b-(Fe()-g);if(0>=c){e&&Nd(e);var l=j;e=i=j=p,l&&(k=Fe(),f=a.apply(h,d),i||e||(d=h=null))}else i=Ud(o,c)},q=function(){i&&Nd(i),e=i=j=p,(m||l!==b)&&(k=Fe(),f=a.apply(h,d),i||e||(d=h=null))};return function(){if(d=arguments,g=Fe(),h=this,j=m&&(i||!n),l===!1)var c=n&&!i;else{e||n||(k=g);var p=l-(g-k),r=0>=p;r?(e&&(e=Nd(e)),k=g,f=a.apply(h,d)):e||(e=Ud(q,p))}return r&&i?i=Nd(i):i||b===l||(i=Ud(o,b)),c&&(r=!0,f=a.apply(h,d)),!r||i||e||(d=h=null),f}}function Vc(a){if(!Kb(a))throw new Ed;var b=n(arguments,1);return Ud(function(){a.apply(p,b)},1)}function Wc(a,b){if(!Kb(a))throw new Ed;var c=n(arguments,2);return Ud(function(){a.apply(p,c)},b)}function Xc(a,b){if(!Kb(a))throw new Ed;var c=function(){var d=c.cache,e=b?b.apply(this,arguments):u+arguments[0];return Rd.call(d,e)?d[e]:d[e]=a.apply(this,arguments)};return c.cache={},c}function Yc(a){var b,c;if(!Kb(a))throw new Ed;return function(){return b?c:(b=!0,c=a.apply(this,arguments),a=null,c)}}function Zc(a){return mb(a,16,n(arguments,1))}function $c(a){return mb(a,32,null,n(arguments,1))}function _c(a,b,c){var d=!0,e=!0;if(!Kb(a))throw new Ed;return c===!1?d=!1:Lb(c)&&(d="leading"in c?c.leading:d,e="trailing"in c?c.trailing:e),X.leading=d,X.maxWait=b,X.trailing=e,Uc(a,b,X)}function ad(a,b){return mb(b,16,[a])}function bd(a){return function(){return a}}function cd(a,b,c){var d=typeof a;if(null==a||"function"==d)return cb(a,b,c);if("object"!=d)return id(a);var e=me(a),f=e[0],g=a[f];return 1!=e.length||g!==g||Lb(g)?function(b){for(var c=e.length,d=!1;c--&&(d=hb(b[e[c]],a[e[c]],null,!0)););return d}:function(a){var b=a[f];return g===b&&(0!==g||1/g==1/b)}}function dd(a){return null==a?"":Dd(a).replace(te,ob)}function ed(a){return a}function fd(a,b,c){var d=!0,e=b&&Bb(b);b&&(c||e.length)||(null==c&&(c=b),f=r,b=a,a=q,e=Bb(b)),c===!1?d=!1:Lb(c)&&"chain"in c&&(d=c.chain);var f=a,g=Kb(f);dc(e,function(c){var e=a[c]=b[c];g&&(f.prototype[c]=function(){var b=this.__chain__,c=this.__wrapped__,g=[c];Sd.apply(g,arguments);var h=e.apply(a,g);if(d||b){if(c===h&&Lb(h))return this;h=new f(h),h.__chain__=b}return h})})}function gd(){return c._=Jd,this}function hd(){}function id(a){return function(b){return b[a]}}function jd(a,b,c){var d=null==a,e=null==b;if(null==c&&("boolean"==typeof a&&e?(c=a,a=1):e||"boolean"!=typeof b||(c=b,e=!0)),d&&e&&(b=1),a=+a||0,e?(b=a,a=0):b=+b||0,c||a%1||b%1){var f=ee();return ce(a+f*(b-a+parseFloat("1e-"+((f+"").length-1))),b)}return jb(a,b)}function kd(a,b){if(a){var c=a[b];return Kb(c)?a[b]():c}}function ld(a,b,c){var d=q.templateSettings;a=Dd(a||""),c=we({},c,d);var e,f=we({},c.imports,d.imports),h=me(f),i=Yb(f),j=0,k=c.interpolate||G,l="__p += '",m=Cd((c.escape||G).source+"|"+k.source+"|"+(k===E?B:G).source+"|"+(c.evaluate||G).source+"|$","g");a.replace(m,function(b,c,d,f,h,i){return d||(d=f),l+=a.slice(j,i).replace(I,g),c&&(l+="' +\n__e("+c+") +\n'"),h&&(e=!0,l+="';\n"+h+";\n__p += '"),d&&(l+="' +\n((__t = ("+d+")) == null ? '' : __t) +\n'"),j=i+b.length,b}),l+="';\n";var n=c.variable,o=n;o||(n="obj",l="with ("+n+") {\n"+l+"\n}\n"),l=(e?l.replace(y,""):l).replace(z,"$1").replace(A,"$1;"),l="function("+n+") {\n"+(o?"":n+" || ("+n+" = {});\n")+"var __t, __p = '', __e = _.escape"+(e?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+l+"return __p\n}";var r="\n/*\n//# sourceURL="+(c.sourceURL||"/lodash/template/source["+L++ +"]")+"\n*/";try{var s=yd(h,"return "+l+r).apply(p,i)}catch(t){throw t.source=l,t}return b?s(b):(s.source=l,s)}function md(a,b,c){a=(a=+a)>-1?a:0;var d=-1,e=ud(a);for(b=cb(b,c,1);++d<a;)e[d]=b(d);return e}function nd(a){return null==a?"":Dd(a).replace(se,sb)}function od(a){var b=++s;return Dd(null==a?"":a)+b}function pd(a){return a=new r(a),a.__chain__=!0,a}function qd(a,b){return b(a),a}function rd(){return this.__chain__=!0,this}function sd(){return Dd(this.__wrapped__)}function td(){return this.__wrapped__}c=c?fb.defaults(ab.Object(),c,fb.pick(ab,J)):ab;var ud=c.Array,vd=c.Boolean,wd=c.Date,xd=c.Error,yd=c.Function,zd=c.Math,Ad=c.Number,Bd=c.Object,Cd=c.RegExp,Dd=c.String,Ed=c.TypeError,Fd=[],Gd=xd.prototype,Hd=Bd.prototype,Id=Dd.prototype,Jd=c._,Kd=Hd.toString,Ld=Cd("^"+Dd(Kd).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Md=zd.ceil,Nd=c.clearTimeout,Od=zd.floor,Pd=yd.prototype.toString,Qd=qb(Qd=Bd.getPrototypeOf)&&Qd,Rd=Hd.hasOwnProperty,Sd=Fd.push,Td=Hd.propertyIsEnumerable,Ud=c.setTimeout,Vd=Fd.splice,Wd=Fd.unshift,Xd=function(){try{var a={},b=qb(b=Bd.defineProperty)&&b,c=b(a,a,a)&&b}catch(d){}return c}(),Yd=qb(Yd=Bd.create)&&Yd,Zd=qb(Zd=ud.isArray)&&Zd,$d=c.isFinite,_d=c.isNaN,ae=qb(ae=Bd.keys)&&ae,be=zd.max,ce=zd.min,de=c.parseInt,ee=zd.random,fe={};fe[N]=ud,fe[O]=vd,fe[P]=wd,fe[R]=yd,fe[T]=Bd,fe[S]=Ad,fe[U]=Cd,fe[V]=Dd;var ge={};ge[N]=ge[P]=ge[S]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},ge[O]=ge[V]={constructor:!0,toString:!0,valueOf:!0},ge[Q]=ge[R]=ge[U]={constructor:!0,toString:!0},ge[T]={constructor:!0},function(){for(var a=K.length;a--;){var b=K[a];for(var c in ge)Rd.call(ge,c)&&!Rd.call(ge[c],b)&&(ge[c][b]=!1)}}(),r.prototype=q.prototype;var he=q.support={};!function(){var a=function(){this.x=1},b={0:1,length:1},d=[];a.prototype={valueOf:1,y:1};for(var e in new a)d.push(e);for(e in arguments);he.argsClass=Kd.call(arguments)==M,he.argsObject=arguments.constructor==Bd&&!(arguments instanceof ud),he.enumErrorProps=Td.call(Gd,"message")||Td.call(Gd,"name"),he.enumPrototypes=Td.call(a,"prototype"),he.funcDecomp=!qb(c.WinRTError)&&H.test(o),he.funcNames="string"==typeof yd.name,he.nonEnumArgs=0!=e,he.nonEnumShadows=!/valueOf/.test(d),he.ownLast="x"!=d[0],he.spliceObjects=(Fd.splice.call(b,0,1),!b[0]),he.unindexedChars="x"[0]+Bd("x")[0]!="xx";try{he.nodeClass=!(Kd.call(document)==T&&!({toString:0}+""))}catch(f){he.nodeClass=!0}}(1),q.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:E,variable:"",imports:{_:q}};var ie=function(a){var b="var index, iterable = "+a.firstArg+", result = "+a.init+";\nif (!iterable) return result;\n"+a.top+";";a.array?(b+="\nvar length = iterable.length; index = -1;\nif ("+a.array+") {  ",he.unindexedChars&&(b+="\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "),b+="\n  while (++index < length) {\n    "+a.loop+";\n  }\n}\nelse {  "):he.nonEnumArgs&&(b+="\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      "+a.loop+";\n    }\n  } else {  "),he.enumPrototypes&&(b+="\n  var skipProto = typeof iterable == 'function';\n  "),he.enumErrorProps&&(b+="\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");var c=[];if(he.enumPrototypes&&c.push('!(skipProto && index == "prototype")'),he.enumErrorProps&&c.push('!(skipErrorProps && (index == "message" || index == "name"))'),a.useHas&&a.keys)b+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n",c.length&&(b+="    if ("+c.join(" && ")+") {\n  "),b+=a.loop+";    ",c.length&&(b+="\n    }"),b+="\n  }  ";else if(b+="\n  for (index in iterable) {\n",a.useHas&&c.push("hasOwnProperty.call(iterable, index)"),c.length&&(b+="    if ("+c.join(" && ")+") {\n  "),b+=a.loop+";    ",c.length&&(b+="\n    }"),b+="\n  }    ",he.nonEnumShadows){for(b+="\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ",k=0;7>k;k++)b+="\n    index = '"+a.shadowedProps[k]+"';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))",a.useHas||(b+=" || (!nonEnum[index] && iterable[index] !== objectProto[index])"),b+=") {\n      "+a.loop+";\n    }      ";b+="\n  }    "}return(a.array||he.nonEnumArgs)&&(b+="\n}"),b+=a.bottom+";\nreturn result"};Yd||(bb=function(){function a(){}return function(b){if(Lb(b)){a.prototype=b;var d=new a;a.prototype=null}return d||c.Object()}}());var je=Xd?function(a,b){Y.value=b,Xd(a,"__bindData__",Y)}:hd;he.argsClass||(tb=function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&Rd.call(a,"callee")&&!Td.call(a,"callee")||!1});var ke=Zd||function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&Kd.call(a)==N||!1},le=nb({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"}),me=ae?function(a){return Lb(a)?he.enumPrototypes&&"function"==typeof a||he.nonEnumArgs&&a.length&&tb(a)?le(a):ae(a):[]}:le,ne={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",array:"typeof length == 'number'",keys:me,loop:"if (callback(iterable[index], index, collection) === false) return result"},oe={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",keys:me,loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},pe={top:"if (!objectTypes[typeof iterable]) return result;\n"+ne.top,array:!1},qe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},re=Db(qe),se=Cd("("+me(re).join("|")+")","g"),te=Cd("["+me(qe).join("")+"]","g"),ue=nb(ne),ve=nb(oe,{top:oe.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),we=nb(oe),xe=nb(ne,pe,{useHas:!1}),ye=nb(ne,pe);Kb(/x/)&&(Kb=function(a){return"function"==typeof a&&Kd.call(a)==R});var ze=Qd?function(a){if(!a||Kd.call(a)!=T||!he.argsClass&&tb(a))return!1;var b=a.valueOf,c=qb(b)&&(c=Qd(b))&&Qd(c);return c?a==c||Qd(a)==c:rb(a)}:rb,Ae=lb(function(a,b,c){Rd.call(a,c)?a[c]++:a[c]=1}),Be=lb(function(a,b,c){(Rd.call(a,c)?a[c]:a[c]=[]).push(b)
}),Ce=lb(function(a,b,c){a[c]=b}),De=gc,Ee=ac,Fe=qb(Fe=wd.now)&&Fe||function(){return(new wd).getTime()},Ge=8==de(x+"08")?de:function(a,b){return de(Qb(a)?a.replace(F,""):a,b||0)};return q.after=Oc,q.assign=ve,q.at=Zb,q.bind=Pc,q.bindAll=Qc,q.bindKey=Rc,q.chain=pd,q.compact=sc,q.compose=Sc,q.constant=bd,q.countBy=Ae,q.create=wb,q.createCallback=cd,q.curry=Tc,q.debounce=Uc,q.defaults=we,q.defer=Vc,q.delay=Wc,q.difference=tc,q.filter=ac,q.flatten=xc,q.forEach=dc,q.forEachRight=ec,q.forIn=xe,q.forInRight=zb,q.forOwn=ye,q.forOwnRight=Ab,q.functions=Bb,q.groupBy=Be,q.indexBy=Ce,q.initial=zc,q.intersection=Ac,q.invert=Db,q.invoke=fc,q.keys=me,q.map=gc,q.mapValues=Sb,q.max=hc,q.memoize=Xc,q.merge=Tb,q.min=ic,q.omit=Ub,q.once=Yc,q.pairs=Vb,q.partial=Zc,q.partialRight=$c,q.pick=Wb,q.pluck=De,q.property=id,q.pull=Dc,q.range=Ec,q.reject=lc,q.remove=Fc,q.rest=Gc,q.shuffle=nc,q.sortBy=qc,q.tap=qd,q.throttle=_c,q.times=md,q.toArray=rc,q.transform=Xb,q.union=Ic,q.uniq=Jc,q.values=Yb,q.where=Ee,q.without=Kc,q.wrap=ad,q.xor=Lc,q.zip=Mc,q.zipObject=Nc,q.collect=gc,q.drop=Gc,q.each=dc,q.eachRight=ec,q.extend=ve,q.methods=Bb,q.object=Nc,q.select=ac,q.tail=Gc,q.unique=Jc,q.unzip=Mc,fd(q),q.clone=ub,q.cloneDeep=vb,q.contains=$b,q.escape=dd,q.every=_b,q.find=bc,q.findIndex=uc,q.findKey=xb,q.findLast=cc,q.findLastIndex=vc,q.findLastKey=yb,q.has=Cb,q.identity=ed,q.indexOf=yc,q.isArguments=tb,q.isArray=ke,q.isBoolean=Eb,q.isDate=Fb,q.isElement=Gb,q.isEmpty=Hb,q.isEqual=Ib,q.isFinite=Jb,q.isFunction=Kb,q.isNaN=Mb,q.isNull=Nb,q.isNumber=Ob,q.isObject=Lb,q.isPlainObject=ze,q.isRegExp=Pb,q.isString=Qb,q.isUndefined=Rb,q.lastIndexOf=Cc,q.mixin=fd,q.noConflict=gd,q.noop=hd,q.now=Fe,q.parseInt=Ge,q.random=jd,q.reduce=jc,q.reduceRight=kc,q.result=kd,q.runInContext=o,q.size=oc,q.some=pc,q.sortedIndex=Hc,q.template=ld,q.unescape=nd,q.uniqueId=od,q.all=_b,q.any=pc,q.detect=bc,q.findWhere=bc,q.foldl=jc,q.foldr=kc,q.include=$b,q.inject=jc,fd(function(){var a={};return ye(q,function(b,c){q.prototype[c]||(a[c]=b)}),a}(),!1),q.first=wc,q.last=Bc,q.sample=mc,q.take=wc,q.head=wc,ye(q,function(a,b){var c="sample"!==b;q.prototype[b]||(q.prototype[b]=function(b,d){var e=this.__chain__,f=a(this.__wrapped__,b,d);return e||null!=b&&(!d||c&&"function"==typeof b)?new r(f,e):f})}),q.VERSION="2.4.1",q.prototype.chain=rd,q.prototype.toString=sd,q.prototype.value=td,q.prototype.valueOf=td,ue(["join","pop","shift"],function(a){var b=Fd[a];q.prototype[a]=function(){var a=this.__chain__,c=b.apply(this.__wrapped__,arguments);return a?new r(c,a):c}}),ue(["push","reverse","sort","unshift"],function(a){var b=Fd[a];q.prototype[a]=function(){return b.apply(this.__wrapped__,arguments),this}}),ue(["concat","slice","splice"],function(a){var b=Fd[a];q.prototype[a]=function(){return new r(b.apply(this.__wrapped__,arguments),this.__chain__)}}),he.spliceObjects||ue(["pop","shift","splice"],function(a){var b=Fd[a],c="splice"==a;q.prototype[a]=function(){var a=this.__chain__,d=this.__wrapped__,e=b.apply(d,arguments);return 0===d.length&&delete d[0],a||c?new r(e,a):e}}),q}var p,q=[],r=[],s=0,t={},u=+new Date+"",v=75,w=40,x=" 	\f? ?�?\n\r\u2028\u2029?��? �?��?��?��?�??��?��?��?��?�??��?��?��?�??��",y=/\b__p \+= '';/g,z=/\b(__p \+=) '' \+/g,A=/(__e\(.*?\)|\b__t\)) \+\n'';/g,B=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,D=/^\s*function[ \n\r\t]+\w/,E=/<%=([\s\S]+?)%>/g,F=RegExp("^["+x+"]*0+(?=.$)"),G=/($^)/,H=/\bthis\b/,I=/['\n\r\t\u2028\u2029\\]/g,J=["Array","Boolean","Date","Error","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],K=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],L=0,M="[object Arguments]",N="[object Array]",O="[object Boolean]",P="[object Date]",Q="[object Error]",R="[object Function]",S="[object Number]",T="[object Object]",U="[object RegExp]",V="[object String]",W={};W[R]=!1,W[M]=W[N]=W[O]=W[P]=W[S]=W[T]=W[U]=W[V]=!0;var X={leading:!1,maxWait:0,trailing:!1},Y={configurable:!1,enumerable:!1,value:null,writable:!1},Z={args:"",array:null,bottom:"",firstArg:"",init:"",keys:null,loop:"",shadowedProps:null,support:null,top:"",useHas:!1},$={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},_={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},ab=$[typeof window]&&window||this,bb=$[typeof exports]&&exports&&!exports.nodeType&&exports,cb=$[typeof module]&&module&&!module.nodeType&&module,db=cb&&cb.exports===bb&&bb,eb=$[typeof global]&&global;!eb||eb.global!==eb&&eb.window!==eb||(ab=eb);var fb=o();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(ab._=fb,define(function(){return fb})):bb&&cb?db?(cb.exports=fb)._=fb:bb._=fb:ab._=fb}.call(this);
(function() {
  "Alchemy.js is a graph drawing application for the web.\nCopyright (C) 2014  GraphAlchemist, Inc.\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\nlets";
  var Alchemy, Clustering, DrawEdge, DrawEdges, DrawNode, DrawNodes, Editor, EditorInteractions, EditorUtils, Layout, root, warnings,
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Alchemy = (function() {
    function Alchemy(userConf) {
      if (userConf == null) {
        userConf = null;
      }
      this.a = this;
      this.version = "0.4.1";
      this.get = new this.Get(this);
      this.remove = new this.Remove(this);
      this.create = new this.Create(this);
      this.set = new this.Set(this);
      this.drawing = {
        DrawEdge: DrawEdge(this),
        DrawEdges: DrawEdges(this),
        DrawNode: DrawNode(this),
        DrawNodes: DrawNodes(this),
        EdgeUtils: this.EdgeUtils(this),
        NodeUtils: this.NodeUtils(this)
      };
      this.controlDash = this.controlDash(this);
      this.stats = this.stats(this);
      this.layout = Layout;
      this.clustering = Clustering;
      this.models = {
        Node: this.Node(this),
        Edge: this.Edge(this)
      };
      this.utils = {
        warnings: new warnings(this)
      };
      this.filters = this.filters(this);
      this.exports = this.exports(this);
      this.visControls = {};
      this.styles = {};
      this.editor = {};
      this.log = {};
      this.state = {
        "interactions": "default",
        "layout": "default"
      };
      this.startGraph = this.startGraph(this);
      this.updateGraph = this.updateGraph(this);
      this.generateLayout = this.generateLayout(this);
      this.svgStyles = this.svgStyles(this);
      this.interactions = this.interactions(this);
      this.search = this.search(this);
      this.plugins = this.plugins(this);
      this._nodes = {};
      this._edges = {};
      this.getNodes = this.get.getNodes;
      this.getEdges = this.get.getEdges;
      this.allNodes = this.get.allNodes;
      this.allEdges = this.get.allEdges;
      if (userConf) {
        this.begin(userConf);
      }
    }

    Alchemy.prototype.begin = function(userConf) {
      var conf;
      conf = this.setConf(userConf);
      switch (typeof this.conf.dataSource) {
        case 'string':
          d3.json(this.a.conf.dataSource, this.a.startGraph);
          break;
        case 'object':
          this.a.startGraph(this.a.conf.dataSource);
      }
      this.plugins.init();
      Alchemy.prototype.instances.push(this);
      return this;
    };

    Alchemy.prototype.setConf = function(userConf) {
      var key, val;
      if (userConf.theme != null) {
        userConf = _.merge(_.cloneDeep(this.defaults), this.a.themes["" + userConf.theme]);
      }
      for (key in userConf) {
        val = userConf[key];
        switch (key) {
          case "clusterColors":
            userConf["clusterColours"] = val;
            break;
          case "backgroundColor":
            userConf["backgroundColour"] = val;
            break;
          case "nodeColor":
            userConf[nodeColour] = val;
        }
      }
      return this.a.conf = _.merge(_.cloneDeep(this.defaults), userConf);
    };

    Alchemy.prototype.instances = [];

    Alchemy.prototype.getInst = function(svg) {
      var instNumber;
      instNumber = parseInt(d3.select(svg).attr("alchInst"));
      return Alchemy.prototype.instances[instNumber];
    };

    return Alchemy;

  })();

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Alchemy = Alchemy;

  root.alchemy = {
    begin: function(config) {
      return root.alchemy = new Alchemy(config);
    }
  };

  Alchemy.prototype.Create = (function() {
    function Create(instance) {
      this.a = instance;
    }

    Create.prototype.nodes = function() {
      var a, n, nodeMap, nodeMaps, registerNode, _i, _len;
      nodeMap = arguments[0], nodeMaps = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      a = this.a;
      registerNode = function(node) {
        var aNode;
        if (!a._nodes[node.id]) {
          aNode = new a.models.Node(node);
          a._nodes[node.id] = aNode;
          return [aNode];
        } else {
          return console.warn("A node with the id " + node.id + " already exists.\nConsider using the @a.get.nodes() method to \nretrieve the node and then using the Node methods.");
        }
      };
      nodeMaps = _.union(nodeMaps, nodeMap);
      for (_i = 0, _len = nodeMaps.length; _i < _len; _i++) {
        n = nodeMaps[_i];
        registerNode(n);
      }
      if (this.a.initial) {
        return this.a.updateGraph();
      }
    };

    Create.prototype.edges = function() {
      var a, allEdges, edgeMap, edgeMaps, registerEdge;
      edgeMap = arguments[0], edgeMaps = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      a = this.a;
      registerEdge = function(edge) {
        var aEdge, edgeArray;
        if (edge.id && !a._edges[edge.id]) {
          aEdge = new a.models.Edge(edge);
          a._edges[edge.id] = [aEdge];
          return [aEdge];
        } else if (edge.id && a._edges[edge.id]) {
          return console.warn("An edge with that id " + someEdgeMap.id + " already exists.\nConsider using the @a.get.edge() method to \nretrieve the edge and then using the Edge methods.\nNote: id's are not required for edges.  Alchemy will create\nan unlimited number of edges for the same source and target node.\nSimply omit 'id' when creating the edge.");
        } else {
          edgeArray = a._edges["" + edge.source + "-" + edge.target];
          if (edgeArray) {
            aEdge = new a.models.Edge(edge, edgeArray.length);
            edgeArray.push(aEdge);
            return [aEdge];
          } else {
            aEdge = new a.models.Edge(edge, 0);
            a._edges["" + edge.source + "-" + edge.target] = [aEdge];
            return [aEdge];
          }
        }
      };
      allEdges = _.uniq(_.flatten(arguments));
      _.each(allEdges, function(e) {
        return registerEdge(e);
      });
      if (this.a.initial) {
        return this.a.updateGraph();
      }
    };

    return Create;

  })();

  Alchemy.prototype.Get = function(instance) {
    return {
      a: instance,
      _el: [],
      _elType: null,
      _makeChain: function(inp) {
        var returnedGet;
        returnedGet = this;
        returnedGet.__proto__ = [].__proto__;
        while (returnedGet.length) {
          returnedGet.pop();
        }
        _.each(inp, function(e) {
          return returnedGet.push(e);
        });
        return returnedGet;
      },
      nodes: function() {
        var a, allIDs, id, ids, nodeList;
        id = arguments[0], ids = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (id != null) {
          allIDs = _.map(arguments, function(arg) {
            return String(arg);
          });
          a = this.a;
          nodeList = (function(a) {
            return _.filter(a._nodes, function(val, key) {
              if (_.contains(allIDs, key)) {
                return val;
              }
            });
          })(a);
        }
        this._elType = "node";
        this._el = nodeList;
        return this._makeChain(nodeList);
      },
      edges: function() {
        var a, allIDs, edgeList, id, ids;
        id = arguments[0], ids = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (id != null) {
          allIDs = _.map(arguments, function(arg) {
            return String(arg);
          });
          a = this.a;
          edgeList = (function(a) {
            return _.flatten(_.filter(a._edges, function(val, key) {
              if (_.contains(allIDs, key)) {
                return val;
              }
            }));
          })(a);
        }
        this._elType = "edge";
        this._el = edgeList;
        return this._makeChain(edgeList);
      },
      all: function() {
        var a, elType;
        a = this.a;
        elType = this._elType;
        this._el = (function(elType) {
          switch (elType) {
            case "node":
              return a.elements.nodes.val;
            case "edge":
              return a.elements.edges.flat;
          }
        })(elType);
        return this._makeChain(this._el);
      },
      elState: function(state) {
        var elList;
        elList = _.filter(this._el, function(e) {
          return e._state === state;
        });
        this._el = elList;
        return this._makeChain(elList);
      },
      state: function(key) {
        if (this.a.state.key != null) {
          return this.a.state.key;
        }
      },
      type: function(type) {
        var elList;
        elList = _.filter(this._el, function(e) {
          return e._nodeType === type || e._edgeType === type;
        });
        this._el = elList;
        return this._makeChain(elList);
      },
      activeNodes: function() {
        return _.filter(this.a._nodes, function(node) {
          if (node._state === "active") {
            return node;
          }
        });
      },
      activeEdges: function() {
        return _.filter(this.a.get.allEdges(), function(edge) {
          if (edge._state === "active") {
            return edge;
          }
        });
      },
      state: function(key) {
        if (this.a.state.key != null) {
          return this.a.state.key;
        }
      },
      clusters: function() {
        var clusterMap, nodesByCluster;
        clusterMap = this.a.layout._clustering.clusterMap;
        nodesByCluster = {};
        _.each(clusterMap, function(key, value) {
          return nodesByCluster[value] = _.select(this.a.get.allNodes(), function(node) {
            return node.getProperties()[this.a.conf.clusterKey] === value;
          });
        });
        return nodesByCluster;
      },
      clusterColours: function() {
        var clusterColoursObject, clusterMap;
        clusterMap = this.a.layout._clustering.clusterMap;
        clusterColoursObject = {};
        _.each(clusterMap, function(key, value) {
          return clusterColoursObject[value] = this.a.conf.clusterColours[key % this.a.conf.clusterColours.length];
        });
        return clusterColoursObject;
      },
      allEdges: function() {
        return this.a.elements.nodes.flat;
      },
      allNodes: function(type) {
        if (type != null) {
          return _.filter(this.a._nodes, function(n) {
            if (n._nodeType === type) {
              return n;
            }
          });
        } else {
          return this.a.elements.nodes.val;
        }
      },
      getNodes: function() {
        var a, id, ids;
        id = arguments[0], ids = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        a = this.a;
        ids.push(id);
        return _.map(ids, function(id) {
          return a._nodes[id];
        });
      },
      getEdges: function(id, target) {
        var a, edge_id;
        if (id == null) {
          id = null;
        }
        if (target == null) {
          target = null;
        }
        a = this.a;
        if ((id != null) && (target != null)) {
          edge_id = "" + id + "-" + target;
          return this.a._edges[edge_id];
        } else if ((id != null) && (target == null)) {
          return this.a._nodes[id]._adjacentEdges;
        }
      }
    };
  };

  Alchemy.prototype.Remove = (function() {
    function Remove(instance) {
      this.a = instance;
    }

    Remove.prototype.nodes = function(nodeMap) {
      return _.each(nodeMap, function(n) {
        if (n._nodeType != null) {
          return n.remove();
        }
      });
    };

    Remove.prototype.edges = function(edgeMap) {
      return _.each(edgeMap, function(e) {
        if (e._edgeType != null) {
          return e.remove();
        }
      });
    };

    return Remove;

  })();

  Alchemy.prototype.Set = function(instance) {
    return {
      a: instance,
      state: function(key, value) {
        return this.a.state.key = value;
      }
    };
  };

  Clustering = (function() {
    function Clustering(instance) {
      var clustering, conf, nodes, _charge, _friction, _gravity, _linkDistancefn, _linkStrength;
      this.a = instance;
      nodes = this.a._nodes;
      conf = this.a.conf;
      clustering = this;
      this.clusterKey = conf.clusterKey;
      this.identifyClusters(this.a);
      _charge = -500;
      _linkStrength = function(edge) {
        var sourceCluster, targetCluster;
        sourceCluster = nodes[edge.source.id]._properties[this.clusterKey];
        targetCluster = nodes[edge.target.id]._properties[this.clusterKey];
        if (sourceCluster === targetCluster) {
          return 0.15;
        } else {
          return 0;
        }
      };
      _friction = function() {
        return 0.7;
      };
      _linkDistancefn = function(edge) {
        nodes = edge.self.a._nodes;
        if (nodes[edge.source.id]._properties.root || nodes[edge.target.id]._properties.root) {
          return 300;
        } else if (nodes[edge.source.id]._properties[this.clusterKey] === nodes[edge.target.id]._properties[this.clusterKey]) {
          return 10;
        } else {
          return 600;
        }
      };
      _gravity = function(k) {
        return 8 * k;
      };
      this.layout = {
        charge: _charge,
        linkStrength: function(edge) {
          return _linkStrength(edge);
        },
        friction: function() {
          return _friction();
        },
        linkDistancefn: function(edge) {
          return _linkDistancefn(edge);
        },
        gravity: function(k) {
          return _gravity(k);
        }
      };
    }

    Clustering.prototype.identifyClusters = function(a) {
      var clusters, nodes, _i, _ref, _results;
      nodes = a.elements.nodes.val;
      clusters = _.uniq(_.map(nodes, function(node) {
        return node.getProperties()[a.conf.clusterKey];
      }));
      return this.clusterMap = _.zipObject(clusters, (function() {
        _results = [];
        for (var _i = 0, _ref = clusters.length; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this));
    };

    Clustering.prototype.getClusterColour = function(clusterValue) {
      var index;
      index = this.clusterMap[clusterValue] % this.a.conf.clusterColours.length;
      return this.a.conf.clusterColours[index];
    };

    Clustering.prototype.edgeGradient = function(edges) {
      var Q, defs, edge, endColour, gradient, gradient_id, id, ids, nodes, startColour, _i, _len, _ref, _results;
      defs = this.a.vis.select("" + this.a.conf.divSelector + " svg");
      Q = {};
      nodes = this.a._nodes;
      _ref = _.map(edges, function(edge) {
        return edge._d3;
      });
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        edge = _ref[_i];
        if (nodes[edge.source.id]._properties.root || nodes[edge.target.id]._properties.root) {
          continue;
        }
        if (nodes[edge.source.id]._properties[this.clusterKey] === nodes[edge.target.id]._properties[this.clusterKey]) {
          continue;
        }
        if (nodes[edge.target.id]._properties[this.clusterKey] !== nodes[edge.source.id]._properties[this.clusterKey]) {
          id = nodes[edge.source.id]._properties[this.clusterKey] + "-" + nodes[edge.target.id]._properties[this.clusterKey];
          if (id in Q) {
            continue;
          } else if (!(id in Q)) {
            startColour = this.getClusterColour(nodes[edge.target.id]._properties[this.clusterKey]);
            endColour = this.getClusterColour(nodes[edge.source.id]._properties[this.clusterKey]);
            Q[id] = {
              'startColour': startColour,
              'endColour': endColour
            };
          }
        }
      }
      _results = [];
      for (ids in Q) {
        gradient_id = "cluster-gradient-" + ids;
        gradient = defs.append("svg:linearGradient").attr("id", gradient_id);
        gradient.append("svg:stop").attr("offset", "0%").attr("stop-color", Q[ids]['startColour']);
        _results.push(gradient.append("svg:stop").attr("offset", "100%").attr("stop-color", Q[ids]['endColour']));
      }
      return _results;
    };

    return Clustering;

  })();

  Alchemy.prototype.clusterControls = {
    init: function() {
      var changeClusterHTML;
      changeClusterHTML = "<input class='form-control form-inline' id='cluster-key' placeholder=\"Cluster Key\"></input>";
      this.a.dash.select("#clustering-container").append("div").attr("id", "cluster-key-container").attr('class', 'property form-inline form-group').html(changeClusterHTML).style("display", "none");
      this.a.dash.select("#cluster_control_header").on("click", function() {
        var display, element;
        element = this.a.dash.select("#cluster-key-container");
        return display = element.style("display");
      });
      element.style("display", function(e) {
        if (display === "block") {
          return "none";
        } else {
          return "block";
        }
      });
      if (this.a.dash.select("#cluster-key-container").style("display") === "none") {
        this.a.dash.select("#cluster-arrow").attr("class", "fa fa-2x fa-caret-right");
      } else {
        this.a.dash.select("#cluster-arrow").attr("class", "fa fa-2x fa-caret-down");
      }
      return this.a.dash.select("#cluster-key").on("keydown", function() {
        if (d3.event.keyIdentifier === "Enter") {
          this.a.conf.cluster = true;
          this.a.conf.clusterKey = this.value;
          return this.a.generateLayout();
        }
      });
    }
  };

  Alchemy.prototype.controlDash = function(instance) {
    var a;
    a = instance;
    return {
      init: function() {
        var divSelector;
        if (this.dashIsShown()) {
          divSelector = a.conf.divSelector;
          a.dash = d3.select("" + divSelector).append("div").attr("id", "control-dash-wrapper").attr("class", "col-md-4 initial");
          a.dash.append("i").attr("id", "dash-toggle").attr("class", "fa fa-flask col-md-offset-12");
          a.dash.append("div").attr("id", "control-dash").attr("class", "col-md-12");
          a.dash.select('#dash-toggle').on('click', a.interactions.toggleControlDash);
          a.controlDash.zoomCtrl();
          a.controlDash.search();
          a.controlDash.filters();
          a.controlDash.stats();
          a.controlDash.clustering();
          return a.controlDash.exports();
        }
      },
      search: function() {
        if (a.conf.search) {
          a.dash.select("#control-dash").append("div").attr("id", "search").html("<div class='input-group'>\n    <input class='form-control' placeholder='Search'>\n    <i class='input-group-addon search-icon'><span class='fa fa-search fa-1x'></span></i>\n</div> ");
          return a.search.init();
        }
      },
      zoomCtrl: function() {
        if (a.conf.zoomControls) {
          a.dash.select("#control-dash-wrapper").append("div").attr("id", "zoom-controls").attr("class", "col-md-offset-12").html("<button id='zoom-reset'  class='btn btn-defualt btn-primary'><i class='fa fa-crosshairs fa-lg'></i></button> <button id='zoom-in'  class='btn btn-defualt btn-primary'><i class='fa fa-plus'></i></button> <button id='zoom-out' class='btn btn-default btn-primary'><i class='fa fa-minus'></i></button>");
          a.dash.select('#zoom-in').on("click", function() {
            return a.interactions.clickZoom('in');
          });
          a.dash.select('#zoom-out').on("click", function() {
            return a.interactions.clickZoom('out');
          });
          return a.dash.select('#zoom-reset').on("click", function() {
            return a.interactions.clickZoom('reset');
          });
        }
      },
      filters: function() {
        if (a.conf.nodeFilters || a.conf.edgeFilters) {
          a.dash.select("#control-dash").append("div").attr("id", "filters");
          return a.filters.init();
        }
      },
      stats: function() {
        var stats_html;
        if (a.conf.nodeStats || a.conf.edgeStats) {
          stats_html = "<div id = \"stats-header\" data-toggle=\"collapse\" data-target=\"#stats #all-stats\">\n<h3>\n    Statistics\n</h3>\n<span class = \"fa fa-caret-right fa-2x\"></span>\n</div>\n<div id=\"all-stats\" class=\"collapse\">\n    <ul class = \"list-group\" id=\"node-stats\"></ul>\n    <ul class = \"list-group\" id=\"rel-stats\"></ul>  \n</div>";
          a.dash.select("#control-dash").append("div").attr("id", "stats").html(stats_html).select('#stats-header').on('click', function() {
            if (a.dash.select('#all-stats').classed("in")) {
              return a.dash.select("#stats-header>span").attr("class", "fa fa-2x fa-caret-right");
            } else {
              return a.dash.select("#stats-header>span").attr("class", "fa fa-2x fa-caret-down");
            }
          });
          return a.stats.init();
        }
      },
      exports: function() {
        var exports_html;
        if (a.conf.exportSVG) {
          exports_html = "<div id=\"exports-header\" data-toggle=\"collapse\" data-target=\"#all-exports\" style=\"padding:10px;\">\n    <h3>\n        Exports\n    </h3>\n    <span class=\"fa fa-caret-right fa-2x\"></span>\n</div>\n<div id=\"all-exports\" class=\"collapse\"></div>";
          a.dash.select("#control-dash").append("div").attr("id", "exports").attr("style", "padding: 0.5em 1em; border-bottom: thin dashed #E89619; color: white;").html(exports_html).select("#exports-header");
          return a.exports.init();
        }
      },
      clustering: function() {
        var clusterControl_html;
        if (a.conf.clusterControl) {
          clusterControl_html = "<div id=\"clustering-container\">\n    <div id=\"cluster_control_header\" data-toggle=\"collapse\" data-target=\"#clustering #cluster-options\">\n         <h3>Clustering</h3>\n        <span id=\"cluster-arrow\" class=\"fa fa-2x fa-caret-right\"></span>\n    </div>\n</div>";
          a.dash.select("#control-dash").append("div").attr("id", "clustering").html(clusterControl_html).select('#cluster_control_header');
          return a.clusterControls.init();
        }
      },
      dashIsShown: function() {
        var conf;
        conf = a.conf;
        return conf.showEditor || conf.captionToggle || conf.toggleRootNodes || conf.removeElement || conf.clusterControl || conf.nodeStats || conf.edgeStats || conf.edgeFilters || conf.nodeFilters || conf.edgesToggle || conf.nodesToggle || conf.search || conf.exportSVG;
      }
    };
  };

  Alchemy.prototype.filters = (function(_this) {
    return function(instance) {
      var a;
      a = instance;
      return {
        init: function() {
          var caption, edgeType, edgeTypes, nodeKey, nodeType, nodeTypes, types, _i, _j, _len, _len1, _ref;
          a.filters.show();
          if (a.conf.edgeFilters) {
            a.filters.showEdgeFilters();
          }
          if (a.conf.nodeFilters) {
            a.filters.showNodeFilters();
          }
          if (a.conf.nodeTypes) {
            nodeKey = Object.keys(a.conf.nodeTypes);
            nodeTypes = '';
            _ref = a.conf.nodeTypes[nodeKey];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              nodeType = _ref[_i];
              caption = nodeType.replace('_', ' ');
              nodeTypes += "<li class='list-group-item nodeType' role='menuitem' id='li-" + nodeType + "' name=" + nodeType + ">" + caption + "</li>";
            }
            a.dash.select('#node-dropdown').html(nodeTypes);
          }
          if (a.conf.edgeTypes) {
            if (_.isPlainObject(a.conf.edgeTypes)) {
              types = _.values(a.conf.edgeTypes)[0];
            } else {
              types = a.conf.edgeTypes;
            }
            edgeTypes = '';
            for (_j = 0, _len1 = types.length; _j < _len1; _j++) {
              edgeType = types[_j];
              caption = edgeType.replace('_', ' ');
              edgeTypes += "<li class='list-group-item edgeType' role='menuitem' id='li-" + edgeType + "' name=" + edgeType + ">" + caption + "</li>";
            }
            a.dash.select('#rel-dropdown').html(edgeTypes);
          }
          if (a.conf.captionsToggle) {
            a.filters.captionsToggle();
          }
          if (a.conf.edgesToggle) {
            a.filters.edgesToggle();
          }
          if (a.conf.nodesToggle) {
            a.filters.nodesToggle();
          }
          return a.filters.update();
        },
        show: function() {
          var filter_html;
          filter_html = "<div id = \"filter-header\" data-toggle=\"collapse\" data-target=\"#filters form\">\n    <h3>Filters</h3>\n    <span class = \"fa fa-2x fa-caret-right\"></span>\n</div>\n    <form class=\"form-inline collapse\">\n    </form>";
          a.dash.select('#control-dash #filters').html(filter_html);
          a.dash.selectAll('#filter-header').on('click', function() {
            if (a.dash.select('#filters>form').classed("in")) {
              return a.dash.select("#filter-header>span").attr("class", "fa fa-2x fa-caret-right");
            } else {
              return a.dash.select("#filter-header>span").attr("class", "fa fa-2x fa-caret-down");
            }
          });
          return a.dash.select('#filters form');
        },
        showEdgeFilters: function() {
          var rel_filter_html;
          rel_filter_html = "<div id=\"filter-rel-header\" data-target = \"#rel-dropdown\" data-toggle=\"collapse\">\n    <h4>\n        Edge Types\n    </h4>\n    <span class=\"fa fa-lg fa-caret-right\"></span>\n</div>\n<ul id=\"rel-dropdown\" class=\"collapse list-group\" role=\"menu\">\n</ul>";
          a.dash.select('#filters form').append("div").attr("id", "filter-relationships").html(rel_filter_html);
          return a.dash.select("#filter-rel-header").on('click', function() {
            if (a.dash.select('#rel-dropdown').classed("in")) {
              return a.dash.select("#filter-rel-header>span").attr("class", "fa fa-lg fa-caret-right");
            } else {
              return a.dash.select("#filter-rel-header>span").attr("class", "fa fa-lg fa-caret-down");
            }
          });
        },
        showNodeFilters: function() {
          var node_filter_html;
          node_filter_html = "<div id=\"filter-node-header\" data-target = \"#node-dropdown\" data-toggle=\"collapse\">\n    <h4>\n        Node Types\n    </h4>\n    <span class=\"fa fa-lg fa-caret-right\"></span>\n</div>\n<ul id=\"node-dropdown\" class=\"collapse list-group\" role=\"menu\">\n</ul>";
          a.dash.select('#filters form').append("div").attr("id", "filter-nodes").html(node_filter_html);
          return a.dash.select("#filter-node-header").on('click', function() {
            if (a.dash.select('#node-dropdown').classed("in")) {
              return a.dash.select("#filter-node-header>span").attr("class", "fa fa-lg fa-caret-right");
            } else {
              return a.dash.select("#filter-node-header>span").attr("class", "fa fa-lg fa-caret-down");
            }
          });
        },
        captionsToggle: function() {
          return a.dash.select("#filters form").append("li").attr({
            "id": "toggle-captions",
            "class": "list-group-item active-label toggle"
          }).html("Show Captions").on("click", function() {
            var isDisplayed;
            isDisplayed = a.dash.select("g text").attr("style");
            if (isDisplayed === "display: block" || null) {
              return a.dash.selectAll("g text").attr("style", "display: none");
            } else {
              return a.dash.selectAll("g text").attr("style", "display: block");
            }
          });
        },
        edgesToggle: function() {
          return a.dash.select("#filters form").append("li").attr({
            "id": "toggle-edges",
            "class": "list-group-item active-label toggle"
          }).html("Toggle Edges").on("click", function() {
            if (_.contains(_.pluck(_.flatten(_.values(a._edges)), "_state"), "active")) {
              return _.each(_.values(a._edges), function(edges) {
                return _.each(edges, function(e) {
                  if (e._state === "active") {
                    return e.toggleHidden();
                  }
                });
              });
            } else {
              return _.each(_.values(a._edges), function(edges) {
                return _.each(edges, function(e) {
                  var source, target;
                  source = a._nodes[e._properties.source];
                  target = a._nodes[e._properties.target];
                  if (source._state === "active" && target._state === "active") {
                    return e.toggleHidden();
                  }
                });
              });
            }
          });
        },
        nodesToggle: function() {
          return a.dash.select("#filters form").append("li").attr({
            "id": "toggle-nodes",
            "class": "list-group-item active-label toggle"
          }).html("Toggle Nodes").on("click", function() {
            var nodes;
            nodes = _.values(a._nodes);
            if (_.contains(_.pluck(nodes, "_state"), "active")) {
              return _.each(nodes, function(n) {
                if (a.conf.toggleRootNodes && n._d3.root) {
                  return;
                }
                if (n._state === "active") {
                  return n.toggleHidden();
                }
              });
            } else {
              return _.each(_.values(a._nodes), function(n) {
                if (a.conf.toggleRootNodes && n._d3.root) {
                  return;
                }
                return n.toggleHidden();
              });
            }
          });
        },
        update: function() {
          return a.dash.selectAll(".nodeType, .edgeType").on("click", function() {
            var element, tag;
            element = d3.select(this);
            tag = element.attr("name");
            a.vis.selectAll("." + tag).each(function(d) {
              var edge, node, source, target;
              if (a._nodes[d.id] != null) {
                node = a._nodes[d.id];
                return node.toggleHidden();
              } else {
                edge = a._edges[d.id][0];
                source = a._nodes[edge._properties.source];
                target = a._nodes[edge._properties.target];
                if (source._state === "active" && target._state === "active") {
                  return edge.toggleHidden();
                }
              }
            });
            return a.stats.nodeStats();
          });
        }
      };
    };
  })(this);

  Alchemy.prototype.Index = function(instance, all) {
    var a, edges, elements, nodes;
    a = instance;
    elements = {
      nodes: {
        val: (function() {
          return _.values(a._nodes);
        })()
      },
      edges: {
        val: (function() {
          return _.values(a._edges);
        })()
      }
    };
    nodes = elements.nodes;
    edges = elements.edges;
    elements.edges.flat = (function() {
      return _.flatten(edges.val);
    })();
    elements.nodes.d3 = (function() {
      return _.map(nodes.val, function(n) {
        return n._d3;
      });
    })();
    elements.edges.d3 = (function() {
      return _.map(edges.flat, function(e) {
        return e._d3;
      });
    })();
    a.elements = elements;
    return function() {
      a.elements.nodes.svg = (function() {
        return a.vis.selectAll('g.node');
      })();
      return a.elements.edges.svg = (function() {
        return a.vis.selectAll('g.edge');
      })();
    };
  };

  Alchemy.prototype.interactions = function(instance) {
    var a;
    a = instance;
    return {
      edgeClick: function(d) {
        var edge;
        if (d3.event.defaultPrevented) {
          return;
        }
        d3.event.stopPropagation();
        edge = d.self;
        if (typeof a.conf.edgeClick === 'function') {
          a.conf.edgeClick(edge);
        }
        if (edge._state !== "hidden") {
          edge._state = (function() {
            if (edge._state === "selected") {
              return "active";
            }
            return "selected";
          })();
          return edge.setStyles();
        }
      },
      edgeMouseOver: function(d) {
        var edge;
        edge = d.self;
        if (edge._state !== "hidden") {
          if (edge._state !== "selected") {
            edge._state = "highlighted";
          }
          return edge.setStyles();
        }
      },
      edgeMouseOut: function(d) {
        var edge;
        edge = d.self;
        if (edge._state !== "hidden") {
          if (edge._state !== "selected") {
            edge._state = "active";
          }
          return edge.setStyles();
        }
      },
      nodeMouseOver: function(n) {
        var node;
        node = n.self;
        if (node._state !== "hidden") {
          if (node._state !== "selected") {
            node._state = "highlighted";
            node.setStyles();
          }
          if (typeof a.conf.nodeMouseOver === 'function') {
            return a.conf.nodeMouseOver(node);
          } else if (typeof a.conf.nodeMouseOver === ('number' || 'string')) {
            return node.properties[a.conf.nodeMouseOver];
          }
        }
      },
      nodeMouseOut: function(n) {
        var node;
        node = n.self;
        a = node.a;
        if (node._state !== "hidden") {
          if (node._state !== "selected") {
            node._state = "active";
            node.setStyles();
          }
          if ((a.conf.nodeMouseOut != null) && typeof a.conf.nodeMouseOut === 'function') {
            return a.conf.nodeMouseOut(n);
          }
        }
      },
      nodeClick: function(n) {
        var node;
        if (d3.event.defaultPrevented) {
          return;
        }
        d3.event.stopPropagation();
        node = n.self;
        if (typeof a.conf.nodeClick === 'function') {
          a.conf.nodeClick(node);
        }
        if (node._state !== "hidden") {
          node._state = (function() {
            if (node._state === "selected") {
              return "active";
            }
            return "selected";
          })();
          return node.setStyles();
        }
      },
      zoom: function(extent) {
        if (this._zoomBehavior == null) {
          this._zoomBehavior = d3.behavior.zoom();
        }
        return this._zoomBehavior.scaleExtent(extent).on("zoom", function(d) {
          a = Alchemy.prototype.getInst(this);
          return a.vis.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
        });
      },
      clickZoom: function(direction) {
        var scale, x, y, _ref;
        _ref = a.vis.attr("transform").match(/(-*\d+\.*\d*)/g).map(function(a) {
          return parseFloat(a);
        }), x = _ref[0], y = _ref[1], scale = _ref[2];
        a.vis.attr("transform", function() {
          if (direction === "in") {
            if (scale < a.conf.scaleExtent[1]) {
              scale += 0.2;
            }
            return "translate(" + x + "," + y + ") scale(" + scale + ")";
          } else if (direction === "out") {
            if (scale > a.conf.scaleExtent[0]) {
              scale -= 0.2;
            }
            return "translate(" + x + "," + y + ") scale(" + scale + ")";
          } else if (direction === "reset") {
            return "translate(0,0) scale(1)";
          } else {
            return console.log('error');
          }
        });
        if (this._zoomBehavior == null) {
          this._zoomBehavior = d3.behavior.zoom();
        }
        return this._zoomBehavior.scale(scale).translate([x, y]);
      },
      nodeDragStarted: function(d, i) {
        d3.event.preventDefault;
        d3.event.sourceEvent.stopPropagation();
        d3.select(this).classed("dragging", true);
        return d.fixed = true;
      },
      nodeDragged: function(d, i) {
        var edges, node;
        a = d.self.a;
        d.x += d3.event.dx;
        d.y += d3.event.dy;
        d.px += d3.event.dx;
        d.py += d3.event.dy;
        node = d3.select(this);
        node.attr("transform", "translate(" + d.x + ", " + d.y + ")");
        edges = d.self._adjacentEdges;
        return _.each(edges, function(edge) {
          var selection;
          selection = a.vis.select("#edge-" + edge.id + "-" + edge._index);
          return a._drawEdges.updateEdge(selection.data()[0]);
        });
      },
      nodeDragended: function(d, i) {
        a = d.self.a;
        d3.select(this).classed({
          "dragging": false
        });
        if (!a.conf.forceLocked) {
          return a.force.start();
        }
      },
      nodeDoubleClick: function(d) {
        return null;
      },
      deselectAll: function() {
        var _ref;
        a = Alchemy.prototype.getInst(this);
        if ((_ref = d3.event) != null ? _ref.defaultPrevented : void 0) {
          return;
        }
        if (a.conf.showEditor === true) {
          a.modifyElements.nodeEditorClear();
        }
        _.each(a._nodes, function(n) {
          n._state = "active";
          return n.setStyles();
        });
        _.each(a._edges, function(edge) {
          return _.each(edge, function(e) {
            e._state = "active";
            return e.setStyles();
          });
        });
        if (a.conf.deselectAll && typeof (a.conf.deselectAll === 'function')) {
          return a.conf.deselectAll();
        }
      }
    };
  };

  Layout = (function() {
    function Layout(instance) {
      this.tick = __bind(this.tick, this);
      this.linkStrength = __bind(this.linkStrength, this);
      this.gravity = __bind(this.gravity, this);
      var a, conf, nodes;
      this.a = a = instance;
      conf = this.a.conf;
      nodes = this.a._nodes;
      this.k = Math.sqrt(Math.log(_.size(this.a._nodes)) / (conf.graphWidth() * conf.graphHeight()));
      this._clustering = new this.a.clustering(this.a);
      this.d3NodeInternals = a.elements.nodes.d3;
      if (conf.cluster) {
        this._charge = function() {
          return this._clustering.layout.charge;
        };
        this._linkStrength = function(edge) {
          return this._clustering.layout.linkStrength(edge);
        };
      } else {
        this._charge = function() {
          return -10 / this.k;
        };
        this._linkStrength = function(edge) {
          if (nodes[edge.source.id].getProperties('root') || nodes[edge.target.id].getProperties('root')) {
            return 1;
          } else {
            return 0.9;
          }
        };
      }
      if (conf.cluster) {
        this._linkDistancefn = function(edge) {
          return this._clustering.layout.linkDistancefn(edge);
        };
      } else if (conf.linkDistancefn === 'default') {
        this._linkDistancefn = function(edge) {
          return 1 / (this.k * 50);
        };
      } else if (typeof conf.linkDistancefn === 'number') {
        this._linkDistancefn = function(edge) {
          return conf.linkDistancefn;
        };
      } else if (typeof conf.linkDistancefn === 'function') {
        this._linkDistancefn = function(edge) {
          return conf.linkDistancefn(edge);
        };
      }
    }

    Layout.prototype.gravity = function() {
      if (this.a.conf.cluster) {
        return this._clustering.layout.gravity(this.k);
      } else {
        return 50 * this.k;
      }
    };

    Layout.prototype.linkStrength = function(edge) {
      return this._linkStrength(edge);
    };

    Layout.prototype.friction = function() {
      return 0.9;
    };

    Layout.prototype.collide = function(node) {
      var conf, nx1, nx2, ny1, ny2, r;
      conf = this.a.conf;
      r = 2 * (node.radius + node['stroke-width']) + conf.nodeOverlap;
      nx1 = node.x - r;
      nx2 = node.x + r;
      ny1 = node.y - r;
      ny2 = node.y + r;
      return function(quad, x1, y1, x2, y2) {
        var l, x, y;
        if (quad.point && (quad.point !== node)) {
          x = node.x - Math.abs(quad.point.x);
          y = node.y - quad.point.y;
          l = Math.sqrt(x * x + y * y);
          r = r;
          if (l < r) {
            l = (l - r) / l * conf.alpha;
            node.x -= x *= l;
            node.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      };
    };

    Layout.prototype.tick = function(draw) {
      var a, edges, node, nodes, q, _i, _len, _ref;
      a = this.a;
      nodes = a.elements.nodes.svg;
      edges = a.elements.edges.svg;
      if (a.conf.collisionDetection) {
        q = d3.geom.quadtree(this.d3NodeInternals);
        _ref = this.d3NodeInternals;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          node = _ref[_i];
          q.visit(this.collide(node));
        }
      }
      nodes.attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
      this.drawEdge = a.drawing.DrawEdge;
      this.drawEdge.styleText(edges);
      return this.drawEdge.styleLink(edges);
    };

    Layout.prototype.positionRootNodes = function() {
      var conf, container, i, n, rootNodes, _i, _len, _ref, _ref1, _results;
      conf = this.a.conf;
      container = {
        width: conf.graphWidth(),
        height: conf.graphHeight()
      };
      rootNodes = _.filter(this.a.elements.nodes.val, function(node) {
        return node.getProperties('root');
      });
      if (rootNodes.length === 1) {
        n = rootNodes[0];
        _ref = [container.width / 2, container.width / 2], n._d3.x = _ref[0], n._d3.px = _ref[1];
        _ref1 = [container.height / 2, container.height / 2], n._d3.y = _ref1[0], n._d3.py = _ref1[1];
        n._d3.fixed = true;
      } else {
        _results = [];
        for (i = _i = 0, _len = rootNodes.length; _i < _len; i = ++_i) {
          n = rootNodes[i];
          n._d3.x = container.width / Math.sqrt(rootNodes.length * (i + 1));
          n._d3.y = container.height / 2;
          _results.push(n._d3.fixed = true);
        }
        return _results;
      }
    };

    Layout.prototype.chargeDistance = function() {
      return 500;
    };

    Layout.prototype.linkDistancefn = function(edge) {
      return this._linkDistancefn(edge);
    };

    Layout.prototype.charge = function() {
      return this._charge();
    };

    return Layout;

  })();

  Alchemy.prototype.generateLayout = function(instance) {
    var a;
    a = instance;
    return function(start) {
      var conf;
      if (start == null) {
        start = false;
      }
      conf = a.conf;
      a.layout = new Layout(a);
      return a.force = d3.layout.force().size([conf.graphWidth(), conf.graphHeight()]).theta(1.0).gravity(a.layout.gravity()).friction(a.layout.friction()).nodes(a.elements.nodes.d3).links(a.elements.edges.d3).linkDistance(function(link) {
        return a.layout.linkDistancefn(link);
      }).linkStrength(function(link) {
        return a.layout.linkStrength(link);
      }).charge(a.layout.charge()).chargeDistance(a.layout.chargeDistance());
    };
  };

  Alchemy.prototype.search = function(instance) {
    var a;
    a = instance;
    return {
      init: function() {
        var searchBox;
        searchBox = a.dash.select("#search input");
        return searchBox.on("keyup", function() {
          var input;
          input = searchBox[0][0].value.toLowerCase();
          a.vis.selectAll(".node").classed("inactive", false);
          a.vis.selectAll("text").attr("style", function() {
            if (input !== "") {
              return "display: inline;";
            }
          });
          return a.vis.selectAll(".node").classed("inactive", function(node) {
            var DOMtext, hidden;
            DOMtext = d3.select(this).text();
            switch (a.conf.searchMethod) {
              case 'contains':
                hidden = DOMtext.toLowerCase().indexOf(input) < 0;
                break;
              case 'begins':
                hidden = DOMtext.toLowerCase().indexOf(input) !== 0;
            }
            if (hidden) {
              a.vis.selectAll("[source-target*='" + node.id + "']").classed("inactive", hidden);
            } else {
              a.vis.selectAll("[source-target*='" + node.id + "']").classed("inactive", function(edge) {
                var nodeIDs, sourceHidden, targetHidden;
                nodeIDs = [edge.source.id, edge.target.id];
                sourceHidden = a.vis.select("#node-" + nodeIDs[0]).classed("inactive");
                targetHidden = a.vis.select("#node-" + nodeIDs[1]).classed("inactive");
                return targetHidden || sourceHidden;
              });
            }
            return hidden;
          });
        });
      }
    };
  };

  Alchemy.prototype.startGraph = function(instance) {
    var a;
    a = instance;
    return function(data) {
      var conf, d3Edges, d3Nodes, defs, editor, editorInteractions;
      conf = a.conf;
      if (d3.select(conf.divSelector).empty()) {
        console.warn(a.utils.warnings.divWarning());
      }
      if (!data) {
        data = {
          nodes: [],
          edges: []
        };
        a.utils.warnings.dataWarning();
      }
      if (data.edges == null) {
        data.edges = [];
      }
      a.create.nodes(data.nodes);
      data.edges.forEach(function(e) {
        return a.create.edges(e);
      });
      a.vis = d3.select(conf.divSelector).attr("style", "width:" + (conf.graphWidth()) + "px; height:" + (conf.graphHeight()) + "px; background:" + conf.backgroundColour + ";").append("svg").attr("xmlns", "http://www.w3.org/2000/svg").attr("xlink", "http://www.w3.org/1999/xlink").attr("pointer-events", "all").attr("style", "background:" + conf.backgroundColour + ";").attr("alchInst", Alchemy.prototype.instances.length - 1).on('click', a.interactions.deselectAll).call(a.interactions.zoom(conf.scaleExtent)).on("dblclick.zoom", null).append('g').attr("transform", "translate(" + conf.initialTranslate + ") scale(" + conf.initialScale + ")");
      a.interactions.zoom().scale(conf.initialScale);
      a.interactions.zoom().translate(conf.initialTranslate);
      a.index = Alchemy.prototype.Index(a);
      a.generateLayout();
      a.controlDash.init();
      d3Edges = a.elements.edges.d3;
      d3Nodes = a.elements.nodes.d3;
      a.layout.positionRootNodes();
      a.force.start();
      if (conf.forceLocked) {
        while (a.force.alpha() > 0.005) {
          a.force.tick();
        }
      }
      a._drawEdges = a.drawing.DrawEdges;
      a._drawNodes = a.drawing.DrawNodes;
      a._drawEdges.createEdge(d3Edges);
      a._drawNodes.createNode(d3Nodes);
      a.index();
      a.elements.nodes.svg.attr("transform", function(id, i) {
        return "translate(" + id.x + ", " + id.y + ")";
      });
      console.log(Date() + ' completed initial computation');
      if (!conf.forceLocked) {
        a.force.on("tick", a.layout.tick).start();
      }
      if (conf.afterLoad != null) {
        if (typeof conf.afterLoad === 'function') {
          conf.afterLoad();
        } else if (typeof conf.afterLoad === 'string') {
          a[conf.afterLoad] = true;
        }
      }
      if (conf.cluster) {
        defs = d3.select("" + a.conf.divSelector + " svg").append("svg:defs");
      }
      if (conf.nodeStats) {
        a.stats.nodeStats();
      }
      if (conf.showEditor) {
		console.log('editor = ' + ValUtils.dictToStr(a.editor))
        editor = new a.editor.Editor;
        editorInteractions = new a.editor.Interactions;
        d3.select("body").on('keydown', editorInteractions.deleteSelected);
        editor.startEditor();
      }
      return a.initial = true;
    };
  };

  Alchemy.prototype.stats = function(instance) {
    var a;
    a = instance;
    return {
      init: function() {
        return a.stats.update();
      },
      nodeStats: function() {
        var activeNodes, allNodes, caption, inactiveNodes, nodeData, nodeGraph, nodeKeys, nodeNum, nodeStats, nodeType, nodeTypes, _i, _len, _ref;
        nodeData = [];
        allNodes = a.get.allNodes().length;
        activeNodes = a.get.activeNodes().length;
        inactiveNodes = allNodes - activeNodes;
        nodeStats = "<li class = 'list-group-item gen_node_stat'>Number of nodes: <span class='badge'>" + allNodes + "</span></li> <li class = 'list-group-item gen_node_stat'>Number of active nodes: <span class='badge'>" + activeNodes + "</span></li> <li class = 'list-group-item gen_node_stat'>Number of inactive nodes: <span class='badge'>" + inactiveNodes + "</span></li></br>";
        if (a.conf.nodeTypes) {
          nodeKeys = Object.keys(a.conf.nodeTypes);
          nodeTypes = '';
          _ref = a.conf.nodeTypes[nodeKeys];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            nodeType = _ref[_i];
            caption = nodeType.replace('_', ' ');
            nodeNum = a.vis.selectAll("g.node." + nodeType)[0].length;
            nodeTypes += "<li class = 'list-group-item nodeType' id='li-" + nodeType + "' name = " + caption + ">Number of <strong style='text-transform: uppercase'>" + caption + "</strong> nodes: <span class='badge'>" + nodeNum + "</span></li>";
            nodeData.push(["" + nodeType, nodeNum]);
          }
          nodeStats += nodeTypes;
        }
        nodeGraph = "<li id='node-stats-graph' class='list-group-item'></li>";
        nodeStats += nodeGraph;
        a.dash.select('#node-stats').html(nodeStats);
        return this.insertSVG("node", nodeData);
      },
      edgeStats: function() {
        var activeEdges, allEdges, caption, edgeData, edgeGraph, edgeKeys, edgeNum, edgeStats, edgeType, edgeTypes, inactiveEdges, _i, _len;
        edgeData = [];
        allEdges = a.get.allEdges().length;
        activeEdges = a.get.activeEdges().length;
        inactiveEdges = allEdges - activeEdges;
        edgeStats = "<li class = 'list-group-item gen_edge_stat'>Number of relationships: <span class='badge'>" + allEdges + "</span></li> <li class = 'list-group-item gen_edge_stat'>Number of active relationships: <span class='badge'>" + activeEdges + "</span></li> <li class = 'list-group-item gen_edge_stat'>Number of inactive relationships: <span class='badge'>" + inactiveEdges + "</span></li></br>";
        if (a.conf.edgeTypes) {
          edgeKeys = _.values(alchemy.conf.edgeTypes)[0];
          edgeTypes = '';
          for (_i = 0, _len = edgeKeys.length; _i < _len; _i++) {
            edgeType = edgeKeys[_i];
            if (!edgeType) {
              continue;
            }
            caption = edgeType.replace('_', ' ');
            edgeNum = _.filter(a.get.allEdges(), function(edge) {
              if (edge._edgeType === edgeType) {
                return edge;
              }
            }).length;
            edgeTypes += "<li class = 'list-group-item edgeType' id='li-" + edgeType + "' name = " + caption + ">Number of <strong style='text-transform: uppercase'>" + caption + "</strong> relationships: <span class='badge'>" + edgeNum + "</span></li>";
            edgeData.push(["" + caption, edgeNum]);
          }
          edgeStats += edgeTypes;
        }
        edgeGraph = "<li id='node-stats-graph' class='list-group-item'></li>";
        edgeStats += edgeGraph;
        a.dash.select('#rel-stats').html(edgeStats);
        return this.insertSVG("edge", edgeData);
      },
      insertSVG: function(element, data) {
        var arc, arcs, color, height, pie, radius, svg, width;
        if (data === null) {
          return a.dash.select("#" + element + "-stats-graph").html("<br><h4 class='no-data'>There are no " + element + "Types listed in your conf.</h4>");
        } else {
          width = a.conf.graphWidth() * .25;
          height = 250;
          radius = width / 4;
          color = d3.scale.category20();
          arc = d3.svg.arc().outerRadius(radius - 10).innerRadius(radius / 2);
          pie = d3.layout.pie().sort(null).value(function(d) {
            return d[1];
          });
          svg = a.dash.select("#" + element + "-stats-graph").append("svg").append("g").style({
            "width": width,
            "height": height
          }).attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
          arcs = svg.selectAll(".arc").data(pie(data)).enter().append("g").classed("arc", true).on("mouseover", function(d, i) {
            return a.dash.select("#" + data[i][0] + "-stat").classed("hidden", false);
          }).on("mouseout", function(d, i) {
            return a.dash.select("#" + data[i][0] + "-stat").classed("hidden", true);
          });
          arcs.append("path").attr("d", arc).attr("stroke", function(d, i) {
            return color(i);
          }).attr("stroke-width", 2).attr("fill-opacity", "0.3");
          return arcs.append("text").attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
          }).attr("id", function(d, i) {
            return "" + data[i][0] + "-stat";
          }).attr("dy", ".35em").classed("hidden", true).text(function(d, i) {
            return data[i][0];
          });
        }
      },
      update: function() {
        if (a.conf.nodeStats) {
          this.nodeStats();
        }
        if (a.conf.edgeStats) {
          return this.edgeStats();
        }
      }
    };
  };

  Alchemy.prototype.updateGraph = function(instance) {
    var a;
    a = instance;
    return function() {
      a.generateLayout();
      a._drawEdges.createEdge(a.elements.edges.d3);
      a._drawNodes.createNode(a.elements.nodes.d3);
      a.layout.positionRootNodes();
      a.force.start();
      while (a.force.alpha() > 0.005) {
        a.force.tick();
      }
      a.force.on("tick", a.layout.tick).start();
      return a.elements.nodes.svg.attr('transform', function(id, i) {
        return "translate(" + id.x + ", " + id.y + ")";
      });
    };
  };

  Alchemy.prototype.defaults = {
    plugins: null,
    renderer: "svg",
    graphWidth: function() {
      return d3.select(this.divSelector).node().parentElement.clientWidth;
    },
    graphHeight: function() {
      if (d3.select(this.divSelector).node().parentElement.nodeName === "BODY") {
        return window.innerHeight;
      } else {
        return d3.select(this.divSelector).node().parentElement.clientHeight;
      }
    },
    alpha: 0.5,
    collisionDetection: true,
    nodeOverlap: 25,
    fixNodes: false,
    fixRootNodes: false,
    forceLocked: true,
    linkDistancefn: 'default',
    nodePositions: null,
    showEditor: false,
    captionToggle: false,
    toggleRootNodes: false,
    removeElement: false,
    cluster: false,
    clusterKey: "cluster",
    clusterColours: d3.shuffle(["#DD79FF", "#FFFC00", "#00FF30", "#5168FF", "#00C0FF", "#FF004B", "#00CDCD", "#f83f00", "#f800df", "#ff8d8f", "#ffcd00", "#184fff", "#ff7e00"]),
    clusterControl: false,
    nodeStats: false,
    edgeStats: false,
    edgeFilters: false,
    nodeFilters: false,
    edgesToggle: false,
    nodesToggle: false,
    zoomControls: false,
    nodeCaption: 'caption',
    nodeCaptionsOnByDefault: false,
    nodeStyle: {
      "all": {
        "radius": 10,
        "color": "#68B9FE",
        "borderColor": "#127DC1",
        "borderWidth": function(d, radius) {
          return radius / 3;
        },
        "captionColor": "#FFFFFF",
        "captionBackground": null,
        "captionSize": 12,
        "selected": {
          "color": "#FFFFFF",
          "borderColor": "#349FE3"
        },
        "highlighted": {
          "color": "#EEEEFF"
        },
        "hidden": {
          "color": "none",
          "borderColor": "none"
        }
      }
    },
    nodeColour: null,
    nodeMouseOver: 'caption',
    nodeRadius: 10,
    nodeTypes: null,
    rootNodes: 'root',
    rootNodeRadius: 15,
    nodeClick: null,
    edgeCaption: 'caption',
    edgeCaptionsOnByDefault: false,
    edgeStyle: {
      "all": {
        "width": 4,
        "color": "#CCC",
        "opacity": 0.2,
        "directed": true,
        "curved": true,
        "selected": {
          "opacity": 1
        },
        "highlighted": {
          "opacity": 1
        },
        "hidden": {
          "opacity": 0
        }
      }
    },
    edgeTypes: null,
    curvedEdges: false,
    edgeWidth: function() {
      return 4;
    },
    edgeOverlayWidth: 20,
    directedEdges: false,
    edgeArrowSize: 5,
    edgeClick: null,
    search: false,
    searchMethod: "contains",
    backgroundColour: "#000000",
    theme: null,
    afterLoad: 'afterLoad',
    divSelector: '#alchemy',
    dataSource: null,
    initialScale: 1,
    initialTranslate: [0, 0],
    scaleExtent: [0.5, 2.4],
    exportSVG: false,
    dataWarning: "default",
    warningMessage: "There be no data!  What's going on?"
  };

  DrawEdge = function(instance) {
    return {
      a: instance,
      createLink: function(edge) {
        var conf;
        conf = this.a.conf;
        edge.append('path').attr('class', 'edge-line').attr('id', function(d) {
          return "path-" + d.id;
        });
        edge.filter(function(d) {
          return d.caption != null;
        }).append('text');
        return edge.append('path').attr('class', 'edge-handler').style('stroke-width', "" + conf.edgeOverlayWidth).style('opacity', "0");
      },
      styleLink: function(edge) {
        var a, conf, utils;
        a = this.a;
        conf = this.a.conf;
        utils = this.a.drawing.EdgeUtils;
        return edge.each(function(d) {
          var curve, curviness, edgeWalk, endx, endy, g, midpoint, startx, starty;
          edgeWalk = utils.edgeWalk(d);
          curviness = conf.curvedEdges ? 30 : 0;
          curve = curviness / 10;
          startx = d.source.radius + (d["stroke-width"] / 2);
          starty = curviness / 10;
          midpoint = edgeWalk.edgeLength / 2;
          endx = edgeWalk.edgeLength - (d.target.radius - (d.target["stroke-width"] / 2));
          endy = curviness / 10;
          g = d3.select(this);
          g.style(utils.edgeStyle(d));
          g.attr('transform', "translate(" + d.source.x + ", " + d.source.y + ") rotate(" + edgeWalk.edgeAngle + ")");
          g.select('.edge-line').attr('d', (function() {
            var arrow, line, w;
            line = "M" + startx + "," + starty + "q" + midpoint + "," + curviness + " " + endx + "," + endy;
            if (conf.directedEdges) {
              w = d["stroke-width"] * 2;
              arrow = "l" + (-w) + "," + (w + curve) + " l" + w + "," + (-w - curve) + " l" + (-w) + "," + (-w + curve);
              return line + arrow;
            }
            return line;
          })());
          return g.select('.edge-handler').attr('d', function(d) {
            return g.select('.edge-line').attr('d');
          });
        });
      },
      classEdge: function(edge) {
        return edge.classed('active', true);
      },
      styleText: function(edge) {
        var conf, curved, utils;
        conf = this.a.conf;
        curved = conf.curvedEdges;
        utils = this.a.drawing.EdgeUtils;
        return edge.select('text').each(function(d) {
          var dx, edgeWalk;
          edgeWalk = utils.edgeWalk(d);
          dx = edgeWalk.edgeLength / 2;
          return d3.select(this).attr('dx', "" + dx).text(d.caption).attr("xlink:xlink:href", "#path-" + d.source.id + "-" + d.target.id).style("display", function(d) {
            if (conf.edgeCaptionsOnByDefault) {
              return "block";
            }
          });
        });
      },
      setInteractions: function(edge) {
        var interactions;
        interactions = this.a.interactions;
        return edge.select('.edge-handler').on('click', interactions.edgeClick).on('mouseover', function(d) {
          return interactions.edgeMouseOver(d);
        }).on('mouseout', function(d) {
          return interactions.edgeMouseOut(d);
        });
      }
    };
  };

  DrawEdges = function(instance) {
    return {
      a: instance,
      createEdge: function(d3Edges) {
        var drawEdge, edge;
        drawEdge = this.a.drawing.DrawEdge;
        edge = this.a.vis.selectAll("g.edge").data(d3Edges);
        edge.enter().append('g').attr("id", function(d) {
          return "edge-" + d.id + "-" + d.pos;
        }).attr('class', function(d) {
          return "edge " + d.edgeType;
        }).attr('source-target', function(d) {
          return "" + d.source.id + "-" + d.target.id;
        });
        drawEdge.createLink(edge);
        drawEdge.classEdge(edge);
        drawEdge.styleLink(edge);
        drawEdge.styleText(edge);
        drawEdge.setInteractions(edge);
        edge.exit().remove();
        if (this.a.conf.directedEdges && this.a.conf.curvedEdges) {
          return edge.select('.edge-line').attr('marker-end', 'url(#arrow)');
        }
      },
      updateEdge: function(d3Edge) {
        var drawEdge, edge;
        drawEdge = this.a.drawing.DrawEdge;
        edge = this.a.vis.select("#edge-" + d3Edge.id + "-" + d3Edge.pos);
        drawEdge.classEdge(edge);
        drawEdge.styleLink(edge);
        drawEdge.styleText(edge);
        return drawEdge.setInteractions(edge);
      }
    };
  };

  DrawNode = function(instance) {
    return {
      a: instance,
      styleText: function(node) {
        var conf, nodes, utils;
        conf = this.a.conf;
        utils = this.a.drawing.NodeUtils;
        nodes = this.a._nodes;
        return node.selectAll("text").attr('dy', function(d) {
          if (nodes[d.id].getProperties().root) {
            return conf.rootNodeRadius / 2;
          } else {
            return conf.nodeRadius * 2 - 5;
          }
        }).attr('visibility', function(d) {
          if (nodes[d.id]._state === "hidden") {
            return "hidden";
          } else {
            return "visible";
          }
        }).text(function(d) {
          return utils.nodeText(d);
        }).style("display", function(d) {
          if (conf.nodeCaptionsOnByDefault) {
            return "block";
          }
        });
      },
      createNode: function(node) {
        node = _.difference(node, node.select("circle").data());
        node.__proto__ = d3.select().__proto__;
        node.append('circle').attr('id', function(d) {
          return "circle-" + d.id;
        });
        return node.append('svg:text').attr('id', function(d) {
          return "text-" + d.id;
        });
      },
      styleNode: function(node) {
        var utils;
        utils = this.a.drawing.NodeUtils;
        return node.selectAll('circle').attr('r', function(d) {
          if (typeof d.radius === "function") {
            return d.radius();
          } else {
            return d.radius;
          }
        }).each(function(d) {
          return d3.select(this).style(utils.nodeStyle(d));
        });
      },
      setInteractions: function(node) {
        var conf, coreInteractions, drag, editorEnabled, editorInteractions, nonRootNodes, rootNodes;
        conf = this.a.conf;
        coreInteractions = this.a.interactions;
        editorEnabled = this.a.get.state("interactions") === "editor";
        drag = d3.behavior.drag().origin(Object).on("dragstart", null).on("drag", null).on("dragend", null);
        if (editorEnabled) {
          editorInteractions = new this.a.editor.Interactions;
          return node.on('mouseup', function(d) {
            return editorInteractions.nodeMouseUp(d);
          }).on('mouseover', function(d) {
            return editorInteractions.nodeMouseOver(d);
          }).on('mouseout', function(d) {
            return editorInteractions.nodeMouseOut(d);
          }).on('dblclick', function(d) {
            return coreInteractions.nodeDoubleClick(d);
          }).on('click', function(d) {
            return editorInteractions.nodeClick(d);
          });
        } else {
          node.on('mouseup', null).on('mouseover', function(d) {
            return coreInteractions.nodeMouseOver(d);
          }).on('mouseout', function(d) {
            return coreInteractions.nodeMouseOut(d);
          }).on('dblclick', function(d) {
            return coreInteractions.nodeDoubleClick(d);
          }).on('click', function(d) {
            return coreInteractions.nodeClick(d);
          });
          drag = d3.behavior.drag().origin(Object).on("dragstart", coreInteractions.nodeDragStarted).on("drag", coreInteractions.nodeDragged).on("dragend", coreInteractions.nodeDragended);
          if (!conf.fixNodes) {
            nonRootNodes = node.filter(function(d) {
              return d.root !== true;
            });
            nonRootNodes.call(drag);
          }
          if (!conf.fixRootNodes) {
            rootNodes = node.filter(function(d) {
              return d.root === true;
            });
            return rootNodes.call(drag);
          }
        }
      }
    };
  };

  DrawNodes = function(instance) {
    return {
      a: instance,
      createNode: function(d3Nodes) {
        var drawNode, node;
        drawNode = this.a.drawing.DrawNode;
        node = this.a.vis.selectAll("g.node").data(d3Nodes, function(n) {
          return n.id;
        });
        node.enter().append("g").attr("class", function(d) {
          var nodeType;
          nodeType = d.self._nodeType;
          return "node " + nodeType + " active";
        }).attr('id', function(d) {
          return "node-" + d.id;
        }).classed('root', function(d) {
          return d.root;
        });
        drawNode.createNode(node);
        drawNode.styleNode(node);
        drawNode.styleText(node);
        drawNode.setInteractions(node);
        return node.exit().remove();
      },
      updateNode: function(alchemyNode) {
        var drawNode, node;
        drawNode = this.a.drawing.DrawNode;
        node = this.a.vis.select("#node-" + alchemyNode.id);
        drawNode.styleNode(node);
        drawNode.styleText(node);
        return drawNode.setInteractions(node);
      }
    };
  };

  Alchemy.prototype.EdgeUtils = function(instance) {
    return {
      a: instance,
      edgeStyle: function(d) {
        var clustering, conf, edge, nodes, styles;
        conf = this.a.conf;
        edge = this.a._edges[d.id][d.pos];
        styles = this.a.svgStyles.edge.update(edge);
        nodes = this.a._nodes;
        if (this.a.conf.cluster) {
          clustering = this.a.layout._clustering;
          styles.stroke = (function(d) {
            var clusterKey, gid, id, index, source, target;
            clusterKey = conf.clusterKey;
            source = nodes[d.source.id]._properties;
            target = nodes[d.target.id]._properties;
            if (source.root || target.root) {
              index = source.root ? target[clusterKey] : source[clusterKey];
              return "" + (clustering.getClusterColour(index));
            } else if (source[clusterKey] === target[clusterKey]) {
              index = source[clusterKey];
              return "" + (clustering.getClusterColour(index));
            } else if (source[clusterKey] !== target[clusterKey]) {
              id = "" + source[clusterKey] + "-" + target[clusterKey];
              gid = "cluster-gradient-" + id;
              return "url(#" + gid + ")";
            }
          })(d);
        }
        return styles;
      },
      triangle: function(edge) {
        var height, hyp, width;
        width = edge.target.x - edge.source.x;
        height = edge.target.y - edge.source.y;
        hyp = Math.sqrt(height * height + width * width);
        return [width, height, hyp];
      },
      edgeWalk: function(edge) {
        var curveOffset, edgeLength, edgeWidth, height, hyp, startPathX, width, _ref;
        _ref = this.triangle(edge), width = _ref[0], height = _ref[1], hyp = _ref[2];
        edgeWidth = edge['stroke-width'];
        curveOffset = 2;
        startPathX = edge.source.radius + edge.source['stroke-width'] - (edgeWidth / 2) + curveOffset;
        edgeLength = hyp - startPathX - curveOffset * 1.5;
        return {
          edgeAngle: Math.atan2(height, width) / Math.PI * 180,
          edgeLength: edgeLength
        };
      },
      middleLine: function(edge) {
        return this.curvedDirectedEdgeWalk(edge, 'middle');
      },
      startLine: function(edge) {
        return this.curvedDirectedEdgeWalk(edge, 'linkStart');
      },
      endLine: function(edge) {
        return this.curvedDirectedEdgeWalk(edge, 'linkEnd');
      },
      edgeLength: function(edge) {
        var height, hyp, width;
        width = edge.target.x - edge.source.x;
        height = edge.target.y - edge.source.y;
        return hyp = Math.sqrt(height * height + width * width);
      },
      edgeAngle: function(edge) {
        var height, width;
        width = edge.target.x - edge.source.x;
        height = edge.target.y - edge.source.y;
        return Math.atan2(height, width) / Math.PI * 180;
      },
      captionAngle: function(angle) {
        if (angle < -90 || angle > 90) {
          return 180;
        } else {
          return 0;
        }
      },
      middlePath: function(edge) {
        var midPoint, pathNode;
        pathNode = this.a.vis.select("#path-" + edge.id).node();
        midPoint = pathNode.getPointAtLength(pathNode.getTotalLength() / 2);
        return {
          x: midPoint.x,
          y: midPoint.y
        };
      },
      middlePathCurve: function(edge) {
        var midPoint, pathNode;
        pathNode = d3.select("#path-" + edge.id).node();
        midPoint = pathNode.getPointAtLength(pathNode.getTotalLength() / 2);
        return {
          x: midPoint.x,
          y: midPoint.y
        };
      }
    };
  };

  Alchemy.prototype.NodeUtils = function(instance) {
    var a;
    a = instance;
    return {
      nodeStyle: function(d) {
        var conf, node;
        conf = a.conf;
        node = d.self;
        if (conf.cluster && (node._state !== "hidden")) {
          d.fill = (function(d) {
            var clusterMap, clustering, colour, colourIndex, colours, key, nodeProp;
            clustering = a.layout._clustering;
            nodeProp = node.getProperties();
            clusterMap = clustering.clusterMap;
            key = conf.clusterKey;
            colours = conf.clusterColours;
            colourIndex = clusterMap[nodeProp[key]] % colours.length;
            colour = colours[colourIndex];
            return "" + colour;
          })(d);
          d.stroke = d.fill;
        }
        return d;
      },
      nodeText: function(d) {
        var caption, conf, nodeProps;
        conf = a.conf;
        nodeProps = a._nodes[d.id]._properties;
        if (conf.nodeCaption && typeof conf.nodeCaption === 'string') {
          if (nodeProps[conf.nodeCaption] != null) {
            return nodeProps[conf.nodeCaption];
          } else {
            return '';
          }
        } else if (conf.nodeCaption && typeof conf.nodeCaption === 'function') {
          caption = conf.nodeCaption(nodeProps);
          if (caption === void 0 || String(caption) === 'undefined') {
            a.log["caption"] = "At least one caption returned undefined";
            conf.caption = false;
          }
          return caption;
        }
      }
    };
  };

  Alchemy.prototype.svgStyles = function(instance) {
    return {
      a: instance,
      node: {
        a: this.a,
        populate: function(node) {
          var conf, d, defaultStyle, fill, nodeType, nodeTypeKey, radius, stroke, strokeWidth, style, svgStyles, toFunc, typedStyle;
          conf = this.a.conf;
          defaultStyle = _.omit(conf.nodeStyle.all, "selected", "highlighted", "hidden");
          d = node;
          toFunc = function(inp) {
            if (typeof inp === "function") {
              return inp;
            }
            return function() {
              return inp;
            };
          };
          nodeTypeKey = _.keys(conf.nodeTypes)[0];
          nodeType = node.getProperties()[nodeTypeKey];
          if (conf.nodeStyle[nodeType] === void 0) {
            nodeType = "all";
          }
          typedStyle = _.assign(_.cloneDeep(defaultStyle), conf.nodeStyle[nodeType]);
          style = _.assign(typedStyle, conf.nodeStyle[nodeType][node._state]);
          radius = toFunc(style.radius);
          fill = toFunc(style.color);
          stroke = toFunc(style.borderColor);
          strokeWidth = toFunc(style.borderWidth);
          svgStyles = {};
          svgStyles["radius"] = radius(d);
          svgStyles["fill"] = fill(d);
          svgStyles["stroke"] = stroke(d);
          svgStyles["stroke-width"] = strokeWidth(d, radius(d));
          return svgStyles;
        }
      },
      edge: {
        a: this.a,
        populate: function(edge) {
          var color, conf, defaultStyle, edgeType, opacity, style, svgStyles, toFunc, typedStyle, width;
          conf = this.a.conf;
          defaultStyle = _.omit(conf.edgeStyle.all, "selected", "highlighted", "hidden");
          toFunc = function(inp) {
            if (typeof inp === "function") {
              return inp;
            }
            return function() {
              return inp;
            };
          };
          edgeType = edge._edgeType;
          if (conf.edgeStyle[edgeType] === void 0) {
            edgeType = "all";
          }
          typedStyle = _.assign(_.cloneDeep(defaultStyle), conf.edgeStyle[edgeType]);
          style = _.assign(typedStyle, conf.edgeStyle[edgeType][edge._state]);
          width = toFunc(style.width);
          color = toFunc(style.color);
          opacity = toFunc(style.opacity);
          svgStyles = {
            "stroke": color(edge),
            "stroke-width": width(edge),
            "opacity": opacity(edge),
            "fill": "none"
          };
          return svgStyles;
        },
        update: function(edge) {
          var color, conf, opacity, style, svgStyles, toFunc, width;
          conf = this.a.conf;
          style = edge._style;
          toFunc = function(inp) {
            if (typeof inp === "function") {
              return inp;
            }
            return function() {
              return inp;
            };
          };
          width = toFunc(style.width);
          color = toFunc(style.color);
          opacity = toFunc(style.opacity);
          svgStyles = {
            "stroke": color(edge),
            "stroke-width": width(edge),
            "opacity": opacity(edge),
            "fill": "none"
          };
          return svgStyles;
        }
      }
    };
  };

  Editor = (function() {
    function Editor() {
      this.nodeEditor = __bind(this.nodeEditor, this);
      this.startEditor = __bind(this.startEditor, this);
      this.utils = new alchemy.editor.Utils;
    }

    Editor.prototype.editorContainerHTML = "<div id=\"editor-header\" data-toggle=\"collapse\" data-target=\"#editor #element-options\">\n    <h3>Editor</h3><span class=\"fa fa-2x fa-caret-right\"></span>\n</div>\n<div id=\"element-options\" class=\"collapse\">\n    <ul class=\"list-group\"> \n        <li class=\"list-group-item\" id=\"remove\">Remove Selected</li> \n        <li class=\"list-group-item\" id=\"editor-interactions\">Editor mode enabled, click to disable editor interactions</li>\n    </ul>\n</div>";

    Editor.prototype.elementEditorHTML = function(type) {
      return "<h4>" + type + " Editor</h4>\n<form id=\"add-property-form\">\n    <div id=\"add-property\">\n        <input class=\"form-control\" id=\"add-prop-key\" placeholder=\"New Property Name\">\n        <input class=\"form-control\" id=\"add-prop-value\" placeholder=\"New Property Value\">\n    </div>\n    <input id=\"add-prop-submit\" type=\"submit\" value=\"Add Property\" placeholder=\"add a property to this node\">\n</form>\n<form id=\"properties-list\">\n    <input id=\"update-properties\" type=\"submit\" value=\"Update Properties\">\n</form>";
    };

    Editor.prototype.startEditor = function() {
      var divSelector, editor, editor_interactions, html, utils;
      divSelector = alchemy.conf.divSelector;
      html = this.editorContainerHTML;
      editor = alchemy.dash.select("#control-dash").append("div").attr("id", "editor").html(html);
      editor.select('#editor-header').on('click', function() {
        if (alchemy.dash.select('#element-options').classed("in")) {
          return alchemy.dash.select("#editor-header>span").attr("class", "fa fa-2x fa-caret-right");
        } else {
          return alchemy.dash.select("#editor-header>span").attr("class", "fa fa-2x fa-caret-down");
        }
      });
      editor_interactions = editor.select('#element-options ul #editor-interactions').on('click', function() {
        return d3.select(this).attr("class", function() {
          if (alchemy.get.state() === 'editor') {
            alchemy.set.state('interactions', 'default');
            return "inactive list-group-item";
          } else {
            alchemy.set.state('interactions', 'editor');
            return "active list-group-item";
          }
        }).html(function() {
          if (alchemy.get.state() === 'editor') {
            return "Disable Editor Interactions";
          } else {
            return "Enable Editor Interactions";
          }
        });
      });
      editor.select("#element-options ul #remove").on("click", function() {
        return alchemy.editor.remove();
      });
      utils = this.utils;
      return editor_interactions.on("click", function() {
        if (!alchemy.dash.select("#editor-interactions").classed("active")) {
          utils.enableEditor();
          return alchemy.dash.select("#editor-interactions").classed({
            "active": true,
            "inactive": false
          }).html("Editor mode enabled, click to disable editor interactions");
        } else {
          utils.disableEditor();
          return alchemy.dash.select("#editor-interactions").classed({
            "active": false,
            "inactive": true
          }).html("Editor mode disabled, click to enable editor interactions");
        }
      });
    };

    Editor.prototype.nodeEditor = function(n) {
      var add_property, divSelector, editor, elementEditor, html, nodeProperties, node_property, options, property, property_list, updateProperty, val;
      divSelector = alchemy.conf.divSelector;
      editor = alchemy.dash.select("#control-dash #editor");
      options = editor.select('#element-options');
      html = this.elementEditorHTML("Node");
      elementEditor = options.append('div').attr('id', 'node-editor').html(html);
      elementEditor.attr("class", function() {
        var active;
        active = alchemy.dash.select("#editor-interactions").classed("active");
        if (active) {
          return "enabled";
        }
        return "hidden";
      });
      add_property = editor.select("#node-editor form #add-property");
      add_property.select("#node-add-prop-key").attr("placeholder", "New Property Name").attr("value", null);
      add_property.select("#node-add-prop-value").attr("placeholder", "New Property Value").attr("value", null);
      alchemy.dash.select("#add-property-form").on("submit", function() {
        var key, value;
        event.preventDefault();
        key = alchemy.dash.select('#add-prop-key').property('value');
        key = key.replace(/\s/g, "_");
        value = alchemy.dash.select('#add-prop-value').property('value');
        updateProperty(key, value, true);
        alchemy.dash.selectAll("#add-property .edited-property").classed({
          "edited-property": false
        });
        return this.reset();
      });
      nodeProperties = alchemy._nodes[n.id].getProperties();
      alchemy.vis.select("#node-" + n.id).classed({
        "editing": true
      });
      property_list = editor.select("#node-editor #properties-list");
      for (property in nodeProperties) {
        val = nodeProperties[property];
        node_property = property_list.append("div").attr("id", "node-" + property).attr("class", "property form-inline form-group");
        node_property.append("label").attr("for", "node-" + property + "-input").attr("class", "form-control property-name").text("" + property);
        node_property.append("input").attr("id", "node-" + property + "-input").attr("class", "form-control property-value").attr("value", "" + val);
      }
      alchemy.dash.select("#properties-list").on("submit", function() {
        var key, properties, selection, value, _i, _len, _ref;
        event.preventDefault();
        properties = alchemy.dash.selectAll(".edited-property");
        _ref = properties[0];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          property = _ref[_i];
          selection = alchemy.dash.select(property);
          key = selection.select("label").text();
          value = selection.select("input").attr('value');
          updateProperty(key, value, false);
        }
        alchemy.dash.selectAll("#node-properties-list .edited-property").classed({
          "edited-property": false
        });
        return this.reset();
      });
      d3.selectAll("#add-prop-key, #add-prop-value, .property").on("keydown", function() {
        if (d3.event.keyCode === 13) {
          event.preventDefault();
        }
        return d3.select(this).classed({
          "edited-property": true
        });
      });
      return updateProperty = function(key, value, newProperty) {
        var drawNodes, nodeID;
        nodeID = n.id;
        if ((key !== "") && (value !== "")) {
          alchemy._nodes[nodeID].setProperty("" + key, "" + value);
          drawNodes = alchemy._drawNodes;
          drawNodes.updateNode(alchemy.viz.select("#node-" + nodeID));
          if (newProperty === true) {
            alchemy.dash.select("#node-add-prop-key").attr("value", "property added/updated to key: " + key);
            return alchemy.dash.select("#node-add-prop-value").attr("value", "property at " + key + " updated to: " + value);
          } else {
            return alchemy.dash.select("#node-" + key + "-input").attr("value", "property at " + key + " updated to: " + value);
          }
        } else {
          if (newProperty === true) {
            alchemy.dash.select("#node-add-prop-key").attr("value", "null or invalid input");
            return alchemy.dash.select("#node-add-prop-value").attr("value", "null or invlid input");
          } else {
            return alchemy.dash.select("#node-" + key + "-input").attr("value", "null or invalid input");
          }
        }
      };
    };

    Editor.prototype.editorClear = function() {
      alchemy.dash.selectAll(".node").classed({
        "editing": false
      });
      alchemy.dash.selectAll(".edge").classed({
        "editing": false
      });
      alchemy.dash.select("#node-editor").remove();
      alchemy.dash.select("#edge-editor").remove();
      return alchemy.dash.select("#node-add-prop-submit").attr("placeholder", function() {
        if (alchemy.vis.selectAll(".selected").empty()) {
          return "select a node or edge to edit properties";
        }
        return "add a property to this element";
      });
    };

    Editor.prototype.edgeEditor = function(e) {
      var add_property, divSelector, edgeProperties, edge_property, editor, elementEditor, html, options, property, property_list, updateProperty, val;
      divSelector = alchemy.conf.divSelector;
      editor = alchemy.dash("#control-dash #editor");
      options = editor.select('#element-options');
      html = this.elementEditorHTML("Edge");
      elementEditor = options.append('div').attr('id', 'edge-editor').html(html);
      elementEditor.attr("class", function() {
        if (alchemy.dash.select("#editor-interactions").classed("active")) {
          return "enabled";
        }
        return "hidden";
      });
      add_property = editor.select("#edge-editor form #add-property");
      add_property.select("#add-prop-key").attr("placeholder", "New Property Name").attr("value", null);
      add_property.select("#add-prop-value").attr("placeholder", "New Property Value").attr("value", null);
      edgeProperties = alchemy._edges[e.id].getProperties();
      alchemy.vis.select("#edge-" + e.id).classed({
        "editing": true
      });
      property_list = editor.select("#edge-editor #properties-list");
      for (property in edgeProperties) {
        val = edgeProperties[property];
        edge_property = property_list.append("div").attr("id", "edge-" + property).attr("class", "property form-inline form-group");
        edge_property.append("label").attr("for", "edge-" + property + "-input").attr("class", "form-control property-name").text("" + property);
        edge_property.append("input").attr("id", "edge-" + property + "-input").attr("class", "form-control property-value").attr("value", "" + val);
      }
      alchemy.dash.selectAll("#add-prop-key, #add-prop-value, .property").on("keydown", function() {
        if (d3.event.keyCode === 13) {
          event.preventDefault();
        }
        return d3.select(this).classed({
          "edited-property": true
        });
      });
      alchemy.dash.select("#add-property-form").on("submit", function() {
        var key, value;
        event.preventDefault();
        key = alchemy.dash.select("#add-prop-key").property('value');
        key = key.replace(/\s/g, "_");
        value = alchemy.dash.select("#add-prop-value").property('value');
        updateProperty(key, value, true);
        alchemy.dash.selectAll("#add-property .edited-property").classed({
          "edited-property": false
        });
        return this.reset();
      });
      d3.select("#properties-list").on("submit", function() {
        var key, properties, selection, value, _i, _len, _ref;
        event.preventDefault();
        properties = alchemy.dash.selectAll(".edited-property");
        _ref = properties[0];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          property = _ref[_i];
          selection = alchemy.dash.select(property);
          key = selection.select("label").text();
          value = selection.select("input").property('value');
          updateProperty(key, value, false);
        }
        alchemy.dash.selectAll("#properties-list .edited-property").classed({
          "edited-property": false
        });
        return this.reset();
      });
      return updateProperty = function(key, value, newProperty) {
        var drawEdges, edgeID, edgeSelection;
        edgeID = e.id;
        if ((key !== "") && (value !== "")) {
          alchemy._edges[edgeID].setProperty("" + key, "" + value);
          edgeSelection = alchemy.vis.select("#edge-" + edgeID);
          drawEdges = new alchemy.drawing.DrawEdges;
          drawEdges.updateEdge(alchemy.vis.select("#edge-" + edgeID));
          if (newProperty === true) {
            alchemy.dash.select("#add-prop-key").attr("value", "property added/updated to key: " + key);
            return alchemy.dash.select("#add-prop-value").attr("value", "property at " + key + " updated to: " + value);
          } else {
            return alchemy.dash.select("#edge-" + key + "-input").attr("value", "property at " + key + " updated to: " + value);
          }
        } else {
          if (newProperty === true) {
            alchemy.dash.select("#add-prop-key").attr("value", "null or invalid input");
            return alchemy.dash.select("#add-prop-value").attr("value", "null or invlid input");
          } else {
            return alchemy.dash.select("#edge-" + key + "-input").attr("value", "null or invalid input");
          }
        }
      };
    };

    return Editor;

  })();

  EditorInteractions = (function() {
    function EditorInteractions() {
      this.reset = __bind(this.reset, this);
      this.deleteSelected = __bind(this.deleteSelected, this);
      this.addNodeDragended = __bind(this.addNodeDragended, this);
      this.addNodeDragging = __bind(this.addNodeDragging, this);
      this.addNodeStart = __bind(this.addNodeStart, this);
      this.edgeClick = __bind(this.edgeClick, this);
      this.nodeClick = __bind(this.nodeClick, this);
      this.nodeMouseUp = __bind(this.nodeMouseUp, this);
      this.editor = new alchemy.editor.Editor;
    }

    EditorInteractions.prototype.nodeMouseOver = function(n) {
      var radius;
      if (!d3.select(this).select("circle").empty()) {
        radius = d3.select(this).select("circle").attr("r");
        d3.select(this).select("circle").attr("r", radius * 3);
      }
      return this;
    };

    EditorInteractions.prototype.nodeMouseUp = function(n) {
      if (this.sourceNode !== n) {
        this.mouseUpNode = true;
        this.targetNode = n;
        this.click = false;
      } else {
        this.click = true;
      }
      return this;
    };

    EditorInteractions.prototype.nodeMouseOut = function(n) {
      var radius;
      if (!d3.select(this).select("circle").empty()) {
        radius = d3.select(this).select("circle").attr("r");
        d3.select(this).select("circle").attr("r", radius / 3);
      }
      return this;
    };

    EditorInteractions.prototype.nodeClick = function(c) {
      var selected;
      d3.event.stopPropagation();
      if (!alchemy.vis.select("#node-" + c.id).empty()) {
        selected = alchemy.vis.select("#node-" + c.id).classed('selected');
        alchemy.vis.select("#node-" + c.id).classed('selected', !selected);
      }
      this.editor.editorClear();
      return this.editor.nodeEditor(c);
    };

    EditorInteractions.prototype.edgeClick = function(e) {
      d3.event.stopPropagation();
      this.editor.editorClear();
      return this.editor.edgeEditor(e);
    };

    EditorInteractions.prototype.addNodeStart = function(d, i) {
      d3.event.sourceEvent.stopPropagation();
      this.sourceNode = d;
      alchemy.vis.select('#dragline').classed({
        "hidden": false
      });
      return this;
    };

    EditorInteractions.prototype.addNodeDragging = function(d, i) {
      var x2coord, y2coord;
      x2coord = d3.event.x;
      y2coord = d3.event.y;
      alchemy.vis.select('#dragline').attr("x1", this.sourceNode.x).attr("y1", this.sourceNode.y).attr("x2", x2coord).attr("y2", y2coord).attr("style", "stroke: #FFF");
      return this;
    };

    EditorInteractions.prototype.addNodeDragended = function(d, i) {
      var dragline, targetX, targetY;
      if (!this.click) {
        if (!this.mouseUpNode) {
          dragline = alchemy.vis.select("#dragline");
          targetX = dragline.attr("x2");
          targetY = dragline.attr("y2");
          this.targetNode = {
            id: "" + (_.uniqueId('addedNode_')),
            x: parseFloat(targetX),
            y: parseFloat(targetY),
            caption: "node added"
          };
        }
        this.newEdge = {
          id: "" + this.sourceNode.id + "-" + this.targetNode.id,
          source: this.sourceNode.id,
          target: this.targetNode.id,
          caption: "edited"
        };
        alchemy.editor.update(this.targetNode, this.newEdge);
      }
      this.reset();
      return this;
    };

    EditorInteractions.prototype.deleteSelected = function(d) {
      switch (d3.event.keyCode) {
        case 8:
        case 46:
          if (!(d3.select(d3.event.target).node().tagName === ("INPUT" || "TEXTAREA"))) {
            d3.event.preventDefault();
            return alchemy.editor.remove();
          }
      }
    };

    EditorInteractions.prototype.reset = function() {
      this.mouseUpNode = null;
      this.sourceNode = null;
      this.targetNode = null;
      this.newEdge = null;
      this.click = null;
      alchemy.vis.select("#dragline").classed({
        "hidden": true
      }).attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 0);
      return this;
    };

    EditorInteractions;

    return EditorInteractions;

  })();

  EditorUtils = (function() {
    function EditorUtils() {
      this.enableEditor = __bind(this.enableEditor, this);
      this.drawNodes = alchemy._drawNodes;
      this.drawEdges = alchemy._drawEdges;
    }

    EditorUtils.prototype.enableEditor = function() {
      var dragLine, editor, selectedElements;
      alchemy.set.state("interactions", "editor");
      dragLine = alchemy.vis.append("line").attr("id", "dragline");
      this.drawNodes.updateNode(alchemy.node);
      this.drawEdges.updateEdge(alchemy.edge);
      selectedElements = alchemy.vis.selectAll(".selected");
      editor = new alchemy.editor.Editor;
      if ((!selectedElements.empty()) && (selectedElements.length === 1)) {
        if (selectedElements.classed('node')) {
          editor.nodeEditor(selectedElements.datum());
          return alchemy.dash.select("#node-editor").attr("class", "enabled").style("opacity", 1);
        } else if (selectedElements.classed('edge')) {
          editor.edgeEditor(selectedElements.datum());
          return alchemy.dash.select("#edge-editor").attr("class", "enabled").style("opacity", 1);
        }
      } else {
        return selectedElements.classed({
          "selected": false
        });
      }
    };

    EditorUtils.prototype.disableEditor = function() {
      alchemy.setState("interactions", "default");
      alchemy.vis.select("#dragline").remove();
      alchemy.dash.select("#node-editor").transition().duration(300).style("opacity", 0);
      alchemy.dash.select("#node-editor").transition().delay(300).attr("class", "hidden");
      this.drawNodes.updateNode(alchemy.node);
      return alchemy.vis.selectAll(".node").classed({
        "selected": false
      });
    };

    EditorUtils.prototype.remove = function() {
      var edge, node, nodeID, node_data, selectedNodes, _i, _j, _len, _len1, _ref, _ref1, _results;
      selectedNodes = alchemy.vis.selectAll(".selected.node");
      _ref = selectedNodes[0];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        nodeID = alchemy.vis.select(node).data()[0].id;
        node_data = alchemy._nodes[nodeID];
        if (node_data != null) {
          _ref1 = node_data.adjacentEdges;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            edge = _ref1[_j];
            alchemy._edges = _.omit(alchemy._edges, "" + edge.id + "-" + edge._index);
            alchemy.edge = alchemy.edge.data(_.map(alchemy._edges, function(e) {
              return e._d3;
            }), function(e) {
              return e.id;
            });
            alchemy.vis.select("#edge-" + edge.id + "-" + edge._index).remove();
          }
          alchemy._nodes = _.omit(alchemy._nodes, "" + nodeID);
          alchemy.node = alchemy.node.data(_.map(alchemy._nodes, function(n) {
            return n._d3;
          }), function(n) {
            return n.id;
          });
          alchemy.vis.select(node).remove();
          if (alchemy.get.state("interactions") === "editor") {
            _results.push(alchemy.modifyElements.nodeEditorClear());
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    EditorUtils.prototype.addNode = function(node) {
      var newNode;
      newNode = alchemy._nodes[node.id] = new alchemy.models.Node({
        id: "" + node.id
      });
      newNode.setProperty("caption", node.caption);
      newNode.setD3Property("x", node.x);
      newNode.setD3Property("y", node.y);
      return alchemy.node = alchemy.node.data(_.map(alchemy._nodes, function(n) {
        return n._d3;
      }), function(n) {
        return n.id;
      });
    };

    EditorUtils.prototype.addEdge = function(edge) {
      var newEdge;
      newEdge = alchemy._edges[edge.id] = new alchemy.models.Edge(edge);
      return alchemy.edge = alchemy.edge.data(_.map(alchemy._edges, function(e) {
        return e._d3;
      }), function(e) {
        return e.id;
      });
    };

    EditorUtils.prototype.update = function(node, edge) {
      if (!this.mouseUpNode) {
        alchemy.editor.addNode(node);
        alchemy.editor.addEdge(edge);
        this.drawEdges.createEdge(alchemy.edge);
        this.drawNodes.createNode(alchemy.node);
      } else {
        alchemy.editor.addEdge(edge);
        this.drawEdges.createEdge(alchemy.edge);
      }
      return alchemy.layout.tick();
    };

    return EditorUtils;

  })();

  Alchemy.prototype.Edge = function(instance) {
    var Edge;
    return Edge = (function() {
      function Edge(edge, index) {
        var conf;
        if (index == null) {
          index = null;
        }
        this.allNodesActive = __bind(this.allNodesActive, this);
        this.setProperties = __bind(this.setProperties, this);
        this.getStyles = __bind(this.getStyles, this);
        this.setProperties = __bind(this.setProperties, this);
        this.getProperties = __bind(this.getProperties, this);
        this._setID = __bind(this._setID, this);
        this._setD3Properties = __bind(this._setD3Properties, this);
        this.a = instance;
        conf = this.a.conf;
        this.id = this._setID(edge);
        this._index = index;
        this._state = "active";
        this._properties = edge;
        this._edgeType = this._setEdgeType();
        this._style = conf.edgeStyle[this._edgeType] != null ? _.merge(_.clone(conf.edgeStyle["all"]), conf.edgeStyle[this._edgeType]) : _.clone(conf.edgeStyle["all"]);
        this._d3 = _.merge({
          'id': this.id,
          'pos': this._index,
          'edgeType': this._edgeType,
          'source': this.a._nodes[this._properties.source]._d3,
          'target': this.a._nodes[this._properties.target]._d3,
          'self': this
        }, this.a.svgStyles.edge.populate(this));
        this._setCaption(edge, conf);
        this.a._nodes["" + edge.source]._addEdge(this);
        this.a._nodes["" + edge.target]._addEdge(this);
      }

      Edge.prototype._setD3Properties = function(props) {
        return _.merge(this._d3, props);
      };

      Edge.prototype._setID = function(e) {
        if (e.id != null) {
          return e.id;
        } else {
          return "" + e.source + "-" + e.target;
        }
      };

      Edge.prototype._setCaption = function(edge, conf) {
        var cap, edgeCaption;
        cap = conf.edgeCaption;
        edgeCaption = (function(edge) {
          switch (typeof cap) {
            case 'string' || 'number':
              return edge[cap];
            case 'function':
              return cap(edge);
          }
        })(edge);
        if (edgeCaption) {
          return this._d3.caption = edgeCaption;
        }
      };

      Edge.prototype._setEdgeType = function() {
        var conf, edgeType, lookup;
        conf = this.a.conf;
        if (conf.edgeTypes) {
          if (_.isPlainObject(conf.edgeTypes)) {
            lookup = Object.keys(this.a.conf.edgeTypes);
            edgeType = this._properties[lookup];
          } else if (_.isArray(conf.edgeTypes)) {
            edgeType = this._properties["caption"];
          } else if (typeof conf.edgeTypes === 'string') {
            edgeType = this._properties[conf.edgeTypes];
          }
        }
        if (edgeType === void 0) {
          edgeType = "all";
        }
        this._setD3Properties('edgeType', edgeType);
        return edgeType;
      };

      Edge.prototype.getProperties = function() {
        var key, keys, query;
        key = arguments[0], keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (key == null) {
          key = null;
        }
        if ((key == null) && (keys.length === 0)) {
          return this._properties;
        } else if (keys.length !== 0) {
          query = _.union([key], keys);
          return _.pick(this._properties, query);
        } else {
          return this._properties[key];
        }
      };

      Edge.prototype.setProperties = function(property, value) {
        if (value == null) {
          value = null;
        }
        if (_.isPlainObject(property)) {
          _.assign(this._properties, property);
          if ('source' in property) {
            this._setD3Properties({
              'source': alchemy._nodes[property.source]._d3
            });
          }
          if ('target' in property) {
            this._setD3Properties({
              'target': alchemy._nodes[property.target]._d3
            });
          }
        } else {
          this._properties[property] = value;
          if ((property === 'source') || (property === 'target')) {
            this._setD3Properties({
              property: alchemy._nodes[value]._d3
            });
          }
        }
        return this;
      };

      Edge.prototype.getStyles = function() {
        var edge, key, keys;
        key = arguments[0], keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        edge = this;
        if (key === void 0) {
          return edge._style;
        }
        return _.map(arguments, function(arg) {
          return edge._style[arg];
        });
      };

      Edge.prototype.setProperties = function(property, value) {
        if (value == null) {
          value = null;
        }
        if (_.isPlainObject(property)) {
          _.assign(this._properties, property);
          if ('source' in property) {
            this._setD3Properties({
              'source': this.a._nodes[property.source]._d3
            });
          }
          if ('target' in property) {
            this._setD3Properties({
              'target': this.a._nodes[property.target]._d3
            });
          }
        } else {
          this._properties[property] = value;
          if ((property === 'source') || (property === 'target')) {
            this._setD3Properties({
              property: this.a._nodes[value]._d3
            });
          }
        }
        return this;
      };

      Edge.prototype.setStyles = function(key, value) {
        if (value == null) {
          value = null;
        }
        if (key === void 0) {
          key = this.a.svgStyles.edge.populate(this);
        }
        if (_.isPlainObject(key)) {
          _.assign(this._style, key);
        } else if (typeof key === "string") {
          this._style[key] = value;
        }
        this._setD3Properties(this.a.svgStyles.edge.update(this));
        this.a._drawEdges.updateEdge(this._d3);
        return this;
      };

      Edge.prototype.toggleHidden = function() {
        this._state = this._state === "hidden" ? "active" : "hidden";
        return this.setStyles();
      };

      Edge.prototype.allNodesActive = function() {
        var sourceId, sourceNode, targetId, targetNode;
        sourceId = this._properties.source;
        targetId = this._properties.target;
        sourceNode = alchemy.get.nodes(sourceId)[0];
        targetNode = alchemy.get.nodes(targetId)[0];
        return sourceNode._state === "active" && targetNode._state === "active";
      };

      Edge.prototype.remove = function() {
        var edge, filteredLinkList;
        edge = this;
        delete this.a._edges[edge.id];
        if (this.a._nodes[edge._properties.source] != null) {
          _.remove(this.a._nodes[edge._properties.source]._adjacentEdges, function(e) {
            if (e.id === edge.id) {
              return e;
            }
          });
        }
        if (this.a._nodes[edge._properties.target] != null) {
          _.remove(this.a._nodes[edge._properties.target]._adjacentEdges, function(e) {
            if (e.id === edge.id) {
              return e;
            }
          });
        }
        this.a.vis.select("#edge-" + edge.id + "-" + edge._index).remove();
        filteredLinkList = _.filter(this.a.force.links(), function(link) {
          if (link.id !== edge.id) {
            return link;
          }
        });
        return this.a.force.links(filteredLinkList);
      };

      return Edge;

    })();
  };

  Alchemy.prototype.Node = function(instance) {
    var Node;
    return Node = (function() {
      function Node(node) {
        this.getStyles = __bind(this.getStyles, this);
        this.setProperty = __bind(this.setProperty, this);
        this.getProperties = __bind(this.getProperties, this);
        this._setD3Properties = __bind(this._setD3Properties, this);
        this._setNodeType = __bind(this._setNodeType, this);
        var conf;
        this.a = instance;
        conf = this.a.conf;
        this.id = node.id;
        this._properties = node;
        this._d3 = _.merge({
          'id': this.id,
          'root': this._properties[conf.rootNodes],
          'self': this
        }, this.a.svgStyles.node.populate(this));
        this._nodeType = this._setNodeType();
        this._style = conf.nodeStyle[this._nodeType] ? conf.nodeStyle[this._nodeType] : conf.nodeStyle["all"];
        this._state = "active";
        this._adjacentEdges = [];
      }

      Node.prototype._setNodeType = function() {
        var conf, lookup, nodeType, types;
        conf = this.a.conf;
        if (conf.nodeTypes) {
          if (_.isPlainObject(conf.nodeTypes)) {
            lookup = Object.keys(this.a.conf.nodeTypes);
            types = _.values(conf.nodeTypes);
            nodeType = this._properties[lookup];
          } else if (typeof conf.nodeTypes === 'string') {
            nodeType = this._properties[conf.nodeTypes];
          }
        }
        if (nodeType === void 0) {
          nodeType = "all";
        }
        this._setD3Properties('nodeType', nodeType);
        return nodeType;
      };

      Node.prototype._setD3Properties = function(props) {
        return _.merge(this._d3, props);
      };

      Node.prototype._addEdge = function(edge) {
        return this._adjacentEdges = _.union(this._adjacentEdges, [edge]);
      };

      Node.prototype.getProperties = function() {
        var key, keys, query;
        key = arguments[0], keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (key == null) {
          key = null;
        }
        if ((key == null) && (keys.length === 0)) {
          return this._properties;
        } else if (keys.length !== 0) {
          query = _.union([key], keys);
          return _.pick(this._properties, query);
        } else {
          return this._properties[key];
        }
      };

      Node.prototype.setProperty = function(property, value) {
        if (value == null) {
          value = null;
        }
        if (_.isPlainObject(property)) {
          _.assign(this._properties, property);
        } else {
          this._properties[property] = value;
        }
        return this;
      };

      Node.prototype.removeProperty = function() {
        var prop, properties, property, _i, _len;
        property = arguments[0], properties = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          prop = arguments[_i];
          delete this._properties[prop];
        }
        return this;
      };

      Node.prototype.getStyles = function() {
        var key, keys, node;
        key = arguments[0], keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        node = this;
        if (key === void 0) {
          return node._style;
        }
        return _.map(arguments, function(arg) {
          return node._style[arg];
        });
      };

      Node.prototype.setStyles = function(key, value) {
        if (value == null) {
          value = null;
        }
        if (key === void 0) {
          key = this.a.svgStyles.node.populate(this);
        } else if (_.isPlainObject(key)) {
          _.assign(this._style, key);
        } else {
          this._style[key] = value;
        }
        this._setD3Properties(this.a.svgStyles.node.populate(this));
        this.a._drawNodes.updateNode(this._d3);
        return this;
      };

      Node.prototype.toggleHidden = function() {
        var a;
        a = this.a;
        this._state = this._state === "hidden" ? "active" : "hidden";
        this.setStyles();
        return _.each(this._adjacentEdges, function(e) {
          var source, sourceState, target, targetState, _ref;
          _ref = e.id.split("-"), source = _ref[0], target = _ref[1];
          sourceState = a._nodes["" + source]._state;
          targetState = a._nodes["" + target]._state;
          if (e._state === "hidden" && (sourceState === "active" && targetState === "active")) {
            return e.toggleHidden();
          } else if (e._state === "active" && (sourceState === "hidden" || targetState === "hidden")) {
            return e.toggleHidden();
          }
        });
      };

      Node.prototype.outDegree = function() {
        return this._adjacentEdges.length;
      };

      Node.prototype.remove = function() {
        while (!_.isEmpty(this._adjacentEdges)) {
          this._adjacentEdges[0].remove();
        }
        delete this.a._nodes[this.id];
        return this.a.vis.select("#node-" + this.id).remove();
      };

      return Node;

    })();
  };

  Alchemy.prototype.plugins = function(instance) {
    return {
      init: function() {
        return _.each(_.keys(instance.conf.plugins), function(key) {
          instance.plugins[key] = Alchemy.prototype.plugins[key](instance);
          if (instance.plugins[key].init != null) {
            return instance.plugins[key].init();
          }
        });
      }
    };
  };

  Alchemy.prototype.themes = {
    "default": {
      "backgroundColour": "#000000",
      "nodeStyle": {
        "all": {
          "radius": function() {
            return 10;
          },
          "color": function() {
            return "#68B9FE";
          },
          "borderColor": function() {
            return "#127DC1";
          },
          "borderWidth": function(d, radius) {
            return radius / 3;
          },
          "captionColor": function() {
            return "#FFFFFF";
          },
          "captionBackground": function() {
            return null;
          },
          "captionSize": 12,
          "selected": {
            "color": function() {
              return "#FFFFFF";
            },
            "borderColor": function() {
              return "#349FE3";
            }
          },
          "highlighted": {
            "color": function() {
              return "#EEEEFF";
            }
          },
          "hidden": {
            "color": function() {
              return "none";
            },
            "borderColor": function() {
              return "none";
            }
          }
        }
      },
      "edgeStyle": {
        "all": {
          "width": 4,
          "color": "#CCC",
          "opacity": 0.2,
          "directed": true,
          "curved": true,
          "selected": {
            "opacity": 1
          },
          "highlighted": {
            "opacity": 1
          },
          "hidden": {
            "opacity": 0
          }
        }
      }
    },
    "white": {
      "theme": "white",
      "backgroundColour": "#FFFFFF",
      "nodeStyle": {
        "all": {
          "radius": function() {
            return 10;
          },
          "color": function() {
            return "#68B9FE";
          },
          "borderColor": function() {
            return "#127DC1";
          },
          "borderWidth": function(d, radius) {
            return radius / 3;
          },
          "captionColor": function() {
            return "#FFFFFF";
          },
          "captionBackground": function() {
            return null;
          },
          "captionSize": 12,
          "selected": {
            "color": function() {
              return "#FFFFFF";
            },
            "borderColor": function() {
              return "38DD38";
            }
          },
          "highlighted": {
            "color": function() {
              return "#EEEEFF";
            }
          },
          "hidden": {
            "color": function() {
              return "none";
            },
            "borderColor": function() {
              return "none";
            }
          }
        }
      },
      "edgeStyle": {
        "all": {
          "width": 4,
          "color": "#333",
          "opacity": 0.4,
          "directed": false,
          "curved": false,
          "selected": {
            "color": "#38DD38",
            "opacity": 0.9
          },
          "highlighted": {
            "color": "#383838",
            "opacity": 0.7
          },
          "hidden": {
            "opacity": 0
          }
        }
      }
    }
  };

  Alchemy.prototype.exports = function(instance) {
    var a;
    a = instance;
    return {
      init: function() {
        return a.exports.show();
      },
      show: function() {
        return a.dash.select("#all-exports").append("li").attr({
          "class": "list-group-item active-label toggle"
        }).html("SVG").on("click", function(e) {
          var sanitizedUrl, str, svg, url, win;
          svg = d3.select("" + a.conf.divSelector + " svg").node();
          str = (new XMLSerializer).serializeToString(svg);
          url = "data:image/svg+xml;utf8," + str;
          sanitizedUrl = url.replace("xlink:", "");
          win = window.open(sanitizedUrl);
          return win.focus();
        });
      }
    };
  };

  warnings = (function() {
    function warnings(instance) {
      this.dataWarning = __bind(this.dataWarning, this);
      this.a = instance;
    }

    warnings.prototype.dataWarning = function() {
      if (this.a.conf.dataWarning && typeof this.a.conf.dataWarning === 'function') {
        return this.a.conf.dataWarning();
      } else if (this.a.conf.dataWarning === 'default') {
        return console.log("No dataSource was loaded");
      }
    };

    warnings.prototype.divWarning = function() {
      return "create an element that matches the value for 'divSelector' in your conf.\nFor instance, if you are using the default 'divSelector' conf, simply provide\n<div id='#alchemy'></div>.";
    };

    return warnings;

  })();

}).call(this);

//# sourceMappingURL=alchemy.js.map