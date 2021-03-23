(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{tERx:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return p})),n.d(e,"default",(function(){return s}));var o=n("Fcif"),a=n("+I+c"),c=n("mXGw"),l=n("/FXl"),u=n("TjRS"),i=n("ZFoC"),r=n("JZbt"),b=n("nV0/"),p=(n("1vZD"),n("Tq0k"),n("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/button/Button.mdx"}});var y={_frontmatter:p},d=u.a;function s(t){var e,n,s,m,B,x=t.components,O=Object(a.a)(t,["components"]);return Object(l.b)(d,Object(o.a)({},y,O,{components:x,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"button"},"Button"),Object(l.b)("h2",{id:"props--methods"},"Props & Methods"),Object(l.b)(i.d,{of:r.a,mdxType:"Props"}),Object(l.b)("h2",{id:"sizes"},"Sizes"),Object(l.b)(i.c,{__position:1,__code:'<Button size="s">Small</Button>\n<Button>Medium</Button>\n<Button size="l">Large</Button>',__scope:(e={props:O,DefaultLayout:u.a,Playground:i.c,Props:i.d,Button:r.a,Icon:b.a},e.DefaultLayout=u.a,e._frontmatter=p,e),mdxType:"Playground"},Object(l.b)(r.a,{size:"s",mdxType:"Button"},"Small"),Object(l.b)(r.a,{mdxType:"Button"},"Medium"),Object(l.b)(r.a,{size:"l",mdxType:"Button"},"Large")),Object(l.b)("h2",{id:"colors"},"Colors"),Object(l.b)(i.c,{__position:2,__code:'<Button color="default">Default</Button>\n<Button color="primary">Primary</Button>\n<Button color="outline">Outline</Button>\n<Button color="weak">Weak</Button>',__scope:(n={props:O,DefaultLayout:u.a,Playground:i.c,Props:i.d,Button:r.a,Icon:b.a},n.DefaultLayout=u.a,n._frontmatter=p,n),mdxType:"Playground"},Object(l.b)(r.a,{color:"default",mdxType:"Button"},"Default"),Object(l.b)(r.a,{color:"primary",mdxType:"Button"},"Primary"),Object(l.b)(r.a,{color:"outline",mdxType:"Button"},"Outline"),Object(l.b)(r.a,{color:"weak",mdxType:"Button"},"Weak")),Object(l.b)("h2",{id:"disabled"},"Disabled"),Object(l.b)(i.c,{__position:3,__code:'<Button color="default" disabled={true}>\n  No Click\n</Button>\n<Button color="primary" disabled={true}>\n  No Click\n</Button>\n<Button color="outline" disabled={true}>\n  No Click\n</Button>\n<Button color="weak" disabled={true}>\n  No Click\n</Button>',__scope:(s={props:O,DefaultLayout:u.a,Playground:i.c,Props:i.d,Button:r.a,Icon:b.a},s.DefaultLayout=u.a,s._frontmatter=p,s),mdxType:"Playground"},Object(l.b)(r.a,{color:"default",disabled:!0,mdxType:"Button"},"No Click"),Object(l.b)(r.a,{color:"primary",disabled:!0,mdxType:"Button"},"No Click"),Object(l.b)(r.a,{color:"outline",disabled:!0,mdxType:"Button"},"No Click"),Object(l.b)(r.a,{color:"weak",disabled:!0,mdxType:"Button"},"No Click")),Object(l.b)("h2",{id:"button-with-icon"},"Button with Icon"),Object(l.b)(i.c,{__position:4,__code:'() => {\n  const iconStyle = { fontSize: 22, padding: \'0 5px\' }\n  return (\n    <>\n      <Button>\n        <Icon type="weixin" style={iconStyle} />\n        <span>Wechat</span>\n      </Button>\n      <Button color="primary">\n        <Icon type="weixin" style={iconStyle} />\n        <span>Wechat</span>\n      </Button>\n      <Button color="outline">\n        <Icon type="weixin" style={iconStyle} />\n        <span>Wechat</span>\n      </Button>\n      <Button color="weak">\n        <Icon type="weixin" style={iconStyle} />\n        <span>Wechat</span>\n      </Button>\n    </>\n  )\n}',__scope:(m={props:O,DefaultLayout:u.a,Playground:i.c,Props:i.d,Button:r.a,Icon:b.a},m.DefaultLayout=u.a,m._frontmatter=p,m),mdxType:"Playground"},(function(){var t={fontSize:22,padding:"0 5px"};return Object(l.b)(c.Fragment,null,Object(l.b)(r.a,{mdxType:"Button"},Object(l.b)(b.a,{type:"weixin",style:t,mdxType:"Icon"}),Object(l.b)("span",null,"Wechat")),Object(l.b)(r.a,{color:"primary",mdxType:"Button"},Object(l.b)(b.a,{type:"weixin",style:t,mdxType:"Icon"}),Object(l.b)("span",null,"Wechat")),Object(l.b)(r.a,{color:"outline",mdxType:"Button"},Object(l.b)(b.a,{type:"weixin",style:t,mdxType:"Icon"}),Object(l.b)("span",null,"Wechat")),Object(l.b)(r.a,{color:"weak",mdxType:"Button"},Object(l.b)(b.a,{type:"weixin",style:t,mdxType:"Icon"}),Object(l.b)("span",null,"Wechat")))})),Object(l.b)("h2",{id:"links"},"Links"),Object(l.b)(i.c,{__position:5,__code:'() => {\n  const iconStyle = { fontSize: 22, padding: \'0 5px\' }\n  return (\n    <>\n      <Button href="//ke.qq.com" target="_blank">\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n      <Button href="//ke.qq.com" target="_blank" color="primary">\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n      <Button href="//ke.qq.com" target="_blank" color="outline">\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n      <Button href="//ke.qq.com" target="_blank" color="weak">\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n    </>\n  )\n}',__scope:(B={props:O,DefaultLayout:u.a,Playground:i.c,Props:i.d,Button:r.a,Icon:b.a},B.DefaultLayout=u.a,B._frontmatter=p,B),mdxType:"Playground"},(function(){var t={fontSize:22,padding:"0 5px"};return Object(l.b)(c.Fragment,null,Object(l.b)(r.a,{href:"//ke.qq.com",target:"_blank",mdxType:"Button"},Object(l.b)(b.a,{type:"weixin",style:t,mdxType:"Icon"})),Object(l.b)(r.a,{href:"//ke.qq.com",target:"_blank",color:"primary",mdxType:"Button"},Object(l.b)(b.a,{type:"weixin",style:t,mdxType:"Icon"})),Object(l.b)(r.a,{href:"//ke.qq.com",target:"_blank",color:"outline",mdxType:"Button"},Object(l.b)(b.a,{type:"weixin",style:t,mdxType:"Icon"})),Object(l.b)(r.a,{href:"//ke.qq.com",target:"_blank",color:"weak",mdxType:"Button"},Object(l.b)(b.a,{type:"weixin",style:t,mdxType:"Icon"})))})))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/button/Button.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-button-button-mdx-2e024d5f17ccfbf1bdca.js.map