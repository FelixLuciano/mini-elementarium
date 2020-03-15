(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-453237ef"],{4851:function(t,e,s){},"5bbe":function(t,e,s){"use strict";var l=s("4851"),i=s.n(l);i.a},e56d:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row flex justify-center align-start pb-3 px-2 px-md-0",style:t.pageStyle,attrs:{id:"element-info"}},[s("div",{staticClass:"col-12 h-sm select-text"},[s("div",{staticClass:"l-25"},[s("span",{staticClass:"element-color"},[t._v("[")]),t._v(t._s(t.element.initials)),s("span",{staticClass:"element-color"},[t._v("]")])]),s("div",{staticClass:"mt-2 l-15"},[t._v(t._s(t.elementName)),s("sup",{staticClass:"l-09 c-gray-l2"},[t._v(t._s(t.element.atom))])]),s("div",{staticClass:"l-1 s-italic c-gray-l2"},[t._v(t._s(t.element.latin))]),s("br")]),s("div",{staticClass:"col-12 col-sm-6 px-3 pl-sm-0 pr-sm-3 px-md-0 flex-centralize"},[s("div",{staticClass:"col-fill ratio-square",attrs:{id:"atom-container"}},[s("atomus",{attrs:{electrons:t.electronicConfig}})],1)]),s("div",{staticClass:"col-12 col-sm-6 select-text"},[s("div",{staticClass:"h-xs"},[s("div",{staticClass:"l-23"},[s("span",{staticClass:"element-color"},[t._v("[")]),s("span",[t._v(t._s(t.element.initials))]),s("span",{staticClass:"element-color"},[t._v("]")])]),s("div",{staticClass:"mt-2 l-13"},[t._v(t._s(t.elementName)),s("sup",{staticClass:"l-09 c-gray-l2"},[t._v(t._s(t.element.atom))])]),s("div",{staticClass:"l-08 s-italic c-gray-l2"},[t._v(t._s(t.element.latin))])]),s("div",{staticClass:"mt-4 l-09 l-sm-07 c-gray-l3"},[t._v(t._s(t.$t("views.chemical_info.family")))]),s("div",{staticClass:"mt-1 l-12 l-sm-10 element-color"},[t._v(t._s(t.elementFamily))]),s("div",{staticClass:"mt-4 l-09 l-sm-07 c-gray-l3"},[t._v(t._s(t.$t("views.chemical_info.atomic_mass")))]),s("div",{staticClass:"mt-1 l-12 l-sm-10 element-color"},[t._v(t._s(t.element.mass))]),s("div",{staticClass:"mt-4 l-09 l-sm-07 c-gray-l3"},[t._v(t._s(t.$t("views.chemical_info.electronic_config")))]),s("div",{staticClass:"mt-1 l-12 l-sm-10 element-color"},[t.element.electrons.base?[s("span",[t._v("["+t._s(t.element.electrons.base)+"]"+t._s(" "))])]:t._e(),t._l(t.element.electrons.config,(function(e){return[s("span",[t._v(t._s(e.split(",")[0])),s("span",{staticClass:"l-08"},[t._v(t._s(e.split(",")[1].toUpperCase()))]),s("sup",{staticClass:"l-07"},[t._v(t._s(e.split(",")[2]))]),t._v(t._s(" "))])]}))],2),s("div",{staticClass:"mt-4 pb-2 l-09 l-sm-07 c-gray-l3 no-select"},[t._v(t._s(t.$t("views.chemical_info.see_more_on")))]),s("div",{staticClass:"col-12 spacing-2 no-select"},[s("a",{staticClass:"dark outline icon-left radius-max element-color",attrs:{type:"button",href:t.googleLink,target:"_blank"}},[t._v("Google"),s("google-icon",{staticClass:"button-icon",staticStyle:{"padding-bottom":"2px"},attrs:{fill:"currentColor"}})],1),s("a",{staticClass:"dark outline icon-left radius-max element-color",attrs:{type:"button",href:t.wiki2Link,target:"_blank"}},[t._v("WIKI 2"),s("wiki-icon",{staticClass:"button-icon",staticStyle:{"padding-bottom":"2px"},attrs:{fill:"currentColor"}})],1)])])])},i=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"atomus"}},[t._l(t.layers,(function(e){return s("div",{staticClass:"electrosphere",class:{empty:!e},style:{"--length":e}},t._l(e,(function(t,e){return s("div",{staticClass:"electron",style:{"--index":e}},[s("div")])})),0)})),s("div",{staticClass:"nucleus"})],2)},n=[],c={name:"atomus",props:{electrons:Array},data:function(){return{layers:[]}},methods:{clearLayers:function(){return this.layers=Array(7).fill(0)},ionize:function(){var t,e,s,l,i,a,n,c,r;for(n=this.electrons,c=[],l=0,a=n.length;l<a;l++)s=n[l],[i,r,e]=s.split(/\,/g),i=Number(i)-1,t=Number(e),c.push(this.layers[i]+=t);return c}},watch:{electrons:function(){return this.clearLayers(),this.ionize()}},created:function(){return this.clearLayers(),this.ionize()}},r=c,o=(s("5bbe"),s("2877")),m=Object(o["a"])(r,a,n,!1,null,null,null),u=m.exports,v={functional:!0,render(t,e){const{_c:s,_v:l,data:i,children:a=[]}=e,{class:n,staticClass:c,style:r,staticStyle:o,attrs:m={},...u}=i;return s("svg",{class:[n,c],style:[r,o],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m),...u},a.concat([s("path",{attrs:{d:"M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"}})]))}},h={functional:!0,render(t,e){const{_c:s,_v:l,data:i,children:a=[]}=e,{class:n,staticClass:c,style:r,staticStyle:o,attrs:m={},...u}=i;return s("svg",{class:[n,c],style:[r,o],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m),...u},a.concat([s("path",{attrs:{d:"M14.97 18.95l-2.56-6.03c-1.02 1.99-2.14 4.08-3.1 6.03-.01.01-.47 0-.47 0C7.37 15.5 5.85 12.1 4.37 8.68 4.03 7.84 2.83 6.5 2 6.5v-.45h5.06v.45c-.6 0-1.62.4-1.36 1.05.72 1.54 3.24 7.51 3.93 9.03.47-.94 1.8-3.42 2.37-4.47-.45-.88-1.87-4.18-2.29-5-.32-.54-1.13-.61-1.75-.61 0-.15.01-.25 0-.44l4.46.01v.4c-.61.03-1.18.24-.92.82.6 1.24.95 2.13 1.5 3.28.17-.34 1.07-2.19 1.5-3.16.26-.65-.13-.91-1.21-.91.01-.12.01-.33.01-.43 1.39-.01 3.48-.01 3.85-.02v.42c-.71.03-1.44.41-1.82.99L13.5 11.3c.18.51 1.96 4.46 2.15 4.9l3.85-8.83c-.3-.72-1.16-.87-1.5-.87v-.45l4 .03V6.5c-.88 0-1.43.5-1.75 1.25-.8 1.79-3.25 7.49-4.85 11.2h-.43z"}})]))}},_={name:"element-info",props:{chemicals:{type:Array,default:[]}},computed:{element:function(){var t,e;return e=this.$route.params.selector.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=this.chemicals.find(t=>{var s,l,i,a;return s=t.atom.toString(),a=this.$t("chemicals")[s-1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),i=t.latin.toLowerCase(),l=t.initials.toLowerCase(),e===i||(e===a||(e===l||e===s))}),this.hasElement=!!t,t},elementName:function(){var t;return t=this.element.atom-1,this.$t("chemicals")[t]},elementFamily:function(){var t;return t=this.element.family,this.$t("views.chemical_info.families")[t]},electronicConfig:function(){var t,e,s;e=this.element.electrons.config,t=this.element.electrons.base;while(t)s=this.chemicals.find(e=>e.initials===t),t=s.electrons.base,e=[...s.electrons.config,...e];return e},pageStyle:function(){return{"--color-primary":this.element.color.primary,"--color-secondary":this.element.color.secondary}},googleLink:function(){var t,e;return t=this.$t("views.chemical_info.chemical_element").replace(/\s+/gm,"+"),e=`${t}+${this.elementName}`,`https://www.google.com.br/search?q=${e}`},wiki2Link:function(){var t;return t=this.$i18n.locale.split("-")[0],"pt"===t?`https://pt.wiki2.org/wiki/${this.elementName}`:`https://wiki2.org/${t}/${this.elementName}`}},mounted:function(){if(!this.hasElement)return this.$router.push("/")},components:{atomus:u,"google-icon":v,"wiki-icon":h}},p=_,f=(s("e959"),Object(o["a"])(p,l,i,!1,null,null,null));e["default"]=f.exports},e959:function(t,e,s){"use strict";var l=s("fc28"),i=s.n(l);i.a},fc28:function(t,e,s){}}]);