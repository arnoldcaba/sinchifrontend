(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21aef5"],{be40:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-flex",[e("div",{staticStyle:{"padding-bottom":"5px"}},[e("v-textarea",{attrs:{filled:"",name:"input-7-4",label:"Necesidad",readonly:""},model:{value:t.descripcionnecesidad,callback:function(a){t.descripcionnecesidad=a},expression:"descripcionnecesidad"}})],1),e("div",{staticStyle:{"padding-bottom":"10px"}},["S"!=t.enviovobo?e("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.dialog=!0,t.edit=0,t.itemactual=""}}},[e("v-icon",{attrs:{dark:""}},[t._v("add")])],1):t._e()],1),e("v-card",[e("v-card-title",{staticClass:"justify-center"},[t._v("\n\t\t\t\t\tUNSPSC - NECESIDADES\n\t\t\t\t")]),e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),e("v-layout",{staticStyle:{"padding-top":"16px"},attrs:{column:""}},[e("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":5,"disable-sort":!0,search:t.search},scopedSlots:t._u([{key:"item.action",fn:function(a){var i=a.item;return["S"!=t.enviovobo?e("v-icon",{staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:t.loading,loading:t.loading&&t.itemactual===i},on:{click:function(a){t.dialog_del=!0,t.itemactual=i}}},[t._v("\n\t\t\t\t\t\t\t\tdelete\n\t\t\t\t\t\t\t")]):t._e()]}}])})],1)],1)],1),e("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:"",column:""}},[e("v-form",{ref:"form",model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-row",[e("v-col",{attrs:{cols:"5"}},[e("v-select",{attrs:{items:t.arrfiltro,"item-value":"value","item-text":"text","return-object":!1,label:"Tipo de Filtro"},model:{value:t.filtro,callback:function(a){t.filtro=a},expression:"filtro"}})],1),e("v-col",{attrs:{cols:"5"}},[e("v-text-field",{attrs:{label:"Dato"},model:{value:t.valfiltro,callback:function(a){t.valfiltro=a},expression:"valfiltro"}})],1),e("v-col",{attrs:{cols:"2"}},[e("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:t.traerDataXFiltro}},[e("v-icon",{attrs:{dark:""}},[t._v("search")])],1)],1)],1),e("v-row",[e("v-col",{attrs:{sm12:""}},[e("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.searchfiltro,callback:function(a){t.searchfiltro=a},expression:"searchfiltro"}}),e("br"),e("v-data-table",{attrs:{headers:t.headersbusqueda,items:t.dataBusq,"items-per-page":5,"disable-sort":!0,search:t.searchfiltro},scopedSlots:t._u([{key:"item.action",fn:function(a){var i=a.item;return[e("v-icon",{staticClass:"mr-5",attrs:{small:"",color:"primary"},on:{click:function(a){return t.seleccionarItem(i)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tsend\n\t\t\t\t\t\t\t\t\t\t\t\t")])]}}])}),e("br"),e("div",{staticStyle:{width:"100%","text-align":"center"}},[e("h3",[t._v("Seleccionados")])]),e("v-data-table",{attrs:{headers:t.headersseleccionados,items:t.dataseleccionados,"items-per-page":5,"disable-sort":!0},scopedSlots:t._u([{key:"item.action",fn:function(a){var i=a.item;return[e("v-icon",{staticClass:"mr-5",attrs:{small:"",color:"primary"},on:{click:function(a){return t.eliminarItem(i)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tdelete\n\t\t\t\t\t\t\t\t\t\t\t\t")])]}}])})],1)],1)],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:t.cerrarDialogo}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"primary",text:"",disabled:!t.valid},on:{click:t.saveitem}},[t._v("Guardar")])],1)],1)],1),e("v-dialog",{attrs:{"max-width":"300px"},model:{value:t.dialog_del,callback:function(a){t.dialog_del=a},expression:"dialog_del"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline red--text"},[t._v("Eliminar Unspsc")])]),e("v-card-text",[t._v("\t\t\t\t\t\n\t\t\t\t\t¿Esta seguro de eliminar la Información seleccionada?\t\t\t\t\t\n\t\t\t\t")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:t.closeDialogoDel}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"red",text:""},on:{click:t.deleteItem}},[t._v("Eliminar")])],1)],1)],1)],1)},s=[],o=e("c032"),r=e("ef00"),l={name:"Unspsc",props:["planadquisicion","necesidad","descripcionnecesidad","enviovobo"],data:function(){return{modulo:"UNSPSC NECESIDADES",loading:!1,dialog:!1,edit:-1,dialog_del:!1,processing:!1,formTitle:"",valid:!1,search:"",unspsctxt:"0",unspsctxtant:"0",unspsc:0,itemactual:"",data:[],arrUnspsc:[],headers:[{text:"Código",align:"left",sortable:!1,value:"unspsc"},{text:"Unspsc",align:"left",sortable:!1,value:"unspsctxt"},{text:"Accion",value:"action",sortable:!1}],filtro:"",valfiltro:"",searchfiltro:"",arrfiltro:[{text:"Código",value:"C"},{text:"Clase",value:"L"},{text:"Familia",value:"F"},{text:"Segmento",value:"S"},{text:"Unspsc",value:"U"}],headersbusqueda:[{text:"Código",align:"left",sortable:!1,value:"codigo"},{text:"Unspsc",align:"left",sortable:!1,value:"nombre"},{text:"Seleccionar",value:"action",sortable:!1}],dataBusq:[],headersseleccionados:[{text:"Código",align:"left",sortable:!1,value:"codigo"},{text:"Unspsc",align:"left",sortable:!1,value:"nombre"},{text:"Accion",align:"left",sortable:!1,value:"action"}],dataseleccionados:[],rules:{required:function(t){return!!t||"Campo requerido."}}}},filters:{},methods:{showMessage:function(t,a,e,i){this.$root.$emit("showSnack",{snack:t,time:a,color:e,text:i})},resetForm:function(){this.unspsctxt="",this.unspsctxtant="",this.unspsc=0,this.filtro="",this.valfiltro="",this.searchfiltro="",this.dataBusq=[],this.dataseleccionados=[]},cerrarDialogo:function(){this.resetForm(),this.dialog=!1,this.edit=-1},traerData:function(){var t=this;this.loading=!0,o["a"].getUnspscXNecesidad(this.planadquisicion,this.necesidad).then((function(a){a.request&&a.data?t.data=a.data.data:t.data=[],t.loading=!1})).catch((function(a){t.data=[],t.loading=!1}))},traerUnspsc:function(){var t=this;this.arrUnspsc=[],r["a"].getUnspsc().then((function(a){a.request&&a.data&&(t.arrUnspsc=a.data.data)})).catch((function(t){}))},traerDataXFiltro:function(){var t=this;if(this.dataBusq=[],""!=this.filtro&&""!=this.valfiltro){var a=[{tipo:this.filtro,valor:this.valfiltro}];r["a"].getDataXFiltro(a).then((function(a){a.request&&a.data&&(t.dataBusq=a.data.data)})).catch((function(t){}))}else this.showMessage(!0,4e3,"error","Debe ingresar los datos de la búsqueda")},closeDialogoDel:function(){this.dialog_del=!1},deleteItem:function(){var t=this;this.loading=!0,o["a"].delUnspsc(this.planadquisicion,this.necesidad,this.itemactual.unspsc).then((function(a){a.statusText?(t.showMessage(!0,3e3,"success","Se eliminó el Código UNSPSC con éxito"),t.del_item="",t.traerData(),t.closeDialogoDel(),t.agregaBitacora("ELIMINACION","SE ELIMINÓ EL CODIGO UNSPSC. CODIGO:"+t.itemactual.unspsc+", NOMBRE:"+t.itemactual.unspsctxt)):t.showMessage(!0,3e3,"error",a.message),t.del_item="",t.loading=!1})).catch((function(a){t.showMessage(!0,3e3,"error",a),t.loading=!1}))},saveitem:function(){if(this.dataseleccionados.length<=0)this.showMessage(!0,3e3,"error","No ha seleccionado ningún Código");else{for(var t="",a=0;a<this.dataseleccionados.length;a++){var e=this.dataseleccionados[a];t+=""!=t?", "+e.codigo:e.codigo}t="Códigos ("+t+")";var i=this;this.loading=!0;var s=this.dataseleccionados;o["a"].addupdUnspsc(s).then((function(a){if(a.response){var e=a.response.data.message;i.showMessage(!0,3e3,"error",e)}else if(a.statusText){var s="",o="";s="Agregaron",o="CREACION",i.showMessage(!0,3e3,"success","Se "+s+" los Códigos UNSPSC con éxito"),i.del_item="",i.edit=-1,i.traerData(),i.resetForm(),i.dialog=!1,i.agregaBitacora(o,t)}else i.showMessage(!0,3e3,"error",a.message);i.loading=!1})).catch((function(t){i.showMessage(!0,3e3,"error",t),i.loading=!1}))}},seleccionarItem:function(t){for(var a=0;a<this.dataseleccionados.length;a++){var e=this.dataseleccionados[a];if(t.codigo==e.codigo)return void this.showMessage(!0,4e3,"error","El Código Unspsc ya fué seleccionado")}for(var i=0;i<this.data.length;i++){var s=this.data[i];if(t.codigo==s.unspsc)return void this.showMessage(!0,4e3,"error","El Código Unspsc ya existe")}this.dataseleccionados.push({planadquisicion:this.planadquisicion,necesidad:this.necesidad,codigo:t.codigo,nombre:t.nombre})},eliminarItem:function(t){for(var a=0;a<this.dataseleccionados.length;a++){var e=this.dataseleccionados[a];if(t.codigo==e.codigo)return void this.dataseleccionados.splice(a,1)}},agregaBitacora:function(t,a){var e={modulo:this.modulo,accion:t,detalle:a};this.$root.$emit("agregaBitacora",e)}},watch:{edit:function(t){t?(this.formTitle="Editar",this.unspsc=this.itemactual.unspsc):(this.resetForm(),this.formTitle="Nuevo")},planadquisicion:function(t){0!=t&&this.traerData()},necesidad:function(t){0!=t&&this.traerData()}},mounted:function(){this.traerData(),this.traerUnspsc(),this.agregaBitacora("INGRESO","INGRESO AL MODULO")}},n=l,c=e("2877"),d=Object(c["a"])(n,i,s,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21aef5.f4046a14.js.map