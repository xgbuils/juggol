!function t(e,a,i){function n(s,o){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(r)return r(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var c=a[s]={exports:{}};e[s][0].call(c.exports,function(t){var a=e[s][1][t];return n(a?a:t)},c,c.exports,t,e,a,i)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({"./src/js/main.js":[function(t){function e(){this._length=0,this._errors={}}function a(t,e){for(var a=[],i=t;e>=i;++i)a.push(i);return a}function i(t,e,a){var i=$.Event(t);i.target=a,e.trigger(i)}function n(t,e){var a=t.split("?"),i=a[0],n={};if(a[1]){var r=a[1].split("&");for(var s in r)a=r[s].split("="),n[a[0]]=a[1]}return{fragment:i||e.fragment,queryString:n}}function r(t){return!isNaN(t)&&t===Math.floor(t)}function s(t,e,a,i){var n=d.message,s=t[e],o=s[a];if(r(o)?g.remove(a+e):g.add(a+e,n.isNotAInt(o)),("all"===i||"range"===i)&&(s.min>s.max?(console.log("min > max"),g.add(e,n.invalidRange(s,e)),console.log(g.ok())):g.remove(e)),"all"===i){var l=t.balls.min,c=t.heights.max,u=t.periods.min;l>=c&&u>1?g.add("all",n.emptyWithBigPeriod()):1===u&&l>c?g.add("all",n.emptyWithLittlePeriod()):g.remove("all")}}var o=t("siteswap-generator"),l=t("./Juggler/juggler.js"),d=t("./lang/ca.js"),c=window.navigator.userAgent,u=/android/i.test(c)&&c.indexOf("534.30");e.prototype={ok:function(){return 0===this._length},add:function(t,e){t in this._errors||++this._length,this._errors[t]=e},remove:function(t){t in this._errors&&(delete this._errors[t],--this._length)},message:function(){for(var t in this._errors)return this._errors[t]}},$.fn.keyboard=function(t,e){e=e||function(t){return t},$(this).html("<ul>"+t.map(function(t){return"<li>"+e(t)+"</li>"}).join("")+"</ul>")};var h={balls:function(t,e,a){t.error=!1,void 0!==e.min&&void 0!==e.max&&e.min<=e.max&&e.min>0?e.min===e.max?t.balls=d.balls[0](e.min,e.max):1===e.min?t.balls=d.balls[1](e.min,e.max):e.min<e.max&&(t.balls=d.balls[2](e.min,e.max)):t.error=d.balls[3](e.min,e.max),a.text(t.balls)},periods:function(t,e,a){t.error=!1,void 0!==e.min&&void 0!==e.max&&e.min<=e.max&&e.min>0?e.min===e.max?t.period=d.periods[0](e.min,e.max):1===e.min?t.period=d.periods[1](e.min,e.max):e.min<e.max&&(t.period=d.periods[2](e.min,e.max)):t.error=d.periods[3](e.min,e.max),a.text(t.period)},heights:function(t,e,a){t.error=!1,void 0===e.min&&void 0===e.max?t.height="":(void 0===e.min||e.min<=1)&&e.max>=0?t.height=d.heights[0](e.min,e.max):void 0===e.max&&e.min>=0?t.height=d.heights[1](e.min,e.max):e.min<=e.max&&e.min>=0?t.height=e.min===e.max?d.heights[2](e.min,e.max):d.heights[3](e.min,e.max):t.error=d.heights[4](e.min,e.max),a.text(t.height)}},m={},p={},g=new e,f="0123456789abcdefghijklmnopqrstuvxyz",v={values:{},href:{queryString:{}}};$(document).ready(function(){function t(){var e=$("li",v.$samples).slice(0,1);v.$samples.animate({"margin-left":-e.width()},C,"swing",function(){v.$samples.css("margin-left",0),e.detach(),v.$samples.append(e)}),setTimeout(t,1e4)}function e(t,e){e=e||t.data;var a=(e.$keyboard,e.$simulator),i=(e.$generator,[E.$balls,E.$periods,E.$heights]),n=$.map(i,function(t){return{min:parseInt(t.data("$min").text())||void 0,max:parseInt(t.data("$max").text())||void 0}}),r=o.apply(null,n);return r=r.map(function(t){return t.map(function(t){return f[t]}).join("")}),a.data("patterns",r),q.$patterns.keyboard(r,function(t){return'<a class="keyboard-btn" href="#simulator?play='+t+'">'+t+"</a>"}),e.juggler&&e.juggler.stop(),e.jugglerPlaying=!1,q.$patterns.data("active",!1),q.$patterns.data("position",0),q.$patterns.css("left",0),q.$patterns.data("width",null),r}function r(t,e,a){a||(t.addClass("js-select"),e.data("$select",t));var i=(t.data("minmax"),e.data("width"));if(e.outerWidth()>k.outerWidth()){var n=.5*($(window).outerWidth()-t.outerWidth())-t.offset().left,r=e.data("position")+n;-i>r?r=-i:r>0&&(r=0),e.data("position",r),e.css("left",r)}}function d(t,e){e||t.removeClass("js-select")}function c(t,e){console.log("visible"),e.removeClass(t)}function w(t,e){console.log("collapse"),e.addClass(t)}function j(t,e,a){var i=!1;i||t!==e?c("minEqMax",a):(w("minEqMax",a),i=!0),!i&&1>=t||void 0===t?(w("minLessOrEq1",a),i=!0):c("minLessOrEq1",a),i?a.removeClass("expanded"):a.addClass("expanded")}function b(t){var e=t.data,a=$(this),i=a.data("type"),n=a.data("minmax");p[i][n]=parseInt(a.text())||void 0,s(p,i,n,"all"),g.ok()||console.log(g.message()),h[i](m,p[i],e.outputs[i]),g.ok()?(e.message.$error.addClass("js-hide"),e.message.$success.removeClass("js-hide")):(e.message.$success.addClass("js-hide"),e.message.$error.text(g.message()),e.message.$error.removeClass("js-hide")),g.ok()?(e.$create.removeClass("disabled"),e.$wrapper.removeClass("simulator-disabled")):(e.$create.addClass("disabled"),e.$wrapper.addClass("simulator-disabled"))}function y(t,e,a){var i,n=t.data("$min"),r=t.data("$max"),o=n.text(),l=r.text();j(o,l,t),p[e]={min:parseInt(o)||void 0,max:parseInt(l)||void 0},s(p,e,"min"),g.ok()||(v.message.$error.text(i),v.message.$success.addClass("js-hide")),s(p,e,"max",2===a?"all":"range"),g.ok()||(v.message.$error.text(i),v.message.$success.addClass("js-hide")),h[e](m,p[e],v.outputs[e]),g.ok()?(v.$create.removeClass("disabled"),v.$wrapper.removeClass("simulator-disabled")):(v.$create.addClass("disabled"),v.$wrapper.addClass("simulator-disabled"))}function x(t){t.preventDefault();var a=t.data,i=a.$keyboard,r=a.$simulator,s=n($(this).attr("href"),{fragment:"#header"}),o=a.href.queryString,d=s.queryString,c=$(s.fragment).offset().top;if(a.$root.animate({scrollTop:c},C,"swing"),"#header"===s.fragment){i.addClass("js-hide");var u=i.data("$shown");u&&u.removeClass("js-select")}else if("#simulator"===s.fragment){var h=r.data("patterns");h||(h=e({},a)),s.queryString.play=s.queryString.play||h[0],console.log("play",s.queryString.play),a.juggler||(a.juggler=new l({stage:{container:"juggler-simulator",width:r.width(),height:r.height()}})),o.play!==d.play&&(a.juggler.stop(),a.juggler.setPattern(s.queryString.play),a.juggler.play(),a.jugglerPlaying=!0)}a.href=s}v.$root=$("body, html");var C=300;$(".collapsed").each(function(t,e){var a=$(e);a.removeClass("js-hide");var i=a.outerWidth();console.log(i),a.data("width",i),a.css("width",i)}),$(".word-expanded").each(function(t,e){var a=$(e),i=a.outerWidth();a.data("width",i),a.css("width",i)});var k=v.$keyboard=$("#keyboard"),q={};k.data("$shown",null),$.each(["balls","periods","heights","patterns"],function(t,e){var a=q["$"+e]=$("#keyboard-"+e);a.data("position",0),a.data("active",!1)}),k.data("buttons",q);var A=$("#keyboard-left"),_=$("#keyboard-right");k.data("$left",A),k.data("$right",_),v.outputs={balls:$("#description-balls"),periods:$("#description-periods"),heights:$("#description-heights")},v.message={$success:$("#success"),$error:$("#error")};var P=v.$wrapper=$("#wrapper");v.$create=$("#create"),v.topCreate=v.$create.offset().top,v.$samples=$("#samples"),v.$header=$("#header");var S=v.$generator=$("#generator"),F=null,E={};S.data("active",!1),S.data("top",S.offset().top),S.data("$focus",F),$.each(["balls","periods","heights"],function(t,e){var i=E["$"+e]=$("#"+e);u&&i.addClass("android-browser");var n=$("#keyboard-"+e);"periods"===e?n.keyboard(a(1,10),function(t){return'<span class="numbers keyboard-btn number-'+t+'">'+t+"</span>"}):n.keyboard(a(1,25),function(t){return'<span class="numbers keyboard-btn number-'+t+'">'+t+"</span>"}),$.each(["min","max"],function(t,a){var r=$("#"+e+"-"+a);i.data("$"+a,r),r.data("$parent",i);var s=r.width();r.width(s);var o="40px";r.data("width",s),r.data("min-width",o),r.data("type",e),r.data("minmax",a),r.data("$keys",n)}),y(i,e,t)});var M=v.$simulator=$("#simulator");M.data("active",!1),S.data("inputs",E);for(var I in q){var L=q[I];L.on("click",".keyboard-btn",L,function(t){var e=$(this),a=t.data,i=a.data("$select");i&&d(i),a.data("$select",e),r(e,a)})}t(),v.$create.on("click",v,e),v.$root.on("click",S,function(t){var e=t.data,a=e.data("$focus");a&&(i("blureditable",e,a[0]),e.data("$focus",null))}),S.on("click",".editable",S,function(t){t.stopPropagation();var e=t.data,a=e.data("$focus");a&&i("blureditable",e,a[0]),a=$(".contenteditable",this).first(),e.data("$focus",a),i("focuseditable",e,a[0])}),S.on("click",".contenteditable",S,function(t){t.stopPropagation();var e=t.data,a=e.data("$focus");a&&i("blureditable",e,a[0]),a=$(this),e.data("$focus",a),i("focuseditable",e,this)}),S.on("focuseditable",".contenteditable",k,function(t){var e=t.data,a=$(this),i=a.data("$keys"),n=a.data("$parent"),s=(e.data("$shown"),a.data("minmax"));n.addClass("expanded"),n.hasClass("minEqMax")&&c("minEqMax",n),n.hasClass("minLessOrEq1")&&c("minLessOrEq1",n),a.addClass("js-select");var o=i.data("width");o||(o=i.width()-e.outerWidth()+120,i.data("width",o)),e.removeClass("js-hide"),e.data("$shown",i),i.addClass("js-select"),i.data("active",!0);var l,u=parseInt(a.text().trim()),h=!1;"min"===s?(l=parseInt(n.data("$max").text().trim()),u>l&&(u=l,h=!0,console.log("onlymove"))):(l=parseInt(n.data("$min").text().trim()),l>u&&(u=l,h=!0,console.log("onlymove")));var m=i.data("$select");if(m&&!m.hasClass(p)&&d(m),u){var p="number-"+u;r($("."+p,i),i,h)}}),S.on("blureditable",".contenteditable",v,function(t){console.log("blureditable");var e=$(this),a=t.data,i=a.$keyboard,n=e.data("$keys"),r=i.data("$shown"),s=e.data("$parent"),o=s.data("$min").text(),l=s.data("$max").text();j(o,l,s),e.removeClass("js-select"),r&&(i.addClass("js-hide"),n.removeClass("js-select")),n.data("active",!1)}),S.on("inputeditable",".contenteditable",v,b);k.on("click",function(t){t.stopPropagation()}),A.on("click",k,function(t){var e=t.data,a=e.data("$shown");if(a.outerWidth()>e.outerWidth()){var i=e.width()-100,n=a.data("position")+i;n=Math.min(n,0),a.data("position",n),a.css("left",n)}}),_.on("click",k,function(t){var e=t.data,a=e.data("$shown");if(a.outerWidth()>e.outerWidth()){var i=e.width()-100,n=a.data("position")-i;n=Math.max(n,-a.data("width")),a.data("position",n),a.css("left",n)}}),v.$root.on("click",".internal-link.disabled",function(t){t.preventDefault()}),v.$root.on("click",".internal-link:not(.disabled)",v,x),q.$patterns.on("click","a:not(.disabled)",v,x),k.on("click",".keyboard-btn.numbers",S,function(t){var e=parseInt($(this).text()),a=t.data,n=a.data("$focus");n.text(e),i("inputeditable",a,n[0])}),$(window).on("scroll",v,function(t){var e=t.data,a=e.$generator,i=e.$simulator,n=$(window).scrollTop(),r=a.offset().top,s=i.offset().top;r-50>n?e.$header.removeClass("reduce"):e.$header.addClass("reduce");var o=a.data("active");o&&(r-50>n||n>=e.topCreate)?(a.trigger("off"),a.data("active",!1)):!o&&n>=r-50&&n<e.topCreate&&(a.trigger("on"),a.data("active",!0)),o=i.data("active"),o&&s-50>n?(i.trigger("off"),i.data("active",!1)):!o&&!P.hasClass("simulator-disabled")&&n>=s-50&&(i.trigger("on"),i.data("active",!0))}),M.on("off",k,function(t){var e=t.data,a=e.data("$shown"),i=e.data("buttons");i.$patterns.removeClass("js-select"),a&&(a.removeClass("js-select"),e.data("$shown",null)),e.addClass("js-hide")}),S.on("off",k,function(t){var e=t.data,a=e.data("$shown");a&&(a.removeClass("js-select"),e.data("$shown",null)),e.addClass("js-hide")}),M.on("on",v,function(t){console.log("ON simulator");var a=t.data,i=a.$keyboard,n=i.data("$shown"),r=i.data("buttons"),s=a.href,o=a.$simulator,d=o.data("patterns");d||(d=e({},a)),a.jugglerPlaying||(s.queryString.play=s.queryString.play||d[0],a.juggler||(a.juggler=new l({stage:{container:"juggler-simulator",width:o.width(),height:o.height()}})),a.juggler.stop(),a.juggler.setPattern(s.queryString.play),a.juggler.play(),a.jugglerPlaying=!0),n&&n.removeClass("js-select"),n=r.$patterns,i.data("$shown",n),n.addClass("js-select"),i.removeClass("js-hide");var c=r.$patterns.data("width");c||(c=r.$patterns.width()-i.outerWidth()+120,r.$patterns.data("width",c))}),S.on("on",v,function(t){{var e=t.data,a=e.$generator.data("$focus"),i=e.$keyboard,n=i.data("$shown");i.data("buttons")}n&&(n.removeClass("js-select"),i.data("$shown",null)),a&&(n=a.data("$keys"),i.data("$shown",n),n.addClass("js-select"),i.removeClass("js-hide"))})})},{"./Juggler/juggler.js":"/home/pantalaimon/prog/web/projects/joggol/src/js/Juggler/juggler.js","./lang/ca.js":"/home/pantalaimon/prog/web/projects/joggol/src/js/lang/ca.js","siteswap-generator":"/home/pantalaimon/prog/web/projects/joggol/node_modules/siteswap-generator/index.js"}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Animation/Animation.js":[function(t,e){function a(){var t=Date.now(),e={time:(t-this.played)*this.v};this.func(e),this.id=window.requestAnimationFrame(a.bind(this))}t("./rAF.js");var i=function(t){this.func=t,this.on=!1,this.paused=this.played=Date.now(),this.v=1,this.active=!1};i.prototype={play:function(){this.func&&!this.on&&(this.paused&&(this.played+=Date.now()-this.paused),a.call(this),this.active=this.on=!0)},pause:function(){this.func&&this.on&&(cancelAnimationFrame(this.id),this.active=this.on=!1,this.paused=Date.now())},mute:function(){this.func&&this.on&&(cancelAnimationFrame(this.id),this.active=this.on=!1,this.paused=void 0)},stop:function(){this.func&&(this.pause(),this.paused=this.played=Date.now())},seek:function(t){if(this.func){var e=Date.now();this.played=e-t,this.paused=e}},speed:function(t){if(this.func&&isFinite(t))if(t){t/=this.v;var e=Date.now(),a=(e-this.played)/t;if(this.played=e-a,this.paused){var i=(e-this.paused)/t;this.paused=e-i}this.v*=t,this.active&&this.play()}else this.pause(),this.active=!0},remove:function(){this.func&&(this.pause(),delete this.func)}},e.exports=i},{"./rAF.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Animation/rAF.js"}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Animation/rAF.js":[function(){!function(){for(var t=0,e=["ms","moz","webkit","o"],a=0;a<e.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[e[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[a]+"CancelAnimationFrame"]||window[e[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var a=(new Date).getTime(),i=Math.max(0,16-(a-t)),n=window.setTimeout(function(){e(a+i)},i);return t=a+i,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},{}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Layer.js":[function(t,e){function a(){this.shapes=[],this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.top="0",this.canvas.style.left="0",this.ctx=this.canvas.getContext("2d")}var i=a.prototype;i.add=function(t){this.shapes.push(t),t.layer=this},i.draw=function(){this.clear(),this.shapes.forEach(function(t){t.draw()})};var n=window.navigator.userAgent,r=/android/i.test(n)&&n.indexOf("534.30");r?(console.log("native_android_browser"),i.clear=function(){this.ctx.clearRect(0,0,this.width,this.height),this.canvas.style.display="none",this.canvas.offsetHeight,this.canvas.style.display="inherit"}):i.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},i.remove=function(){this.clear(),this.shapes.forEach(function(t){delete t.layer}),this.shapes=[]},e.exports=a},{}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Shape/Circle.js":[function(t,e){function a(t){this.shape=t}a.prototype.draw=function(){var t=this.shape,e=this.layer;e.ctx.beginPath(),e.ctx.arc(t.x,t.y,t.radius,0,2*Math.PI),e.ctx.closePath(),t.fill&&(e.ctx.fillStyle=t.fill,e.ctx.fill())},a.prototype.setX=function(t){this.shape.x=t},a.prototype.setY=function(t){this.shape.y=t},e.exports=a},{}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Stage.js":[function(t,e){function a(t){this.layers=[];var e=this.container=document.getElementById(t.container);if(!e)throw new Error("element #"+t.container+" does not exist");var a=e.style;a.position="relative",a.width=t.width+"px",a.height=t.height+"px",a.overflow="hidden",this.width=parseInt(t.width),this.height=parseInt(t.height)}a.prototype.add=function(t){var e=t.canvas;this.layers.push(t),e.width=t.width=this.width,e.height=t.height=this.height,this.container.appendChild(e)},a.prototype.resize=function(t){var e=parseInt(t.width),a=parseInt(t.height),i=this.container.style;isFinite(e)&&(i.width=e+"px",this.width=e),isFinite(a)&&(i.height=a+"px",this.height=a)},e.exports=a},{}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Kinema.js":[function(t,e){e.exports={Animation:t("./Animation/Animation.js"),Stage:t("./Canvas/Stage.js"),Layer:t("./Canvas/Layer.js"),Circle:t("./Canvas/Shape/Circle.js")}},{"./Animation/Animation.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Animation/Animation.js","./Canvas/Layer.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Layer.js","./Canvas/Shape/Circle.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Shape/Circle.js","./Canvas/Stage.js":"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Canvas/Stage.js"}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/siteswap-generator/index.js":[function(t,e){e.exports=t("./src/siteswap-generator")},{"./src/siteswap-generator":"/home/pantalaimon/prog/web/projects/joggol/node_modules/siteswap-generator/src/siteswap-generator.js"}],"/home/pantalaimon/prog/web/projects/joggol/node_modules/siteswap-generator/src/siteswap-generator.js":[function(t,e){function a(t){var e={};for(var a in t)e[a]=t[a];return e}function i(t,e,a){var i=[];"number"==typeof t&&(t={max:t}),void 0===t.min&&(t.min=t.max),"number"==typeof e&&(e={max:e}),void 0===e.min&&(e.min=1),void 0===a?a={max:e.max*t.max}:"number"==typeof a?a={max:a}:"number"!=typeof a.max&&(a.max=e.max*t.max),void 0===a.min&&(a.min=0),console.log(t,e,a);for(var r=t.max;r>=t.min;--r){for(var s,o,l=Math.max(e.min,2),d=e.max;d>=l;--d){s=Math.min(a.max,d*r),o=Math.max(a.min,r+1);for(var c=s;c>=o;--c)n(r,d,c,i)}e.min<=1&&1<=e.max&&a.min<=r&&r<=a.max&&i.push([r])}return i}function n(t,e,a,i){if(1===e&&t===a)i.push([t]);else{var n={};n[a%e]=!0,r(e,a,n,{array:[a],index:0,pos:1,rest:t*e-a},i)}}function r(t,e,i,n,s){if(n.pos<t){var o=t-n.pos,l=n.array[n.index],d=Math.min(l,n.rest),c=n.rest-e*(o-1);o>1&&c++,c=Math.max(c,0);for(var u=d;u>=c;--u){var h=l>u?0:n.index+1,m=(u+n.pos)%t;if(void 0===i[m]){var p=a(i);p[m]=!0,r(t,e,p,{array:n.array.concat([u]),index:h,pos:n.pos+1,rest:n.rest-u},s)}}}else 0===n.index&&s.push(n.array)}e.exports=i},{}],"/home/pantalaimon/prog/web/projects/joggol/src/js/Juggler/extend.js":[function(t,e){function a(){"use strict";var t,e,n,r,o,l,d=arguments[0],c=1,u=arguments.length,h=!1;for("boolean"==typeof d?(h=d,d=arguments[1]||{},c=2):("object"!=typeof d&&"function"!=typeof d||null==d)&&(d={});u>c;++c)if(t=arguments[c],null!=t)for(e in t)n=d[e],r=t[e],d!==r&&(h&&r&&(s(r)||(o=Array.isArray(r)))?(o?(o=!1,l=n&&Array.isArray(n)?n:[]):l=n&&s(n)?n:{},d[e]=a(h,l,r)):r!==i&&(d[e]=r));return d}var i,n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,s=function(t){"use strict";if(!t||"[object Object]"!==r.call(t))return!1;var e=n.call(t,"constructor"),a=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!a)return!1;var s;for(s in t);return s===i||n.call(t,s)};e.exports=a},{}],"/home/pantalaimon/prog/web/projects/joggol/src/js/Juggler/juggler.js":[function(t,e){function a(t,e){var a,i=e.time,n=e.position,r=i.now;if(r<i.thrown){a=n.middle.x-n.start.x,t.setX(n.start.x+a*r/i.thrown);var s=.5*e.gravity*i.thrown;t.setY(n.start.y-s*r+.5*e.gravity*r*r)}else a=n.end.x-n.middle.x,t.setX(n.middle.x+a*(r-i.thrown)/i.caught),t.setY(n.middle.y)}var i=t("kinemajs"),n=t("./extend.js"),r=function(){function t(t,e){var a,i=t.juggling,n=t.stage,r=(e-i.waiting.time)*i.interval;if(n.width){var s=(i.integer_height-i.waiting.time)*i.interval,o=s/r;a=o*n.width,console.log("uu",o)}else{var s=(3-i.waiting.time)*i.interval,o=s/r;a=1.5*i.height*o}return{width:.5*a,gravity:8*i.height/(r*r),shift:i.waiting.shift*o,radius:i.balls.radius*o}}function e(e){console.log(e.stage),this.attrs={},this.attrs=n(!0,this.attrs,{stage:{width:500,height:650},juggling:{interval:500,waiting:{time:.5,shift:50},integer_height:5,balls:{radius:10,colors:["red","blue","green","yellow","black","orange","purple"]},height:.8*e.stage.height,center:{x:.5*e.stage.width,y:.9*e.stage.height}},layer:new i.Layer},e),this.attrs.stage=new i.Stage(this.attrs.stage),this.attrs.stage.add(this.attrs.layer);var a=this.attrs.juggling,r=t(this.attrs,this.attrs.juggling.integer_height);a.width=r.width,a.gravity=r.gravity}for(var r="abcdefghijklmnopqrstuvwxyz",s={},o=0;10>o;++o)s[o]=o;for(var o=0;o<r.length;++o)s[r[o]]=o+10;return e.toPattern=function(t){return t.split("").map(function(t){return s[t]})},e.prototype.setPattern=function(n){"string"==typeof n&&(n=e.toPattern(n));var r,s,o,l,d=this.attrs,c=(d.stage,d.juggling),u=Math.max.apply(null,n);if(u>c.integer_height){var h=t(d,u);l=h.width,o=h.gravity,s=h.shift,r=h.radius}else s=c.waiting.shift,l=c.width,o=c.gravity,r=c.balls.radius;var m=n.reduce(function(t,e){return t+e},0);if(m%n.length!=0)throw new Error("El patró es irrealitzable. Es necessita un nombre enter de boles. Actualment: "+m/n.length);m/=n.length;for(var p=[],g=0;g<n.length;++g){var f={};f.value=n[g],f.next=(g+f.value)%n.length,f.period=(f.value-c.waiting.time)*c.interval,f.velocity=.5*o*f.period,p.push(f)}for(var g=0;g<n.length;++g)if(!p[g].cycle){for(var v={},w=g,j=0;!v[w];)v[w]=!0,w=p[w].next,j+=p[w].value;for(var w in v)p[w].cycle=j}var b=c.center.y;s/=2;var y=c.center.x-l/2,x=c.center.x+l/2,$=0,C=0,g=0,k=0,q={};for(this.balls=[];m>g;){if(0!==p[C].value)if(void 0===q[$]){q[$]=g,q[$+p[C].value]=g,++g;var A={figure:new i.Circle({x:$%2===0?y+15:x-15,y:b,radius:r||10,fill:c.balls.colors[k%c.balls.colors.length]}),start:$,cycle:p[C].cycle};this.balls.push(A),d.layer.add(A.figure),++k}else q[$+p[C].value]=p[C].value;++$,C=$%p.length}var _=this;d.animation=new i.Animation(function(t){var e=Math.floor(t.time/c.interval);_.balls.forEach(function(i){var n=t.time-c.interval*i.start;if(n>=0){n%=i.cycle*c.interval;for(var r,l=i.start%p.length;;){r=p[l].value;var d=r*c.interval;if(d>n)break;n-=d,l=p[l].next}var u=e-Math.floor(n/c.interval),h={};h.start=u%2===0?{x:y+s,y:b}:{x:x-s,y:b},(u+p[l].value)%2===0?(h.middle={x:y-s,y:b},h.end={x:y+s,y:b}):(h.middle={x:x+s,y:b},h.end={x:x-s,y:b});var m={value:p[l].value,time:{total:c.interval,thrown:p[l].period,caught:c.interval*p[l].value-p[l].period,now:n},left:u%2===0,gravity:o,position:h};a(i.figure,m)}}),d.layer.draw()})},e.prototype.removePattern=function(){var t=this;t.attrs.animation.stop(),t.attrs.layer.remove()},e.prototype.play=function(){var t=this.attrs.animation;t&&t.play()},e.prototype.pause=function(){var t=this.attrs.animation;t&&t.pause()},e.prototype.mute=function(){var t=this.attrs.animation;t&&t.mute()},e.prototype.stop=function(){var t=this.attrs.animation;t&&t.stop(),this.attrs.layer.remove()},e.prototype.speed=function(t){var e=this.attrs.animation;e&&e.speed(t)},e.prototype.colors=function(t){this.stop(),this.attrs.juggling.balls.colors=[].concat(t)},e}();e.exports=r},{"./extend.js":"/home/pantalaimon/prog/web/projects/joggol/src/js/Juggler/extend.js",kinemajs:"/home/pantalaimon/prog/web/projects/joggol/node_modules/kinemajs/src/lib/Kinema.js"}],"/home/pantalaimon/prog/web/projects/joggol/src/js/lang/ca.js":[function(t,e){function a(t){return t[0].toUpperCase(t)+t.substring(1)}e.exports={order:["patterns","balls","periods","heights"],patterns:"Patrons",balls:[function(t,e){return"de "+e+" boles"},function(t,e){return"de màxim "+e+" boles"},function(t,e){return"de "+t+" a "+e+" boles"},function(){return"L'interval de boles que demanes no es correcte"}],periods:[function(t,e){return"de període "+e},function(t,e){return"amb períodes no més grans de "+e},function(t,e){return"amb períodes entre "+t+" i "+e},function(){return"L'interval de períodes que demanes no es correcte"}],heights:[function(t,e){return"amb llançaments no més alts de "+e},function(t){return"amb llançaments que continguin alguna alçada major o igual a "+t},function(t){return"amb algun llançament de "+t+" i no més alt"},function(t,e){return"amb llançaments majors o iguals a "+t+" i mai superiors a "+e},function(){return"L'interval de períodes que demanes no es correcte"}],message:{isNotAInt:function(t){return t+"no és un nombre enter"},invalidRange:function(t,e){return e={balls:"el nombre de boles",periods:"el període",heights:"l'alçada"}[e],a(e)+" menor ("+t.min+") no pot sobrepassar "+e+" major ("+t.max+")"},emptyWithBigPeriod:function(){return"No existeixen patrons vàlids dintre del rang indicat. Prova que l'alçada màxima sigui major al nombre mínim de boles"},emptyWithLittlePeriod:function(){return"No existeixen patrons vàlids dintre del rang indicat. Prova que l'alçada màxima sigui major o igual al nombre mínim de boles"}}}},{}]},{},["./src/js/main.js"]);