(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df2c6"],{"897f":function(e,o,a){"use strict";a.r(o);var t=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("v-container",{attrs:{fluid:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.permiso,expression:"permiso"}],staticStyle:{"padding-bottom":"8px"}},[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.permiso,expression:"permiso"}],attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(o){e.edit=0,e.dialog=!0,e.itemactual=""}}},[a("v-icon",{attrs:{dark:""}},[e._v("add")])],1)],1),a("v-card",{attrs:{flat:"",tile:"","min-height":"500"}},[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(o){e.search=o},expression:"search"}}),a("br"),a("v-data-table",{attrs:{items:e.data,"items-per-page":10,headers:e.headersdata,search:e.search},scopedSlots:e._u([{key:"item.action",fn:function(o){var t=o.item;return[a("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.permiso,expression:"permiso"}],staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:e.loading},on:{click:function(o){e.dialog=!0,e.edit=1,e.itemactual=t}}},[e._v("\n                            edit\n                        ")]),a("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.permiso,expression:"permiso"}],staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:e.loading,loading:e.loading&&e.itemactual===t},on:{click:function(o){e.dialog_del=!0,e.itemactual=t}}},[e._v("\n                            delete\n                        ")])]}}])})],1)],1),a("v-dialog",{attrs:{"max-width":"700px"},model:{value:e.dialog,callback:function(o){e.dialog=o},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:"",column:""}},[a("v-form",{ref:"form",model:{value:e.valid,callback:function(o){e.valid=o},expression:"valid"}},[a("v-flex",[a("v-textarea",{attrs:{filled:"",name:"input-5-4",label:"Observación",rules:[e.rules.required]},model:{value:e.observacion,callback:function(o){e.observacion=o},expression:"observacion"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:e.cerrarDialogo}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"primary",text:"",disabled:!e.valid},on:{click:e.saveitem}},[e._v("Guardar")])],1)],1)],1),a("v-dialog",{attrs:{width:"550"},model:{value:e.dialog_del,callback:function(o){e.dialog_del=o},expression:"dialog_del"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline red--text"},[e._v("Eliminar Observación")])]),a("v-card-text",[e._v("\t\t\t\t\t\n                    ¿Esta seguro de eliminar la Observación seleccionada?.\t\t\t\t\t\n                ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:function(o){e.dialog_del=!1}}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"red",text:""},on:{click:e.deleteItem}},[e._v("Eliminar")])],1)],1)],1)],1)},i=[],r=a("bc3a"),n=a.n(r),c=a("d89f"),s={getData:function(){return new Promise((function(e,o){n()({method:"POST",url:c["a"].apiUrl+"/ProyectosObsPla",dataType:"json"}).then((function(o){e(o)})).catch((function(o){e(o)}))}))},getDataXProyecto:function(e){return new Promise((function(o,a){n()({method:"POST",url:c["a"].apiUrl+"/proyectoobsplaXproyecto",dataType:"json",data:{proyecto:e}}).then((function(e){o(e)})).catch((function(e){o(e)}))}))},guardarData:function(e){return new Promise((function(o,a){n()({method:"POST",url:c["a"].apiUrl+"/guardarProyectoObsPla",dataType:"json",data:{data:e}}).then((function(e){o(e)})).catch((function(e){o(e)}))}))},DelData:function(e,o){return new Promise((function(a,t){n()({method:"POST",url:c["a"].apiUrl+"/delProyectoObsPla",dataType:"json",data:{proyecto:e,id:o}}).then((function(e){a(e)})).catch((function(e){a(e)}))}))}},l=s,d={name:"ObservacionesPla",props:["proyecto","readonly","convenioproyecto","nombreproyecto","perfil","codigocoordinador"],data:function(){return{loading:!1,edit:-1,dialog_del:!1,dialog:!1,itemactual:"",formTitle:"",valid:!1,search:"",codigo:"0",observacion:"",data:[],permiso:0,headersdata:[{text:"Observación",value:"observacion",sortable:!1,align:"left"},{text:"Accion",value:"action",sortable:!1,align:"left"}],rules:{required:function(e){return!!e||"Campo requerido."}}}},methods:{showMessage:function(e,o,a,t){this.$root.$emit("showSnack",{snack:e,time:o,color:a,text:t})},envioNotificaciones:function(e,o,a){this.$emit("envioNotificaciones",{mensajenotificacion:e,asuntocorreo:o,mensajecorreo:a})},resetForm:function(){this.codigo="0",this.descripcion=""},cerrarDialogo:function(){this.resetForm(),this.dialog=!1,this.edit=-1},traerdata:function(e){var o=this;this.loading=!0,l.getDataXProyecto(e).then((function(e){e.request&&e.data?o.data=e.data.data:o.data=[],o.loading=!1})).catch((function(e){o.data=[],o.loading=!1}))},closeDialogoDel:function(){this.dialog_del=!1},deleteItem:function(){var e=this;this.loading=!0,l.DelData(e.proyecto,e.itemactual.codigo).then((function(o){if(o.statusText){e.showMessage(!0,3e3,"success","Se eliminó la Observación con éxito"),e.del_item="",e.traerdata(e.proyecto),e.dialog_del=!1,e.agregaBitacora("ELIMINACION","SE ELIMINÓ LA OBSERVACION CON CODIGO:"+e.itemactual.codigo+", DESCRIPCION:"+e.itemactual.observacion+". QUE PERTENECE AL PROYECTO CON # DE CONVENIO: "+e.convenioproyecto+" Y NOMBRE: "+e.nombreproyecto);var a="Cordial Saludo,<br><br> Se eliminó la Observación : '"+e.itemactual.observacion+"' del Proyecto con # de Convenio "+e.convenioproyecto+", Nombre: "+e.nombreproyecto+"<br><br>Agradeciendo su atención,<br><br> <b>SINCHI</b><br><br> <i>Este es un servicio de notificaciones generado automáticamente por medio de correo electrónico, no lo responda.</i> <br>",t="Se eliminó la Observación : '"+e.itemactual.observacion+"' del Proyecto con # de Convenio "+e.convenioproyecto+", Nombre: "+e.nombreproyecto;e.envioNotificaciones(t,"Eliminación de Ciudades del Proyecto",a)}else e.showMessage(!0,3e3,"error",o.response.data.message);e.del_item="",e.loading=!1})).catch((function(o){e.showMessage(!0,3e3,"error",o),e.loading=!1}))},saveitem:function(){var e=this,o={codigo:this.codigo,proyecto:this.proyecto,observacion:this.observacion};l.guardarData(o).then((function(o){if(o.response){var a=o.response.data.message;e.showMessage(!0,3e3,"error",a)}else if(o.statusText){e.showMessage(!0,3e3,"success","Se Actualizarón/Agregarón Observaciones de Planeación al Proyecto con éxito"),e.traerdata(e.proyecto),e.del_item="",e.edit=-1,e.resetForm(),e.dialog=!1,e.agregaBitacora("ACTUALIZACION/CREACION","SE ACTUALIZARON/AGREGARON/ELIMINARON OBSERVACIONES DE PLANEACION AL PROYECTO CON # DE CONVENIO: "+e.convenioproyecto+" Y DESCRIPCION: "+e.descripcion);var t="Cordial Saludo,<br><br> Se Actualizaron/Crearon/Eliminaron Observaciones de Planeación para el Proyecto con # de Convenio "+e.convenioproyecto+", Nombre: "+e.nombreproyecto+"<br><br>Agradeciendo su atención,<br><br> <b>SINCHI</b><br><br> <i>Este es un servicio de notificaciones generado automáticamente por medio de correo electrónico, no lo responda.</i> <br>",i="Se Actualizaron/Crearon/Eliminaron Observaciones de Planeación para el Proyecto con # de Convenio "+e.convenioproyecto+", Nombre: "+e.nombreproyecto;e.envioNotificaciones(i,"Actualización/Creación/Eliminacion de Observaciones de Planeación del Proyecto",t)}else e.showMessage(!0,3e3,"error",o.message);e.loading=!1})).catch((function(o){e.showMessage(!0,3e3,"error",o),e.loading=!1}))},agregaBitacora:function(e,o){var a={modulo:"OBSERVACIONES PLANEACION PROYECTOS",accion:e,detalle:o};this.$root.$emit("agregaBitacora",a)}},watch:{proyecto:function(e){0!=e&&this.traerdata(e),4==this.perfil&&(this.permiso=!0)},edit:function(e){e?(this.formTitle="Editar",this.codigo=this.itemactual.codigo,this.observacion=this.itemactual.observacion):(this.resetForm(),this.formTitle="Nuevo")}},mounted:function(){this.traerdata(this.proyecto),4==this.perfil&&(this.permiso=!0)}},u=d,m=a("2877"),v=Object(m["a"])(u,t,i,!1,null,null,null);o["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0df2c6.4304d0a5.js.map