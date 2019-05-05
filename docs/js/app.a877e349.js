(function(e){function t(t){for(var r,s,l=t[0],o=t[1],c=t[2],d=0,h=[];d<l.length;d++)s=l[d],a[s]&&h.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"34b0":function(e,t,n){},"4b39":function(e,t,n){"use strict";var r=n("8ace"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=(n("4989"),n("c964")),i=n("ee8c"),s=n.n(i),l=n("4dd1"),o=n.n(l),c=n("8ed1"),u=n.n(c),d=n("9c4e"),h=n.n(d),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{role:"main",id:"app"}},[n("Ribbon",e._b({},"Ribbon",e.ribbonOptions,!1)),n("Intro"),n("TextA"),n("Gallery",{attrs:{count:3,hue_range:[200,250],lightness_range:[60,80],metric:"Manhattan"}}),n("TextB"),n("Gallery",{attrs:{count:3,hue_range:[100,150],lightness_range:[60,80],metric:"Euclidean"}}),n("TextC"),n("Gallery",{attrs:{count:3,hue_range:[0,359],lightness_range:[60,80],metric:"Minkovski"}}),n("Play")],1)},m=[],p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"jumbotron text-center"},[n("div",{staticClass:"container hc"},[n("h1",{staticClass:"jumbotron-heading"},[e._v("Vue pattern placeholder")]),n("p",{staticClass:"lead"},[e._v("If you need a beautiful placeholder for your Vue project, you're in the right place!")])])])}],g={name:"Intro"},f=g,b=(n("4b39"),n("2877")),y=Object(b["a"])(f,p,v,!1,null,"30d5bbae",null),w=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"album py-1 bg-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-middle text-center justify-content-center"},e._l(e.count,function(t){return n("div",{staticClass:"col-md-3",attrs:{color:t}},[n("div",{staticClass:"card mb-3 justify-content-center align-items-center"},[n("patternPlaceholder",{staticClass:"ph",attrs:{width:200,height:200,input:""+t,hue_range:e.hue_range,lightness_range:e.lightness_range,metric:e.metric}})],1)])}),0)])])},C=[],k=(n("c5f6"),n("14ec")),E={name:"Gallery",components:{patternPlaceholder:k["a"]},props:{count:Number,metric:{type:String,default:"Manhattan"},hue_range:{type:Array,default:function(){return[0,359]}},lightness_range:{type:Array,default:function(){return[0,100]}}}},j=E,$=(n("598c"),Object(b["a"])(j,x,C,!1,null,"5aefb21b",null)),P=$.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-light"},[n("div",{staticClass:"container"},[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),n("div",{staticClass:"row code-bg py-1"},[n("highlight-code",{attrs:{lang:"vue"}},[e._v(e._s(e.code_a))])],1),e._m(6)])])},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("p",[e._v("\n            This page provides a demo for\n            "),n("a",{attrs:{href:"https://www.npmjs.com/package/vue-pattern-placeholder"}},[e._v("vue-pattern-paceholder")]),e._v("\n            component.\n          ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("p",[e._v("This component makes a pattern from little cells and you can configure color range and cell geometry.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("p",[e._v("For now, there are three pattern types to use:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-1"},[n("ul",[n("li",[n("code",[e._v("Manhattan")]),e._v(" - straight and 45° cell edges")]),n("li",[n("code",[e._v("Euclidean")]),e._v(" - free degree cell edges")]),n("li",[n("code",[e._v("Minkovski")]),e._v(" - rounded cell edges")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-1"},[n("p",[e._v("\n          The pattern itself is called Voronoi diagram and to know more,\n          I recommend you to look at "),n("a",{attrs:{href:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Voronoi_growth_euclidean.gif"}},[e._v("this animation")]),e._v(" and read "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Voronoi_diagram"}},[e._v("Wikipedia article")]),e._v("\n          about it.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-1"},[n("p",[e._v("\n          Let's start! For now, I'm setting cell geometry using a "),n("code",[e._v("metric")]),e._v(" option.\n          I selected "),n("code",[e._v("Manhattan")]),e._v(" metric and set a blue color range.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-1"},[n("br")])}],T={name:"TextA",data:function(){return{code_a:'\n      <patternPlaceholder\n        :width="200" :height="200" input="ABC"\n        :hue_range="[200, 250]" :lightness_range="[60, 80]"\n      />'}}},S=T,A=Object(b["a"])(S,O,M,!1,null,null,null),I=A.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-light"},[n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"row code-bg py-1"},[n("highlight-code",{attrs:{lang:"vue"}},[e._v(e._s(e.code))])],1),e._m(1)])])},G=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-1"},[n("p",[e._v("\n          Now, why don't we try some other metrics?\n          I'll change the color range a bit, too.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-1"},[n("br")])}],N={name:"TextB",data:function(){return{code:'\n      <patternPlaceholder\n        :width="200" :height="200" input="ABC"\n        :hue_range="[100, 150]" :lightness_range="[60, 80]"\n        metric="Euclidean"\n      />'}}},V=N,F=Object(b["a"])(V,B,G,!1,null,null,null),H=F.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-light"},[n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"row code-bg py-1"},[n("highlight-code",{attrs:{lang:"vue"}},[e._v(e._s(e.code))])],1),e._m(1)])])},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-1"},[n("p",[e._v("\n          How about more colors? Let's try Minkovski metric, too.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-1"},[n("br")])}],J={name:"TextA",components:{patternPlaceholder:k["a"]},data:function(){return{code:'\n      <patternPlaceholder\n        :width="200" :height="200" input="ABC"\n        :hue_range="[0, 359]" :lightness_range="[60, 80]"\n        metric="Minkovski"\n      />'}}},R=J,W=Object(b["a"])(R,L,U,!1,null,null,null),q=W.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-light py-1 bg-light"},[n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"row code-bg py-1"},[n("highlight-code",{attrs:{lang:"vue"}},[e._v(e._s(e.code))])],1),n("div",{staticClass:"row py-1"}),n("div",{staticClass:"row py-1 align-middle text-center justify-content-center"},[n("patternPlaceholder",{staticClass:"ph",attrs:{width:200,height:200,input:"test",hue_range:e.hue_range,lightness_range:e.lightness_range,metric:e.metric}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"}),n("div",{staticClass:"col-md-6 align-middle text-center justify-content-center"},[n("br"),n("span",[e._v("Metric: ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.metric,expression:"metric"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.metric=t.target.multiple?n:n[0]}}},e._l(e.metrics,function(t){return n("option",{key:t},[e._v(e._s(t))])}),0),n("br"),n("br"),n("span",[e._v("Hue (start and end):")]),n("br"),n("br"),n("Slider",{staticStyle:{display:"inline-block"},on:{input:e.slider_a_update},model:{value:e.scol_min,callback:function(t){e.scol_min=t},expression:"scol_min"}}),n("br"),n("br"),n("Slider",{staticStyle:{display:"inline-block"},on:{input:e.slider_b_update},model:{value:e.scol_max,callback:function(t){e.scol_max=t},expression:"scol_max"}}),n("br"),n("br"),n("span",[e._v("Lightness range:")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.min_lightness,expression:"min_lightness",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.min_lightness},on:{input:function(t){t.target.composing||(e.min_lightness=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.max_lightness,expression:"max_lightness",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.max_lightness},on:{input:function(t){t.target.composing||(e.max_lightness=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("br")],1),n("div",{staticClass:"col-md-3"})])])])},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-1"},[n("p",[e._v("It's your turn now.")])])}],K=n("c345"),Q={name:"Play",components:{Slider:K["Slider"],patternPlaceholder:k["a"]},methods:{slider_a_update:function(e){this.min_hue=Math.floor(e.hsv.h)},slider_b_update:function(e){this.max_hue=Math.floor(e.hsv.h)}},data:function(){return{scol_min:{h:150,s:.66,v:.3},scol_max:{h:150,s:.66,v:.3},min_hue:0,max_hue:0,min_lightness:60,max_lightness:80,metric:"Euclidean",metrics:["Euclidean","Manhattan","Minkovski"]}},computed:{hue_range:function(){return[this.min_hue,this.max_hue]},lightness_range:function(){return[this.min_lightness,this.max_lightness]},code:function(){return'\n      <patternPlaceholder\n        :width="200" :height="200" input="ABC"\n        :hue_range="['.concat(this.min_hue,", ").concat(this.max_hue,']"\n        :lightness_range="[').concat(this.min_lightness,", ").concat(this.max_lightness,']"\n      />\n      ')}}},X=Q,Y=Object(b["a"])(X,z,D,!1,null,null,null),Z=Y.exports,ee={name:"app",components:{Intro:w,Gallery:P,TextA:I,TextB:H,TextC:q,Play:Z},data:function(){return{ribbonOptions:{text:"Fork me on GitHub",linkUrl:"https://github.com/6r1d/pattern-placeholder",fixed:!1}}}},te=ee,ne=(n("5c0b"),Object(b["a"])(te,_,m,!1,null,null,null)),re=ne.exports;r["a"].use(h.a),r["a"].use(a["a"],{languages:{css:s.a,javascript:o.a,vue:u.a}}),r["a"].config.productionTip=!1,r["a"].use(a["a"]),new r["a"]({render:function(e){return e(re)}}).$mount("#app")},"598c":function(e,t,n){"use strict";var r=n("34b0"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"8ace":function(e,t,n){}});
//# sourceMappingURL=app.a877e349.js.map