﻿!function(t,e){$_[t]=e}("measureText",function(t,e){var i=DN;KN||((KN=i.createElement("div")).style.cssText="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",DN.body.appendChild(KN));try{KN.style.font=e}catch(t){}return KN.innerHTML="",KN.appendChild(i.createTextNode(t)),{width:KN.offsetWidth}});for(var iO=new Kt,nO=[tw,Ke,Je,In,zb],oO=0;oO<nO.length;oO++){var aO=nO[oO].prototype;aO.drawRectText=function(t,e,i,n){var o=this.style;this.__dirty&&Ne(o);var a=o.text;if(null!=a&&(a+=""),a){if(o.rich){var r=Ce(a,o);a=[];for(var s=0;s<r.lines.length;s++){for(var l=r.lines[s].tokens,u=[],h=0;h<l.length;h++)u.push(l[h].text);a.push(u.join(""))}a=a.join("\n")}var c,d,f=o.textAlign,p=o.textVerticalAlign,g=eO(o.font),m=g.style+" "+g.variant+" "+g.weight+" "+g.size+'px "'+g.family+'"';i=i||me(a,m,f,p);var v=this.transform;if(v&&!n&&(iO.copy(e),iO.applyTransform(v),e=iO),n)c=e.x,d=e.y;else{var y=o.textPosition,x=o.textDistance;if(y instanceof Array)c=e.x+WN(y[0],e.width),d=e.y+WN(y[1],e.height),f=f||"left";else{var _=we(y,e,x);c=_.x,d=_.y,f=f||_.textAlign,p=p||_.textVerticalAlign}}c=xe(c,i.width,f),d=_e(d,i.height,p),d+=i.height/2;var w,b,S,M=Uy,I=this._textVmlEl;I?b=(w=(S=I.firstChild).nextSibling).nextSibling:(I=M("line"),w=M("path"),b=M("textpath"),S=M("skew"),b.style["v-text-align"]="left",zN(I),w.textpathok=!0,b.on=!0,I.from="0 0",I.to="1000 0.05",VN(I,S),VN(I,w),VN(I,b),this._textVmlEl=I);var D=[c,d],T=I.style;v&&n?(Q(D,D,v),S.on=!0,S.matrix=v[0].toFixed(3)+","+v[2].toFixed(3)+","+v[1].toFixed(3)+","+v[3].toFixed(3)+",0,0",S.offset=(AN(D[0])||0)+","+(AN(D[1])||0),S.origin="0 0",T.left="0px",T.top="0px"):(S.on=!1,T.left=AN(c)+"px",T.top=AN(d)+"px"),b.string=RN(a);try{b.style.font=m}catch(t){}XN(I,"fill",{fill:o.textFill,opacity:o.opacity},this),XN(I,"stroke",{stroke:o.textStroke,opacity:o.opacity,lineDash:o.lineDash},this),I.style.zIndex=FN(this.zlevel,this.z,this.z2),VN(t,I)}},aO.removeRectText=function(t){GN(t,this._textVmlEl),this._textVmlEl=null},aO.appendRectText=function(t){VN(t,this._textVmlEl)}}zb.prototype.brushVML=function(t){var e=this.style;null!=e.text?this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this.getBoundingRect(),!0):this.removeRectText(t)},zb.prototype.onRemove=function(t){this.removeRectText(t)},zb.prototype.onAdd=function(t){this.appendRectText(t)}}Yy.prototype={constructor:Yy,getType:function(){return"vml"},getViewportRoot:function(){return this._vmlViewport},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(){var t=this.storage.getDisplayList(!0,!0);this._paintList(t)},_paintList:function(t){for(var e=this._vmlRoot,i=0;i<t.length;i++){var n=t[i];n.invisible||n.ignore?(n.__alreadyNotVisible||n.onRemove(e),n.__alreadyNotVisible=!0):(n.__alreadyNotVisible&&n.onAdd(e),n.__alreadyNotVisible=!1,n.__dirty&&(n.beforeBrush&&n.beforeBrush(),(n.brushVML||n.brush).call(n,e),n.afterBrush&&n.afterBrush())),n.__dirty=!1}this._firstPaint&&(this._vmlViewport.appendChild(e),this._firstPaint=!1)},resize:function(t,e){var t=null==t?this._getWidth():t,e=null==e?this._getHeight():e;if(this._width!=t||this._height!=e){this._width=t,this._height=e;var i=this._vmlViewport.style;i.width=t+"px",i.height=e+"px"}},dispose:function(){this.root.innerHTML="",this._vmlRoot=this._vmlViewport=this.storage=null},getWidth:function(){return this._width},getHeight:function(){return this._height},clear:function(){this._vmlViewport&&this.root.removeChild(this._vmlViewport)},_getWidth:function(){var t=this.root,e=t.currentStyle;return(t.clientWidth||Xy(e.width))-Xy(e.paddingLeft)-Xy(e.paddingRight)|0},_getHeight:function(){var t=this.root,e=t.currentStyle;return(t.clientHeight||Xy(e.height))-Xy(e.paddingTop)-Xy(e.paddingBottom)|0}},d(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){Yy.prototype[t]=qy(t)}),wi("vml",Yy);var rO="http://www.w3.org/2000/svg",sO=db.CMD,lO=Array.prototype.join,uO="none",hO=Math.round,cO=Math.sin,dO=Math.cos,fO=Math.PI,pO=2*Math.PI,gO=180/fO,mO=1e-4,vO={};vO.brush=function(t){var e=t.style,i=t.__svgEl;i||(i=$y("path"),t.__svgEl=i),t.path||t.createPathProxy();var n=t.path;if(t.__dirtyPath){n.beginPath(),t.buildPath(n,t.shape),t.__dirtyPath=!1;var o=ax(n);o.indexOf("NaN")<0&&ix(i,"d",o)}ox(i,e),ex(i,t.transform),null!=e.text&&wO(t,t.getBoundingRect())};var yO={};yO.brush=function(t){var e=t.style,i=e.image;if(i instanceof HTMLImageElement&&(i=i.src),i){var n=e.x||0,o=e.y||0,a=e.width,r=e.height,s=t.__svgEl;s||(s=$y("image"),t.__svgEl=s),i!==t.__imageSrc&&(nx(s,"href",i),t.__imageSrc=i),ix(s,"width",a),ix(s,"height",r),ix(s,"x",n),ix(s,"y",o),ex(s,t.transform),null!=e.text&&wO(t,t.getBoundingRect())}};var xO={},_O=new Kt,wO=function(t,e,i){var n=t.style;t.__dirty&&Ne(n);var o=n.text;if(null!=o){o+="";var a=t.__textSvgEl;a||(a=$y("text"),t.__textSvgEl=a);var r,s,l=n.textPosition,u=n.textDistance,h=n.textAlign||"left";"number"==typeof n.fontSize&&(n.fontSize+="px");var c=n.font||[n.fontStyle||"",n.fontWeight||"",n.fontSize||"",n.fontFamily||""].join(" ")||q_,d=rx(n.textVerticalAlign),f=(i=me(o,c,h,d)).lineHeight;if(l instanceof Array)r=e.x+l[0],s=e.y+l[1];else{var p=we(l,e,u);r=p.x,s=p.y,d=rx(p.textVerticalAlign),h=p.textAlign}ix(a,"alignment-baseline",d),c&&(a.style.font=c);var g=n.textPadding;if(ix(a,"x",r),ix(a,"y",s),ox(a,n,!0),t instanceof zb||t.style.transformText)ex(a,t.transform);else{if(t.transform)_O.copy(e),_O.applyTransform(t.transform),e=_O;else{var m=t.transformCoordToGlobal(e.x,e.y);e.x=m[0],e.y=m[1]}var v=n.textOrigin;"center"===v?(r=i.width/2+r,s=i.height/2+s):v&&(r=v[0]+r,s=v[1]+s),ix(a,"transform","rotate("+180*-n.textRotation/Math.PI+","+r+","+s+")")}var y=o.split("\n"),x=y.length,_=h;"left"===_?(_="start",g&&(r+=g[3])):"right"===_?(_="end",g&&(r-=g[1])):"center"===_&&(_="middle",g&&(r+=(g[3]-g[1])/2));var w=0;if("baseline"===d?(w=-i.height+f,g&&(w-=g[2])):"middle"===d?(w=(-i.height+f)/2,g&&(s+=(g[0]-g[2])/2)):g&&(w+=g[0]),t.__text!==o||t.__textFont!==c){var b=t.__tspanList||[];t.__tspanList=b;for(M=0;M<x;M++)(I=b[M])?I.innerHTML="":(I=b[M]=$y("tspan"),a.appendChild(I),ix(I,"alignment-baseline",d),ix(I,"text-anchor",_)),ix(I,"x",r),ix(I,"y",s+M*f+w),I.appendChild(document.createTextNode(y[M]));for(;M<b.length;M++)a.removeChild(b[M]);b.length=x,t.__text=o,t.__textFont=c}else if(t.__tspanList.length)for(var S=t.__tspanList.length,M=0;M<S;++M){var I=t.__tspanList[M];I&&(ix(I,"x",r),ix(I,"y",s+M*f+w))}}};xO.drawRectText=wO,xO.brush=function(t){var e=t.style;null!=e.text&&(e.textPosition=[0,0],wO(t,{x:e.x||0,y:e.y||0,width:0,height:0},t.getBoundingRect()))},sx.prototype={diff:function(t,e,i){i||(i=function(t,e){return t===e}),this.equals=i;var n=this;t=t.slice();var o=(e=e.slice()).length,a=t.length,r=1,s=o+a,l=[{newPos:-1,components:[]}],u=this.extractCommon(l[0],e,t,0);if(l[0].newPos+1>=o&&u+1>=a){for(var h=[],c=0;c<e.length;c++)h.push(c);return[{indices:h,count:e.length}]}for(;r<=s;){var d=function(){for(var i=-1*r;i<=r;i+=2){var s,u=l[i-1],h=l[i+1],c=(h?h.newPos:0)-i;u&&(l[i-1]=void 0);var d=u&&u.newPos+1<o,f=h&&0<=c&&c<a;if(d||f){if(!d||f&&u.newPos<h.newPos?(s=ux(h),n.pushComponent(s.components,void 0,!0)):((s=u).newPos++,n.pushComponent(s.components,!0,void 0)),c=n.extractCommon(s,e,t,i),s.newPos+1>=o&&c+1>=a)return lx(0,s.components);l[i]=s}else l[i]=void 0}r++}();if(d)return d}},pushComponent:function(t,e,i){var n=t[t.length-1];n&&n.added===e&&n.removed===i?t[t.length-1]={count:n.count+1,added:e,removed:i}:t.push({count:1,added:e,removed:i})},extractCommon:function(t,e,i,n){for(var o=e.length,a=i.length,r=t.newPos,s=r-n,l=0;r+1<o&&s+1<a&&this.equals(e[r+1],i[s+1]);)r++,s++,l++;return l&&t.components.push({count:l}),t.newPos=r,s},tokenize:function(t){return t.slice()},join:function(t){return t.slice()}};var bO=new sx,SO=function(t,e,i){return bO.diff(t,e,i)};hx.prototype.createElement=$y,hx.prototype.getDefs=function(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");return 0===i.length?t?((i=e.insertBefore(this.createElement("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n)if(e[n]===t)return!0;return!1}),i):null:i[0]},hx.prototype.update=function(t,e){if(t){var i=this.getDefs(!1);if(t[this._domName]&&i.contains(t[this._domName]))"function"==typeof e&&e(t);else{var n=this.add(t);n&&(t[this._domName]=n)}}},hx.prototype.addDom=function(t){this.getDefs(!0).appendChild(t)},hx.prototype.removeDom=function(t){var e=this.getDefs(!1);e&&t[this._domName]&&(e.removeChild(t[this._domName]),t[this._domName]=null)},hx.prototype.getDoms=function(){var t=this.getDefs(!1);if(!t)return[];var e=[];return d(this._tagNames,function(i){var n=t.getElementsByTagName(i);e=e.concat([].slice.call(n))}),e},hx.prototype.markAllUnused=function(){var t=this;d(this.getDoms(),function(e){e[t._markLabel]="0"})},hx.prototype.markUsed=function(t){t&&(t[this._markLabel]="1")},hx.prototype.removeUnused=function(){var t=this.getDefs(!1);if(t){var e=this;d(this.getDoms(),function(i){"1"!==i[e._markLabel]&&t.removeChild(i)})}},hx.prototype.getSvgProxy=function(t){return t instanceof In?vO:t instanceof Je?yO:t instanceof zb?xO:vO},hx.prototype.getTextSvgElement=function(t){return t.__textSvgEl},hx.prototype.getSvgElement=function(t){return t.__svgEl},u(cx,hx),cx.prototype.addWithoutUpdate=function(t,e){if(e&&e.style){var i=this;d(["fill","stroke"],function(n){if(e.style[n]&&("linear"===e.style[n].type||"radial"===e.style[n].type)){var o,a=e.style[n],r=i.getDefs(!0);a._dom?(o=a._dom,r.contains(a._dom)||i.addDom(o)):o=i.add(a),i.markUsed(e);var s=o.getAttribute("id");t.setAttribute(n,"url(#"+s+")")}})}},cx.prototype.add=function(t){var e;if("linear"===t.type)e=this.createElement("linearGradient");else{if("radial"!==t.type)return M_("Illegal gradient type."),null;e=this.createElement("radialGradient")}return t.id=t.id||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-gradient-"+t.id),this.updateDom(t,e),this.addDom(e),e},cx.prototype.update=function(t){var e=this;hx.prototype.update.call(this,t,function(){var i=t.type,n=t._dom.tagName;"linear"===i&&"linearGradient"===n||"radial"===i&&"radialGradient"===n?e.updateDom(t,t._dom):(e.removeDom(t),e.add(t))})},cx.prototype.updateDom=function(t,e){if("linear"===t.type)e.setAttribute("x1",t.x),e.setAttribute("y1",t.y),e.setAttribute("x2",t.x2),e.setAttribute("y2",t.y2);else{if("radial"!==t.type)return void M_("Illegal gradient type.");e.setAttribute("cx",t.x),e.setAttribute("cy",t.y),e.setAttribute("r",t.r)}t.global?e.setAttribute("gradientUnits","userSpaceOnUse"):e.setAttribute("gradientUnits","objectBoundingBox"),e.innerHTML="";for(var i=t.colorStops,n=0,o=i.length;n<o;++n){var a=this.createElement("stop");a.setAttribute("offset",100*i[n].offset+"%"),a.setAttribute("stop-color",i[n].color),e.appendChild(a)}t._dom=e},cx.prototype.markUsed=function(t){if(t.style){var e=t.style.fill;e&&e._dom&&hx.prototype.markUsed.call(this,e._dom),(e=t.style.stroke)&&e._dom&&hx.prototype.markUsed.call(this,e._dom)}},u(dx,hx),dx.prototype.update=function(t){var e=this.getSvgElement(t);e&&this.updateDom(e,t.__clipPaths,!1);var i=this.getTextSvgElement(t);i&&this.updateDom(i,t.__clipPaths,!0),this.markUsed(t)},dx.prototype.updateDom=function(t,e,i){if(e&&e.length>0){var n,o,a=this.getDefs(!0),r=e[0],s=i?"_textDom":"_dom";r[s]?(o=r[s].getAttribute("id"),n=r[s],a.contains(n)||a.appendChild(n)):(o="zr"+this._zrId+"-clip-"+this.nextId,++this.nextId,(n=this.createElement("clipPath")).setAttribute("id",o),a.appendChild(n),r[s]=n);var l=this.getSvgProxy(r);if(r.transform&&r.parent.invTransform&&!i){var u=Array.prototype.slice.call(r.transform);ht(r.transform,r.parent.invTransform,r.transform),l.brush(r),r.transform=u}else l.brush(r);var h=this.getSvgElement(r);n.innerHTML="",n.appendChild(h.cloneNode()),t.setAttribute("clip-path","url(#"+o+")"),e.length>1&&this.updateDom(n,e.slice(1),i)}else t&&t.setAttribute("clip-path","none")},dx.prototype.markUsed=function(t){var e=this;t.__clipPaths&&t.__clipPaths.length>0&&d(t.__clipPaths,function(t){t._dom&&hx.prototype.markUsed.call(e,t._dom),t._textDom&&hx.prototype.markUsed.call(e,t._textDom)})},u(fx,hx),fx.prototype.addWithoutUpdate=function(t,e){if(e&&px(e.style)){var i,n=e.style;n._shadowDom?(i=n._shadowDom,this.getDefs(!0).contains(n._shadowDom)||this.addDom(i)):i=this.add(e),this.markUsed(e);var o=i.getAttribute("id");t.style.filter="url(#"+o+")"}},fx.prototype.add=function(t){var e=this.createElement("filter"),i=t.style;return i._shadowDomId=i._shadowDomId||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-shadow-"+i._shadowDomId),this.updateDom(t,e),this.addDom(e),e},fx.prototype.update=function(t,e){var i=e.style;if(px(i)){var n=this;hx.prototype.update.call(this,e,function(t){n.updateDom(e,t._shadowDom)})}else this.remove(t,i)},fx.prototype.remove=function(t,e){null!=e._shadowDomId&&(this.removeDom(e),t.style.filter="")},fx.prototype.updateDom=function(t,e){var i=e.getElementsByTagName("feDropShadow");i=0===i.length?this.createElement("feDropShadow"):i[0];var n,o,a,r,s=t.style,l=t.scale?t.scale[0]||1:1,u=t.scale?t.scale[1]||1:1;if(s.shadowBlur||s.shadowOffsetX||s.shadowOffsetY)n=s.shadowOffsetX||0,o=s.shadowOffsetY||0,a=s.shadowBlur,r=s.shadowColor;else{if(!s.textShadowBlur)return void this.removeDom(e,s);n=s.textShadowOffsetX||0,o=s.textShadowOffsetY||0,a=s.textShadowBlur,r=s.textShadowColor}i.setAttribute("dx",n/l),i.setAttribute("dy",o/u),i.setAttribute("flood-color",r);var h=a/2/l+" "+a/2/u;i.setAttribute("stdDeviation",h),e.setAttribute("x","-100%"),e.setAttribute("y","-100%"),e.setAttribute("width",Math.ceil(a/2*200)+"%"),e.setAttribute("height",Math.ceil(a/2*200)+"%"),e.appendChild(i),s._shadowDom=e},fx.prototype.markUsed=function(t){var e=t.style;e&&e._shadowDom&&hx.prototype.markUsed.call(this,e._shadowDom)};var MO=function(t,e,i,n){this.root=t,this.storage=e,this._opts=i=a({},i||{});var o=$y("svg");o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("version","1.1"),o.setAttribute("baseProfile","full"),o.style.cssText="user-select:none;position:absolute;left:0;top:0;",this.gradientManager=new cx(n,o),this.clipPathManager=new dx(n,o),this.shadowManager=new fx(n,o);var r=document.createElement("div");r.style.cssText="overflow:hidden;position:relative",this._svgRoot=o,this._viewport=r,t.appendChild(r),r.appendChild(o),this.resize(i.width,i.height),this._visibleList=[]};MO.prototype={constructor:MO,getType:function(){return"svg"},getViewportRoot:function(){return this._viewport},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(){var t=this.storage.getDisplayList(!0);this._paintList(t)},setBackgroundColor:function(t){this._viewport.style.background=t},_paintList:function(t){this.gradientManager.markAllUnused(),this.clipPathManager.markAllUnused(),this.shadowManager.markAllUnused();var e,i=this._svgRoot,n=this._visibleList,o=t.length,a=[];for(e=0;e<o;e++){var r=mx(f=t[e]),s=Sx(f)||bx(f);f.invisible||(f.__dirty&&(r&&r.brush(f),this.clipPathManager.update(f),f.style&&(this.gradientManager.update(f.style.fill),this.gradientManager.update(f.style.stroke),this.shadowManager.update(s,f)),f.__dirty=!1),a.push(f))}var l,u=SO(n,a);for(e=0;e<u.length;e++)if((c=u[e]).removed)for(d=0;d<c.count;d++){var s=Sx(f=n[c.indices[d]]),h=bx(f);_x(i,s),_x(i,h)}for(e=0;e<u.length;e++){var c=u[e];if(c.added)for(d=0;d<c.count;d++){var s=Sx(f=a[c.indices[d]]),h=bx(f);l?yx(i,s,l):xx(i,s),s?yx(i,h,s):l?yx(i,h,l):xx(i,h),yx(i,h,s),l=h||s||l,this.gradientManager.addWithoutUpdate(s,f),this.shadowManager.addWithoutUpdate(l,f),this.clipPathManager.markUsed(f)}else if(!c.removed)for(var d=0;d<c.count;d++){var f=a[c.indices[d]];l=s=bx(f)||Sx(f)||l,this.gradientManager.markUsed(f),this.gradientManager.addWithoutUpdate(s,f),this.shadowManager.markUsed(f),this.shadowManager.addWithoutUpdate(s,f),this.clipPathManager.markUsed(f)}}this.gradientManager.removeUnused(),this.clipPathManager.removeUnused(),this.shadowManager.removeUnused(),this._visibleList=a},_getDefs:function(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");return 0===i.length?t?((i=e.insertBefore($y("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n)if(e[n]===t)return!0;return!1}),i):null:i[0]},resize:function(t,e){var i=this._viewport;i.style.display="none";var n=this._opts;if(null!=t&&(n.width=t),null!=e&&(n.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!==t||this._height!==e){this._width=t,this._height=e;var o=i.style;o.width=t+"px",o.height=e+"px";var a=this._svgRoot;a.setAttribute("width",t),a.setAttribute("height",e)}},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],n=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var r=this.root,s=document.defaultView.getComputedStyle(r);return(r[n]||gx(s[i])||gx(r.style[i]))-(gx(s[o])||0)-(gx(s[a])||0)|0},dispose:function(){this.root.innerHTML="",this._svgRoot=this._viewport=this.storage=null},clear:function(){this._viewport&&this.root.removeChild(this._viewport)},pathToDataUrl:function(){return this.refresh(),"data:image/svg+xml;charset=UTF-8,"+this._svgRoot.outerHTML}},d(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){MO.prototype[t]=Mx(t)}),wi("svg",MO),t.version="4.0.4",t.dependencies=UM,t.PRIORITY=qM,t.init=function(t,e,i){var n=rs(t);if(n)return n;var o=new Vr(t,e,i);return o.id="ec_"+dI++,hI[o.id]=o,zi(t,pI,o.id),os(o),o},t.connect=function(t){if(y(t)){var e=t;t=null,FM(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+fI++,FM(e,function(e){e.group=t})}return cI[t]=!0,t},t.disConnect=as,t.disconnect=mI,t.dispose=function(t){"string"==typeof t?t=hI[t]:t instanceof Vr||(t=rs(t)),t instanceof Vr&&!t.isDisposed()&&t.dispose()},t.getInstanceByDom=rs,t.getInstanceById=function(t){return hI[t]},t.registerTheme=ss,t.registerPreprocessor=ls,t.registerProcessor=us,t.registerPostUpdate=function(t){rI.push(t)},t.registerAction=hs,t.registerCoordinateSystem=cs,t.getCoordinateSystemDimensions=function(t){var e=Ca.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},t.registerLayout=ds,t.registerVisual=fs,t.registerLoading=gs,t.extendComponentModel=ms,t.extendComponentView=vs,t.extendSeriesModel=ys,t.extendChartView=xs,t.setCanvasCreator=function(t){e("createCanvas",t)},t.registerMap=function(t,e,i){e.geoJson&&!e.features&&(i=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),gI[t]={geoJson:e,specialAreas:i}},t.getMap=_s,t.dataTool=vI,t.zrender=_w,t.graphic=sS,t.number=yS,t.format=MS,t.throttle=xr,t.helper=sD,t.matrix=e_,t.vector=Yx,t.color=y_,t.parseGeoJSON=uD,t.parseGeoJson=fD,t.util=pD,t.List=DI,t.Model=wo,t.Axis=dD,t.env=Ax});