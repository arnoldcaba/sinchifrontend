(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01d25f0d"],{"5bee":function(a,t,e){"use strict";var i=e("bc3a"),o=e.n(i),n=e("d89f"),c={getData:function(){return new Promise((function(a,t){o()({method:"POST",url:n["a"].apiUrl+"/ConveniosOtrosi",dataType:"json"}).then((function(t){a(t)})).catch((function(t){a(t)}))}))},getDataXProyecto:function(a){return new Promise((function(t,e){o()({method:"POST",url:n["a"].apiUrl+"/OtroSiXConvenio",dataType:"json",data:{convenio:a}}).then((function(a){t(a)})).catch((function(a){t(a)}))}))},getFecTerminaMax:function(a){return new Promise((function(t,e){o()({method:"POST",url:n["a"].apiUrl+"/MaxFecTerminacion",dataType:"json",data:{convenio:a}}).then((function(a){t(a)})).catch((function(a){t(a)}))}))},getDataMaxFechas:function(a){return new Promise((function(t,e){o()({method:"POST",url:n["a"].apiUrl+"/ConvenioOtrosiMaxFechas",dataType:"json",data:{convenio:a}}).then((function(a){t(a)})).catch((function(a){t(a)}))}))},guardarData:function(a){return new Promise((function(t,e){o()({method:"POST",url:n["a"].apiUrl+"/addupdConvenioOtrosi",dataType:"json",data:{data:a}}).then((function(a){t(a)})).catch((function(a){t(a)}))}))},DelData:function(a,t){return new Promise((function(e,i){o()({method:"POST",url:n["a"].apiUrl+"/delConvenioOtrosi",dataType:"json",data:{codigo:a,convenio:t}}).then((function(a){e(a)})).catch((function(a){e(a)}))}))}};t["a"]=c},"61e3":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-flex",[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.readonly,expression:"!readonly"}],staticStyle:{"padding-bottom":"10px"}},[e("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(t){a.dialog=!0,a.edit=0,a.itemactual=""}}},[e("v-icon",{attrs:{dark:""}},[a._v("add")])],1)],1),e("v-card",{attrs:{flat:"",tile:""}},[e("v-card-title",{staticClass:"justify-center"},[a._v("OTROS SI")]),e("v-card-text",[e("v-data-table",{attrs:{headers:a.headers,items:a.data,"items-per-page":5},scopedSlots:a._u([{key:"item.cofinanciado",fn:function(t){var i=t.item;return[e("span",[a._v(a._s(a._f("currency")(i.cofinanciado,{symbol:i.moneda,thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t")])]}},{key:"item.contrapartida",fn:function(t){var i=t.item;return[e("span",[a._v(a._s(a._f("currency")(i.contrapartida,{symbol:i.moneda,thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t")])]}},{key:"item.totaldinero",fn:function(t){var i=t.item;return[e("span",[a._v(a._s(a._f("currency")(i.totaldinero,{symbol:i.moneda,thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t")])]}},{key:"item.totalespecie",fn:function(t){var i=t.item;return[e("span",[a._v(a._s(a._f("currency")(i.totalespecie,{symbol:i.moneda,thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t")])]}},{key:"item.valortotal",fn:function(t){var i=t.item;return[e("span",[a._v(a._s(a._f("currency")(i.valortotal,{symbol:i.moneda,thousandsSeparator:".",fractionCount:"0",fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}))+"\n\t\t\t\t\t\t\t")])]}},{key:"item.action",fn:function(t){var i=t.item;return[e("v-icon",{directives:[{name:"show",rawName:"v-show",value:!a.readonly,expression:"!readonly"}],staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:a.loading},on:{click:function(t){a.dialog=!0,a.edit=1,a.itemactual=i}}},[a._v("\n\t\t\t\t\t\t\t\tedit\n\t\t\t\t\t\t\t")]),e("v-icon",{directives:[{name:"show",rawName:"v-show",value:!a.readonly,expression:"!readonly"}],staticClass:"mr-5",attrs:{small:"",color:"primary",disabled:a.loading,loading:a.loading},on:{click:function(t){a.dialog_del=!0,a.itemactual=i}}},[a._v("\n                                delete\n                            ")])]}}])})],1)],1)],1),e("v-dialog",{attrs:{"max-width":"1000px"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[a._v(a._s(a.formTitle))])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:"",column:""}},[e("v-form",{ref:"form",model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-row",[e("v-col",[e("v-flex",[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":""},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-text-field",a._g({attrs:{label:"Fecha Suscripción","prepend-icon":"event",readonly:""},model:{value:a.fechasuscripcion,callback:function(t){a.fechasuscripcion=t},expression:"fechasuscripcion"}},i))]}}]),model:{value:a.menuDate,callback:function(t){a.menuDate=t},expression:"menuDate"}},[e("v-date-picker",{attrs:{type:"date"},on:{input:function(t){a.menuDate=!1}},model:{value:a.fechasuscripcion,callback:function(t){a.fechasuscripcion=t},expression:"fechasuscripcion"}})],1)],1)],1),e("v-col",[e("v-flex",[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":""},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-text-field",a._g({attrs:{label:"Fecha Inicio","prepend-icon":"event",readonly:""},model:{value:a.fechaincorporacion,callback:function(t){a.fechaincorporacion=t},expression:"fechaincorporacion"}},i))]}}]),model:{value:a.menuDate2,callback:function(t){a.menuDate2=t},expression:"menuDate2"}},[e("v-date-picker",{attrs:{type:"date"},on:{input:function(t){a.menuDate2=!1}},model:{value:a.fechaincorporacion,callback:function(t){a.fechaincorporacion=t},expression:"fechaincorporacion"}})],1)],1)],1),e("v-col",[e("v-flex",[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":""},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-text-field",a._g({attrs:{label:"Fecha Terminación","prepend-icon":"event",readonly:""},model:{value:a.fechaterejecucion,callback:function(t){a.fechaterejecucion=t},expression:"fechaterejecucion"}},i))]}}]),model:{value:a.menuDate1,callback:function(t){a.menuDate1=t},expression:"menuDate1"}},[e("v-date-picker",{attrs:{type:"date"},on:{input:function(t){a.menuDate1=!1}},model:{value:a.fechaterejecucion,callback:function(t){a.fechaterejecucion=t},expression:"fechaterejecucion"}})],1)],1)],1),e("v-col",[e("v-flex",[e("v-text-field",{attrs:{type:"number",label:"Tiempo Ejec. (Dias)",readonly:""},model:{value:a.tiempoejecucion,callback:function(t){a.tiempoejecucion=t},expression:"tiempoejecucion"}})],1)],1)],1),e("v-row",[e("v-col",[e("v-flex",[e("v-text-field",{attrs:{label:"Cofinanciado",messages:a.calculaTasa(a.cofinanciado),prefix:a.simbolomoneda},on:{blur:function(t){return a.formatearValor(a.cofinanciado,"cofinanciado")}},model:{value:a.cofinanciado,callback:function(t){a.cofinanciado=t},expression:"cofinanciado"}})],1)],1),e("v-col",[e("v-flex",[e("v-text-field",{attrs:{label:"Contrapartida",messages:a.calculaTasa(a.contrapartida),prefix:a.simbolomoneda},on:{blur:function(t){return a.formatearValor(a.contrapartida,"contrapartida")}},model:{value:a.contrapartida,callback:function(t){a.contrapartida=t},expression:"contrapartida"}})],1)],1),e("v-col",[e("v-flex",[e("v-text-field",{attrs:{label:"Valor Total",readonly:!0,messages:a.calculaTasa(a.totalizar),prefix:a.simbolomoneda},model:{value:a.totalizar,callback:function(t){a.totalizar=t},expression:"totalizar"}})],1)],1),e("v-col",[e("v-flex",[e("v-text-field",{attrs:{label:"Total en Dinero",messages:a.calculaTasa(a.totaldinero),prefix:a.simbolomoneda},on:{blur:function(t){return a.formatearValor(a.totaldinero,"totaldinero")}},model:{value:a.totaldinero,callback:function(t){a.totaldinero=t},expression:"totaldinero"}})],1)],1),e("v-col",[e("v-flex",[e("v-text-field",{attrs:{label:"Total en Especie",messages:a.calculaTasa(a.totalespecie),prefix:a.simbolomoneda},on:{blur:function(t){return a.formatearValor(a.totalespecie,"totalespecie")}},model:{value:a.totalespecie,callback:function(t){a.totalespecie=t},expression:"totalespecie"}})],1)],1)],1)],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:a.cerrarDialogo}},[a._v("Cancelar")]),e("v-btn",{attrs:{color:"primary",text:"",disabled:!a.valid},on:{click:a.saveitem}},[a._v("Guardar")])],1)],1)],1),e("v-dialog",{attrs:{width:"550"},model:{value:a.dialog_del,callback:function(t){a.dialog_del=t},expression:"dialog_del"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline red--text"},[a._v("Eliminar Otro Si")])]),e("v-card-text",[a._v("\t\t\t\t\t\n                    ¿Esta seguro de eliminar el Otro Si seleccionado?.\t\t\t\t\t\n                ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:function(t){a.dialog_del=!1}}},[a._v("Cancelar")]),e("v-btn",{attrs:{color:"red",text:""},on:{click:a.deleteItem}},[a._v("Eliminar")])],1)],1)],1)],1)},o=[],n=e("5bee"),c=e("7ed2"),r={name:"OtroSi",props:["convenio"],data:function(){return{loading:!1,dialog:!1,edit:-1,dialog_del:!1,processing:!1,formTitle:"",itemactual:"",valid:!1,fechasuscripcion:"",fechaincorporacion:"",fechaterejecucion:"",tiempo:0,cofinanciado:0,contrapartida:0,totaldinero:0,totalespecie:0,tasa:"",convenioproyecto:"",nombreproyecto:"",codigocoordinador:"",menuDate:!1,menuDate1:!1,menuDate2:!1,simbolomoneda:"",data:[],readonly:!1,headers:[{text:"Fecha Inicio",value:"fechasuscripcion",sortable:!1,align:"left"},{text:"Fecha Incorpor.",align:"left",sortable:!1,value:"fechaincorporacion"},{text:"Fecha Term. Ejec.",value:"fechaterejecucion",sortable:!1,align:"left"},{text:"Tiempo Ejec. (Dias)",value:"tiempo",sortable:!1,align:"left"},{text:"Coofinanciado",value:"cofinanciado",sortable:!1,align:"left"},{text:"Contrapartida",value:"contrapartida",sortable:!1,align:"left"},{text:"Valor Total",value:"valortotal",sortable:!1,align:"left"},{text:"Total en Dinero",value:"totaldinero",sortable:!1,align:"left"},{text:"Total en Especie",value:"totalespecie",sortable:!1,align:"left"},{text:"Accion",value:"action",sortable:!1,align:"left"}],rules:{required:function(a){return!!a||"Campo requerido."},valor:function(a){return a>0||"El Valor debe ser mayor a 0."},minDate:function(a){return a<(new Date).toISOString()||"La fecha no puede ser superior al dia de hoy"},maxDate:function(a){return a>=(new Date).toISOString()||"La fecha no puede ser inferior al dia de hoy"}}}},methods:{showMessage:function(a,t,e,i){this.$root.$emit("showSnack",{snack:a,time:t,color:e,text:i})},envioNotificaciones:function(a,t,e){this.$emit("envioNotificaciones",{mensajenotificacion:a,asuntocorreo:t,mensajecorreo:e})},resetForm:function(){this.codigo="0",this.fechasuscripcion="",this.fechaterejecucion="",this.fechaincorporacion="",this.valortotal=0,this.fuentefinanciacion="",this.cofinanciado=0,this.contrapartida=0,this.totaldinero=0,this.totalespecie=0,this.tiempo="0"},cerrarDialogo:function(){this.resetForm(),this.dialog=!1,this.edit=-1},calculaTasa:function(a){var t=this.limpiarMoneda(a),e=this.tasa,i=0,o="";return i=0==e?t:t*e,o="$ "+this.number_format(i,2),o},getTasa:function(){this.tasa=this.codigomoneda.tasa,this.simbolomoneda=this.codigomoneda.simbolo},traerDataConvenio:function(){var a=this;a.convenioproyecto="",a.nombreproyecto="",a.codigocoordinador="",a.tasa=0,c["a"].getDataXId(this.convenio).then((function(t){t.request&&t.data&&(a.convenioproyecto=t.data.data[0].numero,a.nombreproyecto=t.data.data[0].nombre,a.codigocoordinador=t.data.data[0].codigocoordinador,a.tasa=t.data.data[0].tasa),a.loading=!1})).catch((function(a){}))},traerdata:function(a){var t=this;this.loading=!0,n["a"].getDataXProyecto(a).then((function(a){a.request&&a.data?t.data=a.data.data:t.data=[],t.loading=!1})).catch((function(a){t.data=[],t.loading=!1}))},deleteItem:function(){var a=this;this.loading=!0,n["a"].DelData(a.itemactual.codigo,a.convenio).then((function(t){if(t.statusText){a.showMessage(!0,3e3,"success","Se eliminó el Otro Si con éxito"),a.del_item="",a.traerdata(a.convenio),a.dialog_del=!1,a.agregaBitacora("ELIMINACION","SE ELIMINÓ EL OTRO SI CON FECHA DE INICIO:"+a.itemactual.fechasuscripcion+", FECHA DE INCORPORACION:"+a.itemactual.fechaincorporacion+", FECHA TERMINACION EJECUCION: "+a.itemactual.fechaterejecucion+", VALOR TOTAL: "+a.itemactual.valortotal+". QUE PERTENECE AL CONVENIO: "+a.convenioproyecto+" Y NOMBRE: "+a.nombreproyecto);var e="Cordial Saludo,<br><br> Se eliminó el Otro Si con Fecha de Inicio : '"+a.itemactual.fechasuscripcion+"', Fecha de Incoprporación: '"+a.itemactual.fechaincorporacion+"', Fecha de Terminación Ejecucion: '"+a.itemactual.fechaterejecucion+"', Valor Total: '"+a.itemactual.valortotal+"' del # de Convenio "+a.convenioproyecto+", Nombre: "+a.nombreproyecto+"<br><br>Agradeciendo su atención,<br><br> <b>SINCHI</b><br><br> <i>Este es un servicio de notificaciones generado automáticamente por medio de correo electrónico, no lo responda.</i> <br>",i="Se eliminó el Otro Si con Fecha de Inicio : '"+a.itemactual.fechasuscripcion+"', Fecha de Incoprporación: '"+a.itemactual.fechaincorporacion+"', Fecha de Terminación Ejecucion: '"+a.itemactual.fechaterejecucion+"', Valor Total: '"+a.itemactual.valortotal+"' del # de Convenio "+a.convenioproyecto+", Nombre: "+a.nombreproyecto;a.envioNotificaciones(i,"Eliminación de otro si de Convenio",e)}else a.showMessage(!0,3e3,"error",t.response.data.message);a.del_item="",a.loading=!1})).catch((function(t){a.showMessage(!0,3e3,"error",t),a.loading=!1}))},validaSave:function(){return this.itemactual.fechasuscripcion!=this.fechasuscripcion||this.itemactual.fechaterejecucion!=this.fechaterejecucion||this.itemactual.fechaincorporacion!=this.fechaincorporacion||this.itemactual.cofinanciado!=this.cofinanciado||this.itemactual.contrapartida!=this.contrapartida||this.itemactual.totaldinero!=this.totaldinero||this.itemactual.totalespecie!=this.totalespecie},saveitem:function(){this.loading=!0;var a=this,t="",e={codigo:this.codigo,convenio:this.convenio,fechasuscripcion:this.fechasuscripcion,fechaterejecucion:this.fechaterejecucion,fechaincorporacion:this.fechaincorporacion,valortotal:this.limpiarMoneda(this.totalizar),cofinanciado:this.limpiarMoneda(this.cofinanciado),contrapartida:this.limpiarMoneda(this.contrapartida),totaldinero:this.limpiarMoneda(this.totaldinero),totalespecie:this.limpiarMoneda(this.totalespecie),tiempo:this.tiempoejecucion},i=this.validaFechas();if(""!=i)return this.showMessage(!0,5e3,"error",i),void(this.loading=!1);var o=this.validarTotalContrapartida();if(""!=o)return this.showMessage(!0,5e3,"error",o),void(this.loading=!1);if(this.edit){var c=this.validaSave();if(!c)return this.showMessage(!0,3e3,"error","No hay datos para actualizar"),void(this.loading=!1);t="",this.itemactual.fechasuscripcion!=this.fechasuscripcion&&(t+="Fecha Inicio: "+this.itemactual.fechasuscripcion+" a "+this.fechasuscripcion),this.itemactual.fechaincorporacion!=this.fechaincorporacion&&(t+=""==t?"Fecha de Incorporación: "+this.itemactual.fechaincorporacion+" a "+this.fechaincorporacion:", Fecha de Incorporación: "+this.itemactual.fechaincorporacion+" a "+this.fechaincorporacion),this.itemactual.fechaterejecucion!=this.fechaterejecucion&&(t+=""==t?"Fecha Terminación Ejecución: "+this.itemactual.fechaterejecucion+" a "+this.fechaterejecucion:", Fecha Terminación Ejecución: "+this.itemactual.fechaterejecucion+" a "+this.fechaterejecucion),this.itemactual.cofinanciado!=this.cofinanciado&&(t+=""==t?"Valor Cofinanciado: "+this.itemactual.cofinanciado+" a "+this.cofinanciado:", Valor Cofinanciado: "+this.itemactual.cofinanciado+" a "+this.cofinanciado),this.itemactual.contrapartida!=this.contrapartida&&(t+=""==t?"Valor Contrapartida: "+this.itemactual.contrapartida+" a "+this.contrapartida:", Valor Contrapartida: "+this.itemactual.contrapartida+" a "+this.contrapartida),this.itemactual.contrapartida!=this.contrapartida&&(t+=""==t?"Total en Dinero: "+this.itemactual.totaldinero+" a "+this.totaldinero:", Total en Dinero: "+this.itemactual.totaldinero+" a "+this.totaldinero),this.itemactual.contrapartida!=this.contrapartida&&(t+=""==t?"Total en Especies: "+this.itemactual.totalespecie+" a "+this.totalespecie:", Total en Especies: "+this.itemactual.totalespecie+" a "+this.totalespecie),t="CODIGO: "+this.codigo+" ("+t+")"}else t+="Fecha Inicio : "+this.fechasuscripcion+", Fecha de Incorporación: "+this.fechaincorporacion+", Fecha Terminación Ejecución: "+this.fechaterejecucion+", Valor Cofinanciado: "+this.cofinanciado+", Valor Contrapartida: "+this.contrapartida+", Total en Dinero: "+this.totaldinero+", Total en Especies: "+this.totalespecie;n["a"].guardarData(e).then((function(e){if(e.response){var i=e.response.data.message;a.showMessage(!0,3e3,"error",i)}else if(e.statusText){var o="",n="";a.edit?(o="Actualizó",n="ACTUALIZACION"):(o="Agregó",n="CREACION"),a.showMessage(!0,3e3,"success","Se "+o+" el Otro Si con éxito"),a.agregaBitacora(n,t);var c="Cordial Saludo,<br><br> Se "+o+" el Otro Si para el # de Convenio "+a.convenioproyecto+", Nombre: "+a.nombreproyecto+"<br><br>Agradeciendo su atención,<br><br> <b>SINCHI</b><br><br> <i>Este es un servicio de notificaciones generado automáticamente por medio de correo electrónico, no lo responda.</i> <br>",r="Se "+o+" el Otro Si para el # de Convenio "+a.convenioproyecto+", Nombre: "+a.nombreproyecto;a.envioNotificaciones(r,"Se "+o+" el Otro Si del Convenio",c),a.traerdata(a.convenio),a.dialog=!1}else a.showMessage(!0,3e3,"error",e.message);a.loading=!1})).catch((function(t){a.showMessage(!0,3e3,"error",t),a.loading=!1}))},number_format:function(a,t){if(a+="",a=parseFloat(a.replace(/[^0-9\.]/g,"")),t=t||0,isNaN(a)||0===a)return parseFloat(0).toFixed(t);a=""+a.toFixed(t);var e=a.split("."),i=/(\d+)(\d{3})/;while(i.test(e[0]))e[0]=e[0].replace(i,"$1.$2");return e.join(",")},formatearValor:function(a,t){var e=a;switch(e=this.limpiarMoneda(e),e=this.number_format(e,2),t){case"cofinanciado":this.cofinanciado=e;break;case"contrapartida":this.contrapartida=e;break;case"totaldinero":this.totaldinero=e;break;case"totalespecie":this.totalespecie=e;break;default:break}},limpiarMoneda:function(a){var t=a.toString().replace(/[$.]/gi,"");return t=t.replace(/[,]/gi,"."),t.trim()},validaFechas:function(){if(""==this.fechasuscripcion||""==this.fechaincorporacion||""==this.fechaterejecucion)return"";var a=new Date(this.fechasuscripcion),t=new Date(this.fechaincorporacion),e=new Date(this.fechaterejecucion);return e<=a?"La Fecha de Terminación debe ser superior a la Fecha de Inicio":e<=t?"La Fecha de Terminación debe ser superior a la Fecha de Incorporación":""},validarTotalContrapartida:function(){var a=parseFloat(this.limpiarMoneda(this.contrapartida)),t=parseFloat(this.limpiarMoneda(this.totaldinero)),e=parseFloat(this.limpiarMoneda(this.totalespecie)),i=t+e;return i>a?"El Total en Especie y en Dinero, no puede superar el valor de la Contrapartida":""},agregaBitacora:function(a,t){var e={modulo:"OTRO SI ACUERDOS ESPECÍFICOS",accion:a,detalle:t};this.$root.$emit("agregaBitacora",e)}},watch:{edit:function(a){"1"==a||"2"==a?(this.formTitle="1"==a?"Editar":"Detalle (Solo Consulta)",this.codigo=this.itemactual.codigo,this.fechasuscripcion=this.itemactual.fechasuscripcion,this.fechaterejecucion=this.itemactual.fechaterejecucion,this.fechaincorporacion=this.itemactual.fechaincorporacion,this.valortotal=this.number_format(this.itemactual.valortotal,2),this.fuentefinanciacion=this.number_format(this.itemactual.fuentefinanciacion,2),this.cofinanciado=this.number_format(this.itemactual.cofinanciado,2),this.contrapartida=this.number_format(this.itemactual.contrapartida,2),this.totaldinero=this.number_format(this.itemactual.totaldinero,2),this.totalespecie=this.number_format(this.itemactual.totalespecie,2),this.tiempo=this.itemactual.tiempo,this.tasa=this.itemactual.tasa,this.simbolomoneda=this.itemactual.moneda):(this.resetForm(),this.formTitle="Nuevo")},convenio:function(a){0!=a&&(this.traerdata(a),this.traerDataConvenio())}},computed:{totalizar:function(){var a=this.limpiarMoneda(this.cofinanciado),t=this.limpiarMoneda(this.contrapartida),e=parseFloat(a)+parseFloat(t);return this.valortotal=e,this.number_format(e,2)},tiempoejecucion:function(){if(""!=this.fechasuscripcion&&""!=this.fechaterejecucion){var a=new Date(this.fechaterejecucion),t=new Date(this.fechasuscripcion),e=a.getTime()-t.getTime(),i=e/864e5;return this.tiempo=i,i}return this.tiempo=0,0}},mounted:function(){this.traerDataConvenio(),this.traerdata(this.convenio)}},s=r,l=e("2877"),d=Object(l["a"])(s,i,o,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-01d25f0d.3ac1834d.js.map