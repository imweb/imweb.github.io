webpackJsonp([20],{286:function(e,a,d){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n=d(0),r=t(n),w=d(17),u=d(37),o=t(u),i=d(382),l=r.default.createElement(o.default,{docgen:d(505),code:d(850)},r.default.createElement(i.Basic,null));(0,w.render)(l,document.getElementById("app"))},382:function(e,a,d){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.Basic=void 0;var n=d(10),r=t(n),w=d(13),u=t(w),o=d(12),i=t(o),l=d(11),c=t(l),f=d(0),s=t(f),p=d(383);a.Basic=function(e){function a(){return(0,r.default)(this,a),(0,i.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,c.default)(a,e),(0,u.default)(a,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(p.MaxWording,{max:10},"313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw 313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw"),s.default.createElement("br",null),s.default.createElement(p.MaxWording,{max:100},"313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw"))}}]),a}(s.default.PureComponent)},383:function(e,a,d){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.MaxWording=void 0;var n=d(10),r=t(n),w=d(13),u=t(w),o=d(12),i=t(o),l=d(11),c=t(l),f=d(0),s=t(f),p=d(1),m=t(p),x=a.MaxWording=function(e){function a(){return(0,r.default)(this,a),(0,i.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,c.default)(a,e),(0,u.default)(a,[{key:"render",value:function(){var e=this.props,a=e.max,d=e.children;return s.default.createElement("span",{title:d},"number"==typeof a&&"string"==typeof d&&d.length>a?d.substr(0,a)+"..":d)}}]),a}(f.PureComponent);x.propTypes={max:m.default.number,children:m.default.string.isRequired},x.defaultProps={}},505:function(e,a){e.exports=[{description:"",displayName:"MaxWording",methods:[],props:{max:{type:{name:"number"},required:!1,description:"最大文字长度,超过制定长度的文字将会被截断显示"},children:{type:{name:"string"},required:!0,description:"文字内容"}}}]},850:function(e,a){e.exports="import React from 'react';\nimport { MaxWording } from '../index';\n\nexport class Basic extends React.PureComponent {\n  render() {\n    return (\n      <div>\n        <MaxWording max={10}>313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw\n          313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw\n        </MaxWording>\n        <br/>\n        <MaxWording max={100}>313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw313adw\n        </MaxWording>\n      </div>\n    );\n  }\n}"},979:function(e,a,d){d(23),e.exports=d(286)}},[979]);