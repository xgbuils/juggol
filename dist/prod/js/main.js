!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){function c(){var a=Date.now(),b={time:(a-this.played)*this.v};this.func(b),this.id=window.requestAnimationFrame(c.bind(this))}a("./rAF.js");var d=function(a){this.func=a,this.on=!1,this.paused=this.played=Date.now(),this.v=1,this.active=!1};d.prototype={play:function(){this.func&&!this.on&&(this.paused&&(this.played+=Date.now()-this.paused),c.call(this),this.active=this.on=!0)},pause:function(){this.func&&this.on&&(cancelAnimationFrame(this.id),this.active=this.on=!1,this.paused=Date.now())},mute:function(){this.func&&this.on&&(cancelAnimationFrame(this.id),this.active=this.on=!1,this.paused=void 0)},stop:function(){this.func&&(this.pause(),this.paused=this.played=Date.now())},seek:function(a){if(this.func){var b=Date.now();this.played=b-a,this.paused=b}},speed:function(a){if(this.func&&isFinite(a))if(a){a/=this.v;var b=Date.now(),c=(b-this.played)/a;if(this.played=b-c,this.paused){var d=(b-this.paused)/a;this.paused=b-d}this.v*=a,this.active&&this.play()}else this.pause(),this.active=!0},remove:function(){this.func&&(this.pause(),delete this.func)}},b.exports=d},{"./rAF.js":2}],2:[function(){!function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}()},{}],3:[function(a,b){function c(){this.shapes=[],this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.top="0",this.canvas.style.left="0",this.ctx=this.canvas.getContext("2d")}var d=c.prototype;d.add=function(a){this.shapes.push(a),a.layer=this},d.draw=function(){this.clear(),this.shapes.forEach(function(a){a.draw()})};var e=window.navigator.userAgent,f=/android/i.test(e)&&e.indexOf("534.30");f?(console.log("native_android_browser"),d.clear=function(){this.ctx.clearRect(0,0,this.width,this.height),this.canvas.style.display="none",this.canvas.offsetHeight,this.canvas.style.display="inherit"}):d.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},d.remove=function(){this.clear(),this.shapes.forEach(function(a){delete a.layer}),this.shapes=[]},b.exports=c},{}],4:[function(a,b){function c(a){this.shape=a}c.prototype.draw=function(){var a=this.shape,b=this.layer;b.ctx.beginPath(),b.ctx.arc(a.x,a.y,a.radius,0,2*Math.PI),b.ctx.closePath(),a.fill&&(b.ctx.fillStyle=a.fill,b.ctx.fill())},c.prototype.setX=function(a){this.shape.x=a},c.prototype.setY=function(a){this.shape.y=a},b.exports=c},{}],5:[function(a,b){function c(a){this.layers=[];var b=this.container=document.getElementById(a.container);if(!b)throw new Error("element #"+a.container+" does not exist");var c=b.style;c.position="relative",c.width=a.width+"px",c.height=a.height+"px",c.overflow="hidden",this.width=parseInt(a.width),this.height=parseInt(a.height)}c.prototype.add=function(a){var b=a.canvas;this.layers.push(a),b.width=a.width=this.width,b.height=a.height=this.height,this.container.appendChild(b)},c.prototype.resize=function(a){var b=parseInt(a.width),c=parseInt(a.height),d=this.container.style;isFinite(b)&&(d.width=b+"px",this.width=b),isFinite(c)&&(d.height=c+"px",this.height=c)},b.exports=c},{}],6:[function(a,b){b.exports={Animation:a("./Animation/Animation.js"),Stage:a("./Canvas/Stage.js"),Layer:a("./Canvas/Layer.js"),Circle:a("./Canvas/Shape/Circle.js")}},{"./Animation/Animation.js":1,"./Canvas/Layer.js":3,"./Canvas/Shape/Circle.js":4,"./Canvas/Stage.js":5}],7:[function(a,b){b.exports=a("./src/siteswap-generator")},{"./src/siteswap-generator":8}],8:[function(a,b){function c(a){var b={};for(var c in a)b[c]=a[c];return b}function d(a,b,c){var d=[];"number"==typeof a&&(a={max:a}),void 0===a.min&&(a.min=a.max),"number"==typeof b&&(b={max:b}),void 0===b.min&&(b.min=1),void 0===c?c={max:b.max*a.max}:"number"==typeof c?c={max:c}:"number"!=typeof c.max&&(c.max=b.max*a.max),void 0===c.min&&(c.min=0),console.log(a,b,c);for(var f=a.max;f>=a.min;--f){for(var g,h,i=Math.max(b.min,2),j=b.max;j>=i;--j){g=Math.min(c.max,j*f),h=Math.max(c.min,f+1);for(var k=g;k>=h;--k)e(f,j,k,d)}b.min<=1&&1<=b.max&&c.min<=f&&f<=c.max&&d.push([f])}return d}function e(a,b,c,d){if(1===b&&a===c)d.push([a]);else{var e={};e[c%b]=!0,f(b,c,e,{array:[c],index:0,pos:1,rest:a*b-c},d)}}function f(a,b,d,e,g){if(e.pos<a){var h=a-e.pos,i=e.array[e.index],j=Math.min(i,e.rest),k=e.rest-b*(h-1);h>1&&k++,k=Math.max(k,0);for(var l=j;l>=k;--l){var m=i>l?0:e.index+1,n=(l+e.pos)%a;if(void 0===d[n]){var o=c(d);o[n]=!0,f(a,b,o,{array:e.array.concat([l]),index:m,pos:e.pos+1,rest:e.rest-l},g)}}}else 0===e.index&&g.push(e.array)}b.exports=d},{}],9:[function(a,b){function c(){"use strict";var a,b,e,f,h,i,j=arguments[0],k=1,l=arguments.length,m=!1;for("boolean"==typeof j?(m=j,j=arguments[1]||{},k=2):("object"!=typeof j&&"function"!=typeof j||null==j)&&(j={});l>k;++k)if(a=arguments[k],null!=a)for(b in a)e=j[b],f=a[b],j!==f&&(m&&f&&(g(f)||(h=Array.isArray(f)))?(h?(h=!1,i=e&&Array.isArray(e)?e:[]):i=e&&g(e)?e:{},j[b]=c(m,i,f)):f!==d&&(j[b]=f));return j}var d,e=Object.prototype.hasOwnProperty,f=Object.prototype.toString,g=function(a){"use strict";if(!a||"[object Object]"!==f.call(a))return!1;var b=e.call(a,"constructor"),c=a.constructor&&a.constructor.prototype&&e.call(a.constructor.prototype,"isPrototypeOf");if(a.constructor&&!b&&!c)return!1;var g;for(g in a);return g===d||e.call(a,g)};b.exports=c},{}],10:[function(a,b){function c(a,b){var c,d=b.time,e=b.position,f=d.now;if(f<d.thrown){c=e.middle.x-e.start.x,a.setX(e.start.x+c*f/d.thrown);var g=.5*b.gravity*d.thrown;a.setY(e.start.y-g*f+.5*b.gravity*f*f)}else c=e.end.x-e.middle.x,a.setX(e.middle.x+c*(f-d.thrown)/d.caught),a.setY(e.middle.y)}var d=a("kinemajs"),e=a("./extend.js"),f=function(){function a(a,b){var c,d=a.juggling,e=a.stage,f=(b-d.waiting.time)*d.interval;if(e.width){var g=(d.integer_height-d.waiting.time)*d.interval,h=g/f;c=h*e.width,console.log("uu",h)}else{var g=(3-d.waiting.time)*d.interval,h=g/f;c=1.5*d.height*h}return{width:.5*c,gravity:8*d.height/(f*f),shift:d.waiting.shift*h,radius:d.balls.radius*h}}function b(b){console.log(b.stage),this.attrs={},this.attrs=e(!0,this.attrs,{stage:{width:500,height:650},juggling:{interval:500,waiting:{time:.5,shift:50},integer_height:5,balls:{radius:10,colors:["red","blue","green","yellow","black","orange","purple"]},height:.8*b.stage.height,center:{x:.5*b.stage.width,y:.9*b.stage.height}},layer:new d.Layer},b),this.attrs.stage=new d.Stage(this.attrs.stage),this.attrs.stage.add(this.attrs.layer);var c=this.attrs.juggling,f=a(this.attrs,this.attrs.juggling.integer_height);c.width=f.width,c.gravity=f.gravity}for(var f="abcdefghijklmnopqrstuvwxyz",g={},h=0;10>h;++h)g[h]=h;for(var h=0;h<f.length;++h)g[f[h]]=h+10;return b.toPattern=function(a){return a.split("").map(function(a){return g[a]})},b.prototype.setPattern=function(e){"string"==typeof e&&(e=b.toPattern(e));var f,g,h,i,j=this.attrs,k=(j.stage,j.juggling),l=Math.max.apply(null,e);if(l>k.integer_height){var m=a(j,l);i=m.width,h=m.gravity,g=m.shift,f=m.radius}else g=k.waiting.shift,i=k.width,h=k.gravity,f=k.balls.radius;var n=e.reduce(function(a,b){return a+b},0);if(n%e.length!=0)throw new Error("El patró es irrealitzable. Es necessita un nombre enter de boles. Actualment: "+n/e.length);n/=e.length;for(var o=[],p=0;p<e.length;++p){var q={};q.value=e[p],q.next=(p+q.value)%e.length,q.period=(q.value-k.waiting.time)*k.interval,q.velocity=.5*h*q.period,o.push(q)}for(var p=0;p<e.length;++p)if(!o[p].cycle){for(var r={},s=p,t=0;!r[s];)r[s]=!0,s=o[s].next,t+=o[s].value;for(var s in r)o[s].cycle=t}var u=k.center.y;g/=2;var v=k.center.x-i/2,w=k.center.x+i/2,x=0,y=0,p=0,z=0,A={};for(this.balls=[];n>p;){if(0!==o[y].value)if(void 0===A[x]){A[x]=p,A[x+o[y].value]=p,++p;var B={figure:new d.Circle({x:x%2===0?v+15:w-15,y:u,radius:f||10,fill:k.balls.colors[z%k.balls.colors.length]}),start:x,cycle:o[y].cycle};this.balls.push(B),j.layer.add(B.figure),++z}else A[x+o[y].value]=o[y].value;++x,y=x%o.length}var C=this;j.animation=new d.Animation(function(a){var b=Math.floor(a.time/k.interval);C.balls.forEach(function(d){var e=a.time-k.interval*d.start;if(e>=0){e%=d.cycle*k.interval;for(var f,i=d.start%o.length;;){f=o[i].value;var j=f*k.interval;if(j>e)break;e-=j,i=o[i].next}var l=b-Math.floor(e/k.interval),m={};m.start=l%2===0?{x:v+g,y:u}:{x:w-g,y:u},(l+o[i].value)%2===0?(m.middle={x:v-g,y:u},m.end={x:v+g,y:u}):(m.middle={x:w+g,y:u},m.end={x:w-g,y:u});var n={value:o[i].value,time:{total:k.interval,thrown:o[i].period,caught:k.interval*o[i].value-o[i].period,now:e},left:l%2===0,gravity:h,position:m};c(d.figure,n)}}),j.layer.draw()})},b.prototype.removePattern=function(){var a=this;a.attrs.animation.stop(),a.attrs.layer.remove()},b.prototype.play=function(){var a=this.attrs.animation;a&&a.play()},b.prototype.pause=function(){var a=this.attrs.animation;a&&a.pause()},b.prototype.mute=function(){var a=this.attrs.animation;a&&a.mute()},b.prototype.stop=function(){var a=this.attrs.animation;a&&a.stop(),this.attrs.layer.remove()},b.prototype.speed=function(a){var b=this.attrs.animation;b&&b.speed(a)},b.prototype.colors=function(a){this.stop(),this.attrs.juggling.balls.colors=[].concat(a)},b}();b.exports=f},{"./extend.js":9,kinemajs:6}],11:[function(a){function b(a,b){for(var c=[],d=a;b>=d;++d)c.push(d);return c}function c(a,b,c){var d=$.Event(a);d.target=c,b.trigger(d)}function d(a,b){console.log(a);var c=a.split("?"),d=c[0],e={};if(console.log(c[1]),c[1]){var f=c[1].split("&");for(var g in f)c=f[g].split("="),e[c[0]]=c[1]}return{fragment:d||b.fragment,queryString:e}}var e=a("siteswap-generator"),f=a("./Juggler/juggler.js");$.fn.keyboard=function(a,b){b=b||function(a){return a},$(this).html("<ul>"+a.map(function(a){return"<li>"+b(a)+"</li>"}).join("")+"</ul>")};var g={balls:function(a,b,c){a.error=!1,void 0!==b.min&&void 0!==b.max&&b.min<=b.max&&b.min>0?b.min===b.max?a.balls="de "+b.max+" boles":1===b.min?a.balls="de màxim "+b.max+" boles":b.min<b.max&&(a.balls="de "+b.min+" a "+b.max+" boles"):a.error="L'interval de boles que demanes no es correcte",c.text(a.balls)},period:function(a,b,c){a.error=!1,console.log(b),console.log("eooo",a.error),void 0!==b.min&&void 0!==b.max&&b.min<=b.max&&b.min>0?b.min===b.max?a.period="de període "+b.max:1===b.min?a.period="amb periodes no més grans de "+b.max:b.min<b.max&&(a.period="amb períodes entre "+b.min+" i "+b.max):a.error="L'interval de períodes que demanes no es correcte",c.text(a.period)},height:function(a,b,c){a.error=!1,void 0===b.min&&void 0===b.max?a.height="":void 0===b.min&&b.max>=0?a.height="amb llançaments no més alts de "+b.max:void 0===b.max&&b.min>=0?a.height="amb llançaments que continguin alguna alçada major o igual a "+b.min:b.min<=b.max&&b.min>=0?a.height=b.min===b.max?"amb llançaments que continguin alguna alçada de "+b.min+" i no més alta":"amb llançaments que continguin alguna alçada major o igual a "+b.min+" i no continguin cap alçada superior a "+b.max:a.error="L'interval de periodes que demanes no es correcte",c.text(a.height)}},h={},i={},j=!1,k="0123456789abcdefghijklmnopqrstuvxyz",l={values:{}};$(document).ready(function(){function a(a){console.log("hola");var b=a.data;a.preventDefault(),a.stopPropagation();var c=d($(this).attr("href"),{fragment:"#header"}),g=c.queryString,h=$(c.fragment).offset().top;if(b.$root.animate({scrollTop:h},"500","swing"),"#header"===c.fragment)b.$header.removeClass("reduce");else if(b.$header.addClass("reduce"),"#simulator"===c.fragment){b.keyboard.$widget.removeClass("hide");var j=e(i.balls,i.period,i.height);textPatterns=j.map(function(a){return a.map(function(a){return k[a]}).join("")}),b.keyboard.$keys.keyboard(textPatterns,function(a){return'<a href="#simulator?play='+a+'">'+a+"</a>"}),g.play=g.play||textPatterns[0],console.log("play",g.play),b.juggler||(b.juggler=new f({stage:{container:"juggler-simulator",width:b.$simulator.width(),height:b.$simulator.height()}})),b.$root.animate({scrollTop:h},"500","swing"),b.juggler.stop(),b.juggler.setPattern(g.play),b.juggler.play()}}l.inputs={balls:{min:$("#balls-min"),max:$("#balls-max")},period:{min:$("#period-min"),max:$("#period-max")},height:{min:$("#height-min"),max:$("#height-max")}},l.$form=$("#form"),l.$create=$("#create"),l.$generator=$("#generator"),l.$root=$("body, html"),l.keyboard={$widget:$("#keyboard"),$left:$("#keyboard-left"),$keys:$("#keyboard-keys"),$right:$("#keyboard-right"),position:0},l.outputs={balls:$("#p-balls"),period:$("#p-period"),height:$("#p-height")},l.message={$success:$("#success"),$error:$("#error")},l.$header=$("#header"),l.$patterns=$("#patterns"),l.$simulator=$("#simulator"),l.$root.on("click",l,function(a){var b=a.data;b.$focus&&(c("blureditable",b.$form,b.$focus[0]),b.$focus=void 0)}),l.$form.on("click",".editable",l,function(a){a.stopPropagation();var b=a.data;b.$focus&&c("blureditable",b.$form,b.$focus[0]),b.$focus=$(".contenteditable",this).first(),c("focuseditable",b.$form,b.$focus[0])}),l.$form.on("click",".contenteditable",l,function(a){a.stopPropagation();var b=a.data;b.$focus&&c("blureditable",b.$form,b.$focus[0]),b.$focus=$(this),c("focuseditable",b.$form,this)}),l.$form.on("focuseditable",".contenteditable",l,function(a){var c=a.data;$(this).addClass("select"),c.keyboard.$widget.removeClass("hide"),c.keyboard.$keys.keyboard(b(1,90))}),l.$form.on("blureditable",".contenteditable",l,function(a){var b=a.data;$(this).removeClass("select"),b.keyboard.$widget.addClass("hide")}),l.$form.on("inputeditable",".contenteditable",l,function(a){console.log("dsadsa");var b=a.data,c=$(this).data("type");i[c]={min:parseInt(b.inputs[c].min.text())||void 0,max:parseInt(b.inputs[c].max.text())||void 0},g[c](h,i[c],b.outputs[c]),!j&&h.error?(b.message.$success.addClass("hide"),b.message.$error.text(h.error),b.message.$error.removeClass("hide"),j=!0):j&&!h.error&&(b.message.$error.addClass("hide"),b.message.$success.removeClass("hide"),j=!1),console.log(h)});for(var m in l.outputs)i[m]={min:parseInt(l.inputs[m].min.text())||void 0,max:parseInt(l.inputs[m].max.text())||void 0},g[m](h,i[m],l.outputs[m]),!j&&h.error&&l.message.$error.text(h.error);$(window).on("resize",function(){$("#data-height").text($(this).height())}),l.$patterns.on("click","a",l,function(a){var b=a.data,c=b.$simulator.offset().top;b.juggler||(b.juggler=new f({stage:{container:"juggler-simulator",width:b.$simulator.width(),height:b.$simulator.height()}})),b.$root.animate({scrollTop:c},"500","swing",function(){}),b.juggler.stop(),b.juggler.setPattern($(this).text()),b.juggler.play()}),l.keyboard.$widget.on("click",function(a){a.stopPropagation()}),l.keyboard.$left.on("click",l,function(a){var b=a.data,c=b.keyboard.$widget.width()-100;console.log(c);var d=b.keyboard.position+=c;b.keyboard.$keys.css("left",d)}),l.keyboard.$right.on("click",l,function(a){var b=a.data,c=b.keyboard.$widget.width()-100,d=b.keyboard.position-=c;b.keyboard.$keys.css("left",d)}),l.$root.on("click","a",l,a),l.keyboard.$keys.on("click","a",l,a),l.keyboard.$keys.on("click","li",l,function(a){a.stopPropagation();var b=parseInt($(this).text());l.$focus.text(b),c("inputeditable",l.$form,l.$focus[0])})})},{"./Juggler/juggler.js":10,"siteswap-generator":7}]},{},[11]);