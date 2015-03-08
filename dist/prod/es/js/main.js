!function t(e,a,n){function i(s,o){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(r)return r(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var c=a[s]={exports:{}};e[s][0].call(c.exports,function(t){var a=e[s][1][t];return i(a?a:t)},c,c.exports,t,e,a,n)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({"./src/js/main.js":[function(t){function e(){this._length=0,this._errors={}}function a(t,e){for(var a=[],n=t;e>=n;++n)a.push(n);return a}function n(t,e,a){var n=$.Event(t);n.target=a,e.trigger(n)}function i(t,e){var a=t.split("?"),n=a[0],i={};if(a[1]){var r=a[1].split("&");for(var s in r)a=r[s].split("="),i[a[0]]=a[1]}return{fragment:n||e.fragment,queryString:i}}function r(t){return!isNaN(t)&&t===Math.floor(t)}function s(t,e,a,n){var i=d.message,s=t[e],o=s[a];if(r(o)?g.remove(a+e):g.add(a+e,i.isNotAInt(o)),("all"===n||"range"===n)&&(s.min>s.max?(console.log("min > max"),g.add(e,i.invalidRange(s,e)),console.log(g.ok())):g.remove(e)),"all"===n){var l=t.balls.min,c=t.heights.max,u=t.periods.min;l>=c&&u>1?g.add("all",i.emptyWithBigPeriod()):1===u&&l>c?g.add("all",i.emptyWithLittlePeriod()):g.remove("all")}}var o=t("siteswap-generator"),l=t("./Juggler/juggler.js"),d=t("./lang/es.js"),c=window.navigator.userAgent,u=/android/i.test(c)&&c.indexOf("534.30");e.prototype={ok:function(){return 0===this._length},add:function(t,e){t in this._errors||++this._length,this._errors[t]=e},remove:function(t){t in this._errors&&(delete this._errors[t],--this._length)},message:function(){for(var t in this._errors)return this._errors[t]}},$.fn.keyboard=function(t,e){e=e||function(t){return t},$(this).html("<ul>"+t.map(function(t){return"<li>"+e(t)+"</li>"}).join("")+"</ul>")};var h={balls:function(t,e,a){t.error=!1,void 0!==e.min&&void 0!==e.max&&e.min<=e.max&&e.min>0?e.min===e.max?t.balls=d.balls[0](e.min,e.max):1===e.min?t.balls=d.balls[1](e.min,e.max):e.min<e.max&&(t.balls=d.balls[2](e.min,e.max)):t.error=d.balls[3](e.min,e.max),a.text(t.balls)},periods:function(t,e,a){t.error=!1,void 0!==e.min&&void 0!==e.max&&e.min<=e.max&&e.min>0?e.min===e.max?t.period=d.periods[0](e.min,e.max):1===e.min?t.period=d.periods[1](e.min,e.max):e.min<e.max&&(t.period=d.periods[2](e.min,e.max)):t.error=d.periods[3](e.min,e.max),a.text(t.period)},heights:function(t,e,a){t.error=!1,void 0===e.min&&void 0===e.max?t.height="":(void 0===e.min||e.min<=1)&&e.max>=0?t.height=d.heights[0](e.min,e.max):void 0===e.max&&e.min>=0?t.height=d.heights[1](e.min,e.max):e.min<=e.max&&e.min>=0?t.height=e.min===e.max?d.heights[2](e.min,e.max):d.heights[3](e.min,e.max):t.error=d.heights[4](e.min,e.max),a.text(t.height)}},m={},p={},g=new e,f="0123456789abcdefghijklmnopqrstuvxyz",v={values:{},href:{queryString:{}}};$(document).ready(function(){function t(){var e=$("li",v.$samples).slice(0,1);v.$samples.animate({"margin-left":-e.width()},C,"swing",function(){v.$samples.css("margin-left",0),e.detach(),v.$samples.append(e)}),setTimeout(t,1e4)}function e(t,e){e=e||t.data;var a=(e.$keyboard,e.$simulator),n=(e.$generator,[E.$balls,E.$periods,E.$heights]),i=$.map(n,function(t){return{min:parseInt(t.data("$min").text())||void 0,max:parseInt(t.data("$max").text())||void 0}}),r=o.apply(null,i);return r=r.map(function(t){return t.map(function(t){return f[t]}).join("")}),a.data("patterns",r),A.$patterns.keyboard(r,function(t){return'<a class="keyboard-btn" href="#simulator?play='+t+'">'+t+"</a>"}),e.juggler&&e.juggler.stop(),e.jugglerPlaying=!1,A.$patterns.data("active",!1),A.$patterns.data("position",0),A.$patterns.css("left",0),A.$patterns.data("width",null),r}function r(t,e,a){a||(t.addClass("js-select"),e.data("$select",t));var n=(t.data("minmax"),e.data("width"));if(e.outerWidth()>k.outerWidth()){var i=.5*($(window).outerWidth()-t.outerWidth())-t.offset().left,r=e.data("position")+i;-n>r?r=-n:r>0&&(r=0),e.data("position",r),e.css("left",r)}}function d(t,e){e||t.removeClass("js-select")}function c(t,e){console.log("visible"),e.removeClass(t)}function w(t,e){console.log("collapse"),e.addClass(t)}function y(t,e,a){var n=!1;n||t!==e?c("minEqMax",a):(w("minEqMax",a),n=!0),!n&&1>=t||void 0===t?(w("minLessOrEq1",a),n=!0):c("minLessOrEq1",a),n?a.removeClass("expanded"):a.addClass("expanded")}function j(t){var e=t.data,a=$(this),n=a.data("type"),i=a.data("minmax");p[n][i]=parseInt(a.text())||void 0,s(p,n,i,"all"),g.ok()||console.log(g.message()),h[n](m,p[n],e.outputs[n]),g.ok()?(e.message.$error.addClass("js-hide"),e.message.$success.removeClass("js-hide")):(e.message.$success.addClass("js-hide"),e.message.$error.text(g.message()),e.message.$error.removeClass("js-hide")),g.ok()?(e.$create.removeClass("disabled"),e.$wrapper.removeClass("simulator-disabled")):(e.$create.addClass("disabled"),e.$wrapper.addClass("simulator-disabled"))}function b(t,e,a){var n,i=t.data("$min"),r=t.data("$max"),o=i.text(),l=r.text();y(o,l,t),p[e]={min:parseInt(o)||void 0,max:parseInt(l)||void 0},s(p,e,"min"),g.ok()||(v.message.$error.text(n),v.message.$success.addClass("js-hide")),s(p,e,"max",2===a?"all":"range"),g.ok()||(v.message.$error.text(n),v.message.$success.addClass("js-hide")),h[e](m,p[e],v.outputs[e]),g.ok()?(v.$create.removeClass("disabled"),v.$wrapper.removeClass("simulator-disabled")):(v.$create.addClass("disabled"),v.$wrapper.addClass("simulator-disabled"))}function x(t){t.preventDefault();var a=t.data,n=a.$keyboard,r=a.$simulator,s=i($(this).attr("href"),{fragment:"#header"}),o=a.href.queryString,d=s.queryString,c=$(s.fragment).offset().top;if(a.$root.animate({scrollTop:c},C,"swing"),"#header"===s.fragment){n.addClass("js-hide");var u=n.data("$shown");u&&u.removeClass("js-select")}else if("#simulator"===s.fragment){var h=r.data("patterns");h||(h=e({},a)),s.queryString.play=s.queryString.play||h[0],console.log("play",s.queryString.play),a.juggler||(a.juggler=new l({stage:{container:"juggler-simulator",width:r.width(),height:r.height()}})),o.play!==d.play&&(a.juggler.stop(),a.juggler.setPattern(s.queryString.play),a.juggler.play(),a.jugglerPlaying=!0)}a.href=s}v.$root=$("body, html");var C=300;$(".collapsed").each(function(t,e){var a=$(e);a.removeClass("js-hide");var n=a.outerWidth();console.log(n),a.data("width",n),a.css("width",n)}),$(".word-expanded").each(function(t,e){var a=$(e),n=a.outerWidth();a.data("width",n),a.css("width",n)});var k=v.$keyboard=$("#keyboard"),A={};k.data("$shown",null),$.each(["balls","periods","heights","patterns"],function(t,e){var a=A["$"+e]=$("#keyboard-"+e);a.data("position",0),a.data("active",!1)}),k.data("buttons",A);var q=$("#keyboard-left"),_=$("#keyboard-right");k.data("$left",q),k.data("$right",_),v.outputs={balls:$("#description-balls"),periods:$("#description-periods"),heights:$("#description-heights")},v.message={$success:$("#success"),$error:$("#error")};var P=v.$wrapper=$("#wrapper");v.$create=$("#create"),v.topCreate=v.$create.offset().top,v.$samples=$("#samples"),v.$header=$("#header");var S=v.$generator=$("#generator"),F=null,E={};S.data("active",!1),S.data("top",S.offset().top),S.data("$focus",F),$.each(["balls","periods","heights"],function(t,e){var n=E["$"+e]=$("#"+e);u&&n.addClass("android-browser");var i=$("#keyboard-"+e);"periods"===e?i.keyboard(a(1,10),function(t){return'<span class="numbers keyboard-btn number-'+t+'">'+t+"</span>"}):i.keyboard(a(1,25),function(t){return'<span class="numbers keyboard-btn number-'+t+'">'+t+"</span>"}),$.each(["min","max"],function(t,a){var r=$("#"+e+"-"+a);n.data("$"+a,r),r.data("$parent",n);var s=r.width();r.width(s);var o="40px";r.data("width",s),r.data("min-width",o),r.data("type",e),r.data("minmax",a),r.data("$keys",i)}),b(n,e,t)});var M=v.$simulator=$("#simulator");M.data("active",!1),S.data("inputs",E);for(var I in A){var L=A[I];L.on("click",".keyboard-btn",L,function(t){var e=$(this),a=t.data,n=a.data("$select");n&&d(n),a.data("$select",e),r(e,a)})}t(),v.$create.on("click",v,e),v.$root.on("click",S,function(t){var e=t.data,a=e.data("$focus");a&&(n("blureditable",e,a[0]),e.data("$focus",null))}),S.on("click",".editable",S,function(t){t.stopPropagation();var e=t.data,a=e.data("$focus");a&&n("blureditable",e,a[0]),a=$(".contenteditable",this).first(),e.data("$focus",a),n("focuseditable",e,a[0])}),S.on("click",".contenteditable",S,function(t){t.stopPropagation();var e=t.data,a=e.data("$focus");a&&n("blureditable",e,a[0]),a=$(this),e.data("$focus",a),n("focuseditable",e,this)}),S.on("focuseditable",".contenteditable",k,function(t){var e=t.data,a=$(this),n=a.data("$keys"),i=a.data("$parent"),s=(e.data("$shown"),a.data("minmax"));i.addClass("expanded"),i.hasClass("minEqMax")&&c("minEqMax",i),i.hasClass("minLessOrEq1")&&c("minLessOrEq1",i),a.addClass("js-select");var o=n.data("width");o||(o=n.width()-e.outerWidth()+120,n.data("width",o)),e.removeClass("js-hide"),e.data("$shown",n),n.addClass("js-select"),n.data("active",!0);var l,u=parseInt(a.text().trim()),h=!1;"min"===s?(l=parseInt(i.data("$max").text().trim()),u>l&&(u=l,h=!0,console.log("onlymove"))):(l=parseInt(i.data("$min").text().trim()),l>u&&(u=l,h=!0,console.log("onlymove")));var m=n.data("$select");if(m&&!m.hasClass(p)&&d(m),u){var p="number-"+u;r($("."+p,n),n,h)}}),S.on("blureditable",".contenteditable",v,function(t){console.log("blureditable");var e=$(this),a=t.data,n=a.$keyboard,i=e.data("$keys"),r=n.data("$shown"),s=e.data("$parent"),o=s.data("$min").text(),l=s.data("$max").text();y(o,l,s),e.removeClass("js-select"),r&&(n.addClass("js-hide"),i.removeClass("js-select")),i.data("active",!1)}),S.on("inputeditable",".contenteditable",v,j);k.on("click",function(t){t.stopPropagation()}),q.on("click",k,function(t){var e=t.data,a=e.data("$shown");if(a.outerWidth()>e.outerWidth()){var n=e.width()-100,i=a.data("position")+n;i=Math.min(i,0),a.data("position",i),a.css("left",i)}}),_.on("click",k,function(t){var e=t.data,a=e.data("$shown");if(a.outerWidth()>e.outerWidth()){var n=e.width()-100,i=a.data("position")-n;i=Math.max(i,-a.data("width")),a.data("position",i),a.css("left",i)}}),v.$root.on("click",".internal-link.disabled",function(t){t.preventDefault()}),v.$root.on("click",".internal-link:not(.disabled)",v,x),A.$patterns.on("click","a:not(.disabled)",v,x),k.on("click",".keyboard-btn.numbers",S,function(t){var e=parseInt($(this).text()),a=t.data,i=a.data("$focus");i.text(e),n("inputeditable",a,i[0])}),$(window).on("scroll",v,function(t){var e=t.data,a=e.$generator,n=e.$simulator,i=$(window).scrollTop(),r=a.offset().top,s=n.offset().top;r-50>i?e.$header.removeClass("reduce"):e.$header.addClass("reduce");var o=a.data("active");o&&(r-50>i||i>=e.topCreate)?(a.trigger("off"),a.data("active",!1)):!o&&i>=r-50&&i<e.topCreate&&(a.trigger("on"),a.data("active",!0)),o=n.data("active"),o&&s-50>i?(n.trigger("off"),n.data("active",!1)):!o&&!P.hasClass("simulator-disabled")&&i>=s-50&&(n.trigger("on"),n.data("active",!0))}),M.on("off",k,function(t){var e=t.data,a=e.data("$shown"),n=e.data("buttons");n.$patterns.removeClass("js-select"),a&&(a.removeClass("js-select"),e.data("$shown",null)),e.addClass("js-hide")}),S.on("off",k,function(t){var e=t.data,a=e.data("$shown");a&&(a.removeClass("js-select"),e.data("$shown",null)),e.addClass("js-hide")}),M.on("on",v,function(t){console.log("ON simulator");var a=t.data,n=a.$keyboard,i=n.data("$shown"),r=n.data("buttons"),s=a.href,o=a.$simulator,d=o.data("patterns");d||(d=e({},a)),a.jugglerPlaying||(s.queryString.play=s.queryString.play||d[0],a.juggler||(a.juggler=new l({stage:{container:"juggler-simulator",width:o.width(),height:o.height()}})),a.juggler.stop(),a.juggler.setPattern(s.queryString.play),a.juggler.play(),a.jugglerPlaying=!0),i&&i.removeClass("js-select"),i=r.$patterns,n.data("$shown",i),i.addClass("js-select"),n.removeClass("js-hide");var c=r.$patterns.data("width");c||(c=r.$patterns.width()-n.outerWidth()+120,r.$patterns.data("width",c))}),S.on("on",v,function(t){{var e=t.data,a=e.$generator.data("$focus"),n=e.$keyboard,i=n.data("$shown");n.data("buttons")}i&&(i.removeClass("js-select"),n.data("$shown",null)),a&&(i=a.data("$keys"),n.data("$shown",i),i.addClass("js-select"),n.removeClass("js-hide"))})})},{"./Juggler/juggler.js":"/home/pantalaimon/prog/web/projects/joggol/src/js/Juggler/juggler.js","./lang/es.js":"/home/pantalaimon/prog/web/projects/joggol/src/js/lang/es.js","siteswap-generator":"/home/pantalaimon/prog/web/projects/joggol/node_modules/siteswap-generator/index.js"}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Animation/Animation.js":[function(t,e){function a(){var t=Date.now(),e={time:(t-this.played)*this.v};this.func(e),this.id=window.requestAnimationFrame(a.bind(this))}t("./rAF.js");var n=function(t){this.func=t,this.on=!1,this.paused=this.played=Date.now(),this.v=1,this.active=!1};n.prototype={play:function(){this.func&&!this.on&&(this.paused&&(this.played+=Date.now()-this.paused),a.call(this),this.active=this.on=!0)},pause:function(){this.func&&this.on&&(cancelAnimationFrame(this.id),this.active=this.on=!1,this.paused=Date.now())},mute:function(){this.func&&this.on&&(cancelAnimationFrame(this.id),this.active=this.on=!1,this.paused=void 0)},stop:function(){this.func&&(this.pause(),this.paused=this.played=Date.now())},seek:function(t){if(this.func){var e=Date.now();this.played=e-t,this.paused=e}},speed:function(t){if(this.func&&isFinite(t))if(t){t/=this.v;var e=Date.now(),a=(e-this.played)/t;if(this.played=e-a,this.paused){var n=(e-this.paused)/t;this.paused=e-n}this.v*=t,this.active&&this.play()}else this.pause(),this.active=!0},remove:function(){this.func&&(this.pause(),delete this.func)}},e.exports=n},{"./rAF.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Animation/rAF.js"}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Animation/rAF.js":[function(){!function(){for(var t=0,e=["ms","moz","webkit","o"],a=0;a<e.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[e[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[a]+"CancelAnimationFrame"]||window[e[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var a=(new Date).getTime(),n=Math.max(0,16-(a-t)),i=window.setTimeout(function(){e(a+n)},n);return t=a+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},{}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Layer.js":[function(t,e){function a(){this.shapes=[],this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.top="0",this.canvas.style.left="0",this.ctx=this.canvas.getContext("2d")}var n=a.prototype;n.add=function(t){this.shapes.push(t),t.layer=this},n.draw=function(){this.clear(),this.shapes.forEach(function(t){t.draw()})};var i=window.navigator.userAgent,r=/android/i.test(i)&&i.indexOf("534.30");r?(console.log("native_android_browser"),n.clear=function(){this.ctx.clearRect(0,0,this.width,this.height),this.canvas.style.display="none",this.canvas.offsetHeight,this.canvas.style.display="inherit"}):n.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},n.remove=function(){this.clear(),this.shapes.forEach(function(t){delete t.layer}),this.shapes=[]},e.exports=a},{}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Shape/Circle.js":[function(t,e){function a(t){this.shape=t}a.prototype.draw=function(){var t=this.shape,e=this.layer;e.ctx.beginPath(),e.ctx.arc(t.x,t.y,t.radius,0,2*Math.PI),e.ctx.closePath(),t.fill&&(e.ctx.fillStyle=t.fill,e.ctx.fill())},a.prototype.setX=function(t){this.shape.x=t},a.prototype.setY=function(t){this.shape.y=t},e.exports=a},{}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Stage.js":[function(t,e){function a(t){this.layers=[];var e=this.container=document.getElementById(t.container);if(!e)throw new Error("element #"+t.container+" does not exist");var a=e.style;a.position="relative",a.width=t.width+"px",a.height=t.height+"px",a.overflow="hidden",this.width=parseInt(t.width),this.height=parseInt(t.height)}a.prototype.add=function(t){var e=t.canvas;this.layers.push(t),e.width=t.width=this.width,e.height=t.height=this.height,this.container.appendChild(e)},a.prototype.resize=function(t){var e=parseInt(t.width),a=parseInt(t.height),n=this.container.style;isFinite(e)&&(n.width=e+"px",this.width=e),isFinite(a)&&(n.height=a+"px",this.height=a)},e.exports=a},{}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Kinema.js":[function(t,e){e.exports={Animation:t("./Animation/Animation.js"),Stage:t("./Canvas/Stage.js"),Layer:t("./Canvas/Layer.js"),Circle:t("./Canvas/Shape/Circle.js")}},{"./Animation/Animation.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Animation/Animation.js","./Canvas/Layer.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Layer.js","./Canvas/Shape/Circle.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Shape/Circle.js","./Canvas/Stage.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Stage.js"}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/siteswap-generator/index.js":[function(t,e){e.exports=t("./src/siteswap-generator")},{"./src/siteswap-generator":"/home/pantalaimon/prog/web/projects/joggol/node_modules/siteswap-generator/src/siteswap-generator.js"}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/siteswap-generator/src/siteswap-generator.js":[function(t,e){function a(t){var e={};for(var a in t)e[a]=t[a];return e}function n(t,e,a){var n=[];"number"==typeof t&&(t={max:t}),void 0===t.min&&(t.min=t.max),"number"==typeof e&&(e={max:e}),void 0===e.min&&(e.min=1),void 0===a?a={max:e.max*t.max}:"number"==typeof a?a={max:a}:"number"!=typeof a.max&&(a.max=e.max*t.max),void 0===a.min&&(a.min=0),console.log(t,e,a);for(var r=t.max;r>=t.min;--r){for(var s,o,l=Math.max(e.min,2),d=e.max;d>=l;--d){s=Math.min(a.max,d*r),o=Math.max(a.min,r+1);for(var c=s;c>=o;--c)i(r,d,c,n)}e.min<=1&&1<=e.max&&a.min<=r&&r<=a.max&&n.push([r])}return n}function i(t,e,a,n){if(1===e&&t===a)n.push([t]);else{var i={};i[a%e]=!0,r(e,a,i,{array:[a],index:0,pos:1,rest:t*e-a},n)}}function r(t,e,n,i,s){if(i.pos<t){var o=t-i.pos,l=i.array[i.index],d=Math.min(l,i.rest),c=i.rest-e*(o-1);o>1&&c++,c=Math.max(c,0);for(var u=d;u>=c;--u){var h=l>u?0:i.index+1,m=(u+i.pos)%t;if(void 0===n[m]){var p=a(n);p[m]=!0,r(t,e,p,{array:i.array.concat([u]),index:h,pos:i.pos+1,rest:i.rest-u},s)}}}else 0===i.index&&s.push(i.array)}e.exports=n},{}],"/home/pantalaimon/prog/web/projects/joggol/src/js/Juggler/extend.js":[function(t,e){function a(){"use strict";var t,e,i,r,o,l,d=arguments[0],c=1,u=arguments.length,h=!1;for("boolean"==typeof d?(h=d,d=arguments[1]||{},c=2):("object"!=typeof d&&"function"!=typeof d||null==d)&&(d={});u>c;++c)if(t=arguments[c],null!=t)for(e in t)i=d[e],r=t[e],d!==r&&(h&&r&&(s(r)||(o=Array.isArray(r)))?(o?(o=!1,l=i&&Array.isArray(i)?i:[]):l=i&&s(i)?i:{},d[e]=a(h,l,r)):r!==n&&(d[e]=r));return d}var n,i=Object.prototype.hasOwnProperty,r=Object.prototype.toString,s=function(t){"use strict";if(!t||"[object Object]"!==r.call(t))return!1;var e=i.call(t,"constructor"),a=t.constructor&&t.constructor.prototype&&i.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!a)return!1;var s;for(s in t);return s===n||i.call(t,s)};e.exports=a},{}],"/home/pantalaimon/prog/web/projects/joggol/src/js/Juggler/juggler.js":[function(t,e){function a(t,e){var a,n=e.time,i=e.position,r=n.now;if(r<n.thrown){a=i.middle.x-i.start.x,t.setX(i.start.x+a*r/n.thrown);var s=.5*e.gravity*n.thrown;t.setY(i.start.y-s*r+.5*e.gravity*r*r)}else a=i.end.x-i.middle.x,t.setX(i.middle.x+a*(r-n.thrown)/n.caught),t.setY(i.middle.y)}var n=t("kinemajs"),i=t("./extend.js"),r=function(){function t(t,e){var a,n=t.juggling,i=t.stage,r=(e-n.waiting.time)*n.interval;if(i.width){var s=(n.integer_height-n.waiting.time)*n.interval,o=s/r;a=o*i.width,console.log("uu",o)}else{var s=(3-n.waiting.time)*n.interval,o=s/r;a=1.5*n.height*o}return{width:.5*a,gravity:8*n.height/(r*r),shift:n.waiting.shift*o,radius:n.balls.radius*o}}function e(e){console.log(e.stage),this.attrs={},this.attrs=i(!0,this.attrs,{stage:{width:500,height:650},juggling:{interval:500,waiting:{time:.5,shift:50},integer_height:5,balls:{radius:10,colors:["red","blue","green","yellow","black","orange","purple"]},height:.8*e.stage.height,center:{x:.5*e.stage.width,y:.9*e.stage.height}},layer:new n.Layer},e),this.attrs.stage=new n.Stage(this.attrs.stage),this.attrs.stage.add(this.attrs.layer);var a=this.attrs.juggling,r=t(this.attrs,this.attrs.juggling.integer_height);a.width=r.width,a.gravity=r.gravity}for(var r="abcdefghijklmnopqrstuvwxyz",s={},o=0;10>o;++o)s[o]=o;for(var o=0;o<r.length;++o)s[r[o]]=o+10;return e.toPattern=function(t){return t.split("").map(function(t){return s[t]})},e.prototype.setPattern=function(i){"string"==typeof i&&(i=e.toPattern(i));var r,s,o,l,d=this.attrs,c=(d.stage,d.juggling),u=Math.max.apply(null,i);if(u>c.integer_height){var h=t(d,u);l=h.width,o=h.gravity,s=h.shift,r=h.radius}else s=c.waiting.shift,l=c.width,o=c.gravity,r=c.balls.radius;var m=i.reduce(function(t,e){return t+e},0);if(m%i.length!=0)throw new Error("El patró es irrealitzable. Es necessita un nombre enter de boles. Actualment: "+m/i.length);m/=i.length;for(var p=[],g=0;g<i.length;++g){var f={};f.value=i[g],f.next=(g+f.value)%i.length,f.period=(f.value-c.waiting.time)*c.interval,f.velocity=.5*o*f.period,p.push(f)}for(var g=0;g<i.length;++g)if(!p[g].cycle){for(var v={},w=g,y=0;!v[w];)v[w]=!0,w=p[w].next,y+=p[w].value;for(var w in v)p[w].cycle=y}var j=c.center.y;s/=2;var b=c.center.x-l/2,x=c.center.x+l/2,$=0,C=0,g=0,k=0,A={};for(this.balls=[];m>g;){if(0!==p[C].value)if(void 0===A[$]){A[$]=g,A[$+p[C].value]=g,++g;var q={figure:new n.Circle({x:$%2===0?b+15:x-15,y:j,radius:r||10,fill:c.balls.colors[k%c.balls.colors.length]}),start:$,cycle:p[C].cycle};this.balls.push(q),d.layer.add(q.figure),++k}else A[$+p[C].value]=p[C].value;++$,C=$%p.length}var _=this;d.animation=new n.Animation(function(t){var e=Math.floor(t.time/c.interval);_.balls.forEach(function(n){var i=t.time-c.interval*n.start;if(i>=0){i%=n.cycle*c.interval;for(var r,l=n.start%p.length;;){r=p[l].value;var d=r*c.interval;if(d>i)break;i-=d,l=p[l].next}var u=e-Math.floor(i/c.interval),h={};h.start=u%2===0?{x:b+s,y:j}:{x:x-s,y:j},(u+p[l].value)%2===0?(h.middle={x:b-s,y:j},h.end={x:b+s,y:j}):(h.middle={x:x+s,y:j},h.end={x:x-s,y:j});var m={value:p[l].value,time:{total:c.interval,thrown:p[l].period,caught:c.interval*p[l].value-p[l].period,now:i},left:u%2===0,gravity:o,position:h};a(n.figure,m)}}),d.layer.draw()})},e.prototype.removePattern=function(){var t=this;t.attrs.animation.stop(),t.attrs.layer.remove()},e.prototype.play=function(){var t=this.attrs.animation;t&&t.play()},e.prototype.pause=function(){var t=this.attrs.animation;t&&t.pause()},e.prototype.mute=function(){var t=this.attrs.animation;t&&t.mute()},e.prototype.stop=function(){var t=this.attrs.animation;t&&t.stop(),this.attrs.layer.remove()},e.prototype.speed=function(t){var e=this.attrs.animation;e&&e.speed(t)},e.prototype.colors=function(t){this.stop(),this.attrs.juggling.balls.colors=[].concat(t)},e}();e.exports=r},{"./extend.js":"/home/pantalaimon/prog/web/projects/joggol/src/js/Juggler/extend.js",kinemajs:"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Kinema.js"}],"/home/pantalaimon/prog/web/projects/joggol/src/js/lang/es.js":[function(t,e){function a(t){return t[0].toUpperCase(t)+t.substring(1)}e.exports={order:["patterns","balls","periods","heights"],patterns:"Patrones",balls:[function(t,e){return"de "+e+" bolas"},function(t,e){return"de máximo "+e+" bolas"},function(t,e){return"de "+t+" a "+e+" bolas"},function(){return"L'interval de boles que demanes no es correcte"}],periods:[function(t,e){return"de periodo "+e},function(t,e){return"con periodos no más grandes de "+e},function(t,e){return"con periodos entre "+t+" y "+e},function(){return"L'interval de períodes que demanes no es correcte"}],heights:[function(t,e){return"con lanzamientos no más altos de "+e},function(t){return"con algún lanzamiento mayor o igual a "+t},function(t){return"con algún lanzamiento de "+t+" y no más alto"},function(t,e){return"con lanzamientos mayores o iguales a "+t+" y no superiores a "+e},function(){return"L'interval de períodes que demanes no es correcte"}],message:{isNotAInt:function(t){return t+"no és un nombre enter"},invalidRange:function(t,e){return e={balls:"el número de bolas",periods:"el periodo",heights:"la altura"}[e],a(e)+" menor ("+t.min+") no puede sobrepasar "+e+" mayor ("+t.max+")"},emptyWithBigPeriod:function(){return"No existen patrones válidos dentro del rango indicado. Prueba que la altura máxima sea mayor al número mínimo de bolas"},emptyWithLittlePeriod:function(){return"No existen patrones válidos dentro del rango indicado. Prueba que la altura máxima sea mayor o igual al número mínimo de bolas"}}}},{}]},{},["./src/js/main.js"]);