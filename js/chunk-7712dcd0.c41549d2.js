(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7712dcd0"],{bb5d5:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",[i("v-flex",[i("v-card",{attrs:{elevation:"3"}},[i("v-card-title",[t._v("Necesidad")]),i("v-card-text",[i("span",[i("b",[t._v("Descripción:  ")]),t._v(t._s(t.descripcionnecesidad))]),i("br"),i("span",[i("b",[t._v("Valor:  ")]),t._v(t._s(t.moneda+" "+t.number_format(t.valornecesidad,2)))])])],1),i("br"),i("div",{staticStyle:{"padding-bottom":"10px"}},["S"!=t.enviovobo?i("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.dialog=!0,t.edit=0,t.itemactual=""}}},[i("v-icon",{attrs:{dark:""}},[t._v("add")])],1):t._e()],1),i("v-card",[i("v-card-title",{staticClass:"justify-center"},[t._v("\n\t\t\t\t\tACTIVIDADES - NECESIDADES\n\t\t\t\t")]),i("v-card-text",[i("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),i("v-layout",{staticStyle:{"padding-top":"16px"},attrs:{column:""}},[i("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":5,"disable-sort":!0,search:t.search},scopedSlots:t._u([{key:"item.valor",fn:function(a){var e=a.item;return[i("span",[t._v(t._s(t._f("currency")(e.valor,{symbol:t.moneda,thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t")])]}},{key:"item.action",fn:function(a){var e=a.item;return["S"!=t.enviovobo?i("v-icon",{staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:t.loading},on:{click:function(a){t.dialog=!0,t.edit=1,t.itemactual=e}}},[t._v("\n\t\t\t\t\t\t\t\tedit\n\t\t\t\t\t\t\t")]):t._e(),"S"!=t.enviovobo?i("v-icon",{staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:t.loading,loading:t.loading&&t.itemactual===e},on:{click:function(a){t.dialog_del=!0,t.itemactual=e}}},[t._v("\n\t\t\t\t\t\t\t\tdelete\n\t\t\t\t\t\t\t")]):t._e()]}}])})],1)],1)],1),i("v-dialog",{attrs:{"max-width":"1200px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:"",column:""}},[i("v-form",{ref:"form",model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[i("v-flex",[i("v-autocomplete",{attrs:{items:t.arrActividades,"item-value":"secuencia","item-text":"descripcionfull","return-object":!0,label:"Actividad",rules:[t.rules.required],readonly:0!=t.edit},model:{value:t.secuenciaactividad,callback:function(a){t.secuenciaactividad=a},expression:"secuenciaactividad"}})],1),i("v-flex",[i("v-autocomplete",{attrs:{items:t.arrCatGasto,"item-value":"codigo","item-text":"nombre","return-object":!0,label:"Categoría del Gasto",rules:[t.rules.required]},on:{change:function(a){return t.agregaTope(t.categoriagasto)}},model:{value:t.categoriagasto,callback:function(a){t.categoriagasto=a},expression:"categoriagasto"}})],1),i("v-flex",[i("v-text-field",{attrs:{label:"Tope Categoría del Gasto",readonly:"",prefix:t.nommoneda,sufijo:t.nomsufijo},model:{value:t.topecategoriagasto,callback:function(a){t.topecategoriagasto=a},expression:"topecategoriagasto"}})],1),i("v-flex",[i("v-text-field",{attrs:{label:"Valor",prefix:t.moneda,rules:[t.rules.required]},on:{blur:function(a){return t.formatearValorActividad(t.valor)}},model:{value:t.valor,callback:function(a){t.valor=a},expression:"valor"}})],1)],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:t.cerrarDialogo}},[t._v("Cancelar")]),i("v-btn",{attrs:{color:"primary",text:"",disabled:!t.valid},on:{click:t.saveitem}},[t._v("Guardar")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"300px"},model:{value:t.dialog_del,callback:function(a){t.dialog_del=a},expression:"dialog_del"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline red--text"},[t._v("Eliminar Actividad")])]),i("v-card-text",[t._v("\t\t\t\t\t\n\t\t\t\t\t¿Esta seguro de eliminar la Actividad seleccionada?\t\t\t\t\t\n\t\t\t\t")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:t.closeDialogoDel}},[t._v("Cancelar")]),i("v-btn",{attrs:{color:"red",text:""},on:{click:t.deleteItem}},[t._v("Eliminar")])],1)],1)],1)],1)},o=[],r=i("a34a"),s=i.n(r),n=i("c032"),c=i("d761"),l=i("59e1");function d(t,a,i,e,o,r,s){try{var n=t[r](s),c=n.value}catch(l){return void i(l)}n.done?a(c):Promise.resolve(c).then(e,o)}function u(t){return function(){var a=this,i=arguments;return new Promise((function(e,o){var r=t.apply(a,i);function s(t){d(r,e,o,s,n,"next",t)}function n(t){d(r,e,o,s,n,"throw",t)}s(void 0)}))}}function h(t){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}var v={name:"Actividades",props:["planadquisicion","necesidad","descripcionnecesidad","moneda","valortotal","proyecto","convenio","valornecesidad","tasa","enviovobo"],data:function(){return{modulo:"ACTIVIDADES NECESIDADES",loading:!1,dialog:!1,edit:-1,dialog_del:!1,processing:!1,formTitle:"",valid:!1,search:"",secuenciaactividad:0,categoriagasto:0,topecategoriagasto:0,valor:0,tipotope:"",presupuesto:"",fuefinpgn:"",fuefinsgr:"",fuefincofinanciado:"",fuefinfuncionamiento:"",coordinador:"",nommoneda:"",nomsufijo:"",itemactual:"",data:[],arrActividades:[],arrCatGasto:[],headers:[{text:"Actividad",align:"left",sortable:!1,value:"actividadtxt"},{text:"Categoría del Gasto",align:"left",sortable:!1,value:"categoriagastotxt"},{text:"Valor",align:"left",sortable:!1,value:"valor"},{text:"Rubro Presupuestal",align:"left",sortable:!1,value:"rubro"},{text:"Accion",value:"action",sortable:!1}],rules:{required:function(t){return!!t||"Campo requerido."}}}},filters:{},methods:{showMessage:function(t,a,i,e){this.$root.$emit("showSnack",{snack:t,time:a,color:i,text:e})},resetForm:function(){this.secuenciaactividad=0,this.categoriagasto=0,this.topecategoriagasto=0,this.valor=0},cerrarDialogo:function(){this.resetForm(),this.dialog=!1,this.edit=-1},traerData:function(){var t=this;this.loading=!0,n["a"].getActividadXNecesidad(this.planadquisicion,this.necesidad).then((function(a){a.request&&a.data?t.data=a.data:t.data=[],t.loading=!1})).catch((function(a){t.data=[],t.loading=!1}))},traerActividades:function(){var t=this;this.arrActividades=[],c["a"].FiltroXProyectoAll(this.proyecto).then((function(a){t.arrActividades=a})).catch((function(t){}))},traerCategoriaGasto:function(){var t=this;this.arrCatGasto=[],l["a"].getCatGasXConvenio(this.convenio).then((function(a){a.request&&a.data&&(t.arrCatGasto=a.data.data)})).catch((function(t){}))},traerPresupuestoConvenio:function(){var t=this;this.fuefinpgn="",this.fuefinsgr="",this.fuefincofinanciado="",this.fuefinfuncionamiento="",this.coordinador="",l["a"].getDataXConvenio(this.convenio).then((function(a){a.request&&a.data&&(t.fuefinpgn=a.data.data[0].fuefinanciacionpgn,t.fuefinsgr=a.data.data[0].fuefinanciacionsgr,t.fuefincofinanciado=a.data.data[0].fuefinanciacioncof,t.fuefinfuncionamiento=a.data.data[0].fuefinanciacionfun,t.coordinador=a.data.data[0].coordinador,t.presupuesto=a.data.data[0].codigo)})).catch((function(t){}))},closeDialogoDel:function(){this.dialog_del=!1},deleteItem:function(){var t=this;this.loading=!0,n["a"].delActividad(this.planadquisicion,this.necesidad,this.itemactual.secuenciaactividad).then((function(a){a.statusText?(t.showMessage(!0,3e3,"success","Se eliminó la Actividad con éxito"),t.del_item="",t.traerData(),t.closeDialogoDel(),t.agregaBitacora("ELIMINACION","SE ELIMINÓ LA ACTIVIDAD. CODIGO:"+t.itemactual.secuenciaactividad+", DESCRIPCIÓN:"+t.itemactual.actividadtxt)):t.showMessage(!0,3e3,"error",a.message),t.del_item="",t.loading=!1})).catch((function(a){t.showMessage(!0,3e3,"error",a),t.loading=!1}))},validaGuardar:function(t){try{var a=0,i=0;if("object"==h(this.secuenciaactividad)?(a=this.secuenciaactividad.secuencia,this.secuenciaactividad.descripcionfull):(a=this.secuenciaactividad,this.itemactual.actividadtxt),"object"==h(this.categoriagasto)?(i=this.categoriagasto.codigo,this.categoriagasto.nombre):(i=this.categoriagasto,this.itemactual.categoriagastotxt),this.edit){if(a==this.itemactual.secuenciaactividad&&i==this.itemactual.categoriagasto&&parseFloat(this.limpiarMoneda(this.valor))==parseFloat(this.itemactual.valor))return"No hay datos para actualizar"}else for(var e=0;e<this.data.length;e++){var o=this.data[e],r=e+1;if(a==o.secuenciaactividad)return"La Actividad ya ha salido seleccionada en el item No. '"+r+"'"}if(""==this.valor||"0"==this.valor||void 0==this.valor)return"Debe ingresar el Valor de la Actividad";var s=parseFloat(this.limpiarMoneda(this.topecategoriagasto)),n=parseFloat(this.limpiarMoneda(this.valor));if(s>0)if("M"==this.tipotope){if(n>s)return"El Valor de la Actividad no puede superar el valor del Tope"}else if("P"==this.tipotope){var c=parseFloat(this.valortotal)*parseFloat(s)/100;if(n>parseFloat(c))return"El Valor de la Actividad no puede superar el valor del Tope"}var l=parseFloat(this.limpiarMoneda(this.valor)),d=parseFloat(this.limpiarMoneda(this.valortotal)),u=0;0==this.edit&&(u+=l);for(var v=0;v<this.data.length;v++){var g=this.data[v];a==g.secuenciaactividad?u+=l:u+=parseFloat(this.limpiarMoneda(g.valor))}if(u>parseFloat(this.valornecesidad))return"El Valor total de las Actividades supera el valor de la Necesidad";if(u>d)return"El Valor total de las Actividades supera el valor Total del Acuerdo Específico";var p=0,f=parseFloat(this.limpiarMoneda(this.topecategoriagasto));0==this.edit&&(p+=l);for(var m=0;m<t.data.length;m++){var b=t.data[m];a==b.secuenciaactividad?p+=l:p+=parseFloat(this.limpiarMoneda(b.valor))}return p>f?"El Valor total de las Actividades para la Categoría del Gasto seleccionada supera el tope de la misma":""}catch(x){return x}},saveitem:function(){var t=u(s.a.mark((function t(){var a,i,e,o,r,c,l,d,u,v,g,p,f,m,b;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=0,i="","",e=0,o="","object"==h(this.secuenciaactividad)?(a=this.secuenciaactividad.secuencia,this.secuenciaactividad.descripcionfull,i=this.secuenciaactividad.codigofull):(a=this.secuenciaactividad,this.itemactual.actividadtxt,i=this.itemactual.codigofull),"object"==h(this.categoriagasto)?(e=this.categoriagasto.codigo,o=this.categoriagasto.nombre):(e=this.categoriagasto,o=this.itemactual.categoriagastotxt),t.next=9,n["a"].getActividadXPlanCategoria(this.planadquisicion,e);case 9:if(r=t.sent,c=this.validaGuardar(r),l="",""==c){t.next=15;break}return this.showMessage(!0,3e3,"error",c),t.abrupt("return");case 15:d="",u="","1"==this.fuefinpgn||1==this.fuefinpgn?u="91":"1"==this.fuefinsgr||1==this.fuefinsgr?u="50":"1"==this.fuefincofinanciado||1==this.fuefincofinanciado?u="80":"1"!=this.fuefinfuncionamiento&&1!=this.fuefinfuncionamiento||(u="30"),v="000"+this.proyecto.toString(),g="00"+e.toString(),p="00"+this.coordinador.toString(),v=v.substring(v.length-3,v.length),g=g.substring(g.length-2,g.length),p=p.substring(p.length-2,p.length),d=u.toString()+v.toString()+i.toString()+p.toString()+g.toString(),this.edit?(this.itemactual.categoriagasto!=e&&(l+="Categoría del Gasto: "+this.itemactual.categoriagastotxt.toUpperCase()+" a "+o.toUpperCase()),this.itemactual.valor!=this.valor&&(l+=""==l?"Categoría del Gasto: "+this.itemactual.categoriagastotxt.toUpperCase()+" a "+o.toUpperCase():", Categoría del Gasto: "+this.itemactual.categoriagastotxt.toUpperCase()+" a "+o.toUpperCase()),l="CODIGO: "+this.codigo+" ("+l+")"):l+="ACTIVIDAD: "+o.toUpperCase(),f=this,this.loading=!0,m=0,m=this.limpiarMoneda(this.topecategoriagasto),"$"==this.moneda.trim()&&parseFloat(this.tasa)>0&&(m=parseFloat(m)/parseFloat(this.tasa)),b={planadquisicion:this.planadquisicion,necesidad:this.necesidad,secuenciaactividad:a,categoriagasto:e,topecategoriagasto:m,presupuesto:this.presupuesto,valor:this.limpiarMoneda(this.valor),rubro:d},n["a"].addupdActividad(b).then((function(t){if(t.response){var a=t.response.data.message;f.showMessage(!0,3e3,"error",a)}else if(t.statusText){var i="",e="";f.edit?(i="Actualizó",e="ACTUALIZACION"):(i="Agregó",e="CREACION"),f.showMessage(!0,3e3,"success","Se "+i+" la Actividad con éxito"),f.del_item="",f.edit=-1,f.traerData(),f.resetForm(),f.dialog=!1,f.agregaBitacora(e,l)}else f.showMessage(!0,3e3,"error",t.message);f.loading=!1})).catch((function(t){f.showMessage(!0,3e3,"error",t),f.loading=!1}));case 33:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),agregaTope:function(t){this.tipotope=t.tipotope,"M"==this.tipotope&&("$"==this.moneda.trim()&&parseFloat(this.tasa)>0?this.topecategoriagasto=this.formatearValor(t.topemaximo*this.tasa,0):this.topecategoriagasto=this.formatearValor(t.topemaximo,0)),this.nommoneda="",this.nomsufijo="","M"==this.tipotope?this.nommoneda=this.moneda:"P"==this.tipotope&&(this.nomsufijo="%")},number_format:function(t,a){if(t+="",t=parseFloat(t.replace(/[^0-9\.]/g,"")),a=a||0,isNaN(t)||0===t)return parseFloat(0).toFixed(a);t=""+t.toFixed(a);var i=t.split("."),e=/(\d+)(\d{3})/;while(e.test(i[0]))i[0]=i[0].replace(e,"$1.$2");return i.join(",")},limpiarMoneda:function(t){var a=t.toString().replace(",00","").replace(/[$.]/gi,"");return a=a.replace(/[,]/gi,"."),a},formatearValor:function(t){var a=t;return a=this.limpiarMoneda(a),a=this.number_format(a,2),a},formatearValorActividad:function(t){this.valor=this.formatearValor(t)},agregaBitacora:function(t,a){var i={modulo:this.modulo,accion:t,detalle:a};this.$root.$emit("agregaBitacora",i)}},watch:{arrCatGasto:function(t){},edit:function(t){if(t){this.formTitle="Editar",this.secuenciaactividad=this.itemactual.secuenciaactividad,this.categoriagasto=this.itemactual.categoriagasto,this.valor=void 0!=this.itemactual.valor?this.formatearValor(this.itemactual.valor):0;for(var a=0;a<this.arrCatGasto.length;a++){var i=this.arrCatGasto[a];if(i.codigo==this.itemactual.categoriagasto){this.tipotope=i.tipotope,this.topecategoriagasto=void 0!=i.topemaximo?i.topemaximo:0,"M"==this.tipotope&&("$"==this.moneda.trim()&&parseFloat(this.tasa)>0?this.topecategoriagasto=this.formatearValor(this.topecategoriagasto*this.tasa):this.topecategoriagasto=this.formatearValor(this.topecategoriagasto));break}}this.nommoneda="",this.nomsufijo="","M"==this.tipotope?this.nommoneda=this.moneda:"P"==this.tipotope&&(this.nomsufijo="%")}else this.resetForm(),this.formTitle="Nuevo"},planadquisicion:function(t){0!=t&&(this.traerData(),this.traerActividades(),this.traerCategoriaGasto(),this.traerPresupuestoConvenio())},necesidad:function(t){0!=t&&(this.traerData(),this.traerActividades(),this.traerCategoriaGasto(),this.traerPresupuestoConvenio())}},mounted:function(){this.traerData(),this.traerActividades(),this.traerCategoriaGasto(),this.traerPresupuestoConvenio(),this.agregaBitacora("INGRESO","INGRESO AL MODULO")}},g=v,p=i("2877"),f=Object(p["a"])(g,e,o,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-7712dcd0.c41549d2.js.map