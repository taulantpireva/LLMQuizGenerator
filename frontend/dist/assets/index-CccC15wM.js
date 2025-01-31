import{u as F}from"./useQuestionsStore-Csg_IzN_.js";import{u as D}from"./useQuizzesStore-BgftCzj1.js";import{_ as j}from"./index-CAdGajTq.js";import{V as g,a as d}from"./VRow-DPRUVnFG.js";import{V as b}from"./VTextField-C1W9uRpE.js";import{v,w as x,H as r,I as P,J as t,A as e,M as w,F as E,Q as S,K as y,R as C,P as l,L as N,N as L,S as $,U as B,o as M}from"./index-C7jXg81h.js";import{V as A,a as R,b as H,c as O}from"./VExpansionPanels-D0P-_goW.js";import{h as T,i as U,j as J}from"./VGrid-B1elj0Wo.js";import{V as I}from"./VCard-PzGifVhv.js";import"./forwardRefs-4syOH2-z.js";import"./lazy-CmFuK5uI.js";const G={class:"mb-3"},K={class:"mb-3"},W={key:0},X={__name:"PreviewQuestions",setup(h){const o=F(),p=D(),a=v(o.title),u=v(o.questions);x(()=>o.title,i=>{a.value=i}),x(()=>o.questions,i=>{u.value=[...i]});const V=()=>{o.setQuiz({title:a.value,questions:u.value})},z=async()=>{try{const i=await fetch("http://localhost:5000/saveQuestions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:a.value,questions:u.value})});if(i.ok){const n=await i.json();console.log("Quiz saved successfully:",n.quiz),p.addQuiz(n.quiz),o.clearQuiz()}else{const n=await i.json();console.error("Failed to save questions:",n.error)}}catch(i){console.error("Error saving questions:",i),alert("Error saving questions: "+i.message)}},k=()=>{const i={question:"",code:"",options:["","","",""],answer:"",topic:""};u.value.push(i),V()},q=()=>{o.clearQuiz()},_=i=>{o.deleteQuestion(i)};return(i,n)=>(r(),P(O,{class:"mb-6"},{default:t(()=>[e(g,null,{default:t(()=>[e(d,{cols:"12",class:"w-100"},{default:t(()=>[e(b,{variant:"outlined",clearable:"",modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),onInput:V},null,8,["modelValue"])]),_:1})]),_:1}),(r(!0),w(E,null,S(u.value,(s,m)=>(r(),P(g,{key:m,class:"mt-2 w-100"},{default:t(()=>[e(d,{cols:"11"},{default:t(()=>[e(A,null,{default:t(()=>[e(R,{"expand-icon":"mdi-menu-down"},{default:t(()=>[y(C(s.question),1)]),_:2},1024),e(H,null,{default:t(()=>[l("p",G,[n[1]||(n[1]=l("strong",null,"Question:",-1)),e(b,{modelValue:s.question,"onUpdate:modelValue":c=>s.question=c,clearable:"",onInput:V},null,8,["modelValue","onUpdate:modelValue"])]),l("p",K,[n[2]||(n[2]=l("strong",null,"Topic:",-1)),y(" "+C(s.topic),1)]),n[4]||(n[4]=l("p",{class:"mb-3"},[l("strong",null,"Options:")],-1)),(r(!0),w(E,null,S(s.options,(c,Q)=>(r(),P(b,{key:Q,modelValue:u.value[m].options[Q],"onUpdate:modelValue":f=>u.value[m].options[Q]=f,variant:"outlined",clearable:"",class:"w-100"},null,8,["modelValue","onUpdate:modelValue"]))),128)),n[5]||(n[5]=l("p",{class:"mb-3"},[l("strong",null,"Answer:")],-1)),e(b,{modelValue:u.value[m].answer,"onUpdate:modelValue":c=>u.value[m].answer=c,variant:"outlined",clearable:"",class:"w-100"},null,8,["modelValue","onUpdate:modelValue"]),s.code?(r(),w("div",W,[n[3]||(n[3]=l("p",{class:"mb-3"},[l("strong",null,"Code:")],-1)),e(b,{modelValue:u.value[m].code,"onUpdate:modelValue":c=>u.value[m].code=c,variant:"outlined",clearable:"",class:"w-100"},null,8,["modelValue","onUpdate:modelValue"])])):N("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(d,{cols:"1",class:"d-flex align-top mt-1"},{default:t(()=>[e(T,{color:"red-lighten-2",class:"w-100",onClick:c=>_(m)},{default:t(()=>[e(U,{icon:"mdi-delete",color:"white"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),e(g,null,{default:t(()=>[e(d,{class:"d-flex justify-start mt-4"},{default:t(()=>[e(T,{color:"red-lighten-2",class:"w-25 mr-2",onClick:q},{default:t(()=>n[6]||(n[6]=[y("Back")])),_:1})]),_:1}),e(d,{class:"d-flex justify-end mt-4"},{default:t(()=>[e(T,{color:"secondary",class:"mr-2",onClick:k},{default:t(()=>n[7]||(n[7]=[y("Add Question")])),_:1}),e(T,{color:"primary",class:"w-25",onClick:z},{default:t(()=>n[8]||(n[8]=[y("Save")])),_:1})]),_:1})]),_:1})]),_:1}))}},Y=j(X,[["__scopeId","data-v-e48ff640"]]),Z={};function ee(h,o){return r(),P(I,{subtitle:"Example prompt",text:"",variant:"outlined",class:"pa-5",color:"cyan-lighten-4"},{default:t(()=>[o[1]||(o[1]=y(" Create two 'multiple choice single answer' questions for each topic listed below. In total these must be 30 questions. This Limit cannot be exceeded, even if there are more topics. In that case just choose at random! ")),o[2]||(o[2]=l("br",null,null,-1)),o[3]||(o[3]=y(" Create 5 options for each question. The difficulty must be at an advanced to professional level. It should take about one minute to answer the question. ")),o[4]||(o[4]=l("br",null,null,-1)),o[5]||(o[5]=y(" Also generate a generic title for the quiz. ")),o[6]||(o[6]=l("br",null,null,-1)),o[7]||(o[7]=l("br",null,null,-1)),o[8]||(o[8]=y(" Use the following structure: question, code, options, answer, and topic. ")),e(I,{class:"pa-3 mt-2 mb-2",variant:"outlined",color:"grey-darken-1"},{default:t(()=>o[0]||(o[0]=[l("p",null,"{",-1),l("p",{class:"ml-1"},"title = ' '",-1),l("p",{class:"ml-1"},"questions = [",-1),l("p",{class:"ml-2"},"{",-1),l("p",{class:"ml-10"},"'question': ' ',",-1),l("p",{class:"ml-10"},"'code': ' ',",-1),l("p",{class:"ml-10"},"'options': [' ', ' ', ' ', ' ', ' '],",-1),l("p",{class:"ml-10"},"'answer': ' ',",-1),l("p",{class:"ml-10"},"'topic': ' '",-1),l("p",{class:"ml-2"},"}",-1),l("p",{class:"ml-1"},"]",-1),l("p",null,"}",-1)])),_:1}),o[9]||(o[9]=l("p",null,"Here are the topics:",-1)),o[10]||(o[10]=l("ul",{class:"ml-6"},[l("li",null,"Python Data Types"),l("li",null,"Python Operators"),l("li",null,"Python Lists Python Dictionaries"),l("li",null,"Python If...Else"),l("li",null,"Python For Loops"),l("li",null,"Python Functions"),l("li",null,"Python Lambda"),l("li",null,"Python Classes"),l("li",null,"Python Dates"),l("li",null,"Python Math"),l("li",null,"Python RegEx"),l("li",null,"Python String Formatting"),l("li",null,"Python Pandas Data Frames"),l("li",null,"Python sqlite3")],-1))]),_:1})}const le=j(Z,[["render",ee]]),te={key:0},oe={key:1,class:"no-topics"},se={__name:"Topics",setup(h,{emit:o}){const p=o,a=v([]),u=v(""),V=()=>{p("update:modelValue",a.value)},z=()=>{u.value.trim()!==""&&(a.value.push(u.value),u.value="",V())},k=q=>{a.value.splice(q,1),V()};return x(a,()=>{V()}),(q,_)=>{const i=L("v-expansion-panel-titel");return r(),w("div",null,[_[1]||(_[1]=l("h4",{class:"mb-2"},"Here are the topics:",-1)),a.value.length>0?(r(),w("div",te,[(r(!0),w(E,null,S(a.value,(n,s)=>(r(),P(g,{key:s,class:"mt-2 w-100"},{default:t(()=>[e(d,{cols:"11"},{default:t(()=>[e(O,null,{default:t(()=>[e(A,{class:"pa-2",disabled:"",elevation:"3"},{default:t(()=>[e(i,null,{default:t(()=>[y(C(n),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(d,{cols:"1"},{default:t(()=>[e(T,{color:"red-lighten-2",onClick:m=>k(s)},{default:t(()=>[e(U,{color:"white",size:"x-large",icon:"mdi-delete"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))])):(r(),w("p",oe,"No topics defined...")),e(g,{class:"mt-4 w-100"},{default:t(()=>[e(d,{cols:"11"},{default:t(()=>[e(b,{modelValue:u.value,"onUpdate:modelValue":_[0]||(_[0]=n=>u.value=n),label:"Add Topic",outlined:""},null,8,["modelValue"])]),_:1}),e(d,{cols:"1"},{default:t(()=>[e(T,{color:"secondary",class:"mt-2",onClick:z},{default:t(()=>[e(U,{color:"white",size:"x-large",icon:"mdi-plus"})]),_:1})]),_:1})]),_:1})])}}},ne=j(se,[["__scopeId","data-v-4c2fa430"]]),ae={key:0},ue={key:2},ie={style:{color:"red"}},re={__name:"GPTPrompt",setup(h){const o=v(!1),p=v(""),a=F(),u=v(30),V=v(2),z=v(5),k=v("advanced"),q=v("professional"),_=v([]),i=async()=>{try{o.value=!0;const n={totalQuestions:u.value,qTopics:V.value,options:z.value,diffFrom:k.value,diffTo:q.value,topics:_.value},s=await fetch("http://127.0.0.1:5000/sendPrompt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const m=await s.json();if(console.log("Response from server:",m),m.reply){const c=JSON.parse(m.reply);if(c&&c.title&&Array.isArray(c.questions)){const Q={title:c.title,questions:c.questions};a.setQuiz(Q),p.value=""}else throw new Error("Invalid response format.")}else throw new Error("No 'reply' field found in the response.")}else throw new Error(`Error ${s.status}: ${s.statusText}`)}catch(n){console.error("Error while submitting prompt:",n.message),p.value=n.message,a.clearQuiz()}finally{o.value=!1}};return(n,s)=>{const m=ne,c=le,Q=Y;return r(),w("div",null,[$(a).questions.length===0?(r(),w("div",ae,[e(g,null,{default:t(()=>[o.value?(r(),P(d,{key:0,cols:"6"},{default:t(()=>[e(g,{class:"h-50"},{default:t(()=>[e(d,{class:"d-flex justify-center align-center"},{default:t(()=>[e(J,{color:"blue-lighten-3",indeterminate:"",size:56})]),_:1})]),_:1}),e(g,{class:"h-50"},{default:t(()=>[e(d,{class:"d-flex justify-center"},{default:t(()=>s[7]||(s[7]=[l("p",null,"Loading questions...",-1)])),_:1})]),_:1})]),_:1})):(r(),P(d,{key:1,cols:"6"},{default:t(()=>[l("form",{onSubmit:s[5]||(s[5]=B((...f)=>n.submit&&n.submit(...f),["prevent"]))},[e(b,{label:"Total number of questions:",modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=f=>u.value=f),clearable:""},null,8,["modelValue"]),e(b,{label:"Questions per topic:",modelValue:V.value,"onUpdate:modelValue":s[1]||(s[1]=f=>V.value=f),clearable:""},null,8,["modelValue"]),e(b,{label:"Options per question:",modelValue:z.value,"onUpdate:modelValue":s[2]||(s[2]=f=>z.value=f),clearable:""},null,8,["modelValue"]),e(b,{label:"Difficulty from:",modelValue:k.value,"onUpdate:modelValue":s[3]||(s[3]=f=>k.value=f),clearable:""},null,8,["modelValue"]),e(b,{label:"Difficulty to:",modelValue:q.value,"onUpdate:modelValue":s[4]||(s[4]=f=>q.value=f),clearable:""},null,8,["modelValue"])],32),e(g,null,{default:t(()=>[e(d,null,{default:t(()=>[e(m,{modelValue:_.value,"onUpdate:modelValue":s[6]||(s[6]=f=>_.value=f)},null,8,["modelValue"])]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(d,{class:"d-flex justify-start"},{default:t(()=>[e(T,{color:"primary",class:"w-33",onClick:i,disabled:_.value.length===0},{default:t(()=>s[8]||(s[8]=[y("Send")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})),e(d,{cols:"6"},{default:t(()=>[e(c)]),_:1})]),_:1})])):(r(),P(Q,{key:1,questions:$(a).questions},null,8,["questions"])),p.value?(r(),w("div",ue,[l("p",ie,[s[9]||(s[9]=l("strong",null,"Error:",-1)),y(" "+C(p.value),1)])])):N("",!0)])}}},ge={__name:"index",setup(h){const o=D();return M(async()=>{if(o.quizzes.length===0)try{const p=await fetch("http://localhost:5000/getAllQuizzes",{method:"GET",headers:{"Content-Type":"application/json"}});if(p.ok){const a=await p.json();o.setQuizzes(a)}else{const a=await p.json();console.error("Failed to load quizzes:",a.error)}}catch(p){console.error("Error fetching quizzes:",p)}}),(p,a)=>{const u=re;return r(),w("div",null,[a[0]||(a[0]=l("h1",{class:"mb-3"},"Home",-1)),e(u)])}}};export{ge as default};
