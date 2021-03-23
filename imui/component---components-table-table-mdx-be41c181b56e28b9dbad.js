(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{hqrm:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return T})),a.d(e,"default",(function(){return N}));var n=a("Fcif"),o=a("6CzD"),l=a("0942"),r=a("7L9N"),b=a("+I+c"),s=a("mXGw"),i=a("/FXl"),c=a("TjRS"),d=a("rfow"),p=a("gQAw"),u=a("CcK1"),h=a("4d6x"),y=a("wl+G"),m=a("O2Re"),j=(a("+u2d"),a("CkN+"),a("0w9v"),a("xtFu"),a("uk/G"),a("QL5E"),a("AfIB")),O=a("nV0/"),f=a("JZbt"),w=a("ZFoC"),T=(a("aD51"),{});void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&!T.hasOwnProperty("__filemeta")&&Object.defineProperty(T,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/table/Table.mdx"}});g="Example";var g,C={_frontmatter:T},D=c.a;function N(t){var e,a,g,N,_,P,x,v,A,R,k,B,S,I=t.components,L=Object(b.a)(t,["components"]);return Object(i.b)(D,Object(n.a)({},C,L,{components:I,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"table"},"Table"),Object(i.b)("h2",{id:"props--methods"},"Props & Methods"),Object(i.b)("h3",{id:"table-1"},"Table"),Object(i.b)(w.d,{of:d.a,mdxType:"Props"}),Object(i.b)("h3",{id:"collapsetable"},"CollapseTable"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"可折叠行表格,封装自Table，具有以下功能：\n    - 可折叠部分行\n")),Object(i.b)(w.d,{of:p.a,mdxType:"Props"}),Object(i.b)("h3",{id:"data"},"👆data"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"属性"),Object(i.b)("th",{parentName:"tr",align:"left"},"说明"),Object(i.b)("th",{parentName:"tr",align:"left"},"类型"),Object(i.b)("th",{parentName:"tr",align:"left"},"默认值"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"row"),Object(i.b)("td",{parentName:"tr",align:"left"},"一维数组，当前一行需要的数据。该行会一直显示，通过点击来控制是否显示对应被控制的折叠的行是否显示 如果数组元素是 React组件实例：展示元素本身 else：展示元素toString()  如果数组元素是空字符串或者==null会显示为'-'"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"array.isRequired")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"collapseRows"),Object(i.b)("td",{parentName:"tr",align:"left"},"当前这行控制的可以被折叠的行,二维数组"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"arrayOf(PropTypes.array)")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"showCollapseRows"),Object(i.b)("td",{parentName:"tr",align:"left"},"是否显示,当前这行控制的可以被折叠的行"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"arrayOf(PropTypes.array)")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"false"))))),Object(i.b)("h3",{id:"autotable"},"AutoTable"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"数据表格组件，封装自Table,具有以下功能：\n    - 自动分页\n    - 数据缓存\n    - 选中\n    - 排序\n    - 筛选\n")),Object(i.b)(w.d,{of:y.a,mdxType:"Props"}),Object(i.b)("h3",{id:"cols"},"👆cols"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"属性"),Object(i.b)("th",{parentName:"tr",align:"left"},"说明"),Object(i.b)("th",{parentName:"tr",align:"left"},"类型"),Object(i.b)("th",{parentName:"tr",align:"left"},"默认值"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"display"),Object(i.b)("td",{parentName:"tr",align:"left"},"表格头部一列名称 如果数组元素是 React组件实例：展示元素本身 else：展示元素toString()"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"array.isRequired")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"width"),Object(i.b)("td",{parentName:"tr",align:"left"},"表格一列所占宽度百分比"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"colspan"),Object(i.b)("td",{parentName:"tr",align:"left"},"跨列,默认为1"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"1"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"sort"),Object(i.b)("td",{parentName:"tr",align:"left"},"该表头是否需要排序，如果需要排序  1.该列只有一个排序选项：请传入一个只有一个元素的","[SortType]","类型的Arrays  2.该列有多个排序选项:请传入一个","[SortType]","类型的Arrays"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"arrayOf")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(i.b)("h3",{id:"sort"},"👆sort"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"属性"),Object(i.b)("th",{parentName:"tr",align:"left"},"说明"),Object(i.b)("th",{parentName:"tr",align:"left"},"类型"),Object(i.b)("th",{parentName:"tr",align:"left"},"默认值"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"display"),Object(i.b)("td",{parentName:"tr",align:"left"},"表格头部一列名称 如果数组元素是 React组件实例：展示元素本身 else：展示元素toString()"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"array.isRequired")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"key"),Object(i.b)("td",{parentName:"tr",align:"left"},"用于表示该排序方法的唯一key"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"string.isRequired")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"value"),Object(i.b)("td",{parentName:"tr",align:"left"},"默认排序方法 1=顺序 -1=逆序 如果==null表示当前排序方法默认不启用"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"oneOf([-1, 1])")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(i.b)("h3",{id:"autocollapsetable"},"AutoCollapseTable"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"可折叠行表格数据表格组件，封装自CollapseTable,具有以下功能：\n    - 可折叠部分行\n    - 自动分页\n    - 数据缓存\n    - 选中\n    - 排序\n    - 筛选\n")),Object(i.b)(w.d,{of:p.a,mdxType:"Props"}),Object(i.b)("h3",{id:"tablesort"},"TableSort"),Object(i.b)(w.d,{of:u.a,mdxType:"Props"}),Object(i.b)("h3",{id:"options"},"👆options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"属性"),Object(i.b)("th",{parentName:"tr",align:"left"},"说明"),Object(i.b)("th",{parentName:"tr",align:"left"},"类型"),Object(i.b)("th",{parentName:"tr",align:"left"},"默认值"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"display"),Object(i.b)("td",{parentName:"tr",align:"left"},"用来展示"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"any.isRequired")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"value"),Object(i.b)("td",{parentName:"tr",align:"left"},"用于回调"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"any.isRequired")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)(w.c,{__position:5,__code:"<Table\n  cols={[\n    { display: '角色', width: 8 },\n    { display: '描述', width: 40 },\n    { display: '成员数', width: 5 },\n    {\n      display: (\n        <span>\n          操作\n          <Icon type=\"question\" />\n        </span>\n      ),\n      width: 20,\n    },\n  ]}\n  data={[\n    [\n      '超级管理员',\n      '机构创始人，拥有所有功能的权限，且可以为其他角色自由配置功能。',\n      1,\n      <a>管理成员</a>,\n    ],\n    [\n      '教学管理员',\n      '机构创始人从所关联的成员中选取，协助管理机构，主要是教务教学相关工作的管理，默认拥有大部分权限。',\n      62,\n      <a>管理成员</a>,\n    ],\n    [\n      '老师',\n      '主要负责给学生上课，以及准备课程教案和教学资料。',\n      230,\n      <a>管理成员</a>,\n    ],\n    [\n      '助教',\n      '主要协助老师上课，工作内容包括在课堂上进行班级纪律管理，以及维护班级交流QQ群等。',\n      232,\n      <a>管理成员</a>,\n    ],\n    [\n      '销售管理员',\n      '销售模块的管理人员，默认拥有查询学员、分配销售人员并查看机构与销售人员的销售相关数据的权限。',\n      3,\n      <a>管理成员</a>,\n    ],\n    [\n      '教务',\n      '主要负责除了上课之外的大部分教务教学相关工作。',\n      5,\n      <a>管理成员</a>,\n    ],\n    [\n      '销售',\n      '销售人员，默认拥有查询被分配课程的学员、查看自己的销售数据并进行销售记录的相关权限。',\n      12,\n      <a>管理成员</a>,\n    ],\n    ['财务', '主要负责机构营收的查询和管理。', 1, <a>管理成员</a>],\n    [\n      '自定义1',\n      '自定义1',\n      1,\n      <div>\n        <a>管理成员</a>\n        <br />\n        <a>编辑角色</a>\n        <br />\n        <a>删除</a>\n        <br />\n      </div>,\n    ],\n  ]}\n/>",__scope:(e={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},e.DefaultLayout=c.a,e._frontmatter=T,e),mdxType:"Playground"},Object(i.b)(d.a,{cols:[{display:"角色",width:8},{display:"描述",width:40},{display:"成员数",width:5},{display:Object(i.b)("span",null,"操作",Object(i.b)(O.a,{type:"question",mdxType:"Icon"})),width:20}],data:[["超级管理员","机构创始人，拥有所有功能的权限，且可以为其他角色自由配置功能。",1,Object(i.b)("a",null,"管理成员")],["教学管理员","机构创始人从所关联的成员中选取，协助管理机构，主要是教务教学相关工作的管理，默认拥有大部分权限。",62,Object(i.b)("a",null,"管理成员")],["老师","主要负责给学生上课，以及准备课程教案和教学资料。",230,Object(i.b)("a",null,"管理成员")],["助教","主要协助老师上课，工作内容包括在课堂上进行班级纪律管理，以及维护班级交流QQ群等。",232,Object(i.b)("a",null,"管理成员")],["销售管理员","销售模块的管理人员，默认拥有查询学员、分配销售人员并查看机构与销售人员的销售相关数据的权限。",3,Object(i.b)("a",null,"管理成员")],["教务","主要负责除了上课之外的大部分教务教学相关工作。",5,Object(i.b)("a",null,"管理成员")],["销售","销售人员，默认拥有查询被分配课程的学员、查看自己的销售数据并进行销售记录的相关权限。",12,Object(i.b)("a",null,"管理成员")],["财务","主要负责机构营收的查询和管理。",1,Object(i.b)("a",null,"管理成员")],["自定义1","自定义1",1,Object(i.b)("div",null,Object(i.b)("a",null,"管理成员"),Object(i.b)("br",null),Object(i.b)("a",null,"编辑角色"),Object(i.b)("br",null),Object(i.b)("a",null,"删除"),Object(i.b)("br",null))]],mdxType:"Table"})),Object(i.b)("h2",{id:"complex-header"},"Complex Header"),Object(i.b)(w.c,{__position:6,__code:"<Table\n  cols={[\n    { display: '角色', width: 8 },\n    {\n      display: (\n        <table style={{ width: '100%' }}>\n          <tbody>\n            <tr>\n              <td>A</td>\n              <td>B</td>\n            </tr>\n            <tr>\n              <td colSpan=\"2\">C</td>\n            </tr>\n          </tbody>\n        </table>\n      ),\n      width: 40,\n    },\n    { display: '成员数', width: 5 },\n    { display: '操作', width: 20 },\n  ]}\n  data={[\n    [\n      '超级管理员',\n      '机构创始人，拥有所有功能的权限，且可以为其他角色自由配置功能。',\n      1,\n      <a>管理成员</a>,\n    ],\n    [\n      '教学管理员',\n      '机构创始人从所关联的成员中选取，协助管理机构，主要是教务教学相关工作的管理，默认拥有大部分权限。',\n      62,\n      <a>管理成员</a>,\n    ],\n    [\n      '老师',\n      '主要负责给学生上课，以及准备课程教案和教学资料。',\n      230,\n      <a>管理成员</a>,\n    ],\n    [\n      '助教',\n      '主要协助老师上课，工作内容包括在课堂上进行班级纪律管理，以及维护班级交流QQ群等。',\n      232,\n      <a>管理成员</a>,\n    ],\n  ]}\n/>",__scope:(a={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},a.DefaultLayout=c.a,a._frontmatter=T,a),mdxType:"Playground"},Object(i.b)(d.a,{cols:[{display:"角色",width:8},{display:Object(i.b)("table",{style:{width:"100%"}},Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"A"),Object(i.b)("td",null,"B")),Object(i.b)("tr",null,Object(i.b)("td",{colSpan:"2"},"C")))),width:40},{display:"成员数",width:5},{display:"操作",width:20}],data:[["超级管理员","机构创始人，拥有所有功能的权限，且可以为其他角色自由配置功能。",1,Object(i.b)("a",null,"管理成员")],["教学管理员","机构创始人从所关联的成员中选取，协助管理机构，主要是教务教学相关工作的管理，默认拥有大部分权限。",62,Object(i.b)("a",null,"管理成员")],["老师","主要负责给学生上课，以及准备课程教案和教学资料。",230,Object(i.b)("a",null,"管理成员")],["助教","主要协助老师上课，工作内容包括在课堂上进行班级纪律管理，以及维护班级交流QQ群等。",232,Object(i.b)("a",null,"管理成员")]],mdxType:"Table"})),Object(i.b)("h2",{id:"cross-column"},"Cross Column"),Object(i.b)(w.c,{__position:7,__code:"<Table\n  cols={[\n    { display: '角色', width: 8 },\n    { display: '描述', width: 80, colspan: 2 },\n    { display: '操作', width: 10 },\n  ]}\n  data={[\n    [\n      '超级管理员',\n      '机构创始人，拥有所有功能的权限，且可以为其他角色自由配置功能。',\n      1,\n      <a>管理成员</a>,\n    ],\n    [\n      '教学管理员',\n      '机构创始人从所关联的成员中选取，协助管理机构，主要是教务教学相关工作的管理，默认拥有大部分权限。',\n      62,\n      <a>管理成员</a>,\n    ],\n    [\n      '老师',\n      '主要负责给学生上课，以及准备课程教案和教学资料。',\n      230,\n      <a>管理成员</a>,\n    ],\n    [\n      '助教',\n      '主要协助老师上课，工作内容包括在课堂上进行班级纪律管理，以及维护班级交流QQ群等。',\n      232,\n      <a>管理成员</a>,\n    ],\n  ]}\n/>",__scope:(g={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},g.DefaultLayout=c.a,g._frontmatter=T,g),mdxType:"Playground"},Object(i.b)(d.a,{cols:[{display:"角色",width:8},{display:"描述",width:80,colspan:2},{display:"操作",width:10}],data:[["超级管理员","机构创始人，拥有所有功能的权限，且可以为其他角色自由配置功能。",1,Object(i.b)("a",null,"管理成员")],["教学管理员","机构创始人从所关联的成员中选取，协助管理机构，主要是教务教学相关工作的管理，默认拥有大部分权限。",62,Object(i.b)("a",null,"管理成员")],["老师","主要负责给学生上课，以及准备课程教案和教学资料。",230,Object(i.b)("a",null,"管理成员")],["助教","主要协助老师上课，工作内容包括在课堂上进行班级纪律管理，以及维护班级交流QQ群等。",232,Object(i.b)("a",null,"管理成员")]],mdxType:"Table"})),Object(i.b)("h2",{id:"null-values"},"Null Values"),Object(i.b)(w.c,{__position:8,__code:"<Table\n  cols={[\n    { display: '角色', width: 8 },\n    { display: '操作', width: 10 },\n  ]}\n  data={[\n    ['超级管理员', null],\n    ['教学管理员', undefined],\n    ['老师', ''],\n    ['助教', 0],\n  ]}\n/>",__scope:(N={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},N.DefaultLayout=c.a,N._frontmatter=T,N),mdxType:"Playground"},Object(i.b)(d.a,{cols:[{display:"角色",width:8},{display:"操作",width:10}],data:[["超级管理员",null],["教学管理员",void 0],["老师",""],["助教",0]],mdxType:"Table"})),Object(i.b)("h2",{id:"select-rows"},"Select Rows"),Object(i.b)(w.c,{__position:9,__code:"<Table\n  cols={[\n    { display: 'A', width: 45 },\n    { display: 'B', width: 50 },\n  ]}\n  data={mockData(2, 4)}\n  canSelect\n  onSelectedChange={console.log}\n/>",__scope:(_={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},_.DefaultLayout=c.a,_._frontmatter=T,_),mdxType:"Playground"},Object(i.b)(d.a,{cols:[{display:"A",width:45},{display:"B",width:50}],data:Object(j.b)(2,4),canSelect:!0,onSelectedChange:console.log,mdxType:"Table"})),Object(i.b)("h2",{id:"no-data"},"No Data"),Object(i.b)(w.c,{__position:10,__code:"<Table\n  cols={[\n    { display: 'A', width: 50 },\n    { display: 'B', width: 50 },\n  ]}\n  data={[]}\n/>",__scope:(P={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},P.DefaultLayout=c.a,P._frontmatter=T,P),mdxType:"Playground"},Object(i.b)(d.a,{cols:[{display:"A",width:50},{display:"B",width:50}],data:[],mdxType:"Table"})),Object(i.b)("h2",{id:"collapsetable-1"},"CollapseTable"),Object(i.b)(w.c,{__position:11,__code:"<CollapseTable\n  cols={[\n    { display: '结算课程/服务', width: 20 },\n    { display: '结算订单数', width: 10 },\n    { display: '结算金额', width: 10 },\n    { display: '操作', width: 10 },\n  ]}\n  data={[\n    {\n      row: ['2016-06-29结算查看明细', 2, '0.04元', <a>详情</a>],\n      collapseRows: [\n        ['测试角标的课程', 1, '0.02元', <a>查看明细</a>],\n        ['雅思写作题', 1, '0.02元', <a>查看明细</a>],\n      ],\n    },\n    {\n      row: ['2016-05-29结算查看明细', 2, '3.09元', <a>详情</a>],\n      collapseRows: [\n        ['支付43王萌勿删', 1, '1.02元', <a>查看明细</a>],\n        ['支付优惠卷测试啊', 1, '0.02元', <a>查看明细</a>],\n        ['课中包退啊', 1, '2.07元', <a>查看明细</a>],\n      ],\n    },\n  ]}\n/>",__scope:(x={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},x.DefaultLayout=c.a,x._frontmatter=T,x),mdxType:"Playground"},Object(i.b)(p.a,{cols:[{display:"结算课程/服务",width:20},{display:"结算订单数",width:10},{display:"结算金额",width:10},{display:"操作",width:10}],data:[{row:["2016-06-29结算查看明细",2,"0.04元",Object(i.b)("a",null,"详情")],collapseRows:[["测试角标的课程",1,"0.02元",Object(i.b)("a",null,"查看明细")],["雅思写作题",1,"0.02元",Object(i.b)("a",null,"查看明细")]]},{row:["2016-05-29结算查看明细",2,"3.09元",Object(i.b)("a",null,"详情")],collapseRows:[["支付43王萌勿删",1,"1.02元",Object(i.b)("a",null,"查看明细")],["支付优惠卷测试啊",1,"0.02元",Object(i.b)("a",null,"查看明细")],["课中包退啊",1,"2.07元",Object(i.b)("a",null,"查看明细")]]}],mdxType:"CollapseTable"})),Object(i.b)("h2",{id:"tablesort-1"},"TableSort"),Object(i.b)(w.c,{__position:12,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.sortData = this.sortData.bind(this)\n      this.state = {\n        sortTableData: [\n          [1, 9, 5],\n          [5, 1, 4],\n          [4, 4, 2],\n          [7, 8, 6],\n          [2, 7, 9],\n        ],\n      }\n      this.sortTableQuery = {\n        sort: '',\n        order: '',\n      }\n    }\n    render() {\n      return (\n        <>\n          <DataTable\n            cols={[\n              {\n                display: (\n                  <TableSort\n                    options={[\n                      { display: 'A', key: 'a' },\n                      { display: 'B', key: 'b' },\n                    ]}\n                    onChange={sort => {\n                      this.setState({\n                        sortTableData: this.sortData(sort),\n                      })\n                    }}\n                    active={\n                      this.sortTableQuery.sort === 'a' ||\n                      this.sortTableQuery.sort === 'b'\n                    }\n                    dropdownWidth={200}\n                  />\n                ),\n                width: 50,\n              },\n              {\n                display: (\n                  <TableSort\n                    options={[{ display: 'C', key: 'c' }]}\n                    onChange={sort => {\n                      this.setState({\n                        sortTableData: this.sortData(sort),\n                      })\n                    }}\n                    active={this.sortTableQuery.sort === 'c'}\n                  />\n                ),\n                width: 50,\n              },\n            ]}\n            data={this.state.sortTableData.map(row => [\n              `A=${row[0]} B=${row[1]}`,\n              row[2],\n            ])}\n          />\n          <p>对字段进行排序使用TableSort组件传入cols属性</p>\n        </>\n      )\n    }\n    sortData(sort) {\n      this.sortTableQuery.sort = sort.sort\n      let sortTableData = [...this.state.sortTableData]\n      sortTableData.sort((x, y) => {\n        if (sort.sort === 'a') {\n          return [x[0] - y[0]] * sort.order\n        } else if (sort.sort === 'b') {\n          return [x[1] - y[1]] * sort.order\n        } else if (sort.sort === 'c') {\n          return [x[2] - y[2]] * sort.order\n        }\n        return 0\n      })\n      return sortTableData\n    }\n  }\n  return <Example />\n}",__scope:(v={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},v.DefaultLayout=c.a,v._frontmatter=T,v),mdxType:"Playground"},(function(){var t=function(t){function e(e){var a;return(a=t.call(this,e)||this).sortData=a.sortData.bind(Object(l.a)(a)),a.state={sortTableData:[[1,9,5],[5,1,4],[4,4,2],[7,8,6],[2,7,9]]},a.sortTableQuery={sort:"",order:""},a}Object(r.a)(e,t);var a=e.prototype;return a.render=function(){var t=this;return Object(i.b)(s.Fragment,null,Object(i.b)(h.a,{cols:[{display:Object(i.b)(u.a,{options:[{display:"A",key:"a"},{display:"B",key:"b"}],onChange:function(e){t.setState({sortTableData:t.sortData(e)})},active:"a"===this.sortTableQuery.sort||"b"===this.sortTableQuery.sort,dropdownWidth:200,mdxType:"TableSort"}),width:50},{display:Object(i.b)(u.a,{options:[{display:"C",key:"c"}],onChange:function(e){t.setState({sortTableData:t.sortData(e)})},active:"c"===this.sortTableQuery.sort,mdxType:"TableSort"}),width:50}],data:this.state.sortTableData.map((function(t){return["A="+t[0]+" B="+t[1],t[2]]})),mdxType:"DataTable"}),Object(i.b)("p",null,"对字段进行排序使用TableSort组件传入cols属性"))},a.sortData=function(t){this.sortTableQuery.sort=t.sort;var e=Object(o.a)(this.state.sortTableData);return e.sort((function(e,a){return"a"===t.sort?[e[0]-a[0]]*t.order:"b"===t.sort?[e[1]-a[1]]*t.order:"c"===t.sort?[e[2]-a[2]]*t.order:0})),e},e}(s.Component);return Object(i.b)(t,{mdxType:"Example"})})),Object(i.b)("h2",{id:"autotable-basic-usage"},"AutoTable Basic Usage"),Object(i.b)(w.c,{__position:13,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        newPage: 0,\n        prevPage: 0,\n      }\n      this.translateRow = this.translateRow.bind(this)\n      this.fetch = this.fetch.bind(this)\n    }\n    fetch(query) {\n      return new Promise(resolve => {\n        mockCGI(query).then(json => {\n          let rows = json.data\n          let total = json.total\n          resolve({\n            rows,\n            total,\n          })\n        })\n      })\n    }\n    translateRow(rowData) {\n      return [\n        rowData.A,\n        rowData.B,\n        // owner\n        `${rowData.C}-${rowData.D}`,\n      ]\n    }\n    render() {\n      return (\n        <>\n          <AutoTable\n            maxRow={5}\n            cols={[\n              { display: 'A', width: 10 },\n              { sort: [{ display: 'B', key: 'B', value: -1 }], width: 15 },\n              {\n                sort: [\n                  { display: 'C', key: 'C', value: 1 },\n                  { display: 'D', key: 'D' },\n                ],\n                width: 8,\n              },\n            ]}\n            fetch={this.fetch}\n            translateRow={this.translateRow}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(A={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},A.DefaultLayout=c.a,A._frontmatter=T,A),mdxType:"Playground"},(function(){var t=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={newPage:0,prevPage:0},a.translateRow=a.translateRow.bind(Object(l.a)(a)),a.fetch=a.fetch.bind(Object(l.a)(a)),a}Object(r.a)(e,t);var a=e.prototype;return a.fetch=function(t){return new Promise((function(e){Object(j.a)(t).then((function(t){var a=t.data,n=t.total;e({rows:a,total:n})}))}))},a.translateRow=function(t){return[t.A,t.B,t.C+"-"+t.D]},a.render=function(){return Object(i.b)(s.Fragment,null,Object(i.b)(y.a,{maxRow:5,cols:[{display:"A",width:10},{sort:[{display:"B",key:"B",value:-1}],width:15},{sort:[{display:"C",key:"C",value:1},{display:"D",key:"D"}],width:8}],fetch:this.fetch,translateRow:this.translateRow,mdxType:"AutoTable"}))},e}(s.Component);return Object(i.b)(t,{mdxType:"Example"})})),Object(i.b)("h2",{id:"autotable-persistence"},"AutoTable Persistence"),Object(i.b)(w.c,{__position:14,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        newPage: 0,\n        prevPage: 0,\n      }\n      this.translateRow = this.translateRow.bind(this)\n      this.fetch = this.fetch.bind(this)\n    }\n    fetch(query) {\n      return new Promise(resolve => {\n        mockCGI(query).then(json => {\n          let rows = json.data\n          let total = json.total\n          resolve({\n            rows,\n            total,\n          })\n        })\n      })\n    }\n    translateRow(rowData) {\n      return [\n        rowData.A,\n        rowData.B,\n        // owner\n        `${rowData.C}-${rowData.D}`,\n      ]\n    }\n    render() {\n      return (\n        <>\n          <AutoTable\n            maxRow={5}\n            cols={[\n              { display: 'A', width: 10 },\n              { sort: [{ display: 'B', key: 'B', value: -1 }], width: 15 },\n              {\n                sort: [\n                  { display: 'C', key: 'C', value: 1 },\n                  { display: 'D', key: 'D' },\n                ],\n                width: 8,\n              },\n            ]}\n            fetch={this.fetch}\n            translateRow={this.translateRow}\n            persistence={{\n              get: () => {\n                if (typeof window !== 'undefined' && window.localStorage) {\n                  return JSON.parse(\n                    window.localStorage.getItem('AutoTable-persistence'),\n                  )\n                }\n              },\n              set: state => {\n                if (typeof window !== 'undefined' && window.localStorage) {\n                  localStorage.setItem(\n                    'AutoTable-persistence',\n                    JSON.stringify(state),\n                  )\n                }\n              },\n            }}\n          />\n          <p>\n            AutoTable的state被持久化到了localStorage，先切换下页面，重新刷新页面可以看到这个AutoTable还是之前的样子\n          </p>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(R={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},R.DefaultLayout=c.a,R._frontmatter=T,R),mdxType:"Playground"},(function(){var t=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={newPage:0,prevPage:0},a.translateRow=a.translateRow.bind(Object(l.a)(a)),a.fetch=a.fetch.bind(Object(l.a)(a)),a}Object(r.a)(e,t);var a=e.prototype;return a.fetch=function(t){return new Promise((function(e){Object(j.a)(t).then((function(t){var a=t.data,n=t.total;e({rows:a,total:n})}))}))},a.translateRow=function(t){return[t.A,t.B,t.C+"-"+t.D]},a.render=function(){return Object(i.b)(s.Fragment,null,Object(i.b)(y.a,{maxRow:5,cols:[{display:"A",width:10},{sort:[{display:"B",key:"B",value:-1}],width:15},{sort:[{display:"C",key:"C",value:1},{display:"D",key:"D"}],width:8}],fetch:this.fetch,translateRow:this.translateRow,persistence:{get:function(){if("undefined"!=typeof window&&window.localStorage)return JSON.parse(window.localStorage.getItem("AutoTable-persistence"))},set:function(t){"undefined"!=typeof window&&window.localStorage&&localStorage.setItem("AutoTable-persistence",JSON.stringify(t))}},mdxType:"AutoTable"}),Object(i.b)("p",null,"AutoTable的state被持久化到了localStorage，先切换下页面，重新刷新页面可以看到这个AutoTable还是之前的样子"))},e}(s.Component);return Object(i.b)(t,{mdxType:"Example"})})),Object(i.b)("h2",{id:"autotable-apis"},"AutoTable APIs"),Object(i.b)(w.c,{__position:15,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        newPage: 0,\n        prevPage: 0,\n      }\n      this.translateRow = this.translateRow.bind(this)\n      this.fetch = this.fetch.bind(this)\n    }\n    fetch(query) {\n      return new Promise(resolve => {\n        mockCGI(query).then(json => {\n          let rows = json.data\n          let total = json.total\n          resolve({\n            rows,\n            total,\n          })\n        })\n      })\n    }\n    translateRow(rowData) {\n      return [\n        rowData.A,\n        rowData.B,\n        // owner\n        `${rowData.C}-${rowData.D}`,\n      ]\n    }\n    render() {\n      return (\n        <>\n          <AutoTable\n            ref={t => (this.autoTable = t)}\n            maxRow={5}\n            cols={[\n              { display: 'A', width: 10 },\n              { sort: [{ display: 'B', key: 'B', value: -1 }], width: 15 },\n              {\n                sort: [\n                  { display: 'C', key: 'C', value: 1 },\n                  { display: 'D', key: 'D' },\n                ],\n                width: 8,\n              },\n            ]}\n            fetch={this.fetch}\n            translateRow={this.translateRow}\n            onPageChange={this.onPageChange}\n          />\n          <br />\n          <Button\n            onClick={() => {\n              let page = Math.floor(Math.random() * 20)\n              this.autoTable.goPage(page, false)\n            }}\n          >\n            goPage\n          </Button>\n          <Button\n            onClick={() => {\n              let page = Math.floor(Math.random() * 20)\n              this.autoTable.showPage(page, false)\n            }}\n          >\n            showPage\n          </Button>\n          <Button\n            onClick={() => {\n              this.autoTable.reset([])\n            }}\n          >\n            reset\n          </Button>\n          <p>\n            跳转到第page页, 如果没有第page页的数据会回调fetch去加载更多的数据,\n            从0开始计数\n          </p>\n          <p>\n            跳转到第page页, 如果没有第page页的数据 不会\n            回调fetch去加载更多的数据, 业务侧自己保证第page页有数据\n          </p>\n          <p>每当表单的查询条件发生改变时请调reset方法重置AutoTable</p>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(k={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},k.DefaultLayout=c.a,k._frontmatter=T,k),mdxType:"Playground"},(function(){var t=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={newPage:0,prevPage:0},a.translateRow=a.translateRow.bind(Object(l.a)(a)),a.fetch=a.fetch.bind(Object(l.a)(a)),a}Object(r.a)(e,t);var a=e.prototype;return a.fetch=function(t){return new Promise((function(e){Object(j.a)(t).then((function(t){var a=t.data,n=t.total;e({rows:a,total:n})}))}))},a.translateRow=function(t){return[t.A,t.B,t.C+"-"+t.D]},a.render=function(){var t=this;return Object(i.b)(s.Fragment,null,Object(i.b)(y.a,{ref:function(e){return t.autoTable=e},maxRow:5,cols:[{display:"A",width:10},{sort:[{display:"B",key:"B",value:-1}],width:15},{sort:[{display:"C",key:"C",value:1},{display:"D",key:"D"}],width:8}],fetch:this.fetch,translateRow:this.translateRow,onPageChange:this.onPageChange,mdxType:"AutoTable"}),Object(i.b)("br",null),Object(i.b)(f.a,{onClick:function(){var e=Math.floor(20*Math.random());t.autoTable.goPage(e,!1)},mdxType:"Button"},"goPage"),Object(i.b)(f.a,{onClick:function(){var e=Math.floor(20*Math.random());t.autoTable.showPage(e,!1)},mdxType:"Button"},"showPage"),Object(i.b)(f.a,{onClick:function(){t.autoTable.reset([])},mdxType:"Button"},"reset"),Object(i.b)("p",null,"跳转到第page页, 如果没有第page页的数据会回调fetch去加载更多的数据, 从0开始计数"),Object(i.b)("p",null,"跳转到第page页, 如果没有第page页的数据 不会 回调fetch去加载更多的数据, 业务侧自己保证第page页有数据"),Object(i.b)("p",null,"每当表单的查询条件发生改变时请调reset方法重置AutoTable"))},e}(s.Component);return Object(i.b)(t,{mdxType:"Example"})})),Object(i.b)("h2",{id:"autotable-error-retry"},"AutoTable Error Retry"),Object(i.b)(w.c,{__position:16,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        newPage: 0,\n        prevPage: 0,\n      }\n      this.translateRow = this.translateRow.bind(this)\n      this.fetch = this.fetch.bind(this)\n      this.errorFetch = this.errorFetch.bind(this)\n    }\n    fetch(query) {\n      return new Promise(resolve => {\n        mockCGI(query).then(json => {\n          let rows = json.data\n          let total = json.total\n          resolve({\n            rows,\n            total,\n          })\n        })\n      })\n    }\n    errorFetch() {\n      return new Promise((_, reject) => {\n        setTimeout(() => {\n          reject(\n            <div>\n              服务器发生错误\n              <Button\n                size=\"s\"\n                onClick={() => {\n                  this.autoErrorTable.reset()\n                }}\n              >\n                重试\n              </Button>\n            </div>,\n          )\n        }, 1000)\n      })\n    }\n    translateRow(rowData) {\n      return [\n        rowData.A,\n        rowData.B,\n        // owner\n        `${rowData.C}-${rowData.D}`,\n      ]\n    }\n    render() {\n      return (\n        <>\n          <AutoTable\n            ref={t => (this.autoErrorTable = t)}\n            maxRow={5}\n            cols={[\n              { display: 'A', width: 10 },\n              { sort: [{ display: 'B', key: 'B', value: -1 }], width: 15 },\n              {\n                sort: [\n                  { display: 'C', key: 'C', value: 1 },\n                  { display: 'D', key: 'D' },\n                ],\n                width: 8,\n              },\n            ]}\n            fetch={this.errorFetch}\n            translateRow={this.translateRow}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(B={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},B.DefaultLayout=c.a,B._frontmatter=T,B),mdxType:"Playground"},(function(){var t=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={newPage:0,prevPage:0},a.translateRow=a.translateRow.bind(Object(l.a)(a)),a.fetch=a.fetch.bind(Object(l.a)(a)),a.errorFetch=a.errorFetch.bind(Object(l.a)(a)),a}Object(r.a)(e,t);var a=e.prototype;return a.fetch=function(t){return new Promise((function(e){Object(j.a)(t).then((function(t){var a=t.data,n=t.total;e({rows:a,total:n})}))}))},a.errorFetch=function(){var t=this;return new Promise((function(e,a){setTimeout((function(){a(Object(i.b)("div",null,"服务器发生错误",Object(i.b)(f.a,{size:"s",onClick:function(){t.autoErrorTable.reset()},mdxType:"Button"},"重试")))}),1e3)}))},a.translateRow=function(t){return[t.A,t.B,t.C+"-"+t.D]},a.render=function(){var t=this;return Object(i.b)(s.Fragment,null,Object(i.b)(y.a,{ref:function(e){return t.autoErrorTable=e},maxRow:5,cols:[{display:"A",width:10},{sort:[{display:"B",key:"B",value:-1}],width:15},{sort:[{display:"C",key:"C",value:1},{display:"D",key:"D"}],width:8}],fetch:this.errorFetch,translateRow:this.translateRow,mdxType:"AutoTable"}))},e}(s.Component);return Object(i.b)(t,{mdxType:"Example"})})),Object(i.b)("h2",{id:"autocollapsetable-1"},"AutoCollapseTable"),Object(i.b)(w.c,{__position:17,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.fetch = this.fetch.bind(this)\n      this.translateRow = this.translateRow.bind(this)\n    }\n    fetch(query) {\n      return new Promise(resolve => {\n        mockCGI(query).then(json => {\n          let rows = json.data\n          let total = json.total\n          resolve({\n            rows,\n            total,\n          })\n        })\n      })\n    }\n    translateRow(rowData) {\n      return {\n        row: [\n          rowData.A,\n          rowData.B,\n          // owner\n          `${rowData.C}-${rowData.D}`,\n        ],\n        collapseRows: rowData.sub,\n      }\n    }\n    render() {\n      return (\n        <AutoCollapseTable\n          maxRow={3}\n          cols={[\n            { display: 'A', width: 10 },\n            { sort: [{ display: 'B', key: 'B', value: -1 }], width: 15 },\n            {\n              sort: [\n                { display: 'C', key: 'C', value: 1 },\n                { display: 'D', key: 'D' },\n              ],\n              width: 8,\n            },\n          ]}\n          fetch={this.fetch}\n          translateRow={this.translateRow}\n        />\n      )\n    }\n  }\n  return <Example />\n}",__scope:(S={props:L,DefaultLayout:c.a,Table:d.a,CollapseTable:p.a,TableSort:u.a,DataTable:h.a,AutoTable:y.a,AutoCollapseTable:m.a,mockData:j.b,mockCGI:j.a,Icon:O.a,Button:f.a,Playground:w.c,Props:w.d},S.DefaultLayout=c.a,S._frontmatter=T,S),mdxType:"Playground"},(function(){var t=function(t){function e(e){var a;return(a=t.call(this,e)||this).fetch=a.fetch.bind(Object(l.a)(a)),a.translateRow=a.translateRow.bind(Object(l.a)(a)),a}Object(r.a)(e,t);var a=e.prototype;return a.fetch=function(t){return new Promise((function(e){Object(j.a)(t).then((function(t){var a=t.data,n=t.total;e({rows:a,total:n})}))}))},a.translateRow=function(t){return{row:[t.A,t.B,t.C+"-"+t.D],collapseRows:t.sub}},a.render=function(){return Object(i.b)(m.a,{maxRow:3,cols:[{display:"A",width:10},{sort:[{display:"B",key:"B",value:-1}],width:15},{sort:[{display:"C",key:"C",value:1},{display:"D",key:"D"}],width:8}],fetch:this.fetch,translateRow:this.translateRow,mdxType:"AutoCollapseTable"})},e}(s.Component);return Object(i.b)(t,{mdxType:"Example"})})))}void 0!==N&&N&&N===Object(N)&&Object.isExtensible(N)&&!N.hasOwnProperty("__filemeta")&&Object.defineProperty(N,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/table/Table.mdx"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-table-table-mdx-be41c181b56e28b9dbad.js.map