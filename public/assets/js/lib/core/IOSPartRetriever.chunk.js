/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[10],{346:function(Ea,va,y){y.r(va);var pa=y(2),ka=y(203);Ea=y(338);y(30);y=y(297);var ja=function(fa){function da(z,r){var w=fa.call(this,z,r)||this;w.url=z;w.range=r;w.status=ka.a.NOT_STARTED;return w}Object(pa.c)(da,fa);da.prototype.start=function(){var z=document.createElement("IFRAME");z.setAttribute("src",this.url);document.documentElement.appendChild(z);z.parentNode.removeChild(z);this.status=ka.a.STARTED;this.Nx()};return da}(Ea.ByteRangeRequest);
Ea=function(fa){function da(z,r,w,n){z=fa.call(this,z,r,w,n)||this;z.Mt=ja;return z}Object(pa.c)(da,fa);da.prototype.Nr=function(z,r){return z+"#"+r.start+"&"+(r.stop?r.stop:"")};return da}(Ea["default"]);Object(y.a)(Ea);Object(y.b)(Ea);va["default"]=Ea}}]);}).call(this || window)
