(this["webpackJsonpregistration-app"]=this["webpackJsonpregistration-app"]||[]).push([[0],{28:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var a=r(2),c=r(1),n=r.n(c),i=r(6),s=r.n(i),o=r(3);var l=function(e){var t=e.label,r=e.id,n=e.onStateChange,i=Object(o.c)(),s=Object(c.useRef)();return Object(a.jsxs)("label",{htmlFor:r,children:[Object(a.jsxs)("span",{className:"checkbox__wrapper",children:[Object(a.jsx)("input",{type:"checkbox",name:r,id:r,className:"checkbox checkbox--true form__checkbox",onClick:function(e){return i(n(s.current.checked))},ref:s}),Object(a.jsx)("span",{className:"checkbox checkbox--fake "})]}),Object(a.jsx)("span",{className:"text text--regular checkbox__text",children:t})]})},b=r(4),j=r(14);function u(e,t){for(var r=t.split("."),a=e,c=0;c<Object.keys(e).length;c+=1)for(var n=0;n<r.length;n+=1){if(Object.keys(e)[c]===r[n])return u(a[r[n]],r.slice(1,r.length).join("."));break}return a}var O=function(e){var t=e.id,r=e.values,n=e.label,i=e.onItemChange,s=Object(c.useState)(r[0]),l=Object(b.a)(s,2),u=l[0],O=l[1],d=Object(c.useRef)(),h=Object(o.c)(),m=function(e){return e.target!==d.current.children[0]||d.current.children[1].classList.contains("select__list--visible")?f():g()};Object(c.useEffect)((function(){return window.addEventListener("click",m),h(i(u)),function(){window.removeEventListener("click",m)}}));var g=function(e){d.current.children[0].classList.add("select__placeholder--opened"),d.current.children[1].classList.add("select__list--visible")},f=function(e){d.current.children[0].classList.remove("select__placeholder--opened"),d.current.children[1].classList.remove("select__list--visible")},p=function(e){O(e.target.getAttribute("data-value"))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"text text--regular input__label",children:n||"\u0421\u043f\u0438\u0441\u043e\u043a"}),Object(a.jsxs)("div",{ref:d,id:t,className:"select",children:[Object(a.jsx)("p",{className:"input form__input select__placeholder",children:u}),Object(a.jsx)("ul",{className:"select__list",children:r.map((function(e){return Object(a.jsx)("li",{onClick:p,className:"select__list-item","data-value":e,children:e},function(){var e="abcdefghijklmnopqrstuvwxyz",t="0123456789";return Object(j.a)(new Array(10)).map((function(e,t){return Math.ceil(Math.random()*t)>1?0:1})).sort((function(e){return.5-Math.random()})).map((function(r,a){return 1===r?e[Math.ceil(Math.random()*e.length-1)]:t[Math.ceil(Math.random()*t.length-1)]})).join("")}())}))})]})]})};var d=Object(o.b)((function(e){return{errors:e.errors}}))((function(e){var t=e.errors,r=e.check,n=e.text,i=e.isFluid,s=e.type,l=void 0===s?"button":s,j=Object(o.d)(),u=Object(c.useState)(!1),O=Object(b.a)(u,2),d=O[0],h=O[1];return Object(c.useEffect)((function(e){for(var a in t[r])if(!1!==j.getState().errors[r][a])return void h(!1);h(!0)})),Object(a.jsx)("button",{type:l,className:"button button--".concat(d?"blue":"disabled"," ").concat(i?"button--fluid":null),children:n})}));var h=function(e){var t=e.label,r=e.type,n=e.id,i=e.placeholder,s=e.onInputChange,l=e.selector,j=Object(o.c)(),O=Object(c.useRef)(),d=Object(o.d)(),h=Object(c.useState)(u(d.getState(),l).error),m=Object(b.a)(h,2),g=m[0],f=m[1];return Object(a.jsxs)("label",{htmlFor:n,children:[Object(a.jsx)("p",{className:"text text--regular input__label",children:t}),Object(a.jsx)("input",{type:r,name:n,id:n,placeholder:i,className:"input form__input",onBlur:function(e){j(s(O.current.value)),f(u(d.getState(),l).error)},ref:O}),Object(a.jsx)("p",{className:"text text--error input__error",children:g})]})};var m=function(e){var t=e.children,r=Object(o.d)(),n=Object(c.useRef)();return Object(a.jsx)("form",{className:"form form--registration",onSubmit:function(e){return e.preventDefault(),Object.values(r.getState().errors.registration).filter((function(e){return!0===e||null===e})).length>0||console.log(r.getState().registration),!1},ref:n,children:t})},g="SET_NAME",f="SET_EMAIL",p="SET_PHONE",x="SET_LANGUAGE",_="TOGGLE_CHECKBOX",v=function(e){return{type:g,payload:e}},N=function(e){return{type:f,payload:e}},k=function(e){return{type:p,payload:e}},y=function(e){return{type:x,payload:e}},E=function(e){return{type:_,payload:e}};function w(){return Object(a.jsx)("main",{className:"main main--registration",children:Object(a.jsxs)(m,{children:[Object(a.jsxs)("div",{className:"form__row--header",children:[Object(a.jsx)("h1",{className:"text text--header form__text form__text--header",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("p",{className:"text text--regular form__text form__text--regular",children:["\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? ",Object(a.jsx)("a",{href:"/",className:"text--link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]}),Object(a.jsx)("div",{className:"form__row",children:Object(a.jsx)(h,{id:"form-name",label:"\u0418\u043c\u044f",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f",type:"text",selector:"registration.name",onInputChange:v})}),Object(a.jsx)("div",{className:"form__row",children:Object(a.jsx)(h,{id:"form-mail",label:"Email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 email",type:"email",selector:"registration.email",onInputChange:N})}),Object(a.jsx)("div",{className:"form__row",children:Object(a.jsx)(h,{id:"form-phone",label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",placeholder:"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",type:"text",selector:"registration.phone",onInputChange:k})}),Object(a.jsx)("div",{className:"form__row",children:Object(a.jsx)(O,{id:"form-languages",values:["\u0420\u0443\u0441\u0441\u043a\u0438\u0439","\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439","\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439","\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439"],label:"\u042f\u0437\u044b\u043a",onItemChange:y})}),Object(a.jsx)("div",{className:"form__row",children:Object(a.jsx)(l,{id:"form-agreement",label:Object(a.jsxs)(a.Fragment,{children:["\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u044e ",Object(a.jsx)("a",{href:"/",className:"text--link",children:"\u0443\u0441\u043b\u043e\u0432\u0438\u044f"})," \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"]}),onStateChange:E})}),Object(a.jsx)("div",{className:"form__row",children:Object(a.jsx)(d,{text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",type:"submit",check:"registration",isFluid:!0})})]})})}var S=r(7),C=r(0),L=Object(S.b)((function(e,t){var r=t.type,a=t.payload,c=null;switch(r){case g:return c=/^[ a-zA-Z\u0430-\u044f\u0410-\u042f\u0401\u0451-\u2019]+$/,""===a?Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{name:{value:null,error:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{name:!0})})}):c.test(a)?Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{name:{value:a,error:!1}}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{name:!1})})}):Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{name:{value:null,error:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{name:!0})})});case f:return c=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/,""===a?Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{email:{value:null,error:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443"}}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{email:!0})})}):c.test(a)?Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{email:{value:a,error:!1}}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{email:!1})})}):Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{email:{value:null,error:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{email:!0})})});case p:return c=/^[+]?\d[(]?\d{3}[)]?(\d{3}[-]?\d{2}[-]?\d{2}|\d{2}[-]?\d{2}[-]?\d{3})$/,""===a?Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{phone:{value:null,error:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{phone:!0})})}):c.test(a)?Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{phone:{value:a,error:!1}}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{phone:!1})})}):Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{phone:{value:null,error:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{phone:!0})})});case x:return Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{language:a})});case _:return Object(C.a)(Object(C.a)({},e),{},{registration:Object(C.a)(Object(C.a)({},e.registration),{},{checkbox:a}),errors:Object(C.a)(Object(C.a)({},e.errors),{},{registration:Object(C.a)(Object(C.a)({},e.errors.registration),{},{checkbox:!a})})});default:return Object(C.a)({},e)}}),{registration:{name:{value:null,error:null},email:{value:null,error:null},phone:{value:null,error:null},checkbox:{value:!1,error:null},language:null},errors:{registration:{name:null,email:null,phone:null,checkbox:null}}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),I=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,30)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),a(e),c(e),n(e),i(e)}))};r(28);s.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(o.a,{store:L,children:Object(a.jsx)(w,{})})}),document.getElementById("root")),I()}},[[29,1,2]]]);
//# sourceMappingURL=main.004acb48.chunk.js.map