(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{MuB7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("Fcif"),r=n("+I+c"),l=n("mXGw"),i=n("/FXl"),c=n("TjRS"),g=n("ZFoC"),b=(n("iWAE"),n("zal3")),o=(n("aD51"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/align/Align.mdx"}});var m={_frontmatter:o},d=c.a;function s(e){var t,n,s,p,u=e.components,O=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},m,O,{components:u,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"align"},"Align"),Object(i.b)("p",null,"本组件（Align）来源为",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-component/align"},"Github")),Object(i.b)("p",null,"IMUI中会使用Align作为某些组件的定位工具，故这里提供一些官方之外的使用Demo，方便IMUI开发者参考."),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"属性"),Object(i.b)("th",{parentName:"tr",align:"left"},"说明"),Object(i.b)("th",{parentName:"tr",align:"left"},"类型"),Object(i.b)("th",{parentName:"tr",align:"left"},"默认值"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"align"),Object(i.b)("td",{parentName:"tr",align:"left"},"定位相关参数,与",Object(i.b)("a",{parentName:"td",href:"https://github.com/yiminghe/dom-align"},"dom-align"),"组件的属性配置相同"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Object")),Object(i.b)("td",{parentName:"tr",align:"left"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"onAlign"),Object(i.b)("td",{parentName:"tr",align:"left"},"发生align时的回调"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"function(source:HTMLElement, align:Object)")),Object(i.b)("td",{parentName:"tr",align:"left"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"target"),Object(i.b)("td",{parentName:"tr",align:"left"},"获取定位的目标元素"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"function():HTMLElement")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"function(){return window;}"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"monitorWindowResize"),Object(i.b)("td",{parentName:"tr",align:"left"},"在resize时，是否进行align重排"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"bool")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"align.points"),Object(i.b)("td",{parentName:"tr",align:"left"},"定位参数,数组第一个字符串表示要定位的元素对准点，第二个表示定位目标元素对准点。字符串包含两个字符，第1个表示纵向信息，第2个表示横向信息，字符可能的值为： 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right)"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"String[2]")),Object(i.b)("td",{parentName:"tr",align:"left"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"align.offset"),Object(i.b)("td",{parentName:"tr",align:"left"},"要定位的元素的偏移,第1个值表示横向偏移，第2个表示纵向偏移"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Number[2]")),Object(i.b)("td",{parentName:"tr",align:"left"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"align.targetOffset"),Object(i.b)("td",{parentName:"tr",align:"left"},"目标元素的偏移,第1个值表示横向偏移，第2个表示纵向偏移"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Number[2]")),Object(i.b)("td",{parentName:"tr",align:"left"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"align.overflow"),Object(i.b)("td",{parentName:"tr",align:"left"},"是否启用视窗边缘碰撞检测。adjustX属性为true表示启用横向检测，adjustY属性为true表示启用纵向检测"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Object")),Object(i.b)("td",{parentName:"tr",align:"left"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"align.useCssRight"),Object(i.b)("td",{parentName:"tr",align:"left"},"是否使用css right替代left定位"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"bool")),Object(i.b)("td",{parentName:"tr",align:"left"},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"align.useCssBottom"),Object(i.b)("td",{parentName:"tr",align:"left"},"是否使用css bottom替代top定位"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"bool")),Object(i.b)("td",{parentName:"tr",align:"left"},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"align.useCssTransform"),Object(i.b)("td",{parentName:"tr",align:"left"},"当浏览器支持时，是否使用css transform替代top,left,bottom,right定位"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"bool")),Object(i.b)("td",{parentName:"tr",align:"left"},"false")))),Object(i.b)("h3",{id:"原始文档"},"原始文档"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/react-component/align"},"https://github.com/react-component/align")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/yiminghe/dom-align"},"https://github.com/yiminghe/dom-align"))),Object(i.b)("h2",{id:"alignpoint"},"align.point"),Object(i.b)(g.c,{__position:0,__code:"() => {\n  let targetElems = []\n  function getTarget(index) {\n    if (!targetElems.length) {\n      targetElems = document.getElementsByClassName('align-demo-target')\n    }\n    return targetElems[index - 1]\n  }\n  function getTargetFn(index) {\n    return () => {\n      return getTarget(index)\n    }\n  }\n  return (\n    <>\n      <Align\n        align={{\n          points: ['cc', 'cc'],\n        }}\n        target={getTargetFn(1)}\n      >\n        <div className=\"align-demo-source\">cc, cc</div>\n      </Align>\n      <Align\n        align={{\n          points: ['tr', 'bl'],\n        }}\n        target={getTargetFn(1)}\n      >\n        <div className=\"align-demo-source\">tr, bl</div>\n      </Align>\n      <Align\n        align={{\n          points: ['br', 'tl'],\n        }}\n        target={getTargetFn(1)}\n      >\n        <div className=\"align-demo-source\">br, tl</div>\n      </Align>\n      <Align\n        align={{\n          points: ['bl', 'tr'],\n        }}\n        target={getTargetFn(1)}\n      >\n        <div className=\"align-demo-source\">bl, tr</div>\n      </Align>\n      <Align\n        align={{\n          points: ['tl', 'br'],\n        }}\n        target={getTargetFn(1)}\n      >\n        <div className=\"align-demo-source\">tl, br</div>\n      </Align>\n      <Align\n        align={{\n          points: ['bc', 'tc'],\n        }}\n        target={getTargetFn(1)}\n      >\n        <div className=\"align-demo-source\">bc, tc</div>\n      </Align>\n      <Align\n        align={{\n          points: ['tc', 'bc'],\n        }}\n        target={getTargetFn(1)}\n      >\n        <div className=\"align-demo-source\">tc, bc</div>\n      </Align>\n      <Align\n        align={{\n          points: ['cr', 'cl'],\n        }}\n        target={getTargetFn(1)}\n      >\n        <div className=\"align-demo-source\">cr, cl</div>\n      </Align>\n      <Align\n        align={{\n          points: ['cl', 'cr'],\n        }}\n        target={getTargetFn(1)}\n      >\n        <div className=\"align-demo-source\">cl, cr</div>\n      </Align>\n      <div className=\"align-demo-target\">target</div>\n    </>\n  )\n}",__scope:(t={props:O,DefaultLayout:c.a,Playground:g.c,Align:b.a},t.DefaultLayout=c.a,t._frontmatter=o,t),mdxType:"Playground"},(function(){var e=[];function t(t){return function(){return function(t){return e.length||(e=document.getElementsByClassName("align-demo-target")),e[t-1]}(t)}}return Object(i.b)(l.Fragment,null,Object(i.b)(b.a,{align:{points:["cc","cc"]},target:t(1),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"},"cc, cc")),Object(i.b)(b.a,{align:{points:["tr","bl"]},target:t(1),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"},"tr, bl")),Object(i.b)(b.a,{align:{points:["br","tl"]},target:t(1),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"},"br, tl")),Object(i.b)(b.a,{align:{points:["bl","tr"]},target:t(1),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"},"bl, tr")),Object(i.b)(b.a,{align:{points:["tl","br"]},target:t(1),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"},"tl, br")),Object(i.b)(b.a,{align:{points:["bc","tc"]},target:t(1),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"},"bc, tc")),Object(i.b)(b.a,{align:{points:["tc","bc"]},target:t(1),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"},"tc, bc")),Object(i.b)(b.a,{align:{points:["cr","cl"]},target:t(1),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"},"cr, cl")),Object(i.b)(b.a,{align:{points:["cl","cr"]},target:t(1),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"},"cl, cr")),Object(i.b)("div",{className:"align-demo-target"},"target"))})),Object(i.b)("h2",{id:"alignoffset"},"align.offset"),Object(i.b)(g.c,{__position:1,__code:"() => {\n  let targetElems = []\n  function getTarget(index) {\n    if (!targetElems.length) {\n      targetElems = document.getElementsByClassName('align-demo-target')\n    }\n    return targetElems[index - 1]\n  }\n  function getTargetFn(index) {\n    return () => {\n      return getTarget(index)\n    }\n  }\n  return (\n    <>\n      <Align\n        align={{\n          points: ['cc', 'cc'],\n          offset: [10, 20],\n        }}\n        target={getTargetFn(2)}\n      >\n        <div className=\"align-demo-source\"></div>\n      </Align>\n      <Align\n        align={{\n          points: ['cc', 'cc'],\n        }}\n        target={getTargetFn(2)}\n      >\n        <div className=\"align-demo-source align-demo-source--border\"></div>\n      </Align>\n      <span>point: ['cc', 'cc'], offset: [10, 20]</span>\n      <div className=\"align-demo-target\">target</div>\n    </>\n  )\n}",__scope:(n={props:O,DefaultLayout:c.a,Playground:g.c,Align:b.a},n.DefaultLayout=c.a,n._frontmatter=o,n),mdxType:"Playground"},(function(){var e=[];function t(t){return function(){return function(t){return e.length||(e=document.getElementsByClassName("align-demo-target")),e[t-1]}(t)}}return Object(i.b)(l.Fragment,null,Object(i.b)(b.a,{align:{points:["cc","cc"],offset:[10,20]},target:t(2),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"})),Object(i.b)(b.a,{align:{points:["cc","cc"]},target:t(2),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source align-demo-source--border"})),Object(i.b)("span",null,"point: ['cc', 'cc'], offset: [10, 20]"),Object(i.b)("div",{className:"align-demo-target"},"target"))})),Object(i.b)("h2",{id:"aligntargetoffset"},"align.targetOffset"),Object(i.b)(g.c,{__position:2,__code:"() => {\n  let targetElems = []\n  function getTarget(index) {\n    if (!targetElems.length) {\n      targetElems = document.getElementsByClassName('align-demo-target')\n    }\n    return targetElems[index - 1]\n  }\n  function getTargetFn(index) {\n    return () => {\n      return getTarget(index)\n    }\n  }\n  return (\n    <>\n      <Align\n        align={{\n          points: ['cc', 'cc'],\n          targetOffset: [10, 20],\n        }}\n        target={getTargetFn(3)}\n      >\n        <div className=\"align-demo-source\"></div>\n      </Align>\n      <Align\n        align={{\n          points: ['cc', 'cc'],\n        }}\n        target={getTargetFn(3)}\n      >\n        <div className=\"align-demo-source align-demo-source--border\"></div>\n      </Align>\n      <span>point: ['cc', 'cc'], targetOffset偏移: [10, 20]</span>\n      <div className=\"align-demo-target\">target</div>\n    </>\n  )\n}",__scope:(s={props:O,DefaultLayout:c.a,Playground:g.c,Align:b.a},s.DefaultLayout=c.a,s._frontmatter=o,s),mdxType:"Playground"},(function(){var e=[];function t(t){return function(){return function(t){return e.length||(e=document.getElementsByClassName("align-demo-target")),e[t-1]}(t)}}return Object(i.b)(l.Fragment,null,Object(i.b)(b.a,{align:{points:["cc","cc"],targetOffset:[10,20]},target:t(3),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source"})),Object(i.b)(b.a,{align:{points:["cc","cc"]},target:t(3),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source align-demo-source--border"})),Object(i.b)("span",null,"point: ['cc', 'cc'], targetOffset偏移: [10, 20]"),Object(i.b)("div",{className:"align-demo-target"},"target"))})),Object(i.b)("h2",{id:"alignoverflow"},"align.overflow"),Object(i.b)(g.c,{__position:3,__code:"() => {\n  let targetElems = []\n  function getTarget(index) {\n    if (!targetElems.length) {\n      targetElems = document.getElementsByClassName('align-demo-target')\n    }\n    return targetElems[index - 1]\n  }\n  function getTargetFn(index) {\n    return () => {\n      return getTarget(index)\n    }\n  }\n  return (\n    <>\n      <Align\n        align={{\n          points: ['tl', 'br'],\n        }}\n        target={getTargetFn(4)}\n      >\n        <div className=\"align-demo-source align-demo-source--large align-demo-source--border\"></div>\n      </Align>\n      <Align\n        align={{\n          points: ['tl', 'br'],\n          overflow: {\n            adjustX: true,\n          },\n        }}\n        target={getTargetFn(4)}\n        monitorWindowResize\n      >\n        <div className=\"align-demo-source align-demo-source--large\"></div>\n      </Align>\n      <span>尝试改变浏览器窗口大小，使浏览器边缘靠近橙色方块</span>\n      <div className=\"align-demo-target align-demo-target--large\">target</div>\n    </>\n  )\n}",__scope:(p={props:O,DefaultLayout:c.a,Playground:g.c,Align:b.a},p.DefaultLayout=c.a,p._frontmatter=o,p),mdxType:"Playground"},(function(){var e=[];function t(t){return function(){return function(t){return e.length||(e=document.getElementsByClassName("align-demo-target")),e[t-1]}(t)}}return Object(i.b)(l.Fragment,null,Object(i.b)(b.a,{align:{points:["tl","br"]},target:t(4),mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source align-demo-source--large align-demo-source--border"})),Object(i.b)(b.a,{align:{points:["tl","br"],overflow:{adjustX:!0}},target:t(4),monitorWindowResize:!0,mdxType:"Align"},Object(i.b)("div",{className:"align-demo-source align-demo-source--large"})),Object(i.b)("span",null,"尝试改变浏览器窗口大小，使浏览器边缘靠近橙色方块"),Object(i.b)("div",{className:"align-demo-target align-demo-target--large"},"target"))})))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/align/Align.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-align-align-mdx-e1ba8df89e640c6a14cb.js.map