(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0742f18b"],{"082c":function(t,e,a){},"15ed":function(t,e,a){"use strict";var i=a("082c"),s=a.n(i);s.a},"2bae":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-flex",[a("div",{staticStyle:{"padding-bottom":"5px"}},[a("v-textarea",{attrs:{filled:"",name:"input-7-4",label:"Necesidad",readonly:""},model:{value:t.descripcionnecesidad,callback:function(e){t.descripcionnecesidad=e},expression:"descripcionnecesidad"}})],1),a("div",{staticStyle:{"padding-bottom":"10px"}},[a("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(e){t.dialog=!0,t.edit=0,t.itemactual=""}}},[a("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],1),a("v-card",[a("v-card-title",{staticClass:"justify-center"},[t._v("\n\t\t\t\t\tUNSPSC - NECESIDADES\n\t\t\t\t")]),a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-layout",{staticStyle:{"padding-top":"16px"},attrs:{column:""}},[a("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":5,"disable-sort":!0,search:t.search},scopedSlots:t._u([{key:"item.action",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:t.loading,loading:t.loading&&t.itemactual===i},on:{click:function(e){return t.deleteItem(i)}}},[t._v("\n\t\t\t\t\t\t\t\tdelete\n\t\t\t\t\t\t\t")])]}},{key:"item.tipomod",fn:function(e){var i=e.item;return[a("span",{class:[{ColorVBTrue:"N"===i.tipomod},{ColorVBFalse:"E"==i.tipomod},{ColorVBModifica:"M"==i.tipomod}]},[t._v("\n\t\t\t\t\t\t\t\t"+t._s("N"==i.tipomod?"NUEVO":"M"==i.tipomod?"MODIFICADO":"E"==i.tipomod?"ELIMINADO":"")+"\n\t\t\t\t\t\t\t")])]}}])})],1)],1)],1),a("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:"",column:""}},[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"5"}},[a("v-select",{attrs:{items:t.arrfiltro,"item-value":"value","item-text":"text","return-object":!1,label:"Tipo de Filtro"},model:{value:t.filtro,callback:function(e){t.filtro=e},expression:"filtro"}})],1),a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{label:"Dato"},model:{value:t.valfiltro,callback:function(e){t.valfiltro=e},expression:"valfiltro"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:t.traerDataXFiltro}},[a("v-icon",{attrs:{dark:""}},[t._v("search")])],1)],1)],1),a("v-row",[a("v-col",{attrs:{sm12:""}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.searchfiltro,callback:function(e){t.searchfiltro=e},expression:"searchfiltro"}}),a("br"),a("v-data-table",{attrs:{headers:t.headersbusqueda,items:t.dataBusq,"items-per-page":5,"disable-sort":!0,search:t.searchfiltro},scopedSlots:t._u([{key:"item.action",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-5",attrs:{small:"",color:"primary"},on:{click:function(e){return t.seleccionarItem(i)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tsend\n\t\t\t\t\t\t\t\t\t\t\t\t")])]}}])}),a("br"),a("div",{staticStyle:{width:"100%","text-align":"center"}},[a("h3",[t._v("Seleccionados")])]),a("v-data-table",{attrs:{headers:t.headersseleccionados,items:t.dataseleccionados,"items-per-page":5,"disable-sort":!0},scopedSlots:t._u([{key:"item.action",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-5",attrs:{small:"",color:"primary"},on:{click:function(e){return t.eliminarItem(i)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tdelete\n\t\t\t\t\t\t\t\t\t\t\t\t")])]}}])})],1)],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.cerrarDialogo}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"primary",text:"",disabled:!t.valid},on:{click:t.saveitem}},[t._v("Guardar")])],1)],1)],1)],1)},s=[],o=(a("c032"),a("ef00")),r={name:"Unspsc",props:["planadquisicion","necesidad","descripcionnecesidad","enviovobo"],data:function(){return{modulo:"UNSPSC NECESIDADES",loading:!1,dialog:!1,edit:-1,dialog_del:!1,processing:!1,formTitle:"",valid:!1,search:"",unspsctxt:"0",unspsctxtant:"0",unspsc:0,itemactual:"",data:[],arrUnspsc:[],headers:[{text:"Código",align:"left",sortable:!1,value:"unspsc"},{text:"Unspsc",align:"left",sortable:!1,value:"unspsctxt"},{text:"Accion",value:"action",sortable:!1},{text:"Tipo Mod.",value:"tipomod",sortable:!1}],filtro:"",valfiltro:"",searchfiltro:"",arrfiltro:[{text:"Código",value:"C"},{text:"Clase",value:"L"},{text:"Familia",value:"F"},{text:"Segmento",value:"S"},{text:"Unspsc",value:"U"}],headersbusqueda:[{text:"Código",align:"left",sortable:!1,value:"codigo"},{text:"Unspsc",align:"left",sortable:!1,value:"nombre"},{text:"Seleccionar",value:"action",sortable:!1}],dataBusq:[],headersseleccionados:[{text:"Código",align:"left",sortable:!1,value:"codigo"},{text:"Unspsc",align:"left",sortable:!1,value:"nombre"},{text:"Accion",align:"left",sortable:!1,value:"action"}],dataseleccionados:[],rules:{required:function(t){return!!t||"Campo requerido."}}}},filters:{},methods:{showMessage:function(t,e,a,i){this.$root.$emit("showSnack",{snack:t,time:e,color:a,text:i})},resetForm:function(){this.unspsctxt="",this.unspsctxtant="",this.unspsc=0,this.filtro="",this.valfiltro="",this.searchfiltro="",this.dataBusq=[],this.dataseleccionados=[]},cerrarDialogo:function(){this.resetForm(),this.dialog=!1,this.edit=-1},traerData:function(){var t=this,e=this.$store.getters.getArrPlanAdqNecUnspsc,a=e.filter((function(e){return e.necesidad==t.necesidad}));this.data=a},traerUnspsc:function(){var t=this;this.arrUnspsc=[],o["a"].getUnspsc().then((function(e){e.request&&e.data&&(t.arrUnspsc=e.data.data)})).catch((function(t){}))},traerDataXFiltro:function(){var t=this;if(this.dataBusq=[],""!=this.filtro&&""!=this.valfiltro){var e=[{tipo:this.filtro,valor:this.valfiltro}];o["a"].getDataXFiltro(e).then((function(e){e.request&&e.data&&(t.dataBusq=e.data.data)})).catch((function(t){}))}else this.showMessage(!0,4e3,"error","Debe ingresar los datos de la búsqueda")},closeDialogoDel:function(){this.dialog_del=!1},deleteItem:function(t){for(var e=0;e<this.$store.getters.getArrPlanAdqNecUnspsc.length;e++){var a=this.$store.getters.getArrPlanAdqNecUnspsc[e];if(a.unspsc==t.unspsc&&a.necesidad==this.necesidad){"N"==a.tipomod?this.$store.commit("DelArrPlanAdqNecUnspsc",e):"E"!=a.tipomod?(t.tipomod="E",this.$store.commit("ModArrPlanAdqNecUnspsc",t)):"E"==a.tipomod&&(t.tipomod="",this.$store.commit("ModArrPlanAdqNecUnspsc",t));break}}this.traerData()},saveitem:function(){if(this.dataseleccionados.length<=0)this.showMessage(!0,3e3,"error","No ha seleccionado ningún Código");else{for(var t=0;t<this.dataseleccionados.length;t++){var e=this.dataseleccionados[t];this.$store.commit("AddArrPlanAdqNecUnspsc",{planadquisicion:this.planadquisicion,necesidad:this.necesidad,unspsc:e.codigo,unspsctxt:e.nombre,tipomod:"N"})}this.traerData(),this.dialog=!1}},seleccionarItem:function(t){for(var e=0;e<this.dataseleccionados.length;e++){var a=this.dataseleccionados[e];if(t.codigo==a.codigo)return void this.showMessage(!0,4e3,"error","El Código Unspsc ya fué seleccionado")}for(var i=0;i<this.data.length;i++){var s=this.data[i];if(t.codigo==s.unspsc)return void this.showMessage(!0,4e3,"error","El Código Unspsc ya existe")}this.dataseleccionados.push({planadquisicion:this.planadquisicion,necesidad:this.necesidad,codigo:t.codigo,nombre:t.nombre})},eliminarItem:function(t){for(var e=0;e<this.dataseleccionados.length;e++){var a=this.dataseleccionados[e];if(t.codigo==a.codigo)return void this.dataseleccionados.splice(e,1)}},agregaBitacora:function(t,e){var a={modulo:this.modulo,accion:t,detalle:e};this.$root.$emit("agregaBitacora",a)}},watch:{edit:function(t){t?(this.formTitle="Editar",this.unspsc=this.itemactual.unspsc):(this.resetForm(),this.formTitle="Nuevo")},planadquisicion:function(t){0!=t&&this.traerData()},necesidad:function(t){0!=t&&this.traerData()}},mounted:function(){this.traerData(),this.traerUnspsc()}},n=r,c=(a("15ed"),a("2877")),l=Object(c["a"])(n,i,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-0742f18b.5739bb01.js.map