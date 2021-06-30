(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/unrest-form/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4945:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"unrest-app-root"};function i(e,t,n,i,o,c){var u=Object(r["w"])("app-nav"),s=Object(r["w"])("router-view");return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["g"])(u),Object(r["g"])(s)])}var o={class:"navbar"},c=Object(r["g"])("div",{class:"navbar-brand"},"@unrest/form",-1),u={class:"navbar-section flex items-center"},s=Object(r["g"])("a",{href:"http://github.com/chriscauley/unrest-form",class:"btn -light"},[Object(r["g"])("i",{class:"fa fa-github fa-2x"})],-1);function l(e,t,n,a,i,l){var d=Object(r["w"])("router-link");return Object(r["q"])(),Object(r["d"])("header",o,[c,Object(r["g"])("div",u,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(i.tabs,(function(e){return Object(r["q"])(),Object(r["d"])("div",{class:l.css.tab(e),key:e[0]},[Object(r["g"])(d,{to:e[0]},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["z"])(e[1]),1)]})),_:2},1032,["to"])],2)})),128)),s])])}var d=n("3835"),p=[["/","Basics"],["/lazy/","Lazy"],["/misc/","Misc"]],f={data:function(){return{tabs:p}},computed:{css:function(){var e=this;return{tab:function(t){var n=Object(d["a"])(t,1),r=n[0];return["btn",r===e.$route.path?"-primary":"-light"]}}}}};f.render=l;var b=f,m={components:{AppNav:b}};m.render=i;var h=m,j=n("5530"),O=(n("159b"),n("4fad"),{class:"ur-form__actions"}),v=Object(r["g"])("button",{type:"submit",class:"btn -primary"},"Submit",-1);function g(e,t,n,a,i,o){var c,u=Object(r["w"])("unrest-field");return Object(r["q"])(),Object(r["d"])("form",{onSubmit:t[2]||(t[2]=Object(r["F"])((function(){return o.submit&&o.submit.apply(o,arguments)}),["prevent"])),class:"ur-form"},[Object(r["g"])(u,{modelValue:n.state,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.state=e}),field:o.field,key:o.field.id,onChange:o.change,onInput:o.input},null,8,["modelValue","field","onChange","onInput"]),(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(null===(c=o.computed_errors)||void 0===c?void 0:c.__root,(function(e,t){return Object(r["q"])(),Object(r["d"])("div",{key:t,class:"form-error"},Object(r["z"])(e.message),1)})),128)),Object(r["g"])("div",O,[Object(r["v"])(e.$slots,"actions",{},(function(){return[v]}))])],32)}var y=n("2909"),_=(n("b64b"),n("b0c0"),n("99af"),n("a15b"),n("a41b")),w=function e(t){var n={};return Object.entries(t).forEach((function(t){var r=Object(d["a"])(t,2),a=r[0],i=r[1];if(void 0!==i&&null!==i&&""!==i)if(i.constructor===Object){var o=e(i);Object.keys(o).length>0&&(n[a]=o)}else n[a]=i})),n},q=function(e,t){var n=new _["Validator"],r=n.validate(w(e),t);if(!r.errors.length)return null;var a={};return r.errors.forEach((function(e){var t=e.path,n=e.argument,r=e.message,i=e.name;t=[].concat(Object(y["a"])(t),[n]),a[t.join(".")]="required"===i?"This field is required.":r})),a},V=function e(t,n){return"object"===n.type?(t=t||{},Object.entries(n.properties).forEach((function(n){var r=Object(d["a"])(n,2),a=r[0],i=r[1];t[a]=e(t[a],i)})),t):t||n.default},x=V,k=(n("fb6a"),n("ac1f"),n("5319"),{toSentenceCase:function(e){return e=e.replace(/([A-Z])/g," $1").toLowerCase().replace(/_/g," "),e[0].toUpperCase()+e.slice(1)}}),C=n("53ca"),z=["number","string","boolean"],S=function e(t){if(null===t||void 0===t)return{};for(var n=0;n<z.length;n++)if(Object(C["a"])(t)===z[n])return{default:t,type:z[n]};if(Array.isArray(t))return{type:"array",default:t,items:e(t[0])};if("lazy"===t.type){var r={};return Object.entries(t).forEach((function(t){var n=Object(d["a"])(t,2),a=n[0],i=n[1];return r[a]=e(i)})),delete r.type,{type:"object",properties:r}}if(t.type)return t;throw"Unrecognized schema object for parseLazySchema"},F=S,N=function(e){return"object"===e.type?"unrest-object":e.enum?"unrest-select":"boolean"===e.type?"unrest-checkbox":"image"===e.type?"unrest-image":"color"===e.format?"unrest-color":"password"===e.format?"unrest-password":"unrest-text"},A=function(e,t){var n={type:"text",tagName:N(e)};return"number"===e.type&&(n.type="number"),"password"===e.format&&(n.type="password"),Object.assign(n,t[e.name],e.ui)},E=function(e,t){var n=Object.assign({},t),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.ui,i=void 0===a?{}:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return"lazy"===n.type&&(n=F(n)),n.name=e,n.id="id__".concat(n.name),n.ui=A(n,i),void 0===n.title&&(n.title=k.toSentenceCase(n.name)),n.__path=o.slice(),"__root"!==e&&n.__path.push(n.name),n},I={provide:function(){return{ur_form:this}},props:{schema:Object,uiSchema:Object,state:{type:Object,default:function(){return{}}},onSubmit:Function,onChange:Function,onInput:Function,errors:Object,focus:Boolean},data:function(){return{internal_errors:null}},computed:{computed_errors:function(){var e=Object(j["a"])(Object(j["a"])({},this.errors),this.internal_errors);return e.__all__&&(e.__root=e.__all__),e},field:function(){return E("__root",this.schema)}},beforeMount:function(){x(this.state,this.field)},mounted:function(){var e;this.focus;this.focus&&(null===(e=this.$el.querySelector("input"))||void 0===e||e.focus())},methods:{handleError:function(e){var t,n,r,a;(e.message&&(this.internal_errors={__root:e.message||e}),null!==(t=e.response)&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.errors)&&(this.internal_errors=null===(r=e.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.errors);throw e},change:function(e){var t;null===(t=this.onChange)||void 0===t||t.call(this,this.state,e)},input:function(e){var t;null===(t=this.onInput)||void 0===t||t.call(this,this.state,e)},submit:function(e){if(this.internal_errors=q(this.state,this.schema),!this.internal_errors)try{var t;null===(t=this.onSubmit(this.state,e))||void 0===t||t.catch(this.handleError)}catch(n){this.handleError(n)}}}};I.render=g;var U=I,P=(n("a4d3"),n("e01a"),{class:"input-wrapper"}),$={key:1,class:"form-error"},L={key:2,class:"description"};function J(e,t,n,a,i,o){return"unrest-hidden"!==n.field.ui.tagName?(Object(r["q"])(),Object(r["d"])("div",{key:0,class:o.css.root},[o.showLabel(n.field)?(Object(r["q"])(),Object(r["d"])("label",{key:0,for:n.field.id},Object(r["z"])(n.field.title),9,["for"])):Object(r["e"])("",!0),Object(r["g"])("div",P,[(Object(r["q"])(),Object(r["d"])(Object(r["x"])(n.field.ui.tagName),{field:n.field,modelValue:n.modelValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t)})},null,8,["field","modelValue"]))]),o.error?(Object(r["q"])(),Object(r["d"])("div",$,Object(r["z"])(o.error),1)):n.field.description?(Object(r["q"])(),Object(r["d"])("div",L,Object(r["z"])(n.field.description),1)):Object(r["e"])("",!0)],2)):Object(r["e"])("",!0)}n("caad");var R={inject:["ur_form"],props:{field:Object,form:Object,modelValue:null},computed:{error:function(){var e;return null===(e=this.ur_form.internal_errors)||void 0===e?void 0:e[this.field.__path.join(".")]},css:function(){return{root:["form-group form-group__".concat(this.field.name),{"-error":this.error}]}}},methods:{showLabel:function(e){return e.title&&"__root"!==e.name&&!["unrest-checkbox"].includes(e.ui.tagName)}}};R.render=J;var M=R;function T(e,t,n,a,i,o){return Object(r["q"])(),Object(r["d"])("label",{class:o.css},[Object(r["g"])("input",{type:"checkbox",id:n.field.id,checked:n.modelValue,onInput:t[1]||(t[1]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),name:n.field.name},null,40,["id","checked","name"]),Object(r["f"])(" "+Object(r["z"])(n.field.title),1)],2)}var D={props:{modelValue:null,field:Object},emits:["update:modelValue"],computed:{mixed:function(){return"mixed"===this.modelValue},css:function(){var e=this.mixed,t=this.field.disabled;return[this.field.ui.css,"ur-checkbox -"+this.icon,{"-mixed":e,"-disabled":t}]},icon:function(){return this.mixed?"indeterminate":this.modelValue?"checked":"unchecked"}},methods:{onChange:function(){this.field.disabled||this.$emit("update:modelValue",!this.modelValue)}}};D.render=T;var B=D,Y=(n("1276"),{key:0,class:"original"}),Z={class:"name"},G={key:1,class:"preview"},H={class:"name"},K={key:2,class:"btn -primary"};function Q(e,t,n,a,i,o){return Object(r["q"])(),Object(r["d"])("label",{for:n.field.id,class:o.css},[Object(r["g"])("input",{style:{display:"none"},type:"file",id:n.field.id,onChange:t[1]||(t[1]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),ref:"input"},null,40,["id"]),i.original?(Object(r["q"])(),Object(r["d"])("div",Y,[Object(r["g"])("img",{src:i.original},null,8,["src"]),Object(r["g"])("div",Z,Object(r["z"])(i.original.split("/").pop()),1)])):Object(r["e"])("",!0),i.preview?(Object(r["q"])(),Object(r["d"])("div",G,[Object(r["g"])("img",{src:i.preview.dataURL},null,8,["src"]),Object(r["g"])("div",H,[Object(r["f"])(Object(r["z"])(i.preview.name)+" ",1),i.preview?(Object(r["q"])(),Object(r["d"])("button",{key:0,onClick:t[2]||(t[2]=Object(r["F"])((function(){return o.clear&&o.clear.apply(o,arguments)}),["prevent"]))},"Clear")):Object(r["e"])("",!0)])])):(Object(r["q"])(),Object(r["d"])("div",K," Choose File "))],10,["for"])}var W={props:{modelValue:null,field:Object},emits:["update:modelValue"],data:function(){return{preview:null,original:this.modelValue}},computed:{css:function(){var e,t;return[null===(e=this.field)||void 0===e||null===(t=e.ui)||void 0===t?void 0:t.css,"ur-file"]}},methods:{clear:function(){this.$refs.input.value=null,this.preview=null},onChange:function(){var e=this,t=this.$refs.input.files[0],n=new FileReader;n.addEventListener("load",(function(){e.preview={dataURL:n.result,name:t.name},e.$emit("update:modelValue",e.preview)}),!1),t&&n.readAsDataURL(t)}}};W.render=Q;var X=W;function ee(e,t,n,a,i,o){var c=Object(r["w"])("unrest-field");return Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(o.children,(function(e){return Object(r["q"])(),Object(r["d"])(c,{key:e.id,field:e,modelValue:n.modelValue[e.name],"onUpdate:modelValue":function(t){return n.modelValue[e.name]=t}},null,8,["field","modelValue","onUpdate:modelValue"])})),128)}n("d81d");var te={inject:["ur_form"],props:{field:Object,modelValue:Object},computed:{children:function(){var e=this;return Object.entries(this.field.properties).map((function(t){var n=Object(d["a"])(t,2),r=n[0],a=n[1];return E(r,a,e.ur_form,e.field.__path)}))}}};te.render=ee;var ne=te,re={class:"input-group"};function ae(e,t,n,a,i,o){return Object(r["q"])(),Object(r["d"])("div",re,[Object(r["g"])("input",Object(r["l"])(e.inputAttrs,{onInput:t[1]||(t[1]=function(){return e.onChange&&e.onChange.apply(e,arguments)}),class:"form-control",type:o.type}),null,16,["type"]),Object(r["g"])("i",{class:o.iconClass,onClick:t[2]||(t[2]=function(e){return i.show_password=!i.show_password})},null,2)])}function ie(e,t,n,a,i,o){return Object(r["q"])(),Object(r["d"])("input",Object(r["l"])(o.inputAttrs,{onInput:t[1]||(t[1]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),class:"form-control"}),null,16)}n("a9e3");var oe=n("88bc"),ce=n.n(oe),ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"number"===t.type?""===e?NaN:Number(e):e},se={props:{modelValue:null,field:Object},emits:["update:modelValue"],data:function(){return{showError:!1}},computed:{inputAttrs:function(){var e=ce()(this.field,["name","disabled","placeholder","id"]);return e.value=this.modelValue,e.type=this.field.ui.type,e.class="form-control",e}},methods:{onChange:function(e){var t=ue(e.target.value,this.field);"number"===this.field.type&&isNaN(t)||this.$emit("update:modelValue",t)}}};se.render=ie;var le=se,de={mixins:[le],data:function(){return{show_password:!1}},computed:{iconClass:function(){return"input-group-append cursor-pointer fa fa-eye".concat(this.show_password?"-slash":"")},type:function(){return this.show_password?"text":"password"}}};de.render=ae;var pe=de,fe={class:"ur-range"},be={class:"ur-range__value"};function me(e,t,n,a,i,o){return Object(r["q"])(),Object(r["d"])("div",fe,[Object(r["g"])("input",Object(r["l"])({type:"range"},o.inputAttrs,{onInput:t[1]||(t[1]=function(){return o.change&&o.change.apply(o,arguments)}),onChange:t[2]||(t[2]=function(){return o.change&&o.change.apply(o,arguments)}),value:n.modelValue}),null,16,["value"]),Object(r["g"])("div",be,Object(r["z"])(n.modelValue),1)])}var he={props:{field:Object,modelValue:Number},emits:["update:modelValue"],computed:{inputAttrs:function(){return ce()(this.field.ui,["min","max","step"])}},methods:{change:function(e){this.$emit("update:modelValue",Number(e.target.value))}}};he.render=me;var je=he;function Oe(e,t,n,a,i,o){return Object(r["q"])(),Object(r["d"])("select",{onInput:t[1]||(t[1]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),value:n.modelValue,id:n.field.id,class:"form-control"},[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(o.choices,(function(e){return Object(r["q"])(),Object(r["d"])("option",{value:e.value,key:e.name},Object(r["z"])(e.name),9,["value"])})),128))],40,["value","id"])}var ve={props:{modelValue:null,field:Object,form:Object},emits:["update:modelValue"],computed:{choices:function(){if(this.field.getChoices)return this.field.getChoices();var e=this.field.enumNames||this.field.enum;return this.field.enum.map((function(t,n){return{value:t,name:e[n]}}))}},methods:{onChange:function(e){this.$emit("update:modelValue",e.target.value)}}};ve.render=Oe;var ge=ve,ye={Form:U,Field:M,Checkbox:B,Image:X,Object:ne,Range:je,Select:ge,Text:le,Password:pe},_e="Unrest",we={install:function(e){Object.entries(ye).forEach((function(t){var n=Object(d["a"])(t,2),r=n[0],a=n[1];return e.component(_e+r,a)}))}},qe=Object(j["a"])(Object(j["a"])({prepField:E,parseLazySchema:F,plugin:we},ye),{},{install:function(e){console.warn("DEPRACATED: Use UrForm.plugin"),e.use(we)}}),Ve=(n("4945"),n("2532"),{class:"playground-form"}),xe={class:"playground-form__schema"},ke=Object(r["g"])("div",null,"Form schema",-1),Ce={key:0,class:"alert alert-danger"},ze={class:"playground-form__form"},Se=Object(r["g"])("div",null,"Form",-1),Fe={key:0,class:"playground-result"},Ne=Object(r["g"])("div",null,"Form State",-1),Ae={class:"playground-result__body"},Ee={key:1,class:"playground-result"},Ie=Object(r["g"])("div",null,"Resulting schema",-1),Ue={class:"playground-form"},Pe={class:"playgroud-result"},$e=Object(r["g"])("div",null,"Events",-1),Le={key:0,class:"pill pill-primary"};function Je(e,t,n,a,i,o){var c=Object(r["w"])("unrest-form");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",Ve,[Object(r["g"])("div",xe,[ke,i.error?(Object(r["q"])(),Object(r["d"])("div",Ce,Object(r["z"])(i.error.message),1)):Object(r["e"])("",!0),Object(r["E"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.text_schema=e})},null,512),[[r["B"],i.text_schema]])]),Object(r["g"])("div",ze,[Se,Object(r["g"])(c,Object(r["l"])(o.form_attrs,{onInput:o.input,onChange:o.change,onSubmit:o.submit}),null,16,["onInput","onChange","onSubmit"])]),n.panels.includes("state")?(Object(r["q"])(),Object(r["d"])("div",Fe,[Ne,Object(r["g"])("div",Ae,Object(r["z"])(i.text_state),1)])):Object(r["e"])("",!0),n.panels.includes("schema")?(Object(r["q"])(),Object(r["d"])("div",Ee,[Ie,Object(r["g"])("pre",null,Object(r["z"])(o.parsed_schema),1)])):Object(r["e"])("",!0)]),Object(r["g"])("div",Ue,[Object(r["g"])("div",Pe,[$e,Object(r["g"])("ul",null,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(i.events,(function(e,t){return Object(r["q"])(),Object(r["d"])("li",{key:t,class:"playground-log__event"},[Object(r["g"])("div",null,Object(r["z"])(e.message),1),e.count?(Object(r["q"])(),Object(r["d"])("div",Le,Object(r["z"])(e.count),1)):Object(r["e"])("",!0)])})),128))])])])],64)}var Re={props:{schema:Object,state:{type:Object,default:function(){return{}}},panels:{type:Array,default:function(){return["editor","form","state"]}}},data:function(){var e=JSON.stringify(this.schema,null,4);return{text_schema:e,current_schema:this.schema,error:null,text_state:null,events:[]}},computed:{parsed_schema:function(){return JSON.stringify(qe.prepField("__root",this.current_schema),null,4)},form_attrs:function(){var e=this.current_schema,t=this.state;return{schema:e,state:t}}},mounted:function(){this.sync()},watch:{text_schema:"sync"},methods:{log:function(e){var t=this.events[this.events.length-1];(null===t||void 0===t?void 0:t.message)===e.message?t.count=(t.count||0)+1:this.events.push(e),this.sync()},input:function(e,t){this.log({type:"input",message:"input@".concat(t.target.name)})},change:function(e,t){this.log({type:"change",message:"change@".concat(t.target.name)})},submit:function(){this.log({type:"submit",message:"submit"})},sync:function(){this.error=null;try{var e=JSON.parse(this.text_schema);qe.prepField("__root",e),this.current_schema=e}catch(t){window.E=t,this.error=t}this.text_state=JSON.stringify(this.state,null,2)}}};Re.render=Je;var Me=Re,Te=(n("adcf"),n("6c02"));function De(e,t,n,a,i,o){var c=Object(r["w"])("playground-form");return Object(r["q"])(),Object(r["d"])(c,{schema:i.schema,panels:["editor","form","state","schema"]},null,8,["schema"])}var Be={type:"object",required:["name"],properties:{name:{type:"text"},age:{type:"number"},color:{type:"text",enum:["red","green","blue"]},colorPicker:{type:"text",format:"color"},newsletter:{type:"boolean",title:"Sign up for our newsletter"},avatar:{type:"image",title:"Avatar",default:"https://i.imgur.com/YSPe6yA.jpg"},hidden:{type:"string",title:"Shouldn't see me",default:"Foo",ui:{tagName:"unrest-hidden"}},password:{type:"string",default:"I am a password field"},password_hint:{type:"string",default:"I am not a password field",ui:{type:"text"}},address:{type:"object",required:["street"],properties:{street:{type:"string"},city:{type:"string"}}}}},Ye={type:"lazy",name:"Unknown",quantity:1,accept_terms_and_conditions:!0},Ze={type:"lazy",last_name:{type:"string",description:"title=undefined will guess a title from name"},first_name:{type:"string",title:null,description:"title=null will show no title"},terms_and_conditions:!0,password:{type:"string",format:"password"}},Ge={basics:Be,lazy:Ye,misc:Ze},He={data:function(){return{schema:Ge.basics}}};He.render=De;var Ke=He,Qe=Object(r["g"])("p",null,[Object(r["f"])(" An field with "),Object(r["g"])("code",null,"type='lazy'"),Object(r["f"])(" will be interpreted as a map of defaults. This is useful for rapid prototyping, but other than unsligifying the field name for title, no further configuration can be done. ")],-1);function We(e,t,n,a,i,o){var c=Object(r["w"])("playground-form");return Object(r["q"])(),Object(r["d"])("div",null,[Qe,Object(r["g"])(c,{schema:i.schema,panels:["editor","schema","form"]},null,8,["schema"])])}var Xe={data:function(){return{schema:Ge.lazy}}};Xe.render=We;var et=Xe,tt=Object(r["g"])("p",null," Just me testing out features. Please ignore. ",-1);function nt(e,t,n,a,i,o){var c=Object(r["w"])("playground-form");return Object(r["q"])(),Object(r["d"])("div",null,[tt,Object(r["g"])(c,{schema:i.schema,panels:["editor","form","state","schema"]},null,8,["schema"])])}var rt={data:function(){return{schema:Ge.misc}}};rt.render=nt;var at=rt,it=Object(Te["b"])(),ot=[{path:"/",component:Ke},{path:"/lazy",component:et},{path:"/misc",component:at}],ct=Object(Te["a"])({history:it,routes:ot}),ut=Object(r["c"])(h);ut.use(ct),ut.use(qe.plugin),ut.component("PlaygroundForm",Me),ut.mount("#app")},adcf:function(e,t,n){}});
//# sourceMappingURL=app.8fbd7e24.js.map