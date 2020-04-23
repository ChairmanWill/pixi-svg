/*!
 * pixi-svg - v2.0.0
 * Compiled Thu, 23 Apr 2020 20:32:23 UTC
 *
 * pixi-svg is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
import{Graphics as t}from"@pixi/graphics";import e from"d-path-parser";import i from"tinycolor2";var r=function(t){function r(e){t.call(this),this._svgFill(e),this._svgChildren(e.children)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._svgChildren=function(t,e){void 0===e&&(e=!1);for(var i=0;i<t.length;i++){var r=t[i];switch(this._svgFill(r,e),r.nodeName.toLowerCase()){case"path":this._svgPath(r);break;case"circle":case"ellipse":this._svgCircle(r);break;case"rect":this._svgRect(r);break;case"polygon":this._svgPoly(r,!0);break;case"polyline":this._svgPoly(r);break;case"g":break;default:console.info("[PIXI.SVG] <"+r.nodeName+"> elements unsupported")}this._svgChildren(r.children,!0)}},r.prototype._hexToUint=function(t){if("#"===t[0])return 3===(t=t.substr(1)).length&&(t=t.replace(/([a-f0-9])/gi,"$1$1")),parseInt(t,16);var e=i(t).toRgb();return(e.r<<16)+(e.g<<8)+e.b},r.prototype._svgCircle=function(t){var e="r",i="r",r="elipse"===t.nodeName;r&&(e+="x",i+="y");var o=parseFloat(t.getAttribute(i)),s=parseFloat(t.getAttribute(e)),l=t.getAttribute("cx"),a=t.getAttribute("cy"),n=0,c=0;null!==l&&(n=parseFloat(l)),null!==a&&(c=parseFloat(a)),r?this.drawEllipse(n,c,o,s):this.drawCircle(n,c,o)},r.prototype._svgRect=function(t){var e=parseFloat(t.getAttribute("x")),i=parseFloat(t.getAttribute("y")),r=parseFloat(t.getAttribute("width")),o=parseFloat(t.getAttribute("height")),s=parseFloat(t.getAttribute("rx"));s?this.drawRoundedRect(e,i,r,o,s):this.drawRect(e,i,r,o)},r.prototype._svgStyle=function(t){var e=t.getAttribute("style"),i={fill:t.getAttribute("fill"),opacity:t.getAttribute("opacity"),stroke:t.getAttribute("stroke"),strokeWidth:t.getAttribute("stroke-width"),cap:t.getAttribute("stroke-linecap"),join:t.getAttribute("stroke-linejoin"),miterLimit:t.getAttribute("stroke-miterlimit")};return null!==e&&(e.split(";").forEach((function(t){var e=t.split(":"),r=e[0],o=e[1];r&&(i[r.trim()]=o.trim())})),i["stroke-width"]&&(i.strokeWidth=i["stroke-width"],delete i["stroke-width"])),i},r.prototype._svgPoly=function(t,e){var i=t.getAttribute("points").split(/[ ,]/g).map((function(t){return parseInt(t,10)}));this.drawPolygon(i),e&&this.closePath()},r.prototype._svgFill=function(t,e){var i=this._svgStyle(t),r=i.fill,o=i.opacity,s=i.stroke,l=i.strokeWidth,a=i.cap,n=i.join,c=i.miterLimit,p=null!==s?1:0,h=null!==l?parseFloat(l):p,u=null!==s?this._hexToUint(s):this.lineColor;r?"none"===r?this.beginFill(0,0):this.beginFill(this._hexToUint(r),null!==o?parseFloat(o):1):e||this.beginFill(0),this.lineStyle({width:null===s&&null===l&&e?this.line.width:h,color:null===s&&e?this.line.color:u,cap:null===a&&e?this.line.cap:a,join:null===n&&e?this.line.join:n,miterLimit:null===c&&e?this.line.miterLimit:parseFloat(c)}),t.getAttribute("fill-rule")&&console.info('[PIXI.SVG] "fill-rule" attribute is not supported')},r.prototype._svgPath=function(t){for(var i,r,o=t.getAttribute("d"),s=e(o),l=0;l<s.length;l++){var a=s[l];switch(a.code){case"m":this.moveTo(i+=a.end.x,r+=a.end.y);break;case"M":this.moveTo(i=a.end.x,r=a.end.y);break;case"H":this.lineTo(i=a.value,r);break;case"h":this.lineTo(i+=a.value,r);break;case"V":this.lineTo(i,r=a.value);break;case"v":this.lineTo(i,r+=a.value);break;case"Z":this.closePath();break;case"L":this.lineTo(i=a.end.x,r=a.end.y);break;case"l":this.lineTo(i+=a.end.x,r+=a.end.y);break;case"C":this.bezierCurveTo(a.cp1.x,a.cp1.y,a.cp2.x,a.cp2.y,i=a.end.x,r=a.end.y);break;case"c":var n=i,c=r;this.bezierCurveTo(n+a.cp1.x,c+a.cp1.y,n+a.cp2.x,c+a.cp2.y,i+=a.end.x,r+=a.end.y);break;case"s":case"q":var p=i,h=r;this.quadraticCurveTo(p+a.cp.x,h+a.cp.y,i+=a.end.x,r+=a.end.y);break;case"S":case"Q":this.quadraticCurveTo(a.cp.x,a.cp.y,i=a.end.x,r=a.end.y);break;default:console.info("[PIXI.SVG] Draw command not supported:",a.code,a)}}},r}(t);export{r as SVG};
//# sourceMappingURL=pixi-svg.es.js.map
