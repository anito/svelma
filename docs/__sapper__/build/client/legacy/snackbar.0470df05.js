import{a as n,b as t,c as e,d as s,e as r,f as o,g as a,h as c,i,l as u,z as p,r as m,C as f,D as l,E as $,o as d,j as g,m as b,n as h,p as k,s as v,t as j,k as y}from"./chunk.62c32bab.js";import{b as x,c as B}from"./chunk.891d8ac1.js";import"@babel/runtime/helpers/esm/get";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/wrapNativeSuper";import"@babel/runtime/helpers/esm/toConsumableArray";import"@babel/runtime/helpers/esm/defineProperty";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/createClass";import"@babel/runtime/helpers/esm/typeof";import{d as S,h as w}from"./chunk.3f96441b.js";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/objectSpread";import"@babel/runtime/regenerator";import"@babel/runtime/helpers/esm/asyncToGenerator";import"./chunk.fa10fa99.js";import{a as C}from"./chunk.f58c5352.js";import"./chunk.dd8150b8.js";import{a as _}from"./chunk.0f655a60.js";import{a as D}from"./chunk.d63bb7e0.js";function T(n){var t;return{c:function(){t=y("Default Snackbar")},l:function(n){t=u(n,"Default Snackbar")},m:function(n,e){m(n,t,e)},d:function(n){n&&d(t)}}}function I(n){var t;return{c:function(){t=y("Successs")},l:function(n){t=u(n,"Successs")},m:function(n,e){m(n,t,e)},d:function(n){n&&d(t)}}}function z(n){var t;return{c:function(){t=y("Top Left")},l:function(n){t=u(n,"Top Left")},m:function(n,e){m(n,t,e)},d:function(n){n&&d(t)}}}function E(n){var t;return{c:function(){t=y("Custom Background")},l:function(n){t=u(n,"Custom Background")},m:function(n,e){m(n,t,e)},d:function(n){n&&d(t)}}}function L(n){var t,e,s,r,o,a,c=new S({props:{$$slots:{default:[T]},$$scope:{ctx:n}}});c.$on("click",A);var j=new S({props:{type:"is-success",$$slots:{default:[I]},$$scope:{ctx:n}}});j.$on("click",n.click_handler);var y=new S({props:{type:"is-danger",$$slots:{default:[z]},$$scope:{ctx:n}}});y.$on("click",n.click_handler_1);var x=new S({props:{type:"is-primary",$$slots:{default:[E]},$$scope:{ctx:n}}});return x.$on("click",n.click_handler_2),{c:function(){t=g("div"),e=g("div"),c.$$.fragment.c(),s=i(),j.$$.fragment.c(),r=i(),y.$$.fragment.c(),o=i(),x.$$.fragment.c(),this.h()},l:function(n){t=b(n,"DIV",{slot:!0},!1);var a=h(t);e=b(a,"DIV",{class:!0},!1);var i=h(e);c.$$.fragment.l(i),s=u(i,"\n      "),j.$$.fragment.l(i),r=u(i,"\n      "),y.$$.fragment.l(i),o=u(i,"\n      "),x.$$.fragment.l(i),i.forEach(d),a.forEach(d),this.h()},h:function(){k(e,"class","buttons svelte-nm7qtc"),k(t,"slot","preview")},m:function(n,i){m(n,t,i),v(t,e),p(c,e,null),v(e,s),p(j,e,null),v(e,r),p(y,e,null),v(e,o),p(x,e,null),a=!0},p:function(n,t){var e={};n.$$scope&&(e.$$scope={changed:n,ctx:t}),c.$set(e);var s={};n.$$scope&&(s.$$scope={changed:n,ctx:t}),j.$set(s);var r={};n.$$scope&&(r.$$scope={changed:n,ctx:t}),y.$set(r);var o={};n.$$scope&&(o.$$scope={changed:n,ctx:t}),x.$set(o)},i:function(n){a||(f(c.$$.fragment,n),f(j.$$.fragment,n),f(y.$$.fragment,n),f(x.$$.fragment,n),a=!0)},o:function(n){l(c.$$.fragment,n),l(j.$$.fragment,n),l(y.$$.fragment,n),l(x.$$.fragment,n),a=!1},d:function(n){n&&d(t),$(c),$(j),$(y),$(x)}}}function O(n){return{c:j,l:j,m:j,p:j,i:j,o:j,d:j}}function P(n){var t,e,s,r=new C({props:{title:"Snackbar",subtitle:"Bigger than a toast, smaller than a dialog"}}),o=new _({props:{code:"<script>\n  import { Button, Snackbar } from 'svelma'\n\n  function open(props) {\n    let defaults = { message: 'I am a Snackbar' }\n    props = Object.assign(defaults, props)\n    Snackbar.create(props)\n  }\n<\/script>\n\n<Button on:click={open}>Default Snackbar</Button>\n<Button type=\"is-success\" on:click={() => open({ message: 'Success', type: 'is-success', position: 'is-bottom-left', duration: 1000 })}>Successs</Button>\n<Button type=\"is-danger\" on:click={() => open({ message: 'Danger', type: 'is-danger', actionText: 'retry', position: 'is-top-left' })}>Top Left</Button>\n<Button type=\"is-primary\" on:click={() => open({ message: 'Customized Background', background: 'has-background-grey-lighter', position: 'is-bottom'  })}>Custom Background</Button>",$$slots:{default:[O],preview:[L]},$$scope:{ctx:n}}}),a=new D({props:{jsdoc:n.jsdoc}});return{c:function(){r.$$.fragment.c(),t=i(),o.$$.fragment.c(),e=i(),a.$$.fragment.c()},l:function(n){r.$$.fragment.l(n),t=u(n,"\n\n"),o.$$.fragment.l(n),e=u(n,"\n\n\n"),a.$$.fragment.l(n)},m:function(n,c){p(r,n,c),m(n,t,c),p(o,n,c),m(n,e,c),p(a,n,c),s=!0},p:function(n,t){var e={};n.$$scope&&(e.$$scope={changed:n,ctx:t}),o.$set(e);var s={};n.jsdoc&&(s.jsdoc=t.jsdoc),a.$set(s)},i:function(n){s||(f(r.$$.fragment,n),f(o.$$.fragment,n),f(a.$$.fragment,n),s=!0)},o:function(n){l(r.$$.fragment,n),l(o.$$.fragment,n),l(a.$$.fragment,n),s=!1},d:function(n){$(r,n),n&&d(t),$(o,n),n&&d(e),$(a,n)}}}function V(){return q.apply(this,arguments)}function q(){return(q=x(B.mark(function n(){var t,e;return B.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.fetch("components/snackbar.json");case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",{jsdoc:e});case 7:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function A(n){n=Object.assign({message:"I am a Snackbar"},n),w.create(n)}function G(n,t,e){var s=t.jsdoc;return n.$set=function(n){"jsdoc"in n&&e("jsdoc",s=n.jsdoc)},{jsdoc:s,click_handler:function(){return A({message:"Success",type:"is-success",position:"is-bottom-left",duration:1e3})},click_handler_1:function(){return A({message:"Danger",type:"is-danger",actionText:"retry",position:"is-top-left"})},click_handler_2:function(){return A({message:"Customized Background",background:"has-background-grey-lighter",position:"is-bottom"})}}}export default(function(i){function u(n){var c;return t(this,u),c=e(this,s(u).call(this)),r(o(c),n,G,P,a,["jsdoc"]),c}return n(u,c),u}());export{V as preload};
//# sourceMappingURL=snackbar.0470df05.js.map
