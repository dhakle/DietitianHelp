!function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=x.elements;return"string"==typeof t?t.split(" "):t}function r(t,e){var n=x.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof t&&(t=t.join(" ")),x.elements=n+" "+t,c(e)}function o(t){var e=y[t[m]];return e||(e={},v++,t[m]=v,y[v]=e),e}function a(t,n,i){if(n||(n=e),h)return n.createElement(t);i||(i=o(n));var r;return r=i.cache[t]?i.cache[t].cloneNode():g.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!r.canHaveChildren||p.test(t)||r.tagUrn?r:i.frag.appendChild(r)}function s(t,n){if(t||(t=e),h)return t.createDocumentFragment();n=n||o(t);for(var r=n.frag.cloneNode(),a=0,s=i(),l=s.length;l>a;a++)r.createElement(s[a]);return r}function l(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return x.shivMethods?a(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(x,e.frag)}function c(t){t||(t=e);var i=o(t);return!x.shivCSS||u||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||l(t,i),t}var u,h,d="3.7.3",f=t.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,y={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",u="hidden"in t,h=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(t){u=!0,h=!0}}();var x={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:h,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:s,addElements:r};t.html5=x,c(e),"object"==typeof module&&module.exports&&(module.exports=x)}("undefined"!=typeof window?window:this,document);