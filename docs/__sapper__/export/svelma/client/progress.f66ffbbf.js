import{c as r,d as n,b as e,A as s,B as t,x as a,l as o,u as i,s as c,y as p,h as f,v as l,e as u,J as m,f as g,g as $,i as h,k as d,m as v,r as y,t as b,_ as k,a as x}from"./chunk.9276dc34.js";import{g as E}from"./chunk.99f773a1.js";import"./chunk.0a41e55b.js";import{a as w}from"./chunk.4cab80ff.js";import"./chunk.e9896e24.js";import{a as j}from"./chunk.4f4e2e9a.js";function B(r,n,e){const s=Object.create(r);return s.type=n[e],s.i=e,s}function M(r){var n,e=new E({props:{type:r.type,value:r.progresses[r.i],duration:200*r.i,max:"100"}});return{c(){e.$$.fragment.c()},l(r){e.$$.fragment.l(r)},m(r,s){a(e,r,s),n=!0},p(r,n){var s={};r.types&&(s.type=n.type),r.progresses&&(s.value=n.progresses[n.i]),e.$set(s)},i(r){n||(i(e.$$.fragment,r),n=!0)},o(r){c(e.$$.fragment,r),n=!1},d(r){p(e,r)}}}function P(r){for(var n,e,l,x,w,j,P,I,R,U,A,H,O,T,D,J,N,V,_=r.types,q=[],z=0;z<_.length;z+=1)q[z]=M(B(r,_,z));const C=r=>c(q[r],1,1,()=>{q[r]=null});var F=new E({props:{max:"100"}});return{c(){n=u("div"),e=u("button"),l=m("Update"),x=s(),w=u("br"),j=s(),P=u("br"),I=s();for(var r=0;r<q.length;r+=1)q[r].c();R=s(),U=u("br"),A=s(),H=u("br"),O=s(),T=u("p"),D=m("Indeterminate (no value)"),J=s(),F.$$.fragment.c(),this.h()},l(r){n=g(r,"DIV",{slot:!0},!1);var s=$(n);e=g(s,"BUTTON",{class:!0},!1);var a=$(e);l=t(a,"Update"),a.forEach(f),x=t(s,"\n\n    "),w=g(s,"BR",{},!1),$(w).forEach(f),j=t(s,"\n    "),P=g(s,"BR",{},!1),$(P).forEach(f),I=t(s,"\n\n    ");for(var o=0;o<q.length;o+=1)q[o].l(s);R=t(s,"\n\n    "),U=g(s,"BR",{},!1),$(U).forEach(f),A=t(s,"\n    "),H=g(s,"BR",{},!1),$(H).forEach(f),O=t(s,"\n    \n    "),T=g(s,"P",{class:!0},!1);var i=$(T);D=t(i,"Indeterminate (no value)"),i.forEach(f),J=t(s,"\n    "),F.$$.fragment.l(s),s.forEach(f),this.h()},h(){h(e,"class","button is-primary"),h(T,"class","title is-5"),h(n,"slot","preview"),V=d(e,"click",r.update)},m(r,s){o(r,n,s),v(n,e),v(e,l),v(n,x),v(n,w),v(n,j),v(n,P),v(n,I);for(var t=0;t<q.length;t+=1)q[t].m(n,null);v(n,R),v(n,U),v(n,A),v(n,H),v(n,O),v(n,T),v(T,D),v(n,J),a(F,n,null),N=!0},p(r,e){if(r.types||r.progresses){_=e.types;for(var s=0;s<_.length;s+=1){const t=B(e,_,s);q[s]?(q[s].p(r,t),i(q[s],1)):(q[s]=M(t),q[s].c(),i(q[s],1),q[s].m(n,R))}for(y(),s=_.length;s<q.length;s+=1)C(s);b()}},i(r){if(!N){for(var n=0;n<_.length;n+=1)i(q[n]);i(F.$$.fragment,r),N=!0}},o(r){q=q.filter(Boolean);for(let r=0;r<q.length;r+=1)c(q[r]);c(F.$$.fragment,r),N=!1},d(r){r&&f(n),k(q,r),p(F),V()}}}function I(r){return{c:x,l:x,m:x,p:x,i:x,o:x,d:x}}function R(r){var n,e,l=new w({props:{title:"Hero",subtitle:"Hero headers"}}),u=new j({props:{code:"<script>\n  import { fade } from 'svelte/transition'\n\n  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']\n  let type = 'is-primary'\n\n  function update() {\n    types.forEach((type, i) => {\n      progresses[i] = Math.floor(Math.random() * 100)\n    })\n  }\n  \n  onMount(() => {\n    update()\n  })\n<\/script>\n\n<button class=\"button is-primary\" on:click={update}>Update</button>\n\n<br />\n<br />\n\n{#each types as type, i}\n  <Progress {type} value={progresses[i]} duration={i * 200} max=\"100\"></Progress>\n{/each}\n\n<br>\n<br>\n\n<p class=\"title is-5\">Indeterminate (no value)</p>\n<Progress max=\"100\"></Progress>",$$slots:{default:[I],preview:[P]},$$scope:{ctx:r}}});return{c(){l.$$.fragment.c(),n=s(),u.$$.fragment.c()},l(r){l.$$.fragment.l(r),n=t(r,"\n\n"),u.$$.fragment.l(r)},m(r,s){a(l,r,s),o(r,n,s),a(u,r,s),e=!0},p(r,n){var e={};(r.$$scope||r.progresses)&&(e.$$scope={changed:r,ctx:n}),u.$set(e)},i(r){e||(i(l.$$.fragment,r),i(u.$$.fragment,r),e=!0)},o(r){c(l.$$.fragment,r),c(u.$$.fragment,r),e=!1},d(r){p(l,r),r&&f(n),p(u,r)}}}function U(r,n,e){const s=["is-primary","is-success","is-danger","is-warning","is-info","is-link"],t=Array(6).fill(0);function a(){s.forEach((r,n)=>{t[n]=Math.floor(100*Math.random()),e("progresses",t)})}return l(()=>{a()}),{types:s,progresses:t,update:a}}export default class extends r{constructor(r){super(),n(this,r,U,R,e,[])}}
//# sourceMappingURL=progress.f66ffbbf.js.map
