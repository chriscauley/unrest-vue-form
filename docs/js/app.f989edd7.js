(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/unrest-form/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"unrest-app-root"};function o(e,t,n,o,i,c){var s=Object(r["w"])("app-nav"),u=Object(r["w"])("router-view");return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["g"])(s),Object(r["g"])(u)])}var i={class:"navbar"},c=Object(r["g"])("div",{class:"navbar-brand"},"@unrest/vue-form",-1),s={class:"navbar-section flex items-center"},u=Object(r["g"])("a",{href:"http://github.com/chriscauley/unrest-form",class:"btn -light"},[Object(r["g"])("i",{class:"fa fa-github fa-2x"})],-1);function l(e,t,n,a,o,l){var d=Object(r["w"])("router-link");return Object(r["q"])(),Object(r["d"])("header",i,[c,Object(r["g"])("div",s,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(o.tabs,(function(e){return Object(r["q"])(),Object(r["d"])("div",{class:l.css.tab(e),key:e[0]},[Object(r["g"])(d,{to:e[0]},{default:Object(r["C"])((function(){return[Object(r["f"])(Object(r["z"])(e[1]),1)]})),_:2},1032,["to"])],2)})),128)),u])])}var d=n("3835"),p=[["/","Basics"],["/lazy/","Lazy"],["/misc/","Misc"]],b={data:function(){return{tabs:p}},computed:{css:function(){var e=this;return{tab:function(t){var n=Object(d["a"])(t,1),r=n[0];return["btn",r===e.$route.path?"-primary":"-light"]}}}}};b.render=l;var f=b,m={components:{AppNav:f}};m.render=o;var h=m,j=n("5530"),O=(n("159b"),n("4fad"),{class:"ur-form__actions"}),v=Object(r["g"])("button",{type:"submit",class:"btn -primary"},"Submit",-1);function g(e,t,n,a,o,i){var c,s=Object(r["w"])("unrest-field");return Object(r["q"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=Object(r["D"])((function(){return i.submit&&i.submit.apply(i,arguments)}),["prevent"])),class:"ur-form"},[Object(r["g"])(s,{modelValue:n.state,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.state=e}),field:i.prepped_schema,key:i.prepped_schema.id,onChange:i.change,onInput:i.input},null,8,["modelValue","field","onChange","onInput"]),(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(null===(c=i.computed_errors)||void 0===c?void 0:c.__root,(function(e,t){return Object(r["q"])(),Object(r["d"])("div",{key:t,class:"form-error"},Object(r["z"])(e.message),1)})),128)),Object(r["g"])("div",O,[Object(r["v"])(e.$slots,"actions",{},(function(){return[n.onCancel?(Object(r["q"])(),Object(r["d"])("div",{key:0,type:"cancel",class:"btn -secondary",onClick:t[2]||(t[2]=function(){return n.onCancel&&n.onCancel.apply(n,arguments)})},"Cancel")):Object(r["e"])("",!0),v]}))])],32)}var y=n("2909"),_=(n("b64b"),n("b0c0"),n("99af"),n("a15b"),n("a41b")),w=function e(t){var n={};return Object.entries(t).forEach((function(t){var r=Object(d["a"])(t,2),a=r[0],o=r[1];if(void 0!==o&&null!==o&&""!==o)if(o.constructor===Object){var i=e(o);Object.keys(i).length>0&&(n[a]=i)}else n[a]=o})),n},x=function(e,t){var n=Object(_["validate"])(w(e),t);if(!n.errors.length)return null;var r={};return n.errors.forEach((function(e){var t=e.path,n=e.argument,a=e.message,o=e.name;t=[].concat(Object(y["a"])(t),[n]),r[t.join(".")]="required"===o?"This field is required.":a})),r},V=function e(t,n){return"object"===n.type?(t=t||{},Object.entries(n.properties).forEach((function(n){var r=Object(d["a"])(n,2),a=r[0],o=r[1];t[a]=e(t[a],o)})),t):t||n.default},C=V,q=(n("fb6a"),n("ac1f"),n("5319"),{toSentenceCase:function(e){return e=e.replace(/([A-Z])/g," $1").toLowerCase().replace(/_/g," "),e[0].toUpperCase()+e.slice(1)}}),k=n("53ca"),S=["number","string","boolean"],z=function e(t){if(null===t||void 0===t)return{};for(var n=0;n<S.length;n++)if(Object(k["a"])(t)===S[n])return{default:t,type:S[n]};if(Array.isArray(t))return{type:"array",default:t,items:e(t[0])};if("lazy"===t.type){var r={};return Object.entries(t).forEach((function(t){var n=Object(d["a"])(t,2),a=n[0],o=n[1];return r[a]=e(o)})),delete r.type,{type:"object",properties:r}}if(t.type)return t;throw"Unrecognized schema object for parseLazySchema"},N=z,E=function(e){return"object"===e.type?"unrest-object":e.enum?"unrest-select":"boolean"===e.type?"unrest-checkbox":"image"===e.type?"unrest-image":"color"===e.format?"unrest-color":"password"===e.format?"unrest-password":"unrest-text"},F=function(e,t){var n={type:"text",tagName:E(e)};return"number"===e.type&&(n.type="number"),"password"===e.format&&(n.type="password"),Object.assign(n,t[e.name],e.ui)},A=function(e,t){var n=Object.assign({},t),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.ui,o=void 0===a?{}:a,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return"lazy"===n.type&&(n=N(n)),n.name=e,n.id="id__".concat(n.name),n.ui=F(n,o),void 0===n.title&&(n.title=q.toSentenceCase(n.name)),n.__path=i.slice(),"__root"!==e&&n.__path.push(n.name),n},$={provide:function(){return{ur_form:this}},props:{schema:Object,uiSchema:Object,state:{type:Object,default:function(){return Object(r["s"])({})}},onSubmit:Function,onChange:Function,onInput:Function,errors:Object,focus:{type:Boolean,default:function(){return!0}},onCancel:Function},data:function(){return{internal_errors:null}},computed:{computed_errors:function(){var e=Object(j["a"])(Object(j["a"])({},this.errors),this.internal_errors);return e.__all__&&(e.__root=e.__all__),e},prepped_schema:function(){return A("__root",this.schema)}},beforeMount:function(){C(this.state,this.prepped_schema)},mounted:function(){var e;this.focus&&(null===(e=this.$el.querySelector("input"))||void 0===e||e.focus())},methods:{handleError:function(e){var t,n,r,a;(e.message&&(this.internal_errors={__root:e.message||e}),null!==(t=e.response)&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.errors)&&(this.internal_errors=null===(r=e.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.errors);throw e},change:function(e){var t;null===(t=this.onChange)||void 0===t||t.call(this,this.state,e)},input:function(e){var t;null===(t=this.onInput)||void 0===t||t.call(this,this.state,e)},submit:function(e){if(this.internal_errors=x(this.state,this.prepped_schema),!this.internal_errors)try{var t;null===(t=this.onSubmit(this.state,e))||void 0===t||t.catch(this.handleError)}catch(n){this.handleError(n)}}}};$.render=g;var I=$,P=(n("a4d3"),n("e01a"),{class:"input-wrapper"}),U={key:1,class:"form-error"},L={key:2,class:"description"};function J(e,t,n,a,o,i){return"unrest-hidden"!==n.field.ui.tagName?(Object(r["q"])(),Object(r["d"])("div",{key:0,class:i.css.root},[i.showLabel(n.field)?(Object(r["q"])(),Object(r["d"])("label",{key:0,for:n.field.id},Object(r["z"])(n.field.title),9,["for"])):Object(r["e"])("",!0),Object(r["g"])("div",P,[(Object(r["q"])(),Object(r["d"])(Object(r["x"])(n.field.ui.tagName),{field:n.field,modelValue:n.modelValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t)})},null,8,["field","modelValue"]))]),i.error?(Object(r["q"])(),Object(r["d"])("div",U,Object(r["z"])(i.error),1)):n.field.description?(Object(r["q"])(),Object(r["d"])("div",L,Object(r["z"])(n.field.description),1)):Object(r["e"])("",!0)],2)):Object(r["e"])("",!0)}n("caad");var M={inject:["ur_form"],props:{field:Object,form:Object,modelValue:null},emits:["update:modelValue"],computed:{error:function(){var e;return null===(e=this.ur_form.internal_errors)||void 0===e?void 0:e[this.field.__path.join(".")]},css:function(){return{root:["form-group form-group__".concat(this.field.name),{"-error":this.error}]}}},methods:{showLabel:function(e){return e.title&&"__root"!==e.name&&!["unrest-checkbox"].includes(e.ui.tagName)}}};M.render=J;var R=M;function D(e,t,n,a,o,i){return Object(r["q"])(),Object(r["d"])("label",{class:i.css},[Object(r["g"])("input",{type:"checkbox",id:n.field.id,checked:n.modelValue,onInput:t[1]||(t[1]=function(){return i.onChange&&i.onChange.apply(i,arguments)}),name:n.field.name},null,40,["id","checked","name"]),Object(r["f"])(" "+Object(r["z"])(n.field.title),1)],2)}var T={props:{modelValue:null,field:Object},emits:["update:modelValue"],computed:{mixed:function(){return"mixed"===this.modelValue},css:function(){var e=this.mixed,t=this.field.disabled;return[this.field.ui.css,"ur-checkbox -"+this.icon,{"-mixed":e,"-disabled":t}]},icon:function(){return this.mixed?"indeterminate":this.modelValue?"checked":"unchecked"}},methods:{onChange:function(){this.field.disabled||this.$emit("update:modelValue",!this.modelValue)}}};T.render=D;var B=T,H={class:"name"},Y=Object(r["g"])("div",{class:"btn -primary"}," Choose File ",-1);function Z(e,t,n,a,o,i){return Object(r["q"])(),Object(r["d"])("label",{for:n.field.id,class:i.css},[Object(r["g"])("input",{style:{display:"none"},type:"file",id:n.field.id,onChange:t[1]||(t[1]=Object(r["D"])((function(){return i.onChange&&i.onChange.apply(i,arguments)}),["stop"])),ref:"input"},null,40,["id"]),Object(r["g"])("div",null,[n.modelValue?(Object(r["q"])(),Object(r["d"])("img",{key:0,src:i.src},null,8,["src"])):Object(r["e"])("",!0)]),Object(r["g"])("div",null,[Object(r["g"])("div",H,Object(r["z"])(i.name),1),o.original&&o.original!==n.modelValue?(Object(r["q"])(),Object(r["d"])("button",{key:0,class:"fa fa-undo",onClick:t[2]||(t[2]=Object(r["D"])((function(e){return i.set(o.original)}),["prevent"])),title:"Revert to original value"})):Object(r["e"])("",!0),i.src&&!i.required?(Object(r["q"])(),Object(r["d"])("button",{key:1,class:"fa fa-trash",onClick:t[3]||(t[3]=Object(r["D"])((function(e){return i.set(null)}),["prevent"]))})):Object(r["e"])("",!0),Y])],10,["for"])}n("1276");var G={props:{modelValue:null,field:Object},emits:["update:modelValue"],data:function(){return{original:this.modelValue}},computed:{name:function(){var e,t,n;return(null===(e=this.modelValue)||void 0===e?void 0:e.name)||(null===(t=this.modelValue)||void 0===t||null===(n=t.split)||void 0===n?void 0:n.call(t,"/").pop())},css:function(){var e,t;return[null===(e=this.field)||void 0===e||null===(t=e.ui)||void 0===t?void 0:t.css,"ur-file"]},src:function(){var e;return(null===(e=this.modelValue)||void 0===e?void 0:e.dataURL)||this.modelValue},required:function(){return!1}},methods:{set:function(e){this.$emit("update:modelValue",e);var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!0),this.$el.dispatchEvent(t)},onChange:function(e){var t=this,n=this.$refs.input.files[0];if(n){var r=new FileReader;r.addEventListener("load",(function(){var a={dataURL:r.result,name:n.name};t.$emit("update:modelValue",a),t.$refs.input.value="",t.$el.dispatchEvent(e)}),!1),r.readAsDataURL(n)}}}};G.render=Z;var K=G;function Q(e,t,n,a,o,i){var c=Object(r["w"])("unrest-field");return Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(i.children,(function(e){return Object(r["q"])(),Object(r["d"])(c,{key:e.id,field:e,modelValue:n.modelValue[e.name],"onUpdate:modelValue":function(t){return n.modelValue[e.name]=t}},null,8,["field","modelValue","onUpdate:modelValue"])})),128)}n("d81d");var W={inject:["ur_form"],props:{field:Object,modelValue:Object},computed:{children:function(){var e=this;return Object.entries(this.field.properties).map((function(t){var n=Object(d["a"])(t,2),r=n[0],a=n[1];return A(r,a,e.ur_form,e.field.__path)}))}}};W.render=Q;var X=W,ee={class:"input-group"};function te(e,t,n,a,o,i){return Object(r["q"])(),Object(r["d"])("div",ee,[Object(r["g"])("input",Object(r["l"])(e.inputAttrs,{onInput:t[1]||(t[1]=function(){return e.onChange&&e.onChange.apply(e,arguments)}),class:"form-control",type:i.type}),null,16,["type"]),Object(r["g"])("i",{class:i.iconClass,onClick:t[2]||(t[2]=function(e){return o.show_password=!o.show_password})},null,2)])}function ne(e,t,n,a,o,i){return Object(r["q"])(),Object(r["d"])("input",Object(r["l"])(i.inputAttrs,{onInput:t[1]||(t[1]=function(){return i.onChange&&i.onChange.apply(i,arguments)}),class:"form-control"}),null,16)}n("a9e3");var re=n("88bc"),ae=n.n(re),oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"number"===t.type?""===e?NaN:Number(e):e},ie={props:{modelValue:null,field:Object},emits:["update:modelValue"],data:function(){return{showError:!1}},computed:{inputAttrs:function(){var e=ae()(this.field,["name","disabled","placeholder","id"]);return e.value=this.modelValue,e.type=this.field.ui.type,e.class="form-control",e}},methods:{onChange:function(e){var t=oe(e.target.value,this.field);"number"===this.field.type&&isNaN(t)||this.$emit("update:modelValue",t)}}};ie.render=ne;var ce=ie,se={mixins:[ce],data:function(){return{show_password:!1}},computed:{iconClass:function(){return"input-group-append cursor-pointer fa fa-eye".concat(this.show_password?"-slash":"")},type:function(){return this.show_password?"text":"password"}}};se.render=te;var ue=se,le={class:"ur-range"},de={class:"ur-range__value"};function pe(e,t,n,a,o,i){return Object(r["q"])(),Object(r["d"])("div",le,[Object(r["g"])("input",Object(r["l"])({type:"range"},i.inputAttrs,{onInput:t[1]||(t[1]=function(){return i.change&&i.change.apply(i,arguments)}),onChange:t[2]||(t[2]=function(){return i.change&&i.change.apply(i,arguments)}),value:n.modelValue}),null,16,["value"]),Object(r["g"])("div",de,Object(r["z"])(n.modelValue),1)])}var be={props:{field:Object,modelValue:Number},emits:["update:modelValue"],computed:{inputAttrs:function(){return ae()(this.field.ui,["min","max","step"])}},methods:{change:function(e){this.$emit("update:modelValue",Number(e.target.value))}}};be.render=pe;var fe=be;function me(e,t,n,a,o,i){return Object(r["q"])(),Object(r["d"])("select",{onInput:t[1]||(t[1]=function(){return i.onChange&&i.onChange.apply(i,arguments)}),value:n.modelValue,id:n.field.id,class:"form-control"},[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(i.choices,(function(e){return Object(r["q"])(),Object(r["d"])("option",{value:e.value,key:e.name},Object(r["z"])(e.name),9,["value"])})),128))],40,["value","id"])}var he={props:{modelValue:null,field:Object,form:Object},emits:["update:modelValue"],computed:{choices:function(){if(this.field.getChoices)return this.field.getChoices();var e=this.field.enumNames||this.field.enum;return this.field.enum.map((function(t,n){return{value:t,name:e[n]}}))}},methods:{onChange:function(e){this.$emit("update:modelValue",e.target.value)}}};he.render=me;var je=he,Oe={Form:I,Field:R,Checkbox:B,Image:K,Object:X,Range:fe,Select:je,Text:ce,Password:ue},ve="Unrest",ge={install:function(e){Object.entries(Oe).forEach((function(t){var n=Object(d["a"])(t,2),r=n[0],a=n[1];return e.component(ve+r,a)}))}},ye=Object(j["a"])(Object(j["a"])({prepField:A,parseLazySchema:N,plugin:ge},Oe),{},{install:function(e){console.warn("DEPRACATED: Use UrForm.plugin"),e.use(ge)}}),_e=(n("0488"),n("2532"),{class:"playground"}),we={class:"playground__top"},xe={class:"playground__box-wrapper"},Ve={class:"playground__box -schema"},Ce=Object(r["g"])("div",{class:"playground__box-title"},"Form schema",-1),qe={class:"codemirror-wrapper"},ke={ref:"codemirror"},Se={class:"playground__box-wrapper"},ze={class:"playground__box -form"},Ne=Object(r["g"])("div",{class:"playground__box-title"},"Form",-1),Ee={class:"playground__box-content"},Fe={class:"playground__bottom"},Ae={class:"playground__box-wrapper"},$e={key:0,class:"playground__box -state"},Ie=Object(r["g"])("div",{class:"playground__box-title"},"Form State",-1),Pe={class:"playground__box-content -pre"},Ue={class:"playground__box-wrapper"},Le={key:0,class:"playground__box -resulting-schema"},Je=Object(r["g"])("div",{class:"playground__box-title"},"Resulting schema",-1),Me={class:"playground__box-content -pre"},Re={class:"playground__box-wrapper"},De={class:"playground__box -events"},Te=Object(r["g"])("div",{class:"playground__box-title"},"Events",-1),Be={class:"playground__box-content"},He={key:0,class:"pill pill-primary"};function Ye(e,t,n,a,o,i){var c=Object(r["w"])("unrest-form");return Object(r["q"])(),Object(r["d"])("div",_e,[Object(r["g"])("div",we,[Object(r["g"])("div",xe,[Object(r["g"])("div",Ve,[Ce,Object(r["g"])("div",qe,[Object(r["g"])("div",ke,null,512)])])]),Object(r["g"])("div",Se,[Object(r["g"])("div",ze,[Ne,Object(r["g"])("div",Ee,[Object(r["g"])(c,Object(r["l"])(i.form_attrs,{onInput:i.input,onChange:i.change,onSubmit:i.submit}),null,16,["onInput","onChange","onSubmit"])])])])]),Object(r["g"])("div",Fe,[Object(r["g"])("div",Ae,[n.panels.includes("state")?(Object(r["q"])(),Object(r["d"])("div",$e,[Ie,Object(r["g"])("div",Pe,Object(r["z"])(o.text_state),1)])):Object(r["e"])("",!0)]),Object(r["g"])("div",Ue,[n.panels.includes("schema")?(Object(r["q"])(),Object(r["d"])("div",Le,[Je,Object(r["g"])("div",Me,Object(r["z"])(i.parsed_schema),1)])):Object(r["e"])("",!0)]),Object(r["g"])("div",Re,[Object(r["g"])("div",De,[Te,Object(r["g"])("div",Be,[Object(r["g"])("ul",null,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(o.events,(function(e,t){return Object(r["q"])(),Object(r["d"])("li",{key:t,class:"playground__event"},[Object(r["g"])("div",null,Object(r["z"])(e.message),1),e.count?(Object(r["q"])(),Object(r["d"])("div",He,Object(r["z"])(e.count),1)):Object(r["e"])("",!0)])})),128))])])])])])])}var Ze=n("21fd"),Ge=n.n(Ze);window.jsonlint=Ge.a;var Ke=n("56b3"),Qe=n.n(Ke),We=(n("8822"),n("d2de"),n("f9d4"),n("a7be"),n("4946"),n("0dd0"),{props:{schema:Object,state:{type:Object,default:function(){return{}}},panels:{type:Array,default:function(){return["editor","form","state"]}}},data:function(){var e=JSON.stringify(this.schema,null,4);return{text_schema:e,current_schema:this.schema,text_state:null,events:[]}},computed:{parsed_schema:function(){return JSON.stringify(ye.prepField("__root",this.current_schema),null,4)},form_attrs:function(){var e=this.current_schema,t=this.state;return{schema:e,state:t}}},watch:{text_schema:"sync"},mounted:function(){var e=this;this.codemirror=Qe()(this.$refs.codemirror,{mode:"application/json",value:JSON.stringify(this.schema,null,2),theme:"railscasts",gutters:["CodeMirror-lint-markers"],lineNumbers:!0,lint:!0}),this.codemirror.on("change",(function(t){e.text_schema=t.getValue(),e.sync()})),this.sync()},methods:{log:function(e){var t=this.events[this.events.length-1];(null===t||void 0===t?void 0:t.message)===e.message?t.count=(t.count||0)+1:this.events.push(e),this.sync()},input:function(e,t){this.log({type:"input",message:"input@".concat(t.target.name)})},change:function(e,t){this.log({type:"change",message:"change@".concat(t.target.name)})},submit:function(){this.log({type:"submit",message:"submit"})},sync:function(){try{var e=JSON.parse(this.text_schema);ye.prepField("__root",e),this.current_schema=e}catch(t){}this.text_state=JSON.stringify(this.state,null,2)}}});We.render=Ye;var Xe=We,et=(n("adcf"),n("6c02"));function tt(e,t,n,a,o,i){var c=Object(r["w"])("playground-form");return Object(r["q"])(),Object(r["d"])(c,{schema:o.schema,panels:["editor","form","state","schema"]},null,8,["schema"])}var nt={type:"object",required:["name"],properties:{name:{type:"text"},age:{type:"number"},color:{type:"text",enum:["red","green","blue"]},colorPicker:{type:"text",format:"color"},newsletter:{type:"boolean",title:"Sign up for our newsletter"},avatar:{type:"image",title:"Avatar",default:"https://i.imgur.com/YSPe6yA.jpg"},hidden:{type:"string",title:"Shouldn't see me",default:"Foo",ui:{tagName:"unrest-hidden"}},password:{type:"string",default:"I am a password field",format:"password"},password_hint:{type:"string",default:"I am not a password field"},address:{type:"object",required:["street"],properties:{street:{type:"string"},city:{type:"string"}}}}},rt={type:"lazy",name:"Unknown",quantity:1,accept_terms_and_conditions:!0},at={type:"lazy",last_name:{type:"string",description:"title=undefined will guess a title from name"},first_name:{type:"string",title:null,description:"title=null will show no title"},terms_and_conditions:!0,password:{type:"string",format:"password"}},ot={basics:nt,lazy:rt,misc:at},it={data:function(){return{schema:ot.basics}}};it.render=tt;var ct=it,st=Object(r["g"])("p",null,[Object(r["f"])(" An field with "),Object(r["g"])("code",null,"type='lazy'"),Object(r["f"])(" will be interpreted as a map of defaults. This is useful for rapid prototyping, but other than unsligifying the field name for title, no further configuration can be done. ")],-1);function ut(e,t,n,a,o,i){var c=Object(r["w"])("playground-form");return Object(r["q"])(),Object(r["d"])("div",null,[st,Object(r["g"])(c,{schema:o.schema,panels:["editor","schema","form"]},null,8,["schema"])])}var lt={data:function(){return{schema:ot.lazy}}};lt.render=ut;var dt=lt,pt=Object(r["g"])("p",null," Just me testing out features. Please ignore. ",-1);function bt(e,t,n,a,o,i){var c=Object(r["w"])("playground-form");return Object(r["q"])(),Object(r["d"])("div",null,[pt,Object(r["g"])(c,{schema:o.schema,panels:["editor","form","state","schema"]},null,8,["schema"])])}var ft={data:function(){return{schema:ot.misc}}};ft.render=bt;var mt=ft,ht=Object(et["b"])(),jt=[{path:"/",component:ct},{path:"/lazy",component:dt},{path:"/misc",component:mt}],Ot=Object(et["a"])({history:ht,routes:jt}),vt=Object(r["c"])(h);vt.use(Ot),vt.use(ye.plugin),vt.component("PlaygroundForm",Xe),vt.mount("#app")},adcf:function(e,t,n){}});
//# sourceMappingURL=app.f989edd7.js.map