import{c as t,d as a,b as s,A as e,B as n,x as r,l as c,u as i,s as l,y as o,h as u,v as h,e as f,J as d,f as p,g as m,i as g,m as v,K as E,q as b,k as $,_ as T,M as y,a as z}from"./chunk.9276dc34.js";import"./chunk.99f773a1.js";import"./chunk.0a41e55b.js";import{a as N}from"./chunk.4cab80ff.js";import"./chunk.e9896e24.js";import{a as k}from"./chunk.4f4e2e9a.js";function D(t,a,s){const e=Object.create(t);return e.user=a[s],e}function w(t){var a,s=!t.loading&&x(t);return{c(){s&&s.c(),a=b()},l(t){s&&s.l(t),a=b()},m(t,e){s&&s.m(t,e),c(t,a,e)},p(t,e){e.loading?s&&(s.d(1),s=null):s||((s=x(e)).c(),s.m(a.parentNode,a))},d(t){s&&s.d(t),t&&u(a)}}}function x(t){var a,s,r,i,l,o,h,E,b,$;return{c(){a=f("tr"),s=f("td"),r=f("section"),i=f("div"),l=f("p"),o=f("i"),h=e(),E=f("p"),b=d("No data"),$=e(),this.h()},l(t){a=p(t,"TR",{},!1);var e=m(a);s=p(e,"TD",{colspan:!0},!1);var c=m(s);r=p(c,"SECTION",{class:!0},!1);var f=m(r);i=p(f,"DIV",{class:!0},!1);var d=m(i);l=p(d,"P",{},!1);var g=m(l);o=p(g,"I",{class:!0},!1),m(o).forEach(u),g.forEach(u),h=n(d,"\n                    "),E=p(d,"P",{},!1);var v=m(E);b=n(v,"No data"),v.forEach(u),d.forEach(u),f.forEach(u),c.forEach(u),$=n(e,"\n            "),e.forEach(u),this.h()},h(){g(o,"class","far fa-3x fa-frown"),g(i,"class","content has-text-grey has-text-centered"),g(r,"class","section"),g(s,"colspan","5")},m(t,e){c(t,a,e),v(a,s),v(s,r),v(r,i),v(i,l),v(l,o),v(i,h),v(i,E),v(E,b),v(a,$)},d(t){t&&u(a)}}}function j(t){var a,s,r,i,l,o,h,b,$,T,y,z,N,k,D,w,x,j,U=t.titleize(t.user.name.first)+"",B=t.titleize(t.user.name.last)+"",H=t.titleize(t.user.location.city)+"",C=t.titleize(t.user.location.state)+"";return{c(){a=f("tr"),s=f("td"),r=f("figure"),i=f("img"),o=e(),h=f("td"),b=d(U),$=e(),T=f("td"),y=d(B),z=e(),N=f("td"),k=d(H),D=e(),w=f("td"),x=d(C),j=e(),this.h()},l(t){a=p(t,"TR",{},!1);var e=m(a);s=p(e,"TD",{},!1);var c=m(s);r=p(c,"FIGURE",{class:!0},!1);var l=m(r);i=p(l,"IMG",{class:!0,src:!0,alt:!0},!1),m(i).forEach(u),l.forEach(u),c.forEach(u),o=n(e,"\n            "),h=p(e,"TD",{},!1);var f=m(h);b=n(f,U),f.forEach(u),$=n(e,"\n            "),T=p(e,"TD",{},!1);var d=m(T);y=n(d,B),d.forEach(u),z=n(e,"\n            "),N=p(e,"TD",{},!1);var g=m(N);k=n(g,H),g.forEach(u),D=n(e,"\n            "),w=p(e,"TD",{},!1);var v=m(w);x=n(v,C),v.forEach(u),j=n(e,"\n          "),e.forEach(u),this.h()},h(){g(i,"class","is-rounded"),g(i,"src",l=t.user.picture.thumbnail),g(i,"alt",""),g(r,"class","image")},m(t,e){c(t,a,e),v(a,s),v(s,r),v(r,i),v(a,o),v(a,h),v(h,b),v(a,$),v(a,T),v(T,y),v(a,z),v(a,N),v(N,k),v(a,D),v(a,w),v(w,x),v(a,j)},p(t,a){t.users&&l!==(l=a.user.picture.thumbnail)&&g(i,"src",l),t.users&&U!==(U=a.titleize(a.user.name.first)+"")&&E(b,U),t.users&&B!==(B=a.titleize(a.user.name.last)+"")&&E(y,B),t.users&&H!==(H=a.titleize(a.user.location.city)+"")&&E(k,H),t.users&&C!==(C=a.titleize(a.user.location.state)+"")&&E(x,C)},d(t){t&&u(a)}}}function U(t){for(var a,s,r,i,l,o,h,E,b,z,N,k,x,U,B,H,C,I,R,L,O,F,M,S,_,A,P,G,V,q,J=t.users,K=[],Y=0;Y<J.length;Y+=1)K[Y]=j(D(t,J,Y));var Q=null;return J.length||(Q=w(t)).c(),{c(){a=f("div"),s=f("button"),r=d("Update"),i=e(),l=f("button"),o=d("No Data"),h=e(),E=f("br"),b=e(),z=f("br"),N=e(),k=f("table"),x=f("thead"),U=f("tr"),B=f("th"),H=e(),C=f("th"),I=d("First Name"),R=e(),L=f("th"),O=d("Last Name"),F=e(),M=f("th"),S=d("City"),_=e(),A=f("th"),P=d("State"),G=e(),V=f("tbody");for(var t=0;t<K.length;t+=1)K[t].c();this.h()},l(t){a=p(t,"DIV",{slot:!0},!1);var e=m(a);s=p(e,"BUTTON",{class:!0},!1);var c=m(s);r=n(c,"Update"),c.forEach(u),i=n(e,"\n    "),l=p(e,"BUTTON",{class:!0},!1);var f=m(l);o=n(f,"No Data"),f.forEach(u),h=n(e,"\n\n    "),E=p(e,"BR",{},!1),m(E).forEach(u),b=n(e,"\n    "),z=p(e,"BR",{},!1),m(z).forEach(u),N=n(e,"\n\n    "),k=p(e,"TABLE",{class:!0},!1);var d=m(k);x=p(d,"THEAD",{},!1);var g=m(x);U=p(g,"TR",{},!1);var v=m(U);B=p(v,"TH",{},!1),m(B).forEach(u),H=n(v,"\n          "),C=p(v,"TH",{},!1);var $=m(C);I=n($,"First Name"),$.forEach(u),R=n(v,"\n          "),L=p(v,"TH",{},!1);var T=m(L);O=n(T,"Last Name"),T.forEach(u),F=n(v,"\n          "),M=p(v,"TH",{},!1);var y=m(M);S=n(y,"City"),y.forEach(u),_=n(v,"\n          "),A=p(v,"TH",{},!1);var D=m(A);P=n(D,"State"),D.forEach(u),v.forEach(u),g.forEach(u),G=n(d,"\n      "),V=p(d,"TBODY",{},!1);for(var w=m(V),j=0;j<K.length;j+=1)K[j].l(w);w.forEach(u),d.forEach(u),e.forEach(u),this.h()},h(){g(s,"class","button is-primary"),g(l,"class","button is-primary"),g(k,"class","table is-fullwidth"),g(a,"slot","preview"),q=[$(s,"click",t.update),$(l,"click",t.click_handler)]},m(t,e){c(t,a,e),v(a,s),v(s,r),v(a,i),v(a,l),v(l,o),v(a,h),v(a,E),v(a,b),v(a,z),v(a,N),v(a,k),v(k,x),v(x,U),v(U,B),v(U,H),v(U,C),v(C,I),v(U,R),v(U,L),v(L,O),v(U,F),v(U,M),v(M,S),v(U,_),v(U,A),v(A,P),v(k,G),v(k,V);for(var n=0;n<K.length;n+=1)K[n].m(V,null);Q&&Q.m(V,null)},p(t,a){if(t.titleize||t.users||t.loading){J=a.users;for(var s=0;s<J.length;s+=1){const e=D(a,J,s);K[s]?K[s].p(t,e):(K[s]=j(e),K[s].c(),K[s].m(V,null))}for(;s<K.length;s+=1)K[s].d(1);K.length=J.length}!J.length&&Q?Q.p(t,a):J.length?Q&&(Q.d(1),Q=null):((Q=w(a)).c(),Q.m(V,null))},d(t){t&&u(a),T(K,t),Q&&Q.d(),y(q)}}}function B(t){return{c:z,l:z,m:z,p:z,d:z}}function H(t){var a,s,h=new N({props:{title:"Tables",subtitle:"Pretty HTML tables"}}),f=new k({props:{code:'<script>\n  let loading = false\n  let users = []\n\n  const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase())\n\n  async function update() {\n    loading = true\n\n    users = []\n    users = (await (await fetch(\'https://randomuser.me/api/?results=10\')).json()).results\n\n    loading = false\n  }\n\n  onMount(() => update())\n<\/script>\n\n<button class="button is-primary" on:click={update}>Update</button>\n<button class="button is-primary" on:click={() => users = []}>No Data</button>\n\n<br>\n<br>\n\n<table class="table is-fullwidth">\n  <thead>\n    <tr>\n      <th></th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>City</th>\n      <th>State</th>\n    </tr>\n  </thead>\n  <tbody>\n    {#each users as user}\n      <tr>\n        <td><figure class="image"><img class="is-rounded" src="{user.picture.thumbnail}" alt=""></figure></td>\n        <td>{titleize(user.name.first)}</td>\n        <td>{titleize(user.name.last)}</td>\n        <td>{titleize(user.location.city)}</td>\n        <td>{titleize(user.location.state)}</td>\n      </tr>\n    {:else}\n      {#if !loading}\n        <tr>\n          <td colspan="5">\n            <section class="section">\n              <div class="content has-text-grey has-text-centered">\n                <p><i class="far fa-3x fa-frown"></i></p>\n                <p>No data</p>\n              </div>\n            </section>\n          </td>\n        </tr>\n      {/if}\n    {/each}\n  </tbody>\n</table>',$$slots:{default:[B],preview:[U]},$$scope:{ctx:t}}});return{c(){h.$$.fragment.c(),a=e(),f.$$.fragment.c()},l(t){h.$$.fragment.l(t),a=n(t,"\n\n"),f.$$.fragment.l(t)},m(t,e){r(h,t,e),c(t,a,e),r(f,t,e),s=!0},p(t,a){var s={};(t.$$scope||t.users||t.loading)&&(s.$$scope={changed:t,ctx:a}),f.$set(s)},i(t){s||(i(h.$$.fragment,t),i(f.$$.fragment,t),s=!0)},o(t){l(h.$$.fragment,t),l(f.$$.fragment,t),s=!1},d(t){o(h,t),t&&u(a),o(f,t)}}}function C(t,a,s){let e=!1,n=[];async function r(){s("loading",e=!0),s("users",n=[]),s("users",n=(await(await fetch("https://randomuser.me/api/?results=10")).json()).results),s("loading",e=!1)}return h(()=>r()),{loading:e,users:n,titleize:t=>t.replace(/^([a-z])/,(t,a)=>a.toUpperCase()),update:r,click_handler:function(){const t=n=[];return s("users",n),t}}}export default class extends t{constructor(t){super(),a(this,t,C,H,s,[])}}
//# sourceMappingURL=table.c2ca0ef2.js.map
