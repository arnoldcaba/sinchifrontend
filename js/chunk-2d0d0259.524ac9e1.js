(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0259"],{6779:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{sm12:""}},[a("v-card",{attrs:{color:"transparent"}},[a("v-card-title",[e._v("Programación")]),a("v-card-text",[a("v-row",[a("v-col",{attrs:{sm12:""}},[a("b",[e._v("Objetivo:")]),e._v(" "+e._s(e.txtobjetivo)+"\r\n                        ")])],1),a("v-row",[a("v-col",{attrs:{sm12:""}},[a("b",[e._v("Actividad:")]),e._v(" "+e._s(e.txtactividad)+"\r\n                        ")])],1),a("v-row",[a("v-col",{attrs:{sm3:""}},[a("b",[e._v("Peso:")]),e._v(" "+e._s(e.peso)+" %\r\n                        ")]),a("v-col",{attrs:{sm3:""}},[a("b",[e._v("Meta:")]),e._v(" "+e._s(e.kpi)+"\r\n                        ")]),a("v-col",{attrs:{sm6:""}},[a("b",[e._v("Descripción Meta:")]),e._v(" "+e._s(e.descripcionkpi)+"\r\n                        ")])],1)],1)],1)],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{sm12:""}},[a("v-card",{attrs:{color:"transparent",height:"400"}},[a("v-card-text",[a("v-btn",{attrs:{color:"primary"},on:{click:e.traerdata}},[e._v("Traer Programación")]),a("br"),a("br"),a("v-data-table",{attrs:{headers:e.headers,items:e.dataseg,"items-per-page":3},scopedSlots:e._u([{key:"item.mes1",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes1,callback:function(t){e.$set(n,"mes1",t)},expression:"item.mes1"}})]}},{key:"item.mes2",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes2,callback:function(t){e.$set(n,"mes2",t)},expression:"item.mes2"}})]}},{key:"item.mes3",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes3,callback:function(t){e.$set(n,"mes3",t)},expression:"item.mes3"}})]}},{key:"item.mes4",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes4,callback:function(t){e.$set(n,"mes4",t)},expression:"item.mes4"}})]}},{key:"item.mes5",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes5,callback:function(t){e.$set(n,"mes5",t)},expression:"item.mes5"}})]}},{key:"item.mes6",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes6,callback:function(t){e.$set(n,"mes6",t)},expression:"item.mes6"}})]}},{key:"item.mes7",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes7,callback:function(t){e.$set(n,"mes7",t)},expression:"item.mes7"}})]}},{key:"item.mes8",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes8,callback:function(t){e.$set(n,"mes8",t)},expression:"item.mes8"}})]}},{key:"item.mes9",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes9,callback:function(t){e.$set(n,"mes9",t)},expression:"item.mes9"}})]}},{key:"item.mes10",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes10,callback:function(t){e.$set(n,"mes10",t)},expression:"item.mes10"}})]}},{key:"item.mes11",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes11,callback:function(t){e.$set(n,"mes11",t)},expression:"item.mes11"}})]}},{key:"item.mes12",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",suffix:" %",rules:[e.rules.maxPorcentaje],readonly:e.readonly},model:{value:n.mes12,callback:function(t){e.$set(n,"mes12",t)},expression:"item.mes12"}})]}},{key:"item.mesk1",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk1,callback:function(t){e.$set(n,"mesk1",t)},expression:"item.mesk1"}})]}},{key:"item.mesk2",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk2,callback:function(t){e.$set(n,"mesk2",t)},expression:"item.mesk2"}})]}},{key:"item.mesk3",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk3,callback:function(t){e.$set(n,"mesk3",t)},expression:"item.mesk3"}})]}},{key:"item.mesk4",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk4,callback:function(t){e.$set(n,"mesk4",t)},expression:"item.mesk4"}})]}},{key:"item.mesk5",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk5,callback:function(t){e.$set(n,"mesk5",t)},expression:"item.mesk5"}})]}},{key:"item.mesk6",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk6,callback:function(t){e.$set(n,"mesk6",t)},expression:"item.mesk6"}})]}},{key:"item.mesk7",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk7,callback:function(t){e.$set(n,"mesk7",t)},expression:"item.mesk7"}})]}},{key:"item.mesk8",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk8,callback:function(t){e.$set(n,"mesk8",t)},expression:"item.mesk8"}})]}},{key:"item.mesk9",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk9,callback:function(t){e.$set(n,"mesk9",t)},expression:"item.mesk9"}})]}},{key:"item.mesk10",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk10,callback:function(t){e.$set(n,"mesk10",t)},expression:"item.mesk10"}})]}},{key:"item.mesk11",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk11,callback:function(t){e.$set(n,"mesk11",t)},expression:"item.mesk11"}})]}},{key:"item.mesk12",fn:function(t){var n=t.item;return[a("v-text-field",{attrs:{type:"number",min:"0",readonly:e.readonly},model:{value:n.mesk12,callback:function(t){e.$set(n,"mesk12",t)},expression:"item.mesk12"}})]}}])})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.readonly&&""!=e.objetivo,expression:"!readonly && objetivo != ''"}],attrs:{color:"primary",text:""},on:{click:e.saveitem}},[e._v("Actualizar Programación")])],1)],1)],1)],1)],1)},o=[],i=a("bc3a"),r=a.n(i),s=a("d89f"),l={getData:function(){return new Promise((function(e,t){r()({method:"POST",url:s["a"].apiUrl+"/ProyectosProgPlan",dataType:"json"}).then((function(t){e(t)})).catch((function(t){e(t)}))}))},DelData:function(e,t,a,n){return new Promise((function(o,i){r()({method:"POST",url:s["a"].apiUrl+"/delProyectoProgPlan",dataType:"json",data:{proyecto:e,objetivo:t,actividad:a,anno:n}}).then((function(e){o(e)})).catch((function(e){o(e)}))}))},BuscarXObjetivo:function(e,t){return new Promise((function(a,n){r()({method:"POST",url:s["a"].apiUrl+"/ProgXObjetivo",dataType:"json",data:{proyecto:e,objetivo:t}}).then((function(e){a(e)})).catch((function(e){a(e)}))}))},BuscarXObjetivoActividad:function(e){return new Promise((function(t,a){r()({method:"POST",url:s["a"].apiUrl+"/ProgXObjetivoActividad",dataType:"json",data:{actividad:e}}).then((function(e){t(e)})).catch((function(e){t(e)}))}))},addupdData:function(e){return new Promise((function(t,a){r()({method:"POST",url:s["a"].apiUrl+"/addupdProyectoProgPlan",dataType:"json",data:{data:e}}).then((function(e){t(e)})).catch((function(e){t(e)}))}))},addBasico:function(e){return new Promise((function(t,a){r()({method:"POST",url:s["a"].apiUrl+"/AddActividadBase",dataType:"json",data:{data:e}}).then((function(e){t(e)})).catch((function(e){t(e)}))}))}},c=l,m=a("3bb9"),d=a("d761"),u={name:"ProgramacionPlan",props:["proyecto","objetivo","actividad","peso","kpi","descripcionkpi","txtobjetivo","txtactividad","readonly","activarprogramacion"],data:function(){return{loading:!1,itemactual:"",dialog_del:!1,convenioproyecto:"",nombreproyecto:"",codigocoordinador:"",headers:[{text:"Año",align:"left",sortable:!1,value:"anno"},{text:"% Espe. Ene.",value:"mes1",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Feb.",value:"mes2",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Mar.",value:"mes3",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Abr.",value:"mes4",sortable:!1,align:"left",width:"100px"},{text:"% Espe. May.",value:"mes5",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Jun.",value:"mes6",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Jul.",value:"mes7",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Ago.",value:"mes8",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Sep.",value:"mes9",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Oct.",value:"mes10",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Nov.",value:"mes11",sortable:!1,align:"left",width:"100px"},{text:"% Espe. Dic.",value:"mes12",sortable:!1,align:"left",width:"100px"},{text:"Meta Ene.",value:"mesk1",sortable:!1,align:"left",width:"100px"},{text:"Meta Feb.",value:"mesk2",sortable:!1,align:"left",width:"100px"},{text:"Meta Mar.",value:"mesk3",sortable:!1,align:"left",width:"100px"},{text:"Meta Abr.",value:"mesk4",sortable:!1,align:"left",width:"100px"},{text:"Meta Mayo",value:"mesk5",sortable:!1,align:"left",width:"100px"},{text:"Meta Jun.",value:"mesk6",sortable:!1,align:"left",width:"100px"},{text:"Meta Jul.",value:"mesk7",sortable:!1,align:"left",width:"100px"},{text:"Meta Ago.",value:"mesk8",sortable:!1,align:"left",width:"100px"},{text:"Meta Sep.",value:"mesk9",sortable:!1,align:"left",width:"100px"},{text:"Meta Oct.",value:"mesk10",sortable:!1,align:"left",width:"100px"},{text:"Meta Nov.",value:"mesk11",sortable:!1,align:"left",width:"100px"},{text:"Meta Dic.",value:"mesk12",sortable:!1,align:"left",width:"100px"}],dataseg:[],rules:{maxPorcentaje:function(e){return e<100||"El % no puede mayor a 100"}}}},methods:{showMessage:function(e,t,a,n){this.$root.$emit("showSnack",{snack:e,time:t,color:a,text:n})},envioNotificaciones:function(e,t,a){var n="0";this.$root.$emit("envioNotificaciones",{codigopersona:n,mensajenotificacion:e,asuntocorreo:t,mensajecorreo:a})},traerDataProyecto:function(){var e=this;e.convenioproyecto="",e.nombreproyecto="",e.codigocoordinador="",e.fechasuscripcion="",e.fechaterejecucion="",m["a"].getDataXId(this.proyecto).then((function(t){t.request&&t.data&&(e.convenioproyecto=t.data.data[0].convenio,e.nombreproyecto=t.data.data[0].nombre,e.codigocoordinador=t.data.data[0].codigocoordinador,e.fechasuscripcion=t.data.data[0].fechasuscripcion,e.fechaterejecucion=t.data.data[0].fechaterejecucion)})).catch((function(e){}))},traerdata:function(){var e=this;this.loading=!0,c.BuscarXObjetivoActividad(this.actividad).then((function(t){t.request&&t.data?e.dataseg=t.data:e.dataseg=[],e.traerInfoBase(e.objetivo,e.actividad),e.loading=!1})).catch((function(t){e.dataseg=[],e.loading=!1}))},traerInfoBase:function(e,t){var a=this,n=[];d["a"].FiltroxActividad(t).then((function(o){if(o.request)if(o.data){if(n=o.data.data,n.length>0){var i=new Date(n[0]["fechainicio"]),r=new Date(n[0]["fechafin"]),s=i.getFullYear(),l=r.getFullYear(),m={proyecto:a.proyecto,objetivo:e,actividad:t,annoini:s,annofin:l};c.addBasico(m).then((function(e){this.traerdata()})).catch((function(e){}))}}else n=[];else n=[]})).catch((function(e){n=[]}))},valida:function(){for(var e="",t=0;t<this.dataseg.length;t++){var a=parseFloat(this.dataseg[t].mes1)+parseFloat(this.dataseg[t].mes2)+parseFloat(this.dataseg[t].mes3)+parseFloat(this.dataseg[t].mes4)+parseFloat(this.dataseg[t].mes5)+parseFloat(this.dataseg[t].mes6)+parseFloat(this.dataseg[t].mes7)+parseFloat(this.dataseg[t].mes8)+parseFloat(this.dataseg[t].mes9)+parseFloat(this.dataseg[t].mes10)+parseFloat(this.dataseg[t].mes11)+parseFloat(this.dataseg[t].mes12),n=parseFloat(this.dataseg[t].mesk1)+parseFloat(this.dataseg[t].mesk2)+parseFloat(this.dataseg[t].mesk3)+parseFloat(this.dataseg[t].mesk4)+parseFloat(this.dataseg[t].mesk5)+parseFloat(this.dataseg[t].mesk6)+parseFloat(this.dataseg[t].mesk7)+parseFloat(this.dataseg[t].mesk8)+parseFloat(this.dataseg[t].mesk9)+parseFloat(this.dataseg[t].mesk10)+parseFloat(this.dataseg[t].mesk11)+parseFloat(this.dataseg[t].mesk12);return a>100?e="El porcentaje programado en el año '"+this.dataseg[t].anno+"' supero el 100%":n>this.kpi&&(e="El kpi programado en el año '"+this.dataseg[t].anno+"' supero el total de '"+this.kpi+"'"),e}},saveitem:function(){this.loading=!0;var e=this.valida();if(""!=e)return this.showMessage(!0,3e3,"error",e),void(this.loading=!1);var t=this;c.addupdData(this.dataseg).then((function(e){if(e.response){var a=e.response.data.message;t.showMessage(!0,7e3,"error",a)}else if(e.statusText){t.showMessage(!0,3e3,"success","Se Actualizó el Seguimiento al Plan de Acción de un Objetivo con éxito"),t.traerdata(),t.agregaBitacora("ACTUALIZACION","SE ACTUALIZO LA PROGRAMACION DEL PLAN DE ACCION DEL OBJETIVO "+t.txtobjetivo+"DEL PROYECTO CON # DE CONVENIO: "+t.convenioproyecto+" Y NOMBRE: "+t.nombreproyecto);var n="Cordial Saludo,<br><br> Se Actualizó la Programación del Plan de Acción del Objetivo '"+t.txtobjetivo+"' del Proyecto con # de Convenio "+t.convenioproyecto+", Nombre: "+t.nombreproyecto+"<br><br>Agradeciendo su atención,<br><br> <b>SINCHI</b><br><br> <i>Este es un servicio de notificaciones generado automáticamente por medio de correo electrónico, no lo responda.</i> <br>",o="Se Actualizó la Programación del Plan de Acción del Objetivo '"+t.txtobjetivo+"' del Proyecto con # de Convenio "+t.convenioproyecto+", Nombre: "+t.nombreproyecto;t.envioNotificaciones(o,"Actualización Seguimiento Plan de Acción de un Proyecto",n)}else t.showMessage(!0,3e3,"error",e.message);t.loading=!1})).catch((function(e){t.showMessage(!0,3e3,"error",e),t.loading=!1}))},agregaBitacora:function(e,t){var a={modulo:"PROGRAMACION PLAN DE ACCION PROYECTOS",accion:e,detalle:t};this.$root.$emit("agregaBitacora",a)}},watch:{proyecto:function(e){0!=e&&this.traerdata()},actividad:function(e){0!=e&&this.traerdata()},activarprogramacion:function(e){0!=e&&this.traerdata()}},mounted:function(){this.traerDataProyecto(),this.traerdata()}},f=u,v=a("2877"),p=Object(v["a"])(f,n,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d0259.524ac9e1.js.map