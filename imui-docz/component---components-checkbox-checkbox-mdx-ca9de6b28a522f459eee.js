(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Le32:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var s=n("mXGw"),c=n("/FXl"),o=n("TjRS"),i=n("7NgI"),a=n("JZbt"),b=n("ZFoC");n("t60w"),n("aD51");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/checkbox/Checkbox.mdx"}});l="Example";var l,u={_frontmatter:r},k=o.a;function p(e){var t,n,l=e.components,p=function(e,t){if(null==e)return{};var n,s,c={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(c.b)(k,d({},u,p,{components:l,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"checkbox"},"Checkbox"),Object(c.b)("h2",{id:"props--methods"},"Props & Methods"),Object(c.b)(b.d,{of:i.b,mdxType:"Props"}),Object(c.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(c.b)(b.c,{__position:1,__code:"<Checkbox>default</Checkbox>\n<Checkbox checked>checked</Checkbox>\n<Checkbox disabled>disabled</Checkbox>\n<Checkbox disabled checked>\n  disabled & checked\n</Checkbox>",__scope:(t={props:p,DefaultLayout:o.a,Checkbox:i.b,Button:a.a,Playground:b.c,Props:b.d},t.DefaultLayout=o.a,t._frontmatter=r,t),mdxType:"Playground"},Object(c.b)(i.b,{mdxType:"Checkbox"},"default"),Object(c.b)(i.b,{checked:!0,mdxType:"Checkbox"},"checked"),Object(c.b)(i.b,{disabled:!0,mdxType:"Checkbox"},"disabled"),Object(c.b)(i.b,{disabled:!0,checked:!0,mdxType:"Checkbox"},"disabled & checked")),Object(c.b)("h2",{id:"state-control"},"State Control"),Object(c.b)(b.c,{__position:2,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        disabled: false,\n        checked: false,\n      }\n      this.setCheck = this.setCheck.bind(this)\n      this.setUncheck = this.setUncheck.bind(this)\n      this.setDisabled = this.setDisabled.bind(this)\n      this.setUndisabled = this.setUndisabled.bind(this)\n    }\n    setCheck() {\n      this.setState({ checked: true })\n    }\n    setUncheck() {\n      this.setState({ checked: false })\n    }\n    setDisabled() {\n      this.setState({ disabled: true })\n    }\n    setUndisabled() {\n      this.setState({ disabled: false })\n    }\n    render() {\n      return (\n        <>\n          <Checkbox\n            disabled={this.state.disabled}\n            checked={this.state.checked}\n          >\n            Try to control the states by clicking the buttons\n          </Checkbox>\n          <Button onClick={this.setCheck} size="s">\n            check\n          </Button>\n          <Button onClick={this.setUncheck} size="s">\n            uncheck\n          </Button>\n          <Button onClick={this.setDisabled} size="s">\n            disable\n          </Button>\n          <Button onClick={this.setUndisabled} size="s">\n            undisable\n          </Button>\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(n={props:p,DefaultLayout:o.a,Checkbox:i.b,Button:a.a,Playground:b.c,Props:b.d},n.DefaultLayout=o.a,n._frontmatter=r,n),mdxType:"Playground"},(function(){var e=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).state={disabled:!1,checked:!1},n.setCheck=n.setCheck.bind(h(n)),n.setUncheck=n.setUncheck.bind(h(n)),n.setDisabled=n.setDisabled.bind(h(n)),n.setUndisabled=n.setUndisabled.bind(h(n)),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var b=o.prototype;return b.setCheck=function(){this.setState({checked:!0})},b.setUncheck=function(){this.setState({checked:!1})},b.setDisabled=function(){this.setState({disabled:!0})},b.setUndisabled=function(){this.setState({disabled:!1})},b.render=function(){return Object(c.b)(s.Fragment,null,Object(c.b)(i.b,{disabled:this.state.disabled,checked:this.state.checked,mdxType:"Checkbox"},"Try to control the states by clicking the buttons"),Object(c.b)(a.a,{onClick:this.setCheck,size:"s",mdxType:"Button"},"check"),Object(c.b)(a.a,{onClick:this.setUncheck,size:"s",mdxType:"Button"},"uncheck"),Object(c.b)(a.a,{onClick:this.setDisabled,size:"s",mdxType:"Button"},"disable"),Object(c.b)(a.a,{onClick:this.setUndisabled,size:"s",mdxType:"Button"},"undisable"))},o}(s.Component);return Object(c.b)(e,{mdxType:"Example"})})))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/checkbox/Checkbox.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-checkbox-checkbox-mdx-ca9de6b28a522f459eee.js.map