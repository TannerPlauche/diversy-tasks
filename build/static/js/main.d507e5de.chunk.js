(this["webpackJsonpdiversy-tasks"]=this["webpackJsonpdiversy-tasks"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n,s=a(0),c=a(20),i=a.n(c),r=(a(52),a(53),a(42)),l=a(43),o=a(11),d=a(47),u=a(46),p=a(26),b=a(9),j=a.n(b),k=a(18),f=a(19),T=a.n(f);!function(e){e.CREATE_TASK="CREATE_TASK",e.FETCH_TASKS="FETCH_TASKS",e.SELECT_TASK="SELECT_TASK",e.REPLACE_TASK="REPLACE_TASK",e.REMOVE_TASK="REMOVE_TASK",e.FILTER_TASKS="FILTER_TASKS"}(n||(n={}));var h,y=function(e){return{type:n.FETCH_TASKS,payload:e}},O=function(e){return{type:n.CREATE_TASK,payload:e}},m=function(e){return{type:n.REPLACE_TASK,payload:e}},S=function(e){return{type:n.REMOVE_TASK,payload:e}},g=a(14),v=a(7),x=a(27),E=a(1),C={itemStyle:{padding:7,borderColor:"lightgray",borderWidth:1,borderStyle:"solid"},headerStyle:{padding:0,margin:0},saveButtonStyle:{marginTop:7},updateFormStyle:{display:"flex",flexDirection:"column",justifyContent:"center",width:"60%",alignItems:"center",marginLeft:"20%",marginBottom:20}},A=function(e){var t={title:"",description:"",complete:!1},a=Object(s.useState)(e.task?e.task:t),n=Object(x.a)(a,2),c=n[0],i=n[1],r=function(t){var a=t.target.name;c=Object(v.a)(Object(v.a)({},c),{},Object(g.a)({},a,t.target.value)),e.handleEmitUpdate&&l(c),i(c)},l=function(t){e.handleEmitUpdate(t)};return Object(E.jsx)("div",{children:Object(E.jsxs)("div",{style:C.updateFormStyle,children:[Object(E.jsx)("label",{htmlFor:"title",children:"Task"}),Object(E.jsx)("input",{id:"title",name:"title",type:"text",value:c.title,onChange:r}),Object(E.jsx)("label",{htmlFor:"desc",children:"Description"}),Object(E.jsx)("input",{id:"desc",name:"description",type:"text",value:c.description,onChange:r}),!e.task&&Object(E.jsx)("button",{className:"btn btn-xs btn-success",style:C.saveButtonStyle,onClick:function(){e.handleSave(c),i(t)},disabled:!c.title,children:"Save"})]})})},F={itemStyle:{padding:7,borderColor:"lightgray",borderWidth:1,borderStyle:"solid"},headerStyle:{padding:0,margin:0},descStyle:{padding:0,margin:0},editButtonStyle:{position:"absolute",right:"14%"},saveButtonStyle:{position:"absolute",right:"14%",marginTop:-100},deleteButtonStyle:{position:"absolute",right:"14%",marginTop:100},completeButtonStyle:{position:"absolute",right:"14%",marginTop:-17},none:{display:"none"},updateFormStyle:{display:"flex",flexDirection:"column",width:"60%",justifyContent:"center",alignItems:"center",marginLeft:"20%",backgroundColor:"lightgray"}},K=function(e){var t=e.task,a=Object(s.useState)(Object(v.a)({},t)),n=Object(x.a)(a,2),c=n[0],i=n[1];c=c;var r=e.task.id===e.selectedTaskId,l=function(t){e.updateTask(t)};return Object(E.jsx)("div",{children:r?Object(E.jsxs)("div",{style:F.updateFormStyle,children:[Object(E.jsx)("button",{className:"btn btn-xs btn-success",style:F.saveButtonStyle,onClick:function(){return l(c)},children:"save"}),Object(E.jsx)("button",{className:"btn btn-xs btn-secondary",style:F.editButtonStyle,onClick:function(){return e.selectTask(null)},children:"cancel"}),Object(E.jsx)("button",{className:"btn btn-xs btn-danger",style:F.deleteButtonStyle,onClick:function(){e.deleteTask(t.id)},children:"Delete"}),Object(E.jsx)(A,{handleEmitUpdate:function(e){c=Object(v.a)({},e),i(c)},task:c})]}):Object(E.jsxs)("div",{className:"task-item",style:F.itemStyle,children:[Object(E.jsx)("button",{className:"btn btn-xs btn-primary",style:r?F.none:F.editButtonStyle,onClick:function(){return e.selectTask(t.id)},children:"edit"}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{className:"task-title",style:Object(v.a)(Object(v.a)({},F.headerStyle),{},{textDecoration:t.complete?"strikethrough":"none"}),children:t.title}),Object(E.jsx)("p",{style:F.descStyle,children:t.description})]}),Object(E.jsx)("input",{type:"checkbox",checked:c.complete,onChange:function(e){c=Object(v.a)(Object(v.a)({},c),{},{complete:e.target.checked}),i(c),l(c)},style:r?F.none:F.completeButtonStyle})]})})};!function(e){e.all="all",e.complete="complete",e.incomplete="incomplete"}(h||(h={}));var _={containerStyle:{width:"75%"},horizontal:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:30,paddingBottom:10},radioStyle:{marginRight:20}},R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).props=void 0,n.selectTaskForEditing=n.selectTaskForEditing.bind(Object(o.a)(n)),n.updateTask=n.updateTask.bind(Object(o.a)(n)),n.deleteTask=n.deleteTask.bind(Object(o.a)(n)),n.createTask=n.createTask.bind(Object(o.a)(n)),n.filterTasks=n.filterTasks.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"selectTaskForEditing",value:function(e){this.props.selectTask(e)}},{key:"createTask",value:function(e){this.props.createTask(e)}},{key:"updateTask",value:function(e){this.props.updateTask(e)}},{key:"deleteTask",value:function(e){this.props.deleteTask(e)}},{key:"filterTasks",value:function(e){var t=e.target.value;this.props.filterTasks(t)}},{key:"render",value:function(){var e=this;return Object(E.jsxs)("div",{style:_.containerStyle,children:[Object(E.jsx)("h1",{children:"Task list"}),Object(E.jsx)("div",{children:Object(E.jsx)(A,{handleSave:this.createTask})}),Object(E.jsx)("div",{children:Object(E.jsxs)("div",{style:_.horizontal,children:[Object(E.jsx)("label",{htmlFor:"allRadio",children:"All"}),Object(E.jsx)("input",{type:"radio",id:"allRadio",style:_.radioStyle,name:"filter",onChange:this.filterTasks,value:h.all}),Object(E.jsx)("label",{htmlFor:"completeRadio",children:"Complete"}),Object(E.jsx)("input",{type:"radio",id:"completeRadio",style:_.radioStyle,name:"filter",onChange:this.filterTasks,value:h.complete}),Object(E.jsx)("label",{htmlFor:"incompleteRadio",children:"Incomplete"}),Object(E.jsx)("input",{type:"radio",id:"incompleteRadio",style:_.radioStyle,name:"filter",onChange:this.filterTasks,value:h.incomplete})]})}),Object(E.jsx)("div",{children:this.props.tasks.map((function(t){return Object(E.jsx)(K,{task:t,selectedTaskId:e.props.selectedTaskId,selectTask:e.selectTaskForEditing,updateTask:e.updateTask,deleteTask:e.deleteTask},t.id)}))})]})}}]),a}(s.Component),I=Object(p.b)((function(e,t){return{tasks:e.tasks.filteredTasks,selectedTaskId:e.tasks.selectedTaskId}}),(function(e){return{fetchItems:function(){return e(function(e){return Object(k.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T.a.get("/api/tasks").then((function(t){e(y(t.data))}));case 1:case"end":return t.stop()}}),t)})))}(e))},selectTask:function(t){return e(function(e,t){return e({type:n.SELECT_TASK,payload:t})}(e,t))},createTask:function(t){return e(function(e,t){return Object(k.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:T.a.post("api/tasks",t).then((function(t){e(O(t.data))}));case 1:case"end":return a.stop()}}),a)})))}(e,t))},updateTask:function(t){return e(function(e,t){return Object(k.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:T.a.put("api/tasks/".concat(t.id),t).then((function(a){e(m(t))}));case 1:case"end":return a.stop()}}),a)})))}(e,t))},deleteTask:function(t){return e(function(e,t){return Object(k.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:T.a.delete("api/tasks/".concat(t)).then((function(a){e(S(t))}));case 1:case"end":return a.stop()}}),a)})))}(e,t))},filterTasks:function(t){return e(function(e,t){return e({type:n.FILTER_TASKS,payload:t})}(e,t))}}}))(R);var L=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)("header",{className:"App-header",children:Object(E.jsx)(I,{})})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))},B=a(12),N=a(29),D=a(88),P=a(82),M=a(89),H=a(84),V=a(90),U=a(87),z=a(85),J=a(83),W=a(86),q={tasks:[],filteredTasks:[],selectedTaskId:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.FETCH_TASKS:return Object(D.a)(e,{tasks:t.payload,filteredTasks:t.payload});case n.CREATE_TASK:return Object(D.a)(e,{tasks:Object(P.a)(t.payload,e.tasks),filteredTasks:Object(P.a)(t.payload,e.tasks)});case n.SELECT_TASK:return Object(M.a)(Object(H.a)("selectedTaskId"),t.payload,e);case n.REPLACE_TASK:return Object(D.a)(e,{tasks:Object(V.a)(Object(U.a)(Object(z.a)("id",t.payload.id),e.tasks),t.payload,e.tasks),filteredTasks:Object(V.a)(Object(U.a)(Object(z.a)("id",t.payload.id),e.tasks),t.payload,e.tasks),selectedTaskId:null});case n.REMOVE_TASK:var a=Object(J.a)(Object(U.a)(Object(z.a)("id",t.payload),e.tasks),1,e.tasks);return Object(D.a)(e,{tasks:a,filteredTasks:a});case n.FILTER_TASKS:switch(t.payload){case h.all:return Object(M.a)(Object(H.a)("filteredTasks"),Object(N.a)(e.tasks),e);case h.complete:return Object(M.a)(Object(H.a)("filteredTasks"),Object(W.a)((function(e){return e.complete}),Object(N.a)(e.tasks)),e);case h.incomplete:return Object(M.a)(Object(H.a)("filteredTasks"),Object(W.a)((function(e){return!e.complete}),Object(N.a)(e.tasks)),e);default:return e}default:return e}},Q=Object(B.c)({tasks:G}),X=a(45),Y=Object(B.d)(Q,Object(B.a)(X.a,(function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}}))),Z=document.getElementById("root");i.a.render(Object(E.jsx)(p.a,{store:Y,children:Object(E.jsx)(L,{})}),Z),w()}},[[80,1,2]]]);
//# sourceMappingURL=main.d507e5de.chunk.js.map