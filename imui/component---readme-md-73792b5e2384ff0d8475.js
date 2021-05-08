(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"7OsV":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var b=n("Fcif"),a=n("+I+c"),c=(n("mXGw"),n("/FXl")),i=n("TjRS"),r=(n("aD51"),{});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"README.md"}});var p={_frontmatter:r},l=i.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)(l,Object(b.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"imweb-·-ui"},"IMWeb · UI"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"React & Redux"),Object(c.b)("li",{parentName:"ul"},"专注管理后台"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"务必保证本地 node 在 8.x 版本，拥抱 es6")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"提交代码必须拉分支")),Object(c.b)("li",{parentName:"ul"},"发布周期，每周二、每周五")),Object(c.b)("h2",{id:"使用"},"使用"),Object(c.b)("p",null,"安装"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm install imui --save\n")),Object(c.b)("p",null,"引入"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { DatePicker } from 'imui';\nReactDOM.render(<DatePicker />, mountNode);\n\n// 或者按需引用，打包的时候只会打包 tab\nimport Tab from 'imui/dist/tab/index';\n")),Object(c.b)("h2",{id:"开发"},"开发"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"分支，主干是随时会发布到 npm 的，贡献组件",Object(c.b)("strong",{parentName:"p"},"务必拉分支"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},".",Object(c.b)("a",{parentName:"p",href:"http://editorconfig.org/"},"editorconfig"),"，请让自己的编辑器支持这个")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"/imui/imweb/imui/wikis/home"},"wiki"),"，",Object(c.b)("strong",{parentName:"p"},"请仔细阅读"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"/imui/imweb/imui/wikis/style-guide"},"规范"),"，",Object(c.b)("strong",{parentName:"p"},"eslint 和 sasslint 必须验证通过"),"。"))),Object(c.b)("h3",{id:"项目目录"},"项目目录"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"external 一些和 **组件** 无关的资源\nmock 开发过程中可能需要模拟一些数据 [文档](http://fis.baidu.com/fis3/docs/node-mock.html)\nimui 静态站点的目录，生成站点的时候出现\ndist 编译后的文件目录，发布到 npm 时出现\nbuild 构建相关的脚本\n")),Object(c.b)("h3",{id:"组件目录"},"组件目录"),Object(c.b)("p",null,"所有文件都是 ",Object(c.b)("inlineCode",{parentName:"p"},".jsx")," 。"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"tab/\n  demo/    必须\n    index.html   必须，可以在上面 dev ，顺边做为 demo ，这个会自动生成到 demo 首页\n  style/   必须，组件样式\n  lib/     非必须，可以用 src 什么的替代\n  index.jsx   必须，入口文件\n")),Object(c.b)("h3",{id:"样式"},"样式"),Object(c.b)("p",null,"类名必须以 ",Object(c.b)("inlineCode",{parentName:"p"},"im-")," 开头。"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scss"},".im-tab {\n  // 头部\n  &-hd {\n    @extend %clearfix;\n    font-size: 16px;\n    background: #fff;\n  }\n}\n")),Object(c.b)("h3",{id:"调试"},"调试"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm start\n\nhttp://127.0.0.1:3000/ # 首页\nhttp://127.0.0.1:3000/components/tab.html # 单个组件\n\n")),Object(c.b)("h3",{id:"单元测试"},"单元测试"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm run test\n")),Object(c.b)("h3",{id:"文档化"},"文档化"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"npm run docz:dev     // 站点本地调试\nnpm run docz:build   // 站点构建\n")),Object(c.b)("h2",{id:"发布"},"发布"),Object(c.b)("h3",{id:"发布到-npm"},"发布到 npm"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm run dist\n")),Object(c.b)("h3",{id:"发布到-imwebgithubio"},"发布到 imweb.github.io"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm run pubsite\n")))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---readme-md-73792b5e2384ff0d8475.js.map