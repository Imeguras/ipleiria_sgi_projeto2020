window.bysideWebcare_currentrevision='1609848817';if ( typeof bysideWebcareSetCampaigns == 'function' ) bysideWebcareSetCampaigns();
window.bysideWebcare_shouldReevaluateBTM=true;
(function(e,t,n){var i,r,o,a,c;e._btm&&e.bysideWebcare_BTM&&("undefined"==typeof e.bysideWebcare_shouldReevaluateBTM||e.bysideWebcare_shouldReevaluateBTM===!1)||(i={getElement:function(e){var t;return t=e?"head"===e?document.getElementsByTagName("head")[0]:"body"===e?document.body:"string"==typeof e?document.getElementById(e):c.utils.isElement(e)?e:document.body:document.body},fileLoader:{tidyUrl:function(e){return"http:"===e.substring(0,5)?e:"https:"===e.substring(0,6)?e:"//"===e.substring(0,2)?e:"//"+e},resolveUrl:function(e){var t;return c.utils.isObject(e)?(t="https:"===document.location.protocol?"https":"http",e=e[t]||""):e=i.fileLoader.tidyUrl(e),e},createScript:function(e,n,i){var r=t.createElement("script");return"undefined"!=typeof bysideWebcare_cspid&&bysideWebcare_cspid&&r.setAttribute("nonce",bysideWebcare_cspid),r.type="text/javascript",r.src=e+(i?"?"+(new Date).getTime():""),r.async="async",n&&n!==!1?(r.async="true",r.defer="true"):(r.async="false",r.async!==!1&&(r.async=!1),r.defer="false"),r},load:function(e,n,r,o,a,s){var u,l,d=!0;e=i.fileLoader.resolveUrl(e),l=function(){u.onload=u.onreadystatechange=null,c.utils.isFunction(r)&&r(e),l=function(){},c.utils.isFunction(s)&&s()};try{c.utils.isFunction(n)&&(d=n(e))}catch(e){d=!1}finally{d!==!1?(u=i.fileLoader.createScript(e,a),c.utils.isFunction(r)&&(u.addEventListener?(u.addEventListener("load",function(e){l(null,e)},!1),u.addEventListener("error",function(e){l(new Error("Failed to load the script."),e)},!1)):u.attachEvent&&u.attachEvent("onreadystatechange",function(e){/complete|loaded/.test(u.readyState)&&l(null,e)})),o&&c.utils.isElement(o)||(o=t.head||t.getElementsByTagName("head")[0]||t.documentElement),o.insertBefore(u,o.firstChild)):c.utils.isFunction(s)&&s()}}},injector:{injectHTML:function(e,t,r,o,a){var s,u,l,d,h,f,p=[],v=[],y=[];if(f=a===n||a!==!1,e=i.getElement(e),r.toLowerCase().indexOf("<script")>=0){for(s=document.createElement("div"),s.innerHTML="a"+r,u=s.getElementsByTagName("script"),d=0,h=u.length;d<h;d++)node=u[d],p.push(node),f&&v.push(node);for(d=0,h=v.length;d<h;d++)v[d].parentNode.removeChild(v[d]);for(d=0,h=p.length;d<h;d++)l=p[d],"undefined"!=typeof bysideWebcare_cspid&&bysideWebcare_cspid&&l.setAttribute("nonce",bysideWebcare_cspid),l.src?y.push({src:l.src}):y.push({script:l.innerHTML});s.innerHTML&&s.innerHTML.length>0&&(s.innerHTML=s.innerHTML.substring(1)),i.injector._doInject(e,t,s),i.injector._loadScripts(y,0,o,e)}else s=document.createElement("div"),s.innerHTML=r,i.injector._doInject(e,t,s),c.utils.isFunction(o)&&o()},_doInject:function(e,t,n){if(n.childNodes.length>0){for(var r=document.createDocumentFragment();n.childNodes.length>0;)r.appendChild(n.removeChild(n.childNodes[0]));t?i.injector._injectAtStart(e,r):i.injector._injectAtEnd(e,r)}},_injectAtStart:function(e,t){0===e.childNodes.length?e.appendChild(t):e.insertBefore(t,e.childNodes[0])},_injectAtEnd:function(e,t){e.appendChild(t)},_loadScripts:function(e,t,n,r){var o,a;for(o=e.length;t<o;t++){if(a=e[t],a.src){i.fileLoader.load(a.src,null,function(){i.injector._loadScripts(e,t+1,n,r)},r);break}i.globalEval(a.script)}n&&t===o&&n()}},globalEval:function(e){if(window.execScript)window.execScript(e);else{var t=function(){window.eval.call(window,e)};t()}}},r=function(){function e(e){for(f=1,e=r.shift();e;)e(),e=r.shift()}var n,i,r=[],o=!1,a=t.documentElement,c=a.doScroll,s="DOMContentLoaded",u="addEventListener",l="attachEvent",d="onreadystatechange",h="readyState",f=/^loade|c/.test(t[h]);return t[u]&&t[u](s,n=function(){t.removeEventListener(s,n,o),e()},o),c&&t[l]&&t[l](d,n=function(){/^c/.test(t[h])&&(t.detachEvent(d,n),e())}),i=c?function(e){self!=top?f?e():r.push(e):function(){try{a.doScroll("left")}catch(t){return setTimeout(function(){i(e)},50)}e()}()}:function(e){f?e():r.push(e)}}(),o=function(){function n(e){for(p=1,e=o.shift();e;)e(),e=o.shift()}var i,r,o=[],a=!1,c=t.documentElement,s=c.doScroll,u="load",l="addEventListener",d="onload",h="attachEvent",f="readyState",p=/^c/.test(t[f]);return e[l]&&e[l](u,i=function(){e.removeEventListener(u,i,a),n()},a),s&&t[h]&&e[h](d,i=function(){/^c/.test(t[f])&&(e.detachEvent(d,i),n())}),r=s?function(e){self!=top?p?e():o.push(e):function(){try{c.doScroll("left")}catch(t){return setTimeout(function(){r(e)},50)}e()}()}:function(e){p?e():o.push(e)}}(),a={get:function(e,t){var i=this.all(),r={};if(t=t||n,c.utils.isArray(e)){for(var o=0,a=e.length;o<a;o++){var s=e[o];r[s]=c.utils.retrieve(i[s],t)}return r}return c.utils.retrieve(i[e],t)},set:function(e,t,i){var r,o,a,s,u,l=new Date,d=864e5;if(c.utils.isPlainObject(e))for(var h in e)e.hasOwnProperty(h)&&this.set(h,e[h],t);else i=c.utils.isPlainObject(i)?i:{expires:i},r=i.expires!==n?i.expires:this.defaults.expires||"",o=typeof r,"string"===o&&""!==r?r=new Date(r):"number"===o&&(r=new Date(l.getTime()+r*d)),""!==r&&"toUTCString"in r&&(r=";expires="+r.toUTCString()),a=i.path?";path="+i.path:"",s=i.domain?";domain="+i.domain:"",u=i.secure?";secure":"",document.cookie=this.escape(e)+"="+this.escape(t)+r+a+s+u},remove:function(e,t){e=c.utils.isArray(e)?e:c.utils.toArray(e),t=c.utils.extend(t||{},{expires:-1});for(var n=0,i=e.length;n<i;n++)this.set(e[n],"",t)},all:function(){var e,t,n={};if(""===document.cookie)return n;e=document.cookie.split("; ");for(var i=0,r=e.length;i<r;i++)t=e[i].split("="),n[c.utils.decode(t[0])]=c.utils.decode(t[1]);return n},escape:function(e){return String(e).replace(/[,;"\\=\s%]/g,function(e){return c.utils.encode(e)})}},c=function(){var e=null,t=null;new Date;return{user_info:{},timeout_for_callback:300,timeout_for_link:300,tags:{},queue:[],loaded:!1,addTag:function(e,t,n,i){n=n||{},n.tag_id=e,n.tag_type=t,n.queue=[],n.loaded=!1,n.ready=!1,n.properties=i||{},n.setReady=function(){this.ready=!0,this.dequeue()},n.dequeue=function(){for(var e=0;this.queue&&this.queue.length>0;e++){var t=this.queue.shift(),n=t.shift();this[n]&&this[n].apply(this,t)}},this.tags[e]=n},getTagsToLoad:function(){var e,t=[];for(e in this.tags)this.tags.hasOwnProperty(e)&&!this.tags[e].loaded&&t.push(this.tags[e]);return t},initialize:function(n){var i,r,o,a=this;if(n=n||{},!this.loaded){i=this.getTagsToLoad();for(var c=0,s=i.length;c<s;c++){r=i[c];try{r.initialize(n,a),r.loaded=!0}catch(e){o={reason:"error loading "+r.tag_type+":"+r.tag_id+": "+e.reason,url:document.location.href,date:new Date},window.bysideWebcare_BTM.debug(o)}}a.dequeue(),e=new Date,t=e.getTime(),this.loaded=!0}},dequeue:function(){for(var e=0;this.queue&&this.queue.length>0;e++){var t=this.queue.shift(),n=t.shift();this[n]&&this[n].apply(this,t)}},debug:function(e){window.console&&console.info&&Function.prototype.apply.call(console.info,console,arguments)},html:i,utils:{domReady:r,domLoad:o,cookie:a,bind:function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n),n},unbind:function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent&&e.detachEvent("on"+t,n),n},isMeta:function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return!0;var t=e.which,i=e.button;return t||i===n?2===t:1&!i&&2&!i&&4&i},getSeconds:function(e){return Math.floor(new Date(e)/1e3)},extend:function(e){for(var t,n=Array.prototype.slice.call(arguments,1),i=0;t=n[i];i++)for(var r in t)e[r]=t[r];return e},clone:function(e){return this.isObject(e)?this.isArray(e)?e.slice():this.extend({},e):e},isElement:function(e){return!(!e||1!==e.nodeType)},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isObject:function(e){return e===Object(e)},isPlainObject:function(e){return!!e&&"[object Object]"===Object.prototype.toString.call(e)},isString:function(e){return"[object String]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNumber:function(e){return"[object Number]"===Object.prototype.toString.call(e)},toArray:function(e){return Array.prototype.slice.call(e)},parseUrl:function(e){var t=document.createElement("a");return t.href=e,{href:t.href,host:t.host||location.host,hash:t.hash,hostname:t.hostname||location.hostname,pathname:"/"!==t.pathname.charAt(0)?"/"+t.pathname:t.pathname,protocol:t.protocol&&":"!==t.protocol?t.protocol:location.protocol,search:t.search,query:t.search.slice(1)}},encode:encodeURIComponent,decode:decodeURIComponent,retrieve:function(e,t){return e===n||null===e?t:e}}}}(),c.trackEvent=function(e,t,i,r){var o,a,c;if(e&&"undefined"!=typeof t){this.utils.isFunction(i)&&(r=i,i=null);for(o in this.tags)this.tags.hasOwnProperty(o)&&(a=this.tags[o],this.utils.isFunction(a.trackEvent)&&(c=this.utils.clone(i),a.ready?a.trackEvent(e,t,c):a.queue!==n&&a.queue.push(["trackEvent",e,t,c])));r&&this.utils.isFunction(r)&&setTimeout(r,this.timeout_for_callback)}},c.trackClick=function(e,t,n,i){var r=this;if(e){this.utils.isElement(e)&&(e=[e]);for(var o=0;o<e.length;o++)(function(e,t,n,i){r.utils.bind(e,"click",function(o){var a={};a=r.utils.isFunction(i)?i(e):i,a._href=e.href||"",r.trackEvent(t,n||"",a),e.href&&"#"!==e.href&&0!==e.href.indexOf("javascript:")&&"_blank"!==this.target&&!r.utils.isMeta(o)&&(o.preventDefault?o.preventDefault():o.returnValue=!1,setTimeout(function(){window.location.href=e.href},r.timeout_for_link))})})(e[o],t,n,i)}},c.pageview=function(e){var t,i;for(t in this.tags)this.tags.hasOwnProperty(t)&&(i=this.tags[t],this.utils.isFunction(i.pageview)&&(i.ready?i.pageview(e):i.queue!==n&&i.queue.push(["pageview",e])))},window.bysideWebcare_BTM&&window.bysideWebcare_BTM.length>0&&(c.queue=c.utils.clone(window.bysideWebcare_BTM)),window._btm=window.bysideWebcare_BTM=c,e.bysideWebcare_shouldReevaluateBTM=!1)})(window,document);bysideWebcare_BTM.addTag("0","BySideTAG",{settings:{},context:{},initialize:function(){bysideWebcare_BTM.getCookieServiceLevel=function(){if(typeof bysideWebcare_getCookieServiceLevel!=="undefined"){var a=bysideWebcare_getCookieServiceLevel();if(a){return a}}switch(byside_webcare_tuid){case"DO_NOT_TRACK":case"DO_NOT_TRACK_0":return"REQUIRED";break;case"FUNCTIONAL":case"DO_NOT_TRACK_10":return"FUNCTIONAL";break;case"PERSONALIZATION":return"PERSONALIZATION";break;default:return"TARGETING";break}};bysideWebcare_BTM.cookie_service_level=bysideWebcare_BTM.getCookieServiceLevel();this.setReady()},setUserInfo:function(a,b){b=b||{};b._user_id=a||"";if(typeof bysideWebcareSetVisitorInfo!=="undefined"){bysideWebcareSetVisitorInfo(b)}},trackEvent:function(a,c,b){b=b||{};b._event_title=c||"";if(typeof bysideWebcare_event!=="undefined"){bysideWebcare_event(a,b)}},pageview:function(a){}});;if(typeof bysideWebcare_BTM !== 'undefined'){bysideWebcare_BTM.initialize();};