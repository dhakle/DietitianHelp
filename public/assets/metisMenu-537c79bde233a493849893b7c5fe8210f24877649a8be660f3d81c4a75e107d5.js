!function(t){"use strict";function e(){var t=document.createElement("mm"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}function i(e){return this.each(function(){var i=t(this),n=i.data("mm"),r=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);n||i.data("mm",n=new o(this,r)),"string"==typeof e&&n[e]()})}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("mmTransitionEnd",function(){i=!0});var r=function(){i||t(o).trigger(n.end)};return setTimeout(r,e),this};var n=e();n&&(t.event.special.mmTransitionEnd={bindType:n.end,delegateType:n.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}});var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.transitioning=null,this.init()};o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0,doubleTapToGo:!1,activeClass:"active",collapseClass:"collapse",collapseInClass:"in",collapsingClass:"collapsing"},o.prototype.init=function(){var e=this,i=this.options.activeClass,n=this.options.collapseClass,o=this.options.collapseInClass;this.$element.find("li."+i).has("ul").children("ul").attr("aria-expanded",!0).addClass(n+" "+o),this.$element.find("li").not("."+i).has("ul").children("ul").attr("aria-expanded",!1).addClass(n),this.options.doubleTapToGo&&this.$element.find("li."+i).has("ul").children("a").addClass("doubleTapToGo"),this.$element.find("li").has("ul").children("a").on("click.metisMenu",function(n){var o=t(this),r=o.parent("li"),s=r.children("ul");if(n.preventDefault(),r.hasClass(i)&&!e.options.doubleTapToGo?(e.hide(s),o.attr("aria-expanded",!1)):(e.show(s),o.attr("aria-expanded",!0)),e.options.doubleTapToGo&&e.doubleTapToGo(o)&&"#"!==o.attr("href")&&""!==o.attr("href"))return n.stopPropagation(),void(document.location=o.attr("href"))})},o.prototype.doubleTapToGo=function(t){var e=this.$element;return t.hasClass("doubleTapToGo")?(t.removeClass("doubleTapToGo"),!0):t.parent().children("ul").length?(e.find(".doubleTapToGo").removeClass("doubleTapToGo"),t.addClass("doubleTapToGo"),!1):void 0},o.prototype.show=function(e){var i=this.options.activeClass,r=this.options.collapseClass,s=this.options.collapseInClass,a=this.options.collapsingClass,l=t(e),c=l.parent("li");if(!this.transitioning&&!l.hasClass(s)){c.addClass(i),this.options.toggle&&this.hide(c.siblings().children("ul."+s).attr("aria-expanded",!1)),l.removeClass(r).addClass(a).height(0),this.transitioning=1;var h=function(){l.removeClass(a).addClass(r+" "+s).height("").attr("aria-expanded",!0),this.transitioning=0};return n?void l.one("mmTransitionEnd",t.proxy(h,this)).emulateTransitionEnd(o.TRANSITION_DURATION).height(l[0].scrollHeight):h.call(this)}},o.prototype.hide=function(e){var i=this.options.activeClass,r=this.options.collapseClass,s=this.options.collapseInClass,a=this.options.collapsingClass,l=t(e);if(!this.transitioning&&l.hasClass(s)){l.parent("li").removeClass(i),l.height(l.height())[0].offsetHeight,l.addClass(a).removeClass(r).removeClass(s),this.transitioning=1;var c=function(){this.transitioning=0,l.removeClass(a).addClass(r).attr("aria-expanded",!1)};return n?void l.height(0).one("mmTransitionEnd",t.proxy(c,this)).emulateTransitionEnd(o.TRANSITION_DURATION):c.call(this)}};var r=t.fn.metisMenu;t.fn.metisMenu=i,t.fn.metisMenu.Constructor=o,t.fn.metisMenu.noConflict=function(){return t.fn.metisMenu=r,this}}(jQuery);