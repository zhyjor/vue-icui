!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{var n=t("object"==typeof exports?require("vue"):e.Vue);for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}("undefined"!=typeof self?self:this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var c=n[i]={i:i,l:!1,exports:{}};return e[i].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=94)}({0:function(e,t){e.exports=function(e,t,n,i,c,r){var o,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),c&&(a._scopeId=c);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},a._ssrRegister=l):i&&(l=i),l){var f=a.functional,d=f?a.render:a.beforeCreate;f?(a._injectStyles=l,a.render=function(e,t){return l.call(t),d(e,t)}):a.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:s,options:a}}},2:function(e,t,n){"use strict";var i=n(3),c=n.n(i),r=n(4);n.d(t,"a",function(){return r.a});c.a.prototype.$isServer},3:function(t,n){t.exports=e},4:function(e,t,n){"use strict";var i=n(5);t.a=function(e){return e.mixins=e.mixins||[],e.components=e.components||{},e.install=e.install||i.a,e}},5:function(e,t,n){"use strict";t.a=function(e){e.component(this.name,this)}},69:function(e,t,n){"use strict";var i=n(2);t.a=Object(i.a)({name:"v-icui-checkbox",props:{tipLabel:{type:String,default:"default",required:!0}},methods:{handleClick:function(e){this.$emit("click",e)}}})},94:function(e,t,n){"use strict";function i(e){n(95)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(69),r=n(96),o=n(0),s=i,u=o(c.a,r.a,!1,s,"data-v-6a48787c",null);t.default=u.exports},95:function(e,t){},96:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icui-cells icui-cells_checkbox"},[n("label",{staticClass:"icui-cell icui-check__label"},[n("div",{staticClass:"icui-cell__hd",on:{click:e.handleClick}},[n("input",{staticClass:"icui-check",attrs:{type:"checkbox",name:"checkbox1",checked:"checked"}}),e._v(" "),n("i",{staticClass:"icui-icon-checked"})]),e._v(" "),n("div",{staticClass:"icui-cell__bd"},[n("p",[e._v(e._s(e.tipLabel))])])])])},c=[],r={render:i,staticRenderFns:c};t.a=r}})});