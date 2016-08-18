define("components/test/demo/comment.jsx",function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=e("node_modules/react/react"),l=t(u),i=e("node_modules/react-dom/index"),c=t(i);e("node_modules/whatwg-fetch/fetch");var s=function(e){function t(){return n(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return r(t,e),o(t,[{key:"rawMarkUp",value:function u(){var e=new Remarkable,u=e.render(this.props.children.toString());return{__html:u}}},{key:"render",value:function(){return l.default.createElement("div",{className:"comment"},l.default.createElement("h2",{className:"commentAuthor"},this.props.author),l.default.createElement("div",{dangerouslySetInnerHTML:this.rawMarkUp()}))}}]),t}(l.default.Component),m=function(e){function t(){return n(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return r(t,e),o(t,[{key:"render",value:function(){console.log(this.props.data,"33333");var e=this.props.data.map(function(e){return l.default.createElement(s,{author:e.author,key:e.id},e.text)});return l.default.createElement("div",{className:"commentList"},e)}}]),t}(l.default.Component),h=function(e){function t(e){n(this,t);var r=a(this,Object.getPrototypeOf(t).call(this,e));return r.state={author:"",text:""},r.handleAuthorChange=r.handleAuthorChange.bind(r),r.handleTextChange=r.handleTextChange.bind(r),r.handleSubmit=r.handleSubmit.bind(r),r}return r(t,e),o(t,[{key:"handleAuthorChange",value:function(e){this.setState({author:e.target.value})}},{key:"handleTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.author.trim(),n=this.state.text.trim();n&&t&&(this.props.onCommentSubmit({author:t,text:n,id:Math.random()}),this.setState({author:"",text:""}))}},{key:"render",value:function(){return l.default.createElement("form",{className:"commentForm",onSubmit:this.handleSubmit},l.default.createElement("p",null,l.default.createElement("input",{type:"text",placeholder:"Your name",value:this.state.author,onChange:this.handleAuthorChange})),l.default.createElement("p",null,l.default.createElement("input",{type:"text",placeholder:"Say something...",value:this.state.text,onChange:this.handleTextChange})),l.default.createElement("p",null,l.default.createElement("input",{type:"submit",value:"Post"})))}}]),t}(l.default.Component),d=function(e){function t(e){n(this,t);var r=a(this,Object.getPrototypeOf(t).call(this,e));return r.state={data:[]},r.handleCommentSubmit=r.handleCommentSubmit.bind(r),r}return r(t,e),o(t,[{key:"loadCommentsFromServer",value:function(){var e=this;fetch("/api/comments").then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"handleCommentSubmit",value:function(e){var t=this;fetch("/api/post",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){t.setState({data:e})})}},{key:"componentDidMount",value:function(){this.loadCommentsFromServer()}},{key:"render",value:function(){return l.default.createElement("div",{className:"commentBox"},l.default.createElement("h1",null,"Comments"),l.default.createElement(m,{data:this.state.data,pollInterval:2e3}),l.default.createElement(h,{onCommentSubmit:this.handleCommentSubmit}))}}]),t}(l.default.Component);c.default.render(l.default.createElement(d,{url:"/api/comments"}),document.getElementById("demo1"))});