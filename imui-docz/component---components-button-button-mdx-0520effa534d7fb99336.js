(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{tERx:function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return b})),e.d(n,"default",(function(){return s}));e("5hJT"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("PJhk");var o=e("mXGw"),a=e("/FXl"),c=e("TjRS"),r=e("ZFoC"),u=e("JZbt"),i=e("nV0/");e("1vZD"),e("Tq0k"),e("JWd5"),e("aD51");function p(){return(p=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/button/Button.mdx"}});var l={_frontmatter:b},d=c.a;function s(t){var n,e,s,y,m,I=t.components,B=function(t,n){if(null==t)return{};var e,o,a={},c=Object.keys(t);for(o=0;o<c.length;o++)e=c[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,["components"]);return Object(a.b)(d,p({},l,B,{components:I,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"button"},"Button"),Object(a.b)("h2",{id:"props--methods"},"Props & Methods"),Object(a.b)(r.d,{of:u.a,mdxType:"Props"}),Object(a.b)("h2",{id:"默认配色按钮"},"默认配色按钮"),Object(a.b)(r.c,{__position:1,__code:'<Button size="s">IMUI</Button>\n<Button>IMUI</Button>\n<Button size="l">IMUI</Button>\n<Button size="l" disabled>\n  IMUI\n</Button>',__scope:(n={props:B,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:u.a,Icon:i.a},n.DefaultLayout=c.a,n._frontmatter=b,n),mdxType:"Playground"},Object(a.b)(u.a,{size:"s",mdxType:"Button"},"IMUI"),Object(a.b)(u.a,{mdxType:"Button"},"IMUI"),Object(a.b)(u.a,{size:"l",mdxType:"Button"},"IMUI"),Object(a.b)(u.a,{size:"l",disabled:!0,mdxType:"Button"},"IMUI")),Object(a.b)("h2",{id:"primary配色按钮"},"primary配色按钮"),Object(a.b)(r.c,{__position:2,__code:'<Button color="primary" size="s">\n  IMUI\n</Button>\n<Button color="primary">IMUI</Button>\n<Button color="primary" size="l">\n  IMUI\n</Button>\n<Button color="primary" disabled>\n  IMUI\n</Button>',__scope:(e={props:B,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:u.a,Icon:i.a},e.DefaultLayout=c.a,e._frontmatter=b,e),mdxType:"Playground"},Object(a.b)(u.a,{color:"primary",size:"s",mdxType:"Button"},"IMUI"),Object(a.b)(u.a,{color:"primary",mdxType:"Button"},"IMUI"),Object(a.b)(u.a,{color:"primary",size:"l",mdxType:"Button"},"IMUI"),Object(a.b)(u.a,{color:"primary",disabled:!0,mdxType:"Button"},"IMUI")),Object(a.b)("h2",{id:"weak配色按钮"},"weak配色按钮"),Object(a.b)(r.c,{__position:3,__code:'<Button color="weak" size="s">\n  IMUI\n</Button>\n<Button color="weak">IMUI</Button>\n<Button color="weak" size="l">\n  IMUI\n</Button>\n<Button color="weak" disabled>\n  IMUI\n</Button>',__scope:(s={props:B,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:u.a,Icon:i.a},s.DefaultLayout=c.a,s._frontmatter=b,s),mdxType:"Playground"},Object(a.b)(u.a,{color:"weak",size:"s",mdxType:"Button"},"IMUI"),Object(a.b)(u.a,{color:"weak",mdxType:"Button"},"IMUI"),Object(a.b)(u.a,{color:"weak",size:"l",mdxType:"Button"},"IMUI"),Object(a.b)(u.a,{color:"weak",disabled:!0,mdxType:"Button"},"IMUI")),Object(a.b)("h2",{id:"包含icon的按钮"},"包含Icon的按钮"),Object(a.b)(r.c,{__position:4,__code:"() => {\n  const iconStyle = { fontSize: 22, padding: '0 5px' }\n  return (\n    <>\n      <Button onClick={window.console.log('testClick')}>\n        <Icon type=\"weixin\" style={iconStyle} />\n      </Button>\n      <Button>\n        <Icon type=\"weixin\" style={iconStyle} />\n        <span>微信</span>\n      </Button>\n    </>\n  )\n}",__scope:(y={props:B,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:u.a,Icon:i.a},y.DefaultLayout=c.a,y._frontmatter=b,y),mdxType:"Playground"},(function(){var t={fontSize:22,padding:"0 5px"};return Object(a.b)(o.Fragment,null,Object(a.b)(u.a,{onClick:window.console.log("testClick"),mdxType:"Button"},Object(a.b)(i.a,{type:"weixin",style:t,mdxType:"Icon"})),Object(a.b)(u.a,{mdxType:"Button"},Object(a.b)(i.a,{type:"weixin",style:t,mdxType:"Icon"}),Object(a.b)("span",null,"微信")))})),Object(a.b)("h2",{id:"有链接的按钮"},"有链接的按钮"),Object(a.b)(r.c,{__position:5,__code:'() => {\n  const iconStyle = { fontSize: 22, padding: \'0 5px\' }\n  return (\n    <>\n      <Button href="//ke.qq.com" target="_blank">\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n      <Button href="//ke.qq.com" disabled>\n        <Icon type="weixin" style={iconStyle} />\n      </Button>\n    </>\n  )\n}',__scope:(m={props:B,DefaultLayout:c.a,Playground:r.c,Props:r.d,Button:u.a,Icon:i.a},m.DefaultLayout=c.a,m._frontmatter=b,m),mdxType:"Playground"},(function(){var t={fontSize:22,padding:"0 5px"};return Object(a.b)(o.Fragment,null,Object(a.b)(u.a,{href:"//ke.qq.com",target:"_blank",mdxType:"Button"},Object(a.b)(i.a,{type:"weixin",style:t,mdxType:"Icon"})),Object(a.b)(u.a,{href:"//ke.qq.com",disabled:!0,mdxType:"Button"},Object(a.b)(i.a,{type:"weixin",style:t,mdxType:"Icon"})))})))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/button/Button.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-button-button-mdx-0520effa534d7fb99336.js.map