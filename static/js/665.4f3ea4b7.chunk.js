"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[665],{8665:function(t,e,r){r.r(e),r.d(e,{default:function(){return k}});var n=r(2791),o=r(9434),a=r(6907),c={ContactForm_wrapper:"ContactForm_ContactForm_wrapper__dvcE5",ContactForm_inputField:"ContactForm_ContactForm_inputField__URKoj",ContactForm_button:"ContactForm_ContactForm_button__ql2lv",ContactForm_title:"ContactForm_ContactForm_title__Czog9"},i=function(t){return t.contacts.list},l=function(t){return t.contacts.loading},s=function(t){return t.contacts.error},u=r(3634),m=r(5218),d=r(4554),f=r(1582),h=r(3509),p=r(8571),_=r(184);function v(){var t=(0,o.I0)(),e=(0,o.v9)(i),r=(0,n.useRef)(),a=(0,n.useRef)();return(0,_.jsx)("div",{className:c.wrapper,children:(0,_.jsx)(d.Z,{onSubmit:function(n){n.preventDefault();var o=r.current.value.trim(),c=a.current.value.trim();!function(t){return e.some((function(e){return e.name===t}))}(o)?t((0,u.uK)({name:o,number:c})):m.Am.error("".concat(o," is already in contacts")),r.current.value="",a.current.value=""},component:"form",autoComplete:"off",children:(0,_.jsxs)(f.Z,{direction:"column",spacing:3,children:[(0,_.jsx)(h.Z,{fullWidth:!0,required:!0,label:"Name",type:"text",name:"name",color:"primary",inputRef:r}),(0,_.jsx)(h.Z,{fullWidth:!0,required:!0,label:"Number",type:"tel",name:"number",color:"primary",inputRef:a}),(0,_.jsx)(p.Z,{variant:"contained",color:"primary",type:"submit",children:"Add contact"})]})})})}var C=function(t){var e=i(t),r=function(t){return t.filter.status}(t);return""===r?e:e.filter((function(t){return t.name.toLowerCase().includes(r.toLowerCase())}))},x="ContactList_wrapper__jUsxd";function j(){var t=(0,o.v9)(C),e=(0,o.I0)();return(0,_.jsx)("ul",{className:x,children:t.map((function(t){var r=t.id,n=t.name,o=t.number;return(0,_.jsxs)("li",{children:[n,": ",o," ",(0,_.jsx)(p.Z,{size:"small",variant:"contained",color:"primary",type:"button",onClick:function(){return t=r,void e((0,u.GK)(t));var t},children:"Delete"})]},r)}))})}var b=r(1634),F="Filter_filter__NLaK7";function y(){var t=(0,o.I0)();return(0,_.jsx)("div",{className:F,children:(0,_.jsx)(h.Z,{onChange:function(e){var r=e.target.value.toLowerCase();t((0,b.T)(r))},fullWidth:!0,id:"search-textfield",placeholder:"Search by name",type:"text",variant:"standard",color:"primary"})})}var w="Phonebook_title__rN2RT",g="Phonebook_message__IKjfm";function k(){var t=(0,o.I0)(),e=(0,o.v9)((function(t){return{loading:l(t),error:s(t),allContacts:i(t)||[],filter:t.contacts.filter}})),r=e.loading,c=e.error,m=e.allContacts,d=e.filter;(0,n.useEffect)((function(){t((0,u.yF)())}),[t]);var f=m.filter((function(t){return t&&t.name&&d&&t.name.toLowerCase().includes(d.toLowerCase())}));if(!m.length)return(0,_.jsx)("div",{className:g,children:"Loading..."});return(0,_.jsxs)(a.B6,{children:[(0,_.jsx)(a.ql,{children:(0,_.jsx)("title",{children:"Your Phonebook"})}),(0,_.jsx)("h2",{className:w,children:"Phonebook"}),(0,_.jsx)(v,{}),(0,_.jsx)("h2",{className:w,children:"Contacts"}),(0,_.jsx)(y,{}),!c&&(r?(0,_.jsx)("b",{className:g,children:"Request in progress..."}):0===f.length?(0,_.jsx)("p",{className:g,children:"The Phonebook is empty. Add your first contact."}):(0,_.jsx)(j,{contacts:f}))]})}}}]);
//# sourceMappingURL=665.4f3ea4b7.chunk.js.map