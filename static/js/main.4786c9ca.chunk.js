(this.webpackJsonptrivera=this.webpackJsonptrivera||[]).push([[0],{14:function(e,t,n){e.exports={login:"Login_login__2-Irk","login-form":"Login_login-form__-3UEj",showcase:"Login_showcase__pIGw1"}},15:function(e,t,n){e.exports={quiz:"Quiz_quiz__3EZkO",correct:"Quiz_correct__2fMK8",wrong:"Quiz_wrong__22N_n"}},18:function(e,t,n){e.exports={hero:"Hero_hero__WH9g_",buttons:"Hero_buttons__7_Wpi"}},20:function(e,t,n){e.exports={hero:"Navbar_hero__gzX1L",navbar:"Navbar_navbar__1SuCN","nav-link":"Navbar_nav-link__16VN5"}},22:function(e,t,n){e.exports={"quiz-score":"QuizScore_quiz-score__1t1uy",score:"QuizScore_score__1x5KJ"}},25:function(e,t,n){e.exports={card:"Card_card__UkpmP"}},37:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),c=n(24),r=n.n(c),o=(n(37),n(10)),i=(n(38),n(18)),u=n.n(i),l=n(2),h=function(e){var t=function(t){e.onShowQuiz(t.target.value)};return Object(l.jsx)("section",{className:u.a.hero,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Challenge yourself and your friends !"}),Object(l.jsx)("h3",{children:"Test your knowledge on any of the categories below"}),Object(l.jsx)("div",{className:u.a.buttons,children:["Books","Music","Film","Video Games","Computers"].map((function(e){return Object(l.jsx)("button",{value:e,onClick:t,children:e},e)}))})]})})},j=n(14),d=n.n(j),b=n.p+"static/media/showcase-main.bdb6a35e.png",O=n(25),p=n.n(O),f=function(e){return Object(l.jsx)("div",{className:"".concat(p.a.card," ").concat(e.className),children:e.children})},m=n(29).a.initializeApp({apiKey:"AIzaSyBF6xc8wsShycI2EzcHIEbXGpI4OLd0na8",authDomain:"trivera-fefdc.firebaseapp.com",projectId:"trivera-fefdc",storageBucket:"trivera-fefdc.appspot.com",messagingSenderId:"983432686883",appId:"1:983432686883:web:dd0307a8061838321f3096"}),x=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),u=i[0],h=i[1],j=Object(a.useState)(""),O=Object(o.a)(j,2),p=O[0],x=O[1],g=Object(a.useState)(""),S=Object(o.a)(g,2),v=S[0],_=S[1],w=Object(a.useState)(!0),k=Object(o.a)(w,2),z=k[0],y=k[1];return Object(l.jsxs)("section",{className:d.a.login,children:[Object(l.jsx)(f,{className:d.a["login-form"],children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)("input",{id:"email",type:"email",value:s,autoFocus:!0,required:!0,onChange:function(e){x(""),_(""),c(e.target.value)}}),Object(l.jsx)("p",{children:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{id:"password",type:"password",value:u,required:!0,onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("p",{children:v})]}),!z&&Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),m.auth().createUserWithEmailAndPassword(s,u).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":x(e.message);break;case"auth/weak-password":_(e.message);break;default:console.log("Error")}})),e.onLogin()},children:"Sign Up"}),Object(l.jsxs)("p",{children:["Already have an account ? ",Object(l.jsx)("span",{onClick:function(){return y(!0)},children:"Sign In"})," "]})]}),z&&Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),m.auth().signInWithEmailAndPassword(s,u).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/user-disabled":case"auth/user-not-found":x(e.message);break;case"auth/wrong-password":_(e.message);break;default:console.log("Error")}})),e.onLogin()},children:"Sign In"}),Object(l.jsxs)("p",{children:["Don't have an account ? ",Object(l.jsx)("span",{onClick:function(){return y(!1)},children:"Sign Up"})," "]})]})]})}),Object(l.jsxs)("div",{className:d.a.showcase,children:[Object(l.jsx)("h1",{children:"Login now to check your knowledge !"}),Object(l.jsx)("img",{src:b,alt:"Showcase"})]})]})},g=n(20),S=n.n(g),v=function(e){return Object(l.jsx)("div",{className:S.a.navbar,children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("span",{children:"Trivera"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:e.onShowHome,className:S.a["nav-link"],children:"Home"}),Object(l.jsx)("button",{onClick:function(){m.auth().signOut()},children:"Logout"})]})]})})},_=n(21),w=n.n(_),k=n(26),z=n(31),y=n(27),C=n(28),q=n(32),N=n(30),H=n(15),I=n.n(H),Q=n(22),E=n.n(Q),D=function(e){return Object(l.jsxs)("section",{className:E.a["quiz-score"],children:[Object(l.jsx)("h1",{children:"Your total score is !"}),Object(l.jsxs)("p",{className:E.a.score,children:[e.score," / 10"]}),Object(l.jsx)("i",{className:"far fa-".concat(e.emoji)})]})},L=function(e){Object(q.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={quizCategory:null,quizData:null,question:null,options:[],current:0,correct:"",chosenOption:null,correctOptionChosen:!1,startedQuiz:!1,quizEnd:!1,totalScore:0,showScore:!1,emoji:""},e.startQuizHandler=function(){if(e.state.quizData){var t=e.state.current;e.setState({question:e.state.quizData[t].question}),e.setState({startedQuiz:!0}),e.setState({correct:e.state.quizData[t].correct_answer}),e.setState({options:e.shuffleOptions([e.state.quizData[t].correct_answer].concat(Object(z.a)(e.state.quizData[t].incorrect_answers)))}),e.setState({chosenOption:null}),9!==e.state.current?e.setState({current:e.state.current+1}):9===e.state.current&&e.setState({quizEnd:!0})}else console.log("Loading....")},e.optionClickHandler=function(t){null===e.state.chosenOption&&(e.setState({chosenOption:t.target.id}),t.target.id===e.state.correct?(e.setState({correctOptionChosen:!0}),e.setState({totalScore:e.state.totalScore+1})):e.setState({correctOptionChosen:!1}))},e.checkScoreHandler=function(){e.setState({startedQuiz:!1}),e.setState({showScore:!0}),e.state.totalScore<4?e.setState({emoji:"grin-tears"}):e.state.totalScore>=7?e.setState({emoji:"grin-stars"}):e.setState({emoji:"meh"})},e.shuffleOptions=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}return e},e.stringToHtml=function(e){return(new DOMParser).parseFromString(e,"text/html").body},e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=Object(k.a)(w.a.mark((function e(){var t,n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://opentdb.com/api.php?amount=10&category=".concat(this.props.category,"&difficulty=easy&type=multiple"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,this.setState({quizData:a.results}),console.log(a);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(l.jsxs)(a.Fragment,{children:[!this.state.showScore&&Object(l.jsxs)("section",{className:I.a.quiz,children:[!this.state.startedQuiz&&Object(l.jsx)("button",{onClick:this.startQuizHandler,children:"Start"}),this.state.startedQuiz&&Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{dangerouslySetInnerHTML:{__html:this.state.question}}),Object(l.jsx)("ul",{children:this.state.options.map((function(t,n){return Object(l.jsx)("li",{id:t,onClick:e.optionClickHandler,dangerouslySetInnerHTML:{__html:t},className:"\n                                            ".concat(e.state.correctOptionChosen&&t===e.state.chosenOption?I.a.correct:"","\n                                              \n                                            ").concat(e.state.correctOptionChosen||t!==e.state.chosenOption?"":I.a.wrong,"\n                                            ")},t)}))}),this.state.quizEnd&&null!==this.state.chosenOption&&Object(l.jsx)("button",{onClick:this.checkScoreHandler,children:"Check Score"}),!this.state.quizEnd&&null!==this.state.chosenOption&&Object(l.jsx)("button",{onClick:this.startQuizHandler,children:"Next"})]})]}),this.state.showScore&&Object(l.jsx)(D,{score:this.state.totalScore,emoji:this.state.emoji})]})}}]),n}(a.Component);var M=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!0),r=Object(o.a)(c,2),i=r[0],u=r[1],j=Object(a.useState)(""),d=Object(o.a)(j,2),b=d[0],O=d[1];return Object(l.jsxs)("div",{className:"App",children:[n&&Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(v,{onShowHome:function(){u(!0)}}),i&&Object(l.jsx)(h,{onShowQuiz:function(e){switch(u(!1),e){case"Books":O("10");break;case"Music":O("12");break;case"Film":O("11");break;case"Video Games":O("15");break;case"Computers":O("18");break;default:O("10")}}}),!i&&Object(l.jsx)(L,{category:b})]}),!n&&Object(l.jsx)(x,{onLogin:function(){m.auth().onAuthStateChanged((function(e){s(e||!1)}))}})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4786c9ca.chunk.js.map