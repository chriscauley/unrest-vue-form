var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))__hasOwnProp.call(t,r)&&__defNormalProp(e,r,t[r]);if(__getOwnPropSymbols)for(var r of __getOwnPropSymbols(t))__propIsEnum.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t)),__objRest=(e,t)=>{var r={};for(var o in e)__hasOwnProp.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&__getOwnPropSymbols)for(var o of __getOwnPropSymbols(e))t.indexOf(o)<0&&__propIsEnum.call(e,o)&&(r[o]=e[o]);return r};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue"),require("jsonschema")):"function"==typeof define&&define.amd?define(["vue","jsonschema"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["@unrest/form"]=t(e.Vue,e.jsonschema)}(this,(function(e,t){"use strict";const r=e=>{const t={};return Object.entries(e).forEach((([e,o])=>{if(null==o||""===o)return;if(o.constructor!==Object)return void(t[e]=o);const n=r(o);Object.keys(n).length>0&&(t[e]=n)})),t};const o=(e,t)=>{if("object"===t.type)return e=e||{},Object.entries(t.properties).forEach((([t,r])=>{e[t]=o(e[t],r)})),e;const r=e||t.default;return["integer","number"].includes(t.type)?isNaN(Number(r))?r:Number(r):r};var n=e=>(e=e.replace(/([A-Z])/g," $1").toLowerCase().replace(/_/g," "))[0].toUpperCase()+e.slice(1);const l=["number","string","boolean"],a=e=>{if(null==e)return{};for(let t=0;t<l.length;t++)if(typeof e===l[t])return{default:e,type:l[t]};if(Array.isArray(e))return{type:"array",default:e,items:a(e[0])};if("lazy"===e.type){const t={};return Object.entries(e).forEach((([e,r])=>t[e]=a(r))),delete t.type,{type:"object",properties:t}}if(e.type)return e;throw"Unrecognized schema object for parseLazySchema"},i=e=>"object"===e.type?"unrest-object":e.enum||e.getChoices?"unrest-select":"boolean"===e.type?"unrest-checkbox":"image"===e.type?"unrest-image":"color"===e.format?"unrest-color":"password"===e.format?"unrest-password":"HiddenInput"===e.__widget?"unrest-hidden":"unrest-text";var s=(e,t,{ui:r={}}={},o=[])=>{var l=__objRest(t,[]);return"lazy"===l.type&&(l=a(l)),l.name=e,l.id=`id__${l.name}`,l.ui=((e,t)=>{const r={type:"text",tagName:i(e)};return"number"===e.type&&(r.type="number"),"password"===e.format&&(r.type="password"),"email"===e.format&&(r.type="email"),Object.assign(r,t[e.name],e.ui)})(l,r),void 0===l.title&&(l.title=n(l.name)),l.__path=o.slice(),"__root"!==e&&l.__path.push(l.name),l};const c={provide(){return{ur_form:this}},props:{schema:Object,ui:Object,state:{type:Object,default:()=>e.reactive({})},onError:Function,onSubmit:Function,onChange:Function,onInput:Function,errors:Object,focus:{type:Boolean,default:()=>!0},onCancel:Function},emits:["error"],data:()=>({internal_errors:null,loading:!1}),computed:{computed_errors(){const e=__spreadValues(__spreadValues({},this.errors),this.internal_errors);return e.__all__&&(e.__root=e.__all__),e.__root&&!Array.isArray(e.__root)&&(e.__root=[e.__root]),e},prepped_schema(){return s("__root",this.schema)}},beforeMount(){o(this.state,this.prepped_schema)},mounted(){var e;this.focus&&(null==(e=this.$el.querySelector("input"))||e.focus())},methods:{setErrors(e){this.internal_errors=e,e&&this.$emit("error",e)},handleError(e){var t,r,o,n;throw this.loading=!1,e.message&&this.setErrors({__root:e.message||e}),(null==(r=null==(t=e.response)?void 0:t.data)?void 0:r.errors)&&this.setErrors(null==(n=null==(o=e.response)?void 0:o.data)?void 0:n.errors),e},change(e){var t;null==(t=this.onChange)||t.call(this,this.state,e)},input(e){var t;null==(t=this.onInput)||t.call(this,this.state,e)},submit(e){var o;if(!this.loading){if(this.setErrors(((e,o)=>{const n=t.validate(r(e),o);if(!n.errors.length)return null;const l={};return n.errors.forEach((({path:e,argument:t,message:r,name:o})=>{e=[...e,t],l[e.join(".")]="required"===o?"This field is required.":r})),l})(this.state,this.prepped_schema)),this.internal_errors)return console.error(this.state),void console.error(this.internal_errors);try{this.loading=!0,Promise.resolve(null==(o=this.onSubmit)?void 0:o.call(this,this.state,e)).then((e=>(this.loading=!1,e))).catch(this.handleError)}catch(n){this.handleError(n)}}}}},u={class:"ur-form__actions"},d=e.createVNode("button",{type:"submit",class:"btn -primary"},"Submit",-1);c.render=function(t,r,o,n,l,a){var i;const s=e.resolveComponent("unrest-field");return e.openBlock(),e.createBlock("form",{onSubmit:r[3]||(r[3]=e.withModifiers(((...e)=>a.submit&&a.submit(...e)),["prevent"])),class:["ur-form",t.loading&&"-loading"]},[e.createVNode(s,{modelValue:o.state,"onUpdate:modelValue":r[1]||(r[1]=e=>o.state=e),field:a.prepped_schema,key:a.prepped_schema.id,onChange:a.change,onInput:a.input},null,8,["modelValue","field","onChange","onInput"]),(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(null==(i=a.computed_errors)?void 0:i.__root,((t,r)=>(e.openBlock(),e.createBlock("div",{key:r,class:"form-error"},e.toDisplayString(t.message||t),1)))),128)),e.createVNode("div",u,[e.renderSlot(t.$slots,"actions",{},(()=>[o.onCancel?(e.openBlock(),e.createBlock("div",{key:0,type:"cancel",class:"btn -secondary",onClick:r[2]||(r[2]=(...e)=>o.onCancel&&o.onCancel(...e))},"Cancel")):e.createCommentVNode("",!0),d,e.renderSlot(t.$slots,"extra_actions")]))])],34)};const p={inject:["ur_form"],props:{field:Object,form:Object,modelValue:null},emits:["update:modelValue"],computed:{error(){var e;let t=null==(e=this.ur_form.internal_errors)?void 0:e[this.field.__path.join(".")];return Array.isArray(t)&&(t=t[0]),(null==t?void 0:t.message)&&(t=t.message),t},css(){return{root:[`form-group form-group__${this.field.name}`,{"-error":this.error}]}}},methods:{showLabel:e=>e.title&&"__root"!==e.name&&!["unrest-checkbox"].includes(e.ui.tagName)}},m={class:"input-wrapper"},h={key:1,class:"form-error"},f={key:2,class:"description"};p.render=function(t,r,o,n,l,a){return"unrest-hidden"!==o.field.ui.tagName?(e.openBlock(),e.createBlock("div",{key:0,class:a.css.root},[a.showLabel(o.field)?(e.openBlock(),e.createBlock("label",{key:0,for:o.field.id},e.toDisplayString(o.field.title),9,["for"])):e.createCommentVNode("",!0),e.createVNode("div",m,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.field.ui.tagName),{field:o.field,modelValue:o.modelValue,"onUpdate:modelValue":r[1]||(r[1]=e=>t.$emit("update:modelValue",e))},null,8,["field","modelValue"]))]),a.error?(e.openBlock(),e.createBlock("div",h,e.toDisplayString(a.error),1)):o.field.description?(e.openBlock(),e.createBlock("div",f,e.toDisplayString(o.field.description),1)):e.createCommentVNode("",!0)],2)):e.createCommentVNode("",!0)};const g={props:{modelValue:null,field:Object},emits:["update:modelValue"],computed:{mixed(){return"mixed"===this.modelValue},css(){const{mixed:e}=this,{disabled:t}=this.field;return[this.field.ui.css,"ur-checkbox -"+this.icon,{"-mixed":e,"-disabled":t}]},icon(){return this.mixed?"indeterminate":this.modelValue?"checked":"unchecked"}},methods:{onChange(){this.field.disabled||this.$emit("update:modelValue",!this.modelValue)}}};g.render=function(t,r,o,n,l,a){return e.openBlock(),e.createBlock("label",{class:a.css},[e.createVNode("input",{type:"checkbox",id:o.field.id,checked:o.modelValue,onInput:r[1]||(r[1]=(...e)=>a.onChange&&a.onChange(...e)),name:o.field.name},null,40,["id","checked","name"]),e.createTextVNode(" "+e.toDisplayString(o.field.title),1)],2)};var _=e=>{let t;if(e.getChoices)t=e.getChoices();else{const r=e.enumNames||e.enum;t=e.enum.map(((e,t)=>({value:e,name:r[t]})))}return e.placeholder&&t.unshift({name:e.placeholder,value:""}),t};const y={props:{modelValue:null,field:Object},emits:["update:modelValue"],computed:{choices(){const e=_(this.field),{disabled:t}=this.field;return e.forEach((e=>{var r;e.checked=null==(r=this.modelValue)?void 0:r.includes(e.value),e.class=["ur-checkbox",e.checked?"-checked":"-unchecked",t&&"-disabled"]})),e}},methods:{change(){this.field.disabled||this.$emit("update:modelValue",this.choices.filter((e=>e.checked)))}}};y.render=function(t,r,o,n,l,a){return e.openBlock(),e.createBlock("div",null,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.choices,((r,n)=>(e.openBlock(),e.createBlock("label",{class:r.class,key:n},[e.createVNode("input",{type:"checkbox",checked:t.isChecked[r.value],onInput:()=>a.change(r.value),name:r.name},null,40,["checked","onInput","name"]),e.createTextVNode(" "+e.toDisplayString(o.field.title),1)],2)))),128))])};const v={props:{modelValue:null,field:Object},emits:["update:modelValue"],data(){return{original:this.modelValue}},computed:{name(){var e,t,r;return(null==(e=this.modelValue)?void 0:e.name)||(null==(r=null==(t=this.modelValue)?void 0:t.split)?void 0:r.call(t,"/").pop())},css(){var e,t;return[null==(t=null==(e=this.field)?void 0:e.ui)?void 0:t.css,"ur-file"]},src(){var e;return(null==(e=this.modelValue)?void 0:e.dataURL)||this.modelValue},required:()=>!1},methods:{set(e){this.$emit("update:modelValue",e);const t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!0),this.$el.dispatchEvent(t)},onChange(e){const t=this.$refs.input.files[0];if(!t)return;const r=new FileReader;r.addEventListener("load",(()=>{const o={dataURL:r.result,name:t.name};this.$emit("update:modelValue",o),this.$refs.input.value="",this.$el.dispatchEvent(e)}),!1),r.readAsDataURL(t)}}},b={class:"name"},k=e.createVNode("div",{class:"btn -primary"}," Choose File ",-1);v.render=function(t,r,o,n,l,a){return e.openBlock(),e.createBlock("label",{for:o.field.id,class:a.css},[e.createVNode("input",{style:{display:"none"},type:"file",id:o.field.id,onChange:r[1]||(r[1]=e.withModifiers(((...e)=>a.onChange&&a.onChange(...e)),["stop"])),ref:"input"},null,40,["id"]),e.createVNode("div",null,[o.modelValue?(e.openBlock(),e.createBlock("img",{key:0,src:a.src},null,8,["src"])):e.createCommentVNode("",!0)]),e.createVNode("div",null,[e.createVNode("div",b,e.toDisplayString(a.name),1),l.original&&l.original!==o.modelValue?(e.openBlock(),e.createBlock("div",{key:0,class:"fa fa-undo cursor-pointer",onClick:r[2]||(r[2]=e.withModifiers((e=>a.set(l.original)),["prevent"])),title:"Revert to original value",role:"button"})):e.createCommentVNode("",!0),a.src&&!a.required?(e.openBlock(),e.createBlock("div",{key:1,class:"fa fa-trash",onClick:r[3]||(r[3]=e=>a.set(null))})):e.createCommentVNode("",!0),k])],10,["for"])};const V={inject:["ur_form"],props:{field:Object,modelValue:Object},computed:{children(){return Object.entries(this.field.properties).map((([e,t])=>s(e,t,this.ur_form,this.field.__path)))}}};V.render=function(t,r,o,n,l,a){const i=e.resolveComponent("unrest-field");return e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.children,(t=>(e.openBlock(),e.createBlock(i,{key:t.id,field:t,modelValue:o.modelValue[t.name],"onUpdate:modelValue":e=>o.modelValue[t.name]=e},null,8,["field","modelValue","onUpdate:modelValue"])))),128)};var j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},w=9007199254740991,C="[object Arguments]",B="[object Function]",O="[object GeneratorFunction]",N="[object Symbol]",x="object"==typeof j&&j&&j.Object===Object&&j,P="object"==typeof self&&self&&self.Object===Object&&self,S=x||P||Function("return this")();function E(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function A(e,t){for(var r=-1,o=t.length,n=e.length;++r<o;)e[n+r]=t[r];return e}var D=Object.prototype,I=D.hasOwnProperty,$=D.toString,F=S.Symbol,L=D.propertyIsEnumerable,U=F?F.isConcatSpreadable:void 0,T=Math.max;function M(e,t,r,o,n){var l=-1,a=e.length;for(r||(r=R),n||(n=[]);++l<a;){var i=e[l];t>0&&r(i)?t>1?M(i,t-1,r,o,n):A(n,i):o||(n[n.length]=i)}return n}function R(e){return z(e)||function(e){return function(e){return H(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=w}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?$.call(e):"";return t==B||t==O}(e)}(e)}(e)&&I.call(e,"callee")&&(!L.call(e,"callee")||$.call(e)==C)}(e)||!!(U&&e&&e[U])}function q(e){if("string"==typeof e||function(e){return"symbol"==typeof e||H(e)&&$.call(e)==N}(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}var z=Array.isArray;function H(e){return!!e&&"object"==typeof e}var G,Z,J=(G=function(e,t){return null==e?{}:function(e,t){return function(e,t,r){for(var o=-1,n=t.length,l={};++o<n;){var a=t[o],i=e[a];r(i,a)&&(l[a]=i)}return l}(e=Object(e),t,(function(t,r){return r in e}))}(e,function(e,t){for(var r=-1,o=e?e.length:0,n=Array(o);++r<o;)n[r]=t(e[r],r,e);return n}(M(t,1),q))},Z=T(void 0===Z?G.length-1:Z,0),function(){for(var e=arguments,t=-1,r=T(e.length-Z,0),o=Array(r);++t<r;)o[t]=e[Z+t];t=-1;for(var n=Array(Z+1);++t<Z;)n[t]=e[t];return n[Z]=o,E(G,this,n)}),K=(e,t={})=>"number"===t.type||"integer"===t.type?""===e?NaN:Number(e):"array"===t.type&&"string"==typeof e?e.split(t.delimiter||",").map((e=>e.trim())).filter(Boolean):e;const Q={props:{modelValue:null,field:Object},emits:["update:modelValue"],data(){return{showError:!1,value:this.modelValue}},computed:{inputAttrs(){const e=J(this.field,["name","disabled","placeholder","id","readOnly"]);return e.type=this.field.ui.type,e.class="form-control",e},textarea(){return"Textarea"===this.field.__widget}},watch:{modelValue(){this.value=this.modelValue}},methods:{onChange(){const e=K(this.value,this.field);"number"===this.field.type&&isNaN(e)||this.$emit("update:modelValue",e)}}};Q.render=function(t,r,o,n,l,a){return a.textarea?e.withDirectives((e.openBlock(),e.createBlock("textarea",e.mergeProps({key:0},a.inputAttrs,{"onUpdate:modelValue":r[1]||(r[1]=e=>l.value=e),onInput:r[2]||(r[2]=(...e)=>a.onChange&&a.onChange(...e))}),null,16)),[[e.vModelText,l.value]]):e.withDirectives((e.openBlock(),e.createBlock("input",e.mergeProps({key:1},a.inputAttrs,{"onUpdate:modelValue":r[3]||(r[3]=e=>l.value=e),onInput:r[4]||(r[4]=(...e)=>a.onChange&&a.onChange(...e))}),null,16)),[[e.vModelDynamic,l.value]])};const W={mixins:[Q],data:()=>({show_password:!1}),computed:{iconClass(){return"input-group-append cursor-pointer fa fa-eye"+(this.show_password?"-slash":"")},type(){return this.show_password?"text":"password"}}},X={class:"input-group"};W.render=function(t,r,o,n,l,a){return e.openBlock(),e.createBlock("div",X,[e.withDirectives(e.createVNode("input",e.mergeProps(t.inputAttrs,{onInput:r[1]||(r[1]=(...e)=>t.onChange&&t.onChange(...e)),"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),class:"form-control",type:a.type}),null,16,["type"]),[[e.vModelDynamic,t.value]]),e.createVNode("i",{class:a.iconClass,onClick:r[3]||(r[3]=e=>l.show_password=!l.show_password)},null,2)])};const Y={props:{field:Object,modelValue:Number},emits:["update:modelValue"],computed:{inputAttrs(){return J(this.field.ui,["min","max","step"])}},methods:{change(e){this.$emit("update:modelValue",Number(e.target.value))}}},ee={class:"ur-range"},te={class:"ur-range__value"};Y.render=function(t,r,o,n,l,a){return e.openBlock(),e.createBlock("div",ee,[e.createVNode("input",e.mergeProps({type:"range"},a.inputAttrs,{onInput:r[1]||(r[1]=(...e)=>a.change&&a.change(...e)),onChange:r[2]||(r[2]=(...e)=>a.change&&a.change(...e)),value:o.modelValue}),null,16,["value"]),e.createVNode("div",te,e.toDisplayString(o.modelValue),1)])};const re={props:{modelValue:null,field:Object,form:Object},emits:["update:modelValue"],computed:{choices(){return _(this.field)}},methods:{onChange(e){const t=K(e.target.value,this.field);this.$emit("update:modelValue",t)}}};re.render=function(t,r,o,n,l,a){return e.openBlock(),e.createBlock("select",{onInput:r[1]||(r[1]=(...e)=>a.onChange&&a.onChange(...e)),value:o.modelValue,id:o.field.id,class:"form-control"},[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.choices,(t=>(e.openBlock(),e.createBlock("option",{value:t.value,key:t.name},e.toDisplayString(t.name),9,["value"])))),128))],40,["value","id"])};const oe={Form:c,Field:p,Checkbox:g,Checkboxes:y,Image:v,Object:V,Range:Y,Select:re,Text:Q,Password:W},ne=__spreadProps(__spreadValues({coerce:K,getChoices:_,prepField:s,parseLazySchema:a,plugin:{install:e=>{console.warn("DEPRACATED: app.use(UrForm) is now preferred"),e.use(ne)}}},oe),{install:e=>{Object.entries(oe).forEach((([t,r])=>e.component("Unrest"+t,r)))}});return ne}));
