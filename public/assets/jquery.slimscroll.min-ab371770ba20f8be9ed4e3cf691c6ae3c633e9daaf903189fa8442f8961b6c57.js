!function(e){e.fn.extend({slimScroll:function(i){var n=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},i);return this.each(function(){function o(t){if(c){t=t||window.event;var i=0;t.wheelDelta&&(i=-t.wheelDelta/120),t.detail&&(i=t.detail/3),e(t.target||t.srcTarget||t.srcElement).closest("."+n.wrapperClass).is(y.parent())&&r(i,!0),t.preventDefault&&!v&&t.preventDefault(),v||(t.returnValue=!1)}}function r(t,e,i){v=!1;var o=t,r=y.outerHeight()-b.outerHeight();e&&(o=parseInt(b.css("top"))+t*parseInt(n.wheelStep)/100*b.outerHeight(),o=Math.min(Math.max(o,0),r),o=0<t?Math.ceil(o):Math.floor(o),b.css({top:o+"px"})),g=parseInt(b.css("top"))/(y.outerHeight()-b.outerHeight()),o=g*(y[0].scrollHeight-y.outerHeight()),i&&(o=t,t=o/y[0].scrollHeight*y.outerHeight(),t=Math.min(Math.max(t,0),r),b.css({top:t+"px"})),y.scrollTop(o),y.trigger("slimscrolling",~~o),a(),l()}function s(){f=Math.max(y.outerHeight()/y[0].scrollHeight*y.outerHeight(),30),b.css({height:f+"px"});var t=f==y.outerHeight()?"none":"block";b.css({display:t})}function a(){s(),clearTimeout(d),g==~~g?(v=n.allowPageScroll,m!=g&&y.trigger("slimscroll",0==~~g?"top":"bottom")):v=!1,m=g,f>=y.outerHeight()?v=!0:(b.stop(!0,!0).fadeIn("fast"),n.railVisible&&w.stop(!0,!0).fadeIn("fast"))}function l(){n.alwaysVisible||(d=setTimeout(function(){n.disableFadeOut&&c||h||u||(b.fadeOut("slow"),w.fadeOut("slow"))},1e3))}var c,h,u,d,p,f,g,m,v=!1,y=e(this);if(y.parent().hasClass(n.wrapperClass)){var x=y.scrollTop(),b=y.closest("."+n.barClass),w=y.closest("."+n.railClass);if(s(),e.isPlainObject(i)){if("height"in i&&"auto"==i.height){y.parent().css("height","auto"),y.css("height","auto");var _=y.parent().parent().height();y.parent().css("height",_),y.css("height",_)}if("scrollTo"in i)x=parseInt(n.scrollTo);else if("scrollBy"in i)x+=parseInt(n.scrollBy);else if("destroy"in i)return b.remove(),w.remove(),void y.unwrap();r(x,!1,!0)}}else if(!(e.isPlainObject(i)&&"destroy"in i)){n.height="auto"==n.height?y.parent().height():n.height,x=e("<div></div>").addClass(n.wrapperClass).css({position:"relative",overflow:"hidden",width:n.width,height:n.height}),y.css({overflow:"hidden",width:n.width,height:n.height});var w=e("<div></div>").addClass(n.railClass).css({width:n.size,height:"100%",position:"absolute",top:0,display:n.alwaysVisible&&n.railVisible?"block":"none","border-radius":n.railBorderRadius,background:n.railColor,opacity:n.railOpacity,zIndex:90}),b=e("<div></div>").addClass(n.barClass).css({background:n.color,width:n.size,position:"absolute",top:0,opacity:n.opacity,display:n.alwaysVisible?"block":"none","border-radius":n.borderRadius,BorderRadius:n.borderRadius,MozBorderRadius:n.borderRadius,WebkitBorderRadius:n.borderRadius,zIndex:99}),_="right"==n.position?{right:n.distance}:{left:n.distance};w.css(_),b.css(_),y.wrap(x),y.parent().append(b),y.parent().append(w),n.railDraggable&&b.bind("mousedown",function(i){var n=e(document);return u=!0,t=parseFloat(b.css("top")),pageY=i.pageY,n.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,b.css("top",currTop),r(0,b.position().top,!1)}),n.bind("mouseup.slimscroll",function(){u=!1,l(),n.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(t){return t.stopPropagation(),t.preventDefault(),!1}),w.hover(function(){a()},function(){l()}),b.hover(function(){h=!0},function(){h=!1}),y.hover(function(){c=!0,a(),l()},function(){c=!1,l()}),y.bind("touchstart",function(t){t.originalEvent.touches.length&&(p=t.originalEvent.touches[0].pageY)}),y.bind("touchmove",function(t){v||t.originalEvent.preventDefault(),t.originalEvent.touches.length&&(r((p-t.originalEvent.touches[0].pageY)/n.touchScrollStep,!0),p=t.originalEvent.touches[0].pageY)}),s(),"bottom"===n.start?(b.css({top:y.outerHeight()-b.outerHeight()}),r(0,!0)):"top"!==n.start&&(r(e(n.start).position().top,null,!0),n.alwaysVisible||b.hide()),window.addEventListener?(this.addEventListener("DOMMouseScroll",o,!1),this.addEventListener("mousewheel",o,!1)):document.attachEvent("onmousewheel",o)}}),this}}),e.fn.extend({slimscroll:e.fn.slimScroll})}(jQuery);