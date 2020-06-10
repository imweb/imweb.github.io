(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{wr6K:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return u})),t.d(e,"default",(function(){return O}));t("5hJT"),t("75LO"),t("PJhk"),t("W1QL"),t("K/PF"),t("t91x");var o=t("mXGw"),a=t("/FXl"),i=t("TjRS"),l=t("7NgI"),r=t("JZbt"),p=t("ZFoC"),s=(t("t60w"),t("nV0/"));t("1vZD"),t("aD51");function c(){return(c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/checkbox/Checkbox Group.mdx"}});d="Example";var d,b={_frontmatter:u},h=i.a;function O(n){var e,t,d,O,y=n.components,f=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["components"]);return Object(a.b)(h,c({},b,f,{components:y,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"checkbox-group"},"Checkbox Group"),Object(a.b)("h2",{id:"props--methods"},"Props & Methods"),Object(a.b)(p.d,{of:l.a,mdxType:"Props"}),Object(a.b)("h2",{id:"inline-display"},"Inline Display"),Object(a.b)(p.c,{__position:1,__code:"() => {\n  const myOptions = [\n    {\n      label: 'Option 1',\n      id: 1,\n    },\n    {\n      label: 'Option 2',\n      id: 2,\n    },\n    {\n      label: 'Option 3',\n      id: 3,\n    },\n  ]\n  return (\n    <>\n      <CheckGroup options={myOptions} inline={true} />\n      <div style={{ height: '10px' }}></div>\n      <CheckGroup options={myOptions} inline={false} />\n    </>\n  )\n}",__scope:(e={props:f,DefaultLayout:i.a,CheckGroup:l.a,Button:r.a,Playground:p.c,Props:p.d,Icon:s.a},e.DefaultLayout=i.a,e._frontmatter=u,e),mdxType:"Playground"},(function(){var n=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3}];return Object(a.b)(o.Fragment,null,Object(a.b)(l.a,{options:n,inline:!0,mdxType:"CheckGroup"}),Object(a.b)("div",{style:{height:"10px"}}),Object(a.b)(l.a,{options:n,inline:!1,mdxType:"CheckGroup"}))})),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)(p.c,{__position:2,__code:"() => {\n  const myOptions = [\n    {\n      label: 'Default Option',\n      id: 1,\n    },\n    {\n      label: 'Disabled Option',\n      id: 2,\n      disabled: true,\n    },\n    {\n      label: (\n        <span>\n          Option with Icon Label\n          <Icon type=\"weixin\" />\n        </span>\n      ),\n      id: 3,\n    },\n  ]\n  return <CheckGroup options={myOptions} />\n}",__scope:(t={props:f,DefaultLayout:i.a,CheckGroup:l.a,Button:r.a,Playground:p.c,Props:p.d,Icon:s.a},t.DefaultLayout=i.a,t._frontmatter=u,t),mdxType:"Playground"},(function(){var n=[{label:"Default Option",id:1},{label:"Disabled Option",id:2,disabled:!0},{label:Object(a.b)("span",null,"Option with Icon Label",Object(a.b)(s.a,{type:"weixin",mdxType:"Icon"})),id:3}];return Object(a.b)(l.a,{options:n,mdxType:"CheckGroup"})})),Object(a.b)("h2",{id:"values"},"Values"),Object(a.b)(p.c,{__position:3,__code:"() => {\n  const myOptions = [\n    {\n      label: 'Default Option',\n      id: 1,\n    },\n    {\n      label: 'Checked Option',\n      id: 2,\n    },\n    {\n      label: 'Ckecked & Disabled Option',\n      id: 3,\n      disabled: true,\n    },\n  ]\n  const myValues = [2, 3]\n  return <CheckGroup options={myOptions} value={myValues} />\n}",__scope:(d={props:f,DefaultLayout:i.a,CheckGroup:l.a,Button:r.a,Playground:p.c,Props:p.d,Icon:s.a},d.DefaultLayout=i.a,d._frontmatter=u,d),mdxType:"Playground"},(function(){return Object(a.b)(l.a,{options:[{label:"Default Option",id:1},{label:"Checked Option",id:2},{label:"Ckecked & Disabled Option",id:3,disabled:!0}],value:[2,3],mdxType:"CheckGroup"})})),Object(a.b)("h2",{id:"onchange"},"Onchange"),Object(a.b)(p.c,{__position:4,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        values: [],\n      }\n      this.handleChange = this.handleChange.bind(this)\n    }\n    handleChange(ids) {\n      this.setState({\n        values: ids,\n      })\n    }\n    render() {\n      const myOptions = [\n        {\n          label: 'Option 1',\n          id: 1,\n        },\n        {\n          label: 'Option 2',\n          id: 2,\n        },\n        {\n          label: 'Option 3',\n          id: 3,\n        },\n      ]\n      return (\n        <>\n          <CheckGroup\n            options={myOptions}\n            value={this.state.values}\n            onChange={this.handleChange}\n          />\n          <p>\n            The id list you just checked：{JSON.stringify(this.state.values)}\n          </p>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(O={props:f,DefaultLayout:i.a,CheckGroup:l.a,Button:r.a,Playground:p.c,Props:p.d,Icon:s.a},O.DefaultLayout=i.a,O._frontmatter=u,O),mdxType:"Playground"},(function(){var n=function(n){var e,t;function i(e){var t;return(t=n.call(this,e)||this).state={values:[]},t.handleChange=t.handleChange.bind(function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)),t}t=n,(e=i).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var r=i.prototype;return r.handleChange=function(n){this.setState({values:n})},r.render=function(){return Object(a.b)(o.Fragment,null,Object(a.b)(l.a,{options:[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3}],value:this.state.values,onChange:this.handleChange,mdxType:"CheckGroup"}),Object(a.b)("p",null,"The id list you just checked：",JSON.stringify(this.state.values)))},i}(o.Component);return Object(a.b)(n,{mdxType:"Example"})})))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/checkbox/Checkbox Group.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-checkbox-checkbox-group-mdx-dead7c75a5cfa328a45f.js.map