function countUp(t,e,i,n,s,o){for(var r=0,a=["webkit","moz","ms","o"],l=0;l<a.length&&!window.requestAnimationFrame;++l)window.requestAnimationFrame=window[a[l]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[l]+"CancelAnimationFrame"]||window[a[l]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-r)),n=window.setTimeout(function(){t(e+i)},i);return r=e+i,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),this.options=o||{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},""==this.options.separator&&(this.options.useGrouping=!1),null==this.options.prefix&&(this.options.prefix=""),null==this.options.suffix&&(this.options.suffix="");var c=this;this.d="string"==typeof t?document.getElementById(t):t,this.startVal=Number(e),this.endVal=Number(i),this.countDown=this.startVal>this.endVal,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=this.startVal,this.rAF=null,this.decimals=Math.max(0,n||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*s||2e3,this.version=function(){return"1.3.2"},this.printValue=function(t){var e=isNaN(t)?"--":c.formatNumber(t);"INPUT"==c.d.tagName?this.d.value=e:"text"==c.d.tagName?this.d.textContent=e:this.d.innerHTML=e},this.easeOutExpo=function(t,e,i,n){return i*(-Math.pow(2,-10*t/n)+1)*1024/1023+e},this.count=function(t){null===c.startTime&&(c.startTime=t),c.timestamp=t;var e=t-c.startTime;if(c.remaining=c.duration-e,c.options.useEasing)if(c.countDown){var i=c.easeOutExpo(e,0,c.startVal-c.endVal,c.duration);c.frameVal=c.startVal-i}else c.frameVal=c.easeOutExpo(e,c.startVal,c.endVal-c.startVal,c.duration);else if(c.countDown){var i=(c.startVal-c.endVal)*(e/c.duration);c.frameVal=c.startVal-i}else c.frameVal=c.startVal+(c.endVal-c.startVal)*(e/c.duration);c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),e<c.duration?c.rAF=requestAnimationFrame(c.count):null!=c.callback&&c.callback()},this.start=function(t){return c.callback=t,isNaN(c.endVal)||isNaN(c.startVal)?(console.log("countUp error: startVal or endVal is not a number"),c.printValue()):c.rAF=requestAnimationFrame(c.count),!1},this.stop=function(){cancelAnimationFrame(c.rAF)},this.reset=function(){c.startTime=null,c.startVal=e,cancelAnimationFrame(c.rAF),c.printValue(c.startVal)},this.resume=function(){c.stop(),c.startTime=null,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)},this.formatNumber=function(t){t=t.toFixed(c.decimals),t+="";var e,i,n,s;if(e=t.split("."),i=e[0],n=e.length>1?c.options.decimal+e[1]:"",s=/(\d+)(\d{3})/,c.options.useGrouping)for(;s.test(i);)i=i.replace(s,"$1"+c.options.separator+"$2");return c.options.prefix+i+n+c.options.suffix},c.printValue(c.startVal)}