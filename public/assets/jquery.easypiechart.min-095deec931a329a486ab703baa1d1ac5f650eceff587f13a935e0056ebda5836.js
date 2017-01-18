!function(t,e){"object"==typeof exports?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e(t.jQuery)}(this,function(t){var e=function(t,e){var i,n=document.createElement("canvas");t.appendChild(n),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(n);var s=n.getContext("2d");n.width=n.height=e.size;var r=1;window.devicePixelRatio>1&&(r=window.devicePixelRatio,n.style.width=n.style.height=[e.size,"px"].join(""),n.width=n.height=e.size*r,s.scale(r,r)),s.translate(e.size/2,e.size/2),s.rotate((-.5+e.rotate/180)*Math.PI);var o=(e.size-e.lineWidth)/2;e.scaleColor&&e.scaleLength&&(o-=e.scaleLength+2),Date.now=Date.now||function(){return+new Date};var a=function(t,e,i){i=Math.min(Math.max(-1,i||0),1);var n=0>=i;s.beginPath(),s.arc(0,0,o,0,2*Math.PI*i,n),s.strokeStyle=t,s.lineWidth=e,s.stroke()},l=function(){var t,i;s.lineWidth=1,s.fillStyle=e.scaleColor,s.save();for(var n=24;n>0;--n)n%6===0?(i=e.scaleLength,t=0):(i=.6*e.scaleLength,t=e.scaleLength-i),s.fillRect(-e.size/2+t,0,i,1),s.rotate(Math.PI/12);s.restore()},h=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),c=function(){e.scaleColor&&l(),e.trackColor&&a(e.trackColor,e.trackWidth||e.lineWidth,1)};this.getCanvas=function(){return n},this.getCtx=function(){return s},this.clear=function(){s.clearRect(e.size/-2,e.size/-2,e.size,e.size)},this.draw=function(t){e.scaleColor||e.trackColor?s.getImageData&&s.putImageData?i?s.putImageData(i,0,0):(c(),i=s.getImageData(0,0,e.size*r,e.size*r)):(this.clear(),c()):this.clear(),s.lineCap=e.lineCap;var n;n="function"==typeof e.barColor?e.barColor(t):e.barColor,a(n,e.lineWidth,t/100)}.bind(this),this.animate=function(t,i){var n=Date.now();e.onStart(t,i);var s=function(){var r=Math.min(Date.now()-n,e.animate.duration),o=e.easing(this,r,t,i-t,e.animate.duration);this.draw(o),e.onStep(t,i,o),r>=e.animate.duration?e.onStop(t,i):h(s)}.bind(this);h(s)}.bind(this)},i=function(t,i){var n={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(t,e,i,n,s){return e/=s/2,1>e?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},onStart:function(){},onStep:function(){},onStop:function(){}};if("undefined"!=typeof e)n.renderer=e;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");n.renderer=SVGRenderer}var s={},r=0,o=function(){this.el=t,this.options=s;for(var e in n)n.hasOwnProperty(e)&&(s[e]=i&&"undefined"!=typeof i[e]?i[e]:n[e],"function"==typeof s[e]&&(s[e]=s[e].bind(this)));s.easing="string"==typeof s.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[s.easing])?jQuery.easing[s.easing]:n.easing,"number"==typeof s.animate&&(s.animate={duration:s.animate,enabled:!0}),"boolean"!=typeof s.animate||s.animate||(s.animate={duration:1e3,enabled:s.animate}),this.renderer=new s.renderer(t,s),this.renderer.draw(r),t.dataset&&t.dataset.percent?this.update(parseFloat(t.dataset.percent)):t.getAttribute&&t.getAttribute("data-percent")&&this.update(parseFloat(t.getAttribute("data-percent")))}.bind(this);this.update=function(t){return t=parseFloat(t),s.animate.enabled?this.renderer.animate(r,t):this.renderer.draw(t),r=t,this}.bind(this),this.disableAnimation=function(){return s.animate.enabled=!1,this},this.enableAnimation=function(){return s.animate.enabled=!0,this},o()};t.fn.easyPieChart=function(e){return this.each(function(){var n;t.data(this,"easyPieChart")||(n=t.extend({},e,t(this).data()),t.data(this,"easyPieChart",new i(this,n)))})}});