(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62fadc7c"],{a996:function(e,a,t){"use strict";var o=t("d642"),i=t.n(o);i.a},ba58:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{attrs:{"grid-list-md":""}},[t("v-layout",{attrs:{wrap:"",column:""}},[t("v-form",{ref:"form",model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("v-layout",{attrs:{wrap:""}},[t("div",{staticClass:"red--text title"},[e._v("\n\t\t\t\t\t\tLos Cambio No se reflejaran hasta que sean aprobados\n\t\t\t\t\t")]),t("v-flex",{attrs:{sm12:""}},[t("div",{staticStyle:{width:"96%","text-align":"center","padding-left":"10px"}},[t("v-data-table",{attrs:{headers:e.headerproyectogen,items:e.arrProyectosGen,"disable-sort":!0,"disable-pagination":!0,"hide-default-footer":!0},scopedSlots:e._u([{key:"item.valortotal",fn:function(a){var o=a.item;return[t("span",[e._v(e._s(e._f("currency")(o.valortotal,{symbol:o.moneda,thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t\t\t")])]}},{key:"item.tasa",fn:function(a){var o=a.item;return[t("span",[e._v(e._s(e._f("currency")(o.tasa,{symbol:"$ ",thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t\t\t")])]}},{key:"item.valorpesos",fn:function(a){var o=a.item;return[t("span",[e._v(e._s(e._f("currency")(o.valorpesos,{symbol:"$ ",thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t\t\t")])]}}])})],1)]),t("v-flex",{attrs:{sm3:""}},[t("v-select",{attrs:{items:e.arrBaseMoneda,label:"Base Moneda","item-value":"valor","item-text":"texto","return-object":!1,readonly:"S"==e.enviovobo},model:{value:e.basemoneda,callback:function(a){e.basemoneda=a},expression:"basemoneda"}})],1),t("v-flex",{attrs:{sm12:""}},[t("div",{staticStyle:{"padding-bottom":"10px"}},[t("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){e.dialog_addupdnecesidad=!0,e.edit_necesidad=0,e.itemactualnecesidad=""}}},[t("v-icon",{attrs:{dark:""}},[e._v("add")])],1)],1),t("v-card",[t("v-card-title",{staticClass:"justify-center"},[e._v("NECESIDADES")]),t("v-card-text",[t("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.searchnecesidad,callback:function(a){e.searchnecesidad=a},expression:"searchnecesidad"}})],1),t("v-data-table",{attrs:{headers:e.headersnecesidad,items:e.datanecesidad,"items-per-page":5,"disable-sort":!0,search:e.searchnecesidad},scopedSlots:e._u([{key:"item.valor",fn:function(a){var o=a.item;return[t("span",[e._v(e._s(e._f("currency")(o.valor,{symbol:e.moneda,thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t\t\t")])]}},{key:"item.action",fn:function(a){var o=a.item;return[t("v-icon",{staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:e.loading},on:{click:function(a){e.dialog_addupdnecesidad=!0,e.edit_necesidad=1,e.itemactualnecesidad=o}}},[e._v("\n\t\t\t\t\t\t\t\t\t\tedit\n\t\t\t\t\t\t\t\t\t")])]}},{key:"item.tipomod",fn:function(a){var o=a.item;return[t("span",{class:[{ColorVBTrue:"N"===o.tipomod},{ColorVBFalse:"E"==o.tipomod},{ColorVBModifica:"M"==o.tipomod}]},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s("N"==o.tipomod?"NUEVO":"M"==o.tipomod?"MODIFICADO":"E"==o.tipomod?"ELIMINADO":"")+"\n\t\t\t\t\t\t\t\t\t")])]}},{key:"item.unspsc",fn:function(a){var o=a.item;return[t("v-icon",{directives:[{name:"show",rawName:"v-show",value:0!=o.codigo,expression:"item.codigo != 0"}],staticClass:"mr-5",attrs:{small:"",color:"primary"},on:{click:function(a){return e.abrirUnspsc(o.codigo,o.descripcion)}}},[e._v("\n\t\t\t\t\t\t\t\t\t\tlibrary_add\n\t\t\t\t\t\t\t\t\t")])]}},{key:"item.actividades",fn:function(a){var o=a.item;return[t("v-icon",{directives:[{name:"show",rawName:"v-show",value:0!=o.codigo,expression:"item.codigo != 0"}],staticClass:"mr-5",attrs:{small:"",color:"primary"},on:{click:function(a){return e.abrirActividad(o.codigo,o.descripcion,o.valor)}}},[e._v("\n\t\t\t\t\t\t\t\t\t\taccount_tree\n\t\t\t\t\t\t\t\t\t")])]}}])})],1)],1),t("v-flex",[t("v-spacer"),t("v-btn",{attrs:{color:"primary",text:"",disabled:!e.valid},on:{click:e.saveitem}},[e._v("Guardar")])],1)],1)],1)],1),t("v-dialog",{attrs:{persistent:"","max-width":"700px"},model:{value:e.dialog_addupdnecesidad,callback:function(a){e.dialog_addupdnecesidad=a},expression:"dialog_addupdnecesidad"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"headline"},[e._v(e._s(e.formTitleNecesidad))])]),t("v-card-text",[t("v-container",{attrs:{"grid-list-md":""}},[t("v-layout",{attrs:{wrap:"",column:""}},[t("v-form",{ref:"form2",model:{value:e.valid_necesidad,callback:function(a){e.valid_necesidad=a},expression:"valid_necesidad"}},[t("v-flex",[t("v-textarea",{attrs:{filled:"",name:"input-7-4",label:"Descripción",rules:[e.rules.required],readonly:0!=e.edit_necesidad},model:{value:e.descripcion,callback:function(a){e.descripcion=a},expression:"descripcion"}})],1),t("v-flex",[t("v-text-field",{attrs:{label:"valor",rules:[e.rules.required],prefix:e.moneda},on:{blur:function(a){return e.formatearValor(e.valor)}},model:{value:e.valor,callback:function(a){e.valor=a},expression:"valor"}})],1),t("v-flex",[t("v-select",{attrs:{items:e.arrMetodosSeleccion,"item-value":"codigo","item-text":"descripcion","return-object":!0,label:"Método de Selección",rules:[e.rules.required],clearable:""},model:{value:e.metodoleccion,callback:function(a){e.metodoleccion=a},expression:"metodoleccion"}})],1),t("v-flex",[t("v-text-field",{attrs:{type:"date",label:"Fecha de Solicitud de Contratación",rules:[e.rules.required],clearable:""},model:{value:e.fechasolcontrata,callback:function(a){e.fechasolcontrata=a},expression:"fechasolcontrata"}})],1),t("v-flex",[e._v("\n\t\t\t\t\t\t\t\t\tEstado: "+e._s(e.estadonecesidadtxt)+"\n\t\t\t\t\t\t\t\t")])],1)],1)],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"primary",text:""},on:{click:e.cerrarDialogoNecesidad}},[e._v("Cancelar")]),t("v-btn",{attrs:{color:"primary",text:"",disabled:!e.valid_necesidad},on:{click:e.saveitemnecesidad}},[e._v(e._s(e.titulobtnuardaritem))])],1)],1)],1),t("v-dialog",{attrs:{persistent:"","max-width":"900px"},model:{value:e.dialog_unspsc,callback:function(a){e.dialog_unspsc=a},expression:"dialog_unspsc"}},[t("v-card",[t("v-card-text",[t("unspsc",{attrs:{planadquisicion:e.codigo,necesidad:e.codigonecesidad,descripcionnecesidad:e.necesidadtxt,enviovobo:e.enviovobo},on:{"update:planadquisicion":function(a){e.codigo=a},"update:necesidad":function(a){e.codigonecesidad=a},"update:descripcionnecesidad":function(a){e.necesidadtxt=a},"update:enviovobo":function(a){e.enviovobo=a}}})],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:function(a){e.dialog_unspsc=!1}}},[e._v("Cancelar")])],1)],1)],1),t("v-dialog",{attrs:{persistent:"","max-width":"1200px"},model:{value:e.dialog_actividades,callback:function(a){e.dialog_actividades=a},expression:"dialog_actividades"}},[t("v-card",[t("v-card-text",[t("actividades",{attrs:{planadquisicion:e.codigo,necesidad:e.codigonecesidad,descripcionnecesidad:e.necesidadtxt,moneda:e.moneda,valortotal:e.valortotalconvenio,proyecto:e.proyecto,convenio:e.convenio,valornecesidad:e.valornecesidad,tasa:e.tasa,enviovobo:e.enviovobo},on:{"update:planadquisicion":function(a){e.codigo=a},"update:necesidad":function(a){e.codigonecesidad=a},"update:descripcionnecesidad":function(a){e.necesidadtxt=a},"update:moneda":function(a){e.moneda=a},"update:valortotal":function(a){e.valortotalconvenio=a},"update:proyecto":function(a){e.proyecto=a},"update:convenio":function(a){e.convenio=a},"update:valornecesidad":function(a){e.valornecesidad=a},"update:tasa":function(a){e.tasa=a},"update:enviovobo":function(a){e.enviovobo=a}}})],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:function(a){e.dialog_actividades=!1}}},[e._v("Cancelar")])],1)],1)],1)],1)},i=[],n=t("a34a"),c=t.n(n),s=t("c032"),r=t("3bb9"),d=t("38f9"),l=(t("1711"),t("6181"));t("5657");function u(e,a,t,o,i,n,c){try{var s=e[n](c),r=s.value}catch(d){return void t(d)}s.done?a(r):Promise.resolve(r).then(o,i)}function h(e){return function(){var a=this,t=arguments;return new Promise((function(o,i){var n=e.apply(a,t);function c(e){u(n,o,i,c,s,"next",e)}function s(e){u(n,o,i,c,s,"throw",e)}c(void 0)}))}}function v(e){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var p={name:"PlanesAdquisicion",props:["itemactual","nuevo","tmplanadquisicion"],components:{unspsc:function(){return t.e("chunk-0742f18b").then(t.bind(null,"2bae"))},actividades:function(){return t.e("chunk-8e8671cc").then(t.bind(null,"fae1"))}},data:function(){var e;return e={modulo:"PLANES DE ADQUISICIÓN MOD",loading:!1,dialog:!1,processing:!1,search:"",valid:!1,dialog_unspsc:!1,dialog_actividades:!1,codigo:0,proyecto:0,convenio:0,valortotalconvenio:0,estadojurudico:0,aclaracionjurudica:"",estadoplaneacion:"",aclaracionplaneacion:"",moneda:"",enviovobo:"",basemoneda:"",tasa:"",numeroconvenio:"",nombreconvenio:""},m(e,"valortotalconvenio",0),m(e,"coordinador",""),m(e,"fechasuscripcion",""),m(e,"fechaterejecucion",""),m(e,"fechaincorporacion",""),m(e,"arrProyectosGen",[]),m(e,"headerproyectogen",[{text:"Nombre Proyecto",align:"left",sortable:!1,value:"nombre"},{text:"No. Convenio",align:"left",sortable:!1,value:"convenio"},{text:"Nombre Convenio",value:"nombreconvenio",sortable:!1,align:"left"},{text:"Valor Total",value:"valortotal",sortable:!1,align:"left"},{text:"Tasa",value:"tasa",sortable:!1,align:"left"},{text:"Valor en Pesos",value:"valorpesos",sortable:!1,align:"left"}]),m(e,"edit_necesidad",-1),m(e,"itemactualnecesidad",""),m(e,"searchnecesidad",""),m(e,"datanecesidad",[]),m(e,"dataoriginalnecesidad",[]),m(e,"dialog_addupdnecesidad",!1),m(e,"valid_necesidad",!1),m(e,"codigonecesidad",0),m(e,"necesidadtxt",""),m(e,"valornecesidad",0),m(e,"descripcion",""),m(e,"valor",0),m(e,"metodoleccion",0),m(e,"fechasolcontrata",""),m(e,"estadocodigonecesidad",""),m(e,"estadonecesidadtxt",""),m(e,"formTitleNecesidad",""),m(e,"titulobtnuardaritem",""),m(e,"arrMetodosSeleccion",[]),m(e,"usuarioFinanciera",""),m(e,"usuarioJuridica",""),m(e,"usuarioPlaneacion",""),m(e,"headersnecesidad",[{text:"No.",value:"codigo",sortable:!1,align:"left"},{text:"Descripción",value:"descripcion",sortable:!1,align:"left"},{text:"Valor",value:"valor",sortable:!1,align:"left"},{text:"Método de Selección",value:"metodolecciontxt",sortable:!1,align:"left"},{text:"Fecha de Solicitud de Contratación",value:"fechasolcontrata",sortable:!1,align:"left"},{text:"Estado",value:"estadotxt",sortable:!1,align:"left"},{text:"UNSPSC",value:"unspsc",sortable:!1,align:"left"},{text:"Actividades",value:"actividades",sortable:!1,align:"left"},{text:"Accion",value:"action",sortable:!1},{text:"Tipo Mod.",value:"tipomod",sortable:!1}]),m(e,"arrBaseMoneda",[{valor:"C",texto:"CONVENIO"},{valor:"P",texto:"PESOS"}]),m(e,"rules",{required:function(e){return!!e||"Campo requerido."},valor:function(e){return e>0||"El Valor debe ser mayor a 0."}}),e},filters:{},methods:{showMessage:function(e,a,t,o){this.$root.$emit("showSnack",{snack:e,time:a,color:t,text:o})},envioNotificaciones:function(e){var a=0,t=46,o=this.numeroconvenio;""!=this.coordinador&&"0"!=this.coordinador&&(a=this.coordinador),this.$root.$emit("enviarNotificaciones",{codigopersona:a,mensajenotificacion:e.mensajenotificacion,asuntocorreo:e.asuntocorreo,mensajecorreo:e.mensajecorreo,codigoopcion:t,numerointerno:o})},envioNotificacionesVoBo:function(e){var a=0,t=46,o=this.numeroconvenio;""!=this.usuarioPlaneacion&&"0"!=this.usuarioPlaneacion&&(a=this.usuarioPlaneacion,this.$root.$emit("enviarNotificaciones",{codigopersona:a,mensajenotificacion:e.mensajenotificacion,asuntocorreo:e.asuntocorreo,mensajecorreo:e.mensajecorreo,codigoopcion:t,numerointerno:o})),""!=this.usuarioFinanciera&&"0"!=this.usuarioFinanciera&&(a=this.usuarioFinanciera,this.$root.$emit("enviarNotificaciones",{codigopersona:a,mensajenotificacion:e.mensajenotificacion,asuntocorreo:e.asuntocorreo,mensajecorreo:e.mensajecorreo,codigoopcion:t,numerointerno:o})),""!=this.coordinador&&"0"!=this.coordinador&&(a=this.coordinador),this.$root.$emit("enviarNotificaciones",{codigopersona:a,mensajenotificacion:e.mensajenotificacion,asuntocorreo:e.asuntocorreo,mensajecorreo:e.mensajecorreo,codigoopcion:t,numerointerno:o})},saveitem:function(){if(""!=this.proyecto&&"0"!=this.proyecto){var e=this;this.loading=!0;var a="",t={codigo:this.codigo,proyecto:this.proyecto,estadojurudico:this.estadojurudico,aclaracionjurudica:this.aclaracionjurudica,estadoplaneacion:this.estadoplaneacion,aclaracionplaneacion:this.aclaracionplaneacion,basemoneda:this.basemoneda,tmplanadquisicion:this.tmplanadquisicion};a="",a="CODIGO: "+this.codigo+" (Se envío solicitud de modificación del Plan de Adquisición con éxito)";var o=this.$store.getters.getArrPlanAdqNecUnspsc,i=this.$store.getters.getArrPlanAdqNecAct;s["a"].guardarDataTmp(t,this.datanecesidad,o,i).then((function(t){if(t.response){var o=t.response.data.message;e.showMessage(!0,3e3,"error",o)}else if(t.statusText){var i="",n="";i="solicitó aprobación en las modificaciones ",n="ACTUALIZACION",e.showMessage(!0,3e3,"success","Se "+i+" del Plan de Adquisición con éxito");var c="Cordial Saludo,<br><br> Se "+i+" del Plan de Adquisiciones para el Acuerdo Específico # : "+e.numeroconvenio+", Nombre: "+e.nombreconvenio+"<br><br>Agradeciendo su atención,<br><br> <b>SINCHI</b><br><br> <i>Este es un servicio de notificaciones generado automáticamente por medio de correo electrónico, no lo responda.</i> <br>";e.envioNotificacionesVoBo({mensajenotificacion:"Se "+i+" del Plan de Adquisiciones para el Acuerdo Específico # : "+e.numeroconvenio+", Nombre: "+e.nombreconvenio,asuntocorreo:"Solicitud de Aprobación en Modificaciones del Plan de Adquisiciones para un Acuerdo Específico",mensajecorreo:c}),e.edit=-1,e.agregaBitacora(n,a),e.$root.$emit("cerrarDialogoModEnVoBo")}else e.showMessage(!0,3e3,"error",t.message);e.loading=!1})).catch((function(a){e.showMessage(!0,3e3,"error",a),e.loading=!1}))}else this.showMessage(!0,3e3,"error","No ha seleccionado el Proyecto")},traeProyectoGen:function(){var e=this;this.arrProyectosGen=[],this.numeroconvenio="",this.nombreconvenio="",this.coordinador="",this.valortotalconvenio=0,this.moneda="",this.fechasuscripcion="",this.fechaterejecucion="",this.fechaincorporacion="",r["a"].getDataXId(this.proyecto).then((function(a){a.request&&a.data&&(e.arrProyectosGen=a.data.data,e.numeroconvenio=e.arrProyectosGen[0].convenio,e.nombreconvenio=e.arrProyectosGen[0].nombreconvenio,e.coordinador=e.arrProyectosGen[0].codigocoordinador,e.valortotalconvenio="C"==e.basemoneda?e.arrProyectosGen[0].valortotal:0!=e.arrProyectosGen[0].tasa?e.arrProyectosGen[0].valortotal*e.arrProyectosGen[0].tasa:e.arrProyectosGen[0].valortotal,e.moneda="C"==e.basemoneda?e.arrProyectosGen[0].moneda:"$ ",e.fechasuscripcion=e.arrProyectosGen[0].fechasuscripcion,e.fechaterejecucion=e.arrProyectosGen[0].fechaterejecucion,e.fechaincorporacion=e.arrProyectosGen[0].fechaincorporacion)})).catch((function(e){}))},traeNecesidadXPlanAdq:function(){var e=this;e.datanecesidad=[],1==this.nuevo?s["a"].getNecesidadXPlanAdq(this.codigo).then((function(a){a.request&&a.data&&(e.datanecesidad=a.data.data)})).catch((function(e){})):s["a"].getNecesidadesXTmpPlanCategoria(this.tmplanadquisicion).then((function(a){a.request&&a.data&&(e.datanecesidad=a.data.data)})).catch((function(e){}))},traeNecesidadDataBaseXPlanAdq:function(){var e=this;e.dataoriginalnecesidad=[],1==this.nuevo?s["a"].getNecesidadXPlanAdq(this.codigo).then((function(a){a.request&&a.data&&(e.dataoriginalnecesidad=a.data.data)})).catch((function(e){})):s["a"].getNecesidadesXTmpPlanCategoria(this.tmplanadquisicion).then((function(a){a.request&&a.data&&(e.dataoriginalnecesidad=a.data.data)})).catch((function(e){}))},number_format:function(e,a){if(e+="",e=parseFloat(e.replace(/[^0-9\.]/g,"")),a=a||0,isNaN(e)||0===e)return parseFloat(0).toFixed(a);e=""+e.toFixed(a);var t=e.split("."),o=/(\d+)(\d{3})/;while(o.test(t[0]))t[0]=t[0].replace(o,"$1.$2");return t.join(",")},limpiarMoneda:function(e){var a=e.toString().replace(",00","").replace(/[$.]/gi,"");return a=a.replace(/[,]/gi,"."),a},formatearValor:function(e){var a=e;a=this.limpiarMoneda(a),a=this.number_format(a,2),this.valor=a},deleteItemnecesidad:function(e){for(var a=0;a<this.datanecesidad.length;a++){var t=this.datanecesidad[a];if(t.descripcion==e.descripcion){if("N"==t.tipomod)this.datanecesidad.splice(a,1);else if("E"!=t.tipomod)this.datanecesidad[a].tipomod="E";else if("E"==t.tipomod){this.datanecesidad[a].tipomod="";for(var o=0;o<this.dataoriginalnecesidad.length;o++){var i=this.dataoriginalnecesidad[o];i.descripcion==e.descripcion&&(i.estadocodigo==e.estadocodigo&&i.fechasolcontrata==e.fechasolcontrata&&i.metodoleccion==e.metodoleccion&&parseFloat(i.valor)==parseFloat(e.valor)||(this.datanecesidad[a].tipomod="M"))}}break}}},saveitemnecesidad:function(){var e=0,a="",t=0;if(""!=this.limpiarMoneda(this.valor)&&"0"!=this.limpiarMoneda(this.valor.toString().replace(".00",""))){"object"==v(this.metodoleccion)?(e=this.metodoleccion.codigo,a=this.metodoleccion.descripcion):(e=this.metodoleccion,a=this.itemactualnecesidad.metodolecciontxt),t="object"==v(this.estadocodigonecesidad)?this.estadocodigonecesidad.codigo:this.estadocodigonecesidad;for(var o=0;o<this.datanecesidad.length;o++){var i=this.datanecesidad[o];if(i.descripcion==this.descripcion&&this.itemactualnecesidad.descripcion!=i.descripcion)return void this.showMessage(!0,3e3,"error","La Descripción ya existe")}var n=new Date(this.fechasolcontrata),c=new Date(this.fechasuscripcion),s=new Date(this.fechaincorporacion);if(n<c||n<s)this.showMessage(!0,5e3,"error","La Fecha de Solicitud de la Contratación No puede ser menor a la Fecha de Inicio Ni de Suscripción ("+this.fechaincorporacion+" - "+this.fechasuscripcion+")");else{var r=0,d=0;d=parseFloat(this.limpiarMoneda(this.valor)),0==this.edit_necesidad&&(r+=parseFloat(d));for(var l=0;l<this.datanecesidad.length;l++){var u=this.datanecesidad[l];this.itemactualnecesidad.descripcion==u.descripcion?r+=d:r+=parseFloat(this.limpiarMoneda(u.valor.toString().replace(this.moneda,"")))}if(parseFloat(r)>parseFloat(this.valortotalconvenio))this.showMessage(!0,5e3,"error","El Valor total de las Necesidades no puede superar el valor total del convenio ("+this.moneda+" "+this.number_format(this.valortotalconvenio)+")");else{if(0==this.edit_necesidad){var h=this.datanecesidad.reduce((function(e,a){return Math.max(e,a.codigo)}),0);h+=1,this.datanecesidad.push({codigo:h,descripcion:this.descripcion,valor:this.limpiarMoneda(this.valor),metodoleccion:e,metodolecciontxt:a,fechasolcontrata:this.fechasolcontrata,estadocodigo:t,estadotxt:this.estadonecesidadtxt,modificada:"U",tipomod:"N"})}else for(var m=0;m<this.datanecesidad.length;m++){var p=this.datanecesidad[m];if(this.itemactualnecesidad.descripcion==p.descripcion){"N"!=p.tipomod&&(p.valor==this.limpiarMoneda(this.valor)&&p.metodoleccion==e&&p.fechasolcontrata==this.fechasolcontrata&&p.estadocodigo==t||(p.tipomod="M")),p.valor=this.limpiarMoneda(this.valor),p.metodoleccion=e,p.metodolecciontxt=a,p.fechasolcontrata=this.fechasolcontrata,p.estadocodigo=t,p.estadotxt=this.estadonecesidadtxt,"N"==p.modificada&&(p.modificada="S");break}}this.edit_necesidad=-1,this.dialog_addupdnecesidad=!1}}}else this.showMessage(!0,3e3,"error","Debe ingresar el valor de la Necesidad")},resetFormCategoria:function(){this.descripcion="",this.valor=0,this.metodoleccion="",this.fechasolcontrata="",this.estadocodigonecesidad=""},cerrarDialogoNecesidad:function(){this.resetFormCategoria(),this.dialog_addupdnecesidad=!1,this.edit_necesidad=-1},traerMetodosSeleccion:function(){var e=this;this.arrMetodosSeleccion=[],d["a"].getMetodosSeleccion().then((function(a){a.request&&a.data&&(e.arrMetodosSeleccion=a.data.data)})).catch((function(e){}))},abrirUnspsc:function(e,a){this.codigonecesidad=e,this.necesidadtxt=a,this.dialog_unspsc=!0},abrirActividad:function(e,a,t){this.codigonecesidad=e,this.necesidadtxt=a,this.valornecesidad=t,this.tasa=this.arrProyectosGen[0].tasa,this.dialog_actividades=!0},agregaBitacora:function(e,a){var t={modulo:this.modulo,accion:e,detalle:a};this.$root.$emit("agregaBitacora",t)},agregaDataActual:function(){this.codigo=this.itemactual.codigo,this.proyecto=this.itemactual.proyecto,this.convenio=this.itemactual.convenio,this.numeroconvenio=this.itemactual.numeroconvenio,this.nombreconvenio=this.itemactual.nombreconvenio,this.coordinador=this.itemactual.coordinador,this.estadojurudico=0,this.aclaracionjurudica="",this.estadoplaneacion="",this.aclaracionplaneacion="",this.moneda="C"==this.basemoneda?this.itemactual.moneda:"$ ",this.enviovobo=this.itemactual.enviovobo,this.basemoneda=this.itemactual.basemoneda,this.valortotalconvenio="C"==this.basemoneda?this.itemactual.valortotalconvenio:0!=this.itemactual.tasa?this.itemactual.valortotalconvenio*this.itemactual.tasa:this.itemactual.valortotalconvenio,this.fechasuscripcion=this.itemactual.fechasuscripcion,this.fechaterejecucion=this.itemactual.fechaterejecucion,this.fechaincorporacion=this.itemactual.fechaincorporacion,this.traeProyectoGen(),this.traeNecesidadXPlanAdq(),this.traerActividadesUnspscXPlanAdq(),this.traeNecesidadDataBaseXPlanAdq()},traerActividadesUnspscXPlanAdq:function(){var e=h(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$store.commit("setArrPlanAdqNecUnspsc",[]),this.$store.commit("setArrPlanAdqNecAct",[]),1!=this.nuevo){e.next=12;break}return e.next=5,s["a"].ActividadXPlanAdq(this.codigo);case 5:return a=e.sent,e.next=8,s["a"].UnspscXPlanAdq(this.codigo);case 8:t=e.sent,t=t.data.data,e.next=19;break;case 12:return e.next=14,s["a"].getActividadXTmpPlanCategoria(this.tmplanadquisicion);case 14:return a=e.sent,e.next=17,s["a"].getUnspscXTmpPlanCategoria(this.tmplanadquisicion);case 17:t=e.sent,t=t.data.data;case 19:this.$store.commit("setArrPlanAdqNecUnspsc",t),this.$store.commit("setArrPlanAdqNecAct",a.data);case 21:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),traeUsuarios:function(){var e=h(c.a.mark((function e(){var a,t,o;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.usuarioFinanciera=0,this.usuarioJuridica=0,this.usuarioPlaneacion=0,e.prev=3,e.next=6,l["a"].getUserXArea(2);case 6:return a=e.sent,e.next=9,l["a"].getUserXArea(7);case 9:return t=e.sent,e.next=12,l["a"].getUserXArea(3);case 12:o=e.sent,a.data&&(this.usuarioFinanciera=a.data.data[0].userid),t.data&&(this.usuarioJuridica=t.data.data[0].userid),o.data&&(this.usuarioPlaneacion=o.data.data[0].userid),this.usuaactual=this.$session.get("usuarioid"),console.log("usu jur: "+this.usuarioJuridica),this.readvbfinanciera=!0,this.readvbjuridica=!0,this.readvbplaneacion=!0,this.usuaactual==this.usuarioFinanciera&&(this.readvbfinanciera=!1),this.usuaactual==this.usuarioJuridica&&(this.readvbjuridica=!1),this.usuaactual==this.usuarioPlaneacion&&(this.readvbplaneacion=!1),e.next=28;break;case 26:e.prev=26,e.t0=e["catch"](3);case 28:return e.prev=28,e.finish(28);case 30:case"end":return e.stop()}}),e,this,[[3,26,28,30]])})));function a(){return e.apply(this,arguments)}return a}()},watch:{itemactual:function(e){this.agregaDataActual()},edit_necesidad:function(e){e?(this.formTitleNecesidad="Editar",this.descripcion=this.itemactualnecesidad.descripcion,this.valor=this.number_format(this.itemactualnecesidad.valor,2),this.metodoleccion=this.itemactualnecesidad.metodoleccion,this.fechasolcontrata=this.itemactualnecesidad.fechasolcontrata,this.estadocodigonecesidad=this.itemactualnecesidad.estadocodigo,this.estadonecesidadtxt=this.itemactualnecesidad.estadotxt,this.titulobtnuardaritem="Actualizar Item"):(this.resetFormCategoria(),this.formTitleNecesidad="Nuevo",this.titulobtnuardaritem="Agregar Item",this.estadocodigonecesidad="15",this.estadonecesidadtxt="NUEVA")}},computed:{},mounted:function(){this.agregaDataActual(),this.traerMetodosSeleccion(),this.traeUsuarios()}},f=p,g=(t("a996"),t("2877")),b=Object(g["a"])(f,o,i,!1,null,null,null);a["default"]=b.exports},d642:function(e,a,t){}}]);
//# sourceMappingURL=chunk-62fadc7c.eb48a5b2.js.map