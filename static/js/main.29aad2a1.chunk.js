(this["webpackJsonpra-2.3"]=this["webpackJsonpra-2.3"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(4),i=n.n(o),a=(n(11),n(2)),r=(n(12),n(6)),l=(n(13),n(0));var u=function(e){return Object(l.jsx)("button",{className:"dropdown__btn",onClick:function(t){e.showList&&t.target.blur(),e.onToggle(e.showList)},children:"account settings"})},d=(n(15),n(5)),j=n.n(d);n(16);var b=function(e){var t=e.items.map((function(t){return Object(l.jsx)("li",{className:j()("dropdownItem",{selected:e.selected===t.value}),children:t.value},t.id)}));return Object(l.jsx)("ul",{className:"dropdownList__list",onClick:function(t){e.onSelect(t)},children:t})};var f=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(""),r=Object(a.a)(i,2),d=r[0],j=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{onToggle:function(){o(!s)},showList:s}),s&&Object(l.jsx)("div",{className:"dropdownList__container arrow_box",children:Object(l.jsx)(b,{items:e.data,onSelect:function(t){j(t.target.textContent),o(!s),e.onGetSelected(t.target.textContent)},selected:d})})]})};n(17);var O=function(e){return Object(l.jsxs)("div",{className:"selectedValue",children:["\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 : ",Object(l.jsx)("span",{className:"selected",children:e.selected})]})};var h=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],o=["profile information","change password","become PRO","help","log out"].map((function(e){return{value:e,id:Object(r.a)()}}));return Object(l.jsxs)("div",{className:"App",children:[n&&Object(l.jsx)(O,{selected:n}),Object(l.jsx)(f,{data:o,onGetSelected:function(e){s(e)}})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.29aad2a1.chunk.js.map