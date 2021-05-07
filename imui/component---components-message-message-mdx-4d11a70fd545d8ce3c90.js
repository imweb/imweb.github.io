(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{NIjx:function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return p})),e.d(t,"default",(function(){return g}));e("5hJT"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("PJhk");var o=e("mXGw"),i=e("/FXl"),a=e("TjRS"),l=e("G1Cj"),r=e("lmKI"),c=e("JZbt"),s=(e("dne/"),e("ZFoC")),u=e("T6mL");e("aD51");function d(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function h(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}function b(){return(b=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/message/Message.mdx"}});f="Example";var f,m={_frontmatter:p},C=a.a;function g(n){var t,e,f,g,k,y,O,j=n.components,x=function(n,t){if(null==n)return{};var e,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["components"]);return Object(i.b)(C,b({},m,x,{components:j,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"message"},"Message"),Object(i.b)("p",null,"Message组件采用js调用的方式来使用，组件提供了六个常用静态方法，调用后返回的是该消息实例的关闭函数。"),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)(s.d,{of:u.a,mdxType:"Props"}),Object(i.b)("h3",{id:"messageconfig全局配置参数"},"Message.config全局配置参数"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",b({parentName:"tr"},{align:"left"}),"属性"),Object(i.b)("th",b({parentName:"tr"},{align:"left"}),"说明"),Object(i.b)("th",b({parentName:"tr"},{align:"left"}),"类型"),Object(i.b)("th",b({parentName:"tr"},{align:"left"}),"默认值"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"direction"),Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"消息的展现位置"),Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"String"),Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"'top'")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"duration"),Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"默认自动关闭延时，单位秒"),Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"Number"),Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"2")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"zIndex"),Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"消息展示zIndex"),Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"Number"),Object(i.b)("td",b({parentName:"tr"},{align:"left"}),"4000")))),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)(s.c,{__position:1,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleInfo = this.handleInfo.bind(this)\n      this.handleSucess = this.handleSucess.bind(this)\n      this.handleAlert = this.handleAlert.bind(this)\n      this.handleQuestion = this.handleQuestion.bind(this)\n      this.handleLoading = this.handleLoading.bind(this)\n    }\n    handleInfo() {\n      Message.info('可以随便说说话', { duration: 0 })\n    }\n    handleSucess() {\n      Message.success('恭喜你达成一个亿的小目标！')\n    }\n    handleAlert() {\n      Message.alert('警告！你犯了错了！')\n    }\n    handleQuestion() {\n      Message.question('小朋友你是否有很多问号？')\n    }\n    handleLoading() {\n      let apis = Message.loading('loading, 自定义3s后关闭')\n      setTimeout(() => {\n        apis.close()\n      }, 3000)\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.handleInfo}> info </Button>\n          <Button onClick={this.handleSucess}>success</Button>\n          <Button onClick={this.handleAlert}>alert</Button>\n          <Button onClick={this.handleQuestion}>question</Button>\n          <Button onClick={this.handleLoading}>loading</Button>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(t={props:x,DefaultLayout:a.a,Message:l.a,MessageItem:r.a,Button:c.a,Playground:s.c,Props:s.d,LibMessage:u.a},t.DefaultLayout=a.a,t._frontmatter=p,t),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleInfo=e.handleInfo.bind(d(e)),e.handleSucess=e.handleSucess.bind(d(e)),e.handleAlert=e.handleAlert.bind(d(e)),e.handleQuestion=e.handleQuestion.bind(d(e)),e.handleLoading=e.handleLoading.bind(d(e)),e}h(t,n);var e=t.prototype;return e.handleInfo=function(){l.a.info("可以随便说说话",{duration:0})},e.handleSucess=function(){l.a.success("恭喜你达成一个亿的小目标！")},e.handleAlert=function(){l.a.alert("警告！你犯了错了！")},e.handleQuestion=function(){l.a.question("小朋友你是否有很多问号？")},e.handleLoading=function(){var n=l.a.loading("loading, 自定义3s后关闭");setTimeout((function(){n.close()}),3e3)},e.render=function(){return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{onClick:this.handleInfo,mdxType:"Button"}," info "),Object(i.b)(c.a,{onClick:this.handleSucess,mdxType:"Button"},"success"),Object(i.b)(c.a,{onClick:this.handleAlert,mdxType:"Button"},"alert"),Object(i.b)(c.a,{onClick:this.handleQuestion,mdxType:"Button"},"question"),Object(i.b)(c.a,{onClick:this.handleLoading,mdxType:"Button"},"loading"))},t}(o.Component);return Object(i.b)(n,{mdxType:"Example"})})),Object(i.b)("h2",{id:"directions"},"Directions"),Object(i.b)(s.c,{__position:2,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.onClickLeft = this.onClickLeft.bind(this)\n      this.onClickRight = this.onClickRight.bind(this)\n      this.onClickBottom = this.onClickBottom.bind(this)\n      this.onClickTop = this.onClickTop.bind(this)\n      this.onClickCenter = this.onClickCenter.bind(this)\n    }\n    onClickLeft() {\n      Message.info({\n        content: '左边方向消息',\n        direction: 'left',\n      })\n    }\n    onClickRight() {\n      Message.info({\n        content: '右边方向消息',\n        direction: 'right',\n      })\n    }\n    onClickCenter() {\n      Message.info({\n        content: '中间方向消息',\n        direction: 'center',\n      })\n    }\n    onClickTop() {\n      Message.info({\n        content: '上边方向消息',\n        direction: 'top',\n      })\n    }\n    onClickBottom() {\n      Message.info({\n        content: '底部方向消息',\n        direction: 'bottom',\n      })\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.onClickTop}>Top</Button>\n          <Button onClick={this.onClickBottom}>Bottom</Button>\n          <Button onClick={this.onClickCenter}>Center</Button>\n          <Button onClick={this.onClickLeft}>Left</Button>\n          <Button onClick={this.onClickRight}>Right</Button>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(e={props:x,DefaultLayout:a.a,Message:l.a,MessageItem:r.a,Button:c.a,Playground:s.c,Props:s.d,LibMessage:u.a},e.DefaultLayout=a.a,e._frontmatter=p,e),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).onClickLeft=e.onClickLeft.bind(d(e)),e.onClickRight=e.onClickRight.bind(d(e)),e.onClickBottom=e.onClickBottom.bind(d(e)),e.onClickTop=e.onClickTop.bind(d(e)),e.onClickCenter=e.onClickCenter.bind(d(e)),e}h(t,n);var e=t.prototype;return e.onClickLeft=function(){l.a.info({content:"左边方向消息",direction:"left"})},e.onClickRight=function(){l.a.info({content:"右边方向消息",direction:"right"})},e.onClickCenter=function(){l.a.info({content:"中间方向消息",direction:"center"})},e.onClickTop=function(){l.a.info({content:"上边方向消息",direction:"top"})},e.onClickBottom=function(){l.a.info({content:"底部方向消息",direction:"bottom"})},e.render=function(){return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{onClick:this.onClickTop,mdxType:"Button"},"Top"),Object(i.b)(c.a,{onClick:this.onClickBottom,mdxType:"Button"},"Bottom"),Object(i.b)(c.a,{onClick:this.onClickCenter,mdxType:"Button"},"Center"),Object(i.b)(c.a,{onClick:this.onClickLeft,mdxType:"Button"},"Left"),Object(i.b)(c.a,{onClick:this.onClickRight,mdxType:"Button"},"Right"))},t}(o.Component);return Object(i.b)(n,{mdxType:"Example"})})),Object(i.b)("h2",{id:"duration"},"Duration"),Object(i.b)(s.c,{__position:3,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleClick = this.handleClick.bind(this)\n    }\n    handleClick() {\n      Message.info({\n        content: 'I can show up only in 5s',\n        duration: 5,\n      })\n    }\n    render() {\n      return <Button onClick={this.handleClick}>duration</Button>\n    }\n  }\n  return <Example />\n}",__scope:(f={props:x,DefaultLayout:a.a,Message:l.a,MessageItem:r.a,Button:c.a,Playground:s.c,Props:s.d,LibMessage:u.a},f.DefaultLayout=a.a,f._frontmatter=p,f),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleClick=e.handleClick.bind(d(e)),e}h(t,n);var e=t.prototype;return e.handleClick=function(){l.a.info({content:"I can show up only in 5s",duration:5})},e.render=function(){return Object(i.b)(c.a,{onClick:this.handleClick,mdxType:"Button"},"duration")},t}(o.Component);return Object(i.b)(n,{mdxType:"Example"})})),Object(i.b)("h2",{id:"closable"},"Closable"),Object(i.b)(s.c,{__position:4,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleClick = this.handleClick.bind(this)\n    }\n    handleClick() {\n      Message.info({\n        content: "Close me if you don\'t need me any more",\n        duration: 10,\n        closable: true,\n      })\n    }\n    render() {\n      return <Button onClick={this.handleClick}>Closable</Button>\n    }\n  }\n  return <Example />\n}',__scope:(g={props:x,DefaultLayout:a.a,Message:l.a,MessageItem:r.a,Button:c.a,Playground:s.c,Props:s.d,LibMessage:u.a},g.DefaultLayout=a.a,g._frontmatter=p,g),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleClick=e.handleClick.bind(d(e)),e}h(t,n);var e=t.prototype;return e.handleClick=function(){l.a.info({content:"Close me if you don't need me any more",duration:10,closable:!0})},e.render=function(){return Object(i.b)(c.a,{onClick:this.handleClick,mdxType:"Button"},"Closable")},t}(o.Component);return Object(i.b)(n,{mdxType:"Example"})})),Object(i.b)("h2",{id:"complex-content"},"Complex content"),Object(i.b)(s.c,{__position:5,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleClick = this.handleClick.bind(this)\n    }\n    handleClick() {\n      Message.info({\n        content: (\n          <>\n            {' '}\n            <p> This is a paragraph </p>\n            <ul>\n              <li>Course 1</li>\n              <li>Course 2</li>\n              <li>Course 3</li>\n            </ul>\n          </>\n        ),\n      })\n    }\n    render() {\n      return <Button onClick={this.handleClick}>Complex Content</Button>\n    }\n  }\n  return <Example />\n}",__scope:(k={props:x,DefaultLayout:a.a,Message:l.a,MessageItem:r.a,Button:c.a,Playground:s.c,Props:s.d,LibMessage:u.a},k.DefaultLayout=a.a,k._frontmatter=p,k),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleClick=e.handleClick.bind(d(e)),e}h(t,n);var e=t.prototype;return e.handleClick=function(){l.a.info({content:Object(i.b)(o.Fragment,null," ",Object(i.b)("p",null," This is a paragraph "),Object(i.b)("ul",null,Object(i.b)("li",null,"Course 1"),Object(i.b)("li",null,"Course 2"),Object(i.b)("li",null,"Course 3")))})},e.render=function(){return Object(i.b)(c.a,{onClick:this.handleClick,mdxType:"Button"},"Complex Content")},t}(o.Component);return Object(i.b)(n,{mdxType:"Example"})})),Object(i.b)("h2",{id:"onclose"},"onClose"),Object(i.b)(s.c,{__position:6,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleClick = this.handleClick.bind(this)\n    }\n    handleClick() {\n      Message.info({\n        content: 'Why not close me now?!',\n        duration: 10,\n        closable: true,\n        onClose: () => {\n          Message.success(\n            {\n              content: 'You have call the onClose successfully!',\n            },\n            2000,\n          )\n        },\n      })\n    }\n    render() {\n      return <Button onClick={this.handleClick}>onClose</Button>\n    }\n  }\n  return <Example />\n}",__scope:(y={props:x,DefaultLayout:a.a,Message:l.a,MessageItem:r.a,Button:c.a,Playground:s.c,Props:s.d,LibMessage:u.a},y.DefaultLayout=a.a,y._frontmatter=p,y),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleClick=e.handleClick.bind(d(e)),e}h(t,n);var e=t.prototype;return e.handleClick=function(){l.a.info({content:"Why not close me now?!",duration:10,closable:!0,onClose:function(){l.a.success({content:"You have call the onClose successfully!"},2e3)}})},e.render=function(){return Object(i.b)(c.a,{onClick:this.handleClick,mdxType:"Button"},"onClose")},t}(o.Component);return Object(i.b)(n,{mdxType:"Example"})})),Object(i.b)("h2",{id:"global-settings"},"Global Settings"),Object(i.b)(s.c,{__position:7,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleDestroy = this.handleDestroy.bind(this)\n      this.handleDirection = this.handleDirection.bind(this)\n      this.handleDuration = this.handleDuration.bind(this)\n    }\n    handleDestroy() {\n      Message.destroy()\n    }\n    handleDirection() {\n      Message.config({\n        direction: 'left',\n      })\n    }\n    handleDuration() {\n      Message.config({\n        duration: 5,\n      })\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.handleDestroy}>Global Destroy</Button>\n          <Button onClick={this.handleDirection}>Global Direction</Button>\n          <Button onClick={this.handleDuration}>Global Duration</Button>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(O={props:x,DefaultLayout:a.a,Message:l.a,MessageItem:r.a,Button:c.a,Playground:s.c,Props:s.d,LibMessage:u.a},O.DefaultLayout=a.a,O._frontmatter=p,O),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleDestroy=e.handleDestroy.bind(d(e)),e.handleDirection=e.handleDirection.bind(d(e)),e.handleDuration=e.handleDuration.bind(d(e)),e}h(t,n);var e=t.prototype;return e.handleDestroy=function(){l.a.destroy()},e.handleDirection=function(){l.a.config({direction:"left"})},e.handleDuration=function(){l.a.config({duration:5})},e.render=function(){return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{onClick:this.handleDestroy,mdxType:"Button"},"Global Destroy"),Object(i.b)(c.a,{onClick:this.handleDirection,mdxType:"Button"},"Global Direction"),Object(i.b)(c.a,{onClick:this.handleDuration,mdxType:"Button"},"Global Duration"))},t}(o.Component);return Object(i.b)(n,{mdxType:"Example"})})))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/message/Message.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-message-message-mdx-4d11a70fd545d8ce3c90.js.map