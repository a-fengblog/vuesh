(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65ab6817"],{"4d59":function(t,i,n){},"6edd":function(t,i,n){"use strict";n("4d59")},e859:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{staticClass:"head"},[n("span",{on:{click:t.comeback}},[n("van-icon",{attrs:{name:"arrow-left"}}),t._v(" 返回")],1),t._v(" "),n("span",[t._v(" 乐居")])]),n("div",{staticClass:"banner",domProps:{innerHTML:t._s(t.imglist.content)}}),n("div",{staticClass:"list"},[n("div",{staticClass:"title"},[t._v("专题推荐")]),t._l(t.list,(function(i){return n("div",{key:i.id,staticClass:"item"},[n("img",{attrs:{src:i.scene_pic_url,alt:""}}),n("p",[t._v(t._s(i.title))])])}))],2)])},s=[],c=n("0c6d");function a(t){return Object(c["a"])({method:"get",url:"/topic/detailaction",params:t})}var o={data:function(){return{list:{},imglist:{}}},methods:{init:function(){var t=this;a({id:this.$route.query.id}).then((function(i){console.log(i),t.imglist=i.data,t.list=i.recommendList}))},comeback:function(){this.$router.go(-1)}},computed:{},created:function(){this.init()},mounted:function(){}},r=o,d=(n("6edd"),n("cba8")),l=Object(d["a"])(r,e,s,!1,null,"6f490990",null);i["default"]=l.exports}}]);
//# sourceMappingURL=chunk-65ab6817.e83ba02a.js.map