(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225a13"],{e4e3:function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",[a("h1",{on:{click:function(o){return t.armaDataChart()}}},[t._v("Total Proyecto: "+t._s(t.formatearPorcentaje(t.totproyecto))+" %")]),a("v-treeview",{attrs:{items:t.items,activatable:"",rounded:!0,"open-on-click":"","item-key":"id"},scopedSlots:t._u([{key:"label",fn:function(o){var e=o.item;return[a("a",{on:{click:function(o){return t.drawChart(e)}}},[t._v(t._s(e.name))])]}}]),model:{value:t.seltrv,callback:function(o){t.seltrv=o},expression:"seltrv"}})],1),a("v-col",[a("chart",{directives:[{name:"show",rawName:"v-show",value:t.charvisible,expression:"charvisible"}],attrs:{data:t.dataChart,titulo:t.titulo},on:{"update:data":function(o){t.dataChart=o},"update:titulo":function(o){t.titulo=o}}})],1)],1)],1)},r=[],i=a("3bb9"),s={name:"EstadoProy",components:{chart:function(){return a.e("chunk-39c523ec").then(a.bind(null,"ca66"))}},props:["proyecto"],data:function(){return{loading:!1,items:[],objetivos:[],productos:[],actividades:[],totproyecto:0,dataChart:{labels:[],series:[]},seltrv:[],titulo:"",charvisible:1}},methods:{traeData:function(){var t=this;this.objetivos=[],this.productos=[],this.actividades=[],i["a"].EstadoActual(this.proyecto).then((function(o){if(o.request&&o.data){t.objetivos=o.data.objetivos,t.productos=o.data.productos,t.actividades=o.data.actividades;var a=t.objetivos.reduce((function(t,o){return t+o["total"]}),0);t.totproyecto=a,t.consolidar(),t.armaDataChart()}})).catch((function(t){}))},consolidar:function(){this.items=[];for(var t=[],o=0;o<this.objetivos.length;o++){for(var a=this.objetivos[o],e=a["objetivo"],r=e+"."+a["txtobjetivo"]+" : Peso: "+a["pesoobj"]+" %  TOTAL:"+this.formatearPorcentaje(a["total"])+" %",i=[],s=[],c=[],d=0;d<this.productos.length;d++){var n=this.productos[d];if(n["proyobjcod"]==e){i.push({id:e+"."+n["producto"],name:e+"."+n["producto"]+"."+n["txtproducto"]+" : Peso: "+n["pesoprod"]+" % :  TOTAL: "+this.formatearPorcentaje(n["total"])+" %"}),s=[];for(var h=0;h<this.actividades.length;h++){var u=this.actividades[h];n["proyobjcod"]==u["proyobjcod"]&&n["producto"]==u["prodcod"]&&s.push({id:e+"."+n["producto"]+"."+u["actividad"],name:e+"."+n["producto"]+"."+u["codigo"]+"."+u["txtactividad"]+" : Peso: "+u["pesoact"]+" % :   TOTAL: "+this.formatearPorcentaje(u["total"])+" %"})}s.length>0?c.push({id:e+"."+n["producto"],name:e+"."+n["producto"]+"."+n["txtproducto"]+" : Peso: "+n["pesoprod"]+" % :   TOTAL: "+this.formatearPorcentaje(n["total"])+" %",children:s}):c.push({id:e+"."+n["producto"],name:e+"."+n["producto"]+"."+n["txtproducto"]+" : Peso: "+n["pesoprod"]+" % :   TOTAL: "+this.formatearPorcentaje(n["total"])+" %"})}}i.length>0?t.push({id:e,name:r,children:c}):t.push({id:e,name:r})}this.items=t},armaDataChart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=[],e=[],r=[],i=[],s="";if(0==t?(s="objetivo",i=this.objetivos):1==t?(s="producto",i=this.productos):2==t&&(s="actividad",i=this.actividades),0!=o)for(var c=0;c<i.length;c++){var d=i[c];if(1==t)d.proyobjcod==o&&r.push(d);else if(2==t){var n=o.split(".");d.proyobjcod==n[0]&&d.prodcod==n[1]&&r.push(d)}}else r=i;if(r.length>0){for(var h=0;h<r.length;h++){var u=r[h],l="";"objetivo"==s?(l=u[s],this.titulo="OBJETIVOS"):"producto"==s?(l=u["proyobjcod"]+"."+u["producto"]+".",this.titulo="PRODUCTOS"):"actividad"==s&&(l=u["proyobjcod"]+"."+u["prodcod"]+"."+u["codigo"]+".",this.titulo="ACTIVIDADES");var p=l,v=u["total"];e.push(p),a.push(v)}this.dataChart.labels=e,this.dataChart.series[0]=a}else this.dataChart.labels=[],this.dataChart.series[0]=[]},drawChart:function(t){for(var o=t.id,a=0,e=0,r=0;r<o.length;r++)"."==o[r]&&a++;e=0==a?0:o,void 0==t.children?(this.dataChart.labels=[],this.dataChart.series[0]=[],this.charvisible=0):(this.charvisible=1,this.armaDataChart(a+1,e))},formatearPorcentaje:function(t){var o=parseFloat(t).toFixed(2),a=o.toString().replace(".",",");return a}},watch:{proyecto:function(t){0!=t&&this.traeData()}},mounted:function(){this.traeData()}},c=s,d=a("2877"),n=Object(d["a"])(c,e,r,!1,null,null,null);o["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d225a13.9d4efd3c.js.map