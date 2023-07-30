"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[103],{2103:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(4270),a=t(9434),u=t(208),i="ContactForm_form__dhl+T",o="ContactForm_formItem__dbiTg",c="ContactForm_formInput__GszVU",s="ContactForm_formBtn__qZGY3",l=t(3329),f=function(){var e=(0,a.I0)();return(0,l.jsx)("div",{className:i,children:(0,l.jsxs)("form",{className:o,onSubmit:function(n){n.preventDefault();var t=n.target,r={name:t.elements.name.value,number:t.elements.number.value};e((0,u.uK)(r)),t.reset()},children:[(0,l.jsx)("span",{children:"Name"}),(0,l.jsx)("input",{className:c,type:"text",name:"name",placeholder:"John Doe",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("span",{children:"Number"}),(0,l.jsx)("input",{className:c,type:"tel",name:"number",placeholder:"123 456 789",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,l.jsx)("button",{className:s,children:"Add contact"})]})})},p="NOT_FOUND";var d=function(e,n){return e===n};function m(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?d:r,u=t.maxSize,i=void 0===u?1:u,o=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),s=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:p},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return p}return{get:r,put:function(n,a){r(n)===p&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function l(){var n=s.get(arguments);if(n===p){if(n=e.apply(null,arguments),o){var t=s.getEntries(),r=t.find((function(e){return o(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function h(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function v(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,i=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,l=s.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],d=h(r),m=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return u=m.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:m,dependencies:d,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return a}var _=v(m),y=_([function(e){return e.contacts.contacts},function(e){return e.filters}],(function(e,n){return""===n?e:e.filter((function(e){var t;return null!==(t=e.name.toLowerCase().includes(n.filter.toLowerCase()))&&void 0!==t?t:[]}))})),x="ContactList_list__csErn",j="ContactList_button__7kL4l",g=function(){var e=(0,a.I0)(),n=(0,a.v9)(y);return(0,l.jsx)("ul",{className:x,children:n.map((function(n){return(0,l.jsxs)("li",{children:[(0,l.jsx)("button",{className:j,type:"submit",onClick:function(){return t=n.id,e((0,u.GK)(t));var t},children:"Delete"}),n.name,": ",n.number]},n.id)}))})},b=t(1429),C="Filter_filter__vxThR",N="Filter_filterTitle__5SDqd",k="Filter_input__N7T3z",w=function(){var e=(0,a.I0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:C,children:[(0,l.jsx)("p",{className:N,children:"Search contacts"}),(0,l.jsx)("input",{className:k,name:"filter",onChange:function(n){return e((0,b.T)(n.target.value))},placeholder:"Your contact name"})]})})},F="Contacts_container__WzsIr",A="Contacts_contactsDisplay__5rs5v",z=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.q,{children:(0,l.jsx)("title",{children:"Your Contacts"})}),(0,l.jsxs)("div",{className:F,children:[(0,l.jsx)(f,{}),(0,l.jsxs)("div",{className:A,children:[(0,l.jsx)(w,{}),(0,l.jsx)(g,{})]})]})]})}}}]);
//# sourceMappingURL=103.c6d6787e.chunk.js.map