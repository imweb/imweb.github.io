(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{whtp:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return O}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var i=t("mXGw"),u=t("/FXl"),o=t("TjRS"),a=t("Y6US"),r=t("vmk5"),m=(t("KckS"),t("ZFoC"));t("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/menu/Menu.mdx"}});s="Example";var s,d={_frontmatter:l},M=o.a;function O(e){var n,t,s=e.components,O=function(e,n){if(null==e)return{};var t,i,u={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,["components"]);return Object(u.b)(M,c({},d,O,{components:s,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"menu"},"Menu"),Object(u.b)("h2",{id:"props--methods"},"Props & Methods"),Object(u.b)("h3",{id:"menu-1"},"Menu"),Object(u.b)(m.d,{of:a.c,mdxType:"Props"}),Object(u.b)("h3",{id:"menuitem"},"MenuItem"),Object(u.b)(m.d,{of:a.a,mdxType:"Props"}),Object(u.b)("h3",{id:"menuwrapper"},"MenuWrapper"),Object(u.b)(m.d,{of:a.b,mdxType:"Props"}),Object(u.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(u.b)(m.c,{__position:3,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.onClick = this.onClick.bind(this)\n      this.onClickSubMenu = this.onClickSubMenu.bind(this)\n    }\n    onClick(e, itemKey) {\n      alert(`click menu item: ${itemKey}`)\n    }\n    onClickSubMenu(e, itemKey) {\n      alert(`click menu title: ${itemKey}`)\n    }\n    render() {\n      return (\n        <MenuWrapper\n          onClick={this.onClick}\n          onClickSubMenu={this.onClickSubMenu}\n        >\n          <Menu>\n            <MenuItem name="active">Active</MenuItem>\n            <MenuItem name="link">\n              <a\n                href="https://ant.design"\n                target="_blank"\n                rel="noopener noreferrer"\n              >\n                Link\n              </a>\n            </MenuItem>\n            <MenuItem name="disabled" disabled>\n              Disabled\n            </MenuItem>\n            <MenuItem\n              name="submenu"\n              spread={\n                <Menu>\n                  <MenuItem name="Option 1">Option 1</MenuItem>\n                  <MenuItem name="Option 2">Option 2</MenuItem>\n                  <MenuItem name="Option 3">Option 3</MenuItem>\n                  <MenuItem name="Option 4">Option 4</MenuItem>\n                </Menu>\n              }\n            >\n              <span>Submenu</span>\n            </MenuItem>\n          </Menu>\n        </MenuWrapper>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(n={props:O,DefaultLayout:o.a,Menu:a.c,MenuItem:a.a,MenuWrapper:a.b,menuContext:r.a,Playground:m.c,Props:m.d},n.DefaultLayout=o.a,n._frontmatter=l,n),mdxType:"Playground"},(function(){var e=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind(p(t)),t.onClickSubMenu=t.onClickSubMenu.bind(p(t)),t}b(n,e);var t=n.prototype;return t.onClick=function(e,n){alert("click menu item: "+n)},t.onClickSubMenu=function(e,n){alert("click menu title: "+n)},t.render=function(){return Object(u.b)(a.b,{onClick:this.onClick,onClickSubMenu:this.onClickSubMenu,mdxType:"MenuWrapper"},Object(u.b)(a.c,{mdxType:"Menu"},Object(u.b)(a.a,{name:"active",mdxType:"MenuItem"},"Active"),Object(u.b)(a.a,{name:"link",mdxType:"MenuItem"},Object(u.b)("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer"},"Link")),Object(u.b)(a.a,{name:"disabled",disabled:!0,mdxType:"MenuItem"},"Disabled"),Object(u.b)(a.a,{name:"submenu",spread:Object(u.b)(a.c,{mdxType:"Menu"},Object(u.b)(a.a,{name:"Option 1",mdxType:"MenuItem"},"Option 1"),Object(u.b)(a.a,{name:"Option 2",mdxType:"MenuItem"},"Option 2"),Object(u.b)(a.a,{name:"Option 3",mdxType:"MenuItem"},"Option 3"),Object(u.b)(a.a,{name:"Option 4",mdxType:"MenuItem"},"Option 4")),mdxType:"MenuItem"},Object(u.b)("span",null,"Submenu"))))},n}(i.Component);return Object(u.b)(e,{mdxType:"Example"})})),Object(u.b)("h2",{id:"horizontal"},"Horizontal"),Object(u.b)(m.c,{__position:4,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.onClick = this.onClick.bind(this)\n      this.onClickSubMenu = this.onClickSubMenu.bind(this)\n    }\n    onClick(e, itemKey) {\n      alert(`click menu item: ${itemKey}`)\n    }\n    onClickSubMenu(e, itemKey) {\n      alert(`click menu title: ${itemKey}`)\n    }\n    render() {\n      return (\n        <MenuWrapper\n          onClick={this.onClick}\n          onClickSubMenu={this.onClickSubMenu}\n        >\n          <Menu mode="horizontal">\n            <MenuItem name="active">Active</MenuItem>\n            <MenuItem name="link">\n              <a\n                href="https://ant.design"\n                target="_blank"\n                rel="noopener noreferrer"\n              >\n                Link\n              </a>\n            </MenuItem>\n            <MenuItem name="disabled" disabled>\n              Disabled\n            </MenuItem>\n            <MenuItem\n              name="submenu"\n              spread={\n                <Menu>\n                  <MenuItem name="Option 1">Option 1</MenuItem>\n                  <MenuItem name="Option 2">Option 2</MenuItem>\n                  <MenuItem name="Option 3">Option 3</MenuItem>\n                  <MenuItem name="Option 4">Option 4</MenuItem>\n                </Menu>\n              }\n            >\n              <span>Submenu</span>\n            </MenuItem>\n          </Menu>\n        </MenuWrapper>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(t={props:O,DefaultLayout:o.a,Menu:a.c,MenuItem:a.a,MenuWrapper:a.b,menuContext:r.a,Playground:m.c,Props:m.d},t.DefaultLayout=o.a,t._frontmatter=l,t),mdxType:"Playground"},(function(){var e=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind(p(t)),t.onClickSubMenu=t.onClickSubMenu.bind(p(t)),t}b(n,e);var t=n.prototype;return t.onClick=function(e,n){alert("click menu item: "+n)},t.onClickSubMenu=function(e,n){alert("click menu title: "+n)},t.render=function(){return Object(u.b)(a.b,{onClick:this.onClick,onClickSubMenu:this.onClickSubMenu,mdxType:"MenuWrapper"},Object(u.b)(a.c,{mode:"horizontal",mdxType:"Menu"},Object(u.b)(a.a,{name:"active",mdxType:"MenuItem"},"Active"),Object(u.b)(a.a,{name:"link",mdxType:"MenuItem"},Object(u.b)("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer"},"Link")),Object(u.b)(a.a,{name:"disabled",disabled:!0,mdxType:"MenuItem"},"Disabled"),Object(u.b)(a.a,{name:"submenu",spread:Object(u.b)(a.c,{mdxType:"Menu"},Object(u.b)(a.a,{name:"Option 1",mdxType:"MenuItem"},"Option 1"),Object(u.b)(a.a,{name:"Option 2",mdxType:"MenuItem"},"Option 2"),Object(u.b)(a.a,{name:"Option 3",mdxType:"MenuItem"},"Option 3"),Object(u.b)(a.a,{name:"Option 4",mdxType:"MenuItem"},"Option 4")),mdxType:"MenuItem"},Object(u.b)("span",null,"Submenu"))))},n}(i.Component);return Object(u.b)(e,{mdxType:"Example"})})))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/menu/Menu.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-menu-menu-mdx-3ee01f942a022688351d.js.map