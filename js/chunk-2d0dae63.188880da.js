(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dae63"],{"6e20":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{attrs:{fluid:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.readonly,expression:"!readonly"}],staticStyle:{"padding-bottom":"8px"}},[t("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){e.dialogAdd=!0,e.itemactual=""}}},[t("v-icon",{attrs:{dark:""}},[e._v("add")])],1)],1),t("v-card",{attrs:{flat:"",tile:"","min-height":"500"}},[t("v-card-text",[t("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}}),t("br"),t("v-data-table",{attrs:{items:e.data,"items-per-page":5,"group-by":"nombredepto","show-group-by":"",search:e.search},scopedSlots:e._u([{key:"group",fn:function(a){return[t("span",{staticClass:"font-weight-bold"},[e._v(e._s(a.group))]),t("v-data-table",{attrs:{headers:e.headersdata,items:a.items,"item-key":"nombredepto","hide-default-footer":"",search:e.search},scopedSlots:e._u([{key:"body",fn:function(a){var o=a.items;return[t("tbody",e._l(o,(function(a){return t("tr",{key:a.nomciudad},[t("td",{staticStyle:{width:"90%"}},[e._v(e._s(a.nomciudad))]),t("td",{staticStyle:{width:"10%"}},[t("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.readonly&&0!=a.codigoreal,expression:"!readonly && item.codigoreal != 0"}],staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:e.loading,loading:e.loading},on:{click:function(t){e.dialog_del=!0,e.itemactual=a}}},[e._v("\n                                            delete\n                                        ")])],1)])})),0)]}}],null,!0)})]}}])})],1)],1),t("v-dialog",{attrs:{width:"550"},model:{value:e.dialog_del,callback:function(a){e.dialog_del=a},expression:"dialog_del"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"headline red--text"},[e._v("Eliminar Ciudad")])]),t("v-card-text",[e._v("\t\t\t\t\t\n                ¿Esta seguro de eliminar la Ciudad seleccionada?.\t\t\t\t\t\n            ")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:function(a){e.dialog_del=!1}}},[e._v("Cancelar")]),t("v-btn",{attrs:{color:"red",text:""},on:{click:e.deleteItem}},[e._v("Eliminar")])],1)],1)],1),t("v-dialog",{attrs:{"max-width":"800",persistent:""},model:{value:e.dialogAdd,callback:function(a){e.dialogAdd=a},expression:"dialogAdd"}},[t("v-card",[t("v-card-text",[t("v-row",{attrs:{dense:""}},[t("v-col",{attrs:{sm12:""}},[t("v-card",{attrs:{height:"100"}},[t("v-card-text",[t("v-select",{attrs:{items:e.arrDepartamentos,"item-value":"codigo","item-text":"descripcion",label:"Departamento","return-object":""},on:{change:function(a){return e.traeCiudades(e.departamento.codigo)}},model:{value:e.departamento,callback:function(a){e.departamento=a},expression:"departamento"}})],1)],1)],1)],1),t("v-row",[t("v-col",{attrs:{sm12:""}},[t("v-card",{attrs:{flat:"",tile:"","min-height":"300"}},[t("v-card-text",[t("v-checkbox",{attrs:{readonly:e.readonly,color:"primary",label:"Seleccionar Todas las Ciudades"},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}}),t("v-data-table",{attrs:{headers:e.headersciudad,items:e.arrCiudades,"items-per-page":5},scopedSlots:e._u([{key:"item.seleccionar",fn:function(a){var o=a.item;return[t("v-checkbox",{attrs:{readonly:e.readonly,color:"primary"},model:{value:o.seleccionar,callback:function(a){e.$set(o,"seleccionar",a)},expression:"item.seleccionar"}})]}}])})],1)],1)],1)],1)],1),t("v-card-actions",[t("div",{staticStyle:{width:"100%","text-align":"right"}},[t("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:e.saveitem}},[e._v("Actualizar")]),t("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:function(a){e.dialogAdd=!1}}},[e._v("Cancelar")])],1)])],1)],1)],1)},r=[],i=t("68e7"),n=(t("0ab3"),t("bc3a")),c=t.n(n),d=t("d89f"),s={getData:function(){return new Promise((function(e,a){c()({method:"POST",url:d["a"].apiUrl+"/Departamentos",dataType:"json"}).then((function(a){e(a)})).catch((function(a){e(a)}))}))},guardarData:function(e){return new Promise((function(a,t){c()({method:"POST",url:d["a"].apiUrl+"/guardarDepartamento",dataType:"json",data:{data:e}}).then((function(e){a(e)})).catch((function(e){a(e)}))}))},DelData:function(e){return new Promise((function(a,t){c()({method:"POST",url:d["a"].apiUrl+"/delDepartamento",dataType:"json",data:{id:e}}).then((function(e){a(e)})).catch((function(e){a(e)}))}))}},l=s,u={name:"Ciudades",props:["proyecto","readonly","convenioproyecto","nombreproyecto","codigocoordinador"],data:function(){return{loading:!1,dialog_del:!1,dialogAdd:!1,itemactual:"",departamento:"",search:"",data:[],headersdata:[{text:"Ciudad",value:"nombreciudad",sortable:!1,align:"left",class:"subtitle-1 font-weight-bold black--text"},{text:"Acción",value:"action",sortable:!1,align:"left",class:"subtitle-1 font-weight-bold black--text"}],arrDepartamentos:[],arrCiudades:[],headersciudad:[{text:"Ciudad",value:"descripcion",sortable:!1,align:"left",class:"subtitle-1 font-weight-bold black--text"},{text:"Sel.",value:"seleccionar",sortable:!1,align:"left",class:"subtitle-1 font-weight-bold black--text"}],selected:0}},methods:{showMessage:function(e,a,t,o){this.$root.$emit("showSnack",{snack:e,time:a,color:t,text:o})},envioNotificaciones:function(e,a,t){this.$emit("envioNotificaciones",{mensajenotificacion:e,asuntocorreo:a,mensajecorreo:t})},traerdata:function(e){var a=this;this.loading=!0,i["a"].BuscarXProyecto(e).then((function(e){e.request&&e.data?a.data=e.data.data:a.data=[],a.loading=!1})).catch((function(e){a.data=[],a.loading=!1}))},traerDepartamentos:function(){var e=this;l.getData().then((function(a){a.request&&a.data?e.arrDepartamentos=a.data.data:e.arrDepartamentos=[]})).catch((function(a){e.arrDepartamentos=[]}))},traeCiudades:function(e){var a=this;i["a"].CiudadesSelDepto(this.proyecto,e).then((function(e){e.request&&e.data?a.arrCiudades=e.data.data:a.arrCiudades=[]})).catch((function(e){a.arrCiudades=[]}))},deleteItem:function(){var e=this;this.loading=!0,console.log(this.proyecto,this.itemactual),i["a"].DelData(e.proyecto,e.itemactual.ciudad).then((function(a){if(a.statusText){e.showMessage(!0,3e3,"success","Se eliminó la Ciudad con éxito"),e.del_item="",e.traerdata(e.proyecto),e.dialog_del=!1,e.agregaBitacora("ELIMINACION","SE ELIMINÓ LA CIUDAD CON CODIGO:"+e.itemactual.codigo+", DESCRIPCION:"+e.itemactual.nombreciudad+". QUE PERTENECE AL PROYECTO CON # DE CONVENIO: "+e.convenioproyecto+" Y NOMBRE: "+e.nombreproyecto);var t="Cordial Saludo,<br><br> Se eliminó la Ciudad : '"+e.itemactual.nombreciudad+"' del Proyecto con # de Convenio "+e.convenioproyecto+", Nombre: "+e.nombreproyecto+"<br><br>Agradeciendo su atención,<br><br> <b>SINCHI</b><br><br> <i>Este es un servicio de notificaciones generado automáticamente por medio de correo electrónico, no lo responda.</i> <br>",o="Se eliminó la Ciudad : '"+e.itemactual.nombreciudad+"' del Proyecto con # de Convenio "+e.convenioproyecto+", Nombre: "+e.nombreproyecto;e.envioNotificaciones(o,"Eliminación de Ciudades del Proyecto",t)}else e.showMessage(!0,3e3,"error",a.response.data.message);e.del_item="",e.loading=!1})).catch((function(a){e.showMessage(!0,3e3,"error",a),e.loading=!1}))},saveitem:function(){var e=this.arrCiudades.length,a=[];this.loading=!0;for(var t=0;t<e;t++){var o=this.arrCiudades[t];o["seleccionar"]&&a.push({codigo:o["codigo"],proyecto:this.proyecto,departamento:this.departamento.codigo})}var r=this;i["a"].guardarData(a).then((function(e){if(e.response){var a=e.response.data.message;r.showMessage(!0,3e3,"error",a)}else if(e.statusText){r.showMessage(!0,3e3,"success","Se Actualizarón/Agregarón las Ciudades al Proyecto con éxito"),r.traerdata(r.proyecto),r.agregaBitacora("ACTUALIZACION/CREACION","SE ACTUALIZARON/AGREGARON/ELIMINARON LAS CIUDADES AL PROYECTO CON # DE CONVENIO: "+r.convenioproyecto+" Y NOMBRE: "+r.nombreproyecto);var t="Cordial Saludo,<br><br> Se Actualizaron/Crearon/Eliminaron las Ciudades para el Proyecto con # de Convenio "+r.convenioproyecto+", Nombre: "+r.nombreproyecto+"<br><br>Agradeciendo su atención,<br><br> <b>SINCHI</b><br><br> <i>Este es un servicio de notificaciones generado automáticamente por medio de correo electrónico, no lo responda.</i> <br>",o="Se Actualizaron/Crearon/Eliminaron las Ciudades para el Proyecto con # de Convenio "+r.convenioproyecto+", Nombre: "+r.nombreproyecto;r.envioNotificaciones(o,"Actualización/Creación/Eliminacion de Ciudades del Proyecto",t),r.dialogAdd=!1}else r.showMessage(!0,3e3,"error",e.message);r.loading=!1})).catch((function(e){r.showMessage(!0,3e3,"error",e),r.loading=!1}))},agregaBitacora:function(e,a){var t={modulo:"CIUDADES PROYECTOS",accion:e,detalle:a};this.$root.$emit("agregaBitacora",t)}},watch:{proyecto:function(e){0!=e&&this.traerdata(e)},selected:function(e){for(var a=0;a<this.arrCiudades.length;a++){var t=this.arrCiudades[a];t["seleccionar"]=e}}},mounted:function(){this.traerDepartamentos(),this.traerdata(this.proyecto)}},m=u,p=t("2877"),h=Object(p["a"])(m,o,r,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0dae63.188880da.js.map