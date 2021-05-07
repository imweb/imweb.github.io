(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{p41d:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return l})),n.d(a,"default",(function(){return u}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var t=n("mXGw"),o=n("/FXl"),i=n("TjRS"),d=n("ak8V"),r=(n("QeZO"),n("ZFoC"));n("aD51");function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/radio/Radio.mdx"}});s="Example";var s,c={_frontmatter:l},b=i.a;function u(e){var a,n,s=e.components,u=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(o.b)(b,p({},c,u,{components:s,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"radio"},"Radio"),Object(o.b)("h2",{id:"props--methods"},"Props & Methods"),Object(o.b)("h3",{id:"radio-1"},"Radio"),Object(o.b)(r.d,{of:d.a,mdxType:"Props"}),Object(o.b)("h3",{id:"radiogroup"},"RadioGroup"),Object(o.b)(r.d,{of:d.b,mdxType:"Props"}),Object(o.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(o.b)(r.c,{__position:2,__code:"<Radio value=\"1\">Normal</Radio>\n<span style={{ display: 'inline-block', width: '10px' }}></span>\n<Radio value=\"2\" checked>\n  Checked\n</Radio>\n<span style={{ display: 'inline-block', width: '10px' }}></span>\n<Radio value=\"3\" disabled>\n  Disabled\n</Radio>\n<span style={{ display: 'inline-block', width: '10px' }}></span>\n<Radio value=\"4\" checked disabled>\n  Checked & Disabled\n</Radio>\n<span style={{ display: 'inline-block', width: '10px' }}></span>\n<Radio value=\"5\" checked>\n  Checked & Disabled\n</Radio>",__scope:(a={props:u,DefaultLayout:i.a,Radio:d.a,RadioGroup:d.b,Playground:r.c,Props:r.d},a.DefaultLayout=i.a,a._frontmatter=l,a),mdxType:"Playground"},Object(o.b)(d.a,{value:"1",mdxType:"Radio"},"Normal"),Object(o.b)("span",{style:{display:"inline-block",width:"10px"}}),Object(o.b)(d.a,{value:"2",checked:!0,mdxType:"Radio"},"Checked"),Object(o.b)("span",{style:{display:"inline-block",width:"10px"}}),Object(o.b)(d.a,{value:"3",disabled:!0,mdxType:"Radio"},"Disabled"),Object(o.b)("span",{style:{display:"inline-block",width:"10px"}}),Object(o.b)(d.a,{value:"4",checked:!0,disabled:!0,mdxType:"Radio"},"Checked & Disabled"),Object(o.b)("span",{style:{display:"inline-block",width:"10px"}}),Object(o.b)(d.a,{value:"5",checked:!0,mdxType:"Radio"},"Checked & Disabled")),Object(o.b)("h2",{id:"work-with-radiogroup"},"Work with RadioGroup"),Object(o.b)(r.c,{__position:3,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        value: \'Option 1\',\n      }\n      this.handleChange = this.handleChange.bind(this)\n    }\n    handleChange(value) {\n      this.setState({ value })\n    }\n    render() {\n      return (\n        <>\n          <RadioGroup onChange={this.handleChange} value={this.state.value}>\n            <Radio value="Option 1">Option 1</Radio>\n            <Radio value="Option 2">Option 2</Radio>\n          </RadioGroup>\n          <p>你选的是: {this.state.value}</p>\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(n={props:u,DefaultLayout:i.a,Radio:d.a,RadioGroup:d.b,Playground:r.c,Props:r.d},n.DefaultLayout=i.a,n._frontmatter=l,n),mdxType:"Playground"},(function(){var e=function(e){var a,n;function i(a){var n;return(n=e.call(this,a)||this).state={value:"Option 1"},n.handleChange=n.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(a=i).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var r=i.prototype;return r.handleChange=function(e){this.setState({value:e})},r.render=function(){return Object(o.b)(t.Fragment,null,Object(o.b)(d.b,{onChange:this.handleChange,value:this.state.value,mdxType:"RadioGroup"},Object(o.b)(d.a,{value:"Option 1",mdxType:"Radio"},"Option 1"),Object(o.b)(d.a,{value:"Option 2",mdxType:"Radio"},"Option 2")),Object(o.b)("p",null,"你选的是: ",this.state.value))},i}(t.Component);return Object(o.b)(e,{mdxType:"Example"})})))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/radio/Radio.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-radio-radio-mdx-ccf0648ef46d6eb4ef06.js.map