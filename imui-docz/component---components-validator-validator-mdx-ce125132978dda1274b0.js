(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Pimd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return O})),a.d(t,"default",(function(){return F}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var n=a("mXGw"),r=a("/FXl"),i=a("TjRS"),d=a("uczm"),o=(a("QZtU"),a("sR1b")),l=a("uXuz"),b=a("ak8V"),s=a("7K24"),c=a("FDjk"),p=a("JZbt"),m=a("G1Cj"),u=a("ZFoC");a("aD51");function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var O={};void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/validator/Validator.mdx"}});y="Example";var y,j={_frontmatter:O},x=i.a;function F(e){var t,a,y,F,T,R,N,k,v,C,w=e.components,V=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(r.b)(x,f({},j,V,{components:w,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"validator"},"Validator"),Object(r.b)("p",null,"Validator会遍历其所有层级的带有data-patterns属性的表单子元素，通过HOC的方式将其变得可校验化"),Object(r.b)("h3",{id:"表单元素校验属性"},"表单元素校验属性"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",f({parentName:"tr"},{align:"left"}),"属性"),Object(r.b)("th",f({parentName:"tr"},{align:"left"}),"说明"),Object(r.b)("th",f({parentName:"tr"},{align:"left"}),"类型"),Object(r.b)("th",f({parentName:"tr"},{align:"left"}),"默认值"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"data-patterns"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"校验模式，详见说明"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"array")),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"data-trigger"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"校验时机，传入组件支持的事件prop"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"`string"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"array`")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"data-checking"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"传入false关闭校验"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"data-required"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"表单是否必填"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"data-required-msg"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"自定义必填时提示文案"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"data-tips"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"默认提示文案，info类型"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"data-placer"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"表单校验结果的回调，当此属性存在时，表单校验信息默认不展示"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"data-prefix"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"表单校验化后，会被im-validator-enhancer包裹，可在表单前增加前缀元素"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"React Element")),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"data-suffix"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"表单校验化后，会被im-validator-enhancer包裹，可在表单后增加后缀元素"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"React Element")),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(r.b)("h3",{id:"validator-apis"},"Validator APIs"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",f({parentName:"tr"},{align:"left"}),"方法"),Object(r.b)("th",f({parentName:"tr"},{align:"left"}),"说明"),Object(r.b)("th",f({parentName:"tr"},{align:"left"}),"类型"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"checkField(val, name)"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"手动触发某一表单元素的校验，当val为undefined时，Validator会尝试取得表单的当前值"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"Function(val: ",Object(r.b)("inlineCode",{parentName:"td"},"any"),", name: ",Object(r.b)("inlineCode",{parentName:"td"},"string"),"): ",Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"scrollToErrorField(idx, offset)"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"滚动到第",Object(r.b)("inlineCode",{parentName:"td"},"idx"),"个错误的表单元素",Object(r.b)("strong",{parentName:"td"},"(目前不支持offset参数)")),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"Function(idx: ",Object(r.b)("inlineCode",{parentName:"td"},"number"),", offset: ",Object(r.b)("inlineCode",{parentName:"td"},"number"),"): ",Object(r.b)("inlineCode",{parentName:"td"},"bool"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"isAllValid"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"获取当前Validator下所有表单的是否全部通过校验"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"Function(): ",Object(r.b)("inlineCode",{parentName:"td"},"bool"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"isFieldValid(name)"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"获取当前Validator下某个表单的校验值"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"Function(): `null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"resetField(name)"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"重置当前Validator下某个表单的校验状态"),Object(r.b)("td",f({parentName:"tr"},{align:"left"}),"Function(): ",Object(r.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(r.b)("h2",{id:"validator-props--methods"},"Validator Props & Methods"),Object(r.b)(u.d,{of:d.a,mdxType:"Props"}),Object(r.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(r.b)(u.c,{__position:1,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        isFree: true,\n        hasEndTime: 0,\n        canSubmit: false,\n      }\n      this.checkers = {\n        endFlag: (val, callback) => {\n          let isValid = true\n          let msg = ''\n          if (!this.state.isFree && val === 0) {\n            isValid = false\n            msg = '付费课必须选择课程截止日期'\n          }\n          callback({ isValid, msg })\n        },\n      }\n      this.handleTypeChange = this.handleTypeChange.bind(this)\n      this.handleFlagChange = this.handleFlagChange.bind(this)\n      this.toggleSubmit = this.toggleSubmit.bind(this)\n    }\n    handleTypeChange(val) {\n      this.setState(\n        {\n          isFree: val === 1,\n        },\n        () => {\n          return val === 1\n            ? this.validator.checkField(undefined, 'courseRight')\n            : this.validator.checkField(undefined, 'coursePrice')\n        },\n      )\n    }\n    handleFlagChange(val) {\n      this.setState(\n        {\n          hasEndTime: val === 1,\n        },\n        () => {\n          this.validator.checkField(undefined, 'courseEndTime')\n        },\n      )\n    }\n    toggleSubmit(val) {\n      this.setState({\n        canSubmit: val,\n      })\n    }\n    render() {\n      return (\n        <Validator\n          ref={instance => {\n            this.validator = instance\n          }}\n          checkers={this.checkers}\n          onValid={() => this.toggleSubmit(true)}\n          onInValid={() => this.toggleSubmit(false)}\n        >\n          <Form horizontal={false}>\n            <FormRow>\n              <Label required>课程名称(使用内置校验模式)</Label>\n              <Input\n                name=\"courseName\"\n                placeholder=\"1-10个字\"\n                data-required\n                data-patterns={[\n                  {\n                    key: 'limit',\n                    msg: '须在1-10个字内',\n                    limit: {\n                      min: 1,\n                      max: 10,\n                    },\n                  },\n                ]}\n              />\n            </FormRow>\n            <FormRow>\n              <Label required>课程类型(表单联动)</Label>\n              <RadioGroup\n                name=\"courseType\"\n                style={{ display: 'inline' }}\n                defaultValue={1}\n                onChange={this.handleTypeChange}\n                data-required\n                data-patterns={[]}\n              >\n                <Radio value={1}>免费</Radio>\n                <Radio value={2}>收费</Radio>\n              </RadioGroup>\n            </FormRow>\n            {!this.state.isFree ? (\n              <FormRow>\n                <Label required>课程价格</Label>\n                <Input\n                  name=\"coursePrice\"\n                  placeholder=\"内置校验模式\"\n                  data-required\n                  data-patterns={[\n                    {\n                      key: 'range',\n                      msg: '须在1-8000元之间',\n                      range: {\n                        min: 1,\n                        max: 8000,\n                      },\n                    },\n                  ]}\n                />\n              </FormRow>\n            ) : (\n              <FormRow>\n                <Label required>课程版权</Label>\n                <Dropdown\n                  name=\"courseRight\"\n                  options={[\n                    {\n                      value: 1,\n                      display: '免费提供课程版权给课堂',\n                    },\n                    {\n                      value: 2,\n                      display: '不提供课程版权',\n                    },\n                  ]}\n                  style={{ width: 200 }}\n                  data-required\n                  data-patterns={[]}\n                />\n              </FormRow>\n            )}\n            <FormRow>\n              <Label>课程有效期(使用传入的校验模式，表单联动)</Label>\n              <Dropdown\n                name=\"courseEndFlag\"\n                options={[\n                  {\n                    value: 1,\n                    display: '课程截止时间',\n                  },\n                  {\n                    value: 0,\n                    display: '学习有效期',\n                  },\n                ]}\n                style={{ width: 200 }}\n                onChange={this.handleFlagChange}\n                data-patterns={[\n                  {\n                    key: 'endFlag',\n                  },\n                ]}\n              />\n              {this.state.hasEndTime ? (\n                <FormRow>\n                  <Label required>截止时间</Label>\n                  <Datepicker\n                    name=\"courseEndTime\"\n                    data-required\n                    data-patterns={[]}\n                  />\n                </FormRow>\n              ) : null}\n            </FormRow>\n            <Button disabled={!this.state.canSubmit}>提交</Button>\n          </Form>\n        </Validator>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(t={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},t.DefaultLayout=i.a,t._frontmatter=O,t),mdxType:"Playground"},(function(){var e=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isFree:!0,hasEndTime:0,canSubmit:!1},a.checkers={endFlag:function(e,t){var n=!0,r="";a.state.isFree||0!==e||(n=!1,r="付费课必须选择课程截止日期"),t({isValid:n,msg:r})}},a.handleTypeChange=a.handleTypeChange.bind(g(a)),a.handleFlagChange=a.handleFlagChange.bind(g(a)),a.toggleSubmit=a.toggleSubmit.bind(g(a)),a}h(t,e);var a=t.prototype;return a.handleTypeChange=function(e){var t=this;this.setState({isFree:1===e},(function(){return 1===e?t.validator.checkField(void 0,"courseRight"):t.validator.checkField(void 0,"coursePrice")}))},a.handleFlagChange=function(e){var t=this;this.setState({hasEndTime:1===e},(function(){t.validator.checkField(void 0,"courseEndTime")}))},a.toggleSubmit=function(e){this.setState({canSubmit:e})},a.render=function(){var e=this;return Object(r.b)(d.a,{ref:function(t){e.validator=t},checkers:this.checkers,onValid:function(){return e.toggleSubmit(!0)},onInValid:function(){return e.toggleSubmit(!1)},mdxType:"Validator"},Object(r.b)(o.a,{horizontal:!1,mdxType:"Form"},Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{required:!0,mdxType:"Label"},"课程名称(使用内置校验模式)"),Object(r.b)(l.a,{name:"courseName",placeholder:"1-10个字","data-required":!0,"data-patterns":[{key:"limit",msg:"须在1-10个字内",limit:{min:1,max:10}}],mdxType:"Input"})),Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{required:!0,mdxType:"Label"},"课程类型(表单联动)"),Object(r.b)(b.b,{name:"courseType",style:{display:"inline"},defaultValue:1,onChange:this.handleTypeChange,"data-required":!0,"data-patterns":[],mdxType:"RadioGroup"},Object(r.b)(b.a,{value:1,mdxType:"Radio"},"免费"),Object(r.b)(b.a,{value:2,mdxType:"Radio"},"收费"))),this.state.isFree?Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{required:!0,mdxType:"Label"},"课程版权"),Object(r.b)(s.a,{name:"courseRight",options:[{value:1,display:"免费提供课程版权给课堂"},{value:2,display:"不提供课程版权"}],style:{width:200},"data-required":!0,"data-patterns":[],mdxType:"Dropdown"})):Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{required:!0,mdxType:"Label"},"课程价格"),Object(r.b)(l.a,{name:"coursePrice",placeholder:"内置校验模式","data-required":!0,"data-patterns":[{key:"range",msg:"须在1-8000元之间",range:{min:1,max:8e3}}],mdxType:"Input"})),Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{mdxType:"Label"},"课程有效期(使用传入的校验模式，表单联动)"),Object(r.b)(s.a,{name:"courseEndFlag",options:[{value:1,display:"课程截止时间"},{value:0,display:"学习有效期"}],style:{width:200},onChange:this.handleFlagChange,"data-patterns":[{key:"endFlag"}],mdxType:"Dropdown"}),this.state.hasEndTime?Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{required:!0,mdxType:"Label"},"截止时间"),Object(r.b)(c.a,{name:"courseEndTime","data-required":!0,"data-patterns":[],mdxType:"Datepicker"})):null),Object(r.b)(p.a,{disabled:!this.state.canSubmit,mdxType:"Button"},"提交")))},t}(n.Component);return Object(r.b)(e,{mdxType:"Example"})})),Object(r.b)("h2",{id:"msgalign"},"msgAlign"),Object(r.b)(u.c,{__position:2,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n    }\n    render() {\n      return (\n        <Validator msgAlign=\"bottom\">\n          <Form inline horizontal={false}>\n            <FormRow>\n              <Label>Email</Label>\n              <Input\n                placeholder={'xxx@abc.com'}\n                name=\"email\"\n                data-required\n                data-patterns={[\n                  {\n                    key: 'email',\n                    msg: '请输入邮箱地址',\n                  },\n                ]}\n              />\n            </FormRow>\n            <FormRow>\n              <Label>Mobile</Label>\n              <Input\n                placeholder={'11位数字'}\n                name=\"mobile\"\n                data-required\n                data-patterns={[\n                  {\n                    key: 'mobile',\n                    msg: '请输入手机号码',\n                  },\n                ]}\n              />\n            </FormRow>\n            <FormRow>\n              <Label>An Integer</Label>\n              <Input\n                placeholder={'0'}\n                name=\"integer\"\n                data-required\n                data-patterns={[\n                  {\n                    key: 'integer',\n                    msg: '必须是数字',\n                  },\n                ]}\n              />\n            </FormRow>\n          </Form>\n          <br />\n          <Button>Submit</Button>\n        </Validator>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(a={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},a.DefaultLayout=i.a,a._frontmatter=O,a),mdxType:"Playground"},(function(){var e=function(e){function t(t){return e.call(this,t)||this}return h(t,e),t.prototype.render=function(){return Object(r.b)(d.a,{msgAlign:"bottom",mdxType:"Validator"},Object(r.b)(o.a,{inline:!0,horizontal:!1,mdxType:"Form"},Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{mdxType:"Label"},"Email"),Object(r.b)(l.a,{placeholder:"xxx@abc.com",name:"email","data-required":!0,"data-patterns":[{key:"email",msg:"请输入邮箱地址"}],mdxType:"Input"})),Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{mdxType:"Label"},"Mobile"),Object(r.b)(l.a,{placeholder:"11位数字",name:"mobile","data-required":!0,"data-patterns":[{key:"mobile",msg:"请输入手机号码"}],mdxType:"Input"})),Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{mdxType:"Label"},"An Integer"),Object(r.b)(l.a,{placeholder:"0",name:"integer","data-required":!0,"data-patterns":[{key:"integer",msg:"必须是数字"}],mdxType:"Input"}))),Object(r.b)("br",null),Object(r.b)(p.a,{mdxType:"Button"},"Submit"))},t}(n.Component);return Object(r.b)(e,{mdxType:"Example"})})),Object(r.b)("h2",{id:"onvalid--oninvalid"},"onValid / onInValid"),Object(r.b)(u.c,{__position:3,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        canSubmit: false,\n      }\n      this.enableBtn = this.enableBtn.bind(this)\n      this.disableBtn = this.disableBtn.bind(this)\n      this.getFormValid = this.getFormValid.bind(this)\n    }\n    enableBtn() {\n      this.setState({ canSubmit: true })\n    }\n    disableBtn() {\n      this.setState({ canSubmit: false })\n    }\n    getFormValid() {\n      alert(this.refs.validator.isAllValid())\n    }\n    render() {\n      return (\n        <Validator\n          ref="validator"\n          onValid={this.enableBtn}\n          onInValid={this.disableBtn}\n        >\n          <Form>\n            <FormRow>\n              <Label required>手机号</Label>\n              <Input\n                name="field1"\n                placeholder="请填写您的手机号"\n                data-required\n                data-patterns={[\n                  {\n                    key: \'mobile\',\n                    msg: \'格式不正确\',\n                  },\n                ]}\n              />\n            </FormRow>\n            <FormRow>\n              <Label>邮箱</Label>\n              <Input\n                name="field2"\n                placeholder="请填写您的邮箱"\n                data-patterns={[\n                  {\n                    key: \'email\',\n                    msg: \'格式不正确\',\n                  },\n                ]}\n              />\n            </FormRow>\n            <FormRow>\n              <Label>生日</Label>\n              <Datepicker name="field3" data-patterns={[]} />\n            </FormRow>\n            <FormRow>\n              <Label required>性别</Label>\n              <RadioGroup name="field4" data-required data-patterns={[]}>\n                <Radio value="0">男</Radio>\n                <Radio value="1">女</Radio>\n              </RadioGroup>\n            </FormRow>\n            <Button type="button" disabled={!this.state.canSubmit}>\n              提交\n            </Button>\n            <Button type="button" onClick={this.getFormValid}>\n              API: isAllValid()\n            </Button>\n          </Form>\n        </Validator>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(y={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},y.DefaultLayout=i.a,y._frontmatter=O,y),mdxType:"Playground"},(function(){var e=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={canSubmit:!1},a.enableBtn=a.enableBtn.bind(g(a)),a.disableBtn=a.disableBtn.bind(g(a)),a.getFormValid=a.getFormValid.bind(g(a)),a}h(t,e);var a=t.prototype;return a.enableBtn=function(){this.setState({canSubmit:!0})},a.disableBtn=function(){this.setState({canSubmit:!1})},a.getFormValid=function(){alert(this.refs.validator.isAllValid())},a.render=function(){return Object(r.b)(d.a,{ref:"validator",onValid:this.enableBtn,onInValid:this.disableBtn,mdxType:"Validator"},Object(r.b)(o.a,{mdxType:"Form"},Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{required:!0,mdxType:"Label"},"手机号"),Object(r.b)(l.a,{name:"field1",placeholder:"请填写您的手机号","data-required":!0,"data-patterns":[{key:"mobile",msg:"格式不正确"}],mdxType:"Input"})),Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{mdxType:"Label"},"邮箱"),Object(r.b)(l.a,{name:"field2",placeholder:"请填写您的邮箱","data-patterns":[{key:"email",msg:"格式不正确"}],mdxType:"Input"})),Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{mdxType:"Label"},"生日"),Object(r.b)(c.a,{name:"field3","data-patterns":[],mdxType:"Datepicker"})),Object(r.b)(o.b,{mdxType:"FormRow"},Object(r.b)(o.c,{required:!0,mdxType:"Label"},"性别"),Object(r.b)(b.b,{name:"field4","data-required":!0,"data-patterns":[],mdxType:"RadioGroup"},Object(r.b)(b.a,{value:"0",mdxType:"Radio"},"男"),Object(r.b)(b.a,{value:"1",mdxType:"Radio"},"女"))),Object(r.b)(p.a,{type:"button",disabled:!this.state.canSubmit,mdxType:"Button"},"提交"),Object(r.b)(p.a,{type:"button",onClick:this.getFormValid,mdxType:"Button"},"API: isAllValid()")))},t}(n.Component);return Object(r.b)(e,{mdxType:"Example"})})),Object(r.b)("h2",{id:"validator-apis-1"},"Validator APIs"),Object(r.b)(u.c,{__position:4,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.scroll = this.scroll.bind(this)\n      this.alertResult = this.alertResult.bind(this)\n      this.resetField = this.resetField.bind(this)\n    }\n    scroll() {\n      this.refs.validator.scrollToErrorField(0)\n    }\n    alertResult() {\n      alert(this.refs.validator.isFieldValid('field'))\n    }\n    resetField() {\n      this.refs.validator.resetField('field')\n    }\n    render() {\n      return (\n        <Validator ref=\"validator\">\n          <Input\n            name=\"field\"\n            placeholder=\"YYYY-MM-DD\"\n            data-required\n            data-patterns={[\n              {\n                key: 'date',\n                msg: '请输入日期',\n              },\n            ]}\n          />\n          <br />\n          <Button onClick={this.scroll}>scrollToErrorField</Button>\n          <Button onClick={this.alertResult}>isFieldValid</Button>\n          <Button onClick={this.resetField}>resetField</Button>\n        </Validator>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(F={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},F.DefaultLayout=i.a,F._frontmatter=O,F),mdxType:"Playground"},(function(){var e=function(e){function t(t){var a;return(a=e.call(this,t)||this).scroll=a.scroll.bind(g(a)),a.alertResult=a.alertResult.bind(g(a)),a.resetField=a.resetField.bind(g(a)),a}h(t,e);var a=t.prototype;return a.scroll=function(){this.refs.validator.scrollToErrorField(0)},a.alertResult=function(){alert(this.refs.validator.isFieldValid("field"))},a.resetField=function(){this.refs.validator.resetField("field")},a.render=function(){return Object(r.b)(d.a,{ref:"validator",mdxType:"Validator"},Object(r.b)(l.a,{name:"field",placeholder:"YYYY-MM-DD","data-required":!0,"data-patterns":[{key:"date",msg:"请输入日期"}],mdxType:"Input"}),Object(r.b)("br",null),Object(r.b)(p.a,{onClick:this.scroll,mdxType:"Button"},"scrollToErrorField"),Object(r.b)(p.a,{onClick:this.alertResult,mdxType:"Button"},"isFieldValid"),Object(r.b)(p.a,{onClick:this.resetField,mdxType:"Button"},"resetField"))},t}(n.Component);return Object(r.b)(e,{mdxType:"Example"})})),Object(r.b)("h2",{id:""}),Object(r.b)("h1",{id:"enhancer"},"enhancer"),Object(r.b)("h2",{id:"prefix--suffix"},"Prefix / Suffix"),Object(r.b)(u.c,{__position:5,__code:"<Validator>\n  <Input\n    name=\"field\"\n    data-prefix=\"I am a prefix \"\n    data-suffix={<span> I am a suffix</span>}\n    data-required\n    data-patterns={[\n      {\n        key: 'email',\n        msg: '请输入邮箱地址',\n      },\n    ]}\n  />\n</Validator>",__scope:(T={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},T.DefaultLayout=i.a,T._frontmatter=O,T),mdxType:"Playground"},Object(r.b)(d.a,{mdxType:"Validator"},Object(r.b)(l.a,{name:"field","data-prefix":"I am a prefix ","data-suffix":Object(r.b)("span",null," I am a suffix"),"data-required":!0,"data-patterns":[{key:"email",msg:"请输入邮箱地址"}],mdxType:"Input"}))),Object(r.b)("h2",{id:"默认提示：data-tips"},"默认提示：data-tips"),Object(r.b)(u.c,{__position:6,__code:'<Validator>\n  <Input\n    placeholder="Try data-tips"\n    name="required-msg"\n    data-required\n    data-tips="默认提示"\n    data-patterns={[]}\n  />\n</Validator>',__scope:(R={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},R.DefaultLayout=i.a,R._frontmatter=O,R),mdxType:"Playground"},Object(r.b)(d.a,{mdxType:"Validator"},Object(r.b)(l.a,{placeholder:"Try data-tips",name:"required-msg","data-required":!0,"data-tips":"默认提示","data-patterns":[],mdxType:"Input"}))),Object(r.b)("h2",{id:"自定义必填提示：data-required-msg"},"自定义必填提示：data-required-msg"),Object(r.b)(u.c,{__position:7,__code:'<Validator>\n  <Input\n    placeholder={\'Try data-required-msg\'}\n    name="data-tips"\n    data-required\n    data-required-msg="该选项不能为空，请输入"\n    data-patterns={[]}\n  />\n</Validator>',__scope:(N={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},N.DefaultLayout=i.a,N._frontmatter=O,N),mdxType:"Playground"},Object(r.b)(d.a,{mdxType:"Validator"},Object(r.b)(l.a,{placeholder:"Try data-required-msg",name:"data-tips","data-required":!0,"data-required-msg":"该选项不能为空，请输入","data-patterns":[],mdxType:"Input"}))),Object(r.b)("h2",{id:"自定义提示信息位置-data-placer"},"自定义提示信息位置: data-placer"),Object(r.b)(u.c,{__position:8,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        msgEl: null,\n      }\n      this.showErrMsg = this.showErrMsg.bind(this)\n    }\n    showErrMsg(data) {\n      console.log(data)\n      this.setState({\n        msgEl: data.msgEl,\n      })\n    }\n    render() {\n      return (\n        <Validator>\n          <span> {this.state.msgEl}</span>\n          <Input\n            placeholder=\"Try data-placer\"\n            name=\"field2\"\n            data-required\n            data-placer={this.showErrMsg}\n            data-patterns={[\n              {\n                key: 'email',\n                msg: '请输入邮箱地址',\n              },\n            ]}\n          />\n          <span> {this.state.msgEl}</span>\n        </Validator>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(k={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},k.DefaultLayout=i.a,k._frontmatter=O,k),mdxType:"Playground"},(function(){var e=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={msgEl:null},a.showErrMsg=a.showErrMsg.bind(g(a)),a}h(t,e);var a=t.prototype;return a.showErrMsg=function(e){console.log(e),this.setState({msgEl:e.msgEl})},a.render=function(){return Object(r.b)(d.a,{mdxType:"Validator"},Object(r.b)("span",null," ",this.state.msgEl),Object(r.b)(l.a,{placeholder:"Try data-placer",name:"field2","data-required":!0,"data-placer":this.showErrMsg,"data-patterns":[{key:"email",msg:"请输入邮箱地址"}],mdxType:"Input"}),Object(r.b)("span",null," ",this.state.msgEl))},t}(n.Component);return Object(r.b)(e,{mdxType:"Example"})})),Object(r.b)("h2",{id:"自定义校验时机-data-trigger"},"自定义校验时机: data-trigger"),Object(r.b)(u.c,{__position:9,__code:'<Validator>\n  <Input\n    name="field"\n    placeholder="onChange Trigger"\n    data-required\n    data-trigger="onChange"\n    data-patterns={[\n      {\n        key: \'email\',\n        msg: \'请输入邮箱地址\',\n      },\n    ]}\n  />\n  <div style={{ height: \'10px\' }}> </div>\n  <Input\n    name="field2"\n    placeholder="onBlur Trigger"\n    data-required\n    data-trigger="onBlur"\n    data-patterns={[\n      {\n        key: \'email\',\n        msg: \'请输入邮箱地址\',\n      },\n    ]}\n  />\n</Validator>',__scope:(v={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},v.DefaultLayout=i.a,v._frontmatter=O,v),mdxType:"Playground"},Object(r.b)(d.a,{mdxType:"Validator"},Object(r.b)(l.a,{name:"field",placeholder:"onChange Trigger","data-required":!0,"data-trigger":"onChange","data-patterns":[{key:"email",msg:"请输入邮箱地址"}],mdxType:"Input"}),Object(r.b)("div",{style:{height:"10px"}}," "),Object(r.b)(l.a,{name:"field2",placeholder:"onBlur Trigger","data-required":!0,"data-trigger":"onBlur","data-patterns":[{key:"email",msg:"请输入邮箱地址"}],mdxType:"Input"}))),Object(r.b)("h2",{id:"check-on--off"},"Check On / Off"),Object(r.b)(u.c,{__position:10,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        isChecking: true,\n      }\n      this.toggleChecking = this.toggleChecking.bind(this)\n    }\n    toggleChecking() {\n      this.setState({\n        isChecking: !this.state.isChecking,\n      })\n    }\n    render() {\n      return (\n        <Validator>\n          <p> The check is {this.state.isChecking ? 'on' : 'off'} </p>\n          <Input\n            name=\"field\"\n            placeholder=\"Try data-checking\"\n            data-checking={this.state.isChecking}\n            data-patterns={[\n              {\n                key: 'limit',\n                msg: '须在5-50个字内',\n                limit: {\n                  min: 5,\n                  max: 50,\n                },\n              },\n            ]}\n          />\n          <br />\n          <Button onClick={this.toggleChecking}>toggle校验</Button>\n        </Validator>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(C={props:V,DefaultLayout:i.a,Validator:d.a,Form:o.a,FormRow:o.b,Label:o.c,Input:l.a,Radio:b.a,RadioGroup:b.b,Dropdown:s.a,Datepicker:c.a,Button:p.a,Message:m.a,Playground:u.c,Props:u.d},C.DefaultLayout=i.a,C._frontmatter=O,C),mdxType:"Playground"},(function(){var e=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isChecking:!0},a.toggleChecking=a.toggleChecking.bind(g(a)),a}h(t,e);var a=t.prototype;return a.toggleChecking=function(){this.setState({isChecking:!this.state.isChecking})},a.render=function(){return Object(r.b)(d.a,{mdxType:"Validator"},Object(r.b)("p",null," The check is ",this.state.isChecking?"on":"off"," "),Object(r.b)(l.a,{name:"field",placeholder:"Try data-checking","data-checking":this.state.isChecking,"data-patterns":[{key:"limit",msg:"须在5-50个字内",limit:{min:5,max:50}}],mdxType:"Input"}),Object(r.b)("br",null),Object(r.b)(p.a,{onClick:this.toggleChecking,mdxType:"Button"},"toggle校验"))},t}(n.Component);return Object(r.b)(e,{mdxType:"Example"})})))}void 0!==F&&F&&F===Object(F)&&Object.isExtensible(F)&&!F.hasOwnProperty("__filemeta")&&Object.defineProperty(F,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/validator/Validator.mdx"}}),F.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-validator-validator-mdx-ce125132978dda1274b0.js.map