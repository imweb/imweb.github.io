(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{NIjx:function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return m})),e.d(t,"default",(function(){return j}));var o=e("Fcif"),a=e("0942"),i=e("7L9N"),l=e("+I+c"),c=e("mXGw"),s=e("/FXl"),r=e("TjRS"),u=e("G1Cj"),d=e("lmKI"),b=e("JZbt"),h=(e("dne/"),e("ZFoC")),p=e("T6mL"),m=(e("aD51"),{});void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/message/Message.mdx"}});f="Example";var f,C={_frontmatter:m},g=r.a;function j(n){var t,e,f,j,O,k,y,x=n.components,B=Object(l.a)(n,["components"]);return Object(s.b)(g,Object(o.a)({},C,B,{components:x,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"message"},"Message"),Object(s.b)("p",null,"Message组件采用js调用的方式来使用，组件提供了六个常用静态方法，调用后返回的是该消息实例的关闭函数。"),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)(h.d,{of:p.a,mdxType:"Props"}),Object(s.b)("h3",{id:"messageconfig全局配置参数"},"Message.config全局配置参数"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:"left"},"属性"),Object(s.b)("th",{parentName:"tr",align:"left"},"说明"),Object(s.b)("th",{parentName:"tr",align:"left"},"类型"),Object(s.b)("th",{parentName:"tr",align:"left"},"默认值"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},"direction"),Object(s.b)("td",{parentName:"tr",align:"left"},"消息的展现位置"),Object(s.b)("td",{parentName:"tr",align:"left"},"String"),Object(s.b)("td",{parentName:"tr",align:"left"},"'top'")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},"duration"),Object(s.b)("td",{parentName:"tr",align:"left"},"默认自动关闭延时，单位秒"),Object(s.b)("td",{parentName:"tr",align:"left"},"Number"),Object(s.b)("td",{parentName:"tr",align:"left"},"2")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},"zIndex"),Object(s.b)("td",{parentName:"tr",align:"left"},"消息展示zIndex"),Object(s.b)("td",{parentName:"tr",align:"left"},"Number"),Object(s.b)("td",{parentName:"tr",align:"left"},"4000")))),Object(s.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(s.b)(h.c,{__position:1,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleInfo = this.handleInfo.bind(this)\n      this.handleSucess = this.handleSucess.bind(this)\n      this.handleAlert = this.handleAlert.bind(this)\n      this.handleQuestion = this.handleQuestion.bind(this)\n      this.handleLoading = this.handleLoading.bind(this)\n    }\n    handleInfo() {\n      Message.info('可以随便说说话', { duration: 0 })\n    }\n    handleSucess() {\n      Message.success('恭喜你达成一个亿的小目标！')\n    }\n    handleAlert() {\n      Message.alert('警告！你犯了错了！')\n    }\n    handleQuestion() {\n      Message.question('小朋友你是否有很多问号？')\n    }\n    handleLoading() {\n      let apis = Message.loading('loading, 自定义3s后关闭')\n      setTimeout(() => {\n        apis.close()\n      }, 3000)\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.handleInfo}> info </Button>\n          <Button onClick={this.handleSucess}>success</Button>\n          <Button onClick={this.handleAlert}>alert</Button>\n          <Button onClick={this.handleQuestion}>question</Button>\n          <Button onClick={this.handleLoading}>loading</Button>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(t={props:B,DefaultLayout:r.a,Message:u.a,MessageItem:d.a,Button:b.a,Playground:h.c,Props:h.d,LibMessage:p.a},t.DefaultLayout=r.a,t._frontmatter=m,t),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleInfo=e.handleInfo.bind(Object(a.a)(e)),e.handleSucess=e.handleSucess.bind(Object(a.a)(e)),e.handleAlert=e.handleAlert.bind(Object(a.a)(e)),e.handleQuestion=e.handleQuestion.bind(Object(a.a)(e)),e.handleLoading=e.handleLoading.bind(Object(a.a)(e)),e}Object(i.a)(t,n);var e=t.prototype;return e.handleInfo=function(){u.a.info("可以随便说说话",{duration:0})},e.handleSucess=function(){u.a.success("恭喜你达成一个亿的小目标！")},e.handleAlert=function(){u.a.alert("警告！你犯了错了！")},e.handleQuestion=function(){u.a.question("小朋友你是否有很多问号？")},e.handleLoading=function(){var n=u.a.loading("loading, 自定义3s后关闭");setTimeout((function(){n.close()}),3e3)},e.render=function(){return Object(s.b)(c.Fragment,null,Object(s.b)(b.a,{onClick:this.handleInfo,mdxType:"Button"}," info "),Object(s.b)(b.a,{onClick:this.handleSucess,mdxType:"Button"},"success"),Object(s.b)(b.a,{onClick:this.handleAlert,mdxType:"Button"},"alert"),Object(s.b)(b.a,{onClick:this.handleQuestion,mdxType:"Button"},"question"),Object(s.b)(b.a,{onClick:this.handleLoading,mdxType:"Button"},"loading"))},t}(c.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"directions"},"Directions"),Object(s.b)(h.c,{__position:2,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.onClickLeft = this.onClickLeft.bind(this)\n      this.onClickRight = this.onClickRight.bind(this)\n      this.onClickBottom = this.onClickBottom.bind(this)\n      this.onClickTop = this.onClickTop.bind(this)\n      this.onClickCenter = this.onClickCenter.bind(this)\n    }\n    onClickLeft() {\n      Message.info({\n        content: '左边方向消息',\n        direction: 'left',\n      })\n    }\n    onClickRight() {\n      Message.info({\n        content: '右边方向消息',\n        direction: 'right',\n      })\n    }\n    onClickCenter() {\n      Message.info({\n        content: '中间方向消息',\n        direction: 'center',\n      })\n    }\n    onClickTop() {\n      Message.info({\n        content: '上边方向消息',\n        direction: 'top',\n      })\n    }\n    onClickBottom() {\n      Message.info({\n        content: '底部方向消息',\n        direction: 'bottom',\n      })\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.onClickTop}>Top</Button>\n          <Button onClick={this.onClickBottom}>Bottom</Button>\n          <Button onClick={this.onClickCenter}>Center</Button>\n          <Button onClick={this.onClickLeft}>Left</Button>\n          <Button onClick={this.onClickRight}>Right</Button>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(e={props:B,DefaultLayout:r.a,Message:u.a,MessageItem:d.a,Button:b.a,Playground:h.c,Props:h.d,LibMessage:p.a},e.DefaultLayout=r.a,e._frontmatter=m,e),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).onClickLeft=e.onClickLeft.bind(Object(a.a)(e)),e.onClickRight=e.onClickRight.bind(Object(a.a)(e)),e.onClickBottom=e.onClickBottom.bind(Object(a.a)(e)),e.onClickTop=e.onClickTop.bind(Object(a.a)(e)),e.onClickCenter=e.onClickCenter.bind(Object(a.a)(e)),e}Object(i.a)(t,n);var e=t.prototype;return e.onClickLeft=function(){u.a.info({content:"左边方向消息",direction:"left"})},e.onClickRight=function(){u.a.info({content:"右边方向消息",direction:"right"})},e.onClickCenter=function(){u.a.info({content:"中间方向消息",direction:"center"})},e.onClickTop=function(){u.a.info({content:"上边方向消息",direction:"top"})},e.onClickBottom=function(){u.a.info({content:"底部方向消息",direction:"bottom"})},e.render=function(){return Object(s.b)(c.Fragment,null,Object(s.b)(b.a,{onClick:this.onClickTop,mdxType:"Button"},"Top"),Object(s.b)(b.a,{onClick:this.onClickBottom,mdxType:"Button"},"Bottom"),Object(s.b)(b.a,{onClick:this.onClickCenter,mdxType:"Button"},"Center"),Object(s.b)(b.a,{onClick:this.onClickLeft,mdxType:"Button"},"Left"),Object(s.b)(b.a,{onClick:this.onClickRight,mdxType:"Button"},"Right"))},t}(c.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"duration"},"Duration"),Object(s.b)(h.c,{__position:3,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleClick = this.handleClick.bind(this)\n    }\n    handleClick() {\n      Message.info({\n        content: 'I can show up only in 5s',\n        duration: 5,\n      })\n    }\n    render() {\n      return <Button onClick={this.handleClick}>duration</Button>\n    }\n  }\n  return <Example />\n}",__scope:(f={props:B,DefaultLayout:r.a,Message:u.a,MessageItem:d.a,Button:b.a,Playground:h.c,Props:h.d,LibMessage:p.a},f.DefaultLayout=r.a,f._frontmatter=m,f),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleClick=e.handleClick.bind(Object(a.a)(e)),e}Object(i.a)(t,n);var e=t.prototype;return e.handleClick=function(){u.a.info({content:"I can show up only in 5s",duration:5})},e.render=function(){return Object(s.b)(b.a,{onClick:this.handleClick,mdxType:"Button"},"duration")},t}(c.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"closable"},"Closable"),Object(s.b)(h.c,{__position:4,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleClick = this.handleClick.bind(this)\n    }\n    handleClick() {\n      Message.info({\n        content: "Close me if you don\'t need me any more",\n        duration: 10,\n        closable: true,\n      })\n    }\n    render() {\n      return <Button onClick={this.handleClick}>Closable</Button>\n    }\n  }\n  return <Example />\n}',__scope:(j={props:B,DefaultLayout:r.a,Message:u.a,MessageItem:d.a,Button:b.a,Playground:h.c,Props:h.d,LibMessage:p.a},j.DefaultLayout=r.a,j._frontmatter=m,j),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleClick=e.handleClick.bind(Object(a.a)(e)),e}Object(i.a)(t,n);var e=t.prototype;return e.handleClick=function(){u.a.info({content:"Close me if you don't need me any more",duration:10,closable:!0})},e.render=function(){return Object(s.b)(b.a,{onClick:this.handleClick,mdxType:"Button"},"Closable")},t}(c.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"complex-content"},"Complex content"),Object(s.b)(h.c,{__position:5,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleClick = this.handleClick.bind(this)\n    }\n    handleClick() {\n      Message.info({\n        content: (\n          <>\n            {' '}\n            <p> This is a paragraph </p>\n            <ul>\n              <li>Course 1</li>\n              <li>Course 2</li>\n              <li>Course 3</li>\n            </ul>\n          </>\n        ),\n      })\n    }\n    render() {\n      return <Button onClick={this.handleClick}>Complex Content</Button>\n    }\n  }\n  return <Example />\n}",__scope:(O={props:B,DefaultLayout:r.a,Message:u.a,MessageItem:d.a,Button:b.a,Playground:h.c,Props:h.d,LibMessage:p.a},O.DefaultLayout=r.a,O._frontmatter=m,O),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleClick=e.handleClick.bind(Object(a.a)(e)),e}Object(i.a)(t,n);var e=t.prototype;return e.handleClick=function(){u.a.info({content:Object(s.b)(c.Fragment,null," ",Object(s.b)("p",null," This is a paragraph "),Object(s.b)("ul",null,Object(s.b)("li",null,"Course 1"),Object(s.b)("li",null,"Course 2"),Object(s.b)("li",null,"Course 3")))})},e.render=function(){return Object(s.b)(b.a,{onClick:this.handleClick,mdxType:"Button"},"Complex Content")},t}(c.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"onclose"},"onClose"),Object(s.b)(h.c,{__position:6,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleClick = this.handleClick.bind(this)\n    }\n    handleClick() {\n      Message.info({\n        content: 'Why not close me now?!',\n        duration: 10,\n        closable: true,\n        onClose: () => {\n          Message.success(\n            {\n              content: 'You have call the onClose successfully!',\n            },\n            2000,\n          )\n        },\n      })\n    }\n    render() {\n      return <Button onClick={this.handleClick}>onClose</Button>\n    }\n  }\n  return <Example />\n}",__scope:(k={props:B,DefaultLayout:r.a,Message:u.a,MessageItem:d.a,Button:b.a,Playground:h.c,Props:h.d,LibMessage:p.a},k.DefaultLayout=r.a,k._frontmatter=m,k),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleClick=e.handleClick.bind(Object(a.a)(e)),e}Object(i.a)(t,n);var e=t.prototype;return e.handleClick=function(){u.a.info({content:"Why not close me now?!",duration:10,closable:!0,onClose:function(){u.a.success({content:"You have call the onClose successfully!"},2e3)}})},e.render=function(){return Object(s.b)(b.a,{onClick:this.handleClick,mdxType:"Button"},"onClose")},t}(c.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"global-settings"},"Global Settings"),Object(s.b)(h.c,{__position:7,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.handleDestroy = this.handleDestroy.bind(this)\n      this.handleDirection = this.handleDirection.bind(this)\n      this.handleDuration = this.handleDuration.bind(this)\n    }\n    handleDestroy() {\n      Message.destroy()\n    }\n    handleDirection() {\n      Message.config({\n        direction: 'left',\n      })\n    }\n    handleDuration() {\n      Message.config({\n        duration: 5,\n      })\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.handleDestroy}>Global Destroy</Button>\n          <Button onClick={this.handleDirection}>Global Direction</Button>\n          <Button onClick={this.handleDuration}>Global Duration</Button>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(y={props:B,DefaultLayout:r.a,Message:u.a,MessageItem:d.a,Button:b.a,Playground:h.c,Props:h.d,LibMessage:p.a},y.DefaultLayout=r.a,y._frontmatter=m,y),mdxType:"Playground"},(function(){var n=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleDestroy=e.handleDestroy.bind(Object(a.a)(e)),e.handleDirection=e.handleDirection.bind(Object(a.a)(e)),e.handleDuration=e.handleDuration.bind(Object(a.a)(e)),e}Object(i.a)(t,n);var e=t.prototype;return e.handleDestroy=function(){u.a.destroy()},e.handleDirection=function(){u.a.config({direction:"left"})},e.handleDuration=function(){u.a.config({duration:5})},e.render=function(){return Object(s.b)(c.Fragment,null,Object(s.b)(b.a,{onClick:this.handleDestroy,mdxType:"Button"},"Global Destroy"),Object(s.b)(b.a,{onClick:this.handleDirection,mdxType:"Button"},"Global Direction"),Object(s.b)(b.a,{onClick:this.handleDuration,mdxType:"Button"},"Global Duration"))},t}(c.Component);return Object(s.b)(n,{mdxType:"Example"})})))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/message/Message.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-message-message-mdx-94e6da32e043bac09d52.js.map