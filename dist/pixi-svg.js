/*!
 * pixi-svg - v2.2.0
 * Compiled Wed, 27 May 2020 14:06:26 UTC
 *
 * pixi-svg is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var _pixi_svg=function(t,e){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function r(t,e){return t(e={exports:{}},e.exports),e.exports}var n=r((function(t,e){t.exports=function(t){for(var e={command:/\s*([achlmqstvz])/gi,number:/\s*([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/gi,comma:/\s*(?:(,)|\s)/g,flag:/\s*([01])/g},r={number:function(t){return+f("number",t)},"coordinate pair":function(t){var e=f("number",t);return null!==e||t?(f("comma"),{x:+e,y:+f("number",!0)}):null},"arc definition":function(t){var e=r["coordinate pair"](t);if(!e&&!t)return null;f("comma");var n=+f("number",!0);f("comma",!0);var i=!!+f("flag",!0);f("comma");var a=!!+f("flag",!0);return f("comma"),{radii:e,rotation:n,large:i,clockwise:a,end:r["coordinate pair"](!0)}}},n=0,i=[];n<t.length;){var a,o=f("command"),s=o.toUpperCase(),l=o!==s;switch(s){case"M":a=u("coordinate pair").map((function(t,e){return 1===e&&(o=l?"l":"L"),c({end:t})}));break;case"L":case"T":a=u("coordinate pair").map((function(t){return c({end:t})}));break;case"C":if((a=u("coordinate pair")).length%3)throw Error("Expected coordinate pair triplet at position "+n);a=a.reduce((function(t,e,r){var n=r%3;return n?t[t.length-1][1===n?"cp2":"end"]=e:t.push(c({cp1:e})),t}),[]);break;case"Q":case"S":if(1&(a=u("coordinate pair")).length)throw Error("Expected coordinate pair couple at position "+n);a=a.reduce((function(t,e,r){return 1&r?t[t.length-1].end=e:t.push(c({cp:e})),t}),[]);break;case"H":case"V":a=u("number").map((function(t){return c({value:t})}));break;case"A":a=u("arc definition").map(c);break;case"Z":a=[{code:"Z"}]}i.push.apply(i,a)}return i;function c(t){return t.code=o,t.relative=l,t}function f(r,i){e[r].lastIndex=n;var a=e[r].exec(t);if(!a||a.index!==n){if(!i)return null;throw Error("Expected "+r+" at position "+n)}return n=e[r].lastIndex,a[1]}function u(t){for(var e,n=[],i=!0;e=r[t](i);)n.push(e),i=!!f("comma");return n}}})),i=r((function(t){!function(e){var r=/^\s+/,n=/\s+$/,i=0,a=e.round,o=e.min,s=e.max,l=e.random;function c(t,l){if(l=l||{},(t=t||"")instanceof c)return t;if(!(this instanceof c))return new c(t,l);var f=function(t){var i={r:0,g:0,b:0},a=1,l=null,c=null,f=null,u=!1,h=!1;"string"==typeof t&&(t=function(t){t=t.replace(r,"").replace(n,"").toLowerCase();var e,i=!1;if(R[t])t=R[t],i=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};if(e=V.rgb.exec(t))return{r:e[1],g:e[2],b:e[3]};if(e=V.rgba.exec(t))return{r:e[1],g:e[2],b:e[3],a:e[4]};if(e=V.hsl.exec(t))return{h:e[1],s:e[2],l:e[3]};if(e=V.hsla.exec(t))return{h:e[1],s:e[2],l:e[3],a:e[4]};if(e=V.hsv.exec(t))return{h:e[1],s:e[2],v:e[3]};if(e=V.hsva.exec(t))return{h:e[1],s:e[2],v:e[3],a:e[4]};if(e=V.hex8.exec(t))return{r:P(e[1]),g:P(e[2]),b:P(e[3]),a:M(e[4]),format:i?"name":"hex8"};if(e=V.hex6.exec(t))return{r:P(e[1]),g:P(e[2]),b:P(e[3]),format:i?"name":"hex"};if(e=V.hex4.exec(t))return{r:P(e[1]+""+e[1]),g:P(e[2]+""+e[2]),b:P(e[3]+""+e[3]),a:M(e[4]+""+e[4]),format:i?"name":"hex8"};if(e=V.hex3.exec(t))return{r:P(e[1]+""+e[1]),g:P(e[2]+""+e[2]),b:P(e[3]+""+e[3]),format:i?"name":"hex"};return!1}(t));"object"==typeof t&&(G(t.r)&&G(t.g)&&G(t.b)?(g=t.r,d=t.g,b=t.b,i={r:255*T(g,255),g:255*T(d,255),b:255*T(b,255)},u=!0,h="%"===String(t.r).substr(-1)?"prgb":"rgb"):G(t.h)&&G(t.s)&&G(t.v)?(l=L(t.s),c=L(t.v),i=function(t,r,n){t=6*T(t,360),r=T(r,100),n=T(n,100);var i=e.floor(t),a=t-i,o=n*(1-r),s=n*(1-a*r),l=n*(1-(1-a)*r),c=i%6;return{r:255*[n,s,o,o,l,n][c],g:255*[l,n,n,s,o,o][c],b:255*[o,o,l,n,n,s][c]}}(t.h,l,c),u=!0,h="hsv"):G(t.h)&&G(t.s)&&G(t.l)&&(l=L(t.s),f=L(t.l),i=function(t,e,r){var n,i,a;function o(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=T(t,360),e=T(e,100),r=T(r,100),0===e)n=i=a=r;else{var s=r<.5?r*(1+e):r+e-r*e,l=2*r-s;n=o(l,s,t+1/3),i=o(l,s,t),a=o(l,s,t-1/3)}return{r:255*n,g:255*i,b:255*a}}(t.h,l,f),u=!0,h="hsl"),t.hasOwnProperty("a")&&(a=t.a));var g,d,b;return a=H(a),{ok:u,format:t.format||h,r:o(255,s(i.r,0)),g:o(255,s(i.g,0)),b:o(255,s(i.b,0)),a:a}}(t);this._originalInput=t,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=a(100*this._a)/100,this._format=l.format||f.format,this._gradientType=l.gradientType,this._r<1&&(this._r=a(this._r)),this._g<1&&(this._g=a(this._g)),this._b<1&&(this._b=a(this._b)),this._ok=f.ok,this._tc_id=i++}function f(t,e,r){t=T(t,255),e=T(e,255),r=T(r,255);var n,i,a=s(t,e,r),l=o(t,e,r),c=(a+l)/2;if(a==l)n=i=0;else{var f=a-l;switch(i=c>.5?f/(2-a-l):f/(a+l),a){case t:n=(e-r)/f+(e<r?6:0);break;case e:n=(r-t)/f+2;break;case r:n=(t-e)/f+4}n/=6}return{h:n,s:i,l:c}}function u(t,e,r){t=T(t,255),e=T(e,255),r=T(r,255);var n,i,a=s(t,e,r),l=o(t,e,r),c=a,f=a-l;if(i=0===a?0:f/a,a==l)n=0;else{switch(a){case t:n=(e-r)/f+(e<r?6:0);break;case e:n=(r-t)/f+2;break;case r:n=(t-e)/f+4}n/=6}return{h:n,s:i,v:c}}function h(t,e,r,n){var i=[E(a(t).toString(16)),E(a(e).toString(16)),E(a(r).toString(16))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function g(t,e,r,n){return[E(q(n)),E(a(t).toString(16)),E(a(e).toString(16)),E(a(r).toString(16))].join("")}function d(t,e){e=0===e?0:e||10;var r=c(t).toHsl();return r.s-=e/100,r.s=I(r.s),c(r)}function b(t,e){e=0===e?0:e||10;var r=c(t).toHsl();return r.s+=e/100,r.s=I(r.s),c(r)}function p(t){return c(t).desaturate(100)}function m(t,e){e=0===e?0:e||10;var r=c(t).toHsl();return r.l+=e/100,r.l=I(r.l),c(r)}function v(t,e){e=0===e?0:e||10;var r=c(t).toRgb();return r.r=s(0,o(255,r.r-a(-e/100*255))),r.g=s(0,o(255,r.g-a(-e/100*255))),r.b=s(0,o(255,r.b-a(-e/100*255))),c(r)}function _(t,e){e=0===e?0:e||10;var r=c(t).toHsl();return r.l-=e/100,r.l=I(r.l),c(r)}function y(t,e){var r=c(t).toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,c(r)}function x(t){var e=c(t).toHsl();return e.h=(e.h+180)%360,c(e)}function k(t){var e=c(t).toHsl(),r=e.h;return[c(t),c({h:(r+120)%360,s:e.s,l:e.l}),c({h:(r+240)%360,s:e.s,l:e.l})]}function A(t){var e=c(t).toHsl(),r=e.h;return[c(t),c({h:(r+90)%360,s:e.s,l:e.l}),c({h:(r+180)%360,s:e.s,l:e.l}),c({h:(r+270)%360,s:e.s,l:e.l})]}function w(t){var e=c(t).toHsl(),r=e.h;return[c(t),c({h:(r+72)%360,s:e.s,l:e.l}),c({h:(r+216)%360,s:e.s,l:e.l})]}function S(t,e,r){e=e||6,r=r||30;var n=c(t).toHsl(),i=360/r,a=[c(t)];for(n.h=(n.h-(i*e>>1)+720)%360;--e;)n.h=(n.h+i)%360,a.push(c(n));return a}function F(t,e){e=e||6;for(var r=c(t).toHsv(),n=r.h,i=r.s,a=r.v,o=[],s=1/e;e--;)o.push(c({h:n,s:i,v:a})),a=(a+s)%1;return o}c.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,n,i=this.toRgb();return t=i.r/255,r=i.g/255,n=i.b/255,.2126*(t<=.03928?t/12.92:e.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:e.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:e.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=H(t),this._roundA=a(100*this._a)/100,this},toHsv:function(){var t=u(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=u(this._r,this._g,this._b),e=a(360*t.h),r=a(100*t.s),n=a(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=f(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=f(this._r,this._g,this._b),e=a(360*t.h),r=a(100*t.s),n=a(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return h(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,r,n,i){var o=[E(a(t).toString(16)),E(a(e).toString(16)),E(a(r).toString(16)),E(q(n))];if(i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1))return o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0);return o.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:a(this._r),g:a(this._g),b:a(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+a(this._r)+", "+a(this._g)+", "+a(this._b)+")":"rgba("+a(this._r)+", "+a(this._g)+", "+a(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:a(100*T(this._r,255))+"%",g:a(100*T(this._g,255))+"%",b:a(100*T(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+a(100*T(this._r,255))+"%, "+a(100*T(this._g,255))+"%, "+a(100*T(this._b,255))+"%)":"rgba("+a(100*T(this._r,255))+"%, "+a(100*T(this._g,255))+"%, "+a(100*T(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(C[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+g(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var i=c(t);r="#"+g(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return c(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(m,arguments)},brighten:function(){return this._applyModification(v,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(d,arguments)},saturate:function(){return this._applyModification(b,arguments)},greyscale:function(){return this._applyModification(p,arguments)},spin:function(){return this._applyModification(y,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(x,arguments)},monochromatic:function(){return this._applyCombination(F,arguments)},splitcomplement:function(){return this._applyCombination(w,arguments)},triad:function(){return this._applyCombination(k,arguments)},tetrad:function(){return this._applyCombination(A,arguments)}},c.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:L(t[n]));t=r}return c(t,e)},c.equals=function(t,e){return!(!t||!e)&&c(t).toRgbString()==c(e).toRgbString()},c.random=function(){return c.fromRatio({r:l(),g:l(),b:l()})},c.mix=function(t,e,r){r=0===r?0:r||50;var n=c(t).toRgb(),i=c(e).toRgb(),a=r/100;return c({r:(i.r-n.r)*a+n.r,g:(i.g-n.g)*a+n.g,b:(i.b-n.b)*a+n.b,a:(i.a-n.a)*a+n.a})},c.readability=function(t,r){var n=c(t),i=c(r);return(e.max(n.getLuminance(),i.getLuminance())+.05)/(e.min(n.getLuminance(),i.getLuminance())+.05)},c.isReadable=function(t,e,r){var n,i,a=c.readability(t,e);switch(i=!1,(n=function(t){var e,r;e=((t=t||{level:"AA",size:"small"}).level||"AA").toUpperCase(),r=(t.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA");"small"!==r&&"large"!==r&&(r="small");return{level:e,size:r}}(r)).level+n.size){case"AAsmall":case"AAAlarge":i=a>=4.5;break;case"AAlarge":i=a>=3;break;case"AAAsmall":i=a>=7}return i},c.mostReadable=function(t,e,r){var n,i,a,o,s=null,l=0;i=(r=r||{}).includeFallbackColors,a=r.level,o=r.size;for(var f=0;f<e.length;f++)(n=c.readability(t,e[f]))>l&&(l=n,s=c(e[f]));return c.isReadable(t,s,{level:a,size:o})||!i?s:(r.includeFallbackColors=!1,c.mostReadable(t,["#fff","#000"],r))};var R=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},C=c.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(R);function H(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function T(t,r){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var n=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=o(r,s(0,parseFloat(t))),n&&(t=parseInt(t*r,10)/100),e.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function I(t){return o(1,s(0,t))}function P(t){return parseInt(t,16)}function E(t){return 1==t.length?"0"+t:""+t}function L(t){return t<=1&&(t=100*t+"%"),t}function q(t){return e.round(255*parseFloat(t)).toString(16)}function M(t){return P(t)/255}var j,N,z,V=(N="[\\s|\\(]+("+(j="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+j+")[,|\\s]+("+j+")\\s*\\)?",z="[\\s|\\(]+("+j+")[,|\\s]+("+j+")[,|\\s]+("+j+")[,|\\s]+("+j+")\\s*\\)?",{CSS_UNIT:new RegExp(j),rgb:new RegExp("rgb"+N),rgba:new RegExp("rgba"+z),hsl:new RegExp("hsl"+N),hsla:new RegExp("hsla"+z),hsv:new RegExp("hsv"+N),hsva:new RegExp("hsva"+z),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function G(t){return!!V.CSS_UNIT.exec(t)}t.exports?t.exports=c:window.tinycolor=c}(Math)})),a=function(t){function e(e){t.call(this),e&&this.drawSVG(e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.drawSVG=function(t){if("string"==typeof t){var e=document.createElement("div");e.innerHTML=t.trim(),t=e.querySelector("svg")}if(!t)throw new Error("Missing <svg> element in SVG constructor");return this._svgFill(t),this._svgChildren(t.children),this},e.prototype._svgChildren=function(t,e){void 0===e&&(e=!1);for(var r=0;r<t.length;r++){var n=t[r];switch(this._svgFill(n,e),n.nodeName.toLowerCase()){case"path":this._svgPath(n);break;case"circle":case"ellipse":this._svgCircle(n);break;case"rect":this._svgRect(n);break;case"polygon":this._svgPoly(n,!0);break;case"polyline":this._svgPoly(n);break;case"g":break;default:console.info("[PIXI.SVG] <"+n.nodeName+"> elements unsupported")}this._svgChildren(n.children,!0)}},e.prototype._hexToUint=function(t){if("#"===t[0])return 3===(t=t.substr(1)).length&&(t=t.replace(/([a-f0-9])/gi,"$1$1")),parseInt(t,16);var e=i(t).toRgb();return(e.r<<16)+(e.g<<8)+e.b},e.prototype._svgCircle=function(t){var e="r",r="r",n="elipse"===t.nodeName;n&&(e+="x",r+="y");var i=parseFloat(t.getAttribute(r)),a=parseFloat(t.getAttribute(e)),o=t.getAttribute("cx"),s=t.getAttribute("cy"),l=0,c=0;null!==o&&(l=parseFloat(o)),null!==s&&(c=parseFloat(s)),n?this.drawEllipse(l,c,i,a):this.drawCircle(l,c,i)},e.prototype._svgRect=function(t){var e=parseFloat(t.getAttribute("x")),r=parseFloat(t.getAttribute("y")),n=parseFloat(t.getAttribute("width")),i=parseFloat(t.getAttribute("height")),a=parseFloat(t.getAttribute("rx"));a?this.drawRoundedRect(e,r,n,i,a):this.drawRect(e,r,n,i)},e.prototype._svgStyle=function(t){var e=t.getAttribute("style"),r={fill:t.getAttribute("fill"),opacity:t.getAttribute("opacity"),stroke:t.getAttribute("stroke"),strokeWidth:t.getAttribute("stroke-width"),cap:t.getAttribute("stroke-linecap"),join:t.getAttribute("stroke-linejoin"),miterLimit:t.getAttribute("stroke-miterlimit")};return null!==e&&(e.split(";").forEach((function(t){var e=t.split(":"),n=e[0],i=e[1];n&&(r[n.trim()]=i.trim())})),r["stroke-width"]&&(r.strokeWidth=r["stroke-width"],delete r["stroke-width"])),r},e.prototype._svgPoly=function(t,e){var r=t.getAttribute("points").split(/[ ,]/g).map((function(t){return parseInt(t,10)}));this.drawPolygon(r),e&&this.closePath()},e.prototype._svgFill=function(t,e){var r=this._svgStyle(t),n=r.fill,i=r.opacity,a=r.stroke,o=r.strokeWidth,s=r.cap,l=r.join,c=r.miterLimit,f=null!==a?1:0,u=null!==o?parseFloat(o):f,h=null!==a?this._hexToUint(a):this.lineColor;n?"none"===n?this.beginFill(0,0):this.beginFill(this._hexToUint(n),null!==i?parseFloat(i):1):e||this.beginFill(0),this.lineStyle({width:null===a&&null===o&&e?this.line.width:u,color:null===a&&e?this.line.color:h,cap:null===s&&e?this.line.cap:s,join:null===l&&e?this.line.join:l,miterLimit:null===c&&e?this.line.miterLimit:parseFloat(c)}),t.getAttribute("fill-rule")&&console.info('[PIXI.SVG] "fill-rule" attribute is not supported')},e.prototype._svgPath=function(t){for(var e,r,i=t.getAttribute("d"),a=n(i.trim()),o=0;o<a.length;o++){var s=a[o];switch(s.code){case"m":this.moveTo(e+=s.end.x,r+=s.end.y);break;case"M":this.moveTo(e=s.end.x,r=s.end.y);break;case"H":this.lineTo(e=s.value,r);break;case"h":this.lineTo(e+=s.value,r);break;case"V":this.lineTo(e,r=s.value);break;case"v":this.lineTo(e,r+=s.value);break;case"Z":this.closePath();break;case"L":this.lineTo(e=s.end.x,r=s.end.y);break;case"l":this.lineTo(e+=s.end.x,r+=s.end.y);break;case"C":this.bezierCurveTo(s.cp1.x,s.cp1.y,s.cp2.x,s.cp2.y,e=s.end.x,r=s.end.y);break;case"c":var l=e,c=r;this.bezierCurveTo(l+s.cp1.x,c+s.cp1.y,l+s.cp2.x,c+s.cp2.y,e+=s.end.x,r+=s.end.y);break;case"s":case"q":var f=e,u=r;this.quadraticCurveTo(f+s.cp.x,u+s.cp.y,e+=s.end.x,r+=s.end.y);break;case"S":case"Q":this.quadraticCurveTo(s.cp.x,s.cp.y,e=s.end.x,r=s.end.y);break;default:console.info("[PIXI.SVG] Draw command not supported:",s.code,s)}}},e}(e.Graphics);return t.SVG=a,t}({},PIXI);Object.assign(PIXI,_pixi_svg);
//# sourceMappingURL=pixi-svg.js.map
