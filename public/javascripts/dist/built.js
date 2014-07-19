(function(T,V,s){'use strict';function t(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.18/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function db(b){if(null==b||Ea(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:C(b)||O(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(Q(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(db(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Wb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Wb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Xb(b){return function(a,c){b(c,a)}}function eb(){for(var b=ja.length,a;b;){b--;a=ja[b].charCodeAt(0);if(57==a)return ja[b]="A",ja.join("");if(90==a)ja[b]="0";else return ja[b]=String.fromCharCode(a+1),ja.join("")}ja.unshift("0");return ja.join("")}function Yb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function J(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Yb(b,a);return b}function Z(b){return parseInt(b,
10)}function Zb(b,a){return J(new (J(function(){},{prototype:b})),a)}function y(){}function Fa(b){return b}function $(b){return function(){return b}}function D(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function U(b){return null!=b&&"object"===typeof b}function C(b){return"string"===typeof b}function yb(b){return"number"===typeof b}function Na(b){return"[object Date]"===wa.call(b)}function Q(b){return"function"===typeof b}function fb(b){return"[object RegExp]"===wa.call(b)}
function Ea(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function Oa(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Pa(b,a){var c=Oa(b,a);0<=c&&b.splice(c,1);return a}function Ga(b,a,c,d){if(Ea(b)||b&&b.$evalAsync&&b.$watch)throw Qa("cpws");if(a){if(b===a)throw Qa("cpi");c=c||[];
d=d||[];if(U(b)){var e=Oa(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(O(b))for(var g=a.length=0;g<b.length;g++)e=Ga(b[g],null,c,d),U(b[g])&&(c.push(b[g]),d.push(e)),a.push(e);else{var f=a.$$hashKey;q(a,function(b,c){delete a[c]});for(g in b)e=Ga(b[g],null,c,d),U(b[g])&&(c.push(b[g]),d.push(e)),a[g]=e;Yb(a,f)}}else(a=b)&&(O(b)?a=Ga(b,[],c,d):Na(b)?a=new Date(b.getTime()):fb(b)?a=RegExp(b.source):U(b)&&(a=Ga(b,{},c,d)));return a}function ka(b,a){if(O(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=
b[c]}else if(U(b))for(c in a=a||{},b)!zb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(O(b)){if(!O(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(Na(b))return Na(a)&&b.getTime()==a.getTime();if(fb(b)&&fb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&
a.$watch||Ea(b)||Ea(a)||O(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!Q(b[d])){if(!xa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!Q(a[d]))return!1;return!0}return!1}function $b(){return V.securityPolicy&&V.securityPolicy.isActive||V.querySelector&&!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"))}function Ab(b,a){var c=2<arguments.length?ya.call(arguments,2):[];return!Q(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,c.concat(ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:Ea(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function ra(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Vc,a?"  ":null)}function ac(b){return C(b)?JSON.parse(b):b}function Ra(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=L(""+b),b=!("f"==b||"0"==b||"false"==
b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?L(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+L(b)})}catch(d){return L(c)}}function bc(b){try{return decodeURIComponent(b)}catch(a){}}function cc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=bc(c[0]),B(d)&&(b=B(c[1])?bc(c[1]):!0,a[d]?O(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}
function Bb(b){var a=[];q(b,function(b,d){O(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function gb(b){return za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app",
"ng-app","x-ng-app","data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(V.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function dc(b,a){var c=function(){b=w(b);if(b.injector()){var c=
b[0]===V?"document":ga(b);throw Qa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ec(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(T&&!d.test(T.name))return c();T.name=T.name.replace(d,"");Sa.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function hb(b,a){a=a||"_";return b.replace(Xc,function(b,
d){return(d?a:"")+b.toLowerCase()})}function Cb(b,a,c){if(!b)throw Qa("areq",a||"?",c||"required");return b}function Ta(b,a,c){c&&O(b)&&(b=b[b.length-1]);Cb(Q(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Qa("badname",a);}function fc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&Q(b)?Ab(e,b):b}function Db(b){var a=b[0];b=b[b.length-1];if(a===
b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Yc(b){var a=t("$injector"),c=t("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||t;return b.module||(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],l=b("$injector",
"invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};f&&l(f);return n}())}}())}function Zc(b){J(b,{bootstrap:dc,
copy:Ga,extend:J,equals:xa,element:w,forEach:q,injector:ec,noop:y,bind:Ab,toJson:ra,fromJson:ac,identity:Fa,isUndefined:D,isDefined:B,isString:C,isFunction:Q,isObject:U,isNumber:yb,isElement:Tc,isArray:O,version:$c,isDate:Na,lowercase:L,uppercase:Ha,callbacks:{counter:0},$$minErr:t,$$csp:$b});Ua=Yc(T);try{Ua("ngLocale")}catch(a){Ua("ngLocale",[]).provider("$locale",ad)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",gc).directive({a:cd,input:hc,textarea:hc,
form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ic,ngRequired:ic,ngValue:Id}).directive({ngInclude:Jd}).directive(Eb).directive(jc);a.provider({$anchorScroll:Kd,
$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:kc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function Va(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Fb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,h,l,n,p,r,
v;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,n=h.length;l<n;l++)for(p=w(h[l]),m?p.triggerHandler("$destroy"):m=!m,r=0,p=(v=p.children()).length;r<p;r++)e.push(Ba(v[r]));return g.apply(this,arguments)}var g=Ba.fn[b],g=g.$original||g;e.$original=g;Ba.fn[b]=e}function R(b){if(b instanceof R)return b;C(b)&&(b=aa(b));if(!(this instanceof R)){if(C(b)&&"<"!=b.charAt(0))throw Gb("nosel");return new R(b)}if(C(b)){var a=b;b=V;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();
c=[];if(Hb.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=da[e]||da._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Ib(this,b);w(V.createDocumentFragment()).append(this)}else Ib(this,b)}function Jb(b){return b.cloneNode(!0)}
function Ia(b){lc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ia(b[a])}function mc(b,a,c,d){if(B(d))throw Gb("offargs");var e=la(b,"events");la(b,"handle")&&(D(a)?q(e,function(a,c){Wa(b,c,a);delete e[c]}):q(a.split(" "),function(a){D(c)?(Wa(b,a,e[a]),delete e[a]):Pa(e[a]||[],c)}))}function lc(b,a){var c=b[ib],d=Xa[c];d&&(a?delete Xa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),mc(b)),delete Xa[c],b[ib]=s))}function la(b,a,c){var d=b[ib],d=Xa[d||-1];if(B(c))d||(b[ib]=d=++me,
d=Xa[d]={}),d[a]=c;else return d&&d[a]}function nc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!U(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];J(d,a)}else return d}function Kb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function jb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}
function kb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Ib(b,a){if(a){a=a.nodeName||!B(a.length)||Ea(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return lb(b,"$"+(a||"ngController")+"Controller")}function lb(b,a,c){b=w(b);9==b[0].nodeType&&(b=b.find("html"));for(a=O(a)?a:[a];b.length;){for(var d=b[0],e=0,g=a.length;e<
g;e++)if((c=b.data(a[e]))!==s)return c;b=w(d.parentNode||11===d.nodeType&&d.host)}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ia(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=mb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||V);if(D(c.defaultPrevented)){var g=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=ka(a[e||c.type]||[]);q(f,function(a){a.call(b,c)});8>=S?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ja(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=
b.$$hashKey():c===s&&(c=b.$$hashKey=eb()):c=b;return a+":"+c}function Ya(b){q(b,this.put,this)}function sc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,""),c=c.match(pe),q(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):O(b)?(c=b.length-1,Ta(b[c],"fn"),a=b.slice(0,c)):Ta(b,"fn",!0);return a}function ec(b){function a(a){return function(b,c){if(U(b))q(b,Xb(a));else return a(b,c)}}function c(a,b){Aa(a,"service");if(Q(b)||
O(b))b=n.instantiate(b);if(!b.$get)throw Za("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,k;q(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(C(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,k=d.length;g<k;g++){var f=d[g],m=n.get(f[0]);m[f[1]].apply(m,f[2])}else Q(a)?b.push(n.invoke(a)):O(a)?b.push(n.invoke(a)):Ta(a,"module")}catch(l){throw O(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&
(l=l.message+"\n"+l.stack),Za("modulerr",a,l.stack||l.message||l);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Za("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var g=[],k=sc(a),f,m,h;m=0;for(f=k.length;m<f;m++){h=k[m];if("string"!==typeof h)throw Za("itkn",h);g.push(e&&e.hasOwnProperty(h)?e[h]:c(h))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,
instantiate:function(a,b){var c=function(){},e;c.prototype=(O(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return U(e)||Q(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var f={},k="Provider",m=[],h=new Ya,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){Aa(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,
b){var c=n.get(a+k),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=l.$injector=g(l,function(){throw Za("unpr",m.join(" <- "));}),p={},r=p.$injector=g(p,function(a){a=n.get(a+k);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||y)});return r}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==L(a.nodeName)||(b=a)});return b}
function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(v--,0===v)for(;I.length;)try{I.pop()()}catch(b){c.error(b)}}}
function g(a,b){(function ba(){q(x,function(a){a()});u=b(ba,a)})()}function f(){z=null;M!=k.url()&&(M=k.url(),q(ha,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,r={};k.isMock=!1;var v=0,I=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){v++};k.notifyWhenNoOutstandingRequests=function(a){q(x,function(a){a()});0===v?a():I.push(a)};var x=[],u;k.addPollFn=function(a){D(u)&&g(100,n);x.push(a);return a};var M=h.href,F=a.find("base"),
z=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(M!=a)return M=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),F.attr("href",F.attr("href"))):(z=a,c?h.replace(a):h.href=a),k}else return z||h.href.replace(/%27/g,"'")};var ha=[],P=!1;k.onUrlChange=function(a){if(!P){if(d.history)w(b).on("popstate",f);if(d.hashchange)w(b).on("hashchange",f);else k.addPollFn(f);P=!0}ha.push(a);return a};k.baseHref=function(){var a=F.attr("href");return a?
a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},ca="",E=k.baseHref();k.cookies=function(a,b){var d,e,g,k;if(a)b===s?m.cookie=escape(a)+"=;path="+E+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+E).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==ca)for(ca=m.cookie,d=ca.split("; "),N={},g=0;g<d.length;g++)e=d[g],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,
k)),N[a]===s&&(N[a]=unescape(e.substring(k+1))));return N}};k.defer=function(a,b){var c;v++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(y),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in
a)throw t("$cacheFactory")("iid",b);var f=0,k=J({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!D(b))return a in m||f++,m[a]=b,f>h&&this.remove(p.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);g(b.n,b.p);delete l[a]}delete m[a];f--},removeAll:function(){m=
{};f=0;l={};n=p=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return J({},k,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,g=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Aa(a,"directive");C(a)?
(Cb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);Q(f)?f={compile:$(f)}:!f.compile&&f.link&&(f.compile=$(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,Xb(m));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),
this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,r,v,I,x,u,M,F){function z(a,b,c,d,e){a instanceof w||(a=w(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});
var g=P(a,b,a,c,d,e);ha(a,"ng-scope");return function(b,c,d,e){Cb(b,"scope");var f=c?Ka.clone.call(a):a;q(d,function(a,b){f.data("$"+b+"Controller",a)});d=0;for(var m=f.length;d<m;d++){var h=f[d].nodeType;1!==h&&9!==h||f.eq(d).data("$scope",b)}c&&c(f,b);g&&g(b,f,f,e);return f}}function ha(a,b){try{a.addClass(b)}catch(c){}}function P(a,b,c,d,e,g){function f(a,c,d,e){var g,h,l,r,n,p,v;g=c.length;var K=Array(g);for(n=0;n<g;n++)K[n]=c[n];v=n=0;for(p=m.length;n<p;v++)h=K[v],c=m[n++],g=m[n++],l=w(h),c?
(c.scope?(r=a.$new(),l.data("$scope",r)):r=a,l=c.transcludeOnThisElement?N(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?N(a,b):null,c(g,r,h,d,l)):g&&g(a,h.childNodes,s,e)}for(var m=[],h,l,r,n,p=0;p<a.length;p++)h=new Lb,l=ca(a[p],[],h,0===p?d:s,e),(g=l.length?H(l,a[p],h,b,c,null,[],[],g):null)&&g.scope&&ha(w(a[p]),"ng-scope"),h=g&&g.terminal||!(r=a[p].childNodes)||!r.length?null:P(r,g?(g.transcludeOnThisElement||!g.templateOnThisElement)&&g.transclude:b),m.push(g,h),n=n||g||h,g=null;return n?
f:null}function N(a,b,c){return function(d,e,g){var f=!1;d||(d=a.$new(),f=d.$$transcluded=!0);e=b(d,e,g,c);if(f)e.on("$destroy",function(){d.$destroy()});return e}}function ca(a,b,c,d,f){var m=c.$attr,h;switch(a.nodeType){case 1:ba(b,ma(La(a).toLowerCase()),"E",d,f);var l,r,n;h=a.attributes;for(var p=0,v=h&&h.length;p<v;p++){var x=!1,I=!1;l=h[p];if(!S||8<=S||l.specified){r=l.name;n=ma(r);W.test(n)&&(r=hb(n.substr(6),"-"));var M=n.replace(/(Start|End)$/,"");n===M+"Start"&&(x=r,I=r.substr(0,r.length-
5)+"end",r=r.substr(0,r.length-6));n=ma(r.toLowerCase());m[n]=r;c[n]=l=aa(l.value);qc(a,n)&&(c[n]=!0);R(a,b,l,n);ba(b,n,"A",d,f,x,I)}}a=a.className;if(C(a)&&""!==a)for(;h=g.exec(a);)n=ma(h[2]),ba(b,n,"C",d,f)&&(c[n]=aa(h[3])),a=a.substr(h.index+h[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(h=e.exec(a.nodeValue))n=ma(h[1]),ba(b,n,"M",d,f)&&(c[n]=aa(h[2]))}catch(u){}}b.sort(D);return b}function E(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",
b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function A(a,b,c){return function(d,e,g,f,h){e=E(e[0],b,c);return a(d,e,g,f,h)}}function H(a,c,d,e,g,f,m,n,p){function x(a,b,c,d){if(a){c&&(a=A(a,c,d));a.require=G.require;a.directiveName=na;if(N===G||G.$$isolateScope)a=uc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=A(b,c,d));b.require=G.require;b.directiveName=na;if(N===G||G.$$isolateScope)b=uc(b,{isolateScope:!0});n.push(b)}}
function I(a,b,c,d){var e,g="data",f=!1;if(C(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(g="inheritedData"),f=f||"?"==e;e=null;d&&"data"===g&&(e=d[b]);e=e||c[g]("$"+b+"Controller");if(!e&&!f)throw ia("ctreq",b,a);}else O(b)&&(e=[],q(b,function(b){e.push(I(a,b,c,d))}));return e}function M(a,e,g,f,p){function x(a,b){var c;2>arguments.length&&(b=a,a=s);Ca&&(c=ca);return p(a,b,c)}var u,K,z,F,A,E,ca={},nb;u=c===g?d:ka(d,new Lb(w(g),d.$attr));K=u.$$element;if(N){var ba=/^\s*([@=&])(\??)\s*(\w*)\s*$/;
f=w(g);E=e.$new(!0);!H||H!==N&&H!==N.$$originalDirective?f.data("$isolateScopeNoTemplate",E):f.data("$isolateScope",E);ha(f,"ng-isolate-scope");q(N.scope,function(a,c){var d=a.match(ba)||[],g=d[3]||c,f="?"==d[2],d=d[1],m,l,n,p;E.$$isolateBindings[c]=d+g;switch(d){case "@":u.$observe(g,function(a){E[c]=a});u.$$observers[g].$$scope=e;u[g]&&(E[c]=b(u[g])(e));break;case "=":if(f&&!u[g])break;l=r(u[g]);p=l.literal?xa:function(a,b){return a===b};n=l.assign||function(){m=E[c]=l(e);throw ia("nonassign",u[g],
N.name);};m=E[c]=l(e);E.$watch(function(){var a=l(e);p(a,E[c])||(p(a,m)?n(e,a=E[c]):E[c]=a);return m=a},null,l.literal);break;case "&":l=r(u[g]);E[c]=function(a){return l(e,a)};break;default:throw ia("iscp",N.name,c,a);}})}nb=p&&x;P&&q(P,function(a){var b={$scope:a===N||a.$$isolateScope?E:e,$element:K,$attrs:u,$transclude:nb},c;A=a.controller;"@"==A&&(A=u[a.name]);c=v(A,b);ca[a.name]=c;Ca||K.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(z=m.length;f<z;f++)try{F=
m[f],F(F.isolateScope?E:e,K,u,F.require&&I(F.directiveName,F.require,K,ca),nb)}catch(G){l(G,ga(K))}f=e;N&&(N.template||null===N.templateUrl)&&(f=E);a&&a(f,g.childNodes,s,p);for(f=n.length-1;0<=f;f--)try{F=n[f],F(F.isolateScope?E:e,K,u,F.require&&I(F.directiveName,F.require,K,ca),nb)}catch(B){l(B,ga(K))}}p=p||{};for(var u=-Number.MAX_VALUE,F,P=p.controllerDirectives,N=p.newIsolateScopeDirective,H=p.templateDirective,ba=p.nonTlbTranscludeDirective,D=!1,J=!1,Ca=p.hasElementTranscludeDirective,t=d.$$element=
w(c),G,na,X,T=e,R,S=0,oa=a.length;S<oa;S++){G=a[S];var W=G.$$start,Y=G.$$end;W&&(t=E(c,W,Y));X=s;if(u>G.priority)break;if(X=G.scope)F=F||G,G.templateUrl||(L("new/isolated scope",N,G,t),U(X)&&(N=G));na=G.name;!G.templateUrl&&G.controller&&(X=G.controller,P=P||{},L("'"+na+"' controller",P[na],G,t),P[na]=G);if(X=G.transclude)D=!0,G.$$tlb||(L("transclusion",ba,G,t),ba=G),"element"==X?(Ca=!0,u=G.priority,X=E(c,W,Y),t=d.$$element=w(V.createComment(" "+na+": "+d[na]+" ")),c=t[0],ob(g,w(ya.call(X,0)),c),
T=z(X,e,u,f&&f.name,{nonTlbTranscludeDirective:ba})):(X=w(Jb(c)).contents(),t.empty(),T=z(X,e));if(G.template)if(J=!0,L("template",H,G,t),H=G,X=Q(G.template)?G.template(t,d):G.template,X=Z(X),G.replace){f=G;X=Hb.test(X)?w(aa(X)):[];c=X[0];if(1!=X.length||1!==c.nodeType)throw ia("tplrt",na,"");ob(g,t,c);oa={$attr:{}};X=ca(c,[],oa);var te=a.splice(S+1,a.length-(S+1));N&&tc(X);a=a.concat(X).concat(te);B(d,oa);oa=a.length}else t.html(X);if(G.templateUrl)J=!0,L("template",H,G,t),H=G,G.replace&&(f=G),M=
y(a.splice(S,a.length-S),t,d,g,D&&T,m,n,{controllerDirectives:P,newIsolateScopeDirective:N,templateDirective:H,nonTlbTranscludeDirective:ba}),oa=a.length;else if(G.compile)try{R=G.compile(t,d,T),Q(R)?x(null,R,W,Y):R&&x(R.pre,R.post,W,Y)}catch($){l($,ga(t))}G.terminal&&(M.terminal=!0,u=Math.max(u,G.priority))}M.scope=F&&!0===F.scope;M.transcludeOnThisElement=D;M.templateOnThisElement=J;M.transclude=T;p.hasElementTranscludeDirective=Ca;return M}function tc(a){for(var b=0,c=a.length;b<c;b++)a[b]=Zb(a[b],
{$$isolateScope:!0})}function ba(b,e,g,f,h,r,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var v=0,x=e.length;v<x;v++)try{p=e[v],(f===s||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(r&&(p=Zb(p,{$$start:r,$$end:n})),b.push(p),h=p)}catch(I){l(I)}}return h}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ha(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function y(a,b,c,d,e,g,f,h){var m=[],l,r,v=b[0],x=a.shift(),I=J({},x,{templateUrl:null,transclude:null,replace:null,$$originalDirective:x}),M=Q(x.templateUrl)?x.templateUrl(b,c):x.templateUrl;b.empty();n.get(u.getTrustedResourceUrl(M),{cache:p}).success(function(n){var p,u;n=Z(n);if(x.replace){n=Hb.test(n)?w(aa(n)):[];p=n[0];if(1!=
n.length||1!==p.nodeType)throw ia("tplrt",x.name,M);n={$attr:{}};ob(d,b,p);var z=ca(p,[],n);U(x.scope)&&tc(z);a=z.concat(a);B(c,n)}else p=v,b.html(n);a.unshift(I);l=H(a,p,c,e,b,x,g,f,h);q(d,function(a,c){a==p&&(d[c]=b[0])});for(r=P(b[0].childNodes,e);m.length;){n=m.shift();u=m.shift();var F=m.shift(),A=m.shift(),z=b[0];if(u!==v){var E=u.className;h.hasElementTranscludeDirective&&x.replace||(z=Jb(p));ob(F,w(u),z);ha(w(z),E)}u=l.transcludeOnThisElement?N(n,l.transclude,A):A;l(r,n,z,d,u)}m=null}).error(function(a,
b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){a=e;m?(m.push(b),m.push(c),m.push(d),m.push(a)):(l.transcludeOnThisElement&&(a=N(b,l.transclude,e)),l(r,b,c,d,a))}}function D(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function L(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ga(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ha(a.parent(),"ng-binding");return function(a,
c){var e=c.parent(),g=e.data("$binding")||[];g.push(d);e.data("$binding",g);b||ha(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function T(a,b){if("srcdoc"==b)return u.HTML;var c=La(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function R(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===La(a))throw ia("selmulti",ga(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers=
{});if(f.test(e))throw ia("nodomevents");if(g=b(m[e],!0,T(a,e)))m[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function ob(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,m;if(a)for(f=0,m=a.length;f<m;f++)if(a[f]==d){a[f++]=c;m=f+e-1;for(var h=a.length;f<h;f++,m++)m<h?a[f]=a[m]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);c[w.expando]=
d[w.expando];d=1;for(e=b.length;d<e;d++)g=b[d],w(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function uc(a,b){return J(function(){return a.apply(null,arguments)},a,b)}var Lb=function(a,b){this.$$element=a;this.$attr=b||{}};Lb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&M.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&M.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=vc(a,b),d=vc(b,a);0===c.length?M.removeClass(this.$$element,d):
0===d.length?M.addClass(this.$$element,c):M.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=hb(a,"-"));e=La(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=F(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=
this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);I.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Ca=b.startSymbol(),oa=b.endSymbol(),Z="{{"==Ca||"}}"==oa?Fa:function(a){return a.replace(/\{\{/g,Ca).replace(/}}/g,oa)},W=/^ngAttr[A-Z]/;return z}]}function ma(b){return Va(b.replace(ue,""))}function vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],k=0;k<e.length;k++)if(f==e[k])continue a;c+=(0<c.length?" ":"")+f}return c}function Od(){var b=
{},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");U(a)?J(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,k,m;C(e)&&(f=e.match(a),k=f[1],m=f[3],e=b.hasOwnProperty(k)?b[k]:fc(g.$scope,k,!0)||fc(d,k,!0),Ta(e,k,!0));f=c.instantiate(e,g);if(m){if(!g||"object"!=typeof g.$scope)throw t("$controller")("noscp",k||e.name,m);g.$scope[m]=f}return f}}]}function Pd(){this.$get=["$window",function(b){return w(b.document)}]}function Qd(){this.$get=
["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function wc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=L(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function xc(b){var a=U(b)?b:s;return function(c){a||(a=wc(b));return c?a[L(c)]||null:a}}function yc(b,a,c){if(Q(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},
e=this.defaults={transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ac(d)));return d}],transformRequest:[function(a){return U(a)&&"[object File]"!==wa.call(a)&&"[object Blob]"!==wa.call(a)?ra(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ka(d),put:ka(d),patch:ka(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope",
"$q","$injector",function(a,b,c,d,n,p){function r(a){function b(a){var d=J({},a,{data:yc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){function b(a){var c;q(a,function(b,d){Q(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=J({},a.headers),g,f,c=J({},c.common,c[L(a.method)]);b(c);b(d);a:for(g in c){a=L(g);for(f in d)if(L(f)===a)continue a;
d[g]=c[g]}return d}(a);J(c,a);c.headers=d;c.method=Ha(c.method);var g=[function(a){d=a.headers;var c=yc(a.data,xc(d),a.transformRequest);D(a.data)&&q(d,function(a,b){"content-type"===L(b)&&delete d[b]});D(a.withCredentials)&&!D(e.withCredentials)&&(a.withCredentials=e.withCredentials);return v(a,c,d).then(b,b)},s],f=n.when(c);for(q(u,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();
var m=g.shift(),f=f.then(a,m)}f.success=function(a){f.then(function(b){a(b.data,b.status,b.headers,c)});return f};f.error=function(a){f.then(null,function(b){a(b.data,b.status,b.headers,c)});return f};return f}function v(c,g,f){function h(a,b,c,e){A&&(200<=a&&300>a?A.put(w,[a,b,wc(c),e]):A.remove(w));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?u.resolve:u.reject)({data:a,status:b,headers:xc(d),config:c,statusText:e})}function v(){var a=Oa(r.pendingRequests,
c);-1!==a&&r.pendingRequests.splice(a,1)}var u=n.defer(),q=u.promise,A,H,w=I(c.url,c.params);r.pendingRequests.push(c);q.then(v,v);(c.cache||e.cache)&&(!1!==c.cache&&"GET"==c.method)&&(A=U(c.cache)?c.cache:U(e.cache)?e.cache:x);if(A)if(H=A.get(w),B(H)){if(H.then)return H.then(v,v),H;O(H)?p(H[1],H[0],ka(H[2]),H[3]):p(H,200,{},"OK")}else A.put(w,q);D(H)&&((H=Mb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(f[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,w,g,h,f,c.timeout,c.withCredentials,
c.responseType));return q}function I(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||D(a)||(O(a)||(a=[a]),q(a,function(a){U(a)&&(a=ra(a));c.push(za(b)+"="+za(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var x=c("$http"),u=[];q(g,function(a){u.unshift(C(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=C(a)?p.get(a):p.invoke(a);u.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];
(function(a){q(arguments,function(a){r[a]=function(b,c){return r(J(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(J(d||{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ve(b){if(8>=S&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!T.XMLHttpRequest))return new T.ActiveXObject("Microsoft.XMLHTTP");if(T.XMLHttpRequest)return new T.XMLHttpRequest;throw t("$httpBackend")("noxhr");}function Ud(){this.$get=
["$browser","$window","$document",function(b,a,c){return we(b,ve,b.defer,a.angular.callbacks,c[0])}]}function we(b,a,c,d,e){function g(a,b,c){var g=e.createElement("script"),f=null;g.type="text/javascript";g.src=a;g.async=!0;f=function(a){Wa(g,"load",f);Wa(g,"error",f);e.body.removeChild(g);g=null;var k=-1,v="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),v=a.type,k="error"===a.type?404:200);c&&c(k,v)};pb(g,"load",f);pb(g,"error",f);8>=S&&(g.onreadystatechange=function(){C(g.readyState)&&
/loaded|complete/.test(g.readyState)&&(g.onreadystatechange=null,f({type:"load"}))});e.body.appendChild(g);return f}var f=-1;return function(e,m,h,l,n,p,r,v){function I(){u=f;F&&F();z&&z.abort()}function x(a,d,e,g,f){P&&c.cancel(P);F=z=null;0===d&&(d=e?200:"file"==sa(m).protocol?404:0);a(1223===d?204:d,e,g,f||"");b.$$completeOutstandingRequest(y)}var u;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==L(e)){var M="_"+(d.counter++).toString(36);d[M]=function(a){d[M].data=a;d[M].called=!0};
var F=g(m.replace("JSON_CALLBACK","angular.callbacks."+M),M,function(a,b){x(l,a,d[M].data,"",b);d[M]=y})}else{var z=a(e);z.open(e,m,!0);q(n,function(a,b){B(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null;u!==f&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);x(l,u||z.status,b,a,z.statusText||"")}};r&&(z.withCredentials=!0);if(v)try{z.responseType=v}catch(s){if("json"!==v)throw s;}z.send(h||null)}if(0<p)var P=c(I,p);else p&&
p.then&&p.then(I)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,h,l){for(var n,p,r=0,v=[],I=g.length,x=!1,u=[];r<I;)-1!=(n=g.indexOf(b,r))&&-1!=(p=g.indexOf(a,n+f))?(r!=n&&v.push(g.substring(r,n)),v.push(r=c(x=g.substring(n+f,p))),r.exp=x,r=p+k,x=!0):(r!=I&&v.push(g.substring(r)),r=I);(I=v.length)||(v.push(""),I=1);if(l&&1<v.length)throw zc("noconcat",
g);if(!h||x)return u.length=I,r=function(a){try{for(var b=0,c=I,f;b<c;b++){if("function"==typeof(f=v[b]))if(f=f(a),f=l?e.getTrusted(l,f):e.valueOf(f),null==f)f="";else switch(typeof f){case "string":break;case "number":f=""+f;break;default:f=ra(f)}u[b]=f}return u.join("")}catch(k){a=zc("interr",g,k.toString()),d(a)}},r.exp=g,r.parts=v,r}var f=b.length,k=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,
a,c){function d(d,f,k,m){var h=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,r=0,v=B(m)&&!m;k=B(k)?k:0;p.then(null,null,d);p.$$intervalId=h(function(){n.notify(r++);0<k&&r>=k&&(n.resolve(r),l(p.$$intervalId),delete e[p.$$intervalId]);v||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",
NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Nb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=gb(b[a]);return b.join("/")}function Ac(b,a,c){b=sa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=Z(b.port)||xe[b.protocol]||null}
function Bc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=cc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function pa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function $a(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Ob(b){return b.substr(0,$a(b).lastIndexOf("/")+1)}function Cc(b,a){this.$$html5=!0;a=a||
"";var c=Ob(b);Ac(b,this,b);this.$$parse=function(a){var e=pa(c,a);if(!C(e))throw Pb("ipthprfx",a,c);Bc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Bb(this.$$search),b=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=Nb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=pa(b,d))!==s)return d=e,(e=pa(a,e))!==s?c+(pa("/",e)||e):b+d;if((e=pa(c,d))!==s)return c+e;if(c==d+"/")return c}}function Qb(b,a){var c=
Ob(b);Ac(b,this,b);this.$$parse=function(d){var e=pa(b,d)||pa(c,d),e="#"==e.charAt(0)?pa(a,e):this.$$html5?e:"";if(!C(e))throw Pb("ihshprfx",d,a);Bc(e,this,b);d=this.$$path;var g=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=Nb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if($a(b)==
$a(a))return a}}function Rb(b,a){this.$$html5=!0;Qb.apply(this,arguments);var c=Ob(b);this.$$rewrite=function(d){var e;if(b==$a(d))return d;if(e=pa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=Nb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function qb(b){return function(){return this[b]}}function Dc(b,a){return function(c){if(D(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b=
"",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Cc:Rb):(n=$a(l),m=Qb);k=new m(n,"#"+b);k.$$parse(k.$$rewrite(l));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=
w(a.target);"a"!==L(e[0].nodeName);)if(e[0]===g[0]||!(e=e.parent())[0])return;var f=e.prop("href");U(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=sa(f.animVal).href);if(m===Rb){var h=e.attr("href")||e.attr("xlink:href");if(0>h.indexOf("://"))if(f="#"+b,"/"==h[0])f=n+f+h;else if("#"==h[0])f=n+f+(k.path()||"/")+h;else{for(var l=k.path().split("/"),h=h.split("/"),p=0;p<h.length;p++)"."!=h[p]&&(".."==h[p]?l.pop():h[p].length&&l.push(h[p]));f=n+f+l.join("/")}}l=k.$$rewrite(f);f&&(!e.attr("target")&&
l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),T.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(k.$$parse(b),d.url(b)):f(b)}),c.$$phase||c.$digest())});var p=0;c.$watch(function(){var a=d.url(),b=k.$$replace;p&&a==k.absUrl()||(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),f(a))}));k.$$replace=!1;return p});return k}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||y;a=!1;try{a=!!e.apply}catch(m){}return a?
function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ea(b,a){if("constructor"===b)throw Da("isecfld",a);return b}function ab(b,a){if(b){if(b.constructor===b)throw Da("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Da("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&
b.attr&&b.find))throw Da("isecdom",a);}return b}function rb(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=ea(a.shift(),d);var k=b[g];k||(k={},b[g]=k);b=k;b.then&&e.unwrapPromises&&(ta(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}g=ea(a.shift(),d);return b[g]=c}function Ec(b,a,c,d,e,g,f){ea(b,g);ea(a,g);ea(c,g);ea(d,g);ea(e,g);return f.unwrapPromises?function(f,m){var h=m&&m.hasOwnProperty(b)?m:f,l;if(null==h)return h;(h=h[b])&&h.then&&
(ta(g),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return s;(h=h[a])&&h.then&&(ta(g),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return s;(h=h[c])&&h.then&&(ta(g),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!d)return h;if(null==h)return s;(h=h[d])&&h.then&&(ta(g),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return s;(h=h[e])&&h.then&&(ta(g),"$$v"in
h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(g,f){var h=f&&f.hasOwnProperty(b)?f:g;if(null==h)return h;h=h[b];if(!a)return h;if(null==h)return s;h=h[a];if(!c)return h;if(null==h)return s;h=h[c];if(!d)return h;if(null==h)return s;h=h[d];return e?null==h?s:h=h[e]:h}}function ye(b,a){ea(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ze(b,a,c){ea(b,c);ea(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==
c?s:c[a]}}function Fc(b,a,c){if(Sb.hasOwnProperty(b))return Sb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?Ec(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,k;do k=Ec(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=s,b=k;while(f<e);return k};else{var f="var p;\n";q(d,function(b,d){ea(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+
c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",k=new Function("s","k","pw",f);k.toString=$(f);g=a.unwrapPromises?function(a,b){return k(a,b,ta)}:k}else g=ze(d[0],d[1],c);else g=ye(d[0],c);"hasOwnProperty"!==b&&(Sb[b]=g);return g}function Xd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};
this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ta=function(b){a.logPromiseWarnings&&!Gc.hasOwnProperty(b)&&(Gc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Tb(a);e=(new bb(e,c,a)).parse(d);"hasOwnProperty"!==
d&&(b[d]=e);return e;case "function":return d;default:return y}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ae(function(a){b.$evalAsync(a)},a)}]}function Ae(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var f=[],h,l;return l={resolve:function(a){if(f){var c=f;f=s;h=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},notify:function(a){if(f){var c=f;f.length&&
b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,k){var l=e(),I=function(d){try{l.resolve((Q(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},x=function(b){try{l.resolve((Q(g)?g:d)(b))}catch(c){l.reject(c),a(c)}},u=function(b){try{l.notify((Q(k)?k:c)(b))}catch(d){a(d)}};f?f.push([I,x,u]):h.then(I,x,u);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,
g){var f=null;try{f=(a||c)()}catch(k){return b(k,!1)}return f&&Q(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&Q(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(g,f){var k=e();b(function(){try{k.resolve((Q(f)?f:d)(c))}catch(b){k.reject(b),
a(b)}});return k.promise}}};return{defer:e,reject:f,when:function(k,h,l,n){var p=e(),r,v=function(b){try{return(Q(h)?h:c)(b)}catch(d){return a(d),f(d)}},I=function(b){try{return(Q(l)?l:d)(b)}catch(c){return a(c),f(c)}},x=function(b){try{return(Q(n)?n:c)(b)}catch(d){a(d)}};b(function(){g(k).then(function(a){r||(r=!0,p.resolve(g(a).then(v,I,x)))},function(a){r||(r=!0,p.resolve(I(a)))},function(a){r||p.notify(x(a))})});return p.promise},all:function(a){var b=e(),c=0,d=O(a)?[]:{};q(a,function(a,e){c++;
g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,g=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=
a(b,16.66,!1);return function(){a.cancel(c)}};g.supported=e;return g}]}function Yd(){var b=10,a=t("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function k(){this.$id=eb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];
this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function h(a,b){var c=g(a);Ta(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=
function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=eb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,
eq:!!d};c=null;if(!Q(b)){var k=h(b||y,"listener");f.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var m=f.fn;f.fn=function(a,b,c){m.call(this,a,b,c);Pa(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Pa(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f,k=1<b.length,h=0,m=g(a),l=[],n={},p=!0,q=0;return this.$watch(function(){d=m(c);var a,b;if(U(d))if(db(d))for(e!==l&&(e=l,q=e.length=0,h++),a=d.length,q!==a&&(h++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==
d[b]||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(h++,e[b]=d[b]):(q++,e[b]=d[b],h++));if(q>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(k)if(U(d))if(db(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f={},d)zb.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var d,g,f,k,h=this.$$asyncQueue,
l=this.$$postDigestQueue,q,z,s=b,P,N=[],w,E,A;m("$digest");c=null;do{z=!1;for(P=this;h.length;){try{A=h.shift(),A.scope.$eval(A.expression)}catch(H){p.$$phase=null,e(H)}c=null}a:do{if(k=P.$$watchers)for(q=k.length;q--;)try{if(d=k[q])if((g=d.get(P))!==(f=d.last)&&!(d.eq?xa(g,f):"number"==typeof g&&"number"==typeof f&&isNaN(g)&&isNaN(f)))z=!0,c=d,d.last=d.eq?Ga(g,null):g,d.fn(g,f===n?g:f,P),5>s&&(w=4-s,N[w]||(N[w]=[]),E=Q(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,E+="; newVal: "+ra(g)+"; oldVal: "+
ra(f),N[w].push(E));else if(d===c){z=!1;break a}}catch(B){p.$$phase=null,e(B)}if(!(k=P.$$childHead||P!==this&&P.$$nextSibling))for(;P!==this&&!(k=P.$$nextSibling);)P=P.$parent}while(P=k);if((z||h.length)&&!s--)throw p.$$phase=null,a("infdig",b,ra(N));}while(z||h.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(t){e(t)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,Ab(null,l,this)),a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=y,this.$on=this.$watch=function(){return y})}},
$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Oa(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,g=this,f=!1,k={name:a,targetScope:g,stopPropagation:function(){f=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(ya.call(arguments,1)),m,l;do{d=g.$$listeners[a]||c;k.currentScope=g;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,h)}catch(n){e(n)}else d.splice(m,1),m--,l--;if(f)break;g=g.$parent}while(g);
return k},$broadcast:function(a,b){for(var c=this,d=this,g={name:a,targetScope:this,preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},f=[g].concat(ya.call(arguments,1)),k,h;c=d;){g.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,f)}catch(m){e(m)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return g}};var p=new k;return p}]}function bd(){var b=
/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!S||8<=S)if(g=sa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Be(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw ua("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(fb(b))return RegExp("^"+b.source+"$");throw ua("imatcher");}function Hc(b){var a=[];B(b)&&q(b,function(b){a.push(Be(b))});return a}function ae(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Hc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Hc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[fa.HTML]=d(g);f[fa.CSS]=d(g);f[fa.URL]=d(g);f[fa.JS]=d(g);f[fa.RESOURCE_URL]=d(f[fa.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||b===
s||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var g=sa(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Mb(g):b[l].exec(g.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Mb(g):a[l].exec(g.href)){p=!1;break}if(p)return d;throw ua("insecurl",d.toString());}if(c===
fa.HTML)return e(d);throw ua("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ua("iequirks");var e=ka(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Fa);e.parseAs=
function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,f=e.getTrusted,k=e.trustAs;q(fa,function(a,b){var c=L(b);e[Va("parse_as_"+c)]=function(b){return g(a,b)};e[Va("get_trusted_"+c)]=function(b){return f(a,b)};e[Va("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=Z((/android (\d+)/.exec(L((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),g=a[0]||{},f=g.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=g.body&&g.body.style,l=!1,n=!1;if(h){for(var p in h)if(l=m.exec(p)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);n=!!("animation"in h||k+"Animation"in h);!d||l&&n||(l=C(g.body.style.webkitTransition),n=C(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<
f),hasEvent:function(a){if("input"==a&&9==S)return!1;if(D(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:$b(),vendorPrefix:k,transitions:l,animations:n,android:d,msie:S,msieDocumentMode:f}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,n=B(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},k);l.$$timeoutId=k;g[k]=h;
return l}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;S&&(W.setAttribute("href",c),c=W.href);W.setAttribute("href",c);return{href:W.href,protocol:W.protocol?W.protocol.replace(/:$/,""):"",host:W.host,search:W.search?W.search.replace(/^\?/,""):"",hash:W.hash?W.hash.replace(/^#/,""):"",hostname:W.hostname,port:W.port,pathname:"/"===W.pathname.charAt(0)?W.pathname:
"/"+W.pathname}}function Mb(b){b=C(b)?sa(b):b;return b.protocol===Ic.protocol&&b.host===Ic.host}function ee(){this.$get=$(T)}function kc(b){function a(d,e){if(U(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Jc);a("date",Kc);a("filter",Ce);a("json",De);a("limitTo",Ee);a("lowercase",Fe);a("number",Lc);a("orderBy",Mc);a("uppercase",Ge)}function Ce(){return function(b,
a,c){if(!O(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Sa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&zb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:c&&c[b],a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var k=
b[f];e.check(k)&&d.push(k)}return d}}function Jc(b){var a=b.NUMBER_FORMATS;return function(b,d){D(d)&&(d=a.CURRENCY_SYM);return Nc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Lc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Nc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Nc(b,a,c,d,e){if(null==b||!isFinite(b)||U(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",k="",m=[],h=!1;if(-1!==f.indexOf("e")){var l=f.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?f="0":(k=f,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{f=(f.split(Oc)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e+1);b=Math.floor(b*f+5)/f;b=(""+b).split(Oc);f=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(l=f.length-n,h=0;h<l;h++)0===(l-h)%p&&0!==h&&(k+=c),k+=f.charAt(h);for(h=l;h<f.length;h++)0===(f.length-h)%n&&0!==h&&(k+=c),k+=f.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,e))}m.push(g?a.negPre:a.posPre);
m.push(k);m.push(g?a.negSuf:a.posSuf);return m.join("")}function Ub(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ub(e,a,d)}}function sb(b,a){return function(c,d){var e=c["get"+b](),g=Ha(a?"SHORT"+b:b);return d[g][e]}}function Kc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,k=b[8]?a.setUTCFullYear:a.setFullYear,m=
b[8]?a.setUTCHours:a.setHours;b[9]&&(g=Z(b[9]+b[10]),f=Z(b[9]+b[11]));k.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));g=Z(b[4]||0)-g;f=Z(b[5]||0)-f;k=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,g,f,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=He.test(c)?Z(c):a(c));yb(c)&&(c=new Date(c));if(!Na(c))return c;for(;e;)(m=Ie.exec(e))?
(f=f.concat(ya.call(m,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){k=Je[a];g+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function De(){return function(b){return ra(b,!0)}}function Ee(){return function(b,a){if(!O(b)&&!C(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Z(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);
return c}}function Mc(b){return function(a,c,d){function e(a,b){return Ra(b)?function(b,c){return a(c,b)}:a}function g(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!O(a)||!c)return a;c=O(c)?c:[c];c=Uc(c,function(a){var c=!1,d=a||Fa;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var f=d();return e(function(a,b){return g(a[f],b[f])},c)}}return e(function(a,b){return g(d(a),
d(b))},c)});for(var f=[],k=0;k<a.length;k++)f.push(a[k]);return f.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function va(b){Q(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Pc(b,a,c,d){function e(a,c){c=c?"-"+hb(c,"-"):"";d.removeClass(b,(a?tb:ub)+c);d.addClass(b,(a?ub:tb)+c)}var g=this,f=b.parent().controller("form")||vb,k=0,m=g.$error={},h=[];g.$name=a.name||a.ngForm;g.$dirty=!1;g.$pristine=!0;g.$valid=!0;g.$invalid=!1;f.$addControl(g);
b.addClass(Ma);e(!0);g.$addControl=function(a){Aa(a.$name,"input");h.push(a);a.$name&&(g[a.$name]=a)};g.$removeControl=function(a){a.$name&&g[a.$name]===a&&delete g[a.$name];q(m,function(b,c){g.$setValidity(c,!0,a)});Pa(h,a)};g.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Pa(d,c),d.length||(k--,k||(e(b),g.$valid=!0,g.$invalid=!1),m[a]=!1,e(!0,a),f.$setValidity(a,!0,g)));else{k||e(b);if(d){if(-1!=Oa(d,c))return}else m[a]=d=[],k++,e(!1,a),f.$setValidity(a,!1,g);d.push(c);g.$valid=!1;g.$invalid=
!0}};g.$setDirty=function(){d.removeClass(b,Ma);d.addClass(b,wb);g.$dirty=!0;g.$pristine=!1;f.$setDirty()};g.$setPristine=function(){d.removeClass(b,wb);d.addClass(b,Ma);g.$dirty=!1;g.$pristine=!0;q(h,function(a){a.$setPristine()})}}function qa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Ke(b,a,c){var d=c.prop("validity");U(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function xb(b,a,c,d,e,g){var f=
a.prop("validity"),k=a[0].placeholder,m={};if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(e){if(!h){var g=a.val();if(S&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if(Ra(c.ngTrim||"T")&&(g=aa(g)),d.$viewValue!==g||f&&""===g&&!f.valueMissing)b.$$phase?d.$setViewValue(g):b.$apply(function(){d.$setViewValue(g)})}};if(e.hasEvent("input"))a.on("input",l);else{var n,p=function(){n||(n=g.defer(function(){l();
n=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var r=c.ngPattern;r&&((e=r.match(/^\/(.*)\/([gim]*)$/))?(r=RegExp(e[1],e[2]),e=function(a){return qa(d,"pattern",d.$isEmpty(a)||r.test(a),a)}):e=function(c){var e=b.$eval(r);if(!e||!e.test)throw t("ngPattern")("noregexp",r,e,ga(a));return qa(d,"pattern",d.$isEmpty(c)||e.test(c),
c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var v=Z(c.ngMinlength);e=function(a){return qa(d,"minlength",d.$isEmpty(a)||a.length>=v,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var q=Z(c.ngMaxlength);e=function(a){return qa(d,"maxlength",d.$isEmpty(a)||a.length<=q,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Vb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==
b[l])continue a;c.push(e)}return c}function e(a){if(!O(a)){if(C(a))return a.split(" ");if(U(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(g,f,k){function m(a,b){var c=f.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});f.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||g.$index%2===a){var h=e(b||[]);if(!l){var r=m(h,1);k.$addClass(r)}else if(!xa(b,l)){var q=
e(l),r=d(h,q),h=d(q,h),h=m(h,-1),r=m(r,1);0===r.length?c.removeClass(f,h):0===h.length?c.addClass(f,r):c.setClass(f,r,h)}}l=ka(b)}var l;g.$watch(k[b],h,!0);k.$observe("class",function(a){h(g.$eval(k[b]))});"ngClass"!==b&&g.$watch("$index",function(c,d){var f=c&1;if(f!==(d&1)){var h=e(g.$eval(k[b]));f===a?(f=m(h,1),k.$addClass(f)):(f=m(h,-1),k.$removeClass(f))}})}}}]}var L=function(b){return C(b)?b.toLowerCase():b},zb=Object.prototype.hasOwnProperty,Ha=function(b){return C(b)?b.toUpperCase():b},S,
w,Ba,ya=[].slice,Le=[].push,wa=Object.prototype.toString,Qa=t("ng"),Sa=T.angular||(T.angular={}),Ua,La,ja=["0","0","0"];S=Z((/msie (\d+)/.exec(L(navigator.userAgent))||[])[1]);isNaN(S)&&(S=Z((/trident\/.*; rv:(\d+)/.exec(L(navigator.userAgent))||[])[1]));y.$inject=[];Fa.$inject=[];var O=function(){return Q(Array.isArray)?Array.isArray:function(b){return"[object Array]"===wa.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return C(b)?b.trim():b}:function(b){return C(b)?b.replace(/^\s\s*/,
"").replace(/\s\s*$/,""):b}}();La=9>S?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ha(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xc=/[A-Z]/g,$c={full:"1.2.18",major:1,minor:2,dot:18,codeName:"ear-extendability"},Xa=R.cache={},ib=R.expando="ng"+(new Date).getTime(),me=1,pb=T.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Wa=T.document.removeEventListener?
function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};R._data=function(b){return this.cache[b[this.expando]]||{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Gb=t("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Hb=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>",
"</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=da.caption=da.thead;da.th=da.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(T).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,
push:Le,sort:[].sort,splice:[].splice},mb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){mb[L(b)]=b});var rc={};q("input select option textarea button form details".split(" "),function(b){rc[Ha(b)]=!0});q({data:nc,inheritedData:lb,scope:function(b){return w(b).data("$scope")||lb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w(b).data("$isolateScope")||w(b).data("$isolateScopeNoTemplate")},controller:oc,injector:function(b){return lb(b,
"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Kb,css:function(b,a,c){a=Va(a);if(B(c))b.style[a]=c;else{var d;8>=S&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=S&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=L(a);if(mb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||y).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,
2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(D(d))return e?b[e]:"";b[e]=d}var a=[];9>S?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(D(a)){if("SELECT"===La(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<
d.length;c++)Ia(d[c]);b.innerHTML=a},empty:pc},function(b,a){R.prototype[a]=function(a,d){var e,g,f=this.length;if(b!==pc&&(2==b.length&&b!==Kb&&b!==oc?a:d)===s){if(U(a)){for(e=0;e<f;e++)if(b===nc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;f=e===s?Math.min(f,1):f;for(g=0;g<f;g++){var k=b(this[g],a,d);e=e?e+k:k}return e}for(e=0;e<f;e++)b(this[e],a,d);return this}});q({removeData:lc,dealoc:Ia,on:function a(c,d,e,g){if(B(g))throw Gb("onargs");var f=la(c,"events"),k=la(c,"handle");
f||la(c,"events",f={});k||la(c,"handle",k=ne(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var l=V.body.contains||V.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],
function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else pb(c,d,k),f[d]=[];g=f[d]}g.push(e)})},off:mc,one:function(a,c,d){a=w(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ia(a);q(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
c){q(new R(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ia(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new R(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:kb,removeClass:jb,toggleClass:function(a,c,d){c&&
q(c.split(" "),function(c){var g=d;D(g)&&(g=!Kb(a,c));(g?kb:jb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Jb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:y,stopPropagation:y}];q(c,function(c){c.apply(a,
e.concat(d))})}},function(a,c){R.prototype[c]=function(c,e,g){for(var f,k=0;k<this.length;k++)D(f)?(f=a(this[k],c,e,g),B(f)&&(f=w(f))):Ib(f,a(this[k],c,e,g));return B(f)?f:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Ya.prototype={put:function(a,c){this[Ja(a)]=c},get:function(a){return this[Ja(a)]},remove:function(a){var c=this[a=Ja(a)];delete this[a];return c}};var pe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
Za=t("$injector"),Me=t("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Me("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,f,k){f?f.after(a):(c&&c[0]||(c=f.parent()),c.append(a));k&&
d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,f){c=C(c)?c:O(c)?c.join(" "):"";q(a,function(a){kb(a,c)});f&&d(f)},removeClass:function(a,c,f){c=C(c)?c:O(c)?c.join(" "):"";q(a,function(a){jb(a,c)});f&&d(f)},setClass:function(a,c,f,k){q(a,function(a){kb(a,c);jb(a,f)});k&&d(k)},enabled:y}}]}],ia=t("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];var ue=/^(x[\:\-_]|data[\:\-_])/i,zc=t("$interpolate"),Ne=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
xe={http:80,https:443,ftp:21},Pb=t("$location");Rb.prototype=Qb.prototype=Cc.prototype={$$html5:!1,$$replace:!1,absUrl:qb("$$absUrl"),url:function(a,c){if(D(a))return this.$$url;var d=Ne.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:qb("$$protocol"),host:qb("$$host"),port:qb("$$port"),path:Dc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(C(a))this.$$search=cc(a);else if(U(a))this.$$search=a;else throw Pb("isrcharg");break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Dc("$$hash",Fa),replace:function(){this.$$replace=!0;return this}};var Da=t("$parse"),Gc={},ta,cb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:y,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=
e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":y,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Oe={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Tb=function(a){this.options=a};Tb.prototype={constructor:Tb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";for(this.tokens=[];this.index<
this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=cb[this.ch],e=cb[a],g=cb[c];g?(this.tokens.push({index:this.index,
text:c,fn:g}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=
a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Da("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));
if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,k;this.index<this.text.length;){k=this.text.charAt(this.index);
if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){k=this.text.charAt(g);if("("===k){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(k))g++;else break}d={index:d,text:c};if(cb.hasOwnProperty(c))d.fn=cb[c],d.literal=!0,d.constant=!0;else{var m=Fc(c,this.options,this.text);d.fn=J(function(a,c){return m(a,c)},{assign:function(d,e){return rb(d,c,e,a.text,a.options)}})}this.tokens.push(d);
f&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:f}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Oe[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,
text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var bb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};bb.ZERO=J(function(){return 0},{constant:!0});bb.prototype={constructor:bb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;
if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,
c){throw Da("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Da("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},
unaryFn:function(a,c){return J(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return J(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return J(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=
0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,
c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+",
"-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(bb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Fc(d,this.options,this.text);return J(function(c,d,k){return e(k||
a(c,d))},{assign:function(e,f,k){return rb(a(e,k),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return J(function(e,g){var f=a(e,g),k=d(e,g),m;if(!f)return s;(f=ab(f[k],c.text))&&(f.then&&c.options.unwrapPromises)&&(m=f,"$$v"in f||(m.$$v=s,m.then(function(a){m.$$v=a})),f=f.$$v);return f},{assign:function(e,g,f){var k=d(e,f);return ab(a(e,f),c.text)[k]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var k=[],m=c?c(g,f):g,h=0;h<d.length;h++)k.push(d[h](g,f));h=a(g,f,m)||y;ab(m,e.text);ab(h,e.text);k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return ab(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return J(function(c,d){for(var f=[],k=0;k<a.length;k++)f.push(a[k](c,
d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return J(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Sb={},ua=t("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},W=V.createElement("a"),Ic=sa(T.location.href,!0);kc.$inject=["$provide"];Jc.$inject=["$locale"];Lc.$inject=["$locale"];var Oc=".",Je={yyyy:Y("FullYear",4),yy:Y("FullYear",2,0,!0),y:Y("FullYear",1),MMMM:sb("Month"),MMM:sb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:sb("Day"),EEE:sb("Day",!0),
a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ub(Math[0<a?"floor":"ceil"](a/60),2)+Ub(Math.abs(a%60),2))}},Ie=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,He=/^\-?\d+$/;Kc.$inject=["$locale"];var Fe=$(L),Ge=$(Ha);Mc.$inject=["$parse"];var cd=$({restrict:"E",compile:function(a,c){8>=S&&(c.href||c.name||c.$set("href",""),a.append(V.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,
c){var g="[object SVGAnimatedString]"===wa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),Eb={};q(mb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Eb[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Eb[c]=function(){return{priority:99,link:function(d,e,g){var f=a,k=a;"href"===a&&"[object SVGAnimatedString]"===wa.call(e.prop("href"))&&
(k="xlinkHref",g.$attr[k]="xlink:href",f=null);g.$observe(c,function(a){a&&(g.$set(k,a),S&&f&&e.prop(f,g[k]))})}}}});var vb={$addControl:y,$removeControl:y,$setValidity:y,$setDirty:y,$setPristine:y};Pc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Pc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};pb(e[0],"submit",
k);e.on("$destroy",function(){c(function(){Wa(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),h=g.name||g.ngForm;h&&rb(a,h,f,h);if(m)e.on("$destroy",function(){m.$removeControl(f);h&&rb(a,h,s,h);J(f,vb)})}}}}}]},dd=Qc(),qd=Qc(!0),Pe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Qe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Re=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:xb,number:function(a,c,d,e,g,f){xb(a,c,d,e,g,f);e.$parsers.push(function(a){var c=
e.$isEmpty(a);if(c||Re.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Ke(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return qa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return qa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return qa(e,
"number",e.$isEmpty(a)||yb(a),a)})},url:function(a,c,d,e,g,f){xb(a,c,d,e,g,f);a=function(a){return qa(e,"url",e.$isEmpty(a)||Pe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){xb(a,c,d,e,g,f);a=function(a){return qa(e,"email",e.$isEmpty(a)||Qe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){D(d.name)&&c.attr("name",eb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=
d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;C(g)||(g=!0);C(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:y,button:y,submit:y,reset:y,file:y},hc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,g,f){f&&(Rc[L(g.type)]||Rc.text)(d,e,g,f,c,a)}}}],ub="ng-valid",tb="ng-invalid",Ma="ng-pristine",wb="ng-dirty",Se=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,g,f){function k(a,c){c=c?"-"+hb(c,"-"):"";f.removeClass(e,(a?tb:ub)+c);f.addClass(e,(a?ub:tb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=g(d.ngModel),h=m.assign;if(!h)throw t("ngModel")("nonassign",d.ngModel,ga(e));this.$render=y;this.$isEmpty=function(a){return D(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||vb,n=0,p=this.$error={};e.addClass(Ma);k(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;f.removeClass(e,wb);f.addClass(e,Ma)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,f.removeClass(e,Ma),f.addClass(e,wb),l.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=m(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=
c,r.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Se,link:function(a,c,d,e){var g=e[0],f=e[1]||vb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},Hd=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ic=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!D(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return O(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Te=/^(true|false|\d+)$/,Id=function(){return{priority:100,
compile:function(a,c){return Te.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},id=va({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==s?"":a)})}}}),kd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
jd=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],ld=Vb("",!0),nd=Vb("Odd",0),md=Vb("Even",1),od=va({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),pd=[function(){return{scope:!0,controller:"@",priority:500}}],jc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ma("ng-"+a);jc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d){d.on(L(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var k,m,h;c.$watch(e.ngIf,function(g){Ra(g)?m||(m=c.$new(),f(m,function(c){c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),
h=null),m&&(m.$destroy(),m=null),k&&(h=Db(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Sa.noop,compile:function(f,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(f,k,r,q,I){var s=0,u,w,F,z=function(){w&&(w.remove(),w=null);u&&(u.$destroy(),u=null);F&&(e.leave(F,function(){w=null}),w=F,F=null)};f.$watch(g.parseAsResourceUrl(m),
function(g){var m=function(){!B(l)||l&&!f.$eval(l)||d()},r=++s;g?(a.get(g,{cache:c}).success(function(a){if(r===s){var c=f.$new();q.template=a;a=I(c,function(a){z();e.enter(a,null,k,m)});u=c;F=a;u.$emit("$includeContentLoaded");f.$eval(h)}}).error(function(){r===s&&z()}),f.$emit("$includeContentRequested")):(z(),q.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],ud=va({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=va({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var k=f.count,m=f.$attr.when&&g.attr(f.$attr.when),h=f.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(f,function(a,c){s.test(c)&&(l[L(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,p+k+"-"+h+r))});e.$watch(function(){var c=
parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return n[c](e,g,!0)},function(a){g.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=t("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,k,m){var h=f.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,I,x,u={$id:Ja};if(!l)throw d("iexp",h);f=l[1];k=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){x&&(u[x]=a);u[I]=c;u.$index=d;return n(e,
u)}):(r=function(a,c){return Ja(c)},s=function(a){return a});l=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",f);I=l[3]||l[1];x=l[2];var B={};e.$watchCollection(k,function(a){var f,k,l=g[0],n,u={},E,A,H,t,C,y,D=[];if(db(a))C=a,n=p||r;else{n=p||s;C=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&C.push(H);C.sort()}E=C.length;k=D.length=C.length;for(f=0;f<k;f++)if(H=a===C?f:C[f],t=a[H],t=n(H,t,f),Aa(t,"`track by` id"),B.hasOwnProperty(t))y=B[t],delete B[t],u[t]=
y,D[f]=y;else{if(u.hasOwnProperty(t))throw q(D,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",h,t);D[f]={id:t};u[t]=!1}for(H in B)B.hasOwnProperty(H)&&(y=B[H],f=Db(y.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),y.scope.$destroy());f=0;for(k=C.length;f<k;f++){H=a===C?f:C[f];t=a[H];y=D[f];D[f-1]&&(l=D[f-1].clone[D[f-1].clone.length-1]);if(y.scope){A=y.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);y.clone[0]!=n&&c.move(Db(y.clone),null,w(l));l=y.clone[y.clone.length-1]}else A=e.$new();
A[I]=t;x&&(A[x]=H);A.$index=f;A.$first=0===f;A.$last=f===E-1;A.$middle=!(A.$first||A.$last);A.$odd=!(A.$even=0===(f&1));y.scope||m(A,function(a){a[a.length++]=V.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,w(l));l=a;y.scope=A;y.clone=a;u[y.id]=y})}B=u})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ra(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ra(c)?"addClass":"removeClass"](d,
"ng-hide")})}}],zd=va(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=h.length;n<p;++n){var r=k[n];h[n].$destroy();m[n]=r;a.leave(r,function(){m.splice(n,1)})}k.length=0;h.length=
0;if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Cd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||
[];e.cases["?"].push({transclude:g,element:c})}}),Ed=va({link:function(a,c,d,e,g){if(!g)throw t("ngTransclude")("orphan",ga(c));g(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ue=t("ngOptions"),Dd=$({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:y};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Aa(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ja(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",
!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=y})}],link:function(e,f,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(F.parent()&&F.remove(),c.val(a),""===a&&x.prop("selected",!0)):D(a)&&x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){F.parent()&&F.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ya(d.$viewValue);q(c.find("option"),
function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){xa(e,d.$viewValue)||(e=ka(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function k(){var a={"":[]},c=[""],d,h,s,t,v;t=g.$modelValue;v=w(e)||[];var D=n?Wb(v):v,F,K,A;K={};s=!1;var E,J;if(r)if(x&&O(t))for(s=new Ya([]),A=0;A<t.length;A++)K[m]=t[A],s.put(x(e,K),t[A]);else s=new Ya(t);for(A=0;F=D.length,
A<F;A++){h=A;if(n){h=D[A];if("$"===h.charAt(0))continue;K[n]=h}K[m]=v[h];d=p(e,K)||"";(h=a[d])||(h=a[d]=[],c.push(d));r?d=B(s.remove(x?x(e,K):q(e,K))):(x?(d={},d[m]=t,d=x(e,d)===x(e,K)):d=t===q(e,K),s=s||d);E=l(e,K);E=B(E)?E:"";h.push({id:x?x(e,K):n?D[A]:A,label:E,selected:d})}r||(y||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));K=0;for(D=c.length;K<D;K++){d=c[K];h=a[d];z.length<=K?(t={element:C.clone().attr("label",d),label:h.label},v=[t],z.push(v),
f.append(t.element)):(v=z[K],t=v[0],t.label!=d&&t.element.attr("label",t.label=d));E=null;A=0;for(F=h.length;A<F;A++)s=h[A],(d=v[A+1])?(E=d.element,d.label!==s.label&&E.text(d.label=s.label),d.id!==s.id&&E.val(d.id=s.id),d.selected!==s.selected&&E.prop("selected",d.selected=s.selected)):(""===s.id&&y?J=y:(J=u.clone()).val(s.id).attr("selected",s.selected).text(s.label),v.push({element:J,label:s.label,id:s.id,selected:s.selected}),E?E.after(J):t.element.append(J),E=J);for(A++;v.length>A;)v.pop().element.remove()}for(;z.length>
K;)z.pop()[0].element.remove()}var h;if(!(h=t.match(d)))throw Ue("iexp",t,ga(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],p=c(h[3]||""),q=c(h[2]?h[1]:m),w=c(h[7]),x=h[8]?c(h[8]):null,z=[[{element:f,label:""}]];y&&(a(y)(e),y.removeClass("ng-scope"),y.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=w(e)||[],d={},h,k,l,p,t,u,v;if(r)for(k=[],p=0,u=z.length;p<u;p++)for(a=z[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(x)for(v=0;v<c.length&&
(d[m]=c[v],x(e,d)!=h);v++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(x)for(v=0;v<c.length;v++){if(d[m]=c[v],x(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<z[0].length&&z[0][1].id!==h&&(z[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=k;e.$watch(k)}if(m[1]){var p=m[0];m=m[1];var r=k.multiple,t=k.ngOptions,y=!1,x,u=w(V.createElement("option")),C=w(V.createElement("optgroup")),F=u.clone();k=0;for(var z=f.children(),J=z.length;k<J;k++)if(""===
z[k].value){x=y=z.eq(k);break}p.init(m,y,F);r&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,m):r?l(e,f,m):h(e,f,m,p)}}}}],hd=["$interpolate",function(a){var c={addOption:y,removeOption:y};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;g?a.$watch(g,function(a,c){e.$set("value",
a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],gd=$({restrict:"E",terminal:!0});T.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ba=T.jQuery)&&Ba.fn.on?(w=Ba,J(Ba.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),Fb("remove",!0,!0,!1),Fb("empty",!1,!1,!1),Fb("html",!1,!1,!0)):w=R,Sa.element=w,Zc(Sa),w(V).ready(function(){Wc(V,
dc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider);

/**
 * @ngdoc provider
 * @name $routeProvider
 * @kind function
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider(){
  function inherit(parent, extra) {
    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = angular.extend(
      {reloadOnSearch: true},
      route,
      path && pathRegExp(path, route)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
            ? path.substr(0, path.length-1)
            : path +'/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, route)
      );
    }

    return this;
  };

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option){
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$http',
               '$templateCache',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * Note that this example is using {@link ng.directive:script inlined templates}
     * to get it working on jsfiddle as well.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = 'string' == typeof m[i]
              ? decodeURIComponent(m[i])
              : m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && angular.equals(next.pathParams, last.pathParams)
          && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        angular.copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (angular.isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = angular.extend({}, next.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value);
              });

              if (angular.isDefined(template = next.template)) {
                if (angular.isFunction(template)) {
                  template = template(next.params);
                }
              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(next.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  next.loadedTemplateUrl = templateUrl;
                  template = $http.get(templateUrl, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                angular.copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string||'').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              // configure html5 to get links working on jsfiddle
              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory(   $route,   $anchorScroll,   $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousElement,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if(previousElement) {
            previousElement.remove();
            previousElement = null;
          }
          if(currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if(currentElement) {
            $animate.leave(currentElement, function() {
              previousElement = null;
            });
            previousElement = currentElement;
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element, function onNgViewEnter () {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.0 - 2014-05-01
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition",function(a,b,c){function d(){e();var c=+a.interval;!isNaN(c)&&c>=0&&(g=b(f,c))}function e(){g&&(b.cancel(g),g=null)}function f(){h?(a.next(),d()):a.pause()}var g,h,i=this,j=i.slides=a.slides=[],k=-1;i.currentSlide=null;var l=!1;i.select=a.select=function(e,f){function g(){if(!l){if(i.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(j,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(i.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(e,i.currentSlide)}else h(e,i.currentSlide);i.currentSlide=e,k=m,d()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var m=j.indexOf(e);void 0===f&&(f=m>k?"next":"prev"),e&&e!==i.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){l=!0}),i.indexOfSlide=function(a){return j.indexOf(a)},a.next=function(){var b=(k+1)%j.length;return a.$currentTransition?void 0:i.select(j[b],"next")},a.prev=function(){var b=0>k-1?j.length-1:k-1;return a.$currentTransition?void 0:i.select(j[b],"prev")},a.isActive=function(a){return i.currentSlide===a},a.$watch("interval",d),a.$on("$destroy",e),a.play=function(){h||(h=!0,d())},a.pause=function(){a.noPause||(h=!1,e())},i.addSlide=function(b,c){b.$element=c,j.push(b),1===j.length||b.active?(i.select(j[j.length-1]),1==j.length&&a.play()):b.active=!1},i.removeSlide=function(a){var b=j.indexOf(a);j.splice(b,1),j.length>0&&a.active?i.select(b>=j.length?j[b-1]:j[b]):k>b&&k--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var d={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.createParser=function(a){var c=[],e=a.split("");return angular.forEach(d,function(b,d){var f=a.indexOf(d);if(f>-1){a=a.split(""),e[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+d.length;h>g;g++)e[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+e.join("")+"$"),map:b(c,"index")}},this.parse=function(b,d){if(!angular.isString(b))return b;d=a.DATETIME_FORMATS[d]||d,this.parsers[d]||(this.parsers[d]=this.createParser(d));var e=this.parsers[d],f=e.regex,g=e.map,h=b.match(f);if(h&&h.length){for(var i,j={year:1900,month:0,date:1,hours:0},k=1,l=h.length;l>k;k++){var m=g[k-1];m.apply&&m.apply.call(j,h[k])}return c(j.year,j.month,j.date)&&(i=new Date(j.year,j.month,j.date,j.hours)),i}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),angular.forEach(["minDate","maxDate"],function(a){j[a]&&(h.$parent.$watch(b(j[a]),function(b){h[a]=b}),r.attr(l(a),a))}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){a&&a.isDefaultPrevented()||b.$apply(function(){b.isOpen=!1})},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b){b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g,0)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();h>=0&&!k&&(l=e.$new(!0),l.index=h,k=d("<div modal-backdrop></div>")(l),f.append(k));var i=angular.element("<div modal-window></div>");i.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var j=d(i)(b.scope);n.top().value.modalDomEl=j,f.append(j),f.addClass(m)},o.close=function(a,b){var c=n.get(a).value;c&&(c.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a).value;c&&(c.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";
return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<div "+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></div>';return{restrict:"EA",scope:!0,compile:function(){var a=f(s);return function(b,c,d){function f(){b.tt_isOpen?m():k()}function k(){(!y||b.$eval(d[l+"Enable"]))&&(b.tt_popupDelay?v||(v=g(p,b.tt_popupDelay,!1),v.then(function(a){a()})):p()())}function m(){b.$apply(function(){q()})}function p(){return v=null,u&&(g.cancel(u),u=null),b.tt_content?(r(),t.css({top:0,left:0,display:"block"}),w?i.find("body").append(t):c.after(t),z(),b.tt_isOpen=!0,b.$digest(),z):angular.noop}function q(){b.tt_isOpen=!1,g.cancel(v),v=null,b.tt_animation?u||(u=g(s,500)):s()}function r(){t&&s(),t=a(b,function(){}),b.$digest()}function s(){u=null,t&&(t.remove(),t=null)}var t,u,v,w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=angular.isDefined(d[l+"Enable"]),z=function(){var a=j.positionElements(c,t,b.tt_placement,w);a.top+="px",a.left+="px",t.css(a)};b.tt_isOpen=!1,d.$observe(e,function(a){b.tt_content=a,!a&&b.tt_isOpen&&q()}),d.$observe(l+"Title",function(a){b.tt_title=a}),d.$observe(l+"Placement",function(a){b.tt_placement=angular.isDefined(a)?a:o.placement}),d.$observe(l+"PopupDelay",function(a){var c=parseInt(a,10);b.tt_popupDelay=isNaN(c)?o.popupDelay:c});var A=function(){c.unbind(x.show,k),c.unbind(x.hide,m)};d.$observe(l+"Trigger",function(a){A(),x=n(a),x.show===x.hide?c.bind(x.show,f):(c.bind(x.show,k),c.bind(x.hide,m))});var B=b.$eval(d[l+"Animation"]);b.tt_animation=angular.isDefined(B)?!!B:o.animation,d.$observe(l+"AppendToBody",function(a){w=angular.isDefined(a)?h(a)(b):w}),w&&b.$on("$locationChangeSuccess",function(){b.tt_isOpen&&q()}),b.$on("$destroy",function(){g.cancel(u),g.cancel(v),A(),s()})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=b(k.ngModel).assign,v=g.parse(k.typeahead),w=i.$new();i.$on("$destroy",function(){w.$destroy()});var x="typeahead-"+w.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":x});var y=angular.element("<div typeahead-popup></div>");y.attr({id:x,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&y.attr("template-url",k.typeaheadTemplateUrl);var z=function(){w.matches=[],w.activeIdx=-1,j.attr("aria-expanded",!1)},A=function(a){return x+"-option-"+a};w.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",A(a))});var B=function(a){var b={$viewValue:a};q(i,!0),c.when(v.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){w.activeIdx=0,w.matches.length=0;for(var e=0;e<c.length;e++)b[v.itemName]=c[e],w.matches.push({id:A(e),label:v.viewMapper(w,b),model:c[e]});w.query=a,w.position=t?f.offset(j):f.position(j),w.position.top=w.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else z();d&&q(i,!1)},function(){z(),q(i,!1)})};z(),w.query=void 0;var C;l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(C&&d.cancel(C),C=d(function(){B(a)},o)):B(a):(q(i,!1),z()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[v.itemName]=a,b=v.viewMapper(i,d),d[v.itemName]=void 0,c=v.viewMapper(i,d),b!==c?b:a)}),w.select=function(a){var b,c,e={};e[v.itemName]=c=w.matches[a].model,b=v.modelMapper(i,e),u(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:v.viewMapper(i,e)}),z(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==w.matches.length&&-1!==h.indexOf(a.which)&&(a.preventDefault(),40===a.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===a.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===a.which||9===a.which?w.$apply(function(){w.select(w.activeIdx)}):27===a.which&&(a.stopPropagation(),z(),w.$digest()))}),j.bind("blur",function(){m=!1});var D=function(a){j[0]!==a.target&&(z(),w.$digest())};e.bind("click",D),i.$on("$destroy",function(){e.unbind("click",D)});var E=a(y)(w);t?e.find("body").append(E):j.after(E)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="{\'alert-{{type || \'warning\'}}\': true, \'alert-dismissable\': closeable}" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" ng-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset-titles.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset-titles.html","<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'\n<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-if="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
}]);
var playlistModule = angular.module('playlistModule', ['ngRoute', 'ui.bootstrap'])
	.directive('myPostRepeatDirective', function() {
		return function(scope, element, attrs) {
			if (scope.$last) {
				scope.$emit('ngRepeatFinished');
			}
		}
	})

playlistModule.controller('playlistController', function playlistController($timeout, $scope, $location, playlistStorage, funcFactory, $rootScope, $templateCache, $compile, $cacheFactory) {

	$scope.playlist_selected = undefined;
	$scope.cache = $cacheFactory('cacheId');
	$rootScope.socket = io.connect('http://localhost:3000');
	$scope.divholder = angular.element('div.holder');
	$scope.soundSelected = undefined;
	$scope.paginator = undefined;

	playlistStorage.getUserPlaylists().success(function(data) {
		$scope.playlists = data;
		$scope.playlist_selected = $scope.playlists[0];
		playlistStorage.getMusicsFromPlaylist($scope.playlist_selected.id).success(function(data) {
			$rootScope.musics = data;
		});
	});

	$scope.$on('$locationChangeStart', function(event, next, current) {
		if ($location.url() == "/notifications")
			$templateCache.removeAll();
	});

	// function lancé à chaque fois que le ng-repeat del la list de musique se termine //
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

		console.log('ngreapeat');
		if ($scope.divholder.size() > 0 && $scope.paginator !== undefined)
			$scope.divholder.jPages("destroy");
		$scope.divholder.jPages({
			containerID : "tracksListMusics",
			perPage : 8,
			callback : function() {
				$scope.paginator = this;
			}
		});

		$('#tracksListMusics').find('.track').each(function() {
			if ($(this).index() % 2 > 0)
				$(this).removeClass('two').addClass('one');
		});

		// un son est peut être joué sur la playlist chargé //
		// en effet il s'agit dela fonction directive d'après chargement de liste de sons, mais elle a pu être déclenchée depuis la selectbox des playlists //
		if (my_player.id_playlist_played != undefined && my_player.id_song_played != undefined && (my_player.id_playlist_played == $scope.playlist_selected.id))
			my_player.recreateAnimation();

		// si un son est joué sur la playlist désormais sélectionné, bien replacer la pagination //
		if ($scope.soundSelected != undefined && my_player.id_playlist_played != undefined && (my_player.id_playlist_played == $scope.playlist_selected.id))
		{
			console.log("son actuellement joué sur cette playlist : ");
			console.log($scope.soundSelected.name + ' de ' + $scope.soundSelected.author);
			console.log('index de litem son ' + my_player.id_song_played);

			// fait change le jpage si besoin //
			funcFactory.findCurrentPaginationPage($scope.divholder);
		}
  	});

	// on charger uniquement les musiques favorites provenant de toutes ses playlists //
	$scope.getFavorites = function() {

		if ($scope.cache.get('favoritesLoaded') !== true)
		{
			playlistStorage.getMusicsFromPlaylist("fav").success(function(data) {
				$rootScope.musics = data;
				$scope.playlist_selected = "favorites";
				$scope.cache.put('favoritesLoaded', true);
			});
		}
	}

	// lorsque l'utilisateur clique sur le lien de la chanson (juste en dessous du lecteur média)
	$scope.targetSong = function(soundselected) {

		console.log(soundselected);
		console.log(my_player.id_playlist_played);
		console.log(my_player.id_song_played + 1);
		var index = my_player.id_song_played + 1;
		
		if ($scope.playlist_selected.id != my_player.id_playlist_played)
		{
			for (var i = 0; i < $scope.playlists.length; i++)
			{
				if ($scope.playlists[i].id == my_player.id_playlist_played)
				{
					$scope.playlist_selected = $scope.playlists[i];
					$scope.change_playlist();
				}
			}
		}
		else
			funcFactory.findCurrentPaginationPage($scope.divholder);
	}

	$scope.play_media = function(music, element, index) {

		if ($scope.musics[index]['type_source_id'] == 2) // soundcloud //
	        my_player.play_soundcloud($scope.musics[index]['url'], $(element.currentTarget), index, $scope.playlist_selected.id);
	    else // youtube //
	        my_player.play_video($scope.musics[index]['url'], $scope.musics[index]['type_source_id'], $(element.currentTarget), index, $scope.playlist_selected.id);
	    my_player.id_playlist_played = $scope.playlist_selected.id;
	    $scope.soundSelected = music;
	}

	$scope.change_playlist = function() {

		playlistStorage.getMusicsFromPlaylist($scope.playlist_selected.id).success(function(data) {
			$rootScope.musics = data;
			my_player.id_playlist_selected = $scope.playlist_selected.id;
			$scope.cache.remove('favoritesLoaded');
		});
	}

	$scope.getThreadListMessages = function($event) {

		var $fb = $('.facebook');
		var $a_ = $fb.find('#messages_received');
		console.log(parseInt($a_.text()));
		if ($a_.size() > 0 && parseInt($a_.text()) > 0 && $scope.cache.get('threadMessages') != undefined) // on a recu de nouveaux messages //
		{
			$scope.cache.remove('threadMessages');
			$a_.text('0');
			$fb.find('.notimesg').removeClass('notimesg').addClass('messagenormal');
		}

		if ($("#thread_Tchatmessages").size() > 0)
			return (false);
		if ($scope.cache.get('threadMessages'))
			$($event.target).parents(".facebook").after($compile($scope.cache.get('threadMessages'))($scope));
		else
		{
			playlistStorage.getThreadListMessages().success(function(template) {
				$scope.ThreadMessages = template;
				$($event.target).parents(".facebook").after($compile($scope.ThreadMessages)($scope));
				$scope.cache.put('threadMessages', template);
			});
		}
	}

});
angular.module('playlistModule').factory('playlistStorage', function ($http) {
	
	var friendsList = [];
	var socket;

	return {

		setSocketUser : function(socket) {
			socket = socket;
		},

		getSocket : function() {
			return (socket);
		},

		setFriendsList : function(list) {
			friendsList = list;
		},

		getFriensList : function() {
			return (friendsList);
		},

		getUserPlaylists : function() {
			return ($http.get('/getUserPlaylists'));
		},

		getMusicsFromPlaylist : function(id_playlist) {
			if (id_playlist == "fav")
				return ($http.post('/getMusicsFromPlaylist', {"playlist_id" : "favorites"}));
			else
				return ($http.post('/getMusicsFromPlaylist', {"playlist_id" : id_playlist}));
		},

		editSong : function(id, author, name) {
			return ($http.post('/editSong', {"id" : id, "author" : author, "name" : name}));
		},

		chatBoxTemplateRequest : function(friend) {
			return ($http.post('/chatBoxTemplateRequest', friend));
		},

		submitNewSong : function(song) {
			return ($http.post('/submitNewSong', song));
		},

		removeSong : function(song) {
			return ($http.post('/removeSong', song));
		},

		shareSongTemplateRequest : function(song) {
			return ($http.post('/shareSongTemplateRequest', song));
		},

		removeSharedSongNotification : function(notif) {
			return ($http.post('/removeSharedSongNotification', notif));
		},

		getThreadListMessages : function() {
			return ($http.get('/getThreadListMessages'));
		},

		addSongToFavorite : function(id_song) {
			return ($http.post('/addSongToFavorite', {"id_song" : id_song}));
		},

		removeFromFavorite : function(id_song) {
			return ($http.post('/removeFromFavorite', {"id_song" : id_song}));	
		}
	};
});
angular.module('playlistModule').factory('funcFactory', function ($http) {

	return {
			findCurrentPaginationPage : function(divholder) {
				var page = 0;
				if ((my_player.id_song_played + 1) <= 8)
					page = 1;
				else
				{
					var page = (my_player.id_song_played + 1) / 8;
					var reste = (my_player.id_song_played + 1) % 8;
					if (reste > 0)
						page++;
					page = Math.floor(page);
				}
				divholder.jPages(page);
				return (true);
			}
		}
});

playlistModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/add-song/:playlist', {
        templateUrl: '/addNewSongTemplateRequest',
        controller: 'addNewSong'
      }).
      when('/Sharesong/:id/:name', {
        templateUrl : '/shareSongTemplateRequest',
        controller : 'ShareSong'
      }).
      when('/notifications', {
        templateUrl : '/notificationsTemplateRequest',
        controller : 'Notifications'
      }).
      when('/search', {
        templateUrl : '/searchTemplateRequest',
        controller : "Search"
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
playlistModule.controller('addNewSong', function addNewSong($routeParams, $scope, $location, playlistStorage, $rootScope, $compile) {

	$scope.editingSong = null;
	$scope.loader_black = '<div class = "section_loader_black"><span class = "loader_ loader_cercle_black"></span></div>';

	// si l'utilisateur décide d'ajouter un son à sa playlist depuis les notifications // => rf : controller notifications //
	$rootScope.$on('add_song_from_shared', function(event, args, callback) {

		var song = {"artist" : args.author, "name" : args.musicName, "url" : args.url};
		$scope.submit_add_song(song);
		$location.path("/");
		callback();
	});
	
	$scope.submit_add_song = function(song) {
		
		song.playlist_id = $scope.playlist_selected.id;
		if (song.artist != "" && song.name != '' && song.url != '')
		{
			playlistStorage.submitNewSong(song).success(function(back) {
				if (back.erreur == "ok")
				{
					$("#myModal").find('.modal-title').text("Song added to playlist !");
					if ($('#myModal').find('.delete_song').size() > 0)
						$('.delete_song').remove();
					$("#myModal").modal('show');
					setTimeout(function() {
						$("#myModal").modal('hide');
					}, 2000);

					playlistStorage.getMusicsFromPlaylist($scope.playlist_selected.id).success(function(data) {
						$rootScope.musics = data;
					});
					$scope.close(); // on close le formulaire //
				}
			});
		}
		return (false);
	}

	$scope.removeMusic = function(music, $event, $index) {

		var modal = $("#myModal");
		$('.modal-title').text("Are you sure ?");
		if (modal.find('.delete_song').size() == 0)
			$('.modal-footer').append('<button type="button" class="btn btn-primary delete_song">Accept</button>');
		modal.modal('show');

		modal.find('.delete_song').on('click', function() {
			modal.modal('hide');
			playlistStorage.removeSong(music).success(function(back) {
				$rootScope.musics.splice($index, 1);
			});
			modal.modal('hide');
		});
	}

	$scope.close = function() {
		$location.path("/");
		$('#add_song_to_current_playlist').prop('disabled', false);
	}

	$scope.closeEditing = function($event) {

		$('.edit_song').remove();
	}

	/* récupère le template qui permet la modification de la musique selectionnée */
	/* on ne passe pas par les routes et ng-view car il n'est pas préférable de placer le formulaire de modification au même niveau que celui d'ajout */
	/* la div ng-view, pour le moment est unique, ainsi le formulaire récupéré de pourrait pas être placé à un autre endroit */
	$scope.editSong = function(song) {

		$scope.editingSong = song;
		console.log("edit_song ask");
	}

	$scope.submitEditSong = function(song) {

		playlistStorage.editSong(song.id, song.author, song.name).success(function(data) {
			$scope.editingSong = null;
		});
	}

	$scope.shareSongTemplateRequest = function(song, $event, index){
		
		playlistStorage.shareSongTemplateRequest(song).success(function(data) {
			$($event.target).parents('.row:first').after($compile(data)($scope));
		});
	}

	$scope.removeFromFavorite = function(music, index) {
		
		playlistStorage.removeFromFavorite(music.id).success(function(data) {

			if ($scope.playlist_selected === "favorites")
				$rootScope.musics.splice(index, 1);
			else
				$rootScope.musics[index].favorite = 0;
		});
	}

	$scope.addToFavorite = function(music, $event) {

		console.log('demande ajout au favoris');

		playlistStorage.addSongToFavorite(music.id).success(function(data) {
			for (var i = 0; i < $rootScope.musics.length; i++)
				if ($rootScope.musics[i].id == music.id)
					$rootScope.musics[i].favorite = 1;
			
		});
	}
})

playlistModule.directive('myPostNgInitDirective', function() {
		return function(scope, element, attrs) {
			scope.$emit('ngInitFinish');
		}
	});

playlistModule.controller('FriendsList', function FriendsList($scope, $location, playlistStorage, $compile, $rootScope) {

	$scope.friendList = [];
	$scope.array_chatboxes = new Array();

	$rootScope.socket.emit('new_user');

	$rootScope.socket.on('friendHasConnected', function(data) {
		console.log(data.user.pseudo + ' has connected');
		$('#friendslist').find('.infos_friend').each(function() {
			if ($(this).attr('index') == data.user.id)
				$(this).find('.state').removeClass('no_connected').addClass('connected');
		});
	});

	$rootScope.socket.on('friendHasDisconnected', function(data) {
		console.log(data.user.pseudo + ' has disconnected');
		$('#friendslist').find('.infos_friend').each(function() {
			if ($(this).attr('index') == data.user.id)
				$(this).find('.state').removeClass('connected').addClass('no_connected');
		});
	});

	$rootScope.socket.on('listFriendsConnected', function(data) {

		for (var i = 0; i < data.friends.length; i++)
		{
			$('#friendslist').find('.infos_friend').each(function() {
				if ($(this).attr('index') == data.friends[i])
					$(this).find('.state').removeClass('no_connected').addClass('connected');
			});
		}
	});

	// signal recu : nouveau message tchat recu d'un ami //
	$rootScope.socket.on('tchatMessage', function(data) {
		$scope.addMessage(data);
	});

	$rootScope.socket.on('friendIsTyping', function(data) {
		$scope.friendIsTyping(data, true);
	});

	$rootScope.socket.on('friendStopedTyping', function(data) {
		$scope.friendIsTyping(data, false);
	});

	$rootScope.socket.on('proposeShareSong', function(data) {
		console.log('proposition de son : ' + data.song_id);
		// on met à jour le total notif //
		var $NbN = $('#shared_song_');
		$NbN.text(parseInt($NbN.text()) + 1);
		$('.nottifinormal').addClass("notinotg");
	});

	$scope.$on('ngInitFinish', function() {
		playlistStorage.setFriendsList($scope.friendList);
	});

	// signal envoyé par le controller notifications, l'utilisateur à cliqué sur un thread de discussion d'un ami à lui //
	// on ouvre donc leur fenetre tchatbox de discussion //
	$rootScope.$on('showTchatBoxFromThreadMessages', function(event, args, callback) {

		$scope.popupFriendConversation(args);
		callback();
	});

	$scope.popupFriendConversation = function(friend, callback) {

		// on check si la chatbox est déjà apparente //
		for (var i = 0; i < $scope.array_chatboxes.length; i++)
			if ($scope.array_chatboxes[i] == friend.id)
				return (false);
		console.log(friend);

		playlistStorage.chatBoxTemplateRequest(friend).success(function(template) {

	    	var template = $(template);
			var decal_ = 20;
			if ($scope.array_chatboxes.length > 0)
				var decal_ = 225 * $scope.array_chatboxes.length;
			template.removeAttr("style").css({"bottom" : "0px", "right" : decal_ + 'px', "display" : "block"});
			$scope.array_chatboxes.push(friend.id);
			angular.element('#allChatBox').append($compile(template)($scope));

			// on scroll pour être situé sur les derniers messages //
			angular.forEach(angular.element('.chatbox_'), function(value, key) {
				var attr_private = angular.element(value).attr('attr_private');
				if (attr_private == friend.id)
					console.log(angular.element(value).find('.chatboxcontent').scrollTop(400)); // 400 = taille max du bloc chargé //
			});

			if (callback)
				callback(template);
		});
	}

	// lorsque l'utilisateur recoit un nouveau message tchat //
	$scope.addMessage = function(data) {
		var iduserFrom = data.iduserFrom;
		var message = data.message;
		var pseudo = data.pseudo;

		console.log('message recu : ' + data.message);

		var $box = undefined;
		$('.chatbox_').each(function() {
			var attr_private = $(this).attr('attr_private');
			if (attr_private == iduserFrom)
			{
				$box = $(this);
				return ;
			}
		});

		if ($box === undefined) // on ouvre une fenêtre de discussion //
			$scope.popupFriendConversation({id:iduserFrom, pseudo:pseudo}, function(box) {});
		else
		{
			$box.find('.chatboxcontent').append('<p><b style ="color:red;">'+ pseudo +' : </b>' + message + '</p>');
			var $conT = $box.find('.chatboxcontent');
			$conT.scrollTop($conT.offset().top + 50);
		}

		// on met à jour la div messages_received sur la barre de notifs (div facebook maindiv) //
		var $d = $('.facebook').find('#messages_received');
		$d.text(parseInt($d.text()) + 1);
		$('.facebook').find('.messagenormal').removeClass('messagenormal').addClass('notimesg');
	}

	$scope.friendIsTyping = function(data, is) {

		var iduserFrom = data.iduserFrom;
		var pseudo = data.pseudo;

		$('.chatbox_').each(function() {
			var attr_private = $(this).attr('attr_private');
			if (attr_private == iduserFrom)
				$box = $(this);
		});

		if (is)
		{
			if ($box.find('.chatboxcontent').find('.typing').size() > 0)
				return;
			$box.find('.chatboxcontent').append('<p class = "typing"><b>'+ pseudo +' : </b>is typing something ...</p>');
		}
		else
			$box.find('.chatboxcontent').find('.typing').remove();
	}
});

angular.module('playlistModule').directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event, element) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });
                    event.preventDefault();
                }
            });
        };
    });

playlistModule.controller('chatBoxes', function chatBoxes($scope, $location, playlistStorage) {

	$scope.emitMessage = function($event, message, event) {

        $scope.socket.emit('message', {id_user_to_speak : $(event.target).attr("attr_private"), message : message});
        var $b = $(event.target).parent().parent().find('.chatboxcontent');
        $b.append('<p><b>Moi : </b>'+ $scope.message +'</p>');
        $b.scrollTop($b.offset().top + 100);
        $scope.message = "";
	}

    $scope.closeTchatBox = function($event, event) {

        var p = $($event.target).parents(".chatbox_");
        var attr = p.attr("attr_private");
        var indice = $scope.array_chatboxes.indexOf(attr);
        p.remove();
        $scope.array_chatboxes.splice(indice, 1);
    }

    // event fired by keypress //
    $scope.isTypingAMessage = function(message, $event, event) {

        return (false); // un bug survient sur le tchat avec la socket typing ... //
        var p = $($event.target).parents(".chatbox_");
        var attr = p.attr("attr_private");
        var indice = $scope.array_chatboxes.indexOf(attr);

        if (message != '')
            $scope.socket.emit('isTyping', {id_user_to_speak : $($event.target).attr("attr_private")});
        else if (message == "") // suppression du message ou alors envoie du message //
        {
            $scope.socket.emit('isOverTyping', {id_user_to_speak : $($event.target).attr("attr_private")});
        }
    }
});
playlistModule.controller('Notifications', function Notifications($scope, $location, playlistStorage, $compile, $rootScope, $routeParams) {

	$scope.notificationsList;
	$scope.socket = playlistStorage.getSocket();

	$scope.closeAlertInfo = function($event) {
		$location.path("/");
	}

	$scope.play = function(notif) {
		my_player.play_video_shared(notif.url);
	}

	$scope.addToCurrentPlaylist = function(notif, playlist_selected) {

		$rootScope.$broadcast('add_song_from_shared', notif, function() {
			// on remove la notification car le son a été ajouté //
			playlistStorage.removeSharedSongNotification(notif);
		});
	}

	$scope.closeThredMessages = function() {
		$('#thread_Tchatmessages').remove();
	}

	$scope.showTchatBoxMessages = function(friendThreadMessage) {

		$rootScope.$broadcast('showTchatBoxFromThreadMessages', friendThreadMessage, function() {
			console.log('thread message list with');
			console.log(friendThreadMessage);
		});
	}
});
/**
 * jQuery jPages v0.7
 * Client side pagination with jQuery
 * http://luis-almeida.github.com/jPages
 *
 * Licensed under the MIT license.
 * Copyright 2012 Luís Almeida
 * https://github.com/luis-almeida
 */

 ;(function($,window,document,undefined){var name="jPages",instance=null,defaults={containerID:"",first:false,previous:"←",next:"→",last:false,links:"numeric",startPage:1,perPage:10,midRange:5,startRange:1,endRange:1,keyBrowse:false,scrollBrowse:false,pause:0,clickStop:false,delay:50,direction:"forward",animation:"",fallback:400,minHeight:true,callback:undefined};function Plugin(element,options){this.options=$.extend({},defaults,options);this._container=$("#"+this.options.containerID);if(!this._container.length)return;this.jQwindow=$(window);this.jQdocument=$(document);this._holder=$(element);this._nav={};this._first=$(this.options.first);this._previous=$(this.options.previous);this._next=$(this.options.next);this._last=$(this.options.last);this._items=this._container.children(":visible");this._itemsShowing=$([]);this._itemsHiding=$([]);this._numPages=Math.ceil(this._items.length/this.options.perPage);this._currentPageNum=this.options.startPage;this._clicked=false;this._cssAnimSupport=this.getCSSAnimationSupport();this.init();}Plugin.prototype={constructor:Plugin,getCSSAnimationSupport:function(){var animation=false,animationstring='animation',keyframeprefix='',domPrefixes='Webkit Moz O ms Khtml'.split(' '),pfx='',elm=this._container.get(0);if(elm.style.animationName)animation=true;if(animation===false){for(var i=0;i<domPrefixes.length;i++){if(elm.style[domPrefixes[i]+'AnimationName']!==undefined){pfx=domPrefixes[i];animationstring=pfx+'Animation';keyframeprefix='-'+pfx.toLowerCase()+'-';animation=true;break;}}}return animation;},init:function(){this.setStyles();this.setNav();this.paginate(this._currentPageNum);this.setMinHeight();},setStyles:function(){var requiredStyles="<style>"+".jp-invisible { visibility: hidden !important; } "+".jp-hidden { display: none !important; }"+"</style>";$(requiredStyles).appendTo("head");if(this._cssAnimSupport&&this.options.animation.length)this._items.addClass("animated jp-hidden");else this._items.hide();},setNav:function(){var navhtml=this.writeNav();this._holder.each(this.bind(function(index,element){var holder=$(element);holder.html(navhtml);this.cacheNavElements(holder,index);this.bindNavHandlers(index);this.disableNavSelection(element);},this));if(this.options.keyBrowse)this.bindNavKeyBrowse();if(this.options.scrollBrowse)this.bindNavScrollBrowse();},writeNav:function(){var i=1,navhtml;navhtml=this.writeBtn("first")+this.writeBtn("previous");for(;i<=this._numPages;i++){if(i===1&&this.options.startRange===0)navhtml+="<span>...</span>";if(i>this.options.startRange&&i<=this._numPages-this.options.endRange)navhtml+="<a href='#' class='jp-hidden'>";else
navhtml+="<a>";switch(this.options.links){case"numeric":navhtml+=i;break;case"blank":break;case"title":var title=this._items.eq(i-1).attr("data-title");navhtml+=title!==undefined?title:"";break;}navhtml+="</a>";if(i===this.options.startRange||i===this._numPages-this.options.endRange)navhtml+="<span>...</span>";}navhtml+=this.writeBtn("next")+this.writeBtn("last")+"</div>";return navhtml;},writeBtn:function(which){return this.options[which]!==false&&!$(this["_"+which]).length?"<a class='jp-"+which+"'>"+this.options[which]+"</a>":"";},cacheNavElements:function(holder,index){this._nav[index]={};this._nav[index].holder=holder;this._nav[index].first=this._first.length?this._first:this._nav[index].holder.find("a.jp-first");this._nav[index].previous=this._previous.length?this._previous:this._nav[index].holder.find("a.jp-previous");this._nav[index].next=this._next.length?this._next:this._nav[index].holder.find("a.jp-next");this._nav[index].last=this._last.length?this._last:this._nav[index].holder.find("a.jp-last");this._nav[index].fstBreak=this._nav[index].holder.find("span:first");this._nav[index].lstBreak=this._nav[index].holder.find("span:last");this._nav[index].pages=this._nav[index].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last");this._nav[index].permPages=this._nav[index].pages.slice(0,this.options.startRange).add(this._nav[index].pages.slice(this._numPages-this.options.endRange,this._numPages));this._nav[index].pagesShowing=$([]);this._nav[index].currentPage=$([]);},bindNavHandlers:function(index){var nav=this._nav[index];nav.holder.bind("click.jPages",this.bind(function(evt){var newPage=this.getNewPage(nav,$(evt.target));if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}evt.preventDefault();},this));if(this._first.length){this._first.bind("click.jPages",this.bind(function(){if(this.validNewPage(1)){this._clicked=true;this.paginate(1);}},this));}if(this._previous.length){this._previous.bind("click.jPages",this.bind(function(){var newPage=this._currentPageNum-1;if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}},this));}if(this._next.length){this._next.bind("click.jPages",this.bind(function(){var newPage=this._currentPageNum+1;if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}},this));}if(this._last.length){this._last.bind("click.jPages",this.bind(function(){if(this.validNewPage(this._numPages)){this._clicked=true;this.paginate(this._numPages);}},this));}},disableNavSelection:function(element){if(typeof element.onselectstart!="undefined")element.onselectstart=function(){return false;};else if(typeof element.style.MozUserSelect!="undefined")element.style.MozUserSelect="none";else
element.onmousedown=function(){return false;};},bindNavKeyBrowse:function(){this.jQdocument.bind("keydown.jPages",this.bind(function(evt){var target=evt.target.nodeName.toLowerCase();if(this.elemScrolledIntoView()&&target!=="input"&&target!="textarea"){var newPage=this._currentPageNum;if(evt.which==37)newPage=this._currentPageNum-1;if(evt.which==39)newPage=this._currentPageNum+1;if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}}},this));},elemScrolledIntoView:function(){var docViewTop,docViewBottom,elemTop,elemBottom;docViewTop=this.jQwindow.scrollTop();docViewBottom=docViewTop+this.jQwindow.height();elemTop=this._container.offset().top;elemBottom=elemTop+this._container.height();return((elemBottom>=docViewTop)&&(elemTop<=docViewBottom));},bindNavScrollBrowse:function(){this._container.bind("mousewheel.jPages DOMMouseScroll.jPages",this.bind(function(evt){var newPage=(evt.originalEvent.wheelDelta||-evt.originalEvent.detail)>0?(this._currentPageNum-1):(this._currentPageNum+1);if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}evt.preventDefault();return false;},this));},getNewPage:function(nav,target){if(target.is(nav.currentPage))return this._currentPageNum;if(target.is(nav.pages))return nav.pages.index(target)+1;if(target.is(nav.first))return 1;if(target.is(nav.last))return this._numPages;if(target.is(nav.previous))return nav.pages.index(nav.currentPage);if(target.is(nav.next))return nav.pages.index(nav.currentPage)+2;},validNewPage:function(newPage){return newPage!==this._currentPageNum&&newPage>0&&newPage<=this._numPages;},paginate:function(page){var itemRange,pageInterval;itemRange=this.updateItems(page);pageInterval=this.updatePages(page);this._currentPageNum=page;if($.isFunction(this.options.callback))this.callback(page,itemRange,pageInterval);this.updatePause();},updateItems:function(page){var range=this.getItemRange(page);this._itemsHiding=this._itemsShowing;this._itemsShowing=this._items.slice(range.start,range.end);if(this._cssAnimSupport&&this.options.animation.length)this.cssAnimations(page);else this.jQAnimations(page);return range;},getItemRange:function(page){var range={};range.start=(page-1)*this.options.perPage;range.end=range.start+this.options.perPage;if(range.end>this._items.length)range.end=this._items.length;return range;},cssAnimations:function(page){clearInterval(this._delay);this._itemsHiding.removeClass(this.options.animation+" jp-invisible").addClass("jp-hidden");this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible");this._itemsOriented=this.getDirectedItems(page);this._index=0;this._delay=setInterval(this.bind(function(){if(this._index===this._itemsOriented.length)clearInterval(this._delay);else{this._itemsOriented.eq(this._index).removeClass("jp-invisible").addClass(this.options.animation);}this._index=this._index+1;},this),this.options.delay);},jQAnimations:function(page){clearInterval(this._delay);this._itemsHiding.addClass("jp-hidden");this._itemsShowing.fadeTo(0,0).removeClass("jp-hidden");this._itemsOriented=this.getDirectedItems(page);this._index=0;this._delay=setInterval(this.bind(function(){if(this._index===this._itemsOriented.length)clearInterval(this._delay);else{this._itemsOriented.eq(this._index).fadeTo(this.options.fallback,1);}this._index=this._index+1;},this),this.options.delay);},getDirectedItems:function(page){var itemsToShow;switch(this.options.direction){case"backwards":itemsToShow=$(this._itemsShowing.get().reverse());break;case"random":itemsToShow=$(this._itemsShowing.get().sort(function(){return(Math.round(Math.random())-0.5);}));break;case"auto":itemsToShow=page>=this._currentPageNum?this._itemsShowing:$(this._itemsShowing.get().reverse());break;default:itemsToShow=this._itemsShowing;}return itemsToShow;},updatePages:function(page){var interval,index,nav;interval=this.getInterval(page);for(index in this._nav){if(this._nav.hasOwnProperty(index)){nav=this._nav[index];this.updateBtns(nav,page);this.updateCurrentPage(nav,page);this.updatePagesShowing(nav,interval);this.updateBreaks(nav,interval);}}return interval;},getInterval:function(page){var neHalf,upperLimit,start,end;neHalf=Math.ceil(this.options.midRange/2);upperLimit=this._numPages-this.options.midRange;start=page>neHalf?Math.max(Math.min(page-neHalf,upperLimit),0):0;end=page>neHalf?Math.min(page+neHalf-(this.options.midRange%2>0?1:0),this._numPages):Math.min(this.options.midRange,this._numPages);return{start:start,end:end};},updateBtns:function(nav,page){if(page===1){nav.first.addClass("jp-disabled");nav.previous.addClass("jp-disabled");}if(page===this._numPages){nav.next.addClass("jp-disabled");nav.last.addClass("jp-disabled");}if(this._currentPageNum===1&&page>1){nav.first.removeClass("jp-disabled");nav.previous.removeClass("jp-disabled");}if(this._currentPageNum===this._numPages&&page<this._numPages){nav.next.removeClass("jp-disabled");nav.last.removeClass("jp-disabled");}},updateCurrentPage:function(nav,page){nav.currentPage.removeClass("jp-current");nav.currentPage=nav.pages.eq(page-1).addClass("jp-current");},updatePagesShowing:function(nav,interval){var newRange=nav.pages.slice(interval.start,interval.end).not(nav.permPages);nav.pagesShowing.not(newRange).addClass("jp-hidden");newRange.not(nav.pagesShowing).removeClass("jp-hidden");nav.pagesShowing=newRange;},updateBreaks:function(nav,interval){if(interval.start>this.options.startRange||(this.options.startRange===0&&interval.start>0))nav.fstBreak.removeClass("jp-hidden");else nav.fstBreak.addClass("jp-hidden");if(interval.end<this._numPages-this.options.endRange)nav.lstBreak.removeClass("jp-hidden");else nav.lstBreak.addClass("jp-hidden");},callback:function(page,itemRange,pageInterval){var pages={current:page,interval:pageInterval,count:this._numPages},items={showing:this._itemsShowing,oncoming:this._items.slice(itemRange.start+this.options.perPage,itemRange.end+this.options.perPage),range:itemRange,count:this._items.length};pages.interval.start=pages.interval.start+1;items.range.start=items.range.start+1;this.options.callback(pages,items);},updatePause:function(){if(this.options.pause&&this._numPages>1){clearTimeout(this._pause);if(this.options.clickStop&&this._clicked)return;else{this._pause=setTimeout(this.bind(function(){this.paginate(this._currentPageNum!==this._numPages?this._currentPageNum+1:1);},this),this.options.pause);}}},setMinHeight:function(){if(this.options.minHeight&&!this._container.is("table, tbody")){setTimeout(this.bind(function(){this._container.css({"min-height":this._container.css("height")});},this),1000);}},bind:function(fn,me){return function(){return fn.apply(me,arguments);};},destroy:function(){this.jQdocument.unbind("keydown.jPages");this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages");if(this.options.minHeight)this._container.css("min-height","");if(this._cssAnimSupport&&this.options.animation.length)this._items.removeClass("animated jp-hidden jp-invisible "+this.options.animation);else this._items.removeClass("jp-hidden").fadeTo(0,1);this._holder.unbind("click.jPages").empty();}};$.fn[name]=function(arg){var type=$.type(arg);if(type==="object"){if(this.length&&!$.data(this,name)){instance=new Plugin(this,arg);this.each(function(){$.data(this,name,instance);});}return this;}if(type==="string"&&arg==="destroy"){instance.destroy();this.each(function(){$.removeData(this,name);});return this;}if(type==='number'&&arg%1===0){if(instance.validNewPage(arg))instance.paginate(arg);return this;}return this;};})(jQuery,window,document);

/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010-2012, John Dyer (http://j.hn)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
// Namespace
var mejs = mejs || {};

// version number
mejs.version = '2.9.5';

// player number (for missing, same id attr)
mejs.meIndex = 0;

// media types accepted by plugins
mejs.plugins = {
        silverlight: [
                {version: [3,0], types: ['video/mp4','video/m4v','video/mov','video/wmv','audio/wma','audio/m4a','audio/mp3','audio/wav','audio/mpeg']}
        ],
        flash: [
                {version: [9,0,124], types: ['video/mp4','video/m4v','video/mov','video/flv','video/rtmp','video/x-flv','audio/flv','audio/x-flv','audio/mp3','audio/m4a','audio/mpeg']}
                //,{version: [12,0], types: ['video/webm']} // for future reference (hopefully!)
        ],
        youtube: [
                {version: null, types: ['video/youtube', 'video/x-youtube']}
        ],
        vimeo: [
                {version: null, types: ['video/vimeo']}
        ],
        dailymotion: [
                {version: null, types: ['video/dailymotion']}
        ]
};


/*
Utility methods
*/
mejs.Utility = {
        encodeUrl: function(url) {
                return encodeURIComponent(url); //.replace(/\?/gi,'%3F').replace(/=/gi,'%3D').replace(/&/gi,'%26');
        },
        escapeHTML: function(s) {
                return s.toString().split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');
        },
        absolutizeUrl: function(url) {
                var el = document.createElement('div');
                el.innerHTML = '<a href="' + this.escapeHTML(url) + '">x</a>';
                return el.firstChild.href;
        },
        getScriptPath: function(scriptNames) {
                var
                        i = 0,
                        j,
                        path = '',
                        name = '',
                        script,
                        scripts = document.getElementsByTagName('script'),
                        il = scripts.length,
                        jl = scriptNames.length;

                for (; i < il; i++) {
                        script = scripts[i].src;
                        for (j = 0; j < jl; j++) {
                                name = scriptNames[j];
                                if (script.indexOf(name) > -1) {
                                        path = script.substring(0, script.indexOf(name));
                                        break;
                                }
                        }
                        if (path !== '') {
                                break;
                        }
                }
                return path;
        },
        secondsToTimeCode: function(time, forceHours, showFrameCount, fps) {
                //add framecount
                if (typeof showFrameCount == 'undefined') {
                    showFrameCount=false;
                } else if(typeof fps == 'undefined') {
                    fps = 25;
                }
        
                var hours = Math.floor(time / 3600) % 24,
                        minutes = Math.floor(time / 60) % 60,
                        seconds = Math.floor(time % 60),
                        frames = Math.floor(((time % 1)*fps).toFixed(3)),
                        result = 
                                        ( (forceHours || hours > 0) ? (hours < 10 ? '0' + hours : hours) + ':' : '')
                                                + (minutes < 10 ? '0' + minutes : minutes) + ':'
                                                + (seconds < 10 ? '0' + seconds : seconds)
                                                + ((showFrameCount) ? ':' + (frames < 10 ? '0' + frames : frames) : '');
        
                return result;
        },
        
        timeCodeToSeconds: function(hh_mm_ss_ff, forceHours, showFrameCount, fps){
                if (typeof showFrameCount == 'undefined') {
                    showFrameCount=false;
                } else if(typeof fps == 'undefined') {
                    fps = 25;
                }
        
                var tc_array = hh_mm_ss_ff.split(":"),
                        tc_hh = parseInt(tc_array[0], 10),
                        tc_mm = parseInt(tc_array[1], 10),
                        tc_ss = parseInt(tc_array[2], 10),
                        tc_ff = 0,
                        tc_in_seconds = 0;
                
                if (showFrameCount) {
                    tc_ff = parseInt(tc_array[3])/fps;
                }
                
                tc_in_seconds = ( tc_hh * 3600 ) + ( tc_mm * 60 ) + tc_ss + tc_ff;
                
                return tc_in_seconds;
        },
        

        convertSMPTEtoSeconds: function (SMPTE) {
                if (typeof SMPTE != 'string') 
                        return false;

                SMPTE = SMPTE.replace(',', '.');
                
                var secs = 0,
                        decimalLen = (SMPTE.indexOf('.') != -1) ? SMPTE.split('.')[1].length : 0,
                        multiplier = 1;
                
                SMPTE = SMPTE.split(':').reverse();
                
                for (var i = 0; i < SMPTE.length; i++) {
                        multiplier = 1;
                        if (i > 0) {
                                multiplier = Math.pow(60, i); 
                        }
                        secs += Number(SMPTE[i]) * multiplier;
                }
                return Number(secs.toFixed(decimalLen));
        },        
        
        /* borrowed from SWFObject: http://code.google.com/p/swfobject/source/browse/trunk/swfobject/src/swfobject.js#474 */
        removeSwf: function(id) {
                var obj = document.getElementById(id);
                if (obj && obj.nodeName == "OBJECT") {
                        if (mejs.MediaFeatures.isIE) {
                                obj.style.display = "none";
                                (function(){
                                        if (obj.readyState == 4) {
                                                mejs.Utility.removeObjectInIE(id);
                                        } else {
                                                setTimeout(arguments.callee, 10);
                                        }
                                })();
                        } else {
                                obj.parentNode.removeChild(obj);
                        }
                }
        },
        removeObjectInIE: function(id) {
                var obj = document.getElementById(id);
                if (obj) {
                        for (var i in obj) {
                                if (typeof obj[i] == "function") {
                                        obj[i] = null;
                                }
                        }
                        obj.parentNode.removeChild(obj);
                }                
        }
};


// Core detector, plugins are added below
mejs.PluginDetector = {

        // main public function to test a plug version number PluginDetector.hasPluginVersion('flash',[9,0,125]);
        hasPluginVersion: function(plugin, v) {
                var pv = this.plugins[plugin];
                v[1] = v[1] || 0;
                v[2] = v[2] || 0;
                return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
        },

        // cached values
        nav: window.navigator,
        ua: window.navigator.userAgent.toLowerCase(),

        // stored version numbers
        plugins: [],

        // runs detectPlugin() and stores the version number
        addPlugin: function(p, pluginName, mimeType, activeX, axDetect) {
                this.plugins[p] = this.detectPlugin(pluginName, mimeType, activeX, axDetect);
        },

        // get the version number from the mimetype (all but IE) or ActiveX (IE)
        detectPlugin: function(pluginName, mimeType, activeX, axDetect) {

                var version = [0,0,0],
                        description,
                        i,
                        ax;

                // Firefox, Webkit, Opera
                if (typeof(this.nav.plugins) != 'undefined' && typeof this.nav.plugins[pluginName] == 'object') {
                        description = this.nav.plugins[pluginName].description;
                        if (description && !(typeof this.nav.mimeTypes != 'undefined' && this.nav.mimeTypes[mimeType] && !this.nav.mimeTypes[mimeType].enabledPlugin)) {
                                version = description.replace(pluginName, '').replace(/^\s+/,'').replace(/\sr/gi,'.').split('.');
                                for (i=0; i<version.length; i++) {
                                        version[i] = parseInt(version[i].match(/\d+/), 10);
                                }
                        }
                // Internet Explorer / ActiveX
                } else if (typeof(window.ActiveXObject) != 'undefined') {
                        try {
                                ax = new ActiveXObject(activeX);
                                if (ax) {
                                        version = axDetect(ax);
                                }
                        }
                        catch (e) { }
                }
                return version;
        }
};

// Add Flash detection
mejs.PluginDetector.addPlugin('flash','Shockwave Flash','application/x-shockwave-flash','ShockwaveFlash.ShockwaveFlash', function(ax) {
        // adapted from SWFObject
        var version = [],
                d = ax.GetVariable("$version");
        if (d) {
                d = d.split(" ")[1].split(",");
                version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
        }
        return version;
});

// Add Silverlight detection
mejs.PluginDetector.addPlugin('silverlight','Silverlight Plug-In','application/x-silverlight-2','AgControl.AgControl', function (ax) {
        // Silverlight cannot report its version number to IE
        // but it does have a isVersionSupported function, so we have to loop through it to get a version number.
        // adapted from http://www.silverlightversion.com/
        var v = [0,0,0,0],
                loopMatch = function(ax, v, i, n) {
                        while(ax.isVersionSupported(v[0]+ "."+ v[1] + "." + v[2] + "." + v[3])){
                                v[i]+=n;
                        }
                        v[i] -= n;
                };
        loopMatch(ax, v, 0, 1);
        loopMatch(ax, v, 1, 1);
        loopMatch(ax, v, 2, 10000); // the third place in the version number is usually 5 digits (4.0.xxxxx)
        loopMatch(ax, v, 2, 1000);
        loopMatch(ax, v, 2, 100);
        loopMatch(ax, v, 2, 10);
        loopMatch(ax, v, 2, 1);
        loopMatch(ax, v, 3, 1);

        return v;
});
// add adobe acrobat
/*
PluginDetector.addPlugin('acrobat','Adobe Acrobat','application/pdf','AcroPDF.PDF', function (ax) {
        var version = [],
                d = ax.GetVersions().split(',')[0].split('=')[1].split('.');

        if (d) {
                version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
        }
        return version;
});
*/
// necessary detection (fixes for <IE9)
mejs.MediaFeatures = {
        init: function() {
                var
                        t = this,
                        d = document,
                        nav = mejs.PluginDetector.nav,
                        ua = mejs.PluginDetector.ua.toLowerCase(),
                        i,
                        v,
                        html5Elements = ['source','track','audio','video'];

                // detect browsers (only the ones that have some kind of quirk we need to work around)
                t.isiPad = (ua.match(/ipad/i) !== null);
                t.isiPhone = (ua.match(/iphone/i) !== null);
                t.isiOS = t.isiPhone || t.isiPad;
                t.isAndroid = (ua.match(/android/i) !== null);
                t.isBustedAndroid = (ua.match(/android 2\.[12]/) !== null);
                t.isIE = (nav.appName.toLowerCase().indexOf("microsoft") != -1);
                t.isChrome = (ua.match(/chrome/gi) !== null);
                t.isFirefox = (ua.match(/firefox/gi) !== null);
                t.isWebkit = (ua.match(/webkit/gi) !== null);
                t.isGecko = (ua.match(/gecko/gi) !== null) && !t.isWebkit;
                t.isOpera = (ua.match(/opera/gi) !== null);
                t.hasTouch = ('ontouchstart' in window);

                // create HTML5 media elements for IE before 9, get a <video> element for fullscreen detection
                for (i=0; i<html5Elements.length; i++) {
                        v = document.createElement(html5Elements[i]);
                }
                
                t.supportsMediaTag = (typeof v.canPlayType !== 'undefined' || t.isBustedAndroid);

                // detect native JavaScript fullscreen (Safari/Firefox only, Chrome still fails)
                
                // iOS
                t.hasSemiNativeFullScreen = (typeof v.webkitEnterFullscreen !== 'undefined');
                
                // Webkit/firefox
                t.hasWebkitNativeFullScreen = (typeof v.webkitRequestFullScreen !== 'undefined');
                t.hasMozNativeFullScreen = (typeof v.mozRequestFullScreen !== 'undefined');
                
                t.hasTrueNativeFullScreen = (t.hasWebkitNativeFullScreen || t.hasMozNativeFullScreen);
                t.nativeFullScreenEnabled = t.hasTrueNativeFullScreen;
                if (t.hasMozNativeFullScreen) {
                        t.nativeFullScreenEnabled = v.mozFullScreenEnabled;
                }
                
                
                if (this.isChrome) {
                        t.hasSemiNativeFullScreen = false;
                }
                
                if (t.hasTrueNativeFullScreen) {
                        t.fullScreenEventName = (t.hasWebkitNativeFullScreen) ? 'webkitfullscreenchange' : 'mozfullscreenchange';
                        
                        
                        t.isFullScreen = function() {
                                if (v.mozRequestFullScreen) {
                                        return d.mozFullScreen;
                                } else if (v.webkitRequestFullScreen) {
                                        return d.webkitIsFullScreen;
                                }
                        }
                                        
                        t.requestFullScreen = function(el) {
                
                                if (t.hasWebkitNativeFullScreen) {
                                        el.webkitRequestFullScreen();
                                } else if (t.hasMozNativeFullScreen) {
                                        el.mozRequestFullScreen();
                                }
                        }
                        
                        t.cancelFullScreen = function() {                                
                                if (t.hasWebkitNativeFullScreen) {
                                        document.webkitCancelFullScreen();
                                } else if (t.hasMozNativeFullScreen) {
                                        document.mozCancelFullScreen();
                                }
                        }        
                        
                }
                
                
                // OS X 10.5 can't do this even if it says it can :(
                if (t.hasSemiNativeFullScreen && ua.match(/mac os x 10_5/i)) {
                        t.hasNativeFullScreen = false;
                        t.hasSemiNativeFullScreen = false;
                }
                
        }
};
mejs.MediaFeatures.init();


/*
extension methods to <video> or <audio> object to bring it into parity with PluginMediaElement (see below)
*/
mejs.HtmlMediaElement = {
        pluginType: 'native',
        isFullScreen: false,

        setCurrentTime: function (time) {
                this.currentTime = time;
        },

        setMuted: function (muted) {
                this.muted = muted;
        },

        setVolume: function (volume) {
                this.volume = volume;
        },

        // for parity with the plugin versions
        stop: function () {
                this.pause();
        },

        // This can be a url string
        // or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
        setSrc: function (url) {
                
                // Fix for IE9 which can't set .src when there are <source> elements. Awesome, right?
                var 
                        existingSources = this.getElementsByTagName('source');
                while (existingSources.length > 0){
                        this.removeChild(existingSources[0]);
                }
        
                if (typeof url == 'string') {
                        this.src = url;
                } else {
                        var i, media;

                        for (i=0; i<url.length; i++) {
                                media = url[i];
                                if (this.canPlayType(media.type)) {
                                        this.src = media.src;
                                }
                        }
                }
        },

        setVideoSize: function (width, height) {
                this.width = width;
                this.height = height;
        }
};

/*
Mimics the <video/audio> element by calling Flash's External Interface or Silverlights [ScriptableMember]
*/
mejs.PluginMediaElement = function (pluginid, pluginType, mediaUrl) {
        this.id = pluginid;
        this.pluginType = pluginType;
        this.src = mediaUrl;
        this.events = {};
};

// JavaScript values and ExternalInterface methods that match HTML5 video properties methods
// http://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/fl/video/FLVPlayback.html
// http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
mejs.PluginMediaElement.prototype = {

        // special
        pluginElement: null,
        pluginType: '',
        isFullScreen: false,

        // not implemented :(
        playbackRate: -1,
        defaultPlaybackRate: -1,
        seekable: [],
        played: [],

        // HTML5 read-only properties
        paused: true,
        ended: false,
        seeking: false,
        duration: 0,
        error: null,
        tagName: '',

        // HTML5 get/set properties, but only set (updated by event handlers)
        muted: false,
        volume: 1,
        currentTime: 0,

        // HTML5 methods
        play: function () {
                if (this.pluginApi != null) {
                        if (this.pluginType == 'youtube' || this.pluginType == 'dailymotion') {
                                this.pluginApi.playVideo();
                        } else {
                                this.pluginApi.playMedia();
                        }
                        this.paused = false;
                }
        },
        load: function () {
                if (this.pluginApi != null) {
                        if (this.pluginType == 'youtube' || this.pluginType == 'dailymotion') {
                        } else {
                                this.pluginApi.loadMedia();
                        }
                        
                        this.paused = false;
                }
        },
        pause: function () {
                if (this.pluginApi != null) {
                        if (this.pluginType == 'youtube' || this.pluginType == 'dailymotion') {
                                this.pluginApi.pauseVideo();
                        } else {
                                this.pluginApi.pauseMedia();
                        }                        
                        
                        
                        this.paused = true;
                }
        },
        stop: function () {
                if (this.pluginApi != null) {
                        if (this.pluginType == 'youtube' || this.pluginType == 'dailymotion') {
                                this.pluginApi.stopVideo();
                        } else {
                                this.pluginApi.stopMedia();
                        }        
                        this.paused = true;
                }
        },
        canPlayType: function(type) {
                var i,
                        j,
                        pluginInfo,
                        pluginVersions = mejs.plugins[this.pluginType];

                for (i=0; i<pluginVersions.length; i++) {
                        pluginInfo = pluginVersions[i];

                        // test if user has the correct plugin version
                        if (mejs.PluginDetector.hasPluginVersion(this.pluginType, pluginInfo.version)) {

                                // test for plugin playback types
                                for (j=0; j<pluginInfo.types.length; j++) {
                                        // find plugin that can play the type
                                        if (type == pluginInfo.types[j]) {
                                                return true;
                                        }
                                }
                        }
                }

                return false;
        },
        
        positionFullscreenButton: function(x,y,visibleAndAbove) {
                if (this.pluginApi != null && this.pluginApi.positionFullscreenButton) {
                        this.pluginApi.positionFullscreenButton(x,y,visibleAndAbove);
                }
        },
        
        hideFullscreenButton: function() {
                if (this.pluginApi != null && this.pluginApi.hideFullscreenButton) {
                        this.pluginApi.hideFullscreenButton();
                }                
        },        
        

        // custom methods since not all JavaScript implementations support get/set

        // This can be a url string
        // or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
        setSrc: function (url) {
                if (typeof url == 'string') {
                        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(url));
                        this.src = mejs.Utility.absolutizeUrl(url);
                } else {
                        var i, media;

                        for (i=0; i<url.length; i++) {
                                media = url[i];
                                if (this.canPlayType(media.type)) {
                                        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(media.src));
                                        this.src = mejs.Utility.absolutizeUrl(url);
                                }
                        }
                }

        },
        setCurrentTime: function (time) {
                if (this.pluginApi != null) {
                        if (this.pluginType == 'youtube' || this.pluginType == 'dailymotion') {
                                this.pluginApi.seekTo(time);
                        } else {
                                this.pluginApi.setCurrentTime(time);
                        }                                
                        
                        
                        
                        this.currentTime = time;
                }
        },
        setVolume: function (volume) {
                if (this.pluginApi != null) {
                        // same on YouTube and MEjs
                        if (this.pluginType == 'youtube' || this.pluginType == 'dailymotion') {
                                this.pluginApi.setVolume(volume * 100);
                        } else {
                                this.pluginApi.setVolume(volume);
                        }
                        this.volume = volume;
                }
        },
        setMuted: function (muted) {
                if (this.pluginApi != null) {
                        if (this.pluginType == 'youtube' || this.pluginType == 'dailymotion') {
                                if (muted) {
                                        this.pluginApi.mute();
                                } else {
                                        this.pluginApi.unMute();
                                }
                                this.muted = muted;
                                this.dispatchEvent('volumechange');
                        } else {
                                this.pluginApi.setMuted(muted);
                        }
                        this.muted = muted;
                }
        },

        // additional non-HTML5 methods
        setVideoSize: function (width, height) {
                
                //if (this.pluginType == 'flash' || this.pluginType == 'silverlight') {
                        if ( this.pluginElement.style) {
                                this.pluginElement.style.width = width + 'px';
                                this.pluginElement.style.height = height + 'px';
                        }
                        if (this.pluginApi != null && this.pluginApi.setVideoSize) {
                                this.pluginApi.setVideoSize(width, height);
                        }
                //}
        },

        setFullscreen: function (fullscreen) {
                if (this.pluginApi != null && this.pluginApi.setFullscreen) {
                        this.pluginApi.setFullscreen(fullscreen);
                }
        },
        
        enterFullScreen: function() {
                if (this.pluginApi != null && this.pluginApi.setFullscreen) {
                        this.setFullscreen(true);
                }                
                
        },
        
        exitFullScreen: function() {
                if (this.pluginApi != null && this.pluginApi.setFullscreen) {
                        this.setFullscreen(false);
                }
        },        

        // start: fake events
        addEventListener: function (eventName, callback, bubble) {
                this.events[eventName] = this.events[eventName] || [];
                this.events[eventName].push(callback);
        },
        removeEventListener: function (eventName, callback) {
                if (!eventName) { this.events = {}; return true; }
                var callbacks = this.events[eventName];
                if (!callbacks) return true;
                if (!callback) { this.events[eventName] = []; return true; }
                for (i = 0; i < callbacks.length; i++) {
                        if (callbacks[i] === callback) {
                                this.events[eventName].splice(i, 1);
                                return true;
                        }
                }
                return false;
        },        
        dispatchEvent: function (eventName) {
                var i,
                        args,
                        callbacks = this.events[eventName];

                if (callbacks) {
                        args = Array.prototype.slice.call(arguments, 1);
                        for (i = 0; i < callbacks.length; i++) {
                                callbacks[i].apply(null, args);
                        }
                }
        },
        // end: fake events
        
        // fake DOM attribute methods
        attributes: {},
        hasAttribute: function(name){
                return (name in this.attributes);  
        },
        removeAttribute: function(name){
                delete this.attributes[name];
        },
        getAttribute: function(name){
                if (this.hasAttribute(name)) {
                        return this.attributes[name];
                }
                return '';
        },
        setAttribute: function(name, value){
                this.attributes[name] = value;
        },

        remove: function() {
                mejs.Utility.removeSwf(this.pluginElement.id);
        }
};

// Handles calls from Flash/Silverlight and reports them as native <video/audio> events and properties
mejs.MediaPluginBridge = {

        pluginMediaElements:{},
        htmlMediaElements:{},

        registerPluginElement: function (id, pluginMediaElement, htmlMediaElement) {
                this.pluginMediaElements[id] = pluginMediaElement;
                this.htmlMediaElements[id] = htmlMediaElement;
        },

        // when Flash/Silverlight is ready, it calls out to this method
        initPlugin: function (id) {

                var pluginMediaElement = this.pluginMediaElements[id],
                        htmlMediaElement = this.htmlMediaElements[id];

                if (pluginMediaElement) {
                        // find the javascript bridge
                        switch (pluginMediaElement.pluginType) {
                                case "flash":
                                        pluginMediaElement.pluginElement = pluginMediaElement.pluginApi = document.getElementById(id);
                                        break;
                                case "silverlight":
                                        pluginMediaElement.pluginElement = document.getElementById(pluginMediaElement.id);
                                        pluginMediaElement.pluginApi = pluginMediaElement.pluginElement.Content.MediaElementJS;
                                        break;
                        }
        
                        if (pluginMediaElement.pluginApi != null && pluginMediaElement.success) {
                                pluginMediaElement.success(pluginMediaElement, htmlMediaElement);
                        }
                }
        },

        // receives events from Flash/Silverlight and sends them out as HTML5 media events
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
        fireEvent: function (id, eventName, values) {

                var
                        e,
                        i,
                        bufferedTime,
                        pluginMediaElement = this.pluginMediaElements[id];

                pluginMediaElement.ended = false;
                pluginMediaElement.paused = true;

                // fake event object to mimic real HTML media event.
                e = {
                        type: eventName,
                        target: pluginMediaElement
                };

                // attach all values to element and event object
                for (i in values) {
                        pluginMediaElement[i] = values[i];
                        e[i] = values[i];
                }

                // fake the newer W3C buffered TimeRange (loaded and total have been removed)
                bufferedTime = values.bufferedTime || 0;

                e.target.buffered = e.buffered = {
                        start: function(index) {
                                return 0;
                        },
                        end: function (index) {
                                return bufferedTime;
                        },
                        length: 1
                };

                pluginMediaElement.dispatchEvent(e.type, e);
        }
};

/*
Default options
*/
mejs.MediaElementDefaults = {
        // allows testing on HTML5, flash, silverlight
        // auto: attempts to detect what the browser can do
        // auto_plugin: prefer plugins and then attempt native HTML5
        // native: forces HTML5 playback
        // shim: disallows HTML5, will attempt either Flash or Silverlight
        // none: forces fallback view
        mode: 'auto',
        // remove or reorder to change plugin priority and availability
        plugins: ['flash','silverlight','youtube','vimeo', 'dailymotion'],
        // shows debug errors on screen
        enablePluginDebug: false,
        // overrides the type specified, useful for dynamic instantiation
        type: '',
        // path to Flash and Silverlight plugins
        pluginPath: mejs.Utility.getScriptPath(['mediaelement.js','mediaelement.min.js','mediaelement-and-player.js','mediaelement-and-player.min.js']),
        // name of flash file
        flashName: 'flashmediaelement.swf',
        // streamer for RTMP streaming
        flashStreamer: '',
        // turns on the smoothing filter in Flash
        enablePluginSmoothing: false,
        // name of silverlight file
        silverlightName: 'silverlightmediaelement.xap',
        // default if the <video width> is not specified
        defaultVideoWidth: 480,
        // default if the <video height> is not specified
        defaultVideoHeight: 270,
        // overrides <video width>
        pluginWidth: -1,
        // overrides <video height>
        pluginHeight: -1,
        // additional plugin variables in 'key=value' form
        pluginVars: [],        
        // rate in milliseconds for Flash and Silverlight to fire the timeupdate event
        // larger number is less accurate, but less strain on plugin->JavaScript bridge
        timerRate: 250,
        // initial volume for player
        startVolume: 0.8,
        success: function () { },
        error: function () { }
};

/*
Determines if a browser supports the <video> or <audio> element
and returns either the native element or a Flash/Silverlight version that
mimics HTML5 MediaElement
*/
mejs.MediaElement = function (el, o) {
        return mejs.HtmlMediaElementShim.create(el,o);
};

mejs.HtmlMediaElementShim = {

        create: function(el, o) {
                var
                        options = mejs.MediaElementDefaults,
                        htmlMediaElement = (typeof(el) == 'string') ? document.getElementById(el) : el,
                        tagName = htmlMediaElement.tagName.toLowerCase(),
                        isMediaTag = (tagName === 'audio' || tagName === 'video'),
                        src = (isMediaTag) ? htmlMediaElement.getAttribute('src') : htmlMediaElement.getAttribute('href'),
                        poster = htmlMediaElement.getAttribute('poster'),
                        autoplay =  htmlMediaElement.getAttribute('autoplay'),
                        preload =  htmlMediaElement.getAttribute('preload'),
                        controls =  htmlMediaElement.getAttribute('controls'),
                        playback,
                        prop;

                // extend options
                for (prop in o) {
                        options[prop] = o[prop];
                }

                // clean up attributes
                src =                 (typeof src == 'undefined'         || src === null || src == '') ? null : src;                
                poster =        (typeof poster == 'undefined'         || poster === null) ? '' : poster;
                preload =         (typeof preload == 'undefined'         || preload === null || preload === 'false') ? 'none' : preload;
                autoplay =         !(typeof autoplay == 'undefined' || autoplay === null || autoplay === 'false');
                controls =         !(typeof controls == 'undefined' || controls === null || controls === 'false');

                // test for HTML5 and plugin capabilities
                playback = this.determinePlayback(htmlMediaElement, options, mejs.MediaFeatures.supportsMediaTag, isMediaTag, src);
                playback.url = (playback.url !== null) ? mejs.Utility.absolutizeUrl(playback.url) : '';

                if (playback.method == 'native') {
                        // second fix for android
                        if (mejs.MediaFeatures.isBustedAndroid) {
                                htmlMediaElement.src = playback.url;
                                htmlMediaElement.addEventListener('click', function() {
                                        htmlMediaElement.play();
                                }, false);
                        }
                
                        // add methods to native HTMLMediaElement
                        return this.updateNative(playback, options, autoplay, preload);
                } else if (playback.method !== '') {
                        // create plugin to mimic HTMLMediaElement
                        
                        return this.createPlugin( playback,  options, poster, autoplay, preload, controls);
                } else {
                        // boo, no HTML5, no Flash, no Silverlight.
                        this.createErrorMessage( playback, options, poster );
                        
                        return this;
                }
        },
        
        determinePlayback: function(htmlMediaElement, options, supportsMediaTag, isMediaTag, src) {
                var
                        mediaFiles = [],
                        i,
                        j,
                        k,
                        l,
                        n,
                        type,
                        result = { method: '', url: '', htmlMediaElement: htmlMediaElement, isVideo: (htmlMediaElement.tagName.toLowerCase() != 'audio')},
                        pluginName,
                        pluginVersions,
                        pluginInfo,
                        dummy;
                        
                // STEP 1: Get URL and type from <video src> or <source src>

                // supplied type overrides <video type> and <source type>
                if (typeof options.type != 'undefined' && options.type !== '') {
                        
                        // accept either string or array of types
                        if (typeof options.type == 'string') {
                                mediaFiles.push({type:options.type, url:src});
                        } else {
                                
                                for (i=0; i<options.type.length; i++) {
                                        mediaFiles.push({type:options.type[i], url:src});
                                }
                        }

                // test for src attribute first
                } else if (src !== null) {
                        type = this.formatType(src, htmlMediaElement.getAttribute('type'));
                        mediaFiles.push({type:type, url:src});

                // then test for <source> elements
                } else {
                        // test <source> types to see if they are usable
                        for (i = 0; i < htmlMediaElement.childNodes.length; i++) {
                                n = htmlMediaElement.childNodes[i];
                                if (n.nodeType == 1 && n.tagName.toLowerCase() == 'source') {
                                        src = n.getAttribute('src');
                                        type = this.formatType(src, n.getAttribute('type'));
                                        mediaFiles.push({type:type, url:src});
                                }
                        }
                }
                
                // in the case of dynamicly created players
                // check for audio types
                if (!isMediaTag && mediaFiles.length > 0 && mediaFiles[0].url !== null && this.getTypeFromFile(mediaFiles[0].url).indexOf('audio') > -1) {
                        result.isVideo = false;
                }
                

                // STEP 2: Test for playback method
                
                // special case for Android which sadly doesn't implement the canPlayType function (always returns '')
                if (mejs.MediaFeatures.isBustedAndroid) {
                        htmlMediaElement.canPlayType = function(type) {
                                return (type.match(/video\/(mp4|m4v)/gi) !== null) ? 'maybe' : '';
                        };
                }                
                

                // test for native playback first
                if (supportsMediaTag && (options.mode === 'auto' || options.mode === 'auto_plugin' || options.mode === 'native')) {
                                                
                        if (!isMediaTag) {

                                // create a real HTML5 Media Element 
                                dummy = document.createElement( result.isVideo ? 'video' : 'audio');                        
                                htmlMediaElement.parentNode.insertBefore(dummy, htmlMediaElement);
                                htmlMediaElement.style.display = 'none';
                                
                                // use this one from now on
                                result.htmlMediaElement = htmlMediaElement = dummy;
                        }
                                
                        for (i=0; i<mediaFiles.length; i++) {
                                // normal check
                                if (htmlMediaElement.canPlayType(mediaFiles[i].type).replace(/no/, '') !== '' 
                                        // special case for Mac/Safari 5.0.3 which answers '' to canPlayType('audio/mp3') but 'maybe' to canPlayType('audio/mpeg')
                                        || htmlMediaElement.canPlayType(mediaFiles[i].type.replace(/mp3/,'mpeg')).replace(/no/, '') !== '') {
                                        result.method = 'native';
                                        result.url = mediaFiles[i].url;
                                        break;
                                }
                        }                        
                        
                        if (result.method === 'native') {
                                if (result.url !== null) {
                                        htmlMediaElement.src = result.url;
                                }
                        
                                // if `auto_plugin` mode, then cache the native result but try plugins.
                                if (options.mode !== 'auto_plugin') {
                                        return result;
                                }
                        }
                }

                // if native playback didn't work, then test plugins
                if (options.mode === 'auto' || options.mode === 'auto_plugin' || options.mode === 'shim') {
                        for (i=0; i<mediaFiles.length; i++) {
                                type = mediaFiles[i].type;

                                // test all plugins in order of preference [silverlight, flash]
                                for (j=0; j<options.plugins.length; j++) {

                                        pluginName = options.plugins[j];
                        
                                        // test version of plugin (for future features)
                                        pluginVersions = mejs.plugins[pluginName];                                
                                        
                                        for (k=0; k<pluginVersions.length; k++) {
                                                pluginInfo = pluginVersions[k];
                                        
                                                // test if user has the correct plugin version
                                                
                                                // for youtube/vimeo
                                                if (pluginInfo.version == null || 
                                                        
                                                        mejs.PluginDetector.hasPluginVersion(pluginName, pluginInfo.version)) {

                                                        // test for plugin playback types
                                                        for (l=0; l<pluginInfo.types.length; l++) {
                                                                // find plugin that can play the type
                                                                if (type == pluginInfo.types[l]) {
                                                                        result.method = pluginName;
                                                                        result.url = mediaFiles[i].url;
                                                                        return result;
                                                                }
                                                        }
                                                }
                                        }
                                }
                        }
                }
                
                // at this point, being in 'auto_plugin' mode implies that we tried plugins but failed.
                // if we have native support then return that.
                if (options.mode === 'auto_plugin' && result.method === 'native') {
                        return result;
                }

                // what if there's nothing to play? just grab the first available
                if (result.method === '' && mediaFiles.length > 0) {
                        result.url = mediaFiles[0].url;
                }

                return result;
        },

        formatType: function(url, type) {
                var ext;

                // if no type is supplied, fake it with the extension
                if (url && !type) {                
                        return this.getTypeFromFile(url);
                } else {
                        // only return the mime part of the type in case the attribute contains the codec
                        // see http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-source-element
                        // `video/mp4; codecs="avc1.42E01E, mp4a.40.2"` becomes `video/mp4`
                        
                        if (type && ~type.indexOf(';')) {
                                return type.substr(0, type.indexOf(';')); 
                        } else {
                                return type;
                        }
                }
        },
        
        getTypeFromFile: function(url) {
                var ext = url.substring(url.lastIndexOf('.') + 1);
                return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(ext) ? 'video' : 'audio') + '/' + this.getTypeFromExtension(ext);
        },
        
        getTypeFromExtension: function(ext) {
                
                switch (ext) {
                        case 'mp4':
                        case 'm4v':
                                return 'mp4';
                        case 'webm':
                        case 'webma':
                        case 'webmv':        
                                return 'webm';
                        case 'ogg':
                        case 'oga':
                        case 'ogv':        
                                return 'ogg';
                        default:
                                return ext;
                }
        },

        createErrorMessage: function(playback, options, poster) {
                var 
                        htmlMediaElement = playback.htmlMediaElement,
                        errorContainer = document.createElement('div');
                        
                errorContainer.className = 'me-cannotplay';

                try {
                        errorContainer.style.width = htmlMediaElement.width + 'px';
                        errorContainer.style.height = htmlMediaElement.height + 'px';
                } catch (e) {}

                errorContainer.innerHTML = (poster !== '') ?
                        '<a href="' + playback.url + '"><img src="' + poster + '" width="100%" height="100%" /></a>' :
                        '<a href="' + playback.url + '"><span>Download File</span></a>';

                htmlMediaElement.parentNode.insertBefore(errorContainer, htmlMediaElement);
                htmlMediaElement.style.display = 'none';

                options.error(htmlMediaElement);
        },

        createPlugin:function(playback, options, poster, autoplay, preload, controls) {
                var 
                        htmlMediaElement = playback.htmlMediaElement,
                        width = 1,
                        height = 1,
                        pluginid = 'me_' + playback.method + '_' + (mejs.meIndex++),
                        pluginMediaElement = new mejs.PluginMediaElement(pluginid, playback.method, playback.url),
                        container = document.createElement('div'),
                        specialIEContainer,
                        node,
                        initVars;

                // copy tagName from html media element
                pluginMediaElement.tagName = htmlMediaElement.tagName

                // copy attributes from html media element to plugin media element
                for (var i = 0; i < htmlMediaElement.attributes.length; i++) {
                        var attribute = htmlMediaElement.attributes[i];
                        if (attribute.specified == true) {
                                pluginMediaElement.setAttribute(attribute.name, attribute.value);
                        }
                }

                // check for placement inside a <p> tag (sometimes WYSIWYG editors do this)
                node = htmlMediaElement.parentNode;
                while (node !== null && node.tagName.toLowerCase() != 'body') {
                        if (node.parentNode.tagName.toLowerCase() == 'p') {
                                node.parentNode.parentNode.insertBefore(node, node.parentNode);
                                break;
                        }
                        node = node.parentNode;
                }

                if (playback.isVideo) {
                        width = (options.videoWidth > 0) ? options.videoWidth : (htmlMediaElement.getAttribute('width') !== null) ? htmlMediaElement.getAttribute('width') : options.defaultVideoWidth;
                        height = (options.videoHeight > 0) ? options.videoHeight : (htmlMediaElement.getAttribute('height') !== null) ? htmlMediaElement.getAttribute('height') : options.defaultVideoHeight;
                
                        // in case of '%' make sure it's encoded
                        width = mejs.Utility.encodeUrl(width);
                        height = mejs.Utility.encodeUrl(height);
                
                } else {
                        if (options.enablePluginDebug) {
                                width = 320;
                                height = 240;
                        }
                }

                // register plugin
                pluginMediaElement.success = options.success;
                mejs.MediaPluginBridge.registerPluginElement(pluginid, pluginMediaElement, htmlMediaElement);

                // add container (must be added to DOM before inserting HTML for IE)
                container.className = 'me-plugin';
                container.id = pluginid + '_container';
                
                if (playback.isVideo) {
                                htmlMediaElement.parentNode.insertBefore(container, htmlMediaElement);
                } else {
                                document.body.insertBefore(container, document.body.childNodes[0]);
                }

                // flash/silverlight vars
                initVars = [
                        'id=' + pluginid,
                        'isvideo=' + ((playback.isVideo) ? "true" : "false"),
                        'autoplay=' + ((autoplay) ? "true" : "false"),
                        'preload=' + preload,
                        'width=' + width,
                        'startvolume=' + options.startVolume,
                        'timerrate=' + options.timerRate,
                        'flashstreamer=' + options.flashStreamer,
                        'height=' + height];

                if (playback.url !== null) {
                        if (playback.method == 'flash') {
                                initVars.push('file=' + mejs.Utility.encodeUrl(playback.url));
                        } else {
                                initVars.push('file=' + playback.url);
                        }
                }
                if (options.enablePluginDebug) {
                        initVars.push('debug=true');
                }
                if (options.enablePluginSmoothing) {
                        initVars.push('smoothing=true');
                }
                if (controls) {
                        initVars.push('controls=true'); // shows controls in the plugin if desired
                }
                if (options.pluginVars) {
                        initVars = initVars.concat(options.pluginVars);
                }                

                switch (playback.method) {
                        case 'silverlight':
                                container.innerHTML =
'<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + pluginid + '" name="' + pluginid + '" width="' + width + '" height="' + height + '">' +
'<param name="initParams" value="' + initVars.join(',') + '" />' +
'<param name="windowless" value="true" />' +
'<param name="background" value="black" />' +
'<param name="minRuntimeVersion" value="3.0.0.0" />' +
'<param name="autoUpgrade" value="true" />' +
'<param name="source" value="' + options.pluginPath + options.silverlightName + '" />' +
'</object>';
                                        break;

                        case 'flash':

                                if (mejs.MediaFeatures.isIE) {
                                        specialIEContainer = document.createElement('div');
                                        container.appendChild(specialIEContainer);
                                        specialIEContainer.outerHTML =
'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + pluginid + '" width="' + width + '" height="' + height + '">' +
'<param name="movie" value="' + options.pluginPath + options.flashName + '?x=' + (new Date()) + '" />' +
'<param name="flashvars" value="' + initVars.join('&amp;') + '" />' +
'<param name="quality" value="high" />' +
'<param name="bgcolor" value="#000000" />' +
'<param name="wmode" value="transparent" />' +
'<param name="allowScriptAccess" value="always" />' +
'<param name="allowFullScreen" value="true" />' +
'</object>';

                                } else {

                                        container.innerHTML =
'<embed id="' + pluginid + '" name="' + pluginid + '" ' +
'play="true" ' +
'loop="false" ' +
'quality="high" ' +
'bgcolor="#000000" ' +
'wmode="transparent" ' +
'allowScriptAccess="always" ' +
'allowFullScreen="true" ' +
'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' +
'src="' + options.pluginPath + options.flashName + '" ' +
'flashvars="' + initVars.join('&') + '" ' +
'width="' + width + '" ' +
'height="' + height + '"></embed>';
                                }
                                break;
                        
                        case 'youtube':
                        
                                
                                var videoId;
                                
                            // 2 url formats are supported
                            // http://youtu.be/<videoId>
                            // http://www.youtube.com/watch?v=<videoId>
                            if(playback.url.indexOf('youtu.be') != -1) videoId = playback.url.substr(playback.url.lastIndexOf('/')+1);
                            else videoId = playback.url.substr(playback.url.lastIndexOf('=')+1);
                            
                                var youtubeSettings = {
                                        container: container,
                                        containerId: container.id,
                                        pluginMediaElement: pluginMediaElement,
                                        pluginId: pluginid,
                                        videoId: videoId,
                                        height: height,
                                        width: width        
                                };
                                
                                if (mejs.PluginDetector.hasPluginVersion('flash', [10,0,0]) ) {
                                        mejs.YouTubeApi.createFlash(youtubeSettings);
                                } else {
                                        mejs.YouTubeApi.enqueueIframe(youtubeSettings);                
                                }
                                
                                break;
                        
                        // DEMO Code. Does NOT work.
                        case 'vimeo':
                                //console.log('vimeoid');
                                
                                pluginMediaElement.vimeoid = playback.url.substr(playback.url.lastIndexOf('/')+1);
                                
                                container.innerHTML =
                                        '<object width="' + width + '" height="' + height + '">' +
                                                '<param name="allowfullscreen" value="true" />' +
                                                '<param name="allowscriptaccess" value="always" />' +
                                                '<param name="flashvars" value="api=1" />' + 
                                                '<param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=' + pluginMediaElement.vimeoid  + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" />' +
                                                '<embed src="//vimeo.com/moogaloop.swf?api=1&amp;clip_id=' + pluginMediaElement.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="' + width + '" height="' + height + '"></embed>' +
                                        '</object>';
                                        
                                break;                        
                                
                    case 'dailymotion':
                    
                        var
                                        videoId = playback.url.substr(playback.url.lastIndexOf('/')+1);
                                        dailymotionSettings = {
                                                container: container,
                                                containerId: container.id,
                                                pluginMediaElement: pluginMediaElement,
                                                pluginId: pluginid,
                                                videoId: videoId,
                                                height: height,
                                                width: width        
                                        };
                                        
                                mejs.DailymotionApi.createFlash(dailymotionSettings);
                                        
                        break;
                }
                // hide original element
                htmlMediaElement.style.display = 'none';

                // FYI: options.success will be fired by the MediaPluginBridge
                
                return pluginMediaElement;
        },

        updateNative: function(playback, options, autoplay, preload) {
                
                var htmlMediaElement = playback.htmlMediaElement,
                        m;
                
                
                // add methods to video object to bring it into parity with Flash Object
                for (m in mejs.HtmlMediaElement) {
                        htmlMediaElement[m] = mejs.HtmlMediaElement[m];
                }

                /*
                Chrome now supports preload="none"
                if (mejs.MediaFeatures.isChrome) {
                
                        // special case to enforce preload attribute (Chrome doesn't respect this)
                        if (preload === 'none' && !autoplay) {
                        
                                // forces the browser to stop loading (note: fails in IE9)
                                htmlMediaElement.src = '';
                                htmlMediaElement.load();
                                htmlMediaElement.canceledPreload = true;

                                htmlMediaElement.addEventListener('play',function() {
                                        if (htmlMediaElement.canceledPreload) {
                                                htmlMediaElement.src = playback.url;
                                                htmlMediaElement.load();
                                                htmlMediaElement.play();
                                                htmlMediaElement.canceledPreload = false;
                                        }
                                }, false);
                        // for some reason Chrome forgets how to autoplay sometimes.
                        } else if (autoplay) {
                                htmlMediaElement.load();
                                htmlMediaElement.play();
                        }
                }
                */

                // fire success code
                options.success(htmlMediaElement, htmlMediaElement);
                
                return htmlMediaElement;
        }
};

/*
 - test on IE (object vs. embed)
 - determine when to use iframe (Firefox, Safari, Mobile) vs. Flash (Chrome, IE)
 - fullscreen?
*/

// YouTube Flash and Iframe API
mejs.YouTubeApi = {
        isIframeStarted: false,
        isIframeLoaded: false,
        loadIframeApi: function() {
                if (!this.isIframeStarted) {
                        var tag = document.createElement('script');
                        tag.src = "http://www.youtube.com/player_api";
                        var firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                        this.isIframeStarted = true;
                }
        },
        iframeQueue: [],
        enqueueIframe: function(yt) {
                
                if (this.isLoaded) {
                        this.createIframe(yt);
                } else {
                        this.loadIframeApi();
                        this.iframeQueue.push(yt);
                }
        },
        createIframe: function(settings) {
                
                var
                pluginMediaElement = settings.pluginMediaElement,        
                player = new YT.Player(settings.containerId, {
                        height: settings.height,
                        width: settings.width,
                        videoId: settings.videoId,
                        playerVars: {controls:0},
                        events: {
                                'onReady': function() {
                                        
                                        // hook up iframe object to MEjs
                                        settings.pluginMediaElement.pluginApi = player;
                                        
                                        // init mejs
                                        mejs.MediaPluginBridge.initPlugin(settings.pluginId);
                                        
                                        // create timer
                                        setInterval(function() {
                                                mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
                                        }, 250);                                        
                                },
                                'onStateChange': function(e) {
                                        
                                        mejs.YouTubeApi.handleStateChange(e.data, player, pluginMediaElement);
                                        
                                }
                        }
                });
        },
        
        createEvent: function (player, pluginMediaElement, eventName) {
                var obj = {
                        type: eventName,
                        target: pluginMediaElement
                };

                if (player && player.getDuration) {
                        
                        // time 
                        pluginMediaElement.currentTime = obj.currentTime = player.getCurrentTime();
                        pluginMediaElement.duration = obj.duration = player.getDuration();
                        
                        // state
                        obj.paused = pluginMediaElement.paused;
                        obj.ended = pluginMediaElement.ended;                        
                        
                        // sound
                        obj.muted = player.isMuted();
                        obj.volume = player.getVolume() / 100;
                        
                        // progress
                        obj.bytesTotal = player.getVideoBytesTotal();
                        obj.bufferedBytes = player.getVideoBytesLoaded();
                        
                        // fake the W3C buffered TimeRange
                        var bufferedTime = obj.bufferedBytes / obj.bytesTotal * obj.duration;
                        
                        obj.target.buffered = obj.buffered = {
                                start: function(index) {
                                        return 0;
                                },
                                end: function (index) {
                                        return bufferedTime;
                                },
                                length: 1
                        };
                        
                }
                
                // send event up the chain
                pluginMediaElement.dispatchEvent(obj.type, obj);
        },        
        
        iFrameReady: function() {
                
                this.isLoaded = true;
                this.isIframeLoaded = true;
                
                while (this.iframeQueue.length > 0) {
                        var settings = this.iframeQueue.pop();
                        this.createIframe(settings);
                }        
        },
        
        // FLASH!
        flashPlayers: {},
        createFlash: function(settings) {
                
                this.flashPlayers[settings.pluginId] = settings;
                
                /*
                settings.container.innerHTML =
                        '<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0" ' +
                                'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; ">' +
                                '<param name="allowScriptAccess" value="always">' +
                                '<param name="wmode" value="transparent">' +
                        '</object>';
                */

                var specialIEContainer,
                        youtubeUrl = 'http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0';
                        
                if (mejs.MediaFeatures.isIE) {
                        
                        specialIEContainer = document.createElement('div');
                        settings.container.appendChild(specialIEContainer);
                        specialIEContainer.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + settings.pluginId + '" width="' + settings.width + '" height="' + settings.height + '">' +
        '<param name="movie" value="' + youtubeUrl + '" />' +
        '<param name="wmode" value="transparent" />' +
        '<param name="allowScriptAccess" value="always" />' +
        '<param name="allowFullScreen" value="true" />' +
'</object>';
                } else {
                settings.container.innerHTML =
                        '<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="' + youtubeUrl + '" ' +
                                'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; ">' +
                                '<param name="allowScriptAccess" value="always">' +
                                '<param name="wmode" value="transparent">' +
                        '</object>';
                }                
                
        },
        
        flashReady: function(id) {
                var
                        settings = this.flashPlayers[id],
                        player = document.getElementById(id),
                        pluginMediaElement = settings.pluginMediaElement;
                
                // hook up and return to MediaELementPlayer.success        
                pluginMediaElement.pluginApi = 
                pluginMediaElement.pluginElement = player;
                
                pluginMediaElement.pluginApi.setSrc = function(url){
                
                // get the Youtube or Dailymotion video ID
                    var videoId, newPluginType;
                    if(url.indexOf('youtu.be') != -1) {
                        videoId = url.substr(url.lastIndexOf('/')+1);
                        newPluginType = 'youtube';
                    } else if(url.indexOf('youtube.com') != -1) {
                        videoId = url.substr(url.lastIndexOf('=')+1);
                        newPluginType = 'youtube';
                    } else if(url.indexOf('dailymotion.com') != -1) {
                        videoId = url.substr(url.lastIndexOf('/')+1);
                        newPluginType = 'dailymotion';
                    }
                    
                    if(newPluginType == 'dailymotion'){
                        settings.videoId = videoId;
                        mejs.DailymotionApi.createFlash(settings);
                    } else {
                        this.cueVideoById(videoId);
                    }
                };
                
                mejs.MediaPluginBridge.initPlugin(id);
                
                // load the youtube video
                player.cueVideoById(settings.videoId);
                
                var callbackName = settings.containerId + '_callback'
                
                window[callbackName] = function(e) {
                        mejs.YouTubeApi.handleStateChange(e, player, pluginMediaElement);
                }
                
                player.addEventListener('onStateChange', callbackName);
                
                setInterval(function() {
                        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
                }, 250);
        },
        
        handleStateChange: function(youTubeState, player, pluginMediaElement) {
                switch (youTubeState) {
                        case -1: // not started
                                pluginMediaElement.paused = true;
                                pluginMediaElement.ended = true;
                                mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'loadedmetadata');
                                //createYouTubeEvent(player, pluginMediaElement, 'loadeddata');
                                break;
                        case 0:
                                pluginMediaElement.paused = false;
                                pluginMediaElement.ended = true;
                                mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'ended');
                                break;
                        case 1:
                                pluginMediaElement.paused = false;
                                pluginMediaElement.ended = false;                                
                                mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'play');
                                mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'playing');
                                break;
                        case 2:
                                pluginMediaElement.paused = true;
                                pluginMediaElement.ended = false;                                
                                mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'pause');
                                break;
                        case 3: // buffering
                                mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'progress');
                                break;
                        case 5:
                                // cued?
                                break;                                                
                        
                }                        
                
        }
}
// IFRAME
function onYouTubePlayerAPIReady() {
        mejs.YouTubeApi.iFrameReady();
}
// FLASH
function onYouTubePlayerReady(id) {
        mejs.YouTubeApi.flashReady(id);
}

// Dailymotion API
mejs.DailymotionApi = {
    flashPlayers: {},
        createFlash: function(settings) {
                
                this.flashPlayers[settings.pluginId] = settings;
                
                var specialIEContainer,
                        dailymotionUrl = 'http://www.dailymotion.com/swf/' + settings.videoId  + '?chromeless=1&amp;enableApi=1&amp;playerapiid=' + settings.pluginId;
                        
                if (mejs.MediaFeatures.isIE) {
                        
                        specialIEContainer = document.createElement('div');
                        settings.container.appendChild(specialIEContainer);
                        specialIEContainer.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + settings.pluginId + '" width="' + settings.width + '" height="' + settings.height + '">' +
        '<param name="movie" value="' + dailymotionUrl + '" />' +
        '<param name="wmode" value="transparent" />' +
        '<param name="allowScriptAccess" value="always" />' +
        '<param name="allowFullScreen" value="true" />' +
'</object>';
                } else {
                settings.container.innerHTML = 
                        '<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="' + dailymotionUrl + '" ' +
                                'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; ">' +
                                '<param name="allowScriptAccess" value="always">' +
                                '<param name="wmode" value="transparent">' +
                                '<param name="allowFullScreen" value="true" />' +
                        '</object>';
                }
                
        },
    flashReady: function(id) {
        var 
            settings = this.flashPlayers[id],
            player = document.getElementById(id),
            pluginMediaElement = settings.pluginMediaElement;

        // hook up and return to MediaELementPlayer.success        
        pluginMediaElement.pluginApi = 
        pluginMediaElement.pluginElement = player;
        
        pluginMediaElement.pluginApi.setSrc = function(url){
            
            // get the Youtube or Dailymotion video ID
                    var videoId, newPluginType;
                    if(url.indexOf('youtu.be') != -1) {
                        videoId = url.substr(url.lastIndexOf('/')+1);
                        newPluginType = 'youtube';
                    } else if(url.indexOf('youtube.com') != -1) {
                        videoId = url.substr(url.lastIndexOf('=')+1);
                        newPluginType = 'youtube';
                    } else if(url.indexOf('dailymotion.com') != -1) {
                        videoId = url.substr(url.lastIndexOf('/')+1);
                        newPluginType = 'dailymotion';
                    }
                    
                    if(newPluginType == 'youtube'){
                        settings.videoId = videoId;
                        mejs.YouTubeApi.createFlash(settings);
                    } else {
                        this.cueVideoById(videoId);
                    }
        };
                
        mejs.MediaPluginBridge.initPlugin(id);

        // catch onStageChange events
        var callbackName = settings.containerId + '_onStateChangecallback';
        window[callbackName] = function(e) {
            mejs.DailymotionApi.handleStateChange(e, player, pluginMediaElement);
        }
        player.addEventListener('onStateChange', callbackName);

        // simulate timeupdate events
        setInterval(function() {
            mejs.DailymotionApi.createEvent(player, pluginMediaElement, 'timeupdate');
        }, 250);
        
        // catch ad start event
        callbackName = settings.containerId + '_onLinearAdStartcallback';
        window[callbackName] = function(e) {
            // ad starts : simulate a play event
            mejs.DailymotionApi.handleStateChange(1, player, pluginMediaElement);
        }
        player.addEventListener('onLinearAdStart', callbackName);
    },
    handleStateChange: function(dailymotionState, player, pluginMediaElement) {
        
                switch (dailymotionState) {
                        case -1: // not started
                                pluginMediaElement.paused = true;
                                pluginMediaElement.ended = true;
                                mejs.DailymotionApi.createEvent(player, pluginMediaElement, 'loadedmetadata');
                                break;
                        case 0:
                                pluginMediaElement.paused = false;
                                pluginMediaElement.ended = true;
                                mejs.DailymotionApi.createEvent(player, pluginMediaElement, 'ended');
                                break;
                        case 1:
                                pluginMediaElement.paused = false;
                                pluginMediaElement.ended = false;                                
                                mejs.DailymotionApi.createEvent(player, pluginMediaElement, 'play');
                                mejs.DailymotionApi.createEvent(player, pluginMediaElement, 'playing');
                                break;
                        case 2:
                                pluginMediaElement.paused = true;
                                pluginMediaElement.ended = false;                                
                                mejs.DailymotionApi.createEvent(player, pluginMediaElement, 'pause');
                                break;
                        case 3: // buffering
                                mejs.DailymotionApi.createEvent(player, pluginMediaElement, 'progress');
                                break;
                        case 5:
                                // cued?
                                break;                                                
                        
                }                        
                
        },
        
        createEvent: function (player, pluginMediaElement, eventName) {
                var obj = {
                        type: eventName,
                        target: pluginMediaElement
                };

                if (player && player.getDuration) {
                        
                        // time 
                        pluginMediaElement.currentTime = obj.currentTime = player.getCurrentTime();
                        pluginMediaElement.duration = obj.duration = player.getDuration();
                        
                        // state
                        obj.paused = pluginMediaElement.paused;
                        obj.ended = pluginMediaElement.ended;                        
                        
                        // sound
                        obj.muted = player.isMuted();
                        obj.volume = player.getVolume() / 100;
                        
                        // progress
                        obj.bytesTotal = player.getVideoBytesTotal();
                        obj.bufferedBytes = player.getVideoBytesLoaded();
                        
                        // fake the W3C buffered TimeRange
                        var bufferedTime = obj.bufferedBytes / obj.bytesTotal * obj.duration;
                        
                        obj.target.buffered = obj.buffered = {
                                start: function(index) {
                                        return 0;
                                },
                                end: function (index) {
                                        return bufferedTime;
                                },
                                length: 1
                        };
                        
                }
                
                // send event up the chain
                pluginMediaElement.dispatchEvent(obj.type, obj);
        }
}

function onDailymotionPlayerReady(playerId){
    mejs.DailymotionApi.flashReady(playerId);
}

window.mejs = mejs;
window.MediaElement = mejs.MediaElement;


/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2012, John Dyer (http://j.hn/)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
if (typeof jQuery != 'undefined') {
        mejs.$ = jQuery;
} else if (typeof ender != 'undefined') {
        mejs.$ = ender;
}
(function ($) {

        // default player values
        mejs.MepDefaults = {
                // url to poster (to fix iOS 3.x)
                poster: '',
                // default if the <video width> is not specified
                defaultVideoWidth: 480,
                // default if the <video height> is not specified
                defaultVideoHeight: 270,
                // if set, overrides <video width>
                videoWidth: -1,
                // if set, overrides <video height>
                videoHeight: -1,
                // default if the user doesn't specify
                defaultAudioWidth: 400,
                // default if the user doesn't specify
                defaultAudioHeight: 30,

                // default amount to move back when back key is pressed                
                defaultSeekBackwardInterval: function(media) {
                        return (media.duration * 0.05);
                },                
                // default amount to move forward when forward key is pressed                                
                defaultSeekForwardInterval: function(media) {
                        return (media.duration * 0.05);
                },                
                
                // width of audio player
                audioWidth: -1,
                // height of audio player
                audioHeight: -1,                
                // initial volume when the player starts (overrided by user cookie)
                startVolume: 0.8,
                // useful for <audio> player loops
                loop: false,
                // resize to media dimensions
                enableAutosize: true,
                // forces the hour marker (##:00:00)
                alwaysShowHours: false,

                // show framecount in timecode (##:00:00:00)
                showTimecodeFrameCount: false,
                // used when showTimecodeFrameCount is set to true
                framesPerSecond: 25,
                
                // automatically calculate the width of the progress bar based on the sizes of other elements
                autosizeProgress : true,
                // Hide controls when playing and mouse is not over the video
                alwaysShowControls: false,
                // force iPad's native controls
                iPadUseNativeControls: false,
                // force iPhone's native controls
                iPhoneUseNativeControls: false,        
                // force Android's native controls
                AndroidUseNativeControls: false,                        
                // features to show
                features: ['playpause','current','progress','duration','tracks','volume','fullscreen'],
                // only for dynamic
                isVideo: true,
                
                // turns keyboard support on and off for this instance
                enableKeyboard: true,
                
                // whenthis player starts, it will pause other players
                pauseOtherPlayers: true,
                
                // array of keyboard actions such as play pause
                keyActions: [
                                {
                                                keys: [
                                                                32, // SPACE
                                                                179 // GOOGLE play/pause button
                                                          ],
                                                action: function(player, media) {
                                                                if (media.paused || media.ended) {
                                                                                media.play();        
                                                                } else {
                                                                                media.pause();
                                                                }                                                                                
                                                }
                                },
                                {
                                                keys: [38], // UP
                                                action: function(player, media) {
                                                                var newVolume = Math.min(media.volume + 0.1, 1);
                                                                media.setVolume(newVolume);
                                                }
                                },
                                {
                                                keys: [40], // DOWN
                                                action: function(player, media) {
                                                                var newVolume = Math.max(media.volume - 0.1, 0);
                                                                media.setVolume(newVolume);
                                                }
                                },
                                {
                                                keys: [
                                                                37, // LEFT
                                                                227 // Google TV rewind
                                                ],
                                                action: function(player, media) {
                                                                if (!isNaN(media.duration) && media.duration > 0) {
                                                                                if (player.isVideo) {
                                                                                                player.showControls();
                                                                                                player.startControlsTimer();
                                                                                }
                                                                                
                                                                                // 5%
                                                                                var newTime = Math.max(media.currentTime - player.options.defaultSeekBackwardInterval(media), 0);
                                                                                media.setCurrentTime(newTime);
                                                                }
                                                }
                                },
                                {
                                                keys: [
                                                                39, // RIGHT
                                                                228 // Google TV forward
                                                ], 
                                                action: function(player, media) {
                                                                if (!isNaN(media.duration) && media.duration > 0) {
                                                                                if (player.isVideo) {
                                                                                                player.showControls();
                                                                                                player.startControlsTimer();
                                                                                }
                                                                                
                                                                                // 5%
                                                                                var newTime = Math.min(media.currentTime + player.options.defaultSeekForwardInterval(media), media.duration);                                                                                
                                                                                media.setCurrentTime(newTime);
                                                                }
                                                }
                                },
                                {
                                                keys: [70], // f
                                                action: function(player, media) {
                                                                if (typeof player.enterFullScreen != 'undefined') {
                                                                                if (player.isFullScreen) {
                                                                                                player.exitFullScreen();
                                                                                } else {
                                                                                                player.enterFullScreen();
                                                                                }
                                                                }
                                                }
                                }                                        
                ]                
        };

        mejs.mepIndex = 0;
        
        mejs.players = [];

        // wraps a MediaElement object in player controls
        mejs.MediaElementPlayer = function(node, o) {
                // enforce object, even without "new" (via John Resig)
                if ( !(this instanceof mejs.MediaElementPlayer) ) {
                        return new mejs.MediaElementPlayer(node, o);
                } 

                var t = this;
                
                // these will be reset after the MediaElement.success fires
                t.$media = t.$node = $(node);
                t.node = t.media = t.$media[0];                
                
                // check for existing player
                if (typeof t.node.player != 'undefined') {
                        return t.node.player;
                } else {
                        // attach player to DOM node for reference
                        t.node.player = t;
                }
                                
                                
                // try to get options from data-mejsoptions
                if (typeof o == 'undefined') {
                        o = t.$node.data('mejsoptions');        
                }
                        
                // extend default options
                t.options = $.extend({},mejs.MepDefaults,o);
                
                // add to player array (for focus events)
                mejs.players.push(t);
                
                // start up
                t.init();

                return t;
        };

        // actual player
        mejs.MediaElementPlayer.prototype = {
                
                hasFocus: false,
                
                controlsAreVisible: true,
                
                init: function() {

                        var
                                t = this,
                                mf = mejs.MediaFeatures,
                                // options for MediaElement (shim)
                                meOptions = $.extend(true, {}, t.options, {
                                        success: function(media, domNode) { t.meReady(media, domNode); },
                                        error: function(e) { t.handleError(e);}
                                }),
                                tagName = t.media.tagName.toLowerCase();
                
                        t.isDynamic = (tagName !== 'audio' && tagName !== 'video');
                        
                        if (t.isDynamic) {        
                                // get video from src or href?                                
                                t.isVideo = t.options.isVideo;                                                
                        } else {
                                t.isVideo = (tagName !== 'audio' && t.options.isVideo);
                        }
                
                        // use native controls in iPad, iPhone, and Android        
                        if ((mf.isiPad && t.options.iPadUseNativeControls) || (mf.isiPhone && t.options.iPhoneUseNativeControls)) {
                                
                                // add controls and stop
                                t.$media.attr('controls', 'controls');

                                // attempt to fix iOS 3 bug
                                //t.$media.removeAttr('poster');
                                // no Issue found on iOS3 -ttroxell

                                // override Apple's autoplay override for iPads
                                if (mf.isiPad && t.media.getAttribute('autoplay') !== null) {
                                        t.media.load();
                                        t.media.play();
                                }
                                        
                        } else if (mf.isAndroid && t.AndroidUseNativeControls) {
                                
                                // leave default player

                        } else {

                                // DESKTOP: use MediaElementPlayer controls
                                
                                // remove native controls                         
                                t.$media.removeAttr('controls');                                        
                                
                                // unique ID
                                t.id = 'mep_' + mejs.mepIndex++;

                                // build container
                                t.container =
                                        $('<div id="' + t.id + '" class="mejs-container">'+
                                                '<div class="mejs-inner">'+
                                                        '<div class="mejs-mediaelement"></div>'+
                                                        '<div class="mejs-layers"></div>'+
                                                        '<div class="mejs-controls"></div>'+
                                                        '<div class="mejs-clear"></div>'+
                                                '</div>' +
                                        '</div>')
                                        .addClass(t.$media[0].className)
                                        .insertBefore(t.$media);        
                                        
                                // add classes for user and content
                                t.container.addClass(
                                        (mf.isAndroid ? 'mejs-android ' : '') +
                                        (mf.isiOS ? 'mejs-ios ' : '') +
                                        (mf.isiPad ? 'mejs-ipad ' : '') +
                                        (mf.isiPhone ? 'mejs-iphone ' : '') +
                                        (t.isVideo ? 'mejs-video ' : 'mejs-audio ')
                                );        
                                        

                                // move the <video/video> tag into the right spot
                                if (mf.isiOS) {
                                
                                        // sadly, you can't move nodes in iOS, so we have to destroy and recreate it!
                                        var $newMedia = t.$media.clone();
                                        
                                        t.container.find('.mejs-mediaelement').append($newMedia);
                                        
                                        t.$media.remove();
                                        t.$node = t.$media = $newMedia;
                                        t.node = t.media = $newMedia[0]
                                        
                                } else {
                                        
                                        // normal way of moving it into place (doesn't work on iOS)
                                        t.container.find('.mejs-mediaelement').append(t.$media);
                                }
                                
                                // find parts
                                t.controls = t.container.find('.mejs-controls');
                                t.layers = t.container.find('.mejs-layers');

                                // determine the size
                                
                                /* size priority:
                                        (1) videoWidth (forced), 
                                        (2) style="width;height;"
                                        (3) width attribute,
                                        (4) defaultVideoWidth (for unspecified cases)
                                */
                                
                                var tagType = (t.isVideo ? 'video' : 'audio'),
                                        capsTagName = tagType.substring(0,1).toUpperCase() + tagType.substring(1);
                                        
                                
                                if (t.options[tagType + 'Width'] > 0 || t.options[tagType + 'Width'].toString().indexOf('%') > -1) {
                                        t.width = t.options[tagType + 'Width'];
                                } else if (t.media.style.width !== '' && t.media.style.width !== null) {
                                        t.width = t.media.style.width;                                                
                                } else if (t.media.getAttribute('width') !== null) {
                                        t.width = t.$media.attr('width');
                                } else {
                                        t.width = t.options['default' + capsTagName + 'Width'];
                                }
                                
                                if (t.options[tagType + 'Height'] > 0 || t.options[tagType + 'Height'].toString().indexOf('%') > -1) {
                                        t.height = t.options[tagType + 'Height'];
                                } else if (t.media.style.height !== '' && t.media.style.height !== null) {
                                        t.height = t.media.style.height;
                                } else if (t.$media[0].getAttribute('height') !== null) {
                                        t.height = t.$media.attr('height');        
                                } else {
                                        t.height = t.options['default' + capsTagName + 'Height'];
                                }

                                // set the size, while we wait for the plugins to load below
                                t.setPlayerSize(t.width, t.height);
                                
                                // create MediaElementShim
                                meOptions.pluginWidth = t.height;
                                meOptions.pluginHeight = t.width;                                
                        }
                        
                        

                        // create MediaElement shim
                        mejs.MediaElement(t.$media[0], meOptions);
                },
                
                showControls: function(doAnimation) {
                        var t = this;
                        
                        doAnimation = typeof doAnimation == 'undefined' || doAnimation;
                        
                        if (t.controlsAreVisible)
                                return;
                        
                        if (doAnimation) {
                                t.controls
                                        .css('visibility','visible')
                                        .stop(true, true).fadeIn(200, function() {t.controlsAreVisible = true;});        
        
                                // any additional controls people might add and want to hide
                                t.container.find('.mejs-control')
                                        .css('visibility','visible')
                                        .stop(true, true).fadeIn(200, function() {t.controlsAreVisible = true;});        
                                        
                        } else {
                                t.controls
                                        .css('visibility','visible')
                                        .css('display','block');
        
                                // any additional controls people might add and want to hide
                                t.container.find('.mejs-control')
                                        .css('visibility','visible')
                                        .css('display','block');
                                        
                                t.controlsAreVisible = true;
                        }
                        
                        t.setControlsSize();
                        
                },

                hideControls: function(doAnimation) {
                        var t = this;
                        
                        doAnimation = typeof doAnimation == 'undefined' || doAnimation;
                        
                        if (!t.controlsAreVisible)
                                return;
                        
                        if (doAnimation) {
                                // fade out main controls
                                t.controls.stop(true, true).fadeOut(200, function() {
                                        $(this)
                                                .css('visibility','hidden')
                                                .css('display','block');
                                                
                                        t.controlsAreVisible = false;
                                });        
        
                                // any additional controls people might add and want to hide
                                t.container.find('.mejs-control').stop(true, true).fadeOut(200, function() {
                                        $(this)
                                                .css('visibility','hidden')
                                                .css('display','block');
                                });        
                        } else {
                                
                                // hide main controls
                                t.controls
                                        .css('visibility','hidden')
                                        .css('display','block');                
                                
                                // hide others
                                t.container.find('.mejs-control')
                                        .css('visibility','hidden')
                                        .css('display','block');
                                        
                                t.controlsAreVisible = false;
                        }
                },                

                controlsTimer: null,

                startControlsTimer: function(timeout) {

                        var t = this;
                        
                        timeout = typeof timeout != 'undefined' ? timeout : 1500;

                        t.killControlsTimer('start');

                        t.controlsTimer = setTimeout(function() {
                                //console.log('timer fired');
                                t.hideControls();
                                t.killControlsTimer('hide');
                        }, timeout);
                },

                killControlsTimer: function(src) {

                        var t = this;

                        if (t.controlsTimer !== null) {
                                clearTimeout(t.controlsTimer);
                                delete t.controlsTimer;
                                t.controlsTimer = null;
                        }
                },                
                
                controlsEnabled: true,
                
                disableControls: function() {
                        var t= this;
                        
                        t.killControlsTimer();
                        t.hideControls(false);
                        this.controlsEnabled = false;
                },
                
                enableControls: function() {
                        var t= this;
                        
                        t.showControls(false);
                        
                        t.controlsEnabled = true;
                },                
                

                // Sets up all controls and events
                meReady: function(media, domNode) {                        
                
                
                        var t = this,
                                mf = mejs.MediaFeatures,
                                autoplayAttr = domNode.getAttribute('autoplay'),
                                autoplay = !(typeof autoplayAttr == 'undefined' || autoplayAttr === null || autoplayAttr === 'false'),
                                featureIndex,
                                feature;

                        // make sure it can't create itself again if a plugin reloads
                        if (t.created)
                                return;
                        else
                                t.created = true;                        

                        t.media = media;
                        t.domNode = domNode;
                        
                        if (!(mf.isAndroid && t.options.AndroidUseNativeControls) && !(mf.isiPad && t.options.iPadUseNativeControls) && !(mf.isiPhone && t.options.iPhoneUseNativeControls)) {                                
                                
                                // two built in features
                                t.buildposter(t, t.controls, t.layers, t.media);
                                t.buildkeyboard(t, t.controls, t.layers, t.media);
                                t.buildoverlays(t, t.controls, t.layers, t.media);

                                // grab for use by features
                                t.findTracks();

                                // add user-defined features/controls
                                for (featureIndex in t.options.features) {
                                        feature = t.options.features[featureIndex];
                                        if (t['build' + feature]) {
                                                try {
                                                        t['build' + feature](t, t.controls, t.layers, t.media);
                                                } catch (e) {
                                                        // TODO: report control error
                                                        //throw e;
                                                        //console.log('error building ' + feature);
                                                        //console.log(e);
                                                }
                                        }
                                }

                                t.container.trigger('controlsready');
                                
                                // reset all layers and controls
                                t.setPlayerSize(t.width, t.height);
                                t.setControlsSize();
                                

                                // controls fade
                                if (t.isVideo) {
                                
                                        if (mejs.MediaFeatures.hasTouch) {
                                                
                                                // for touch devices (iOS, Android)
                                                // show/hide without animation on touch
                                                
                                                t.$media.bind('touchstart', function() {
                                                        
                                                        
                                                        // toggle controls
                                                        if (t.controlsAreVisible) {
                                                                t.hideControls(false);
                                                        } else {
                                                                if (t.controlsEnabled) {
                                                                        t.showControls(false);
                                                                }
                                                        }
                                                });                                        
                                        
                                        } else {
                                                // click controls
                                                var clickElement = (t.media.pluginType == 'native') ? t.$media : $(t.media.pluginElement);
                                                
                                                if(t.media.pluginType != 'dailymotion') { // fires an exception on IE with dailymotion
                                                    clickElement.click(function() {
                                                            if (media.paused) {
                                                                    media.play();
                                                            } else {
                                                                    media.pause();
                                                            }
                                                    });
                                                }
                                        
                                                // show/hide controls
                                                t.container
                                                        .bind('mouseenter mouseover', function () {
                                                                if (t.controlsEnabled) {
                                                                        if (!t.options.alwaysShowControls) {                                                                
                                                                                t.killControlsTimer('enter');
                                                                                t.showControls();
                                                                                t.startControlsTimer(2500);                
                                                                        }
                                                                }
                                                        })
                                                        .bind('mousemove', function() {
                                                                if (t.controlsEnabled) {
                                                                        if (!t.controlsAreVisible) {
                                                                                t.showControls();
                                                                        }
                                                                        //t.killControlsTimer('move');
                                                                        if (!t.options.alwaysShowControls) {
                                                                                t.startControlsTimer(2500);
                                                                        }
                                                                }
                                                        })
                                                        .bind('mouseleave', function () {
                                                                if (t.controlsEnabled) {
                                                                        if (!t.media.paused && !t.options.alwaysShowControls) {
                                                                                t.startControlsTimer(1000);                                                                
                                                                        }
                                                                }
                                                        });
                                        }
                                        
                                        // check for autoplay
                                        if (autoplay && !t.options.alwaysShowControls) {
                                                t.hideControls();
                                        }

                                        // resizer
                                        if (t.options.enableAutosize) {
                                                t.media.addEventListener('loadedmetadata', function(e) {
                                                        // if the <video height> was not set and the options.videoHeight was not set
                                                        // then resize to the real dimensions
                                                        if (t.options.videoHeight <= 0 && t.domNode.getAttribute('height') === null && !isNaN(e.target.videoHeight)) {
                                                                t.setPlayerSize(e.target.videoWidth, e.target.videoHeight);
                                                                t.setControlsSize();
                                                                t.media.setVideoSize(e.target.videoWidth, e.target.videoHeight);
                                                        }
                                                }, false);
                                        }
                                }
                                
                                // EVENTS

                                // FOCUS: when a video starts playing, it takes focus from other players (possibily pausing them)
                                media.addEventListener('play', function() {
                                                
                                                // go through all other players
                                                for (var i=0, il=mejs.players.length; i<il; i++) {
                                                        var p = mejs.players[i];
                                                        if (p.id != t.id && t.options.pauseOtherPlayers && !p.paused && !p.ended) {
                                                                p.pause();
                                                        }
                                                        p.hasFocus = false;
                                                }
                                                
                                                t.hasFocus = true;
                                },false);
                                                                

                                // ended for all
                                t.media.addEventListener('ended', function (e) {
                                        try{
                                                t.media.setCurrentTime(0);
                                        } catch (exp) {
                                                
                                        }
                                        t.media.pause();
                                        
                                        if (t.setProgressRail)
                                                t.setProgressRail();
                                        if (t.setCurrentRail)
                                                t.setCurrentRail();                                                

                                        if (t.options.loop) {
                                                t.media.play();
                                        } else if (!t.options.alwaysShowControls && t.controlsEnabled) {
                                                t.showControls();
                                        }
                                }, false);
                                
                                // resize on the first play
                                t.media.addEventListener('loadedmetadata', function(e) {
                                        if (t.updateDuration) {
                                                t.updateDuration();
                                        }
                                        if (t.updateCurrent) {
                                                t.updateCurrent();
                                        }
                                        
                                        if (!t.isFullScreen) {
                                                t.setPlayerSize(t.width, t.height);
                                                t.setControlsSize();
                                        }
                                }, false);


                                // webkit has trouble doing this without a delay
                                setTimeout(function () {
                                        t.setPlayerSize(t.width, t.height);
                                        t.setControlsSize();
                                }, 50);
                                
                                // adjust controls whenever window sizes (used to be in fullscreen only)
                                $(window).resize(function() {
                                        
                                        // don't resize for fullscreen mode                                
                                        if ( !(t.isFullScreen || (mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen)) ) {
                                                t.setPlayerSize(t.width, t.height);
                                        }
                                        
                                        // always adjust controls
                                        t.setControlsSize();
                                });                                

                                // TEMP: needs to be moved somewhere else
                                if (t.media.pluginType == 'youtube') {
                                        t.container.find('.mejs-overlay-play').hide();        
                                }
                        }
                        
                        // force autoplay for HTML5
                        if (autoplay && media.pluginType == 'native') {
                                media.load();
                                media.play();
                        }


                        if (t.options.success) {
                                
                                if (typeof t.options.success == 'string') {
                                                window[t.options.success](t.media, t.domNode, t);
                                } else {
                                                t.options.success(t.media, t.domNode, t);
                                }
                        }
                },

                handleError: function(e) {
                        var t = this;
                        
                        t.controls.hide();
                
                        // Tell user that the file cannot be played
                        if (t.options.error) {
                                t.options.error(e);
                        }
                },

                setPlayerSize: function(width,height) {
                        var t = this;

                        if (typeof width != 'undefined')
                                t.width = width;
                                
                        if (typeof height != 'undefined')
                                t.height = height;

                        // detect 100% mode
                        if (t.height.toString().indexOf('%') > 0 || t.$node.css('max-width') === '100%') {
                        
                                // do we have the native dimensions yet?
                                var 
                                        nativeWidth = (t.media.videoWidth && t.media.videoWidth > 0) ? t.media.videoWidth : t.options.defaultVideoWidth,
                                        nativeHeight = (t.media.videoHeight && t.media.videoHeight > 0) ? t.media.videoHeight : t.options.defaultVideoHeight,
                                        parentWidth = t.container.parent().width(),
                                        newHeight = parseInt(parentWidth * nativeHeight/nativeWidth, 10);
                                        
                                if (t.container.parent()[0].tagName.toLowerCase() === 'body') { // && t.container.siblings().count == 0) {
                                        parentWidth = $(window).width();
                                        newHeight = $(window).height();
                                }
                                
                                if ( newHeight != 0 ) {
                                        // set outer container size
                                        t.container
                                                .width(parentWidth)
                                                .height(newHeight);
                                                
                                        // set native <video>
                                        t.$media
                                                .width('100%')
                                                .height('100%');
                                                
                                        // set shims
                                        t.container.find('object, embed, iframe')
                                                .width('100%')
                                                .height('100%');
                                                
                                        // if shim is ready, send the size to the embeded plugin        
                                        if (t.isVideo) {
                                                if (t.media.setVideoSize) {
                                                        t.media.setVideoSize(parentWidth, newHeight);
                                                }
                                        }
                                        
                                        // set the layers
                                        t.layers.children('.mejs-layer')
                                                .width('100%')
                                                .height('100%');
                                }
                        
                        
                        } else {

                                t.container
                                        .width(t.width)
                                        .height(t.height);
        
                                t.layers.children('.mejs-layer')
                                        .width(t.width)
                                        .height(t.height);
                                        
                        }
                },

                setControlsSize: function() {
                        var t = this,
                                usedWidth = 0,
                                railWidth = 0,
                                rail = t.controls.find('.mejs-time-rail'),
                                total = t.controls.find('.mejs-time-total'),
                                current = t.controls.find('.mejs-time-current'),
                                loaded = t.controls.find('.mejs-time-loaded'),
                                others = rail.siblings();
                        

                        // allow the size to come from custom CSS
                        if (t.options && !t.options.autosizeProgress) {
                                // Also, frontends devs can be more flexible 
                                // due the opportunity of absolute positioning.
                                railWidth = parseInt(rail.css('width'));
                        }
                        
                        // attempt to autosize
                        if (railWidth === 0 || !railWidth) {
                                
                                // find the size of all the other controls besides the rail
                                others.each(function() {
                                        if ($(this).css('position') != 'absolute') {
                                                usedWidth += $(this).outerWidth(true);
                                        }
                                });
                                
                                // fit the rail into the remaining space
                                railWidth = t.controls.width() - usedWidth - (rail.outerWidth(true) - rail.width());
                        }

                        // outer area
                        rail.width(railWidth);
                        // dark space
                        total.width(railWidth - (total.outerWidth(true) - total.width()));
                        
                        if (t.setProgressRail)
                                t.setProgressRail();
                        if (t.setCurrentRail)
                                t.setCurrentRail();                                
                },


                buildposter: function(player, controls, layers, media) {
                        var t = this,
                                poster = 
                                $('<div class="mejs-poster mejs-layer">' +
                                '</div>')
                                        .appendTo(layers),
                                posterUrl = player.$media.attr('poster');

                        // prioriy goes to option (this is useful if you need to support iOS 3.x (iOS completely fails with poster)
                        if (player.options.poster !== '') {
                                posterUrl = player.options.poster;
                        }        
                                
                        // second, try the real poster
                        if (posterUrl !== '' && posterUrl != null) {
                                t.setPoster(posterUrl);
                        } else {
                                poster.hide();
                        }

                        media.addEventListener('play',function() {
                                poster.hide();
                        }, false);
                },
                
                setPoster: function(url) {
                        var t = this,
                                posterDiv = t.container.find('.mejs-poster'),
                                posterImg = posterDiv.find('img');
                                
                        if (posterImg.length == 0) {
                                posterImg = $('<img width="100%" height="100%" />').appendTo(posterDiv);
                        }        
                        
                        posterImg.attr('src', url);
                },

                buildoverlays: function(player, controls, layers, media) {
                        if (!player.isVideo)
                                return;

                        var 
                        loading = 
                                $('<div class="mejs-overlay mejs-layer">'+
                                        '<div class="mejs-overlay-loading"><span></span></div>'+
                                '</div>')
                                .hide() // start out hidden
                                .appendTo(layers),
                        error = 
                                $('<div class="mejs-overlay mejs-layer">'+
                                        '<div class="mejs-overlay-error"></div>'+
                                '</div>')
                                .hide() // start out hidden
                                .appendTo(layers),
                        // this needs to come last so it's on top
                        bigPlay = 
                                $('<div class="mejs-overlay mejs-layer mejs-overlay-play">'+
                                        '<div class="mejs-overlay-button"></div>'+
                                '</div>')
                                .appendTo(layers)
                                .click(function() {
                                        if (media.paused) {
                                                media.play();
                                        } else {
                                                media.pause();
                                        }
                                });
                        
                        /*
                        if (mejs.MediaFeatures.isiOS || mejs.MediaFeatures.isAndroid) {
                                bigPlay.remove();
                                loading.remove();
                        }
                        */
        

                        // show/hide big play button
                        media.addEventListener('play',function() {
                                bigPlay.hide();
                                loading.hide();
                                controls.find('.mejs-time-buffering').hide();
                                error.hide();
                        }, false);        
                        
                        media.addEventListener('playing', function() {
                                bigPlay.hide();
                                loading.hide();
                                controls.find('.mejs-time-buffering').hide();
                                error.hide();                        
                        }, false);

                        media.addEventListener('seeking', function() {
                                loading.show();
                                controls.find('.mejs-time-buffering').show();
                        }, false);

                        media.addEventListener('seeked', function() {
                                loading.hide();
                                controls.find('.mejs-time-buffering').hide();
                        }, false);
        
                        media.addEventListener('pause',function() {
                                if (!mejs.MediaFeatures.isiPhone) {
                                        bigPlay.show();
                                }
                        }, false);
                        
                        media.addEventListener('waiting', function() {
                                loading.show();        
                                controls.find('.mejs-time-buffering').show();
                        }, false);                        
                        
                        
                        // show/hide loading                        
                        media.addEventListener('loadeddata',function() {
                                // for some reason Chrome is firing this event
                                //if (mejs.MediaFeatures.isChrome && media.getAttribute && media.getAttribute('preload') === 'none')
                                //        return;
                                        
                                loading.show();
                                controls.find('.mejs-time-buffering').show();
                        }, false);        
                        media.addEventListener('canplay',function() {
                                loading.hide();
                                controls.find('.mejs-time-buffering').hide();
                        }, false);        

                        // error handling
                        media.addEventListener('error',function() {
                                loading.hide();
                                controls.find('.mejs-time-buffering').hide();
                                error.show();
                                error.find('mejs-overlay-error').html("Error loading this resource");
                        }, false);                                
                },
                
                buildkeyboard: function(player, controls, layers, media) {

                                var t = this;
                                
                                // listen for key presses
                                $(document).keydown(function(e) {
                                                
                                                if (player.hasFocus && player.options.enableKeyboard) {
                                                                                
                                                                // find a matching key
                                                                for (var i=0, il=player.options.keyActions.length; i<il; i++) {
                                                                                var keyAction = player.options.keyActions[i];
                                                                                
                                                                                for (var j=0, jl=keyAction.keys.length; j<jl; j++) {
                                                                                                if (e.keyCode == keyAction.keys[j]) {
                                                                                                                e.preventDefault();
                                                                                                                keyAction.action(player, media, e.keyCode);
                                                                                                                return false;
                                                                                                }                                                                                                
                                                                                }
                                                                }
                                                }
                                                
                                                return true;
                                });
                                
                                // check if someone clicked outside a player region, then kill its focus
                                $(document).click(function(event) {
                                                if ($(event.target).closest('.mejs-container').length == 0) {
                                                                player.hasFocus = false;
                                                }
                                });
                        
                },

                findTracks: function() {
                        var t = this,
                                tracktags = t.$media.find('track');

                        // store for use by plugins
                        t.tracks = [];
                        tracktags.each(function(index, track) {
                                
                                track = $(track);
                                
                                t.tracks.push({
                                        srclang: track.attr('srclang').toLowerCase(),
                                        src: track.attr('src'),
                                        kind: track.attr('kind'),
                                        label: track.attr('label') || '',
                                        entries: [],
                                        isLoaded: false
                                });
                        });
                },
                changeSkin: function(className) {
                        this.container[0].className = 'mejs-container ' + className;
                        this.setPlayerSize(this.width, this.height);
                        this.setControlsSize();
                },
                play: function() {
                        this.media.play();
                },
                pause: function() {
                        this.media.pause();
                },
                load: function() {
                        this.media.load();
                },
                setMuted: function(muted) {
                        this.media.setMuted(muted);
                },
                setCurrentTime: function(time) {
                        this.media.setCurrentTime(time);
                },
                getCurrentTime: function() {
                        return this.media.currentTime;
                },
                setVolume: function(volume) {
                        this.media.setVolume(volume);
                },
                getVolume: function() {
                        return this.media.volume;
                },
                setSrc: function(src) {
                        this.media.setSrc(src);
                },
                remove: function() {
                        var t = this;
                        
                        if (t.media.pluginType === 'flash') {
                                t.media.remove();
                        } else if (t.media.pluginType === 'native') {
                                t.$media.prop('controls', true);
                        }
                        
                        // grab video and put it back in place
                        if (!t.isDynamic) {
                                t.$node.insertBefore(t.container)
                        }
                        
                        t.container.remove();
                }
        };

        // turn into jQuery plugin
        if (typeof jQuery != 'undefined') {
                jQuery.fn.mediaelementplayer = function (options) {
                        return this.each(function () {
                                new mejs.MediaElementPlayer(this, options);
                        });
                };
        }
        
        $(document).ready(function() {
                // auto enable using JSON attribute
                $('.mejs-player').mediaelementplayer();
        });
        
        // push out to window
        window.MediaElementPlayer = mejs.MediaElementPlayer;

})(mejs.$);

(function($) {

        $.extend(mejs.MepDefaults, {
                playpauseText: 'Play/Pause'
        });

        // PLAY/pause BUTTON
        $.extend(MediaElementPlayer.prototype, {
                buildplaypause: function(player, controls, layers, media) {
                        var 
                                t = this,
                                play = 
                                $('<div class="mejs-button mejs-playpause-button mejs-play" >' +
                                        '<button type="button" aria-controls="' + t.id + '" title="' + t.options.playpauseText + '"></button>' +
                                '</div>')
                                .appendTo(controls)
                                .click(function(e) {
                                        e.preventDefault();
                                
                                        if (media.paused) {
                                                media.play();
                                        } else {
                                                media.pause();
                                        }
                                        
                                        return false;
                                });

                        media.addEventListener('play',function() {
                                play.removeClass('mejs-play').addClass('mejs-pause');
                        }, false);
                        media.addEventListener('playing',function() {
                                play.removeClass('mejs-play').addClass('mejs-pause');
                        }, false);


                        media.addEventListener('pause',function() {
                                play.removeClass('mejs-pause').addClass('mejs-play');
                        }, false);
                        media.addEventListener('paused',function() {
                                play.removeClass('mejs-pause').addClass('mejs-play');
                        }, false);
                }
        });
        
})(mejs.$);
(function($) {

        $.extend(mejs.MepDefaults, {
                stopText: 'Stop'
        });

        // STOP BUTTON
        $.extend(MediaElementPlayer.prototype, {
                buildstop: function(player, controls, layers, media) {
                        var t = this,
                                stop = 
                                $('<div class="mejs-button mejs-stop-button mejs-stop">' +
                                        '<button type="button" aria-controls="' + t.id + '" title="' + t.options.stopText + '"></button>' +
                                '</div>')
                                .appendTo(controls)
                                .click(function() {
                                        if (!media.paused) {
                                                media.pause();
                                        }
                                        if (media.currentTime > 0) {
                                                media.setCurrentTime(0);        
                                                controls.find('.mejs-time-current').width('0px');
                                                controls.find('.mejs-time-handle').css('left', '0px');
                                                controls.find('.mejs-time-float-current').html( mejs.Utility.secondsToTimeCode(0) );
                                                controls.find('.mejs-currenttime').html( mejs.Utility.secondsToTimeCode(0) );                                        
                                                layers.find('.mejs-poster').show();
                                        }
                                });
                }
        });
        
})(mejs.$);
(function($) {
        // progress/loaded bar
        $.extend(MediaElementPlayer.prototype, {
                buildprogress: function(player, controls, layers, media) {

                        $('<div class="mejs-time-rail">'+
                                '<span class="mejs-time-total">'+
                                        '<span class="mejs-time-buffering"></span>'+
                                        '<span class="mejs-time-loaded"></span>'+
                                        '<span class="mejs-time-current"></span>'+
                                        '<span class="mejs-time-handle"></span>'+
                                        '<span class="mejs-time-float">' + 
                                                '<span class="mejs-time-float-current">00:00</span>' + 
                                                '<span class="mejs-time-float-corner"></span>' + 
                                        '</span>'+
                                '</span>'+
                        '</div>')
                                .appendTo(controls);
                                controls.find('.mejs-time-buffering').hide();

                        var 
                                t = this,
                                total = controls.find('.mejs-time-total'),
                                loaded  = controls.find('.mejs-time-loaded'),
                                current  = controls.find('.mejs-time-current'),
                                handle  = controls.find('.mejs-time-handle'),
                                timefloat  = controls.find('.mejs-time-float'),
                                timefloatcurrent  = controls.find('.mejs-time-float-current'),
                                handleMouseMove = function (e) {
                                        // mouse position relative to the object
                                        var x = e.pageX,
                                                offset = total.offset(),
                                                width = total.outerWidth(),
                                                percentage = 0,
                                                newTime = 0,
                                                pos = x - offset.left;


                                        if (x > offset.left && x <= width + offset.left && media.duration) {
                                                percentage = ((x - offset.left) / width);
                                                newTime = (percentage <= 0.02) ? 0 : percentage * media.duration;

                                                // seek to where the mouse is
                                                if (mouseIsDown) {
                                                        media.setCurrentTime(newTime);
                                                }

                                                // position floating time box
                                                if (!mejs.MediaFeatures.hasTouch) {
                                                                timefloat.css('left', pos);
                                                                timefloatcurrent.html( mejs.Utility.secondsToTimeCode(newTime) );
                                                                timefloat.show();
                                                }
                                        }
                                },
                                mouseIsDown = false,
                                mouseIsOver = false;

                        // handle clicks
                        //controls.find('.mejs-time-rail').delegate('span', 'click', handleMouseMove);
                        total
                                .bind('mousedown', function (e) {
                                        // only handle left clicks
                                        if (e.which === 1) {
                                                mouseIsDown = true;
                                                handleMouseMove(e);
                                                $(document)
                                                        .bind('mousemove.dur', function(e) {
                                                                handleMouseMove(e);
                                                        })
                                                        .bind('mouseup.dur', function (e) {
                                                                mouseIsDown = false;
                                                                timefloat.hide();
                                                                $(document).unbind('.dur');
                                                        });
                                                return false;
                                        }
                                })
                                .bind('mouseenter', function(e) {
                                        mouseIsOver = true;
                                        $(document).bind('mousemove.dur', function(e) {
                                                handleMouseMove(e);
                                        });
                                        if (!mejs.MediaFeatures.hasTouch) {
                                                timefloat.show();
                                        }
                                })
                                .bind('mouseleave',function(e) {
                                        mouseIsOver = false;
                                        if (!mouseIsDown) {
                                                $(document).unbind('.dur');
                                                timefloat.hide();
                                        }
                                });

                        // loading
                        media.addEventListener('progress', function (e) {
                                player.setProgressRail(e);
                                player.setCurrentRail(e);
                        }, false);

                        // current time
                        media.addEventListener('timeupdate', function(e) {
                                player.setProgressRail(e);
                                player.setCurrentRail(e);
                        }, false);
                        
                        
                        // store for later use
                        t.loaded = loaded;
                        t.total = total;
                        t.current = current;
                        t.handle = handle;
                },
                setProgressRail: function(e) {

                        var
                                t = this,
                                target = (e != undefined) ? e.target : t.media,
                                percent = null;                        

                        // newest HTML5 spec has buffered array (FF4, Webkit)
                        if (target && target.buffered && target.buffered.length > 0 && target.buffered.end && target.duration) {
                                // TODO: account for a real array with multiple values (only Firefox 4 has this so far) 
                                percent = target.buffered.end(0) / target.duration;
                        } 
                        // Some browsers (e.g., FF3.6 and Safari 5) cannot calculate target.bufferered.end()
                        // to be anything other than 0. If the byte count is available we use this instead.
                        // Browsers that support the else if do not seem to have the bufferedBytes value and
                        // should skip to there. Tested in Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8.
                        else if (target && target.bytesTotal != undefined && target.bytesTotal > 0 && target.bufferedBytes != undefined) {
                                percent = target.bufferedBytes / target.bytesTotal;
                        }
                        // Firefox 3 with an Ogg file seems to go this way
                        else if (e && e.lengthComputable && e.total != 0) {
                                percent = e.loaded/e.total;
                        }

                        // finally update the progress bar
                        if (percent !== null) {
                                percent = Math.min(1, Math.max(0, percent));
                                // update loaded bar
                                if (t.loaded && t.total) {
                                        t.loaded.width(t.total.width() * percent);
                                }
                        }
                },
                setCurrentRail: function() {

                        var t = this;
                
                        if (t.media.currentTime != undefined && t.media.duration) {

                                // update bar and handle
                                if (t.total && t.handle) {
                                        var 
                                                newWidth = t.total.width() * t.media.currentTime / t.media.duration,
                                                handlePos = newWidth - (t.handle.outerWidth(true) / 2);

                                        t.current.width(newWidth);
                                        t.handle.css('left', handlePos);
                                }
                        }

                }        
        });
})(mejs.$);
(function($) {
        
        // options
        $.extend(mejs.MepDefaults, {
                duration: -1,
                timeAndDurationSeparator: ' <span> | </span> '
        });


        // current and duration 00:00 / 00:00
        $.extend(MediaElementPlayer.prototype, {
                buildcurrent: function(player, controls, layers, media) {
                        var t = this;
                        
                        $('<div class="mejs-time">'+
                                        '<span class="mejs-currenttime">' + (player.options.alwaysShowHours ? '00:' : '')
                                        + (player.options.showTimecodeFrameCount? '00:00:00':'00:00')+ '</span>'+
                                        '</div>')
                                        .appendTo(controls);
                        
                        t.currenttime = t.controls.find('.mejs-currenttime');

                        media.addEventListener('timeupdate',function() {
                                player.updateCurrent();
                        }, false);
                },


                buildduration: function(player, controls, layers, media) {
                        var t = this;
                        
                        if (controls.children().last().find('.mejs-currenttime').length > 0) {
                                $(t.options.timeAndDurationSeparator +
                                        '<span class="mejs-duration">' + 
                                                (t.options.duration > 0 ? 
                                                        mejs.Utility.secondsToTimeCode(t.options.duration, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount,  t.options.framesPerSecond || 25) :
                                                           ((player.options.alwaysShowHours ? '00:' : '') + (player.options.showTimecodeFrameCount? '00:00:00':'00:00')) 
                                                   ) + 
                                        '</span>')
                                        .appendTo(controls.find('.mejs-time'));
                        } else {

                                // add class to current time
                                controls.find('.mejs-currenttime').parent().addClass('mejs-currenttime-container');
                                
                                $('<div class="mejs-time mejs-duration-container">'+
                                        '<span class="mejs-duration">' + 
                                                (t.options.duration > 0 ? 
                                                        mejs.Utility.secondsToTimeCode(t.options.duration, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount,  t.options.framesPerSecond || 25) :
                                                           ((player.options.alwaysShowHours ? '00:' : '') + (player.options.showTimecodeFrameCount? '00:00:00':'00:00')) 
                                                   ) + 
                                        '</span>' +
                                '</div>')
                                .appendTo(controls);
                        }
                        
                        t.durationD = t.controls.find('.mejs-duration');

                        media.addEventListener('timeupdate',function() {
                                player.updateDuration();
                        }, false);
                },
                
                updateCurrent:  function() {
                        var t = this;

                        if (t.currenttime) {
                                t.currenttime.html(mejs.Utility.secondsToTimeCode(t.media.currentTime, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount,  t.options.framesPerSecond || 25));
                        }
                },
                
                updateDuration: function() {        
                        var t = this;
                        
                        if (t.media.duration && t.durationD) {
                                t.durationD.html(mejs.Utility.secondsToTimeCode(t.media.duration, t.options.alwaysShowHours, t.options.showTimecodeFrameCount, t.options.framesPerSecond || 25));
                        }                
                }
        });

})(mejs.$);
(function($) {

        $.extend(mejs.MepDefaults, {
                muteText: 'Mute Toggle',
                hideVolumeOnTouchDevices: true,
                
                audioVolume: 'horizontal',
                videoVolume: 'vertical'
        });

        $.extend(MediaElementPlayer.prototype, {
                buildvolume: function(player, controls, layers, media) {
                                
                        // Android and iOS don't support volume controls
                        if (mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)
                                return;
                        
                        var t = this,
                                mode = (t.isVideo) ? t.options.videoVolume : t.options.audioVolume,
                                mute = (mode == 'horizontal') ?
                                
                                // horizontal version
                                $('<div class="mejs-button mejs-volume-button mejs-mute">'+
                                        '<button type="button" aria-controls="' + t.id + '" title="' + t.options.muteText + '"></button>'+
                                '</div>' +
                                '<div class="mejs-horizontal-volume-slider">'+ // outer background
                                        '<div class="mejs-horizontal-volume-total"></div>'+ // line background
                                        '<div class="mejs-horizontal-volume-current"></div>'+ // current volume
                                        '<div class="mejs-horizontal-volume-handle"></div>'+ // handle
                                '</div>'
                                )
                                        .appendTo(controls) :
                                
                                // vertical version
                                $('<div class="mejs-button mejs-volume-button mejs-mute">'+
                                        '<button type="button" aria-controls="' + t.id + '" title="' + t.options.muteText + '"></button>'+
                                        '<div class="mejs-volume-slider">'+ // outer background
                                                '<div class="mejs-volume-total"></div>'+ // line background
                                                '<div class="mejs-volume-current"></div>'+ // current volume
                                                '<div class="mejs-volume-handle"></div>'+ // handle
                                        '</div>'+
                                '</div>')
                                        .appendTo(controls),
                        volumeSlider = t.container.find('.mejs-volume-slider, .mejs-horizontal-volume-slider'),
                        volumeTotal = t.container.find('.mejs-volume-total, .mejs-horizontal-volume-total'),
                        volumeCurrent = t.container.find('.mejs-volume-current, .mejs-horizontal-volume-current'),
                        volumeHandle = t.container.find('.mejs-volume-handle, .mejs-horizontal-volume-handle'),

                        positionVolumeHandle = function(volume, secondTry) {

                                if (!volumeSlider.is(':visible') && typeof secondTry != 'undefined') {
                                        volumeSlider.show();
                                        positionVolumeHandle(volume, true);
                                        volumeSlider.hide()
                                        return;
                                }
                        
                                // correct to 0-1
                                volume = Math.max(0,volume);
                                volume = Math.min(volume,1);                                        
                                
                                // ajust mute button style
                                if (volume == 0) {
                                        mute.removeClass('mejs-mute').addClass('mejs-unmute');
                                } else {
                                        mute.removeClass('mejs-unmute').addClass('mejs-mute');
                                }                                

                                // position slider 
                                if (mode == 'vertical') {
                                        var 
                                        
                                                // height of the full size volume slider background
                                                totalHeight = volumeTotal.height(),
                                                
                                                // top/left of full size volume slider background
                                                totalPosition = volumeTotal.position(),
                                                
                                                // the new top position based on the current volume
                                                // 70% volume on 100px height == top:30px
                                                newTop = totalHeight - (totalHeight * volume);
        
                                        // handle
                                        volumeHandle.css('top', totalPosition.top + newTop - (volumeHandle.height() / 2));
        
                                        // show the current visibility
                                        volumeCurrent.height(totalHeight - newTop );
                                        volumeCurrent.css('top', totalPosition.top + newTop);
                                } else {
                                        var 
                                        
                                                // height of the full size volume slider background
                                                totalWidth = volumeTotal.width(),
                                                
                                                // top/left of full size volume slider background
                                                totalPosition = volumeTotal.position(),
                                                
                                                // the new left position based on the current volume
                                                newLeft = totalWidth * volume;
        
                                        // handle
                                        volumeHandle.css('left', totalPosition.left + newLeft - (volumeHandle.width() / 2));
        
                                        // rezize the current part of the volume bar
                                        volumeCurrent.width( newLeft );
                                }
                        },
                        handleVolumeMove = function(e) {
                                
                                var volume = null,
                                        totalOffset = volumeTotal.offset();
                                
                                // calculate the new volume based on the moust position
                                if (mode == 'vertical') {
                                
                                        var
                                                railHeight = volumeTotal.height(),
                                                totalTop = parseInt(volumeTotal.css('top').replace(/px/,''),10),
                                                newY = e.pageY - totalOffset.top;
                                                
                                        volume = (railHeight - newY) / railHeight;
                                                
                                        // the controls just hide themselves (usually when mouse moves too far up)
                                        if (totalOffset.top == 0 || totalOffset.left == 0)
                                                return;
                                        
                                } else {
                                        var
                                                railWidth = volumeTotal.width(),
                                                newX = e.pageX - totalOffset.left;
                                                
                                        volume = newX / railWidth;
                                }
                                
                                // ensure the volume isn't outside 0-1
                                volume = Math.max(0,volume);
                                volume = Math.min(volume,1);
                                
                                // position the slider and handle                        
                                positionVolumeHandle(volume);
                                
                                // set the media object (this will trigger the volumechanged event)
                                if (volume == 0) {
                                        media.setMuted(true);
                                } else {
                                        media.setMuted(false);
                                }
                                media.setVolume(volume);                        
                        },
                        mouseIsDown = false,
                        mouseIsOver = false;

                        // SLIDER
                        
                        mute
                                .hover(function() {
                                        volumeSlider.show();
                                        mouseIsOver = true;
                                }, function() {
                                        mouseIsOver = false;        
                                                
                                        if (!mouseIsDown && mode == 'vertical')        {
                                                volumeSlider.hide();
                                        }
                                });
                        
                        volumeSlider
                                .bind('mouseover', function() {
                                        mouseIsOver = true;        
                                })
                                .bind('mousedown', function (e) {
                                        handleVolumeMove(e);
                                        $(document)
                                                .bind('mousemove.vol', function(e) {
                                                        handleVolumeMove(e);
                                                })
                                                .bind('mouseup.vol', function () {
                                                        mouseIsDown = false;
                                                        $(document).unbind('.vol');

                                                        if (!mouseIsOver && mode == 'vertical') {
                                                                volumeSlider.hide();
                                                        }
                                                });
                                        mouseIsDown = true;
                                                
                                        return false;
                                });


                        // MUTE button
                        mute.find('button').click(function() {
                                media.setMuted( !media.muted );
                        });

                        // listen for volume change events from other sources
                        media.addEventListener('volumechange', function(e) {
                                if (!mouseIsDown) {
                                        if (media.muted) {
                                                positionVolumeHandle(0);
                                                mute.removeClass('mejs-mute').addClass('mejs-unmute');
                                        } else {
                                                positionVolumeHandle(media.volume);
                                                mute.removeClass('mejs-unmute').addClass('mejs-mute');
                                        }
                                }
                        }, false);

                        if (t.container.is(':visible')) {
                                // set initial volume
                                positionVolumeHandle(player.options.startVolume);
                                
                                // shim gets the startvolume as a parameter, but we have to set it on the native <video> and <audio> elements
                                if (media.pluginType === 'native') {
                                        media.setVolume(player.options.startVolume);
                                }
                        }
                }
        });
        
})(mejs.$);

(function($) {
        
        $.extend(mejs.MepDefaults, {
                usePluginFullScreen: true,
                newWindowCallback: function() { return '';},
                fullscreenText: 'Fullscreen'
        });
        
        $.extend(MediaElementPlayer.prototype, {
                
                isFullScreen: false,
                
                isNativeFullScreen: false,
                
                docStyleOverflow: null,
                
                isInIframe: false,
                
                buildfullscreen: function(player, controls, layers, media) {

                        if (!player.isVideo)
                                return;
                                
                        player.isInIframe = (window.location != window.parent.location);
                                
                        // native events
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                                
                                // chrome doesn't alays fire this in an iframe
                                var target = null;
                                
                                if (mejs.MediaFeatures.hasMozNativeFullScreen) {
                                        target = $(document);
                                } else {
                                        target = player.container;
                                }
                                
                                target.bind(mejs.MediaFeatures.fullScreenEventName, function(e) {
                                                        
                                        if (mejs.MediaFeatures.isFullScreen()) {
                                                player.isNativeFullScreen = true;
                                                // reset the controls once we are fully in full screen
                                                player.setControlsSize();
                                        } else {
                                                player.isNativeFullScreen = false;
                                                // when a user presses ESC
                                                // make sure to put the player back into place                                                                
                                                player.exitFullScreen();                                
                                        }
                                });
                        }

                        var t = this,                
                                normalHeight = 0,
                                normalWidth = 0,
                                container = player.container,                                                
                                fullscreenBtn = 
                                        $('<div class="mejs-button mejs-fullscreen-button">' + 
                                                '<button type="button" aria-controls="' + t.id + '" title="' + t.options.fullscreenText + '"></button>' + 
                                        '</div>')
                                        .appendTo(controls);
                                
                                if (t.media.pluginType === 'native' || (!t.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox)) {
                                        
                                        fullscreenBtn.click(function() {
                                                var isFullScreen = (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || player.isFullScreen;                                                                                                        
                                                
                                                if (isFullScreen) {
                                                        player.exitFullScreen();
                                                } else {                                                
                                                        player.enterFullScreen();
                                                }
                                        });
                                        
                                } else {

                                        var hideTimeout = null,
                                                supportsPointerEvents = (function() {
                                                        // TAKEN FROM MODERNIZR
                                                        var element = document.createElement('x'),
                                                                documentElement = document.documentElement,
                                                                getComputedStyle = window.getComputedStyle,
                                                                supports;
                                                        if(!('pointerEvents' in element.style)){
                                                                return false;
                                                        }
                                                        element.style.pointerEvents = 'auto';
                                                        element.style.pointerEvents = 'x';
                                                        documentElement.appendChild(element);
                                                        supports = getComputedStyle && 
                                                                getComputedStyle(element, '').pointerEvents === 'auto';
                                                        documentElement.removeChild(element);
                                                        return !!supports;                                                        
                                                })();
                                                
                                        //console.log('supportsPointerEvents', supportsPointerEvents);
                                                
                                        if (supportsPointerEvents && !mejs.MediaFeatures.isOpera) { // opera doesn't allow this :(
                                                
                                                // allows clicking through the fullscreen button and controls down directly to Flash
                                                
                                                /*
                                                 When a user puts his mouse over the fullscreen button, the controls are disabled
                                                 So we put a div over the video and another one on iether side of the fullscreen button
                                                 that caputre mouse movement
                                                 and restore the controls once the mouse moves outside of the fullscreen button
                                                */
                                                
                                                var fullscreenIsDisabled = false,
                                                        restoreControls = function() {
                                                                if (fullscreenIsDisabled) {
                                                                        // hide the hovers
                                                                        videoHoverDiv.hide();
                                                                        controlsLeftHoverDiv.hide();
                                                                        controlsRightHoverDiv.hide();
                                                                        
                                                                        // restore the control bar
                                                                        fullscreenBtn.css('pointer-events', '');
                                                                        t.controls.css('pointer-events', '');
                                                                        
                                                                        // store for later
                                                                        fullscreenIsDisabled = false;
                                                                }
                                                        },
                                                        videoHoverDiv = $('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(restoreControls),
                                                        controlsLeftHoverDiv = $('<div class="mejs-fullscreen-hover"  />').appendTo(t.container).mouseover(restoreControls),
                                                        controlsRightHoverDiv = $('<div class="mejs-fullscreen-hover"  />').appendTo(t.container).mouseover(restoreControls),
                                                        positionHoverDivs = function() {
                                                                var style = {position: 'absolute', top: 0, left: 0}; //, backgroundColor: '#f00'};
                                                                videoHoverDiv.css(style);
                                                                controlsLeftHoverDiv.css(style);
                                                                controlsRightHoverDiv.css(style);
                                                                
                                                                // over video, but not controls
                                                                videoHoverDiv
                                                                        .width( t.container.width() )
                                                                        .height( t.container.height() - t.controls.height() );
                                                                
                                                                // over controls, but not the fullscreen button
                                                                var fullScreenBtnOffset = fullscreenBtn.offset().left - t.container.offset().left;
                                                                        fullScreenBtnWidth = fullscreenBtn.outerWidth(true);
                                                                        
                                                                controlsLeftHoverDiv
                                                                        .width( fullScreenBtnOffset )
                                                                        .height( t.controls.height() )
                                                                        .css({top: t.container.height() - t.controls.height()});
                                                                        
                                                                // after the fullscreen button
                                                                controlsRightHoverDiv
                                                                        .width( t.container.width() - fullScreenBtnOffset - fullScreenBtnWidth )
                                                                        .height( t.controls.height() )
                                                                        .css({top: t.container.height() - t.controls.height(),
                                                                                 left: fullScreenBtnOffset + fullScreenBtnWidth});                                                                
                                                        };
                                                
                                                $(document).resize(function() {
                                                        positionHoverDivs();
                                                });
                                                                                                
                                                // on hover, kill the fullscreen button's HTML handling, allowing clicks down to Flash
                                                fullscreenBtn
                                                        .mouseover(function() {
                                                                
                                                                if (!t.isFullScreen) {
                                                                        
                                                                        var buttonPos = fullscreenBtn.offset(),
                                                                                containerPos = player.container.offset();
                                                                        
                                                                        // move the button in Flash into place
                                                                        media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, false);                                                                        
                                                                        
                                                                        // allows click through
                                                                        fullscreenBtn.css('pointer-events', 'none');
                                                                        t.controls.css('pointer-events', 'none');
                                                                        
                                                                        // show the divs that will restore things
                                                                        videoHoverDiv.show();
                                                                        controlsRightHoverDiv.show();
                                                                        controlsLeftHoverDiv.show();
                                                                        positionHoverDivs();
                                                                        
                                                                        fullscreenIsDisabled = true;
                                                                }
                                                        
                                                        });
                                                
                                                // restore controls anytime the user enters or leaves fullscreen        
                                                media.addEventListener('fullscreenchange', function(e) {
                                                        restoreControls();
                                                });
                                                
                                                
                                                // the mouseout event doesn't work on the fullscren button, because we already killed the pointer-events
                                                // so we use the document.mousemove event to restore controls when the mouse moves outside the fullscreen button 
                                                /*
                                                $(document).mousemove(function(e) {
                                                        
                                                        // if the mouse is anywhere but the fullsceen button, then restore it all
                                                        if (fullscreenIsDisabled) {
                                                                
                                                                var fullscreenBtnPos = fullscreenBtn.offset();
                                                                

                                                                if (e.pageY < fullscreenBtnPos.top || e.pageY > fullscreenBtnPos.top + fullscreenBtn.outerHeight(true) ||
                                                                        e.pageX < fullscreenBtnPos.left || e.pageX > fullscreenBtnPos.left + fullscreenBtn.outerWidth(true)
                                                                        ) {
                                                                
                                                                        fullscreenBtn.css('pointer-events', '');
                                                                        t.controls.css('pointer-events', '');
                                                                        
                                                                        fullscreenIsDisabled = false;
                                                                }
                                                        }
                                                });
                                                */
                                                
                                                
                                        } else {
                                                
                                                // the hover state will show the fullscreen button in Flash to hover up and click
                                                
                                                fullscreenBtn
                                                        .mouseover(function() {
                                                                
                                                                if (hideTimeout !== null) {
                                                                        clearTimeout(hideTimeout);
                                                                        delete hideTimeout;
                                                                }
                                                                
                                                                var buttonPos = fullscreenBtn.offset(),
                                                                        containerPos = player.container.offset();
                                                                        
                                                                media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, true);
                                                        
                                                        })
                                                        .mouseout(function() {
                                                        
                                                                if (hideTimeout !== null) {
                                                                        clearTimeout(hideTimeout);
                                                                        delete hideTimeout;
                                                                }
                                                                
                                                                hideTimeout = setTimeout(function() {        
                                                                        media.hideFullscreenButton();
                                                                }, 1500);
                                                                
                                                                
                                                        });                                                
                                        }
                                }
                        
                        player.fullscreenBtn = fullscreenBtn;        

                        $(document).bind('keydown',function (e) {
                                if (((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || t.isFullScreen) && e.keyCode == 27) {
                                        player.exitFullScreen();
                                }
                        });
                                
                },
                enterFullScreen: function() {
                        
                        var t = this;
                        
                        // firefox+flash can't adjust plugin sizes without resetting :(
                        if (t.media.pluginType !== 'native' && (mejs.MediaFeatures.isFirefox || t.options.usePluginFullScreen)) {
                                //t.media.setFullscreen(true);
                                //player.isFullScreen = true;
                                return;
                        }                        
                                                
                        // store overflow 
                        docStyleOverflow = document.documentElement.style.overflow;
                        // set it to not show scroll bars so 100% will work
                        document.documentElement.style.overflow = 'hidden';                        
                
                        // store sizing
                        normalHeight = t.container.height();
                        normalWidth = t.container.width();
                        
                        // attempt to do true fullscreen (Safari 5.1 and Firefox Nightly only for now)
                        if (t.media.pluginType === 'native') {
                                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                                                        
                                        mejs.MediaFeatures.requestFullScreen(t.container[0]);
                                        //return;
                                        
                                        if (t.isInIframe) {
                                                // sometimes exiting from fullscreen doesn't work
                                                // notably in Chrome <iframe>. Fixed in version 17
                                                setTimeout(function checkFullscreen() {
                                                                
                                                        if (t.isNativeFullScreen) {
                                                                
                                                                // check if the video is suddenly not really fullscreen
                                                                if ($(window).width() !== screen.width) {
                                                                        // manually exit
                                                                        t.exitFullScreen();
                                                                } else {
                                                                        // test again
                                                                        setTimeout(checkFullscreen, 500);                                                                                                                
                                                                }
                                                        }
                                                        
                                                        
                                                }, 500);
                                        }
                                        
                                } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                                        t.media.webkitEnterFullscreen();
                                        return;
                                }
                        }
                        
                        // check for iframe launch
                        if (t.isInIframe) {
                                var url = t.options.newWindowCallback(this);
                                
                                
                                if (url !== '') {
                                        
                                        // launch immediately
                                        if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
                                                t.pause();
                                                window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');
                                                return;
                                        } else {
                                                setTimeout(function() {
                                                        if (!t.isNativeFullScreen) {
                                                                t.pause();
                                                                window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');                                                                
                                                        }
                                                }, 250);
                                        }
                                }        
                                
                        }
                        
                        // full window code

                        

                        // make full size
                        t.container
                                .addClass('mejs-container-fullscreen')
                                .width('100%')
                                .height('100%');
                                //.css({position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', width: '100%', height: '100%', 'z-index': 1000});                                

                        // Only needed for safari 5.1 native full screen, can cause display issues elsewhere
                        // Actually, it seems to be needed for IE8, too
                        //if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                                setTimeout(function() {
                                        t.container.css({width: '100%', height: '100%'});
                                        t.setControlsSize();
                                }, 500);
                        //}
                                
                        if (t.pluginType === 'native') {
                                t.$media
                                        .width('100%')
                                        .height('100%');
                        } else {
                                t.container.find('object, embed, iframe')
                                        .width('100%')
                                        .height('100%');
                                        
                                //if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
                                        t.media.setVideoSize($(window).width(),$(window).height());
                                //}
                        }
                        
                        t.layers.children('div')
                                .width('100%')
                                .height('100%');

                        if (t.fullscreenBtn) {
                                t.fullscreenBtn
                                        .removeClass('mejs-fullscreen')
                                        .addClass('mejs-unfullscreen');
                        }

                        t.setControlsSize();
                        t.isFullScreen = true;
                },
                
                exitFullScreen: function() {
                        
                        var t = this;                
                
                        // firefox can't adjust plugins
                        if (t.media.pluginType !== 'native' && mejs.MediaFeatures.isFirefox) {                                
                                t.media.setFullscreen(false);
                                //player.isFullScreen = false;
                                return;
                        }                
                
                        // come outo of native fullscreen
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen)) {
                                mejs.MediaFeatures.cancelFullScreen();
                        }        

                        // restore scroll bars to document
                        document.documentElement.style.overflow = docStyleOverflow;                                        
                                
                        t.container
                                .removeClass('mejs-container-fullscreen')
                                .width(normalWidth)
                                .height(normalHeight);
                                //.css({position: '', left: '', top: '', right: '', bottom: '', overflow: 'inherit', width: normalWidth + 'px', height: normalHeight + 'px', 'z-index': 1});
                        
                        if (t.pluginType === 'native') {
                                t.$media
                                        .width(normalWidth)
                                        .height(normalHeight);
                        } else {
                                t.container.find('object embed')
                                        .width(normalWidth)
                                        .height(normalHeight);
                                        
                                t.media.setVideoSize(normalWidth, normalHeight);
                        }                                

                        t.layers.children('div')
                                .width(normalWidth)
                                .height(normalHeight);

                        t.fullscreenBtn
                                .removeClass('mejs-unfullscreen')
                                .addClass('mejs-fullscreen');

                        t.setControlsSize();
                        t.isFullScreen = false;
                }        
        });

})(mejs.$);

(function($) {

        // add extra default options 
        $.extend(mejs.MepDefaults, {
                // this will automatically turn on a <track>
                startLanguage: '',
                
                tracksText: 'Captions/Subtitles'
        });

        $.extend(MediaElementPlayer.prototype, {
        
                hasChapters: false,

                buildtracks: function(player, controls, layers, media) {
                        if (!player.isVideo)
                                return;

                        if (player.tracks.length == 0)
                                return;

                        var t= this, i, options = '';

                        player.chapters = 
                                        $('<div class="mejs-chapters mejs-layer"></div>')
                                                .prependTo(layers).hide();
                        player.captions = 
                                        $('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>')
                                                .prependTo(layers).hide();
                        player.captionsText = player.captions.find('.mejs-captions-text');
                        player.captionsButton = 
                                        $('<div class="mejs-button mejs-captions-button">'+
                                                '<button type="button" aria-controls="' + t.id + '" title="' + t.options.tracksText + '"></button>'+
                                                '<div class="mejs-captions-selector">'+
                                                        '<ul>'+
                                                                '<li>'+
                                                                        '<input type="radio" name="' + player.id + '_captions" id="' + player.id + '_captions_none" value="none" checked="checked" />' +
                                                                        '<label for="' + player.id + '_captions_none">None</label>'+
                                                                '</li>'        +
                                                        '</ul>'+
                                                '</div>'+
                                        '</div>')
                                                .appendTo(controls)
                                                
                                                // hover
                                                .hover(function() {
                                                        $(this).find('.mejs-captions-selector').css('visibility','visible');
                                                }, function() {
                                                        $(this).find('.mejs-captions-selector').css('visibility','hidden');
                                                })                                        
                                                
                                                // handle clicks to the language radio buttons
                                                .delegate('input[type=radio]','click',function() {
                                                        lang = this.value;

                                                        if (lang == 'none') {
                                                                player.selectedTrack = null;
                                                        } else {
                                                                for (i=0; i<player.tracks.length; i++) {
                                                                        if (player.tracks[i].srclang == lang) {
                                                                                player.selectedTrack = player.tracks[i];
                                                                                player.captions.attr('lang', player.selectedTrack.srclang);
                                                                                player.displayCaptions();
                                                                                break;
                                                                        }
                                                                }
                                                        }
                                                });
                                                //.bind('mouseenter', function() {
                                                //        player.captionsButton.find('.mejs-captions-selector').css('visibility','visible')
                                                //});

                        if (!player.options.alwaysShowControls) {
                                // move with controls
                                player.container
                                        .bind('mouseenter', function () {
                                                // push captions above controls
                                                player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');

                                        })
                                        .bind('mouseleave', function () {
                                                if (!media.paused) {
                                                        // move back to normal place
                                                        player.container.find('.mejs-captions-position').removeClass('mejs-captions-position-hover');
                                                }
                                        });
                        } else {
                                player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');
                        }

                        player.trackToLoad = -1;
                        player.selectedTrack = null;
                        player.isLoadingTrack = false;

                        

                        // add to list
                        for (i=0; i<player.tracks.length; i++) {
                                if (player.tracks[i].kind == 'subtitles') {
                                        player.addTrackButton(player.tracks[i].srclang, player.tracks[i].label);
                                }
                        }

                        player.loadNextTrack();


                        media.addEventListener('timeupdate',function(e) {
                                player.displayCaptions();
                        }, false);

                        media.addEventListener('loadedmetadata', function(e) {
                                player.displayChapters();
                        }, false);

                        player.container.hover(
                                function () {
                                        // chapters
                                        if (player.hasChapters) {
                                                player.chapters.css('visibility','visible');
                                                player.chapters.fadeIn(200).height(player.chapters.find('.mejs-chapter').outerHeight());
                                        }
                                },
                                function () {
                                        if (player.hasChapters && !media.paused) {
                                                player.chapters.fadeOut(200, function() {
                                                        $(this).css('visibility','hidden');
                                                        $(this).css('display','block');
                                                });
                                        }
                                });
                                
                        // check for autoplay
                        if (player.node.getAttribute('autoplay') !== null) {
                                player.chapters.css('visibility','hidden');
                        }
                },

                loadNextTrack: function() {
                        var t = this;

                        t.trackToLoad++;
                        if (t.trackToLoad < t.tracks.length) {
                                t.isLoadingTrack = true;
                                t.loadTrack(t.trackToLoad);
                        } else {
                                // add done?
                                t.isLoadingTrack = false;
                        }
                },

                loadTrack: function(index){
                        var
                                t = this,
                                track = t.tracks[index],
                                after = function() {

                                        track.isLoaded = true;

                                        // create button
                                        //t.addTrackButton(track.srclang);
                                        t.enableTrackButton(track.srclang, track.label);

                                        t.loadNextTrack();

                                };


                        $.ajax({
                                url: track.src,
                                dataType: "text",
                                success: function(d) {

                                        // parse the loaded file
                                        if (typeof d == "string" && (/<tt\s+xml/ig).exec(d)) {
                                                track.entries = mejs.TrackFormatParser.dfxp.parse(d);                                        
                                        } else {        
                                                track.entries = mejs.TrackFormatParser.webvvt.parse(d);
                                        }
                                        
                                        after();

                                        if (track.kind == 'chapters' && t.media.duration > 0) {
                                                t.drawChapters(track);
                                        }
                                },
                                error: function() {
                                        t.loadNextTrack();
                                }
                        });
                },

                enableTrackButton: function(lang, label) {
                        var t = this;
                        
                        if (label === '') {
                                label = mejs.language.codes[lang] || lang;
                        }                        

                        t.captionsButton
                                .find('input[value=' + lang + ']')
                                        .prop('disabled',false)
                                .siblings('label')
                                        .html( label );

                        // auto select
                        if (t.options.startLanguage == lang) {
                                $('#' + t.id + '_captions_' + lang).click();
                        }

                        t.adjustLanguageBox();
                },

                addTrackButton: function(lang, label) {
                        var t = this;
                        if (label === '') {
                                label = mejs.language.codes[lang] || lang;
                        }

                        t.captionsButton.find('ul').append(
                                $('<li>'+
                                        '<input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_' + lang + '" value="' + lang + '" disabled="disabled" />' +
                                        '<label for="' + t.id + '_captions_' + lang + '">' + label + ' (loading)' + '</label>'+
                                '</li>')
                        );

                        t.adjustLanguageBox();

                        // remove this from the dropdownlist (if it exists)
                        t.container.find('.mejs-captions-translations option[value=' + lang + ']').remove();
                },

                adjustLanguageBox:function() {
                        var t = this;
                        // adjust the size of the outer box
                        t.captionsButton.find('.mejs-captions-selector').height(
                                t.captionsButton.find('.mejs-captions-selector ul').outerHeight(true) +
                                t.captionsButton.find('.mejs-captions-translations').outerHeight(true)
                        );
                },

                displayCaptions: function() {

                        if (typeof this.tracks == 'undefined')
                                return;

                        var
                                t = this,
                                i,
                                track = t.selectedTrack;

                        if (track != null && track.isLoaded) {
                                for (i=0; i<track.entries.times.length; i++) {
                                        if (t.media.currentTime >= track.entries.times[i].start && t.media.currentTime <= track.entries.times[i].stop){
                                                t.captionsText.html(track.entries.text[i]);
                                                t.captions.show().height(0);
                                                return; // exit out if one is visible;
                                        }
                                }
                                t.captions.hide();
                        } else {
                                t.captions.hide();
                        }
                },

                displayChapters: function() {
                        var 
                                t = this,
                                i;

                        for (i=0; i<t.tracks.length; i++) {
                                if (t.tracks[i].kind == 'chapters' && t.tracks[i].isLoaded) {
                                        t.drawChapters(t.tracks[i]);
                                        t.hasChapters = true;
                                        break;
                                }
                        }
                },

                drawChapters: function(chapters) {
                        var 
                                t = this,
                                i,
                                dur,
                                //width,
                                //left,
                                percent = 0,
                                usedPercent = 0;

                        t.chapters.empty();

                        for (i=0; i<chapters.entries.times.length; i++) {
                                dur = chapters.entries.times[i].stop - chapters.entries.times[i].start;
                                percent = Math.floor(dur / t.media.duration * 100);
                                if (percent + usedPercent > 100 || // too large
                                        i == chapters.entries.times.length-1 && percent + usedPercent < 100) // not going to fill it in
                                        {
                                        percent = 100 - usedPercent;
                                }
                                //width = Math.floor(t.width * dur / t.media.duration);
                                //left = Math.floor(t.width * chapters.entries.times[i].start / t.media.duration);
                                //if (left + width > t.width) {
                                //        width = t.width - left;
                                //}

                                t.chapters.append( $(
                                        '<div class="mejs-chapter" rel="' + chapters.entries.times[i].start + '" style="left: ' + usedPercent.toString() + '%;width: ' + percent.toString() + '%;">' + 
                                                '<div class="mejs-chapter-block' + ((i==chapters.entries.times.length-1) ? ' mejs-chapter-block-last' : '') + '">' + 
                                                        '<span class="ch-title">' + chapters.entries.text[i] + '</span>' + 
                                                        '<span class="ch-time">' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].start) + '&ndash;' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].stop) + '</span>' + 
                                                '</div>' +
                                        '</div>'));
                                usedPercent += percent;
                        }

                        t.chapters.find('div.mejs-chapter').click(function() {
                                t.media.setCurrentTime( parseFloat( $(this).attr('rel') ) );
                                if (t.media.paused) {
                                        t.media.play(); 
                                }
                        });

                        t.chapters.show();
                }
        });



        mejs.language = {
                codes:  {
                        af:'Afrikaans',
                        sq:'Albanian',
                        ar:'Arabic',
                        be:'Belarusian',
                        bg:'Bulgarian',
                        ca:'Catalan',
                        zh:'Chinese',
                        'zh-cn':'Chinese Simplified',
                        'zh-tw':'Chinese Traditional',
                        hr:'Croatian',
                        cs:'Czech',
                        da:'Danish',
                        nl:'Dutch',
                        en:'English',
                        et:'Estonian',
                        tl:'Filipino',
                        fi:'Finnish',
                        fr:'French',
                        gl:'Galician',
                        de:'German',
                        el:'Greek',
                        ht:'Haitian Creole',
                        iw:'Hebrew',
                        hi:'Hindi',
                        hu:'Hungarian',
                        is:'Icelandic',
                        id:'Indonesian',
                        ga:'Irish',
                        it:'Italian',
                        ja:'Japanese',
                        ko:'Korean',
                        lv:'Latvian',
                        lt:'Lithuanian',
                        mk:'Macedonian',
                        ms:'Malay',
                        mt:'Maltese',
                        no:'Norwegian',
                        fa:'Persian',
                        pl:'Polish',
                        pt:'Portuguese',
                        //'pt-pt':'Portuguese (Portugal)',
                        ro:'Romanian',
                        ru:'Russian',
                        sr:'Serbian',
                        sk:'Slovak',
                        sl:'Slovenian',
                        es:'Spanish',
                        sw:'Swahili',
                        sv:'Swedish',
                        tl:'Tagalog',
                        th:'Thai',
                        tr:'Turkish',
                        uk:'Ukrainian',
                        vi:'Vietnamese',
                        cy:'Welsh',
                        yi:'Yiddish'
                }
        };

        /*
        Parses WebVVT format which should be formatted as
        ================================
        WEBVTT
        
        1
        00:00:01,1 --> 00:00:05,000
        A line of text

        2
        00:01:15,1 --> 00:02:05,000
        A second line of text
        
        ===============================

        Adapted from: http://www.delphiki.com/html5/playr
        */
        mejs.TrackFormatParser = {
                webvvt: {
                        // match start "chapter-" (or anythingelse)
                        pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
                        pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,

                        parse: function(trackText) {
                                var 
                                        i = 0,
                                        lines = mejs.TrackFormatParser.split2(trackText, /\r?\n/),
                                        entries = {text:[], times:[]},
                                        timecode,
                                        text;
                                for(; i<lines.length; i++) {
                                        // check for the line number
                                        if (this.pattern_identifier.exec(lines[i])){
                                                // skip to the next line where the start --> end time code should be
                                                i++;
                                                timecode = this.pattern_timecode.exec(lines[i]);                                

                                                if (timecode && i<lines.length){
                                                        i++;
                                                        // grab all the (possibly multi-line) text that follows
                                                        text = lines[i];
                                                        i++;
                                                        while(lines[i] !== '' && i<lines.length){
                                                                text = text + '\n' + lines[i];
                                                                i++;
                                                        }
                                                        text = $.trim(text).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                                                        // Text is in a different array so I can use .join
                                                        entries.text.push(text);
                                                        entries.times.push(
                                                        {
                                                                start: (mejs.Utility.convertSMPTEtoSeconds(timecode[1]) == 0) ? 0.200 : mejs.Utility.convertSMPTEtoSeconds(timecode[1]),
                                                                stop: mejs.Utility.convertSMPTEtoSeconds(timecode[3]),
                                                                settings: timecode[5]
                                                        });
                                                }
                                        }
                                }
                                return entries;
                        }
                },
                // Thanks to Justin Capella: https://github.com/johndyer/mediaelement/pull/420
                dfxp: {
                        parse: function(trackText) {
                                trackText = $(trackText).filter("tt");
                                var 
                                        i = 0,
                                        container = trackText.children("div").eq(0),
                                        lines = container.find("p"),
                                        styleNode = trackText.find("#" + container.attr("style")),
                                        styles,
                                        begin,
                                        end,
                                        text,
                                        entries = {text:[], times:[]};


                                if (styleNode.length) {
                                        var attributes = styleNode.removeAttr("id").get(0).attributes;
                                        if (attributes.length) {
                                                styles = {};
                                                for (i = 0; i < attributes.length; i++) {
                                                        styles[attributes[i].name.split(":")[1]] = attributes[i].value;
                                                }
                                        }
                                }

                                for(i = 0; i<lines.length; i++) {
                                        var style;
                                        var _temp_times = {
                                                start: null,
                                                stop: null,
                                                style: null
                                        };
                                        if (lines.eq(i).attr("begin")) _temp_times.start = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i).attr("begin"));
                                        if (!_temp_times.start && lines.eq(i-1).attr("end")) _temp_times.start = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i-1).attr("end"));
                                        if (lines.eq(i).attr("end")) _temp_times.stop = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i).attr("end"));
                                        if (!_temp_times.stop && lines.eq(i+1).attr("begin")) _temp_times.stop = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i+1).attr("begin"));
                                        if (styles) {
                                                style = "";
                                                for (var _style in styles) {
                                                        style += _style + ":" + styles[_style] + ";";                                        
                                                }
                                        }
                                        if (style) _temp_times.style = style;
                                        if (_temp_times.start == 0) _temp_times.start = 0.200;
                                        entries.times.push(_temp_times);
                                        text = $.trim(lines.eq(i).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                                        entries.text.push(text);
                                        if (entries.times.start == 0) entries.times.start = 2;
                                }
                                return entries;
                        }
                },
                split2: function (text, regex) {
                        // normal version for compliant browsers
                        // see below for IE fix
                        return text.split(regex);
                }
        };
        
        // test for browsers with bad String.split method.
        if ('x\n\ny'.split(/\n/gi).length != 3) {
                // add super slow IE8 and below version
                mejs.TrackFormatParser.split2 = function(text, regex) {
                        var 
                                parts = [], 
                                chunk = '',
                                i;

                        for (i=0; i<text.length; i++) {
                                chunk += text.substring(i,i+1);
                                if (regex.test(chunk)) {
                                        parts.push(chunk.replace(regex, ''));
                                        chunk = '';
                                }
                        }
                        parts.push(chunk);
                        return parts;
                }
        }        

})(mejs.$);

/*
* ContextMenu Plugin
* 
*
*/

(function($) {

$.extend(mejs.MepDefaults,
        { 'contextMenuItems': [
                // demo of a fullscreen option
                { 
                        render: function(player) {
                                
                                // check for fullscreen plugin
                                if (typeof player.enterFullScreen == 'undefined')
                                        return null;
                        
                                if (player.isFullScreen) {
                                        return "Turn off Fullscreen";
                                } else {
                                        return "Go Fullscreen";
                                }
                        },
                        click: function(player) {
                                if (player.isFullScreen) {
                                        player.exitFullScreen();
                                } else {
                                        player.enterFullScreen();
                                }
                        }
                }
                ,
                // demo of a mute/unmute button
                { 
                        render: function(player) {
                                if (player.media.muted) {
                                        return "Unmute";
                                } else {
                                        return "Mute";
                                }
                        },
                        click: function(player) {
                                if (player.media.muted) {
                                        player.setMuted(false);
                                } else {
                                        player.setMuted(true);
                                }
                        }
                },
                // separator
                {
                        isSeparator: true
                }
                ,
                // demo of simple download video
                { 
                        render: function(player) {
                                return "Download Video";
                        },
                        click: function(player) {
                                window.location.href = player.media.currentSrc;
                        }
                }        
        ]}
);


        $.extend(MediaElementPlayer.prototype, {
                buildcontextmenu: function(player, controls, layers, media) {
                        
                        // create context menu
                        player.contextMenu = $('<div class="mejs-contextmenu"></div>')
                                                                .appendTo($('body'))
                                                                .hide();
                        
                        // create events for showing context menu
                        player.container.bind('contextmenu', function(e) {
                                if (player.isContextMenuEnabled) {
                                        e.preventDefault();
                                        player.renderContextMenu(e.clientX-1, e.clientY-1);
                                        return false;
                                }
                        });
                        player.container.bind('click', function() {
                                player.contextMenu.hide();
                        });        
                        player.contextMenu.bind('mouseleave', function() {

                                //console.log('context hover out');
                                player.startContextMenuTimer();
                                
                        });                
                },
                
                isContextMenuEnabled: true,
                enableContextMenu: function() {
                        this.isContextMenuEnabled = true;
                },
                disableContextMenu: function() {
                        this.isContextMenuEnabled = false;
                },
                
                contextMenuTimeout: null,
                startContextMenuTimer: function() {
                        //console.log('startContextMenuTimer');
                        
                        var t = this;
                        
                        t.killContextMenuTimer();
                        
                        t.contextMenuTimer = setTimeout(function() {
                                t.hideContextMenu();
                                t.killContextMenuTimer();
                        }, 750);
                },
                killContextMenuTimer: function() {
                        var timer = this.contextMenuTimer;
                        
                        //console.log('killContextMenuTimer', timer);
                        
                        if (timer != null) {                                
                                clearTimeout(timer);
                                delete timer;
                                timer = null;
                        }
                },                
                
                hideContextMenu: function() {
                        this.contextMenu.hide();
                },
                
                renderContextMenu: function(x,y) {
                        
                        // alway re-render the items so that things like "turn fullscreen on" and "turn fullscreen off" are always written correctly
                        var t = this,
                                html = '',
                                items = t.options.contextMenuItems;
                        
                        for (var i=0, il=items.length; i<il; i++) {
                                
                                if (items[i].isSeparator) {
                                        html += '<div class="mejs-contextmenu-separator"></div>';
                                } else {
                                
                                        var rendered = items[i].render(t);
                                
                                        // render can return null if the item doesn't need to be used at the moment
                                        if (rendered != null) {
                                                html += '<div class="mejs-contextmenu-item" data-itemindex="' + i + '" id="element-' + (Math.random()*1000000) + '">' + rendered + '</div>';
                                        }
                                }
                        }
                        
                        // position and show the context menu
                        t.contextMenu
                                .empty()
                                .append($(html))
                                .css({top:y, left:x})
                                .show();
                                
                        // bind events
                        t.contextMenu.find('.mejs-contextmenu-item').each(function() {
                                                        
                                // which one is this?
                                var $dom = $(this),
                                        itemIndex = parseInt( $dom.data('itemindex'), 10 ),
                                        item = t.options.contextMenuItems[itemIndex];
                                
                                // bind extra functionality?
                                if (typeof item.show != 'undefined')
                                        item.show( $dom , t);
                                
                                // bind click action
                                $dom.click(function() {                        
                                        // perform click action
                                        if (typeof item.click != 'undefined')
                                                item.click(t);
                                        
                                        // close
                                        t.contextMenu.hide();                                
                                });                                
                        });        
                        
                        // stop the controls from hiding
                        setTimeout(function() {
                                t.killControlsTimer('rev3');        
                        }, 100);
                                                
                }
        });
        
})(mejs.$);
(function(){var requirejs,require,define,__inflate;(function(e){function a(e,t){var n=t&&t.split("/"),i=r.map,s=i&&i["*"]||{},o,u,a,f,l,c,h;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(l=0;h=e[l];l++)if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))return!0;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}if((n||s)&&i){o=e.split("/");for(l=o.length;l>0;l-=1){u=o.slice(0,l).join("/");if(n)for(c=n.length;c>0;c-=1){a=i[n.slice(0,c).join("/")];if(a){a=a[u];if(a){f=a;break}}}f=f||s[u];if(f){o.splice(0,l,f),e=o.join("/");break}}}return e}function f(t,n){return function(){return u.apply(e,s.call(arguments,0).concat([t,n]))}}function l(e){return function(t){return a(t,e)}}function c(e){return function(n){t[e]=n}}function h(r){if(n.hasOwnProperty(r)){var s=n[r];delete n[r],i[r]=!0,o.apply(e,s)}if(!t.hasOwnProperty(r))throw new Error("No "+r);return t[r]}function p(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=a(e.slice(0,i),t),e=e.slice(i+1),r=h(n),r&&r.normalize?e=r.normalize(e,l(t)):e=a(e,t)):e=a(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function d(e){return function(){return r&&r.config&&r.config[e]||{}}}var t={},n={},r={},i={},s=[].slice,o,u;o=function(r,s,o,u){var a=[],l,v,m,g,y,b;u=u||r,typeof o=="string"&&(o=__inflate(r,o));if(typeof o=="function"){s=!s.length&&o.length?["require","exports","module"]:s;for(b=0;b<s.length;b++){y=p(s[b],u),m=y.f;if(m==="require")a[b]=f(r);else if(m==="exports")a[b]=t[r]={},l=!0;else if(m==="module")v=a[b]={id:r,uri:"",exports:t[r],config:d(r)};else if(t.hasOwnProperty(m)||n.hasOwnProperty(m))a[b]=h(m);else if(y.p)y.p.load(y.n,f(u,!0),c(m),{}),a[b]=t[m];else if(!i[m])throw new Error(r+" missing "+m)}g=o.apply(t[r],a);if(r)if(v&&v.exports!==e&&v.exports!==t[r])t[r]=v.exports;else if(g!==e||!l)t[r]=g}else r&&(t[r]=o)},requirejs=require=u=function(t,n,i,s){return typeof t=="string"?h(p(t,n).f):(t.splice||(r=t,n.splice?(t=n,n=i,i=null):t=e),n=n||function(){},s?o(e,t,n,i):setTimeout(function(){o(e,t,n,i)},15),u)},u.config=function(e){return r=e,u},define=function(e,t,r){t.splice||(r=t,t=[]),n[e]=[e,t,r]},define.amd={jQuery:!0}})(),__inflate=function(name,src){var r;return eval(["r = function(a,b,c){","\n};\n//@ sourceURL="+name+"\n"].join(src)),r},define("lib/api/events",["require","exports","module"],function(e,t,n){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}}),define("lib/api/getters",["require","exports","module"],function(e,t,n){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}}),define("lib/api/setters",["require","exports","module"],function(e,t,n){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}),define("lib/api/api",["require","exports","module","lib/api/events","lib/api/getters","lib/api/setters"],function(e,t,n){function m(e){return!!(e===""||e&&e.charCodeAt&&e.substr)}function g(e){return!!(e&&e.constructor&&e.call&&e.apply)}function y(e){return!!e&&e.nodeType===1&&e.nodeName.toUpperCase()==="IFRAME"}function b(e){var t=!1,n;for(n in i)if(i.hasOwnProperty(n)&&i[n]===e){t=!0;break}return t}function w(e){var t,n,r;for(t=0,n=f.length;t<n;t++){r=e(f[t]);if(r===!1)break}}function E(e){var t="",n,r,i;e.substr(0,2)==="//"&&(e=window.location.protocol+e),i=e.split("/");for(n=0,r=i.length;n<r;n++){if(!(n<3))break;t+=i[n],n<2&&(t+="/")}return t}function S(e){return e.contentWindow?e.contentWindow:e.contentDocument&&"parentWindow"in e.contentDocument?e.contentDocument.parentWindow:null}function x(e){var t=[],n;for(n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function T(e,t,n){n.callbacks[e]=n.callbacks[e]||[],n.callbacks[e].push(t)}function N(e,t){var n=!0,r;return t.callbacks[e]=[],w(function(t){r=t.callbacks[e]||[];if(r.length)return n=!1,!1}),n}function C(e,t,n){var r=S(n),i,s;if(!r.postMessage)return!1;i=n.getAttribute("src").split("?")[0],s=JSON.stringify({method:e,value:t}),i.substr(0,2)==="//"&&(i=window.location.protocol+i),i=i.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),r.postMessage(s,i)}function k(e){var t;return w(function(n){if(n.instance===e)return t=n,!1}),t}function L(e){var t;return w(function(n){if(S(n.element)===e)return t=n,!1}),t}function A(e,t){return function(n){var r=g(n),i=k(this),s=!r&&t?n:null,o=r&&!t?n:null;return o&&T(e,o,i),C(e,s,i.element),this}}function O(e,t,n){var r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],e[s]=A(s,n)}function M(e,t,n){return e+"?url="+t+"&"+_(n)}function _(e){var t,n,r=[];for(t in e)e.hasOwnProperty(t)&&(n=e[t],r.push(t+"="+(t==="start_track"?parseInt(n,10):n?"true":"false")));return r.join("&")}function D(e,t,n){var r=e.callbacks[t]||[],i,s;for(i=0,s=r.length;i<s;i++)r[i].apply(e.instance,n);if(b(t)||t===o.READY)e.callbacks[t]=[]}function P(e){var t,n,r,i,s;try{n=JSON.parse(e.data)}catch(u){return!1}t=L(e.source),r=n.method,i=n.value;if(t&&H(e.origin)!==H(t.domain))return!1;if(!t)return r===o.READY&&a.push(e.source),!1;r===o.READY&&(t.isReady=!0,D(t,l),N(l,t)),r===o.PLAY&&!t.playEventFired&&(t.playEventFired=!0),r===o.PLAY_PROGRESS&&!t.playEventFired&&(t.playEventFired=!0,D(t,o.PLAY,[i])),s=[],i!==undefined&&s.push(i),D(t,r,s)}function H(e){return e.replace(h,"")}var r=e("lib/api/events"),i=e("lib/api/getters"),s=e("lib/api/setters"),o=r.api,u=r.bridge,a=[],f=[],l="__LATE_BINDING__",c="http://wt.soundcloud.dev:9200/",h=/^http(?:s?)/,p,d,v;window.addEventListener?window.addEventListener("message",P,!1):window.attachEvent("onmessage",P),n.exports=v=function(e,t,n){m(e)&&(e=document.getElementById(e));if(!y(e))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(n=n||{},e.src=M(c,t,n));var r=L(S(e)),i,s;return r&&r.instance?r.instance:(i=a.indexOf(S(e))>-1,s=new p(e),f.push(new d(s,e,i)),s)},v.Events=o,window.SC=window.SC||{},window.SC.Widget=v,d=function(e,t,n){this.instance=e,this.element=t,this.domain=E(t.getAttribute("src")),this.isReady=!!n,this.callbacks={}},p=function(){},p.prototype={constructor:p,load:function(e,t){if(!e)return;t=t||{};var n=this,r=k(this),i=r.element,s=i.src,a=s.substr(0,s.indexOf("?"));r.isReady=!1,r.playEventFired=!1,i.onload=function(){n.bind(o.READY,function(){var e,n=r.callbacks;for(e in n)n.hasOwnProperty(e)&&e!==o.READY&&C(u.ADD_LISTENER,e,r.element);t.callback&&t.callback()})},i.src=M(a,e,t)},bind:function(e,t){var n=this,r=k(this);return r&&r.element&&(e===o.READY&&r.isReady?setTimeout(t,1):r.isReady?(T(e,t,r),C(u.ADD_LISTENER,e,r.element)):T(l,function(){n.bind(e,t)},r)),this},unbind:function(e){var t=k(this),n;t&&t.element&&(n=N(e,t),e!==o.READY&&n&&C(u.REMOVE_LISTENER,e,t.element))}},O(p.prototype,x(i)),O(p.prototype,x(s),!0)}),window.SC=window.SC||{},window.SC.Widget=require("lib/api/api")})()
/******* 
PLAYER FUNCTIONS CLASSE
********/

/*

my_player = {

	media_ : undefined,
	indice_id : 0,
	type_ : undefined,
	cible : undefined,
  index_cible : undefined, // index de la musique selectionnée dans le DOM //
  id_playlist : undefined,
  id_playlist_played : undefined,
	class_play : "glyphicon-play",
  class_pause : "glyphicon-pause",
  song_selected : undefined,
  is_playing : false,
  widget_soundcloud : undefined,
  has_changed_playlist : false,
  play_sound_animation : $('<section class = "play_sound_animation"><span></span><span></span><span></span></section>'),
  pause_sound_animation : $('<section class = "pause_sound_animation"><span>.</span><span>.</span><span>.</span></section>'),

	init : function() {
		var that = this;

    if (this.id_playlist == undefined || this.id_playlist == "")
      this.id_playlist = $('input[name="real_id_playlist"]').val();

    if (that.has_changed_playlist === false)
    {
      var iframeElement   = document.querySelector('iframe');
      var iframeElementID = iframeElement.id;
      this.widget_soundcloud = SC.Widget(iframeElement);
      this.initMediaPlayer('audio');
    }
    else
    {
      // on réaffiche l'animation css3 pour la musique sélectionnée préalablement si il y eu //
      if (that.cible != undefined)
        that.enable_animation_on_song_played_before();
    }
	},

  add_animation_current_playing : function() {
    var that = this;

    that.cible.find('.pause_sound_animation').remove();
    that.cible.append(that.play_sound_animation);
    that.cible.find('span:first').removeClass('pause').addClass('playing').removeClass(that.class_play).addClass(that.class_pause);
  },

  add_animation_current_pausing : function() {
    var that = this;

    that.cible.find('span:first').removeClass('playing').addClass('pause').removeClass(that.class_pause).addClass(that.class_play);
    that.cible.find('.play_sound_animation').remove();
    that.cible.append(that.pause_sound_animation);
  },

  enable_animation_on_song_played_before : function() {
    var that = this;

    console.log("index cible : " + that.index_cible);
    console.log("id_playlist played : " + that.id_playlist_played);
    console.log("actuel id playlist : " + that.id_playlist);

    if (that.id_playlist == that.id_playlist_played)
    {
      that.cible = $('.choose_music').eq(that.index_cible);
      that.add_animation_current_playing();
    }
  },

  play_soundcloud : function(url, target, index_) {

    var that = this;

    if (index_ === that.index_cible)
    {
      if (that.is_playing === true)
      {
        that.widget_soundcloud.pause();
        that.is_playing = false;
        that.add_animation_current_pausing();
      }
      else
      {
        that.widget_soundcloud.play();
        that.is_playing = true;
        that.add_animation_current_playing();
      }
      return (false);
    }

    if (that.indice_id !== 0)
      $('#mep_' + this.indice_id).remove();

    that.widget_soundcloud.bind(SC.Widget.Events.READY, function() {
      $('#sc-widget').show();
      that.widget_soundcloud.load(url, {
        show_artwork: true,
        auto_play : true,
      });
    });

    if (that.cible !== undefined)
    {
      that.cible.find('.play_sound_animation').remove();
      that.cible.find('span:first').removeClass(that.class_pause).addClass(that.class_play);
      that.cible.removeClass('playing').removeClass('pause');
    }

    that.cible = target;
    that.index_cible = index_;
    that.is_playing = true;
    that.cible.find('span:first').removeClass('pause').addClass('playing').removeClass(that.class_play).addClass(that.class_pause);
    that.cible.append(that.play_sound_animation);

    // on branche l'evenement finish du son chargé //
    that.widget_soundcloud.bind(SC.Widget.Events.FINISH, function() {
      that.cible.removeClass('border-selected');
      that.cible.find('span:first').removeClass(that.class_pause).addClass(that.class_play).removeClass('playing');
      var new_cible_parent = that.cible.parents('.track').next();
      that.cible = new_cible_parent.find('.choose_music');
      that.checkIfChangePage(index_);
      that.cible.trigger('click');
    });

  },

  checkIfChangePage : function(index_) {

    var last_index = parseInt($('.jp-current').text()) * 4;
    if (index_ == last_index)
    {
      var $currentPage = Math.ceil(index_ / 5);
      $("div.holder").jPages($currentPage + 1);
    }
  },

  play_video : function(url, type, target, index_) {

      console.log('ici');
      var that = this;

      if ((index_ == that.index_cible) && (that.id_playlist == that.id_playlist_played))
      {
        console.log('iic');
        // même item selectionné, on doit savoir si on met pause ou lecture //
        // si playing, mettre pause, sinon on play //
        if (that.is_playing === true)
        {
          // on met pause //
          that.pause();
        }
        else
        {
          // on met play //
          that.play();
        }
        // on return false pour ne pas aller plus loin //
        return false;
      }

      if (that.widget_soundcloud != undefined)
      {
        $('#sc-widget').hide();
        that.widget_soundcloud.pause();
      }

      that.type_ = "youtube_player";
      //that.build_player_video();
      $('#player_video').find('source').attr('src', url);
      this.initMediaPlayer('video', index_);
      $('#mep_0').hide();

      setTimeout(function() {
        that.autoplay_youtube_video(that);
      }, 1650);

      if (that.cible !== undefined)
      {
        that.cible.find('.play_sound_animation').remove();
        that.cible.find('span:first').removeClass(that.class_pause).addClass(that.class_play);
        that.cible.removeClass('playing').removeClass('pause');
      }
      that.cible = target;
      that.index_cible = index_;
      that.is_playing = true;
      that.cible.find('span:first').removeClass('pause').addClass('playing').removeClass(that.class_play).addClass(that.class_pause);
      that.cible.append(that.play_sound_animation);
    },
    
   pause : function() {
      var that = this;

      that.media_.pause();
      that.is_playing = false;
      that.add_animation_current_pausing();
   },

   play : function() {
      var that = this;

      that.media_.play();
      that.is_playing = true;
      that.add_animation_current_playing();
   },

	 initMediaPlayer : function(type_, index_) {
      var that = this;

      console.log('rentre');
      console.log(type_);
      return (false);
      var $div = $('#player_audio');
      if (type_ == "video")
        $div = $('#player_video');

      $div = "#player_video";
      that.media_ = new MediaElementPlayer($div, {
        features : ['playpause','loop','current','progress','duration','volume'],
		  success : function(mediaElement, domObject) {

        console.log('création média');
        /*
        mediaElement.addEventListener('ended', function() {

            console.log('fin du media');
            if ($('#mep_' + that.indice_id).find('.mejs-controls').find('.mejs-loop-button').hasClass('mejs-loop-off'))
            {
              // on charge le prochain son //
              that.cible.removeClass('border-selected');
              that.cible.find('span:first').removeClass(that.class_pause).addClass(that.class_play).removeClass('playing');
              var new_cible_parent = that.cible.parents('.track').next();
              that.cible = new_cible_parent.find('.choose_music');
              that.cible.trigger('click');
              that.checkIfChangePage(index_);
            }
          });
        }
      });
    },

    build_player_video : function() {
      var that = this;

      if (this.indice_id > 0 && $('#mep_' + this.indice_id).size() > 0)
        $('#mep_' + this.indice_id).remove();
      var type = "";
      if (that.type_ == "dailymotion_player")
        type = "video/dailymotion";
      else if (that.type_ == "youtube_player")
        type = "video/youtube";
      $('#mep_0').after('<video width="770" height="400" id="player_video"><source type="'+type+'" src="#" /></video>');
      this.indice_id++;
    },

    autoplay_youtube_video : function(obj) {

      $('.mejs-overlay-button').trigger('click');

      // on test si la musique s'est bien chargé et avance //
      setTimeout(function() {
        obj.checkIfPlaying(obj);
      }, 3200);
    },

    checkIfPlaying : function(obj) {

      if (obj.media_.media.duration <= 0 && obj.media_.media.currentTime <= 0)
      {
        obj.cible.removeClass('border-selected');
        obj.cible.find('span:first').removeClass(obj.class_pause).addClass(obj.class_play).removeClass('playing');
        var new_cible_parent = obj.cible.parents('.track').next();
        obj.cible = new_cible_parent.find('.choose_music');
        obj.cible.trigger('click');
      }
    },
}
*/

/********
END PLAYER FUNCTIONS
********/

my_player = {

  media_ : undefined,
  indice_lecteur : 0,
  cible_ : undefined,
  play_sound_animation : $('<section class = "play_sound_animation"><span></span><span></span><span></span></section>'),
  pause_sound_animation : $('<section class = "pause_sound_animation"><span>.</span><span>.</span><span>.</span></section>'),
  id_song_played : undefined,
  id_playlist_played : undefined,
  id_playlist_selected : undefined, // id de playlist selectionné mais pas forécément celle qui est joué, ex : lorsqu'on cherche un son sur une autre playlist //
  widget_soundcloud : undefined,
  class_play : "glyphicon-play",
  class_pause : "glyphicon-pause",

  first_time : true,

  // si l'utilisateur clique sur un lien provenant d'une notification //
  play_video_shared : function(url, type) {

      var that = this;
      
      if ($('#mep_' + this.indice_lecteur).size() > 0)
          $('#mep_' + this.indice_lecteur).remove();
      $('#contentPlayerVideo').append('<video width="770" height="400" id="player_video"><source type="video/youtube" src="#" /></video>');
      $('#player_video').find('source').attr('src', url);

      this.media_ = new MediaElementPlayer("#player_video", {
          features : ['playpause','loop','current','progress','duration','volume'],
          success : function(mediaElement, domObject) {
              setTimeout(function() {
                that.autoplay_youtube_video();
              }, 2000);
              if (that.first_time === true)
                  that.first_time = false;
              else
                  that.indice_lecteur++;
          }
      });
  },

  play_video : function(url, type, target, index, id_current_playlist)
  {
      var that = this;

      console.log('index de la musique : ' + index);
      console.log('id de la playlist : ' + id_current_playlist);
      console.log('id de la playlist du dernier son joué : ' + this.id_playlist_played);

      if (index === this.id_song_played && this.cible_ != undefined && ((id_current_playlist == this.id_playlist_played) || this.id_playlist_played == undefined))
      {
          this.removeAllAnimations();
          if (this.cible_.hasClass("playing"))
             this.pauseMedia();
          else if (this.cible_.hasClass("pausing"))
              this.playMedia();
      }
      else
      {
        if (this.cible_ != undefined)
            this.removeAllAnimations();
        if (this.widget_soundcloud != undefined)
        {
            $('#sc-widget').hide();
            this.widget_soundcloud.pause();
        }
        this.cible_ = target.parents('.row');
        this.beforeCreateMedia(url, type);
        this.createMedia();
        setTimeout(function() {
          that.autoplay_youtube_video();
        }, 2000);
        this.id_song_played = index;
        console.log(this.cible_.html());
        this.cible_.find('.span_reading').addClass(this.class_pause);
      }
  },

  play_soundcloud : function(url, target, index) {

      var that = this;

      $('#mep_' + this.indice_lecteur).remove();
      if (index === this.id_song_played && this.cible_ != undefined)
      {
          this.removeAllAnimations();
          if (this.cible_.hasClass("playing"))
             this.pauseMedia("soundcloud");
          else if (this.cible_.hasClass("pausing"))
              this.playMedia("soundcloud");
      }
      else
      {
          that.widget_soundcloud.bind(SC.Widget.Events.READY, function() {
              $('#sc-widget').show();
              that.widget_soundcloud.load(url, {
                show_artwork: true,
                auto_play : true,
              });
          });
          this.cible_ = target.parents('.row');
          this.id_song_played = index;
          this.play_animation();
          this.cible_.addClass("playing");

          // on branche l'evenement finish du son chargé //
          that.widget_soundcloud.bind(SC.Widget.Events.FINISH, function() {
            that.cible_.find('.span_reading').removeClass(that.class_pause).addClass(that.class_play).removeClass('playing');
            that.cible_ = that.cible_.next();
            that.checkIfChangePage(index);
            that.cible_.find('.musicChosen').trigger('click');
          });
      }
  },

  getType : function(idtype) {

      if (idtype == 1)
        return ("video/youtube");
      else if (idtype == 3)
        return ("video/dailymotion");
  },

  beforeCreateMedia : function(url, type) {

      if ($('#mep_' + this.indice_lecteur).size() > 0)
          $('#mep_' + this.indice_lecteur).remove();
      $('#contentPlayerVideo').append('<video width="770" height="400" id="player_video"><source type="'+this.getType(type)+'" src="#" /></video>');
      $('#player_video').find('source').attr('src', url);
      this.play_animation();
  },

  createMedia : function() {

      var that = this;

      this.media_ = new MediaElementPlayer("#player_video", {
          features : ['playpause','loop','current','progress','duration','volume'],
          success : function(mediaElement, domObject) {
              if (that.first_time === true)
                  that.first_time = false;
              else
                  that.indice_lecteur++;
              mediaElement.addEventListener('ended', function() {                  
                    
                  // si l'utilisateur n'est pas sur sa playlist ou est joué l'actuel musique, alors il faut le rediriger vers elle //
                  $('#link_sound_selected').trigger('click');
                  setTimeout(function() {
                    // on charge le prochain son //
                    console.log('chargement du son suivant ..');
                    that.cible_.find('.span_reading').removeClass(that.class_pause).addClass(that.class_play).removeClass('playing');
                    console.log(that.cible_);
                    that.cible_ = that.cible_.next();
                    console.log(that.cible_);
                    that.cible_.find('.musicChosen').trigger('click');
                    that.checkIfChangePage(that.id_song_played);
                  },500);
              });
          }
      });
  },

  autoplay_youtube_video : function() {

      $('.mejs-overlay-button').trigger('click');
      this.cible_.addClass("playing");
  },

  playMedia : function(filter) {

      if (filter == "soundcloud")
          this.widget_soundcloud.play();
      else
          this.media_.play();
      this.cible_.removeClass("pausing").addClass("playing");
      this.play_animation();
  },

  pauseMedia : function(filter) {

      if (filter == "soundcloud")
          this.widget_soundcloud.pause();
      else
          this.media_.pause();
      this.cible_.removeClass("playing").addClass("pausing");
      this.pause_animation();
  },

  play_animation : function() {

      this.cible_.find('.div_reading').append(this.play_sound_animation);
      this.cible_.find('.span_reading').removeClass(this.class_play).addClass(this.class_pause);
  },

  pause_animation : function() {

      this.cible_.find('.div_reading').append(this.pause_sound_animation);
      this.cible_.find('.span_reading').removeClass(this.class_pause).addClass(this.class_play);
  },

  removeAllAnimations : function() {

      $('.play_sound_animation, .pause_sound_animation').remove();
      this.cible_.find('span:first').removeClass(this.class_pause).addClass(this.class_play);
  },

  recreateAnimation : function() {

      console.log(this.id_song_played);
      this.cible_ = $('.choose_music').eq(this.id_song_played).addClass("playing");
      console.log(this.cible_);
      this.cible_.addClass("playing");
      this.play_animation();
  },

  checkIfChangePage : function(index_) {

    index_ -= 1;
    var last_index = parseInt($('.jp-current').text()) * 4;
    if (index_ == last_index)
    {
      var $currentPage = Math.ceil(index_ / 5);
      $("div.holder").jPages($currentPage + 1);
    }
  },

}

$(document).ready(function() {

  var iframeElement   = document.querySelector('iframe');
  var iframeElementID = iframeElement.id;
  my_player.widget_soundcloud = SC.Widget(iframeElement);
  $('#sc-widget').hide();

});







// FINN //