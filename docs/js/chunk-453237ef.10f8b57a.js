(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-453237ef"],{4851:function(t,e,s){},"5bbe":function(t,e,s){"use strict";var i=s("4851"),l=s.n(i);l.a},e56d:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row flex justify-center align-start pb-3",style:{"--element-color":"var("+t.element.color.secondary+")"},attrs:{id:"element-info"}},[s("div",{staticClass:"col-12 h-sm-a select-text"},[s("div",{staticClass:"l-25"},[s("span",{staticClass:"element-color"},[t._v("[")]),t._v(t._s(t.element.initials)),s("span",{staticClass:"element-color"},[t._v("]")])]),s("div",{staticClass:"l-15"},[t._v(t._s(t.elementName)),s("sup",{staticClass:"l-09 c-gray-l2"},[t._v(t._s(t.element.atom))])]),s("div",{staticClass:"l-1 s-italic c-gray-l2"},[t._v(t._s(t.element.latin))]),s("br")]),s("div",{staticClass:"col-12 col-sm-6 px-3 pl-sm-0 pr-sm-3 px-md-0 flex centralize"},[s("div",{staticClass:"col-fill ratio-square",attrs:{id:"atom-container"}},[s("atomus",{attrs:{electrons:t.element.electrons}})],1)]),s("div",{staticClass:"col-12 col-sm-6 select-text"},[s("div",{staticClass:"h-xs"},[s("div",{staticClass:"l-23"},[s("span",{staticClass:"element-color"},[t._v("[")]),t._v(t._s(t.element.initials)),s("span",{staticClass:"element-color"},[t._v("]")])]),s("div",{staticClass:"l-13"},[t._v(t._s(t.elementName)),s("sup",{staticClass:"l-09 c-gray-l2"},[t._v(t._s(t.element.atom))])]),s("div",{staticClass:"l-08 s-italic c-gray-l2"},[t._v(t._s(t.element.latin))])]),s("br"),s("div",{staticClass:"l-09 l-sm-07 c-gray-l3"},[t._v(t._s(t.$t("views.chemical_info.family")))]),s("div",{staticClass:"l-12 l-sm-10 element-color"},[t._v(t._s(t.elementFamily))]),s("br"),s("div",{staticClass:"l-09 l-sm-07 c-gray-l3"},[t._v(t._s(t.$t("views.chemical_info.atomic_mass")))]),s("div",{staticClass:"l-12 l-sm-10 element-color"},[t._v(t._s(t.element.mass))]),s("br"),s("div",{staticClass:"l-09 l-sm-07 c-gray-l3"},[t._v(t._s(t.$t("views.chemical_info.electronic_config")))]),s("div",{staticClass:"l-12 l-sm-10 element-color"},[t.element.electrons.base?[s("span",[t._v("["+t._s(t.element.electrons.base)+"]"+t._s(" "))])]:t._e(),t._l(t.element.electrons.config,function(e){return[s("span",[t._v(t._s(e.split(",")[0])),s("span",{staticClass:"l-08"},[t._v(t._s(e.split(",")[1].toUpperCase()))]),s("sup",[t._v(t._s(e.split(",")[2]))]),t._v(t._s(" "))])]})],2),s("br",{staticClass:"no-select"}),s("div",{staticClass:"pb-2 l-09 l-sm-07 c-gray-l3 no-select"},[t._v(t._s(t.$t("views.chemical_info.see_more_on")))]),s("a",{staticClass:"mdc-button mdc-button--outlined mr-2",attrs:{href:t.googleLink,target:"_blank"}},[s("google-icon",{staticClass:"mdc-button__icon",staticStyle:{height:"24px"}}),s("span",{staticClass:"mdc-button__label pl-3 pr-2 w-bold"},[t._v("Google")])],1),s("a",{staticClass:"mdc-button mdc-button--outlined mr-2",attrs:{href:t.wiki2Link,target:"_blank"}},[s("wiki-icon",{staticClass:"mdc-button__icon",staticStyle:{height:"24px"}}),s("span",{staticClass:"mdc-button__label pl-3 pr-2 w-bold"},[t._v("WIKI 2")])],1)])])},l=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"atomus"}},[t._l(t.layersLength,function(e){return s("div",{staticClass:"electrosphere",class:{empty:!e},style:{"--length":e}},t._l(e,function(t,e){return s("div",{staticClass:"electron",style:{"--index":e}},[s("div")])}),0)}),s("div",{staticClass:"nucleus"})],2)},n=[],r={name:"atomus",props:{electrons:{type:Object,default:function(){return{base:!1,config:[]}}}},data:function(){return{diagram:[]}},computed:{layersLength:function(){return this.diagram.map(t=>{return t.reduce((t,e)=>{return t+e})})}},methods:{clearDiagram:function(){return this.diagram=new Array(7).fill().map((t,e)=>{var s;return s=4.5-Math.abs(e-3.5),new Array(s).fill(0)})},distributeBase:function(){var t,e,s,i,l,a,n,r,c;if(this.electrons.base){i=0,n=0,t={He:2,Ne:10,Ar:18,Kr:36,Xe:54,Rn:86},s=t[this.electrons.base],a=[];while(s>0){r=i,c=n;while(c>=0&&r<=6)l=2+4*c,e=Math.min(s,l),this.diagram[r][c]=e,s-=e,r++,c--;i===n?a.push(i++):a.push(n++)}return a}},ionize:function(){var t,e,s,i,l,a,n,r;for(a=this.electrons.config,n=[],s=0,l=a.length;s<l;s++)e=a[s],[i,r,t]=e.split(","),i=Number(i)-1,r={s:0,p:1,d:2,f:3}[r],t=Number(t),n.push(this.$set(this.diagram[i],r,t));return n}},watch:{electrons:function(){return this.clearDiagram(),this.distributeBase(),this.ionize()}},created:function(){return this.clearDiagram(),this.distributeBase(),this.ionize()}},c=r,o=(s("5bbe"),s("2877")),m=Object(o["a"])(c,a,n,!1,null,null,null),u=m.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"material-design-icon google-icon",attrs:{"aria-hidden":t.decorative,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}},[s("title",[t._v(t._s(t.title))])])])])},p=[],_=(s("c5f6"),{name:"GoogleIcon",props:{title:{type:String,default:"Google icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),h=_,C=Object(o["a"])(h,d,p,!1,null,null,null),f=C.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"material-design-icon wikipedia-icon",attrs:{"aria-hidden":t.decorative,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M14.97,18.95L12.41,12.92C11.39,14.91 10.27,17 9.31,18.95C9.3,18.96 8.84,18.95 8.84,18.95C7.37,15.5 5.85,12.1 4.37,8.68C4.03,7.84 2.83,6.5 2,6.5C2,6.4 2,6.18 2,6.05H7.06V6.5C6.46,6.5 5.44,6.9 5.7,7.55C6.42,9.09 8.94,15.06 9.63,16.58C10.1,15.64 11.43,13.16 12,12.11C11.55,11.23 10.13,7.93 9.71,7.11C9.39,6.57 8.58,6.5 7.96,6.5C7.96,6.35 7.97,6.25 7.96,6.06L12.42,6.07V6.47C11.81,6.5 11.24,6.71 11.5,7.29C12.1,8.53 12.45,9.42 13,10.57C13.17,10.23 14.07,8.38 14.5,7.41C14.76,6.76 14.37,6.5 13.29,6.5C13.3,6.38 13.3,6.17 13.3,6.07C14.69,6.06 16.78,6.06 17.15,6.05V6.47C16.44,6.5 15.71,6.88 15.33,7.46L13.5,11.3C13.68,11.81 15.46,15.76 15.65,16.2L19.5,7.37C19.2,6.65 18.34,6.5 18,6.5C18,6.37 18,6.2 18,6.05L22,6.08V6.1L22,6.5C21.12,6.5 20.57,7 20.25,7.75C19.45,9.54 17,15.24 15.4,18.95C15.4,18.95 14.97,18.95 14.97,18.95Z"}},[s("title",[t._v(t._s(t.title))])])])])},g=[],b={name:"WikipediaIcon",props:{title:{type:String,default:"Wikipedia icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},w=b,y=Object(o["a"])(w,v,g,!1,null,null,null),$=y.exports,k={name:"element-info",props:{chemicals:{type:Array,default:[]}},computed:{element:function(){var t,e;return e=this.$route.params.selector.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=this.chemicals.find(t=>{var s,i,l,a;return s=t.atom.toString(),a=this.$t("chemicals")[s-1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),l=t.latin.toLowerCase(),i=t.initials.toLowerCase(),e===l||(e===a||(e===i||e===s))}),this.hasElement=!!t,t},elementName:function(){var t;return t=this.element.atom-1,this.$t("chemicals")[t]},elementFamily:function(){var t;return t=this.element.family,this.$t("views.chemical_info.families")[t]},googleLink:function(){var t,e;return t=this.$t("views.chemical_info.chemical_element").replace(/\s+/gm,"+"),e=`${t}+${this.element.name}`,`https://www.google.com.br/search?q=${e}`},wiki2Link:function(){var t;return t=this.$i18n.locale.split("-")[0],"pt"===t?`https://pt.wiki2.org/wiki/${this.elementName}`:`https://wiki2.org/${t}/${this.elementName}`}},mounted:function(){if(!this.hasElement)return this.$router.push("/")},components:{atomus:u,"google-icon":f,"wiki-icon":$}},L=k,x=(s("e959"),Object(o["a"])(L,i,l,!1,null,null,null));e["default"]=x.exports},e959:function(t,e,s){"use strict";var i=s("fc28"),l=s.n(i);l.a},fc28:function(t,e,s){}}]);