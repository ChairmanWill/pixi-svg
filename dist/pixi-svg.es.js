/*!
 * pixi-svg - v1.0.1
 * Compiled Thu, 23 Apr 2020 19:58:30 UTC
 *
 * pixi-svg is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
import{Graphics as e}from"@pixi/graphics";var t={command:/\s*([achlmqstvz])/gi,number:/\s*([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/gi,comma:/\s*(?:(,)|\s)/g,flag:/\s*([01])/g};var r=function(e){function r(t){e.call(this),this._svgFill(t),this._svgChildren(t.children)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype._svgChildren=function(e,t){void 0===t&&(t=!1);for(var r=0;r<e.length;r++){var i=e[r];switch(this._svgFill(i,t),i.nodeName.toLowerCase()){case"path":this._svgPath(i);break;case"circle":case"ellipse":this._svgCircle(i);break;case"rect":this._svgRect(i);break;case"polygon":this._svgPoly(i,!0);break;case"polyline":this._svgPoly(i);break;case"g":break;default:console.info("[PIXI.SVG] <"+i.nodeName+"> elements unsupported")}this._svgChildren(i.children,!0)}},r.prototype._hexToUint=function(e){if("#"===e[0])return 3===(e=e.substr(1)).length&&(e=e.replace(/([a-f0-9])/gi,"$1$1")),parseInt(e,16);var t=r.measureColor;t.style.color=e;var i=window.getComputedStyle(document.body.appendChild(t)).color.match(/\d+/g).map((function(e){return parseInt(e,10)}));return document.body.removeChild(t),(i[0]<<16)+(i[1]<<8)+i[2]},r.prototype._svgCircle=function(e){var t="r",r="r",i="elipse"===e.nodeName;i&&(t+="x",r+="y");var o=parseFloat(e.getAttribute(r)),a=parseFloat(e.getAttribute(t)),n=e.getAttribute("cx"),l=e.getAttribute("cy"),s=0,c=0;null!==n&&(s=parseFloat(n)),null!==l&&(c=parseFloat(l)),i?this.drawEllipse(s,c,o,a):this.drawCircle(s,c,o)},r.prototype._svgRect=function(e){var t=parseFloat(e.getAttribute("x")),r=parseFloat(e.getAttribute("y")),i=parseFloat(e.getAttribute("width")),o=parseFloat(e.getAttribute("height")),a=parseFloat(e.getAttribute("rx"));a?this.drawRoundedRect(t,r,i,o,a):this.drawRect(t,r,i,o)},r.prototype._svgStyle=function(e){var t=e.getAttribute("style"),r={fill:e.getAttribute("fill"),opacity:e.getAttribute("opacity"),stroke:e.getAttribute("stroke"),strokeWidth:e.getAttribute("stroke-width"),cap:e.getAttribute("stroke-linecap"),join:e.getAttribute("stroke-linejoin"),miterLimit:e.getAttribute("stroke-miterlimit")};return null!==t&&(t.split(";").forEach((function(e){var t=e.split(":"),i=t[0],o=t[1];i&&(r[i.trim()]=o.trim())})),r["stroke-width"]&&(r.strokeWidth=r["stroke-width"],delete r["stroke-width"])),r},r.prototype._svgPoly=function(e,t){var r=e.getAttribute("points").split(/[ ,]/g).map((function(e){return parseInt(e,10)}));this.drawPolygon(r),t&&this.closePath()},r.prototype._svgFill=function(e,t){var r=this._svgStyle(e),i=r.fill,o=r.opacity,a=r.stroke,n=r.strokeWidth,l=r.cap,s=r.join,c=r.miterLimit,u=null!==a?1:0,p=null!==n?parseFloat(n):u,d=null!==a?this._hexToUint(a):this.lineColor;i?"none"===i?this.beginFill(0,0):this.beginFill(this._hexToUint(i),null!==o?parseFloat(o):1):t||this.beginFill(0),this.lineStyle({width:null===a&&null===n&&t?this.line.width:p,color:null===a&&t?this.line.color:d,cap:null===l&&t?this.line.cap:l,join:null===s&&t?this.line.join:s,miterLimit:null===c&&t?this.line.miterLimit:parseFloat(c)}),e.getAttribute("fill-rule")&&console.info('[PIXI.SVG] "fill-rule" attribute is not supported')},r.prototype._svgPath=function(e){for(var r,i,o=function(e){for(var r=0,i=[],o=function(i,o){t[i].lastIndex=r;var a=t[i].exec(e);if(!a||a.index!==r){if(!o)return null;throw Error("Expected "+i+" at position "+r)}return r=t[i].lastIndex,a[1]},a={number:function(e){return Number(o("number",e))},"coordinate pair":function(e){var t=o("number",e);if(null===t&&!e)return null;o("comma");var r=o("number",!0);return{x:Number(t),y:Number(r)}},"arc definition":function(e){var t=a["coordinate pair"](e);if(!t&&!e)return null;o("comma");var r=Number(o("number",!0));o("comma",!0);var i=!!Number(o("flag",!0));o("comma");var n=!!Number(o("flag",!0));return o("comma"),{radii:t,rotation:r,large:i,clockwise:n,end:a["coordinate pair"](!0)}}},n=function(e){for(var t,r=[],i=!0;t=a[e](i);)r.push(t),i=!!o("comma");return r},l=function(){var e=o("command"),t=e.toUpperCase(),a=e!==t,l=void 0;switch(t){case"M":l=n("coordinate pair").map((function(t,r){return 1===r&&(e=a?"l":"L"),{end:t,code:e,relative:a}}));break;case"L":case"T":l=n("coordinate pair").map((function(t){return{end:t,code:e,relative:a}}));break;case"C":if((l=n("coordinate pair")).length%3)throw Error("Expected coordinate pair triplet at position "+r);l=l.reduce((function(t,r,i){var o=i%3;o?t[t.length-1][1===o?"cp2":"end"]=r:t.push({cp1:r,code:e,relative:a});return t}),[]);break;case"Q":case"S":if(1&(l=n("coordinate pair")).length)throw Error("Expected coordinate pair couple at position "+r);l=l.reduce((function(t,r,i){1&i?t[t.length-1].end=r:t.push({cp:r,code:e,relative:a});return t}),[]);break;case"H":case"V":l=n("number").map((function(t){return{value:t,code:e,relative:a}}));break;case"A":l=n("arc definition").map((function(t){return Object.assign({code:e,relative:a},t)}));break;case"Z":l=[{code:"Z"}]}i.push.apply(i,l)};r<e.length;)l();return i}(e.getAttribute("d")),a=0;a<o.length;a++){var n=o[a];switch(n.code){case"m":this.moveTo(r+=n.end.x,i+=n.end.y);break;case"M":this.moveTo(r=n.end.x,i=n.end.y);break;case"H":this.lineTo(r=n.value,i);break;case"h":this.lineTo(r+=n.value,i);break;case"V":this.lineTo(r,i=n.value);break;case"v":this.lineTo(r,i+=n.value);break;case"Z":this.closePath();break;case"L":this.lineTo(r=n.end.x,i=n.end.y);break;case"l":this.lineTo(r+=n.end.x,i+=n.end.y);break;case"C":this.bezierCurveTo(n.cp1.x,n.cp1.y,n.cp2.x,n.cp2.y,r=n.end.x,i=n.end.y);break;case"c":var l=r,s=i;this.bezierCurveTo(l+n.cp1.x,s+n.cp1.y,l+n.cp2.x,s+n.cp2.y,r+=n.end.x,i+=n.end.y);break;case"s":case"q":var c=r,u=i;this.quadraticCurveTo(c+n.cp.x,u+n.cp.y,r+=n.end.x,i+=n.end.y);break;case"S":case"Q":this.quadraticCurveTo(n.cp.x,n.cp.y,r=n.end.x,i=n.end.y);break;default:console.info("[PIXI.SVG] Draw command not supported:",n.code,n)}}},r}(e);r.measureColor=document.createElement("div");export{r as SVG};
//# sourceMappingURL=pixi-svg.es.js.map
