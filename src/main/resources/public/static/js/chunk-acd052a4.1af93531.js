(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acd052a4"],{"316f":function(t,e,a){"use strict";var o=a("d5bc"),r=a.n(o);r.a},b569:function(t,e,a){"use strict";var o=a("e7f3"),r=a.n(o);r.a},cbf4:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container"},[t._m(0),t._v(" "),a("div",{staticClass:"editor-container"},[a("json-editor",{ref:"jsonEditor",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[t._v("\n    Json-Editor is base on\n    "),a("a",{attrs:{href:"https://github.com/codemirror/CodeMirror",target:"_blank"}},[t._v("CodeMirrorr")]),t._v(". Lint\n    base on\n    "),a("a",{attrs:{href:"https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js",target:"_blank"}},[t._v("json-lint")]),t._v(".\n  ")])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"auto",width:"100%",position:"relative"}},[a("div",{staticClass:"json-editor"},[a("textarea",{ref:"textarea"})]),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.jsonFormat}},[t._v("格式化")])],1)])},s=[],i=a("7618"),l=a("56b3"),d=a.n(l);a("0dd0"),a("a7be"),a("acdf"),a("f9d4"),a("8822"),a("d2de");a("ae67");var m={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(t){var e=this.jsonEditor.getValue();t!==e&&this.jsonEditor.setValue(JSON.stringify(this.value,null,2))}},mounted:function(){var t=this;this.jsonEditor=d.a.fromTextArea(this.$refs.textarea,{mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"default",lint:!0,lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0}),this.jsonEditor.setValue(JSON.stringify(this.value,null,2)),this.jsonEditor.on("change",(function(e){t.$emit("changed",e.getValue()),t.$emit("input",e.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()},jsonFormat:function(){"object"!==Object(i["a"])(this.value)&&this.jsonEditor.setValue(JSON.stringify(JSON.parse(this.value),null,2))}}},u=m,c=(a("b569"),a("2877")),f=Object(c["a"])(u,n,s,!1,null,"02465315",null),b=f.exports,p='[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]',y={name:"JsonEditorDemo",components:{JsonEditor:b},data:function(){return{value:JSON.parse(p)}}},v=y,h=(a("316f"),Object(c["a"])(v,o,r,!1,null,"41e5b22c",null));e["default"]=h.exports},d5bc:function(t,e,a){},e7f3:function(t,e,a){}}]);