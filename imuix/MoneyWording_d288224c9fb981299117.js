webpackJsonp([18],{287:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(0),u=o(r),a=t(17),l=t(37),i=o(l),d=t(384),s=u.default.createElement(i.default,{code:t(851),gocgen:t(506)},u.default.createElement(d.Basic,null));(0,a.render)(s,document.getElementById("app"))},384:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.Basic=void 0;var r=t(10),u=o(r),a=t(13),l=o(a),i=t(12),d=o(i),s=t(11),c=o(s),f=t(0),m=o(f),p=t(385);n.Basic=function(e){function n(){return(0,u.default)(this,n),(0,d.default)(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return(0,c.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement(p.MoneyWording,{money:12.23}),m.default.createElement("br",null),m.default.createElement(p.MoneyWording,{money:0}),m.default.createElement("br",null),m.default.createElement(p.MoneyWording,{money:null}))}}]),n}(m.default.PureComponent)},385:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.MoneyWording=void 0;var r=t(10),u=o(r),a=t(13),l=o(a),i=t(12),d=o(i),s=t(11),c=o(s),f=t(0),m=o(f),p=t(1),y=o(p),g=t(3),v=o(g);t(958);var _=n.MoneyWording=function(e){function n(){return(0,u.default)(this,n),(0,d.default)(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return(0,c.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){var e=this.props,n=e.className,t=e.style,o=e.money;return m.default.createElement("span",{className:(0,v.default)(n,o>0?"imuix-money-pay":"imuix-money-free"),style:t},o>0?"¥"+(o/100).toFixed(2):"免费")}}]),n}(f.PureComponent);_.propTypes={style:y.default.object,className:y.default.string,money:y.default.number},_.defaultProps={money:0}},482:function(e,n,t){n=e.exports=t(15)(!1),n.push([e.i,".imuix-money-pay{color:#e85308}.imuix-money-free{color:#5fb41b}",""])},506:function(e,n){e.exports=[{description:"",displayName:"MoneyWording",methods:[],props:{style:{type:{name:"object"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},money:{type:{name:"number"},required:!1,description:"价格,单位分",defaultValue:{value:"0",computed:!1}}}}]},851:function(e,n){e.exports="import React from 'react';\nimport { MoneyWording } from '../index';\n\nexport class Basic extends React.PureComponent {\n  render() {\n    return (\n      <div>\n        <MoneyWording money={12.23}/>\n        <br/>\n        <MoneyWording money={0}/>\n        <br/>\n        <MoneyWording money={null}/>\n      </div>\n    );\n  }\n}"},958:function(e,n,t){var o=t(482);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0,t(16)(o,r),o.locals&&(e.exports=o.locals)},980:function(e,n,t){t(23),e.exports=t(287)}},[980]);