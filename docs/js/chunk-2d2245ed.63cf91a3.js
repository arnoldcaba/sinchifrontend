(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2245ed"],{e09e:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"adjuntos"}},[n("v-flex",[e.item.file_path?e._e():n("v-file-input",{staticStyle:{"font-size":".8rem"},attrs:{"prepend-icon":"","prepend-inner-icon":"$file",placeholder:e.placeholder,"small-chips":"",dense:"","hide-details":"",color:"primary",accept:e.tipoarchivo},on:{change:function(t){e.handleFileUpload(t)}}}),e.item.file_path?n("v-chip",{staticClass:"ma-2",staticStyle:{margin:"5px"},attrs:{color:"primary","text-color":"white"},on:{click:function(t){return e.openInNewTab(e.item.file_path)},"click:close":function(t){e.item.file_path=""}}},[e._v(e._s(e.item.file_name.substring(0,50))+"\n    ")]):e._e()],1)],1)},a=[],r=n("a34a"),o=n.n(r),c=n("831b");function l(e,t,n,i,a,r,o){try{var c=e[r](o),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(i,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function o(e){l(r,i,a,o,c,"next",e)}function c(e){l(r,i,a,o,c,"throw",e)}o(void 0)}))}}var p={props:["item","placeholder","tipoarchivo"],data:function(){return{}},mounted:function(){var e=s(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),methods:{handleFileUpload:function(){var e=s(o.a.mark((function e(t){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t),null===t){e.next=10;break}return e.next=4,c["a"].uploadGen(t);case 4:n=e.sent,this.item.file_name=t.name,this.item.file_path=n.data.url,this.item.file_name_tmp=n.data.filenametmp,e.next=13;break;case 10:this.item.file_name="",this.item.file_path="",this.item.file_name_tmp="";case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),openInNewTab:function(e){var t=window.open(e,"_blank");t.focus()}},computed:{},watch:{}},u=p,f=n("2877"),h=Object(f["a"])(u,i,a,!1,null,"1e83137b",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d2245ed.63cf91a3.js.map