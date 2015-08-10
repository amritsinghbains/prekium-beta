function bt_eval(l,n){try{return window.eval.apply(window,[l])}catch(v){n&&n(v)}}var bt_parameter=function(){var l;return function(n,v){var y=v||document;"undefined"===typeof l&&(l=new BrightTag.HTTP.URL(y.location.href));return l.param(n)}}();function bt_meta(l,n){for(var v,y=(n||document).getElementsByTagName("meta"),u=0,r=y.length;u<r;u++)if(v=y[u],v.getAttribute("name")===l)return v.getAttribute("content");return""}
function bt_cookie(l,n){return(new BrightTag.HTTP.Cookie(n||document)).get(l)||""}function bt_data(l,n){return BrightTag.instance.data(l,n)}window.bt_data_escaped=bt_data;function bt_log(l){window.console&&console.log&&console.log("BrightTag: "+l)}var bt_handle_exception=bt_log,_bt_url_prefix,_bt_referrer,_bt_site,_bt_mode;
function btServe(l){if(null==BrightTag.instance){var n=BrightTag,v=n.extend({referrer:_bt_referrer,site:_bt_site,mode:_bt_mode},n.defaultConfig());null!=_bt_url_prefix&&(v.host=_bt_url_prefix);BrightTag.EventBinding=BrightTag.EventBindingManager(v.window,v.errorManager);n.instance=n.Main(n.extend(v,l||{}))}}
window.BrightTag=function(l){function n(a,d){return Object.prototype.toString.call(a)==="[object "+d+"]"}function v(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function y(a){return"\n//at-sourceURL=/BrightTag/"+a.replace(/\s+/g,"_")+".js"}function u(a,d){for(var c in d)d.hasOwnProperty(c)&&(a[c]=d[c]);return a}function r(a,d){if(a)if(q.isArray(a)||a.length){var c,b;c=0;for(b=a.length;c<b;c++)d(a[c],c)}else if(q.isObject(a))for(c in a)a.hasOwnProperty(c)&&d(c,a[c])}function J(a,d){var c=
[];r(q.isArray(a)?a:[a],function(a){d(a)&&c.push(a)});return c}function E(a,d){var c,b,g=q.isArray(a)?a:[a];c=0;for(b=g.length;c<b;c++)if(g[c]===d)return!0;return!1}function K(a){return!q.isString(a)?a:a.replace(/%/g,"%25").replace(/#/g,"%23").replace(/&/g,"%26").replace(/'/g,"%27").replace(/;/g,"%3B").replace(/</g,"%3C").replace(/>/g,"%3E")}function L(a){for(var d=5381,c=0,b=a.length;c<b;)d=(d<<5)+d+a.charCodeAt(c++);return d.toString(36)}function M(a){function d(){}function c(a){var e=Array.prototype.slice.call(arguments,
1);r(s,function(f){var b=[t].concat(e);(f[a]||d).apply(null,b)})}function b(){p=!0;l=w.length;c("engine:off")}function g(){p&&c("engine:on");p=!1;n=0;(w[l++]||b)()}function h(){c("block:finish");g()}function k(e,f){return function(){var b=!1,k,m=a.createElement("script");m.onload=m.onreadystatechange=function(){var a;if(!(a=b)){a:{switch(m.readyState){case void 0:case "loaded":case "complete":a=!0;break a}a=!1}a=!a}a||(b=!0,h())};m.onerror=function(){c("block:error",{type:"script",exception:"Problem loading "+
e});b||h()};m.src=e;f&&(m.text=f);c("block:start",e);k=a.getElementsByTagName("script")[0];k.parentNode.insertBefore(m,k)}}function e(e){return function(){try{c("block:start",e),q.isString(e)?a.defaultView?a.defaultView.eval.call(window,e):a.parentWindow?a.parentWindow.execScript(e):c("block:error",{type:"wait",exception:"Could not evaluate wait block ["+e+"]"}):e()}catch(f){c("block:error",{type:"wait",exception:f})}finally{h()}}}function m(a){w.push(a);p&&g();return t}function f(a){w.splice(l+n++,
0,a);return t}var t=this,s=[],O={},p=!1,w=[],l=0,n=0;t.run=function(){c("engine:on");g()};t.options=function(a){u(O,a);return t};t.option=function(a){return O[a]};t.script=function(a){return m(k(a))};t.wait=function(a){return m(e(a))};t.preemptScript=function(a,e){return f(k(a,e))};t.preemptWait=function(a){return f(e(a))};t.listen=function(a){s.push(a);(a["engine:listen"]||d).apply(null,[t]);return t}}function P(a){function d(a){h.push(a);e&&!m&&b()}function c(a){a.run()}function b(){var a=h[k];
a&&(k++,a.listen(f).run())}var g,h=[],k=0,e=!1,m=!1,f={"engine:on":function(){m=!0},"engine:off":function(){m=!1;b()}};g=d;this.alwaysQueue=function(){g=d};this.neverQueue=function(){g=c};this.push=function(a){g(a);return a};this.run=function(){e=!0;b()};this.applyListener=function(a){var e,f;e=k;for(f=h.length;e<f;e++)h[e].listen(a)};this.toString=function(){return"Group[name="+a+"; working="+m+"; running="+e+"]"}}function da(a,d){return{"engine:listen":function(c){c.listen(new ea(a,d))}}}function Q(a){function d(a){return g[a]||
(g[a]=new P(a))}function c(a){return b.addToGroup(a,b.newEngine())}var b=this,g={undefined:new P(void 0)},h=[];g.undefined.neverQueue();b.addGlobalListener=function(a){h.push(a);r(g,function(e,b){b.applyListener(a)})};b.addToGroup=function(a,e){r(h,function(a){e.listen(a)});return d(a).push(e)};b.newEngine=function(){return new M(a)};b.group=function(a){return c(a)};b.listen=function(){return c().listen.apply(null,arguments)};b.script=function(){return c().script.apply(null,arguments)};b.wait=function(){return c().wait.apply(null,
arguments)};b.run=function(a){d(a).run()};b.alwaysQueue=function(a){d(a).alwaysQueue()};b.neverQueue=function(a){d(a).neverQueue()};b.setOptions=function(){return c()}}function H(a){function d(a){var e,b;a=a.split(/; ?/);g={};for(var f=0,c=a.length;f<c;f++){b=a[f];e=b.indexOf("=");var d=g,h=b.slice(0,e);e=b.slice(e+1);e=unescape(e);d[h]=e}}function c(b,e,c){if(b){c=c||{};b=[b+"="+K(e||"")];if((e=c.expires)||0===e)q.isNumber(e)&&(e=(new Date(e)).toGMTString()),b.push("expires="+e);(e=c.path)&&b.push("path="+
e);(e=c.domain)&&b.push("domain="+e);!0===c.secure&&b.push("Secure");!0===c.httponly&&b.push("HttpOnly");c=b.join(";");if(c.length<h)a.cookie=c;else throw{name:"CookieTooLongError",message:"Cookie reached 4096 byte limit"};d(a.cookie)}}function b(a,b){c(a,"",u(b||{},{expires:1}))}var g={},h=4096;d(a.cookie||"");return{get:function(a){return g[a]},set:c,remove:b,findEach:function(a,b){for(var c in g)g.hasOwnProperty(c)&&c.match(a)&&b(c,g[c])},clear:function(a){var e=u({},g),c;for(c in e)b(c,a)}}}function R(a){a=
H(a);var d=a.set,c=a.remove;a.set=function(a,c,h){h=u(h||{},{path:"/"});0===h.expires&&(h.expires=+new Date("1/1/2038"));d(a,c,h)};a.remove=function(a,d){c(a,u(d||{},{path:"/"}))};a.purge=function(){};return a}function S(a,d){function c(a){a=a.expires;return 0!==a&&a<=+new Date}function b(b,e){a.setItem(b,e)}function g(a,b,e){b={value:b,expires:e};c(b)||d.setItem(a,JSON.stringify(b))}function h(a){a=d.getItem(a);try{return a?JSON.parse(a):void 0}catch(b){}}function k(a){a=h(a);var b;return a&&(a.hasOwnProperty("value")&&
a.hasOwnProperty("expires"))&&!c(a)?(b=a.value,delete a.value,[b,a]):[]}function e(a,b,e,c){for(var d,g=0,h=a.length;g<h;g++)d=a.key(g),!e[d]&&(e[d]=d.match(b))&&c(d)}return{set:function(a,e,c){a&&null!=e&&(c=c||{},(null!=c.expires?g:b)(a,e,c.expires))},get:function(b){return a.getItem(b)||k(b)[0]},findEach:function(b,c){var g={};e(a,b,g,function(b){var e=a.getItem(b);null!=e&&c(b,e)});e(d,b,g,function(a){var b=k(a),e=b[0],b=b[1];null!=e&&c(a,e,b)})},remove:function(b){a.removeItem(b);d.removeItem(b)},
purge:function(){for(var a,b,e=d.length;e--;)a=d.key(e),(b=h(a))&&(b.hasOwnProperty("value")&&b.hasOwnProperty("expires"))&&c(b)&&d.removeItem(a)}}}function F(a,d){var c={};c.set=a.set;c.findEach=function(b,c){var h={};a.findEach(b,function(a,b,d){h[a]=!0;c(a,b,d)});d.findEach(b,function(b,e,d){h[b]||(a.set(b,e,d),c(b,e,d))})};c.get=function(b){var c=a.get(b);void 0===c&&(c=d.get(b),void 0!==c&&a.set(b,c));return c};c.remove=function(b){a.remove(b);d.remove(b)};c.purge=function(){a.purge();d.purge()};
return c}function C(a){function d(a){var b={};if(!q.isString(a))return a;r(a.split("&"),function(a){if(""!==a){var e=a.split("=");a=decodeURIComponent(e[0]);e=e[1]&&decodeURIComponent(e[1].replace(/\+/g," "));(null==b[a]?b[a]=[]:b[a]).push(e)}});return b}function c(a,b){var c=[];r(a,function(a){if(q.isObject(a))return!1;a=null==a||""===a?b:a;(q.isString(a)||q.isNumber(a)||q.isBoolean(a))&&c.push(a)});return c}function b(a){return!q.isArray(a)?[a]:a}function g(a,b){var c=encodeURIComponent(a),d=encodeURIComponent(b);
return c+"="+d}var h=this,k={};u(k,d(a));h.param=function(a){a=k[a]||[""];return 1<a.length?a:a[0]};h.params=function(){return k};h.appendParam=function(a,d){if(a){var f=c(b(d));0<f.length&&(k[a]=(null==k[a]?k[a]=[]:k[a]).concat(f))}return this};h.replaceParam=function(a,d){if(a){var f=c(b(d));0<f.length&&(k[a]=(k[a]=[]).concat(f))}return this};h.appendParams=function(a){r(a,h.appendParam);return this};h.alwaysAppendParam=function(a,d){if(a){var f=c(b(d),"");0<f.length&&(k[a]=(null==k[a]?k[a]=[]:
k[a]).concat(f))}return this};h.alwaysReplaceParam=function(a,d){if(a){var f=c(b(d),"");0<f.length&&(k[a]=(k[a]=[]).concat(f))}return this};h.alwaysAppendParams=function(a){r(a,h.alwaysAppendParam);return this};h.appendPartialQueryString=function(a){a&&h.alwaysAppendParams(d(a));return this};h.deleteParam=function(a){delete k[a]};h.toString=function(){var a=[];r(k,function(b,c){r(c,function(c){a.push(g(b,c))})});return a.join("&")}}function A(a){function d(){var a=l.toString();return k+e+(0<a.length?
"?"+a:"")}var c={},b,g,h,k,e,m,f,t,s,l,p=a.match(fa);a=p[1]||"";g=p[2]||"";h=(p[3]||"").substring(1);b=g+(h?":"+h:"");k=a+(b?"//"+b:"");e=p[4]||"";m=(f=e.match(/^(.+?)?\/([^\/]+)?$/))&&f[1]||"";f=f&&f[2]||"";t=(p[5]||"").substring(1);s=(p[6]||"").substring(1);l=new C(t);u(c,l);u(c,{origin:k,scheme:a,host:b,hostname:g,port:h,path:e,pathname:m,scriptname:f,queryString:l.toString,fragment:function(){return s},tooLong:function(){return 2082<d().length},asString:d});c.toString=d;return c}function T(a,
d,c){function b(){var b=c.createEvent("Event");b.initEvent(d,!0,!1);try{b.currentTarget=b.target=a}catch(e){bt_log("warning: can not set target for ["+d+"] event: "+e)}return b}function g(){var a=c.createEventObject("Event");a.type=d;a.cancelable=!0;a.bubbleable=!1;return a}function h(c){setTimeout(function(){try{c.call(a,k?b():g())}catch(e){bt_log("error: overriding ["+d+"] event: "+e)}},0)}var k=!!a.addEventListener,e=k?"addEventListener":"attachEvent",m=a[e];a[e]=function(b,c,e){if("function"==
typeof c)if(b==d||b=="on"+d)h(c);else try{k?m.call(a,b,c,e):m(b,c)}catch(g){bt_log("error: proxying ["+b+"] event: "+g)}}}function U(a,d,c){function b(a){a.hasOwnProperty("enabled")&&(t=a.enabled);a.hasOwnProperty("timestamp")&&(l=a.timestamp);a.hasOwnProperty("site")&&(m=a.site);a.hasOwnProperty("referrer")&&(f=a.referrer)}function g(c){c&&b(c);s=[];a.remove(d)}function h(){try{return JSON.stringify({site:m,referrer:f,errors:s})}catch(a){bt_log("problem serializing errors: "+a.message)}return null}
function k(a){var b=q.isObject(a)?u({},a):{};b.type=b.type||"unknown";b.message=b.message||a.toString();b.timestamp=l;return b}function e(){g();s.push(k({type:"runtime",message:"Too many errors"}));a.set(d,h())}if(!a)throw Error("ErrorManager requires a store");var m,f,t=!0,s=[],l=+new Date;c&&b(c);return{configure:b,reset:g,hasErrors:function(){return 0<s.length},tooManyErrors:e,processStoredErrors:function(){var b=a.get(d);if(b)try{var c=JSON.parse(b)||{};m=c.site;f=c.referrer;q.isArray(c.errors)&&
(s=s.concat(c.errors))}catch(e){bt_log("problem reading stored errors: "+e.message)}},push:function(b){bt_log("error: "+JSON.stringify(b));if(t&&b&&!(-1>b.tagId||-1>b.pageId))try{s.push(k(b)),a.set(d,h())}catch(c){if("CookieTooLongError"!=c.name)throw c;e()}},toJSON:h,toArray:function(){return s}}}function ga(a,d){return new function(a,b){function d(a){f.wait(a)}function h(a){function b(){m=l.jQuery;d(a)}e="var $ = BrightTag.$; ";l.jQuery?b():f.script(l.instance.baseUri()+"BrightTag.jquery-1.5.1.js").wait(b)}
var k={},e="",m,f=l.Blab.group(b);k.getJQuery=function(){return m};k.ensureJQuery=function(e){k.ensureJQuery=d;m=a.jQuery;(m?d:h)(e);l.Blab.run(b)};k.functionWithAccess=function(a,b){return new Function(a,e+b)};return k}(a,d)}function V(a){function d(a,c){c&&c.findEach(a,function(a,c){b.appendParam(a,c)})}function c(a,b){return function(c){bt_log("invalid "+a+" expression: "+b+", exception = "+c)}}var b=this,g=a.window,h=a.parentReferrer,k=a.referrer,e=A(0===a.host.length?"":(/^[a-z0-9+.-]+:\/\/.+/.test(a.host)?
"":"//")+a.host+"/tag");u(b,e);b.toString=e.toString;b.appendParams({site:a.site,referrer:k,docReferrer:a.docReferrer,mode:a.mode,H:L(k||a.document.location.href)});k!==h&&b.appendParam("parentReferrer",h);d(/^btps\..+/,new H(a.document));d(/^btpdb\..+/,a.store);b.appendData=function(a){var c=bt_data(a),c=q.isArray(c)||q.isObject(c)?g.JSON.stringify(c):c;return b.alwaysReplaceParam("_cb_"+("bt_data('"+a+"')"),c)};b.appendJs=function(a){var e=c("client binding expression",a);return b.alwaysReplaceParam("_cb_"+
a,x(a,e))};b.cf=function(a){q.isArray(a)||(a=[a]);var c=b.param("cf");c&&(a=Array(c).concat(a));b.replaceParam("cf",a.join());return b};b.addCf=function(a,e){if(!x(e,c("conditional fire",e,"tags/"+a+"-cf.js")))return!1;var d=b.param("cf");b.replaceParam("cf",d?d+","+a:a);return!0};var m=b.toString();b.hasConditions=function(){return m!=b.toString()}}function W(a,d){function c(a,b){r(b,function(b,c){a[a.type+"."+b]=c});d.push(a)}function b(a,b,c){var e=l.instance.serverURL();r(a,function(a){a.trigger(b,
c,e)});e.hasConditions()&&l.Blab.script(e.asString())}function g(a,d,g){function h(b,e){r(f,function(d){var h,k=d.name;try{h=l[d.dbe];if(!h){var f=l,p=d.dbe,s,w=d.dbe,n=y("event-dbes/"+k+"-page-"+(z||"adhoc")+"-event-"+a);s=m.functionWithAccess(["eventObject","eventData"],"return "+w+";"+n);h=f[p]=s}g.data(k,h.call(b.target,b,e))}catch(r){c({type:"evdbe",message:r.toString(),pageId:z||-1},{name:k,eventName:a})}})}var k={},f=[],l={},z=(d||{}).pageId;k.data=function(a,b){f.push({name:a,dbe:b});return k};
k.applyDataBindings=h;k.handler=function(c){var d,g=e[a];g&&0<g.length&&(d=Array.prototype.slice.call(arguments,1),h(c,d),b(g,c,d))};return k}function h(a){function b(a){0<f.length&&(a.cf(f),r(l,function(b){a.appendData(b)}),r(N,function(b){a.appendJs(b)}))}function d(a,b){return function(c){bt_log("Invalid "+a+" expression: "+b+", exception = "+c)}}var e={},g={},h,k,f=[],l=[],N=[];e.execute=function(b,d){u(g,d||{});if(q.isFunction(b))k=b;else if(q.isString(b))a:{try{var h=y("events/"+a+"-tag-"+(g.tagId||
"adhoc"));k=m.functionWithAccess(["eventObject","eventData"],b+h);break a}catch(f){c({type:"evparse",message:f.toString(),tagId:g.tagId||-1},{eventName:a})}k=void 0}else bt_log("when.execute: unknown action: "+b);return e};e.evaluate=function(a){h=a;return e};e.fire=function(a){f.push(a);return e};e.appendData=function(a){l.push(a);return e};e.appendJs=function(a){N.push(a);return e};e.trigger=function(e,f,m){var l=d("post-event conditional fire",h);if(!h||x(h,l)){try{k&&k.call(e.target,e,f)}catch(ba){c({type:"evwait",
message:ba.toString(),tagId:g.tagId||-1},{eventName:a})}b(m)}};return e}var k={},e={},m=ga(a,"BrightTag.jQuery"),f=/^direct\//i;k.executeActions=b;k.Binder=g;k.bind=function(a,b,c,e){var d=g(a,e,l.instance);m.ensureJQuery(function(){var a=m.getJQuery(),e=a(b);if(q.isString(b)&&!f.test(c)&&(e.on||e.live))if(e.on)a(document).on(c,b,d.handler);else e.live(c,d.handler);else e.bind(c.split(f).pop(),d.handler)});return d};k.EventAction=h;k.when=function(a){var b=h(a),c=e[a];c||(c=e[a]=[]);c.push(b);return b};
return k}function ha(a,d,c,b){function g(b,d,g){var h=a.group(g).options(d||{});h.wait(function(){c.process(h,b)})}var h=!1,k={};k[b]=!0;return{tag:function(c,d){var f;f=d&&d.group;f=!h&&!f?b:f;g(c,d,f);f&&void 0===k[f]&&(k[f]=!0,h&&a.run(f))},run:function(){a.addGlobalListener(da(d,c));h=!0;r(k,a.run)}}}function X(a,d){function c(a){r(q.isArray(a)?a:[a],function(a){q.isFunction(a)?a():s.write('<script type="text/javascript" src="'+a+'">\x3c/script>')})}function b(a){var b=p.group().options({tagId:-2});
r(q.isArray(a)?a:[a],function(a){(q.isFunction(a)?b.wait:b.script)(a)})}function g(a){s.write(a)}function h(a,b){z.tag(a,b)}function k(a){f.writeScript=a?c:b;f.appendContent=a?g:h}function e(a){r(a,function(a){if(a.name){var b=u({},a);delete b.name;delete b.value;v.set(a.name,a.value,b)}})}function m(b){w.hasErrors()&&(b.appendParam("errors",w.toJSON()),b.tooLong()&&(b.deleteParam("errors"),w.tooManyErrors(),b.appendParam("errors",w.toJSON())));w.reset({site:a.site,referrer:a.referrer||s.location.href})}
var f=this,t=a.data||{},s=a.document||{},n=a.window||{},p=a.blab||l.Blab,w=a.errorManager,v=a.store,ca=Y(s),z=a.asyncTagManager||ha(p,s,ca,"domready");f.referrer=a.referrer;f.parentReferrer=a.parentReferrer;f.docReferrer=a.docReferrer;f.site=a.site;f.host=a.host;f.loadOnly=!!a.loadOnly;w&&p.addGlobalListener(new Z(w));p.run("serializer");f.load=function(){var a=Array.prototype.slice.call(arguments,0);r(a,function(a){q.isFunction(a)?p.addToGroup("serializer",p.newEngine().wait(function(){a(f)})):q.isObject(a)&&
a.src?f.library(a.src,a.options):q.isString(a)&&f.library(a)})};f.library=function(a,b){p.addToGroup("serializer",p.newEngine().options(b||{}).script(a))};k(E(a.mode,"sync"));f.domReady=function(){E(a.mode,"sync")&&k(!1);z.run()};f.parameter=function(a){return window.bt_parameter(a,s)};f.meta=function(a){return window.bt_meta(a,s)};f.cookie=function(a){return window.bt_cookie(a,s)};f.data=function(a,b){if(void 0!==b)return t[a]=b;b=t[a];return null==b?"":b};f.dbe=function(a,b,c){f.data(a,x(b,function(b){w&&
w.push({type:"dbe",message:b.toString(),"dbe.name":a,pageId:(c||{}).pageId||-1})},"page-dbes/"+a+"-page-"+(c&&c.pageId||"adhoc")))};f.errors=function(a){w.configure(a)};f.store=v?e:function(){};f.serverURL=function(){return new V(a)};f.defaultBaseUri=function(){return("https:"==s.location.protocol?"https:":"http:")+"//s.btstatic.com/"};f.baseUri=function(){var a=/\btag(\.[^.]+|-n)?\.js(#.*)?$/;return d&&d.src&&d.src.replace(a,"")||f.defaultBaseUri()};f.primary=function(){function a(){var b=f.serverURL();
w&&(w.processStoredErrors(),m(b));return b.toString()}var b=[];n.JSON?b.push(a()):(b.push(f.baseUri()+"json2.js"),b.push(function(){f.writeScript(a())}));f.writeScript(b)};f.secondary=function(a){var b=f.serverURL(),c=b.toString();a(b);b.toString()!=c&&(w&&m(b),f.writeScript(b.toString()))}}function B(){var a={},d={};return{on:function(c,b){var d=a[c];d||(d=a[c]=[]);d.push(b)},once:function(a,b){var g=d[a];g||(g=d[a]=[]);g.push(b)},emit:function(c){function b(a){a.apply(this,g)}var g=Array.prototype.slice.call(arguments,
1);r(a[c],b);r(d[c],b);d[c]=[]}}}function ia(a){function d(a,c){void 0!==c&&(b[a]=c);var d=b[a];return null==d?"":d}var c,b=u({},a);return c=u({dbe:function(a,b,k){d(a,x(b,function(b){c.emit("error",b,a,k)}))},data:d,hasData:function(a){return null!=b[a]}},B())}function ja(a){var d,c={},b=["eventObject","eventData","$","bt_data"];return d=u({dbe:function(a,h){try{c[a]=new Function(b,"return "+h+";")}catch(k){k.type="evdbe",d.emit("error",k,a)}return d},trigger:function(b,h,k){var e=b.target,m=[b,
h,k,a.data];r(c,function(b,c){try{a.data(b,c.apply(e,m))}catch(h){h.type="evdbe",d.emit("error",h,b)}})}},B())}function ka(a){function d(a,c){c.type=a;b.emit("error",c)}function c(a){g.push(a);return b}var b,g=[],h=function(){return!0},k=["eventObject","eventData","$","bt_data"];return b=u({fire:function(a){return c(function(b){b.fire(a)})},appendData:function(a){return c(function(b){b.appendData(a)})},appendJs:function(a){return c(function(b){b.appendJs(a)})},execute:function(e){function h(b,c,e,
g){try{s.call(c.target,c,e,g,a.data)}catch(k){d("evwait",k)}}var g;if(q.isString(e))a:{try{g=new Function(k,e);break a}catch(l){d("evparse",l)}g=void 0}else g=e;var s=g;return s?c(h):b},evaluate:function(c){var d=new Function(k,"return "+c);h=function(b,c,e,h){return d.call(c.target,c,e,h,a.data)};return b},trigger:function(a,b,c,d){h(a,b,c,d)&&r(g,function(h){h(a,b,c,d)})}},B())}function la(a){var d=/^direct\//i,c=!1;return{bind:function(a,c,h){function k(a){var b=Array.prototype.slice.call(arguments,
1);h(a,b,l.jQuery||window.jQuery)}var e=l.jQuery||window.jQuery,m=e(a),f=d.test(c);if(!f&&m.on)e(document).on(c,a,k);else!f&&m.live?m.live(c,k):m.bind(c.split(d).pop(),k)},newBinder:function(a){return ja(a)},newHandler:function(a){return ka(a)},ensureLibrary:function(b){l.jQuery||window.jQuery?b():(c||(c=!0,a.run()),a.wait(b))}}}function ma(a,d){function c(b,c,d,l){var f=$(a);r(b,function(a){a.trigger(f,c,d,l)});g.emit("triggered",f)}var b={},g=B();return u(g,{bind:function(h,k,e,l){function f(a,
d,e){t.trigger(a,d,e);c(b[h],a,d,e)}var t=d.newBinder(a,h);t.on("error",function(a,b){g.emit("error",a,{name:b,eventName:h},l)});d.ensureLibrary(function(){d.bind(k,e,f)});return t},handle:function(c,k){var e=d.newHandler(a);e.on("error",function(a){g.emit("error",a,{eventName:c},k)});b[c]=b[c]||[];b[c].push(e);return e}})}function Y(a){function d(a,b){a.src?b.preemptScript(a.src,a.innerHTML):a.innerHTML&&b.preemptWait(a.innerHTML)}function c(b){try{a.body.appendChild(b.cloneNode(!0))}catch(c){bt_log("error appending content to body: "+
c)}}var b=a.createElement("div");return{process:function(a,h){if(0!==h.length){b.innerHTML="<br/>"+h;for(var k=b.childNodes||[],e=1,l=k.length;e<l;e++)("SCRIPT"==k[e].tagName?d:c)(k[e],a)}}}}function na(a){function d(b){a.write(b);return c}var c;return c={tag:d,script:function(a){return d('<script type="text/javascript" src="'+a+'">\x3c/script>')},wait:function(a){a();return c}}}function oa(a,d){function c(b,c){var d=b&&b.group;c(a.group(d).options(b||{}));d&&void 0===g[d]&&(g[d]=!0,a.run(d))}var b,
g={};return b={tag:function(a,k){c(k,function(b){b.wait(function(){d.process(b,a)})});return b},script:a.script,wait:a.wait}}function pa(a,d){var c=d;return{tag:function(a,d){return c.tag(a,d)},script:function(a){return c.script(a)},wait:function(a){return c.wait(a)},sync:function(){c=a},async:function(){c=d}}}function Z(a){return{dbe:function(d,c,b){a.push({type:"dbe",message:d.toString(),"dbe.name":c,pageId:(b||{}).pageId||-1})},events:function(d,c,b){var g=d.type,h="evdbe"===g?"pageId":"tagId",
k={type:g,message:d.toString()};r(c,function(a,b){k[g+"."+a]=b});k[h]=(b||{})[h]||-1;a.push(k)},"block:error":function(d,c){var b,g,h;c&&(b=c.type,g=c.exception||c,h=d.option("tagId")||-1,a.push({type:b,message:g.toString(),tagId:h}))}}}function qa(a){function d(){var b=new A(a.src),c={},d=b.fragment();c.staticHost=b.host+b.pathname;d&&r((new C(d)).params(),function(a,b){c[a]=1<b.length?b:b[0]});return c}function c(){var b=v(a.innerHTML);return 0===b.length?{}:x("(\n"+b+"\n)",function(a){bt_log("configuration error: "+
a)},"site-config")}return{isTagjs:function(){return/\/tag(\.[^.]+|-n)?\.js(\?.*)?(#.*)?$/.test(a.src)},toJSON:function(){return u(d(),c())},script:a}}function ra(){function a(){return d}var d;return d={fire:a,appendData:a,appendJs:a,when:a}}function $(a){function d(a,b){for(var c in a)if(b(c,a[c]))return!0;return!1}var c,b=[],g={};return c={toJSON:function(){var a=0<b.length?{cf:b.join()}:{};return u(a,g)},fire:function(a){a=J(a,function(a){return null!=a&&""!==a});b=b.concat(a);return c},appendData:function(b){g["_cb_bt_data('"+
b+"')"]=a.data(b);return c},appendJs:function(a){g["_cb_"+a]=x(a);return c},when:function(b){var d;try{return d=new Function(["bt_data"],"return "+b),d(a.data)?c:ra()}catch(e){bt_log("conditional fire error: "+e.toString())}},hasConditions:function(){return 0<b.length||d(g,function(a,b){return null!=b})}}}function sa(a,d,c,b,g,h){function k(){x=!0;d.async();p.mode=J(p.mode,function(a){return"sync"!==a})}function e(a){var c=p.referrer,d=p.parentReferrer,e=A("//"+q+"/tag").appendParams({site:p.site,
mode:p.mode,H:p.H,referrer:c,docReferrer:p.docReferrer,parentReferrer:d===c?null:d}).alwaysAppendParams(a);g.findEach(RegExp("^btp(s|db)\\."+p.site+"\\..+"),function(a,b){e.appendParam(a,b)});return e.appendParams({errors:b.hasErrors()?b.toJSON():null})}function l(a){if(null==a)return e();if(a.hasConditions())return e(a.toJSON())}function f(a){if(null==a||a.hasConditions())b.reset({site:p.site,referrer:p.referrer||window.location.href})}function t(a){var c=l(a);c?(c.tooLong()&&(b.tooManyErrors(),
c=l(a)),f(a),d.script(c.toString())):f(a)}function s(a){null==window.JSON?d.script(A(p.staticHost+"/json2.js")).wait(a):a()}var n,p=u({},h),q=p.host||"",v=B(),x=!1;c.on("triggered",t);return n={config:p,errors:function(a){b.configure(a)},dbe:a.dbe,data:a.data,store:function(a){r(a,function(a){if(a.name){var b=u({},a);delete b.name;delete b.value;g.set(a.name,a.value,b)}})},tag:d.tag,script:d.script,wait:d.wait,events:{bind:c.bind,on:c.handle},domready:function(a){if(null==a)k();else v.once("domready",
a);x&&v.emit("domready",n)},primary:function(){s(function(){b.processStoredErrors();t()})},secondary:function(b){var c=$(a);b(c);t(c)}}}function ta(a){var d,c,b=[];if(q.isArray(a))b=a.slice(0);else{d=0;for(c=a.length;d<c;d++)b.push(a[d])}return b}function aa(){var a,d=R(document),c=d,b=d;try{window.localStorage&&window.sessionStorage&&(a=S(sessionStorage,localStorage),a.purge(),c=F(d,a),b=F(a,d))}catch(g){bt_log("Unable to access DOM storage: "+g)}return{id:Math.random(),loadOnly:!1,window:window,
document:document,host:"s.thebrighttag.com",parentReferrer:top!=self&&self.window?self.window.location.href:null,docReferrer:document.referrer,data:{},store:c,errorManager:U(b,"__bterr")}}if(l)return l;l={};var q={isString:function(a){return n(a,"String")},isArray:function(a){return n(a,"Array")},isNumber:function(a){return n(a,"Number")},isBoolean:function(a){return n(a,"Boolean")},isFunction:function(a){return n(a,"Function")},isObject:function(a){return null===a||void 0===a?!1:n(a,"Object")}},
x=bt_eval,ea=function(){function a(){}var d,c=[],b=function(a){d.push(a)};return function(g,h){var k;this["block:start"]=function(){c.push([d,g.write,g.writeln,g.open,g.close]);d=[];g.write=g.writeln=b;g.open=g.close=a};this["block:finish"]=function(){try{h.process(k,d.join(""))}finally{var a=c.pop();d=a[0];g.write=a[1];g.writeln=a[2];g.open=a[3];g.close=a[4]}};this["engine:listen"]=function(a){k=a}}}(),fa=/^(?:([^:\/]+:)?\/\/)?([^:\/?#]+)?(:[0-9]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,I={},D,G=R(document);
try{window.localStorage&&window.sessionStorage&&(D=S(sessionStorage,localStorage),D.purge())}catch(ua){bt_log("Unable to access DOM storage: "+ua)}l.Escaper={cookie:K,javascript:function(a){return!q.isString(a)?a:a.replace(/\\/g,"\\\\").replace(/'/g,"\\x27").replace(/"/g,"\\x22").replace(/\n/g,"\\n").replace(/\r/g,"\\r")}};l.Random={integer:function(a){return Math.floor(Math.random()*(a||1E8))}};l.pushIfDefined=function(a,d,c){a&&(a.constructor==Array&&null!=d)&&a.push(c||d)};l.ServerURL=V;l.Main=
function(a){function d(b){(b=(new A(b.src)).fragment())&&r((new C(b)).params(),function(b,c){a[b]=c[0]})}function c(b){function c(a){bt_log("configuration error: "+a)}b=v(b.innerHTML);0!==b.length&&u(a,x("(\n"+b+"\n)",c,"site-config"))}var b,g=function(){var b,c,d=/\/tag(\.[^.]+|-n)?\.js(#.*)?$/,f=a.document.getElementsByTagName("script");for(b=f.length-1;-1<b;b--)if(c=f[b],d.test(c.src))return c}();g&&(d(g),c(g));if(null!=a.site){l.Events.enablePageReadyOverrides();try{b=new X(a,g),l.Events.onDOMReady(b.domReady),
b.loadOnly||b.primary()}catch(h){bt_log("execution error: "+h)}return b}};l.CookieSync={pushImage:function(a){(new Image).src=a;throw"CookieSync.pushImage no longer supported ["+a+"]";},pushIframe:function(a){throw"CookieSync.pushIframe no longer supported ["+a+"]";}};l.EventBindingManager=W;l.defaultConfig=aa;l.Types=q;l.trim=v;l.each=r;l.extend=u;l.eval=x;l.HTTP={Cookie:H,QueryString:C,URL:A};l.Blab=new Q(document);l.$LAB=l.Blab;l.Events=new function(a,d){function c(){}function b(a,b,c){a[p](q+
b,c,!1)}function g(a,b,c){a[r](q+b,c,!1)}function h(){var a=d.readyState;if("loading"==a)return!1;if("complete"==a)return!0;a:{try{u("left")}catch(b){a=!1;break a}a=!0}return a}function k(a,b,c){var d=this;setTimeout(function(){a()?b.call(d):k(a,b,c)},c)}function e(){e=c;t&&T(d,s,d)}function l(){e();T(a,n,d)}var f=this,t=!!a.addEventListener,s="DOMContentLoaded",n="load",p=t?"addEventListener":"attachEvent",r=t?"removeEventListener":"detachEvent",q=t?"":"on",u=d.documentElement.doScroll||function(){throw"No doScroll";
};f.listen=b;f.unlisten=g;f.onDOMReady=function(c){h()?c.call(this):d.addEventListener?(b(d,s,c),b(d,s,function(){g(a,n,c)}),b(a,n,c)):k(h,c,1)};f.enablePageReadyOverrides=function(){f.enablePageReadyOverrides=c;h()?l():(t&&b(d,s,e),b(a,n,l))}}(window,document);l.Events.enablePageReadyOverrides();l.site=function(a,d){var c=I[a];c&&d&&d(c);return c};l.main=function(a,d){r(ta(a.document.getElementsByTagName("script")),function(c){c=qa(c);if(c.isTagjs())try{var b=c.toJSON();if(!(l.instance&&l.instance.site===
b.site))if(b.site&&!l.instance&&!E(b.mode,"v2")){var g=c.script,h=aa();l.EventBinding=W(h.window,h.errorManager);l.instance=new X(u(h,b),g);d&&d(l.instance,!0)}else{var k,e=L(b.referrer||a.location.href),m=a.location.href,f=u({host:"s.thebrighttag.com",H:e,docReferrer:a.document.referrer,parentReferrer:a.top!=a.self&&m!==b.referrer?m:null},b);f.mode=E(f.mode,"v2")?f.mode:!f.mode?"v2":["v2"].concat(f.mode);var n,s,r,p,q=f.site;if(q&&!I[q]){n=ia(f.data);s=new Q(document);var v=na(document),x=oa(s,Y(document)),
z=pa(v,x);E(f.mode,"sync")&&z.sync();var y,B=A(f.staticHost+"/BrightTag.jquery-1.5.1.js");y=la((new M(document)).script(B));r=ma(n,y);p=U(D?F(D,G):G,"__bterr_"+q);errorListener=Z(p);n.on("error",errorListener.dbe);r.on("error",errorListener.events);s.addGlobalListener(errorListener);k=site=I[q]=sa(n,z,r,p,D?F(G,D):G,f)}else k=void 0;k&&d&&d(k,!1)}}catch(C){bt_log("error configuring site ["+c.script.src+"]: "+C)}})};return l}(window.BrightTag);
(function(){function l(l,v){v?(BrightTag.Events.onDOMReady(l.domReady),l.loadOnly||l.primary()):l.config.loadOnly||(BrightTag.Events.onDOMReady(function(){l.domready()}),l.primary())}BrightTag.main(window,l);null==BrightTag.instance&&setTimeout(function(){null==BrightTag.instance&&BrightTag.main(window,l)},0)})();