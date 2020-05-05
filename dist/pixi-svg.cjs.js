/*!
 * pixi-svg - v2.1.0
 * Compiled Tue, 05 May 2020 15:19:06 UTC
 *
 * pixi-svg is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@pixi/graphics"),i=t(require("d-path-parser")),r=t(require("tinycolor2")),o=function(t){function e(e){if(t.call(this),"string"==typeof e){var i=document.createElement("div");i.innerHTML=e.trim(),e=i.querySelector("svg")}if(!e)throw new Error("Missing <svg> element in SVG constructor");this._svgFill(e),this._svgChildren(e.children)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._svgChildren=function(t,e){void 0===e&&(e=!1);for(var i=0;i<t.length;i++){var r=t[i];switch(this._svgFill(r,e),r.nodeName.toLowerCase()){case"path":this._svgPath(r);break;case"circle":case"ellipse":this._svgCircle(r);break;case"rect":this._svgRect(r);break;case"polygon":this._svgPoly(r,!0);break;case"polyline":this._svgPoly(r);break;case"g":break;default:console.info("[PIXI.SVG] <"+r.nodeName+"> elements unsupported")}this._svgChildren(r.children,!0)}},e.prototype._hexToUint=function(t){if("#"===t[0])return 3===(t=t.substr(1)).length&&(t=t.replace(/([a-f0-9])/gi,"$1$1")),parseInt(t,16);var e=r(t).toRgb();return(e.r<<16)+(e.g<<8)+e.b},e.prototype._svgCircle=function(t){var e="r",i="r",r="elipse"===t.nodeName;r&&(e+="x",i+="y");var o=parseFloat(t.getAttribute(i)),s=parseFloat(t.getAttribute(e)),l=t.getAttribute("cx"),a=t.getAttribute("cy"),n=0,c=0;null!==l&&(n=parseFloat(l)),null!==a&&(c=parseFloat(a)),r?this.drawEllipse(n,c,o,s):this.drawCircle(n,c,o)},e.prototype._svgRect=function(t){var e=parseFloat(t.getAttribute("x")),i=parseFloat(t.getAttribute("y")),r=parseFloat(t.getAttribute("width")),o=parseFloat(t.getAttribute("height")),s=parseFloat(t.getAttribute("rx"));s?this.drawRoundedRect(e,i,r,o,s):this.drawRect(e,i,r,o)},e.prototype._svgStyle=function(t){var e=t.getAttribute("style"),i={fill:t.getAttribute("fill"),opacity:t.getAttribute("opacity"),stroke:t.getAttribute("stroke"),strokeWidth:t.getAttribute("stroke-width"),cap:t.getAttribute("stroke-linecap"),join:t.getAttribute("stroke-linejoin"),miterLimit:t.getAttribute("stroke-miterlimit")};return null!==e&&(e.split(";").forEach((function(t){var e=t.split(":"),r=e[0],o=e[1];r&&(i[r.trim()]=o.trim())})),i["stroke-width"]&&(i.strokeWidth=i["stroke-width"],delete i["stroke-width"])),i},e.prototype._svgPoly=function(t,e){var i=t.getAttribute("points").split(/[ ,]/g).map((function(t){return parseInt(t,10)}));this.drawPolygon(i),e&&this.closePath()},e.prototype._svgFill=function(t,e){var i=this._svgStyle(t),r=i.fill,o=i.opacity,s=i.stroke,l=i.strokeWidth,a=i.cap,n=i.join,c=i.miterLimit,p=null!==s?1:0,u=null!==l?parseFloat(l):p,h=null!==s?this._hexToUint(s):this.lineColor;r?"none"===r?this.beginFill(0,0):this.beginFill(this._hexToUint(r),null!==o?parseFloat(o):1):e||this.beginFill(0),this.lineStyle({width:null===s&&null===l&&e?this.line.width:u,color:null===s&&e?this.line.color:h,cap:null===a&&e?this.line.cap:a,join:null===n&&e?this.line.join:n,miterLimit:null===c&&e?this.line.miterLimit:parseFloat(c)}),t.getAttribute("fill-rule")&&console.info('[PIXI.SVG] "fill-rule" attribute is not supported')},e.prototype._svgPath=function(t){for(var e,r,o=t.getAttribute("d"),s=i(o.trim()),l=0;l<s.length;l++){var a=s[l];switch(a.code){case"m":this.moveTo(e+=a.end.x,r+=a.end.y);break;case"M":this.moveTo(e=a.end.x,r=a.end.y);break;case"H":this.lineTo(e=a.value,r);break;case"h":this.lineTo(e+=a.value,r);break;case"V":this.lineTo(e,r=a.value);break;case"v":this.lineTo(e,r+=a.value);break;case"Z":this.closePath();break;case"L":this.lineTo(e=a.end.x,r=a.end.y);break;case"l":this.lineTo(e+=a.end.x,r+=a.end.y);break;case"C":this.bezierCurveTo(a.cp1.x,a.cp1.y,a.cp2.x,a.cp2.y,e=a.end.x,r=a.end.y);break;case"c":var n=e,c=r;this.bezierCurveTo(n+a.cp1.x,c+a.cp1.y,n+a.cp2.x,c+a.cp2.y,e+=a.end.x,r+=a.end.y);break;case"s":case"q":var p=e,u=r;this.quadraticCurveTo(p+a.cp.x,u+a.cp.y,e+=a.end.x,r+=a.end.y);break;case"S":case"Q":this.quadraticCurveTo(a.cp.x,a.cp.y,e=a.end.x,r=a.end.y);break;default:console.info("[PIXI.SVG] Draw command not supported:",a.code,a)}}},e}(e.Graphics);exports.SVG=o;
//# sourceMappingURL=pixi-svg.cjs.js.map
