(function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],c=0,d=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var i=r[o];0!==n[i]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},o={app:0},n={app:0},s=[];function i(e){return l.p+"js/"+({dashboard:"dashboard"}[e]||e)+"."+{dashboard:"87a80b6b"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={dashboard:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var a="css/"+({dashboard:"dashboard"}[e]||e)+"."+{dashboard:"4fa968d8"}[e]+".css",n=l.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===n))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],c=u.getAttribute("data-href");if(c===a||c===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[e],f.parentNode.removeChild(f),r(s)},f.href=n;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){o[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,r[1](d)}n[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"206d":function(e,t,r){"use strict";var a=r("4413"),o=r.n(a);o.a},4413:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],s=r("2877"),i={},l=Object(s["a"])(i,o,n,!1,null,null,null),u=l.exports,c=(r("45fc"),r("d3b7"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},["true"==e.errorLogData?r("div",{staticClass:"allert__mes"},[r("b-message",{attrs:{type:"is-danger","has-icon":"","auto-close":""}},[e._v(" Неправильный логин или пароль. Пожалуйста, попробуйте еще раз. ")])],1):e._e(),"true"==e.manyLogins?r("div",{staticClass:"allert__mes"},[r("b-message",{attrs:{type:"is-warning","has-icon":"","auto-close":""}},[e._v(" Cлишком много попыток. Попробуйте, пожалуйста, позже. ")])],1):e._e(),"true"==e.badConnection?r("div",{staticClass:"allert__mes"},[r("b-message",{attrs:{type:"is-warning","has-icon":"","auto-close":""}},[e._v(" Похоже, у вас проблемы с интрнетом. Проверьте ваше соеденение. ")])],1):e._e(),r("div",{staticClass:"form__container"},[r("div",{staticClass:"preloader"},[r("b-notification",{ref:"element",staticClass:"preloader",attrs:{closable:!1}})],1),r("h1",{staticClass:"form__title"},[e._v("Вход в систему")]),r("form",{staticClass:"form__login",attrs:{id:"loginform",novalidate:"true"},on:{submit:function(t){return t.preventDefault(),e.checkValidation(t)}}},[e.errors.length>0?r("div",{staticClass:"form__alert-validation"},[r("p",[e._v("Корректно заполните поле(я): ")]),r("ul",e._l(e.errors,(function(t,a){return r("li",{key:a,staticClass:"form__alert-list"},[e._v(e._s(t))])})),0)]):e._e(),r("b-field",[r("b-input",{attrs:{placeholder:"Введите ваш логин",type:"email","validation-message":"Некоректно введена почта",required:"",id:"login","custom-class":"form__login-field",expanded:""},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}})],1),r("b-field",[r("b-input",{attrs:{type:"password","custom-class":"form__login-field",required:"",id:"password",placeholder:"Введите ваш пароль","validation-message":"Поле пароль не может быть пустым","password-reveal":"",expanded:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("input",{staticClass:"form__login-field form__login-submit",attrs:{type:"submit",value:"Войти"}})],1)])])},f=[],g=r("59ca"),p=(r("ea7b"),{data:function(){return{password:null,login:null,errors:[],firebaseConfig:"",errorLogData:!1,manyLogins:!1,badConnection:!1}},methods:{authorization:function(){var e=this,t=this.$buefy.loading.open({container:this.$refs.element.$el});g["auth"]().setPersistence(g["auth"].Auth.Persistence.SESSION).then((function(){g["auth"]().signInWithEmailAndPassword(e.login,e.password).then((function(t){var r=g["auth"]().currentUser.providerData[0].email;e.$store.dispatch("setLoginUser",r)})).then((function(){var r=e.$route.query.redirect||"/dashboard";t.close(),e.$router.push(r)})).catch((function(t){console.log("Error:"+t.message),"There is no user record corresponding to this identifier. The user may have been deleted."==t.message||"The password is invalid or the user does not have a password."==t.message?(e.$router.go(),localStorage.errorLogData=!0):"Too many unsuccessful login attempts. Please try again later."==t.message?(e.$router.go(),localStorage.manyLogins=!0):"A network error (such as timeout, interrupted connection or unreachable host) has occurred."==t.message&&(e.$router.go(),localStorage.badConnection=!0)}))}))},checkValidation:function(e){this.login&&this.password&&this.validEmail(this.login)?this.authorization():(this.errors=[],this.login&&this.validEmail(this.login)||this.errors.push("Поле логина"),!this.password&&this.errors.push("Поле пароля"))},validEmail:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}},created:function(){g["apps"].length||(this.firebaseConfig=this.$store.getters.getfirebaseConfig,g["initializeApp"](this.firebaseConfig),this.$store.dispatch("setLoginUser",null))},mounted:function(){localStorage.errorLogData&&(this.errorLogData=localStorage.errorLogData),localStorage.manyLogins&&(this.manyLogins=localStorage.manyLogins),localStorage.manyLogins&&(this.badConnection=localStorage.badConnection),localStorage.badConnection=!1,localStorage.errorLogData=!1,localStorage.manyLogins=!1}}),h=p,m=(r("206d"),Object(s["a"])(h,d,f,!1,null,null,null)),b=m.exports,v=r("2f62"),y={state:{firebaseConfig:{apiKey:"AIzaSyBalplxH5kHQF7ItaykD8P_2DCyVyOMyaw",authDomain:"bitbon-d4747.firebaseapp.com",databaseURL:"https://bitbon-d4747.firebaseio.com",projectId:"bitbon-d4747",storageBucket:"bitbon-d4747.appspot.com",messagingSenderId:"640509602580",appId:"1:640509602580:web:b6e266cfa072cb5e8e3001"}},getters:{getfirebaseConfig:function(e){return e.firebaseConfig}}},_=r("0e44");a["a"].use(v["a"]);var w=new v["a"].Store({state:{login:null},plugins:[Object(_["a"])()],mutations:{setLoginUser:function(e,t){e.login=t}},actions:{setLoginUser:function(e,t){var r=e.commit;r("setLoginUser",t)}},getters:{getLogin:function(e){return e.login}},modules:{firebase:y}});a["a"].use(c["a"]);var C=[{path:"/",name:"Login",component:b},{path:"/dashboard",name:"Dashboard",component:function(){return r.e("dashboard").then(r.bind(null,"7277"))},meta:{requiredAuth:!0}},{path:"*",redirect:"/"}],L=new c["a"]({mode:"history",base:"/",routes:C});L.beforeEach((function(e,t,r){if(e.matched.some((function(e){return e.meta.requiredAuth}))){var a=w.getters.getLogin;null===a||void 0===a?r({name:"Login"}):r()}else r()}));var S=L,E=r("289d");r("5abe"),r("b107");a["a"].use(E["a"]),a["a"].config.productionTip=!1,new a["a"]({router:S,store:w,render:function(e){return e(u)}}).$mount("#app")},b107:function(e,t,r){}});
//# sourceMappingURL=app.e2ab32dc.js.map