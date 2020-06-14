(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{tERx:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return b})),n.d(e,"default",(function(){return d}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var o=n("mXGw"),a=n("/FXl"),c=n("TjRS"),r=n("ZFoC"),l=n("JZbt"),u=n("nV0/");n("1vZD"),n("Tq0k"),n("aD51");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/button/Button.mdx"}});var p={_frontmatter:b},y=c.a;function d(t){var e,n,d,s,m,B=t.components,O=function(t,e){if(null==t)return{};var n,o,a={},c=Object.keys(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["components"]);return Object(a.b)(y,i({},p,O,{components:B,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"button"},"Button"),Object(a.b)("h2",{id:"props--methods"},"Props & Methods"),Object(a.b)(r.d,{of:l.a,mdxType:"Props"}),Object(a.b)("h2",{id:"sizes"},"Sizes"),Object(a.b)(r.c,{__position:1,__code:'<Button size="s">Small</Button>\n<Button>Medium</Button>\n<Button size="l">Large</Button>',__scope:(e={props:O,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:l.a,Icon:u.a},e.DefaultLayout=c.a,e._frontmatter=b,e),mdxType:"Playground"},Object(a.b)(l.a,{size:"s",mdxType:"Button"},"Small"),Object(a.b)(l.a,{mdxType:"Button"},"Medium"),Object(a.b)(l.a,{size:"l",mdxType:"Button"},"Large")),Object(a.b)("h2",{id:"colors"},"Colors"),Object(a.b)(r.c,{__position:2,__code:'<Button color="default">Default</Button>\n<Button color="primary">Primary</Button>\n<Button color="outline">Outline</Button>\n<Button color="weak">Weak</Button>',__scope:(n={props:O,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:l.a,Icon:u.a},n.DefaultLayout=c.a,n._frontmatter=b,n),mdxType:"Playground"},Object(a.b)(l.a,{color:"default",mdxType:"Button"},"Default"),Object(a.b)(l.a,{color:"primary",mdxType:"Button"},"Primary"),Object(a.b)(l.a,{color:"outline",mdxType:"Button"},"Outline"),Object(a.b)(l.a,{color:"weak",mdxType:"Button"},"Weak")),Object(a.b)("h2",{id:"disabled"},"Disabled"),Object(a.b)(r.c,{__position:3,__code:'<Button color="default" disabled={true}>\n  No Click\n</Button>\n<Button color="primary" disabled={true}>\n  No Click\n</Button>\n<Button color="outline" disabled={true}>\n  No Click\n</Button>\n<Button color="weak" disabled={true}>\n  No Click\n</Button>',__scope:(d={props:O,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:l.a,Icon:u.a},d.DefaultLayout=c.a,d._frontmatter=b,d),mdxType:"Playground"},Object(a.b)(l.a,{color:"default",disabled:!0,mdxType:"Button"},"No Click"),Object(a.b)(l.a,{color:"primary",disabled:!0,mdxType:"Button"},"No Click"),Object(a.b)(l.a,{color:"outline",disabled:!0,mdxType:"Button"},"No Click"),Object(a.b)(l.a,{color:"weak",disabled:!0,mdxType:"Button"},"No Click")),Object(a.b)("h2",{id:"button-with-icon"},"Button with Icon"),Object(a.b)(r.c,{__position:4,__code:'() => {\n  const iconStyle = { fontSize: 22, padding: \'0 5px\' }\n  return (\n    <>\n      <Button>\n        <Icon type="weixin" style={iconStyle} />\n        <span>Wechat</span>\n      </Button>\n      <Button color="primary">\n        <Icon type="weixin" style={iconStyle} />\n        <span>Wechat</span>\n      </Button>\n      <Button color="outline">\n        <Icon type="weixin" style={iconStyle} />\n        <span>Wechat</span>\n      </Button>\n      <Button color="weak">\n        <Icon type="weixin" style={iconStyle} />\n        <span>Wechat</span>\n      </Button>\n    </>\n  )\n}',__scope:(s={props:O,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:l.a,Icon:u.a},s.DefaultLayout=c.a,s._frontmatter=b,s),mdxType:"Playground"},(function(){var t={fontSize:22,padding:"0 5px"};return Object(a.b)(o.Fragment,null,Object(a.b)(l.a,{mdxType:"Button"},Object(a.b)(u.a,{type:"weixin",style:t,mdxType:"Icon"}),Object(a.b)("span",null,"Wechat")),Object(a.b)(l.a,{color:"primary",mdxType:"Button"},Object(a.b)(u.a,{type:"weixin",style:t,mdxType:"Icon"}),Object(a.b)("span",null,"Wechat")),Object(a.b)(l.a,{color:"outline",mdxType:"Button"},Object(a.b)(u.a,{type:"weixin",style:t,mdxType:"Icon"}),Object(a.b)("span",null,"Wechat")),Object(a.b)(l.a,{color:"weak",mdxType:"Button"},Object(a.b)(u.a,{type:"weixin",style:t,mdxType:"Icon"}),Object(a.b)("span",null,"Wechat")))})),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)(r.c,{__position:5,__code:'() => {\n  const iconStyle = { fontSize: 22, padding: \'0 5px\' }\n  return (\n    <>\n      <Button href="//ke.qq.com" target="_blank">\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n      <Button href="//ke.qq.com" target="_blank" color="primary">\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n      <Button href="//ke.qq.com" target="_blank" color="outline">\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n      <Button href="//ke.qq.com" target="_blank" color="weak">\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n    </>\n  )\n}',__scope:(m={props:O,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:l.a,Icon:u.a},m.DefaultLayout=c.a,m._frontmatter=b,m),mdxType:"Playground"},(function(){var t={fontSize:22,padding:"0 5px"};return Object(a.b)(o.Fragment,null,Object(a.b)(l.a,{href:"//ke.qq.com",target:"_blank",mdxType:"Button"},Object(a.b)(u.a,{type:"weixin",style:t,mdxType:"Icon"})),Object(a.b)(l.a,{href:"//ke.qq.com",target:"_blank",color:"primary",mdxType:"Button"},Object(a.b)(u.a,{type:"weixin",style:t,mdxType:"Icon"})),Object(a.b)(l.a,{href:"//ke.qq.com",target:"_blank",color:"outline",mdxType:"Button"},Object(a.b)(u.a,{type:"weixin",style:t,mdxType:"Icon"})),Object(a.b)(l.a,{href:"//ke.qq.com",target:"_blank",color:"weak",mdxType:"Button"},Object(a.b)(u.a,{type:"weixin",style:t,mdxType:"Icon"})))})))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/button/Button.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-button-button-mdx-4b2634a71b1a548d637f.js.map