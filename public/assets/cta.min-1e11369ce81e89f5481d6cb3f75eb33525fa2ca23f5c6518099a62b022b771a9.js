!function(){function t(t){for(var e,i=0,n="string"==typeof t?t.split(/\s*,\s*/):[],s=n.length;s--;)e=n[s],i=Math.max(parseFloat(e)||0,i);return i}function e(e){var i=0,n=0,r=0,h=0,u=window.getComputedStyle(e)||{},d=u[s+a];i=Math.max(t(d),i);var p=u[s+l];n=Math.max(t(p),n),u[o+l],h=Math.max(t(u[o+l]),h);var f=t(u[o+a]);return f>0&&(f*=parseInt(u[o+c],10)||1),r=Math.max(f,r),r||i}function i(t){var e=window.getComputedStyle(t);return e.background||e.backgroundColor}function n(t,s,o,a){if(!r)return void(a&&a(s));var l,c,u,d,p,f=1;return"function"==typeof o&&(a=o,o={}),o=o||{},o.duration=o.duration||h.duration,o.targetShowDuration=o.targetShowDuration||e(s)||h.targetShowDuration,o.relativeToWindow=o.relativeToWindow||h.relativeToWindow,"none"===window.getComputedStyle(s).display&&s.style.setProperty("display","block","important"),l=i(s),c=i(t),u=s.getBoundingClientRect(),d=t.getBoundingClientRect(),scaleXRatio=d.width/u.width,scaleYRatio=d.height/u.height,diffX=d.left-u.left,diffY=d.top-u.top,s.style.removeProperty("display"),p=document.createElement("div"),p.style.setProperty("pointer-events","none","important"),p.style.setProperty("position",o.relativeToWindow?"fixed":"absolute","important"),p.style.setProperty("-webkit-transform-origin","top left","important"),p.style.setProperty("transform-origin","top left","important"),p.style.setProperty("transition",o.duration+"s ease"),p.style.setProperty("width",u.width+"px","important"),p.style.setProperty("height",u.height+"px","important"),p.style.setProperty("left",u.left+(o.relativeToWindow?0:window.pageXOffset)+"px","important"),p.style.setProperty("top",u.top+(o.relativeToWindow?0:window.pageYOffset)+"px","important"),p.style.setProperty("background",c,"important"),p.style.setProperty("-webkit-transform","translate("+diffX+"px, "+diffY+"px) scale("+scaleXRatio+", "+scaleYRatio+")","important"),p.style.setProperty("transform","translate("+diffX+"px, "+diffY+"px) scale("+scaleXRatio+", "+scaleYRatio+")","important"),document.body.appendChild(p),p.offsetTop,p.style.setProperty("background",l,"important"),p.style.removeProperty("-webkit-transform"),p.style.removeProperty("transform"),p.addEventListener("transitionend",function t(){p.removeEventListener("transitionend",t),a&&a(s),p.style.transitionDuration=o.targetShowDuration+f+"s",p.style.opacity=0,setTimeout(function(){p.parentNode.removeChild(p)},1e3*(o.targetShowDuration+f))}),function(e,i){n(s,t,e,i)}}var s,o,r=function(){return void 0!==window.ontransitionend||void 0!==document.documentElement.style.transition}(),a="Duration",l="Delay",c="IterationCount";s=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend?"WebkitTransition":"transition",o=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend?"WebkitAnimation":"animation";var h={duration:.3,targetShowDuration:0,extraTransitionDuration:1,relativeToWindow:!1};n.isSupported=r,"object"==typeof exports?module.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):window.cta=n}();